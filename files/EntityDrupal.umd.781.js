"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] || []).push([[781],{

/***/ 1781:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ formRender; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/formRender.vue?vue&type=template&id=71ffa4be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c(_vm.render_template,{tag:"component"})],1)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/renderByStep.vue?vue&type=template&id=773cfbae&
var renderByStepvue_type_template_id_773cfbae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"step-donneesite mx-auto text-center"},[_c('ValidationObserver',{attrs:{"tag":"form"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_vm._l((_vm.buildFields()),function(render,k){return _c(render.template,{key:k,tag:"component",attrs:{"field":render.field,"model":render.model,"fieldName":render.fieldName,"class_css":['fieldset-wrapper', render.field.type]}})}),_c('div',[_c('nextPreviewVue',{attrs:{"validation_form":v}})],1)]}}])})],1)}
var renderByStepvue_type_template_id_773cfbae_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(6473);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(7203);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(6372);
// EXTERNAL MODULE: ./src/rootConfig.js + 71 modules
var rootConfig = __webpack_require__(9491);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fields/drupal-string.vue?vue&type=template&id=fee6182c&
var drupal_stringvue_type_template_id_fee6182c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css},[_c('ValidationProvider',{attrs:{"name":_vm.field.name,"rules":_vm.getRules()},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-form-group',{attrs:{"label":_vm.field.label,"description":_vm.field.description}},[_vm._l((_vm.model[_vm.field.name]),function(val,k){return _c('div',{key:k,staticClass:"field-item-value"},[_c('b-form-input',{attrs:{"placeholder":_vm.field.placeholder,"state":_vm.getValidationState(v),"name":_vm.field.name},model:{value:(val.value),callback:function ($$v) {_vm.$set(val, "value", $$v)},expression:"val.value"}})],1)}),(v.errors)?_c('div',{staticClass:"text-danger my-2"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0):_vm._e()],2)]}}])})],1)}
var drupal_stringvue_type_template_id_fee6182c_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__(9236);
// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(4684);
;// CONCATENATED MODULE: ./src/components/fields/vee-validation-rules.js


 // No message specified.

(0,vee_validate_esm/* extend */.l7)("email", rules/* email */.Do); // Override the default message.

(0,vee_validate_esm/* extend */.l7)("required", (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rules/* required */.C1), {}, {
  message: "Ce champs est requis"
}));
(0,vee_validate_esm/* extend */.l7)("alpha", rules/* alpha */.Fq);
(0,vee_validate_esm/* extend */.l7)("alpha", rules/* numeric */.uR); //export default extend;
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fields/drupal-string.vue?vue&type=script&lang=js&
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



/* harmony default export */ var drupal_stringvue_type_script_lang_js_ = ({
  name: "drupal-string",
  props: {
    class_css: {
      type: [Array]
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    }
  },
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  methods: {
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
          validated = _ref.validated,
          _ref$valid = _ref.valid,
          valid = _ref$valid === void 0 ? null : _ref$valid;
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules: function getRules() {
      return loadField.getRules(this.field);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/fields/drupal-string.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_drupal_stringvue_type_script_lang_js_ = (drupal_stringvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/fields/drupal-string.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  fields_drupal_stringvue_type_script_lang_js_,
  drupal_stringvue_type_template_id_fee6182c_render,
  drupal_stringvue_type_template_id_fee6182c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_string = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fields/drupal-color.vue?vue&type=template&id=41b1cc6c&
var drupal_colorvue_type_template_id_41b1cc6c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css},[_c('b-form-group',{attrs:{"label":_vm.field.label,"description":_vm.field.description}},_vm._l((_vm.model[_vm.field.name]),function(val,k){return _c('div',{key:k,staticClass:"field-item-value"},[_c('b-form-input',{attrs:{"placeholder":_vm.field.placeholder,"type":"color"},model:{value:(val.value),callback:function ($$v) {_vm.$set(val, "value", $$v)},expression:"val.value"}})],1)}),0)],1)}
var drupal_colorvue_type_template_id_41b1cc6c_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fields/drupal-color.vue?vue&type=script&lang=js&
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
/* harmony default export */ var drupal_colorvue_type_script_lang_js_ = ({
  name: "drupal-string",
  props: {
    class_css: {
      type: [Array]
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    }
  }
});
;// CONCATENATED MODULE: ./src/components/fields/drupal-color.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_drupal_colorvue_type_script_lang_js_ = (drupal_colorvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/fields/drupal-color.vue





/* normalize component */
;
var drupal_color_component = (0,componentNormalizer/* default */.Z)(
  fields_drupal_colorvue_type_script_lang_js_,
  drupal_colorvue_type_template_id_41b1cc6c_render,
  drupal_colorvue_type_template_id_41b1cc6c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_color = (drupal_color_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fields/drupal-boolean.vue?vue&type=template&id=f63ae06c&
var drupal_booleanvue_type_template_id_f63ae06c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css,attrs:{"field":"drupal_boolean"}},[_c('div',{staticClass:"field-item-value js-form-type-radio",attrs:{"format_val":_vm.format_val}},[_c('ValidationProvider',{attrs:{"name":_vm.field.name,"rules":_vm.getRules()},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-form-group',{attrs:{"label":_vm.field.label,"name":_vm.field.name}},[_c('div',{staticClass:"fieldset-wrapper"},[_c('div',{staticClass:"radio"},_vm._l((_vm.field.entity_form_settings.list_options),function(option,o){return _c('b-form-radio',{key:o,staticClass:"form-check",attrs:{"name":_vm.field.name,"value":option.value,"state":_vm.getValidationState(v)},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},[_c('b-img',{attrs:{"thumbnail":"","fluid":"","src":option.image_url,"alt":"Image 1"}}),_c('div',{staticClass:"mt-5"},[_vm._v(_vm._s(option.label))]),(
                  option.description.value && option.description.value !== ''
                )?_c('div',{staticClass:"mt-5 text-hover",domProps:{"innerHTML":_vm._s(option.description.value)}}):_vm._e()],1)}),1),(v.errors)?_c('div',{staticClass:"text-danger my-2"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0):_vm._e()])])]}}])})],1)])}
