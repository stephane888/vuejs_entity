((typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] || []).push([[931],{

/***/ 22931:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ formRender; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/formRender.vue?vue&type=template&id=1b05b720&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c(_vm.render_template,{tag:"component"})],1)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/renderByStep.vue?vue&type=template&id=77fcc3a9&
var renderByStepvue_type_template_id_77fcc3a9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"step-donneesite mx-auto text-center"},[_c('progressBar'),_c('ValidationObserver',{attrs:{"tag":"form"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_vm._l((_vm.stepFields),function(render,k){return _c(render.template,{key:k,tag:"component",attrs:{"field":render.field,"model":render.model,"class_css":['fieldset-wrapper', render.field.type]}})}),_c('div',[_c('nextPreviewVue',{attrs:{"validation_form":v}})],1)]}}])})],1)}
var renderByStepvue_type_template_id_77fcc3a9_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(93019);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(68309);
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
// EXTERNAL MODULE: ./src/components/fieldsDrupal/loadField.js + 34 modules
var loadField = __webpack_require__(37439);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/nextPreview.vue?vue&type=template&id=a01a2114&
var nextPreviewvue_type_template_id_a01a2114_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-between align-items-center step-donneesite--submit mx-auto",attrs:{"check_validation":_vm.check_validation}},[(_vm.current_step && !_vm.creation_running)?_c('b-button',{attrs:{"variant":"secondary"},on:{"click":_vm.previewStep}},[_c('b-icon',{attrs:{"icon":"arrow-left"}}),_vm._v(" "+_vm._s(_vm.strings.previous)+" ")],1):_vm._e(),(_vm.count_step < _vm.steppers.length)?_c('b-button',{attrs:{"variant":"primary","disabled":_vm.disabled || _vm.disable_submit},on:{"click":_vm.nextStep}},[_vm._v(" "+_vm._s(_vm.strings.next)+" "),_c('b-icon',{attrs:{"icon":"arrow-right"}})],1):_vm._e(),(_vm.count_step >= _vm.steppers.length && !_vm.finish_status)?_c('b-button',{attrs:{"variant":"primary","disabled":_vm.creation_running},on:{"click":_vm.create_site}},[_vm._v(" "+_vm._s(_vm.strings.create_web_site)+" "),(!_vm.creation_running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"check2","font-scale":"2"}}):_vm._e(),(_vm.creation_running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"arrow-clockwise","font-scale":"2","animation":"spin"}}):_vm._e()],1):_vm._e()],1)}
var nextPreviewvue_type_template_id_a01a2114_staticRenderFns = []


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
    },
    valid_steppers: function valid_steppers(state) {
      return state.renderByStep.valid_steppers;
    },
    strings: function strings(state) {
      return state.strings;
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
      var _this = this;

      var idstep = parseInt(this.$route.params.idstep);
      var length = this.valid_steppers.length;

      if (this.valid_steppers.length > 1) {
        var id = this.valid_steppers[length - 2];

        if (idstep == id) {
          this.$store.dispatch("renderByStep/removeLastValidStep").then(function () {
            _this.previewStep(); // console.log("this.valid_steppers : ", this.valid_steppers);
            // // eslint-disable-next-line
            // debugger;
            // const id2 = this.valid_steppers.splice(-1, 3);
            // console.log(" beofre second back : ", id2);
            // if (id2 && id2[0]) {
            //   console.log(" second back : ", id2);
            //   this.$router.push({ path: `/form-render/${id2}` });
            // }

          });
        } else {
          this.$store.dispatch("renderByStep/removeLastValidStep").then(function () {
            _this.$router.push({
              path: "/form-render/".concat(id)
            });
          });
        }
      }
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

    /**
     * S'execute uniquement lorsqu'on actualise la page et lorqu'on change de route.
     */
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
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/formRender/nextPreview.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  formRender_nextPreviewvue_type_script_lang_js_,
  nextPreviewvue_type_template_id_a01a2114_render,
  nextPreviewvue_type_template_id_a01a2114_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var nextPreview = (component.exports);
// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__(51386);
// EXTERNAL MODULE: ./node_modules/ckeditor4-vue/dist/ckeditor.js
var ckeditor = __webpack_require__(99210);
var ckeditor_default = /*#__PURE__*/__webpack_require__.n(ckeditor);
// EXTERNAL MODULE: ./src/components/fieldsLayout/layoutRenderHeader.vue + 4 modules
var layoutRenderHeader = __webpack_require__(3406);
// EXTERNAL MODULE: ./src/components/fieldsLayout/layoutRenderFooter.vue + 4 modules
var layoutRenderFooter = __webpack_require__(23730);
// EXTERNAL MODULE: ./src/components/sections/page-register.vue + 3 modules
var page_register = __webpack_require__(68791);
// EXTERNAL MODULE: ./src/components/sections/page-save.vue + 4 modules
var page_save = __webpack_require__(45006);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/progress-bar.vue?vue&type=template&id=0660865c&
var progress_barvue_type_template_id_0660865c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-progress position-relative p-4"},[_c('ul',{staticClass:"progressive-bar d-flex"},_vm._l((_vm.steppers),function(step,k){return _c('li',{key:k,class:_vm.current_step >= k ? 'active' : 'none'})}),0)])}
var progress_barvue_type_template_id_0660865c_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/progress-bar.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var progress_barvue_type_script_lang_js_ = ({
  name: "progress-bar",
  computed: (0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)("renderByStep", {
    current_step: function current_step(state) {
      return state.current_step;
    },
    steppers: function steppers(state) {
      return state.steppers;
    }
  }))
});
;// CONCATENATED MODULE: ./src/components/formRender/progress-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var formRender_progress_barvue_type_script_lang_js_ = (progress_barvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/progress-bar.vue?vue&type=style&index=0&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/formRender/progress-bar.vue?vue&type=style&index=0&lang=scss&

