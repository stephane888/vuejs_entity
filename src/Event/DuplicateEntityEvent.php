<?php

namespace Drupal\vuejs_entity\Event;

use Symfony\Contracts\EventDispatcher\Event;
use Drupal\Core\Entity\EntityInterface;

class DuplicateEntityEvent extends Event {
  const EVENT_NAME = 'duplicate_entity_vuejs_entity';

  /**
   *
   * @var $entity
   */
  public $entity;

  /**
   *
   * @var $entity
   */
  public $entityClone;

  /**
   *
   * @param EntityInterface $entity
   */
  public function __construct(EntityInterface $entityClone, EntityInterface $entity) {
    $this->entity = $entity;
    $this->entityClone = $entityClone;
  }

}