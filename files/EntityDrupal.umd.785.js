((typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkEntityDrupal"] || []).push([[785],{

/***/ 84964:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ 590:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(47293);
var wellKnownSymbol = __webpack_require__(5112);
var IS_PURE = __webpack_require__(31913);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ 3929:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(17854);
var isRegExp = __webpack_require__(47850);

var TypeError = global.TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ 44699:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(19781);
var uncurryThis = __webpack_require__(1702);
var objectKeys = __webpack_require__(81956);
var toIndexedObject = __webpack_require__(45656);
var $propertyIsEnumerable = (__webpack_require__(55296).f);

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ 33197:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var global = __webpack_require__(17854);
var uncurryThis = __webpack_require__(1702);

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;

var RangeError = global.RangeError;
var exec = uncurryThis(regexSeparators.exec);
var floor = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis(''.charCodeAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var split = uncurryThis(''.split);
var toLowerCase = uncurryThis(''.toLowerCase);

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = charCodeAt(string, counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        push(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push(output, value);
        counter--;
      }
    } else {
      push(output, value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  while (delta > baseMinusTMin * tMax >> 1) {
    delta = floor(delta / baseMinusTMin);
    k += base;
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      push(output, fromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    push(output, delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = base;
        while (true) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
          k += base;
        }

        push(output, fromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        handledCPCount++;
      }
    }

    delta++;
    n++;
  }
  return join(output, '');
};

module.exports = function (input) {
  var encoded = [];
  var labels = split(replace(toLowerCase(input), regexSeparators, '\u002E'), '.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push(encoded, exec(regexNonASCII, label) ? 'xn--' + encode(label) : label);
  }
  return join(encoded, '.');
};


/***/ }),

/***/ 26833:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(82109);
var $values = (__webpack_require__(44699).values);

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ 92087:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(19781);
var objectDefinePropertyModule = __webpack_require__(3070);
var regExpFlags = __webpack_require__(67066);
var fails = __webpack_require__(47293);

var RegExpPrototype = RegExp.prototype;

var FORCED = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
  return Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call({ dotAll: true, sticky: true }) !== 'sy';
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) objectDefinePropertyModule.f(RegExpPrototype, 'flags', {
  configurable: true,
  get: regExpFlags
});


/***/ }),

