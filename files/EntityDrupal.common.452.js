"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] || []).push([[452],{

/***/ 72258:
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


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/renderByStep.vue?vue&type=template&id=3d20618f&
var renderByStepvue_type_template_id_3d20618f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"step-donneesite mx-auto text-center",attrs:{"get_running":_vm.get_running}},[_c('ValidationObserver',{attrs:{"tag":"form"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_vm._l((_vm.fields),function(render,k){return _c(render.template,{key:k,tag:"component",attrs:{"field":render.field,"model":render.model,"class_css":['fieldset-wrapper', render.field.type]}})}),_c('div',[_c('nextPreviewVue',{attrs:{"validation_form":v}})],1)]}}])})],1)}
var renderByStepvue_type_template_id_3d20618f_staticRenderFns = []


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
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/drupal-color.vue?vue&type=template&id=2c6424a4&
var drupal_colorvue_type_template_id_2c6424a4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css},[_c('b-form-group',{attrs:{"label":_vm.field.label,"description":_vm.field.description}},_vm._l((_vm.model[_vm.field.name]),function(val,k){return _c('div',{key:k,staticClass:"field-item-value"},[_c('b-form-input',{attrs:{"placeholder":_vm.field.placeholder,"type":"color"},model:{value:(val.color),callback:function ($$v) {_vm.$set(val, "color", $$v)},expression:"val.color"}})],1)}),0)],1)}
var drupal_colorvue_type_template_id_2c6424a4_staticRenderFns = []


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
  drupal_colorvue_type_template_id_2c6424a4_render,
  drupal_colorvue_type_template_id_2c6424a4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_color = (drupal_color_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/drupal-boolean.vue?vue&type=template&id=dc68d23e&
var drupal_booleanvue_type_template_id_dc68d23e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css,attrs:{"field":"drupal_boolean"}},[_c('div',{staticClass:"field-item-value js-form-type-radio",attrs:{"format_val":_vm.format_val}},[_c('ValidationProvider',{attrs:{"name":_vm.field.name,"rules":_vm.getRules()},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-form-group',{attrs:{"label":_vm.field.label,"name":_vm.field.name}},[_c('div',{staticClass:"fieldset-wrapper"},[_c('div',{staticClass:"radio"},_vm._l((_vm.field.entity_form_settings.list_options),function(option,o){return _c('b-form-radio',{key:o,staticClass:"form-check",attrs:{"name":_vm.field.name,"value":option.value,"state":_vm.getValidationState(v)},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},[_c('b-img',{attrs:{"thumbnail":"","fluid":"","src":option.image_url,"alt":"Image 1"}}),_c('div',{staticClass:"mt-5"},[_vm._v(_vm._s(option.label))]),(
                  option.description.value && option.description.value !== ''
                )?_c('div',{staticClass:"mt-5 text-hover",domProps:{"innerHTML":_vm._s(option.description.value)}}):_vm._e()],1)}),1),(v.errors)?_c('div',{staticClass:"text-danger my-2"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0):_vm._e()])])]}}])})],1)])}
var drupal_booleanvue_type_template_id_dc68d23e_staticRenderFns = []


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
      selected: this.model[this.field.name] && this.model[this.field.name][0] ? this.model[this.field.name][0].value : null
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
  drupal_booleanvue_type_template_id_dc68d23e_render,
  drupal_booleanvue_type_template_id_dc68d23e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_boolean = (drupal_boolean_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsDrupal/drupal-list-string.vue?vue&type=template&id=c8eb8c10&
var drupal_list_stringvue_type_template_id_c8eb8c10_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css},[_c('div',{staticClass:"field-item-value js-form-type-checkbox"},[_c('ValidationProvider',{attrs:{"name":_vm.field.name,"rules":_vm.getRules()},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-form-group',{attrs:{"label":_vm.field.label}},[_c('div',{staticClass:"fieldset-wrapper"},[_c('div',{staticClass:"checkbox"},[_c('b-form-checkbox-group',{on:{"input":_vm.setValue},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},_vm._l((_vm.field.entity_form_settings.list_options),function(option,o){return _c('b-form-checkbox',{key:o,staticClass:"form-check",attrs:{"value":option.value}},[_c('div',[_c('b-img',{attrs:{"thumbnail":"","fluid":"","src":option.image_url,"alt":"Image 1"}})],1),_c('div',{staticClass:"mt-5"},[_vm._v(_vm._s(option.label))]),(
                    option.description.value &&
                    option.description.value !== ''
                  )?_c('div',{staticClass:"mt-5 text-hover",domProps:{"innerHTML":_vm._s(option.description.value)}}):_vm._e()])}),1)],1),(v.errors)?_c('div',{staticClass:"text-danger my-2"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0):_vm._e()])])]}}])})],1)])}
