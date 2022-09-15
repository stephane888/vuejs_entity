<?php

namespace Drupal\vuejs_entity\Controller;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityFieldManager;
use Drupal\block\Entity\Block;
use Drupal\lesroidelareno\Entity\DonneeSiteInternetEntity;
use Drupal\menu_link_content\Entity\MenuLinkContent;
use Drupal\system\Entity\Menu;
use Drupal\vuejs_entity\Services\DuplicateEntityReference;
use Stephane888\Debug\Utility as UtilityError;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Returns responses for vuejs entity routes.
 */
class FormEntityController extends ControllerBase {
  protected static $field_domain_access = \Drupal\domain_access\DomainAccessManagerInterface::DOMAIN_ACCESS_FIELD;
  protected static $field_source = \Drupal\domain_source\DomainSourceElementManagerInterface::DOMAIN_SOURCE_FIELD;
  protected static $field_domain_all_affiliates = 'field_domain_all_affiliates';
  protected static $field_un_use_paragrph = [
    'id',
    'revision_id',
    'langcode',
    'uuid',
    'status',
    'created',
    'type',
    'parent_id',
    'parent_type',
    'parent_field_name',
    'parent_field_name',
    'default_langcode',
    'revision_default',
    'revision_translation_affected',
    'revision_translation_affected',
    "revision_translation_affected",
    'content_translation_source',
    'content_translation_outdated',
    'content_translation_changed'
  ];
  protected $DuplicateEntityReference;

  function __construct(DuplicateEntityReference $DuplicateEntityReference) {
    $this->DuplicateEntityReference = $DuplicateEntityReference;
  }

  /**
   *
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('vuejs_entity.duplicate.entity'));
  }

  /**
   *
   * @return string[]|\Drupal\Core\StringTranslation\TranslatableMarkup[]
   */
  public function getDatas($id_entity) {
    $build['content'] = [
      '#type' => 'html_tag',
      '#tag' => 'section',
      "#attributes" => [
        'id' => 'app',
        'class' => [
          'm-5',
          'p-5'
        ]
      ]
    ];
    $build['content']['#attached']['library'][] = 'vuejs_entity/vuejs_entity';
    // $build['content']['#attached']['drupalSettings']['vuejs_entity']['language']
    // = \Drupal::languageManager()->getCurrentLanguage();
    return $build;
  }

  /**
   * Cree les nouveaux entitées et duplique les entites existant.
   *
   * @param Request $Request
   * @param string $entity_type_id
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function saveDatas(Request $Request, $entity_type_id) {
    $entity_type = $this->entityTypeManager()->getStorage($entity_type_id);
    $values = Json::decode($Request->getContent());

    if ($entity_type && !empty($values)) {
      try {
        /**
         */
        $entity = $entity_type->create($values);
        if ($entity_type_id == 'node') {
          // $this->duplicateExistantReference($entity);
          $this->DuplicateEntityReference->duplicateExistantReference($entity);
        }