/***/ 32023:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(82109);
var uncurryThis = __webpack_require__(1702);
var notARegExp = __webpack_require__(3929);
var requireObjectCoercible = __webpack_require__(84488);
var toString = __webpack_require__(41340);
var correctIsRegExpLogic = __webpack_require__(84964);

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ 65556:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(66992);
var $ = __webpack_require__(82109);
var global = __webpack_require__(17854);
var call = __webpack_require__(46916);
var uncurryThis = __webpack_require__(1702);
var DESCRIPTORS = __webpack_require__(19781);
var USE_NATIVE_URL = __webpack_require__(590);
var redefine = __webpack_require__(31320);
var redefineAll = __webpack_require__(12248);
var setToStringTag = __webpack_require__(58003);
var createIteratorConstructor = __webpack_require__(24994);
var InternalStateModule = __webpack_require__(29909);
var anInstance = __webpack_require__(25787);
var isCallable = __webpack_require__(60614);
var hasOwn = __webpack_require__(92597);
var bind = __webpack_require__(49974);
var classof = __webpack_require__(70648);
var anObject = __webpack_require__(19670);
var isObject = __webpack_require__(70111);
var $toString = __webpack_require__(41340);
var create = __webpack_require__(70030);
var createPropertyDescriptor = __webpack_require__(79114);
var getIterator = __webpack_require__(18554);
var getIteratorMethod = __webpack_require__(71246);
var validateArgumentsLength = __webpack_require__(48053);
var wellKnownSymbol = __webpack_require__(5112);
var arraySort = __webpack_require__(94362);

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS) return global[name];
  var descriptor = getOwnPropertyDescriptor(global, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp = global.RegExp;
var TypeError = global.TypeError;
var decodeURIComponent = global.decodeURIComponent;
var encodeURIComponent = global.encodeURIComponent;
var charAt = uncurryThis(''.charAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var splice = uncurryThis([].splice);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = replace(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace(result, percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace(encodeURIComponent(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject(init)) this.parseObject(init);
    else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var iteratorMethod = getIteratorMethod(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call(next, iterator)).done) {
        entryIterator = getIterator(anObject(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call(entryNext, entryIterator)).done ||
          (second = call(entryNext, entryIterator)).done ||
          !call(entryNext, entryIterator).done
        ) throw TypeError('Expected sequence with length 2');
        push(this.entries, { key: $toString(first.value), value: $toString(second.value) });
      }
    } else for (var key in object) if (hasOwn(object, key)) {
      push(this.entries, { key: key, value: $toString(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = split(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split(attribute, '=');
          push(this.entries, {
            key: deserialize(shift(entry)),
            value: deserialize(join(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      push(result, serialize(entry.key) + '=' + serialize(entry.value));
    } return join(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  setInternalState(this, new URLSearchParamsState(init));
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    push(state.entries, { key: $toString(name), value: $toString(value) });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $toString(name);
    var val = $toString(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push(entries, { key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable(Headers)) {
  var headersHas = uncurryThis(HeadersPrototype.has);
  var headersSet = uncurryThis(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject(init)) {
      var body = init.body;
      var headers;
      if (classof(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create(init, {
          body: createPropertyDescriptor(0, $toString(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable(nativeFetch)) {
    $({ global: true, enumerable: true, noTargetGet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $({ global: true, forced: true, noTargetGet: true }, {
      Request: RequestConstructor
    });
  }
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ 41637:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(65556);


/***/ }),

/***/ 68789:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(78783);
var $ = __webpack_require__(82109);
var DESCRIPTORS = __webpack_require__(19781);
var USE_NATIVE_URL = __webpack_require__(590);
var global = __webpack_require__(17854);
var bind = __webpack_require__(49974);
var uncurryThis = __webpack_require__(1702);
var defineProperties = (__webpack_require__(36048).f);
var redefine = __webpack_require__(31320);
var anInstance = __webpack_require__(25787);
var hasOwn = __webpack_require__(92597);
var assign = __webpack_require__(21574);
var arrayFrom = __webpack_require__(48457);
var arraySlice = __webpack_require__(41589);
var codeAt = (__webpack_require__(28710).codeAt);
var toASCII = __webpack_require__(33197);
var $toString = __webpack_require__(41340);
var setToStringTag = __webpack_require__(58003);
var validateArgumentsLength = __webpack_require__(48053);
var URLSearchParamsModule = __webpack_require__(65556);
var InternalStateModule = __webpack_require__(29909);

var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;

var NativeURL = global.URL;
var TypeError = global.TypeError;
var parseInt = global.parseInt;
var floor = Math.floor;
var pow = Math.pow;
var charAt = uncurryThis(''.charAt);
var exec = uncurryThis(/./.exec);
var join = uncurryThis([].join);
var numberToString = uncurryThis(1.0.toString);
var pop = uncurryThis([].pop);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var toLowerCase = uncurryThis(''.toLowerCase);
var unshift = uncurryThis([].unshift);

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[a-z]/i;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */
var EOF;

// https://url.spec.whatwg.org/#ipv4-number-parser
var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.length--;
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && charAt(part, 0) == '0') {
      radix = exec(HEX_START, part) ? 16 : 8;
      part = stringSlice(part, radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
      number = parseInt(part, radix);
    }
    push(numbers, number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = pop(numbers);
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return charAt(input, pointer);
  };

  if (chr() == ':') {
    if (charAt(input, 1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (chr()) {
    if (pieceIndex == 8) return;
    if (chr() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && exec(HEX, chr())) {
      value = value * 16 + parseInt(chr(), 16);
      pointer++;
      length++;
    }
    if (chr() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (chr()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (chr() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!exec(DIGIT, chr())) return;
        while (exec(DIGIT, chr())) {
          number = parseInt(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (chr() == ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

// https://url.spec.whatwg.org/#host-serializing
var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor(host / 256);
    } return join(result, '.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
};

// https://url.spec.whatwg.org/#special-scheme
var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

// https://url.spec.whatwg.org/#windows-drive-letter
var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && exec(ALPHA, charAt(string, 0))
    && ((second = charAt(string, 1)) == ':' || (!normalized && second == '|'));
};

// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (
    string.length == 2 ||
    ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

// https://url.spec.whatwg.org/#single-dot-path-segment
var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
};

// https://url.spec.whatwg.org/#double-dot-path-segment
var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

var URLState = function (url, isBase, base) {
  var urlString = $toString(url);
  var baseState, failure, searchParams;
  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw TypeError(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw TypeError(failure);
    searchParams = getInternalSearchParamsState(new URLSearchParams());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};

URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;

    input = $toString(input);

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = replace(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
    }

    input = replace(input, TAB_AND_NEW_LINE, '');

    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (chr && exec(ALPHA, chr)) {
            buffer += toLowerCase(chr);
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;

        case SCHEME:
          if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
            buffer += toLowerCase(chr);
          } else if (chr == ':') {
            if (stateOverride && (
              (url.isSpecial() != hasOwn(specialSchemes, buffer)) ||
              (buffer == 'file' && (url.includesCredentials() || url.port !== null)) ||
              (url.scheme == 'file' && !url.host)
            )) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme == 'file') {
              state = FILE;
            } else if (url.isSpecial() && base && base.scheme == url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              push(url.path, '');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;

        case NO_SCHEME:
          if (!base || (base.cannotBeABaseURL && chr != '#')) return INVALID_SCHEME;
          if (base.cannotBeABaseURL && chr == '#') {
            url.scheme = base.scheme;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme == 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr == '/' && codePoints[pointer + 1] == '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          } break;

        case PATH_OR_AUTHORITY:
          if (chr == '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;
          if (chr == EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
          } else if (chr == '/' || (chr == '\\' && url.isSpecial())) {
            state = RELATIVE_SLASH;
          } else if (chr == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.path.length--;
            state = PATH;
            continue;
          } break;

        case RELATIVE_SLASH:
          if (url.isSpecial() && (chr == '/' || chr == '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr == '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          } break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr != '/' && chr != '\\') {
            state = AUTHORITY;
            continue;
          } break;

        case AUTHORITY:
          if (chr == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;
              else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial())
          ) {
            if (seenAt && buffer == '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;
          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr == ':' && !seenBracket) {
            if (buffer == '') return INVALID_HOST;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride == HOSTNAME) return;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial())
          ) {
            if (url.isSpecial() && buffer == '') return INVALID_HOST;
            if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr == '[') seenBracket = true;
            else if (chr == ']') seenBracket = false;
            buffer += chr;
          } break;

        case PORT:
          if (exec(DIGIT, chr)) {
            buffer += chr;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial()) ||
            stateOverride
          ) {
            if (buffer != '') {
              var port = parseInt(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;

        case FILE:
          url.scheme = 'file';
          if (chr == '/' || chr == '\\') state = FILE_SLASH;
          else if (base && base.scheme == 'file') {
            if (chr == EOF) {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
            } else if (chr == '?') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.shortenPath();
              }
              state = PATH;
              continue;
            }
          } else {
            state = PATH;
            continue;
          } break;

        case FILE_SLASH:
          if (chr == '/' || chr == '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
            else url.host = base.host;
          }
          state = PATH;
          continue;

        case FILE_HOST:
          if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            } continue;
          } else buffer += chr;
          break;

        case PATH_START:
          if (url.isSpecial()) {
            state = PATH;
            if (chr != '/' && chr != '\\') continue;
          } else if (!stateOverride && chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            state = PATH;
            if (chr != '/') continue;
          } break;

        case PATH:
          if (
            chr == EOF || chr == '/' ||
            (chr == '\\' && url.isSpecial()) ||
            (!stateOverride && (chr == '?' || chr == '#'))
          ) {
            if (isDoubleDot(buffer)) {
              url.shortenPath();
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else if (isSingleDot(buffer)) {
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
              }
              push(url.path, buffer);
            }
            buffer = '';
            if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                shift(url.path);
              }
            }
            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(chr, pathPercentEncodeSet);
          } break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case QUERY:
          if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            if (chr == "'" && url.isSpecial()) url.query += '%27';
            else if (chr == '#') url.query += '%23';
            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case FRAGMENT:
          if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;
    if (charAt(input, 0) == '[') {
      if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
      result = parseIPv6(stringSlice(input, 1, -1));
      if (!result) return INVALID_HOST;
      this.host = result;
    // opaque host
    } else if (!this.isSpecial()) {
      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      this.host = result;
    } else {
      input = toASCII(input);
      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      this.host = result;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username != '' || this.password != '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return hasOwn(specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;
    if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw TypeError(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme == 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse($toString(protocol) + ':', SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = arrayFrom($toString(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = arrayFrom($toString(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? ''
      : port === null ? serializeHost(host)
      : serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : $toString(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = $toString(port);
    if (port == '') this.port = null;
    else this.parse(port, PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = $toString(search);
    if (search == '') {
      this.query = null;
    } else {
      if ('?' == charAt(search, 0)) search = stringSlice(search, 1);
      this.query = '';
      this.parse(search, QUERY);
    }
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = $toString(hash);
    if (hash == '') {
      this.fragment = null;
      return;
    }
    if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);
    this.fragment = '';
    this.parse(hash, FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLPrototype);
  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = setInternalState(that, new URLState(url, false, base));
  if (!DESCRIPTORS) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};

var URLPrototype = URLConstructor.prototype;

var accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor('serialize', 'setHref'),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor('getOrigin'),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor('getProtocol', 'setProtocol'),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor('getUsername', 'setUsername'),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor('getPassword', 'setPassword'),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor('getHost', 'setHost'),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor('getHostname', 'setHostname'),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor('getPort', 'setPort'),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor('getPathname', 'setPathname'),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor('getSearch', 'setSearch'),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor('getSearchParams'),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor('getHash', 'setHash')
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ 60285:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(68789);


/***/ }),

/***/ 68101:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = (__webpack_require__(25602)["default"]);

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

/***/ }),

/***/ 24684:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C1": function() { return /* binding */ required; },
/* harmony export */   "Do": function() { return /* binding */ email; },
/* harmony export */   "Fq": function() { return /* binding */ alpha; },
/* harmony export */   "uR": function() { return /* binding */ numeric; }
/* harmony export */ });
/* unused harmony exports alpha_dash, alpha_num, alpha_spaces, between, confirmed, digits, dimensions, double, excluded, ext, image, integer, is, is_not, length, max, max_value, mimes, min, min_value, oneOf, regex, required_if, size */
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77601);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9653);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60285);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41637);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88674);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21249);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23123);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73210);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91038);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24603);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(28450);
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88386);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(39714);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(69600);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(15306);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_21__);























/**
  * vee-validate v3.4.14
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

/* eslint-disable no-misleading-character-class */
var alpha$1 = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[A-Z\xC0-\xFF]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ro: /^[A-ZĂÂÎŞŢ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  sv: /^[A-ZÅÄÖ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
  el: /^[Α-ώ]*$/i,
  ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
  he: /^[A-Z\u05D0-\u05EA']*$/i
};
var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  it: /^[A-Z\xC0-\xFF\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ro: /^[A-ZĂÂÎŞŢ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  sv: /^[A-ZÅÄÖ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
  el: /^[Α-ώ\s]*$/i,
  ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\s]*$/i,
  he: /^[A-Z\u05D0-\u05EA'\s]*$/i
};
var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[0-9A-Z\xC0-\xFF]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ro: /^[0-9A-ZĂÂÎŞŢ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  sv: /^[0-9A-ZÅÄÖ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
  el: /^[0-9Α-ώ]*$/i,
  ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
  he: /^[0-9A-Z\u05D0-\u05EA']*$/i
};
var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ro: /^[0-9A-ZĂÂÎŞŢ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  sv: /^[0-9A-ZÅÄÖ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
  el: /^[0-9Α-ώ_-]*$/i,
  ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF_-]*$/i,
  he: /^[0-9A-Z\u05D0-\u05EA'_-]*$/i
};

var validate$r = function validate$r(value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$r(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alpha$1).some(function (loc) {
      return alpha$1[loc].test(value);
    });
  }

  return (alpha$1[locale] || alpha$1.en).test(value);
};

var params$k = [{
  name: 'locale'
}];
var alpha = {
  validate: validate$r,
  params: params$k
};

var validate$q = function validate$q(value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$q(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphaDash).some(function (loc) {
      return alphaDash[loc].test(value);
    });
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

var params$j = [{
  name: 'locale'
}];
var alpha_dash = {
  validate: validate$q,
  params: params$j
};

var validate$p = function validate$p(value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$p(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphanumeric).some(function (loc) {
      return alphanumeric[loc].test(value);
    });
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var params$i = [{
  name: 'locale'
}];
var alpha_num = {
  validate: validate$p,
  params: params$i
};

var validate$o = function validate$o(value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$o(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphaSpaces).some(function (loc) {
      return alphaSpaces[loc].test(value);
    });
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

var params$h = [{
  name: 'locale'
}];
var alpha_spaces = {
  validate: validate$o,
  params: params$h
};

var validate$n = function validate$n(value, _a) {
  var _b = _a === void 0 ? {} : _a,
      min = _b.min,
      max = _b.max;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return !!validate$n(val, {
        min: min,
        max: max
      });
    });
  }

  return Number(min) <= value && Number(max) >= value;
};

var params$g = [{
  name: 'min'
}, {
  name: 'max'
}];
var between = {
  validate: validate$n,
  params: params$g
};

var validate$m = function validate$m(value, _a) {
  var target = _a.target;
  return String(value) === String(target);
};

var params$f = [{
  name: 'target',
  isTarget: true
}];
var confirmed = {
  validate: validate$m,
  params: params$f
};

var validate$l = function validate$l(value, _a) {
  var length = _a.length;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$l(val, {
        length: length
      });
    });
  }

  var strVal = String(value);
  return /^[0-9]*$/.test(strVal) && strVal.length === length;
};

var params$e = [{
  name: 'length',
  cast: function cast(value) {
    return Number(value);
  }
}];
var digits = {
  validate: validate$l,
  params: params$e
};

var validateImage = function validateImage(file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();

    image.onerror = function () {
      return resolve(false);
    };

    image.onload = function () {
      return resolve(image.width === width && image.height === height);
    };

    image.src = URL.createObjectURL(file);
  });
};

var validate$k = function validate$k(files, _a) {
  var width = _a.width,
      height = _a.height;
  var list = [];
  files = Array.isArray(files) ? files : [files];

  for (var i = 0; i < files.length; i++) {
    // if file is not an image, reject.
    if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
      return Promise.resolve(false);
    }

    list.push(files[i]);
  }

  return Promise.all(list.map(function (file) {
    return validateImage(file, width, height);
  })).then(function (values) {
    return values.every(function (v) {
      return v;
    });
  });
};

var params$d = [{
  name: 'width',
  cast: function cast(value) {
    return Number(value);
  }
}, {
  name: 'height',
  cast: function cast(value) {
    return Number(value);
  }
}];
var dimensions = {
  validate: validate$k,
  params: params$d
};

var validate$j = function validate$j(value, _a) {
  var multiple = (_a === void 0 ? {} : _a).multiple; // eslint-disable-next-line

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (multiple && !Array.isArray(value)) {
    value = String(value).split(',').map(function (emailStr) {
      return emailStr.trim();
    });
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return re.test(String(val));
    });
  }

  return re.test(String(value));
};

var params$c = [{
  name: 'multiple',
  default: false
}];
var email = {
  validate: validate$j,
  params: params$c
};

function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
} // eslint-disable-next-line @typescript-eslint/ban-types


function isCallable(fn) {
  return typeof fn === 'function';
}

function includes(collection, item) {
  return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */


function toArray(arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }
  /* istanbul ignore next */


  return _copyArray(arrayLike);
}
/* istanbul ignore next */


function _copyArray(arrayLike) {
  var array = [];
  var length = arrayLike.length;

  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array;
}

var validate$i = function validate$i(value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$i(val, options);
    });
  }

  return toArray(options).some(function (item) {
    // eslint-disable-next-line
    return item == value;
  });
};

var oneOf = {
  validate: validate$i
};

var validate$h = function validate$h(value, args) {
  return !validate$i(value, args);
};

var excluded = {
  validate: validate$h
};

var validate$g = function validate$g(files, extensions) {
  var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.name);
    });
  }

  return regex.test(files.name);
};

var ext = {
  validate: validate$g
};

var validate$f = function validate$f(files) {
  var regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.name);
    });
  }

  return regex.test(files.name);
};

var image = {
  validate: validate$f
};

var validate$e = function validate$e(value) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return /^-?[0-9]+$/.test(String(val));
    });
  }

  return /^-?[0-9]+$/.test(String(value));
};

