<?php

namespace Drupal\vuejs_entity\Services;

use Drupal\Core\Controller\ControllerBase;
use Drupal\node\Entity\Node;
use Drupal\block_content\Entity\BlockContent;
use Drupal\commerce_product\Entity\Product;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\Core\Entity\ContentEntityBase;
use Drupal\commerce_product\Entity\ProductVariation;
use Drupal\vuejs_entity\Event\DuplicateEntityEvent;

class DuplicateEntityReference extends ControllerBase {
  protected static $field_domain_access = \Drupal\domain_access\DomainAccessManagerInterface::DOMAIN_ACCESS_FIELD;
  protected static $field_source = \Drupal\domain_source\DomainSourceElementManagerInterface::DOMAIN_SOURCE_FIELD;
  protected static $field_domain_all_affiliates = 'field_domain_all_affiliates';
  /**
   * Afin d'eviter de supprimer certaines données utile.
   *
   * @var array
   */
  protected $validEntity = [
    'paragraph',
    'node',
    'block_content',
    'commerce_product'
  ];
  protected $ignorEntity = [
    'user',
    'domain',
    'paragraphs_type',
    'site_internet_entity_type',
    'taxonomy_term',
    'file',
    'commerce_store',
    'commerce_product_type',
    'node_type'
  ];

  /**
   * Permet de supprimier les references dans l'entité.
   *
   * @param ContentEntityBase $entity
   */
  public function deleteExistantReference(ContentEntityBase &$entity) {
    $values = $entity->toArray();
    foreach ($values as $k => $vals) {
      if (!empty($vals[0]['target_id'])) {
        $setings = $entity->get($k)->getSettings();
        if (!empty($setings['target_type']) && in_array($setings['target_type'], $this->validEntity)) {
          $entityType = $this->entityTypeManager()->getStorage($setings['target_type']);
          foreach ($vals as $value) {
            $entityValue = $entityType->load($value['target_id']);
            // On verifie si ce dernier contient des references, si c'est le cas
            // on les supprime.
            if ($entityValue) {
              $this->deleteExistantReference($entityValue);
              $entityValue->delete();
            }
          }
        }
      }
    }
  }

