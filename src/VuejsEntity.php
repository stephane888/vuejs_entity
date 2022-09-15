<?php

namespace Drupal\vuejs_entity;

use Jawira\CaseConverter\Convert;

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
      /**
       *
       * @var \Drupal\domain\Entity\Domain $domain
       */
      $domain = $entityTypeManager->create();
      $domain->set('name', $domaineHost);
      $domain->set('hostname', $domaineHost);
      $domain->set('id', $domain_id);
      $domain->set('scheme', 'http');
      $domain->save();
      return $domain;
    }
    return $domainEntity;
  }

}