var drupal_booleanvue_type_template_id_f63ae06c_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fields/drupal-boolean.vue?vue&type=script&lang=js&



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
//
//



/* harmony default export */ var drupal_booleanvue_type_script_lang_js_ = ({
  name: "drupal-boolean",
  props: {
    class_css: {
      type: [Array]
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    }
  },
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  data: function data() {
    return {
      selected: null
    };
  },
  mounted: function mounted() {
    this.getImage();
  },
  watch: {
    /**
     * Lorsque le composant est chargé plusieurs durant le processus, on est obligé de forcer la MAJ des images si le nom change.
     * ( Idealement on devrait charger des instances du champs pour un espace bien donnée ).
     */
    fieldName: function fieldName() {
      this.getImage();
    }
  },
  methods: {
    getImage: function getImage() {
      var _this = this;

      this.field.entity_form_settings.list_options.forEach(function (option) {
        if (!option.image_url) _this.$set(option, "image_url", "");

        if (option.image[0] && option.image_url == "") {
          loadField.getImageUrl(option.image[0]).then(function (resp) {
            option.image_url = resp.data;
          });
        }
      });
    },
    setValue: function setValue(vals) {
      this.$store.commit("renderByStep/setValue", {
        value: vals,
        fieldName: this.fieldName
      });
    },
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
          validated = _ref.validated,
          _ref$valid = _ref.valid,
          valid = _ref$valid === void 0 ? null : _ref$valid;
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules: function getRules() {
      return loadField.getRules(this.field);
    }
  },
  computed: {
    format_val: function format_val() {
      var vals = [];

      if (this.selected !== null) {
        vals.push({
          value: this.selected
        });
      }

      this.setValue(vals);
      return vals;
    },
    fieldName: function fieldName() {
      return this.field.name;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/fields/drupal-boolean.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_drupal_booleanvue_type_script_lang_js_ = (drupal_booleanvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/fields/drupal-boolean.vue





/* normalize component */
;
var drupal_boolean_component = (0,componentNormalizer/* default */.Z)(
  fields_drupal_booleanvue_type_script_lang_js_,
  drupal_booleanvue_type_template_id_f63ae06c_render,
  drupal_booleanvue_type_template_id_f63ae06c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_boolean = (drupal_boolean_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fields/drupal-list-string.vue?vue&type=template&id=a2184a04&
var drupal_list_stringvue_type_template_id_a2184a04_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css},[_c('div',{staticClass:"field-item-value js-form-type-checkbox",attrs:{"format_val":_vm.format_val}},[_c('ValidationProvider',{attrs:{"name":_vm.field.name,"rules":_vm.getRules()},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-form-group',{attrs:{"label":_vm.field.label}},[_c('div',{staticClass:"fieldset-wrapper"},[_c('div',{staticClass:"checkbox"},[_c('b-form-checkbox-group',{model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},_vm._l((_vm.field.entity_form_settings.list_options),function(option,o){return _c('b-form-checkbox',{key:o,staticClass:"form-check",attrs:{"value":option.value}},[_c('div',[_c('b-img',{attrs:{"thumbnail":"","fluid":"","src":option.image_url,"alt":"Image 1"}})],1),_vm._v(" "+_vm._s(option.label)+" "),(
                    option.description.value &&
                    option.description.value !== ''
                  )?_c('div',{staticClass:"mt-5 text-hover",domProps:{"innerHTML":_vm._s(option.description.value)}}):_vm._e()])}),1)],1),(v.errors)?_c('div',{staticClass:"text-danger my-2"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0):_vm._e()])])]}}])})],1)])}
