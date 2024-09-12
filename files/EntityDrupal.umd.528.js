"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] || []).push([[528],{

/***/ 28528:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TheContainer; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/TheContainer.vue?vue&type=template&id=0a577096&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"c-main"},[_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[_c('router-view',{key:_vm.$route.path})],1)],1)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue-icons.min.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/users.js + 1 modules
var users = __webpack_require__(32504);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/TheContainer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var TheContainervue_type_script_lang_js_ = ({
  name: "the-container",
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch("renderByStep/loadForm"); // this.$store.commit("storeLayoutFooter/loadLayout");
    // this.$store.commit("storeLayout/loadLayout");
    // load field block_content header

    this.$store.commit("storeFormRenderHeader/loadFields");
    this.$store.commit("storeFormRenderFooter/loadFields");
    this.$store.dispatch("loadStrings");
    users/* default.getCurrentUser */.Z.getCurrentUser().then(function (user) {
      _this.$store.commit("SET_USER", user);
    });
  }
});
;// CONCATENATED MODULE: ./src/views/TheContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_TheContainervue_type_script_lang_js_ = (TheContainervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-52[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/TheContainer.vue?vue&type=style&index=0&id=0a577096&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/TheContainer.vue?vue&type=style&index=0&id=0a577096&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/views/TheContainer.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  views_TheContainervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0a577096",
  null
  
)

/* harmony default export */ var TheContainer = (component.exports);

/***/ })

}]);
//# sourceMappingURL=EntityDrupal.umd.528.js.map