;// CONCATENATED MODULE: ./src/components/formRender/progress-bar.vue



;


/* normalize component */

var progress_bar_component = (0,componentNormalizer/* default */.Z)(
  formRender_progress_barvue_type_script_lang_js_,
  progress_barvue_type_template_id_0660865c_render,
  progress_barvue_type_template_id_0660865c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var progress_bar = (progress_bar_component.exports);
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
    ValidationObserver: vee_validate_esm/* ValidationObserver */._j,
    progressBar: progress_bar
  },
  mounted: function mounted() {//this.buildFields();
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
  })), (0,vuex_esm/* mapGetters */.Se)("renderByStep", ["stepFields"])),
  methods: {
    // Contruit les champs de l'etape.
    buildFields: function buildFields() {
      var _this = this;

      console.log("buildFields");
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
        } else if (state.step && state.step.name && this.model[state.step.name] && this.model[state.step.name].length && this.model[state.step.name][0].value == state.step.value) {
          valid = false;
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
        step.keys.forEach(function (fieldName) {
          if (_this.form[fieldName]) {
            if (_this.model[fieldName]) _this.fields.push({
              template: loadField/* default.getField */.Z.getField(_this.form[fieldName]),
              field: _this.form[fieldName],
              model: _this.model
            });else _this.fields.push({
              template: loadField/* default.getField */.Z.getField(_this.form[fieldName]),
              field: _this.form[fieldName]
            });
          }
        });
      } //


      if (step.templates && step.templates.length) {
        step.templates.forEach(function (template) {
          if (template == "layout_entete") {
            _this.fields.push({
              template: layoutRenderHeader/* default */.Z,
              field: {}
            });
          } else if (template == "layout_footer") {
            _this.fields.push({
              template: layoutRenderFooter/* default */.Z,
              field: {}
            });
          } else if (template == "page_register") {
            _this.fields.push({
              template: page_register/* default */.Z,
              field: {}
            });
          } else if (template == "page_save") {
            _this.fields.push({
              template: page_save/* default */.Z,
              field: {}
            });
          }
        });
      }

      this.$store.commit("renderByStep/ADD_VALID_STEP", this.current_step); //

      return this.fields;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/formRender/renderByStep.vue?vue&type=script&lang=js&
 /* harmony default export */ var formRender_renderByStepvue_type_script_lang_js_ = (renderByStepvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/formRender/renderByStep.vue?vue&type=style&index=0&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/formRender/renderByStep.vue?vue&type=style&index=0&lang=scss&

;// CONCATENATED MODULE: ./src/components/formRender/renderByStep.vue



;


/* normalize component */

var renderByStep_component = (0,componentNormalizer/* default */.Z)(
  formRender_renderByStepvue_type_script_lang_js_,
  renderByStepvue_type_template_id_77fcc3a9_render,
  renderByStepvue_type_template_id_77fcc3a9_staticRenderFns,
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

/***/ }),

/***/ 99210:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = (__webpack_require__(17964)["default"]);

__webpack_require__(82526);

__webpack_require__(41817);

__webpack_require__(41539);

__webpack_require__(39341);

__webpack_require__(73706);

__webpack_require__(10408);

__webpack_require__(21703);

__webpack_require__(88674);

__webpack_require__(26699);

__webpack_require__(9653);

__webpack_require__(92222);

/*! For license information please see ckeditor.js.LICENSE.txt */

/*!*
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(window, function () {
  return function (t) {
    var e = {};

    function n(i) {
      if (e[i]) return e[i].exports;
      var r = e[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var r in t) {
        n.d(i, r, function (e) {
          return t[e];
        }.bind(null, r));
      }
      return i;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 0);
  }([function (t, e, n) {
    t.exports = n(1);
  }, function (t, e, n) {
    "use strict";

    function i(t, e) {
      t.onload = function () {
        this.onerror = this.onload = null, e(null, t);
      }, t.onerror = function () {
        this.onerror = this.onload = null, e(new Error("Failed to load " + this.src), t);
      };
    }

    function r(t, e) {
      t.onreadystatechange = function () {
        "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, e(null, t));
      };
    }

    var o;

    function a(t, e) {
      return "CKEDITOR" in window ? Promise.resolve(CKEDITOR) : "string" != typeof t || t.length < 1 ? Promise.reject(new TypeError("CKEditor URL must be a non-empty string.")) : (o || (o = a.scriptLoader(t).then(function (t) {
        return e && e(t), t;
      })), o);
    }

    n.r(e), a.scriptLoader = function (t) {
      return new Promise(function (e, n) {
        !function (t, e, n) {
          var o = document.head || document.getElementsByTagName("head")[0],
              a = document.createElement("script");
          "function" == typeof e && (n = e, e = {}), e = e || {}, n = n || function () {}, a.type = e.type || "text/javascript", a.charset = e.charset || "utf8", a.async = !("async" in e) || !!e.async, a.src = t, e.attrs && function (t, e) {
            for (var n in e) {
              t.setAttribute(n, e[n]);
            }
          }(a, e.attrs), e.text && (a.text = String(e.text)), ("onload" in a ? i : r)(a, n), a.onload || i(a, n), o.appendChild(a);
        }(t, function (t) {
          return o = void 0, t ? n(t) : window.CKEDITOR ? void e(CKEDITOR) : n(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace."));
        });
      });
    };
    var s = {
      name: "ckeditor",
      render: function render(t) {
        return t("div", {}, [t(this.tagName)]);
      },
      props: {
        value: {
          type: String,
          default: ""
        },
        type: {
          type: String,
          default: "classic",
          validator: function validator(t) {
            return ["classic", "inline"].includes(t);
          }
        },
        editorUrl: {
          type: String,
          default: "https://cdn.ckeditor.com/4.18.0/standard-all/ckeditor.js"
        },
        config: {
          type: Object,
          default: function _default() {}
        },
        tagName: {
          type: String,
          default: "textarea"
        },
        readOnly: {
          type: Boolean,
          default: null
        },
        throttle: {
          type: Number,
          default: 80
        }
      },
      mounted: function mounted() {
        var _this = this;

        a(this.editorUrl, function (t) {
          _this.$emit("namespaceloaded", t);
        }).then(function () {
          if (_this.$_destroyed) return;

          var t = _this.prepareConfig(),
              e = "inline" === _this.type ? "inline" : "replace",
              n = _this.$el.firstElementChild;

          CKEDITOR[e](n, t);
        });
      },
      beforeDestroy: function beforeDestroy() {
        this.instance && this.instance.destroy(), this.$_destroyed = !0;
      },
      watch: {
        value: function value(t) {
          this.instance && this.instance.getData() !== t && this.instance.setData(t);
        },
        readOnly: function readOnly(t) {
          this.instance && this.instance.setReadOnly(t);
        }
      },
      methods: {
        prepareConfig: function prepareConfig() {
          var _this2 = this;

          var t = this.config || {};
          t.on = t.on || {}, void 0 === t.delayIfDetached && (t.delayIfDetached = !0), null !== this.readOnly && (t.readOnly = this.readOnly);
          var e = t.on.instanceReady;
          return t.on.instanceReady = function (t) {
            _this2.instance = t.editor, _this2.$nextTick().then(function () {
              _this2.prepareComponentData(), e && e(t);
            });
          }, t;
        },
        prepareComponentData: function prepareComponentData() {
          var _this3 = this;

          var t = this.value;
          this.instance.fire("lockSnapshot"), this.instance.setData(t, {
            callback: function callback() {
              _this3.$_setUpEditorEvents();

              var e = _this3.instance.getData();

              t !== e ? (_this3.$once("input", function () {
                _this3.$emit("ready", _this3.instance);
              }), _this3.$emit("input", e)) : _this3.$emit("ready", _this3.instance), _this3.instance.fire("unlockSnapshot");
            }
          });
        },
        $_setUpEditorEvents: function $_setUpEditorEvents() {
          var _this4 = this;

          var t = this.instance,
              e = function (t, e) {
            var n,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return function () {
              clearTimeout(n);

              for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) {
                o[a] = arguments[a];
              }

              n = setTimeout(t.bind.apply(t, [i].concat(o)), e);
            };
          }(function (e) {
            var n = t.getData();
            _this4.value !== n && _this4.$emit("input", n, e, t);
          }, this.throttle);

          t.on("change", e), t.on("focus", function (e) {
            _this4.$emit("focus", e, t);
          }), t.on("blur", function (e) {
            _this4.$emit("blur", e, t);
          });
        }
      }
    };
    var c = {
      install: function install(t) {
        t.component("ckeditor", s);
      },
      component: s
    };
    e.default = c;
  }]).default;
});

/***/ })

}]);
//# sourceMappingURL=EntityDrupal.common.931.js.map