var integer = {
  validate: validate$e
};

var validate$d = function validate$d(value, _a) {
  var other = _a.other;
  return value === other;
};

var params$b = [{
  name: 'other'
}];
var is = {
  validate: validate$d,
  params: params$b
};

var validate$c = function validate$c(value, _a) {
  var other = _a.other;
  return value !== other;
};

var params$a = [{
  name: 'other'
}];
var is_not = {
  validate: validate$c,
  params: params$a
};

var validate$b = function validate$b(value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return false;
  }

  if (typeof value === 'string') {
    value = toArray(value);
  }

  if (typeof value === 'number') {
    value = String(value);
  }

  if (!value.length) {
    value = toArray(value);
  }

  return value.length === length;
};

var params$9 = [{
  name: 'length',
  cast: function cast(value) {
    return Number(value);
  }
}];
var length = {
  validate: validate$b,
  params: params$9
};

var validate$a = function validate$a(value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return length >= 0;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$a(val, {
        length: length
      });
    });
  }

  return String(value).length <= length;
};

var params$8 = [{
  name: 'length',
  cast: function cast(value) {
    return Number(value);
  }
}];
var max = {
  validate: validate$a,
  params: params$8
};

var validate$9 = function validate$9(value, _a) {
  var max = _a.max;

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) {
      return validate$9(val, {
        max: max
      });
    });
  }

  return Number(value) <= max;
};

var params$7 = [{
  name: 'max',
  cast: function cast(value) {
    return Number(value);
  }
}];
var max_value = {
  validate: validate$9,
  params: params$7
};

var validate$8 = function validate$8(files, mimes) {
  var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.type);
    });
  }

  return regex.test(files.type);
};

var mimes = {
  validate: validate$8
};

var validate$7 = function validate$7(value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$7(val, {
        length: length
      });
    });
  }

  return String(value).length >= length;
};

var params$6 = [{
  name: 'length',
  cast: function cast(value) {
    return Number(value);
  }
}];
var min = {
  validate: validate$7,
  params: params$6
};

var validate$6 = function validate$6(value, _a) {
  var min = _a.min;

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) {
      return validate$6(val, {
        min: min
      });
    });
  }

  return Number(value) >= min;
};

var params$5 = [{
  name: 'min',
  cast: function cast(value) {
    return Number(value);
  }
}];
var min_value = {
  validate: validate$6,
  params: params$5
};
var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;

var validate$5 = function validate$5(value) {
  var testValue = function testValue(val) {
    var strValue = String(val);
    return en.test(strValue) || ar.test(strValue);
  };

  if (Array.isArray(value)) {
    return value.every(testValue);
  }

  return testValue(value);
};

var numeric = {
  validate: validate$5
};

var validate$4 = function validate$4(value, _a) {
  var regex = _a.regex;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$4(val, {
        regex: regex
      });
    });
  }

  return regex.test(String(value));
};

var params$4 = [{
  name: 'regex',
  cast: function cast(value) {
    if (typeof value === 'string') {
      return new RegExp(value);
    }

    return value;
  }
}];
var regex = {
  validate: validate$4,
  params: params$4
};

var validate$3 = function validate$3(value, _a) {
  var allowFalse = (_a === void 0 ? {
    allowFalse: true
  } : _a).allowFalse;
  var result = {
    valid: false,
    required: true
  };

  if (isNullOrUndefined(value) || isEmptyArray(value)) {
    return result;
  } // incase a field considers `false` as an empty value like checkboxes.


  if (value === false && !allowFalse) {
    return result;
  }

  result.valid = !!String(value).trim().length;
  return result;
};

var computesRequired$1 = true;
var params$3 = [{
  name: 'allowFalse',
  default: true
}];
var required = {
  validate: validate$3,
  params: params$3,
  computesRequired: computesRequired$1
};

var testEmpty = function testEmpty(value) {
  return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
};

var validate$2 = function validate$2(value, _a) {
  var target = _a.target,
      values = _a.values;
  var required;

  if (values && values.length) {
    if (!Array.isArray(values) && typeof values === 'string') {
      values = [values];
    } // eslint-disable-next-line


    required = values.some(function (val) {
      return val == String(target).trim();
    });
  } else {
    required = !testEmpty(target);
  }

  if (!required) {
    return {
      valid: true,
      required: required
    };
  }

  return {
    valid: !testEmpty(value),
    required: required
  };
};

var params$2 = [{
  name: 'target',
  isTarget: true
}, {
  name: 'values'
}];
var computesRequired = true;
var required_if = {
  validate: validate$2,
  params: params$2,
  computesRequired: computesRequired
};

var validate$1 = function validate$1(files, _a) {
  var size = _a.size;

  if (isNaN(size)) {
    return false;
  }

  var nSize = size * 1024;

  if (!Array.isArray(files)) {
    return files.size <= nSize;
  }

  for (var i = 0; i < files.length; i++) {
    if (files[i].size > nSize) {
      return false;
    }
  }

  return true;
};

var params$1 = [{
  name: 'size',
  cast: function cast(value) {
    return Number(value);
  }
}];
var size = {
  validate: validate$1,
  params: params$1
};

var validate = function validate(value, params) {
  var _a = params || {},
      _b = _a.decimals,
      decimals = _b === void 0 ? 0 : _b,
      _c = _a.separator,
      separator = _c === void 0 ? 'dot' : _c;

  var delimiterRegexPart = separator === 'comma' ? ',?' : '\\.?';
  var decimalRegexPart = decimals === 0 ? '\\d*' : "(\\d{" + decimals + "})?";
  var regex = new RegExp("^-?\\d+" + delimiterRegexPart + decimalRegexPart + "$");
  return Array.isArray(value) ? value.every(function (val) {
    return regex.test(String(val));
  }) : regex.test(String(value));
};

var params = [{
  name: 'decimals',
  default: 0
}, {
  name: 'separator',
  default: 'dot'
}];
var double = {
  validate: validate,
  params: params
};


/***/ }),

/***/ 49236:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_j": function() { return /* binding */ ValidationObserver; },
/* harmony export */   "d_": function() { return /* binding */ ValidationProvider; },
/* harmony export */   "l7": function() { return /* binding */ extend; }
/* harmony export */ });
/* unused harmony exports configure, localeChanged, localize, normalizeRules, setInteractionMode, validate, version, withValidation */
/* harmony import */ var _siteweb_AppVuejs_entity_drupal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87336);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19601);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88674);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41817);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32165);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21703);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34553);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91038);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26833);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21249);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(74916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15306);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(23123);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(68309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(47042);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(69600);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(57327);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(24603);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(28450);
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(88386);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(39714);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(92087);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(73210);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(92222);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(9653);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(40561);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(77203);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_33__);


































/**
  * vee-validate v3.4.14
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}

function isNaN(value) {
  // NaN is the one value that does not equal itself.
  // eslint-disable-next-line
  return value !== value;
}

function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

var isObject = function isObject(obj) {
  return obj !== null && obj && (0,_siteweb_AppVuejs_entity_drupal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(obj) === 'object' && !Array.isArray(obj);
};
/**
 * A reference comparison function with NaN support
 */


function isRefEqual(lhs, rhs) {
  if (isNaN(lhs) && isNaN(rhs)) {
    return true;
  }

  return lhs === rhs;
} // Checks if a given value is not an empty string or null or undefined.


function isSpecified(val) {
  if (val === '') {
    return false;
  }

  return !isNullOrUndefined(val);
} // eslint-disable-next-line @typescript-eslint/ban-types


function isCallable(fn) {
  return typeof fn === 'function';
}

function isLocator(value) {
  return isCallable(value) && !!value.__locatorRef;
}

function findIndex(arrayLike, predicate) {
  var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);

  if (isCallable(array.findIndex)) {
    return array.findIndex(predicate);
  }
  /* istanbul ignore next */


  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i], i)) {
      return i;
    }
  }
  /* istanbul ignore next */


  return -1;
}
/**
 * finds the first element that satisfies the predicate callback, polyfills array.find
 */


function find(arrayLike, predicate) {
  var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
  var idx = findIndex(array, predicate);
  return idx === -1 ? undefined : array[idx];
}

function includes(collection, item) {
  return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */


function toArray(arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }
  /* istanbul ignore next */


  return _copyArray(arrayLike);
}
/* istanbul ignore next */


function _copyArray(arrayLike) {
  var array = [];
  var length = arrayLike.length;

  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array;
}

function values(obj) {
  if (isCallable(Object.values)) {
    return Object.values(obj);
  } // fallback to keys()

  /* istanbul ignore next */


  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
}

function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (isObject(source[key])) {
      if (!target[key]) {
        target[key] = {};
      }

      merge(target[key], source[key]);
      return;
    }

    target[key] = source[key];
  });
  return target;
}

function createFlags() {
  return {
    untouched: true,
    touched: false,
    dirty: false,
    pristine: true,
    valid: false,
    invalid: false,
    validated: false,
    pending: false,
    required: false,
    changed: false,
    passed: false,
    failed: false
  };
}

function identity(x) {
  return x;
}

function debounce(fn, wait, token) {
  if (wait === void 0) {
    wait = 0;
  }

  if (token === void 0) {
    token = {
      cancelled: false
    };
  }

  if (wait === 0) {
    return fn;
  }

  var timeout;
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var later = function later() {
      timeout = undefined; // check if the fn call was cancelled.

      if (!token.cancelled) fn.apply(void 0, args);
    }; // because we might want to use Node.js setTimout for SSR.


    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
/**
 * Emits a warning to the console
 */


function warn(message) {
  console.warn("[vee-validate] " + message);
}
/**
 * Replaces placeholder values in a string with their actual values
 */


function interpolate(template, values) {
  return template.replace(/{([^}]+)}/g, function (_, p) {
    return p in values ? values[p] : "{" + p + "}";
  });
}

var RULES = {};

function normalizeSchema(schema) {
  var _a;

  if ((_a = schema.params) === null || _a === void 0 ? void 0 : _a.length) {
    schema.params = schema.params.map(function (param) {
      if (typeof param === 'string') {
        return {
          name: param
        };
      }

      return param;
    });
  }

  return schema;
}

