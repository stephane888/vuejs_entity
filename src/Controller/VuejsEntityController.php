<?php

namespace Drupal\vuejs_entity\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\file\Entity\File;
use Drupal\image\Entity\ImageStyle;

/**
 * Returns responses for vuejs entity routes.
 */
class VuejsEntityController extends ControllerBase {
  
  /**
   * Builds the response.
   */
  public function getImage($fid, $style) {
    $file = File::load($fid);
    $img_url = null;
    if ($file) {
      $renderStyle = ImageStyle::load($style);
      if ($renderStyle) {
        $img_url = $renderStyle->buildUrl($file->getFileUri());
      }
      else
        // $img_url = \Drupal::service('file_url_generator')->generateAbsoluteString($file->getFileUri());
        // ou
        $img_url = \Drupal::service('file_system')->realpath($file->getFileUri());
    }
    return $this->reponse($img_url);
  }
  
  /**
   *
   * @param string $menu_name
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function getMenuItems($menu_name) {
    $menuLinks = $this->entityTypeManager()->getStorage('menu_link_content')->loadByProperties([
      'bundle' => $menu_name
    ]);
    $options = [];
    foreach ($menuLinks as $value) {
      $options[$value->id()] = 0;
    }
    return $this->reponse($options);
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
  
}
