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
        // $img_url =
        // \Drupal::service('file_url_generator')->generateAbsoluteString($file->getFileUri());
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
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function getStringTranslate() {
    $strings = [
      'next' => $this->t('Next'),
      'previous' => $this->t('Previous'),
      'create_web_site' => $this->t('I create my site'),
      'page_save_1' => $this->t("If your content suits you, click on the button
       <b> 'I create my site' </b>. You could change it at any time."),
      'page_save_vue' => $this->t('Visit your new site'),
      "page_save_admin" => $this->t('Manage your content'),
      "page_save_url" => $this->t('Your website:'),
      "ask_to_login" => $this->t(' Please log in to save your data ')
    ];
    return $this->reponse($strings);
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
