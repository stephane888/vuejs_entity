<?php

namespace Drupal\vuejs_entity\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Entity\EntityFormInterface;
use Symfony\Component\Serializer\Serializer;
use Drupal\Core\Entity\EntityFieldManager;
use Stephane888\Debug\debugLog;
use Symfony\Component\HttpFoundation\Request;
use Drupal\lesroidelareno\Entity\DonneeSiteInternetEntity;
use Jawira\CaseConverter\Convert;
use Stephane888\Debug\Utility as UtilityError;

/**
 * Returns responses for vuejs entity routes.
 */
class FormEntityController extends ControllerBase {
  
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
  
  public function saveDatas(Request $Request, $entity_type_id) {
    $entity_type = $this->entityTypeManager()->getStorage($entity_type_id);
    $values = Json::decode($Request->getContent(), true);
    if ($entity_type && !empty($values)) {
      try {
        $entity = $entity_type->create($values);
        $entity->save();
        return $this->reponse($entity->toArray());
      }
      catch (\Exception $e) {
        return $this->reponse(UtilityError::errorAll($e), 400, $e->getMessage());
      }
    }
  }
  
  /**
   *
   * @param integer $domain_ovh_entity_id
   */
  public function saveDomainByOvhEntity($domain_ovh_entity_id) {
    $domain_ovh_entity = $this->entityTypeManager()->getStorage('domain_ovh_entity')->load($domain_ovh_entity_id);
    if ($domain_ovh_entity) {
      $sub_domain = $domain_ovh_entity->getsubDomain() . '.' . $domain_ovh_entity->getZoneName();
      /**
       *
       * @var \Drupal\domain\Entity\Domain $domain
       */
      $domain = $this->entityTypeManager()->getStorage('domain')->create();
      $textConvert = new Convert($sub_domain);
      $domain_id = $textConvert->toSnake();
      $domain->set('name', $sub_domain);
      $domain->set('hostname', $sub_domain);
      $domain->set('id', $domain_id);
      $domain->set('scheme', 'http');
      $domain->save();
      return $this->reponse($domain->toArray());
    }
    return $this->reponse([], 400, " Le domaine n'est pas encore enregistrer en tant qu'entité drupal ");
  }
  
  /**
   * Builds the response.
   */
  public function getForm($entity_type_id, $view_mode, $bundle = null) {
    //
    $EntityStorage = $this->entityTypeManager()->getStorage($entity_type_id);
    /**
     *
     * @var DonneeSiteInternetEntity $entity
     */
    $entity = $EntityStorage->create();
    $fields = $entity->toArray();
    
    /**
     *
     * @var EntityFieldManager $entityManager
     */
    $entityManager = \Drupal::service('entity_field.manager');
    $Allfields = $entityManager->getFieldDefinitions($entity_type_id, $bundle);
    // debugLog::$max_depth = 8;
    /**
     *
     * @var \Drupal\Core\Entity\Entity\EntityFormDisplay $entity_form_view
     */
    $entity_form_view = $this->entityTypeManager()->getStorage('entity_form_display')->load($entity_type_id . '.' . $entity_type_id . '.default');
    $fieldsEntityForm = $entity_form_view->toArray();
    
    // debugLog::kintDebugDrupal($entity_form_view->toArray(), 'entityTypeManager__entity_form_display__loadMultiple', true);
    // debugLog::kintDebugDrupal($Allfields['name']->getType(), 'get_type');
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
        //
        if (!empty($fieldsEntityForm['content'][$k]['settings'])) {
          $form[$k]['entity_form_settings'] = $fieldsEntityForm['content'][$k]['settings'];
          $form[$k]['entity_form_type'] = $fieldsEntityForm['content'][$k]['type'];
          $form[$k]['entity_form'] = $fieldsEntityForm['content'][$k];
        }
      }
      else {
        unset($fields[$k]);
      }
    }
    // on recupere les champs annexe:
    $form['html_1'] = [
      'type' => 'render_html',
      'content' => '<div class="step-donneesite--header with-tablet mx-auto text-center" data-drupal-selector="edit-ctm-description"><h2 class="step-donneesite--title" data-drupal-selector="edit-0">Donnons vie à vos idées</h2>
<p class="step-donneesite--label" data-drupal-selector="edit-1"> Repondez à quelques questions et obtenez les meilleurs outils pour vos créations </p>
</div>'
    ];
    return $this->reponse([
      'form' => $form,
      'model' => $fields
    ]);
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
