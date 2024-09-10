<?php

namespace Drupal\vuejs_entity\Event;

use Symfony\Contracts\EventDispatcher\Event;
use Drupal\Core\Entity\EntityInterface;

class DuplicateEntityEvent extends Event {
  const EVENT_NAME = 'duplicate_entity_vuejs_entity';

  /**
   *
   * @var EntityInterface
   */
  public $entity;

  /**
   *
   * @var EntityInterface
   */
  public $entityClone;

  /**
   * Entité contenant les données de references ( Notament les informations sur
   * le domaine ).
   *
   * @var EntityInterface
   */
  public $entityDatas;

  /**
   *
   * @param EntityInterface $entity
   */
  public function __construct(EntityInterface $entityClone, EntityInterface $entity, EntityInterface $entityDatas) {
    $this->entity = $entity;
    $this->entityClone = $entityClone;
    $this->entityDatas = $entityDatas;
  }

}