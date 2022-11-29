<?php

namespace Drupal\vuejs_entity;

use Jawira\CaseConverter\Convert;
use Drupal\Core\DrupalKernel;

class VuejsEntity {
  
  /**
   * Cree ou recupere un domain existant.
   *
   * @param string $sub_domain
   * @return \Drupal\domain\Entity\Domain
   */
  static function createDomainFromData($domaineHost) {
    $textConvert = new Convert($domaineHost);
    $domain_id = $textConvert->toSnake();
    $domain_id = str_replace('.', '_', $domain_id);
    $entityTypeManager = \Drupal::entityTypeManager()->getStorage('domain');
    $domainEntity = $entityTypeManager->load($domain_id);
    if (empty($domainEntity)) {
      $REQUEST_SCHEME = 'http';
      if (!empty($_SERVER['REQUEST_SCHEME']) && $_SERVER['REQUEST_SCHEME'] == 'https') {
        $REQUEST_SCHEME = $_SERVER['REQUEST_SCHEME'];
      }
      /**
       *
       * @var \Drupal\domain\Entity\Domain $domain
       */
      $domain = $entityTypeManager->create();
      $domain->set('name', $domaineHost);
      $domain->set('hostname', $domaineHost);
      $domain->set('id', $domain_id);
      $domain->set('scheme', $REQUEST_SCHEME);
      $domain->save();
      return $domain;
    }
    return $domainEntity;
  }
  
  /**
   *
   * @see \drupal_flush_all_caches()
   */
  static function rebuildThemeInfo($kernel = NULL) {
    \Drupal::service('extension.list.theme_engine')->reset();
    \Drupal::service('theme_handler')->refreshInfo();
    // In case the active theme gets requested later in the same request we need
    // to reset the theme manager.
    \Drupal::theme()->resetActiveTheme();
    
    if (!$kernel instanceof DrupalKernel) {
      $kernel = \Drupal::service('kernel');
      $kernel->invalidateContainer();
      $kernel->rebuildContainer();
    }
  }
  
}