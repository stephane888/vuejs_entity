"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] || []).push([[65],{

/***/ 85065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ formRender; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/formRender.vue?vue&type=template&id=1b05b720&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c(_vm.render_template,{tag:"component"})],1)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/renderByStep.vue?vue&type=template&id=24667ad6&
var renderByStepvue_type_template_id_24667ad6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"step-donneesite mx-auto text-center",attrs:{"get_running":_vm.get_running}},[_c('ValidationObserver',{attrs:{"tag":"form"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_vm._l((_vm.fields),function(render,k){return _c(render.template,{key:k,tag:"component",attrs:{"field":render.field,"model":render.model,"class_css":['fieldset-wrapper', render.field.type]}})}),_c('div',[_c('nextPreviewVue',{attrs:{"validation_form":v}})],1)]}}])})],1)}
var renderByStepvue_type_template_id_24667ad6_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(93019);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(47941);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(66992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(41539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(54747);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(13797);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(34665);
// EXTERNAL MODULE: ./src/rootConfig.js
var rootConfig = __webpack_require__(76924);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/drupal-string.vue?vue&type=template&id=43edf636&
var drupal_stringvue_type_template_id_43edf636_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css},[_c('ValidationProvider',{attrs:{"name":_vm.field.name,"rules":_vm.getRules()},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-form-group',{attrs:{"label":_vm.field.label,"description":_vm.field.description}},[_c('div',{staticClass:"field-item-value"},[_c('b-form-input',{attrs:{"placeholder":_vm.field.placeholder,"state":_vm.getValidationState(v),"name":_vm.field.name,"debounce":"500"},on:{"input":_vm.input},model:{value:(_vm.input_value),callback:function ($$v) {_vm.input_value=$$v},expression:"input_value"}})],1),(v.errors)?_c('div',{staticClass:"text-danger my-2"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0):_vm._e()])]}}])})],1)}
var drupal_stringvue_type_template_id_43edf636_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(68309);
// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__(51386);
// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(44493);
;// CONCATENATED MODULE: ./src/components/fieldsDrupal/vee-validation-rules.js


 // No message specified.

(0,vee_validate_esm/* extend */.l7)("email", rules/* email */.Do); // Override the default message.

(0,vee_validate_esm/* extend */.l7)("required", (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rules/* required */.C1), {}, {
  message: "Ce champs est requis"
}));
(0,vee_validate_esm/* extend */.l7)("alpha", rules/* alpha */.Fq);
(0,vee_validate_esm/* extend */.l7)("alpha", rules/* numeric */.uR); //export default extend;
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/drupal-string.vue?vue&type=script&lang=js&

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
  data: function data() {
    return {
      input_value: null
    };
  },
  mounted: function mounted() {
    this.input_value = this.getValue();
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
    },
    setValue: function setValue(vals) {
      this.$store.dispatch("renderByStep/setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValue: function getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        return this.model[this.field.name][0].value;
      }
    },
    input: function input(v) {
      var vals = [];
      vals.push({
        value: v
      });
      this.setValue(vals);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/fieldsDrupal/drupal-string.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_stringvue_type_script_lang_js_ = (drupal_stringvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/fieldsDrupal/drupal-string.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_stringvue_type_script_lang_js_,
  drupal_stringvue_type_template_id_43edf636_render,
  drupal_stringvue_type_template_id_43edf636_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_string = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/drupal-color.vue?vue&type=template&id=1f85cb54&
var drupal_colorvue_type_template_id_1f85cb54_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css},[_c('b-form-group',{attrs:{"label":_vm.field.label,"description":_vm.field.description}},_vm._l((_vm.model[_vm.field.name]),function(val,k){return _c('div',{key:k,staticClass:"field-item-value"},[_c('b-form-input',{attrs:{"placeholder":_vm.field.placeholder,"type":"color"},model:{value:(val.value),callback:function ($$v) {_vm.$set(val, "value", $$v)},expression:"val.value"}})],1)}),0)],1)}
var drupal_colorvue_type_template_id_1f85cb54_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/drupal-color.vue?vue&type=script&lang=js&
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
;// CONCATENATED MODULE: ./src/components/fieldsDrupal/drupal-color.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_colorvue_type_script_lang_js_ = (drupal_colorvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/fieldsDrupal/drupal-color.vue





/* normalize component */
;
var drupal_color_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_colorvue_type_script_lang_js_,
  drupal_colorvue_type_template_id_1f85cb54_render,
  drupal_colorvue_type_template_id_1f85cb54_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_color = (drupal_color_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/drupal-boolean.vue?vue&type=template&id=647858ba&
var drupal_booleanvue_type_template_id_647858ba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css,attrs:{"field":"drupal_boolean"}},[_c('div',{staticClass:"field-item-value js-form-type-radio",attrs:{"format_val":_vm.format_val}},[_c('ValidationProvider',{attrs:{"name":_vm.field.name,"rules":_vm.getRules()},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-form-group',{attrs:{"label":_vm.field.label,"name":_vm.field.name}},[_c('div',{staticClass:"fieldset-wrapper"},[_c('div',{staticClass:"radio"},_vm._l((_vm.field.entity_form_settings.list_options),function(option,o){return _c('b-form-radio',{key:o,staticClass:"form-check",attrs:{"name":_vm.field.name,"value":option.value,"state":_vm.getValidationState(v)},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},[_c('b-img',{attrs:{"thumbnail":"","fluid":"","src":option.image_url,"alt":"Image 1"}}),_c('div',{staticClass:"mt-5"},[_vm._v(_vm._s(option.label))]),(
                  option.description.value && option.description.value !== ''
                )?_c('div',{staticClass:"mt-5 text-hover",domProps:{"innerHTML":_vm._s(option.description.value)}}):_vm._e()],1)}),1),(v.errors)?_c('div',{staticClass:"text-danger my-2"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0):_vm._e()])])]}}])})],1)])}
