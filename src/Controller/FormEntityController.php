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
use Drupal\lesroidelareno\Entity\DonneeSiteInternetEntity;

/**
 * Returns responses for vuejs entity routes.
 */
class FormEntityController extends ControllerBase {
  
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
          'cardinality' => 1
        ];
        if (method_exists($field, 'getFieldStorageDefinition')) {
          $form[$k]['cardinality'] = $field->getFieldStorageDefinition()->getCardinality();
          $form[$k]['constraints'] = $field->getFieldStorageDefinition()->getConstraints();
        }
        //
        if (!empty($fieldsEntityForm['content'][$k]['settings'])) {
          $form[$k]['entity_form_settings'] = $fieldsEntityForm['content'][$k]['settings'];
        }
      }
      else {
        unset($fields[$k]);
      }
    }
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