var drupal_list_stringvue_type_template_id_a2184a04_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fields/drupal-list-string.vue?vue&type=script&lang=js&



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
//
//
//
//
//
//



/* harmony default export */ var drupal_list_stringvue_type_script_lang_js_ = ({
  name: "drupal-list-string",
  props: {
    class_css: {
      type: [Array]
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object],
      required: true
    }
  },
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  data: function data() {
    return {
      selected: []
    };
  },
  mounted: function mounted() {
    // lorsque le composant s'initialise on charge les images.
    this.getImage();
  },
  watch: {
    /**
     * Lorsque le composant est chargé plusieurs durant le processus, on est obligé de forcer la MAJ des images si le nom change.
     * ( Idealement on devrait charger des instances du champs pour un espace bien donnée ).
     */
    fieldName: function fieldName() {
      this.getImage();
    }
  },
  methods: {
    getImage: function getImage() {
      var _this = this;

      this.field.entity_form_settings.list_options.forEach(function (option) {
        if (!option.image_url) _this.$set(option, "image_url", "");

        if (option.image[0] && option.image_url == "") {
          loadField.getImageUrl(option.image[0]).then(function (resp) {
            option.image_url = resp.data;
          });
        }
      });
    },
    setValue: function setValue(vals) {
      this.$store.commit("renderByStep/setValue", {
        value: vals,
        fieldName: this.fieldName
      });
    },
    getRules: function getRules() {
      return loadField.getRules(this.field);
    }
  },
  computed: {
    format_val: function format_val() {
      var vals = [];

      if (this.selected) {
        this.selected.forEach(function (item) {
          vals.push({
            value: item
          });
        });
      }

      this.setValue(vals);
      return vals;
    },
    fieldName: function fieldName() {
      return this.field.name;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/fields/drupal-list-string.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_drupal_list_stringvue_type_script_lang_js_ = (drupal_list_stringvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/fields/drupal-list-string.vue





/* normalize component */
;
var drupal_list_string_component = (0,componentNormalizer/* default */.Z)(
  fields_drupal_list_stringvue_type_script_lang_js_,
  drupal_list_stringvue_type_template_id_a2184a04_render,
  drupal_list_stringvue_type_template_id_a2184a04_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_list_string = (drupal_list_string_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fields/html-render.vue?vue&type=template&id=0b37ea9c&
var html_rendervue_type_template_id_0b37ea9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.field.content)}})])}
var html_rendervue_type_template_id_0b37ea9c_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fields/html-render.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var html_rendervue_type_script_lang_js_ = ({
  props: {
    class_css: {
      type: [Array]
    },
    field: {
      type: Object,
      required: true
    }
  }
});
;// CONCATENATED MODULE: ./src/components/fields/html-render.vue?vue&type=script&lang=js&
 /* harmony default export */ var fields_html_rendervue_type_script_lang_js_ = (html_rendervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/fields/html-render.vue





/* normalize component */
;
var html_render_component = (0,componentNormalizer/* default */.Z)(
  fields_html_rendervue_type_script_lang_js_,
  html_rendervue_type_template_id_0b37ea9c_render,
  html_rendervue_type_template_id_0b37ea9c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var html_render = (html_render_component.exports);
;// CONCATENATED MODULE: ./src/components/fields/loadField.js








/* harmony default export */ var loadField = ((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rootConfig/* default */.Z), {}, {
  getField: function getField(field) {
    var key = field.type;
    if (key == "list_string" && field.cardinality == 1) key = "boolean";
    console.log(key);
    var template;

    switch (key) {
      case "string":
        template = drupal_string;
        break;

      case "color_theme_field_type":
        template = drupal_color;
        break;

      case "boolean":
        template = drupal_boolean;
        break;

      case "list_string":
        template = drupal_list_string;
        break;

      case "render_html":
        template = html_render;
        break;

      case "text_long":
        template = html_render;
        break;

      default:
        break;
    }

    return template;
  },
  getImageUrl: function getImageUrl(fid) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "medium";
    return this.get("/vuejs-entity/image/" + fid + "/" + style);
  },
  getRules: function getRules(field) {
    var rules = {};

    if (field.constraints) {
      for (var i in field.constraints) {
        if (i == "NotNull") {
          rules["required"] = true;
        }
      }
    }

    return rules;
  }
}));
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/nextPreview.vue?vue&type=template&id=4a403a64&
var nextPreviewvue_type_template_id_4a403a64_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-around align-items-center step-donneesite--submit",attrs:{"check_validation":_vm.check_validation}},[(_vm.current_step)?_c('b-button',{attrs:{"variant":"secondary"},on:{"click":_vm.previewStep}},[_c('b-icon',{attrs:{"icon":"arrow-left"}}),_vm._v(" Precedent ")],1):_vm._e(),(_vm.count_step < _vm.steppers.length)?_c('b-button',{attrs:{"variant":"primary","disabled":_vm.disabled},on:{"click":_vm.nextStep}},[_vm._v(" Suivant "),_c('b-icon',{attrs:{"icon":"arrow-right"}})],1):_vm._e()],1)}
var nextPreviewvue_type_template_id_4a403a64_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/nextPreview.vue?vue&type=script&lang=js&

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

