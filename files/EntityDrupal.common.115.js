"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] || []).push([[115],{

/***/ 41115:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TextDuplicateEntities; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/TextDuplicateEntities.vue?vue&type=template&id=b2f7253a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-button',{attrs:{"variant":"info"},on:{"click":_vm.duplicateEntities}},[_vm._v(" duplicate entities ")]),_c('div',[_vm._v("numbersEntities: "+_vm._s(_vm.numbersEntities))])],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(9726);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4367);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(41539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(47941);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(34665);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/TextDuplicateEntities.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//

/* harmony default export */ var TextDuplicateEntitiesvue_type_script_lang_js_ = ({
  name: "TextDuplicateEntities",
  data: function data() {
    return {
      payload: {
        id: 139,
        //152, //139,
        content: {
          name: [{
            value: "Bienvenue chez test"
          }],
          field_domain_access: [{
            target_id: "test328_wb_horizon_kksa"
          }],
          field_domain_source: [{
            target_id: "test328_wb_horizon_kksa"
          }],
          is_default_theme: [{
            value: false
          }]
        }
      }
    };
  },
  computed: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)(["entityDuplicate"])), (0,vuex_esm/* mapGetters */.Se)(["numbersEntities"])),
  mounted: function mounted() {//
  },
  methods: {
    duplicateEntities: function duplicateEntities() {
      var _this = this;

      this.$store.dispatch("getMatriceEntities", this.payload).then(function () {
        _this.prepareSaveEntities(_this.$store.state);
      });
    },
    prepareSaveEntities: function prepareSaveEntities(state) {
      var _this2 = this;

      /**
       * Permet de creer les sous contenus et return les target_ids.
       * @param {Array} items
       * @param {Integer} i
       * @param {Array} values
       */
      var loopItem = function loopItem(items, i) {
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        return new Promise(function (resolv, reject) {
          console.log("loopItem : ", items);

          if (items[i]) {
            var item = items[i];

            if (items[i].entities) {
              var keys = Object.keys(items[i].entities);
              loopFieldEntity(items[i].entities, keys[0], items[i].entity, keys, 0).then(function (entity) {
                _this2.$store.dispatch("saveEntity", {
                  entity_type_id: items[i].target_type,
                  value: entity,
                  index: i
                }).then(function (resp) {
                  //items[i].entity = resp.data.json;
                  values.push({
                    target_id: resp.data.id
                  });
                  i = i + 1;

                  if (i < items.length) {
                    // loopEntityPromise(items, i).then((resp) => {
                    //   values.push({ target_id: resp.data.id });
                    // });
                    resolv(loopItem(items, i, values));
                  } else resolv(values);
                }).catch(function (er) {
                  console.log(" catch : ", er);
                  reject(er);
                });
              });
            } else {
              _this2.$store.dispatch("saveEntity", {
                entity_type_id: item.target_type,
                value: item.entity,
                index: i
              }).then(function (resp) {
                values.push({
                  target_id: resp.data.id
                });
                i = i + 1;

                if (items.length <= i) {
                  resolv(loopItem(items, i, values));
                } else {
                  resolv(values);
                }
              }).catch(function (er) {
                console.log("catch : ", er);
                reject(er);
              });
            }
          } else resolv(values);
        });
      }; //

      /**
       * loopFieldEntity parcourt les entites enfants d'une entité parente, et a chaque passage MAJ l'entité parent.
       *
       * @param {Array} datas // tableau des entites enfants.
       * @param {String} fieldname // fieldname
       * @param {String} entity // entité parente
       * @param {Array} keys // tableau des champs à parcourirt (permet de passer à l'etape suivante)
       * @param {Integer} i   // l'etape encours (permet de passer à l'etape suivante)
       * @return {Object} entity // l'entité parente MAJ.
       */


      var loopFieldEntity = function loopFieldEntity(datas, fieldname, entity, keys, i) {
        return new Promise(function (resolv) {
          console.log("loopFieldEntity : ", datas); // Si le champs contient des données,
          // on parcourt chacune des entrées.

          if (datas[fieldname] && datas[fieldname].length > 0) {
            // Pour chaque champs, on cree les contenus et on recupere les ids.
            loopItem(datas[fieldname], 0).then(function (resp) {
              console.log("loopFieldEntity result of loopItem : ", resp);
              entity[fieldname] = resp; // on passe au champs suivant.

              i = i + 1;

              if (keys.length > i) {
                resolv(loopFieldEntity(datas, keys[i], entity, keys, i));
              } else {
                resolv(entity);
              }
            });
          } else resolv(entity);
        });
      };
      /**
       * Permet de cree l'entité parent, apres que tous les entitées enfants soient ok.
       * il est appelle par tous les enfants possedant des enfants.
       * loopEntityPromise recois un tableau contenant les entites qui doivent etre cree.
       * il retourne un tableau de target_ids => [{target_id:...},{target_id:...}, ... ].
       *
       * @param {*} datas
       * @param {*} i
       * @return resp [{id:..., json:...}] // return un json avec une proprieté json et une autre id.
       */


      var loopEntityPromise = function loopEntityPromise(datas) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        return new Promise(function (resolv, reject) {
          console.log("loopEntityPromise : ", datas);

          if (datas[i]) {
            // S'il contient des sous entités.
            if (datas[i].entities && (0,esm_typeof/* default */.Z)(datas[i].entities) === "object") {
              var keys = Object.keys(datas[i].entities);
              loopFieldEntity(datas[i].entities, keys[0], datas[i].entity, keys, 0).then(function (entity) {
                console.log(" loopEntityPromise SEND with override entity : ", entity);

                _this2.$store.dispatch("saveEntity", {
                  entity_type_id: datas[i].target_type,
                  value: entity,
                  index: i
                }).then(function (resp) {
                  values.push({
                    target_id: resp.data.id
                  }); // datas[i].entity = resp.data.json;

                  i = i + 1;

                  if (i < datas.length) {
                    resolv(loopEntityPromise(datas, i));
                  } else resolv(values);
                }).catch(function (er) {
                  console.log("catch : ", er);
                  reject(er);
                });
              });
            } // S'il ne contient pas de sous entité.
            else {
              _this2.$store.dispatch("saveEntity", {
                entity_type_id: datas[i].target_type,
                value: datas[i].entity,
                index: i
              }).then(function (resp) {
                values.push({
                  target_id: resp.data.id
                }); // datas[i].entity = resp.data.json;

                i = i + 1;

                if (i < datas.length) {
                  resolv(loopEntityPromise(datas, i));
                } else resolv(values);
              }).catch(function (er) {
                console.log("catch : ", er);
                reject(er);
              });
            }
          } else {
            console.log(" loopEntityPromise END ");
            resolv([]);
          }
        });
      };

      loopEntityPromise(state.entityDuplicate, 0);
    }
  }
});
;// CONCATENATED MODULE: ./src/views/TextDuplicateEntities.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_TextDuplicateEntitiesvue_type_script_lang_js_ = (TextDuplicateEntitiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/views/TextDuplicateEntities.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  views_TextDuplicateEntitiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TextDuplicateEntities = (component.exports);

/***/ })

}]);
//# sourceMappingURL=EntityDrupal.common.115.js.map