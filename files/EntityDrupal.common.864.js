"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkentity_drupal"] || []).push([[864],{

/***/ 96864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ LoginRegister; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/LoginRegister.vue?vue&type=template&id=07f54b11&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ValidationObserver',{ref:"formValidate",attrs:{"tag":"form"}},[_c('div',{staticClass:"login-page",attrs:{"facebook_app_is_define":_vm.facebook_app_is_define}},[(_vm.alertDisplay)?_c('div',{staticClass:"alert w-100",class:_vm.alertType,attrs:{"role":"alert"},domProps:{"innerHTML":_vm._s(_vm.alertText)}}):_vm._e(),(_vm.isBusy)?_c('div',{staticClass:"spinner-grow text-primary",staticStyle:{"width":"3rem","height":"3rem"},attrs:{"role":"status"}},[_c('span',{staticClass:"sr-only"},[_vm._v("Chargement ...")])]):_vm._e(),_c('transition',{attrs:{"name":"customslide"}},[_c('div',{staticClass:"block-center"},[_c(_vm.stepe,{tag:"component",attrs:{"urlLogo":_vm.urlLogo,"formValidate":_vm.formValidate,"action-after-login":_vm.actionAfterLogin,"model-register-form":_vm.modelRegisterForm,"show-password":_vm.showPassword,"action-after-register":_vm.actionAfterRegister,"show-modal-success":_vm.showModalSuccess,"configs_login_rx_vuejs":_vm.configs_login_rx_vuejs,"show-register-link":_vm.showRegisterLink,"readonly-name":_vm.readonlyName},on:{"select-stepe":_vm.selectStepe,"go-register":_vm.goRegister}})],1)])],1),_c('div',{staticClass:"politik-secur mx-auto text-center"},[_vm._t("condition_utilisation",function(){return [(
          _vm.configs_login_rx_vuejs &&
          _vm.configs_login_rx_vuejs.texts &&
          _vm.configs_login_rx_vuejs.texts.condition_utilisation
        )?_c('div',{domProps:{"innerHTML":_vm._s(_vm.configs_login_rx_vuejs.texts.condition_utilisation.value)}}):_vm._e()]})],2)])}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(16198);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4367);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(78975);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(41539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(13797);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
// EXTERNAL MODULE: ../wbuutilities/index.js + 66 modules
var wbuutilities = __webpack_require__(74399);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/config_for_all.js
// Contient les methodes et attributs utilisé par toutes les sous modules.
/* harmony default export */ var config_for_all = ({
  /**
   *
   * @param {String} action
   * @param {Object} resp
   */
  AfterRedirect: function AfterRedirect() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "reload";
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
    } // Emit event when is finnish.
    else if (action == "emit_even") {
      var event = new CustomEvent("login_rx_vuejs__user_is_login");
      document.dispatchEvent(event);
    } // emits an event after creating an account
    else if (action == "emit_even_register") {
      var event = new CustomEvent("login_rx_vuejs__user_is_register");
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
// EXTERNAL MODULE: ../drupal-vuejs/src/App/utilities.js + 1 modules
var utilities = __webpack_require__(80257);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/config.js







var vm = new (external_commonjs_vue_commonjs2_vue_root_Vue_default())();
/* harmony default export */ var config = ((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, config_for_all), {}, {
  messages: {
    log_email: "Email ou Nom d'utilisateur",
    pass: "Mot de passe",
    login: "Nom d'utilisateur",
    mail: "Email",
    submit: {
      first: "Suivant",
      connect: "Connexion",
      register: "S'inscrire",
      final: "terminée"
    },
    devis_create_user: "Votre compte a été creer sur <a href='/'> lesroisdelareno.fr </a>. <br> <strong> Bien vouloir verifier votre boite mail afin de valider votre compte </strong>"
  },
  modalSuccess: function modalSuccess(body, conf) {
    return wbuutilities/* AjaxToastBootStrap.modalSuccess */.Ht.modalSuccess(body, conf);
  },

  /**
   *
   * @param {Array} text
   * @returns
   */
  msgCreate: function msgCreate(texts) {
    var h = vm.$createElement;
    var text = [];

    for (var i in texts) {
      text.push(h("p", {
        domProps: {
          innerHTML: texts[i]
        },
        style: {
          lineHeight: "25px",
          fontSize: "17px",
          padding: "15px 15px 0px",
          margin: 0
        }
      }, []));
    }

    return h("div", {}, [text]);
  },

  /**
   * Essaie de connecter l'utilisateur
   * @param {*} form
   */
  connexionUser: function connexionUser(form, actionAfterLogin) {
    var _this = this;

    return new Promise(function (resolv, reject) {
      var url = "/login-rx-vuejs/user-connexion";
      utilities/* default.post */.Z.post(url, form).then(function (resp) {
        _this.AfterRedirect(actionAfterLogin, null, resp);

        resolv(resp);
      }).catch(function (er) {
        reject(er);
      });
    });
  }
}));
// EXTERNAL MODULE: ../drupal-vuejs/src/rootConfig.js
var rootConfig = __webpack_require__(91837);
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
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/CheckStatus.vue?vue&type=template&id=3c10da00&
var CheckStatusvue_type_template_id_3c10da00_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-center"},[_c('a',{staticClass:"content-center__img",attrs:{"href":"/"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":_vm.urlLogo,"alt":""}})]),_c('h4',{staticClass:"title"},[_vm._v("Connectez vous avec")]),_c('div',{staticClass:"content-center__btn-column"},[_c('logingoogle',{attrs:{"idHtml":"default","action-after-login":_vm.actionAfterLogin}}),_c('div',{staticClass:"btn-login btn-login--facebook",on:{"click":_vm.loginFacebook}},[_c('span',{staticClass:"btn-login__icon icon-facebook"}),_c('i',{staticClass:"btn-login__text"},[_vm._v(" Facebook ")]),(_vm.waiting === 'facebook')?_c('svgWaiting'):_vm._e()],1)],1),_c('strong',{staticClass:"d-block"},[_vm._v(" Ou ")]),_c('hr',{staticClass:"diviseur"}),_c('h3',{staticClass:"content-center__title"},[_vm._v(_vm._s(_vm.messages.log_email))]),_c('div',{staticClass:"form-group content-center__input"},[_c('ValidationProvider',{attrs:{"name":"name","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.name[0].value),expression:"form.name[0].value"}],staticClass:"form-control",attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.form.name[0].value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.name[0], "value", $event.target.value)}}}),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}])})],1),_c('div',{staticClass:"content-center__btn"},[_c('div',{staticClass:"btn-login btn-login--connexion",on:{"click":_vm.checkUserStatus}},[_c('span',{staticClass:"btn-login__text"},[_vm._v(" "+_vm._s(_vm.messages.submit.first)+" ")]),(_vm.waiting === 'wait')?_c('svgWaiting'):_vm._e()],1)]),(_vm.showRegisterLink)?_c('div',[_c('hr',{staticClass:"diviseur"}),_c('small',[_vm._v(" Vous n'avez pas de compte ? ")]),_c('a',{staticClass:"text-center d-block cursor",attrs:{"hre":"#"},on:{"click":function($event){$event.preventDefault();return _vm.register.apply(null, arguments)}}},[_vm._v(" S'inscrire ")]),_vm._m(0)]):_vm._e()])}
var CheckStatusvue_type_template_id_3c10da00_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('small',[_c('a',{attrs:{"href":"/user/password"}},[_vm._v("Mot de passe oublié")])])])}]


;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/CheckStatus.vue?vue&type=template&id=3c10da00&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(66992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(78783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/LoginGoogle.vue?vue&type=template&id=37c845e8&
var LoginGooglevue_type_template_id_37c845e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"buttton-google-aouth",class:_vm.classRender,attrs:{"id":_vm.idHtmlrender,"client_google_is_define":_vm.client_google_is_define}})}
var LoginGooglevue_type_template_id_37c845e8_staticRenderFns = []


