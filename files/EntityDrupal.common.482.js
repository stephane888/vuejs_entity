"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] || []).push([[482],{

/***/ 88482:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ OptionsEntities; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue?vue&type=template&id=14cca942&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form-group',{attrs:{"label":_vm.field.label}},[_c('b-form-radio-group',{attrs:{"options":_vm.options,"name":_vm.field.name},on:{"change":_vm.input},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}})],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(91605);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4367);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(76133);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(92751);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(97330);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(12220);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(87330);
// EXTERNAL MODULE: ../drupal-vuejs/src/App/utilities.js + 1 modules
var utilities = __webpack_require__(80257);
// EXTERNAL MODULE: ../drupal-vuejs/src/App/jsonApi/Confs.js
var Confs = __webpack_require__(59203);
// EXTERNAL MODULE: ../drupal-vuejs/src/App/jsonApi/buildFilter.js
var buildFilter = __webpack_require__(40067);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/itemsEntity.js










var itemsEntity = /*#__PURE__*/function () {
  function itemsEntity(entity_type_id) {
    var bundle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    (0,classCallCheck/* default */.Z)(this, itemsEntity);

    this.entity_type_id = entity_type_id; //

    if (!bundle) {
      bundle = entity_type_id;
    }

    this.url = Confs/* default.baseURl */.Z.baseURl + "/" + this.entity_type_id + "/" + bundle;
    this.items = []; // en function de l'environement on doit ajouter les paramettres de bases.( notament baseUrl, TestDomain, les methodes surchargées ).

    if (config) {
      utilities/* default */.Z = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, utilities/* default */.Z), config);
    }
  }
  /**
   * Recupere les items
   */


  (0,createClass/* default */.Z)(itemsEntity, [{
    key: "get",
    value: function get() {
      var _this = this;

      return new Promise(function (resolv) {
        utilities/* default.dGet */.Z.dGet(_this.url, Confs/* default.headers */.Z.headers).then(function (resp) {
          _this.items = resp.data;
          resolv(resp.data);
        });
      });
    }
    /**
     * Recupere les items
     */

  }, {
    key: "getSearch",
    value: function getSearch(search) {
      var _this2 = this;

      var filter = new buildFilter/* default */.Z();
      filter.addFilter("name", "CONTAINS", search);
      return new Promise(function (resolv) {
        utilities/* default.dGet */.Z.dGet(_this2.url + "?" + filter.query, Confs/* default.headers */.Z.headers).then(function (resp) {
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

      var filter = new buildFilter/* default */.Z();
      filter.addFilter("name", "=", term);
      return new Promise(function (resolv) {
        utilities/* default.dGet */.Z.dGet(_this3.url + "?" + filter.query, Confs/* default.headers */.Z.headers).then(function (resp) {
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

      var filter = new buildFilter/* default */.Z();
      filter.addFilter("tid", "=", id);
      return new Promise(function (resolv, reject) {
        utilities/* default.dGet */.Z.dGet(_this4.url + "?" + filter.query, Confs/* default.headers */.Z.headers).then(function (resp) {
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

      var filter = new buildFilter/* default */.Z();
      filter.addFilter("id", "=", id);
      return new Promise(function (resolv) {
        utilities/* default.get */.Z.get(_this5.url + "?" + filter.query, Confs/* default.headers */.Z.headers).then(function (resp) {
          _this5.items = resp.data;
          resolv(resp.data);
        });
      });
    }
    /**
     * Retourne les termes sous formes de liste d'otpions.
     */

  }, {
    key: "getOptions",
    value: function getOptions() {
      var options = [];

      for (var i in this.items.data) {
        var term = this.items.data[i];
        if (term.attributes.name && term.attributes.drupal_internal__uid) options.push({
          text: term.attributes.name,
          value: term.attributes.drupal_internal__uid
        });
      }

      return options;
    }
  }]);

  return itemsEntity;
}();

/* harmony default export */ var jsonApi_itemsEntity = (itemsEntity);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js + 85 modules
var loadField = __webpack_require__(75878);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue?vue&type=script&lang=js&

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
  name: "OptionsTaxonomy",
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
  },
  methods: {
    loadTerms: function loadTerms() {
      var _this = this;

      var vocabulary = this.getFistVocab();
      console.log("vocabulary : ", vocabulary);

      if (vocabulary && loadField/* default.config */.Z.config) {
        var terms = new jsonApi_itemsEntity(vocabulary, vocabulary, loadField/* default.config */.Z.config);
        terms.get().then(function () {
          _this.options = terms.getOptions();
        });
      }
    },
    getFistVocab: function getFistVocab() {
      if (this.field.definition_settings.handler_settings.target_bundles) {
        var keys = Object.keys(this.field.definition_settings.handler_settings.target_bundles);
        return this.field.definition_settings.handler_settings.target_bundles[keys[0]];
      } else if (this.field.definition_settings.target_type) {
        return this.field.definition_settings.target_type;
      } else return null;
    },
    input: function input(val) {
      var vals = [];
      vals.push({
        target_id: val
      });
      this.$emit("setValue", vals);
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

/***/ })

}]);
//# sourceMappingURL=EntityDrupal.common.482.js.map