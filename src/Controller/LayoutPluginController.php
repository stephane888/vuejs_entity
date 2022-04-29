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
use Drupal\Core\Plugin\Context\EntityContext;
use Drupal\layout_builder\SectionStorage\SectionStorageManager;
use Drupal\Core\Layout\LayoutInterface;
use Drupal\Core\Plugin\PluginWithFormsInterface;
use Drupal\Core\Plugin\PluginFormInterface;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Component\Utility\NestedArray;

/**
 * Returns responses for vuejs entity routes.
 */
class LayoutPluginController extends ControllerBase {
  
  /**
   * The section storage manager.
   *
   * @var SectionStorageManager
   */
  protected $sectionStorageManager;
  
  /**
   * The section storage.
   *
   * @var \Drupal\layout_builder\Plugin\SectionStorage\DefaultsSectionStorage
   */
  protected $sectionStorage;
  
  /**
   * The plugin being configured.
   *
   * @var \Drupal\Core\Layout\LayoutInterface|\Drupal\Core\Plugin\PluginFormInterface
   */
  protected $layout;
  
  function __construct(SectionStorageManager $SectionStorageManager) {
    $this->sectionStorageManager = $SectionStorageManager;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('plugin.manager.layout_builder.section_storage'));
  }
  
  /**
   * Return un tableau de configuration.
   * (permet de recuperer la configuration d'un element existant).
   *
   * @param string $section_storage_type
   *        => 'defaults'
   * @param string $section_storage
   *        => 'block_content.layout_entete_m1.default'
   * @param number $delta
   *        => 0
   * @param string $plugin_id=>
   *        'formatage_models_header1'
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function configureLayout($section_storage_type, $section_storage, $delta, $plugin_id) {
    $entityView = \Drupal::entityTypeManager()->getStorage('entity_view_display')->load($section_storage);
    $contexts = [];
    $contexts['display'] = EntityContext::fromEntity($entityView);
    $this->sectionStorage = $this->sectionStorageManager->load($section_storage_type, $contexts);
    
    /**
     *
     * @var \Drupal\layout_builder\Section $section
     */
    $section = $this->sectionStorage->getSection($delta);
    $this->layout = $section->getLayout();
    
    /**
     *
     * @var \Drupal\formatage_models\Plugin\Layout\Sections\Headers\FormatageModelsheader1 $plugin
     */
    $plugin = $this->getPluginForm($this->layout);
    
    return $this->reponse($plugin->getConfiguration());
  }
  
  /**
   * il faudra recuperer la configuration de facon plus propre.
   *
   * @param string $section_storage_type
   *        => 'defaults'
   * @param string $section_storage
   *        => 'block_content.layout_entete_m1.default'
   * @param number $delta
   *        => 0
   * @param string $plugin_id=>
   *        'formatage_models_header1'
   * @param $domain_id =>
   *        l'id du domaine.
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function getDefaultConfigureLayout($section_storage_type, $section_storage, $delta, $plugin_id) {
    $entityView = \Drupal::entityTypeManager()->getStorage('entity_view_display')->load($section_storage);
    $contexts = [];
    $contexts['display'] = EntityContext::fromEntity($entityView);
    $this->sectionStorage = $this->sectionStorageManager->load($section_storage_type, $contexts);
    
    /**
     *
     * @var \Drupal\layout_builder\Section $section
     */
    $section = $this->sectionStorage->getSection($delta);
    $this->layout = $section->getLayout();
    
    /**
     *
     * @var \Drupal\formatage_models\Plugin\Layout\Sections\Headers\FormatageModelsheader1 $plugin
     */
    $plugin = $this->getPluginForm($this->layout);
    // Cette etape, est necessaire, car elle permet de corriger les bugs et tient compte de la logique evolutive.
    $plugin->setConfiguration(NestedArray::mergeDeep($plugin->defaultConfiguration(), $plugin->getConfiguration()));
    return $this->reponse($plugin->defaultConfiguration());
  }
  
  public function saveLayoutConfigure(Request $Request, $section_storage_type, $section_storage, $delta, $plugin_id, $domaine_id) {
    $entityView = \Drupal::entityTypeManager()->getStorage('entity_view_display')->load($section_storage);
    $contexts = [];
    $contexts['display'] = EntityContext::fromEntity($entityView);
    $this->sectionStorage = $this->sectionStorageManager->load($section_storage_type, $contexts);
    
    /**
     *
     * @var \Drupal\layout_builder\Section $section
     */
    $section = $this->sectionStorage->getSection($delta);
    $this->layout = $section->getLayout();
    
    /**
     *
     * @var \Drupal\formatage_models\Plugin\Layout\Sections\Headers\FormatageModelsheader1 $plugin
     */
    $plugin = $this->getPluginForm($this->layout);
    // On recupere les données envoyées.
    $newLayout = Json::decode($Request->getContent());
    if (!empty($newLayout) && !empty($domaine_id)) {
      $config = $plugin->getConfiguration();
      $config[$domaine_id] = $newLayout;
      $this->sectionStorage->getSection($delta)->setLayoutSettings($config);
      $this->sectionStorage->save();
    }
    return $this->reponse($plugin->getConfiguration());
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
  
  /**
   * Retrieves the plugin form for a given layout.
   *
   * @param \Drupal\Core\Layout\LayoutInterface $layout
   *        The layout plugin.
   *        
   * @return \Drupal\Core\Plugin\PluginFormInterface The plugin form for the layout.
   */
  protected function getPluginForm(LayoutInterface $layout) {
    if ($layout instanceof PluginWithFormsInterface) {
      return $this->pluginFormFactory->createInstance($layout, 'configure');
    }
    
    if ($layout instanceof PluginFormInterface) {
      return $layout;
    }
    
    throw new \InvalidArgumentException(sprintf('The "%s" layout does not provide a configuration form', $layout->getPluginId()));
  }
  
}
