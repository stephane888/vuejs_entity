<?php

namespace Drupal\vuejs_entity\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\file\Entity\File;
use Drupal\image\Entity\ImageStyle;
use Drupal\lesroidelareno\lesroidelareno;
use Stephane888\DrupalUtility\HttpResponse;
use Stephane888\Debug\ExceptionExtractMessage;
use Symfony\Component\HttpFoundation\Request;

/**
 * Returns responses for vuejs entity routes.
 */
class VuejsEntityController extends ControllerBase {
  
  /**
   * Builds the response.
   *
   * @deprecated use
   *             Drupal\filesmanager\Controller\FilesmanagerController::getImage
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
   * Permet d'appliquer un certains nombre d'action a la fin de la generation
   * d'un domaine.
   * Par example :
   * - Ajouter le domaine dans field_domain_admin.
   */
  public function CheckApplyActions(Request $Request) {
    try {
      $datas = Json::decode($Request->getContent());
      if (!empty($datas['domain']['id'])) {
        // On ajoute l'id du domaine au proprietaire du site.
        /**
         * entité json du domain.
         *
         * @var array $newDomain
         */
        $newDomain = $datas['domain'];
        //
        $uid = lesroidelareno::getCurrentUserId();
        $user = \Drupal\user\Entity\User::load($uid);
        $domains = $user->get('field_domain_admin')->getValue();
        $domains[] = [
          'target_id' => $newDomain['id']
        ];
        $user->set("field_domain_admin", $domains);
        $user->save();
        $debug = [
          'user_id' => $uid,
          'domain_id' => $newDomain['id']
        ];
        //
        $debug += $this->VerificationDesBlocks($newDomain['id']);
        return HttpResponse::response($debug);
      }
      throw new \Exception("Le domaine n'est pas definie");
    }
    catch (\Exception $e) {
      return HttpResponse::response(ExceptionExtractMessage::errorAll($e), 435, $e->getMessage());
    }
  }
  
  /**
   * Apres plusieurs test, on s'est rendu compte que certains modele ne
   * disposait pas des regions necessaire.
   */
  private function VerificationDesBlocks($domain_id) {
    /**
     *
     * @var \Drupal\Core\Entity\EntityStorageInterface $blockStorage
     */
    $blockStorage = \Drupal::entityTypeManager()->getStorage("block");
    $blocks = $blockStorage->loadByProperties([
      'theme' => $domain_id
    ]);
    $result['create_cart_bloc_complet'] = true;
    foreach ($blocks as $block) {
      /**
       *
       * @var \Drupal\block\Entity\Block $block
       */
      if ($block->getPluginId() == 'commerceformatage_cart_bloc_complet') {
        $result['create_cart_bloc_complet'] = false;
      }
    }
    if ($result['create_cart_bloc_complet']) {
      $values = [
        'id' => $domain_id . '_cartbloccomplet',
        "status" => true,
        'theme' => $domain_id,
        'region' => 'footer',
        'plugin' => 'commerceformatage_cart_bloc_complet',
        'settings' => [
          'id' => 'commerceformatage_cart_bloc_complet',
          'label' => 'Votre panier',
          'label_display' => 'visible',
          'provider' => 'commerceformatage',
          'block_load_style_scss_js' => 'commerceformatage/cartfloat',
          'dropdown' => 1
        ],
        'visibility' => []
      ];
      $newBlock = \Drupal\block\Entity\Block::create($values);
      $newBlock->save();
    }
    return $result;
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
         <b> 'I'm creating my site' </b>. You can modify at any time."),
      'page_save_alert_info' => $this->t('Creating a site takes about 5 minutes, but is completely automatic. <br />
       <strong>Please wait until.</strong>'),
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
