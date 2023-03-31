"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] || []).push([[36],{

/***/ 63036:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ OptionsAllowedValues; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsAllowedValues.vue?vue&type=template&id=6f32c0c1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form-group',{attrs:{"label":_vm.field.label}},[(_vm.field.type == 'options_select')?_c('b-form-select',{attrs:{"options":_vm.options_allowed_values},on:{"change":_vm.input},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}):_c('b-form-radio-group',{attrs:{"options":_vm.options_allowed_values,"name":_vm.field.name},on:{"change":_vm.input},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}})],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(91605);
// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(60343);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsAllowedValues.vue?vue&type=script&lang=js&


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
/* harmony default export */ var OptionsAllowedValuesvue_type_script_lang_js_ = ({
  name: "OptionsAllowedValues",
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
  computed: {
    options_allowed_values: function options_allowed_values() {
      var options = [];

      if (this.field.definition_settings.allowed_values) {
        for (var i in this.field.definition_settings.allowed_values) {
          options.push({
            value: i,
            text: this.field.definition_settings.allowed_values[i]
          });
        }
      }

      return options;
    },
    is_target_type: function is_target_type() {
      if (this.field.definition_settings.target_type) return true;else return false;
    }
  },
  mounted: function mounted() {
    this.selected = this.getValue();
  },
  methods: {
    getFistVocab: function getFistVocab() {
      if (this.field.definition_settings.handler_settings.target_bundles) {
        var keys = Object.keys(this.field.definition_settings.handler_settings.target_bundles);
        return this.field.definition_settings.handler_settings.target_bundles[keys[0]];
      } else return null;
    },
    input: function input(val) {
      var vals = [];
      if (this.is_target_type) vals.push({
        target_id: val
      });else vals.push({
        value: val
      });
      this.$emit("setValue", vals);
    },
    getValue: function getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        if (this.is_target_type) return this.model[this.field.name][0].target_id;else return this.model[this.field.name][0].value;
      }

      return this.model[this.field.name][0].value;
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsAllowedValues.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_OptionsAllowedValuesvue_type_script_lang_js_ = (OptionsAllowedValuesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsAllowedValues.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Ressouces_OptionsAllowedValuesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OptionsAllowedValues = (component.exports);

/***/ })

}]);
//# sourceMappingURL=EntityDrupal.umd.36.js.map