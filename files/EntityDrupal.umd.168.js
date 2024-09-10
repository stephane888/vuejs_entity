"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] || []).push([[168],{

/***/ 56168:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MultiSelectTaxo; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/MultiSelectTaxo.vue?vue&type=template&id=bc365446&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ValidationProvider',{attrs:{"name":_vm.fullname,"rules":_vm.getRules()},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-form-group',{attrs:{"label":_vm.field.label,"description":_vm.field.description}},[_c('div',{staticClass:"autocomplete"},[_c('multiselect',{attrs:{"options":_vm.options,"custom-label":_vm.nameWithLang,"placeholder":"","label":"text","track-by":"text","show-no-results":true,"show-labels":false,"loading":_vm.isLoading,"multiple":_vm.cardinality,"allow-empty":true},on:{"search-change":_vm.asyncFind},model:{value:(_vm.value_computed),callback:function ($$v) {_vm.value_computed=$$v},expression:"value_computed"}},[_c('template',{slot:"noResult"},[_c('span',{staticClass:"option__title"},[_vm._v(" Aucun contenu ne correspond à votre recherche ")])]),_c('template',{slot:"placeholder"},[_c('span',{staticClass:"option__title"},[_vm._v(" Aucun contenu ... ")])]),_c('template',{slot:"noOptions"},[_c('span',{staticClass:"option__title"},[_vm._v(" Saisir un ou plusieurs caractères ... ")])])],2),_c('div',{staticClass:"text-danger"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)],1)])]}}])})}
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
var vee_validate_esm = __webpack_require__(49236);
// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__(20177);
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);
// EXTERNAL MODULE: ../drupal-vuejs/src/App/jsonApi/termsTaxo.js
var termsTaxo = __webpack_require__(46165);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js + 138 modules
var loadField = __webpack_require__(45162);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/MultiSelectTaxo.vue?vue&type=script&lang=js&




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




/* harmony default export */ var MultiSelectTaxovue_type_script_lang_js_ = ({
  name: "MultiSelectTaxo",
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
  //    * @param {*} val
  //    */
  //   value_select(val) {
  //     if (this.cardinality) {
  //       const vals = [];
  //       val.forEach((item) => {
  //         vals.push({ target_id: item.value });
  //       });
  //       this.setValue(vals);
  //     } else {
  //       const vals = [];
  //       if (val) vals.push({ target_id: val.value });
  //       this.setValue(vals);
  //     }
  //   },
  // },
  mounted: function mounted() {
    this.loadDefaults();
  },
  methods: {
    /**
     *
     * @param {*} tid
     */
    getTermByTid: function getTermByTid(tid) {
      var _this = this;

      this.isLoading = true; // Doit etre dynamique.

      var vocabulary = this.getFistVocab();
      var terms = new termsTaxo/* default */.Z(vocabulary);
      terms.getValueByTid(tid).then(function () {
        var options = terms.getOptions();
        _this.options = options;

        if (_this.cardinality) {
          _this.value_select = options;
        } else if (options[0]) _this.value_select = options[0];

        _this.isLoading = false;
      }).catch(function () {
        _this.isLoading = false;
      });
    },

    /**
     *
     */
    loadDefaults: function loadDefaults() {
      var _this2 = this;

      this.model[this.field.name].forEach(function (item) {
        _this2.getTermByTid(item.target_id);
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
        // Doit etre dynamique.
        var vocabulary = this.getFistVocab();
        var terms = new termsTaxo/* default */.Z(vocabulary);
        this.isLoading = true;
        terms.getSearch(search).then(function () {
          _this3.options = terms.getOptions();
          _this3.isLoading = false;
        });
      }
    },
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
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/MultiSelectTaxo.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_MultiSelectTaxovue_type_script_lang_js_ = (MultiSelectTaxovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/MultiSelectTaxo.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Ressouces_MultiSelectTaxovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MultiSelectTaxo = (component.exports);

/***/ })

}]);
//# sourceMappingURL=EntityDrupal.umd.168.js.map