var RuleContainer =
/** @class */
function () {
  function RuleContainer() {}

  RuleContainer.extend = function (name, schema) {
    // if rule already exists, overwrite it.
    var rule = normalizeSchema(schema);

    if (RULES[name]) {
      RULES[name] = merge(RULES[name], schema);
      return;
    }

    RULES[name] = _assign({
      lazy: false,
      computesRequired: false
    }, rule);
  };

  RuleContainer.isLazy = function (name) {
    var _a;

    return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.lazy);
  };

  RuleContainer.isRequireRule = function (name) {
    var _a;

    return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.computesRequired);
  };

  RuleContainer.getRuleDefinition = function (ruleName) {
    return RULES[ruleName];
  };

  return RuleContainer;
}();
/**
 * Adds a custom validator to the list of validation rules.
 */


function extend(name, schema) {
  // makes sure new rules are properly formatted.
  guardExtend(name, schema); // Full schema object.

  if ((0,_siteweb_AppVuejs_entity_drupal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(schema) === 'object') {
    RuleContainer.extend(name, schema);
    return;
  }

  RuleContainer.extend(name, {
    validate: schema
  });
}
/**
 * Guards from extension violations.
 */


function guardExtend(name, validator) {
  if (isCallable(validator)) {
    return;
  }

  if (isCallable(validator.validate)) {
    return;
  }

  if (RuleContainer.getRuleDefinition(name)) {
    return;
  }

  throw new Error("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.");
}

var DEFAULT_CONFIG = {
  defaultMessage: "{_field_} is not valid.",
  skipOptional: true,
  classes: {
    touched: 'touched',
    untouched: 'untouched',
    valid: 'valid',
    invalid: 'invalid',
    pristine: 'pristine',
    dirty: 'dirty' // control has been interacted with

  },
  bails: true,
  mode: 'aggressive',
  useConstraintAttrs: true
};

var currentConfig = _assign({}, DEFAULT_CONFIG);

var getConfig = function getConfig() {
  return currentConfig;
};

var setConfig = function setConfig(newConf) {
  currentConfig = _assign(_assign({}, currentConfig), newConf);
};

var configure = function configure(cfg) {
  setConfig(cfg);
};
/**
 * Normalizes the given rules expression.
 */


function normalizeRules(rules) {
  // if falsy value return an empty object.
  var acc = {};
  Object.defineProperty(acc, '_$$isNormalized', {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false
  });

  if (!rules) {
    return acc;
  } // Object is already normalized, skip.


  if (isObject(rules) && rules._$$isNormalized) {
    return rules;
  }

  if (isObject(rules)) {
    return Object.keys(rules).reduce(function (prev, curr) {
      var params = [];

      if (rules[curr] === true) {
        params = [];
      } else if (Array.isArray(rules[curr])) {
        params = rules[curr];
      } else if (isObject(rules[curr])) {
        params = rules[curr];
      } else {
        params = [rules[curr]];
      }

      if (rules[curr] !== false) {
        prev[curr] = buildParams(curr, params);
      }

      return prev;
    }, acc);
  }
  /* istanbul ignore if */


  if (typeof rules !== 'string') {
    warn('rules must be either a string or an object.');
    return acc;
  }

  return rules.split('|').reduce(function (prev, rule) {
    var parsedRule = parseRule(rule);

    if (!parsedRule.name) {
      return prev;
    }

    prev[parsedRule.name] = buildParams(parsedRule.name, parsedRule.params);
    return prev;
  }, acc);
}

function buildParams(ruleName, provided) {
  var ruleSchema = RuleContainer.getRuleDefinition(ruleName);

  if (!ruleSchema) {
    return provided;
  }

  var params = {};

  if (!ruleSchema.params && !Array.isArray(provided)) {
    throw new Error('You provided an object params to a rule that has no defined schema.');
  } // Rule probably uses an array for their args, keep it as is.


  if (Array.isArray(provided) && !ruleSchema.params) {
    return provided;
  }

  var definedParams; // collect the params schema.

  if (!ruleSchema.params || ruleSchema.params.length < provided.length && Array.isArray(provided)) {
    var lastDefinedParam_1; // collect any additional parameters in the last item.

    definedParams = provided.map(function (_, idx) {
      var _a;

      var param = (_a = ruleSchema.params) === null || _a === void 0 ? void 0 : _a[idx];
      lastDefinedParam_1 = param || lastDefinedParam_1;

      if (!param) {
        param = lastDefinedParam_1;
      }

      return param;
    });
  } else {
    definedParams = ruleSchema.params;
  } // Match the provided array length with a temporary schema.


  for (var i = 0; i < definedParams.length; i++) {
    var options = definedParams[i];
    var value = options.default; // if the provided is an array, map element value.

    if (Array.isArray(provided)) {
      if (i in provided) {
        value = provided[i];
      }
    } else {
      // If the param exists in the provided object.
      if (options.name in provided) {
        value = provided[options.name]; // if the provided is the first param value.
      } else if (definedParams.length === 1) {
        value = provided;
      }
    } // if the param is a target, resolve the target value.


    if (options.isTarget) {
      value = createLocator(value, options.cast);
    } // A target param using interpolation


    if (typeof value === 'string' && value[0] === '@') {
      value = createLocator(value.slice(1), options.cast);
    } // If there is a transformer defined.


    if (!isLocator(value) && options.cast) {
      value = options.cast(value);
    } // already been set, probably multiple values.


    if (params[options.name]) {
      params[options.name] = Array.isArray(params[options.name]) ? params[options.name] : [params[options.name]];
      params[options.name].push(value);
    } else {
      // set the value.
      params[options.name] = value;
    }
  }

  return params;
}
/**
 * Parses a rule string expression.
 */


var parseRule = function parseRule(rule) {
  var params = [];
  var name = rule.split(':')[0];

  if (includes(rule, ':')) {
    params = rule.split(':').slice(1).join(':').split(',');
  }

  return {
    name: name,
    params: params
  };
};

function createLocator(value, castFn) {
  var locator = function locator(crossTable) {
    var val = crossTable[value];
    return castFn ? castFn(val) : val;
  };

  locator.__locatorRef = value;
  return locator;
}

function extractLocators(params) {
  if (Array.isArray(params)) {
    return params.filter(function (param) {
      return isLocator(param) || typeof param === 'string' && param[0] === '@';
    });
  }

  return Object.keys(params).filter(function (key) {
    return isLocator(params[key]);
  }).map(function (key) {
    return params[key];
  });
}
/**
 * Validates a value against the rules.
 */


function validate(value, rules, options) {
  if (options === void 0) {
    options = {};
  }

  return __awaiter(this, void 0, void 0, function () {
    var shouldBail, skipIfEmpty, field, result, errors, failedRules, regenerateMap;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          shouldBail = options === null || options === void 0 ? void 0 : options.bails;
          skipIfEmpty = options === null || options === void 0 ? void 0 : options.skipIfEmpty;
          field = {
            name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
            rules: normalizeRules(rules),
            bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
            skipIfEmpty: skipIfEmpty !== null && skipIfEmpty !== void 0 ? skipIfEmpty : true,
            forceRequired: false,
            crossTable: (options === null || options === void 0 ? void 0 : options.values) || {},
            names: (options === null || options === void 0 ? void 0 : options.names) || {},
            customMessages: (options === null || options === void 0 ? void 0 : options.customMessages) || {}
          };
          return [4
          /*yield*/
          , _validate(field, value, options)];

        case 1:
          result = _a.sent();
          errors = [];
          failedRules = {};
          regenerateMap = {};
          result.errors.forEach(function (e) {
            var msg = e.msg();
            errors.push(msg);
            failedRules[e.rule] = msg;
            regenerateMap[e.rule] = e.msg;
          });
          return [2
          /*return*/
          , {
            valid: result.valid,
            required: result.required,
            errors: errors,
            failedRules: failedRules,
            regenerateMap: regenerateMap
          }];
      }
    });
  });
}
/**
 * Starts the validation process.
 */


function _validate(field, value, _a) {
  var _b = (_a === void 0 ? {} : _a).isInitial,
      isInitial = _b === void 0 ? false : _b;
  return __awaiter(this, void 0, void 0, function () {
    var _c, shouldSkip, required, errors, rules, length, i, rule, result;

    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          return [4
          /*yield*/
          , _shouldSkip(field, value)];

        case 1:
          _c = _d.sent(), shouldSkip = _c.shouldSkip, required = _c.required, errors = _c.errors;

          if (shouldSkip) {
            return [2
            /*return*/
            , {
              valid: !errors.length,
              required: required,
              errors: errors
            }];
          }

          rules = Object.keys(field.rules).filter(function (rule) {
            return !RuleContainer.isRequireRule(rule);
          });
          length = rules.length;
          i = 0;
          _d.label = 2;

        case 2:
          if (!(i < length)) return [3
          /*break*/
          , 5];

          if (isInitial && RuleContainer.isLazy(rules[i])) {
            return [3
            /*break*/
            , 4];
          }

          rule = rules[i];
          return [4
          /*yield*/
          , _test(field, value, {
            name: rule,
            params: field.rules[rule]
          })];

        case 3:
          result = _d.sent();

          if (!result.valid && result.error) {
            errors.push(result.error);

            if (field.bails) {
              return [2
              /*return*/
              , {
                valid: false,
                required: required,
                errors: errors
              }];
            }
          }

          _d.label = 4;

        case 4:
          i++;
          return [3
          /*break*/
          , 2];

        case 5:
          return [2
          /*return*/
          , {
            valid: !errors.length,
            required: required,
            errors: errors
          }];
      }
    });
  });
}

function _shouldSkip(field, value) {
  return __awaiter(this, void 0, void 0, function () {
    var requireRules, length, errors, isEmpty, isEmptyAndOptional, isRequired, i, rule, result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);
          length = requireRules.length;
          errors = [];
          isEmpty = isNullOrUndefined(value) || value === '' || isEmptyArray(value);
          isEmptyAndOptional = isEmpty && field.skipIfEmpty;
          i = 0;
          _a.label = 1;

        case 1:
          if (!(i < length)) return [3
          /*break*/
          , 4];
          rule = requireRules[i];
          return [4
          /*yield*/
          , _test(field, value, {
            name: rule,
            params: field.rules[rule]
          })];

        case 2:
          result = _a.sent();

          if (!isObject(result)) {
            throw new Error('Require rules has to return an object (see docs)');
          }

          if (result.required !== undefined) {
            isRequired = result.required;
          }

          if (!result.valid && result.error) {
            errors.push(result.error); // Exit early as the field is required and failed validation.

            if (field.bails) {
              return [2
              /*return*/
              , {
                shouldSkip: true,
                required: result.required,
                errors: errors
              }];
            }
          }

          _a.label = 3;

        case 3:
          i++;
          return [3
          /*break*/
          , 1];

        case 4:
          if (isEmpty && !isRequired && !field.skipIfEmpty) {
            return [2
            /*return*/
            , {
              shouldSkip: false,
              required: isRequired,
              errors: errors
            }];
          } // field is configured to run through the pipeline regardless


          if (!field.bails && !isEmptyAndOptional) {
            return [2
            /*return*/
            , {
              shouldSkip: false,
              required: isRequired,
              errors: errors
            }];
          } // skip if the field is not required and has an empty value.


          return [2
          /*return*/
          , {
            shouldSkip: !isRequired && isEmpty,
            required: isRequired,
            errors: errors
          }];
      }
    });
  });
}
/**
 * Tests a single input value against a rule.
 */