        $entity->save();
        return $this->reponse($entity->toArray());
      }
      catch (\Exception $e) {
        $user = \Drupal::currentUser();
        $errors = UtilityError::errorAll($e);
        $errors[] = 'error create : ' . $entity_type_id;
        $errors[] = 'current user id : ' . $user->id();
        $this->getLogger('vuejs_entity')->critical($e->getMessage() . '<br>' . implode("<br>", $errors));
        return $this->reponse($errors, 400, $e->getMessage());
      }
    }
    else {
      $this->getLogger('vuejs_entity')->critical(" impossible de creer l'entité : " . $entity_type_id);
      return $this->reponse([], 400, "erreur inconnu");
    }
  }

  /**
   * Permet de generer une page web à partir de l'id du model fournit.
   */
  public function generatePageWebByModel(Request $Request, $id) {
    /**
     * C'est le contenu model.
     * Dans ce contenu model, seul quelques sont necessaire.
     * [ layout_paragraphs ]
     *
     * @var \Drupal\creation_site_virtuel\Entity\SiteTypeDatas $entityModel
     */
    $entityModel = $this->entityTypeManager()->getStorage("site_type_datas")->load($id);
    if ($entityModel) {
      try {
        $values = Json::decode($Request->getContent(), true);
        $values['type'] = $entityModel->getType();
        // On generate la page web.
        /**
         *
         * @var \Drupal\creation_site_virtuel\Entity\SiteInternetEntity $pageWeb
         */
        $pageWeb = $this->entityTypeManager()->getStorage("site_internet_entity")->create($values);
        $pageWeb->set('layout_paragraphs', $entityModel->get('layout_paragraphs')->getValue());
        // $this->duplicateExistantReference($pageWeb);
        $this->DuplicateEntityReference->duplicateExistantReference($pageWeb);
        $pageWeb->save();
        return $this->reponse($pageWeb->toArray());
      }
      catch (\Exception $e) {
        $errors = UtilityError::errorAll($e);
        $this->getLogger('vuejs_entity')->critical($e->getMessage() . '<br>' . implode("<br>", $errors));
        return $this->reponse($errors, 400, $e->getMessage());
      }
    }
    else {
      $this->getLogger('vuejs_entity')->critical(" Le contenu model n'existe plus : " . $id);
      return $this->reponse([], 400, "Le contenu model n'existe plus : " . $id);
    }
  }

  /**
   * Permet d'ajouter le contenu d'un paragraph dans une entité.
   */
  public function AddParagraphInEntity(Request $Request, $entity_type_id, $bundle) {
    try {
      $datas = Json::decode($Request->getContent());
      $valuesEntity = [];
      if (!empty($datas["entity"])) {
        $valuesEntity = $datas["entity"];
      }
      /**
       *
       * @var \Drupal\Core\Entity\EntityStorageInterface $entity_type
       */
      $entity_type = $this->entityTypeManager()->getStorage($entity_type_id);
      if ($bundle == $entity_type_id) {
        $entity = $entity_type->create($valuesEntity);
      }
      else {
        $valuesEntity['type'] = $bundle;
        $entity = $entity_type->create($valuesEntity);
      }
      $entity->save();
      //
      if (!empty($datas["paragraph"]))
        $valuesEntity = $datas["paragraph"];
      // On cree le paragraph
      $entity_P = $this->entityTypeManager()->getStorage('paragraph')->create($valuesEntity);
      $entity_P->save();
      // on l'ajoute à l'entité
      $entity->set('layout_paragraphs', $entity_P->id());
      $entity->save();
      return $this->reponse($entity->toArray());
    }
    catch (\Exception $e) {
      $errors = UtilityError::errorAll($e);
      $this->getLogger('vuejs_entity')->critical($e->getMessage() . '<br>' . implode("<br>", $errors));
      return $this->reponse($errors, 400, $e->getMessage());
    }
  }

  /**
   *
   * @param Request $Request
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  function AddBlockInRegion(Request $Request) {
    $themes = \Drupal::service('theme_handler')->listInfo();
    try {
      $values = Json::decode($Request->getContent());
      if (empty($themes[$values['theme']])) {
        drupal_flush_all_caches();
        return $this->reponse([
          $themes,
          system_region_list($values['theme'])
        ], 400);
      }
      /**
       *
       * @var Block $block
       */
      $block = $this->entityTypeManager()->getStorage('block')->create($values);
      // $block->set('region', $values['theme']);
      $block->save();
      return $this->reponse($block->toArray());
    }
    catch (\Exception $e) {
      $errors = UtilityError::errorAll($e);
      $this->getLogger('vuejs_entity')->critical($e->getMessage() . '<br>' . implode("<br>", $errors));
      return $this->reponse($errors, 400, $e->getMessage());
    }
  }

  function createMenuAndItems(Request $Request) {
    try {
      $datas = Json::decode($Request->getContent());
      // creation du menu
      if (!empty($datas['menu'])) {
        /**
         *
         * @var Menu $menu
         */
        $menu = $this->entityTypeManager()->getStorage('menu')->create($datas['menu']);
        $menu->save();
        $menuLinkContents = [];
        if (!empty($datas['items'])) {
          foreach ($datas['items'] as $item) {
            $item['bundle'] = [
              [
                'target_id' => $menu->id()
              ]
            ];
            $item['menu_name'] = [
              [
                'value' => $menu->id()
              ]
            ];
            /**
             *
             * @var MenuLinkContent $menuLinkContent
             */
            $menuLinkContent = $this->entityTypeManager()->getStorage('menu_link_content')->create($item);
            $menuLinkContent->save();
            $menuLinkContents[] = $menuLinkContent->toArray();
          }
        }
        $domain = $datas['domain'];
        // Create block-content for menu;
        $values = [
          'type' => [
            [
              'target_id' => "menus"
            ]
          ],
          'info' => [
            [
              'value' => $domain['field_domain_access'] . ': menu'
            ]
          ],
          'field_domain_access' => [
            [
              'target_id' => $domain['field_domain_access']
            ]
          ],
          'field_menus' => [
            [
              'target_id' => $menu->id()
            ]
          ]
        ];
        $block_content = $this->entityTypeManager()->getStorage('block_content')->create($values);
        $block_content->save();
        return $this->reponse([
          'menu' => $menu->toArray(),
          'items' => $menuLinkContents,
          'block_content' => $block_content->toArray()
        ]);
      }
      else
        throw new \ErrorException('Menu non definit');
    }
    catch (\Exception $e) {
      $this->getLogger('vuejs_entity')->critical(UtilityError::errorAllToString($e));
      return $this->reponse(UtilityError::errorAll($e), 400, $e->getMessage());
    }
  }

  /**
   * pour plus d'info.
   * https://stackoverflow.com/questions/40514051/using-preg-replace-to-convert-camelcase-to-snake-case
   *
   * @param integer $domain_ovh_entity_id
   */
  public function saveDomainByOvhEntity($domain_ovh_entity_id) {
    /** @var \Drupal\ovh_api_rest\Entity\DomainOvhEntity $domain_ovh_entity */
    $domain_ovh_entity = $this->entityTypeManager()->getStorage('domain_ovh_entity')->load($domain_ovh_entity_id);
    if ($domain_ovh_entity) {
      try {
        $sub_domain = $domain_ovh_entity->getsubDomain() . '.' . $domain_ovh_entity->getZoneName();
        $domain = \Drupal\vuejs_entity\VuejsEntity::createDomainFromData($sub_domain);
        return $this->reponse($domain->toArray());
        // $textConvert = new Convert($sub_domain);
        // $domain_id = $textConvert->toSnake();
        // $domain_id = str_replace('.', '_', $domain_id);
        // $domainEntity =
        // $this->entityTypeManager()->getStorage('domain')->load($domain_id);
        // if (empty($domainEntity)) {
        // /**
        // *
        // * @var \Drupal\domain\Entity\Domain $domain
        // */
        // $domain =
        // \Drupal\vuejs_entity\VuejsEntity::createDomainFromData($sub_domain);

        // // $domain =
        // // $this->entityTypeManager()->getStorage('domain')->create();
        // // $domain->set('name', $sub_domain);
        // // $domain->set('hostname', $sub_domain);
        // // $domain->set('id', $domain_id);
        // // $domain->set('scheme', 'http');
        // // $domain->save();
        // // On met à jour le champs domain_id_drupal
        // // if ($domain->id()) {
        // // $domain_ovh_entity->setDomainIdDrupal($domain->id());
        // // $domain_ovh_entity->save();
        // // // Pour essayer de comprendre pouquoi on a pas la MAJ.
        // // $this->getLogger('vuejs_entity')->info('domain_ovh_entity MAJ : '
        // .
        // // $domain_ovh_entity->id() . ' : ' . $domain->id());
        // // }
        // // else
        // // $this->getLogger('vuejs_entity')->info('domain_ovh_entity Error :
        // '
        // // . $domain_ovh_entity->id() . ' : ' . $domain->id());

        // }
        // else {
        // return $this->reponse($domainEntity->toArray());
        // }
      }
      catch (\Exception $e) {
        $errors = UtilityError::errorAll($e);
        $errors[] = "domain_ovh_entity_id : " . $domain_ovh_entity_id;
        $this->getLogger('vuejs_entity')->critical(" domain_ovh_entity_id : " . $domain_ovh_entity_id . ' <br> ' . UtilityError::errorAllToString($e));
        return $this->reponse($errors, 400, $e->getMessage());
      }
    }
    $this->getLogger('vuejs_entity')->critical(" Le domaine n'est pas encore enregistrer en tant qu'entité drupal ");
    return $this->reponse([], 400, " Le domaine n'est pas encore enregistrer en tant qu'entité drupal ");
  }

  /**
   * Builds the response.
   * REcupere les champs pour un entité
   */
  public function getForm(Request $Request, $entity_type_id, $view_mode, $bundle = null) {
    //
    $EntityStorage = $this->entityTypeManager()->getStorage($entity_type_id);
    /**
     *
     * @var DonneeSiteInternetEntity $entity
     */
    if ($bundle)
      $entity = $EntityStorage->create([
        'type' => $bundle
      ]);
    else
      $entity = $EntityStorage->create();
    $fields = $entity->toArray();

    /**
     *
     * @var EntityFieldManager $entityManager
     */
    $entityManager = \Drupal::service('entity_field.manager');
    $Allfields = $entityManager->getFieldDefinitions($entity_type_id, $bundle);

    /**
     * ( NB )
     *
     * @var \Drupal\Core\Entity\Entity\EntityFormDisplay $entity_form_view
     */
    $entity_form_view = $this->entityTypeManager()->getStorage('entity_form_display')->load($entity_type_id . '.' . $entity_type_id . '.default');
    if (!$entity_form_view) {
      $entity_form_view = $this->entityTypeManager()->getStorage('entity_form_display')->create([
        'bundle' => $bundle ? $bundle : $entity_type_id,
        'targetEntityType' => $entity_type_id
      ]);
    }
    $fieldsEntityForm = $entity_form_view->toArray();

    $form = [];
    foreach ($fields as $k => $value) {
      if (!empty($Allfields[$k])) {
        $field = $Allfields[$k];
        $form[$k] = [
          'type' => $field->getType(),
          'label' => $field->getLabel(),
          'description' => $field->getDescription(),
          'settings' => $field->getSettings(),
          'cardinality' => 1,
          'name' => $field->getName()
        ];
        if (method_exists($field, 'getFieldStorageDefinition')) {
          $form[$k]['cardinality'] = $field->getFieldStorageDefinition()->getCardinality();
          $form[$k]['constraints'] = $field->getFieldStorageDefinition()->getConstraints();
        }
        // Pour la creation des paragraphs, on veut juste les champs important.
        if ($entity_type_id == 'paragraph') {
          if (in_array($k, self::$field_un_use_paragrph)) {
            unset($form[$k]);
            continue;
          }
        }
        //
        if (!empty($fieldsEntityForm['content'][$k]['settings'])) {
          $form[$k]['entity_form_settings'] = $this->translateConfigField($fieldsEntityForm['content'][$k]['settings']);
          $form[$k]['entity_form_type'] = $fieldsEntityForm['content'][$k]['type'];
          $form[$k]['entity_form'] = $fieldsEntityForm['content'][$k];
        }
        // on recupere les pages de maniere dynamique.
        if ($entity_type_id == 'donnee_internet_entity' && $k == 'pages') {
          // id de page qui seront crées par defaut.
          // $defaultPages = [
          // '3' => 3,
          // '4' => 4,
          // '5' => 5,
          // '16' => 16
          // ];
          $defaultPages = [];
          // id de page qui seront crées par defaut pour e-commerce.
          // $defaultPagesProduct = [
          // '18' => 18,
          // '19' => 19,
          // '22' => 22
          // ];
          /**
           *
           * @deprecated $defaultPagesProduct
           */
          $defaultPagesProduct = [];
          // site ecommerce.( on determine les types e-commerce via l'id du
          // champs "terms").
          // $typeSiteEcommerce = [
          // 18,
          // 7
          // ];
          $typeSiteEcommerce = [];
          //
          $param = Json::decode($Request->getContent());
          $categorie_id = null;
          $type = null;
          //
          if (!empty($param['homepage'])) {
            /**
             *
             * @var \Drupal\creation_site_virtuel\Entity\SiteTypeDatas $model
             */
            $model = $this->entityTypeManager()->getStorage('site_type_datas')->load($param['homepage']);
            $categorie_id = $model->getCategorie();
            $type = $model->getType();
            $pageSub = $model->getPageSupplementaireIds();
            $defaultPages += $pageSub;
            $defaultPagesProduct += $pageSub;
          }
          /**
           * Permet de charger les pages qui ont le meme taxonomies.
           *
           * @var \Drupal\Core\Entity\Query\QueryInterface $query
           */
          $query = $this->entityTypeManager()->getStorage('site_type_datas')->getQuery();
          $query->condition('is_home_page', 0);
          $query->condition('status', true);
          if ($categorie_id) {
            $query->condition('terms', $categorie_id);
          }
          else {
            $query->range(0, 4);
          }
          // permet de filtrer en function du type (ecommerce, rc-web ...), mais
          // ne semble pas vraiment necessaire. (On verra avec le temps).
          if ($type) {
            $query->condition('site_internet_entity_type', $type);
          }
          $ids = $query->execute();
          // on ajoute les pages par defaut pour les types e-commerce.
          if (in_array($categorie_id, $typeSiteEcommerce)) {
            foreach ($defaultPagesProduct as $id) {
              $fields[$k][] = [
                'value' => $id
              ];
            }
            // on ajoute ces ids dans les propositions afin d'obtenir les infos
            // des pages (titre utiliser par le menu).
            $ids += $defaultPagesProduct;
          }
          else {
            // Page par defaut pour un site non e-commerce.
            foreach ($defaultPages as $id) {
              $fields[$k][] = [
                'value' => $id
              ];
            }
            // on ajoute ces ids dans les propositions afin d'obtenir les infos
            // des pages (titre utiliser par le menu).
            $ids += $defaultPages;
          }
          if ($ids) {
            $entities = $this->entityTypeManager()->getStorage('site_type_datas')->loadMultiple($ids);
            $pages = [];
            foreach ($entities as $entity) {
              /**
               *
               * @var \Drupal\creation_site_virtuel\Entity\SiteTypeDatas $entity
               */
              $pages[] = [
                'label' => $entity->getName(),
                'image' => [
                  $entity->getFirstImage()
                ],
                'value' => $entity->id(),
                'description' => [
                  'value' => $entity->get('description')->value
                ]
              ];
            }
            $form[$k]['entity_form_settings']['list_options'] = $pages;
          }
        }
      }
      else {
        unset($fields[$k]);
      }
    }
    // on recupere les champs annexe:
    if ($entity_type_id == 'donnee_internet_entity') {
      $title = $this->t("Let's bring your ideas to life");
      $descp = $this->t("Answer a few questions and get the best tools for your creations");
      $form['html_1'] = [
        'type' => 'render_html',
        'content' => '<div class="step-donneesite--header with-tablet mx-auto text-center" data-drupal-selector="edit-ctm-description"><h2 class="step-donneesite--title" data-drupal-selector="edit-0">' . $title . '</h2>
<p class="step-donneesite--label" data-drupal-selector="edit-1"> ' . $descp . ' </p>
</div>'
      ];
    }
    return $this->reponse([
      'form' => $form,
      'model' => $fields
    ]);
  }

  /**
   *
   * @param array $settings
   * @return \Drupal\Core\StringTranslation\TranslatableMarkup
   */
  protected function translateConfigField(array $settings) {
    if (!empty($settings['list_options']))
      foreach ($settings['list_options'] as $k => $val) {
        $settings['list_options'][$k]['label'] = $this->t($val['label']);
        if (!empty($val['description']['value']))
          $settings['list_options'][$k]['description']['value'] = $this->t($val['description']['value']);
      }
    return $settings;
  }

  /**
   *
   * @param Array|string $configs
   * @param number $code
   * @param string $message
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  protected function reponse($configs, $code = null, $message = null) {
    if (!is_string($configs))
      $configs = Json::encode($configs);
    $reponse = new JsonResponse();
    if ($code)
      $reponse->setStatusCode($code, $message);
    $reponse->setContent($configs);
    return $reponse;
  }

  protected function load__entity_form_display() {
    return $this->entityTypeManager()->getStorage('entity_view_display')->loadMultiple();
  }

}