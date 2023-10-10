"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] || []).push([[905],{

/***/ 40905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ OptionsEntities; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue?vue&type=template&id=70654e40&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form-group',{attrs:{"label":_vm.field.label}},[(_vm.field.type == 'options_select')?_c('b-form-select',{attrs:{"options":_vm.options,"name":_vm.field.name},on:{"change":_vm.input},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}):_c('b-form-radio-group',{attrs:{"options":_vm.options,"name":_vm.field.name},on:{"change":_vm.input},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}})],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(91605);
// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(60343);
// EXTERNAL MODULE: ../drupal-vuejs/src/App/jsonApi/itemsEntity.js
var itemsEntity = __webpack_require__(21208);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js + 138 modules
var loadField = __webpack_require__(69544);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var OptionsEntitiesvue_type_script_lang_js_ = ({
  name: "OptionsEntities",
  components: {},
  props: {
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    },
    namespaceStore: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      options: [],
      selected: null
    };
  },
  mounted: function mounted() {
    this.loadTerms();
    this.selected = this.getValue();
  },
  methods: {
    loadTerms: function loadTerms() {
      var _this = this;

      var entity_type_id = this.getFistVocab();

      if (entity_type_id && loadField/* default.config */.Z.config) {
        var terms = new itemsEntity/* default */.Z(entity_type_id, entity_type_id, loadField/* default.config */.Z.config);
        terms.get().then(function () {
          _this.options = terms.getOptions();
        });
      }
    },

    /**
     * --
     */
    getFistVocab: function getFistVocab() {
      if (this.field.definition_settings.handler_settings.target_bundles) {
        var keys = Object.keys(this.field.definition_settings.handler_settings.target_bundles);
        return this.field.definition_settings.handler_settings.target_bundles[keys[0]];
      } else if (this.field.definition_settings.target_type) {
        return this.field.definition_settings.target_type;
      } else return null;
    },

    /**
     *
     * @param {*} val
     */
    input: function input(val) {
      var vals = [];
      vals.push({
        target_id: val
      });
      this.$emit("setValue", vals);
    },

    /**
     * --
     */
    getValue: function getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        if (this.model[this.field.name][0].value) return this.model[this.field.name][0].value;else return this.model[this.field.name][0].target_id;
      } else return null;
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_OptionsEntitiesvue_type_script_lang_js_ = (OptionsEntitiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Ressouces_OptionsEntitiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OptionsEntities = (component.exports);

/***/ }),

/***/ 21208:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _siteweb_AppVuejs_create_website_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74225);
/* harmony import */ var _siteweb_AppVuejs_create_website_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34547);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88674);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26699);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32023);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52466);
/* harmony import */ var _Confs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53780);
/* harmony import */ var _buildFilter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55343);