var drupal_list_stringvue_type_template_id_c8eb8c10_staticRenderFns = []


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
    this.getValue(); // Lorsque le composant s'initialise on charge les images.

    this.getImage();
  },
  // watch: {
  //   /**
  //    * Lorsque le composant est chargé plusieurs durant le processus, on est obligé de forcer la MAJ des images si le nom change.
  //    * ( Idealement on devrait charger des instances du champs pour un espace bien donnée ).
  //    */
  //   fieldName() {
  //     this.getImage();
  //   },
  // },
  methods: {
    /**
     * --
     */
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

    /**
     *
     * @param {--} vals
     */
    setValue: function setValue(e) {
      var vals = [];
      e.forEach(function (item) {
        vals.push({
          value: item
        });
      });
      this.$store.dispatch("renderByStep/setValue", {
        value: vals,
        fieldName: this.field.name
      });
      console.log(vals, " \n : ", e);
    },

    /**
     * --
     */
    getRules: function getRules() {
      return loadField.getRules(this.field);
    },

    /**
     * --
     */
    getValue: function getValue() {
      var _this2 = this;

      if (this.model[this.field.name] && this.model[this.field.name].length) {
        this.model[this.field.name].forEach(function (item) {
          _this2.selected.push(item.value);
        });
      }
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
  drupal_list_stringvue_type_template_id_c8eb8c10_render,
  drupal_list_stringvue_type_template_id_c8eb8c10_staticRenderFns,
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
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/nextPreview.vue?vue&type=template&id=b808a6d6&
var nextPreviewvue_type_template_id_b808a6d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-between align-items-center step-donneesite--submit mx-auto",attrs:{"check_validation":_vm.check_validation}},[(_vm.current_step && !_vm.creation_running)?_c('b-button',{attrs:{"variant":"secondary"},on:{"click":_vm.previewStep}},[_c('b-icon',{attrs:{"icon":"arrow-left"}}),_vm._v(" Precedent ")],1):_vm._e(),(_vm.count_step < _vm.steppers.length)?_c('b-button',{attrs:{"variant":"primary","disabled":_vm.disabled || _vm.disable_submit},on:{"click":_vm.nextStep}},[_vm._v(" Suivant "),_c('b-icon',{attrs:{"icon":"arrow-right"}})],1):_vm._e(),(_vm.count_step >= _vm.steppers.length && !_vm.finish_status)?_c('b-button',{attrs:{"variant":"primary","disabled":_vm.creation_running},on:{"click":_vm.create_site}},[_vm._v(" je cree mon site "),(!_vm.creation_running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"check2","font-scale":"2"}}):_vm._e(),(_vm.creation_running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"arrow-clockwise","font-scale":"2","animation":"spin"}}):_vm._e()],1):_vm._e()],1)}
var nextPreviewvue_type_template_id_b808a6d6_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(26699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(32023);
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
    },
    disable_submit: function disable_submit() {
      var step = this.steppers[this.current_step];

      if (step) {
        if (step.templates && step.templates.includes("page_register")) return true;
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
  nextPreviewvue_type_template_id_b808a6d6_render,
  nextPreviewvue_type_template_id_b808a6d6_staticRenderFns,
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
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsLayout/textarea-layout.vue?vue&type=template&id=c4295a56&
var textarea_layoutvue_type_template_id_c4295a56_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.class_css},[_c('b-form-group',{attrs:{"label":_vm.field.text_html.label}},[_c('ckeditor',{attrs:{"config":_vm.editorConfig},model:{value:(_vm.editorData),callback:function ($$v) {_vm.editorData=$$v},expression:"editorData"}})],1)],1)}
var textarea_layoutvue_type_template_id_c4295a56_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/fieldsLayout/textarea-layout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var textarea_layoutvue_type_script_lang_js_ = ({
  name: "textarea-layout",
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
      editorData: this.field.text_html.value,
      editorConfig: {// The configuration of the editor.
      }
    };
  },
  methods: {
    input: function input(val) {
      var payload = {
        key_config: this.key_config,
        fieldName: this.fieldName,
        type: "text_html",
        value: val
      };
      this.$store.commit(this.sub_store + "/setValue", payload);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/fieldsLayout/textarea-layout.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsLayout_textarea_layoutvue_type_script_lang_js_ = (textarea_layoutvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/fieldsLayout/textarea-layout.vue





/* normalize component */
;
var textarea_layout_component = (0,componentNormalizer/* default */.Z)(
  fieldsLayout_textarea_layoutvue_type_script_lang_js_,
  textarea_layoutvue_type_template_id_c4295a56_render,
  textarea_layoutvue_type_template_id_c4295a56_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var textarea_layout = (textarea_layout_component.exports);
;// CONCATENATED MODULE: ./src/components/fieldsLayout/loadField.js



/* harmony default export */ var fieldsLayout_loadField = ({
  getTemplate: function getTemplate(field) {
    var template = null;
    var keys = Object.keys(field);

    switch (keys[0]) {
      case "text":
        template = fieldText;
        break;

      case "text_html":
        template = textarea_layout;
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
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/sections/page-register.vue?vue&type=template&id=f6b21a7a&
var page_registervue_type_template_id_f6b21a7a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',[_vm._v(" Veillez vous connecter, afin de sauvegarder vos données ")]),_c('loginRegister',{attrs:{"action_after_login":"emit_even"}})],1)}
var page_registervue_type_template_id_f6b21a7a_staticRenderFns = []


// EXTERNAL MODULE: ../drupal-vuejs/index.js + 38 modules
var drupal_vuejs = __webpack_require__(843);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/sections/page-register.vue?vue&type=script&lang=js&
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
    loginRegister: drupal_vuejs/* loginRegister */.z9
  },
  mounted: function mounted() {
    this.check_if_user_connected();
  },
  methods: {
    ev_logingoogle: function ev_logingoogle(user) {
      console.log(user);
    },
    check_if_user_connected: function check_if_user_connected() {
      var _this = this;

      document.addEventListener("login_rx_vuejs__user_is_login", function () {
        console.log("user login");
        drupal_vuejs/* users.getCurrentUser */.rC.getCurrentUser().then(function (user) {
          _this.$store.commit("SET_USER", user);

          _this.$store.commit("renderByStep/nextStep");
        });
      }, false);
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
  page_registervue_type_template_id_f6b21a7a_render,
  page_registervue_type_template_id_f6b21a7a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var page_register = (page_register_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/sections/page-save.vue?vue&type=template&id=1a86efa8&
var page_savevue_type_template_id_1a86efa8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',[_vm._v(" Creer votre site maintenant !!! ")]),_vm._m(0),(_vm.creation_running)?_c('div',{staticClass:"text-left mx-auto content-save-text"},[_c('ul',{staticClass:"puce-step-vertical step-build"},_vm._l((_vm.build_steps),function(item,i){return _c('li',{key:i,class:[
          item.status == 'ok' ? 'active' : '',
          item.status == 'error' ? 'text-danger' : '' ]},[_vm._v(" "+_vm._s(item.titre)+" "),(item.status == 'run')?_c('b-icon',{staticClass:"ml-auto",attrs:{"icon":"three-dots","font-scale":"1.3","animation":"cylon","variant":"primary"}}):_vm._e(),(item.status == 'ok')?_c('b-icon',{staticClass:"ml-auto",attrs:{"icon":"check2","font-scale":"1.5","variant":"primary"}}):_vm._e()],1)}),0),(_vm.finish_status)?_c('div',{staticClass:"my-5 h3 text-primary"},[_vm._v(" Votre site serra disponible d'ici 15 minutes "),_vm._m(1)]):_vm._e(),(_vm.finish_status)?_c('div',{staticClass:"action d-flex flex-column"},[_c('b-button',{on:{"click":_vm.open_new_site}},[_vm._v(" Visiter votre nouveau site "),_c('b-icon',{staticClass:"float-right",attrs:{"icon":"award","font-scale":"1.3"}})],1),_c('b-button',{on:{"click":_vm.open_new_site_admin}},[_vm._v(" Administrer son contenu "),_c('b-icon',{staticClass:"float-right",attrs:{"icon":"folder-symlink","font-scale":"1.3"}})],1)],1):_vm._e(),(_vm.finish_status)?_c('div',{staticClass:"my-5 h3"},[_vm._v(" Votre site web : "),_c('a',{on:{"click":_vm.open_new_site}},[_c('b',[_vm._v(" "+_vm._s(_vm.new_hostname)+" ")])])]):_vm._e()]):_vm._e()])}