;// CONCATENATED MODULE: ../drupal-vuejs/src/App/rx/google.js
//const gapi = window.gapi;
/* harmony default export */ var google = ({
  userAccess: {},
  //contient les informations renvoyés par google apres approbations.
  client_id: "513247959752-qapd9jb30pdtoh51m0h53070a2v8c4er.apps.googleusercontent.com"
});
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(34665);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/LoginGoogle.vue?vue&type=script&lang=js&




//
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





/* harmony default export */ var LoginGooglevue_type_script_lang_js_ = ({
  name: "LoginGoogle",
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
    actionAfterLogin: {
      type: String,
      required: true
    }
  },
  computed: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)(["configs_login_rx_vuejs"])), {}, {
    idHtmlrender: function idHtmlrender() {
      return "google-login-tab" + this.idHtml;
    },
    client_google_is_define: function client_google_is_define() {
      if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.client_google_id) {
        this.initGoogle();
        return true;
      } else {
        console.log("Error de configuration de google, veillez denifir la clée 'client_google_id'");
        return "";
      }
    }
  }),
  methods: {
    initGoogle: function initGoogle() {
      var _this = this;

      if (!window.google) {
        loadScript("https://accounts.google.com/gsi/client").then(function () {
          _this.getUserInfoFromFrame();
        });
      } else {
        this.getUserInfoFromFrame();
      }
    },
    getUserInfoFromFrame: function getUserInfoFromFrame() {
      var _this2 = this;

      var self = this;

      function handleCredentialResponse(response) {
        google.userAccess = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, response), {}, {
          client_id: response.clientId
        });
        self.TryToLoginWithGoogle();
        window.rxGoogle = google;
      }

      var goo = function goo() {
        window.google.accounts.id.initialize({
          // example => 51324xxxx-xxxxxxxxxxxxxxxxx8c4er.apps.googleusercontent.com
          client_id: _this2.configs_login_rx_vuejs.client_google_id,
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
      var _this3 = this;

      // this.IsBusy();
      // this.getFields();
      return new Promise(function (resolv, reject) {
        utilities/* default.post */.Z.post("/login-rx-vuejs/google-check", google.userAccess).then(function (resp) {
          _this3.isBusy = false;
          _this3.alertDisplay = true;
          _this3.alertType = "alert-success";
          _this3.alertText = "Connexion réussie";

          _this3.$emit("ev_logingoogle", resp.data); // Si on souhaite juste obtenir les infos concernant l'utilisateur.


          if (_this3.returnUidInfo) {
            resolv(resp);
            return;
          }

          config_for_all.AfterRedirect(_this3.actionAfterLogin, null, resp);
          resolv(resp);
        }).catch(function (errors) {
          _this3.isBusy = false;
          _this3.alertDisplay = true;
          _this3.alertType = "alert-danger";
          _this3.alertText = "Google : Erreur de connexion";

          if (errors.error && errors.error.statusText && errors.error.statusText != "") {
            _this3.alertText = errors.error.statusText;
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
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/LoginGoogle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoginGooglevue_type_script_lang_js_ = (LoginGooglevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/LoginGoogle.vue?vue&type=style&index=0&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/LoginGoogle.vue?vue&type=style&index=0&lang=scss&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/LoginGoogle.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  components_LoginGooglevue_type_script_lang_js_,
  LoginGooglevue_type_template_id_37c845e8_render,
  LoginGooglevue_type_template_id_37c845e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoginGoogle = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/CheckStatus.vue?vue&type=script&lang=js&








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var CheckStatusvue_type_script_lang_js_ = ({
  name: "CheckStatus",
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 520).then(__webpack_require__.bind(__webpack_require__, 92520));
    },
    logingoogle: LoginGoogle
  },
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    },
    actionAfterLogin: {
      type: String,
      required: true
    },
    showRegisterLink: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      messages: config.messages,
      waiting: ""
    };
  },
  computed: (0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)(["form"])),
  methods: {
    loginFacebook: function loginFacebook() {
      this.waiting = "facebook";
      facebook.openPopup();
    },
    logOutFacebook: function logOutFacebook() {
      facebook.logOut();
    },
    register: function register() {
      this.$emit("go-register");
    },

    /**
     * Verifie si l'utilisateur existe deja.
     */
    checkUserStatus: function checkUserStatus() {
      var _this = this;

      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, test;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.waiting = "wait";
                url = "/login-rx-vuejs/check-user-status";
                _context.next = 4;
                return _this.formValidate.validate();

              case 4:
                test = _context.sent;
                if (test) utilities/* default.post */.Z.post(url, _this.form).then(function (resp) {
                  _this.waiting = "";
                  if (resp.data) _this.$emit("select-stepe", "setPassword");else {
                    _this.$emit("select-stepe", "register");
                  }
                });else _this.waiting = "";

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/CheckStatus.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CheckStatusvue_type_script_lang_js_ = (CheckStatusvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/CheckStatus.vue?vue&type=style&index=0&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/CheckStatus.vue?vue&type=style&index=0&lang=scss&

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/CheckStatus.vue



;


/* normalize component */

var CheckStatus_component = (0,componentNormalizer/* default */.Z)(
  components_CheckStatusvue_type_script_lang_js_,
  CheckStatusvue_type_template_id_3c10da00_render,
  CheckStatusvue_type_template_id_3c10da00_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CheckStatus = (CheckStatus_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/SetPassword.vue?vue&type=template&id=ab2c4b2c&
var SetPasswordvue_type_template_id_ab2c4b2c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-center"},[_c('a',{staticClass:"content-center__img",attrs:{"href":"/"}},[_c('img',{attrs:{"src":_vm.urlLogo,"alt":""}})]),_c('h3',{staticClass:"content-center__title"},[_vm._v(_vm._s(_vm.messages.pass))]),_c('div',{staticClass:"form-group content-center__input"},[_c('ValidationProvider',{ref:"refPass",attrs:{"name":"pass","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [(_vm.form.pass)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.pass[0].value),expression:"form.pass[0].value"}],staticClass:"form-control",attrs:{"type":"password","name":"pass"},domProps:{"value":(_vm.form.pass[0].value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.pass[0], "value", $event.target.value)}}}):_vm._e(),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}])})],1),_c('a',{staticClass:"content-center__forgot-pass",attrs:{"href":"/user/password"}},[_vm._v(" Mot de passe oublié ? ")]),_c('div',{staticClass:"content-center__btn"},[_c('div',{staticClass:"btn-login btn-login--connexion",on:{"click":_vm.Login}},[_c('span',{staticClass:"btn-login__text"},[_vm._v(" "+_vm._s(_vm.messages.submit.connect)+" ")]),(_vm.waiting == 'wait')?_c('svgWaiting'):_vm._e()],1)]),_c('hr'),_c('a',{staticClass:"text-center d-block",attrs:{"href":"#"},on:{"click":function($event){return _vm.$emit('select-stepe', 'checkstatus')}}},[_vm._v(" Retour ")])])}
var SetPasswordvue_type_template_id_ab2c4b2c_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/SetPassword.vue?vue&type=script&lang=js&








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SetPasswordvue_type_script_lang_js_ = ({
  name: "SetPassword",
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 520).then(__webpack_require__.bind(__webpack_require__, 92520));
    }
  },
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    },
    actionAfterLogin: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      messages: config.messages,
      waiting: ""
    };
  },
  computed: (0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)(["form"])),
  mounted: function mounted() {
    if (this.form.pass === undefined) {
      this.$set(this.form, "pass", [{
        value: ""
      }]);
    }
  },
  methods: {
    Login: function Login() {
      var _this = this;

      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var test;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.waiting = "wait";
                _context.next = 3;
                return _this.formValidate.validate();

              case 3:
                test = _context.sent;
                setTimeout(function () {
                  if (test) config.connexionUser(_this.form, _this.actionAfterLogin).then(function () {
                    _this.waiting = "";
                  }).catch(function (e) {
                    console.log("Login : ", e);

                    _this.$refs.refPass.setErrors([e.error.statusText]);

                    _this.waiting = "error";
                  });else _this.waiting = "";
                }, 3000);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/SetPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SetPasswordvue_type_script_lang_js_ = (SetPasswordvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/SetPassword.vue





/* normalize component */
;
var SetPassword_component = (0,componentNormalizer/* default */.Z)(
  components_SetPasswordvue_type_script_lang_js_,
  SetPasswordvue_type_template_id_ab2c4b2c_render,
  SetPasswordvue_type_template_id_ab2c4b2c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SetPassword = (SetPassword_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/RegisTer.vue?vue&type=template&id=36a9a2f6&
var RegisTervue_type_template_id_36a9a2f6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-center"},[_c('a',{staticClass:"content-center__img",attrs:{"href":"/"}},[_c('img',{attrs:{"src":_vm.urlLogo,"alt":""}})]),(_vm.modelRegisterFormResult === 'default')?_c('div',[_c('h3',{staticClass:"content-center__title"},[_vm._v(_vm._s(_vm.messages.login))]),_c('div',{staticClass:"form-group content-center__input"},[_c('ValidationProvider',{attrs:{"name":"name","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.name[0].value),expression:"form.name[0].value"}],staticClass:"form-control",attrs:{"type":"text","readonly":_vm.readonlyName,"name":"name"},domProps:{"value":(_vm.form.name[0].value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.name[0], "value", $event.target.value)}}}),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(err,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(err)+" ")])}),0)]}}],null,false,3793439729)})],1),(_vm.showPassword)?_c('h3',{staticClass:"content-center__title"},[_vm._v(" "+_vm._s(_vm.messages.pass)+" ")]):_vm._e(),(_vm.showPassword)?_c('div',{staticClass:"form-group content-center__input"},[_c('ValidationProvider',{attrs:{"name":"pass","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [(_vm.form.pass)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.pass[0].value),expression:"form.pass[0].value"}],staticClass:"form-control",attrs:{"type":"password","name":"pass"},domProps:{"value":(_vm.form.pass[0].value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.pass[0], "value", $event.target.value)}}}):_vm._e(),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(err,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(err)+" ")])}),0)]}}],null,false,2464977794)})],1):_vm._e(),_c('h3',{staticClass:"content-center__title"},[_vm._v(_vm._s(_vm.messages.mail))]),_c('ValidationProvider',{ref:"mail",staticClass:"d-block w-100",attrs:{"name":"mail","rules":"required|email"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('div',{staticClass:"form-group content-center__input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.mail[0].value),expression:"form.mail[0].value"}],staticClass:"form-control",attrs:{"type":"mail","name":"mail"},domProps:{"value":(_vm.form.mail[0].value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.mail[0], "value", $event.target.value)}}})]),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(err,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(err)+" ")])}),0)]}}],null,false,2930674861)}),_c('div',{staticClass:"content-center__btn"},[_c('div',{staticClass:"btn-login btn-login--connexion",on:{"click":_vm.RegisterDefault}},[_c('span',{staticClass:"btn-login__text"},[_vm._v(" "+_vm._s(_vm.messages.submit.register)+" ")]),(_vm.waiting == 'wait')?_c('svgWaiting'):_vm._e()],1)]),_c('hr')],1):_vm._e(),(_vm.modelRegisterFormResult === 'generate_password')?_c('div',[_c('h4',{staticClass:"title mb-5"},[_vm._v("Creation automatique du compte")]),(_vm.validEmail(_vm.form.name[0].value))?_c('div',{staticClass:"mb-5"},[_c('p',[_vm._v("Vos informations de connexion seront transferés à cette adresse.")]),_c('strong',[_vm._v(" "+_vm._s(_vm.form.name[0].value)+" ")]),_vm._v(" "+_vm._s(_vm.set_email())+" ")]):_vm._e(),(!_vm.validEmail(_vm.form.name[0].value))?_c('div',[_c('ValidationProvider',{ref:"mail",staticClass:"d-block w-100",attrs:{"name":"mail","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('div',{staticClass:"form-group content-center__input"},[_c('label',{staticClass:"mb-0 pb-0"},[_vm._v(" Votre adresse email ")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.mail[0].value),expression:"form.mail[0].value"}],staticClass:"form-control",attrs:{"type":"mail","name":"mail"},domProps:{"value":(_vm.form.mail[0].value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.mail[0], "value", $event.target.value)}}}),_c('div',[_c('small',[_vm._v(" Vos informations de connexion seront transferés à cette adresse. ")])])]),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}],null,false,1488605717)})],1):_vm._e(),_c('div',{staticClass:"content-center__btn"},[_c('div',{staticClass:"btn-login btn-login--connexion",on:{"click":_vm.generatePassword}},[_c('span',{staticClass:"btn-login__text"},[_vm._v(" "+_vm._s(_vm.messages.submit.register)+" ")]),(_vm.waiting == 'wait')?_c('svgWaiting'):_vm._e()],1)])]):_vm._e(),_c('b-alert',{attrs:{"dismissible":"","variant":"danger","fade":"","show":_vm.error.message ? true : false},on:{"dismissed":function($event){_vm.error.message = false}}},[_vm._v(" "+_vm._s(_vm.error.message)+" ")]),_c('a',{staticClass:"text-center d-block",attrs:{"href":"#"},on:{"click":function($event){return _vm.$emit('select-stepe', 'checkstatus')}}},[_vm._v(" Retour ")])],1)}
var RegisTervue_type_template_id_36a9a2f6_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(54747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__(77601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(68309);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/RegisTer.vue?vue&type=script&lang=js&













//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var RegisTervue_type_script_lang_js_ = ({
  name: "RegisTer",
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 520).then(__webpack_require__.bind(__webpack_require__, 92520));
    }
  },
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    actionAfterRegister: {
      type: String,
      required: true
    },
    modelRegisterForm: {
      type: [String, Boolean],
      required: true
    },
    showModalSuccess: {
      type: Boolean,
      required: true
    },
    readonlyName: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      messages: config.messages,
      waiting: "",

      /**
       * Drupal >9.5 renvoit l'erreur dans {message}
       */
      error: {
        message: false
      }
    };
  },
  computed: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)(["form", "configs_login_rx_vuejs"])), {}, {
    /**
     * Resultat entre la config endur et celle en BD.
     */
    modelRegisterFormResult: function modelRegisterFormResult() {
      if (this.modelRegisterForm == "generate_password" || this.modelRegisterForm == "default") {
        return this.modelRegisterForm;
      } else if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.generate_user) {
        return "generate_password";
      } else {
        return "default";
      }
    }
  }),
  mounted: function mounted() {
    if (this.showPassword) {
      if (this.form.pass === undefined) {
        this.$set(this.form, "pass", [{
          value: ""
        }]);
      }
    } else if (this.form.pass) {
      delete this.form.pass;
    }
  },
  methods: {
    generatePassword: function generatePassword() {
      var _this = this;

      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, test;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.waiting = "wait";
                url = "/login-rx-vuejs/genrate-password";
                _context.next = 4;
                return _this.formValidate.validate();

              case 4:
                test = _context.sent;

                if (test) {
                  utilities/* default.post */.Z.post(url, _this.form).then(function (resp) {
                    console.log("resp : ", resp);
                    _this.waiting = "";
                    config.AfterRedirect(_this.actionAfterRegister, null, resp);
                  }).catch(function () {
                    _this.waiting = "";
                  });
                } else {
                  _this.waiting = "";
                  console.log("echec de validation de mail");
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /**
     * --
     */
    RegisterDefault: function RegisterDefault() {
      var _this2 = this;

      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var url, test;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.waiting = "wait";
                url = "/user/register?_format=json";
                _context2.next = 4;
                return _this2.formValidate.validate();

              case 4:
                test = _context2.sent;
                if (test) utilities/* default.post */.Z.post(url, _this2.form).then(function (resp) {
                  _this2.waiting = "";
                  if (_this2.showModalSuccess) config.modalSuccess(config.msgCreate([_this2.messages.devis_create_user]), {
                    title: "Votre compte a été crré",
                    footerClass: "d-none",
                    headerBgVariant: "success",
                    headerTextVariant: "light"
                  }).then(function () {
                    config.AfterRedirect(_this2.actionAfterRegister, null, resp);
                  });else config.AfterRedirect(_this2.actionAfterRegister, null, resp);
                }).catch(function (e) {
                  _this2.waiting = "";
                  console.log("catch : ", e);

                  if (e.error.data && e.error.data.message) {
                    _this2.error.message = e.error.data.message;
                  }

                  if (e.error && e.error.data && e.error.data.errors) {
                    var errors = e.error.data.errors; // console.log(" this.$refs : ", this.$refs);

                    errors.forEach(function (error) {
                      var field = error.split(":"); // console.log(" field : ", field);

                      if (_this2.$refs[field[0]]) {
                        if (_this2.$refs[field[0]][0]) {
                          _this2.$refs[field[0]][0].setErrors([field[1]]);
                        } else _this2.$refs[field[0]].setErrors([field[1]]);
                      }
                    });
                  }
                });else _this2.waiting = "";

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    validEmail: function validEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    set_email: function set_email() {
      this.form.mail = this.form.name;
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/RegisTer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RegisTervue_type_script_lang_js_ = (RegisTervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/RegisTer.vue





/* normalize component */
;
var RegisTer_component = (0,componentNormalizer/* default */.Z)(
  components_RegisTervue_type_script_lang_js_,
  RegisTervue_type_template_id_36a9a2f6_render,
  RegisTervue_type_template_id_36a9a2f6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RegisTer = (RegisTer_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/LoginRegister.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //import { ValidationObserver } from "vee-validate";







/* harmony default export */ var LoginRegistervue_type_script_lang_js_ = ({
  name: "LoginRegister",
  props: {
    // see config_for_all.AfterRedirect for more informations.
    actionAfterLogin: {
      type: String,
      default: "default"
    },
    // see config_for_all.AfterRedirect for more informations.
    actionAfterRegister: {
      type: String,
      default: "default"
    },
    modelRegisterForm: {
      type: [String, Boolean],
      default: false
    },
    showPassword: {
      type: Boolean,
      default: true
    },
    showModalSuccess: {
      type: Boolean,
      default: true
    },
    showRegisterLink: {
      type: Boolean,
      default: true
    }
  },

  /**
   * --
   */
  data: function data() {
    return {
      messages: config.messages,
      waiting: "",
      stepe: CheckStatus,
      models: {},
      baseURl: rootConfig/* default.baseURl */.Z.baseURl,
      isBusy: false,
      alertDisplay: false,
      alertType: "alert-danger",
      alertText: "",
      urlLogo: window.location.origin + "" + window.logo_current_theme,
      formValidate: {},
      readonlyName: true
    };
  },
  computed: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,vuex_esm/* mapState */.rn)(["configs_login_rx_vuejs"])), {}, {
    facebook_app_is_define: function facebook_app_is_define() {
      if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.facebook_app_id) {
        this.initFacebook();
        return true;
      } else return "";
    }
  }),

  /**
   * --
   */
  mounted: function mounted() {
    this.formValidate = this.$refs.formValidate;
    this.getConfigs();
  },
  methods: {
    initFacebook: function initFacebook() {
      facebook.appId = this.configs_login_rx_vuejs.facebook_app_id; //889256191665205;

      this.TryToLoginWithFacebook();
      facebook.chargement();
    },
    selectStepe: function selectStepe(step) {
      /**
       * Dans la messure ou le changement se fait de maniere automatique on ne change pas la valeur de name.
       */
      this.readonlyName = true;

      switch (step) {
        case "checkstatus":
          this.stepe = CheckStatus;
          break;

        case "setPassword":
          this.stepe = SetPassword;
          break;

        case "register":
          this.stepe = RegisTer;
          break;
      }
    },
    goRegister: function goRegister() {
      /**
       * Dans la messure l'user click sur s'inscrire il peut editer le name.
       */
      this.readonlyName = false;
      this.stepe = RegisTer;
    },

    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithFacebook: function TryToLoginWithFacebook() {
      var _this = this;

      document.addEventListener("wbu-fb-status-change", function () {
        _this.isBusy = true;

        _this.getFields();

        utilities/* default.post */.Z.post("/login-rx-vuejs/facebook-check", facebook.user).then(function (resp) {
          _this.isBusy = false;
          _this.alertDisplay = true;
          _this.alertType = "alert-success";
          _this.alertText = " Connexion réussie  ";

          if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
            window.location.assign(resp.reponse.request.responseURL);
          } // il faut s'assurer que les données sont ok.
          else if (resp.data && resp.data.createuser) {
            _this.stepe = "final-fb-register";
          } else {
            window.location.assign(window.location.origin);
          }
        }).catch(function (errors) {
          _this.isBusy = false;
          _this.isBusy = false;
          _this.alertDisplay = true;
          _this.alertType = "alert-danger";
          _this.alertText = "Facebook : Erreur de connexion ";

          if (errors.error) {
            _this.alertText = errors.error.statusText;
          }
        });
      }, false);
    },
    IsBusy: function IsBusy() {
      this.isBusy = true;
      console.log("this.isbusy", this.isBusy);
    },

    /**
     * --
     */
    finalRegister: function finalRegister() {
      var _this2 = this;

      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params, url, test;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.waiting = "wait";
                params = {};
                url = "";

                if (_this2.stepe === "final-gl-register") {
                  url = "/login-rx-vuejs/google-login";
                  params = {
                    fields: _this2.models,
                    google: []
                  };
                } else if (_this2.stepe === "final-fb-register") {
                  url = "/login-rx-vuejs/facebook-login";
                  params = {
                    fields: _this2.models,
                    facebook: facebook.user
                  };
                }

                _context.next = 6;
                return _this2.$refs.formValidate.validate();

              case 6:
                test = _context.sent;
                if (test) utilities/* default.post */.Z.post(url, params).then(function (resp) {
                  console.log(resp);
                  _this2.waiting = "";

                  if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
                    window.location.assign(resp.reponse.request.responseURL);
                  }
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /**
     * Helper to login user.
     * ( This function is used by modules that create accounts and then need to login the user. )
     * @param {*} form
     */
    connexionUser: function connexionUser(form) {
      return config.connexionUser(form, this.actionAfterLogin);
    },
    getConfigs: function getConfigs() {
      var _this3 = this;

      var url = "/login-rx-vuejs/get-configs";
      utilities/* default.post */.Z.post(url, this.form).then(function (resp) {
        _this3.$store.state.configs_login_rx_vuejs = resp.data;
      }).catch(function (e) {
        console.log(e);
      });
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/LoginRegister.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoginRegistervue_type_script_lang_js_ = (LoginRegistervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/LoginRegister.vue?vue&type=style&index=0&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/LoginRegister.vue?vue&type=style&index=0&lang=scss&

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/LoginRegister.vue



;


/* normalize component */

var LoginRegister_component = (0,componentNormalizer/* default */.Z)(
  components_LoginRegistervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoginRegister = (LoginRegister_component.exports);

/***/ })

}]);
//# sourceMappingURL=EntityDrupal.common.864.js.map