function _test(field, value, rule) {
  return __awaiter(this, void 0, void 0, function () {
    var ruleSchema, normalizedValue, params, result, values_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          ruleSchema = RuleContainer.getRuleDefinition(rule.name);

          if (!ruleSchema || !ruleSchema.validate) {
            throw new Error("No such validator '" + rule.name + "' exists.");
          }

          normalizedValue = ruleSchema.castValue ? ruleSchema.castValue(value) : value;
          params = fillTargetValues(rule.params, field.crossTable);
          return [4
          /*yield*/
          , ruleSchema.validate(normalizedValue, params)];

        case 1:
          result = _a.sent();

          if (typeof result === 'string') {
            values_1 = _assign(_assign({}, params || {}), {
              _field_: field.name,
              _value_: value,
              _rule_: rule.name
            });
            return [2
            /*return*/
            , {
              valid: false,
              error: {
                rule: rule.name,
                msg: function msg() {
                  return interpolate(result, values_1);
                }
              }
            }];
          }

          if (!isObject(result)) {
            result = {
              valid: result
            };
          }

          return [2
          /*return*/
          , {
            valid: result.valid,
            required: result.required,
            error: result.valid ? undefined : _generateFieldError(field, value, ruleSchema, rule.name, params)
          }];
      }
    });
  });
}
/**
 * Generates error messages.
 */


function _generateFieldError(field, value, ruleSchema, ruleName, params) {
  var _a;

  var message = (_a = field.customMessages[ruleName]) !== null && _a !== void 0 ? _a : ruleSchema.message;

  var ruleTargets = _getRuleTargets(field, ruleSchema, ruleName);

  var _b = _getUserTargets(field, ruleSchema, ruleName, message),
      userTargets = _b.userTargets,
      userMessage = _b.userMessage;

  var values = _assign(_assign(_assign(_assign({}, params || {}), {
    _field_: field.name,
    _value_: value,
    _rule_: ruleName
  }), ruleTargets), userTargets);

  return {
    msg: function msg() {
      return _normalizeMessage(userMessage || getConfig().defaultMessage, field.name, values);
    },
    rule: ruleName
  };
}

function _getRuleTargets(field, ruleSchema, ruleName) {
  var params = ruleSchema.params;

  if (!params) {
    return {};
  }

  var numTargets = params.filter(function (param) {
    return param.isTarget;
  }).length;

  if (numTargets <= 0) {
    return {};
  }

  var names = {};
  var ruleConfig = field.rules[ruleName];

  if (!Array.isArray(ruleConfig) && isObject(ruleConfig)) {
    ruleConfig = params.map(function (param) {
      return ruleConfig[param.name];
    });
  }

  for (var index = 0; index < params.length; index++) {
    var param = params[index];
    var key = ruleConfig[index];

    if (!isLocator(key)) {
      continue;
    }

    key = key.__locatorRef;
    var name_1 = field.names[key] || key;
    names[param.name] = name_1;
    names["_" + param.name + "_"] = field.crossTable[key];
  }

  return names;
}

function _getUserTargets(field, ruleSchema, ruleName, userMessage) {
  var userTargets = {};
  var rules = field.rules[ruleName];
  var params = ruleSchema.params || []; // early return if no rules

  if (!rules) {
    return {};
  } // check all rules to convert targets


  Object.keys(rules).forEach(function (key, index) {
    // get the rule
    var rule = rules[key];

    if (!isLocator(rule)) {
      return {};
    } // get associated parameter


    var param = params[index];

    if (!param) {
      return {};
    } // grab the name of the target


    var name = rule.__locatorRef;
    userTargets[param.name] = field.names[name] || name;
    userTargets["_" + param.name + "_"] = field.crossTable[name];
  });
  return {
    userTargets: userTargets,
    userMessage: userMessage
  };
}

function _normalizeMessage(template, field, values) {
  if (typeof template === 'function') {
    return template(field, values);
  }

  return interpolate(template, _assign(_assign({}, values), {
    _field_: field
  }));
}

function fillTargetValues(params, crossTable) {
  if (Array.isArray(params)) {
    return params.map(function (param) {
      var targetPart = typeof param === 'string' && param[0] === '@' ? param.slice(1) : param;

      if (targetPart in crossTable) {
        return crossTable[targetPart];
      }

      return param;
    });
  }

  var values = {};

  var normalize = function normalize(value) {
    if (isLocator(value)) {
      return value(crossTable);
    }

    return value;
  };

  Object.keys(params).forEach(function (param) {
    values[param] = normalize(params[param]);
  });
  return values;
}

var aggressive = function aggressive() {
  return {
    on: ['input', 'blur']
  };
};

var lazy = function lazy() {
  return {
    on: ['change', 'blur']
  };
};

var eager = function eager(_a) {
  var errors = _a.errors;

  if (errors.length) {
    return {
      on: ['input', 'change']
    };
  }

  return {
    on: ['change', 'blur']
  };
};

var passive = function passive() {
  return {
    on: []
  };
};

var modes = {
  aggressive: aggressive,
  eager: eager,
  passive: passive,
  lazy: lazy
};

var setInteractionMode = function setInteractionMode(mode, implementation) {
  setConfig({
    mode: mode
  });

  if (!implementation) {
    return;
  }

  if (!isCallable(implementation)) {
    throw new Error('A mode implementation must be a function');
  }

  modes[mode] = implementation;
};

var EVENT_BUS = new (vue__WEBPACK_IMPORTED_MODULE_33___default())();

function localeChanged() {
  EVENT_BUS.$emit('change:locale');
}

