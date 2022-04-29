"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] || []).push([[300],{

/***/ 57300:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z9": function() { return /* reexport */ loginRegister; },
  "rC": function() { return /* reexport */ user; }
});

// UNUSED EXPORTS: drupalFormFields, drupalSession, drupalUtilities, loginGoogle, loginfacebook, termsTaxo

// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(97330);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(12220);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(56473);
// EXTERNAL MODULE: ../wbuutilities/index.js + 70 modules
var wbuutilities = __webpack_require__(34821);
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
var asyncToGenerator = __webpack_require__(84543);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(71684);
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
var classCallCheck = __webpack_require__(74225);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(87330);
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(34547);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(33773);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(55090);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(87544);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/formatFields/InputBootstrap.js




/* harmony default export */ var InputBootstrap = ({
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

var formatField = /*#__PURE__*/function () {
  function formatField(entity, bundle) {
    (0,classCallCheck/* default */.Z)(this, formatField);

    this.entity = entity;
    this.bundle = bundle; // ---------
  }
  /**
   * Retoune les champs convertie en utilisant les composants bootstrap-vuejs.
   * @returns Array []
   */


  (0,createClass/* default */.Z)(formatField, [{
    key: "format",
    value: function () {
      var _format = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
      return App_utilities.get(url);
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
}();

/* harmony default export */ var formatFieldsBootstrap = (formatField);
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"buttton-google-aouth",class:_vm.classRender,attrs:{"id":_vm.idHtmlrender}})}
var staticRenderFns = []


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
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=script&lang=js&




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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-62[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-62[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-62[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-62[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=style&index=0&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=style&index=0&lang=scss&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/logingoogle.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  components_logingooglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var logingoogle = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/loginRegister.vue?vue&type=template&id=691d6895&
var loginRegistervue_type_template_id_691d6895_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ValidationObserver',{ref:"formValidate",attrs:{"tag":"form"}},[_c('div',{staticClass:"login-page"},[(_vm.alertDisplay)?_c('div',{staticClass:"alert w-100",class:_vm.alertType,attrs:{"role":"alert"},domProps:{"innerHTML":_vm._s(_vm.alertText)}}):_vm._e(),(_vm.isBusy)?_c('div',{staticClass:"spinner-grow text-primary",staticStyle:{"width":"3rem","height":"3rem"},attrs:{"role":"status"}},[_c('span',{staticClass:"sr-only"},[_vm._v("Chargement ...")])]):_vm._e(),_c('transition',{attrs:{"name":"customslide"}},[_c('div',{staticClass:"block-center"},[_c(_vm.stepe,{tag:"component",attrs:{"urlLogo":_vm.urlLogo,"form":_vm.form,"formValidate":_vm.formValidate,"action_after_login":_vm.action_after_login},on:{"select-stepe":_vm.selectStepe}})],1)])],1),_c('div',{staticClass:"text-white politik-secur mx-auto text-center"},[_c('p',[_vm._v(" En vous inscrivant, vous acceptez nos "),_c('a',{attrs:{"href":"#"}},[_vm._v(" Conditions d'utilisation ")]),_vm._v(", de recevoir des emails et des MAJ de LESROISDELARENO et vous reconnaissez avoir lu notre "),_c('a',{attrs:{"href":"#"}},[_vm._v(" Politique de confidentialité")])])])])}
var loginRegistervue_type_template_id_691d6895_staticRenderFns = []


// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(77203);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/config.js




var vm = new (external_commonjs_vue_commonjs2_vue_root_Vue_default())();
/* harmony default export */ var components_config = ((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, config_for_all), {}, {
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
    devisCreateUser: "Votre compte a été creer sur <a href='/'> lesroisdelareno.fr </a>. <br> <strong> Bien vouloir verifier votre boite mail afin de valider votre compte </strong>"
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
  }
}));
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__(52260);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(87715);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/vee-validate-custom.js


 // No message specified.

(0,vee_validate_esm/* extend */.l7)("email", rules/* email */.Do); // Override the default message.

(0,vee_validate_esm/* extend */.l7)("required", (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rules/* required */.C1), {}, {
  message: "Ce champs est requis"
}));
(0,vee_validate_esm/* extend */.l7)("alpha", rules/* alpha */.Fq);
(0,vee_validate_esm/* extend */.l7)("alpha", rules/* numeric */.uR); //export default extend;
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/checkstatus.vue?vue&type=template&id=ea33e390&
var checkstatusvue_type_template_id_ea33e390_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-center"},[_c('a',{staticClass:"content-center__img",attrs:{"href":"/"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":_vm.urlLogo,"alt":""}})]),_c('h4',{staticClass:"title"},[_vm._v("Connectez vous avec")]),_c('div',{staticClass:"content-center__btn-column"},[_c('logingoogle',{attrs:{"idHtml":"default"}}),_c('div',{staticClass:"btn-login btn-login--facebook",on:{"click":_vm.loginFacebook}},[_c('span',{staticClass:"btn-login__icon icon-facebook"}),_c('i',{staticClass:"btn-login__text"},[_vm._v(" Facebook ")]),(_vm.waiting === 'facebook')?_c('svgWaiting'):_vm._e()],1)],1),_c('strong',{staticClass:"d-block"},[_vm._v(" Ou ")]),_c('hr',{staticClass:"diviseur"}),_c('h3',{staticClass:"content-center__title"},[_vm._v(_vm._s(_vm.messages.log_email))]),_c('div',{staticClass:"form-group content-center__input"},[_c('ValidationProvider',{attrs:{"name":"name","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.name[0].value),expression:"form.name[0].value"}],staticClass:"form-control",attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.form.name[0].value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.name[0], "value", $event.target.value)}}}),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}])})],1),_c('div',{staticClass:"content-center__btn"},[_c('div',{staticClass:"btn-login btn-login--connexion",on:{"click":_vm.checkUserStatus}},[_c('span',{staticClass:"btn-login__text"},[_vm._v(" "+_vm._s(_vm.messages.submit.first)+" ")]),(_vm.waiting === 'wait')?_c('svgWaiting'):_vm._e()],1)])])}
var checkstatusvue_type_template_id_ea33e390_staticRenderFns = []


// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(45885);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(86587);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(57085);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/checkstatus.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var checkstatusvue_type_script_lang_js_ = ({
  name: "checkstatus",
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    }
  },
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 817).then(__webpack_require__.bind(__webpack_require__, 34817));
    },
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_,
    logingoogle: logingoogle
  },
  data: function data() {
    return {
      messages: components_config.messages,
      waiting: ""
    };
  },
  methods: {
    loginFacebook: function loginFacebook() {
      this.waiting = "facebook";
      facebook.openPopup();
    },
    logOutFacebook: function logOutFacebook() {
      facebook.logOut();
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
                if (test) App_utilities.post(url, _this.form).then(function (resp) {
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
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/checkstatus.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_checkstatusvue_type_script_lang_js_ = (checkstatusvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/checkstatus.vue





/* normalize component */
;
var checkstatus_component = (0,componentNormalizer/* default */.Z)(
  components_checkstatusvue_type_script_lang_js_,
  checkstatusvue_type_template_id_ea33e390_render,
  checkstatusvue_type_template_id_ea33e390_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkstatus = (checkstatus_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/setPassword.vue?vue&type=template&id=d7b8b1f0&
var setPasswordvue_type_template_id_d7b8b1f0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-center"},[_c('a',{staticClass:"content-center__img",attrs:{"href":"/"}},[_c('img',{attrs:{"src":_vm.urlLogo,"alt":""}})]),_c('h3',{staticClass:"content-center__title"},[_vm._v(_vm._s(_vm.messages.pass))]),_c('div',{staticClass:"form-group content-center__input"},[_c('ValidationProvider',{ref:"refPass",attrs:{"name":"pass","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [(_vm.form.password)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.password[0].value),expression:"form.password[0].value"}],staticClass:"form-control",attrs:{"type":"password","name":"pass"},domProps:{"value":(_vm.form.password[0].value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.password[0], "value", $event.target.value)}}}):_vm._e(),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}])})],1),_c('a',{staticClass:"content-center__forgot-pass",attrs:{"href":"/user/password"}},[_vm._v(" Mot de passe oublié ? ")]),_c('div',{staticClass:"content-center__btn"},[_c('div',{staticClass:"btn-login btn-login--connexion",on:{"click":_vm.Login}},[_c('span',{staticClass:"btn-login__text"},[_vm._v(" "+_vm._s(_vm.messages.submit.connect)+" ")]),(_vm.waiting == 'wait')?_c('svgWaiting'):_vm._e()],1)]),_c('hr'),_c('a',{staticClass:"text-center d-block",attrs:{"href":"#"},on:{"click":function($event){return _vm.$emit('select-stepe', 'checkstatus')}}},[_vm._v(" Retour ")])])}
var setPasswordvue_type_template_id_d7b8b1f0_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/setPassword.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var setPasswordvue_type_script_lang_js_ = ({
  name: "checkstatus",
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    },
    action_after_login: {
      type: String,
      required: true
    }
  },
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 817).then(__webpack_require__.bind(__webpack_require__, 34817));
    },
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  data: function data() {
    return {
      messages: components_config.messages,
      waiting: ""
    };
  },
  mounted: function mounted() {
    if (this.form.password === undefined) {
      this.$set(this.form, "password", [{
        value: ""
      }]);
    }
  },
  methods: {
    /**
     * --
     */
    Login: function Login() {
      var _this = this;

      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, test;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.waiting = "wait";
                url = "/login-rx-vuejs/user-connexion";
                _context.next = 4;
                return _this.formValidate.validate();

              case 4:
                test = _context.sent;
                setTimeout(function () {
                  if (test) App_utilities.post(url, _this.form).then(function (resp) {
                    _this.waiting = "";
                    components_config.AfterRedirect(_this.action_after_login, null, resp);
                  }).catch(function (e) {
                    _this.$refs.refPass.setErrors([e.error.statusText]);

                    _this.waiting = "error";
                  });else _this.waiting = "";
                }, 3000);

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
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/setPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_setPasswordvue_type_script_lang_js_ = (setPasswordvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/setPassword.vue





/* normalize component */
;
var setPassword_component = (0,componentNormalizer/* default */.Z)(
  components_setPasswordvue_type_script_lang_js_,
  setPasswordvue_type_template_id_d7b8b1f0_render,
  setPasswordvue_type_template_id_d7b8b1f0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var setPassword = (setPassword_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/register.vue?vue&type=template&id=4b17b6ef&
var registervue_type_template_id_4b17b6ef_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-center"},[_c('a',{staticClass:"content-center__img",attrs:{"href":"/"}},[_c('img',{attrs:{"src":_vm.urlLogo,"alt":""}})]),_c('h3',{staticClass:"content-center__title"},[_vm._v(_vm._s(_vm.messages.login))]),_c('div',{staticClass:"form-group content-center__input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.name[0].value),expression:"form.name[0].value"}],staticClass:"form-control",attrs:{"type":"text","readonly":"true","name":"name"},domProps:{"value":(_vm.form.name[0].value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.name[0], "value", $event.target.value)}}})]),(_vm.showPassword)?_c('h3',{staticClass:"content-center__title"},[_vm._v(" "+_vm._s(_vm.messages.pass)+" ")]):_vm._e(),(_vm.showPassword)?_c('div',{staticClass:"form-group content-center__input"},[(_vm.form.password)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.password[0].value),expression:"form.password[0].value"}],staticClass:"form-control",attrs:{"type":"password","name":"pass"},domProps:{"value":(_vm.form.password[0].value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.password[0], "value", $event.target.value)}}}):_vm._e()]):_vm._e(),_c('h3',{staticClass:"content-center__title"},[_vm._v(_vm._s(_vm.messages.mail))]),_c('ValidationProvider',{ref:"mail",staticClass:"d-block w-100",attrs:{"name":"mail","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('div',{staticClass:"form-group content-center__input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.mail[0].value),expression:"form.mail[0].value"}],staticClass:"form-control",attrs:{"type":"mail","name":"mail"},domProps:{"value":(_vm.form.mail[0].value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.mail[0], "value", $event.target.value)}}})]),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}])}),_vm._l((_vm.templates),function(temp,i){return _c('ValidationProvider',{key:i,ref:temp.ref,refInFor:true,staticClass:"d-block w-100",scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c(temp,{tag:"component"}),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}],null,true)})}),_c('div',{staticClass:"content-center__btn"},[_c('div',{staticClass:"btn-login btn-login--connexion",on:{"click":_vm.Register}},[_c('span',{staticClass:"btn-login__text"},[_vm._v(" "+_vm._s(_vm.messages.submit.register)+" ")]),(_vm.waiting == 'wait')?_c('svgWaiting'):_vm._e()],1)]),_c('hr'),_c('a',{staticClass:"text-center d-block",attrs:{"href":"#"},on:{"click":function($event){return _vm.$emit('select-stepe', 'checkstatus')}}},[_vm._v(" Retour ")])],2)}
var registervue_type_template_id_4b17b6ef_staticRenderFns = []


// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33117);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(49526);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/register.vue?vue&type=script&lang=js&










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var registervue_type_script_lang_js_ = ({
  name: "checkstatus",
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    form: {
      type: Object,
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
    action_after_login: {
      type: String,
      required: true
    }
  },
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 817).then(__webpack_require__.bind(__webpack_require__, 34817));
    },
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  data: function data() {
    return {
      messages: components_config.messages,
      waiting: "",
      templates: []
    };
  },
  mounted: function mounted() {
    if (this.showPassword) {
      if (this.form.password === undefined) {
        this.$set(this.form, "password", [{
          value: ""
        }]);
      }
    } else if (this.form.password) {
      delete this.form.password;
    }

    this.getFields();
  },
  methods: {
    /**
     * --
     */
    Register: function Register() {
      var _this = this;

      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, test;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.waiting = "wait";
                url = "/user/register?_format=json";
                _context.next = 4;
                return _this.formValidate.validate();

              case 4:
                test = _context.sent;
                if (test) App_utilities.post(url, _this.form).then(function (resp) {
                  console.log("resp : ", resp);
                  _this.waiting = "";
                  components_config.modalSuccess(components_config.msgCreate([_this.messages.devisCreateUser]), {
                    title: "Votre compte a été crré",
                    footerClass: "d-none",
                    headerBgVariant: "success",
                    headerTextVariant: "light"
                  }).then(function () {
                    components_config.AfterRedirect(_this.action_after_login, resp);
                  });
                }).catch(function (e) {
                  _this.waiting = ""; //console.log("catch : ", e);

                  if (e.error && e.error.data && e.error.data.errors) {
                    var errors = e.error.data.errors; //console.log(" this.$refs : ", this.$refs);

                    errors.forEach(function (error) {
                      var field = error.split(":"); // console.log(" field : ", field);

                      if (_this.$refs[field[0]]) {
                        if (_this.$refs[field[0]][0]) {
                          _this.$refs[field[0]][0].setErrors([field[1]]);
                        } else _this.$refs[field[0]].setErrors([field[1]]);
                      }
                    });
                  }
                });else _this.waiting = "";

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
    getFields: function getFields() {
      var _this2 = this;

      var fds = new formatFieldsBootstrap("user", "user");
      fds.format().then(function (resp) {
        _this2.templates = resp.templates;

        for (var fieldName in resp.models) {
          _this2.$set(_this2.form, fieldName, resp.models[fieldName]);
        }

        console.log("resp : ", resp);
      });
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/register.vue





/* normalize component */
;
var register_component = (0,componentNormalizer/* default */.Z)(
  components_registervue_type_script_lang_js_,
  registervue_type_template_id_4b17b6ef_render,
  registervue_type_template_id_4b17b6ef_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var register = (register_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-80[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/loginRegister.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var loginRegistervue_type_script_lang_js_ = ({
  props: {
    // see config_for_all.AfterRedirect for more informations.
    action_after_login: {
      type: String,
      default: "default"
    }
  },
  name: "LoginRegister",

  /**
   * --
   */
  components: {
    ValidationObserver: vee_validate_esm/* ValidationObserver */._j
  },

  /**
   * --
   */
  data: function data() {
    return {
      messages: components_config.messages,
      waiting: "",
      form: {
        name: [{
          value: ""
        }],
        mail: [{
          value: ""
        }]
      },
      password: "",
      mail: "",
      stepe: checkstatus,
      models: {},
      baseURl: src_config.baseURl,
      isBusy: false,
      alertDisplay: false,
      alertType: "alert-danger",
      alertText: "",
      urlLogo: window.location.origin + "" + window.logo_current_theme,
      formValidate: {}
    };
  },

  /**
   * --
   */
  mounted: function mounted() {
    facebook.appId = 889256191665205;
    this.TryToLoginWithFacebook();
    facebook.chargement();
    this.formValidate = this.$refs.formValidate;
  },
  methods: {
    selectStepe: function selectStepe(step) {
      switch (step) {
        case "checkstatus":
          this.stepe = checkstatus;
          break;

        case "setPassword":
          this.stepe = setPassword;
          break;

        case "register":
          this.stepe = register;
          break;
      }
    },

    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithFacebook: function TryToLoginWithFacebook() {
      var _this = this;

      document.addEventListener("wbu-fb-status-change", function () {
        _this.isBusy = true;

        _this.getFields();

        App_utilities.post("/login-rx-vuejs/facebook-check", facebook.user).then(function (resp) {
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
                if (test) App_utilities.post(url, params).then(function (resp) {
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
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/loginRegister.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_loginRegistervue_type_script_lang_js_ = (loginRegistervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-62[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-62[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-62[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-62[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/loginRegister.vue?vue&type=style&index=0&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/loginRegister.vue?vue&type=style&index=0&lang=scss&

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/loginRegister.vue



;


/* normalize component */

var loginRegister_component = (0,componentNormalizer/* default */.Z)(
  components_loginRegistervue_type_script_lang_js_,
  loginRegistervue_type_template_id_691d6895_render,
  loginRegistervue_type_template_id_691d6895_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loginRegister = (loginRegister_component.exports);
;// CONCATENATED MODULE: ../drupal-vuejs/index.js









/***/ })

}]);
//# sourceMappingURL=EntityDrupal.umd.300.js.map