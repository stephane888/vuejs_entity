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
   * Contient les données en JSON
   *
   * @var array
   */
  protected $datasJson = [];
  
  /**
   * Entite valide pour la suppresion.
   * Afin d'eviter de supprimer certaines données utile.
   *
   * @var array
   */
  protected $validEntity = [
    'paragraph',
    'node',
    'block_content',
    'commerce_product'
    // 'webform'
  ];
  
  /**
   * Les entitées ou types qui seront ignorées.
   *
   * @var array
   */
  protected $ignorEntity = [
    'user',
    'domain',
    'paragraphs_type',
    'site_internet_entity_type',
    'taxonomy_term',
    'file',
    'commerce_store',
    'commerce_product_type',
    'node_type',
    'commerce_product_variation'
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
   * Permet de generer une matrice des entites dupliquées et MAJ les domaines.
   *
   * @param ContentEntityBase $entity
   * @param array $datasJson
   */
  public function duplicateExistantReference(ContentEntityBase &$entity, array &$datasJson = []) {
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
    // $event_dispatcher = \Drupal::service('event_dispatcher');
    foreach ($values as $k => $vals) {
      if (!empty($vals[0]['target_id'])) {
        $setings = $entity->get($k)->getSettings();
        if (empty($setings['target_type']) || in_array($setings['target_type'], $this->ignorEntity))
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
              $subDatas = $setings;
              $subDatas['target_id'] = $value['target_id'];
              $subDatas['entity'] = $CloneParagraph->toArray();
              $subDatas['entities'] = [];
              // On verifie pour les sous entites.
              $this->duplicateExistantReference($CloneParagraph, $subDatas['entities']);
              $datasJson[$k][] = $subDatas;
              // $CloneParagraph->save();
              // $NewParagraphIds[] = [
              // 'target_id' => $CloneParagraph->id()
              // ];
            }
          }
          // $entity->set($k, $NewParagraphIds);
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
              $subDatas = $setings;
              $subDatas['target_id'] = $value['target_id'];
              $subDatas['entity'] = $cloneNode->toArray();
              $subDatas['entities'] = [];
              // On verifie pour les sous entites.
              $this->duplicateExistantReference($cloneNode, $subDatas['entities']);
              $datasJson[$k][] = $subDatas;
              //
              // $cloneNode->save();
              // $newNodesIds[] = [
              // 'target_id' => $cloneNode->id()
              // ];
              // send event :
              // $event = new DuplicateEntityEvent($cloneNode, $node, $entity);
              // $event_dispatcher->dispatch($event,
              // DuplicateEntityEvent::EVENT_NAME);
            }
          }
          //
          // $entity->set($k, $newNodesIds);
        }
        // Duplications des formulaires.
        elseif (!empty($setings['target_type']) && $setings['target_type'] == 'webform') {
          $newWebforms = [];
          foreach ($vals as $value) {
            $Webform = \Drupal\webform\Entity\Webform::load($value['target_id']);
            if ($Webform) {
              $CloneWebform = $Webform->createDuplicate();
              // Pour les webforms, on doit ajouter le ThirdParty.
              $domaine = $entity->get(self::$field_domain_access)->target_id;
              $CloneWebform->setThirdPartySetting('webform_domain_access', self::$field_domain_access, $domaine);
              $CloneWebform->set('title', $domaine . ' : ' . $CloneWebform->get('title'));
              $CloneWebform->set('id', substr($Webform->id(), 0, 10) . date('YMdi') . rand(0, 9999));
              //
              $subDatas = $setings;
              $subDatas['target_id'] = $value['target_id'];
              $subDatas['entity'] = $CloneWebform->toArray();
              $subDatas['entities'] = [];
              // $CloneWebform->save();
              $datasJson[$k][] = $subDatas;
            }
            // $newWebforms[] = [
            // 'target_id' => $CloneWebform->id()
            // ];
          }
          //
          // $entity->set($k, $newWebforms);
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
              $subDatas = $setings;
              $subDatas['target_id'] = $value['target_id'];
              $subDatas['entity'] = $CloneBlockContent->toArray();
              $subDatas['entities'] = [];
              
              // $CloneBlockContent->save();
              $datasJson[$k][] = $subDatas;
              // $newBlockIds[] = [
              // 'target_id' => $CloneBlockContent->id()
              // ];
            }
          }
          // $entity->set($k, $newBlockIds);
        }
        // Dupliquer les produits.
        elseif (!empty($setings['target_type']) && $setings['target_type'] == 'commerce_product00') {
          // Pour le type prodit, on doit Ajouter le role à l'utilisateur.
          if (!empty($this->currentUser()->id()) && !in_array('manage_ecommerce', $this->currentUser()->getRoles())) {
            $user = \Drupal\user\Entity\User::load($this->currentUser->id());
            $user->addRole('manage_ecommerce');
            $user->save();
            $this->messenger()->addMessage(' Vous avez le role de vendeur ');
          }
          $newProducts = [];
          foreach ($vals as $value) {
            /**
             *
             * @var \Drupal\commerce_product\Entity\Product $Product
             */
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
              $subDatas = $setings;
              $subDatas['target_id'] = $value['target_id'];
              $subDatas['entity'] = $CloneProduct->toArray();
              $subDatas['entities'] = [];
              // On verifie pour les sous entites.
              $this->duplicateExistantReference($CloneProduct);
              $datasJson[$k][] = $subDatas;
              // on supprime les variations dans le clone.
              $CloneProduct->setVariations([]);
              
              $CloneProduct->save();
              $cloneProducdId = $CloneProduct->id();
              // On duplique les variations à partir du produit.
              $variationsIds = $Product->getVariationIds();
              $newVariations = [];
              foreach ($variationsIds as $variationId) {
                $variation = \Drupal\commerce_product\Entity\ProductVariation::load($variationId);
                if ($variation) {
                  $cloneVariation = $variation->createDuplicate();
                  $cloneVariation->set('product_id', $cloneProducdId);
                  $cloneVariation->save();
                  $newVariations[] = $cloneVariation->id();
                }
              }
              $CloneProduct->setVariations($newVariations);
              // \Stephane888\Debug\debugLog::$max_depth = 5;
              // \Stephane888\Debug\debugLog::kintDebugDrupal([
              // $newVariations,
              // $Product->toArray(),
              // $Product->get('variations')->target_id,
              // $Product->getVariationIds()
              // ], 'newVariations_' . $Product->id() . '__', true);
              $CloneProduct->save();
              //
              $newProducts[] = [
                'target_id' => $cloneProducdId
              ];
            }
          }
          $entity->set($k, $newProducts);
        }
        else {
          \Drupal::logger('vuejs_entity')->alert(" Entité non traitée, field :" . $k . ', type : ' . $setings['target_type']);
        }
      }
    }
  }
  
}