var drupal_booleanvue_type_template_id_647858ba_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/drupal-boolean.vue?vue&type=script&lang=js&



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
      this.$store.dispatch("renderByStep/setValue", {
        value: vals,
        fieldName: this.field.name
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
;// CONCATENATED MODULE: ./src/components/fieldsDrupal/drupal-boolean.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_booleanvue_type_script_lang_js_ = (drupal_booleanvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/fieldsDrupal/drupal-boolean.vue





/* normalize component */
;
var drupal_boolean_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_booleanvue_type_script_lang_js_,
  drupal_booleanvue_type_template_id_647858ba_render,
  drupal_booleanvue_type_template_id_647858ba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_boolean = (drupal_boolean_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/drupal-list-string.vue?vue&type=template&id=7db50ef8&
var drupal_list_stringvue_type_template_id_7db50ef8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css},[_c('div',{staticClass:"field-item-value js-form-type-checkbox",attrs:{"format_val":_vm.format_val}},[_c('ValidationProvider',{attrs:{"name":_vm.field.name,"rules":_vm.getRules()},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-form-group',{attrs:{"label":_vm.field.label}},[_c('div',{staticClass:"fieldset-wrapper"},[_c('div',{staticClass:"checkbox"},[_c('b-form-checkbox-group',{model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},_vm._l((_vm.field.entity_form_settings.list_options),function(option,o){return _c('b-form-checkbox',{key:o,staticClass:"form-check",attrs:{"value":option.value}},[_c('div',[_c('b-img',{attrs:{"thumbnail":"","fluid":"","src":option.image_url,"alt":"Image 1"}})],1),_c('div',{staticClass:"mt-5"},[_vm._v(_vm._s(option.label))]),(
                    option.description.value &&
                    option.description.value !== ''
                  )?_c('div',{staticClass:"mt-5 text-hover",domProps:{"innerHTML":_vm._s(option.description.value)}}):_vm._e()])}),1)],1),(v.errors)?_c('div',{staticClass:"text-danger my-2"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0):_vm._e()])])]}}])})],1)])}
var drupal_list_stringvue_type_template_id_7db50ef8_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/drupal-list-string.vue?vue&type=script&lang=js&



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
      this.$store.dispatch("renderByStep/setValue", {
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
;// CONCATENATED MODULE: ./src/components/fieldsDrupal/drupal-list-string.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_list_stringvue_type_script_lang_js_ = (drupal_list_stringvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/fieldsDrupal/drupal-list-string.vue





/* normalize component */
;
var drupal_list_string_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_list_stringvue_type_script_lang_js_,
  drupal_list_stringvue_type_template_id_7db50ef8_render,
  drupal_list_stringvue_type_template_id_7db50ef8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_list_string = (drupal_list_string_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/html-render.vue?vue&type=template&id=a9022ae0&
var html_rendervue_type_template_id_a9022ae0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.field.content)}})])}
var html_rendervue_type_template_id_a9022ae0_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/html-render.vue?vue&type=script&lang=js&
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
;// CONCATENATED MODULE: ./src/components/fieldsDrupal/html-render.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_html_rendervue_type_script_lang_js_ = (html_rendervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/fieldsDrupal/html-render.vue





/* normalize component */
;
var html_render_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_html_rendervue_type_script_lang_js_,
  html_rendervue_type_template_id_a9022ae0_render,
  html_rendervue_type_template_id_a9022ae0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var html_render = (html_render_component.exports);
;// CONCATENATED MODULE: ./src/components/fieldsDrupal/loadField.js








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
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/nextPreview.vue?vue&type=template&id=f09d77fa&
var nextPreviewvue_type_template_id_f09d77fa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-between align-items-center step-donneesite--submit mx-auto",attrs:{"check_validation":_vm.check_validation}},[(_vm.current_step && !_vm.creation_running)?_c('b-button',{attrs:{"variant":"secondary"},on:{"click":_vm.previewStep}},[_c('b-icon',{attrs:{"icon":"arrow-left"}}),_vm._v(" Precedent ")],1):_vm._e(),(_vm.count_step < _vm.steppers.length)?_c('b-button',{attrs:{"variant":"primary","disabled":_vm.disabled},on:{"click":_vm.nextStep}},[_vm._v(" Suivant "),_c('b-icon',{attrs:{"icon":"arrow-right"}})],1):_vm._e(),(_vm.count_step >= _vm.steppers.length && !_vm.finish_status)?_c('b-button',{attrs:{"variant":"primary","disabled":_vm.creation_running},on:{"click":_vm.create_site}},[_vm._v(" je cree mon site "),(!_vm.creation_running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"check2","font-scale":"2"}}):_vm._e(),(_vm.creation_running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"arrow-clockwise","font-scale":"2","animation":"spin"}}):_vm._e()],1):_vm._e()],1)}
var nextPreviewvue_type_template_id_f09d77fa_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/nextPreview.vue?vue&type=script&lang=js&

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
  mounted: function mounted() {
    this.ajustStep();
  },
  computed: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)({
    creation_running: function creation_running(state) {
      return state.creation_running;
    },
    steppers: function steppers(state) {
      return state.renderByStep.steppers;
    },
    current_step: function current_step(state) {
      return state.renderByStep.current_step;
    },
    finish_status: function finish_status(state) {
      return state.finish_status;
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
      if (this.validationStep()) {
        this.$store.commit("renderByStep/nextStep");
        this.$router.push({
          path: "/form-render/".concat(this.current_step)
        });
      }
    },
    previewStep: function previewStep() {
      this.$store.commit("renderByStep/previewStep");
      this.$router.push({
        path: "/form-render/".concat(this.current_step)
      });
    },
    validationStep: function validationStep() {
      if (this.validation_form.valid) {
        this.disabled = false;
        return true;
      } else {
        this.validation_form.validate();
        this.disabled = true;
      }
    },
    ajustStep: function ajustStep() {
      var idstep = parseInt(this.$route.params.idstep);

      if (parseInt(this.current_step) !== idstep && idstep <= this.steppers.length) {
        this.$store.commit("renderByStep/nextStep", idstep);
      }
    },
    create_site: function create_site() {
      this.$store.dispatch("create_site");
    } // reset_creation() {
    //   this.$store.dispatch("reset_creation");
    // },

  }
});
;// CONCATENATED MODULE: ./src/components/formRender/nextPreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var formRender_nextPreviewvue_type_script_lang_js_ = (nextPreviewvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/formRender/nextPreview.vue