var Dictionary =
/** @class */
function () {
  function Dictionary(locale, dictionary) {
    this.container = {};
    this.locale = locale;
    this.merge(dictionary);
  }

  Dictionary.prototype.resolve = function (field, rule, values) {
    return this.format(this.locale, field, rule, values);
  };

  Dictionary.prototype.format = function (locale, field, rule, values) {
    var _a, _b, _c, _d, _e, _f, _g, _h;

    var message; // find if specific message for that field was specified.

    var fieldContainer = (_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c[rule];
    var messageContainer = (_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e[rule];
    message = fieldContainer || messageContainer || '';

    if (!message) {
      message = '{_field_} is not valid';
    }

    field = (_h = (_g = (_f = this.container[locale]) === null || _f === void 0 ? void 0 : _f.names) === null || _g === void 0 ? void 0 : _g[field]) !== null && _h !== void 0 ? _h : field;
    return isCallable(message) ? message(field, values) : interpolate(message, _assign(_assign({}, values), {
      _field_: field
    }));
  };

  Dictionary.prototype.merge = function (dictionary) {
    merge(this.container, dictionary);
  };

  Dictionary.prototype.hasRule = function (name) {
    var _a, _b;

    return !!((_b = (_a = this.container[this.locale]) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 : _b[name]);
  };

  return Dictionary;
}();

var DICTIONARY;

function localize(locale, dictionary) {
  var _a;

  if (!DICTIONARY) {
    DICTIONARY = new Dictionary('en', {});
    setConfig({
      defaultMessage: function defaultMessage(field, values) {
        return DICTIONARY.resolve(field, values === null || values === void 0 ? void 0 : values._rule_, values || {});
      }
    });
  }

  if (typeof locale === 'string') {
    DICTIONARY.locale = locale;

    if (dictionary) {
      DICTIONARY.merge((_a = {}, _a[locale] = dictionary, _a));
    }

    localeChanged();
    return;
  }

  DICTIONARY.merge(locale);
} // do not edit .js files directly - edit src/index.jst


var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && (0,_siteweb_AppVuejs_entity_drupal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(a) == 'object' && (0,_siteweb_AppVuejs_entity_drupal_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(b) == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  } // true if both NaN, false otherwise


  return a !== a && b !== b;
};

var isEvent = function isEvent(evt) {
  if (!evt) {
    return false;
  }

  if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
    return true;
  } // this is for IE

  /* istanbul ignore next */


  if (evt && evt.srcElement) {
    return true;
  }

  return false;
};

function normalizeEventValue(value) {
  var _a, _b;

  if (!isEvent(value)) {
    return value;
  }

  var input = value.target;

  if (input.type === 'file' && input.files) {
    return toArray(input.files);
  } // If the input has a `v-model.number` modifier applied.


  if ((_a = input._vModifiers) === null || _a === void 0 ? void 0 : _a.number) {
    // as per the spec the v-model.number uses parseFloat
    var valueAsNumber = parseFloat(input.value);

    if (isNaN(valueAsNumber)) {
      return input.value;
    }

    return valueAsNumber;
  }

  if ((_b = input._vModifiers) === null || _b === void 0 ? void 0 : _b.trim) {
    var trimmedValue = typeof input.value === 'string' ? input.value.trim() : input.value;
    return trimmedValue;
  }

  return input.value;
}

var isTextInput = function isTextInput(vnode) {
  var _a;

  var attrs = ((_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs) || vnode.elm; // it will fallback to being a text input per browsers spec.

  if (vnode.tag === 'input' && (!attrs || !attrs.type)) {
    return true;
  }

  if (vnode.tag === 'textarea') {
    return true;
  }

  return includes(['text', 'password', 'search', 'email', 'tel', 'url', 'number'], attrs === null || attrs === void 0 ? void 0 : attrs.type);
}; // export const isCheckboxOrRadioInput = (vnode: VNode): boolean => {
//   const attrs = (vnode.data && vnode.data.attrs) || vnode.elm;
//   return includes(['radio', 'checkbox'], attrs && attrs.type);
// };
// Gets the model object on the vnode.


function findModel(vnode) {
  if (!vnode.data) {
    return undefined;
  } // Component Model
  // THIS IS NOT TYPED IN OFFICIAL VUE TYPINGS
  // eslint-disable-next-line


  var nonStandardVNodeData = vnode.data;

  if ('model' in nonStandardVNodeData) {
    return nonStandardVNodeData.model;
  }

  if (!vnode.data.directives) {
    return undefined;
  }

  return find(vnode.data.directives, function (d) {
    return d.name === 'model';
  });
}

function findValue(vnode) {
  var _a, _b;

  var model = findModel(vnode);

  if (model) {
    return {
      value: model.value
    };
  }

  var config = findModelConfig(vnode);
  var prop = (config === null || config === void 0 ? void 0 : config.prop) || 'value';

  if (((_a = vnode.componentOptions) === null || _a === void 0 ? void 0 : _a.propsData) && prop in vnode.componentOptions.propsData) {
    var propsDataWithValue = vnode.componentOptions.propsData;
    return {
      value: propsDataWithValue[prop]
    };
  }

  if (((_b = vnode.data) === null || _b === void 0 ? void 0 : _b.domProps) && 'value' in vnode.data.domProps) {
    return {
      value: vnode.data.domProps.value
    };
  }

  return undefined;
}

function extractChildren(vnode) {
  if (Array.isArray(vnode)) {
    return vnode;
  }

  if (Array.isArray(vnode.children)) {
    return vnode.children;
  }
  /* istanbul ignore next */


  if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
    return vnode.componentOptions.children;
  }

  return [];
}

function findInputNodes(vnode) {
  if (!Array.isArray(vnode) && findValue(vnode) !== undefined) {
    return [vnode];
  }

  var children = extractChildren(vnode);
  return children.reduce(function (nodes, node) {
    var candidates = findInputNodes(node);

    if (candidates.length) {
      nodes.push.apply(nodes, candidates);
    }

    return nodes;
  }, []);
} // Resolves v-model config if exists.


function findModelConfig(vnode) {
  /* istanbul ignore next */
  if (!vnode.componentOptions) return null; // This is also not typed in the standard Vue TS.

  return vnode.componentOptions.Ctor.options.model;
} // Adds a listener to vnode listener object.


function mergeVNodeListeners(obj, eventName, handler) {
  // no listener at all.
  if (isNullOrUndefined(obj[eventName])) {
    obj[eventName] = [handler];
    return;
  } // Is an invoker.


  if (isCallable(obj[eventName]) && obj[eventName].fns) {
    var invoker = obj[eventName];
    invoker.fns = Array.isArray(invoker.fns) ? invoker.fns : [invoker.fns];

    if (!includes(invoker.fns, handler)) {
      invoker.fns.push(handler);
    }

    return;
  }

  if (isCallable(obj[eventName])) {
    var prev = obj[eventName];
    obj[eventName] = [prev];
  }

  if (Array.isArray(obj[eventName]) && !includes(obj[eventName], handler)) {
    obj[eventName].push(handler);
  }
} // Adds a listener to a native HTML vnode.


function addNativeNodeListener(node, eventName, handler) {
  /* istanbul ignore next */
  if (!node.data) {
    node.data = {};
  }

  if (isNullOrUndefined(node.data.on)) {
    node.data.on = {};
  }

  mergeVNodeListeners(node.data.on, eventName, handler);
} // Adds a listener to a Vue component vnode.


function addComponentNodeListener(node, eventName, handler) {
  /* istanbul ignore next */
  if (!node.componentOptions) {
    return;
  }
  /* istanbul ignore next */


  if (!node.componentOptions.listeners) {
    node.componentOptions.listeners = {};
  }

  mergeVNodeListeners(node.componentOptions.listeners, eventName, handler);
}

function addVNodeListener(vnode, eventName, handler) {
  if (vnode.componentOptions) {
    addComponentNodeListener(vnode, eventName, handler);
    return;
  }

  addNativeNodeListener(vnode, eventName, handler);
} // Determines if `change` should be used over `input` for listeners.


function getInputEventName(vnode, model) {
  var _a; // Is a component.


  if (vnode.componentOptions) {
    var event_1 = (findModelConfig(vnode) || {
      event: 'input'
    }).event;
    return event_1;
  } // Lazy Models typically use change event


  if ((_a = model === null || model === void 0 ? void 0 : model.modifiers) === null || _a === void 0 ? void 0 : _a.lazy) {
    return 'change';
  } // is a textual-type input.


  if (isTextInput(vnode)) {
    return 'input';
  }

  return 'change';
}

function isHTMLNode(node) {
  return includes(['input', 'select', 'textarea'], node.tag);
} // TODO: Type this one properly.


function normalizeSlots(slots, ctx) {
  var acc = [];
  return Object.keys(slots).reduce(function (arr, key) {
    slots[key].forEach(function (vnode) {
      if (!vnode.context) {
        slots[key].context = ctx;

        if (!vnode.data) {
          vnode.data = {};
        }

        vnode.data.slot = key;
      }
    });
    return arr.concat(slots[key]);
  }, acc);
}

function resolveTextualRules(vnode) {
  var _a;

  var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
  var rules = {};
  if (!attrs) return rules;

  if (attrs.type === 'email' && RuleContainer.getRuleDefinition('email')) {
    rules.email = ['multiple' in attrs];
  }

  if (attrs.pattern && RuleContainer.getRuleDefinition('regex')) {
    rules.regex = attrs.pattern;
  }

  if (attrs.maxlength >= 0 && RuleContainer.getRuleDefinition('max')) {
    rules.max = attrs.maxlength;
  }

  if (attrs.minlength >= 0 && RuleContainer.getRuleDefinition('min')) {
    rules.min = attrs.minlength;
  }

  if (attrs.type === 'number') {
    if (isSpecified(attrs.min) && RuleContainer.getRuleDefinition('min_value')) {
      rules.min_value = Number(attrs.min);
    }

    if (isSpecified(attrs.max) && RuleContainer.getRuleDefinition('max_value')) {
      rules.max_value = Number(attrs.max);
    }
  }

  return rules;
}

function resolveRules(vnode) {
  var _a;

  var htmlTags = ['input', 'select', 'textarea'];
  var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;

  if (!includes(htmlTags, vnode.tag) || !attrs) {
    return {};
  }

  var rules = {};

  if ('required' in attrs && attrs.required !== false && RuleContainer.getRuleDefinition('required')) {
    rules.required = attrs.type === 'checkbox' ? [true] : true;
  }

  if (isTextInput(vnode)) {
    return normalizeRules(_assign(_assign({}, rules), resolveTextualRules(vnode)));
  }

  return normalizeRules(rules);
}

function normalizeChildren(context, slotProps) {
  if (context.$scopedSlots.default) {
    return context.$scopedSlots.default(slotProps) || [];
  }

  return context.$slots.default || [];
}
/**
 * Determines if a provider needs to run validation.
 */


function shouldValidate(ctx, value) {
  // when an immediate/initial validation is needed and wasn't done before.
  if (!ctx._ignoreImmediate && ctx.immediate) {
    return true;
  } // when the value changes for whatever reason.


  if (!isRefEqual(ctx.value, value) && ctx.normalizedEvents.length) {
    return true;
  } // when it needs validation due to props/cross-fields changes.


  if (ctx._needsValidation) {
    return true;
  } // when the initial value is undefined and the field wasn't rendered yet.


  if (!ctx.initialized && value === undefined) {
    return true;
  }

  return false;
}

function createValidationCtx(ctx) {
  return _assign(_assign({}, ctx.flags), {
    errors: ctx.errors,
    classes: ctx.classes,
    failedRules: ctx.failedRules,
    reset: function reset() {
      return ctx.reset();
    },
    validate: function validate() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return ctx.validate.apply(ctx, args);
    },
    ariaInput: {
      'aria-invalid': ctx.flags.invalid ? 'true' : 'false',
      'aria-required': ctx.isRequired ? 'true' : 'false',
      'aria-errormessage': "vee_" + ctx.id
    },
    ariaMsg: {
      id: "vee_" + ctx.id,
      'aria-live': ctx.errors.length ? 'assertive' : 'off'
    }
  });
}

function onRenderUpdate(vm, value) {
  if (!vm.initialized) {
    vm.initialValue = value;
  }

  var validateNow = shouldValidate(vm, value);
  vm._needsValidation = false;
  vm.value = value;
  vm._ignoreImmediate = true;

  if (!validateNow) {
    return;
  }

  var validate = function validate() {
    if (vm.immediate || vm.flags.validated) {
      return triggerThreadSafeValidation(vm);
    }

    vm.validateSilent();
  };

  if (vm.initialized) {
    validate();
    return;
  }

  vm.$once('hook:mounted', function () {
    return validate();
  });
}

function computeModeSetting(ctx) {
  var compute = isCallable(ctx.mode) ? ctx.mode : modes[ctx.mode];
  return compute(ctx);
}

function triggerThreadSafeValidation(vm) {
  var pendingPromise = vm.validateSilent(); // avoids race conditions between successive validations.

  vm._pendingValidation = pendingPromise;
  return pendingPromise.then(function (result) {
    if (pendingPromise === vm._pendingValidation) {
      vm.applyResult(result);
      vm._pendingValidation = undefined;
    }

    return result;
  });
} // Creates the common handlers for a validatable context.


function createCommonHandlers(vm) {
  if (!vm.$veeOnInput) {
    vm.$veeOnInput = function (e) {
      vm.syncValue(e); // track and keep the value updated.

      vm.setFlags({
        dirty: true,
        pristine: false
      });
    };
  }

  var onInput = vm.$veeOnInput;

  if (!vm.$veeOnBlur) {
    vm.$veeOnBlur = function () {
      vm.setFlags({
        touched: true,
        untouched: false
      });
    };
  } // Blur event listener.


  var onBlur = vm.$veeOnBlur;
  var onValidate = vm.$veeHandler;
  var mode = computeModeSetting(vm); // Handle debounce changes.

  if (!onValidate || vm.$veeDebounce !== vm.debounce) {
    onValidate = debounce(function () {
      vm.$nextTick(function () {
        if (!vm._pendingReset) {
          triggerThreadSafeValidation(vm);
        }

        vm._pendingReset = false;
      });
    }, mode.debounce || vm.debounce); // Cache the handler so we don't create it each time.

    vm.$veeHandler = onValidate; // cache the debounce value so we detect if it was changed.

    vm.$veeDebounce = vm.debounce;
  }

  return {
    onInput: onInput,
    onBlur: onBlur,
    onValidate: onValidate
  };
} // Adds all plugin listeners to the vnode.


function addListeners(vm, node) {
  var value = findValue(node); // cache the input eventName.

  vm._inputEventName = vm._inputEventName || getInputEventName(node, findModel(node));
  onRenderUpdate(vm, value === null || value === void 0 ? void 0 : value.value);

  var _a = createCommonHandlers(vm),
      onInput = _a.onInput,
      onBlur = _a.onBlur,
      onValidate = _a.onValidate;

  addVNodeListener(node, vm._inputEventName, onInput);
  addVNodeListener(node, 'blur', onBlur); // add the validation listeners.

  vm.normalizedEvents.forEach(function (evt) {
    addVNodeListener(node, evt, onValidate);
  });
  vm.initialized = true;
}

var PROVIDER_COUNTER = 0;

function data$1() {
  var errors = [];
  var fieldName = '';
  var defaultValues = {
    errors: errors,
    value: undefined,
    initialized: false,
    initialValue: undefined,
    flags: createFlags(),
    failedRules: {},
    isActive: true,
    fieldName: fieldName,
    id: ''
  };
  return defaultValues;
}

var ValidationProvider = vue__WEBPACK_IMPORTED_MODULE_33___default().extend({
  name: 'ValidationProvider',
  inject: {
    $_veeObserver: {
      from: '$_veeObserver',
      default: function _default() {
        if (!this.$vnode.context.$_veeObserver) {
          this.$vnode.context.$_veeObserver = createObserver();
        }

        return this.$vnode.context.$_veeObserver;
      }
    }
  },
  props: {
    vid: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: null
    },
    mode: {
      type: [String, Function],
      default: function _default() {
        return getConfig().mode;
      }
    },
    rules: {
      type: [Object, String],
      default: null
    },
    immediate: {
      type: Boolean,
      default: false
    },
    bails: {
      type: Boolean,
      default: function _default() {
        return getConfig().bails;
      }
    },
    skipIfEmpty: {
      type: Boolean,
      default: function _default() {
        return getConfig().skipOptional;
      }
    },
    debounce: {
      type: Number,
      default: 0
    },
    tag: {
      type: String,
      default: 'span'
    },
    slim: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customMessages: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    detectInput: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    rules: {
      deep: true,
      handler: function handler(val, oldVal) {
        this._needsValidation = !fastDeepEqual(val, oldVal);
      }
    }
  },
  data: data$1,
  computed: {
    fieldDeps: function fieldDeps() {
      var _this = this;

      return Object.keys(this.normalizedRules).reduce(function (acc, rule) {
        var deps = extractLocators(_this.normalizedRules[rule]).map(function (dep) {
          return isLocator(dep) ? dep.__locatorRef : dep.slice(1);
        });
        acc.push.apply(acc, deps);
        deps.forEach(function (depName) {
          watchCrossFieldDep(_this, depName);
        });
        return acc;
      }, []);
    },
    normalizedEvents: function normalizedEvents() {
      var _this = this;

      var on = computeModeSetting(this).on;
      return (on || []).map(function (e) {
        if (e === 'input') {
          return _this._inputEventName;
        }

        return e;
      });
    },
    isRequired: function isRequired() {
      var rules = _assign(_assign({}, this._resolvedRules), this.normalizedRules);

      var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
      this.flags.required = !!isRequired;
      return isRequired;
    },
    classes: function classes() {
      var names = getConfig().classes;
      return computeClassObj(names, this.flags);
    },
    normalizedRules: function normalizedRules() {
      return normalizeRules(this.rules);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var onLocaleChanged = function onLocaleChanged() {
      if (!_this.flags.validated) {
        return;
      }

      var regenerateMap = _this._regenerateMap;

      if (regenerateMap) {
        var errors_1 = [];
        var failedRules_1 = {};
        Object.keys(regenerateMap).forEach(function (rule) {
          var msg = regenerateMap[rule]();
          errors_1.push(msg);
          failedRules_1[rule] = msg;
        });

        _this.applyResult({
          errors: errors_1,
          failedRules: failedRules_1,
          regenerateMap: regenerateMap
        });

        return;
      }

      _this.validate();
    };

    EVENT_BUS.$on('change:locale', onLocaleChanged);
    this.$on('hook:beforeDestroy', function () {
      EVENT_BUS.$off('change:locale', onLocaleChanged);
    });
  },
  render: function render(h) {
    var _this = this;

    this.registerField();
    var ctx = createValidationCtx(this);
    var children = normalizeChildren(this, ctx); // Automatic v-model detection

    if (this.detectInput) {
      var inputs = findInputNodes(children);

      if (inputs.length) {
        inputs.forEach(function (input, idx) {
          var _a, _b, _c, _d, _e, _f; // If the elements are not checkboxes and there are more input nodes


          if (!includes(['checkbox', 'radio'], (_b = (_a = input.data) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.type) && idx > 0) {
            return;
          }

          var resolved = getConfig().useConstraintAttrs ? resolveRules(input) : {};

          if (!fastDeepEqual(_this._resolvedRules, resolved)) {
            _this._needsValidation = true;
          }

          if (isHTMLNode(input)) {
            _this.fieldName = ((_d = (_c = input.data) === null || _c === void 0 ? void 0 : _c.attrs) === null || _d === void 0 ? void 0 : _d.name) || ((_f = (_e = input.data) === null || _e === void 0 ? void 0 : _e.attrs) === null || _f === void 0 ? void 0 : _f.id);
          }

          _this._resolvedRules = resolved;
          addListeners(_this, input);
        });
      }
    }

    return this.slim && children.length <= 1 ? children[0] : h(this.tag, children);
  },
  beforeDestroy: function beforeDestroy() {
    // cleanup reference.
    this.$_veeObserver.unobserve(this.id);
  },
  activated: function activated() {
    this.isActive = true;
  },
  deactivated: function deactivated() {
    this.isActive = false;
  },
  methods: {
    setFlags: function setFlags(flags) {
      var _this = this;

      Object.keys(flags).forEach(function (flag) {
        _this.flags[flag] = flags[flag];
      });
    },
    syncValue: function syncValue(v) {
      var value = normalizeEventValue(v);
      this.value = value;
      this.flags.changed = !fastDeepEqual(this.initialValue, value);
    },
    reset: function reset() {
      var _this = this;

      this.errors = [];
      this.initialValue = this.value;
      var flags = createFlags();
      flags.required = this.isRequired;
      this.setFlags(flags);
      this.failedRules = {};
      this.validateSilent();
      this._pendingValidation = undefined;
      this._pendingReset = true;
      setTimeout(function () {
        _this._pendingReset = false;
      }, this.debounce);
    },
    validate: function validate() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (args.length > 0) {
            this.syncValue(args[0]);
          }

          return [2
          /*return*/
          , triggerThreadSafeValidation(this)];
        });
      });
    },
    validateSilent: function validateSilent() {
      return __awaiter(this, void 0, void 0, function () {
        var rules, result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.setFlags({
                pending: true
              });
              rules = _assign(_assign({}, this._resolvedRules), this.normalizedRules);
              Object.defineProperty(rules, '_$$isNormalized', {
                value: true,
                writable: false,
                enumerable: false,
                configurable: false
              });
              return [4
              /*yield*/
              , validate(this.value, rules, _assign(_assign({
                name: this.name || this.fieldName
              }, createLookup(this)), {
                bails: this.bails,
                skipIfEmpty: this.skipIfEmpty,
                isInitial: !this.initialized,
                customMessages: this.customMessages
              }))];

            case 1:
              result = _a.sent();
              this.setFlags({
                pending: false,
                valid: result.valid,
                invalid: !result.valid
              });

              if (result.required !== undefined) {
                this.setFlags({
                  required: result.required
                });
              }

              return [2
              /*return*/
              , result];
          }
        });
      });
    },
    setErrors: function setErrors(errors) {
      this.applyResult({
        errors: errors,
        failedRules: {}
      });
    },
    applyResult: function applyResult(_a) {
      var errors = _a.errors,
          failedRules = _a.failedRules,
          regenerateMap = _a.regenerateMap;
      this.errors = errors;
      this._regenerateMap = regenerateMap;
      this.failedRules = _assign({}, failedRules || {});
      this.setFlags({
        valid: !errors.length,
        passed: !errors.length,
        invalid: !!errors.length,
        failed: !!errors.length,
        validated: true,
        changed: !fastDeepEqual(this.value, this.initialValue)
      });
    },
    registerField: function registerField() {
      updateRenderingContextRefs(this);
    },
    checkComputesRequiredState: function checkComputesRequiredState() {
      var rules = _assign(_assign({}, this._resolvedRules), this.normalizedRules);

      var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
      return isRequired;
    }
  }
});

