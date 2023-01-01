"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] || []).push([[831],{

/***/ 72831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TextDuplicateEntities; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/TextDuplicateEntities.vue?vue&type=template&id=65b61741&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-button',{attrs:{"variant":"info"},on:{"click":_vm.duplicateEntities}},[_vm._v(" duplicate entities ")]),_c('div',[_vm._v("numbersEntities: "+_vm._s(_vm.numbersEntities))])],1)}
var staticRenderFns = []


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

      this.$store.dispatch("duplicateEntities", this.payload).then(function () {
        _this.prepareSaveEntities(_this.$store.state);
      });
    },
    prepareSaveEntities: function prepareSaveEntities(state) {
      var _this2 = this;

      var loopItem = function loopItem(items, i) {
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        return new Promise(function (resolv, reject) {
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
                  items[i].entity = resp.data.json;
                  i = i + 1;

                  if (i < items.length) {
                    resolv(loopEntityPromise(items, i));
                  } else resolv(items);
                }).catch(function (er) {
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
                  target_id: resp.data.id,
                  index: i
                });
                i = i + 1;

                if (items.length <= i) {
                  resolv(loopItem(items, i, values));
                } else {
                  resolv(values);
                }
              }).catch(function (er) {
                reject(er);
              });
            }
          } else resolv(values);
        });
      }; //

      /**
       * On parcourt les champs.
       * @param {Array} datas
       * @param {String} fieldname // fieldname
       * @return ids // les ids des entites pour le champs.
       */


      var loopFieldEntity = function loopFieldEntity(datas, fieldname, entity, keys, i) {
        return new Promise(function (resolv) {
          // Si le champs contient des données,
          // on parcourt chaqu'une des entrées.
          if (datas[fieldname] && datas[fieldname].length > 0) {
            // Pour chaque champs, on cree les contenus et on recupere les ids.
            loopItem(datas[fieldname], 0).then(function (resp) {
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
      }; //


      var loopEntityPromise = function loopEntityPromise(datas) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return new Promise(function (resolv, reject) {
          if (datas[i]) {
            // S'il contient des sous entités.
            if (datas[i].entities) {
              var keys = Object.keys(datas[i].entities);
              loopFieldEntity(datas[i].entities, keys[0], datas[i].entity, keys, 0).then(function (entity) {
                _this2.$store.dispatch("saveEntity", {
                  entity_type_id: datas[i].target_type,
                  value: entity,
                  index: i
                }).then(function (resp) {
                  datas[i].entity = resp.data.json;
                  i = i + 1;

                  if (i < datas.length) {
                    resolv(loopEntityPromise(datas, i));
                  } else resolv(datas);
                }).catch(function (er) {
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
                datas[i].entity = resp.data.json;
                i = i + 1;

                if (i < datas.length) {
                  resolv(loopEntityPromise(datas, i));
                } else resolv(datas);
              }).catch(function (er) {
                reject(er);
              });
            }
          } else {
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
//# sourceMappingURL=EntityDrupal.common.831.js.map