  /**
   * Duplique les entites existantes et changent de domain.
   */
  public function duplicateExistantReference(ContentEntityBase &$entity) {
    //
    $uid = $this->currentUser()->id();
    if (method_exists($entity, 'setCreatedTime'))
      $entity->setCreatedTime(time());
    if (method_exists($entity, 'setChangedTime'))
      $entity->setChangedTime(time());
    if (method_exists($entity, 'setOwnerId'))
      $entity->setOwnerId($uid);
    if (method_exists($entity, 'setPublished'))
      $entity->setPublished();
    //
    // On desactive la disponibilité du contenu sur tous les domaines.
    if ($entity->hasField(self::$field_domain_all_affiliates)) {
      $entity->set(self::$field_domain_all_affiliates, false);
    }
    $values = $entity->toArray();
    // Get the event_dispatcher service and dispatch the event.
    $event_dispatcher = \Drupal::service('event_dispatcher');
    foreach ($values as $k => $vals) {
      if (!empty($vals[0]['target_id'])) {
        $setings = $entity->get($k)->getSettings();
        if (in_array($setings['target_type'], $this->ignorEntity))
          continue;
        // Duplication des paragraph
        elseif (!empty($setings['target_type']) && $setings['target_type'] == 'paragraph') {
          $NewParagraphIds = [];
          foreach ($vals as $value) {
            $Paragraph = Paragraph::load($value['target_id']);
            if ($Paragraph) {
              $CloneParagraph = $Paragraph->createDuplicate();
              if ($CloneParagraph->hasField(self::$field_domain_access) && $entity->hasField(self::$field_domain_access)) {
                $CloneParagraph->set(self::$field_domain_access, $entity->get(self::$field_domain_access)->getValue());
              }
              // On verifie pour les sous entites.
              $this->duplicateExistantReference($CloneParagraph);
              $CloneParagraph->save();
              $NewParagraphIds[] = [
                'target_id' => $CloneParagraph->id()
              ];
            }
          }
          $entity->set($k, $NewParagraphIds);
        }
        // Duplication des sous nodes.
        elseif (!empty($setings['target_type']) && $setings['target_type'] == 'node') {
          $newNodesIds = [];
          foreach ($vals as $value) {
            $node = Node::load($value['target_id']);
            if ($node) {
              $cloneNode = $node->createDuplicate();
              // On ajoute le champs field_domain_access; ci-possible.
              if ($cloneNode->hasField(self::$field_domain_access) && $entity->hasField(self::$field_domain_access)) {
                $cloneNode->set(self::$field_domain_access, $entity->get(self::$field_domain_access)->getValue());
              }
              // On verifie pour les sous entites.
              $this->duplicateExistantReference($cloneNode);
              //
              $cloneNode->save();
              $newNodesIds[] = [
                'target_id' => $cloneNode->id()
              ];
              // send event :
              $event = new DuplicateEntityEvent($cloneNode, $node);
              $event_dispatcher->dispatch($event, DuplicateEntityEvent::EVENT_NAME);
            }
          }
          //
          $entity->set($k, $newNodesIds);
        }
        // Duplication des sous blocs.
        elseif (!empty($setings['target_type']) && $setings['target_type'] == 'block_content') {
          $newBlockIds = [];
          foreach ($vals as $value) {
            $BlockContent = BlockContent::load($value['target_id']);
            if ($BlockContent) {
              $CloneBlockContent = $BlockContent->createDuplicate();
              // On ajoute le champs field_domain_access; ci-possible.
              if ($CloneBlockContent->hasField(self::$field_domain_access) && $entity->hasField(self::$field_domain_access)) {
                $dmn = $entity->get(self::$field_domain_access)->first()->getValue();
                if ($dmn)
                  $CloneBlockContent->get(self::$field_domain_access)->setValue($dmn);
              }
              // On ajoute l'utilisateur courant:
              if ($CloneBlockContent->hasField('user_id') && $uid) {
                $CloneBlockContent->set('user_id', $uid);
              }
              // On met jour la date de MAJ
              if ($CloneBlockContent->hasField('changed')) {
                $CloneBlockContent->set('changed', time());
              }
              //
              // On met à jour le champs info (car sa valeur doit etre unique).
              if ($CloneBlockContent->hasField("info")) {
                $val = $CloneBlockContent->get('info')->first()->getValue();
                $dmn = '';
                if ($entity->hasField(self::$field_domain_access)) {
                  $dmn = $entity->get(self::$field_domain_access)->first()->getValue();
                  $dmn = empty($dmn['target_id']) ? 'domaine.test' : $dmn['target_id'];
                  $dmn = $dmn . ' : ';
                }
                $val = $dmn . $CloneBlockContent->get('type')->target_id;
                $CloneBlockContent->get('info')->setValue([
                  'value' => $val . ' : ' . count($newBlockIds)
                ]);
              }
              //
              $CloneBlockContent->save();
              $newBlockIds[] = [
                'target_id' => $CloneBlockContent->id()
              ];
            }
          }
          $entity->set($k, $newBlockIds);
        }
        // Dupliquer les produits.
        elseif (!empty($setings['target_type']) && $setings['target_type'] == 'commerce_product') {
          // Pour le type prodit, on doit Ajouter le role à l'utilisateur.
          if (!empty($this->currentUser()->id()) && !in_array('manage_ecommerce', $this->currentUser()->getRoles())) {
            $user = \Drupal\user\Entity\User::load($this->currentUser->id());
            $user->addRole('manage_ecommerce');
            $user->save();
            $this->messenger()->addMessage(' Vous avez le role de vendeur ');
          }
          $newProducts = [];
          foreach ($vals as $value) {
            $Product = Product::load($value['target_id']);
            if ($Product) {
              $CloneProduct = $Product->createDuplicate();
              // On ajoute le champs field_domain_access; ci-possible.
              if ($entity->hasField(self::$field_domain_access)) {
                $dmn = $entity->get(self::$field_domain_access)->first()->getValue();
                $dmn = empty($dmn['target_id']) ? null : $dmn['target_id'];
                if ($dmn)
                  $CloneProduct->set(self::$field_domain_access, $dmn);
              }

              // On met jour la date de MAJ
              $CloneProduct->setCreatedTime(time());
              $CloneProduct->setChangedTime(time());
              $CloneProduct->setOwnerId($uid);
              // On verifie pour les sous entites.
              $this->duplicateExistantReference($CloneProduct);
              //
              $CloneProduct->save();
              $newProducts[] = [
                'target_id' => $CloneProduct->id()
              ];
            }
          }
          $entity->set($k, $newProducts);
        }
        elseif (!empty($setings['target_type']) && $setings['target_type'] == 'commerce_product_variation' && $k == 'variations') {
          $newCommerceProductVariationIds = [];
          foreach ($vals as $value) {
            $ProductVariation = ProductVariation::load($value['target_id']);
            if ($ProductVariation) {
              $CloneProductVariation = $ProductVariation->createDuplicate();
              // On met jour la date de MAJ
              $CloneProductVariation->setCreatedTime(time());
              $CloneProductVariation->setChangedTime(time());
              $CloneProductVariation->setOwnerId($uid);
              //
              $CloneProductVariation->save();
              $newCommerceProductVariationIds[] = [
                'target_id' => $CloneProductVariation->id()
              ];
            }
          }
          //
          $entity->set($k, $newCommerceProductVariationIds);
        }
        else {
          \Drupal::logger('vuejs_entity')->alert(" Entité non traitée, field :" . $k . ', type : ' . $setings['target_type']);
        }
      }
    }
  }

}