/* harmony default export */ var nextPreviewvue_type_script_lang_js_ = ({
  name: "next-preview",
  props: {
    validation_form: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      disabled: false
    };
  },
  computed: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)("renderByStep", {
    current_step: function current_step(state) {
      return state.current_step;
    },
    steppers: function steppers(state) {
      return state.steppers;
    }
  })), {}, {
    count_step: function count_step() {
      return this.current_step + 1;
    },
    check_validation: function check_validation() {
      if (this.disabled && this.validation_form.valid) {
        this.validationStep();
        return true;
      }

      return false;
    }
  }),
  methods: {
    nextStep: function nextStep() {
      if (this.validationStep()) this.$store.commit("renderByStep/nextStep");
    },
    previewStep: function previewStep() {
      this.$store.commit("renderByStep/previewStep");
    },
    validationStep: function validationStep() {
      if (this.validation_form.valid) {
        this.disabled = false;
        return true;
      } else {
        this.validation_form.validate();
        this.disabled = true;
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/components/formRender/nextPreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var formRender_nextPreviewvue_type_script_lang_js_ = (nextPreviewvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/formRender/nextPreview.vue





/* normalize component */
;
var nextPreview_component = (0,componentNormalizer/* default */.Z)(
  formRender_nextPreviewvue_type_script_lang_js_,
  nextPreviewvue_type_template_id_4a403a64_render,
  nextPreviewvue_type_template_id_4a403a64_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var nextPreview = (nextPreview_component.exports);
// EXTERNAL MODULE: ./node_modules/ckeditor4-vue/dist/ckeditor.js
var ckeditor = __webpack_require__(8101);
var ckeditor_default = /*#__PURE__*/__webpack_require__.n(ckeditor);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/renderByStep.vue?vue&type=script&lang=js&





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






external_commonjs_vue_commonjs2_vue_root_Vue_default().use((ckeditor_default()));
/* harmony default export */ var renderByStepvue_type_script_lang_js_ = ({
  name: "renderByStep",
  data: function data() {
    return {
      fields: []
    };
  },
  components: {
    nextPreviewVue: nextPreview,
    ValidationObserver: vee_validate_esm/* ValidationObserver */._j
  },
  mounted: function mounted() {
    this.buildFields();
  },
  computed: (0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)("renderByStep", {
    form: function form(state) {
      return state.form;
    },
    current_step: function current_step(state) {
      return state.current_step;
    },
    model: function model(state) {
      return state.model;
    },
    steppers: function steppers(state) {
      return state.steppers;
    }
  })),
  methods: {
    // Contruit les champs de l'etape.
    buildFields: function buildFields() {
      var _this = this;

      console.log("buildFields");
      var fields = [];
      var step = this.steppers[this.current_step];
      step.keys.forEach(function (fieldName) {
        if (_this.form[fieldName]) {
          if (_this.model[fieldName]) fields.push({
            template: loadField.getField(_this.form[fieldName]),
            field: _this.form[fieldName],
            model: _this.model
          });else fields.push({
            template: loadField.getField(_this.form[fieldName]),
            field: _this.form[fieldName]
          });
        }
      });
      return fields;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/formRender/renderByStep.vue?vue&type=script&lang=js&
 /* harmony default export */ var formRender_renderByStepvue_type_script_lang_js_ = (renderByStepvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/formRender/renderByStep.vue





/* normalize component */
;
var renderByStep_component = (0,componentNormalizer/* default */.Z)(
  formRender_renderByStepvue_type_script_lang_js_,
  renderByStepvue_type_template_id_773cfbae_render,
  renderByStepvue_type_template_id_773cfbae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var renderByStep = (renderByStep_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/AboutView.vue?vue&type=template&id=48dedea6&
var AboutViewvue_type_template_id_48dedea6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var AboutViewvue_type_template_id_48dedea6_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about"},[_c('h1',[_vm._v("This is an about page")])])}]


;// CONCATENATED MODULE: ./src/views/AboutView.vue?vue&type=template&id=48dedea6&

;// CONCATENATED MODULE: ./src/views/AboutView.vue

var script = {}


/* normalize component */
;
var AboutView_component = (0,componentNormalizer/* default */.Z)(
  script,
  AboutViewvue_type_template_id_48dedea6_render,
  AboutViewvue_type_template_id_48dedea6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AboutView = (AboutView_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/formRender.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var formRendervue_type_script_lang_js_ = ({
  data: function data() {
    return {
      render_template: null,
      type_render: "by-step"
    };
  },
  name: "formRender",
  mounted: function mounted() {
    this.$store.commit("renderByStep/loadForm");
    this.getRender();
  },
  methods: {
    getRender: function getRender() {
      switch (this.type_render) {
        case "by-step":
          this.render_template = renderByStep;
          break;

        default:
          this.render_template = AboutView;
          break;
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/views/formRender.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_formRendervue_type_script_lang_js_ = (formRendervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/views/formRender.vue





/* normalize component */
;
var formRender_component = (0,componentNormalizer/* default */.Z)(
  views_formRendervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var formRender = (formRender_component.exports);

/***/ })

}]);
//# sourceMappingURL=EntityDrupal.umd.781.js.map