function computeClassObj(names, flags) {
  var acc = {};
  var keys = Object.keys(flags);
  var length = keys.length;

  var _loop_1 = function _loop_1(i) {
    var flag = keys[i];
    var className = names && names[flag] || flag;
    var value = flags[flag];

    if (isNullOrUndefined(value)) {
      return "continue";
    }

    if ((flag === 'valid' || flag === 'invalid') && !flags.validated) {
      return "continue";
    }

    if (typeof className === 'string') {
      acc[className] = value;
    } else if (Array.isArray(className)) {
      className.forEach(function (cls) {
        acc[cls] = value;
      });
    }
  };

  for (var i = 0; i < length; i++) {
    _loop_1(i);
  }

  return acc;
}

function createLookup(vm) {
  var providers = vm.$_veeObserver.refs;
  var reduced = {
    names: {},
    values: {}
  };
  return vm.fieldDeps.reduce(function (acc, depName) {
    if (!providers[depName]) {
      return acc;
    }

    acc.values[depName] = providers[depName].value;
    acc.names[depName] = providers[depName].name;
    return acc;
  }, reduced);
}

function extractId(vm) {
  if (vm.vid) {
    return vm.vid;
  }

  if (vm.name) {
    return vm.name;
  }

  if (vm.id) {
    return vm.id;
  }

  if (vm.fieldName) {
    return vm.fieldName;
  }

  PROVIDER_COUNTER++;
  return "_vee_" + PROVIDER_COUNTER;
}

function updateRenderingContextRefs(vm) {
  var providedId = extractId(vm);
  var id = vm.id; // Nothing has changed.

  if (!vm.isActive || id === providedId && vm.$_veeObserver.refs[id]) {
    return;
  } // vid was changed.


  if (id !== providedId && vm.$_veeObserver.refs[id] === vm) {
    vm.$_veeObserver.unobserve(id);
  }

  vm.id = providedId;
  vm.$_veeObserver.observe(vm);
}

