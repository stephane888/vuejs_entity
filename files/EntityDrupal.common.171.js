((typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] || []).push([[171],{

/***/ 62171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MultiSelectEntities; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/MultiSelectEntities.vue?vue&type=template&id=6a20e6dd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ValidationProvider',{attrs:{"name":_vm.fullname,"rules":_vm.getRules()},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('div',{staticClass:"d-none for-test"},[_vm._v("MultiSelectEntities : "+_vm._s(_vm.field.type))]),_c('b-form-group',{attrs:{"label":_vm.field.label,"description":_vm.field.description}},[_c('div',{staticClass:"autocomplete"},[_c('multiselect',{attrs:{"options":_vm.options,"custom-label":_vm.nameWithLang,"placeholder":"","label":"text","track-by":"text","show-no-results":true,"show-labels":false,"loading":_vm.isLoading,"multiple":_vm.cardinality,"allow-empty":true},on:{"search-change":_vm.asyncFind},model:{value:(_vm.value_computed),callback:function ($$v) {_vm.value_computed=$$v},expression:"value_computed"}},[_c('template',{slot:"noResult"},[_c('span',{staticClass:"option__title"},[_vm._v(" Aucun contenu ne correspond à votre recherche ")])]),_c('template',{slot:"placeholder"},[_c('span',{staticClass:"option__title"},[_vm._v(" Aucun contenu ... ")])]),_c('template',{slot:"noOptions"},[_c('span',{staticClass:"option__title"},[_vm._v(" Saisir un ou plusieurs caractères ... ")])])],2),_c('div',{staticClass:"text-danger"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)],1)])]}}])})}
var staticRenderFns = []


// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(60343);
// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(67399);
// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(11566);
// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(91605);
// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__(51386);
// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__(95580);
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);
// EXTERNAL MODULE: ../drupal-vuejs/src/App/jsonApi/itemsEntity.js
var itemsEntity = __webpack_require__(58938);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js + 141 modules
var loadField = __webpack_require__(59445);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/MultiSelectEntities.vue?vue&type=script&lang=js&




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
//




/* harmony default export */ var MultiSelectEntitiesvue_type_script_lang_js_ = ({
  name: "MultiSelectEntities",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_,
    Multiselect: (vue_multiselect_min_default())
  },
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
    },
    parentName: {
      type: String,
      required: true
    },

    /**
     * Pour effeutuer les requetes, certains champs initialise leur configuration, cela fontionne si l'application est interne au site.
     * Mais dans le cadre d'une applcation decouplé, il faut utiliser la config definie par l'applicationde base. (dans ce cas on met true)
     */
    overrideConfig: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isLoading: false,
      options: [],
      value_select: null
    };
  },
  computed: {
    fullname: function fullname() {
      return this.parentName + this.field.name;
    },
    cardinality: function cardinality() {
      if (this.field.cardinality === -1) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * @see https://skirtles-code.github.io/vue-examples/patterns/computed-v-model.html
     */
    value_computed: {
      get: function get() {
        return this.value_select;
      },
      set: function set(val) {
        this.updateValue(val);
      }
    }
  },
  // watch: {
  //   /**
  //    * L'objectif est que cette valeur soit un reflet de la valeur contenu dans l'entité.
  //    * ( il ya un probleme avec le watch, des que la valeur change, il envoit les données,
  //    *  ce qui est faux, c'est unqiuement à la modification de l'utilisateur ).
  //    * @param {*} val
  //    */
  //   // value_select(val) {
  //   //   if (this.cardinality) {
  //   //     const vals = [];
  //   //     val.forEach((item) => {
  //   //       vals.push({ target_id: item.value });
  //   //     });
  //   //     this.setValue(vals);
  //   //   } else {
  //   //     const vals = [];
  //   //     vals.push({ target_id: val.value });
  //   //     this.setValue(vals);
  //   //   }
  //   // },
  // },
  mounted: function mounted() {
    this.loadDefaults();
  },
  methods: {
    /**
     *
     * @param {*} tid
     */
    getTermById: function getTermById(tid) {
      var _this = this;

      var entity_type_id = this.getFistVocab();

      if (entity_type_id && loadField/* default.config */.Z.config) {
        var bundle = this.field.definition_settings.bundle_entity_type_id ? this.field.definition_settings.bundle_entity_type_id : entity_type_id;
        var terms = new itemsEntity/* default */.Z(entity_type_id, bundle, loadField/* default.config */.Z.config);

        if (this.overrideConfig) {
          terms.remplaceConfig();
          console.log("getTermById :::", this.overrideConfig);
        }

        this.isLoading = true;
        terms.getValueById(tid).then(function () {
          var options = terms.getOptions();

          if (options[0]) {
            _this.options.push(options[0]);

            if (_this.cardinality) {
              _this.value_select.push(options[0]);
            } else if (options[0]) _this.value_select = options[0];
          }

          _this.isLoading = false;
        }).catch(function () {
          _this.isLoading = false;
        });
      }
    },

    /**
     *
     */
    loadDefaults: function loadDefaults() {
      var _this2 = this;

      this.value_select = [];
      this.model[this.field.name].forEach(function (item) {
        _this2.getTermById(item.target_id);
      });
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
     * @param {*} search
     */
    asyncFind: function asyncFind(search) {
      var _this3 = this;

      if (search.length >= 2) {
        var entity_type_id = this.getFistVocab();

        if (entity_type_id && loadField/* default.config */.Z.config) {
          var bundle = this.field.definition_settings.bundle_entity_type_id ? this.field.definition_settings.bundle_entity_type_id : entity_type_id;
          var terms = new itemsEntity/* default */.Z(entity_type_id, bundle, loadField/* default.config */.Z.config);

          if (this.overrideConfig) {
            terms.remplaceConfig();
          }

          this.isLoading = true;
          terms.getSearch(search).then(function () {
            _this3.options = terms.getOptions();
            _this3.isLoading = false;
          }).catch(function () {
            _this3.isLoading = false;
          });
        }
      }
    },

    /**
     * cette fonction est utiliser pour mettre à jour les données dans l'entité.
     * @deprecated
     * @param {*} input
     */
    // selectUser(input) {
    //   const vals = this.model[this.field.name];
    //   vals.push({ target_id: input.value });
    //   this.setValue(vals);
    // },
    nameWithLang: function nameWithLang(_ref) {
      var text = _ref.text;
      return "".concat(text);
    },

    /**
     *
     * @param {*} vals
     */
    setValue: function setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.fullname
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.fullname
      });
    },

    /**
     *
     */
    getRules: function getRules() {
      return loadField/* default.getRules */.Z.getRules(this.field);
    },
    updateValue: function updateValue(val) {
      //met à jour la valeur de value_computed
      this.value_select = val;

      if (this.cardinality) {
        var vals = [];
        if (val && val.length) val.forEach(function (item) {
          vals.push({
            target_id: item.value
          });
        });
        this.setValue(vals);
      } else {
        var _vals = [];
        if (val && val.value) _vals.push({
          target_id: val.value
        });
        this.setValue(_vals);
      }
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/MultiSelectEntities.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_MultiSelectEntitiesvue_type_script_lang_js_ = (MultiSelectEntitiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/MultiSelectEntities.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Ressouces_MultiSelectEntitiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MultiSelectEntities = (component.exports);

/***/ }),

/***/ 58938:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _siteweb_AppVuejs_create_website_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76133);
/* harmony import */ var _siteweb_AppVuejs_create_website_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92751);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97330);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12220);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99215);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61934);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87330);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80257);
/* harmony import */ var _Confs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59203);
/* harmony import */ var _buildFilter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40067);











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

/***/ }),

/***/ 4174:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(51296);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ 56239:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(87852);
var classof = __webpack_require__(34367);
var wellKnownSymbol = __webpack_require__(51296);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ 43984:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isRegExp = __webpack_require__(56239);

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ 99215:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(95276);
var $includes = (__webpack_require__(78174).includes);
var fails = __webpack_require__(52462);
var addToUnscopables = __webpack_require__(96215);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 61934:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(95276);
var uncurryThis = __webpack_require__(49410);
var notARegExp = __webpack_require__(43984);
var requireObjectCoercible = __webpack_require__(28376);
var toString = __webpack_require__(57491);
var correctIsRegExpLogic = __webpack_require__(4174);

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ })

}]);
//# sourceMappingURL=EntityDrupal.common.171.js.map