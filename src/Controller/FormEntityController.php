<?php

namespace Drupal\vuejs_entity\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Entity\EntityFormInterface;
use Symfony\Component\Serializer\Serializer;
use Drupal\Core\Entity\EntityFieldManager;
use Symfony\Component\HttpFoundation\Request;
use Drupal\lesroidelareno\Entity\DonneeSiteInternetEntity;
use Jawira\CaseConverter\Convert;
use Stephane888\Debug\Utility as UtilityError;
use Drupal\node\Entity\Node;
use Drupal\block_content\Entity\BlockContent;
use Drupal\commerce_product\Entity\Product;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\system\Entity\Menu;
use Drupal\menu_link_content\Entity\MenuLinkContent;
use Drupal\block\Entity\Block;

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
          $this->duplicateExistantReference($entity);
        }
        
        $entity->save();
        return $this->reponse($entity->toArray());
      }
      catch (\Exception $e) {
        $user = \Drupal::currentUser();
        $errors = UtilityError::errorAll($e);
        $errors[] = 'error create : ' . $entity_type_id;
        $errors[] = 'current user id : ' . $user->id();
        $this->loggerFactory->get('vuejs_entity')->critical($e->getMessage() . '<br>' . implode("<br>", $errors));
        return $this->reponse($errors, 400, $e->getMessage());
      }
    }
    else {
      $this->loggerFactory->get('vuejs_entity')->critical(" impossible de creer l'entité : " . $entity_type_id);
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
        $this->duplicateExistantReference($pageWeb);
        $pageWeb->save();
        return $this->reponse($pageWeb->toArray());
      }
      catch (\Exception $e) {
        $errors = UtilityError::errorAll($e);
        $this->loggerFactory->get('vuejs_entity')->critical($e->getMessage() . '<br>' . implode("<br>", $errors));
        return $this->reponse($errors, 400, $e->getMessage());
      }
    }
    else {
      $this->loggerFactory->get('vuejs_entity')->critical(" Le contenu model n'existe plus : " . $id);
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
      $this->loggerFactory->get('vuejs_entity')->critical($e->getMessage() . '<br>' . implode("<br>", $errors));
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
      $this->loggerFactory->get('vuejs_entity')->critical($e->getMessage() . '<br>' . implode("<br>", $errors));
      return $this->reponse($errors, 400, $e->getMessage());
    }
  }
  
  /**
   * Duplique les entites existante et changent de domain.
   * Fonctionne uniquement sur les nodes.
   */
  protected function duplicateExistantReference(\Drupal\Core\Entity\ContentEntityBase &$entity) {
    $uid = \Drupal::currentUser()->id();
    if (method_exists($entity, 'setCreatedTime'))
      $entity->setCreatedTime(time());
    if (method_exists($entity, 'setChangedTime'))
      $entity->setChangedTime(time());
    if (method_exists($entity, 'setOwnerId'))
      $entity->setOwnerId($uid);
    if (method_exists($entity, 'setPublished'))
      $entity->setPublished();
    // On desactive la disponibilité du contenu sur tous les domaines.
    if ($entity->hasField(self::$field_domain_all_affiliates)) {
      $entity->set(self::$field_domain_all_affiliates, false);
    }
    $values = $entity->toArray();
    foreach ($values as $k => $vals) {
      if (!empty($vals[0]['target_id'])) {
        $setings = $entity->get($k)->getSettings();
        // Duplication des paragraph
        if (!empty($setings['target_type']) && $setings['target_type'] == 'paragraph') {
          $NewParagraphIds = [];
          foreach ($vals as $value) {
            $Paragraph = Paragraph::load($value['target_id']);
            if ($Paragraph) {
              $CloneParagraph = $Paragraph->createDuplicate();
              if ($CloneParagraph->hasField(self::$field_domain_access)) {
                $CloneParagraph->set(self::$field_domain_access, $entity->get(self::$field_domain_access)->getValue());
              }
              // On verifie pour les sous entites.
              $this->duplicateExistantReference($CloneParagraph);
              $CloneParagraph->save();
              $NewParagraphIds[] = [
                'target_id' => $CloneParagraph->id()
              ];
            }
          }
          $entity->set($k, $NewParagraphIds);
        }
        // Duplication des sous nodes.
        elseif (!empty($setings['target_type']) && $setings['target_type'] == 'node') {
          $newNodesIds = [];
          foreach ($vals as $value) {
            $node = Node::load($value['target_id']);
            if ($node) {
              $cloneNode = $node->createDuplicate();
              // On ajoute le champs field_domain_access; ci-possible.
              if ($cloneNode->hasField(self::$field_domain_access)) {
                $cloneNode->set(self::$field_domain_access, $entity->get(self::$field_domain_access)->getValue());
              }
              // On verifie pour les sous entites.
              $this->duplicateExistantReference($cloneNode);
              //
              $cloneNode->save();
              $newNodesIds[] = [
                'target_id' => $cloneNode->id()
              ];
            }
          }
          //
          $entity->set($k, $newNodesIds);
        }
        // Duplication des sous blocs.
        elseif (!empty($setings['target_type']) && $setings['target_type'] == 'block_content') {
          $newBlockIds = [];
          foreach ($vals as $value) {
            $BlockContent = BlockContent::load($value['target_id']);
            if ($BlockContent) {
              $CloneBlockContent = $BlockContent->createDuplicate();
              // On ajoute le champs field_domain_access; ci-possible.
              if ($CloneBlockContent->hasField(self::$field_domain_access)) {
                $dmn = $entity->get(self::$field_domain_access)->first()->getValue();
                if ($dmn)
                  $CloneBlockContent->get(self::$field_domain_access)->setValue($dmn);
              }
              // On ajoute l'utilisateur courant:
              if ($CloneBlockContent->hasField('user_id') && $uid) {
                $CloneBlockContent->set('user_id', $uid);
              }
              // On met jour la date de MAJ
              if ($CloneBlockContent->hasField('changed')) {
                $CloneBlockContent->set('changed', time());
              }
              //
              // On met à jour le champs info (car sa valeur doit etre unique).
              if ($CloneBlockContent->hasField("info")) {
                $val = $CloneBlockContent->get('info')->first()->getValue();
                $dmn = $entity->get(self::$field_domain_access)->first()->getValue();
                $dmn = empty($dmn['target_id']) ? 'domaine.test' : $dmn['target_id'];
                $val = $dmn . ' : ' . $CloneBlockContent->get('type')->target_id;
                $CloneBlockContent->get('info')->setValue([
                  'value' => $val . ' : ' . count($newBlockIds)
                ]);
              }
              //
              $CloneBlockContent->save();
              $newBlockIds[] = [
                'target_id' => $CloneBlockContent->id()
              ];
            }
          }
          $entity->set($k, $newBlockIds);
        }
        // Dupliquer les produits.
        elseif (!empty($setings['target_type']) && $setings['target_type'] == 'commerce_product') {
          $newProducts = [];
          foreach ($vals as $value) {
            $Product = Product::load($value['target_id']);
            if ($Product) {
              $CloneProduct = $Product->createDuplicate();
              // On ajoute le champs field_domain_access; ci-possible.
              // if ($CloneProduct->hasField(self::$field_domain_access)) {
              $dmn = $entity->get(self::$field_domain_access)->first()->getValue();
              $dmn = empty($dmn['target_id']) ? null : $dmn['target_id'];
              if ($dmn)
                $CloneProduct->set(self::$field_domain_access, $dmn);
              // }
              // On met jour la date de MAJ
              $CloneProduct->setCreatedTime(time());
              $CloneProduct->setChangedTime(time());
              $CloneProduct->setOwnerId($uid);
              //
              $CloneProduct->save();
              $newProducts[] = [
                'target_id' => $CloneProduct->id()
              ];
            }
          }
          $entity->set($k, $newProducts);
        }
      }
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
      $errors = UtilityError::errorAll($e);
      $this->loggerFactory->get('vuejs_entity')->critical($e->getMessage() . '<br>' . implode("<br>", $errors));
      return $this->reponse($errors, 400, $e->getMessage());
    }
  }
  
  /**
   * pour plus d'info.
   * https://stackoverflow.com/questions/40514051/using-preg-replace-to-convert-camelcase-to-snake-case
   *
   * @param integer $domain_ovh_entity_id
   */
  public function saveDomainByOvhEntity($domain_ovh_entity_id) {
    $domain_ovh_entity = $this->entityTypeManager()->getStorage('domain_ovh_entity')->load($domain_ovh_entity_id);
    if ($domain_ovh_entity) {
      try {
        $sub_domain = $domain_ovh_entity->getsubDomain() . '.' . $domain_ovh_entity->getZoneName();
        /**
         *
         * @var \Drupal\domain\Entity\Domain $domain
         */
        $domain = $this->entityTypeManager()->getStorage('domain')->create();
        $textConvert = new Convert($sub_domain);
        $domain_id = $textConvert->toSnake();
        $domain_id = str_replace('.', '_', $domain_id);
        $domain->set('name', $sub_domain);
        $domain->set('hostname', $sub_domain);
        $domain->set('id', $domain_id);
        $domain->set('scheme', 'http');
        $domain->save();
        return $this->reponse($domain->toArray());
      }
      catch (\Exception $e) {
        $errors = UtilityError::errorAll($e);
        $errors[] = "domain_ovh_entity_id : " . $domain_ovh_entity_id;
        $this->loggerFactory->get('vuejs_entity')->critical($e->getMessage() . '<br>' . implode("<br>", $errors));
        return $this->reponse([], 400, $e->getMessage());
      }
    }
    $this->loggerFactory->get('vuejs_entity')->critical(" Le domaine n'est pas encore enregistrer en tant qu'entité drupal ");
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
          //
          $param = Json::decode($Request->getContent());
          $categorie_id = null;
          $type = null;
          if (!empty($param['homepage'])) {
            /**
             *
             * @var \Drupal\creation_site_virtuel\Entity\SiteTypeDatas $model
             */
            $model = $this->entityTypeManager()->getStorage('site_type_datas')->load($param['homepage']);
            $categorie_id = $model->getCategorie();
            $type = $model->getType();
          }
          //
          $query = $this->entityTypeManager()->getStorage('site_type_datas')->getQuery();
          $query->condition('is_home_page', 0);
          $query->condition('status', true);
          if ($categorie_id) {
            $query->condition('terms', $categorie_id);
          }
          else {
            $query->range(0, 4);
          }
          if ($type) {
            $query->condition('site_internet_entity_type', $type);
          }
          $ids = $query->execute();
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
      $descp = $this->t('Answer a few questions and get the best tools for your creations');
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
   * @param array|string $configs
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