var page_savevue_type_template_id_1a86efa8_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"step-donneesite--label"},[_vm._v(" Si votre contenu vous convient, cliquez sur le bouton "),_c('b',[_vm._v(" 'Je cree mon site' ")]),_vm._v(". Vous pourriez le modifier à tout moment. ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('small',[_c('i',{staticClass:"d-block"},[_vm._v(" (le temps de progagation des données DNS) ")])])}]


;// CONCATENATED MODULE: ./src/components/sections/page-save.vue?vue&type=template&id=1a86efa8&

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
  page_savevue_type_template_id_1a86efa8_render,
  page_savevue_type_template_id_1a86efa8_staticRenderFns,
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
      var step = this.steppers[this.current_step]; // validation de l'etape:

      var valid = true;

      if (step.states && step.states.length) {
        var getState = function getState() {
          var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          if (step.states[i]) return step.states[i];
        };

        var state = getState(0);
        console.log("sate :", state);

        if (state.custom == "check_user_login") {
          if (this.$store.state.user && this.$store.state.user.uid && this.$store.state.user.uid[0]) {
            valid = false;
          }
        }
      } //alert(valid);


      if (!valid) {
        this.$store.commit("renderByStep/nextStep");
        this.$router.push({
          path: "/form-render/".concat(this.current_step)
        });
        return;
      } //


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
        console.log("buildFields template");
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
  renderByStepvue_type_template_id_3d20618f_render,
  renderByStepvue_type_template_id_3d20618f_staticRenderFns,
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
//# sourceMappingURL=EntityDrupal.common.452.js.map