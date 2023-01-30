<?php

namespace Drupal\vuejs_entity\Controller;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityFieldManager;
use Drupal\block\Entity\Block;
use Drupal\menu_link_content\Entity\MenuLinkContent;
use Drupal\system\Entity\Menu;
use Drupal\vuejs_entity\Services\DuplicateEntityReference;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Stephane888\DrupalUtility\HttpResponse;
use Stephane888\Debug\ExceptionDebug;
use Stephane888\Debug\ExceptionExtractMessage;

class FormEntityController extends ControllerBase {
  protected static $field_domain_access = \Drupal\domain_access\DomainAccessManagerInterface::DOMAIN_ACCESS_FIELD;
  protected static $field_source = \Drupal\domain_source\DomainSourceElementManagerInterface::DOMAIN_SOURCE_FIELD;
  protected static $field_domain_all_affiliates = 'field_domain_all_affiliates';
  /**
   *
   * @var array
   */
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
   * @var DuplicateEntityReference
   */
  protected $DuplicateEntityReference;
  
  /**
   *
   * @param DuplicateEntityReference $DuplicateEntityReference
   */
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
    return $build;
  }
  
  /**
   * Cree les nouveaux entitées et duplique les entites existantes.
   *
   * @param Request $Request
   * @param string $entity_type_id
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function saveDatas(Request $Request, $entity_type_id) {
    $entity_type = $this->entityTypeManager()->getStorage($entity_type_id);
    $values = Json::decode($Request->getContent());
    //
    if ($entity_type && !empty($values)) {
      try {
        /**
         */
        $entity = $entity_type->create($values);
        if ($entity_type_id == 'node') {
          // $this->DuplicateEntityReference->duplicateExistantReference($entity);
        }
        
        $entity->save();
        return HttpResponse::response($entity->toArray());
      }
      catch (\Exception $e) {
        $user = \Drupal::currentUser();
        $errors = ExceptionExtractMessage::errorAllToString($e);
        $errors .= '<br> error create : ' . $entity_type_id;
        $errors .= '<br> current user id : ' . $user->id();
        $this->getLogger('vuejs_entity')->critical($e->getMessage() . '<br>' . $errors);
        return HttpResponse::response(ExceptionExtractMessage::errorAll($e), 400, $e->getMessage());
      }
    }
    else {
      $this->getLogger('vuejs_entity')->critical(" impossible de creer l'entité : " . $entity_type_id);
      return HttpResponse::response([], 400, "erreur inconnu");
    }
  }
  
  /**
   *
   * @param Request $Request
   * @param string $entity_type_id
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function saveEntityDuplicateRef(Request $Request, $entity_type_id) {
    $entity_type = $this->entityTypeManager()->getStorage($entity_type_id);
    $values = Json::decode($Request->getContent());
    //
    if ($entity_type && !empty($values)) {
      try {
        /**
         */
        $entity = $entity_type->create($values);
        // $this->DuplicateEntityReference->duplicateExistantReference($entity);
        
        $entity->save();
        return HttpResponse::response($entity->toArray());
      }
      catch (\Exception $e) {
        $user = \Drupal::currentUser();
        $errors = ExceptionExtractMessage::errorAllToString($e);
        $errors .= '<br> error create : ' . $entity_type_id;
        $errors .= '<br> current user id : ' . $user->id();
        $this->getLogger('vuejs_entity')->critical($e->getMessage() . '<br>' . $errors);
        return HttpResponse::response(ExceptionExtractMessage::errorAll($e), 400, $e->getMessage());
      }
    }
    else {
      $this->getLogger('vuejs_entity')->critical(" impossible de creer l'entité : " . $entity_type_id);
      return HttpResponse::response([], 400, "erreur inconnu");
    }
  }
  
  /**
   * Permet de generer la matrice permettant de creer une entité et ses sous
   * entitées de maniere efficace.
   */
  public function generatePageWebByModel(Request $Request, $id) {
    /**
     * C'est le contenu model.
     * Dans ce contenu model, seul quelques champs sont necessaire.
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
        
        $entities = [];
        $this->DuplicateEntityReference->duplicateExistantReference($pageWeb, $entities);
        // $pageWeb->save();
        $datasJson[] = [
          'entity' => $pageWeb->toArray(),
          'entities' => $entities,
          'target_type' => "site_internet_entity"
        ];
        return HttpResponse::response($datasJson, 200, 'test');
      }
      catch (\Exception $e) {
        $errors = ExceptionExtractMessage::errorAllToString($e);
        $this->getLogger('vuejs_entity')->critical($e->getMessage() . '<br>' . $errors);
        return HttpResponse::response(ExceptionExtractMessage::errorAll($e), 400, $e->getMessage());
      }
    }
    else {
      $this->getLogger('vuejs_entity')->critical(" Le contenu model n'existe plus : " . $id);
      return HttpResponse::response([], 400, " Le contenu model n'existe plus : " . $id);
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
      // On l'ajoute à l'entité.
      $entity->set('layout_paragraphs', $entity_P->id());
      $entity->save();
      return HttpResponse::response($entity->toArray());
    }
    catch (\Exception $e) {
      $errors = ExceptionExtractMessage::errorAllToString($e);
      $this->getLogger('vuejs_entity')->critical($e->getMessage() . '<br>' . $errors);
      return HttpResponse::response(ExceptionExtractMessage::errorAll($e), 400, $e->getMessage());
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
        \Drupal\vuejs_entity\VuejsEntity::rebuildThemeInfo();
        // drupal_flush_all_caches();
        $themes = \Drupal::service('theme_handler')->listInfo();
        sleep(5);
        if (empty($themes[$values['theme']])) {
          $this->getLogger('vuejs_entity')->critical(" Le theme n'existe toujours pas ... ");
        }
      }
      
      // Les id des blocks doivent etre maj afin d'avoir des id unique.
      $id = mb_substr($values['id'], 0, 10, 'UTF-8');
      $values['id'] = $id . uniqid();
      $values['settings']['id'] = $values['id'];
      /**
       *
       * @var Block $block
       */
      $block = $this->entityTypeManager()->getStorage('block')->create($values);
      // $block->set('region', $values['theme']);
      $block->save();
      return HttpResponse::response($block->toArray());
    }
    catch (\Exception $e) {
      $errors = ExceptionExtractMessage::errorAllToString($e);
      $this->getLogger('vuejs_entity')->critical($e->getMessage() . '<br>' . $errors);
      return HttpResponse::response(ExceptionExtractMessage::errorAll($e), 400, $e->getMessage());
    }
  }
  
  /**
   *
   * @param Request $Request
   * @throws \ErrorException
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  function createMenuAndItems(Request $Request) {
    try {
      $datas = Json::decode($Request->getContent());
      // Creation du menu
      if (!empty($datas['menu'])) {
        // Les id des blocks doivent etre maj afin d'avoir des id unique.
        // $id = mb_substr($datas['menu']['id'], 0, 10, 'UTF-8');
        // $datas['menu']['id'] = $id . uniqid();
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
        return HttpResponse::response([
          'menu' => $menu->toArray(),
          'items' => $menuLinkContents
          // 'block_content' => $block_content->toArray()
        ]);
      }
      else
        throw new \ErrorException('Menu non definit');
    }
    catch (\Exception $e) {
      $this->getLogger('vuejs_entity')->critical(ExceptionExtractMessage::errorAllToString($e));
      return HttpResponse::response(ExceptionExtractMessage::errorAll($e), 400, $e->getMessage());
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
        $domaineHost = $domain_ovh_entity->getsubDomain() . '.' . $domain_ovh_entity->getZoneName();
        $domain = \Drupal\vuejs_entity\VuejsEntity::createDomainFromData($domaineHost);
        $datas = [
          'domain_ovh_entity' => $domain_ovh_entity->toArray(),
          'domain' => $domain->toArray()
        ];
        //
        return HttpResponse::response($datas);
      }
      catch (\Exception $e) {
        $errors = ExceptionExtractMessage::errorAll($e);
        $errors[] = "domain_ovh_entity_id : " . $domain_ovh_entity_id;
        $this->getLogger('vuejs_entity')->critical(" domain_ovh_entity_id : " . $domain_ovh_entity_id . ' <br> ' . ExceptionExtractMessage::errorAllToString($e));
        return HttpResponse::response($errors, 400, $e->getMessage());
      }
    }
    $this->getLogger('vuejs_entity')->critical(" Le domaine n'est pas encore enregistrer en tant qu'entité drupal ");
    return HttpResponse::response([], 400, " Le domaine n'est pas encore enregistrer en tant qu'entité drupal ");
  }
  
  /**
   * Builds the response.
   * Recupere les champs pour un entité.
   */
  public function getForm(Request $Request, $entity_type_id, $view_mode = 'default', $bundle = null, $entity = null) {
    $EntityStorage = $this->entityTypeManager()->getStorage($entity_type_id);
    if (!$entity) {
      if ($bundle && $bundle != $entity_type_id)
        $entity = $EntityStorage->create([
          'type' => $bundle
        ]);
      else {
        $bundle = $entity_type_id;
        $entity = $EntityStorage->create();
      }
    }
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
    $entity_form_view = $this->entityTypeManager()->getStorage('entity_form_display')->load($entity_type_id . '.' . $bundle . '.' . $view_mode);
    if (!$entity_form_view) {
      $entity_form_view = $this->entityTypeManager()->getStorage('entity_form_display')->create([
        'bundle' => $bundle,
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
          $defaultPages = [];
          //
          $param = Json::decode($Request->getContent());
          $categorie_ids = null;
          // $type = null;
          //
          if (!empty($param['homepage'])) {
            /**
             *
             * @var \Drupal\creation_site_virtuel\Entity\SiteTypeDatas $model
             */
            $model = $this->entityTypeManager()->getStorage('site_type_datas')->load($param['homepage']);
            $categorie_ids = $model->getCategories();
            // $type = $model->getType();
            $pageSub = $model->getPageSupplementaireIds();
            $defaultPages += $pageSub;
          }
          /**
           * Permet de charger les pages qui ont le meme taxonomies.
           *
           * @var \Drupal\Core\Entity\Query\QueryInterface $query
           */
          $query = $this->entityTypeManager()->getStorage('site_type_datas')->getQuery();
          $query->condition('is_home_page', 0);
          $query->condition('status', true);
          if ($categorie_ids) {
            $query->condition('terms', $categorie_ids, 'IN');
          }
          $query->range(0, 20);
          // Permet de filtrer en function du type (ecommerce, rc-web ...), mais
          // ne semble pas vraiment necessaire. (On verra avec le temps).
          // Car on peut associer des pages provenant de plusieurs type.
          // if ($type) {
          // $query->condition('site_internet_entity_type', $type);
          // }
          $ids = $query->execute();
          
          // On ajoute les pages par defaut definit par l'administrateur.
          foreach ($defaultPages as $id) {
            $fields[$k][] = [
              'value' => $id
            ];
            // on ajoute ces ids dans les propositions afin d'obtenir les infos
            // des pages (titre utiliser par le menu).
            if (!in_array($id, $ids))
              $ids[] = $id;
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
                'label' => $entity->getNameToMenu(),
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
    
    return HttpResponse::response([
      'form' => $form,
      'model' => $fields
    ]);
  }
  
  /**
   * Recupere les données de l'entete et le footer en function du model Pour l
   * creation de site web.
   * Pour le moment, on ne permet pas la modification des entites joins au
   * footer ou a l'entete, car cela ajouterai plus de donnée à modifier par
   * l'utilisateur.
   */
  function getFormParagraphByModel(Request $Request, $id_model, $type) {
    $entityModel = $this->entityTypeManager()->getStorage("site_type_datas")->load($id_model);
    if ($entityModel) {
      $headerId = $entityModel->get('entete_paragraph')->target_id;
      $footerId = $entityModel->get('footer_paragraph')->target_id;
      /**
       *
       * @var \Drupal\apivuejs\Services\GenerateForm $apivuejs
       */
      $apivuejs = \Drupal::service('apivuejs.getform');
      //
      if ($headerId && $type == 'header') {
        /**
         *
         * @var \Drupal\paragraphs\Entity\Paragraph $paragraphHeader
         */
        $paragraphHeader = $this->entityTypeManager()->getStorage("paragraph")->load($headerId);
        $form = $apivuejs->getForm("paragraph", $paragraphHeader->bundle(), 'default', $paragraphHeader->createDuplicate());
        $entities = [];
        $this->DuplicateEntityReference->duplicateExistantReference($paragraphHeader, $entities);
        $form['entities'] = $entities;
        $form['target_type'] = "paragraph";
        return HttpResponse::response([
          $form
        ], 200);
      }
      //
      if ($footerId && $type == 'footer') {
        /**
         *
         * @var \Drupal\paragraphs\Entity\Paragraph $paragraphHeader
         */
        $paragraphFooter = $this->entityTypeManager()->getStorage("paragraph")->load($footerId);
        $form = $apivuejs->getForm("paragraph", $paragraphFooter->bundle(), 'default', $paragraphFooter->createDuplicate());
        $entities = [];
        $this->DuplicateEntityReference->duplicateExistantReference($paragraphFooter, $entities);
        $form['entities'] = $entities;
        $form['target_type'] = "paragraph";
        return HttpResponse::response([
          $form
        ], 200);
      }
    }
    $this->getLogger('vuejs_entity')->critical(" getFormParagraphByModel : model non definit ");
    return HttpResponse::response([], 400, " getFormParagraphByModel : model non definit ");
  }
  
  /**
   * Permet d'obtenir le formulaire à partir d'une entité.
   * - Utilisé afin de determiner
   * ( cette fonction ne permet pas de dupliquer les sous entités, il
   * faut absolument l'ajouter par principe. ).
   *
   * @param Request $Request
   * @param String $entity_type
   * @param String|integer $id
   */
  function getFormByEntityId(Request $Request) {
    try {
      $param = Json::decode($Request->getContent());
      if (empty($param['id']) || empty($param['entity_type_id']))
        throw new ExceptionDebug(" Paramettre manquant ");
      //
      
      $entity = $this->entityTypeManager()->getStorage($param['entity_type_id'])->load($param['id']);
      $duplicate = false;
      if (!empty($param['duplicate'])) {
        $entity = $entity->createDuplicate();
        $duplicate = true;
      }
      if ($entity) {
        $bundle = !empty($entity->bundle()) ? $entity->bundle() : $param['entity_type_id'];
        /**
         *
         * @var \Drupal\apivuejs\Services\GenerateForm $apivuejs
         */
        $apivuejs = \Drupal::service('apivuejs.getform');
        $form = $apivuejs->getForm($param['entity_type_id'], $bundle, 'default', $entity);
        $entities = [];
        $this->DuplicateEntityReference->duplicateExistantReference($entity, $entities, $duplicate, true);
        // \Stephane888\Debug\debugLog::kintDebugDrupal($entities,
        // 'duplicateExistantReference', true);
        $form['entities'] = $entities;
        return HttpResponse::response([
          $form
        ]);
      }
      throw new ExceptionDebug(" L'entité n'existe plus ");
    }
    catch (ExceptionDebug $e) {
      return HttpResponse::response(ExceptionExtractMessage::errorAll($e), $e->getErrorCode(), $e->getMessage());
    }
    catch (\Exception $e) {
      return HttpResponse::response(ExceptionExtractMessage::errorAll($e), 431, $e->getMessage());
    }
    catch (\Error $e) {
      return HttpResponse::response(ExceptionExtractMessage::errorAll($e), 431, $e->getMessage());
    }
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
   * @deprecated
   * @param Array|string $configs
   * @param number $code
   * @param string $message
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *
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