var itemsEntity = /*#__PURE__*/function () {
  function itemsEntity(entity_type_id) {
    var bundle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    (0,_siteweb_AppVuejs_create_website_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, itemsEntity);

    this.entity_type_id = entity_type_id; //

    if (!bundle) {
      bundle = entity_type_id;
    }

    this.url = _Confs_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"].baseURl */ .Z.baseURl + "/" + this.entity_type_id + "/" + bundle;
    this.items = [];
    this.newConfig = config; // En function de l'environement on doit ajouter les paramettres de bases.( notament baseUrl, TestDomain, les methodes surchargées ).

    if (config) {
      // à ce state la surcharge total pose probleme, donc on doit surcharger par necessite.
      // utilities = {
      //   ...utilities,
      //   ...config,
      // };
      if (config.TestDomain) _utilities_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"].TestDomain */ .Z.TestDomain = config.TestDomain;
    }
    /**
     * Permet de joindre les multiples filtres.
     */


    this.filterQuery = "";
  }
  /**
   * Recupere les items en passant par le token.
   */


  (0,_siteweb_AppVuejs_create_website_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(itemsEntity, [{
    key: "get",
    value: function get() {
      var _this = this;

      return new Promise(function (resolv) {
        if (_this.filterQuery) {
          _this.filterQuery = _this.url.includes("?") ? "&" + _this.filterQuery : "?" + _this.filterQuery;
        }

        _utilities_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"].dGet */ .Z.dGet(_this.url + _this.filterQuery, _Confs_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"].headers */ .Z.headers).then(function (resp) {
          _this.items = resp.data;
          resolv(resp.data);
        });
      });
    }
    /**
     * Recupere les items
     * ( on doit pouvoir faire un search avec d'autres filtre )
     */

  }, {
    key: "getSearch",
    value: function getSearch(search) {
      var _this2 = this;

      var filter = new _buildFilter_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z();
      filter.addFilter("name", "CONTAINS", search);
      return new Promise(function (resolv) {
        _utilities_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"].dGet */ .Z.dGet(_this2.url + "?" + filter.query, _Confs_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"].headers */ .Z.headers).then(function (resp) {
          _this2.items = resp.data;
          resolv(resp.data);
        });
      });
    }
    /**
     *
     * @returns *
     */

  }, {
    key: "getValue",
    value: function getValue(term) {
      var _this3 = this;

      var filter = new _buildFilter_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z();
      filter.addFilter("name", "=", term);
      return new Promise(function (resolv) {
        _utilities_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"].dGet */ .Z.dGet(_this3.url + "?" + filter.query, _Confs_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"].headers */ .Z.headers).then(function (resp) {
          _this3.items = resp.data;
          resolv(resp.data);
        });
      });
    }
    /**
     *
     * @returns *
     */

  }, {
    key: "getValueByTid",
    value: function getValueByTid(id) {
      var _this4 = this;

      var filter = new _buildFilter_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z();
      filter.addFilter("tid", "=", id);
      return new Promise(function (resolv, reject) {
        _utilities_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"].dGet */ .Z.dGet(_this4.url + "?" + filter.query, _Confs_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"].headers */ .Z.headers).then(function (resp) {
          _this4.items = resp.data;
          resolv(resp.data);
        }).catch(function (er) {
          reject(er);
        });
      });
    }
    /**
     *
     * @returns *
     */

  }, {
    key: "getValueById",
    value: function getValueById(id) {
      var _this5 = this;

      var filter = new _buildFilter_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z();
      var fieldId = "drupal_internal__id";

      switch (this.entity_type_id) {
        case "user":
          fieldId = "uid";
          break;
        // case "domain":
        //   fieldId = "drupal_internal__id";
        //   break;

        case "node":
          fieldId = "drupal_internal__nid";
          break;

        case "taxonomy_term":
          fieldId = "tid";
          break;
      }

      filter.addFilter(fieldId, "=", id);
      return new Promise(function (resolv) {
        _utilities_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"].dGet */ .Z.dGet(_this5.url + "?" + filter.query, _Confs_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"].headers */ .Z.headers).then(function (resp) {
          _this5.items = resp.data;
          resolv(resp.data);
        });
      });
    }
    /**
     * @see https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/filtering
     * @param {*} field_name
     * @param {*} operator
     * @param {*} value
     */

  }, {
    key: "filter",
    value: function filter(field_name, operator, value) {
      var filter = new _buildFilter_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z();
      filter.addFilter(field_name, operator, value);
      if (filter.query) this.filterQuery += filter.query;
    }
    /**
     * Les entities à joindre dans la requete.
     * @param {Array} entities
     */

  }, {
    key: "addIncludesEntities",
    value: function addIncludesEntities() {//IE.url += "?include=executants,project_manager";

      var entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    }
    /**
     * Retourne les termes sous formes de liste d'otpions.
     * NB: Pour recuperer certaines données l'utilisateur doit envoyer ses entites l'utilisateur doit s'authentifier.
     */

  }, {
    key: "getOptions",
    value: function getOptions() {
      var options = [];

      for (var i in this.items.data) {
        var term = this.items.data[i];

        if (this.entity_type_id == "user") {
          options.push({
            text: term.attributes.name ? term.attributes.name : term.attributes.display_name,
            value: term.attributes.drupal_internal__uid
          });
        } else if (term.attributes.name) {
          options.push({
            text: term.attributes.name,
            value: term.attributes.drupal_internal__id
          });
        } else if (term.attributes.label) {
          options.push({
            text: term.attributes.label,
            value: term.attributes.drupal_internal__id
          });
        }
      }

      return options;
    }
    /**
     * On a deux cas interne et externe au domaine, et en function de l'environnement
     * on doit utiliser token ou basic authentification.
     * ## approche 1
     * ( On ajoute cette variable en attendant la validation des autres modules de plus
     * il faudra que dans "config" la methode dGet existe, ce qui n'est pas le cas pour certains environnement.
     * gestion-projet-v2 => OK (--mode=dev), error (--mode=prod --> /projets/3248)
     * edit-entity => ??
     * Creation-cv => ??
     * Creation de site web => ??
     * ).
     * ## approche 2
     * faire une boucle.
     */

  }, {
    key: "remplaceConfig",
    value: function remplaceConfig() {
      // On vide l'objet afin d'eviter le bug : https://projets-old.habeuk.com/#/projets/3248
      // utilities = {};
      // console.log("utilities : ", utilities);
      // console.log("newConfig : ", this.newConfig);
      // utilities = this.newConfig;
      for (var i in this.newConfig) {
        _utilities_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z[i] = this.newConfig[i];
      }
    }
  }]);

  return itemsEntity;
}();

/* harmony default export */ __webpack_exports__["Z"] = (itemsEntity);

/***/ })

}]);
//# sourceMappingURL=EntityDrupal.umd.905.js.map