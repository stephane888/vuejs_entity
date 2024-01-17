"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] || []).push([[555],{

/***/ 46555:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ OptionsTaxonomy; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsTaxonomy.vue?vue&type=template&id=17034ab4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form-group',{attrs:{"label":_vm.field.label}},[_c('b-form-radio-group',{attrs:{"options":_vm.options,"name":_vm.field.name},on:{"change":_vm.input},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}})],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(91605);
// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(60343);
// EXTERNAL MODULE: ../drupal-vuejs/src/App/jsonApi/termsTaxo.js
var termsTaxo = __webpack_require__(46165);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js + 140 modules
var loadField = __webpack_require__(64198);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsTaxonomy.vue?vue&type=script&lang=js&


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


/* harmony default export */ var OptionsTaxonomyvue_type_script_lang_js_ = ({
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
    this.selected = this.getValue();
  },
  methods: {
    loadTerms: function loadTerms() {
      var _this = this;

      var vocabulary = this.getFistVocab();

      if (vocabulary && loadField/* default.config */.Z.config) {
        var terms = new termsTaxo/* default */.Z(vocabulary, loadField/* default.config */.Z.config);
        terms.get().then(function () {
          _this.options = terms.getOptions();
        });
      }
    },
    getFistVocab: function getFistVocab() {
      if (this.field.definition_settings.handler_settings.target_bundles) {
        var keys = Object.keys(this.field.definition_settings.handler_settings.target_bundles);
        return this.field.definition_settings.handler_settings.target_bundles[keys[0]];
      } else return null;
    },
    getValue: function getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0] && this.model[this.field.name][0].target_id) return this.model[this.field.name][0].target_id;
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
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsTaxonomy.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_OptionsTaxonomyvue_type_script_lang_js_ = (OptionsTaxonomyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsTaxonomy.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Ressouces_OptionsTaxonomyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OptionsTaxonomy = (component.exports);

/***/ })

}]);
//# sourceMappingURL=EntityDrupal.umd.555.js.map