function createObserver() {
  return {
    refs: {},
    observe: function observe(vm) {
      this.refs[vm.id] = vm;
    },
    unobserve: function unobserve(id) {
      delete this.refs[id];
    }
  };
}

function watchCrossFieldDep(ctx, depName, withHooks) {
  if (withHooks === void 0) {
    withHooks = true;
  }

  var providers = ctx.$_veeObserver.refs;

  if (!ctx._veeWatchers) {
    ctx._veeWatchers = {};
  }

  if (!providers[depName] && withHooks) {
    return ctx.$once('hook:mounted', function () {
      watchCrossFieldDep(ctx, depName, false);
    });
  }

  if (!isCallable(ctx._veeWatchers[depName]) && providers[depName]) {
    ctx._veeWatchers[depName] = providers[depName].$watch('value', function () {
      var isComputesRequired = ctx.checkComputesRequiredState();

      if (ctx.flags.validated) {
        ctx._needsValidation = true;
        ctx.validate();
      } // Validate dependent field silently if it has rules with computesRequired


      if (isComputesRequired && !ctx.flags.validated) {
        ctx.validateSilent();
      }
    });
  }
}

var FLAGS_STRATEGIES = [['pristine', 'every'], ['dirty', 'some'], ['touched', 'some'], ['untouched', 'every'], ['valid', 'every'], ['invalid', 'some'], ['pending', 'some'], ['validated', 'every'], ['changed', 'some'], ['passed', 'every'], ['failed', 'some']];
var OBSERVER_COUNTER = 0;

function data() {
  var refs = {};
  var errors = {};
  var flags = createObserverFlags();
  var fields = {}; // FIXME: Not sure of this one can be typed, circular type reference.

  var observers = [];
  return {
    id: '',
    refs: refs,
    observers: observers,
    errors: errors,
    flags: flags,
    fields: fields
  };
}

function provideSelf() {
  return {
    $_veeObserver: this
  };
}

var ValidationObserver = vue__WEBPACK_IMPORTED_MODULE_33___default().extend({
  name: 'ValidationObserver',
  provide: provideSelf,
  inject: {
    $_veeObserver: {
      from: '$_veeObserver',
      default: function _default() {
        if (!this.$vnode.context.$_veeObserver) {
          return null;
        }

        return this.$vnode.context.$_veeObserver;
      }
    }
  },
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    vid: {
      type: String,
      default: function _default() {
        return "obs_" + OBSERVER_COUNTER++;
      }
    },
    slim: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: data,
  created: function created() {
    var _this = this;

    this.id = this.vid;
    register(this);
    var onChange = debounce(function (_a) {
      var errors = _a.errors,
          flags = _a.flags,
          fields = _a.fields;
      _this.errors = errors;
      _this.flags = flags;
      _this.fields = fields;
    }, 16);
    this.$watch(computeObserverState, onChange);
  },
  activated: function activated() {
    register(this);
  },
  deactivated: function deactivated() {
    unregister(this);
  },
  beforeDestroy: function beforeDestroy() {
    unregister(this);
  },
  render: function render(h) {
    var children = normalizeChildren(this, prepareSlotProps(this));
    return this.slim && children.length <= 1 ? children[0] : h(this.tag, {
      on: this.$listeners
    }, children);
  },
  methods: {
    observe: function observe(subscriber, kind) {
      var _a;

      if (kind === void 0) {
        kind = 'provider';
      }

      if (kind === 'observer') {
        this.observers.push(subscriber);
        return;
      }

      this.refs = _assign(_assign({}, this.refs), (_a = {}, _a[subscriber.id] = subscriber, _a));
    },
    unobserve: function unobserve(id, kind) {
      if (kind === void 0) {
        kind = 'provider';
      }

      if (kind === 'provider') {
        var provider = this.refs[id];

        if (!provider) {
          return;
        }

        this.$delete(this.refs, id);
        return;
      }

      var idx = findIndex(this.observers, function (o) {
        return o.id === id;
      });

      if (idx !== -1) {
        this.observers.splice(idx, 1);
      }
    },
    validateWithInfo: function validateWithInfo(_a) {
      var _b = (_a === void 0 ? {} : _a).silent,
          silent = _b === void 0 ? false : _b;
      return __awaiter(this, void 0, void 0, function () {
        var results, isValid, _c, errors, flags, fields;

        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              return [4
              /*yield*/
              , Promise.all(__spreadArrays(values(this.refs).filter(function (r) {
                return !r.disabled;
              }).map(function (ref) {
                return ref[silent ? 'validateSilent' : 'validate']().then(function (r) {
                  return r.valid;
                });
              }), this.observers.filter(function (o) {
                return !o.disabled;
              }).map(function (obs) {
                return obs.validate({
                  silent: silent
                });
              })))];

            case 1:
              results = _d.sent();
              isValid = results.every(function (r) {
                return r;
              });
              _c = computeObserverState.call(this), errors = _c.errors, flags = _c.flags, fields = _c.fields;
              this.errors = errors;
              this.flags = flags;
              this.fields = fields;
              return [2
              /*return*/
              , {
                errors: errors,
                flags: flags,
                fields: fields,
                isValid: isValid
              }];
          }
        });
      });
    },
    validate: function validate(_a) {
      var _b = (_a === void 0 ? {} : _a).silent,
          silent = _b === void 0 ? false : _b;
      return __awaiter(this, void 0, void 0, function () {
        var isValid;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              return [4
              /*yield*/
              , this.validateWithInfo({
                silent: silent
              })];

            case 1:
              isValid = _c.sent().isValid;
              return [2
              /*return*/
              , isValid];
          }
        });
      });
    },
    handleSubmit: function handleSubmit(cb) {
      return __awaiter(this, void 0, void 0, function () {
        var isValid;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.validate()];

            case 1:
              isValid = _a.sent();

              if (!isValid || !cb) {
                return [2
                /*return*/
                ];
              }

              return [2
              /*return*/
              , cb()];
          }
        });
      });
    },
    reset: function reset() {
      return __spreadArrays(values(this.refs), this.observers).forEach(function (ref) {
        return ref.reset();
      });
    },
    setErrors: function setErrors(errors) {
      var _this = this;

      Object.keys(errors).forEach(function (key) {
        var provider = _this.refs[key];
        if (!provider) return;
        var errorArr = errors[key] || [];
        errorArr = typeof errorArr === 'string' ? [errorArr] : errorArr;
        provider.setErrors(errorArr);
      });
      this.observers.forEach(function (observer) {
        observer.setErrors(errors);
      });
    }
  }
});

function unregister(vm) {
  if (vm.$_veeObserver) {
    vm.$_veeObserver.unobserve(vm.id, 'observer');
  }
}

function register(vm) {
  if (vm.$_veeObserver) {
    vm.$_veeObserver.observe(vm, 'observer');
  }
}

function prepareSlotProps(vm) {
  return _assign(_assign({}, vm.flags), {
    errors: vm.errors,
    fields: vm.fields,
    validate: vm.validate,
    validateWithInfo: vm.validateWithInfo,
    passes: vm.handleSubmit,
    handleSubmit: vm.handleSubmit,
    reset: vm.reset
  });
} // Creates a modified version of validation flags


function createObserverFlags() {
  return _assign(_assign({}, createFlags()), {
    valid: true,
    invalid: false
  });
}

function computeObserverState() {
  var vms = __spreadArrays(values(this.refs), this.observers.filter(function (o) {
    return !o.disabled;
  }));

  var errors = {};
  var flags = createObserverFlags();
  var fields = {};
  var length = vms.length;

  for (var i = 0; i < length; i++) {
    var vm = vms[i]; // validation provider

    if (Array.isArray(vm.errors)) {
      errors[vm.id] = vm.errors;
      fields[vm.id] = _assign({
        id: vm.id,
        name: vm.name,
        failedRules: vm.failedRules
      }, vm.flags);
      continue;
    } // Nested observer, merge errors and fields


    errors = _assign(_assign({}, errors), vm.errors);
    fields = _assign(_assign({}, fields), vm.fields);
  }

  FLAGS_STRATEGIES.forEach(function (_a) {
    var flag = _a[0],
        method = _a[1];
    flags[flag] = vms[method](function (vm) {
      return vm.flags[flag];
    });
  });
  return {
    errors: errors,
    flags: flags,
    fields: fields
  };
}

function withValidation(component, mapProps) {
  var _a;

  if (mapProps === void 0) {
    mapProps = identity;
  }

  var options = 'options' in component ? component.options : component;
  var providerOpts = ValidationProvider.options;
  var hoc = {
    name: (options.name || 'AnonymousHoc') + "WithValidation",
    props: _assign({}, providerOpts.props),
    data: providerOpts.data,
    computed: _assign({}, providerOpts.computed),
    methods: _assign({}, providerOpts.methods),
    beforeDestroy: providerOpts.beforeDestroy,
    inject: providerOpts.inject
  };
  var eventName = ((_a = options === null || options === void 0 ? void 0 : options.model) === null || _a === void 0 ? void 0 : _a.event) || 'input';

  hoc.render = function (h) {
    var _a;

    this.registerField();
    var vctx = createValidationCtx(this);

    var listeners = _assign({}, this.$listeners);

    var model = findModel(this.$vnode);
    this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
    var value = findValue(this.$vnode);
    onRenderUpdate(this, value === null || value === void 0 ? void 0 : value.value);

    var _b = createCommonHandlers(this),
        onInput = _b.onInput,
        onBlur = _b.onBlur,
        onValidate = _b.onValidate;

    mergeVNodeListeners(listeners, eventName, onInput);
    mergeVNodeListeners(listeners, 'blur', onBlur);
    this.normalizedEvents.forEach(function (evt) {
      mergeVNodeListeners(listeners, evt, onValidate);
    }); // Props are any attrs not associated with ValidationProvider Plus the model prop.
    // WARNING: Accidental prop overwrite will probably happen.

    var prop = (findModelConfig(this.$vnode) || {
      prop: 'value'
    }).prop;

    var props = _assign(_assign(_assign({}, this.$attrs), (_a = {}, _a[prop] = model === null || model === void 0 ? void 0 : model.value, _a)), mapProps(vctx));

    return h(options, {
      attrs: this.$attrs,
      props: props,
      on: listeners,
      scopedSlots: this.$scopedSlots
    }, normalizeSlots(this.$slots, this.$vnode.context));
  };

  return hoc;
}

var version = '3.4.14';


/***/ })

}]);
//# sourceMappingURL=EntityDrupal.umd.785.js.map