/* normalize component */
;
var nextPreview_component = (0,componentNormalizer/* default */.Z)(
  formRender_nextPreviewvue_type_script_lang_js_,
  nextPreviewvue_type_template_id_f09d77fa_render,
  nextPreviewvue_type_template_id_f09d77fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var nextPreview = (nextPreview_component.exports);
// EXTERNAL MODULE: ./node_modules/ckeditor4-vue/dist/ckeditor.js
var ckeditor = __webpack_require__(99210);
var ckeditor_default = /*#__PURE__*/__webpack_require__.n(ckeditor);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsLayout/layoutRenderHeader.vue?vue&type=template&id=adee78d4&
var layoutRenderHeadervue_type_template_id_adee78d4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-left"},[_c('div',{staticClass:"accordion",attrs:{"role":"tablist"}},_vm._l((_vm.buildFields()),function(card,c){return _c('b-card',{key:c,staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:('accordion-' + c),expression:"'accordion-' + c"}],attrs:{"block":"","variant":"info"},domProps:{"innerHTML":_vm._s(card.title)}})],1),_c('b-collapse',{attrs:{"id":'accordion-' + c,"visible":"","accordion":"my-accordion-layout-render","role":"tabpanel"}},[_c('b-card-body',_vm._l((card.fields),function(render,k){return _c(render.template,{key:k,tag:"component",attrs:{"field":render.field,"fieldName":render.fieldName,"key_config":render.key_config,"class_css":[]}})}),1)],1)],1)}),1)])}
var layoutRenderHeadervue_type_template_id_adee78d4_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsLayout/fieldText.vue?vue&type=template&id=4ba201bb&
var fieldTextvue_type_template_id_4ba201bb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css},[_c('b-form-group',{attrs:{"label":_vm.field.text.label}},[_c('b-form-input',{attrs:{"name":_vm.fieldName},on:{"input":_vm.input},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}})],1)],1)}
var fieldTextvue_type_template_id_4ba201bb_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsLayout/fieldText.vue?vue&type=script&lang=js&
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
/* harmony default export */ var fieldTextvue_type_script_lang_js_ = ({
  name: "field-text",
  props: {
    class_css: {
      type: Array
    },
    fieldName: {
      type: String,
      required: true
    },
    key_config: {
      type: String,
      required: true
    },
    field: {
      type: Object,
      required: true
    },
    sub_store: {
      type: String,
      default: "storeLayout"
    }
  },
  data: function data() {
    return {
      value: this.field.text.value
    };
  },
  methods: {
    input: function input(val) {
      var payload = {
        key_config: this.key_config,
        fieldName: this.fieldName,
        type: "text",
        value: val
      };
      this.$store.commit(this.sub_store + "/setValue", payload);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/fieldsLayout/fieldText.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsLayout_fieldTextvue_type_script_lang_js_ = (fieldTextvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/fieldsLayout/fieldText.vue





/* normalize component */
;
var fieldText_component = (0,componentNormalizer/* default */.Z)(
  fieldsLayout_fieldTextvue_type_script_lang_js_,
  fieldTextvue_type_template_id_4ba201bb_render,
  fieldTextvue_type_template_id_4ba201bb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var fieldText = (fieldText_component.exports);
;// CONCATENATED MODULE: ./src/components/fieldsLayout/loadField.js


/* harmony default export */ var fieldsLayout_loadField = ({
  getTemplate: function getTemplate(field) {
    var template = null;
    var keys = Object.keys(field);

    switch (keys[0]) {
      case "text":
        template = fieldText;
        break;

      default:
        break;
    }

    return template;
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsLayout/layoutRenderHeader.vue?vue&type=script&lang=js&

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


/* harmony default export */ var layoutRenderHeadervue_type_script_lang_js_ = ({
  name: "layoutRenderHeader",
  computed: (0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)("storeLayout", {
    configuration: function configuration(state) {
      return state.configuration;
    }
  })),
  methods: {
    buildFields: function buildFields() {
      var fields = [];

      for (var i in this.configuration) {
        if (this.configuration[i]["builder-form"]) {
          var subFields = [];

          for (var f in this.configuration[i].fields) {
            subFields.push({
              template: fieldsLayout_loadField.getTemplate(this.configuration[i].fields[f]),
              field: this.configuration[i].fields[f],
              fieldName: f,
              key_config: i
            });
          }

          fields.push({
            title: this.configuration[i].info.title,
            fields: subFields
          });
        }
      }

      return fields;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/fieldsLayout/layoutRenderHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsLayout_layoutRenderHeadervue_type_script_lang_js_ = (layoutRenderHeadervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/fieldsLayout/layoutRenderHeader.vue





/* normalize component */
;
var layoutRenderHeader_component = (0,componentNormalizer/* default */.Z)(
  fieldsLayout_layoutRenderHeadervue_type_script_lang_js_,
  layoutRenderHeadervue_type_template_id_adee78d4_render,
  layoutRenderHeadervue_type_template_id_adee78d4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var layoutRenderHeader = (layoutRenderHeader_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsLayout/layoutRenderFooter.vue?vue&type=template&id=223bfce8&
var layoutRenderFootervue_type_template_id_223bfce8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-left"},[_c('div',{staticClass:"accordion",attrs:{"role":"tablist"}},_vm._l((_vm.buildFields()),function(card,c){return _c('b-card',{key:c,staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:('accordion-' + c),expression:"'accordion-' + c"}],attrs:{"block":"","variant":"info"},domProps:{"innerHTML":_vm._s(card.title)}})],1),_c('b-collapse',{attrs:{"id":'accordion-' + c,"visible":"","accordion":"my-accordion-layout-render","role":"tabpanel"}},[_c('b-card-body',_vm._l((card.fields),function(render,k){return _c(render.template,{key:k,tag:"component",attrs:{"field":render.field,"fieldName":render.fieldName,"key_config":render.key_config,"sub_store":"storeLayoutFooter","class_css":[]}})}),1)],1)],1)}),1)])}
var layoutRenderFootervue_type_template_id_223bfce8_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsLayout/layoutRenderFooter.vue?vue&type=script&lang=js&

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


/* harmony default export */ var layoutRenderFootervue_type_script_lang_js_ = ({
  name: "layoutRenderFooter",
  computed: (0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)("storeLayoutFooter", {
    configuration: function configuration(state) {
      return state.configuration;
    }
  })),
  methods: {
    buildFields: function buildFields() {
      var fields = [];

      for (var i in this.configuration) {
        if (this.configuration[i]["builder-form"]) {
          var subFields = [];

          for (var f in this.configuration[i].fields) {
            subFields.push({
              template: fieldsLayout_loadField.getTemplate(this.configuration[i].fields[f]),
              field: this.configuration[i].fields[f],
              fieldName: f,
              key_config: i
            });
          }

          fields.push({
            title: this.configuration[i].info.title,
            fields: subFields
          });
        }
      }

      return fields;
    },
    saveLayout: function saveLayout() {
      this.$store.dispatch("storeLayoutFooter/saveLayout");
    }
  }
});
;// CONCATENATED MODULE: ./src/components/fieldsLayout/layoutRenderFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsLayout_layoutRenderFootervue_type_script_lang_js_ = (layoutRenderFootervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/fieldsLayout/layoutRenderFooter.vue





/* normalize component */
;
var layoutRenderFooter_component = (0,componentNormalizer/* default */.Z)(
  fieldsLayout_layoutRenderFootervue_type_script_lang_js_,
  layoutRenderFootervue_type_template_id_223bfce8_render,
  layoutRenderFootervue_type_template_id_223bfce8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var layoutRenderFooter = (layoutRenderFooter_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/sections/page-register.vue?vue&type=template&id=5fd413f8&
var page_registervue_type_template_id_5fd413f8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v(" ( en cours de dev connexion ). "),_c('loginGoogle',{staticClass:"mb-3",attrs:{"idHtml":"app-form-login","returnUidInfo":true},on:{"ev_logingoogle":_vm.ev_logingoogle}})],1)}
var page_registervue_type_template_id_5fd413f8_staticRenderFns = []


// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.object.to-string.js
var modules_es_object_to_string = __webpack_require__(97330);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(12220);
// EXTERNAL MODULE: ../wbuutilities/index.js + 70 modules
var wbuutilities = __webpack_require__(84184);
;// CONCATENATED MODULE: ../drupal-vuejs/src/config.js



var config_config = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, wbuutilities/* AjaxBasic */.EC), {}, {
  /**
   * Retoune un entier arleatoire entre [99-999]
   */
  getRandomIntInclusive: function getRandomIntInclusive() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 99;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 999;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});

/* harmony default export */ var src_config = (config_config);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/session.js



/* harmony default export */ var session = ({
  url_session: "/session/token",
  token: null,

  /**
   * Permet d'obtenir le token.
   */
  getToken: function getToken() {
    var _this = this;

    return new Promise(function (resolv) {
      if (_this.token) resolv(_this.token);
      console.log(" Config :: ", src_config.BaseUrl(), "\n this.url_session :: ", _this.url_session);
      src_config.get(src_config.BaseUrl() + _this.url_session).then(function (resp) {
        _this.token = resp.data;
        resolv(resp.data);
      });
    });
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(16198);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64694);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/utilities.js






var utilities_utilities = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, src_config), {}, {
  /**
   * configCustom[{name:"",value:""}]
   */
  dPost: function dPost(url, datas) {
    var _arguments = arguments,
        _this = this;

    return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var configCustom, Token, configs;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              configCustom = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : null;
              _context.next = 3;
              return session.getToken();

            case 3:
              Token = _context.sent;
              configs = {
                "X-CSRF-Token": Token,
                "Content-Type": "application/json"
              };

              if (configCustom) {
                configs = _this.mergeHeaders(configCustom, configs);
              }

              return _context.abrupt("return", _this.post(url, datas, {
                headers: configs
              }));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Get datas;
   */
  dGet: function dGet(url) {
    var _arguments2 = arguments,
        _this2 = this;

    return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var configCustom, Token, configs;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              configCustom = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : null;
              _context2.next = 3;
              return session.getToken();

            case 3:
              Token = _context2.sent;
              configs = {
                "X-CSRF-Token": Token,
                "Content-Type": "application/json"
              };

              if (configCustom) {
                configs = _this2.mergeHeaders(configCustom, configs);
              }

              return _context2.abrupt("return", _this2.get(url, {
                headers: configs
              }));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },

  /**
   *
   */
  mergeHeaders: function mergeHeaders(configCustom, configs) {
    if (configCustom) {
      for (var i in configCustom) {
        configs[i] = configCustom[i];
      }
    }

    return configs;
  }
});

/* harmony default export */ var App_utilities = (utilities_utilities);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(76133);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.function.name.js
var modules_es_function_name = __webpack_require__(87330);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/Confs.js
/* harmony default export */ var jsonApi_Confs = ({
  baseURl: "/jsonapi",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json"
  }
});
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(15196);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/buildFilter.js





var filters = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function filters() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    _classCallCheck(this, filters);

    this.query = query; //
  }

  _createClass(filters, [{
    key: "addFilter",
    value: function addFilter(fieldName, operator, value) {
      var key = "fil-" + config.getRandomIntInclusive();
      this.addParam(key, "path", fieldName);
      this.addParam(key, "operator", operator);
      this.addParam(key, "value", value);
      return this.query;
    }
  }, {
    key: "addParam",
    value: function addParam(key, action, value) {
      if (this.query && this.query !== "") {
        this.query += "&";
      }

      this.query += "filter[".concat(key, "][condition][").concat(action, "]=").concat(value);
    }
  }]);

  return filters;
}()));

/* harmony default export */ var jsonApi_buildFilter = ((/* unused pure expression or super */ null && (filters)));
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/termsTaxo.js









var termsTaxo = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function termsTaxo(vid) {
    _classCallCheck(this, termsTaxo);

    this.vid = vid; //

    this.url = Confs.baseURl + "/taxonomy_term/" + this.vid;
    this.terms = [];
  }
  /**
   * Recupere les terms
   */


  _createClass(termsTaxo, [{
    key: "get",
    value: function get() {
      var _this = this;

      return new Promise(function (resolv) {
        utilities.get(_this.url, Confs.headers).then(function (resp) {
          _this.terms = resp.data;
          resolv(resp.data);
        });
      });
    }
    /**
     * Recupere les terms
     */

  }, {
    key: "getSearch",
    value: function getSearch(search) {
      var _this2 = this;

      var filter = new buildFilter();
      filter.addFilter("name", "CONTAINS", search);
      return new Promise(function (resolv) {
        utilities.get(_this2.url + "?" + filter.query, Confs.headers).then(function (resp) {
          _this2.terms = resp.data;
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

      var filter = new buildFilter();
      filter.addFilter("name", "=", term);
      return new Promise(function (resolv) {
        utilities.get(_this3.url + "?" + filter.query, Confs.headers).then(function (resp) {
          _this3.terms = resp.data;
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

      var filter = new buildFilter();
      filter.addFilter("tid", "=", id);
      return new Promise(function (resolv) {
        utilities.get(_this4.url + "?" + filter.query, Confs.headers).then(function (resp) {
          _this4.terms = resp.data;
          resolv(resp.data);
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

      var filter = new buildFilter();
      filter.addFilter("id", "=", id);
      return new Promise(function (resolv) {
        utilities.get(_this5.url + "?" + filter.query, Confs.headers).then(function (resp) {
          _this5.terms = resp.data;
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

      for (var i in this.terms.data) {
        var term = this.terms.data[i];
        options.push({
          text: term.attributes.name,
          value: term.attributes.drupal_internal__tid
        });
      }

      return options;
    }
  }]);

  return termsTaxo;
}()));

/* harmony default export */ var jsonApi_termsTaxo = ((/* unused pure expression or super */ null && (termsTaxo)));
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/users/user.js




/* harmony default export */ var user = ((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, App_utilities), {}, {
  getCurrentUser: function getCurrentUser() {
    var _this = this;

    return new Promise(function (resolv) {
      _this.get("/appformmanager/current-user").then(function (resp) {
        resolv(resp.data);
      });
    });
  },
  getUser: function getUser(uid) {
    var _this2 = this;

    return new Promise(function (resolv) {
      _this2.get("/user/" + uid + "?_format=json").then(function (resp) {
        resolv(resp.data);
      });
    });
  }
}));
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/web.dom-collections.for-each.js
var modules_web_dom_collections_for_each = __webpack_require__(33773);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(55090);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(87544);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/formatFields/InputBootstrap.js




/* harmony default export */ var formatFields_InputBootstrap = ({
  modelsFields: {},

  /**
   * La valeur par defaut peut etre definit via defaultValue, lors de la consctruction, ou definit dans <component.
   * On recupere les données via un emit @b-input au niveau du <component.
   * @param {} h
   * @param {*} field
   * @param {*} defaultValue
   * @returns
   */
  string: function string(h, field) {
    var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    if (defaultValue.length === 0) {
      defaultValue.push({
        value: ""
      });
    }

    var inputs = []; // Ajout du label

    inputs.push(h("label", {
      class: ["d-block", "content-center__title"]
    }, [field.label_value]));
    defaultValue.forEach(function (el) {
      inputs.push(h("input", {
        props: {
          type: "text",
          value: el.value,
          b_input: {
            type: Object,
            required: true
          }
        },
        on: {
          input: function input(e) {
            if (e.target && e.target.value) el.value = e.target.value;
          }
        },
        class: ["form-control"]
      }));
    }); // ajout de la description

    inputs.push(h("small", {
      class: ["text-muted"]
    }, [field.description]));
    var formG = h("div", {
      props: {},
      class: ["form-group", "content-center__input"]
    }, inputs);
    return formG;
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/formatFields/formatFieldsBootstrap.js









/**
 * Permet de formater les champs drupal avec les equivalence bootstrap vuejs.
 */

var formatField = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function formatField(entity, bundle) {
    _classCallCheck(this, formatField);

    this.entity = entity;
    this.bundle = bundle; // ---------
  }
  /**
   * Retoune les champs convertie en utilisant les composants bootstrap-vuejs.
   * @returns Array []
   */


  _createClass(formatField, [{
    key: "format",
    value: function () {
      var _format = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var fields;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getFields();

              case 2:
                fields = _context.sent;
                return _context.abrupt("return", new Promise(function (resolv, reject) {
                  if (fields.data && fields.data.fields) {
                    InputBootstrap.modelsFields = _this.buildModel(fields.data.fields);
                    var formatFields = [];

                    var _loop = function _loop(i) {
                      formatFields.push({
                        ref: i,
                        props: {
                          name: {
                            type: String,
                            default: fields.data.fields[i].name
                          }
                        },
                        render: function render(createElement) {
                          var renderField = [];

                          switch (fields.data.fields[i].type) {
                            case "string":
                              renderField.push(InputBootstrap.string(createElement, fields.data.fields[i], InputBootstrap.modelsFields[i]));
                              break;
                          }

                          return createElement("div", renderField);
                        }
                      });
                    };

                    for (var i in fields.data.fields) {
                      _loop(i);
                    }

                    resolv({
                      templates: formatFields,
                      models: InputBootstrap.modelsFields
                    });
                  } else {
                    reject("Aucune donnée disponible");
                  }
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function format() {
        return _format.apply(this, arguments);
      }

      return format;
    }()
    /**
     * Get fileds in drupal.
     * @returns
     */

  }, {
    key: "getFields",
    value: function getFields() {
      var url = "/api/form-node/generate-form";

      if (this.entity === "user") {
        url = "/api/form-node/generate-user";
      }

      url += "/" + this.bundle;
      return utilities.get(url);
    }
    /**
     * - Cet object permet de rendre les elements de l'object ecoutable.
     *   on creer tous les champs, puis on initialise InputBootstrap.modelsFields avec tous les champs. Decette facon vuejs peut ecouter les MAJ de champs.
     */

  }, {
    key: "buildModel",
    value: function buildModel(fields) {
      var models = {};

      for (var i in fields) {
        if (fields[i].type) models[i] = [];
      }

      return models;
    }
  }]);

  return formatField;
}()));

/* harmony default export */ var formatFieldsBootstrap = ((/* unused pure expression or super */ null && (formatField)));
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/rx/facebook.js
//const FB = window.Fb;
/* harmony default export */ var facebook = ({
  user: {},
  FB: null,
  appId: "",
  scope: "public_profile, email",
  version: "v11.0",

  /**
   * Ouverture de la boite de dislogue, facebook.
   */
  openPopup: function openPopup() {
    var _this = this;

    var self = this;
    window.FB.login(function (resp) {
      _this.statusChangeCallback(resp, true);
    }, {
      scope: self.scope,
      return_scopes: true
    });
  },
  logOut: function logOut() {
    window.FB.logout(function (res) {
      this.onLogOut(res);
    });
  },
  onLogOut: function onLogOut(resp) {
    console.log("Déconnetion réussi", resp);
  },

  /**
   * Permet de definir les informations de base et emet un evenement
   * $event 'wbu-fb-status-change'
   * @param {*} r
   */
  statusChangeCallback: function statusChangeCallback(r) {
    var getInfoUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.user = r;

    if (getInfoUser) {
      var event = new CustomEvent("wbu-fb-status-change");
      document.dispatchEvent(event);
    }

    console.log("status", this.user);
  },
  getUserStatus: function getUserStatus() {
    var self = this;
    window.FB.getLoginStatus(function (response) {
      self.statusChangeCallback(response);
    });
  },
  chargement: function chargement() {
    var self = this;
    var head = document.getElementsByTagName("head")[0];
    var js = document.createElement("script");
    head.appendChild(js);
    js.id = "facebook-jssdk-021"; // js.addEventListener("load", () => {
    //   console.log("Chargement du JS FACEBOOK END;");
    // });
    //

    js.onload = function () {
      function checkFB() {
        if (window.FB) {
          self.FB = window.FB;
          self.FB.init({
            appId: self.appId,
            cookie: true,
            xfbml: true,
            version: self.version,
            statue: false
          });
          console.log("Chargement du JS facebook");
          self.getUserStatus();
        } else {
          console.log("facebook not load");
          setTimeout(function () {
            checkFB();
          }, 900);
        }
      }

      checkFB();
    };

    js.src = "https://connect.facebook.net/en_US/sdk.js";
  }
});
/*
window.fbAsyncInit = function () {
  FB.init({
    appId: "344690973822888",
    cookie: true,
    xfbml: true,
    version: "v11.0",
  });
  FB.AppEvents.logPageView();
  Facebook.getUserStatus();
};
// Etape1 : chargement.
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
/**/
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=template&id=2646dca8&
var logingooglevue_type_template_id_2646dca8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"buttton-google-aouth",class:_vm.classRender,attrs:{"id":_vm.idHtmlrender}})}
var logingooglevue_type_template_id_2646dca8_staticRenderFns = []


;// CONCATENATED MODULE: ../drupal-vuejs/src/App/rx/google.js
//const gapi = window.gapi;
/* harmony default export */ var google = ({
  userAccess: {},
  //contient les informations renvoyés par google apres approbations.
  client_id: "513247959752-qapd9jb30pdtoh51m0h53070a2v8c4er.apps.googleusercontent.com"
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/config_for_all.js
// Contient les methodes et attributs utilisé par toutes les sous modules.
/* harmony default export */ var config_for_all = ({
  /**
   *
   * @param {String} action
   * @param {Object} resp
   */
  AfterRedirect: function AfterRedirect(action) {
    var url_redirect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var resp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    console.log("AfterRedirect action .", action);
    var stepe = null;
    /**
     * Pour forcer la rediction.
     */

    if (action == "redirect" && url_redirect) {//
    } else if (action == "home") {
      window.location.assign("/");
    } // Reload current page.
    else if (action == "reload") {
      window.location.reload();
      console.log("reload this page");
    } // Emit event when is finnish.
    else if (action == "emit_even") {
      var event = new CustomEvent("login_rx_vuejs__user_is_login");
      document.dispatchEvent(event);
    } // Comportement par defaut.
    else if (action == "default") {
      // --; Si l'utilisateur est redirigé vers une autre url.
      if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
        window.location.assign(resp.reponse.request.responseURL);
      } // On demande la creation d'un utilisateur.
      else if (resp.data && resp.data.createuser) {
        stepe = "final-gl-register";
      } // On recharge la meme page.
      else if (resp.data) {
        window.location.reload();
      }
    }

    return stepe;
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
function loadScript(src) {
  return new Promise(function (resolv) {
    var s = document.createElement("script");
    s.setAttribute("src", src);

    s.onload = function () {
      console.log(" Chargement du script ok : ", src);
      resolv(true);
    };

    document.head.appendChild(s);
  });
}




/* harmony default export */ var logingooglevue_type_script_lang_js_ = ({
  name: "logingoogle",
  props: {
    idHtml: {
      type: String,
      required: true
    },
    returnUidInfo: {
      type: Boolean,
      default: false
    },
    classRender: {
      type: Array,
      default: function _default() {
        return ["mx-auto"];
      }
    },
    action_after_login: {
      type: String,
      default: "default"
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!window.google) {
      loadScript("https://accounts.google.com/gsi/client").then(function () {
        _this.getUserInfoFromFrame();
      });
    } else {
      this.getUserInfoFromFrame();
    }
  },
  computed: {
    idHtmlrender: function idHtmlrender() {
      return "google-login-tab" + this.idHtml;
    }
  },
  methods: {
    getUserInfoFromFrame: function getUserInfoFromFrame() {
      var self = this;

      function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: ", response);
        google.userAccess = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, response), {}, {
          client_id: response.clientId
        });
        self.TryToLoginWithGoogle();
        window.rxGoogle = google;
      }

      console.log(" window.onload ! ", window.onload);

      var goo = function goo() {
        window.google.accounts.id.initialize({
          client_id: google.client_id,
          callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(document.getElementById(self.idHtmlrender), {
          theme: "outline",
          size: "large"
        } // customization attributes
        );
        window.google.accounts.id.prompt(); // also display the One Tap dialog
      };

      goo();
    },

    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithGoogle: function TryToLoginWithGoogle() {
      var _this2 = this;

      // this.IsBusy();
      // this.getFields();
      return new Promise(function (resolv, reject) {
        App_utilities.post("/login-rx-vuejs/google-check", google.userAccess).then(function (resp) {
          _this2.isBusy = false;
          _this2.alertDisplay = true;
          _this2.alertType = "alert-success";
          _this2.alertText = "Connexion réussie";

          _this2.$emit("ev_logingoogle", resp.data); // Si on souhaite juste obtenir les infos concernant l'utilisateur.


          if (_this2.returnUidInfo) {
            resolv(resp);
            return;
          }

          config_for_all.AfterRedirect(_this2.action_after_login, null, resp);
          resolv(resp);
        }).catch(function (errors) {
          _this2.isBusy = false;
          _this2.alertDisplay = true;
          _this2.alertType = "alert-danger";
          _this2.alertText = "Google : Erreur de connexion";

          if (errors.error && errors.error.statusText && errors.error.statusText != "") {
            _this2.alertText = errors.error.statusText;
          }

          console.log(" Error ajax ", errors.error);
          console.log(" Error ajax ", errors.code);
          console.log(" Error ajax ", errors.stack);
          reject(errors);
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_logingooglevue_type_script_lang_js_ = (logingooglevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=style&index=0&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=style&index=0&lang=scss&

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/logingoogle.vue



;


/* normalize component */

var logingoogle_component = (0,componentNormalizer/* default */.Z)(
  components_logingooglevue_type_script_lang_js_,
  logingooglevue_type_template_id_2646dca8_render,
  logingooglevue_type_template_id_2646dca8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var logingoogle = (logingoogle_component.exports);
;// CONCATENATED MODULE: ../drupal-vuejs/index.js







;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/sections/page-register.vue?vue&type=script&lang=js&
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

/* harmony default export */ var page_registervue_type_script_lang_js_ = ({
  name: "page-register",
  components: {
    loginGoogle: logingoogle
  },
  methods: {
    ev_logingoogle: function ev_logingoogle(user) {
      console.log(user);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/sections/page-register.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_page_registervue_type_script_lang_js_ = (page_registervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/sections/page-register.vue





/* normalize component */
;
var page_register_component = (0,componentNormalizer/* default */.Z)(
  sections_page_registervue_type_script_lang_js_,
  page_registervue_type_template_id_5fd413f8_render,
  page_registervue_type_template_id_5fd413f8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var page_register = (page_register_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/sections/page-save.vue?vue&type=template&id=530743b1&
var page_savevue_type_template_id_530743b1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',[_vm._v(" Creer votre site maintenant !!! ")]),_vm._m(0),(_vm.creation_running)?_c('div',{staticClass:"text-left mx-auto content-save-text"},[_c('ul',{staticClass:"puce-step-vertical step-build"},_vm._l((_vm.build_steps),function(item,i){return _c('li',{key:i,class:[
          item.status == 'ok' ? 'active' : '',
          item.status == 'error' ? 'text-danger' : '' ]},[_vm._v(" "+_vm._s(item.titre)+" "),(item.status == 'run')?_c('b-icon',{staticClass:"ml-auto",attrs:{"icon":"three-dots","font-scale":"1.3","animation":"cylon","variant":"primary"}}):_vm._e(),(item.status == 'ok')?_c('b-icon',{staticClass:"ml-auto",attrs:{"icon":"check2","font-scale":"1.5","variant":"primary"}}):_vm._e()],1)}),0),(_vm.finish_status)?_c('div',{staticClass:"action d-flex flex-column"},[_c('b-button',{on:{"click":_vm.open_new_site}},[_vm._v(" Visiter votre nouveau site "),_c('b-icon',{staticClass:"float-right",attrs:{"icon":"award","font-scale":"1.3"}})],1),_c('b-button',{on:{"click":_vm.open_new_site_admin}},[_vm._v(" Administrer son contenu "),_c('b-icon',{staticClass:"float-right",attrs:{"icon":"folder-symlink","font-scale":"1.3"}})],1)],1):_vm._e(),(_vm.finish_status)?_c('div',{staticClass:"my-5 h3"},[_vm._v(" Votre site web : "),_c('a',{on:{"click":_vm.open_new_site}},[_c('b',[_vm._v(" "+_vm._s(_vm.new_hostname)+" ")])])]):_vm._e()]):_vm._e()])}
var page_savevue_type_template_id_530743b1_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"step-donneesite--label"},[_vm._v(" Si votre contenu vous convient, cliquez sur le bouton "),_c('b',[_vm._v(" 'Je cree mon site' ")]),_vm._v(". Vous pourriez le modifier à tout moment. ")])}]


;// CONCATENATED MODULE: ./src/components/sections/page-save.vue?vue&type=template&id=530743b1&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/sections/page-save.vue?vue&type=script&lang=js&

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

/* harmony default export */ var page_savevue_type_script_lang_js_ = ({
  name: "page-save",
  data: function data() {
    return {};
  },
  computed: (0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)({
    build_steps: function build_steps(state) {
      return state.build_steps;
    },
    creation_running: function creation_running(state) {
      return state.creation_running;
    },
    finish_status: function finish_status(state) {
      return state.finish_status;
    },
    new_hostname: function new_hostname(state) {
      return state.new_hostname;
    }
  })),
  methods: {
    open_new_site: function open_new_site() {
      window.open(this.new_hostname, "_blank");
    },
    open_new_site_admin: function open_new_site_admin() {
      window.open(this.new_hostname + "/user", "_blank");
    }
  }
});
;// CONCATENATED MODULE: ./src/components/sections/page-save.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_page_savevue_type_script_lang_js_ = (page_savevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/sections/page-save.vue





/* normalize component */
;
var page_save_component = (0,componentNormalizer/* default */.Z)(
  sections_page_savevue_type_script_lang_js_,
  page_savevue_type_template_id_530743b1_render,
  page_savevue_type_template_id_530743b1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var page_save = (page_save_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/renderByStep.vue?vue&type=script&lang=js&






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
  mounted: function mounted() {//
  },
  computed: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)("renderByStep", {
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
    },
    running: function running(state) {
      return state.running;
    }
  })), {}, {
    get_running: function get_running() {
      var keys = Object.keys(this.form);

      if (keys.length) {
        console.log("get_running");
        this.buildFields();
      }

      return this.running;
    }
  }),
  methods: {
    // Contruit les champs de l'etape.
    buildFields: function buildFields() {
      var _this = this;

      this.fields = [];
      var step = this.steppers[this.current_step];

      if (step.keys && step.keys.length) {
        console.log("buildFields");
        step.keys.forEach(function (fieldName) {
          if (_this.form[fieldName]) {
            if (_this.model[fieldName]) _this.fields.push({
              template: loadField.getField(_this.form[fieldName]),
              field: _this.form[fieldName],
              model: _this.model
            });else _this.fields.push({
              template: loadField.getField(_this.form[fieldName]),
              field: _this.form[fieldName]
            });
          }
        });
      } //


      if (step.templates && step.templates.length) {
        step.templates.forEach(function (template) {
          if (template == "layout_entete") {
            _this.fields.push({
              template: layoutRenderHeader,
              field: {}
            });
          } else if (template == "layout_footer") {
            _this.fields.push({
              template: layoutRenderFooter,
              field: {}
            });
          } else if (template == "page_register") {
            _this.fields.push({
              template: page_register,
              field: {}
            });
          } else if (template == "page_save") {
            _this.fields.push({
              template: page_save,
              field: {}
            });
          }
        });
      } //


      return this.fields;
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
  renderByStepvue_type_template_id_24667ad6_render,
  renderByStepvue_type_template_id_24667ad6_staticRenderFns,
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
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/formRender.vue?vue&type=script&lang=js&
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
//# sourceMappingURL=EntityDrupal.common.65.js.map