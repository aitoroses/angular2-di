(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Angular2DI"] = factory();
	else
		root["Angular2DI"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _di = __webpack_require__(1);

	var _loop = function _loop(_key2) {
	  if (_key2 === "default") return 'continue';
	  Object.defineProperty(exports, _key2, {
	    enumerable: true,
	    get: function get() {
	      return _di[_key2];
	    }
	  });
	};

	for (var _key2 in _di) {
	  var _ret = _loop(_key2);

	  if (_ret === 'continue') continue;
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _metadata = __webpack_require__(2);
	
	Object.defineProperty(exports, 'InjectMetadata', {
	  enumerable: true,
	  get: function get() {
	    return _metadata.InjectMetadata;
	  }
	});
	Object.defineProperty(exports, 'OptionalMetadata', {
	  enumerable: true,
	  get: function get() {
	    return _metadata.OptionalMetadata;
	  }
	});
	Object.defineProperty(exports, 'InjectableMetadata', {
	  enumerable: true,
	  get: function get() {
	    return _metadata.InjectableMetadata;
	  }
	});
	Object.defineProperty(exports, 'SelfMetadata', {
	  enumerable: true,
	  get: function get() {
	    return _metadata.SelfMetadata;
	  }
	});
	Object.defineProperty(exports, 'HostMetadata', {
	  enumerable: true,
	  get: function get() {
	    return _metadata.HostMetadata;
	  }
	});
	Object.defineProperty(exports, 'SkipSelfMetadata', {
	  enumerable: true,
	  get: function get() {
	    return _metadata.SkipSelfMetadata;
	  }
	});
	Object.defineProperty(exports, 'DependencyMetadata', {
	  enumerable: true,
	  get: function get() {
	    return _metadata.DependencyMetadata;
	  }
	});
	
	var _decorators = __webpack_require__(4);
	
	var _loop = function _loop(_key3) {
	  if (_key3 === "default") return 'continue';
	  Object.defineProperty(exports, _key3, {
	    enumerable: true,
	    get: function get() {
	      return _decorators[_key3];
	    }
	  });
	};
	
	for (var _key3 in _decorators) {
	  var _ret = _loop(_key3);
	
	  if (_ret === 'continue') continue;
	}
	
	var _forward_ref = __webpack_require__(6);
	
	Object.defineProperty(exports, 'forwardRef', {
	  enumerable: true,
	  get: function get() {
	    return _forward_ref.forwardRef;
	  }
	});
	Object.defineProperty(exports, 'resolveForwardRef', {
	  enumerable: true,
	  get: function get() {
	    return _forward_ref.resolveForwardRef;
	  }
	});
	
	var _injector = __webpack_require__(7);
	
	Object.defineProperty(exports, 'Injector', {
	  enumerable: true,
	  get: function get() {
	    return _injector.Injector;
	  }
	});
	
	var _provider = __webpack_require__(9);
	
	Object.defineProperty(exports, 'Binding', {
	  enumerable: true,
	  get: function get() {
	    return _provider.Binding;
	  }
	});
	Object.defineProperty(exports, 'ProviderBuilder', {
	  enumerable: true,
	  get: function get() {
	    return _provider.ProviderBuilder;
	  }
	});
	Object.defineProperty(exports, 'ResolvedFactory', {
	  enumerable: true,
	  get: function get() {
	    return _provider.ResolvedFactory;
	  }
	});
	Object.defineProperty(exports, 'Dependency', {
	  enumerable: true,
	  get: function get() {
	    return _provider.Dependency;
	  }
	});
	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _provider.bind;
	  }
	});
	Object.defineProperty(exports, 'Provider', {
	  enumerable: true,
	  get: function get() {
	    return _provider.Provider;
	  }
	});
	Object.defineProperty(exports, 'provide', {
	  enumerable: true,
	  get: function get() {
	    return _provider.provide;
	  }
	});
	
	var _key2 = __webpack_require__(15);
	
	Object.defineProperty(exports, 'Key', {
	  enumerable: true,
	  get: function get() {
	    return _key2.Key;
	  }
	});
	Object.defineProperty(exports, 'TypeLiteral', {
	  enumerable: true,
	  get: function get() {
	    return _key2.TypeLiteral;
	  }
	});
	
	var _exceptions = __webpack_require__(17);
	
	Object.defineProperty(exports, 'NoProviderError', {
	  enumerable: true,
	  get: function get() {
	    return _exceptions.NoProviderError;
	  }
	});
	Object.defineProperty(exports, 'AbstractProviderError', {
	  enumerable: true,
	  get: function get() {
	    return _exceptions.AbstractProviderError;
	  }
	});
	Object.defineProperty(exports, 'CyclicDependencyError', {
	  enumerable: true,
	  get: function get() {
	    return _exceptions.CyclicDependencyError;
	  }
	});
	Object.defineProperty(exports, 'InstantiationError', {
	  enumerable: true,
	  get: function get() {
	    return _exceptions.InstantiationError;
	  }
	});
	Object.defineProperty(exports, 'InvalidProviderError', {
	  enumerable: true,
	  get: function get() {
	    return _exceptions.InvalidProviderError;
	  }
	});
	Object.defineProperty(exports, 'NoAnnotationError', {
	  enumerable: true,
	  get: function get() {
	    return _exceptions.NoAnnotationError;
	  }
	});
	Object.defineProperty(exports, 'OutOfBoundsError', {
	  enumerable: true,
	  get: function get() {
	    return _exceptions.OutOfBoundsError;
	  }
	});
	
	var _opaque_token = __webpack_require__(18);
	
	Object.defineProperty(exports, 'OpaqueToken', {
	  enumerable: true,
	  get: function get() {
	    return _opaque_token.OpaqueToken;
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HostMetadata = exports.SkipSelfMetadata = exports.SelfMetadata = exports.InjectableMetadata = exports.DependencyMetadata = exports.OptionalMetadata = exports.InjectMetadata = undefined;
	
	var _lang = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = undefined && undefined.__metadata || function (k, v) {
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var InjectMetadata = exports.InjectMetadata = function () {
	    function InjectMetadata(token) {
	        _classCallCheck(this, InjectMetadata);
	
	        this.token = token;
	    }
	
	    _createClass(InjectMetadata, [{
	        key: "toString",
	        value: function toString() {
	            return "@Inject(" + (0, _lang.stringify)(this.token) + ")";
	        }
	    }]);
	
	    return InjectMetadata;
	}();
	exports.InjectMetadata = InjectMetadata = __decorate([(0, _lang.CONST)(), __metadata('design:paramtypes', [Object])], InjectMetadata);
	var OptionalMetadata = exports.OptionalMetadata = function () {
	    function OptionalMetadata() {
	        _classCallCheck(this, OptionalMetadata);
	    }
	
	    _createClass(OptionalMetadata, [{
	        key: "toString",
	        value: function toString() {
	            return "@Optional()";
	        }
	    }]);
	
	    return OptionalMetadata;
	}();
	exports.OptionalMetadata = OptionalMetadata = __decorate([(0, _lang.CONST)(), __metadata('design:paramtypes', [])], OptionalMetadata);
	var DependencyMetadata = exports.DependencyMetadata = function () {
	    function DependencyMetadata() {
	        _classCallCheck(this, DependencyMetadata);
	    }
	
	    _createClass(DependencyMetadata, [{
	        key: "token",
	        get: function get() {
	            return null;
	        }
	    }]);
	
	    return DependencyMetadata;
	}();
	exports.DependencyMetadata = DependencyMetadata = __decorate([(0, _lang.CONST)(), __metadata('design:paramtypes', [])], DependencyMetadata);
	var InjectableMetadata = exports.InjectableMetadata = function InjectableMetadata() {
	    _classCallCheck(this, InjectableMetadata);
	};
	exports.InjectableMetadata = InjectableMetadata = __decorate([(0, _lang.CONST)(), __metadata('design:paramtypes', [])], InjectableMetadata);
	var SelfMetadata = exports.SelfMetadata = function () {
	    function SelfMetadata() {
	        _classCallCheck(this, SelfMetadata);
	    }
	
	    _createClass(SelfMetadata, [{
	        key: "toString",
	        value: function toString() {
	            return "@Self()";
	        }
	    }]);
	
	    return SelfMetadata;
	}();
	exports.SelfMetadata = SelfMetadata = __decorate([(0, _lang.CONST)(), __metadata('design:paramtypes', [])], SelfMetadata);
	var SkipSelfMetadata = exports.SkipSelfMetadata = function () {
	    function SkipSelfMetadata() {
	        _classCallCheck(this, SkipSelfMetadata);
	    }
	
	    _createClass(SkipSelfMetadata, [{
	        key: "toString",
	        value: function toString() {
	            return "@SkipSelf()";
	        }
	    }]);
	
	    return SkipSelfMetadata;
	}();
	exports.SkipSelfMetadata = SkipSelfMetadata = __decorate([(0, _lang.CONST)(), __metadata('design:paramtypes', [])], SkipSelfMetadata);
	var HostMetadata = exports.HostMetadata = function () {
	    function HostMetadata() {
	        _classCallCheck(this, HostMetadata);
	    }
	
	    _createClass(HostMetadata, [{
	        key: "toString",
	        value: function toString() {
	            return "@Host()";
	        }
	    }]);
	
	    return HostMetadata;
	}();
	exports.HostMetadata = HostMetadata = __decorate([(0, _lang.CONST)(), __metadata('design:paramtypes', [])], HostMetadata);

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	;
	exports.IS_DART = false;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    return type['name'];
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	var _devMode = true;
	var _modeLocked = false;
	function lockMode() {
	    _modeLocked = true;
	}
	exports.lockMode = lockMode;
	/**
	 * Disable Angular's development mode, which turns off assertions and other
	 * checks within the framework.
	 *
	 * One important assertion this disables verifies that a change detection pass
	 * does not result in additional changes to any bindings (also known as
	 * unidirectional data flow).
	 */
	function enableProdMode() {
	    if (_modeLocked) {
	        // Cannot use BaseException as that ends up importing from facade/lang.
	        throw 'Cannot enable prod mode after platform setup.';
	    }
	    _devMode = false;
	}
	exports.enableProdMode = enableProdMode;
	function assertionsEnabled() {
	    return _devMode;
	}
	exports.assertionsEnabled = assertionsEnabled;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	// This function is needed only to properly support Dart's const expressions
	// see https://github.com/angular/ts2dart/pull/151 for more info
	function CONST_EXPR(expr) {
	    return expr;
	}
	exports.CONST_EXPR = CONST_EXPR;
	function CONST() {
	    return function (target) { return target; };
	}
	exports.CONST = CONST;
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isString(obj) {
	    return typeof obj === "string";
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === "function";
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	function isPromise(obj) {
	    return obj instanceof _global.Promise;
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isNumber(obj) {
	    return typeof obj === 'number';
	}
	exports.isNumber = isNumber;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf("\n");
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	})();
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(""); };
	    return StringJoiner;
	})();
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	})(Error);
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError("Invalid integer literal when parsing " + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " +
	            radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	})();
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var RegExpWrapper = (function () {
	    function RegExpWrapper() {
	    }
	    RegExpWrapper.create = function (regExpStr, flags) {
	        if (flags === void 0) { flags = ''; }
	        flags = flags.replace(/g/g, '');
	        return new _global.RegExp(regExpStr, flags + 'g');
	    };
	    RegExpWrapper.firstMatch = function (regExp, input) {
	        // Reset multimatch regex state
	        regExp.lastIndex = 0;
	        return regExp.exec(input);
	    };
	    RegExpWrapper.test = function (regExp, input) {
	        regExp.lastIndex = 0;
	        return regExp.test(input);
	    };
	    RegExpWrapper.matcher = function (regExp, input) {
	        // Reset regex state for the case
	        // someone did not loop over all matches
	        // last time.
	        regExp.lastIndex = 0;
	        return { re: regExp, input: input };
	    };
	    return RegExpWrapper;
	})();
	exports.RegExpWrapper = RegExpWrapper;
	var RegExpMatcherWrapper = (function () {
	    function RegExpMatcherWrapper() {
	    }
	    RegExpMatcherWrapper.next = function (matcher) {
	        return matcher.re.exec(matcher.input);
	    };
	    return RegExpMatcherWrapper;
	})();
	exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    return FunctionWrapper;
	})();
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === "function" || typeof o === "object");
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	})();
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	})();
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZy50cyJdLCJuYW1lcyI6WyJnZXRUeXBlTmFtZUZvckRlYnVnZ2luZyIsImxvY2tNb2RlIiwiZW5hYmxlUHJvZE1vZGUiLCJhc3NlcnRpb25zRW5hYmxlZCIsImFzc2VydCIsIkNPTlNUX0VYUFIiLCJDT05TVCIsImlzUHJlc2VudCIsImlzQmxhbmsiLCJpc1N0cmluZyIsImlzRnVuY3Rpb24iLCJpc1R5cGUiLCJpc1N0cmluZ01hcCIsImlzUHJvbWlzZSIsImlzQXJyYXkiLCJpc051bWJlciIsImlzRGF0ZSIsIm5vb3AiLCJzdHJpbmdpZnkiLCJzZXJpYWxpemVFbnVtIiwiZGVzZXJpYWxpemVFbnVtIiwiU3RyaW5nV3JhcHBlciIsIlN0cmluZ1dyYXBwZXIuY29uc3RydWN0b3IiLCJTdHJpbmdXcmFwcGVyLmZyb21DaGFyQ29kZSIsIlN0cmluZ1dyYXBwZXIuY2hhckNvZGVBdCIsIlN0cmluZ1dyYXBwZXIuc3BsaXQiLCJTdHJpbmdXcmFwcGVyLmVxdWFscyIsIlN0cmluZ1dyYXBwZXIuc3RyaXBMZWZ0IiwiU3RyaW5nV3JhcHBlci5zdHJpcFJpZ2h0IiwiU3RyaW5nV3JhcHBlci5yZXBsYWNlIiwiU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsIiwiU3RyaW5nV3JhcHBlci5zbGljZSIsIlN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbE1hcHBlZCIsIlN0cmluZ1dyYXBwZXIuY29udGFpbnMiLCJTdHJpbmdXcmFwcGVyLmNvbXBhcmUiLCJTdHJpbmdKb2luZXIiLCJTdHJpbmdKb2luZXIuY29uc3RydWN0b3IiLCJTdHJpbmdKb2luZXIuYWRkIiwiU3RyaW5nSm9pbmVyLnRvU3RyaW5nIiwiTnVtYmVyUGFyc2VFcnJvciIsIk51bWJlclBhcnNlRXJyb3IuY29uc3RydWN0b3IiLCJOdW1iZXJQYXJzZUVycm9yLnRvU3RyaW5nIiwiTnVtYmVyV3JhcHBlciIsIk51bWJlcldyYXBwZXIuY29uc3RydWN0b3IiLCJOdW1iZXJXcmFwcGVyLnRvRml4ZWQiLCJOdW1iZXJXcmFwcGVyLmVxdWFsIiwiTnVtYmVyV3JhcHBlci5wYXJzZUludEF1dG9SYWRpeCIsIk51bWJlcldyYXBwZXIucGFyc2VJbnQiLCJOdW1iZXJXcmFwcGVyLnBhcnNlRmxvYXQiLCJOdW1iZXJXcmFwcGVyLk5hTiIsIk51bWJlcldyYXBwZXIuaXNOYU4iLCJOdW1iZXJXcmFwcGVyLmlzSW50ZWdlciIsIlJlZ0V4cFdyYXBwZXIiLCJSZWdFeHBXcmFwcGVyLmNvbnN0cnVjdG9yIiwiUmVnRXhwV3JhcHBlci5jcmVhdGUiLCJSZWdFeHBXcmFwcGVyLmZpcnN0TWF0Y2giLCJSZWdFeHBXcmFwcGVyLnRlc3QiLCJSZWdFeHBXcmFwcGVyLm1hdGNoZXIiLCJSZWdFeHBNYXRjaGVyV3JhcHBlciIsIlJlZ0V4cE1hdGNoZXJXcmFwcGVyLmNvbnN0cnVjdG9yIiwiUmVnRXhwTWF0Y2hlcldyYXBwZXIubmV4dCIsIkZ1bmN0aW9uV3JhcHBlciIsIkZ1bmN0aW9uV3JhcHBlci5jb25zdHJ1Y3RvciIsIkZ1bmN0aW9uV3JhcHBlci5hcHBseSIsImxvb3NlSWRlbnRpY2FsIiwiZ2V0TWFwS2V5Iiwibm9ybWFsaXplQmxhbmsiLCJub3JtYWxpemVCb29sIiwiaXNKc09iamVjdCIsInByaW50IiwiSnNvbiIsIkpzb24uY29uc3RydWN0b3IiLCJKc29uLnBhcnNlIiwiSnNvbi5zdHJpbmdpZnkiLCJEYXRlV3JhcHBlciIsIkRhdGVXcmFwcGVyLmNvbnN0cnVjdG9yIiwiRGF0ZVdyYXBwZXIuY3JlYXRlIiwiRGF0ZVdyYXBwZXIuZnJvbUlTT1N0cmluZyIsIkRhdGVXcmFwcGVyLmZyb21NaWxsaXMiLCJEYXRlV3JhcHBlci50b01pbGxpcyIsIkRhdGVXcmFwcGVyLm5vdyIsIkRhdGVXcmFwcGVyLnRvSnNvbiIsInNldFZhbHVlT25QYXRoIiwiZ2V0U3ltYm9sSXRlcmF0b3IiLCJldmFsRXhwcmVzc2lvbiJdLCJtYXBwaW5n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QUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO0lBQ2xDQSxDQUFDQTtJQUNEQSxNQUFNQSxDQUFDQSxLQUFJQSxRQUFRQSxZQUFSQSxRQUFRQSxrQkFBSUEsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBQ0EsZUFBSUEsV0FBV0EsQ0FBQ0EsQ0FBQ0E7QUFDcEVBLENBQUNBO0FBVmUsc0JBQWMsaUJBVTdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPKGp0ZXBsaXR6NjAyKTogTG9hZCBXb3JrZXJHbG9iYWxTY29wZSBmcm9tIGxpYi53ZWJ3b3JrZXIuZC50cyBmaWxlICMzNDkyXG5kZWNsYXJlIHZhciBXb3JrZXJHbG9iYWxTY29wZTtcbnZhciBnbG9iYWxTY29wZTogQnJvd3Nlck5vZGVHbG9iYWw7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKSB7XG4gICAgLy8gVE9ETzogUmVwbGFjZSBhbnkgd2l0aCBXb3JrZXJHbG9iYWxTY29wZSBmcm9tIGxpYi53ZWJ3b3JrZXIuZC50cyAjMzQ5MlxuICAgIGdsb2JhbFNjb3BlID0gPGFueT5zZWxmO1xuICB9IGVsc2Uge1xuICAgIGdsb2JhbFNjb3BlID0gPGFueT5nbG9iYWw7XG4gIH1cbn0gZWxzZSB7XG4gIGdsb2JhbFNjb3BlID0gPGFueT53aW5kb3c7XG59O1xuXG5leHBvcnQgY29uc3QgSVNfREFSVCA9IGZhbHNlO1xuXG4vLyBOZWVkIHRvIGRlY2xhcmUgYSBuZXcgdmFyaWFibGUgZm9yIGdsb2JhbCBoZXJlIHNpbmNlIFR5cGVTY3JpcHRcbi8vIGV4cG9ydHMgdGhlIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSBzeW1ib2wuXG52YXIgX2dsb2JhbDogQnJvd3Nlck5vZGVHbG9iYWwgPSBnbG9iYWxTY29wZTtcblxuZXhwb3J0IHtfZ2xvYmFsIGFzIGdsb2JhbH07XG5cbmV4cG9ydCB2YXIgVHlwZSA9IEZ1bmN0aW9uO1xuXG4vKipcbiAqIFJ1bnRpbWUgcmVwcmVzZW50YXRpb24gYSB0eXBlIHRoYXQgYSBDb21wb25lbnQgb3Igb3RoZXIgb2JqZWN0IGlzIGluc3RhbmNlcyBvZi5cbiAqXG4gKiBBbiBleGFtcGxlIG9mIGEgYFR5cGVgIGlzIGBNeUN1c3RvbUNvbXBvbmVudGAgY2xhc3MsIHdoaWNoIGluIEphdmFTY3JpcHQgaXMgYmUgcmVwcmVzZW50ZWQgYnlcbiAqIHRoZSBgTXlDdXN0b21Db21wb25lbnRgIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFR5cGUgZXh0ZW5kcyBGdW5jdGlvbiB7fVxuXG4vKipcbiAqIFJ1bnRpbWUgcmVwcmVzZW50YXRpb24gb2YgYSB0eXBlIHRoYXQgaXMgY29uc3RydWN0YWJsZSAobm9uLWFic3RyYWN0KS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25jcmV0ZVR5cGUgZXh0ZW5kcyBUeXBlIHsgbmV3ICguLi5hcmdzKTogYW55OyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlTmFtZUZvckRlYnVnZ2luZyh0eXBlOiBUeXBlKTogc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGVbJ25hbWUnXTtcbn1cblxuXG5leHBvcnQgdmFyIE1hdGggPSBfZ2xvYmFsLk1hdGg7XG5leHBvcnQgdmFyIERhdGUgPSBfZ2xvYmFsLkRhdGU7XG5cbnZhciBfZGV2TW9kZTogYm9vbGVhbiA9IHRydWU7XG52YXIgX21vZGVMb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2tNb2RlKCkge1xuICBfbW9kZUxvY2tlZCA9IHRydWU7XG59XG5cbi8qKlxuICogRGlzYWJsZSBBbmd1bGFyJ3MgZGV2ZWxvcG1lbnQgbW9kZSwgd2hpY2ggdHVybnMgb2ZmIGFzc2VydGlvbnMgYW5kIG90aGVyXG4gKiBjaGVja3Mgd2l0aGluIHRoZSBmcmFtZXdvcmsuXG4gKlxuICogT25lIGltcG9ydGFudCBhc3NlcnRpb24gdGhpcyBkaXNhYmxlcyB2ZXJpZmllcyB0aGF0IGEgY2hhbmdlIGRldGVjdGlvbiBwYXNzXG4gKiBkb2VzIG5vdCByZXN1bHQgaW4gYWRkaXRpb25hbCBjaGFuZ2VzIHRvIGFueSBiaW5kaW5ncyAoYWxzbyBrbm93biBhc1xuICogdW5pZGlyZWN0aW9uYWwgZGF0YSBmbG93KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVByb2RNb2RlKCkge1xuICBpZiAoX21vZGVMb2NrZWQpIHtcbiAgICAvLyBDYW5ub3QgdXNlIEJhc2VFeGNlcHRpb24gYXMgdGhhdCBlbmRzIHVwIGltcG9ydGluZyBmcm9tIGZhY2FkZS9sYW5nLlxuICAgIHRocm93ICdDYW5ub3QgZW5hYmxlIHByb2QgbW9kZSBhZnRlciBwbGF0Zm9ybSBzZXR1cC4nO1xuICB9XG4gIF9kZXZNb2RlID0gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRpb25zRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIF9kZXZNb2RlO1xufVxuXG4vLyBUT0RPOiByZW1vdmUgY2FsbHMgdG8gYXNzZXJ0IGluIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRcbi8vIE5vdGU6IENhbid0IGp1c3QgZXhwb3J0IHRoaXMgYW5kIGltcG9ydCBpbiBpbiBvdGhlciBmaWxlc1xuLy8gYXMgYGFzc2VydGAgaXMgYSByZXNlcnZlZCBrZXl3b3JkIGluIERhcnRcbl9nbG9iYWwuYXNzZXJ0ID0gZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbikge1xuICAvLyBUT0RPOiB0byBiZSBmaXhlZCBwcm9wZXJseSB2aWEgIzI4MzAsIG5vb3AgZm9yIG5vd1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBuZWVkZWQgb25seSB0byBwcm9wZXJseSBzdXBwb3J0IERhcnQncyBjb25zdCBleHByZXNzaW9uc1xuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3RzMmRhcnQvcHVsbC8xNTEgZm9yIG1vcmUgaW5mb1xuZXhwb3J0IGZ1bmN0aW9uIENPTlNUX0VYUFI8VD4oZXhwcjogVCk6IFQge1xuICByZXR1cm4gZXhwcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENPTlNUKCk6IENsYXNzRGVjb3JhdG9yICYgUHJvcGVydHlEZWNvcmF0b3Ige1xuICByZXR1cm4gKHRhcmdldCkgPT4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcmVzZW50KG9iajogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JsYW5rKG9iajogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHlwZShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNGdW5jdGlvbihvYmopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmdNYXAob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgKDxhbnk+X2dsb2JhbCkuUHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iaik6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ251bWJlcic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUob2JqKTogYm9vbGVhbiB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTihvYmoudmFsdWVPZigpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5KHRva2VuKTogc3RyaW5nIHtcbiAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBpZiAodG9rZW4gPT09IHVuZGVmaW5lZCB8fCB0b2tlbiA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnJyArIHRva2VuO1xuICB9XG5cbiAgaWYgKHRva2VuLm5hbWUpIHtcbiAgICByZXR1cm4gdG9rZW4ubmFtZTtcbiAgfVxuICBpZiAodG9rZW4ub3ZlcnJpZGRlbk5hbWUpIHtcbiAgICByZXR1cm4gdG9rZW4ub3ZlcnJpZGRlbk5hbWU7XG4gIH1cblxuICB2YXIgcmVzID0gdG9rZW4udG9TdHJpbmcoKTtcbiAgdmFyIG5ld0xpbmVJbmRleCA9IHJlcy5pbmRleE9mKFwiXFxuXCIpO1xuICByZXR1cm4gKG5ld0xpbmVJbmRleCA9PT0gLTEpID8gcmVzIDogcmVzLnN1YnN0cmluZygwLCBuZXdMaW5lSW5kZXgpO1xufVxuXG4vLyBzZXJpYWxpemUgLyBkZXNlcmlhbGl6ZSBlbnVtIGV4aXN0IG9ubHkgZm9yIGNvbnNpc3RlbmN5IHdpdGggZGFydCBBUElcbi8vIGVudW1zIGluIHR5cGVzY3JpcHQgZG9uJ3QgbmVlZCB0byBiZSBzZXJpYWxpemVkXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVFbnVtKHZhbCk6IG51bWJlciB7XG4gIHJldHVybiB2YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUVudW0odmFsLCB2YWx1ZXM6IE1hcDxudW1iZXIsIGFueT4pOiBhbnkge1xuICByZXR1cm4gdmFsO1xufVxuXG5leHBvcnQgY2xhc3MgU3RyaW5nV3JhcHBlciB7XG4gIHN0YXRpYyBmcm9tQ2hhckNvZGUoY29kZTogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7IH1cblxuICBzdGF0aWMgY2hhckNvZGVBdChzOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBudW1iZXIgeyByZXR1cm4gcy5jaGFyQ29kZUF0KGluZGV4KTsgfVxuXG4gIHN0YXRpYyBzcGxpdChzOiBzdHJpbmcsIHJlZ0V4cDogUmVnRXhwKTogc3RyaW5nW10geyByZXR1cm4gcy5zcGxpdChyZWdFeHApOyB9XG5cbiAgc3RhdGljIGVxdWFscyhzOiBzdHJpbmcsIHMyOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIHMgPT09IHMyOyB9XG5cbiAgc3RhdGljIHN0cmlwTGVmdChzOiBzdHJpbmcsIGNoYXJWYWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHMgJiYgcy5sZW5ndGgpIHtcbiAgICAgIHZhciBwb3MgPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzW2ldICE9IGNoYXJWYWwpIGJyZWFrO1xuICAgICAgICBwb3MrKztcbiAgICAgIH1cbiAgICAgIHMgPSBzLnN1YnN0cmluZyhwb3MpO1xuICAgIH1cbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIHN0YXRpYyBzdHJpcFJpZ2h0KHM6IHN0cmluZywgY2hhclZhbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocyAmJiBzLmxlbmd0aCkge1xuICAgICAgdmFyIHBvcyA9IHMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHNbaV0gIT0gY2hhclZhbCkgYnJlYWs7XG4gICAgICAgIHBvcy0tO1xuICAgICAgfVxuICAgICAgcyA9IHMuc3Vic3RyaW5nKDAsIHBvcyk7XG4gICAgfVxuICAgIHJldHVybiBzO1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2Uoczogc3RyaW5nLCBmcm9tOiBzdHJpbmcsIHJlcGxhY2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHMucmVwbGFjZShmcm9tLCByZXBsYWNlKTtcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlQWxsKHM6IHN0cmluZywgZnJvbTogUmVnRXhwLCByZXBsYWNlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzLnJlcGxhY2UoZnJvbSwgcmVwbGFjZSk7XG4gIH1cblxuICBzdGF0aWMgc2xpY2U8VD4oczogc3RyaW5nLCBmcm9tOiBudW1iZXIgPSAwLCB0bzogbnVtYmVyID0gbnVsbCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHMuc2xpY2UoZnJvbSwgdG8gPT09IG51bGwgPyB1bmRlZmluZWQgOiB0byk7XG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZUFsbE1hcHBlZChzOiBzdHJpbmcsIGZyb206IFJlZ0V4cCwgY2I6IEZ1bmN0aW9uKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKGZyb20sIGZ1bmN0aW9uKC4uLm1hdGNoZXMpIHtcbiAgICAgIC8vIFJlbW92ZSBvZmZzZXQgJiBzdHJpbmcgZnJvbSB0aGUgcmVzdWx0IGFycmF5XG4gICAgICBtYXRjaGVzLnNwbGljZSgtMiwgMik7XG4gICAgICAvLyBUaGUgY2FsbGJhY2sgcmVjZWl2ZXMgbWF0Y2gsIHAxLCAuLi4sIHBuXG4gICAgICByZXR1cm4gY2IobWF0Y2hlcyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY29udGFpbnMoczogc3RyaW5nLCBzdWJzdHI6IHN0cmluZyk6IGJvb2xlYW4geyByZXR1cm4gcy5pbmRleE9mKHN1YnN0cikgIT0gLTE7IH1cblxuICBzdGF0aWMgY29tcGFyZShhOiBzdHJpbmcsIGI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgaWYgKGEgPCBiKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3RyaW5nSm9pbmVyIHtcbiAgY29uc3RydWN0b3IocHVibGljIHBhcnRzID0gW10pIHt9XG5cbiAgYWRkKHBhcnQ6IHN0cmluZyk6IHZvaWQgeyB0aGlzLnBhcnRzLnB1c2gocGFydCk7IH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5wYXJ0cy5qb2luKFwiXCIpOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJQYXJzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG1lc3NhZ2U6IHN0cmluZykgeyBzdXBlcigpOyB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubWVzc2FnZTsgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJXcmFwcGVyIHtcbiAgc3RhdGljIHRvRml4ZWQobjogbnVtYmVyLCBmcmFjdGlvbkRpZ2l0czogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG4udG9GaXhlZChmcmFjdGlvbkRpZ2l0cyk7IH1cblxuICBzdGF0aWMgZXF1YWwoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBib29sZWFuIHsgcmV0dXJuIGEgPT09IGI7IH1cblxuICBzdGF0aWMgcGFyc2VJbnRBdXRvUmFkaXgodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICB2YXIgcmVzdWx0OiBudW1iZXIgPSBwYXJzZUludCh0ZXh0KTtcbiAgICBpZiAoaXNOYU4ocmVzdWx0KSkge1xuICAgICAgdGhyb3cgbmV3IE51bWJlclBhcnNlRXJyb3IoXCJJbnZhbGlkIGludGVnZXIgbGl0ZXJhbCB3aGVuIHBhcnNpbmcgXCIgKyB0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZUludCh0ZXh0OiBzdHJpbmcsIHJhZGl4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChyYWRpeCA9PSAxMCkge1xuICAgICAgaWYgKC9eKFxcLXxcXCspP1swLTldKyQvLnRlc3QodGV4dCkpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRleHQsIHJhZGl4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJhZGl4ID09IDE2KSB7XG4gICAgICBpZiAoL14oXFwtfFxcKyk/WzAtOUFCQ0RFRmFiY2RlZl0rJC8udGVzdCh0ZXh0KSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGV4dCwgcmFkaXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzdWx0OiBudW1iZXIgPSBwYXJzZUludCh0ZXh0LCByYWRpeCk7XG4gICAgICBpZiAoIWlzTmFOKHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IE51bWJlclBhcnNlRXJyb3IoXCJJbnZhbGlkIGludGVnZXIgbGl0ZXJhbCB3aGVuIHBhcnNpbmcgXCIgKyB0ZXh0ICsgXCIgaW4gYmFzZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXgpO1xuICB9XG5cbiAgLy8gVE9ETzogTmFOIGlzIGEgdmFsaWQgbGl0ZXJhbCBidXQgaXMgcmV0dXJuZWQgYnkgcGFyc2VGbG9hdCB0byBpbmRpY2F0ZSBhbiBlcnJvci5cbiAgc3RhdGljIHBhcnNlRmxvYXQodGV4dDogc3RyaW5nKTogbnVtYmVyIHsgcmV0dXJuIHBhcnNlRmxvYXQodGV4dCk7IH1cblxuICBzdGF0aWMgZ2V0IE5hTigpOiBudW1iZXIgeyByZXR1cm4gTmFOOyB9XG5cbiAgc3RhdGljIGlzTmFOKHZhbHVlOiBhbnkpOiBib29sZWFuIHsgcmV0dXJuIGlzTmFOKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBpc0ludGVnZXIodmFsdWU6IGFueSk6IGJvb2xlYW4geyByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSk7IH1cbn1cblxuZXhwb3J0IHZhciBSZWdFeHAgPSBfZ2xvYmFsLlJlZ0V4cDtcblxuZXhwb3J0IGNsYXNzIFJlZ0V4cFdyYXBwZXIge1xuICBzdGF0aWMgY3JlYXRlKHJlZ0V4cFN0cjogc3RyaW5nLCBmbGFnczogc3RyaW5nID0gJycpOiBSZWdFeHAge1xuICAgIGZsYWdzID0gZmxhZ3MucmVwbGFjZSgvZy9nLCAnJyk7XG4gICAgcmV0dXJuIG5ldyBfZ2xvYmFsLlJlZ0V4cChyZWdFeHBTdHIsIGZsYWdzICsgJ2cnKTtcbiAgfVxuICBzdGF0aWMgZmlyc3RNYXRjaChyZWdFeHA6IFJlZ0V4cCwgaW5wdXQ6IHN0cmluZyk6IFJlZ0V4cEV4ZWNBcnJheSB7XG4gICAgLy8gUmVzZXQgbXVsdGltYXRjaCByZWdleCBzdGF0ZVxuICAgIHJlZ0V4cC5sYXN0SW5kZXggPSAwO1xuICAgIHJldHVybiByZWdFeHAuZXhlYyhpbnB1dCk7XG4gIH1cbiAgc3RhdGljIHRlc3QocmVnRXhwOiBSZWdFeHAsIGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZWdFeHAubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gcmVnRXhwLnRlc3QoaW5wdXQpO1xuICB9XG4gIHN0YXRpYyBtYXRjaGVyKHJlZ0V4cDogUmVnRXhwLCBpbnB1dDogc3RyaW5nKToge1xuICAgIHJlOiBSZWdFeHA7XG4gICAgaW5wdXQ6IHN0cmluZ1xuICB9XG4gIHtcbiAgICAvLyBSZXNldCByZWdleCBzdGF0ZSBmb3IgdGhlIGNhc2VcbiAgICAvLyBzb21lb25lIGRpZCBub3QgbG9vcCBvdmVyIGFsbCBtYXRjaGVzXG4gICAgLy8gbGFzdCB0aW1lLlxuICAgIHJlZ0V4cC5sYXN0SW5kZXggPSAwO1xuICAgIHJldHVybiB7cmU6IHJlZ0V4cCwgaW5wdXQ6IGlucHV0fTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVnRXhwTWF0Y2hlcldyYXBwZXIge1xuICBzdGF0aWMgbmV4dChtYXRjaGVyOiB7XG4gICAgcmU6IFJlZ0V4cDtcbiAgICBpbnB1dDogc3RyaW5nXG4gIH0pOiBSZWdFeHBFeGVjQXJyYXkge1xuICAgIHJldHVybiBtYXRjaGVyLnJlLmV4ZWMobWF0Y2hlci5pbnB1dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uV3JhcHBlciB7XG4gIHN0YXRpYyBhcHBseShmbjogRnVuY3Rpb24sIHBvc0FyZ3M6IGFueSk6IGFueSB7IHJldHVybiBmbi5hcHBseShudWxsLCBwb3NBcmdzKTsgfVxufVxuXG4vLyBKUyBoYXMgTmFOICE9PSBOYU5cbmV4cG9ydCBmdW5jdGlvbiBsb29zZUlkZW50aWNhbChhLCBiKTogYm9vbGVhbiB7XG4gIHJldHVybiBhID09PSBiIHx8IHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBiID09PSBcIm51bWJlclwiICYmIGlzTmFOKGEpICYmIGlzTmFOKGIpO1xufVxuXG4vLyBKUyBjb25zaWRlcnMgTmFOIGlzIHRoZSBzYW1lIGFzIE5hTiBmb3IgbWFwIEtleSAod2hpbGUgTmFOICE9PSBOYU4gb3RoZXJ3aXNlKVxuLy8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcFxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcEtleTxUPih2YWx1ZTogVCk6IFQge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVCbGFuayhvYmo6IE9iamVjdCk6IGFueSB7XG4gIHJldHVybiBpc0JsYW5rKG9iaikgPyBudWxsIDogb2JqO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQm9vbChvYmo6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzQmxhbmsob2JqKSA/IGZhbHNlIDogb2JqO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNKc09iamVjdChvOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIG8gIT09IG51bGwgJiYgKHR5cGVvZiBvID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnQob2JqOiBFcnJvciB8IE9iamVjdCkge1xuICBjb25zb2xlLmxvZyhvYmopO1xufVxuXG4vLyBDYW4ndCBiZSBhbGwgdXBwZXJjYXNlIGFzIG91ciB0cmFuc3BpbGVyIHdvdWxkIHRoaW5rIGl0IGlzIGEgc3BlY2lhbCBkaXJlY3RpdmUuLi5cbmV4cG9ydCBjbGFzcyBKc29uIHtcbiAgc3RhdGljIHBhcnNlKHM6IHN0cmluZyk6IE9iamVjdCB7IHJldHVybiBfZ2xvYmFsLkpTT04ucGFyc2Uocyk7IH1cbiAgc3RhdGljIHN0cmluZ2lmeShkYXRhOiBPYmplY3QpOiBzdHJpbmcge1xuICAgIC8vIERhcnQgZG9lc24ndCB0YWtlIDMgYXJndW1lbnRzXG4gICAgcmV0dXJuIF9nbG9iYWwuSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGVXcmFwcGVyIHtcbiAgc3RhdGljIGNyZWF0ZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIgPSAxLCBkYXk6IG51bWJlciA9IDEsIGhvdXI6IG51bWJlciA9IDAsXG4gICAgICAgICAgICAgICAgbWludXRlczogbnVtYmVyID0gMCwgc2Vjb25kczogbnVtYmVyID0gMCwgbWlsbGlzZWNvbmRzOiBudW1iZXIgPSAwKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5LCBob3VyLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHMpO1xuICB9XG4gIHN0YXRpYyBmcm9tSVNPU3RyaW5nKHN0cjogc3RyaW5nKTogRGF0ZSB7IHJldHVybiBuZXcgRGF0ZShzdHIpOyB9XG4gIHN0YXRpYyBmcm9tTWlsbGlzKG1zOiBudW1iZXIpOiBEYXRlIHsgcmV0dXJuIG5ldyBEYXRlKG1zKTsgfVxuICBzdGF0aWMgdG9NaWxsaXMoZGF0ZTogRGF0ZSk6IG51bWJlciB7IHJldHVybiBkYXRlLmdldFRpbWUoKTsgfVxuICBzdGF0aWMgbm93KCk6IERhdGUgeyByZXR1cm4gbmV3IERhdGUoKTsgfVxuICBzdGF0aWMgdG9Kc29uKGRhdGU6IERhdGUpOiBzdHJpbmcgeyByZXR1cm4gZGF0ZS50b0pTT04oKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VmFsdWVPblBhdGgoZ2xvYmFsOiBhbnksIHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICB2YXIgcGFydHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHZhciBvYmo6IGFueSA9IGdsb2JhbDtcbiAgd2hpbGUgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICB2YXIgbmFtZSA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBpc1ByZXNlbnQob2JqW25hbWVdKSkge1xuICAgICAgb2JqID0gb2JqW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmogPSBvYmpbbmFtZV0gPSB7fTtcbiAgICB9XG4gIH1cbiAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHt9O1xuICB9XG4gIG9ialtwYXJ0cy5zaGlmdCgpXSA9IHZhbHVlO1xufVxuXG4vLyBXaGVuIFN5bWJvbC5pdGVyYXRvciBkb2Vzbid0IGV4aXN0LCByZXRyaWV2ZXMgdGhlIGtleSB1c2VkIGluIGVzNi1zaGltXG5kZWNsYXJlIHZhciBTeW1ib2w7XG52YXIgX3N5bWJvbEl0ZXJhdG9yID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBnZXRTeW1ib2xJdGVyYXRvcigpOiBzdHJpbmcgfCBzeW1ib2wge1xuICBpZiAoaXNCbGFuayhfc3ltYm9sSXRlcmF0b3IpKSB7XG4gICAgaWYgKGlzUHJlc2VudChTeW1ib2wpICYmIGlzUHJlc2VudChTeW1ib2wuaXRlcmF0b3IpKSB7XG4gICAgICBfc3ltYm9sSXRlcmF0b3IgPSBTeW1ib2wuaXRlcmF0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzNi1zaGltIHNwZWNpZmljIGxvZ2ljXG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE1hcC5wcm90b3R5cGUpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBpZiAoa2V5ICE9PSAnZW50cmllcycgJiYga2V5ICE9PSAnc2l6ZScgJiZcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGVba2V5XSA9PT0gTWFwLnByb3RvdHlwZVsnZW50cmllcyddKSB7XG4gICAgICAgICAgX3N5bWJvbEl0ZXJhdG9yID0ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBfc3ltYm9sSXRlcmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsRXhwcmVzc2lvbihzb3VyY2VVcmw6IHN0cmluZywgZXhwcjogc3RyaW5nLCBkZWNsYXJhdGlvbnM6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IGFueSB7XG4gIHZhciBmbkJvZHkgPSBgJHtkZWNsYXJhdGlvbnN9XFxucmV0dXJuICR7ZXhwcn1cXG4vLyMgc291cmNlVVJMPSR7c291cmNlVXJsfWA7XG4gIHZhciBmbkFyZ05hbWVzID0gW107XG4gIHZhciBmbkFyZ1ZhbHVlcyA9IFtdO1xuICBmb3IgKHZhciBhcmdOYW1lIGluIHZhcnMpIHtcbiAgICBmbkFyZ05hbWVzLnB1c2goYXJnTmFtZSk7XG4gICAgZm5BcmdWYWx1ZXMucHVzaCh2YXJzW2FyZ05hbWVdKTtcbiAgfVxuICByZXR1cm4gbmV3IEZ1bmN0aW9uKC4uLmZuQXJnTmFtZXMuY29uY2F0KGZuQm9keSkpKC4uLmZuQXJnVmFsdWVzKTtcbn1cbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SkipSelf = exports.Host = exports.Self = exports.Injectable = exports.Optional = exports.Inject = undefined;
	
	var _metadata = __webpack_require__(2);
	
	var _decorators = __webpack_require__(5);
	
	var Inject = exports.Inject = (0, _decorators.makeParamDecorator)(_metadata.InjectMetadata);
	var Optional = exports.Optional = (0, _decorators.makeParamDecorator)(_metadata.OptionalMetadata);
	var Injectable = exports.Injectable = (0, _decorators.makeDecorator)(_metadata.InjectableMetadata);
	var Self = exports.Self = (0, _decorators.makeParamDecorator)(_metadata.SelfMetadata);
	var Host = exports.Host = (0, _decorators.makeParamDecorator)(_metadata.HostMetadata);
	var SkipSelf = exports.SkipSelf = (0, _decorators.makeParamDecorator)(_metadata.SkipSelfMetadata);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Class = Class;
	exports.makeDecorator = makeDecorator;
	exports.makeParamDecorator = makeParamDecorator;
	exports.makePropDecorator = makePropDecorator;
	
	var _lang = __webpack_require__(3);
	
	var _nextClassId = 0;
	function extractAnnotation(annotation) {
	    if ((0, _lang.isFunction)(annotation) && annotation.hasOwnProperty('annotation')) {
	        annotation = annotation.annotation;
	    }
	    return annotation;
	}
	function applyParams(fnOrArray, key) {
	    if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function || fnOrArray === Number || fnOrArray === Array) {
	        throw new Error('Can not use native ' + (0, _lang.stringify)(fnOrArray) + ' as constructor');
	    }
	    if ((0, _lang.isFunction)(fnOrArray)) {
	        return fnOrArray;
	    } else if (fnOrArray instanceof Array) {
	        var annotations = fnOrArray;
	        var fn = fnOrArray[fnOrArray.length - 1];
	        if (!(0, _lang.isFunction)(fn)) {
	            throw new Error('Last position of Class method array must be Function in key ' + key + ' was \'' + (0, _lang.stringify)(fn) + '\'');
	        }
	        var annoLength = annotations.length - 1;
	        if (annoLength != fn.length) {
	            throw new Error('Number of annotations (' + annoLength + ') does not match number of arguments (' + fn.length + ') in the function: ' + (0, _lang.stringify)(fn));
	        }
	        var paramsAnnotations = [];
	        for (var i = 0, ii = annotations.length - 1; i < ii; i++) {
	            var paramAnnotations = [];
	            paramsAnnotations.push(paramAnnotations);
	            var annotation = annotations[i];
	            if (annotation instanceof Array) {
	                for (var j = 0; j < annotation.length; j++) {
	                    paramAnnotations.push(extractAnnotation(annotation[j]));
	                }
	            } else if ((0, _lang.isFunction)(annotation)) {
	                paramAnnotations.push(extractAnnotation(annotation));
	            } else {
	                paramAnnotations.push(annotation);
	            }
	        }
	        Reflect.defineMetadata('parameters', paramsAnnotations, fn);
	        return fn;
	    } else {
	        throw new Error('Only Function or Array is supported in Class definition for key \'' + key + '\' is \'' + (0, _lang.stringify)(fnOrArray) + '\'');
	    }
	}
	function Class(clsDef) {
	    var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
	    var proto = constructor.prototype;
	    if (clsDef.hasOwnProperty('extends')) {
	        if ((0, _lang.isFunction)(clsDef.extends)) {
	            constructor.prototype = proto = Object.create(clsDef.extends.prototype);
	        } else {
	            throw new Error('Class definition \'extends\' property must be a constructor function was: ' + (0, _lang.stringify)(clsDef.extends));
	        }
	    }
	    for (var key in clsDef) {
	        if (key != 'extends' && key != 'prototype' && clsDef.hasOwnProperty(key)) {
	            proto[key] = applyParams(clsDef[key], key);
	        }
	    }
	    if (this && this.annotations instanceof Array) {
	        Reflect.defineMetadata('annotations', this.annotations, constructor);
	    }
	    if (!constructor['name']) {
	        constructor['overriddenName'] = 'class' + _nextClassId++;
	    }
	    return constructor;
	}
	var Reflect = _lang.global.Reflect;
	if (!(Reflect && Reflect.getMetadata)) {
	    throw 'reflect-metadata shim is required when using class decorators';
	}
	function makeDecorator(annotationCls) {
	    var chainFn = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	    function DecoratorFactory(objOrType) {
	        var annotationInstance = new annotationCls(objOrType);
	        if (this instanceof annotationCls) {
	            return annotationInstance;
	        } else {
	            var chainAnnotation = (0, _lang.isFunction)(this) && this.annotations instanceof Array ? this.annotations : [];
	            chainAnnotation.push(annotationInstance);
	            var TypeDecorator = function TypeDecorator(cls) {
	                var annotations = Reflect.getOwnMetadata('annotations', cls);
	                annotations = annotations || [];
	                annotations.push(annotationInstance);
	                Reflect.defineMetadata('annotations', annotations, cls);
	                return cls;
	            };
	            TypeDecorator.annotations = chainAnnotation;
	            TypeDecorator.Class = Class;
	            if (chainFn) chainFn(TypeDecorator);
	            return TypeDecorator;
	        }
	    }
	    DecoratorFactory.prototype = Object.create(annotationCls.prototype);
	    return DecoratorFactory;
	}
	function makeParamDecorator(annotationCls) {
	    function ParamDecoratorFactory() {
	        var annotationInstance = Object.create(annotationCls.prototype);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        annotationCls.apply(annotationInstance, args);
	        if (this instanceof annotationCls) {
	            return annotationInstance;
	        } else {
	            ParamDecorator.annotation = annotationInstance;
	            return ParamDecorator;
	        }
	        function ParamDecorator(cls, unusedKey, index) {
	            var parameters = Reflect.getMetadata('parameters', cls);
	            parameters = parameters || [];
	            while (parameters.length <= index) {
	                parameters.push(null);
	            }
	            parameters[index] = parameters[index] || [];
	            var annotationsForParam = parameters[index];
	            annotationsForParam.push(annotationInstance);
	            Reflect.defineMetadata('parameters', parameters, cls);
	            return cls;
	        }
	    }
	    ParamDecoratorFactory.prototype = Object.create(annotationCls.prototype);
	    return ParamDecoratorFactory;
	}
	function makePropDecorator(decoratorCls) {
	    function PropDecoratorFactory() {
	        var decoratorInstance = Object.create(decoratorCls.prototype);
	
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }
	
	        decoratorCls.apply(decoratorInstance, args);
	        if (this instanceof decoratorCls) {
	            return decoratorInstance;
	        } else {
	            return function PropDecorator(target, name) {
	                var meta = Reflect.getOwnMetadata('propMetadata', target.constructor);
	                meta = meta || {};
	                meta[name] = meta[name] || [];
	                meta[name].unshift(decoratorInstance);
	                Reflect.defineMetadata('propMetadata', meta, target.constructor);
	            };
	        }
	    }
	    PropDecoratorFactory.prototype = Object.create(decoratorCls.prototype);
	    return PropDecoratorFactory;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.forwardRef = forwardRef;
	exports.resolveForwardRef = resolveForwardRef;
	
	var _lang = __webpack_require__(3);
	
	function forwardRef(forwardRefFn) {
	    forwardRefFn.__forward_ref__ = forwardRef;
	    forwardRefFn.toString = function () {
	        return (0, _lang.stringify)(this());
	    };
	    return forwardRefFn;
	}
	function resolveForwardRef(type) {
	    if ((0, _lang.isFunction)(type) && type.hasOwnProperty('__forward_ref__') && type.__forward_ref__ === forwardRef) {
	        return type();
	    } else {
	        return type;
	    }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Injector = exports.ProviderWithVisibility = exports.InjectorDynamicStrategy = exports.InjectorInlineStrategy = exports.ProtoInjector = exports.ProtoInjectorDynamicStrategy = exports.ProtoInjectorInlineStrategy = exports.Visibility = exports.UNDEFINED = undefined;
	
	var _collection = __webpack_require__(8);
	
	var _provider = __webpack_require__(9);
	
	var _exceptions = __webpack_require__(17);
	
	var _lang = __webpack_require__(3);
	
	var _key = __webpack_require__(15);
	
	var _metadata = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _MAX_CONSTRUCTION_COUNTER = 10;
	var UNDEFINED = exports.UNDEFINED = (0, _lang.CONST_EXPR)(new Object());
	var Visibility = exports.Visibility = undefined;
	(function (Visibility) {
	    Visibility[Visibility["Public"] = 0] = "Public";
	    Visibility[Visibility["Private"] = 1] = "Private";
	    Visibility[Visibility["PublicAndPrivate"] = 2] = "PublicAndPrivate";
	})(Visibility || (exports.Visibility = Visibility = {}));
	function canSee(src, dst) {
	    return src === dst || dst === Visibility.PublicAndPrivate || src === Visibility.PublicAndPrivate;
	}
	
	var ProtoInjectorInlineStrategy = exports.ProtoInjectorInlineStrategy = function () {
	    function ProtoInjectorInlineStrategy(protoEI, bwv) {
	        _classCallCheck(this, ProtoInjectorInlineStrategy);
	
	        this.provider0 = null;
	        this.provider1 = null;
	        this.provider2 = null;
	        this.provider3 = null;
	        this.provider4 = null;
	        this.provider5 = null;
	        this.provider6 = null;
	        this.provider7 = null;
	        this.provider8 = null;
	        this.provider9 = null;
	        this.keyId0 = null;
	        this.keyId1 = null;
	        this.keyId2 = null;
	        this.keyId3 = null;
	        this.keyId4 = null;
	        this.keyId5 = null;
	        this.keyId6 = null;
	        this.keyId7 = null;
	        this.keyId8 = null;
	        this.keyId9 = null;
	        this.visibility0 = null;
	        this.visibility1 = null;
	        this.visibility2 = null;
	        this.visibility3 = null;
	        this.visibility4 = null;
	        this.visibility5 = null;
	        this.visibility6 = null;
	        this.visibility7 = null;
	        this.visibility8 = null;
	        this.visibility9 = null;
	        var length = bwv.length;
	        if (length > 0) {
	            this.provider0 = bwv[0].provider;
	            this.keyId0 = bwv[0].getKeyId();
	            this.visibility0 = bwv[0].visibility;
	        }
	        if (length > 1) {
	            this.provider1 = bwv[1].provider;
	            this.keyId1 = bwv[1].getKeyId();
	            this.visibility1 = bwv[1].visibility;
	        }
	        if (length > 2) {
	            this.provider2 = bwv[2].provider;
	            this.keyId2 = bwv[2].getKeyId();
	            this.visibility2 = bwv[2].visibility;
	        }
	        if (length > 3) {
	            this.provider3 = bwv[3].provider;
	            this.keyId3 = bwv[3].getKeyId();
	            this.visibility3 = bwv[3].visibility;
	        }
	        if (length > 4) {
	            this.provider4 = bwv[4].provider;
	            this.keyId4 = bwv[4].getKeyId();
	            this.visibility4 = bwv[4].visibility;
	        }
	        if (length > 5) {
	            this.provider5 = bwv[5].provider;
	            this.keyId5 = bwv[5].getKeyId();
	            this.visibility5 = bwv[5].visibility;
	        }
	        if (length > 6) {
	            this.provider6 = bwv[6].provider;
	            this.keyId6 = bwv[6].getKeyId();
	            this.visibility6 = bwv[6].visibility;
	        }
	        if (length > 7) {
	            this.provider7 = bwv[7].provider;
	            this.keyId7 = bwv[7].getKeyId();
	            this.visibility7 = bwv[7].visibility;
	        }
	        if (length > 8) {
	            this.provider8 = bwv[8].provider;
	            this.keyId8 = bwv[8].getKeyId();
	            this.visibility8 = bwv[8].visibility;
	        }
	        if (length > 9) {
	            this.provider9 = bwv[9].provider;
	            this.keyId9 = bwv[9].getKeyId();
	            this.visibility9 = bwv[9].visibility;
	        }
	    }
	
	    _createClass(ProtoInjectorInlineStrategy, [{
	        key: 'getProviderAtIndex',
	        value: function getProviderAtIndex(index) {
	            if (index == 0) return this.provider0;
	            if (index == 1) return this.provider1;
	            if (index == 2) return this.provider2;
	            if (index == 3) return this.provider3;
	            if (index == 4) return this.provider4;
	            if (index == 5) return this.provider5;
	            if (index == 6) return this.provider6;
	            if (index == 7) return this.provider7;
	            if (index == 8) return this.provider8;
	            if (index == 9) return this.provider9;
	            throw new _exceptions.OutOfBoundsError(index);
	        }
	    }, {
	        key: 'createInjectorStrategy',
	        value: function createInjectorStrategy(injector) {
	            return new InjectorInlineStrategy(injector, this);
	        }
	    }]);
	
	    return ProtoInjectorInlineStrategy;
	}();
	
	var ProtoInjectorDynamicStrategy = exports.ProtoInjectorDynamicStrategy = function () {
	    function ProtoInjectorDynamicStrategy(protoInj, bwv) {
	        _classCallCheck(this, ProtoInjectorDynamicStrategy);
	
	        var len = bwv.length;
	        this.providers = _collection.ListWrapper.createFixedSize(len);
	        this.keyIds = _collection.ListWrapper.createFixedSize(len);
	        this.visibilities = _collection.ListWrapper.createFixedSize(len);
	        for (var i = 0; i < len; i++) {
	            this.providers[i] = bwv[i].provider;
	            this.keyIds[i] = bwv[i].getKeyId();
	            this.visibilities[i] = bwv[i].visibility;
	        }
	    }
	
	    _createClass(ProtoInjectorDynamicStrategy, [{
	        key: 'getProviderAtIndex',
	        value: function getProviderAtIndex(index) {
	            if (index < 0 || index >= this.providers.length) {
	                throw new _exceptions.OutOfBoundsError(index);
	            }
	            return this.providers[index];
	        }
	    }, {
	        key: 'createInjectorStrategy',
	        value: function createInjectorStrategy(ei) {
	            return new InjectorDynamicStrategy(this, ei);
	        }
	    }]);
	
	    return ProtoInjectorDynamicStrategy;
	}();
	
	var ProtoInjector = exports.ProtoInjector = function () {
	    function ProtoInjector(bwv) {
	        _classCallCheck(this, ProtoInjector);
	
	        this.numberOfProviders = bwv.length;
	        this._strategy = bwv.length > _MAX_CONSTRUCTION_COUNTER ? new ProtoInjectorDynamicStrategy(this, bwv) : new ProtoInjectorInlineStrategy(this, bwv);
	    }
	
	    _createClass(ProtoInjector, [{
	        key: 'getProviderAtIndex',
	        value: function getProviderAtIndex(index) {
	            return this._strategy.getProviderAtIndex(index);
	        }
	    }], [{
	        key: 'fromResolvedProviders',
	        value: function fromResolvedProviders(providers) {
	            var bd = providers.map(function (b) {
	                return new ProviderWithVisibility(b, Visibility.Public);
	            });
	            return new ProtoInjector(bd);
	        }
	    }]);
	
	    return ProtoInjector;
	}();
	
	var InjectorInlineStrategy = exports.InjectorInlineStrategy = function () {
	    function InjectorInlineStrategy(injector, protoStrategy) {
	        _classCallCheck(this, InjectorInlineStrategy);
	
	        this.injector = injector;
	        this.protoStrategy = protoStrategy;
	        this.obj0 = UNDEFINED;
	        this.obj1 = UNDEFINED;
	        this.obj2 = UNDEFINED;
	        this.obj3 = UNDEFINED;
	        this.obj4 = UNDEFINED;
	        this.obj5 = UNDEFINED;
	        this.obj6 = UNDEFINED;
	        this.obj7 = UNDEFINED;
	        this.obj8 = UNDEFINED;
	        this.obj9 = UNDEFINED;
	    }
	
	    _createClass(InjectorInlineStrategy, [{
	        key: 'resetConstructionCounter',
	        value: function resetConstructionCounter() {
	            this.injector._constructionCounter = 0;
	        }
	    }, {
	        key: 'instantiateProvider',
	        value: function instantiateProvider(provider, visibility) {
	            return this.injector._new(provider, visibility);
	        }
	    }, {
	        key: 'getObjByKeyId',
	        value: function getObjByKeyId(keyId, visibility) {
	            var p = this.protoStrategy;
	            var inj = this.injector;
	            if (p.keyId0 === keyId && canSee(p.visibility0, visibility)) {
	                if (this.obj0 === UNDEFINED) {
	                    this.obj0 = inj._new(p.provider0, p.visibility0);
	                }
	                return this.obj0;
	            }
	            if (p.keyId1 === keyId && canSee(p.visibility1, visibility)) {
	                if (this.obj1 === UNDEFINED) {
	                    this.obj1 = inj._new(p.provider1, p.visibility1);
	                }
	                return this.obj1;
	            }
	            if (p.keyId2 === keyId && canSee(p.visibility2, visibility)) {
	                if (this.obj2 === UNDEFINED) {
	                    this.obj2 = inj._new(p.provider2, p.visibility2);
	                }
	                return this.obj2;
	            }
	            if (p.keyId3 === keyId && canSee(p.visibility3, visibility)) {
	                if (this.obj3 === UNDEFINED) {
	                    this.obj3 = inj._new(p.provider3, p.visibility3);
	                }
	                return this.obj3;
	            }
	            if (p.keyId4 === keyId && canSee(p.visibility4, visibility)) {
	                if (this.obj4 === UNDEFINED) {
	                    this.obj4 = inj._new(p.provider4, p.visibility4);
	                }
	                return this.obj4;
	            }
	            if (p.keyId5 === keyId && canSee(p.visibility5, visibility)) {
	                if (this.obj5 === UNDEFINED) {
	                    this.obj5 = inj._new(p.provider5, p.visibility5);
	                }
	                return this.obj5;
	            }
	            if (p.keyId6 === keyId && canSee(p.visibility6, visibility)) {
	                if (this.obj6 === UNDEFINED) {
	                    this.obj6 = inj._new(p.provider6, p.visibility6);
	                }
	                return this.obj6;
	            }
	            if (p.keyId7 === keyId && canSee(p.visibility7, visibility)) {
	                if (this.obj7 === UNDEFINED) {
	                    this.obj7 = inj._new(p.provider7, p.visibility7);
	                }
	                return this.obj7;
	            }
	            if (p.keyId8 === keyId && canSee(p.visibility8, visibility)) {
	                if (this.obj8 === UNDEFINED) {
	                    this.obj8 = inj._new(p.provider8, p.visibility8);
	                }
	                return this.obj8;
	            }
	            if (p.keyId9 === keyId && canSee(p.visibility9, visibility)) {
	                if (this.obj9 === UNDEFINED) {
	                    this.obj9 = inj._new(p.provider9, p.visibility9);
	                }
	                return this.obj9;
	            }
	            return UNDEFINED;
	        }
	    }, {
	        key: 'getObjAtIndex',
	        value: function getObjAtIndex(index) {
	            if (index == 0) return this.obj0;
	            if (index == 1) return this.obj1;
	            if (index == 2) return this.obj2;
	            if (index == 3) return this.obj3;
	            if (index == 4) return this.obj4;
	            if (index == 5) return this.obj5;
	            if (index == 6) return this.obj6;
	            if (index == 7) return this.obj7;
	            if (index == 8) return this.obj8;
	            if (index == 9) return this.obj9;
	            throw new _exceptions.OutOfBoundsError(index);
	        }
	    }, {
	        key: 'getMaxNumberOfObjects',
	        value: function getMaxNumberOfObjects() {
	            return _MAX_CONSTRUCTION_COUNTER;
	        }
	    }]);
	
	    return InjectorInlineStrategy;
	}();
	
	var InjectorDynamicStrategy = exports.InjectorDynamicStrategy = function () {
	    function InjectorDynamicStrategy(protoStrategy, injector) {
	        _classCallCheck(this, InjectorDynamicStrategy);
	
	        this.protoStrategy = protoStrategy;
	        this.injector = injector;
	        this.objs = _collection.ListWrapper.createFixedSize(protoStrategy.providers.length);
	        _collection.ListWrapper.fill(this.objs, UNDEFINED);
	    }
	
	    _createClass(InjectorDynamicStrategy, [{
	        key: 'resetConstructionCounter',
	        value: function resetConstructionCounter() {
	            this.injector._constructionCounter = 0;
	        }
	    }, {
	        key: 'instantiateProvider',
	        value: function instantiateProvider(provider, visibility) {
	            return this.injector._new(provider, visibility);
	        }
	    }, {
	        key: 'getObjByKeyId',
	        value: function getObjByKeyId(keyId, visibility) {
	            var p = this.protoStrategy;
	            for (var i = 0; i < p.keyIds.length; i++) {
	                if (p.keyIds[i] === keyId && canSee(p.visibilities[i], visibility)) {
	                    if (this.objs[i] === UNDEFINED) {
	                        this.objs[i] = this.injector._new(p.providers[i], p.visibilities[i]);
	                    }
	                    return this.objs[i];
	                }
	            }
	            return UNDEFINED;
	        }
	    }, {
	        key: 'getObjAtIndex',
	        value: function getObjAtIndex(index) {
	            if (index < 0 || index >= this.objs.length) {
	                throw new _exceptions.OutOfBoundsError(index);
	            }
	            return this.objs[index];
	        }
	    }, {
	        key: 'getMaxNumberOfObjects',
	        value: function getMaxNumberOfObjects() {
	            return this.objs.length;
	        }
	    }]);
	
	    return InjectorDynamicStrategy;
	}();
	
	var ProviderWithVisibility = exports.ProviderWithVisibility = function () {
	    function ProviderWithVisibility(provider, visibility) {
	        _classCallCheck(this, ProviderWithVisibility);
	
	        this.provider = provider;
	        this.visibility = visibility;
	    }
	
	    _createClass(ProviderWithVisibility, [{
	        key: 'getKeyId',
	        value: function getKeyId() {
	            return this.provider.key.id;
	        }
	    }]);
	
	    return ProviderWithVisibility;
	}();
	
	var Injector = exports.Injector = function () {
	    function Injector(_proto) {
	        var _parent = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	        var _isHostBoundary = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	        var _depProvider = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
	        var _debugContext = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];
	
	        _classCallCheck(this, Injector);
	
	        this._isHostBoundary = _isHostBoundary;
	        this._depProvider = _depProvider;
	        this._debugContext = _debugContext;
	        this._constructionCounter = 0;
	        this._proto = _proto;
	        this._parent = _parent;
	        this._strategy = _proto._strategy.createInjectorStrategy(this);
	    }
	
	    _createClass(Injector, [{
	        key: 'debugContext',
	        value: function debugContext() {
	            return this._debugContext();
	        }
	    }, {
	        key: 'get',
	        value: function get(token) {
	            return this._getByKey(_key.Key.get(token), null, null, false, Visibility.PublicAndPrivate);
	        }
	    }, {
	        key: 'getOptional',
	        value: function getOptional(token) {
	            return this._getByKey(_key.Key.get(token), null, null, true, Visibility.PublicAndPrivate);
	        }
	    }, {
	        key: 'getAt',
	        value: function getAt(index) {
	            return this._strategy.getObjAtIndex(index);
	        }
	    }, {
	        key: 'resolveAndCreateChild',
	        value: function resolveAndCreateChild(providers) {
	            var resolvedProviders = Injector.resolve(providers);
	            return this.createChildFromResolved(resolvedProviders);
	        }
	    }, {
	        key: 'createChildFromResolved',
	        value: function createChildFromResolved(providers) {
	            var bd = providers.map(function (b) {
	                return new ProviderWithVisibility(b, Visibility.Public);
	            });
	            var proto = new ProtoInjector(bd);
	            var inj = new Injector(proto);
	            inj._parent = this;
	            return inj;
	        }
	    }, {
	        key: 'resolveAndInstantiate',
	        value: function resolveAndInstantiate(provider) {
	            return this.instantiateResolved(Injector.resolve([provider])[0]);
	        }
	    }, {
	        key: 'instantiateResolved',
	        value: function instantiateResolved(provider) {
	            return this._instantiateProvider(provider, Visibility.PublicAndPrivate);
	        }
	    }, {
	        key: '_new',
	        value: function _new(provider, visibility) {
	            if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
	                throw new _exceptions.CyclicDependencyError(this, provider.key);
	            }
	            return this._instantiateProvider(provider, visibility);
	        }
	    }, {
	        key: '_instantiateProvider',
	        value: function _instantiateProvider(provider, visibility) {
	            if (provider.multiProvider) {
	                var res = _collection.ListWrapper.createFixedSize(provider.resolvedFactories.length);
	                for (var i = 0; i < provider.resolvedFactories.length; ++i) {
	                    res[i] = this._instantiate(provider, provider.resolvedFactories[i], visibility);
	                }
	                return res;
	            } else {
	                return this._instantiate(provider, provider.resolvedFactories[0], visibility);
	            }
	        }
	    }, {
	        key: '_instantiate',
	        value: function _instantiate(provider, resolvedFactory, visibility) {
	            var factory = resolvedFactory.factory;
	            var deps = resolvedFactory.dependencies;
	            var length = deps.length;
	            var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19;
	            try {
	                d0 = length > 0 ? this._getByDependency(provider, deps[0], visibility) : null;
	                d1 = length > 1 ? this._getByDependency(provider, deps[1], visibility) : null;
	                d2 = length > 2 ? this._getByDependency(provider, deps[2], visibility) : null;
	                d3 = length > 3 ? this._getByDependency(provider, deps[3], visibility) : null;
	                d4 = length > 4 ? this._getByDependency(provider, deps[4], visibility) : null;
	                d5 = length > 5 ? this._getByDependency(provider, deps[5], visibility) : null;
	                d6 = length > 6 ? this._getByDependency(provider, deps[6], visibility) : null;
	                d7 = length > 7 ? this._getByDependency(provider, deps[7], visibility) : null;
	                d8 = length > 8 ? this._getByDependency(provider, deps[8], visibility) : null;
	                d9 = length > 9 ? this._getByDependency(provider, deps[9], visibility) : null;
	                d10 = length > 10 ? this._getByDependency(provider, deps[10], visibility) : null;
	                d11 = length > 11 ? this._getByDependency(provider, deps[11], visibility) : null;
	                d12 = length > 12 ? this._getByDependency(provider, deps[12], visibility) : null;
	                d13 = length > 13 ? this._getByDependency(provider, deps[13], visibility) : null;
	                d14 = length > 14 ? this._getByDependency(provider, deps[14], visibility) : null;
	                d15 = length > 15 ? this._getByDependency(provider, deps[15], visibility) : null;
	                d16 = length > 16 ? this._getByDependency(provider, deps[16], visibility) : null;
	                d17 = length > 17 ? this._getByDependency(provider, deps[17], visibility) : null;
	                d18 = length > 18 ? this._getByDependency(provider, deps[18], visibility) : null;
	                d19 = length > 19 ? this._getByDependency(provider, deps[19], visibility) : null;
	            } catch (e) {
	                if (e instanceof _exceptions.AbstractProviderError || e instanceof _exceptions.InstantiationError) {
	                    e.addKey(this, provider.key);
	                }
	                throw e;
	            }
	            var obj;
	            try {
	                switch (length) {
	                    case 0:
	                        obj = factory();
	                        break;
	                    case 1:
	                        obj = factory(d0);
	                        break;
	                    case 2:
	                        obj = factory(d0, d1);
	                        break;
	                    case 3:
	                        obj = factory(d0, d1, d2);
	                        break;
	                    case 4:
	                        obj = factory(d0, d1, d2, d3);
	                        break;
	                    case 5:
	                        obj = factory(d0, d1, d2, d3, d4);
	                        break;
	                    case 6:
	                        obj = factory(d0, d1, d2, d3, d4, d5);
	                        break;
	                    case 7:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6);
	                        break;
	                    case 8:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
	                        break;
	                    case 9:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
	                        break;
	                    case 10:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
	                        break;
	                    case 11:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
	                        break;
	                    case 12:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
	                        break;
	                    case 13:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
	                        break;
	                    case 14:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
	                        break;
	                    case 15:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
	                        break;
	                    case 16:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
	                        break;
	                    case 17:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
	                        break;
	                    case 18:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
	                        break;
	                    case 19:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
	                        break;
	                    case 20:
	                        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
	                        break;
	                }
	            } catch (e) {
	                throw new _exceptions.InstantiationError(this, e, e.stack, provider.key);
	            }
	            return obj;
	        }
	    }, {
	        key: '_getByDependency',
	        value: function _getByDependency(provider, dep, providerVisibility) {
	            var special = (0, _lang.isPresent)(this._depProvider) ? this._depProvider.getDependency(this, provider, dep) : UNDEFINED;
	            if (special !== UNDEFINED) {
	                return special;
	            } else {
	                return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional, providerVisibility);
	            }
	        }
	    }, {
	        key: '_getByKey',
	        value: function _getByKey(key, lowerBoundVisibility, upperBoundVisibility, optional, providerVisibility) {
	            if (key === INJECTOR_KEY) {
	                return this;
	            }
	            if (upperBoundVisibility instanceof _metadata.SelfMetadata) {
	                return this._getByKeySelf(key, optional, providerVisibility);
	            } else if (upperBoundVisibility instanceof _metadata.HostMetadata) {
	                return this._getByKeyHost(key, optional, providerVisibility, lowerBoundVisibility);
	            } else {
	                return this._getByKeyDefault(key, optional, providerVisibility, lowerBoundVisibility);
	            }
	        }
	    }, {
	        key: '_throwOrNull',
	        value: function _throwOrNull(key, optional) {
	            if (optional) {
	                return null;
	            } else {
	                throw new _exceptions.NoProviderError(this, key);
	            }
	        }
	    }, {
	        key: '_getByKeySelf',
	        value: function _getByKeySelf(key, optional, providerVisibility) {
	            var obj = this._strategy.getObjByKeyId(key.id, providerVisibility);
	            return obj !== UNDEFINED ? obj : this._throwOrNull(key, optional);
	        }
	    }, {
	        key: '_getByKeyHost',
	        value: function _getByKeyHost(key, optional, providerVisibility, lowerBoundVisibility) {
	            var inj = this;
	            if (lowerBoundVisibility instanceof _metadata.SkipSelfMetadata) {
	                if (inj._isHostBoundary) {
	                    return this._getPrivateDependency(key, optional, inj);
	                } else {
	                    inj = inj._parent;
	                }
	            }
	            while (inj != null) {
	                var obj = inj._strategy.getObjByKeyId(key.id, providerVisibility);
	                if (obj !== UNDEFINED) return obj;
	                if ((0, _lang.isPresent)(inj._parent) && inj._isHostBoundary) {
	                    return this._getPrivateDependency(key, optional, inj);
	                } else {
	                    inj = inj._parent;
	                }
	            }
	            return this._throwOrNull(key, optional);
	        }
	    }, {
	        key: '_getPrivateDependency',
	        value: function _getPrivateDependency(key, optional, inj) {
	            var obj = inj._parent._strategy.getObjByKeyId(key.id, Visibility.Private);
	            return obj !== UNDEFINED ? obj : this._throwOrNull(key, optional);
	        }
	    }, {
	        key: '_getByKeyDefault',
	        value: function _getByKeyDefault(key, optional, providerVisibility, lowerBoundVisibility) {
	            var inj = this;
	            if (lowerBoundVisibility instanceof _metadata.SkipSelfMetadata) {
	                providerVisibility = inj._isHostBoundary ? Visibility.PublicAndPrivate : Visibility.Public;
	                inj = inj._parent;
	            }
	            while (inj != null) {
	                var obj = inj._strategy.getObjByKeyId(key.id, providerVisibility);
	                if (obj !== UNDEFINED) return obj;
	                providerVisibility = inj._isHostBoundary ? Visibility.PublicAndPrivate : Visibility.Public;
	                inj = inj._parent;
	            }
	            return this._throwOrNull(key, optional);
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return this.displayName;
	        }
	    }, {
	        key: 'hostBoundary',
	        get: function get() {
	            return this._isHostBoundary;
	        }
	    }, {
	        key: 'parent',
	        get: function get() {
	            return this._parent;
	        }
	    }, {
	        key: 'internalStrategy',
	        get: function get() {
	            return this._strategy;
	        }
	    }, {
	        key: 'displayName',
	        get: function get() {
	            return 'Injector(providers: [' + _mapProviders(this, function (b) {
	                return ' "' + b.key.displayName + '" ';
	            }).join(", ") + '])';
	        }
	    }], [{
	        key: 'resolve',
	        value: function resolve(providers) {
	            return (0, _provider.resolveProviders)(providers);
	        }
	    }, {
	        key: 'resolveAndCreate',
	        value: function resolveAndCreate(providers) {
	            var resolvedProviders = Injector.resolve(providers);
	            return Injector.fromResolvedProviders(resolvedProviders);
	        }
	    }, {
	        key: 'fromResolvedProviders',
	        value: function fromResolvedProviders(providers) {
	            return new Injector(ProtoInjector.fromResolvedProviders(providers));
	        }
	    }, {
	        key: 'fromResolvedBindings',
	        value: function fromResolvedBindings(providers) {
	            return Injector.fromResolvedProviders(providers);
	        }
	    }]);
	
	    return Injector;
	}();
	
	var INJECTOR_KEY = _key.Key.get(Injector);
	function _mapProviders(injector, fn) {
	    var res = [];
	    for (var i = 0; i < injector._proto.numberOfProviders; ++i) {
	        res.push(fn(injector._proto.getProviderAtIndex(i)));
	    }
	    return res;
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	})();
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	})();
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    return ListWrapper;
	})();
	exports.ListWrapper = ListWrapper;
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	})();
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6WyJjcmVhdGVNYXBGcm9tUGFpcnMiLCJjcmVhdGVNYXBBbmRQb3B1bGF0ZUZyb21QYWlycyIsImNyZWF0ZU1hcEZyb21NYXAiLCJjcmVhdGVNYXBBbmRQb3B1bGF0ZUZyb21NYXAiLCJfY2xlYXJWYWx1ZXMiLCJfY2xlYXJWYWx1ZXNXaXRoRm9yZUVhY2giLCJjcmVhdGVBcnJheUZyb21NYXAiLCJjcmVhdGVBcnJheUZyb21NYXBXaXRoRm9yZWFjaCIsIk1hcFdyYXBwZXIiLCJNYXBXcmFwcGVyLmNvbnN0cnVjdG9yIiwiTWFwV3JhcHBlci5jbG9uZSIsIk1hcFdyYXBwZXIuY3JlYXRlRnJvbVN0cmluZ01hcCIsIk1hcFdyYXBwZXIudG9TdHJpbmdNYXAiLCJNYXBXcmFwcGVyLmNyZWF0ZUZyb21QYWlycyIsIk1hcFdyYXBwZXIuY2xlYXJWYWx1ZXMiLCJNYXBXcmFwcGVyLml0ZXJhYmxlIiwiTWFwV3JhcHBlci5rZXlzIiwiTWFwV3JhcHBlci52YWx1ZXMiLCJTdHJpbmdNYXBXcmFwcGVyIiwiU3RyaW5nTWFwV3JhcHBlci5jb25zdHJ1Y3RvciIsIlN0cmluZ01hcFdyYXBwZXIuY3JlYXRlIiwiU3RyaW5nTWFwV3JhcHBlci5jb250YWlucyIsIlN0cmluZ01hcFdyYXBwZXIuZ2V0IiwiU3RyaW5nTWFwV3JhcHBlci5zZXQiLCJTdHJpbmdNYXBXcmFwcGVyLmtleXMiLCJTdHJpbmdNYXBXcmFwcGVyLmlzRW1wdHkiLCJTdHJpbmdNYXBXcmFwcGVyLmRlbGV0ZSIsIlN0cmluZ01hcFdyYXBwZXIuZm9yRWFjaCIsIlN0cmluZ01hcFdyYXBwZXIubWVyZ2UiLCJTdHJpbmdNYXBXcmFwcGVyLmVxdWFscyIsIkxpc3RXcmFwcGVyIiwiTGlzdFdyYXBwZXIuY29uc3RydWN0b3IiLCJMaXN0V3JhcHBlci5jcmVhdGVGaXhlZFNpemUiLCJMaXN0V3JhcHBlci5jcmVhdGVHcm93YWJsZVNpemUiLCJMaXN0V3JhcHBlci5jbG9uZSIsIkxpc3RXcmFwcGVyLmZvckVhY2hXaXRoSW5kZXgiLCJMaXN0V3JhcHBlci5maXJzdCIsIkxpc3RXcmFwcGVyLmxhc3QiLCJMaXN0V3JhcHBlci5pbmRleE9mIiwiTGlzdFdyYXBwZXIuY29udGFpbnMiLCJMaXN0V3JhcHBlci5yZXZlcnNlZCIsIkxpc3RXcmFwcGVyLmNvbmNhdCIsIkxpc3RXcmFwcGVyLmluc2VydCIsIkxpc3RXcmFwcGVyLnJlbW92ZUF0IiwiTGlzdFdyYXBwZXIucmVtb3ZlQWxsIiwiTGlzdFdyYXBwZXIucmVtb3ZlIiwiTGlzdFdyYXBwZXIuY2xlYXIiLCJMaXN0V3JhcHBlci5pc0VtcHR5IiwiTGlzdFdyYXBwZXIuZmlsbCIsIkxpc3RXcmFwcGVyLmVxdWFscyIsIkxpc3RXcmFwcGVyLnNsaWNlIiwiTGlzdFdyYXBwZXIuc3BsaWNlIiwiTGlzdFdyYXBwZXIuc29ydCIsIkxpc3RXcmFwcGVyLnRvU3RyaW5nIiwiTGlzdFdyYXBwZXIudG9KU09OIiwiTGlzdFdyYXBwZXIubWF4aW11bSIsImlzTGlzdExpa2VJdGVyYWJsZSIsIml0ZXJhdGVMaXN0TGlrZSIsImNyZWF0ZVNldEZyb21MaXN0IiwiY3JlYXRlU2V0QW5kUG9wdWxhdGVGcm9tTGlzdCIsIlNldFdyYXBwZXIiLCJTZXRXcmFwcGVyLmNvbnN0cnVjdG9yIiwiU2V0V3JhcHBlci5jcmVhdGVGcm9tTGlzdCIsIlNldFdyYXBwZXIuaGFzIiwiU2V0V3JhcHBlci5kZWxldGUiXSwibWFwcGluZ3MiOiJBQUFBLHFCQU9PLDBCQUEwQixDQUFDLENBQUE7QUFFdkIsV0FBRyxHQUFHLGFBQU0sQ0FBQyxHQUFHLENBQUM7QUFDakIsV0FBRyxHQUFHLGFBQU0sQ0FBQyxHQUFHLENBQUM7QUFFNUIsNEVBQTRFO0FBQzVFLHNFQUFzRTtBQUN0RSxJQUFJLGtCQUFrQixHQUFvQyxDQUFDO0lBQ3pELElBQUksQ0FBQztRQUNI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QSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDNUJBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ3JCQSxDQUFDQTtRQUNIQSxDQUFDQTtRQUVEQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNwQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzVCQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNyQkEsQ0FBQ0E7UUFDSEEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDWEEsQ0FBQ0E7SUFFTVYsdUJBQU1BLEdBQWJBLFVBQWlCQSxFQUFzQkEsRUFBRUEsRUFBc0JBO1FBQzdEVyxJQUFJQSxFQUFFQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUN6QkEsSUFBSUEsRUFBRUEsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDekJBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLE1BQU1BLElBQUlBLEVBQUVBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQzNCQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUNmQSxDQUFDQTtRQUNEQSxJQUFJQSxHQUFHQSxDQUFDQTtRQUNSQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUNuQ0EsR0FBR0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0Es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LElBQVlFLE1BQU1BLENBQUNBLGlCQUFpQkEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDdEVGLGNBQUdBLEdBQVZBLFVBQWNBLENBQVNBLEVBQUVBLEdBQU1BLElBQWFHLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ3pESCxpQkFBTUEsR0FBYkEsVUFBaUJBLENBQVNBLEVBQUVBLENBQUlBLElBQUlJLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ3BESixpQkFBQ0E7QUFBREEsQ0FBQ0EsQUFKRCxJQUlDO0FBSlksa0JBQVUsYUFJdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGlzSnNPYmplY3QsXG4gIGdsb2JhbCxcbiAgaXNQcmVzZW50LFxuICBpc0JsYW5rLFxuICBpc0FycmF5LFxuICBnZXRTeW1ib2xJdGVyYXRvclxufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5leHBvcnQgdmFyIE1hcCA9IGdsb2JhbC5NYXA7XG5leHBvcnQgdmFyIFNldCA9IGdsb2JhbC5TZXQ7XG5cbi8vIFNhZmFyaSBhbmQgSW50ZXJuZXQgRXhwbG9yZXIgZG8gbm90IHN1cHBvcnQgdGhlIGl0ZXJhYmxlIHBhcmFtZXRlciB0byB0aGVcbi8vIE1hcCBjb25zdHJ1Y3Rvci4gIFdlIHdvcmsgYXJvdW5kIHRoYXQgYnkgbWFudWFsbHkgYWRkaW5nIHRoZSBpdGVtcy5cbnZhciBjcmVhdGVNYXBGcm9tUGFpcnM6IHsocGFpcnM6IGFueVtdKTogTWFwPGFueSwgYW55Pn0gPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgaWYgKG5ldyBNYXAoPGFueT5bWzEsIDJdXSkuc2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZU1hcEZyb21QYWlycyhwYWlyczogYW55W10pOiBNYXA8YW55LCBhbnk+IHsgcmV0dXJuIG5ldyBNYXAocGFpcnMpOyB9O1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVNYXBBbmRQb3B1bGF0ZUZyb21QYWlycyhwYWlyczogYW55W10pOiBNYXA8YW55LCBhbnk+IHtcbiAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFwO1xuICB9O1xufSkoKTtcbnZhciBjcmVhdGVNYXBGcm9tTWFwOiB7KG06IE1hcDxhbnksIGFueT4pOiBNYXA8YW55LCBhbnk+fSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBpZiAobmV3IE1hcCg8YW55Pm5ldyBNYXAoKSkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVNYXBGcm9tTWFwKG06IE1hcDxhbnksIGFueT4pOiBNYXA8YW55LCBhbnk+IHsgcmV0dXJuIG5ldyBNYXAoPGFueT5tKTsgfTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlTWFwQW5kUG9wdWxhdGVGcm9tTWFwKG06IE1hcDxhbnksIGFueT4pOiBNYXA8YW55LCBhbnk+IHtcbiAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICAgIG0uZm9yRWFjaCgodiwgaykgPT4geyBtYXAuc2V0KGssIHYpOyB9KTtcbiAgICByZXR1cm4gbWFwO1xuICB9O1xufSkoKTtcbnZhciBfY2xlYXJWYWx1ZXM6IHsobTogTWFwPGFueSwgYW55Pil9ID0gKGZ1bmN0aW9uKCkge1xuICBpZiAoKDxhbnk+KG5ldyBNYXAoKSkua2V5cygpKS5uZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIF9jbGVhclZhbHVlcyhtOiBNYXA8YW55LCBhbnk+KSB7XG4gICAgICB2YXIga2V5SXRlcmF0b3IgPSBtLmtleXMoKTtcbiAgICAgIHZhciBrO1xuICAgICAgd2hpbGUgKCEoKGsgPSAoPGFueT5rZXlJdGVyYXRvcikubmV4dCgpKS5kb25lKSkge1xuICAgICAgICBtLnNldChrLnZhbHVlLCBudWxsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiBfY2xlYXJWYWx1ZXNXaXRoRm9yZUVhY2gobTogTWFwPGFueSwgYW55Pikge1xuICAgICAgbS5mb3JFYWNoKCh2LCBrKSA9PiB7IG0uc2V0KGssIG51bGwpOyB9KTtcbiAgICB9O1xuICB9XG59KSgpO1xuLy8gU2FmYXJpIGRvZXNuJ3QgaW1wbGVtZW50IE1hcEl0ZXJhdG9yLm5leHQoKSwgd2hpY2ggaXMgdXNlZCBpcyBUcmFjZXVyJ3MgcG9seWZpbGwgb2YgQXJyYXkuZnJvbVxuLy8gVE9ETyhtbGF2YWwpOiByZW1vdmUgdGhlIHdvcmsgYXJvdW5kIG9uY2Ugd2UgaGF2ZSBhIHdvcmtpbmcgcG9seWZpbGwgb2YgQXJyYXkuZnJvbVxudmFyIF9hcnJheUZyb21NYXA6IHsobTogTWFwPGFueSwgYW55PiwgZ2V0VmFsdWVzOiBib29sZWFuKTogYW55W119ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIGlmICgoPGFueT4obmV3IE1hcCgpKS52YWx1ZXMoKSkubmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZUFycmF5RnJvbU1hcChtOiBNYXA8YW55LCBhbnk+LCBnZXRWYWx1ZXM6IGJvb2xlYW4pOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiBnZXRWYWx1ZXMgPyAoPGFueT5BcnJheSkuZnJvbShtLnZhbHVlcygpKSA6ICg8YW55PkFycmF5KS5mcm9tKG0ua2V5cygpKTtcbiAgICAgIH07XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZUFycmF5RnJvbU1hcFdpdGhGb3JlYWNoKG06IE1hcDxhbnksIGFueT4sIGdldFZhbHVlczogYm9vbGVhbik6IGFueVtdIHtcbiAgICB2YXIgcmVzID0gTGlzdFdyYXBwZXIuY3JlYXRlRml4ZWRTaXplKG0uc2l6ZSksIGkgPSAwO1xuICAgIG0uZm9yRWFjaCgodiwgaykgPT4ge1xuICAgICAgcmVzW2ldID0gZ2V0VmFsdWVzID8gdiA6IGs7XG4gICAgICBpKys7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBjbGFzcyBNYXBXcmFwcGVyIHtcbiAgc3RhdGljIGNsb25lPEssIFY+KG06IE1hcDxLLCBWPik6IE1hcDxLLCBWPiB7IHJldHVybiBjcmVhdGVNYXBGcm9tTWFwKG0pOyB9XG4gIHN0YXRpYyBjcmVhdGVGcm9tU3RyaW5nTWFwPFQ+KHN0cmluZ01hcDoge1trZXk6IHN0cmluZ106IFR9KTogTWFwPHN0cmluZywgVD4ge1xuICAgIHZhciByZXN1bHQgPSBuZXcgTWFwPHN0cmluZywgVD4oKTtcbiAgICBmb3IgKHZhciBwcm9wIGluIHN0cmluZ01hcCkge1xuICAgICAgcmVzdWx0LnNldChwcm9wLCBzdHJpbmdNYXBbcHJvcF0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHN0YXRpYyB0b1N0cmluZ01hcDxUPihtOiBNYXA8c3RyaW5nLCBUPik6IHtba2V5OiBzdHJpbmddOiBUfSB7XG4gICAgdmFyIHI6IHtba2V5OiBzdHJpbmddOiBUfSA9IHt9O1xuICAgIG0uZm9yRWFjaCgodiwgaykgPT4gcltrXSA9IHYpO1xuICAgIHJldHVybiByO1xuICB9XG4gIHN0YXRpYyBjcmVhdGVGcm9tUGFpcnMocGFpcnM6IGFueVtdKTogTWFwPGFueSwgYW55PiB7IHJldHVybiBjcmVhdGVNYXBGcm9tUGFpcnMocGFpcnMpOyB9XG4gIHN0YXRpYyBjbGVhclZhbHVlcyhtOiBNYXA8YW55LCBhbnk+KSB7IF9jbGVhclZhbHVlcyhtKTsgfVxuICBzdGF0aWMgaXRlcmFibGU8VD4obTogVCk6IFQgeyByZXR1cm4gbTsgfVxuICBzdGF0aWMga2V5czxLPihtOiBNYXA8SywgYW55Pik6IEtbXSB7IHJldHVybiBfYXJyYXlGcm9tTWFwKG0sIGZhbHNlKTsgfVxuICBzdGF0aWMgdmFsdWVzPFY+KG06IE1hcDxhbnksIFY+KTogVltdIHsgcmV0dXJuIF9hcnJheUZyb21NYXAobSwgdHJ1ZSk7IH1cbn1cblxuLyoqXG4gKiBXcmFwcyBKYXZhc2NyaXB0IE9iamVjdHNcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmluZ01hcFdyYXBwZXIge1xuICBzdGF0aWMgY3JlYXRlKCk6IHtbazogLyphbnkqLyBzdHJpbmddOiBhbnl9IHtcbiAgICAvLyBOb3RlOiBXZSBhcmUgbm90IHVzaW5nIE9iamVjdC5jcmVhdGUobnVsbCkgaGVyZSBkdWUgdG9cbiAgICAvLyBwZXJmb3JtYW5jZSFcbiAgICAvLyBodHRwOi8vanNwZXJmLmNvbS9uZzItb2JqZWN0LWNyZWF0ZS1udWxsXG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHN0YXRpYyBjb250YWlucyhtYXA6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtYXAuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgfVxuICBzdGF0aWMgZ2V0PFY+KG1hcDoge1trZXk6IHN0cmluZ106IFZ9LCBrZXk6IHN0cmluZyk6IFYge1xuICAgIHJldHVybiBtYXAuaGFzT3duUHJvcGVydHkoa2V5KSA/IG1hcFtrZXldIDogdW5kZWZpbmVkO1xuICB9XG4gIHN0YXRpYyBzZXQ8Vj4obWFwOiB7W2tleTogc3RyaW5nXTogVn0sIGtleTogc3RyaW5nLCB2YWx1ZTogVikgeyBtYXBba2V5XSA9IHZhbHVlOyB9XG4gIHN0YXRpYyBrZXlzKG1hcDoge1trZXk6IHN0cmluZ106IGFueX0pOiBzdHJpbmdbXSB7IHJldHVybiBPYmplY3Qua2V5cyhtYXApOyB9XG4gIHN0YXRpYyBpc0VtcHR5KG1hcDoge1trZXk6IHN0cmluZ106IGFueX0pOiBib29sZWFuIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIG1hcCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBzdGF0aWMgZGVsZXRlIChtYXA6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBrZXk6IHN0cmluZykgeyBkZWxldGUgbWFwW2tleV07IH1cbiAgc3RhdGljIGZvckVhY2g8SywgVj4obWFwOiB7W2tleTogc3RyaW5nXTogVn0sIGNhbGxiYWNrOiAvKihWLCBLKSA9PiB2b2lkKi8gRnVuY3Rpb24pIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIG1hcCkge1xuICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBjYWxsYmFjayhtYXBbcHJvcF0sIHByb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBtZXJnZTxWPihtMToge1trZXk6IHN0cmluZ106IFZ9LCBtMjoge1trZXk6IHN0cmluZ106IFZ9KToge1trZXk6IHN0cmluZ106IFZ9IHtcbiAgICB2YXIgbToge1trZXk6IHN0cmluZ106IFZ9ID0ge307XG5cbiAgICBmb3IgKHZhciBhdHRyIGluIG0xKSB7XG4gICAgICBpZiAobTEuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgbVthdHRyXSA9IG0xW2F0dHJdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGF0dHIgaW4gbTIpIHtcbiAgICAgIGlmIChtMi5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICBtW2F0dHJdID0gbTJbYXR0cl07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG07XG4gIH1cblxuICBzdGF0aWMgZXF1YWxzPFY+KG0xOiB7W2tleTogc3RyaW5nXTogVn0sIG0yOiB7W2tleTogc3RyaW5nXTogVn0pOiBib29sZWFuIHtcbiAgICB2YXIgazEgPSBPYmplY3Qua2V5cyhtMSk7XG4gICAgdmFyIGsyID0gT2JqZWN0LmtleXMobTIpO1xuICAgIGlmIChrMS5sZW5ndGggIT0gazIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBrZXk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrMS5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gazFbaV07XG4gICAgICBpZiAobTFba2V5XSAhPT0gbTJba2V5XSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQSBib29sZWFuLXZhbHVlZCBmdW5jdGlvbiBvdmVyIGEgdmFsdWUsIHBvc3NpYmx5IGluY2x1ZGluZyBjb250ZXh0IGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgdGhhdCB2YWx1ZSdzIHBvc2l0aW9uIGluIGFuIGFycmF5LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFByZWRpY2F0ZTxUPiB7ICh2YWx1ZTogVCwgaW5kZXg/OiBudW1iZXIsIGFycmF5PzogVFtdKTogYm9vbGVhbjsgfVxuXG5leHBvcnQgY2xhc3MgTGlzdFdyYXBwZXIge1xuICAvLyBKUyBoYXMgbm8gd2F5IHRvIGV4cHJlc3MgYSBzdGF0aWNhbGx5IGZpeGVkIHNpemUgbGlzdCwgYnV0IGRhcnQgZG9lcyBzbyB3ZVxuICAvLyBrZWVwIGJvdGggbWV0aG9kcy5cbiAgc3RhdGljIGNyZWF0ZUZpeGVkU2l6ZShzaXplOiBudW1iZXIpOiBhbnlbXSB7IHJldHVybiBuZXcgQXJyYXkoc2l6ZSk7IH1cbiAgc3RhdGljIGNyZWF0ZUdyb3dhYmxlU2l6ZShzaXplOiBudW1iZXIpOiBhbnlbXSB7IHJldHVybiBuZXcgQXJyYXkoc2l6ZSk7IH1cbiAgc3RhdGljIGNsb25lPFQ+KGFycmF5OiBUW10pOiBUW10geyByZXR1cm4gYXJyYXkuc2xpY2UoMCk7IH1cbiAgc3RhdGljIGZvckVhY2hXaXRoSW5kZXg8VD4oYXJyYXk6IFRbXSwgZm46ICh0OiBULCBuOiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBmbihhcnJheVtpXSwgaSk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBmaXJzdDxUPihhcnJheTogVFtdKTogVCB7XG4gICAgaWYgKCFhcnJheSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGFycmF5WzBdO1xuICB9XG4gIHN0YXRpYyBsYXN0PFQ+KGFycmF5OiBUW10pOiBUIHtcbiAgICBpZiAoIWFycmF5IHx8IGFycmF5Lmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gIH1cbiAgc3RhdGljIGluZGV4T2Y8VD4oYXJyYXk6IFRbXSwgdmFsdWU6IFQsIHN0YXJ0SW5kZXg6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlLCBzdGFydEluZGV4KTtcbiAgfVxuICBzdGF0aWMgY29udGFpbnM8VD4obGlzdDogVFtdLCBlbDogVCk6IGJvb2xlYW4geyByZXR1cm4gbGlzdC5pbmRleE9mKGVsKSAhPT0gLTE7IH1cbiAgc3RhdGljIHJldmVyc2VkPFQ+KGFycmF5OiBUW10pOiBUW10ge1xuICAgIHZhciBhID0gTGlzdFdyYXBwZXIuY2xvbmUoYXJyYXkpO1xuICAgIHJldHVybiBhLnJldmVyc2UoKTtcbiAgfVxuICBzdGF0aWMgY29uY2F0KGE6IGFueVtdLCBiOiBhbnlbXSk6IGFueVtdIHsgcmV0dXJuIGEuY29uY2F0KGIpOyB9XG4gIHN0YXRpYyBpbnNlcnQ8VD4obGlzdDogVFtdLCBpbmRleDogbnVtYmVyLCB2YWx1ZTogVCkgeyBsaXN0LnNwbGljZShpbmRleCwgMCwgdmFsdWUpOyB9XG4gIHN0YXRpYyByZW1vdmVBdDxUPihsaXN0OiBUW10sIGluZGV4OiBudW1iZXIpOiBUIHtcbiAgICB2YXIgcmVzID0gbGlzdFtpbmRleF07XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgc3RhdGljIHJlbW92ZUFsbDxUPihsaXN0OiBUW10sIGl0ZW1zOiBUW10pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2YoaXRlbXNbaV0pO1xuICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgcmVtb3ZlPFQ+KGxpc3Q6IFRbXSwgZWw6IFQpOiBib29sZWFuIHtcbiAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2YoZWwpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YXRpYyBjbGVhcihsaXN0OiBhbnlbXSkgeyBsaXN0Lmxlbmd0aCA9IDA7IH1cbiAgc3RhdGljIGlzRW1wdHkobGlzdDogYW55W10pOiBib29sZWFuIHsgcmV0dXJuIGxpc3QubGVuZ3RoID09IDA7IH1cbiAgc3RhdGljIGZpbGwobGlzdDogYW55W10sIHZhbHVlOiBhbnksIHN0YXJ0OiBudW1iZXIgPSAwLCBlbmQ6IG51bWJlciA9IG51bGwpIHtcbiAgICBsaXN0LmZpbGwodmFsdWUsIHN0YXJ0LCBlbmQgPT09IG51bGwgPyBsaXN0Lmxlbmd0aCA6IGVuZCk7XG4gIH1cbiAgc3RhdGljIGVxdWFscyhhOiBhbnlbXSwgYjogYW55W10pOiBib29sZWFuIHtcbiAgICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHN0YXRpYyBzbGljZTxUPihsOiBUW10sIGZyb206IG51bWJlciA9IDAsIHRvOiBudW1iZXIgPSBudWxsKTogVFtdIHtcbiAgICByZXR1cm4gbC5zbGljZShmcm9tLCB0byA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IHRvKTtcbiAgfVxuICBzdGF0aWMgc3BsaWNlPFQ+KGw6IFRbXSwgZnJvbTogbnVtYmVyLCBsZW5ndGg6IG51bWJlcik6IFRbXSB7IHJldHVybiBsLnNwbGljZShmcm9tLCBsZW5ndGgpOyB9XG4gIHN0YXRpYyBzb3J0PFQ+KGw6IFRbXSwgY29tcGFyZUZuPzogKGE6IFQsIGI6IFQpID0+IG51bWJlcikge1xuICAgIGlmIChpc1ByZXNlbnQoY29tcGFyZUZuKSkge1xuICAgICAgbC5zb3J0KGNvbXBhcmVGbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwuc29ydCgpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgdG9TdHJpbmc8VD4obDogVFtdKTogc3RyaW5nIHsgcmV0dXJuIGwudG9TdHJpbmcoKTsgfVxuICBzdGF0aWMgdG9KU09OPFQ+KGw6IFRbXSk6IHN0cmluZyB7IHJldHVybiBKU09OLnN0cmluZ2lmeShsKTsgfVxuXG4gIHN0YXRpYyBtYXhpbXVtPFQ+KGxpc3Q6IFRbXSwgcHJlZGljYXRlOiAodDogVCkgPT4gbnVtYmVyKTogVCB7XG4gICAgaWYgKGxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgc29sdXRpb24gPSBudWxsO1xuICAgIHZhciBtYXhWYWx1ZSA9IC1JbmZpbml0eTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjYW5kaWRhdGUgPSBsaXN0W2luZGV4XTtcbiAgICAgIGlmIChpc0JsYW5rKGNhbmRpZGF0ZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB2YXIgY2FuZGlkYXRlVmFsdWUgPSBwcmVkaWNhdGUoY2FuZGlkYXRlKTtcbiAgICAgIGlmIChjYW5kaWRhdGVWYWx1ZSA+IG1heFZhbHVlKSB7XG4gICAgICAgIHNvbHV0aW9uID0gY2FuZGlkYXRlO1xuICAgICAgICBtYXhWYWx1ZSA9IGNhbmRpZGF0ZVZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc29sdXRpb247XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGlzdExpa2VJdGVyYWJsZShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICBpZiAoIWlzSnNPYmplY3Qob2JqKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNBcnJheShvYmopIHx8XG4gICAgICAgICAoIShvYmogaW5zdGFuY2VvZiBNYXApICYmICAgICAgLy8gSlMgTWFwIGFyZSBpdGVyYWJsZXMgYnV0IHJldHVybiBlbnRyaWVzIGFzIFtrLCB2XVxuICAgICAgICAgIGdldFN5bWJvbEl0ZXJhdG9yKCkgaW4gb2JqKTsgIC8vIEpTIEl0ZXJhYmxlIGhhdmUgYSBTeW1ib2wuaXRlcmF0b3IgcHJvcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXRlcmF0ZUxpc3RMaWtlKG9iajogYW55LCBmbjogRnVuY3Rpb24pIHtcbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmbihvYmpbaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3IgPSBvYmpbZ2V0U3ltYm9sSXRlcmF0b3IoKV0oKTtcbiAgICB2YXIgaXRlbTtcbiAgICB3aGlsZSAoISgoaXRlbSA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkpIHtcbiAgICAgIGZuKGl0ZW0udmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBTYWZhcmkgYW5kIEludGVybmV0IEV4cGxvcmVyIGRvIG5vdCBzdXBwb3J0IHRoZSBpdGVyYWJsZSBwYXJhbWV0ZXIgdG8gdGhlXG4vLyBTZXQgY29uc3RydWN0b3IuICBXZSB3b3JrIGFyb3VuZCB0aGF0IGJ5IG1hbnVhbGx5IGFkZGluZyB0aGUgaXRlbXMuXG52YXIgY3JlYXRlU2V0RnJvbUxpc3Q6IHsobHN0OiBhbnlbXSk6IFNldDxhbnk+fSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHRlc3QgPSBuZXcgU2V0KFsxLCAyLCAzXSk7XG4gIGlmICh0ZXN0LnNpemUgPT09IDMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlU2V0RnJvbUxpc3QobHN0OiBhbnlbXSk6IFNldDxhbnk+IHsgcmV0dXJuIG5ldyBTZXQobHN0KTsgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlU2V0QW5kUG9wdWxhdGVGcm9tTGlzdChsc3Q6IGFueVtdKTogU2V0PGFueT4ge1xuICAgICAgdmFyIHJlcyA9IG5ldyBTZXQobHN0KTtcbiAgICAgIGlmIChyZXMuc2l6ZSAhPT0gbHN0Lmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlcy5hZGQobHN0W2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICB9XG59KSgpO1xuZXhwb3J0IGNsYXNzIFNldFdyYXBwZXIge1xuICBzdGF0aWMgY3JlYXRlRnJvbUxpc3Q8VD4obHN0OiBUW10pOiBTZXQ8VD4geyByZXR1cm4gY3JlYXRlU2V0RnJvbUxpc3QobHN0KTsgfVxuICBzdGF0aWMgaGFzPFQ+KHM6IFNldDxUPiwga2V5OiBUKTogYm9vbGVhbiB7IHJldHVybiBzLmhhcyhrZXkpOyB9XG4gIHN0YXRpYyBkZWxldGU8Sz4obTogU2V0PEs+LCBrOiBLKSB7IG0uZGVsZXRlKGspOyB9XG59XG4iXX0=

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ProviderBuilder = exports.ResolvedFactory = exports.ResolvedProvider_ = exports.Binding = exports.Provider = exports.Dependency = undefined;
	exports.bind = bind;
	exports.provide = provide;
	exports.resolveFactory = resolveFactory;
	exports.resolveProvider = resolveProvider;
	exports.resolveProviders = resolveProviders;
	exports.mergeResolvedProviders = mergeResolvedProviders;
	
	var _lang = __webpack_require__(3);
	
	var _exceptions = __webpack_require__(10);
	
	var _collection = __webpack_require__(8);
	
	var _reflection = __webpack_require__(12);
	
	var _key = __webpack_require__(15);
	
	var _metadata = __webpack_require__(2);
	
	var _exceptions2 = __webpack_require__(17);
	
	var _forward_ref = __webpack_require__(6);
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = undefined && undefined.__metadata || function (k, v) {
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	
	var Dependency = exports.Dependency = function () {
	    function Dependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
	        _classCallCheck(this, Dependency);
	
	        this.key = key;
	        this.optional = optional;
	        this.lowerBoundVisibility = lowerBoundVisibility;
	        this.upperBoundVisibility = upperBoundVisibility;
	        this.properties = properties;
	    }
	
	    _createClass(Dependency, null, [{
	        key: "fromKey",
	        value: function fromKey(key) {
	            return new Dependency(key, false, null, null, []);
	        }
	    }]);
	
	    return Dependency;
	}();
	
	var _EMPTY_LIST = (0, _lang.CONST_EXPR)([]);
	var Provider = exports.Provider = function () {
	    function Provider(token, _ref) {
	        var useClass = _ref.useClass;
	        var useValue = _ref.useValue;
	        var useExisting = _ref.useExisting;
	        var useFactory = _ref.useFactory;
	        var deps = _ref.deps;
	        var multi = _ref.multi;
	
	        _classCallCheck(this, Provider);
	
	        this.token = token;
	        this.useClass = useClass;
	        this.useValue = useValue;
	        this.useExisting = useExisting;
	        this.useFactory = useFactory;
	        this.dependencies = deps;
	        this._multi = multi;
	    }
	
	    _createClass(Provider, [{
	        key: "multi",
	        get: function get() {
	            return (0, _lang.normalizeBool)(this._multi);
	        }
	    }]);
	
	    return Provider;
	}();
	exports.Provider = Provider = __decorate([(0, _lang.CONST)(), __metadata('design:paramtypes', [Object, Object])], Provider);
	var Binding = exports.Binding = function (_Provider) {
	    _inherits(Binding, _Provider);
	
	    function Binding(token, _ref2) {
	        var toClass = _ref2.toClass;
	        var toValue = _ref2.toValue;
	        var toAlias = _ref2.toAlias;
	        var toFactory = _ref2.toFactory;
	        var deps = _ref2.deps;
	        var multi = _ref2.multi;
	
	        _classCallCheck(this, Binding);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Binding).call(this, token, {
	            useClass: toClass,
	            useValue: toValue,
	            useExisting: toAlias,
	            useFactory: toFactory,
	            deps: deps,
	            multi: multi
	        }));
	    }
	
	    _createClass(Binding, [{
	        key: "toClass",
	        get: function get() {
	            return this.useClass;
	        }
	    }, {
	        key: "toAlias",
	        get: function get() {
	            return this.useExisting;
	        }
	    }, {
	        key: "toFactory",
	        get: function get() {
	            return this.useFactory;
	        }
	    }, {
	        key: "toValue",
	        get: function get() {
	            return this.useValue;
	        }
	    }]);
	
	    return Binding;
	}(Provider);
	exports.Binding = Binding = __decorate([(0, _lang.CONST)(), __metadata('design:paramtypes', [Object, Object])], Binding);
	
	var ResolvedProvider_ = exports.ResolvedProvider_ = function () {
	    function ResolvedProvider_(key, resolvedFactories, multiProvider) {
	        _classCallCheck(this, ResolvedProvider_);
	
	        this.key = key;
	        this.resolvedFactories = resolvedFactories;
	        this.multiProvider = multiProvider;
	    }
	
	    _createClass(ResolvedProvider_, [{
	        key: "resolvedFactory",
	        get: function get() {
	            return this.resolvedFactories[0];
	        }
	    }]);
	
	    return ResolvedProvider_;
	}();
	
	var ResolvedFactory = exports.ResolvedFactory = function ResolvedFactory(factory, dependencies) {
	    _classCallCheck(this, ResolvedFactory);
	
	    this.factory = factory;
	    this.dependencies = dependencies;
	};
	
	function bind(token) {
	    return new ProviderBuilder(token);
	}
	function provide(token, _ref3) {
	    var useClass = _ref3.useClass;
	    var useValue = _ref3.useValue;
	    var useExisting = _ref3.useExisting;
	    var useFactory = _ref3.useFactory;
	    var deps = _ref3.deps;
	    var multi = _ref3.multi;
	
	    return new Provider(token, {
	        useClass: useClass,
	        useValue: useValue,
	        useExisting: useExisting,
	        useFactory: useFactory,
	        deps: deps,
	        multi: multi
	    });
	}
	
	var ProviderBuilder = exports.ProviderBuilder = function () {
	    function ProviderBuilder(token) {
	        _classCallCheck(this, ProviderBuilder);
	
	        this.token = token;
	    }
	
	    _createClass(ProviderBuilder, [{
	        key: "toClass",
	        value: function toClass(type) {
	            if (!(0, _lang.isType)(type)) {
	                throw new _exceptions.BaseException("Trying to create a class provider but \"" + (0, _lang.stringify)(type) + "\" is not a class!");
	            }
	            return new Provider(this.token, { useClass: type });
	        }
	    }, {
	        key: "toValue",
	        value: function toValue(value) {
	            return new Provider(this.token, { useValue: value });
	        }
	    }, {
	        key: "toAlias",
	        value: function toAlias(aliasToken) {
	            if ((0, _lang.isBlank)(aliasToken)) {
	                throw new _exceptions.BaseException("Can not alias " + (0, _lang.stringify)(this.token) + " to a blank value!");
	            }
	            return new Provider(this.token, { useExisting: aliasToken });
	        }
	    }, {
	        key: "toFactory",
	        value: function toFactory(factory, dependencies) {
	            if (!(0, _lang.isFunction)(factory)) {
	                throw new _exceptions.BaseException("Trying to create a factory provider but \"" + (0, _lang.stringify)(factory) + "\" is not a function!");
	            }
	            return new Provider(this.token, { useFactory: factory, deps: dependencies });
	        }
	    }]);
	
	    return ProviderBuilder;
	}();
	
	function resolveFactory(provider) {
	    var factoryFn;
	    var resolvedDeps;
	    if ((0, _lang.isPresent)(provider.useClass)) {
	        var useClass = (0, _forward_ref.resolveForwardRef)(provider.useClass);
	        factoryFn = _reflection.reflector.factory(useClass);
	        resolvedDeps = _dependenciesFor(useClass);
	    } else if ((0, _lang.isPresent)(provider.useExisting)) {
	        factoryFn = function factoryFn(aliasInstance) {
	            return aliasInstance;
	        };
	        resolvedDeps = [Dependency.fromKey(_key.Key.get(provider.useExisting))];
	    } else if ((0, _lang.isPresent)(provider.useFactory)) {
	        factoryFn = provider.useFactory;
	        resolvedDeps = _constructDependencies(provider.useFactory, provider.dependencies);
	    } else {
	        factoryFn = function factoryFn() {
	            return provider.useValue;
	        };
	        resolvedDeps = _EMPTY_LIST;
	    }
	    return new ResolvedFactory(factoryFn, resolvedDeps);
	}
	function resolveProvider(provider) {
	    return new ResolvedProvider_(_key.Key.get(provider.token), [resolveFactory(provider)], provider.multi);
	}
	function resolveProviders(providers) {
	    var normalized = _normalizeProviders(providers, []);
	    var resolved = normalized.map(resolveProvider);
	    return _collection.MapWrapper.values(mergeResolvedProviders(resolved, new Map()));
	}
	function mergeResolvedProviders(providers, normalizedProvidersMap) {
	    for (var i = 0; i < providers.length; i++) {
	        var provider = providers[i];
	        var existing = normalizedProvidersMap.get(provider.key.id);
	        if ((0, _lang.isPresent)(existing)) {
	            if (provider.multiProvider !== existing.multiProvider) {
	                throw new _exceptions2.MixingMultiProvidersWithRegularProvidersError(existing, provider);
	            }
	            if (provider.multiProvider) {
	                for (var j = 0; j < provider.resolvedFactories.length; j++) {
	                    existing.resolvedFactories.push(provider.resolvedFactories[j]);
	                }
	            } else {
	                normalizedProvidersMap.set(provider.key.id, provider);
	            }
	        } else {
	            var resolvedProvider;
	            if (provider.multiProvider) {
	                resolvedProvider = new ResolvedProvider_(provider.key, _collection.ListWrapper.clone(provider.resolvedFactories), provider.multiProvider);
	            } else {
	                resolvedProvider = provider;
	            }
	            normalizedProvidersMap.set(provider.key.id, resolvedProvider);
	        }
	    }
	    return normalizedProvidersMap;
	}
	function _normalizeProviders(providers, res) {
	    providers.forEach(function (b) {
	        if (b instanceof _lang.Type) {
	            res.push(provide(b, { useClass: b }));
	        } else if (b instanceof Provider) {
	            res.push(b);
	        } else if (b instanceof Array) {
	            _normalizeProviders(b, res);
	        } else if (b instanceof ProviderBuilder) {
	            throw new _exceptions2.InvalidProviderError(b.token);
	        } else {
	            throw new _exceptions2.InvalidProviderError(b);
	        }
	    });
	    return res;
	}
	function _constructDependencies(factoryFunction, dependencies) {
	    if ((0, _lang.isBlank)(dependencies)) {
	        return _dependenciesFor(factoryFunction);
	    } else {
	        var params = dependencies.map(function (t) {
	            return [t];
	        });
	        return dependencies.map(function (t) {
	            return _extractToken(factoryFunction, t, params);
	        });
	    }
	}
	function _dependenciesFor(typeOrFunc) {
	    var params = _reflection.reflector.parameters(typeOrFunc);
	    if ((0, _lang.isBlank)(params)) return [];
	    if (params.some(_lang.isBlank)) {
	        throw new _exceptions2.NoAnnotationError(typeOrFunc, params);
	    }
	    return params.map(function (p) {
	        return _extractToken(typeOrFunc, p, params);
	    });
	}
	function _extractToken(typeOrFunc, metadata, params) {
	    var depProps = [];
	    var token = null;
	    var optional = false;
	    if (!(0, _lang.isArray)(metadata)) {
	        if (metadata instanceof _metadata.InjectMetadata) {
	            return _createDependency(metadata.token, optional, null, null, depProps);
	        } else {
	            return _createDependency(metadata, optional, null, null, depProps);
	        }
	    }
	    var lowerBoundVisibility = null;
	    var upperBoundVisibility = null;
	    for (var i = 0; i < metadata.length; ++i) {
	        var paramMetadata = metadata[i];
	        if (paramMetadata instanceof _lang.Type) {
	            token = paramMetadata;
	        } else if (paramMetadata instanceof _metadata.InjectMetadata) {
	            token = paramMetadata.token;
	        } else if (paramMetadata instanceof _metadata.OptionalMetadata) {
	            optional = true;
	        } else if (paramMetadata instanceof _metadata.SelfMetadata) {
	            upperBoundVisibility = paramMetadata;
	        } else if (paramMetadata instanceof _metadata.HostMetadata) {
	            upperBoundVisibility = paramMetadata;
	        } else if (paramMetadata instanceof _metadata.SkipSelfMetadata) {
	            lowerBoundVisibility = paramMetadata;
	        } else if (paramMetadata instanceof _metadata.DependencyMetadata) {
	            if ((0, _lang.isPresent)(paramMetadata.token)) {
	                token = paramMetadata.token;
	            }
	            depProps.push(paramMetadata);
	        }
	    }
	    token = (0, _forward_ref.resolveForwardRef)(token);
	    if ((0, _lang.isPresent)(token)) {
	        return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	    } else {
	        throw new _exceptions2.NoAnnotationError(typeOrFunc, params);
	    }
	}
	function _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps) {
	    return new Dependency(_key.Key.get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exception_handler_1 = __webpack_require__(11);
	var exception_handler_2 = __webpack_require__(11);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = "--"; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	})(Error);
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException, _originalStack, _context) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	})(Error);
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucy50cyJdLCJuYW1lcyI6WyJCYXNlRXhjZXB0aW9uIiwiQmFzZUV4Y2VwdGlvbi5jb25zdHJ1Y3RvciIsIkJhc2VFeGNlcHRpb24udG9TdHJpbmciLCJXcmFwcGVkRXhjZXB0aW9uIiwiV3JhcHBlZEV4Y2VwdGlvbi5jb25zdHJ1Y3RvciIsIldyYXBwZWRFeGNlcHRpb24ud3JhcHBlck1lc3NhZ2UiLCJXcmFwcGVkRXhjZXB0aW9uLndyYXBwZXJTdGFjayIsIldyYXBwZWRFeGNlcHRpb24ub3JpZ2luYWxFeGNlcHRpb24iLCJXcmFwcGVkRXhjZXB0aW9uLm9yaWdpbmFsU3RhY2siLCJXcmFwcGVkRXhjZXB0aW9uLmNvbnRleHQiLCJXcmFwcGVkRXhjZXB0aW9uLm1lc3NhZ2UiLCJXcmFwcGVkRXhjZXB0aW9uLnRvU3RyaW5nIiwibWFrZVR5cGVFcnJvciIsInVuaW1wbGVtZW50ZWQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFFckQsa0NBQStCLHFCQUFxQixDQUFDO0FBQTdDLGdFQUE2QztBQUVyRDtJQUFtQ0EsaUNBQUtBO0lBRXRDQSx1QkFBbUJBLE9BQXNCQTtRQUE3QkMsdUJBQTZCQSxHQUE3QkEsY0FBNkJBO1FBQ3ZDQSxrQkFBTUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFERUEsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBZUE7UUFFdkNBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLENBQU1BLElBQUlBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO0lBQy9DQSxDQUFDQTtJQUVERCxnQ0FBUUEsR0FBUkEsY0FBcUJFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO0lBQzdDRixvQkFBQ0E7QUFBREEsQ0FBQ0EsQUFSRCxFQUFtQyxLQUFLLEVBUXZDO0FBUlkscUJBQWEsZ0JBUXpCLENBQUE7QUFFRDs7R0FFRztBQUNIO0lBQXNDRyxvQ0FBS0E7SUFHekNBLDBCQUFvQkEsZUFBdUJBLEVBQVVBLGtCQUFrQkEsRUFBVUEsY0FBZUEsRUFDNUVBLFFBQVNBO1FBQzNCQyxrQkFBTUEsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFGTEEsb0JBQWVBLEdBQWZBLGVBQWVBLENBQVFBO1FBQVVBLHVCQUFrQkEsR0FBbEJBLGtCQUFrQkEsQ0FBQUE7UUFBVUEsbUJBQWNBLEdBQWRBLGNBQWNBLENBQUNBO1FBQzVFQSxhQUFRQSxHQUFSQSxRQUFRQSxDQUFDQTtRQUUzQkEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsQ0FBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDL0RBLENBQUNBO0lBRURELHNCQUFJQSw0Q0FBY0E7YUFBbEJBLGNBQStCRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxDQUFDQTs7O09BQUFGO0lBRTdEQSxzQkFBSUEsMENBQVlBO2FBQWhCQSxjQUEwQkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztPQUFBSDtJQUd0REEsc0JBQUlBLCtDQUFpQkE7YUFBckJBLGNBQStCSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBOzs7T0FBQUo7SUFFaEVBLHNCQUFJQSwyQ0FBYUE7YUFBakJBLGNBQTJCSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxDQUFDQTs7O09BQUFMO0lBR3hEQSxzQkFBSUEscUNBQU9BO2FBQVhBLGNBQXFCTSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTs7O09BQUFOO0lBRTVDQSxzQkFBSUEscUNBQU9BO2FBQVhBLGNBQXdCTyxNQUFNQSxDQUFDQSxvQ0FBZ0JBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztPQUFBUDtJQUUxRUEsbUNBQVFBLEdBQVJBLGNBQXFCUSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUM3Q1IsdUJBQUNBO0FBQURBLENBQUNBLEFBeEJELEVBQXNDLEtBQUssRUF3QjFDO0FBeEJZLHdCQUFnQixtQkF3QjVCLENBQUE7QUFFRCx1QkFBOEIsT0FBZ0I7SUFDNUNTLE1BQU1BLENBQUNBLElBQUlBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO0FBQ2hDQSxDQUFDQTtBQUZlLHFCQUFhLGdCQUU1QixDQUFBO0FBRUQ7SUFDRUMsTUFBTUEsSUFBSUEsYUFBYUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7QUFDM0NBLENBQUNBO0FBRmUscUJBQWEsZ0JBRTVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V4Y2VwdGlvbkhhbmRsZXJ9IGZyb20gJy4vZXhjZXB0aW9uX2hhbmRsZXInO1xuXG5leHBvcnQge0V4Y2VwdGlvbkhhbmRsZXJ9IGZyb20gJy4vZXhjZXB0aW9uX2hhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgQmFzZUV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgcHVibGljIHN0YWNrOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgPSBcIi0tXCIpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLnN0YWNrID0gKDxhbnk+bmV3IEVycm9yKG1lc3NhZ2UpKS5zdGFjaztcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1lc3NhZ2U7IH1cbn1cblxuLyoqXG4gKiBXcmFwcyBhbiBleGNlcHRpb24gYW5kIHByb3ZpZGVzIGFkZGl0aW9uYWwgY29udGV4dCBvciBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFdyYXBwZWRFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gIHByaXZhdGUgX3dyYXBwZXJTdGFjazogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dyYXBwZXJNZXNzYWdlOiBzdHJpbmcsIHByaXZhdGUgX29yaWdpbmFsRXhjZXB0aW9uLCBwcml2YXRlIF9vcmlnaW5hbFN0YWNrPyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29udGV4dD8pIHtcbiAgICBzdXBlcihfd3JhcHBlck1lc3NhZ2UpO1xuICAgIHRoaXMuX3dyYXBwZXJTdGFjayA9ICg8YW55Pm5ldyBFcnJvcihfd3JhcHBlck1lc3NhZ2UpKS5zdGFjaztcbiAgfVxuXG4gIGdldCB3cmFwcGVyTWVzc2FnZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fd3JhcHBlck1lc3NhZ2U7IH1cblxuICBnZXQgd3JhcHBlclN0YWNrKCk6IGFueSB7IHJldHVybiB0aGlzLl93cmFwcGVyU3RhY2s7IH1cblxuXG4gIGdldCBvcmlnaW5hbEV4Y2VwdGlvbigpOiBhbnkgeyByZXR1cm4gdGhpcy5fb3JpZ2luYWxFeGNlcHRpb247IH1cblxuICBnZXQgb3JpZ2luYWxTdGFjaygpOiBhbnkgeyByZXR1cm4gdGhpcy5fb3JpZ2luYWxTdGFjazsgfVxuXG5cbiAgZ2V0IGNvbnRleHQoKTogYW55IHsgcmV0dXJuIHRoaXMuX2NvbnRleHQ7IH1cblxuICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcgeyByZXR1cm4gRXhjZXB0aW9uSGFuZGxlci5leGNlcHRpb25Ub1N0cmluZyh0aGlzKTsgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1lc3NhZ2U7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUeXBlRXJyb3IobWVzc2FnZT86IHN0cmluZyk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IobWVzc2FnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmltcGxlbWVudGVkKCk6IGFueSB7XG4gIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKCd1bmltcGxlbWVudGVkJyk7XG59XG4iXX0=

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(10);
	var collection_1 = __webpack_require__(8);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	})();
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, [provide(ExceptionHandler, {useClass: MyExceptionHandler})])
	 *
	 * ```
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join("\n");
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError("STACKTRACE:");
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError("ORIGINAL STACKTRACE:");
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError("ERROR CONTEXT:");
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof exceptions_1.WrappedException ? exception.wrapperMessage : exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join("\n\n-----async gap-----\n") :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof exceptions_1.WrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof exceptions_1.WrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof exceptions_1.WrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof exceptions_1.WrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof exceptions_1.WrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof exceptions_1.WrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	})();
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uX2hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbl9oYW5kbGVyLnRzIl0sIm5hbWVzIjpbIl9BcnJheUxvZ2dlciIsIl9BcnJheUxvZ2dlci5jb25zdHJ1Y3RvciIsIl9BcnJheUxvZ2dlci5sb2ciLCJfQXJyYXlMb2dnZXIubG9nRXJyb3IiLCJfQXJyYXlMb2dnZXIubG9nR3JvdXAiLCJfQXJyYXlMb2dnZXIubG9nR3JvdXBFbmQiLCJFeGNlcHRpb25IYW5kbGVyIiwiRXhjZXB0aW9uSGFuZGxlci5jb25zdHJ1Y3RvciIsIkV4Y2VwdGlvbkhhbmRsZXIuZXhjZXB0aW9uVG9TdHJpbmciLCJFeGNlcHRpb25IYW5kbGVyLmNhbGwiLCJFeGNlcHRpb25IYW5kbGVyLl9leHRyYWN0TWVzc2FnZSIsIkV4Y2VwdGlvbkhhbmRsZXIuX2xvbmdTdGFja1RyYWNlIiwiRXhjZXB0aW9uSGFuZGxlci5fZmluZENvbnRleHQiLCJFeGNlcHRpb25IYW5kbGVyLl9maW5kT3JpZ2luYWxFeGNlcHRpb24iLCJFeGNlcHRpb25IYW5kbGVyLl9maW5kT3JpZ2luYWxTdGFjayJdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXdDLDBCQUEwQixDQUFDLENBQUE7QUFDbkUsMkJBQThDLGdDQUFnQyxDQUFDLENBQUE7QUFDL0UsMkJBQThDLGdDQUFnQyxDQUFDLENBQUE7QUFFL0U7SUFBQUE7UUFDRUMsUUFBR0EsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFLbEJBLENBQUNBO0lBSkNELDBCQUFHQSxHQUFIQSxVQUFJQSxDQUFNQSxJQUFVRSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUN2Q0YsK0JBQVFBLEdBQVJBLFVBQVNBLENBQU1BLElBQVVHLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENB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LFNBQWNBO1FBQy9CUSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxTQUFTQSxZQUFZQSw2QkFBZ0JBLENBQUNBLENBQUNBO1lBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBRTFEQSxJQUFJQSxDQUFDQSxHQUFHQSxTQUFTQSxDQUFDQTtRQUNsQkEsSUFBSUEsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7UUFDcENBLE9BQU9BLENBQUNBLFlBQVlBLDZCQUFnQkEsSUFBSUEsZ0JBQVNBLENBQUNBLENBQUNBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDdkVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLGlCQUFpQkEsQ0FBQ0E7WUFDeEJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFlBQVlBLDZCQUFnQkEsSUFBSUEsZ0JBQVNBLENBQUNBLENBQUNBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BFQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQTtZQUMxQkEsQ0FBQ0E7UUFDSEEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZkEsQ0FBQ0E7SUFDSFIsdUJBQUNBO0FBQURBLENBQUNBLEFBakdELElBaUdDO0FBakdZLHdCQUFnQixtQkFpRzVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzUHJlc2VudCwgaXNCbGFuaywgcHJpbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb24sIFdyYXBwZWRFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge0xpc3RXcmFwcGVyLCBpc0xpc3RMaWtlSXRlcmFibGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5cbmNsYXNzIF9BcnJheUxvZ2dlciB7XG4gIHJlczogYW55W10gPSBbXTtcbiAgbG9nKHM6IGFueSk6IHZvaWQgeyB0aGlzLnJlcy5wdXNoKHMpOyB9XG4gIGxvZ0Vycm9yKHM6IGFueSk6IHZvaWQgeyB0aGlzLnJlcy5wdXNoKHMpOyB9XG4gIGxvZ0dyb3VwKHM6IGFueSk6IHZvaWQgeyB0aGlzLnJlcy5wdXNoKHMpOyB9XG4gIGxvZ0dyb3VwRW5kKCl7fTtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBhIGhvb2sgZm9yIGNlbnRyYWxpemVkIGV4Y2VwdGlvbiBoYW5kbGluZy5cbiAqXG4gKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBgRXhjZXB0aW9uSGFuZGxlcmAgcHJpbnRzIGVycm9yIG1lc3NhZ2VzIHRvIHRoZSBgQ29uc29sZWAuIFRvXG4gKiBpbnRlcmNlcHQgZXJyb3IgaGFuZGxpbmcsXG4gKiB3cml0ZSBhIGN1c3RvbSBleGNlcHRpb24gaGFuZGxlciB0aGF0IHJlcGxhY2VzIHRoaXMgZGVmYXVsdCBhcyBhcHByb3ByaWF0ZSBmb3IgeW91ciBhcHAuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKlxuICogY2xhc3MgTXlFeGNlcHRpb25IYW5kbGVyIGltcGxlbWVudHMgRXhjZXB0aW9uSGFuZGxlciB7XG4gKiAgIGNhbGwoZXJyb3IsIHN0YWNrVHJhY2UgPSBudWxsLCByZWFzb24gPSBudWxsKSB7XG4gKiAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdGhlIGV4Y2VwdGlvblxuICogICB9XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKE15QXBwLCBbcHJvdmlkZShFeGNlcHRpb25IYW5kbGVyLCB7dXNlQ2xhc3M6IE15RXhjZXB0aW9uSGFuZGxlcn0pXSlcbiAqXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbkhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnZXI6IGFueSwgcHJpdmF0ZSBfcmV0aHJvd0V4Y2VwdGlvbjogYm9vbGVhbiA9IHRydWUpIHt9XG5cbiAgc3RhdGljIGV4Y2VwdGlvblRvU3RyaW5nKGV4Y2VwdGlvbjogYW55LCBzdGFja1RyYWNlOiBhbnkgPSBudWxsLCByZWFzb246IHN0cmluZyA9IG51bGwpOiBzdHJpbmcge1xuICAgIHZhciBsID0gbmV3IF9BcnJheUxvZ2dlcigpO1xuICAgIHZhciBlID0gbmV3IEV4Y2VwdGlvbkhhbmRsZXIobCwgZmFsc2UpO1xuICAgIGUuY2FsbChleGNlcHRpb24sIHN0YWNrVHJhY2UsIHJlYXNvbik7XG4gICAgcmV0dXJuIGwucmVzLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICBjYWxsKGV4Y2VwdGlvbjogYW55LCBzdGFja1RyYWNlOiBhbnkgPSBudWxsLCByZWFzb246IHN0cmluZyA9IG51bGwpOiB2b2lkIHtcbiAgICB2YXIgb3JpZ2luYWxFeGNlcHRpb24gPSB0aGlzLl9maW5kT3JpZ2luYWxFeGNlcHRpb24oZXhjZXB0aW9uKTtcbiAgICB2YXIgb3JpZ2luYWxTdGFjayA9IHRoaXMuX2ZpbmRPcmlnaW5hbFN0YWNrKGV4Y2VwdGlvbik7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLl9maW5kQ29udGV4dChleGNlcHRpb24pO1xuXG4gICAgdGhpcy5fbG9nZ2VyLmxvZ0dyb3VwKGBFWENFUFRJT046ICR7dGhpcy5fZXh0cmFjdE1lc3NhZ2UoZXhjZXB0aW9uKX1gKTtcblxuICAgIGlmIChpc1ByZXNlbnQoc3RhY2tUcmFjZSkgJiYgaXNCbGFuayhvcmlnaW5hbFN0YWNrKSkge1xuICAgICAgdGhpcy5fbG9nZ2VyLmxvZ0Vycm9yKFwiU1RBQ0tUUkFDRTpcIik7XG4gICAgICB0aGlzLl9sb2dnZXIubG9nRXJyb3IodGhpcy5fbG9uZ1N0YWNrVHJhY2Uoc3RhY2tUcmFjZSkpO1xuICAgIH1cblxuICAgIGlmIChpc1ByZXNlbnQocmVhc29uKSkge1xuICAgICAgdGhpcy5fbG9nZ2VyLmxvZ0Vycm9yKGBSRUFTT046ICR7cmVhc29ufWApO1xuICAgIH1cblxuICAgIGlmIChpc1ByZXNlbnQob3JpZ2luYWxFeGNlcHRpb24pKSB7XG4gICAgICB0aGlzLl9sb2dnZXIubG9nRXJyb3IoYE9SSUdJTkFMIEVYQ0VQVElPTjogJHt0aGlzLl9leHRyYWN0TWVzc2FnZShvcmlnaW5hbEV4Y2VwdGlvbil9YCk7XG4gICAgfVxuXG4gICAgaWYgKGlzUHJlc2VudChvcmlnaW5hbFN0YWNrKSkge1xuICAgICAgdGhpcy5fbG9nZ2VyLmxvZ0Vycm9yKFwiT1JJR0lOQUwgU1RBQ0tUUkFDRTpcIik7XG4gICAgICB0aGlzLl9sb2dnZXIubG9nRXJyb3IodGhpcy5fbG9uZ1N0YWNrVHJhY2Uob3JpZ2luYWxTdGFjaykpO1xuICAgIH1cblxuICAgIGlmIChpc1ByZXNlbnQoY29udGV4dCkpIHtcbiAgICAgIHRoaXMuX2xvZ2dlci5sb2dFcnJvcihcIkVSUk9SIENPTlRFWFQ6XCIpO1xuICAgICAgdGhpcy5fbG9nZ2VyLmxvZ0Vycm9yKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHRoaXMuX2xvZ2dlci5sb2dHcm91cEVuZCgpO1xuXG4gICAgLy8gV2UgcmV0aHJvdyBleGNlcHRpb25zLCBzbyBvcGVyYXRpb25zIGxpa2UgJ2Jvb3RzdHJhcCcgd2lsbCByZXN1bHQgaW4gYW4gZXJyb3JcbiAgICAvLyB3aGVuIGFuIGV4Y2VwdGlvbiBoYXBwZW5zLiBJZiB3ZSBkbyBub3QgcmV0aHJvdywgYm9vdHN0cmFwIHdpbGwgYWx3YXlzIHN1Y2NlZWQuXG4gICAgaWYgKHRoaXMuX3JldGhyb3dFeGNlcHRpb24pIHRocm93IGV4Y2VwdGlvbjtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2V4dHJhY3RNZXNzYWdlKGV4Y2VwdGlvbjogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZXhjZXB0aW9uIGluc3RhbmNlb2YgV3JhcHBlZEV4Y2VwdGlvbiA/IGV4Y2VwdGlvbi53cmFwcGVyTWVzc2FnZSA6IGV4Y2VwdGlvbi50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfbG9uZ1N0YWNrVHJhY2Uoc3RhY2tUcmFjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gaXNMaXN0TGlrZUl0ZXJhYmxlKHN0YWNrVHJhY2UpID8gKDxhbnlbXT5zdGFja1RyYWNlKS5qb2luKFwiXFxuXFxuLS0tLS1hc3luYyBnYXAtLS0tLVxcblwiKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrVHJhY2UudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2ZpbmRDb250ZXh0KGV4Y2VwdGlvbjogYW55KTogYW55IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCEoZXhjZXB0aW9uIGluc3RhbmNlb2YgV3JhcHBlZEV4Y2VwdGlvbikpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIGlzUHJlc2VudChleGNlcHRpb24uY29udGV4dCkgPyBleGNlcHRpb24uY29udGV4dCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpbmRDb250ZXh0KGV4Y2VwdGlvbi5vcmlnaW5hbEV4Y2VwdGlvbik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXhjZXB0aW9uLmNvbnRleHQgY2FuIHRocm93IGFuIGV4Y2VwdGlvbi4gaWYgaXQgaGFwcGVucywgd2UgaWdub3JlIHRoZSBjb250ZXh0LlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZmluZE9yaWdpbmFsRXhjZXB0aW9uKGV4Y2VwdGlvbjogYW55KTogYW55IHtcbiAgICBpZiAoIShleGNlcHRpb24gaW5zdGFuY2VvZiBXcmFwcGVkRXhjZXB0aW9uKSkgcmV0dXJuIG51bGw7XG5cbiAgICB2YXIgZSA9IGV4Y2VwdGlvbi5vcmlnaW5hbEV4Y2VwdGlvbjtcbiAgICB3aGlsZSAoZSBpbnN0YW5jZW9mIFdyYXBwZWRFeGNlcHRpb24gJiYgaXNQcmVzZW50KGUub3JpZ2luYWxFeGNlcHRpb24pKSB7XG4gICAgICBlID0gZS5vcmlnaW5hbEV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gZTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2ZpbmRPcmlnaW5hbFN0YWNrKGV4Y2VwdGlvbjogYW55KTogYW55IHtcbiAgICBpZiAoIShleGNlcHRpb24gaW5zdGFuY2VvZiBXcmFwcGVkRXhjZXB0aW9uKSkgcmV0dXJuIG51bGw7XG5cbiAgICB2YXIgZSA9IGV4Y2VwdGlvbjtcbiAgICB2YXIgc3RhY2sgPSBleGNlcHRpb24ub3JpZ2luYWxTdGFjaztcbiAgICB3aGlsZSAoZSBpbnN0YW5jZW9mIFdyYXBwZWRFeGNlcHRpb24gJiYgaXNQcmVzZW50KGUub3JpZ2luYWxFeGNlcHRpb24pKSB7XG4gICAgICBlID0gZS5vcmlnaW5hbEV4Y2VwdGlvbjtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgV3JhcHBlZEV4Y2VwdGlvbiAmJiBpc1ByZXNlbnQoZS5vcmlnaW5hbEV4Y2VwdGlvbikpIHtcbiAgICAgICAgc3RhY2sgPSBlLm9yaWdpbmFsU3RhY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9XG59XG4iXX0=

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var reflector_1 = __webpack_require__(13);
	var reflector_2 = __webpack_require__(13);
	exports.Reflector = reflector_2.Reflector;
	exports.ReflectionInfo = reflector_2.ReflectionInfo;
	var reflection_capabilities_1 = __webpack_require__(14);
	/**
	 * The {@link Reflector} used internally in Angular to access metadata
	 * about symbols.
	 */
	exports.reflector = new reflector_1.Reflector(new reflection_capabilities_1.ReflectionCapabilities());
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSwwQkFBd0IsYUFBYSxDQUFDLENBQUE7QUFDdEMsMEJBQXdDLGFBQWEsQ0FBQztBQUE5QywwQ0FBUztBQUFFLG9EQUFtQztBQUN0RCx3Q0FBcUMsMkJBQTJCLENBQUMsQ0FBQTtBQUVqRTs7O0dBR0c7QUFDUSxpQkFBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxJQUFJLGdEQUFzQixFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHlwZSwgaXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtMaXN0V3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcbmltcG9ydCB7UmVmbGVjdG9yfSBmcm9tICcuL3JlZmxlY3Rvcic7XG5leHBvcnQge1JlZmxlY3RvciwgUmVmbGVjdGlvbkluZm99IGZyb20gJy4vcmVmbGVjdG9yJztcbmltcG9ydCB7UmVmbGVjdGlvbkNhcGFiaWxpdGllc30gZnJvbSAnLi9yZWZsZWN0aW9uX2NhcGFiaWxpdGllcyc7XG5cbi8qKlxuICogVGhlIHtAbGluayBSZWZsZWN0b3J9IHVzZWQgaW50ZXJuYWxseSBpbiBBbmd1bGFyIHRvIGFjY2VzcyBtZXRhZGF0YVxuICogYWJvdXQgc3ltYm9scy5cbiAqL1xuZXhwb3J0IHZhciByZWZsZWN0b3IgPSBuZXcgUmVmbGVjdG9yKG5ldyBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCkpO1xuIl19

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(10);
	var collection_1 = __webpack_require__(8);
	/**
	 * Reflective information about a symbol, including annotations, interfaces, and other metadata.
	 */
	var ReflectionInfo = (function () {
	    function ReflectionInfo(annotations, parameters, factory, interfaces, propMetadata) {
	        this.annotations = annotations;
	        this.parameters = parameters;
	        this.factory = factory;
	        this.interfaces = interfaces;
	        this.propMetadata = propMetadata;
	    }
	    return ReflectionInfo;
	})();
	exports.ReflectionInfo = ReflectionInfo;
	/**
	 * Provides access to reflection data about symbols. Used internally by Angular
	 * to power dependency injection and compilation.
	 */
	var Reflector = (function () {
	    function Reflector(reflectionCapabilities) {
	        /** @internal */
	        this._injectableInfo = new collection_1.Map();
	        /** @internal */
	        this._getters = new collection_1.Map();
	        /** @internal */
	        this._setters = new collection_1.Map();
	        /** @internal */
	        this._methods = new collection_1.Map();
	        this._usedKeys = null;
	        this.reflectionCapabilities = reflectionCapabilities;
	    }
	    Reflector.prototype.isReflectionEnabled = function () { return this.reflectionCapabilities.isReflectionEnabled(); };
	    /**
	     * Causes `this` reflector to track keys used to access
	     * {@link ReflectionInfo} objects.
	     */
	    Reflector.prototype.trackUsage = function () { this._usedKeys = new collection_1.Set(); };
	    /**
	     * Lists types for which reflection information was not requested since
	     * {@link #trackUsage} was called. This list could later be audited as
	     * potential dead code.
	     */
	    Reflector.prototype.listUnusedKeys = function () {
	        var _this = this;
	        if (this._usedKeys == null) {
	            throw new exceptions_1.BaseException('Usage tracking is disabled');
	        }
	        var allTypes = collection_1.MapWrapper.keys(this._injectableInfo);
	        return allTypes.filter(function (key) { return !collection_1.SetWrapper.has(_this._usedKeys, key); });
	    };
	    Reflector.prototype.registerFunction = function (func, funcInfo) {
	        this._injectableInfo.set(func, funcInfo);
	    };
	    Reflector.prototype.registerType = function (type, typeInfo) {
	        this._injectableInfo.set(type, typeInfo);
	    };
	    Reflector.prototype.registerGetters = function (getters) { _mergeMaps(this._getters, getters); };
	    Reflector.prototype.registerSetters = function (setters) { _mergeMaps(this._setters, setters); };
	    Reflector.prototype.registerMethods = function (methods) { _mergeMaps(this._methods, methods); };
	    Reflector.prototype.factory = function (type) {
	        if (this._containsReflectionInfo(type)) {
	            var res = this._getReflectionInfo(type).factory;
	            return lang_1.isPresent(res) ? res : null;
	        }
	        else {
	            return this.reflectionCapabilities.factory(type);
	        }
	    };
	    Reflector.prototype.parameters = function (typeOrFunc) {
	        if (this._injectableInfo.has(typeOrFunc)) {
	            var res = this._getReflectionInfo(typeOrFunc).parameters;
	            return lang_1.isPresent(res) ? res : [];
	        }
	        else {
	            return this.reflectionCapabilities.parameters(typeOrFunc);
	        }
	    };
	    Reflector.prototype.annotations = function (typeOrFunc) {
	        if (this._injectableInfo.has(typeOrFunc)) {
	            var res = this._getReflectionInfo(typeOrFunc).annotations;
	            return lang_1.isPresent(res) ? res : [];
	        }
	        else {
	            return this.reflectionCapabilities.annotations(typeOrFunc);
	        }
	    };
	    Reflector.prototype.propMetadata = function (typeOrFunc) {
	        if (this._injectableInfo.has(typeOrFunc)) {
	            var res = this._getReflectionInfo(typeOrFunc).propMetadata;
	            return lang_1.isPresent(res) ? res : {};
	        }
	        else {
	            return this.reflectionCapabilities.propMetadata(typeOrFunc);
	        }
	    };
	    Reflector.prototype.interfaces = function (type) {
	        if (this._injectableInfo.has(type)) {
	            var res = this._getReflectionInfo(type).interfaces;
	            return lang_1.isPresent(res) ? res : [];
	        }
	        else {
	            return this.reflectionCapabilities.interfaces(type);
	        }
	    };
	    Reflector.prototype.getter = function (name) {
	        if (this._getters.has(name)) {
	            return this._getters.get(name);
	        }
	        else {
	            return this.reflectionCapabilities.getter(name);
	        }
	    };
	    Reflector.prototype.setter = function (name) {
	        if (this._setters.has(name)) {
	            return this._setters.get(name);
	        }
	        else {
	            return this.reflectionCapabilities.setter(name);
	        }
	    };
	    Reflector.prototype.method = function (name) {
	        if (this._methods.has(name)) {
	            return this._methods.get(name);
	        }
	        else {
	            return this.reflectionCapabilities.method(name);
	        }
	    };
	    /** @internal */
	    Reflector.prototype._getReflectionInfo = function (typeOrFunc) {
	        if (lang_1.isPresent(this._usedKeys)) {
	            this._usedKeys.add(typeOrFunc);
	        }
	        return this._injectableInfo.get(typeOrFunc);
	    };
	    /** @internal */
	    Reflector.prototype._containsReflectionInfo = function (typeOrFunc) { return this._injectableInfo.has(typeOrFunc); };
	    Reflector.prototype.importUri = function (type) { return this.reflectionCapabilities.importUri(type); };
	    return Reflector;
	})();
	exports.Reflector = Reflector;
	function _mergeMaps(target, config) {
	    collection_1.StringMapWrapper.forEach(config, function (v, k) { return target.set(k, v); });
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL2NvcmUvcmVmbGVjdGlvbi9yZWZsZWN0b3IudHMiXSwibmFtZXMiOlsiUmVmbGVjdGlvbkluZm8iLCJSZWZsZWN0aW9uSW5mby5jb25zdHJ1Y3RvciIsIlJlZmxlY3RvciIsIlJlZmxlY3Rvci5jb25zdHJ1Y3RvciIsIlJlZmxlY3Rvci5pc1JlZmxlY3Rpb25FbmFibGVkIiwiUmVmbGVjdG9yLnRyYWNrVXNhZ2UiLCJSZWZsZWN0b3IubGlzdFVudXNlZEtleXMiLCJSZWZsZWN0b3IucmVnaXN0ZXJGdW5jdGlvbiIsIlJlZmxlY3Rvci5yZWdpc3RlclR5cGUiLCJSZWZsZWN0b3IucmVnaXN0ZXJHZXR0ZXJzIiwiUmVmbGVjdG9yLnJlZ2lzdGVyU2V0dGVycyIsIlJlZmxlY3Rvci5yZWdpc3Rlck1ldGhvZHMiLCJSZWZsZWN0b3IuZmFjdG9yeSIsIlJlZmxlY3Rvci5wYXJhbWV0ZXJzIiwiUmVmbGVjdG9yLmFubm90YXRpb25zIiwiUmVmbGVjdG9yLnByb3BNZXRhZGF0YSIsIlJlZmxlY3Rvci5pbnRlcmZhY2VzIiwiUmVmbGVjdG9yLmdldHRlciIsIlJlZmxlY3Rvci5zZXR0ZXIiLCJSZWZsZWN0b3IubWV0aG9kIiwiUmVmbGVjdG9yLl9nZXRSZWZsZWN0aW9uSW5mbyIsIlJlZmxlY3Rvci5fY29udGFpbnNSZWZsZWN0aW9uSW5mbyIsIlJlZmxlY3Rvci5pbXBvcnRVcmkiLCJfbWVyZ2VNYXBzIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBeUMsMEJBQTBCLENBQUMsQ0FBQTtBQUNwRSwyQkFBOEMsZ0NBQWdDLENBQUMsQ0FBQTtBQUMvRSwyQkFPTyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBTXhDOztHQUVHO0FBQ0g7SUFDRUEsd0JBQW1CQSxXQUFtQkEsRUFBU0EsVUFBb0JBLEVBQVNBLE9BQWtCQSxFQUMzRUEsVUFBa0JBLEVBQVNBLFlBQXFDQTtRQURoRUMsZ0JBQVdBLEdB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Q0EsQ0FBQ0E7SUFDdkZwQixnQkFBQ0E7QUFBREEsQ0FBQ0EsQUF0SUQsSUFzSUM7QUF0SVksaUJBQVMsWUFzSXJCLENBQUE7QUFFRCxvQkFBb0IsTUFBcUIsRUFBRSxNQUFpQztJQUMxRXFCLDZCQUFnQkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBS0EsT0FBQUEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBaEJBLENBQWdCQSxDQUFDQSxDQUFDQTtBQUMvREEsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1R5cGUsIGlzUHJlc2VudCwgc3RyaW5naWZ5fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtcbiAgTGlzdFdyYXBwZXIsXG4gIE1hcCxcbiAgTWFwV3JhcHBlcixcbiAgU2V0LFxuICBTZXRXcmFwcGVyLFxuICBTdHJpbmdNYXBXcmFwcGVyXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5pbXBvcnQge1NldHRlckZuLCBHZXR0ZXJGbiwgTWV0aG9kRm59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtQbGF0Zm9ybVJlZmxlY3Rpb25DYXBhYmlsaXRpZXN9IGZyb20gJy4vcGxhdGZvcm1fcmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMnO1xuZXhwb3J0IHtTZXR0ZXJGbiwgR2V0dGVyRm4sIE1ldGhvZEZufSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCB7UGxhdGZvcm1SZWZsZWN0aW9uQ2FwYWJpbGl0aWVzfSBmcm9tICcuL3BsYXRmb3JtX3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzJztcblxuLyoqXG4gKiBSZWZsZWN0aXZlIGluZm9ybWF0aW9uIGFib3V0IGEgc3ltYm9sLCBpbmNsdWRpbmcgYW5ub3RhdGlvbnMsIGludGVyZmFjZXMsIGFuZCBvdGhlciBtZXRhZGF0YS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlZmxlY3Rpb25JbmZvIHtcbiAgY29uc3RydWN0b3IocHVibGljIGFubm90YXRpb25zPzogYW55W10sIHB1YmxpYyBwYXJhbWV0ZXJzPzogYW55W11bXSwgcHVibGljIGZhY3Rvcnk/OiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgcHVibGljIGludGVyZmFjZXM/OiBhbnlbXSwgcHVibGljIHByb3BNZXRhZGF0YT86IHtba2V5OiBzdHJpbmddOiBhbnlbXX0pIHt9XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYWNjZXNzIHRvIHJlZmxlY3Rpb24gZGF0YSBhYm91dCBzeW1ib2xzLiBVc2VkIGludGVybmFsbHkgYnkgQW5ndWxhclxuICogdG8gcG93ZXIgZGVwZW5kZW5jeSBpbmplY3Rpb24gYW5kIGNvbXBpbGF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgUmVmbGVjdG9yIHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfaW5qZWN0YWJsZUluZm8gPSBuZXcgTWFwPGFueSwgUmVmbGVjdGlvbkluZm8+KCk7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2dldHRlcnMgPSBuZXcgTWFwPHN0cmluZywgR2V0dGVyRm4+KCk7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3NldHRlcnMgPSBuZXcgTWFwPHN0cmluZywgU2V0dGVyRm4+KCk7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX21ldGhvZHMgPSBuZXcgTWFwPHN0cmluZywgTWV0aG9kRm4+KCk7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3VzZWRLZXlzOiBTZXQ8YW55PjtcbiAgcmVmbGVjdGlvbkNhcGFiaWxpdGllczogUGxhdGZvcm1SZWZsZWN0aW9uQ2FwYWJpbGl0aWVzO1xuXG4gIGNvbnN0cnVjdG9yKHJlZmxlY3Rpb25DYXBhYmlsaXRpZXM6IFBsYXRmb3JtUmVmbGVjdGlvbkNhcGFiaWxpdGllcykge1xuICAgIHRoaXMuX3VzZWRLZXlzID0gbnVsbDtcbiAgICB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgPSByZWZsZWN0aW9uQ2FwYWJpbGl0aWVzO1xuICB9XG5cbiAgaXNSZWZsZWN0aW9uRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5pc1JlZmxlY3Rpb25FbmFibGVkKCk7IH1cblxuICAvKipcbiAgICogQ2F1c2VzIGB0aGlzYCByZWZsZWN0b3IgdG8gdHJhY2sga2V5cyB1c2VkIHRvIGFjY2Vzc1xuICAgKiB7QGxpbmsgUmVmbGVjdGlvbkluZm99IG9iamVjdHMuXG4gICAqL1xuICB0cmFja1VzYWdlKCk6IHZvaWQgeyB0aGlzLl91c2VkS2V5cyA9IG5ldyBTZXQoKTsgfVxuXG4gIC8qKlxuICAgKiBMaXN0cyB0eXBlcyBmb3Igd2hpY2ggcmVmbGVjdGlvbiBpbmZvcm1hdGlvbiB3YXMgbm90IHJlcXVlc3RlZCBzaW5jZVxuICAgKiB7QGxpbmsgI3RyYWNrVXNhZ2V9IHdhcyBjYWxsZWQuIFRoaXMgbGlzdCBjb3VsZCBsYXRlciBiZSBhdWRpdGVkIGFzXG4gICAqIHBvdGVudGlhbCBkZWFkIGNvZGUuXG4gICAqL1xuICBsaXN0VW51c2VkS2V5cygpOiBhbnlbXSB7XG4gICAgaWYgKHRoaXMuX3VzZWRLZXlzID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKCdVc2FnZSB0cmFja2luZyBpcyBkaXNhYmxlZCcpO1xuICAgIH1cbiAgICB2YXIgYWxsVHlwZXMgPSBNYXBXcmFwcGVyLmtleXModGhpcy5faW5qZWN0YWJsZUluZm8pO1xuICAgIHJldHVybiBhbGxUeXBlcy5maWx0ZXIoa2V5ID0+ICFTZXRXcmFwcGVyLmhhcyh0aGlzLl91c2VkS2V5cywga2V5KSk7XG4gIH1cblxuICByZWdpc3RlckZ1bmN0aW9uKGZ1bmM6IEZ1bmN0aW9uLCBmdW5jSW5mbzogUmVmbGVjdGlvbkluZm8pOiB2b2lkIHtcbiAgICB0aGlzLl9pbmplY3RhYmxlSW5mby5zZXQoZnVuYywgZnVuY0luZm8pO1xuICB9XG5cbiAgcmVnaXN0ZXJUeXBlKHR5cGU6IFR5cGUsIHR5cGVJbmZvOiBSZWZsZWN0aW9uSW5mbyk6IHZvaWQge1xuICAgIHRoaXMuX2luamVjdGFibGVJbmZvLnNldCh0eXBlLCB0eXBlSW5mbyk7XG4gIH1cblxuICByZWdpc3RlckdldHRlcnMoZ2V0dGVyczoge1trZXk6IHN0cmluZ106IEdldHRlckZufSk6IHZvaWQgeyBfbWVyZ2VNYXBzKHRoaXMuX2dldHRlcnMsIGdldHRlcnMpOyB9XG5cbiAgcmVnaXN0ZXJTZXR0ZXJzKHNldHRlcnM6IHtba2V5OiBzdHJpbmddOiBTZXR0ZXJGbn0pOiB2b2lkIHsgX21lcmdlTWFwcyh0aGlzLl9zZXR0ZXJzLCBzZXR0ZXJzKTsgfVxuXG4gIHJlZ2lzdGVyTWV0aG9kcyhtZXRob2RzOiB7W2tleTogc3RyaW5nXTogTWV0aG9kRm59KTogdm9pZCB7IF9tZXJnZU1hcHModGhpcy5fbWV0aG9kcywgbWV0aG9kcyk7IH1cblxuICBmYWN0b3J5KHR5cGU6IFR5cGUpOiBGdW5jdGlvbiB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5zUmVmbGVjdGlvbkluZm8odHlwZSkpIHtcbiAgICAgIHZhciByZXMgPSB0aGlzLl9nZXRSZWZsZWN0aW9uSW5mbyh0eXBlKS5mYWN0b3J5O1xuICAgICAgcmV0dXJuIGlzUHJlc2VudChyZXMpID8gcmVzIDogbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5mYWN0b3J5KHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmFtZXRlcnModHlwZU9yRnVuYzogLypUeXBlKi8gYW55KTogYW55W10ge1xuICAgIGlmICh0aGlzLl9pbmplY3RhYmxlSW5mby5oYXModHlwZU9yRnVuYykpIHtcbiAgICAgIHZhciByZXMgPSB0aGlzLl9nZXRSZWZsZWN0aW9uSW5mbyh0eXBlT3JGdW5jKS5wYXJhbWV0ZXJzO1xuICAgICAgcmV0dXJuIGlzUHJlc2VudChyZXMpID8gcmVzIDogW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucGFyYW1ldGVycyh0eXBlT3JGdW5jKTtcbiAgICB9XG4gIH1cblxuICBhbm5vdGF0aW9ucyh0eXBlT3JGdW5jOiAvKlR5cGUqLyBhbnkpOiBhbnlbXSB7XG4gICAgaWYgKHRoaXMuX2luamVjdGFibGVJbmZvLmhhcyh0eXBlT3JGdW5jKSkge1xuICAgICAgdmFyIHJlcyA9IHRoaXMuX2dldFJlZmxlY3Rpb25JbmZvKHR5cGVPckZ1bmMpLmFubm90YXRpb25zO1xuICAgICAgcmV0dXJuIGlzUHJlc2VudChyZXMpID8gcmVzIDogW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMuYW5ub3RhdGlvbnModHlwZU9yRnVuYyk7XG4gICAgfVxuICB9XG5cbiAgcHJvcE1ldGFkYXRhKHR5cGVPckZ1bmM6IC8qVHlwZSovIGFueSk6IHtba2V5OiBzdHJpbmddOiBhbnlbXX0ge1xuICAgIGlmICh0aGlzLl9pbmplY3RhYmxlSW5mby5oYXModHlwZU9yRnVuYykpIHtcbiAgICAgIHZhciByZXMgPSB0aGlzLl9nZXRSZWZsZWN0aW9uSW5mbyh0eXBlT3JGdW5jKS5wcm9wTWV0YWRhdGE7XG4gICAgICByZXR1cm4gaXNQcmVzZW50KHJlcykgPyByZXMgOiB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5wcm9wTWV0YWRhdGEodHlwZU9yRnVuYyk7XG4gICAgfVxuICB9XG5cbiAgaW50ZXJmYWNlcyh0eXBlOiBUeXBlKTogYW55W10ge1xuICAgIGlmICh0aGlzLl9pbmplY3RhYmxlSW5mby5oYXModHlwZSkpIHtcbiAgICAgIHZhciByZXMgPSB0aGlzLl9nZXRSZWZsZWN0aW9uSW5mbyh0eXBlKS5pbnRlcmZhY2VzO1xuICAgICAgcmV0dXJuIGlzUHJlc2VudChyZXMpID8gcmVzIDogW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMuaW50ZXJmYWNlcyh0eXBlKTtcbiAgICB9XG4gIH1cblxuICBnZXR0ZXIobmFtZTogc3RyaW5nKTogR2V0dGVyRm4ge1xuICAgIGlmICh0aGlzLl9nZXR0ZXJzLmhhcyhuYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldHRlcnMuZ2V0KG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLmdldHRlcihuYW1lKTtcbiAgICB9XG4gIH1cblxuICBzZXR0ZXIobmFtZTogc3RyaW5nKTogU2V0dGVyRm4ge1xuICAgIGlmICh0aGlzLl9zZXR0ZXJzLmhhcyhuYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NldHRlcnMuZ2V0KG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnNldHRlcihuYW1lKTtcbiAgICB9XG4gIH1cblxuICBtZXRob2QobmFtZTogc3RyaW5nKTogTWV0aG9kRm4ge1xuICAgIGlmICh0aGlzLl9tZXRob2RzLmhhcyhuYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21ldGhvZHMuZ2V0KG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLm1ldGhvZChuYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9nZXRSZWZsZWN0aW9uSW5mbyh0eXBlT3JGdW5jKSB7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl91c2VkS2V5cykpIHtcbiAgICAgIHRoaXMuX3VzZWRLZXlzLmFkZCh0eXBlT3JGdW5jKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2luamVjdGFibGVJbmZvLmdldCh0eXBlT3JGdW5jKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2NvbnRhaW5zUmVmbGVjdGlvbkluZm8odHlwZU9yRnVuYykgeyByZXR1cm4gdGhpcy5faW5qZWN0YWJsZUluZm8uaGFzKHR5cGVPckZ1bmMpOyB9XG5cbiAgaW1wb3J0VXJpKHR5cGU6IFR5cGUpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLmltcG9ydFVyaSh0eXBlKTsgfVxufVxuXG5mdW5jdGlvbiBfbWVyZ2VNYXBzKHRhcmdldDogTWFwPGFueSwgYW55PiwgY29uZmlnOiB7W2tleTogc3RyaW5nXTogRnVuY3Rpb259KTogdm9pZCB7XG4gIFN0cmluZ01hcFdyYXBwZXIuZm9yRWFjaChjb25maWcsICh2LCBrKSA9PiB0YXJnZXQuc2V0KGssIHYpKTtcbn1cbiJdfQ==

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(10);
	var ReflectionCapabilities = (function () {
	    function ReflectionCapabilities(reflect) {
	        this._reflect = lang_1.isPresent(reflect) ? reflect : lang_1.global.Reflect;
	    }
	    ReflectionCapabilities.prototype.isReflectionEnabled = function () { return true; };
	    ReflectionCapabilities.prototype.factory = function (t) {
	        switch (t.length) {
	            case 0:
	                return function () { return new t(); };
	            case 1:
	                return function (a1) { return new t(a1); };
	            case 2:
	                return function (a1, a2) { return new t(a1, a2); };
	            case 3:
	                return function (a1, a2, a3) { return new t(a1, a2, a3); };
	            case 4:
	                return function (a1, a2, a3, a4) { return new t(a1, a2, a3, a4); };
	            case 5:
	                return function (a1, a2, a3, a4, a5) { return new t(a1, a2, a3, a4, a5); };
	            case 6:
	                return function (a1, a2, a3, a4, a5, a6) { return new t(a1, a2, a3, a4, a5, a6); };
	            case 7:
	                return function (a1, a2, a3, a4, a5, a6, a7) { return new t(a1, a2, a3, a4, a5, a6, a7); };
	            case 8:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8) { return new t(a1, a2, a3, a4, a5, a6, a7, a8); };
	            case 9:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9) { return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9); };
	            case 10:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
	                };
	            case 11:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
	                };
	            case 12:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
	                };
	            case 13:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
	                };
	            case 14:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
	                };
	            case 15:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
	                };
	            case 16:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
	                };
	            case 17:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
	                };
	            case 18:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
	                };
	            case 19:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
	                };
	            case 20:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
	                };
	        }
	        ;
	        throw new Error("Cannot create a factory for '" + lang_1.stringify(t) + "' because its constructor has more than 20 arguments");
	    };
	    /** @internal */
	    ReflectionCapabilities.prototype._zipTypesAndAnnotaions = function (paramTypes, paramAnnotations) {
	        var result;
	        if (typeof paramTypes === 'undefined') {
	            result = new Array(paramAnnotations.length);
	        }
	        else {
	            result = new Array(paramTypes.length);
	        }
	        for (var i = 0; i < result.length; i++) {
	            // TS outputs Object for parameters without types, while Traceur omits
	            // the annotations. For now we preserve the Traceur behavior to aid
	            // migration, but this can be revisited.
	            if (typeof paramTypes === 'undefined') {
	                result[i] = [];
	            }
	            else if (paramTypes[i] != Object) {
	                result[i] = [paramTypes[i]];
	            }
	            else {
	                result[i] = [];
	            }
	            if (lang_1.isPresent(paramAnnotations) && lang_1.isPresent(paramAnnotations[i])) {
	                result[i] = result[i].concat(paramAnnotations[i]);
	            }
	        }
	        return result;
	    };
	    ReflectionCapabilities.prototype.parameters = function (typeOrFunc) {
	        // Prefer the direct API.
	        if (lang_1.isPresent(typeOrFunc.parameters)) {
	            return typeOrFunc.parameters;
	        }
	        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
	            var paramAnnotations = this._reflect.getMetadata('parameters', typeOrFunc);
	            var paramTypes = this._reflect.getMetadata('design:paramtypes', typeOrFunc);
	            if (lang_1.isPresent(paramTypes) || lang_1.isPresent(paramAnnotations)) {
	                return this._zipTypesAndAnnotaions(paramTypes, paramAnnotations);
	            }
	        }
	        // The array has to be filled with `undefined` because holes would be skipped by `some`
	        var parameters = new Array(typeOrFunc.length);
	        parameters.fill(undefined);
	        return parameters;
	    };
	    ReflectionCapabilities.prototype.annotations = function (typeOrFunc) {
	        // Prefer the direct API.
	        if (lang_1.isPresent(typeOrFunc.annotations)) {
	            var annotations = typeOrFunc.annotations;
	            if (lang_1.isFunction(annotations) && annotations.annotations) {
	                annotations = annotations.annotations;
	            }
	            return annotations;
	        }
	        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
	            var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
	            if (lang_1.isPresent(annotations))
	                return annotations;
	        }
	        return [];
	    };
	    ReflectionCapabilities.prototype.propMetadata = function (typeOrFunc) {
	        // Prefer the direct API.
	        if (lang_1.isPresent(typeOrFunc.propMetadata)) {
	            var propMetadata = typeOrFunc.propMetadata;
	            if (lang_1.isFunction(propMetadata) && propMetadata.propMetadata) {
	                propMetadata = propMetadata.propMetadata;
	            }
	            return propMetadata;
	        }
	        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
	            var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
	            if (lang_1.isPresent(propMetadata))
	                return propMetadata;
	        }
	        return {};
	    };
	    ReflectionCapabilities.prototype.interfaces = function (type) {
	        throw new exceptions_1.BaseException("JavaScript does not support interfaces");
	    };
	    ReflectionCapabilities.prototype.getter = function (name) { return new Function('o', 'return o.' + name + ';'); };
	    ReflectionCapabilities.prototype.setter = function (name) {
	        return new Function('o', 'v', 'return o.' + name + ' = v;');
	    };
	    ReflectionCapabilities.prototype.method = function (name) {
	        var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
	        return new Function('o', 'args', functionBody);
	    };
	    // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
	    ReflectionCapabilities.prototype.importUri = function (type) { return './'; };
	    return ReflectionCapabilities;
	})();
	exports.ReflectionCapabilities = ReflectionCapabilities;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbIlJlZmxlY3Rpb25DYXBhYmlsaXRpZXMiLCJSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLmNvbnN0cnVjdG9yIiwiUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5pc1JlZmxlY3Rpb25FbmFibGVkIiwiUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5mYWN0b3J5IiwiUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5femlwVHlwZXNBbmRBbm5vdGFpb25zIiwiUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5wYXJhbWV0ZXJzIiwiUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5hbm5vdGF0aW9ucyIsIlJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucHJvcE1ldGFkYXRhIiwiUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5pbnRlcmZhY2VzIiwiUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5nZXR0ZXIiLCJSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnNldHRlciIsIlJlZmxlY3Rpb25DYXBhYmlsaXRpZXMubWV0aG9kIiwiUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5pbXBvcnRVcmkiXSwibWFwcGluZ3MiOiJBQUFBLHFCQU9PLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsMkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFJN0Q7SUFHRUEsZ0NBQVlBLE9BQWFBO1FBQUlDLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLGdCQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxPQUFPQSxHQUFHQSxhQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUFDQSxDQUFDQTtJQUU3RkQsb0RBQW1CQSxHQUFuQkEsY0FBaUNFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBRS9DRix3Q0FBT0EsR0FBUEEs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RUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsSUFBS0EsT0FBQUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBekNBLENBQXlDQSxDQUFDQTtZQUMzRkEsS0FBS0EsRUFBRUE7Z0JBQ0xBLE1BQU1BLENBQUNBLFVBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBOzJCQUNwQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsR0FBR0EsQ0FBQ0E7Z0JBQTlDQSxDQUE4Q0EsQ0FBQ0E7WUFDNURBLEtBQUtBLEVBQUVBO2dCQUNMQSxNQUFNQSxDQUFDQSxVQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQTsyQkFDekNBLElBQUlBLENBQUNBLENBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBO2dCQUFuREEsQ0FBbURBLENBQUNBO1lBQ2pFQSxLQUFLQSxFQUFFQTtnQkFDTEEsTUFBTUEsQ0FBQ0EsVUFBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0E7MkJBQzlDQSxJQUFJQSxDQUFDQSxDQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQTtnQkFBeERBLENBQXdEQSxDQUFDQTtZQUN0RUEsS0FBS0EsRUFBRUE7Z0JBQ0xBLE1BQU1BLENBQUNBLFVBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBOzJCQUNuREEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0E7Z0JBQTdEQSxDQUE2REEsQ0FBQ0E7WUFDM0VBLEtBQUtBLEVBQUVBO2dCQUNMQSxNQUFNQSxDQUFDQSxVQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQTsyQkFDeERBLElBQUlBLENBQUNBLENBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBO2dCQUFsRUEsQ0FBa0VBLENBQUNBO1lBQ2hGQSxLQUFLQSxFQUFFQTtnQkFDTEEsTUFBTUEsQ0FBQ0EsVUFBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0E7MkJBQzdEQSxJQUFJQSxDQUFDQSxDQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQTtnQkFBdkVBLENBQXVFQSxDQUFDQTtZQUNyRkEsS0FBS0EsRUFBRUE7Z0JBQ0xBLE1BQU1BLENBQUNBLFVBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBOzJCQUNsRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0E7Z0JBQTVFQSxDQUE0RUEsQ0FBQ0E7WUFDMUZBLEtBQUtBLEVBQUVBO2dCQUNMQSxNQUFNQSxDQUFDQSxVQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQTsyQkFDdkVBLElBQUlBLENBQUNBLENBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQ3JFQSxHQUFHQSxDQUFDQTtnQkFEVkEsQ0FDVUEsQ0FBQ0E7WUFDeEJBLEtBQUtBLEVBQUVBO2dCQUNMQSxNQUFNQSxDQUFDQSxVQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQTsyQkFDNUVBLElBQUlBLENBQUNBLENBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQzFFQSxHQUFHQSxDQUFDQTtnQkFEVkEsQ0FDVUEsQ0FBQ0E7WUFDeEJBLEtBQUtBLEVBQUVBO2dCQUNMQSxNQUFNQSxDQUFDQSxVQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUMvRUEsR0FBR0E7MkJBQUtBLElBQUlBLENBQUNBLENBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQ3JFQSxH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LEdBQUdBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRWhHVCx1Q0FBTUEsR0FBTkEsVUFBT0EsSUFBWUE7UUFDakJVLE1BQU1BLENBQVdBLElBQUlBLFFBQVFBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLFdBQVdBLEdBQUdBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLENBQUNBO0lBQ3hFQSxDQUFDQTtJQUVEVix1Q0FBTUEsR0FBTkEsVUFBT0EsSUFBWUE7UUFDakJXLElBQUlBLFlBQVlBLEdBQUdBLFlBQVVBLElBQUlBLDZCQUF1QkEsSUFBSUEsNkNBQzdDQSxJQUFJQSxxQkFBa0JBLENBQUNBO1FBQ3RDQSxNQUFNQSxDQUFXQSxJQUFJQSxRQUFRQSxDQUFDQSxHQUFHQSxFQUFFQSxNQUFNQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUFDQTtJQUMzREEsQ0FBQ0E7SUFFRFgsa0dBQWtHQTtJQUNsR0EsMENBQVNBLEdBQVRBLFVBQVVBLElBQVVBLElBQVlZLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBQ2hEWiw2QkFBQ0E7QUFBREEsQ0FBQ0EsQUF4S0QsSUF3S0M7QUF4S1ksOEJBQXNCLHlCQXdLbEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFR5cGUsXG4gIGlzUHJlc2VudCxcbiAgaXNGdW5jdGlvbixcbiAgZ2xvYmFsLFxuICBzdHJpbmdpZnksXG4gIENvbmNyZXRlVHlwZVxufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtHZXR0ZXJGbiwgU2V0dGVyRm4sIE1ldGhvZEZufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7UGxhdGZvcm1SZWZsZWN0aW9uQ2FwYWJpbGl0aWVzfSBmcm9tICcuL3BsYXRmb3JtX3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzJztcblxuZXhwb3J0IGNsYXNzIFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgaW1wbGVtZW50cyBQbGF0Zm9ybVJlZmxlY3Rpb25DYXBhYmlsaXRpZXMge1xuICBwcml2YXRlIF9yZWZsZWN0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocmVmbGVjdD86IGFueSkgeyB0aGlzLl9yZWZsZWN0ID0gaXNQcmVzZW50KHJlZmxlY3QpID8gcmVmbGVjdCA6IGdsb2JhbC5SZWZsZWN0OyB9XG5cbiAgaXNSZWZsZWN0aW9uRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cblxuICBmYWN0b3J5KHQ6IENvbmNyZXRlVHlwZSk6IEZ1bmN0aW9uIHtcbiAgICBzd2l0Y2ggKHQubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiAoKSA9PiBuZXcgdCgpO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gKGExKSA9PiBuZXcgdChhMSk7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiAoYTEsIGEyKSA9PiBuZXcgdChhMSwgYTIpO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gKGExLCBhMiwgYTMpID0+IG5ldyB0KGExLCBhMiwgYTMpO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gKGExLCBhMiwgYTMsIGE0KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCk7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHJldHVybiAoYTEsIGEyLCBhMywgYTQsIGE1KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gKGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO1xuICAgICAgY2FzZSA3OlxuICAgICAgICByZXR1cm4gKGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNyk7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHJldHVybiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgpO1xuICAgICAgY2FzZSA5OlxuICAgICAgICByZXR1cm4gKGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTkpO1xuICAgICAgY2FzZSAxMDpcbiAgICAgICAgcmV0dXJuIChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTApID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwKTtcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIHJldHVybiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEpO1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgcmV0dXJuIChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyKSA9PlxuICAgICAgICAgICAgICAgICAgIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIpO1xuICAgICAgY2FzZSAxMzpcbiAgICAgICAgcmV0dXJuIChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzKTtcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIHJldHVybiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQpO1xuICAgICAgY2FzZSAxNTpcbiAgICAgICAgcmV0dXJuIChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1KSA9PlxuICAgICAgICAgICAgICAgICAgIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUpO1xuICAgICAgY2FzZSAxNjpcbiAgICAgICAgcmV0dXJuIChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1LCBhMTYpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2KTtcbiAgICAgIGNhc2UgMTc6XG4gICAgICAgIHJldHVybiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2LCBhMTcpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2LFxuICAgICAgICAgICAgICAgICAgICAgICAgIGExNyk7XG4gICAgICBjYXNlIDE4OlxuICAgICAgICByZXR1cm4gKGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUsIGExNiwgYTE3LCBhMTgpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2LCBhMTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgYTE4KTtcbiAgICAgIGNhc2UgMTk6XG4gICAgICAgIHJldHVybiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2LCBhMTcsIGExOCxcbiAgICAgICAgICAgICAgICBhMTkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUsIGExNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGExNywgYTE4LCBhMTkpO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgcmV0dXJuIChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1LCBhMTYsIGExNywgYTE4LFxuICAgICAgICAgICAgICAgIGExOSwgYTIwKSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhMTYsIGExNywgYTE4LCBhMTksIGEyMCk7XG4gICAgfTtcblxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYENhbm5vdCBjcmVhdGUgYSBmYWN0b3J5IGZvciAnJHtzdHJpbmdpZnkodCl9JyBiZWNhdXNlIGl0cyBjb25zdHJ1Y3RvciBoYXMgbW9yZSB0aGFuIDIwIGFyZ3VtZW50c2ApO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfemlwVHlwZXNBbmRBbm5vdGFpb25zKHBhcmFtVHlwZXMsIHBhcmFtQW5ub3RhdGlvbnMpOiBhbnlbXVtdIHtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbVR5cGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KHBhcmFtQW5ub3RhdGlvbnMubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KHBhcmFtVHlwZXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVFMgb3V0cHV0cyBPYmplY3QgZm9yIHBhcmFtZXRlcnMgd2l0aG91dCB0eXBlcywgd2hpbGUgVHJhY2V1ciBvbWl0c1xuICAgICAgLy8gdGhlIGFubm90YXRpb25zLiBGb3Igbm93IHdlIHByZXNlcnZlIHRoZSBUcmFjZXVyIGJlaGF2aW9yIHRvIGFpZFxuICAgICAgLy8gbWlncmF0aW9uLCBidXQgdGhpcyBjYW4gYmUgcmV2aXNpdGVkLlxuICAgICAgaWYgKHR5cGVvZiBwYXJhbVR5cGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXN1bHRbaV0gPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1UeXBlc1tpXSAhPSBPYmplY3QpIHtcbiAgICAgICAgcmVzdWx0W2ldID0gW3BhcmFtVHlwZXNbaV1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2ldID0gW107XG4gICAgICB9XG4gICAgICBpZiAoaXNQcmVzZW50KHBhcmFtQW5ub3RhdGlvbnMpICYmIGlzUHJlc2VudChwYXJhbUFubm90YXRpb25zW2ldKSkge1xuICAgICAgICByZXN1bHRbaV0gPSByZXN1bHRbaV0uY29uY2F0KHBhcmFtQW5ub3RhdGlvbnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyYW1ldGVycyh0eXBlT3JGdW5jOiBUeXBlKTogYW55W11bXSB7XG4gICAgLy8gUHJlZmVyIHRoZSBkaXJlY3QgQVBJLlxuICAgIGlmIChpc1ByZXNlbnQoKDxhbnk+dHlwZU9yRnVuYykucGFyYW1ldGVycykpIHtcbiAgICAgIHJldHVybiAoPGFueT50eXBlT3JGdW5jKS5wYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QpICYmIGlzUHJlc2VudCh0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKSkge1xuICAgICAgdmFyIHBhcmFtQW5ub3RhdGlvbnMgPSB0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKCdwYXJhbWV0ZXJzJywgdHlwZU9yRnVuYyk7XG4gICAgICB2YXIgcGFyYW1UeXBlcyA9IHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgdHlwZU9yRnVuYyk7XG4gICAgICBpZiAoaXNQcmVzZW50KHBhcmFtVHlwZXMpIHx8IGlzUHJlc2VudChwYXJhbUFubm90YXRpb25zKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5femlwVHlwZXNBbmRBbm5vdGFpb25zKHBhcmFtVHlwZXMsIHBhcmFtQW5ub3RhdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGUgYXJyYXkgaGFzIHRvIGJlIGZpbGxlZCB3aXRoIGB1bmRlZmluZWRgIGJlY2F1c2UgaG9sZXMgd291bGQgYmUgc2tpcHBlZCBieSBgc29tZWBcbiAgICBsZXQgcGFyYW1ldGVycyA9IG5ldyBBcnJheSgoPGFueT50eXBlT3JGdW5jLmxlbmd0aCkpO1xuICAgIHBhcmFtZXRlcnMuZmlsbCh1bmRlZmluZWQpO1xuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgYW5ub3RhdGlvbnModHlwZU9yRnVuYzogVHlwZSk6IGFueVtdIHtcbiAgICAvLyBQcmVmZXIgdGhlIGRpcmVjdCBBUEkuXG4gICAgaWYgKGlzUHJlc2VudCgoPGFueT50eXBlT3JGdW5jKS5hbm5vdGF0aW9ucykpIHtcbiAgICAgIHZhciBhbm5vdGF0aW9ucyA9ICg8YW55PnR5cGVPckZ1bmMpLmFubm90YXRpb25zO1xuICAgICAgaWYgKGlzRnVuY3Rpb24oYW5ub3RhdGlvbnMpICYmIGFubm90YXRpb25zLmFubm90YXRpb25zKSB7XG4gICAgICAgIGFubm90YXRpb25zID0gYW5ub3RhdGlvbnMuYW5ub3RhdGlvbnM7XG4gICAgICB9XG4gICAgICByZXR1cm4gYW5ub3RhdGlvbnM7XG4gICAgfVxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fcmVmbGVjdCkgJiYgaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEpKSB7XG4gICAgICB2YXIgYW5ub3RhdGlvbnMgPSB0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKCdhbm5vdGF0aW9ucycsIHR5cGVPckZ1bmMpO1xuICAgICAgaWYgKGlzUHJlc2VudChhbm5vdGF0aW9ucykpIHJldHVybiBhbm5vdGF0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJvcE1ldGFkYXRhKHR5cGVPckZ1bmM6IGFueSk6IHtba2V5OiBzdHJpbmddOiBhbnlbXX0ge1xuICAgIC8vIFByZWZlciB0aGUgZGlyZWN0IEFQSS5cbiAgICBpZiAoaXNQcmVzZW50KCg8YW55PnR5cGVPckZ1bmMpLnByb3BNZXRhZGF0YSkpIHtcbiAgICAgIHZhciBwcm9wTWV0YWRhdGEgPSAoPGFueT50eXBlT3JGdW5jKS5wcm9wTWV0YWRhdGE7XG4gICAgICBpZiAoaXNGdW5jdGlvbihwcm9wTWV0YWRhdGEpICYmIHByb3BNZXRhZGF0YS5wcm9wTWV0YWRhdGEpIHtcbiAgICAgICAgcHJvcE1ldGFkYXRhID0gcHJvcE1ldGFkYXRhLnByb3BNZXRhZGF0YTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9wTWV0YWRhdGE7XG4gICAgfVxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fcmVmbGVjdCkgJiYgaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEpKSB7XG4gICAgICB2YXIgcHJvcE1ldGFkYXRhID0gdGhpcy5fcmVmbGVjdC5nZXRNZXRhZGF0YSgncHJvcE1ldGFkYXRhJywgdHlwZU9yRnVuYyk7XG4gICAgICBpZiAoaXNQcmVzZW50KHByb3BNZXRhZGF0YSkpIHJldHVybiBwcm9wTWV0YWRhdGE7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGludGVyZmFjZXModHlwZTogVHlwZSk6IGFueVtdIHtcbiAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcIkphdmFTY3JpcHQgZG9lcyBub3Qgc3VwcG9ydCBpbnRlcmZhY2VzXCIpO1xuICB9XG5cbiAgZ2V0dGVyKG5hbWU6IHN0cmluZyk6IEdldHRlckZuIHsgcmV0dXJuIDxHZXR0ZXJGbj5uZXcgRnVuY3Rpb24oJ28nLCAncmV0dXJuIG8uJyArIG5hbWUgKyAnOycpOyB9XG5cbiAgc2V0dGVyKG5hbWU6IHN0cmluZyk6IFNldHRlckZuIHtcbiAgICByZXR1cm4gPFNldHRlckZuPm5ldyBGdW5jdGlvbignbycsICd2JywgJ3JldHVybiBvLicgKyBuYW1lICsgJyA9IHY7Jyk7XG4gIH1cblxuICBtZXRob2QobmFtZTogc3RyaW5nKTogTWV0aG9kRm4ge1xuICAgIGxldCBmdW5jdGlvbkJvZHkgPSBgaWYgKCFvLiR7bmFtZX0pIHRocm93IG5ldyBFcnJvcignXCIke25hbWV9XCIgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgIHJldHVybiBvLiR7bmFtZX0uYXBwbHkobywgYXJncyk7YDtcbiAgICByZXR1cm4gPE1ldGhvZEZuPm5ldyBGdW5jdGlvbignbycsICdhcmdzJywgZnVuY3Rpb25Cb2R5KTtcbiAgfVxuXG4gIC8vIFRoZXJlIGlzIG5vdCBhIGNvbmNlcHQgb2YgaW1wb3J0IHVyaSBpbiBKcywgYnV0IHRoaXMgaXMgdXNlZnVsIGluIGRldmVsb3BpbmcgRGFydCBhcHBsaWNhdGlvbnMuXG4gIGltcG9ydFVyaSh0eXBlOiBUeXBlKTogc3RyaW5nIHsgcmV0dXJuICcuLyc7IH1cbn1cbiJdfQ==

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KeyRegistry = exports.Key = exports.TypeLiteral = undefined;
	
	var _type_literal = __webpack_require__(16);
	
	Object.defineProperty(exports, 'TypeLiteral', {
	    enumerable: true,
	    get: function get() {
	        return _type_literal.TypeLiteral;
	    }
	});
	
	var _lang = __webpack_require__(3);
	
	var _exceptions = __webpack_require__(10);
	
	var _forward_ref = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Key = exports.Key = function () {
	    function Key(token, id) {
	        _classCallCheck(this, Key);
	
	        this.token = token;
	        this.id = id;
	        if ((0, _lang.isBlank)(token)) {
	            throw new _exceptions.BaseException('Token must be defined!');
	        }
	    }
	
	    _createClass(Key, [{
	        key: 'displayName',
	        get: function get() {
	            return (0, _lang.stringify)(this.token);
	        }
	    }], [{
	        key: 'get',
	        value: function get(token) {
	            return _globalKeyRegistry.get((0, _forward_ref.resolveForwardRef)(token));
	        }
	    }, {
	        key: 'numberOfKeys',
	        get: function get() {
	            return _globalKeyRegistry.numberOfKeys;
	        }
	    }]);
	
	    return Key;
	}();
	
	var KeyRegistry = exports.KeyRegistry = function () {
	    function KeyRegistry() {
	        _classCallCheck(this, KeyRegistry);
	
	        this._allKeys = new Map();
	    }
	
	    _createClass(KeyRegistry, [{
	        key: 'get',
	        value: function get(token) {
	            if (token instanceof Key) return token;
	            var theToken = token;
	            if (token instanceof _type_literal.TypeLiteral) {
	                theToken = token.type;
	            }
	            token = theToken;
	            if (this._allKeys.has(token)) {
	                return this._allKeys.get(token);
	            }
	            var newKey = new Key(token, Key.numberOfKeys);
	            this._allKeys.set(token, newKey);
	            return newKey;
	        }
	    }, {
	        key: 'numberOfKeys',
	        get: function get() {
	            return this._allKeys.size;
	        }
	    }]);
	
	    return KeyRegistry;
	}();
	
	var _globalKeyRegistry = new KeyRegistry();

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TypeLiteral = exports.TypeLiteral = function () {
	    function TypeLiteral() {
	        _classCallCheck(this, TypeLiteral);
	    }
	
	    _createClass(TypeLiteral, [{
	        key: "type",
	        get: function get() {
	            throw new Error("Type literals are only supported in Dart");
	        }
	    }]);
	
	    return TypeLiteral;
	}();

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MixingMultiProvidersWithRegularProvidersError = exports.OutOfBoundsError = exports.NoAnnotationError = exports.InvalidProviderError = exports.InstantiationError = exports.CyclicDependencyError = exports.NoProviderError = exports.AbstractProviderError = undefined;
	
	var _collection = __webpack_require__(8);
	
	var _lang = __webpack_require__(3);
	
	var _exceptions = __webpack_require__(10);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function findFirstClosedCycle(keys) {
	    var res = [];
	    for (var i = 0; i < keys.length; ++i) {
	        if (_collection.ListWrapper.contains(res, keys[i])) {
	            res.push(keys[i]);
	            return res;
	        } else {
	            res.push(keys[i]);
	        }
	    }
	    return res;
	}
	function constructResolvingPath(keys) {
	    if (keys.length > 1) {
	        var reversed = findFirstClosedCycle(_collection.ListWrapper.reversed(keys));
	        var tokenStrs = reversed.map(function (k) {
	            return (0, _lang.stringify)(k.token);
	        });
	        return " (" + tokenStrs.join(' -> ') + ")";
	    } else {
	        return "";
	    }
	}
	
	var AbstractProviderError = exports.AbstractProviderError = function (_BaseException) {
	    _inherits(AbstractProviderError, _BaseException);
	
	    function AbstractProviderError(injector, key, constructResolvingMessage) {
	        _classCallCheck(this, AbstractProviderError);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractProviderError).call(this, "DI Exception"));
	
	        _this.keys = [key];
	        _this.injectors = [injector];
	        _this.constructResolvingMessage = constructResolvingMessage;
	        _this.message = _this.constructResolvingMessage(_this.keys);
	        return _this;
	    }
	
	    _createClass(AbstractProviderError, [{
	        key: 'addKey',
	        value: function addKey(injector, key) {
	            this.injectors.push(injector);
	            this.keys.push(key);
	            this.message = this.constructResolvingMessage(this.keys);
	        }
	    }, {
	        key: 'context',
	        get: function get() {
	            return this.injectors[this.injectors.length - 1].debugContext();
	        }
	    }]);
	
	    return AbstractProviderError;
	}(_exceptions.BaseException);
	
	var NoProviderError = exports.NoProviderError = function (_AbstractProviderErro) {
	    _inherits(NoProviderError, _AbstractProviderErro);
	
	    function NoProviderError(injector, key) {
	        _classCallCheck(this, NoProviderError);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(NoProviderError).call(this, injector, key, function (keys) {
	            var first = (0, _lang.stringify)(_collection.ListWrapper.first(keys).token);
	            return 'No provider for ' + first + '!' + constructResolvingPath(keys);
	        }));
	    }
	
	    return NoProviderError;
	}(AbstractProviderError);
	
	var CyclicDependencyError = exports.CyclicDependencyError = function (_AbstractProviderErro2) {
	    _inherits(CyclicDependencyError, _AbstractProviderErro2);
	
	    function CyclicDependencyError(injector, key) {
	        _classCallCheck(this, CyclicDependencyError);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CyclicDependencyError).call(this, injector, key, function (keys) {
	            return 'Cannot instantiate cyclic dependency!' + constructResolvingPath(keys);
	        }));
	    }
	
	    return CyclicDependencyError;
	}(AbstractProviderError);
	
	var InstantiationError = exports.InstantiationError = function (_WrappedException) {
	    _inherits(InstantiationError, _WrappedException);
	
	    function InstantiationError(injector, originalException, originalStack, key) {
	        _classCallCheck(this, InstantiationError);
	
	        var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(InstantiationError).call(this, "DI Exception", originalException, originalStack, null));
	
	        _this4.keys = [key];
	        _this4.injectors = [injector];
	        return _this4;
	    }
	
	    _createClass(InstantiationError, [{
	        key: 'addKey',
	        value: function addKey(injector, key) {
	            this.injectors.push(injector);
	            this.keys.push(key);
	        }
	    }, {
	        key: 'wrapperMessage',
	        get: function get() {
	            var first = (0, _lang.stringify)(_collection.ListWrapper.first(this.keys).token);
	            return 'Error during instantiation of ' + first + '!' + constructResolvingPath(this.keys) + '.';
	        }
	    }, {
	        key: 'causeKey',
	        get: function get() {
	            return this.keys[0];
	        }
	    }, {
	        key: 'context',
	        get: function get() {
	            return this.injectors[this.injectors.length - 1].debugContext();
	        }
	    }]);
	
	    return InstantiationError;
	}(_exceptions.WrappedException);
	
	var InvalidProviderError = exports.InvalidProviderError = function (_BaseException2) {
	    _inherits(InvalidProviderError, _BaseException2);
	
	    function InvalidProviderError(provider) {
	        _classCallCheck(this, InvalidProviderError);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(InvalidProviderError).call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " + provider.toString()));
	    }
	
	    return InvalidProviderError;
	}(_exceptions.BaseException);
	
	var NoAnnotationError = exports.NoAnnotationError = function (_BaseException3) {
	    _inherits(NoAnnotationError, _BaseException3);
	
	    function NoAnnotationError(typeOrFunc, params) {
	        _classCallCheck(this, NoAnnotationError);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(NoAnnotationError).call(this, NoAnnotationError._genMessage(typeOrFunc, params)));
	    }
	
	    _createClass(NoAnnotationError, null, [{
	        key: '_genMessage',
	        value: function _genMessage(typeOrFunc, params) {
	            var signature = [];
	            for (var i = 0, ii = params.length; i < ii; i++) {
	                var parameter = params[i];
	                if ((0, _lang.isBlank)(parameter) || parameter.length == 0) {
	                    signature.push('?');
	                } else {
	                    signature.push(parameter.map(_lang.stringify).join(' '));
	                }
	            }
	            return "Cannot resolve all parameters for '" + (0, _lang.stringify)(typeOrFunc) + "'(" + signature.join(', ') + "). " + "Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" + (0, _lang.stringify)(typeOrFunc) + "' is decorated with Injectable.";
	        }
	    }]);
	
	    return NoAnnotationError;
	}(_exceptions.BaseException);
	
	var OutOfBoundsError = exports.OutOfBoundsError = function (_BaseException4) {
	    _inherits(OutOfBoundsError, _BaseException4);
	
	    function OutOfBoundsError(index) {
	        _classCallCheck(this, OutOfBoundsError);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(OutOfBoundsError).call(this, 'Index ' + index + ' is out-of-bounds.'));
	    }
	
	    return OutOfBoundsError;
	}(_exceptions.BaseException);
	
	var MixingMultiProvidersWithRegularProvidersError = exports.MixingMultiProvidersWithRegularProvidersError = function (_BaseException5) {
	    _inherits(MixingMultiProvidersWithRegularProvidersError, _BaseException5);
	
	    function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
	        _classCallCheck(this, MixingMultiProvidersWithRegularProvidersError);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MixingMultiProvidersWithRegularProvidersError).call(this, "Cannot mix multi providers and regular providers, got: " + provider1.toString() + " " + provider2.toString()));
	    }
	
	    return MixingMultiProvidersWithRegularProvidersError;
	}(_exceptions.BaseException);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.OpaqueToken = undefined;
	
	var _lang = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = undefined && undefined.__metadata || function (k, v) {
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var OpaqueToken = exports.OpaqueToken = function () {
	    function OpaqueToken(_desc) {
	        _classCallCheck(this, OpaqueToken);
	
	        this._desc = _desc;
	    }
	
	    _createClass(OpaqueToken, [{
	        key: "toString",
	        value: function toString() {
	            return "Token " + this._desc;
	        }
	    }]);
	
	    return OpaqueToken;
	}();
	exports.OpaqueToken = OpaqueToken = __decorate([(0, _lang.CONST)(), __metadata('design:paramtypes', [String])], OpaqueToken);

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5ZjkwYmNiNzQzYWY5YzEyMTgwNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kaS9tZXRhZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kaS9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWwvZGVjb3JhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kaS9mb3J3YXJkX3JlZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kaS9pbmplY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kaS9wcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9uX2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZGkva2V5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RpL3R5cGVfbGl0ZXJhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9kaS9leGNlcHRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RpL29wYXF1ZV90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JDdENTLGNBQWM7Ozs7OztzQkFBRSxnQkFBZ0I7Ozs7OztzQkFBRSxrQkFBa0I7Ozs7OztzQkFBRSxZQUFZOzs7Ozs7c0JBQUUsWUFBWTs7Ozs7O3NCQUFFLGdCQUFnQjs7Ozs7O3NCQUFFLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQUV0SCxVQUFVOzs7Ozs7eUJBQUUsaUJBQWlCOzs7Ozs7Ozs7c0JBQzdCLFFBQVE7Ozs7Ozs7OztzQkFDUixPQUFPOzs7Ozs7c0JBQUUsZUFBZTs7Ozs7O3NCQUFFLGVBQWU7Ozs7OztzQkFBRSxVQUFVOzs7Ozs7c0JBQUUsSUFBSTs7Ozs7O3NCQUFFLFFBQVE7Ozs7OztzQkFBRSxPQUFPOzs7Ozs7Ozs7a0JBQzlFLEdBQUc7Ozs7OztrQkFBRSxXQUFXOzs7Ozs7Ozs7d0JBQ2hCLGVBQWU7Ozs7Ozt3QkFBRSxxQkFBcUI7Ozs7Ozt3QkFBRSxxQkFBcUI7Ozs7Ozt3QkFBRSxrQkFBa0I7Ozs7Ozt3QkFBRSxvQkFBb0I7Ozs7Ozt3QkFBRSxpQkFBaUI7Ozs7Ozt3QkFBRSxnQkFBZ0I7Ozs7Ozs7OzswQkFDNUksV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQcEIsS0FBSSxVQUFVLEdBQUksYUFBUSxVQUFLLFVBQVUsSUFBSyxVQUFV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QUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdEIsYUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdEIsYUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdEIsYUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdEIsYUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsYUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsYUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsYUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsYUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsYUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsYUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsYUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsYUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsYUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsYUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsYUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsYUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsYUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsYUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsYUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsYUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsYUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsYUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsYUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsYUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUN4Qixh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VyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0FBQ3pELHFCQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3pCLHlCQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7a0JBQ3BEO0FBQ0Qsd0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztjQUNwQjtBQUNELGlCQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0FBQ3pELHFCQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3pCLHlCQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7a0JBQ3BEO0FBQ0Qsd0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztjQUNwQjtBQUNELGlCQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0FBQ3pELHFCQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3pCLHlCQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7a0JBQ3BEO0FBQ0Qsd0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztjQUNwQjtBQUNELGlCQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0FBQ3pELHFCQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3pCLHlCQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7a0JBQ3BEO0FBQ0Qsd0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztjQUNwQjtBQUNELGlCQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0FBQ3pELHFCQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3pCLHlCQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7a0JBQ3BEO0FBQ0Qsd0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztjQUNwQjtBQUNELGlCQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0FBQ3pELHFCQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3pCLHlCQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7a0JBQ3BEO0FBQ0Qsd0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztjQUNwQjtBQUNELGlCQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0FBQ3pELHFCQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3pCLHlCQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7a0JBQ3BEO0FBQ0Qsd0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztjQUNwQjtBQUNELGlCQUFJLENBQUMs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LENBQUMsQ0FBQztBQUN0QywrQkFBTTtBQUNWLDBCQUFLLENBQUM7QUFDRiw0QkFBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxQywrQkFBTTtBQUNWLDBCQUFLLENBQUM7QUFDRiw0QkFBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDOUMsK0JBQU07QUFDViwwQkFBSyxDQUFDO0FBQ0YsNEJBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRCwrQkFBTTtBQUNWLDBCQUFLLEVBQUU7QUFDSCw0QkFBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN0RCwrQkFBTTtBQUNWLDBCQUFLLEVBQUU7QUFDSCw0QkFBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDM0QsK0JBQU07QUFDViwwQkFBSyxFQUFFO0FBQ0gsNEJBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoRSwrQkFBTTtBQUNWLDBCQUFLLEVBQUU7QUFDSCw0QkFBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNyRSwrQkFBTTtBQUNWLDBCQUFLLEVBQUU7QUFDSCw0QkFBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDMUUsK0JBQU07QUFDViwwQkFBSyxFQUFFO0FBQ0gsNEJBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvRSwrQkFBTTtBQUNWLDBCQUFLLEVBQUU7QUFDSCw0QkFBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwRiwrQkFBTTtBQUNWLDBCQUFLLEVBQUU7QUFDSCw0QkFBRyxHQUFHLE9BQU8s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OlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQW5ndWxhcjJESVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBbmd1bGFyMkRJXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5ZjkwYmNiNzQzYWY5YzEyMTgwNVxuICoqLyIsImV4cG9ydCB7IEluamVjdE1ldGFkYXRhLCBPcHRpb25hbE1ldGFkYXRhLCBJbmplY3RhYmxlTWV0YWRhdGEsIFNlbGZNZXRhZGF0YSwgSG9zdE1ldGFkYXRhLCBTa2lwU2VsZk1ldGFkYXRhLCBEZXBlbmRlbmN5TWV0YWRhdGEgfSBmcm9tICcuL2RpL21ldGFkYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGkvZGVjb3JhdG9ycyc7XG5leHBvcnQgeyBmb3J3YXJkUmVmLCByZXNvbHZlRm9yd2FyZFJlZiB9IGZyb20gJy4vZGkvZm9yd2FyZF9yZWYnO1xuZXhwb3J0IHsgSW5qZWN0b3IgfSBmcm9tICcuL2RpL2luamVjdG9yJztcbmV4cG9ydCB7IEJpbmRpbmcsIFByb3ZpZGVyQnVpbGRlciwgUmVzb2x2ZWRGYWN0b3J5LCBEZXBlbmRlbmN5LCBiaW5kLCBQcm92aWRlciwgcHJvdmlkZSB9IGZyb20gJy4vZGkvcHJvdmlkZXInO1xuZXhwb3J0IHsgS2V5LCBUeXBlTGl0ZXJhbCB9IGZyb20gJy4vZGkva2V5JztcbmV4cG9ydCB7IE5vUHJvdmlkZXJFcnJvciwgQWJzdHJhY3RQcm92aWRlckVycm9yLCBDeWNsaWNEZXBlbmRlbmN5RXJyb3IsIEluc3RhbnRpYXRpb25FcnJvciwgSW52YWxpZFByb3ZpZGVyRXJyb3IsIE5vQW5ub3RhdGlvbkVycm9yLCBPdXRPZkJvdW5kc0Vycm9yIH0gZnJvbSAnLi9kaS9leGNlcHRpb25zJztcbmV4cG9ydCB7IE9wYXF1ZVRva2VuIH0gZnJvbSAnLi9kaS9vcGFxdWVfdG9rZW4nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29yZS9kaS50c1xuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5pbXBvcnQgeyBDT05TVCwgc3RyaW5naWZ5IH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZ1wiO1xuZXhwb3J0IGxldCBJbmplY3RNZXRhZGF0YSA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2tlbikge1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfVxuICAgIHRvU3RyaW5nKCkgeyByZXR1cm4gYEBJbmplY3QoJHtzdHJpbmdpZnkodGhpcy50b2tlbil9KWA7IH1cbn07XG5JbmplY3RNZXRhZGF0YSA9IF9fZGVjb3JhdGUoW1xuICAgIENPTlNUKCksIFxuICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW09iamVjdF0pXG5dLCBJbmplY3RNZXRhZGF0YSk7XG5leHBvcnQgbGV0IE9wdGlvbmFsTWV0YWRhdGEgPSBjbGFzcyB7XG4gICAgdG9TdHJpbmcoKSB7IHJldHVybiBgQE9wdGlvbmFsKClgOyB9XG59O1xuT3B0aW9uYWxNZXRhZGF0YSA9IF9fZGVjb3JhdGUoW1xuICAgIENPTlNUKCksIFxuICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXG5dLCBPcHRpb25hbE1ldGFkYXRhKTtcbmV4cG9ydCBsZXQgRGVwZW5kZW5jeU1ldGFkYXRhID0gY2xhc3Mge1xuICAgIGdldCB0b2tlbigpIHsgcmV0dXJuIG51bGw7IH1cbn07XG5EZXBlbmRlbmN5TWV0YWRhdGEgPSBfX2RlY29yYXRlKFtcbiAgICBDT05TVCgpLCBcbiAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxuXSwgRGVwZW5kZW5jeU1ldGFkYXRhKTtcbmV4cG9ydCBsZXQgSW5qZWN0YWJsZU1ldGFkYXRhID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn07XG5JbmplY3RhYmxlTWV0YWRhdGEgPSBfX2RlY29yYXRlKFtcbiAgICBDT05TVCgpLCBcbiAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxuXSwgSW5qZWN0YWJsZU1ldGFkYXRhKTtcbmV4cG9ydCBsZXQgU2VsZk1ldGFkYXRhID0gY2xhc3Mge1xuICAgIHRvU3RyaW5nKCkgeyByZXR1cm4gYEBTZWxmKClgOyB9XG59O1xuU2VsZk1ldGFkYXRhID0gX19kZWNvcmF0ZShbXG4gICAgQ09OU1QoKSwgXG4gICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcbl0sIFNlbGZNZXRhZGF0YSk7XG5leHBvcnQgbGV0IFNraXBTZWxmTWV0YWRhdGEgPSBjbGFzcyB7XG4gICAgdG9TdHJpbmcoKSB7IHJldHVybiBgQFNraXBTZWxmKClgOyB9XG59O1xuU2tpcFNlbGZNZXRhZGF0YSA9IF9fZGVjb3JhdGUoW1xuICAgIENPTlNUKCksIFxuICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXG5dLCBTa2lwU2VsZk1ldGFkYXRhKTtcbmV4cG9ydCBsZXQgSG9zdE1ldGFkYXRhID0gY2xhc3Mge1xuICAgIHRvU3RyaW5nKCkgeyByZXR1cm4gYEBIb3N0KClgOyB9XG59O1xuSG9zdE1ldGFkYXRhID0gX19kZWNvcmF0ZShbXG4gICAgQ09OU1QoKSwgXG4gICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcbl0sIEhvc3RNZXRhZGF0YSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb3JlL2RpL21ldGFkYXRhLnRzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO3ZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn07XHJcbnZhciBnbG9iYWxTY29wZTtcclxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBpZiAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpIHtcclxuICAgICAgICAvLyBUT0RPOiBSZXBsYWNlIGFueSB3aXRoIFdvcmtlckdsb2JhbFNjb3BlIGZyb20gbGliLndlYndvcmtlci5kLnRzICMzNDkyXHJcbiAgICAgICAgZ2xvYmFsU2NvcGUgPSBzZWxmO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZ2xvYmFsU2NvcGUgPSBnbG9iYWw7XHJcbiAgICB9XHJcbn1cclxuZWxzZSB7XHJcbiAgICBnbG9iYWxTY29wZSA9IHdpbmRvdztcclxufVxyXG47XHJcbmV4cG9ydHMuSVNfREFSVCA9IGZhbHNlO1xyXG4vLyBOZWVkIHRvIGRlY2xhcmUgYSBuZXcgdmFyaWFibGUgZm9yIGdsb2JhbCBoZXJlIHNpbmNlIFR5cGVTY3JpcHRcclxuLy8gZXhwb3J0cyB0aGUgb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHN5bWJvbC5cclxudmFyIF9nbG9iYWwgPSBnbG9iYWxTY29wZTtcclxuZXhwb3J0cy5nbG9iYWwgPSBfZ2xvYmFsO1xyXG5leHBvcnRzLlR5cGUgPSBGdW5jdGlvbjtcclxuZnVuY3Rpb24gZ2V0VHlwZU5hbWVGb3JEZWJ1Z2dpbmcodHlwZSkge1xyXG4gICAgcmV0dXJuIHR5cGVbJ25hbWUnXTtcclxufVxyXG5leHBvcnRzLmdldFR5cGVOYW1lRm9yRGVidWdnaW5nID0gZ2V0VHlwZU5hbWVGb3JEZWJ1Z2dpbmc7XHJcbmV4cG9ydHMuTWF0aCA9IF9nbG9iYWwuTWF0aDtcclxuZXhwb3J0cy5EYXRlID0gX2dsb2JhbC5EYXRlO1xyXG52YXIgX2Rldk1vZGUgPSB0cnVlO1xyXG52YXIgX21vZGVMb2NrZWQgPSBmYWxzZTtcclxuZnVuY3Rpb24gbG9ja01vZGUoKSB7XHJcbiAgICBfbW9kZUxvY2tlZCA9IHRydWU7XHJcbn1cclxuZXhwb3J0cy5sb2NrTW9kZSA9IGxvY2tNb2RlO1xyXG4vKipcclxuICogRGlzYWJsZSBBbmd1bGFyJ3MgZGV2ZWxvcG1lbnQgbW9kZSwgd2hpY2ggdHVybnMgb2ZmIGFzc2VydGlvbnMgYW5kIG90aGVyXHJcbiAqIGNoZWNrcyB3aXRoaW4gdGhlIGZyYW1ld29yay5cclxuICpcclxuICogT25lIGltcG9ydGFudCBhc3NlcnRpb24gdGhpcyBkaXNhYmxlcyB2ZXJpZmllcyB0aGF0IGEgY2hhbmdlIGRldGVjdGlvbiBwYXNzXHJcbiAqIGRvZXMgbm90IHJlc3VsdCBpbiBhZGRpdGlvbmFsIGNoYW5nZXMgdG8gYW55IGJpbmRpbmdzIChhbHNvIGtub3duIGFzXHJcbiAqIHVuaWRpcmVjdGlvbmFsIGRhdGEgZmxvdykuXHJcbiAqL1xyXG5mdW5jdGlvbiBlbmFibGVQcm9kTW9kZSgpIHtcclxuICAgIGlmIChfbW9kZUxvY2tlZCkge1xyXG4gICAgICAgIC8vIENhbm5vdCB1c2UgQmFzZUV4Y2VwdGlvbiBhcyB0aGF0IGVuZHMgdXAgaW1wb3J0aW5nIGZyb20gZmFjYWRlL2xhbmcuXHJcbiAgICAgICAgdGhyb3cgJ0Nhbm5vdCBlbmFibGUgcHJvZCBtb2RlIGFmdGVyIHBsYXRmb3JtIHNldHVwLic7XHJcbiAgICB9XHJcbiAgICBfZGV2TW9kZSA9IGZhbHNlO1xyXG59XHJcbmV4cG9ydHMuZW5hYmxlUHJvZE1vZGUgPSBlbmFibGVQcm9kTW9kZTtcclxuZnVuY3Rpb24gYXNzZXJ0aW9uc0VuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gX2Rldk1vZGU7XHJcbn1cclxuZXhwb3J0cy5hc3NlcnRpb25zRW5hYmxlZCA9IGFzc2VydGlvbnNFbmFibGVkO1xyXG4vLyBUT0RPOiByZW1vdmUgY2FsbHMgdG8gYXNzZXJ0IGluIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRcclxuLy8gTm90ZTogQ2FuJ3QganVzdCBleHBvcnQgdGhpcyBhbmQgaW1wb3J0IGluIGluIG90aGVyIGZpbGVzXHJcbi8vIGFzIGBhc3NlcnRgIGlzIGEgcmVzZXJ2ZWQga2V5d29yZCBpbiBEYXJ0XHJcbl9nbG9iYWwuYXNzZXJ0ID0gZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbikge1xyXG4gICAgLy8gVE9ETzogdG8gYmUgZml4ZWQgcHJvcGVybHkgdmlhICMyODMwLCBub29wIGZvciBub3dcclxufTtcclxuLy8gVGhpcyBmdW5jdGlvbiBpcyBuZWVkZWQgb25seSB0byBwcm9wZXJseSBzdXBwb3J0IERhcnQncyBjb25zdCBleHByZXNzaW9uc1xyXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdHMyZGFydC9wdWxsLzE1MSBmb3IgbW9yZSBpbmZvXHJcbmZ1bmN0aW9uIENPTlNUX0VYUFIoZXhwcikge1xyXG4gICAgcmV0dXJuIGV4cHI7XHJcbn1cclxuZXhwb3J0cy5DT05TVF9FWFBSID0gQ09OU1RfRVhQUjtcclxuZnVuY3Rpb24gQ09OU1QoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0OyB9O1xyXG59XHJcbmV4cG9ydHMuQ09OU1QgPSBDT05TVDtcclxuZnVuY3Rpb24gaXNQcmVzZW50KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbDtcclxufVxyXG5leHBvcnRzLmlzUHJlc2VudCA9IGlzUHJlc2VudDtcclxuZnVuY3Rpb24gaXNCbGFuayhvYmopIHtcclxuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGw7XHJcbn1cclxuZXhwb3J0cy5pc0JsYW5rID0gaXNCbGFuaztcclxuZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIjtcclxufVxyXG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XHJcbmZ1bmN0aW9uIGlzVHlwZShvYmopIHtcclxuICAgIHJldHVybiBpc0Z1bmN0aW9uKG9iaik7XHJcbn1cclxuZXhwb3J0cy5pc1R5cGUgPSBpc1R5cGU7XHJcbmZ1bmN0aW9uIGlzU3RyaW5nTWFwKG9iaikge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbDtcclxufVxyXG5leHBvcnRzLmlzU3RyaW5nTWFwID0gaXNTdHJpbmdNYXA7XHJcbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBfZ2xvYmFsLlByb21pc2U7XHJcbn1cclxuZXhwb3J0cy5pc1Byb21pc2UgPSBpc1Byb21pc2U7XHJcbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xyXG59XHJcbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XHJcbmZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdudW1iZXInO1xyXG59XHJcbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcclxuZnVuY3Rpb24gaXNEYXRlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIGV4cG9ydHMuRGF0ZSAmJiAhaXNOYU4ob2JqLnZhbHVlT2YoKSk7XHJcbn1cclxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XHJcbmZ1bmN0aW9uIG5vb3AoKSB7IH1cclxuZXhwb3J0cy5ub29wID0gbm9vcDtcclxuZnVuY3Rpb24gc3RyaW5naWZ5KHRva2VuKSB7XHJcbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH1cclxuICAgIGlmICh0b2tlbiA9PT0gdW5kZWZpbmVkIHx8IHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuICcnICsgdG9rZW47XHJcbiAgICB9XHJcbiAgICBpZiAodG9rZW4ubmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0b2tlbi5uYW1lO1xyXG4gICAgfVxyXG4gICAgaWYgKHRva2VuLm92ZXJyaWRkZW5OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuLm92ZXJyaWRkZW5OYW1lO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlcyA9IHRva2VuLnRvU3RyaW5nKCk7XHJcbiAgICB2YXIgbmV3TGluZUluZGV4ID0gcmVzLmluZGV4T2YoXCJcXG5cIik7XHJcbiAgICByZXR1cm4gKG5ld0xpbmVJbmRleCA9PT0gLTEpID8gcmVzIDogcmVzLnN1YnN0cmluZygwLCBuZXdMaW5lSW5kZXgpO1xyXG59XHJcbmV4cG9ydHMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5O1xyXG4vLyBzZXJpYWxpemUgLyBkZXNlcmlhbGl6ZSBlbnVtIGV4aXN0IG9ubHkgZm9yIGNvbnNpc3RlbmN5IHdpdGggZGFydCBBUElcclxuLy8gZW51bXMgaW4gdHlwZXNjcmlwdCBkb24ndCBuZWVkIHRvIGJlIHNlcmlhbGl6ZWRcclxuZnVuY3Rpb24gc2VyaWFsaXplRW51bSh2YWwpIHtcclxuICAgIHJldHVybiB2YWw7XHJcbn1cclxuZXhwb3J0cy5zZXJpYWxpemVFbnVtID0gc2VyaWFsaXplRW51bTtcclxuZnVuY3Rpb24gZGVzZXJpYWxpemVFbnVtKHZhbCwgdmFsdWVzKSB7XHJcbiAgICByZXR1cm4gdmFsO1xyXG59XHJcbmV4cG9ydHMuZGVzZXJpYWxpemVFbnVtID0gZGVzZXJpYWxpemVFbnVtO1xyXG52YXIgU3RyaW5nV3JhcHBlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdHJpbmdXcmFwcGVyKCkge1xyXG4gICAgfVxyXG4gICAgU3RyaW5nV3JhcHBlci5mcm9tQ2hhckNvZGUgPSBmdW5jdGlvbiAoY29kZSkgeyByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTsgfTtcclxuICAgIFN0cmluZ1dyYXBwZXIuY2hhckNvZGVBdCA9IGZ1bmN0aW9uIChzLCBpbmRleCkgeyByZXR1cm4gcy5jaGFyQ29kZUF0KGluZGV4KTsgfTtcclxuICAgIFN0cmluZ1dyYXBwZXIuc3BsaXQgPSBmdW5jdGlvbiAocywgcmVnRXhwKSB7IHJldHVybiBzLnNwbGl0KHJlZ0V4cCk7IH07XHJcbiAgICBTdHJpbmdXcmFwcGVyLmVxdWFscyA9IGZ1bmN0aW9uIChzLCBzMikgeyByZXR1cm4gcyA9PT0gczI7IH07XHJcbiAgICBTdHJpbmdXcmFwcGVyLnN0cmlwTGVmdCA9IGZ1bmN0aW9uIChzLCBjaGFyVmFsKSB7XHJcbiAgICAgICAgaWYgKHMgJiYgcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNbaV0gIT0gY2hhclZhbClcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIHBvcysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHMgPSBzLnN1YnN0cmluZyhwb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH07XHJcbiAgICBTdHJpbmdXcmFwcGVyLnN0cmlwUmlnaHQgPSBmdW5jdGlvbiAocywgY2hhclZhbCkge1xyXG4gICAgICAgIGlmIChzICYmIHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBzLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChzW2ldICE9IGNoYXJWYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBwb3MtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzID0gcy5zdWJzdHJpbmcoMCwgcG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9O1xyXG4gICAgU3RyaW5nV3JhcHBlci5yZXBsYWNlID0gZnVuY3Rpb24gKHMsIGZyb20sIHJlcGxhY2UpIHtcclxuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKGZyb20sIHJlcGxhY2UpO1xyXG4gICAgfTtcclxuICAgIFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbCA9IGZ1bmN0aW9uIChzLCBmcm9tLCByZXBsYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZShmcm9tLCByZXBsYWNlKTtcclxuICAgIH07XHJcbiAgICBTdHJpbmdXcmFwcGVyLnNsaWNlID0gZnVuY3Rpb24gKHMsIGZyb20sIHRvKSB7XHJcbiAgICAgICAgaWYgKGZyb20gPT09IHZvaWQgMCkgeyBmcm9tID0gMDsgfVxyXG4gICAgICAgIGlmICh0byA9PT0gdm9pZCAwKSB7IHRvID0gbnVsbDsgfVxyXG4gICAgICAgIHJldHVybiBzLnNsaWNlKGZyb20sIHRvID09PSBudWxsID8gdW5kZWZpbmVkIDogdG8pO1xyXG4gICAgfTtcclxuICAgIFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbE1hcHBlZCA9IGZ1bmN0aW9uIChzLCBmcm9tLCBjYikge1xyXG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UoZnJvbSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlc1tfaSAtIDBdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgb2Zmc2V0ICYgc3RyaW5nIGZyb20gdGhlIHJlc3VsdCBhcnJheVxyXG4gICAgICAgICAgICBtYXRjaGVzLnNwbGljZSgtMiwgMik7XHJcbiAgICAgICAgICAgIC8vIFRoZSBjYWxsYmFjayByZWNlaXZlcyBtYXRjaCwgcDEsIC4uLiwgcG5cclxuICAgICAgICAgICAgcmV0dXJuIGNiKG1hdGNoZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFN0cmluZ1dyYXBwZXIuY29udGFpbnMgPSBmdW5jdGlvbiAocywgc3Vic3RyKSB7IHJldHVybiBzLmluZGV4T2Yoc3Vic3RyKSAhPSAtMTsgfTtcclxuICAgIFN0cmluZ1dyYXBwZXIuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEgPCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYSA+IGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0cmluZ1dyYXBwZXI7XHJcbn0pKCk7XHJcbmV4cG9ydHMuU3RyaW5nV3JhcHBlciA9IFN0cmluZ1dyYXBwZXI7XHJcbnZhciBTdHJpbmdKb2luZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RyaW5nSm9pbmVyKHBhcnRzKSB7XHJcbiAgICAgICAgaWYgKHBhcnRzID09PSB2b2lkIDApIHsgcGFydHMgPSBbXTsgfVxyXG4gICAgICAgIHRoaXMucGFydHMgPSBwYXJ0cztcclxuICAgIH1cclxuICAgIFN0cmluZ0pvaW5lci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHBhcnQpIHsgdGhpcy5wYXJ0cy5wdXNoKHBhcnQpOyB9O1xyXG4gICAgU3RyaW5nSm9pbmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMucGFydHMuam9pbihcIlwiKTsgfTtcclxuICAgIHJldHVybiBTdHJpbmdKb2luZXI7XHJcbn0pKCk7XHJcbmV4cG9ydHMuU3RyaW5nSm9pbmVyID0gU3RyaW5nSm9pbmVyO1xyXG52YXIgTnVtYmVyUGFyc2VFcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTnVtYmVyUGFyc2VFcnJvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE51bWJlclBhcnNlRXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICBOdW1iZXJQYXJzZUVycm9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMubWVzc2FnZTsgfTtcclxuICAgIHJldHVybiBOdW1iZXJQYXJzZUVycm9yO1xyXG59KShFcnJvcik7XHJcbmV4cG9ydHMuTnVtYmVyUGFyc2VFcnJvciA9IE51bWJlclBhcnNlRXJyb3I7XHJcbnZhciBOdW1iZXJXcmFwcGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE51bWJlcldyYXBwZXIoKSB7XHJcbiAgICB9XHJcbiAgICBOdW1iZXJXcmFwcGVyLnRvRml4ZWQgPSBmdW5jdGlvbiAobiwgZnJhY3Rpb25EaWdpdHMpIHsgcmV0dXJuIG4udG9GaXhlZChmcmFjdGlvbkRpZ2l0cyk7IH07XHJcbiAgICBOdW1iZXJXcmFwcGVyLmVxdWFsID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgPT09IGI7IH07XHJcbiAgICBOdW1iZXJXcmFwcGVyLnBhcnNlSW50QXV0b1JhZGl4ID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcGFyc2VJbnQodGV4dCk7XHJcbiAgICAgICAgaWYgKGlzTmFOKHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IE51bWJlclBhcnNlRXJyb3IoXCJJbnZhbGlkIGludGVnZXIgbGl0ZXJhbCB3aGVuIHBhcnNpbmcgXCIgKyB0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICBOdW1iZXJXcmFwcGVyLnBhcnNlSW50ID0gZnVuY3Rpb24gKHRleHQsIHJhZGl4KSB7XHJcbiAgICAgICAgaWYgKHJhZGl4ID09IDEwKSB7XHJcbiAgICAgICAgICAgIGlmICgvXihcXC18XFwrKT9bMC05XSskLy50ZXN0KHRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGV4dCwgcmFkaXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJhZGl4ID09IDE2KSB7XHJcbiAgICAgICAgICAgIGlmICgvXihcXC18XFwrKT9bMC05QUJDREVGYWJjZGVmXSskLy50ZXN0KHRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGV4dCwgcmFkaXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcGFyc2VJbnQodGV4dCwgcmFkaXgpO1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IE51bWJlclBhcnNlRXJyb3IoXCJJbnZhbGlkIGludGVnZXIgbGl0ZXJhbCB3aGVuIHBhcnNpbmcgXCIgKyB0ZXh0ICsgXCIgaW4gYmFzZSBcIiArXHJcbiAgICAgICAgICAgIHJhZGl4KTtcclxuICAgIH07XHJcbiAgICAvLyBUT0RPOiBOYU4gaXMgYSB2YWxpZCBsaXRlcmFsIGJ1dCBpcyByZXR1cm5lZCBieSBwYXJzZUZsb2F0IHRvIGluZGljYXRlIGFuIGVycm9yLlxyXG4gICAgTnVtYmVyV3JhcHBlci5wYXJzZUZsb2F0ID0gZnVuY3Rpb24gKHRleHQpIHsgcmV0dXJuIHBhcnNlRmxvYXQodGV4dCk7IH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyV3JhcHBlciwgXCJOYU5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTmFOOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE51bWJlcldyYXBwZXIuaXNOYU4gPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGlzTmFOKHZhbHVlKTsgfTtcclxuICAgIE51bWJlcldyYXBwZXIuaXNJbnRlZ2VyID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKTsgfTtcclxuICAgIHJldHVybiBOdW1iZXJXcmFwcGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLk51bWJlcldyYXBwZXIgPSBOdW1iZXJXcmFwcGVyO1xyXG5leHBvcnRzLlJlZ0V4cCA9IF9nbG9iYWwuUmVnRXhwO1xyXG52YXIgUmVnRXhwV3JhcHBlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWdFeHBXcmFwcGVyKCkge1xyXG4gICAgfVxyXG4gICAgUmVnRXhwV3JhcHBlci5jcmVhdGUgPSBmdW5jdGlvbiAocmVnRXhwU3RyLCBmbGFncykge1xyXG4gICAgICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7IGZsYWdzID0gJyc7IH1cclxuICAgICAgICBmbGFncyA9IGZsYWdzLnJlcGxhY2UoL2cvZywgJycpO1xyXG4gICAgICAgIHJldHVybiBuZXcgX2dsb2JhbC5SZWdFeHAocmVnRXhwU3RyLCBmbGFncyArICdnJyk7XHJcbiAgICB9O1xyXG4gICAgUmVnRXhwV3JhcHBlci5maXJzdE1hdGNoID0gZnVuY3Rpb24gKHJlZ0V4cCwgaW5wdXQpIHtcclxuICAgICAgICAvLyBSZXNldCBtdWx0aW1hdGNoIHJlZ2V4IHN0YXRlXHJcbiAgICAgICAgcmVnRXhwLmxhc3RJbmRleCA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHJlZ0V4cC5leGVjKGlucHV0KTtcclxuICAgIH07XHJcbiAgICBSZWdFeHBXcmFwcGVyLnRlc3QgPSBmdW5jdGlvbiAocmVnRXhwLCBpbnB1dCkge1xyXG4gICAgICAgIHJlZ0V4cC5sYXN0SW5kZXggPSAwO1xyXG4gICAgICAgIHJldHVybiByZWdFeHAudGVzdChpbnB1dCk7XHJcbiAgICB9O1xyXG4gICAgUmVnRXhwV3JhcHBlci5tYXRjaGVyID0gZnVuY3Rpb24gKHJlZ0V4cCwgaW5wdXQpIHtcclxuICAgICAgICAvLyBSZXNldCByZWdleCBzdGF0ZSBmb3IgdGhlIGNhc2VcclxuICAgICAgICAvLyBzb21lb25lIGRpZCBub3QgbG9vcCBvdmVyIGFsbCBtYXRjaGVzXHJcbiAgICAgICAgLy8gbGFzdCB0aW1lLlxyXG4gICAgICAgIHJlZ0V4cC5sYXN0SW5kZXggPSAwO1xyXG4gICAgICAgIHJldHVybiB7IHJlOiByZWdFeHAsIGlucHV0OiBpbnB1dCB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWdFeHBXcmFwcGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLlJlZ0V4cFdyYXBwZXIgPSBSZWdFeHBXcmFwcGVyO1xyXG52YXIgUmVnRXhwTWF0Y2hlcldyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVnRXhwTWF0Y2hlcldyYXBwZXIoKSB7XHJcbiAgICB9XHJcbiAgICBSZWdFeHBNYXRjaGVyV3JhcHBlci5uZXh0ID0gZnVuY3Rpb24gKG1hdGNoZXIpIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2hlci5yZS5leGVjKG1hdGNoZXIuaW5wdXQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWdFeHBNYXRjaGVyV3JhcHBlcjtcclxufSkoKTtcclxuZXhwb3J0cy5SZWdFeHBNYXRjaGVyV3JhcHBlciA9IFJlZ0V4cE1hdGNoZXJXcmFwcGVyO1xyXG52YXIgRnVuY3Rpb25XcmFwcGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZ1bmN0aW9uV3JhcHBlcigpIHtcclxuICAgIH1cclxuICAgIEZ1bmN0aW9uV3JhcHBlci5hcHBseSA9IGZ1bmN0aW9uIChmbiwgcG9zQXJncykgeyByZXR1cm4gZm4uYXBwbHkobnVsbCwgcG9zQXJncyk7IH07XHJcbiAgICByZXR1cm4gRnVuY3Rpb25XcmFwcGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLkZ1bmN0aW9uV3JhcHBlciA9IEZ1bmN0aW9uV3JhcHBlcjtcclxuLy8gSlMgaGFzIE5hTiAhPT0gTmFOXHJcbmZ1bmN0aW9uIGxvb3NlSWRlbnRpY2FsKGEsIGIpIHtcclxuICAgIHJldHVybiBhID09PSBiIHx8IHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBiID09PSBcIm51bWJlclwiICYmIGlzTmFOKGEpICYmIGlzTmFOKGIpO1xyXG59XHJcbmV4cG9ydHMubG9vc2VJZGVudGljYWwgPSBsb29zZUlkZW50aWNhbDtcclxuLy8gSlMgY29uc2lkZXJzIE5hTiBpcyB0aGUgc2FtZSBhcyBOYU4gZm9yIG1hcCBLZXkgKHdoaWxlIE5hTiAhPT0gTmFOIG90aGVyd2lzZSlcclxuLy8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcFxyXG5mdW5jdGlvbiBnZXRNYXBLZXkodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5leHBvcnRzLmdldE1hcEtleSA9IGdldE1hcEtleTtcclxuZnVuY3Rpb24gbm9ybWFsaXplQmxhbmsob2JqKSB7XHJcbiAgICByZXR1cm4gaXNCbGFuayhvYmopID8gbnVsbCA6IG9iajtcclxufVxyXG5leHBvcnRzLm5vcm1hbGl6ZUJsYW5rID0gbm9ybWFsaXplQmxhbms7XHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUJvb2wob2JqKSB7XHJcbiAgICByZXR1cm4gaXNCbGFuayhvYmopID8gZmFsc2UgOiBvYmo7XHJcbn1cclxuZXhwb3J0cy5ub3JtYWxpemVCb29sID0gbm9ybWFsaXplQm9vbDtcclxuZnVuY3Rpb24gaXNKc09iamVjdChvKSB7XHJcbiAgICByZXR1cm4gbyAhPT0gbnVsbCAmJiAodHlwZW9mIG8gPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIik7XHJcbn1cclxuZXhwb3J0cy5pc0pzT2JqZWN0ID0gaXNKc09iamVjdDtcclxuZnVuY3Rpb24gcHJpbnQob2JqKSB7XHJcbiAgICBjb25zb2xlLmxvZyhvYmopO1xyXG59XHJcbmV4cG9ydHMucHJpbnQgPSBwcmludDtcclxuLy8gQ2FuJ3QgYmUgYWxsIHVwcGVyY2FzZSBhcyBvdXIgdHJhbnNwaWxlciB3b3VsZCB0aGluayBpdCBpcyBhIHNwZWNpYWwgZGlyZWN0aXZlLi4uXHJcbnZhciBKc29uID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEpzb24oKSB7XHJcbiAgICB9XHJcbiAgICBKc29uLnBhcnNlID0gZnVuY3Rpb24gKHMpIHsgcmV0dXJuIF9nbG9iYWwuSlNPTi5wYXJzZShzKTsgfTtcclxuICAgIEpzb24uc3RyaW5naWZ5ID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvLyBEYXJ0IGRvZXNuJ3QgdGFrZSAzIGFyZ3VtZW50c1xyXG4gICAgICAgIHJldHVybiBfZ2xvYmFsLkpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBKc29uO1xyXG59KSgpO1xyXG5leHBvcnRzLkpzb24gPSBKc29uO1xyXG52YXIgRGF0ZVdyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRGF0ZVdyYXBwZXIoKSB7XHJcbiAgICB9XHJcbiAgICBEYXRlV3JhcHBlci5jcmVhdGUgPSBmdW5jdGlvbiAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlcywgc2Vjb25kcywgbWlsbGlzZWNvbmRzKSB7XHJcbiAgICAgICAgaWYgKG1vbnRoID09PSB2b2lkIDApIHsgbW9udGggPSAxOyB9XHJcbiAgICAgICAgaWYgKGRheSA9PT0gdm9pZCAwKSB7IGRheSA9IDE7IH1cclxuICAgICAgICBpZiAoaG91ciA9PT0gdm9pZCAwKSB7IGhvdXIgPSAwOyB9XHJcbiAgICAgICAgaWYgKG1pbnV0ZXMgPT09IHZvaWQgMCkgeyBtaW51dGVzID0gMDsgfVxyXG4gICAgICAgIGlmIChzZWNvbmRzID09PSB2b2lkIDApIHsgc2Vjb25kcyA9IDA7IH1cclxuICAgICAgICBpZiAobWlsbGlzZWNvbmRzID09PSB2b2lkIDApIHsgbWlsbGlzZWNvbmRzID0gMDsgfVxyXG4gICAgICAgIHJldHVybiBuZXcgZXhwb3J0cy5EYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5LCBob3VyLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHMpO1xyXG4gICAgfTtcclxuICAgIERhdGVXcmFwcGVyLmZyb21JU09TdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBuZXcgZXhwb3J0cy5EYXRlKHN0cik7IH07XHJcbiAgICBEYXRlV3JhcHBlci5mcm9tTWlsbGlzID0gZnVuY3Rpb24gKG1zKSB7IHJldHVybiBuZXcgZXhwb3J0cy5EYXRlKG1zKTsgfTtcclxuICAgIERhdGVXcmFwcGVyLnRvTWlsbGlzID0gZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0VGltZSgpOyB9O1xyXG4gICAgRGF0ZVdyYXBwZXIubm93ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IGV4cG9ydHMuRGF0ZSgpOyB9O1xyXG4gICAgRGF0ZVdyYXBwZXIudG9Kc29uID0gZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUudG9KU09OKCk7IH07XHJcbiAgICByZXR1cm4gRGF0ZVdyYXBwZXI7XHJcbn0pKCk7XHJcbmV4cG9ydHMuRGF0ZVdyYXBwZXIgPSBEYXRlV3JhcHBlcjtcclxuZnVuY3Rpb24gc2V0VmFsdWVPblBhdGgoZ2xvYmFsLCBwYXRoLCB2YWx1ZSkge1xyXG4gICAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgdmFyIG9iaiA9IGdsb2JhbDtcclxuICAgIHdoaWxlIChwYXJ0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBwYXJ0cy5zaGlmdCgpO1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkgJiYgaXNQcmVzZW50KG9ialtuYW1lXSkpIHtcclxuICAgICAgICAgICAgb2JqID0gb2JqW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb2JqID0gb2JqW25hbWVdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbCkge1xyXG4gICAgICAgIG9iaiA9IHt9O1xyXG4gICAgfVxyXG4gICAgb2JqW3BhcnRzLnNoaWZ0KCldID0gdmFsdWU7XHJcbn1cclxuZXhwb3J0cy5zZXRWYWx1ZU9uUGF0aCA9IHNldFZhbHVlT25QYXRoO1xyXG52YXIgX3N5bWJvbEl0ZXJhdG9yID0gbnVsbDtcclxuZnVuY3Rpb24gZ2V0U3ltYm9sSXRlcmF0b3IoKSB7XHJcbiAgICBpZiAoaXNCbGFuayhfc3ltYm9sSXRlcmF0b3IpKSB7XHJcbiAgICAgICAgaWYgKGlzUHJlc2VudChTeW1ib2wpICYmIGlzUHJlc2VudChTeW1ib2wuaXRlcmF0b3IpKSB7XHJcbiAgICAgICAgICAgIF9zeW1ib2xJdGVyYXRvciA9IFN5bWJvbC5pdGVyYXRvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGVzNi1zaGltIHNwZWNpZmljIGxvZ2ljXHJcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTWFwLnByb3RvdHlwZSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnZW50cmllcycgJiYga2V5ICE9PSAnc2l6ZScgJiZcclxuICAgICAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlW2tleV0gPT09IE1hcC5wcm90b3R5cGVbJ2VudHJpZXMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zeW1ib2xJdGVyYXRvciA9IGtleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBfc3ltYm9sSXRlcmF0b3I7XHJcbn1cclxuZXhwb3J0cy5nZXRTeW1ib2xJdGVyYXRvciA9IGdldFN5bWJvbEl0ZXJhdG9yO1xyXG5mdW5jdGlvbiBldmFsRXhwcmVzc2lvbihzb3VyY2VVcmwsIGV4cHIsIGRlY2xhcmF0aW9ucywgdmFycykge1xyXG4gICAgdmFyIGZuQm9keSA9IGRlY2xhcmF0aW9ucyArIFwiXFxucmV0dXJuIFwiICsgZXhwciArIFwiXFxuLy8jIHNvdXJjZVVSTD1cIiArIHNvdXJjZVVybDtcclxuICAgIHZhciBmbkFyZ05hbWVzID0gW107XHJcbiAgICB2YXIgZm5BcmdWYWx1ZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGFyZ05hbWUgaW4gdmFycykge1xyXG4gICAgICAgIGZuQXJnTmFtZXMucHVzaChhcmdOYW1lKTtcclxuICAgICAgICBmbkFyZ1ZhbHVlcy5wdXNoKHZhcnNbYXJnTmFtZV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24uYmluZC5hcHBseShGdW5jdGlvbiwgW3ZvaWQgMF0uY29uY2F0KGZuQXJnTmFtZXMuY29uY2F0KGZuQm9keSkpKSkoKS5hcHBseSh2b2lkIDAsIGZuQXJnVmFsdWVzKTtcclxufVxyXG5leHBvcnRzLmV2YWxFeHByZXNzaW9uID0gZXZhbEV4cHJlc3Npb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHRnVaeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltRnVaM1ZzWVhJeUwzTnlZeTltWVdOaFpHVXZiR0Z1Wnk1MGN5SmRMQ0p1WVcxbGN5STZXeUpuWlhSVWVYQmxUbUZ0WlVadmNrUmxZblZuWjJsdVp5SXNJbXh2WTJ0TmIyUmxJaXdpWlc1aFlteGxVSEp2WkUxdlpHVWlMQ0poYzNObGNuUnBiMjV6Ulc1aFlteGxaQ0lzSW1GemMyVnlkQ0lzSWtOUFRsTlVYMFZZVUZJaUxDSkRUMDVUVkNJc0ltbHpVSEpsYzJWdWRDSXNJbWx6UW14aGJtc2lMQ0pwYzFOMGNtbHVaeUlzSW1selJuVnVZM1JwYjI0aUxDSnBjMVI1Y0dVaUxDSnBjMU4wY21sdVowMWhjQ0lzSW1selVISnZiV2x6WlNJc0ltbHpRWEp5WVhraUxDSnBjMDUxYldKbGNpSXNJbWx6UkdGMFpTSXNJbTV2YjNBaUxDSnpkSEpwYm1kcFpua2lMQ0p6WlhKcFlXeHBlbVZGYm5WdElpd2laR1Z6WlhKcFlXeHBlbVZGYm5WdElpd2lVM1J5YVc1blYzSmhjSEJsY2lJc0lsTjBjbWx1WjFkeVlYQndaWEl1WTI5dWMzUnlkV04wYjNJaUxDSlRkSEpwYm1kWGNtRndjR1Z5TG1aeWIyMURhR0Z5UTI5a1pTSXNJbE4wY21sdVoxZHlZWEJ3WlhJdVkyaGhja052WkdWQmRDSXNJbE4wY21sdVoxZHlZWEJ3WlhJdWMzQnNhWFFpTENKVGRISnBibWRYY21Gd2NHVnlMbVZ4ZFdGc2N5SXNJbE4wY21sdVoxZHlZWEJ3WlhJdWMzUnlhWEJNWldaMElpd2lVM1J5YVc1blYzSmhjSEJsY2k1emRISnBjRkpwWjJoMElpd2lVM1J5YVc1blYzSmhjSEJsY2k1eVpYQnNZV05sSWl3aVUzUnlhVzVuVjNKaGNIQmxjaTV5WlhCc1lXTmxRV3hzSWl3aVUzUnlhVzVuVjNKaGNIQmxjaTV6YkdsalpTSXNJbE4wY21sdVoxZHlZWEJ3WlhJdWNtVndiR0ZqWlVGc2JFMWhjSEJsWkNJc0lsTjBjbWx1WjFkeVlYQndaWEl1WTI5dWRHRnBibk1pTENKVGRISnBibWRYY21Gd2NHVnlMbU52YlhCaGNtVWlMQ0pUZEhKcGJtZEtiMmx1WlhJaUxDSlRkSEpwYm1kS2IybHVaWEl1WTI5dWMzUnlkV04wYjNJaUxDSlRkSEpwYm1kS2IybHVaWEl1WVdSa0lpd2lVM1J5YVc1blNtOXBibVZ5TG5SdlUzUnlhVzVuSWl3aVRuVnRZbVZ5VUdGeWMyVkZjbkp2Y2lJc0lrNTFiV0psY2xCaGNuTmxSWEp5YjNJdVkyOXVjM1J5ZFdOMGIzSWlMQ0pPZFcxaVpYSlFZWEp6WlVWeWNtOXlMblJ2VTNSeWFXNW5JaXdpVG5WdFltVnlWM0poY0hCbGNpSXNJazUxYldKbGNsZHlZWEJ3WlhJdVkyOXVjM1J5ZFdOMGIzSWlMQ0pPZFcxaVpYSlhjbUZ3Y0dWeUxuUnZSbWw0WldRaUxDSk9kVzFpWlhKWGNtRndjR1Z5TG1WeGRXRnNJaXdpVG5WdFltVnlWM0poY0hCbGNpNXdZWEp6WlVsdWRFRjFkRzlTWVdScGVDSXNJazUxYldKbGNsZHlZWEJ3WlhJdWNHRnljMlZKYm5RaUxDSk9kVzFpWlhKWGNtRndjR1Z5TG5CaGNuTmxSbXh2WVhRaUxDSk9kVzFpWlhKWGNtRndjR1Z5TGs1aFRpSXNJazUxYldKbGNsZHlZWEJ3WlhJdWFYTk9ZVTRpTENKT2RXMWlaWEpYY21Gd2NHVnlMbWx6U1c1MFpXZGxjaUlzSWxKbFowVjRjRmR5WVhCd1pYSWlMQ0pTWldkRmVIQlhjbUZ3Y0dWeUxtTnZibk4wY25WamRHOXlJaXdpVW1WblJYaHdWM0poY0hCbGNpNWpjbVZoZEdVaUxDSlNaV2RGZUhCWGNtRndjR1Z5TG1acGNuTjBUV0YwWTJnaUxDSlNaV2RGZUhCWGNtRndjR1Z5TG5SbGMzUWlMQ0pTWldkRmVIQlhjbUZ3Y0dWeUxtMWhkR05vWlhJaUxDSlNaV2RGZUhCTllYUmphR1Z5VjNKaGNIQmxjaUlzSWxKbFowVjRjRTFoZEdOb1pYSlhjbUZ3Y0dWeUxtTnZibk4wY25WamRHOXlJaXdpVW1WblJYaHdUV0YwWTJobGNsZHlZWEJ3WlhJdWJtVjRkQ0lzSWtaMWJtTjBhVzl1VjNKaGNIQmxjaUlzSWtaMWJtTjBhVzl1VjNKaGNIQmxjaTVqYjI1emRISjFZM1J2Y2lJc0lrWjFibU4wYVc5dVYzSmhjSEJsY2k1aGNIQnNlU0lzSW14dmIzTmxTV1JsYm5ScFkyRnNJaXdpWjJWMFRXRndTMlY1SWl3aWJtOXliV0ZzYVhwbFFteGhibXNpTENKdWIzSnRZV3hwZW1WQ2IyOXNJaXdpYVhOS2MwOWlhbVZqZENJc0luQnlhVzUwSWl3aVNuTnZiaUlzSWtwemIyNHVZMjl1YzNSeWRXTjBiM0lpTENKS2MyOXVMbkJoY25ObElpd2lTbk52Ymk1emRISnBibWRwWm5raUxDSkVZWFJsVjNKaGNIQmxjaUlzSWtSaGRHVlhjbUZ3Y0dWeUxtTnZibk4wY25WamRHOXlJaXdpUkdGMFpWZHlZWEJ3WlhJdVkzSmxZWFJsSWl3aVJHRjBaVmR5WVhCd1pYSXVabkp2YlVsVFQxTjBjbWx1WnlJc0lrUmhkR1ZYY21Gd2NHVnlMbVp5YjIxTmFXeHNhWE1pTENKRVlYUmxWM0poY0hCbGNpNTBiMDFwYkd4cGN5SXNJa1JoZEdWWGNtRndjR1Z5TG01dmR5SXNJa1JoZEdWWGNtRndjR1Z5TG5SdlNuTnZiaUlzSW5ObGRGWmhiSFZsVDI1UVlYUm9JaXdpWjJWMFUzbHRZbTlzU1hSbGNtRjBiM0lpTENKbGRtRnNSWGh3Y21WemMybHZiaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGRlFTeEpRVUZKTEZkQlFUaENMRU5CUVVNN1FVRkRia01zUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4TlFVRk5MRXRCUVVzc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5zUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExHbENRVUZwUWl4TFFVRkxMRmRCUVZjc1NVRkJTU3hKUVVGSkxGbEJRVmtzYVVKQlFXbENMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhHTEhsRlFVRjVSVHRSUVVONlJTeFhRVUZYTEVkQlFWRXNTVUZCU1N4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTk9MRmRCUVZjc1IwRkJVU3hOUVVGTkxFTkJRVU03U1VGRE5VSXNRMEZCUXp0QlFVTklMRU5CUVVNN1FVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5PTEZkQlFWY3NSMEZCVVN4TlFVRk5MRU5CUVVNN1FVRkROVUlzUTBGQlF6dEJRVUZCTEVOQlFVTTdRVUZGVnl4bFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJSVGRDTEd0RlFVRnJSVHRCUVVOc1JTdzBRMEZCTkVNN1FVRkROVU1zU1VGQlNTeFBRVUZQTEVkQlFYTkNMRmRCUVZjN1FVRkZla0lzWTBGQlRTeFhRVVp2UWp0QlFVbHNReXhaUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETzBGQlpUTkNMR2xEUVVGM1F5eEpRVUZWTzBsQlEyaEVRU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeE5RVUZOUVN4RFFVRkRRU3hEUVVGRFFUdEJRVU4wUWtFc1EwRkJRMEU3UVVGR1pTd3JRa0ZCZFVJc01FSkJSWFJETEVOQlFVRTdRVUZIVlN4WlFVRkpMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF6dEJRVU53UWl4WlFVRkpMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF6dEJRVVV2UWl4SlFVRkpMRkZCUVZFc1IwRkJXU3hKUVVGSkxFTkJRVU03UVVGRE4wSXNTVUZCU1N4WFFVRlhMRWRCUVZrc1MwRkJTeXhEUVVGRE8wRkJSV3BETzBsQlEwVkRMRmRCUVZkQkxFZEJRVWRCTEVsQlFVbEJMRU5CUVVOQk8wRkJRM0pDUVN4RFFVRkRRVHRCUVVabExHZENRVUZSTEZkQlJYWkNMRU5CUVVFN1FVRkZSRHM3T3pzN096dEhRVTlITzBGQlEwZzdTVUZEUlVNc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1YwRkJWMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3VVVGRGFFSkJMSFZGUVVGMVJVRTdVVUZEZGtWQkxFMUJRVTFCTEN0RFFVRXJRMEVzUTBGQlEwRTdTVUZEZUVSQkxFTkJRVU5CTzBsQlEwUkJMRkZCUVZGQkxFZEJRVWRCTEV0QlFVdEJMRU5CUVVOQk8wRkJRMjVDUVN4RFFVRkRRVHRCUVU1bExITkNRVUZqTEdsQ1FVMDNRaXhEUVVGQk8wRkJSVVE3U1VGRFJVTXNUVUZCVFVFc1EwRkJRMEVzVVVGQlVVRXNRMEZCUTBFN1FVRkRiRUpCTEVOQlFVTkJPMEZCUm1Vc2VVSkJRV2xDTEc5Q1FVVm9ReXhEUVVGQk8wRkJSVVFzZVVSQlFYbEVPMEZCUTNwRUxEUkVRVUUwUkR0QlFVTTFSQ3cwUTBGQk5FTTdRVUZETlVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eG5Ra0ZCWjBJc1UwRkJVenRKUVVONFEwTXNjVVJCUVhGRVFUdEJRVU4yUkVFc1EwRkJRMEVzUTBGQlF6dEJRVVZHTERSRlFVRTBSVHRCUVVNMVJTeG5SVUZCWjBVN1FVRkRhRVVzYjBKQlFUaENMRWxCUVU4N1NVRkRia05ETEUxQlFVMUJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJPMEZCUTJSQkxFTkJRVU5CTzBGQlJtVXNhMEpCUVZVc1lVRkZla0lzUTBGQlFUdEJRVVZFTzBsQlEwVkRMRTFCUVUxQkxFTkJRVU5CTEZWQlFVTkJMRTFCUVUxQkxFbEJRVXRCTEU5QlFVRkJMRTFCUVUxQkxFVkJRVTVCTEVOQlFVMUJMRU5CUVVOQk8wRkJRelZDUVN4RFFVRkRRVHRCUVVabExHRkJRVXNzVVVGRmNFSXNRMEZCUVR0QlFVVkVMRzFDUVVFd1FpeEhRVUZSTzBsQlEyaERReXhOUVVGTlFTeERRVUZEUVN4SFFVRkhRU3hMUVVGTFFTeFRRVUZUUVN4SlFVRkpRU3hIUVVGSFFTeExRVUZMUVN4SlFVRkpRU3hEUVVGRFFUdEJRVU16UTBFc1EwRkJRMEU3UVVGR1pTeHBRa0ZCVXl4WlFVVjRRaXhEUVVGQk8wRkJSVVFzYVVKQlFYZENMRWRCUVZFN1NVRkRPVUpETEUxQlFVMUJMRU5CUVVOQkxFZEJRVWRCTEV0QlFVdEJMRk5CUVZOQkxFbEJRVWxCTEVkQlFVZEJMRXRCUVV0QkxFbEJRVWxCTEVOQlFVTkJPMEZCUXpORFFTeERRVUZEUVR0QlFVWmxMR1ZCUVU4c1ZVRkZkRUlzUTBGQlFUdEJRVVZFTEd0Q1FVRjVRaXhIUVVGUk8wbEJReTlDUXl4TlFVRk5RU3hEUVVGRFFTeFBRVUZQUVN4SFFVRkhRU3hMUVVGTFFTeFJRVUZSUVN4RFFVRkRRVHRCUVVOcVEwRXNRMEZCUTBFN1FVRkdaU3huUWtGQlVTeFhRVVYyUWl4RFFVRkJPMEZCUlVRc2IwSkJRVEpDTEVkQlFWRTdTVUZEYWtORExFMUJRVTFCTEVOQlFVTkJMRTlCUVU5QkxFZEJRVWRCTEV0QlFVdEJMRlZCUVZWQkxFTkJRVU5CTzBGQlEyNURRU3hEUVVGRFFUdEJRVVpsTEd0Q1FVRlZMR0ZCUlhwQ0xFTkJRVUU3UVVGRlJDeG5Ra0ZCZFVJc1IwRkJVVHRKUVVNM1FrTXNUVUZCVFVFc1EwRkJRMEVzVlVGQlZVRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNRMEZCUTBFN1FVRkRla0pCTEVOQlFVTkJPMEZCUm1Vc1kwRkJUU3hUUVVWeVFpeERRVUZCTzBGQlJVUXNjVUpCUVRSQ0xFZEJRVkU3U1VGRGJFTkRMRTFCUVUxQkxFTkJRVU5CTEU5QlFVOUJMRWRCUVVkQkxFdEJRVXRCTEZGQlFWRkJMRWxCUVVsQkxFZEJRVWRCTEV0QlFVdEJMRWxCUVVsQkxFTkJRVU5CTzBGQlEycEVRU3hEUVVGRFFUdEJRVVpsTEcxQ1FVRlhMR05CUlRGQ0xFTkJRVUU3UVVGRlJDeHRRa0ZCTUVJc1IwRkJVVHRKUVVOb1EwTXNUVUZCVFVFc1EwRkJRMEVzUjBGQlIwRXNXVUZCYTBKQkxFOUJRVkZCTEVOQlFVTkJMRTlCUVU5QkxFTkJRVU5CTzBGQlF5OURRU3hEUVVGRFFUdEJRVVpsTEdsQ1FVRlRMRmxCUlhoQ0xFTkJRVUU3UVVGRlJDeHBRa0ZCZDBJc1IwRkJVVHRKUVVNNVFrTXNUVUZCVFVFc1EwRkJRMEVzUzBGQlMwRXNRMEZCUTBFc1QwRkJUMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRTdRVUZETlVKQkxFTkJRVU5CTzBGQlJtVXNaVUZCVHl4VlFVVjBRaXhEUVVGQk8wRkJSVVFzYTBKQlFYbENMRWRCUVVjN1NVRkRNVUpETEUxQlFVMUJMRU5CUVVOQkxFOUJRVTlCTEVkQlFVZEJMRXRCUVV0QkxGRkJRVkZCTEVOQlFVTkJPMEZCUTJwRFFTeERRVUZEUVR0QlFVWmxMR2RDUVVGUkxGZEJSWFpDTEVOQlFVRTdRVUZGUkN4blFrRkJkVUlzUjBGQlJ6dEpRVU40UWtNc1RVRkJUVUVzUTBGQlEwRXNSMEZCUjBFc1dVRkJXVUVzV1VGQlNVRXNTVUZCU1VFc1EwRkJRMEVzUzBGQlMwRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNUMEZCVDBFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFN1FVRkRkRVJCTEVOQlFVTkJPMEZCUm1Vc1kwRkJUU3hUUVVWeVFpeERRVUZCTzBGQlJVUXNhMEpCUVhkQ1F5eERRVUZEUVR0QlFVRlVMRmxCUVVrc1QwRkJTeXhEUVVGQk8wRkJSWHBDTEcxQ1FVRXdRaXhMUVVGTE8wbEJRemRDUXl4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4UFFVRlBRU3hMUVVGTFFTeExRVUZMUVN4UlFVRlJRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRSUVVNNVFrRXNUVUZCVFVFc1EwRkJRMEVzUzBGQlMwRXNRMEZCUTBFN1NVRkRaa0VzUTBGQlEwRTdTVUZGUkVFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1MwRkJTMEVzUzBGQlMwRXNVMEZCVTBFc1NVRkJTVUVzUzBGQlMwRXNTMEZCUzBFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3VVVGRE1VTkJMRTFCUVUxQkxFTkJRVU5CTEVWQlFVVkJMRWRCUVVkQkxFdEJRVXRCTEVOQlFVTkJPMGxCUTNCQ1FTeERRVUZEUVR0SlFVVkVRU3hGUVVGRlFTeERRVUZEUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRSUVVObVFTeE5RVUZOUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFUdEpRVU53UWtFc1EwRkJRMEU3U1VGRFJFRXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNTMEZCUzBFc1EwRkJRMEVzWTBGQlkwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdVVUZEZWtKQkxFMUJRVTFCTEVOQlFVTkJMRXRCUVV0QkxFTkJRVU5CTEdOQlFXTkJMRU5CUVVOQk8wbEJRemxDUVN4RFFVRkRRVHRKUVVWRVFTeEpRVUZKUVN4SFFVRkhRU3hIUVVGSFFTeExRVUZMUVN4RFFVRkRRU3hSUVVGUlFTeEZRVUZGUVN4RFFVRkRRVHRKUVVNelFrRXNTVUZCU1VFc1dVRkJXVUVzUjBGQlIwRXNSMEZCUjBFc1EwRkJRMEVzVDBGQlQwRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFN1NVRkRja05CTEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEZsQlFWbEJMRXRCUVV0QkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFZEJRVWRCTEVkQlFVZEJMRWRCUVVkQkxFZEJRVWRCTEVOQlFVTkJMRk5CUVZOQkxFTkJRVU5CTEVOQlFVTkJMRVZCUVVWQkxGbEJRVmxCTEVOQlFVTkJMRU5CUVVOQk8wRkJRM1JGUVN4RFFVRkRRVHRCUVc1Q1pTeHBRa0ZCVXl4WlFXMUNlRUlzUTBGQlFUdEJRVVZFTEhkRlFVRjNSVHRCUVVONFJTeHJSRUZCYTBRN1FVRkZiRVFzZFVKQlFUaENMRWRCUVVjN1NVRkRMMEpETEUxQlFVMUJMRU5CUVVOQkxFZEJRVWRCTEVOQlFVTkJPMEZCUTJKQkxFTkJRVU5CTzBGQlJtVXNjVUpCUVdFc1owSkJSVFZDTEVOQlFVRTdRVUZGUkN4NVFrRkJaME1zUjBGQlJ5eEZRVUZGTEUxQlFYZENPMGxCUXpORVF5eE5RVUZOUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVR0QlFVTmlRU3hEUVVGRFFUdEJRVVpsTEhWQ1FVRmxMR3RDUVVVNVFpeERRVUZCTzBGQlJVUTdTVUZCUVVNN1NVRnBSVUZETEVOQlFVTkJPMGxCYUVWUlJDd3dRa0ZCV1VFc1IwRkJia0pCTEZWQlFXOUNRU3hKUVVGWlFTeEpRVUZaUlN4TlFVRk5RU3hEUVVGRFFTeE5RVUZOUVN4RFFVRkRRU3haUVVGWlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdEpRVVY0UlVZc2QwSkJRVlZCTEVkQlFXcENRU3hWUVVGclFrRXNRMEZCVTBFc1JVRkJSVUVzUzBGQllVRXNTVUZCV1Vjc1RVRkJUVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzVlVGQlZVRXNRMEZCUTBFc1MwRkJTMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdTVUZGTlVWSUxHMUNRVUZMUVN4SFFVRmFRU3hWUVVGaFFTeERRVUZUUVN4RlFVRkZRU3hOUVVGalFTeEpRVUZqU1N4TlFVRk5RU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVN4TlFVRk5RU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdEpRVVYwUlVvc2IwSkJRVTFCTEVkQlFXSkJMRlZCUVdOQkxFTkJRVk5CTEVWQlFVVkJMRVZCUVZWQkxFbEJRV0ZMTEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEV0QlFVdEJMRVZCUVVWQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJSVE5FVEN4MVFrRkJVMEVzUjBGQmFFSkJMRlZCUVdsQ1FTeERRVUZUUVN4RlFVRkZRU3hQUVVGbFFUdFJRVU42UTAwc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEVzVFVGQlRVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdXVUZEYkVKQkxFbEJRVWxCTEVkQlFVZEJMRWRCUVVkQkxFTkJRVU5CTEVOQlFVTkJPMWxCUTFwQkxFZEJRVWRCTEVOQlFVTkJMRU5CUVVOQkxFZEJRVWRCTEVOQlFVTkJMRU5CUVVOQkxFZEJRVWRCTEVOQlFVTkJMRVZCUVVWQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFTkJRVU5CTEUxQlFVMUJMRVZCUVVWQkxFTkJRVU5CTEVWQlFVVkJMRVZCUVVWQkxFTkJRVU5CTzJkQ1FVTnNRMEVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNTVUZCU1VFc1QwRkJUMEVzUTBGQlEwRTdiMEpCUVVOQkxFdEJRVXRCTEVOQlFVTkJPMmRDUVVNelFrRXNSMEZCUjBFc1JVRkJSVUVzUTBGQlEwRTdXVUZEVWtFc1EwRkJRMEU3V1VGRFJFRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNRMEZCUTBFc1UwRkJVMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRTdVVUZEZGtKQkxFTkJRVU5CTzFGQlEwUkJMRTFCUVUxQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJRMWhCTEVOQlFVTkJPMGxCUlUxT0xIZENRVUZWUVN4SFFVRnFRa0VzVlVGQmEwSkJMRU5CUVZOQkxFVkJRVVZCTEU5QlFXVkJPMUZCUXpGRFR5eEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4TlFVRk5RU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRaUVVOc1FrRXNTVUZCU1VFc1IwRkJSMEVzUjBGQlIwRXNRMEZCUTBFc1EwRkJRMEVzVFVGQlRVRXNRMEZCUTBFN1dVRkRia0pCTEVkQlFVZEJMRU5CUVVOQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFTkJRVU5CTEUxQlFVMUJMRWRCUVVkQkxFTkJRVU5CTEVWQlFVVkJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRVZCUVVWQkxFTkJRVU5CTEVWQlFVVkJMRVZCUVVWQkxFTkJRVU5CTzJkQ1FVTjJRMEVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNTVUZCU1VFc1QwRkJUMEVzUTBGQlEwRTdiMEpCUVVOQkxFdEJRVXRCTEVOQlFVTkJPMmRDUVVNelFrRXNSMEZCUjBFc1JVRkJSVUVzUTBGQlEwRTdXVUZEVWtFc1EwRkJRMEU3V1VGRFJFRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNRMEZCUTBFc1UwRkJVMEVzUTBGQlEwRXNRMEZCUTBFc1JVRkJSVUVzUjBGQlIwRXNRMEZCUTBFc1EwRkJRMEU3VVVGRE1VSkJMRU5CUVVOQk8xRkJRMFJCTEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMGxCUTFoQkxFTkJRVU5CTzBsQlJVMVFMSEZDUVVGUFFTeEhRVUZrUVN4VlFVRmxRU3hEUVVGVFFTeEZRVUZGUVN4SlFVRlpRU3hGUVVGRlFTeFBRVUZsUVR0UlFVTnlSRkVzVFVGQlRVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNUMEZCVDBFc1EwRkJRMEVzU1VGQlNVRXNSVUZCUlVFc1QwRkJUMEVzUTBGQlEwRXNRMEZCUTBFN1NVRkRiRU5CTEVOQlFVTkJPMGxCUlUxU0xIZENRVUZWUVN4SFFVRnFRa0VzVlVGQmEwSkJMRU5CUVZOQkxFVkJRVVZCTEVsQlFWbEJMRVZCUVVWQkxFOUJRV1ZCTzFGQlEzaEVVeXhOUVVGTlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeFBRVUZQUVN4RFFVRkRRU3hKUVVGSlFTeEZRVUZGUVN4UFFVRlBRU3hEUVVGRFFTeERRVUZEUVR0SlFVTnNRMEVzUTBGQlEwRTdTVUZGVFZRc2JVSkJRVXRCTEVkQlFWcEJMRlZCUVdkQ1FTeERRVUZUUVN4RlFVRkZRU3hKUVVGblFrRXNSVUZCUlVFc1JVRkJhVUpCTzFGQlFXNURWU3h2UWtGQlowSkJMRWRCUVdoQ1FTeFJRVUZuUWtFN1VVRkJSVUVzYTBKQlFXbENRU3hIUVVGcVFrRXNVMEZCYVVKQk8xRkJRelZFUVN4TlFVRk5RU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVN4SlFVRkpRU3hGUVVGRlFTeEZRVUZGUVN4TFFVRkxRU3hKUVVGSlFTeEhRVUZIUVN4VFFVRlRRU3hIUVVGSFFTeEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU55UkVFc1EwRkJRMEU3U1VGRlRWWXNPRUpCUVdkQ1FTeEhRVUYyUWtFc1ZVRkJkMEpCTEVOQlFWTkJMRVZCUVVWQkxFbEJRVmxCTEVWQlFVVkJMRVZCUVZsQk8xRkJRek5FVnl4TlFVRk5RU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hQUVVGUFFTeERRVUZEUVN4SlFVRkpRU3hGUVVGRlFUdFpRVUZUTEdsQ1FVRlZPMmxDUVVGV0xGZEJRVlVzUTBGQlZpeHpRa0ZCVlN4RFFVRldMRWxCUVZVN1owSkJRVllzWjBOQlFWVTdPMWxCUTNoRExDdERRVUVyUXp0WlFVTXZReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1JDTERKRFFVRXlRenRaUVVNelF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRM0pDTEVOQlFVTXNRMEZCUTBFc1EwRkJRMEU3U1VGRFRFRXNRMEZCUTBFN1NVRkZUVmdzYzBKQlFWRkJMRWRCUVdaQkxGVkJRV2RDUVN4RFFVRlRRU3hGUVVGRlFTeE5RVUZqUVN4SlFVRmhXU3hOUVVGTlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeFBRVUZQUVN4RFFVRkRRU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0SlFVVm9SbG9zY1VKQlFVOUJMRWRCUVdSQkxGVkJRV1ZCTEVOQlFWTkJMRVZCUVVWQkxFTkJRVk5CTzFGQlEycERZU3hGUVVGRlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRaUVVOV1FTeE5RVUZOUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRSUVVOYVFTeERRVUZEUVR0UlFVRkRRU3hKUVVGSlFTeERRVUZEUVN4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0WlFVTnFRa0VzVFVGQlRVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdVVUZEV0VFc1EwRkJRMEU3VVVGQlEwRXNTVUZCU1VFc1EwRkJRMEVzUTBGQlEwRTdXVUZEVGtFc1RVRkJUVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3VVVGRFdFRXNRMEZCUTBFN1NVRkRTRUVzUTBGQlEwRTdTVUZEU0dJc2IwSkJRVU5CTzBGQlFVUkJMRU5CUVVOQkxFRkJha1ZFTEVsQmFVVkRPMEZCYWtWWkxIRkNRVUZoTEdkQ1FXbEZla0lzUTBGQlFUdEJRVVZFTzBsQlEwVmpMSE5DUVVGdFFrRXNTMEZCVlVFN1VVRkJha0pETEhGQ1FVRnBRa0VzUjBGQmFrSkJMRlZCUVdsQ1FUdFJRVUZXUVN4VlFVRkxRU3hIUVVGTVFTeExRVUZMUVN4RFFVRkxRVHRKUVVGSFFTeERRVUZEUVR0SlFVVnFRMFFzTUVKQlFVZEJMRWRCUVVoQkxGVkJRVWxCTEVsQlFWbEJMRWxCUVZWRkxFbEJRVWxCTEVOQlFVTkJMRXRCUVV0QkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMGxCUld4RVJpd3JRa0ZCVVVFc1IwRkJVa0VzWTBGQmNVSkhMRTFCUVUxQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFdEJRVXRCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJRM0JFU0N4dFFrRkJRMEU3UVVGQlJFRXNRMEZCUTBFc1FVRk9SQ3hKUVUxRE8wRkJUbGtzYjBKQlFWa3NaVUZOZUVJc1EwRkJRVHRCUVVWRU8wbEJRWE5EU1N4dlEwRkJTMEU3U1VGSGVrTkJMREJDUVVGdFFrRXNUMEZCWlVFN1VVRkJTVU1zYVVKQlFVOUJMRU5CUVVOQk8xRkJRVE5DUVN4WlFVRlBRU3hIUVVGUVFTeFBRVUZQUVN4RFFVRlJRVHRKUVVGaFFTeERRVUZEUVR0SlFVVm9SRVFzYlVOQlFWRkJMRWRCUVZKQkxHTkJRWEZDUlN4TlFVRk5RU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hQUVVGUFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU0zUTBZc2RVSkJRVU5CTzBGQlFVUkJMRU5CUVVOQkxFRkJUa1FzUlVGQmMwTXNTMEZCU3l4RlFVMHhRenRCUVU1WkxIZENRVUZuUWl4dFFrRk5OVUlzUTBGQlFUdEJRVWRFTzBsQlFVRkhPMGxCZDBOQlF5eERRVUZEUVR0SlFYWkRVVVFzY1VKQlFVOUJMRWRCUVdSQkxGVkJRV1ZCTEVOQlFWTkJMRVZCUVVWQkxHTkJRWE5DUVN4SlFVRlpSU3hOUVVGTlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeFBRVUZQUVN4RFFVRkRRU3hqUVVGalFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0SlFVVjRSa1lzYlVKQlFVdEJMRWRCUVZwQkxGVkJRV0ZCTEVOQlFWTkJMRVZCUVVWQkxFTkJRVk5CTEVsQlFXRkhMRTFCUVUxQkxFTkJRVU5CTEVOQlFVTkJMRXRCUVV0QkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzBsQlJYaEVTQ3dyUWtGQmFVSkJMRWRCUVhoQ1FTeFZRVUY1UWtFc1NVRkJXVUU3VVVGRGJrTkpMRWxCUVVsQkxFMUJRVTFCTEVkQlFWZEJMRkZCUVZGQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTzFGQlEzQkRRU3hGUVVGRlFTeERRVUZEUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVN4TlFVRk5RU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdFpRVU5zUWtFc1RVRkJUVUVzU1VGQlNVRXNaMEpCUVdkQ1FTeERRVUZEUVN4MVEwRkJkVU5CTEVkQlFVZEJMRWxCUVVsQkxFTkJRVU5CTEVOQlFVTkJPMUZCUXpkRlFTeERRVUZEUVR0UlFVTkVRU3hOUVVGTlFTeERRVUZEUVN4TlFVRk5RU3hEUVVGRFFUdEpRVU5vUWtFc1EwRkJRMEU3U1VGRlRVb3NjMEpCUVZGQkxFZEJRV1pCTEZWQlFXZENRU3hKUVVGWlFTeEZRVUZGUVN4TFFVRmhRVHRSUVVONlEwc3NSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNTMEZCUzBFc1NVRkJTVUVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdXVUZEYUVKQkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxHdENRVUZyUWtFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdaMEpCUTJ4RFFTeE5RVUZOUVN4RFFVRkRRU3hSUVVGUlFTeERRVUZEUVN4SlFVRkpRU3hGUVVGRlFTeExRVUZMUVN4RFFVRkRRU3hEUVVGRFFUdFpRVU12UWtFc1EwRkJRMEU3VVVGRFNFRXNRMEZCUTBFN1VVRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1MwRkJTMEVzU1VGQlNVRXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1dVRkRka0pCTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTERoQ1FVRTRRa0VzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1owSkJRemxEUVN4TlFVRk5RU3hEUVVGRFFTeFJRVUZSUVN4RFFVRkRRU3hKUVVGSlFTeEZRVUZGUVN4TFFVRkxRU3hEUVVGRFFTeERRVUZEUVR0WlFVTXZRa0VzUTBGQlEwRTdVVUZEU0VFc1EwRkJRMEU3VVVGQlEwRXNTVUZCU1VFc1EwRkJRMEVzUTBGQlEwRTdXVUZEVGtFc1NVRkJTVUVzVFVGQlRVRXNSMEZCVjBFc1VVRkJVVUVzUTBGQlEwRXNTVUZCU1VFc1JVRkJSVUVzUzBGQlMwRXNRMEZCUTBFc1EwRkJRMEU3V1VGRE0wTkJMRVZCUVVWQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFdEJRVXRCTEVOQlFVTkJMRTFCUVUxQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzJkQ1FVTnVRa0VzVFVGQlRVRXNRMEZCUTBFc1RVRkJUVUVzUTBGQlEwRTdXVUZEYUVKQkxFTkJRVU5CTzFGQlEwaEJMRU5CUVVOQk8xRkJRMFJCTEUxQlFVMUJMRWxCUVVsQkxHZENRVUZuUWtFc1EwRkJRMEVzZFVOQlFYVkRRU3hIUVVGSFFTeEpRVUZKUVN4SFFVRkhRU3hYUVVGWFFUdFpRVU0xUkVFc1MwRkJTMEVzUTBGQlEwRXNRMEZCUTBFN1NVRkRjRU5CTEVOQlFVTkJPMGxCUlVSTUxHMUdRVUZ0UmtFN1NVRkROVVZCTEhkQ1FVRlZRU3hIUVVGcVFrRXNWVUZCYTBKQkxFbEJRVmxCTEVsQlFWbE5MRTFCUVUxQkxFTkJRVU5CTEZWQlFWVkJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMGxCUlhCRlRpeHpRa0ZCVjBFc2IwSkJRVWRCTzJGQlFXUkJMR05CUVRKQ1R5eE5RVUZOUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUczdPMDlCUVVGUU8wbEJSV3BEUVN4dFFrRkJTMEVzUjBGQldrRXNWVUZCWVVFc1MwRkJWVUVzU1VGQllWRXNUVUZCVFVFc1EwRkJRMEVzUzBGQlMwRXNRMEZCUTBFc1MwRkJTMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdTVUZGYmtSU0xIVkNRVUZUUVN4SFFVRm9Ra0VzVlVGQmFVSkJMRXRCUVZWQkxFbEJRV0ZUTEUxQlFVMUJMRU5CUVVOQkxFMUJRVTFCTEVOQlFVTkJMRk5CUVZOQkxFTkJRVU5CTEV0QlFVdEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJRek5GVkN4dlFrRkJRMEU3UVVGQlJFRXNRMEZCUTBFc1FVRjRRMFFzU1VGM1EwTTdRVUY0UTFrc2NVSkJRV0VzWjBKQmQwTjZRaXhEUVVGQk8wRkJSVlVzWTBGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1FVRkZia003U1VGQlFWVTdTVUY1UWtGRExFTkJRVU5CTzBsQmVFSlJSQ3h2UWtGQlRVRXNSMEZCWWtFc1ZVRkJZMEVzVTBGQmFVSkJMRVZCUVVWQkxFdEJRV3RDUVR0UlFVRnNRa1VzY1VKQlFXdENRU3hIUVVGc1FrRXNWVUZCYTBKQk8xRkJRMnBFUVN4TFFVRkxRU3hIUVVGSFFTeExRVUZMUVN4RFFVRkRRU3hQUVVGUFFTeERRVUZEUVN4SlFVRkpRU3hGUVVGRlFTeEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFUdFJRVU5vUTBFc1RVRkJUVUVzUTBGQlEwRXNTVUZCU1VFc1QwRkJUMEVzUTBGQlEwRXNUVUZCVFVFc1EwRkJRMEVzVTBGQlUwRXNSVUZCUlVFc1MwRkJTMEVzUjBGQlIwRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRTdTVUZEY0VSQkxFTkJRVU5CTzBsQlEwMUdMSGRDUVVGVlFTeEhRVUZxUWtFc1ZVRkJhMEpCTEUxQlFXTkJMRVZCUVVWQkxFdEJRV0ZCTzFGQlF6ZERSeXdyUWtGQkswSkJPMUZCUXk5Q1FTeE5RVUZOUVN4RFFVRkRRU3hUUVVGVFFTeEhRVUZIUVN4RFFVRkRRU3hEUVVGRFFUdFJRVU55UWtFc1RVRkJUVUVzUTBGQlEwRXNUVUZCVFVFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1MwRkJTMEVzUTBGQlEwRXNRMEZCUTBFN1NVRkROVUpCTEVOQlFVTkJPMGxCUTAxSUxHdENRVUZKUVN4SFFVRllRU3hWUVVGWlFTeE5RVUZqUVN4RlFVRkZRU3hMUVVGaFFUdFJRVU4yUTBrc1RVRkJUVUVzUTBGQlEwRXNVMEZCVTBFc1IwRkJSMEVzUTBGQlEwRXNRMEZCUTBFN1VVRkRja0pCTEUxQlFVMUJMRU5CUVVOQkxFMUJRVTFCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEV0QlFVdEJMRU5CUVVOQkxFTkJRVU5CTzBsQlF6VkNRU3hEUVVGRFFUdEpRVU5OU2l4eFFrRkJUMEVzUjBGQlpFRXNWVUZCWlVFc1RVRkJZMEVzUlVGQlJVRXNTMEZCWVVFN1VVRkxNVU5MTEdsRFFVRnBRMEU3VVVGRGFrTkJMSGREUVVGM1EwRTdVVUZEZUVOQkxHRkJRV0ZCTzFGQlEySkJMRTFCUVUxQkxFTkJRVU5CTEZOQlFWTkJMRWRCUVVkQkxFTkJRVU5CTEVOQlFVTkJPMUZCUTNKQ1FTeE5RVUZOUVN4RFFVRkRRU3hGUVVGRFFTeEZRVUZGUVN4RlFVRkZRU3hOUVVGTlFTeEZRVUZGUVN4TFFVRkxRU3hGUVVGRlFTeExRVUZMUVN4RlFVRkRRU3hEUVVGRFFUdEpRVU53UTBFc1EwRkJRMEU3U1VGRFNFd3NiMEpCUVVOQk8wRkJRVVJCTEVOQlFVTkJMRUZCZWtKRUxFbEJlVUpETzBGQmVrSlpMSEZDUVVGaExHZENRWGxDZWtJc1EwRkJRVHRCUVVWRU8wbEJRVUZOTzBsQlQwRkRMRU5CUVVOQk8wbEJUbEZFTEhsQ1FVRkpRU3hIUVVGWVFTeFZRVUZaUVN4UFFVZFlRVHRSUVVORFJTeE5RVUZOUVN4RFFVRkRRU3hQUVVGUFFTeERRVUZEUVN4RlFVRkZRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hQUVVGUFFTeERRVUZEUVN4TFFVRkxRU3hEUVVGRFFTeERRVUZEUVR0SlFVTjRRMEVzUTBGQlEwRTdTVUZEU0VZc01rSkJRVU5CTzBGQlFVUkJMRU5CUVVOQkxFRkJVRVFzU1VGUFF6dEJRVkJaTERSQ1FVRnZRaXgxUWtGUGFFTXNRMEZCUVR0QlFVVkVPMGxCUVVGSE8wbEJSVUZETEVOQlFVTkJPMGxCUkZGRUxIRkNRVUZMUVN4SFFVRmFRU3hWUVVGaFFTeEZRVUZaUVN4RlFVRkZRU3hQUVVGWlFTeEpRVUZUUlN4TlFVRk5RU3hEUVVGRFFTeEZRVUZGUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVN4SlFVRkpRU3hGUVVGRlFTeFBRVUZQUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRKUVVOdVJrWXNjMEpCUVVOQk8wRkJRVVJCTEVOQlFVTkJMRUZCUmtRc1NVRkZRenRCUVVaWkxIVkNRVUZsTEd0Q1FVVXpRaXhEUVVGQk8wRkJSVVFzY1VKQlFYRkNPMEZCUTNKQ0xIZENRVUVyUWl4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVOcVEwY3NUVUZCVFVFc1EwRkJRMEVzUTBGQlEwRXNTMEZCUzBFc1EwRkJRMEVzU1VGQlNVRXNUMEZCVDBFc1EwRkJRMEVzUzBGQlMwRXNVVUZCVVVFc1NVRkJTVUVzVDBGQlQwRXNRMEZCUTBFc1MwRkJTMEVzVVVGQlVVRXNTVUZCU1VFc1MwRkJTMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzU1VGQlNVRXNTMEZCUzBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3UVVGRE0wWkJMRU5CUVVOQk8wRkJSbVVzYzBKQlFXTXNhVUpCUlRkQ0xFTkJRVUU3UVVGRlJDeG5Sa0ZCWjBZN1FVRkRhRVlzTWtaQlFUSkdPMEZCUXpOR0xHMUNRVUUyUWl4TFFVRlJPMGxCUTI1RFF5eE5RVUZOUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVR0QlFVTm1RU3hEUVVGRFFUdEJRVVpsTEdsQ1FVRlRMRmxCUlhoQ0xFTkJRVUU3UVVGRlJDeDNRa0ZCSzBJc1IwRkJWenRKUVVONFEwTXNUVUZCVFVFc1EwRkJRMEVzVDBGQlQwRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNSMEZCUjBFc1NVRkJTVUVzUjBGQlIwRXNSMEZCUjBFc1EwRkJRMEU3UVVGRGJrTkJMRU5CUVVOQk8wRkJSbVVzYzBKQlFXTXNhVUpCUlRkQ0xFTkJRVUU3UVVGRlJDeDFRa0ZCT0VJc1IwRkJXVHRKUVVONFEwTXNUVUZCVFVFc1EwRkJRMEVzVDBGQlQwRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNSMEZCUjBFc1MwRkJTMEVzUjBGQlIwRXNSMEZCUjBFc1EwRkJRMEU3UVVGRGNFTkJMRU5CUVVOQk8wRkJSbVVzY1VKQlFXRXNaMEpCUlRWQ0xFTkJRVUU3UVVGRlJDeHZRa0ZCTWtJc1EwRkJUVHRKUVVNdlFrTXNUVUZCVFVFc1EwRkJRMEVzUTBGQlEwRXNTMEZCUzBFc1NVRkJTVUVzU1VGQlNVRXNRMEZCUTBFc1QwRkJUMEVzUTBGQlEwRXNTMEZCUzBFc1ZVRkJWVUVzU1VGQlNVRXNUMEZCVDBFc1EwRkJRMEVzUzBGQlMwRXNVVUZCVVVFc1EwRkJRMEVzUTBGQlEwRTdRVUZETVVWQkxFTkJRVU5CTzBGQlJtVXNhMEpCUVZVc1lVRkZla0lzUTBGQlFUdEJRVVZFTEdWQlFYTkNMRWRCUVcxQ08wbEJRM1pEUXl4UFFVRlBRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRVHRCUVVOdVFrRXNRMEZCUTBFN1FVRkdaU3hoUVVGTExGRkJSWEJDTEVOQlFVRTdRVUZGUkN4dlJrRkJiMFk3UVVGRGNFWTdTVUZCUVVNN1NVRk5RVU1zUTBGQlEwRTdTVUZNVVVRc1ZVRkJTMEVzUjBGQldrRXNWVUZCWVVFc1EwRkJVMEVzU1VGQldVVXNUVUZCVFVFc1EwRkJRMEVzVDBGQlQwRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNTMEZCUzBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1NVRkRNVVJHTEdOQlFWTkJMRWRCUVdoQ1FTeFZRVUZwUWtFc1NVRkJXVUU3VVVGRE0wSkhMR2REUVVGblEwRTdVVUZEYUVOQkxFMUJRVTFCTEVOQlFVTkJMRTlCUVU5QkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxGTkJRVk5CTEVOQlFVTkJMRWxCUVVsQkxFVkJRVVZCTEVsQlFVbEJMRVZCUVVWQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJReTlEUVN4RFFVRkRRVHRKUVVOSVNDeFhRVUZEUVR0QlFVRkVRU3hEUVVGRFFTeEJRVTVFTEVsQlRVTTdRVUZPV1N4WlFVRkpMRTlCVFdoQ0xFTkJRVUU3UVVGRlJEdEpRVUZCU1R0SlFWVkJReXhEUVVGRFFUdEpRVlJSUkN4clFrRkJUVUVzUjBGQllrRXNWVUZCWTBFc1NVRkJXVUVzUlVGQlJVRXNTMEZCYVVKQkxFVkJRVVZCTEVkQlFXVkJMRVZCUVVWQkxFbEJRV2RDUVN4RlFVTnNSVUVzVDBGQmJVSkJMRVZCUVVWQkxFOUJRVzFDUVN4RlFVRkZRU3haUVVGM1FrRTdVVUZFY0VSRkxIRkNRVUZwUWtFc1IwRkJha0pCTEZOQlFXbENRVHRSUVVGRlFTeHRRa0ZCWlVFc1IwRkJaa0VzVDBGQlpVRTdVVUZCUlVFc2IwSkJRV2RDUVN4SFFVRm9Ra0VzVVVGQlowSkJPMUZCUTJ4RlFTeDFRa0ZCYlVKQkxFZEJRVzVDUVN4WFFVRnRRa0U3VVVGQlJVRXNkVUpCUVcxQ1FTeEhRVUZ1UWtFc1YwRkJiVUpCTzFGQlFVVkJMRFJDUVVGM1FrRXNSMEZCZUVKQkxHZENRVUYzUWtFN1VVRkRPVVZCTEUxQlFVMUJMRU5CUVVOQkxFbEJRVWxCTEZsQlFVbEJMRU5CUVVOQkxFbEJRVWxCTEVWQlFVVkJMRXRCUVV0QkxFZEJRVWRCTEVOQlFVTkJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWxCUVVsQkxFVkJRVVZCTEU5QlFVOUJMRVZCUVVWQkxFOUJRVTlCTEVWQlFVVkJMRmxCUVZsQkxFTkJRVU5CTEVOQlFVTkJPMGxCUXpsRlFTeERRVUZEUVR0SlFVTk5SaXg1UWtGQllVRXNSMEZCY0VKQkxGVkJRWEZDUVN4SFFVRlhRU3hKUVVGVlJ5eE5RVUZOUVN4RFFVRkRRU3hKUVVGSlFTeFpRVUZKUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0SlFVTXhSRWdzYzBKQlFWVkJMRWRCUVdwQ1FTeFZRVUZyUWtFc1JVRkJWVUVzU1VGQlZVa3NUVUZCVFVFc1EwRkJRMEVzU1VGQlNVRXNXVUZCU1VFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1NVRkRja1JLTEc5Q1FVRlJRU3hIUVVGbVFTeFZRVUZuUWtFc1NVRkJWVUVzU1VGQldVc3NUVUZCVFVFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1QwRkJUMEVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdTVUZEZGtSTUxHVkJRVWRCTEVkQlFWWkJMR05CUVhGQ1RTeE5RVUZOUVN4RFFVRkRRU3hKUVVGSlFTeFpRVUZKUVN4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRKUVVOc1EwNHNhMEpCUVUxQkxFZEJRV0pCTEZWQlFXTkJMRWxCUVZWQkxFbEJRVmxQTEUxQlFVMUJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRTFCUVUxQkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzBsQlF6ZEVVQ3hyUWtGQlEwRTdRVUZCUkVFc1EwRkJRMEVzUVVGV1JDeEpRVlZETzBGQlZsa3NiVUpCUVZjc1kwRlZka0lzUTBGQlFUdEJRVVZFTEhkQ1FVRXJRaXhOUVVGWExFVkJRVVVzU1VGQldTeEZRVUZGTEV0QlFWVTdTVUZEYkVWUkxFbEJRVWxCTEV0QlFVdEJMRWRCUVVkQkxFbEJRVWxCTEVOQlFVTkJMRXRCUVV0QkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFTkJRVU5CTzBsQlF6VkNRU3hKUVVGSlFTeEhRVUZIUVN4SFFVRlJRU3hOUVVGTlFTeERRVUZEUVR0SlFVTjBRa0VzVDBGQlQwRXNTMEZCUzBFc1EwRkJRMEVzVFVGQlRVRXNSMEZCUjBFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFN1VVRkRlRUpCTEVsQlFVbEJMRWxCUVVsQkxFZEJRVWRCTEV0QlFVdEJMRU5CUVVOQkxFdEJRVXRCTEVWQlFVVkJMRU5CUVVOQk8xRkJRM3BDUVN4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFTeGpRVUZqUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVN4SlFVRkpRU3hUUVVGVFFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdFpRVU55UkVFc1IwRkJSMEVzUjBGQlIwRXNSMEZCUjBFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEU3VVVGRGJFSkJMRU5CUVVOQk8xRkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTzFsQlEwNUJMRWRCUVVkQkxFZEJRVWRCTEVkQlFVZEJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRWRCUVVkQkxFVkJRVVZCTEVOQlFVTkJPMUZCUTNaQ1FTeERRVUZEUVR0SlFVTklRU3hEUVVGRFFUdEpRVU5FUVN4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4SFFVRkhRU3hMUVVGTFFTeFRRVUZUUVN4SlFVRkpRU3hIUVVGSFFTeExRVUZMUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRSUVVOMFEwRXNSMEZCUjBFc1IwRkJSMEVzUlVGQlJVRXNRMEZCUTBFN1NVRkRXRUVzUTBGQlEwRTdTVUZEUkVFc1IwRkJSMEVzUTBGQlEwRXNTMEZCUzBFc1EwRkJRMEVzUzBGQlMwRXNSVUZCUlVFc1EwRkJRMEVzUjBGQlIwRXNTMEZCUzBFc1EwRkJRMEU3UVVGRE4wSkJMRU5CUVVOQk8wRkJabVVzYzBKQlFXTXNhVUpCWlRkQ0xFTkJRVUU3UVVGSlJDeEpRVUZKTEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRNMEk3U1VGRFJVTXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNUMEZCVDBFc1EwRkJRMEVzWlVGQlpVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1VVRkROMEpCTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTEZOQlFWTkJMRU5CUVVOQkxFMUJRVTFCTEVOQlFVTkJMRWxCUVVsQkxGTkJRVk5CTEVOQlFVTkJMRTFCUVUxQkxFTkJRVU5CTEZGQlFWRkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8xbEJRM0JFUVN4bFFVRmxRU3hIUVVGSFFTeE5RVUZOUVN4RFFVRkRRU3hSUVVGUlFTeERRVUZEUVR0UlFVTndRMEVzUTBGQlEwRTdVVUZCUTBFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFN1dVRkRUa0VzTUVKQlFUQkNRVHRaUVVNeFFrRXNTVUZCU1VFc1NVRkJTVUVzUjBGQlIwRXNUVUZCVFVFc1EwRkJRMEVzYlVKQlFXMUNRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hUUVVGVFFTeERRVUZEUVN4RFFVRkRRVHRaUVVOeVJFRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFc1IwRkJSMEVzU1VGQlNVRXNRMEZCUTBFc1RVRkJUVUVzUlVGQlJVRXNSVUZCUlVFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFN1owSkJRM0pEUVN4SlFVRkpRU3hIUVVGSFFTeEhRVUZIUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdG5Ra0ZEYkVKQkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxFZEJRVWRCTEV0QlFVdEJMRk5CUVZOQkxFbEJRVWxCTEVkQlFVZEJMRXRCUVV0QkxFMUJRVTFCTzI5Q1FVTnVRMEVzUjBGQlIwRXNRMEZCUTBFc1UwRkJVMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUzBGQlMwRXNSMEZCUjBFc1EwRkJRMEVzVTBGQlUwRXNRMEZCUTBFc1UwRkJVMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdiMEpCUTNCRVFTeGxRVUZsUVN4SFFVRkhRU3hIUVVGSFFTeERRVUZEUVR0blFrRkRlRUpCTEVOQlFVTkJPMWxCUTBoQkxFTkJRVU5CTzFGQlEwaEJMRU5CUVVOQk8wbEJRMGhCTEVOQlFVTkJPMGxCUTBSQkxFMUJRVTFCTEVOQlFVTkJMR1ZCUVdWQkxFTkJRVU5CTzBGQlEzcENRU3hEUVVGRFFUdEJRV3BDWlN4NVFrRkJhVUlzYjBKQmFVSm9ReXhEUVVGQk8wRkJSVVFzZDBKQlFTdENMRk5CUVdsQ0xFVkJRVVVzU1VGQldTeEZRVUZGTEZsQlFXOUNMRVZCUTNKRUxFbEJRVEJDTzBsQlEzWkVReXhKUVVGSlFTeE5RVUZOUVN4SFFVRk5RU3haUVVGWlFTeHBRa0ZCV1VFc1NVRkJTVUVzZDBKQlFXMUNRU3hUUVVGWFFTeERRVUZEUVR0SlFVTXpSVUVzU1VGQlNVRXNWVUZCVlVFc1IwRkJSMEVzUlVGQlJVRXNRMEZCUTBFN1NVRkRjRUpCTEVsQlFVbEJMRmRCUVZkQkxFZEJRVWRCTEVWQlFVVkJMRU5CUVVOQk8wbEJRM0pDUVN4SFFVRkhRU3hEUVVGRFFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFTeFBRVUZQUVN4SlFVRkpRU3hKUVVGSlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdFJRVU42UWtFc1ZVRkJWVUVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzVDBGQlQwRXNRMEZCUTBFc1EwRkJRMEU3VVVGRGVrSkJMRmRCUVZkQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRTlCUVU5QkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJRMnhEUVN4RFFVRkRRVHRKUVVORVFTeE5RVUZOUVN4RFFVRkRRU3hMUVVGSlFTeFJRVUZSUVN4WlFVRlNRU3hSUVVGUlFTeHJRa0ZCU1VFc1ZVRkJWVUVzUTBGQlEwRXNUVUZCVFVFc1EwRkJRMEVzVFVGQlRVRXNRMEZCUTBFc1MwRkJRMEVzWlVGQlNVRXNWMEZCVjBFc1EwRkJRMEVzUTBGQlEwRTdRVUZEY0VWQkxFTkJRVU5CTzBGQlZtVXNjMEpCUVdNc2FVSkJWVGRDTEVOQlFVRWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCVVQwUlBLR3AwWlhCc2FYUjZOakF5S1RvZ1RHOWhaQ0JYYjNKclpYSkhiRzlpWVd4VFkyOXdaU0JtY205dElHeHBZaTUzWldKM2IzSnJaWEl1WkM1MGN5Qm1hV3hsSUNNek5Ea3lYRzVrWldOc1lYSmxJSFpoY2lCWGIzSnJaWEpIYkc5aVlXeFRZMjl3WlR0Y2JuWmhjaUJuYkc5aVlXeFRZMjl3WlRvZ1FuSnZkM05sY2s1dlpHVkhiRzlpWVd3N1hHNXBaaUFvZEhsd1pXOW1JSGRwYm1SdmR5QTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCWGIzSnJaWEpIYkc5aVlXeFRZMjl3WlNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2MyVnNaaUJwYm5OMFlXNWpaVzltSUZkdmNtdGxja2RzYjJKaGJGTmpiM0JsS1NCN1hHNGdJQ0FnTHk4Z1ZFOUVUem9nVW1Wd2JHRmpaU0JoYm5rZ2QybDBhQ0JYYjNKclpYSkhiRzlpWVd4VFkyOXdaU0JtY205dElHeHBZaTUzWldKM2IzSnJaWEl1WkM1MGN5QWpNelE1TWx4dUlDQWdJR2RzYjJKaGJGTmpiM0JsSUQwZ1BHRnVlVDV6Wld4bU8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHZHNiMkpoYkZOamIzQmxJRDBnUEdGdWVUNW5iRzlpWVd3N1hHNGdJSDFjYm4wZ1pXeHpaU0I3WEc0Z0lHZHNiMkpoYkZOamIzQmxJRDBnUEdGdWVUNTNhVzVrYjNjN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdTVk5mUkVGU1ZDQTlJR1poYkhObE8xeHVYRzR2THlCT1pXVmtJSFJ2SUdSbFkyeGhjbVVnWVNCdVpYY2dkbUZ5YVdGaWJHVWdabTl5SUdkc2IySmhiQ0JvWlhKbElITnBibU5sSUZSNWNHVlRZM0pwY0hSY2JpOHZJR1Y0Y0c5eWRITWdkR2hsSUc5eWFXZHBibUZzSUhaaGJIVmxJRzltSUhSb1pTQnplVzFpYjJ3dVhHNTJZWElnWDJkc2IySmhiRG9nUW5KdmQzTmxjazV2WkdWSGJHOWlZV3dnUFNCbmJHOWlZV3hUWTI5d1pUdGNibHh1Wlhod2IzSjBJSHRmWjJ4dlltRnNJR0Z6SUdkc2IySmhiSDA3WEc1Y2JtVjRjRzl5ZENCMllYSWdWSGx3WlNBOUlFWjFibU4wYVc5dU8xeHVYRzR2S2lwY2JpQXFJRkoxYm5ScGJXVWdjbVZ3Y21WelpXNTBZWFJwYjI0Z1lTQjBlWEJsSUhSb1lYUWdZU0JEYjIxd2IyNWxiblFnYjNJZ2IzUm9aWElnYjJKcVpXTjBJR2x6SUdsdWMzUmhibU5sY3lCdlppNWNiaUFxWEc0Z0tpQkJiaUJsZUdGdGNHeGxJRzltSUdFZ1lGUjVjR1ZnSUdseklHQk5lVU4xYzNSdmJVTnZiWEJ2Ym1WdWRHQWdZMnhoYzNNc0lIZG9hV05vSUdsdUlFcGhkbUZUWTNKcGNIUWdhWE1nWW1VZ2NtVndjbVZ6Wlc1MFpXUWdZbmxjYmlBcUlIUm9aU0JnVFhsRGRYTjBiMjFEYjIxd2IyNWxiblJnSUdOdmJuTjBjblZqZEc5eUlHWjFibU4wYVc5dUxseHVJQ292WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUZSNWNHVWdaWGgwWlc1a2N5QkdkVzVqZEdsdmJpQjdmVnh1WEc0dktpcGNiaUFxSUZKMWJuUnBiV1VnY21Wd2NtVnpaVzUwWVhScGIyNGdiMllnWVNCMGVYQmxJSFJvWVhRZ2FYTWdZMjl1YzNSeWRXTjBZV0pzWlNBb2JtOXVMV0ZpYzNSeVlXTjBLUzVjYmlBcUwxeHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkRiMjVqY21WMFpWUjVjR1VnWlhoMFpXNWtjeUJVZVhCbElIc2dibVYzSUNndUxpNWhjbWR6S1RvZ1lXNTVPeUI5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCblpYUlVlWEJsVG1GdFpVWnZja1JsWW5WbloybHVaeWgwZVhCbE9pQlVlWEJsS1RvZ2MzUnlhVzVuSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1ZiSjI1aGJXVW5YVHRjYm4xY2JseHVYRzVsZUhCdmNuUWdkbUZ5SUUxaGRHZ2dQU0JmWjJ4dlltRnNMazFoZEdnN1hHNWxlSEJ2Y25RZ2RtRnlJRVJoZEdVZ1BTQmZaMnh2WW1Gc0xrUmhkR1U3WEc1Y2JuWmhjaUJmWkdWMlRXOWtaVG9nWW05dmJHVmhiaUE5SUhSeWRXVTdYRzUyWVhJZ1gyMXZaR1ZNYjJOclpXUTZJR0p2YjJ4bFlXNGdQU0JtWVd4elpUdGNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR3h2WTJ0TmIyUmxLQ2tnZTF4dUlDQmZiVzlrWlV4dlkydGxaQ0E5SUhSeWRXVTdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1JHbHpZV0pzWlNCQmJtZDFiR0Z5SjNNZ1pHVjJaV3h2Y0cxbGJuUWdiVzlrWlN3Z2QyaHBZMmdnZEhWeWJuTWdiMlptSUdGemMyVnlkR2x2Ym5NZ1lXNWtJRzkwYUdWeVhHNGdLaUJqYUdWamEzTWdkMmwwYUdsdUlIUm9aU0JtY21GdFpYZHZjbXN1WEc0Z0tseHVJQ29nVDI1bElHbHRjRzl5ZEdGdWRDQmhjM05sY25ScGIyNGdkR2hwY3lCa2FYTmhZbXhsY3lCMlpYSnBabWxsY3lCMGFHRjBJR0VnWTJoaGJtZGxJR1JsZEdWamRHbHZiaUJ3WVhOelhHNGdLaUJrYjJWeklHNXZkQ0J5WlhOMWJIUWdhVzRnWVdSa2FYUnBiMjVoYkNCamFHRnVaMlZ6SUhSdklHRnVlU0JpYVc1a2FXNW5jeUFvWVd4emJ5QnJibTkzYmlCaGMxeHVJQ29nZFc1cFpHbHlaV04wYVc5dVlXd2daR0YwWVNCbWJHOTNLUzVjYmlBcUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlHVnVZV0pzWlZCeWIyUk5iMlJsS0NrZ2UxeHVJQ0JwWmlBb1gyMXZaR1ZNYjJOclpXUXBJSHRjYmlBZ0lDQXZMeUJEWVc1dWIzUWdkWE5sSUVKaGMyVkZlR05sY0hScGIyNGdZWE1nZEdoaGRDQmxibVJ6SUhWd0lHbHRjRzl5ZEdsdVp5Qm1jbTl0SUdaaFkyRmtaUzlzWVc1bkxseHVJQ0FnSUhSb2NtOTNJQ2REWVc1dWIzUWdaVzVoWW14bElIQnliMlFnYlc5a1pTQmhablJsY2lCd2JHRjBabTl5YlNCelpYUjFjQzRuTzF4dUlDQjlYRzRnSUY5a1pYWk5iMlJsSUQwZ1ptRnNjMlU3WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmhjM05sY25ScGIyNXpSVzVoWW14bFpDZ3BPaUJpYjI5c1pXRnVJSHRjYmlBZ2NtVjBkWEp1SUY5a1pYWk5iMlJsTzF4dWZWeHVYRzR2THlCVVQwUlBPaUJ5WlcxdmRtVWdZMkZzYkhNZ2RHOGdZWE56WlhKMElHbHVJSEJ5YjJSMVkzUnBiMjRnWlc1MmFYSnZibTFsYm5SY2JpOHZJRTV2ZEdVNklFTmhiaWQwSUdwMWMzUWdaWGh3YjNKMElIUm9hWE1nWVc1a0lHbHRjRzl5ZENCcGJpQnBiaUJ2ZEdobGNpQm1hV3hsYzF4dUx5OGdZWE1nWUdGemMyVnlkR0FnYVhNZ1lTQnlaWE5sY25abFpDQnJaWGwzYjNKa0lHbHVJRVJoY25SY2JsOW5iRzlpWVd3dVlYTnpaWEowSUQwZ1puVnVZM1JwYjI0Z1lYTnpaWEowS0dOdmJtUnBkR2x2YmlrZ2UxeHVJQ0F2THlCVVQwUlBPaUIwYnlCaVpTQm1hWGhsWkNCd2NtOXdaWEpzZVNCMmFXRWdJekk0TXpBc0lHNXZiM0FnWm05eUlHNXZkMXh1ZlR0Y2JseHVMeThnVkdocGN5Qm1kVzVqZEdsdmJpQnBjeUJ1WldWa1pXUWdiMjVzZVNCMGJ5QndjbTl3WlhKc2VTQnpkWEJ3YjNKMElFUmhjblFuY3lCamIyNXpkQ0JsZUhCeVpYTnphVzl1YzF4dUx5OGdjMlZsSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5aGJtZDFiR0Z5TDNSek1tUmhjblF2Y0hWc2JDOHhOVEVnWm05eUlHMXZjbVVnYVc1bWIxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlFTlBUbE5VWDBWWVVGSThWRDRvWlhod2Nqb2dWQ2s2SUZRZ2UxeHVJQ0J5WlhSMWNtNGdaWGh3Y2p0Y2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJRU5QVGxOVUtDazZJRU5zWVhOelJHVmpiM0poZEc5eUlDWWdVSEp2Y0dWeWRIbEVaV052Y21GMGIzSWdlMXh1SUNCeVpYUjFjbTRnS0hSaGNtZGxkQ2tnUFQ0Z2RHRnlaMlYwTzF4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdhWE5RY21WelpXNTBLRzlpYWpvZ1lXNTVLVG9nWW05dmJHVmhiaUI3WEc0Z0lISmxkSFZ5YmlCdlltb2dJVDA5SUhWdVpHVm1hVzVsWkNBbUppQnZZbW9nSVQwOUlHNTFiR3c3WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnBjMEpzWVc1cktHOWlham9nWVc1NUtUb2dZbTl2YkdWaGJpQjdYRzRnSUhKbGRIVnliaUJ2WW1vZ1BUMDlJSFZ1WkdWbWFXNWxaQ0I4ZkNCdlltb2dQVDA5SUc1MWJHdzdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCcGMxTjBjbWx1WnlodlltbzZJR0Z1ZVNrNklHSnZiMnhsWVc0Z2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlHOWlhaUE5UFQwZ1hDSnpkSEpwYm1kY0lqdGNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdselJuVnVZM1JwYjI0b2IySnFPaUJoYm5rcE9pQmliMjlzWldGdUlIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQnZZbW9nUFQwOUlGd2lablZ1WTNScGIyNWNJanRjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHbHpWSGx3WlNodlltbzZJR0Z1ZVNrNklHSnZiMnhsWVc0Z2UxeHVJQ0J5WlhSMWNtNGdhWE5HZFc1amRHbHZiaWh2WW1vcE8xeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYVhOVGRISnBibWROWVhBb2IySnFPaUJoYm5rcE9pQmliMjlzWldGdUlIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQnZZbW9nUFQwOUlDZHZZbXBsWTNRbklDWW1JRzlpYWlBaFBUMGdiblZzYkR0Y2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR2x6VUhKdmJXbHpaU2h2WW1vNklHRnVlU2s2SUdKdmIyeGxZVzRnZTF4dUlDQnlaWFIxY200Z2IySnFJR2x1YzNSaGJtTmxiMllnS0R4aGJuaytYMmRzYjJKaGJDa3VVSEp2YldselpUdGNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdselFYSnlZWGtvYjJKcU9pQmhibmtwT2lCaWIyOXNaV0Z1SUh0Y2JpQWdjbVYwZFhKdUlFRnljbUY1TG1selFYSnlZWGtvYjJKcUtUdGNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdselRuVnRZbVZ5S0c5aWFpazZJR0p2YjJ4bFlXNGdlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JRzlpYWlBOVBUMGdKMjUxYldKbGNpYzdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCcGMwUmhkR1VvYjJKcUtUb2dZbTl2YkdWaGJpQjdYRzRnSUhKbGRIVnliaUJ2WW1vZ2FXNXpkR0Z1WTJWdlppQkVZWFJsSUNZbUlDRnBjMDVoVGlodlltb3VkbUZzZFdWUFppZ3BLVHRjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHNXZiM0FvS1NCN2ZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjM1J5YVc1bmFXWjVLSFJ2YTJWdUtUb2djM1J5YVc1bklIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCMGIydGxiaUE5UFQwZ0ozTjBjbWx1WnljcElIdGNiaUFnSUNCeVpYUjFjbTRnZEc5clpXNDdYRzRnSUgxY2JseHVJQ0JwWmlBb2RHOXJaVzRnUFQwOUlIVnVaR1ZtYVc1bFpDQjhmQ0IwYjJ0bGJpQTlQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBbkp5QXJJSFJ2YTJWdU8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0hSdmEyVnVMbTVoYldVcElIdGNiaUFnSUNCeVpYUjFjbTRnZEc5clpXNHVibUZ0WlR0Y2JpQWdmVnh1SUNCcFppQW9kRzlyWlc0dWIzWmxjbkpwWkdSbGJrNWhiV1VwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkRzlyWlc0dWIzWmxjbkpwWkdSbGJrNWhiV1U3WEc0Z0lIMWNibHh1SUNCMllYSWdjbVZ6SUQwZ2RHOXJaVzR1ZEc5VGRISnBibWNvS1R0Y2JpQWdkbUZ5SUc1bGQweHBibVZKYm1SbGVDQTlJSEpsY3k1cGJtUmxlRTltS0Z3aVhGeHVYQ0lwTzF4dUlDQnlaWFIxY200Z0tHNWxkMHhwYm1WSmJtUmxlQ0E5UFQwZ0xURXBJRDhnY21WeklEb2djbVZ6TG5OMVluTjBjbWx1Wnlnd0xDQnVaWGRNYVc1bFNXNWtaWGdwTzF4dWZWeHVYRzR2THlCelpYSnBZV3hwZW1VZ0x5QmtaWE5sY21saGJHbDZaU0JsYm5WdElHVjRhWE4wSUc5dWJIa2dabTl5SUdOdmJuTnBjM1JsYm1ONUlIZHBkR2dnWkdGeWRDQkJVRWxjYmk4dklHVnVkVzF6SUdsdUlIUjVjR1Z6WTNKcGNIUWdaRzl1SjNRZ2JtVmxaQ0IwYnlCaVpTQnpaWEpwWVd4cGVtVmtYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ6WlhKcFlXeHBlbVZGYm5WdEtIWmhiQ2s2SUc1MWJXSmxjaUI3WEc0Z0lISmxkSFZ5YmlCMllXdzdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCa1pYTmxjbWxoYkdsNlpVVnVkVzBvZG1Gc0xDQjJZV3gxWlhNNklFMWhjRHh1ZFcxaVpYSXNJR0Z1ZVQ0cE9pQmhibmtnZTF4dUlDQnlaWFIxY200Z2RtRnNPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1kyeGhjM01nVTNSeWFXNW5WM0poY0hCbGNpQjdYRzRnSUhOMFlYUnBZeUJtY205dFEyaGhja052WkdVb1kyOWtaVG9nYm5WdFltVnlLVG9nYzNSeWFXNW5JSHNnY21WMGRYSnVJRk4wY21sdVp5NW1jbTl0UTJoaGNrTnZaR1VvWTI5a1pTazdJSDFjYmx4dUlDQnpkR0YwYVdNZ1kyaGhja052WkdWQmRDaHpPaUJ6ZEhKcGJtY3NJR2x1WkdWNE9pQnVkVzFpWlhJcE9pQnVkVzFpWlhJZ2V5QnlaWFIxY200Z2N5NWphR0Z5UTI5a1pVRjBLR2x1WkdWNEtUc2dmVnh1WEc0Z0lITjBZWFJwWXlCemNHeHBkQ2h6T2lCemRISnBibWNzSUhKbFowVjRjRG9nVW1WblJYaHdLVG9nYzNSeWFXNW5XMTBnZXlCeVpYUjFjbTRnY3k1emNHeHBkQ2h5WldkRmVIQXBPeUI5WEc1Y2JpQWdjM1JoZEdsaklHVnhkV0ZzY3loek9pQnpkSEpwYm1jc0lITXlPaUJ6ZEhKcGJtY3BPaUJpYjI5c1pXRnVJSHNnY21WMGRYSnVJSE1nUFQwOUlITXlPeUI5WEc1Y2JpQWdjM1JoZEdsaklITjBjbWx3VEdWbWRDaHpPaUJ6ZEhKcGJtY3NJR05vWVhKV1lXdzZJSE4wY21sdVp5azZJSE4wY21sdVp5QjdYRzRnSUNBZ2FXWWdLSE1nSmlZZ2N5NXNaVzVuZEdncElIdGNiaUFnSUNBZ0lIWmhjaUJ3YjNNZ1BTQXdPMXh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoelcybGRJQ0U5SUdOb1lYSldZV3dwSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0J3YjNNckt6dGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lITWdQU0J6TG5OMVluTjBjbWx1Wnlod2IzTXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnY3p0Y2JpQWdmVnh1WEc0Z0lITjBZWFJwWXlCemRISnBjRkpwWjJoMEtITTZJSE4wY21sdVp5d2dZMmhoY2xaaGJEb2djM1J5YVc1bktUb2djM1J5YVc1bklIdGNiaUFnSUNCcFppQW9jeUFtSmlCekxteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ2RtRnlJSEJ2Y3lBOUlITXViR1Z1WjNSb08xeHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJSE11YkdWdVozUm9JQzBnTVRzZ2FTQStQU0F3T3lCcExTMHBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tITmJhVjBnSVQwZ1kyaGhjbFpoYkNrZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUhCdmN5MHRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdjeUE5SUhNdWMzVmljM1J5YVc1bktEQXNJSEJ2Y3lrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnpPMXh1SUNCOVhHNWNiaUFnYzNSaGRHbGpJSEpsY0d4aFkyVW9jem9nYzNSeWFXNW5MQ0JtY205dE9pQnpkSEpwYm1jc0lISmxjR3hoWTJVNklITjBjbWx1WnlrNklITjBjbWx1WnlCN1hHNGdJQ0FnY21WMGRYSnVJSE11Y21Wd2JHRmpaU2htY205dExDQnlaWEJzWVdObEtUdGNiaUFnZlZ4dVhHNGdJSE4wWVhScFl5QnlaWEJzWVdObFFXeHNLSE02SUhOMGNtbHVaeXdnWm5KdmJUb2dVbVZuUlhod0xDQnlaWEJzWVdObE9pQnpkSEpwYm1jcE9pQnpkSEpwYm1jZ2UxeHVJQ0FnSUhKbGRIVnliaUJ6TG5KbGNHeGhZMlVvWm5KdmJTd2djbVZ3YkdGalpTazdYRzRnSUgxY2JseHVJQ0J6ZEdGMGFXTWdjMnhwWTJVOFZENG9jem9nYzNSeWFXNW5MQ0JtY205dE9pQnVkVzFpWlhJZ1BTQXdMQ0IwYnpvZ2JuVnRZbVZ5SUQwZ2JuVnNiQ2s2SUhOMGNtbHVaeUI3WEc0Z0lDQWdjbVYwZFhKdUlITXVjMnhwWTJVb1puSnZiU3dnZEc4Z1BUMDlJRzUxYkd3Z1B5QjFibVJsWm1sdVpXUWdPaUIwYnlrN1hHNGdJSDFjYmx4dUlDQnpkR0YwYVdNZ2NtVndiR0ZqWlVGc2JFMWhjSEJsWkNoek9pQnpkSEpwYm1jc0lHWnliMjA2SUZKbFowVjRjQ3dnWTJJNklFWjFibU4wYVc5dUtUb2djM1J5YVc1bklIdGNiaUFnSUNCeVpYUjFjbTRnY3k1eVpYQnNZV05sS0daeWIyMHNJR1oxYm1OMGFXOXVLQzR1TG0xaGRHTm9aWE1wSUh0Y2JpQWdJQ0FnSUM4dklGSmxiVzkyWlNCdlptWnpaWFFnSmlCemRISnBibWNnWm5KdmJTQjBhR1VnY21WemRXeDBJR0Z5Y21GNVhHNGdJQ0FnSUNCdFlYUmphR1Z6TG5Od2JHbGpaU2d0TWl3Z01pazdYRzRnSUNBZ0lDQXZMeUJVYUdVZ1kyRnNiR0poWTJzZ2NtVmpaV2wyWlhNZ2JXRjBZMmdzSUhBeExDQXVMaTRzSUhCdVhHNGdJQ0FnSUNCeVpYUjFjbTRnWTJJb2JXRjBZMmhsY3lrN1hHNGdJQ0FnZlNrN1hHNGdJSDFjYmx4dUlDQnpkR0YwYVdNZ1kyOXVkR0ZwYm5Nb2N6b2djM1J5YVc1bkxDQnpkV0p6ZEhJNklITjBjbWx1WnlrNklHSnZiMnhsWVc0Z2V5QnlaWFIxY200Z2N5NXBibVJsZUU5bUtITjFZbk4wY2lrZ0lUMGdMVEU3SUgxY2JseHVJQ0J6ZEdGMGFXTWdZMjl0Y0dGeVpTaGhPaUJ6ZEhKcGJtY3NJR0k2SUhOMGNtbHVaeWs2SUc1MWJXSmxjaUI3WEc0Z0lDQWdhV1lnS0dFZ1BDQmlLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hoSUQ0Z1lpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlERTdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUF3TzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWTJ4aGMzTWdVM1J5YVc1blNtOXBibVZ5SUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvY0hWaWJHbGpJSEJoY25SeklEMGdXMTBwSUh0OVhHNWNiaUFnWVdSa0tIQmhjblE2SUhOMGNtbHVaeWs2SUhadmFXUWdleUIwYUdsekxuQmhjblJ6TG5CMWMyZ29jR0Z5ZENrN0lIMWNibHh1SUNCMGIxTjBjbWx1WnlncE9pQnpkSEpwYm1jZ2V5QnlaWFIxY200Z2RHaHBjeTV3WVhKMGN5NXFiMmx1S0Z3aVhDSXBPeUI5WEc1OVhHNWNibVY0Y0c5eWRDQmpiR0Z6Y3lCT2RXMWlaWEpRWVhKelpVVnljbTl5SUdWNGRHVnVaSE1nUlhKeWIzSWdlMXh1SUNCdVlXMWxPaUJ6ZEhKcGJtYzdYRzVjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSFZpYkdsaklHMWxjM05oWjJVNklITjBjbWx1WnlrZ2V5QnpkWEJsY2lncE95QjlYRzVjYmlBZ2RHOVRkSEpwYm1jb0tUb2djM1J5YVc1bklIc2djbVYwZFhKdUlIUm9hWE11YldWemMyRm5aVHNnZlZ4dWZWeHVYRzVjYm1WNGNHOXlkQ0JqYkdGemN5Qk9kVzFpWlhKWGNtRndjR1Z5SUh0Y2JpQWdjM1JoZEdsaklIUnZSbWw0WldRb2Jqb2diblZ0WW1WeUxDQm1jbUZqZEdsdmJrUnBaMmwwY3pvZ2JuVnRZbVZ5S1RvZ2MzUnlhVzVuSUhzZ2NtVjBkWEp1SUc0dWRHOUdhWGhsWkNobWNtRmpkR2x2YmtScFoybDBjeWs3SUgxY2JseHVJQ0J6ZEdGMGFXTWdaWEYxWVd3b1lUb2diblZ0WW1WeUxDQmlPaUJ1ZFcxaVpYSXBPaUJpYjI5c1pXRnVJSHNnY21WMGRYSnVJR0VnUFQwOUlHSTdJSDFjYmx4dUlDQnpkR0YwYVdNZ2NHRnljMlZKYm5SQmRYUnZVbUZrYVhnb2RHVjRkRG9nYzNSeWFXNW5LVG9nYm5WdFltVnlJSHRjYmlBZ0lDQjJZWElnY21WemRXeDBPaUJ1ZFcxaVpYSWdQU0J3WVhKelpVbHVkQ2gwWlhoMEtUdGNiaUFnSUNCcFppQW9hWE5PWVU0b2NtVnpkV3gwS1NrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFNTFiV0psY2xCaGNuTmxSWEp5YjNJb1hDSkpiblpoYkdsa0lHbHVkR1ZuWlhJZ2JHbDBaWEpoYkNCM2FHVnVJSEJoY25OcGJtY2dYQ0lnS3lCMFpYaDBLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYmlBZ2ZWeHVYRzRnSUhOMFlYUnBZeUJ3WVhKelpVbHVkQ2gwWlhoME9pQnpkSEpwYm1jc0lISmhaR2w0T2lCdWRXMWlaWElwT2lCdWRXMWlaWElnZTF4dUlDQWdJR2xtSUNoeVlXUnBlQ0E5UFNBeE1Da2dlMXh1SUNBZ0lDQWdhV1lnS0M5ZUtGeGNMWHhjWENzcFAxc3dMVGxkS3lRdkxuUmxjM1FvZEdWNGRDa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEJoY25ObFNXNTBLSFJsZUhRc0lISmhaR2w0S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hKaFpHbDRJRDA5SURFMktTQjdYRzRnSUNBZ0lDQnBaaUFvTDE0b1hGd3RmRnhjS3lrL1d6QXRPVUZDUTBSRlJtRmlZMlJsWmwwckpDOHVkR1Z6ZENoMFpYaDBLU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY0dGeWMyVkpiblFvZEdWNGRDd2djbUZrYVhncE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IyWVhJZ2NtVnpkV3gwT2lCdWRXMWlaWElnUFNCd1lYSnpaVWx1ZENoMFpYaDBMQ0J5WVdScGVDazdYRzRnSUNBZ0lDQnBaaUFvSVdselRtRk9LSEpsYzNWc2RDa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnZEdoeWIzY2dibVYzSUU1MWJXSmxjbEJoY25ObFJYSnliM0lvWENKSmJuWmhiR2xrSUdsdWRHVm5aWElnYkdsMFpYSmhiQ0IzYUdWdUlIQmhjbk5wYm1jZ1hDSWdLeUIwWlhoMElDc2dYQ0lnYVc0Z1ltRnpaU0JjSWlBclhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21Ga2FYZ3BPMXh1SUNCOVhHNWNiaUFnTHk4Z1ZFOUVUem9nVG1GT0lHbHpJR0VnZG1Gc2FXUWdiR2wwWlhKaGJDQmlkWFFnYVhNZ2NtVjBkWEp1WldRZ1lua2djR0Z5YzJWR2JHOWhkQ0IwYnlCcGJtUnBZMkYwWlNCaGJpQmxjbkp2Y2k1Y2JpQWdjM1JoZEdsaklIQmhjbk5sUm14dllYUW9kR1Y0ZERvZ2MzUnlhVzVuS1RvZ2JuVnRZbVZ5SUhzZ2NtVjBkWEp1SUhCaGNuTmxSbXh2WVhRb2RHVjRkQ2s3SUgxY2JseHVJQ0J6ZEdGMGFXTWdaMlYwSUU1aFRpZ3BPaUJ1ZFcxaVpYSWdleUJ5WlhSMWNtNGdUbUZPT3lCOVhHNWNiaUFnYzNSaGRHbGpJR2x6VG1GT0tIWmhiSFZsT2lCaGJua3BPaUJpYjI5c1pXRnVJSHNnY21WMGRYSnVJR2x6VG1GT0tIWmhiSFZsS1RzZ2ZWeHVYRzRnSUhOMFlYUnBZeUJwYzBsdWRHVm5aWElvZG1Gc2RXVTZJR0Z1ZVNrNklHSnZiMnhsWVc0Z2V5QnlaWFIxY200Z1RuVnRZbVZ5TG1selNXNTBaV2RsY2loMllXeDFaU2s3SUgxY2JuMWNibHh1Wlhod2IzSjBJSFpoY2lCU1pXZEZlSEFnUFNCZloyeHZZbUZzTGxKbFowVjRjRHRjYmx4dVpYaHdiM0owSUdOc1lYTnpJRkpsWjBWNGNGZHlZWEJ3WlhJZ2UxeHVJQ0J6ZEdGMGFXTWdZM0psWVhSbEtISmxaMFY0Y0ZOMGNqb2djM1J5YVc1bkxDQm1iR0ZuY3pvZ2MzUnlhVzVuSUQwZ0p5Y3BPaUJTWldkRmVIQWdlMXh1SUNBZ0lHWnNZV2R6SUQwZ1pteGhaM011Y21Wd2JHRmpaU2d2Wnk5bkxDQW5KeWs3WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJmWjJ4dlltRnNMbEpsWjBWNGNDaHlaV2RGZUhCVGRISXNJR1pzWVdkeklDc2dKMmNuS1R0Y2JpQWdmVnh1SUNCemRHRjBhV01nWm1seWMzUk5ZWFJqYUNoeVpXZEZlSEE2SUZKbFowVjRjQ3dnYVc1d2RYUTZJSE4wY21sdVp5azZJRkpsWjBWNGNFVjRaV05CY25KaGVTQjdYRzRnSUNBZ0x5OGdVbVZ6WlhRZ2JYVnNkR2x0WVhSamFDQnlaV2RsZUNCemRHRjBaVnh1SUNBZ0lISmxaMFY0Y0M1c1lYTjBTVzVrWlhnZ1BTQXdPMXh1SUNBZ0lISmxkSFZ5YmlCeVpXZEZlSEF1WlhobFl5aHBibkIxZENrN1hHNGdJSDFjYmlBZ2MzUmhkR2xqSUhSbGMzUW9jbVZuUlhod09pQlNaV2RGZUhBc0lHbHVjSFYwT2lCemRISnBibWNwT2lCaWIyOXNaV0Z1SUh0Y2JpQWdJQ0J5WldkRmVIQXViR0Z6ZEVsdVpHVjRJRDBnTUR0Y2JpQWdJQ0J5WlhSMWNtNGdjbVZuUlhod0xuUmxjM1FvYVc1d2RYUXBPMXh1SUNCOVhHNGdJSE4wWVhScFl5QnRZWFJqYUdWeUtISmxaMFY0Y0RvZ1VtVm5SWGh3TENCcGJuQjFkRG9nYzNSeWFXNW5LVG9nZTF4dUlDQWdJSEpsT2lCU1pXZEZlSEE3WEc0Z0lDQWdhVzV3ZFhRNklITjBjbWx1WjF4dUlDQjlYRzRnSUh0Y2JpQWdJQ0F2THlCU1pYTmxkQ0J5WldkbGVDQnpkR0YwWlNCbWIzSWdkR2hsSUdOaGMyVmNiaUFnSUNBdkx5QnpiMjFsYjI1bElHUnBaQ0J1YjNRZ2JHOXZjQ0J2ZG1WeUlHRnNiQ0J0WVhSamFHVnpYRzRnSUNBZ0x5OGdiR0Z6ZENCMGFXMWxMbHh1SUNBZ0lISmxaMFY0Y0M1c1lYTjBTVzVrWlhnZ1BTQXdPMXh1SUNBZ0lISmxkSFZ5YmlCN2NtVTZJSEpsWjBWNGNDd2dhVzV3ZFhRNklHbHVjSFYwZlR0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1kyeGhjM01nVW1WblJYaHdUV0YwWTJobGNsZHlZWEJ3WlhJZ2UxeHVJQ0J6ZEdGMGFXTWdibVY0ZENodFlYUmphR1Z5T2lCN1hHNGdJQ0FnY21VNklGSmxaMFY0Y0R0Y2JpQWdJQ0JwYm5CMWREb2djM1J5YVc1blhHNGdJSDBwT2lCU1pXZEZlSEJGZUdWalFYSnlZWGtnZTF4dUlDQWdJSEpsZEhWeWJpQnRZWFJqYUdWeUxuSmxMbVY0WldNb2JXRjBZMmhsY2k1cGJuQjFkQ2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdOc1lYTnpJRVoxYm1OMGFXOXVWM0poY0hCbGNpQjdYRzRnSUhOMFlYUnBZeUJoY0hCc2VTaG1iam9nUm5WdVkzUnBiMjRzSUhCdmMwRnlaM002SUdGdWVTazZJR0Z1ZVNCN0lISmxkSFZ5YmlCbWJpNWhjSEJzZVNodWRXeHNMQ0J3YjNOQmNtZHpLVHNnZlZ4dWZWeHVYRzR2THlCS1V5Qm9ZWE1nVG1GT0lDRTlQU0JPWVU1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCc2IyOXpaVWxrWlc1MGFXTmhiQ2hoTENCaUtUb2dZbTl2YkdWaGJpQjdYRzRnSUhKbGRIVnliaUJoSUQwOVBTQmlJSHg4SUhSNWNHVnZaaUJoSUQwOVBTQmNJbTUxYldKbGNsd2lJQ1ltSUhSNWNHVnZaaUJpSUQwOVBTQmNJbTUxYldKbGNsd2lJQ1ltSUdselRtRk9LR0VwSUNZbUlHbHpUbUZPS0dJcE8xeHVmVnh1WEc0dkx5QktVeUJqYjI1emFXUmxjbk1nVG1GT0lHbHpJSFJvWlNCellXMWxJR0Z6SUU1aFRpQm1iM0lnYldGd0lFdGxlU0FvZDJocGJHVWdUbUZPSUNFOVBTQk9ZVTRnYjNSb1pYSjNhWE5sS1Z4dUx5OGdjMlZsSUdoMGRIQnpPaTh2WkdWMlpXeHZjR1Z5TG0xdmVtbHNiR0V1YjNKbkwyVnVMVlZUTDJSdlkzTXZWMlZpTDBwaGRtRlRZM0pwY0hRdlVtVm1aWEpsYm1ObEwwZHNiMkpoYkY5UFltcGxZM1J6TDAxaGNGeHVaWGh3YjNKMElHWjFibU4wYVc5dUlHZGxkRTFoY0V0bGVUeFVQaWgyWVd4MVpUb2dWQ2s2SUZRZ2UxeHVJQ0J5WlhSMWNtNGdkbUZzZFdVN1hHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ1YjNKdFlXeHBlbVZDYkdGdWF5aHZZbW82SUU5aWFtVmpkQ2s2SUdGdWVTQjdYRzRnSUhKbGRIVnliaUJwYzBKc1lXNXJLRzlpYWlrZ1B5QnVkV3hzSURvZ2IySnFPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2JtOXliV0ZzYVhwbFFtOXZiQ2h2WW1vNklHSnZiMnhsWVc0cE9pQmliMjlzWldGdUlIdGNiaUFnY21WMGRYSnVJR2x6UW14aGJtc29iMkpxS1NBL0lHWmhiSE5sSURvZ2IySnFPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2FYTktjMDlpYW1WamRDaHZPaUJoYm5rcE9pQmliMjlzWldGdUlIdGNiaUFnY21WMGRYSnVJRzhnSVQwOUlHNTFiR3dnSmlZZ0tIUjVjR1Z2WmlCdklEMDlQU0JjSW1aMWJtTjBhVzl1WENJZ2ZId2dkSGx3Wlc5bUlHOGdQVDA5SUZ3aWIySnFaV04wWENJcE8xeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnY0hKcGJuUW9iMkpxT2lCRmNuSnZjaUI4SUU5aWFtVmpkQ2tnZTF4dUlDQmpiMjV6YjJ4bExteHZaeWh2WW1vcE8xeHVmVnh1WEc0dkx5QkRZVzRuZENCaVpTQmhiR3dnZFhCd1pYSmpZWE5sSUdGeklHOTFjaUIwY21GdWMzQnBiR1Z5SUhkdmRXeGtJSFJvYVc1cklHbDBJR2x6SUdFZ2MzQmxZMmxoYkNCa2FYSmxZM1JwZG1VdUxpNWNibVY0Y0c5eWRDQmpiR0Z6Y3lCS2MyOXVJSHRjYmlBZ2MzUmhkR2xqSUhCaGNuTmxLSE02SUhOMGNtbHVaeWs2SUU5aWFtVmpkQ0I3SUhKbGRIVnliaUJmWjJ4dlltRnNMa3BUVDA0dWNHRnljMlVvY3lrN0lIMWNiaUFnYzNSaGRHbGpJSE4wY21sdVoybG1lU2hrWVhSaE9pQlBZbXBsWTNRcE9pQnpkSEpwYm1jZ2UxeHVJQ0FnSUM4dklFUmhjblFnWkc5bGMyNG5kQ0IwWVd0bElETWdZWEpuZFcxbGJuUnpYRzRnSUNBZ2NtVjBkWEp1SUY5bmJHOWlZV3d1U2xOUFRpNXpkSEpwYm1kcFpua29aR0YwWVN3Z2JuVnNiQ3dnTWlrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHTnNZWE56SUVSaGRHVlhjbUZ3Y0dWeUlIdGNiaUFnYzNSaGRHbGpJR055WldGMFpTaDVaV0Z5T2lCdWRXMWlaWElzSUcxdmJuUm9PaUJ1ZFcxaVpYSWdQU0F4TENCa1lYazZJRzUxYldKbGNpQTlJREVzSUdodmRYSTZJRzUxYldKbGNpQTlJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYldsdWRYUmxjem9nYm5WdFltVnlJRDBnTUN3Z2MyVmpiMjVrY3pvZ2JuVnRZbVZ5SUQwZ01Dd2diV2xzYkdselpXTnZibVJ6T2lCdWRXMWlaWElnUFNBd0tUb2dSR0YwWlNCN1hHNGdJQ0FnY21WMGRYSnVJRzVsZHlCRVlYUmxLSGxsWVhJc0lHMXZiblJvSUMwZ01Td2daR0Y1TENCb2IzVnlMQ0J0YVc1MWRHVnpMQ0J6WldOdmJtUnpMQ0J0YVd4c2FYTmxZMjl1WkhNcE8xeHVJQ0I5WEc0Z0lITjBZWFJwWXlCbWNtOXRTVk5QVTNSeWFXNW5LSE4wY2pvZ2MzUnlhVzVuS1RvZ1JHRjBaU0I3SUhKbGRIVnliaUJ1WlhjZ1JHRjBaU2h6ZEhJcE95QjlYRzRnSUhOMFlYUnBZeUJtY205dFRXbHNiR2x6S0cxek9pQnVkVzFpWlhJcE9pQkVZWFJsSUhzZ2NtVjBkWEp1SUc1bGR5QkVZWFJsS0cxektUc2dmVnh1SUNCemRHRjBhV01nZEc5TmFXeHNhWE1vWkdGMFpUb2dSR0YwWlNrNklHNTFiV0psY2lCN0lISmxkSFZ5YmlCa1lYUmxMbWRsZEZScGJXVW9LVHNnZlZ4dUlDQnpkR0YwYVdNZ2JtOTNLQ2s2SUVSaGRHVWdleUJ5WlhSMWNtNGdibVYzSUVSaGRHVW9LVHNnZlZ4dUlDQnpkR0YwYVdNZ2RHOUtjMjl1S0dSaGRHVTZJRVJoZEdVcE9pQnpkSEpwYm1jZ2V5QnlaWFIxY200Z1pHRjBaUzUwYjBwVFQwNG9LVHNnZlZ4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjMlYwVm1Gc2RXVlBibEJoZEdnb1oyeHZZbUZzT2lCaGJua3NJSEJoZEdnNklITjBjbWx1Wnl3Z2RtRnNkV1U2SUdGdWVTa2dlMXh1SUNCMllYSWdjR0Z5ZEhNZ1BTQndZWFJvTG5Od2JHbDBLQ2N1SnlrN1hHNGdJSFpoY2lCdlltbzZJR0Z1ZVNBOUlHZHNiMkpoYkR0Y2JpQWdkMmhwYkdVZ0tIQmhjblJ6TG14bGJtZDBhQ0ErSURFcElIdGNiaUFnSUNCMllYSWdibUZ0WlNBOUlIQmhjblJ6TG5Ob2FXWjBLQ2s3WEc0Z0lDQWdhV1lnS0c5aWFpNW9ZWE5QZDI1UWNtOXdaWEowZVNodVlXMWxLU0FtSmlCcGMxQnlaWE5sYm5Rb2IySnFXMjVoYldWZEtTa2dlMXh1SUNBZ0lDQWdiMkpxSUQwZ2IySnFXMjVoYldWZE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J2WW1vZ1BTQnZZbXBiYm1GdFpWMGdQU0I3ZlR0Y2JpQWdJQ0I5WEc0Z0lIMWNiaUFnYVdZZ0tHOWlhaUE5UFQwZ2RXNWtaV1pwYm1Wa0lIeDhJRzlpYWlBOVBUMGdiblZzYkNrZ2UxeHVJQ0FnSUc5aWFpQTlJSHQ5TzF4dUlDQjlYRzRnSUc5aWFsdHdZWEowY3k1emFHbG1kQ2dwWFNBOUlIWmhiSFZsTzF4dWZWeHVYRzR2THlCWGFHVnVJRk41YldKdmJDNXBkR1Z5WVhSdmNpQmtiMlZ6YmlkMElHVjRhWE4wTENCeVpYUnlhV1YyWlhNZ2RHaGxJR3RsZVNCMWMyVmtJR2x1SUdWek5pMXphR2x0WEc1a1pXTnNZWEpsSUhaaGNpQlRlVzFpYjJ3N1hHNTJZWElnWDNONWJXSnZiRWwwWlhKaGRHOXlJRDBnYm5Wc2JEdGNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm5aWFJUZVcxaWIyeEpkR1Z5WVhSdmNpZ3BPaUJ6ZEhKcGJtY2dmQ0J6ZVcxaWIyd2dlMXh1SUNCcFppQW9hWE5DYkdGdWF5aGZjM2x0WW05c1NYUmxjbUYwYjNJcEtTQjdYRzRnSUNBZ2FXWWdLR2x6VUhKbGMyVnVkQ2hUZVcxaWIyd3BJQ1ltSUdselVISmxjMlZ1ZENoVGVXMWliMnd1YVhSbGNtRjBiM0lwS1NCN1hHNGdJQ0FnSUNCZmMzbHRZbTlzU1hSbGNtRjBiM0lnUFNCVGVXMWliMnd1YVhSbGNtRjBiM0k3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDOHZJR1Z6TmkxemFHbHRJSE53WldOcFptbGpJR3h2WjJsalhHNGdJQ0FnSUNCMllYSWdhMlY1Y3lBOUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVTVoYldWektFMWhjQzV3Y205MGIzUjVjR1VwTzF4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCclpYbHpMbXhsYm1kMGFEc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJyWlhrZ1BTQnJaWGx6VzJsZE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYTJWNUlDRTlQU0FuWlc1MGNtbGxjeWNnSmlZZ2EyVjVJQ0U5UFNBbmMybDZaU2NnSmlaY2JpQWdJQ0FnSUNBZ0lDQWdJRTFoY0M1d2NtOTBiM1I1Y0dWYmEyVjVYU0E5UFQwZ1RXRndMbkJ5YjNSdmRIbHdaVnNuWlc1MGNtbGxjeWRkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdYM041YldKdmJFbDBaWEpoZEc5eUlEMGdhMlY1TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhKbGRIVnliaUJmYzNsdFltOXNTWFJsY21GMGIzSTdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCbGRtRnNSWGh3Y21WemMybHZiaWh6YjNWeVkyVlZjbXc2SUhOMGNtbHVaeXdnWlhod2Nqb2djM1J5YVc1bkxDQmtaV05zWVhKaGRHbHZibk02SUhOMGNtbHVaeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWEp6T2lCN1cydGxlVG9nYzNSeWFXNW5YVG9nWVc1NWZTazZJR0Z1ZVNCN1hHNGdJSFpoY2lCbWJrSnZaSGtnUFNCZ0pIdGtaV05zWVhKaGRHbHZibk45WEZ4dWNtVjBkWEp1SUNSN1pYaHdjbjFjWEc0dkx5TWdjMjkxY21ObFZWSk1QU1I3YzI5MWNtTmxWWEpzZldBN1hHNGdJSFpoY2lCbWJrRnlaMDVoYldWeklEMGdXMTA3WEc0Z0lIWmhjaUJtYmtGeVoxWmhiSFZsY3lBOUlGdGRPMXh1SUNCbWIzSWdLSFpoY2lCaGNtZE9ZVzFsSUdsdUlIWmhjbk1wSUh0Y2JpQWdJQ0JtYmtGeVowNWhiV1Z6TG5CMWMyZ29ZWEpuVG1GdFpTazdYRzRnSUNBZ1ptNUJjbWRXWVd4MVpYTXVjSFZ6YUNoMllYSnpXMkZ5WjA1aGJXVmRLVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdibVYzSUVaMWJtTjBhVzl1S0M0dUxtWnVRWEpuVG1GdFpYTXVZMjl1WTJGMEtHWnVRbTlrZVNrcEtDNHVMbVp1UVhKblZtRnNkV1Z6S1R0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZy5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IEluamVjdE1ldGFkYXRhLCBPcHRpb25hbE1ldGFkYXRhLCBJbmplY3RhYmxlTWV0YWRhdGEsIFNlbGZNZXRhZGF0YSwgSG9zdE1ldGFkYXRhLCBTa2lwU2VsZk1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5pbXBvcnQgeyBtYWtlRGVjb3JhdG9yLCBtYWtlUGFyYW1EZWNvcmF0b3IgfSBmcm9tICcuLi91dGlsL2RlY29yYXRvcnMnO1xuZXhwb3J0IHZhciBJbmplY3QgPSBtYWtlUGFyYW1EZWNvcmF0b3IoSW5qZWN0TWV0YWRhdGEpO1xuZXhwb3J0IHZhciBPcHRpb25hbCA9IG1ha2VQYXJhbURlY29yYXRvcihPcHRpb25hbE1ldGFkYXRhKTtcbmV4cG9ydCB2YXIgSW5qZWN0YWJsZSA9IG1ha2VEZWNvcmF0b3IoSW5qZWN0YWJsZU1ldGFkYXRhKTtcbmV4cG9ydCB2YXIgU2VsZiA9IG1ha2VQYXJhbURlY29yYXRvcihTZWxmTWV0YWRhdGEpO1xuZXhwb3J0IHZhciBIb3N0ID0gbWFrZVBhcmFtRGVjb3JhdG9yKEhvc3RNZXRhZGF0YSk7XG5leHBvcnQgdmFyIFNraXBTZWxmID0gbWFrZVBhcmFtRGVjb3JhdG9yKFNraXBTZWxmTWV0YWRhdGEpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29yZS9kaS9kZWNvcmF0b3JzLnRzXG4gKiovIiwiaW1wb3J0IHsgZ2xvYmFsLCBpc0Z1bmN0aW9uLCBzdHJpbmdpZnkgfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xudmFyIF9uZXh0Q2xhc3NJZCA9IDA7XG5mdW5jdGlvbiBleHRyYWN0QW5ub3RhdGlvbihhbm5vdGF0aW9uKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oYW5ub3RhdGlvbikgJiYgYW5ub3RhdGlvbi5oYXNPd25Qcm9wZXJ0eSgnYW5ub3RhdGlvbicpKSB7XG4gICAgICAgIGFubm90YXRpb24gPSBhbm5vdGF0aW9uLmFubm90YXRpb247XG4gICAgfVxuICAgIHJldHVybiBhbm5vdGF0aW9uO1xufVxuZnVuY3Rpb24gYXBwbHlQYXJhbXMoZm5PckFycmF5LCBrZXkpIHtcbiAgICBpZiAoZm5PckFycmF5ID09PSBPYmplY3QgfHwgZm5PckFycmF5ID09PSBTdHJpbmcgfHwgZm5PckFycmF5ID09PSBGdW5jdGlvbiB8fFxuICAgICAgICBmbk9yQXJyYXkgPT09IE51bWJlciB8fCBmbk9yQXJyYXkgPT09IEFycmF5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuIG5vdCB1c2UgbmF0aXZlICR7c3RyaW5naWZ5KGZuT3JBcnJheSl9IGFzIGNvbnN0cnVjdG9yYCk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKGZuT3JBcnJheSkpIHtcbiAgICAgICAgcmV0dXJuIGZuT3JBcnJheTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZm5PckFycmF5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGFubm90YXRpb25zID0gZm5PckFycmF5O1xuICAgICAgICB2YXIgZm4gPSBmbk9yQXJyYXlbZm5PckFycmF5Lmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYExhc3QgcG9zaXRpb24gb2YgQ2xhc3MgbWV0aG9kIGFycmF5IG11c3QgYmUgRnVuY3Rpb24gaW4ga2V5ICR7a2V5fSB3YXMgJyR7c3RyaW5naWZ5KGZuKX0nYCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFubm9MZW5ndGggPSBhbm5vdGF0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgICBpZiAoYW5ub0xlbmd0aCAhPSBmbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTnVtYmVyIG9mIGFubm90YXRpb25zICgke2Fubm9MZW5ndGh9KSBkb2VzIG5vdCBtYXRjaCBudW1iZXIgb2YgYXJndW1lbnRzICgke2ZuLmxlbmd0aH0pIGluIHRoZSBmdW5jdGlvbjogJHtzdHJpbmdpZnkoZm4pfWApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJhbXNBbm5vdGF0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBhbm5vdGF0aW9ucy5sZW5ndGggLSAxOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcmFtQW5ub3RhdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIHBhcmFtc0Fubm90YXRpb25zLnB1c2gocGFyYW1Bbm5vdGF0aW9ucyk7XG4gICAgICAgICAgICB2YXIgYW5ub3RhdGlvbiA9IGFubm90YXRpb25zW2ldO1xuICAgICAgICAgICAgaWYgKGFubm90YXRpb24gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYW5ub3RhdGlvbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUFubm90YXRpb25zLnB1c2goZXh0cmFjdEFubm90YXRpb24oYW5ub3RhdGlvbltqXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRnVuY3Rpb24oYW5ub3RhdGlvbikpIHtcbiAgICAgICAgICAgICAgICBwYXJhbUFubm90YXRpb25zLnB1c2goZXh0cmFjdEFubm90YXRpb24oYW5ub3RhdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1Bbm5vdGF0aW9ucy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoJ3BhcmFtZXRlcnMnLCBwYXJhbXNBbm5vdGF0aW9ucywgZm4pO1xuICAgICAgICByZXR1cm4gZm47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9ubHkgRnVuY3Rpb24gb3IgQXJyYXkgaXMgc3VwcG9ydGVkIGluIENsYXNzIGRlZmluaXRpb24gZm9yIGtleSAnJHtrZXl9JyBpcyAnJHtzdHJpbmdpZnkoZm5PckFycmF5KX0nYCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIENsYXNzKGNsc0RlZikge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFwcGx5UGFyYW1zKGNsc0RlZi5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSA/IGNsc0RlZi5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCwgJ2NvbnN0cnVjdG9yJyk7XG4gICAgdmFyIHByb3RvID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIGlmIChjbHNEZWYuaGFzT3duUHJvcGVydHkoJ2V4dGVuZHMnKSkge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihjbHNEZWYuZXh0ZW5kcykpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IHByb3RvID1cbiAgICAgICAgICAgICAgICBPYmplY3QuY3JlYXRlKGNsc0RlZi5leHRlbmRzLnByb3RvdHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENsYXNzIGRlZmluaXRpb24gJ2V4dGVuZHMnIHByb3BlcnR5IG11c3QgYmUgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB3YXM6ICR7c3RyaW5naWZ5KGNsc0RlZi5leHRlbmRzKX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gY2xzRGVmKSB7XG4gICAgICAgIGlmIChrZXkgIT0gJ2V4dGVuZHMnICYmIGtleSAhPSAncHJvdG90eXBlJyAmJiBjbHNEZWYuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcHJvdG9ba2V5XSA9IGFwcGx5UGFyYW1zKGNsc0RlZltrZXldLCBrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzICYmIHRoaXMuYW5ub3RhdGlvbnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKCdhbm5vdGF0aW9ucycsIHRoaXMuYW5ub3RhdGlvbnMsIGNvbnN0cnVjdG9yKTtcbiAgICB9XG4gICAgaWYgKCFjb25zdHJ1Y3RvclsnbmFtZSddKSB7XG4gICAgICAgIGNvbnN0cnVjdG9yWydvdmVycmlkZGVuTmFtZSddID0gYGNsYXNzJHtfbmV4dENsYXNzSWQrK31gO1xuICAgIH1cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG52YXIgUmVmbGVjdCA9IGdsb2JhbC5SZWZsZWN0O1xuaWYgKCEoUmVmbGVjdCAmJiBSZWZsZWN0LmdldE1ldGFkYXRhKSkge1xuICAgIHRocm93ICdyZWZsZWN0LW1ldGFkYXRhIHNoaW0gaXMgcmVxdWlyZWQgd2hlbiB1c2luZyBjbGFzcyBkZWNvcmF0b3JzJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRGVjb3JhdG9yKGFubm90YXRpb25DbHMsIGNoYWluRm4gPSBudWxsKSB7XG4gICAgZnVuY3Rpb24gRGVjb3JhdG9yRmFjdG9yeShvYmpPclR5cGUpIHtcbiAgICAgICAgdmFyIGFubm90YXRpb25JbnN0YW5jZSA9IG5ldyBhbm5vdGF0aW9uQ2xzKG9iak9yVHlwZSk7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYW5ub3RhdGlvbkNscykge1xuICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25JbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjaGFpbkFubm90YXRpb24gPSBpc0Z1bmN0aW9uKHRoaXMpICYmIHRoaXMuYW5ub3RhdGlvbnMgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMuYW5ub3RhdGlvbnMgOiBbXTtcbiAgICAgICAgICAgIGNoYWluQW5ub3RhdGlvbi5wdXNoKGFubm90YXRpb25JbnN0YW5jZSk7XG4gICAgICAgICAgICB2YXIgVHlwZURlY29yYXRvciA9IGZ1bmN0aW9uIFR5cGVEZWNvcmF0b3IoY2xzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFubm90YXRpb25zID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YSgnYW5ub3RhdGlvbnMnLCBjbHMpO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25zID0gYW5ub3RhdGlvbnMgfHwgW107XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbnMucHVzaChhbm5vdGF0aW9uSW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoJ2Fubm90YXRpb25zJywgYW5ub3RhdGlvbnMsIGNscyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNscztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBUeXBlRGVjb3JhdG9yLmFubm90YXRpb25zID0gY2hhaW5Bbm5vdGF0aW9uO1xuICAgICAgICAgICAgVHlwZURlY29yYXRvci5DbGFzcyA9IENsYXNzO1xuICAgICAgICAgICAgaWYgKGNoYWluRm4pXG4gICAgICAgICAgICAgICAgY2hhaW5GbihUeXBlRGVjb3JhdG9yKTtcbiAgICAgICAgICAgIHJldHVybiBUeXBlRGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIERlY29yYXRvckZhY3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShhbm5vdGF0aW9uQ2xzLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIERlY29yYXRvckZhY3Rvcnk7XG59XG5leHBvcnQgZnVuY3Rpb24gbWFrZVBhcmFtRGVjb3JhdG9yKGFubm90YXRpb25DbHMpIHtcbiAgICBmdW5jdGlvbiBQYXJhbURlY29yYXRvckZhY3RvcnkoLi4uYXJncykge1xuICAgICAgICB2YXIgYW5ub3RhdGlvbkluc3RhbmNlID0gT2JqZWN0LmNyZWF0ZShhbm5vdGF0aW9uQ2xzLnByb3RvdHlwZSk7XG4gICAgICAgIGFubm90YXRpb25DbHMuYXBwbHkoYW5ub3RhdGlvbkluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBhbm5vdGF0aW9uQ2xzKSB7XG4gICAgICAgICAgICByZXR1cm4gYW5ub3RhdGlvbkluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUGFyYW1EZWNvcmF0b3IuYW5ub3RhdGlvbiA9IGFubm90YXRpb25JbnN0YW5jZTtcbiAgICAgICAgICAgIHJldHVybiBQYXJhbURlY29yYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBQYXJhbURlY29yYXRvcihjbHMsIHVudXNlZEtleSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJzID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgncGFyYW1ldGVycycsIGNscyk7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVycyB8fCBbXTtcbiAgICAgICAgICAgIHdoaWxlIChwYXJhbWV0ZXJzLmxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMucHVzaChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmFtZXRlcnNbaW5kZXhdID0gcGFyYW1ldGVyc1tpbmRleF0gfHwgW107XG4gICAgICAgICAgICB2YXIgYW5ub3RhdGlvbnNGb3JQYXJhbSA9IHBhcmFtZXRlcnNbaW5kZXhdO1xuICAgICAgICAgICAgYW5ub3RhdGlvbnNGb3JQYXJhbS5wdXNoKGFubm90YXRpb25JbnN0YW5jZSk7XG4gICAgICAgICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKCdwYXJhbWV0ZXJzJywgcGFyYW1ldGVycywgY2xzKTtcbiAgICAgICAgICAgIHJldHVybiBjbHM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGFyYW1EZWNvcmF0b3JGYWN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoYW5ub3RhdGlvbkNscy5wcm90b3R5cGUpO1xuICAgIHJldHVybiBQYXJhbURlY29yYXRvckZhY3Rvcnk7XG59XG5leHBvcnQgZnVuY3Rpb24gbWFrZVByb3BEZWNvcmF0b3IoZGVjb3JhdG9yQ2xzKSB7XG4gICAgZnVuY3Rpb24gUHJvcERlY29yYXRvckZhY3RvcnkoLi4uYXJncykge1xuICAgICAgICB2YXIgZGVjb3JhdG9ySW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKGRlY29yYXRvckNscy5wcm90b3R5cGUpO1xuICAgICAgICBkZWNvcmF0b3JDbHMuYXBwbHkoZGVjb3JhdG9ySW5zdGFuY2UsIGFyZ3MpO1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGRlY29yYXRvckNscykge1xuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvckluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIFByb3BEZWNvcmF0b3IodGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKCdwcm9wTWV0YWRhdGEnLCB0YXJnZXQuY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgIG1ldGEgPSBtZXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIG1ldGFbbmFtZV0gPSBtZXRhW25hbWVdIHx8IFtdO1xuICAgICAgICAgICAgICAgIG1ldGFbbmFtZV0udW5zaGlmdChkZWNvcmF0b3JJbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSgncHJvcE1ldGFkYXRhJywgbWV0YSwgdGFyZ2V0LmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgUHJvcERlY29yYXRvckZhY3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShkZWNvcmF0b3JDbHMucHJvdG90eXBlKTtcbiAgICByZXR1cm4gUHJvcERlY29yYXRvckZhY3Rvcnk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb3JlL3V0aWwvZGVjb3JhdG9ycy50c1xuICoqLyIsImltcG9ydCB7IHN0cmluZ2lmeSwgaXNGdW5jdGlvbiB9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZFJlZihmb3J3YXJkUmVmRm4pIHtcbiAgICBmb3J3YXJkUmVmRm4uX19mb3J3YXJkX3JlZl9fID0gZm9yd2FyZFJlZjtcbiAgICBmb3J3YXJkUmVmRm4udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzdHJpbmdpZnkodGhpcygpKTsgfTtcbiAgICByZXR1cm4gZm9yd2FyZFJlZkZuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVGb3J3YXJkUmVmKHR5cGUpIHtcbiAgICBpZiAoaXNGdW5jdGlvbih0eXBlKSAmJiB0eXBlLmhhc093blByb3BlcnR5KCdfX2ZvcndhcmRfcmVmX18nKSAmJlxuICAgICAgICB0eXBlLl9fZm9yd2FyZF9yZWZfXyA9PT0gZm9yd2FyZFJlZikge1xuICAgICAgICByZXR1cm4gdHlwZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29yZS9kaS9mb3J3YXJkX3JlZi50c1xuICoqLyIsImltcG9ydCB7IExpc3RXcmFwcGVyIH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcbmltcG9ydCB7IHJlc29sdmVQcm92aWRlcnMgfSBmcm9tICcuL3Byb3ZpZGVyJztcbmltcG9ydCB7IEFic3RyYWN0UHJvdmlkZXJFcnJvciwgTm9Qcm92aWRlckVycm9yLCBDeWNsaWNEZXBlbmRlbmN5RXJyb3IsIEluc3RhbnRpYXRpb25FcnJvciwgT3V0T2ZCb3VuZHNFcnJvciB9IGZyb20gJy4vZXhjZXB0aW9ucyc7XG5pbXBvcnQgeyBpc1ByZXNlbnQsIENPTlNUX0VYUFIgfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHsgS2V5IH0gZnJvbSAnLi9rZXknO1xuaW1wb3J0IHsgU2VsZk1ldGFkYXRhLCBIb3N0TWV0YWRhdGEsIFNraXBTZWxmTWV0YWRhdGEgfSBmcm9tICcuL21ldGFkYXRhJztcbmNvbnN0IF9NQVhfQ09OU1RSVUNUSU9OX0NPVU5URVIgPSAxMDtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSBDT05TVF9FWFBSKG5ldyBPYmplY3QoKSk7XG5leHBvcnQgdmFyIFZpc2liaWxpdHk7XG4oZnVuY3Rpb24gKFZpc2liaWxpdHkpIHtcbiAgICBWaXNpYmlsaXR5W1Zpc2liaWxpdHlbXCJQdWJsaWNcIl0gPSAwXSA9IFwiUHVibGljXCI7XG4gICAgVmlzaWJpbGl0eVtWaXNpYmlsaXR5W1wiUHJpdmF0ZVwiXSA9IDFdID0gXCJQcml2YXRlXCI7XG4gICAgVmlzaWJpbGl0eVtWaXNpYmlsaXR5W1wiUHVibGljQW5kUHJpdmF0ZVwiXSA9IDJdID0gXCJQdWJsaWNBbmRQcml2YXRlXCI7XG59KShWaXNpYmlsaXR5IHx8IChWaXNpYmlsaXR5ID0ge30pKTtcbmZ1bmN0aW9uIGNhblNlZShzcmMsIGRzdCkge1xuICAgIHJldHVybiAoc3JjID09PSBkc3QpIHx8XG4gICAgICAgIChkc3QgPT09IFZpc2liaWxpdHkuUHVibGljQW5kUHJpdmF0ZSB8fCBzcmMgPT09IFZpc2liaWxpdHkuUHVibGljQW5kUHJpdmF0ZSk7XG59XG5leHBvcnQgY2xhc3MgUHJvdG9JbmplY3RvcklubGluZVN0cmF0ZWd5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm90b0VJLCBid3YpIHtcbiAgICAgICAgdGhpcy5wcm92aWRlcjAgPSBudWxsO1xuICAgICAgICB0aGlzLnByb3ZpZGVyMSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJvdmlkZXIyID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcm92aWRlcjMgPSBudWxsO1xuICAgICAgICB0aGlzLnByb3ZpZGVyNCA9IG51bGw7XG4gICAgICAgIHRoaXMucHJvdmlkZXI1ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcm92aWRlcjYgPSBudWxsO1xuICAgICAgICB0aGlzLnByb3ZpZGVyNyA9IG51bGw7XG4gICAgICAgIHRoaXMucHJvdmlkZXI4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcm92aWRlcjkgPSBudWxsO1xuICAgICAgICB0aGlzLmtleUlkMCA9IG51bGw7XG4gICAgICAgIHRoaXMua2V5SWQxID0gbnVsbDtcbiAgICAgICAgdGhpcy5rZXlJZDIgPSBudWxsO1xuICAgICAgICB0aGlzLmtleUlkMyA9IG51bGw7XG4gICAgICAgIHRoaXMua2V5SWQ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5rZXlJZDUgPSBudWxsO1xuICAgICAgICB0aGlzLmtleUlkNiA9IG51bGw7XG4gICAgICAgIHRoaXMua2V5SWQ3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5rZXlJZDggPSBudWxsO1xuICAgICAgICB0aGlzLmtleUlkOSA9IG51bGw7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eTAgPSBudWxsO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHkxID0gbnVsbDtcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5MiA9IG51bGw7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eTMgPSBudWxsO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHk0ID0gbnVsbDtcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5NSA9IG51bGw7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eTYgPSBudWxsO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHk3ID0gbnVsbDtcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5OCA9IG51bGw7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eTkgPSBudWxsO1xuICAgICAgICB2YXIgbGVuZ3RoID0gYnd2Lmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXIwID0gYnd2WzBdLnByb3ZpZGVyO1xuICAgICAgICAgICAgdGhpcy5rZXlJZDAgPSBid3ZbMF0uZ2V0S2V5SWQoKTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTAgPSBid3ZbMF0udmlzaWJpbGl0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5wcm92aWRlcjEgPSBid3ZbMV0ucHJvdmlkZXI7XG4gICAgICAgICAgICB0aGlzLmtleUlkMSA9IGJ3dlsxXS5nZXRLZXlJZCgpO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5MSA9IGJ3dlsxXS52aXNpYmlsaXR5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZW5ndGggPiAyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVyMiA9IGJ3dlsyXS5wcm92aWRlcjtcbiAgICAgICAgICAgIHRoaXMua2V5SWQyID0gYnd2WzJdLmdldEtleUlkKCk7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWxpdHkyID0gYnd2WzJdLnZpc2liaWxpdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXIzID0gYnd2WzNdLnByb3ZpZGVyO1xuICAgICAgICAgICAgdGhpcy5rZXlJZDMgPSBid3ZbM10uZ2V0S2V5SWQoKTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTMgPSBid3ZbM10udmlzaWJpbGl0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgdGhpcy5wcm92aWRlcjQgPSBid3ZbNF0ucHJvdmlkZXI7XG4gICAgICAgICAgICB0aGlzLmtleUlkNCA9IGJ3dls0XS5nZXRLZXlJZCgpO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5NCA9IGJ3dls0XS52aXNpYmlsaXR5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZW5ndGggPiA1KSB7XG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVyNSA9IGJ3dls1XS5wcm92aWRlcjtcbiAgICAgICAgICAgIHRoaXMua2V5SWQ1ID0gYnd2WzVdLmdldEtleUlkKCk7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWxpdHk1ID0gYnd2WzVdLnZpc2liaWxpdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlbmd0aCA+IDYpIHtcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXI2ID0gYnd2WzZdLnByb3ZpZGVyO1xuICAgICAgICAgICAgdGhpcy5rZXlJZDYgPSBid3ZbNl0uZ2V0S2V5SWQoKTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTYgPSBid3ZbNl0udmlzaWJpbGl0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVuZ3RoID4gNykge1xuICAgICAgICAgICAgdGhpcy5wcm92aWRlcjcgPSBid3ZbN10ucHJvdmlkZXI7XG4gICAgICAgICAgICB0aGlzLmtleUlkNyA9IGJ3dls3XS5nZXRLZXlJZCgpO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5NyA9IGJ3dls3XS52aXNpYmlsaXR5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZW5ndGggPiA4KSB7XG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVyOCA9IGJ3dls4XS5wcm92aWRlcjtcbiAgICAgICAgICAgIHRoaXMua2V5SWQ4ID0gYnd2WzhdLmdldEtleUlkKCk7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWxpdHk4ID0gYnd2WzhdLnZpc2liaWxpdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlbmd0aCA+IDkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXI5ID0gYnd2WzldLnByb3ZpZGVyO1xuICAgICAgICAgICAgdGhpcy5rZXlJZDkgPSBid3ZbOV0uZ2V0S2V5SWQoKTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eTkgPSBid3ZbOV0udmlzaWJpbGl0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRQcm92aWRlckF0SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlcjA7XG4gICAgICAgIGlmIChpbmRleCA9PSAxKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvdmlkZXIxO1xuICAgICAgICBpZiAoaW5kZXggPT0gMilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVyMjtcbiAgICAgICAgaWYgKGluZGV4ID09IDMpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlcjM7XG4gICAgICAgIGlmIChpbmRleCA9PSA0KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvdmlkZXI0O1xuICAgICAgICBpZiAoaW5kZXggPT0gNSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVyNTtcbiAgICAgICAgaWYgKGluZGV4ID09IDYpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlcjY7XG4gICAgICAgIGlmIChpbmRleCA9PSA3KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvdmlkZXI3O1xuICAgICAgICBpZiAoaW5kZXggPT0gOClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVyODtcbiAgICAgICAgaWYgKGluZGV4ID09IDkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlcjk7XG4gICAgICAgIHRocm93IG5ldyBPdXRPZkJvdW5kc0Vycm9yKGluZGV4KTtcbiAgICB9XG4gICAgY3JlYXRlSW5qZWN0b3JTdHJhdGVneShpbmplY3Rvcikge1xuICAgICAgICByZXR1cm4gbmV3IEluamVjdG9ySW5saW5lU3RyYXRlZ3koaW5qZWN0b3IsIHRoaXMpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQcm90b0luamVjdG9yRHluYW1pY1N0cmF0ZWd5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm90b0luaiwgYnd2KSB7XG4gICAgICAgIHZhciBsZW4gPSBid3YubGVuZ3RoO1xuICAgICAgICB0aGlzLnByb3ZpZGVycyA9IExpc3RXcmFwcGVyLmNyZWF0ZUZpeGVkU2l6ZShsZW4pO1xuICAgICAgICB0aGlzLmtleUlkcyA9IExpc3RXcmFwcGVyLmNyZWF0ZUZpeGVkU2l6ZShsZW4pO1xuICAgICAgICB0aGlzLnZpc2liaWxpdGllcyA9IExpc3RXcmFwcGVyLmNyZWF0ZUZpeGVkU2l6ZShsZW4pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVyc1tpXSA9IGJ3dltpXS5wcm92aWRlcjtcbiAgICAgICAgICAgIHRoaXMua2V5SWRzW2ldID0gYnd2W2ldLmdldEtleUlkKCk7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWxpdGllc1tpXSA9IGJ3dltpXS52aXNpYmlsaXR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFByb3ZpZGVyQXRJbmRleChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMucHJvdmlkZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE91dE9mQm91bmRzRXJyb3IoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVyc1tpbmRleF07XG4gICAgfVxuICAgIGNyZWF0ZUluamVjdG9yU3RyYXRlZ3koZWkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmplY3RvckR5bmFtaWNTdHJhdGVneSh0aGlzLCBlaSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByb3RvSW5qZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGJ3dikge1xuICAgICAgICB0aGlzLm51bWJlck9mUHJvdmlkZXJzID0gYnd2Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBid3YubGVuZ3RoID4gX01BWF9DT05TVFJVQ1RJT05fQ09VTlRFUiA/XG4gICAgICAgICAgICBuZXcgUHJvdG9JbmplY3RvckR5bmFtaWNTdHJhdGVneSh0aGlzLCBid3YpIDpcbiAgICAgICAgICAgIG5ldyBQcm90b0luamVjdG9ySW5saW5lU3RyYXRlZ3kodGhpcywgYnd2KTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21SZXNvbHZlZFByb3ZpZGVycyhwcm92aWRlcnMpIHtcbiAgICAgICAgdmFyIGJkID0gcHJvdmlkZXJzLm1hcChiID0+IG5ldyBQcm92aWRlcldpdGhWaXNpYmlsaXR5KGIsIFZpc2liaWxpdHkuUHVibGljKSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvdG9JbmplY3RvcihiZCk7XG4gICAgfVxuICAgIGdldFByb3ZpZGVyQXRJbmRleChpbmRleCkgeyByZXR1cm4gdGhpcy5fc3RyYXRlZ3kuZ2V0UHJvdmlkZXJBdEluZGV4KGluZGV4KTsgfVxufVxuZXhwb3J0IGNsYXNzIEluamVjdG9ySW5saW5lU3RyYXRlZ3kge1xuICAgIGNvbnN0cnVjdG9yKGluamVjdG9yLCBwcm90b1N0cmF0ZWd5KSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IgPSBpbmplY3RvcjtcbiAgICAgICAgdGhpcy5wcm90b1N0cmF0ZWd5ID0gcHJvdG9TdHJhdGVneTtcbiAgICAgICAgdGhpcy5vYmowID0gVU5ERUZJTkVEO1xuICAgICAgICB0aGlzLm9iajEgPSBVTkRFRklORUQ7XG4gICAgICAgIHRoaXMub2JqMiA9IFVOREVGSU5FRDtcbiAgICAgICAgdGhpcy5vYmozID0gVU5ERUZJTkVEO1xuICAgICAgICB0aGlzLm9iajQgPSBVTkRFRklORUQ7XG4gICAgICAgIHRoaXMub2JqNSA9IFVOREVGSU5FRDtcbiAgICAgICAgdGhpcy5vYmo2ID0gVU5ERUZJTkVEO1xuICAgICAgICB0aGlzLm9iajcgPSBVTkRFRklORUQ7XG4gICAgICAgIHRoaXMub2JqOCA9IFVOREVGSU5FRDtcbiAgICAgICAgdGhpcy5vYmo5ID0gVU5ERUZJTkVEO1xuICAgIH1cbiAgICByZXNldENvbnN0cnVjdGlvbkNvdW50ZXIoKSB7IHRoaXMuaW5qZWN0b3IuX2NvbnN0cnVjdGlvbkNvdW50ZXIgPSAwOyB9XG4gICAgaW5zdGFudGlhdGVQcm92aWRlcihwcm92aWRlciwgdmlzaWJpbGl0eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5fbmV3KHByb3ZpZGVyLCB2aXNpYmlsaXR5KTtcbiAgICB9XG4gICAgZ2V0T2JqQnlLZXlJZChrZXlJZCwgdmlzaWJpbGl0eSkge1xuICAgICAgICB2YXIgcCA9IHRoaXMucHJvdG9TdHJhdGVneTtcbiAgICAgICAgdmFyIGluaiA9IHRoaXMuaW5qZWN0b3I7XG4gICAgICAgIGlmIChwLmtleUlkMCA9PT0ga2V5SWQgJiYgY2FuU2VlKHAudmlzaWJpbGl0eTAsIHZpc2liaWxpdHkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmowID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iajAgPSBpbmouX25ldyhwLnByb3ZpZGVyMCwgcC52aXNpYmlsaXR5MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmowO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwLmtleUlkMSA9PT0ga2V5SWQgJiYgY2FuU2VlKHAudmlzaWJpbGl0eTEsIHZpc2liaWxpdHkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmoxID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iajEgPSBpbmouX25ldyhwLnByb3ZpZGVyMSwgcC52aXNpYmlsaXR5MSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmoxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwLmtleUlkMiA9PT0ga2V5SWQgJiYgY2FuU2VlKHAudmlzaWJpbGl0eTIsIHZpc2liaWxpdHkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmoyID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iajIgPSBpbmouX25ldyhwLnByb3ZpZGVyMiwgcC52aXNpYmlsaXR5Mik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmoyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwLmtleUlkMyA9PT0ga2V5SWQgJiYgY2FuU2VlKHAudmlzaWJpbGl0eTMsIHZpc2liaWxpdHkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmozID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iajMgPSBpbmouX25ldyhwLnByb3ZpZGVyMywgcC52aXNpYmlsaXR5Myk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmozO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwLmtleUlkNCA9PT0ga2V5SWQgJiYgY2FuU2VlKHAudmlzaWJpbGl0eTQsIHZpc2liaWxpdHkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmo0ID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iajQgPSBpbmouX25ldyhwLnByb3ZpZGVyNCwgcC52aXNpYmlsaXR5NCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmo0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwLmtleUlkNSA9PT0ga2V5SWQgJiYgY2FuU2VlKHAudmlzaWJpbGl0eTUsIHZpc2liaWxpdHkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmo1ID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iajUgPSBpbmouX25ldyhwLnByb3ZpZGVyNSwgcC52aXNpYmlsaXR5NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmo1O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwLmtleUlkNiA9PT0ga2V5SWQgJiYgY2FuU2VlKHAudmlzaWJpbGl0eTYsIHZpc2liaWxpdHkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmo2ID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iajYgPSBpbmouX25ldyhwLnByb3ZpZGVyNiwgcC52aXNpYmlsaXR5Nik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmo2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwLmtleUlkNyA9PT0ga2V5SWQgJiYgY2FuU2VlKHAudmlzaWJpbGl0eTcsIHZpc2liaWxpdHkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmo3ID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iajcgPSBpbmouX25ldyhwLnByb3ZpZGVyNywgcC52aXNpYmlsaXR5Nyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmo3O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwLmtleUlkOCA9PT0ga2V5SWQgJiYgY2FuU2VlKHAudmlzaWJpbGl0eTgsIHZpc2liaWxpdHkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmo4ID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iajggPSBpbmouX25ldyhwLnByb3ZpZGVyOCwgcC52aXNpYmlsaXR5OCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmo4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwLmtleUlkOSA9PT0ga2V5SWQgJiYgY2FuU2VlKHAudmlzaWJpbGl0eTksIHZpc2liaWxpdHkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmo5ID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iajkgPSBpbmouX25ldyhwLnByb3ZpZGVyOSwgcC52aXNpYmlsaXR5OSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmo5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBVTkRFRklORUQ7XG4gICAgfVxuICAgIGdldE9iakF0SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmowO1xuICAgICAgICBpZiAoaW5kZXggPT0gMSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9iajE7XG4gICAgICAgIGlmIChpbmRleCA9PSAyKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqMjtcbiAgICAgICAgaWYgKGluZGV4ID09IDMpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmozO1xuICAgICAgICBpZiAoaW5kZXggPT0gNClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9iajQ7XG4gICAgICAgIGlmIChpbmRleCA9PSA1KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqNTtcbiAgICAgICAgaWYgKGluZGV4ID09IDYpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmo2O1xuICAgICAgICBpZiAoaW5kZXggPT0gNylcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9iajc7XG4gICAgICAgIGlmIChpbmRleCA9PSA4KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqODtcbiAgICAgICAgaWYgKGluZGV4ID09IDkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYmo5O1xuICAgICAgICB0aHJvdyBuZXcgT3V0T2ZCb3VuZHNFcnJvcihpbmRleCk7XG4gICAgfVxuICAgIGdldE1heE51bWJlck9mT2JqZWN0cygpIHsgcmV0dXJuIF9NQVhfQ09OU1RSVUNUSU9OX0NPVU5URVI7IH1cbn1cbmV4cG9ydCBjbGFzcyBJbmplY3RvckR5bmFtaWNTdHJhdGVneSB7XG4gICAgY29uc3RydWN0b3IocHJvdG9TdHJhdGVneSwgaW5qZWN0b3IpIHtcbiAgICAgICAgdGhpcy5wcm90b1N0cmF0ZWd5ID0gcHJvdG9TdHJhdGVneTtcbiAgICAgICAgdGhpcy5pbmplY3RvciA9IGluamVjdG9yO1xuICAgICAgICB0aGlzLm9ianMgPSBMaXN0V3JhcHBlci5jcmVhdGVGaXhlZFNpemUocHJvdG9TdHJhdGVneS5wcm92aWRlcnMubGVuZ3RoKTtcbiAgICAgICAgTGlzdFdyYXBwZXIuZmlsbCh0aGlzLm9ianMsIFVOREVGSU5FRCk7XG4gICAgfVxuICAgIHJlc2V0Q29uc3RydWN0aW9uQ291bnRlcigpIHsgdGhpcy5pbmplY3Rvci5fY29uc3RydWN0aW9uQ291bnRlciA9IDA7IH1cbiAgICBpbnN0YW50aWF0ZVByb3ZpZGVyKHByb3ZpZGVyLCB2aXNpYmlsaXR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLl9uZXcocHJvdmlkZXIsIHZpc2liaWxpdHkpO1xuICAgIH1cbiAgICBnZXRPYmpCeUtleUlkKGtleUlkLCB2aXNpYmlsaXR5KSB7XG4gICAgICAgIHZhciBwID0gdGhpcy5wcm90b1N0cmF0ZWd5O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHAua2V5SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocC5rZXlJZHNbaV0gPT09IGtleUlkICYmIGNhblNlZShwLnZpc2liaWxpdGllc1tpXSwgdmlzaWJpbGl0eSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmpzW2ldID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpzW2ldID0gdGhpcy5pbmplY3Rvci5fbmV3KHAucHJvdmlkZXJzW2ldLCBwLnZpc2liaWxpdGllc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9ianNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFVOREVGSU5FRDtcbiAgICB9XG4gICAgZ2V0T2JqQXRJbmRleChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMub2Jqcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPdXRPZkJvdW5kc0Vycm9yKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vYmpzW2luZGV4XTtcbiAgICB9XG4gICAgZ2V0TWF4TnVtYmVyT2ZPYmplY3RzKCkgeyByZXR1cm4gdGhpcy5vYmpzLmxlbmd0aDsgfVxufVxuZXhwb3J0IGNsYXNzIFByb3ZpZGVyV2l0aFZpc2liaWxpdHkge1xuICAgIGNvbnN0cnVjdG9yKHByb3ZpZGVyLCB2aXNpYmlsaXR5KSB7XG4gICAgICAgIHRoaXMucHJvdmlkZXIgPSBwcm92aWRlcjtcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gdmlzaWJpbGl0eTtcbiAgICB9XG4gICAgO1xuICAgIGdldEtleUlkKCkgeyByZXR1cm4gdGhpcy5wcm92aWRlci5rZXkuaWQ7IH1cbn1cbmV4cG9ydCBjbGFzcyBJbmplY3RvciB7XG4gICAgY29uc3RydWN0b3IoX3Byb3RvLCBfcGFyZW50ID0gbnVsbCwgX2lzSG9zdEJvdW5kYXJ5ID0gZmFsc2UsIF9kZXBQcm92aWRlciA9IG51bGwsIF9kZWJ1Z0NvbnRleHQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2lzSG9zdEJvdW5kYXJ5ID0gX2lzSG9zdEJvdW5kYXJ5O1xuICAgICAgICB0aGlzLl9kZXBQcm92aWRlciA9IF9kZXBQcm92aWRlcjtcbiAgICAgICAgdGhpcy5fZGVidWdDb250ZXh0ID0gX2RlYnVnQ29udGV4dDtcbiAgICAgICAgdGhpcy5fY29uc3RydWN0aW9uQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuX3Byb3RvID0gX3Byb3RvO1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBfcGFyZW50O1xuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IF9wcm90by5fc3RyYXRlZ3kuY3JlYXRlSW5qZWN0b3JTdHJhdGVneSh0aGlzKTtcbiAgICB9XG4gICAgc3RhdGljIHJlc29sdmUocHJvdmlkZXJzKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvdmlkZXJzKHByb3ZpZGVycyk7XG4gICAgfVxuICAgIHN0YXRpYyByZXNvbHZlQW5kQ3JlYXRlKHByb3ZpZGVycykge1xuICAgICAgICB2YXIgcmVzb2x2ZWRQcm92aWRlcnMgPSBJbmplY3Rvci5yZXNvbHZlKHByb3ZpZGVycyk7XG4gICAgICAgIHJldHVybiBJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMocmVzb2x2ZWRQcm92aWRlcnMpO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbVJlc29sdmVkUHJvdmlkZXJzKHByb3ZpZGVycykge1xuICAgICAgICByZXR1cm4gbmV3IEluamVjdG9yKFByb3RvSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKHByb3ZpZGVycykpO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbVJlc29sdmVkQmluZGluZ3MocHJvdmlkZXJzKSB7XG4gICAgICAgIHJldHVybiBJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMocHJvdmlkZXJzKTtcbiAgICB9XG4gICAgZ2V0IGhvc3RCb3VuZGFyeSgpIHsgcmV0dXJuIHRoaXMuX2lzSG9zdEJvdW5kYXJ5OyB9XG4gICAgZGVidWdDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5fZGVidWdDb250ZXh0KCk7IH1cbiAgICBnZXQodG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEJ5S2V5KEtleS5nZXQodG9rZW4pLCBudWxsLCBudWxsLCBmYWxzZSwgVmlzaWJpbGl0eS5QdWJsaWNBbmRQcml2YXRlKTtcbiAgICB9XG4gICAgZ2V0T3B0aW9uYWwodG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEJ5S2V5KEtleS5nZXQodG9rZW4pLCBudWxsLCBudWxsLCB0cnVlLCBWaXNpYmlsaXR5LlB1YmxpY0FuZFByaXZhdGUpO1xuICAgIH1cbiAgICBnZXRBdChpbmRleCkgeyByZXR1cm4gdGhpcy5fc3RyYXRlZ3kuZ2V0T2JqQXRJbmRleChpbmRleCk7IH1cbiAgICBnZXQgcGFyZW50KCkgeyByZXR1cm4gdGhpcy5fcGFyZW50OyB9XG4gICAgZ2V0IGludGVybmFsU3RyYXRlZ3koKSB7IHJldHVybiB0aGlzLl9zdHJhdGVneTsgfVxuICAgIHJlc29sdmVBbmRDcmVhdGVDaGlsZChwcm92aWRlcnMpIHtcbiAgICAgICAgdmFyIHJlc29sdmVkUHJvdmlkZXJzID0gSW5qZWN0b3IucmVzb2x2ZShwcm92aWRlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZEZyb21SZXNvbHZlZChyZXNvbHZlZFByb3ZpZGVycyk7XG4gICAgfVxuICAgIGNyZWF0ZUNoaWxkRnJvbVJlc29sdmVkKHByb3ZpZGVycykge1xuICAgICAgICB2YXIgYmQgPSBwcm92aWRlcnMubWFwKGIgPT4gbmV3IFByb3ZpZGVyV2l0aFZpc2liaWxpdHkoYiwgVmlzaWJpbGl0eS5QdWJsaWMpKTtcbiAgICAgICAgdmFyIHByb3RvID0gbmV3IFByb3RvSW5qZWN0b3IoYmQpO1xuICAgICAgICB2YXIgaW5qID0gbmV3IEluamVjdG9yKHByb3RvKTtcbiAgICAgICAgaW5qLl9wYXJlbnQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gaW5qO1xuICAgIH1cbiAgICByZXNvbHZlQW5kSW5zdGFudGlhdGUocHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFudGlhdGVSZXNvbHZlZChJbmplY3Rvci5yZXNvbHZlKFtwcm92aWRlcl0pWzBdKTtcbiAgICB9XG4gICAgaW5zdGFudGlhdGVSZXNvbHZlZChwcm92aWRlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFudGlhdGVQcm92aWRlcihwcm92aWRlciwgVmlzaWJpbGl0eS5QdWJsaWNBbmRQcml2YXRlKTtcbiAgICB9XG4gICAgX25ldyhwcm92aWRlciwgdmlzaWJpbGl0eSkge1xuICAgICAgICBpZiAodGhpcy5fY29uc3RydWN0aW9uQ291bnRlcisrID4gdGhpcy5fc3RyYXRlZ3kuZ2V0TWF4TnVtYmVyT2ZPYmplY3RzKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBDeWNsaWNEZXBlbmRlbmN5RXJyb3IodGhpcywgcHJvdmlkZXIua2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFudGlhdGVQcm92aWRlcihwcm92aWRlciwgdmlzaWJpbGl0eSk7XG4gICAgfVxuICAgIF9pbnN0YW50aWF0ZVByb3ZpZGVyKHByb3ZpZGVyLCB2aXNpYmlsaXR5KSB7XG4gICAgICAgIGlmIChwcm92aWRlci5tdWx0aVByb3ZpZGVyKSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gTGlzdFdyYXBwZXIuY3JlYXRlRml4ZWRTaXplKHByb3ZpZGVyLnJlc29sdmVkRmFjdG9yaWVzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3ZpZGVyLnJlc29sdmVkRmFjdG9yaWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgcmVzW2ldID0gdGhpcy5faW5zdGFudGlhdGUocHJvdmlkZXIsIHByb3ZpZGVyLnJlc29sdmVkRmFjdG9yaWVzW2ldLCB2aXNpYmlsaXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFudGlhdGUocHJvdmlkZXIsIHByb3ZpZGVyLnJlc29sdmVkRmFjdG9yaWVzWzBdLCB2aXNpYmlsaXR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaW5zdGFudGlhdGUocHJvdmlkZXIsIHJlc29sdmVkRmFjdG9yeSwgdmlzaWJpbGl0eSkge1xuICAgICAgICB2YXIgZmFjdG9yeSA9IHJlc29sdmVkRmFjdG9yeS5mYWN0b3J5O1xuICAgICAgICB2YXIgZGVwcyA9IHJlc29sdmVkRmFjdG9yeS5kZXBlbmRlbmNpZXM7XG4gICAgICAgIHZhciBsZW5ndGggPSBkZXBzLmxlbmd0aDtcbiAgICAgICAgdmFyIGQwLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgsIGQ5LCBkMTAsIGQxMSwgZDEyLCBkMTMsIGQxNCwgZDE1LCBkMTYsIGQxNywgZDE4LCBkMTk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkMCA9IGxlbmd0aCA+IDAgPyB0aGlzLl9nZXRCeURlcGVuZGVuY3kocHJvdmlkZXIsIGRlcHNbMF0sIHZpc2liaWxpdHkpIDogbnVsbDtcbiAgICAgICAgICAgIGQxID0gbGVuZ3RoID4gMSA/IHRoaXMuX2dldEJ5RGVwZW5kZW5jeShwcm92aWRlciwgZGVwc1sxXSwgdmlzaWJpbGl0eSkgOiBudWxsO1xuICAgICAgICAgICAgZDIgPSBsZW5ndGggPiAyID8gdGhpcy5fZ2V0QnlEZXBlbmRlbmN5KHByb3ZpZGVyLCBkZXBzWzJdLCB2aXNpYmlsaXR5KSA6IG51bGw7XG4gICAgICAgICAgICBkMyA9IGxlbmd0aCA+IDMgPyB0aGlzLl9nZXRCeURlcGVuZGVuY3kocHJvdmlkZXIsIGRlcHNbM10sIHZpc2liaWxpdHkpIDogbnVsbDtcbiAgICAgICAgICAgIGQ0ID0gbGVuZ3RoID4gNCA/IHRoaXMuX2dldEJ5RGVwZW5kZW5jeShwcm92aWRlciwgZGVwc1s0XSwgdmlzaWJpbGl0eSkgOiBudWxsO1xuICAgICAgICAgICAgZDUgPSBsZW5ndGggPiA1ID8gdGhpcy5fZ2V0QnlEZXBlbmRlbmN5KHByb3ZpZGVyLCBkZXBzWzVdLCB2aXNpYmlsaXR5KSA6IG51bGw7XG4gICAgICAgICAgICBkNiA9IGxlbmd0aCA+IDYgPyB0aGlzLl9nZXRCeURlcGVuZGVuY3kocHJvdmlkZXIsIGRlcHNbNl0sIHZpc2liaWxpdHkpIDogbnVsbDtcbiAgICAgICAgICAgIGQ3ID0gbGVuZ3RoID4gNyA/IHRoaXMuX2dldEJ5RGVwZW5kZW5jeShwcm92aWRlciwgZGVwc1s3XSwgdmlzaWJpbGl0eSkgOiBudWxsO1xuICAgICAgICAgICAgZDggPSBsZW5ndGggPiA4ID8gdGhpcy5fZ2V0QnlEZXBlbmRlbmN5KHByb3ZpZGVyLCBkZXBzWzhdLCB2aXNpYmlsaXR5KSA6IG51bGw7XG4gICAgICAgICAgICBkOSA9IGxlbmd0aCA+IDkgPyB0aGlzLl9nZXRCeURlcGVuZGVuY3kocHJvdmlkZXIsIGRlcHNbOV0sIHZpc2liaWxpdHkpIDogbnVsbDtcbiAgICAgICAgICAgIGQxMCA9IGxlbmd0aCA+IDEwID8gdGhpcy5fZ2V0QnlEZXBlbmRlbmN5KHByb3ZpZGVyLCBkZXBzWzEwXSwgdmlzaWJpbGl0eSkgOiBudWxsO1xuICAgICAgICAgICAgZDExID0gbGVuZ3RoID4gMTEgPyB0aGlzLl9nZXRCeURlcGVuZGVuY3kocHJvdmlkZXIsIGRlcHNbMTFdLCB2aXNpYmlsaXR5KSA6IG51bGw7XG4gICAgICAgICAgICBkMTIgPSBsZW5ndGggPiAxMiA/IHRoaXMuX2dldEJ5RGVwZW5kZW5jeShwcm92aWRlciwgZGVwc1sxMl0sIHZpc2liaWxpdHkpIDogbnVsbDtcbiAgICAgICAgICAgIGQxMyA9IGxlbmd0aCA+IDEzID8gdGhpcy5fZ2V0QnlEZXBlbmRlbmN5KHByb3ZpZGVyLCBkZXBzWzEzXSwgdmlzaWJpbGl0eSkgOiBudWxsO1xuICAgICAgICAgICAgZDE0ID0gbGVuZ3RoID4gMTQgPyB0aGlzLl9nZXRCeURlcGVuZGVuY3kocHJvdmlkZXIsIGRlcHNbMTRdLCB2aXNpYmlsaXR5KSA6IG51bGw7XG4gICAgICAgICAgICBkMTUgPSBsZW5ndGggPiAxNSA/IHRoaXMuX2dldEJ5RGVwZW5kZW5jeShwcm92aWRlciwgZGVwc1sxNV0sIHZpc2liaWxpdHkpIDogbnVsbDtcbiAgICAgICAgICAgIGQxNiA9IGxlbmd0aCA+IDE2ID8gdGhpcy5fZ2V0QnlEZXBlbmRlbmN5KHByb3ZpZGVyLCBkZXBzWzE2XSwgdmlzaWJpbGl0eSkgOiBudWxsO1xuICAgICAgICAgICAgZDE3ID0gbGVuZ3RoID4gMTcgPyB0aGlzLl9nZXRCeURlcGVuZGVuY3kocHJvdmlkZXIsIGRlcHNbMTddLCB2aXNpYmlsaXR5KSA6IG51bGw7XG4gICAgICAgICAgICBkMTggPSBsZW5ndGggPiAxOCA/IHRoaXMuX2dldEJ5RGVwZW5kZW5jeShwcm92aWRlciwgZGVwc1sxOF0sIHZpc2liaWxpdHkpIDogbnVsbDtcbiAgICAgICAgICAgIGQxOSA9IGxlbmd0aCA+IDE5ID8gdGhpcy5fZ2V0QnlEZXBlbmRlbmN5KHByb3ZpZGVyLCBkZXBzWzE5XSwgdmlzaWJpbGl0eSkgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEFic3RyYWN0UHJvdmlkZXJFcnJvciB8fCBlIGluc3RhbmNlb2YgSW5zdGFudGlhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgZS5hZGRLZXkodGhpcywgcHJvdmlkZXIua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9iajtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBvYmogPSBmYWN0b3J5KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gZmFjdG9yeShkMCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gZmFjdG9yeShkMCwgZDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGZhY3RvcnkoZDAsIGQxLCBkMik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gZmFjdG9yeShkMCwgZDEsIGQyLCBkMyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gZmFjdG9yeShkMCwgZDEsIGQyLCBkMywgZDQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGZhY3RvcnkoZDAsIGQxLCBkMiwgZDMsIGQ0LCBkNSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gZmFjdG9yeShkMCwgZDEsIGQyLCBkMywgZDQsIGQ1LCBkNik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gZmFjdG9yeShkMCwgZDEsIGQyLCBkMywgZDQsIGQ1LCBkNiwgZDcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGZhY3RvcnkoZDAsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3LCBkOCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGZhY3RvcnkoZDAsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3LCBkOCwgZDkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICBvYmogPSBmYWN0b3J5KGQwLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgsIGQ5LCBkMTApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICBvYmogPSBmYWN0b3J5KGQwLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgsIGQ5LCBkMTAsIGQxMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGZhY3RvcnkoZDAsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3LCBkOCwgZDksIGQxMCwgZDExLCBkMTIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgICAgICBvYmogPSBmYWN0b3J5KGQwLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgsIGQ5LCBkMTAsIGQxMSwgZDEyLCBkMTMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgICAgICBvYmogPSBmYWN0b3J5KGQwLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgsIGQ5LCBkMTAsIGQxMSwgZDEyLCBkMTMsIGQxNCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGZhY3RvcnkoZDAsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3LCBkOCwgZDksIGQxMCwgZDExLCBkMTIsIGQxMywgZDE0LCBkMTUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgICAgICBvYmogPSBmYWN0b3J5KGQwLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgsIGQ5LCBkMTAsIGQxMSwgZDEyLCBkMTMsIGQxNCwgZDE1LCBkMTYpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICAgICAgICBvYmogPSBmYWN0b3J5KGQwLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgsIGQ5LCBkMTAsIGQxMSwgZDEyLCBkMTMsIGQxNCwgZDE1LCBkMTYsIGQxNyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGZhY3RvcnkoZDAsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3LCBkOCwgZDksIGQxMCwgZDExLCBkMTIsIGQxMywgZDE0LCBkMTUsIGQxNiwgZDE3LCBkMTgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICAgICAgICBvYmogPSBmYWN0b3J5KGQwLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgsIGQ5LCBkMTAsIGQxMSwgZDEyLCBkMTMsIGQxNCwgZDE1LCBkMTYsIGQxNywgZDE4LCBkMTkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEluc3RhbnRpYXRpb25FcnJvcih0aGlzLCBlLCBlLnN0YWNrLCBwcm92aWRlci5rZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIF9nZXRCeURlcGVuZGVuY3kocHJvdmlkZXIsIGRlcCwgcHJvdmlkZXJWaXNpYmlsaXR5KSB7XG4gICAgICAgIHZhciBzcGVjaWFsID0gaXNQcmVzZW50KHRoaXMuX2RlcFByb3ZpZGVyKSA/XG4gICAgICAgICAgICB0aGlzLl9kZXBQcm92aWRlci5nZXREZXBlbmRlbmN5KHRoaXMsIHByb3ZpZGVyLCBkZXApIDpcbiAgICAgICAgICAgIFVOREVGSU5FRDtcbiAgICAgICAgaWYgKHNwZWNpYWwgIT09IFVOREVGSU5FRCkge1xuICAgICAgICAgICAgcmV0dXJuIHNwZWNpYWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QnlLZXkoZGVwLmtleSwgZGVwLmxvd2VyQm91bmRWaXNpYmlsaXR5LCBkZXAudXBwZXJCb3VuZFZpc2liaWxpdHksIGRlcC5vcHRpb25hbCwgcHJvdmlkZXJWaXNpYmlsaXR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0QnlLZXkoa2V5LCBsb3dlckJvdW5kVmlzaWJpbGl0eSwgdXBwZXJCb3VuZFZpc2liaWxpdHksIG9wdGlvbmFsLCBwcm92aWRlclZpc2liaWxpdHkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gSU5KRUNUT1JfS0VZKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodXBwZXJCb3VuZFZpc2liaWxpdHkgaW5zdGFuY2VvZiBTZWxmTWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRCeUtleVNlbGYoa2V5LCBvcHRpb25hbCwgcHJvdmlkZXJWaXNpYmlsaXR5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1cHBlckJvdW5kVmlzaWJpbGl0eSBpbnN0YW5jZW9mIEhvc3RNZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEJ5S2V5SG9zdChrZXksIG9wdGlvbmFsLCBwcm92aWRlclZpc2liaWxpdHksIGxvd2VyQm91bmRWaXNpYmlsaXR5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRCeUtleURlZmF1bHQoa2V5LCBvcHRpb25hbCwgcHJvdmlkZXJWaXNpYmlsaXR5LCBsb3dlckJvdW5kVmlzaWJpbGl0eSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3Rocm93T3JOdWxsKGtleSwgb3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBOb1Byb3ZpZGVyRXJyb3IodGhpcywga2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0QnlLZXlTZWxmKGtleSwgb3B0aW9uYWwsIHByb3ZpZGVyVmlzaWJpbGl0eSkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5fc3RyYXRlZ3kuZ2V0T2JqQnlLZXlJZChrZXkuaWQsIHByb3ZpZGVyVmlzaWJpbGl0eSk7XG4gICAgICAgIHJldHVybiAob2JqICE9PSBVTkRFRklORUQpID8gb2JqIDogdGhpcy5fdGhyb3dPck51bGwoa2V5LCBvcHRpb25hbCk7XG4gICAgfVxuICAgIF9nZXRCeUtleUhvc3Qoa2V5LCBvcHRpb25hbCwgcHJvdmlkZXJWaXNpYmlsaXR5LCBsb3dlckJvdW5kVmlzaWJpbGl0eSkge1xuICAgICAgICB2YXIgaW5qID0gdGhpcztcbiAgICAgICAgaWYgKGxvd2VyQm91bmRWaXNpYmlsaXR5IGluc3RhbmNlb2YgU2tpcFNlbGZNZXRhZGF0YSkge1xuICAgICAgICAgICAgaWYgKGluai5faXNIb3N0Qm91bmRhcnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0UHJpdmF0ZURlcGVuZGVuY3koa2V5LCBvcHRpb25hbCwgaW5qKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluaiA9IGluai5fcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChpbmogIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IGluai5fc3RyYXRlZ3kuZ2V0T2JqQnlLZXlJZChrZXkuaWQsIHByb3ZpZGVyVmlzaWJpbGl0eSk7XG4gICAgICAgICAgICBpZiAob2JqICE9PSBVTkRFRklORUQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIGlmIChpc1ByZXNlbnQoaW5qLl9wYXJlbnQpICYmIGluai5faXNIb3N0Qm91bmRhcnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0UHJpdmF0ZURlcGVuZGVuY3koa2V5LCBvcHRpb25hbCwgaW5qKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluaiA9IGluai5fcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl90aHJvd09yTnVsbChrZXksIG9wdGlvbmFsKTtcbiAgICB9XG4gICAgX2dldFByaXZhdGVEZXBlbmRlbmN5KGtleSwgb3B0aW9uYWwsIGluaikge1xuICAgICAgICB2YXIgb2JqID0gaW5qLl9wYXJlbnQuX3N0cmF0ZWd5LmdldE9iakJ5S2V5SWQoa2V5LmlkLCBWaXNpYmlsaXR5LlByaXZhdGUpO1xuICAgICAgICByZXR1cm4gKG9iaiAhPT0gVU5ERUZJTkVEKSA/IG9iaiA6IHRoaXMuX3Rocm93T3JOdWxsKGtleSwgb3B0aW9uYWwpO1xuICAgIH1cbiAgICBfZ2V0QnlLZXlEZWZhdWx0KGtleSwgb3B0aW9uYWwsIHByb3ZpZGVyVmlzaWJpbGl0eSwgbG93ZXJCb3VuZFZpc2liaWxpdHkpIHtcbiAgICAgICAgdmFyIGluaiA9IHRoaXM7XG4gICAgICAgIGlmIChsb3dlckJvdW5kVmlzaWJpbGl0eSBpbnN0YW5jZW9mIFNraXBTZWxmTWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHByb3ZpZGVyVmlzaWJpbGl0eSA9IGluai5faXNIb3N0Qm91bmRhcnkgPyBWaXNpYmlsaXR5LlB1YmxpY0FuZFByaXZhdGUgOiBWaXNpYmlsaXR5LlB1YmxpYztcbiAgICAgICAgICAgIGluaiA9IGluai5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChpbmogIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IGluai5fc3RyYXRlZ3kuZ2V0T2JqQnlLZXlJZChrZXkuaWQsIHByb3ZpZGVyVmlzaWJpbGl0eSk7XG4gICAgICAgICAgICBpZiAob2JqICE9PSBVTkRFRklORUQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIHByb3ZpZGVyVmlzaWJpbGl0eSA9IGluai5faXNIb3N0Qm91bmRhcnkgPyBWaXNpYmlsaXR5LlB1YmxpY0FuZFByaXZhdGUgOiBWaXNpYmlsaXR5LlB1YmxpYztcbiAgICAgICAgICAgIGluaiA9IGluai5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl90aHJvd09yTnVsbChrZXksIG9wdGlvbmFsKTtcbiAgICB9XG4gICAgZ2V0IGRpc3BsYXlOYW1lKCkge1xuICAgICAgICByZXR1cm4gYEluamVjdG9yKHByb3ZpZGVyczogWyR7X21hcFByb3ZpZGVycyh0aGlzLCBiID0+IGAgXCIke2Iua2V5LmRpc3BsYXlOYW1lfVwiIGApLmpvaW4oXCIsIFwiKX1dKWA7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkgeyByZXR1cm4gdGhpcy5kaXNwbGF5TmFtZTsgfVxufVxudmFyIElOSkVDVE9SX0tFWSA9IEtleS5nZXQoSW5qZWN0b3IpO1xuZnVuY3Rpb24gX21hcFByb3ZpZGVycyhpbmplY3RvciwgZm4pIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmplY3Rvci5fcHJvdG8ubnVtYmVyT2ZQcm92aWRlcnM7ICsraSkge1xuICAgICAgICByZXMucHVzaChmbihpbmplY3Rvci5fcHJvdG8uZ2V0UHJvdmlkZXJBdEluZGV4KGkpKSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb3JlL2RpL2luamVjdG9yLnRzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO3ZhciBsYW5nXzEgPSByZXF1aXJlKCdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnKTtcclxuZXhwb3J0cy5NYXAgPSBsYW5nXzEuZ2xvYmFsLk1hcDtcclxuZXhwb3J0cy5TZXQgPSBsYW5nXzEuZ2xvYmFsLlNldDtcclxuLy8gU2FmYXJpIGFuZCBJbnRlcm5ldCBFeHBsb3JlciBkbyBub3Qgc3VwcG9ydCB0aGUgaXRlcmFibGUgcGFyYW1ldGVyIHRvIHRoZVxyXG4vLyBNYXAgY29uc3RydWN0b3IuICBXZSB3b3JrIGFyb3VuZCB0aGF0IGJ5IG1hbnVhbGx5IGFkZGluZyB0aGUgaXRlbXMuXHJcbnZhciBjcmVhdGVNYXBGcm9tUGFpcnMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAobmV3IGV4cG9ydHMuTWFwKFtbMSwgMl1dKS5zaXplID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVNYXBGcm9tUGFpcnMocGFpcnMpIHsgcmV0dXJuIG5ldyBleHBvcnRzLk1hcChwYWlycyk7IH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVNYXBBbmRQb3B1bGF0ZUZyb21QYWlycyhwYWlycykge1xyXG4gICAgICAgIHZhciBtYXAgPSBuZXcgZXhwb3J0cy5NYXAoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWlyID0gcGFpcnNbaV07XHJcbiAgICAgICAgICAgIG1hcC5zZXQocGFpclswXSwgcGFpclsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXA7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgY3JlYXRlTWFwRnJvbU1hcCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChuZXcgZXhwb3J0cy5NYXAobmV3IGV4cG9ydHMuTWFwKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVNYXBGcm9tTWFwKG0pIHsgcmV0dXJuIG5ldyBleHBvcnRzLk1hcChtKTsgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZU1hcEFuZFBvcHVsYXRlRnJvbU1hcChtKSB7XHJcbiAgICAgICAgdmFyIG1hcCA9IG5ldyBleHBvcnRzLk1hcCgpO1xyXG4gICAgICAgIG0uZm9yRWFjaChmdW5jdGlvbiAodiwgaykgeyBtYXAuc2V0KGssIHYpOyB9KTtcclxuICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9jbGVhclZhbHVlcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoKG5ldyBleHBvcnRzLk1hcCgpKS5rZXlzKCkubmV4dCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBfY2xlYXJWYWx1ZXMobSkge1xyXG4gICAgICAgICAgICB2YXIga2V5SXRlcmF0b3IgPSBtLmtleXMoKTtcclxuICAgICAgICAgICAgdmFyIGs7XHJcbiAgICAgICAgICAgIHdoaWxlICghKChrID0ga2V5SXRlcmF0b3IubmV4dCgpKS5kb25lKSkge1xyXG4gICAgICAgICAgICAgICAgbS5zZXQoay52YWx1ZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIF9jbGVhclZhbHVlc1dpdGhGb3JlRWFjaChtKSB7XHJcbiAgICAgICAgICAgIG0uZm9yRWFjaChmdW5jdGlvbiAodiwgaykgeyBtLnNldChrLCBudWxsKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSkoKTtcclxuLy8gU2FmYXJpIGRvZXNuJ3QgaW1wbGVtZW50IE1hcEl0ZXJhdG9yLm5leHQoKSwgd2hpY2ggaXMgdXNlZCBpcyBUcmFjZXVyJ3MgcG9seWZpbGwgb2YgQXJyYXkuZnJvbVxyXG4vLyBUT0RPKG1sYXZhbCk6IHJlbW92ZSB0aGUgd29yayBhcm91bmQgb25jZSB3ZSBoYXZlIGEgd29ya2luZyBwb2x5ZmlsbCBvZiBBcnJheS5mcm9tXHJcbnZhciBfYXJyYXlGcm9tTWFwID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKChuZXcgZXhwb3J0cy5NYXAoKSkudmFsdWVzKCkubmV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlQXJyYXlGcm9tTWFwKG0sIGdldFZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFZhbHVlcyA/IEFycmF5LmZyb20obS52YWx1ZXMoKSkgOiBBcnJheS5mcm9tKG0ua2V5cygpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZUFycmF5RnJvbU1hcFdpdGhGb3JlYWNoKG0sIGdldFZhbHVlcykge1xyXG4gICAgICAgIHZhciByZXMgPSBMaXN0V3JhcHBlci5jcmVhdGVGaXhlZFNpemUobS5zaXplKSwgaSA9IDA7XHJcbiAgICAgICAgbS5mb3JFYWNoKGZ1bmN0aW9uICh2LCBrKSB7XHJcbiAgICAgICAgICAgIHJlc1tpXSA9IGdldFZhbHVlcyA/IHYgOiBrO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBNYXBXcmFwcGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hcFdyYXBwZXIoKSB7XHJcbiAgICB9XHJcbiAgICBNYXBXcmFwcGVyLmNsb25lID0gZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGNyZWF0ZU1hcEZyb21NYXAobSk7IH07XHJcbiAgICBNYXBXcmFwcGVyLmNyZWF0ZUZyb21TdHJpbmdNYXAgPSBmdW5jdGlvbiAoc3RyaW5nTWFwKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBleHBvcnRzLk1hcCgpO1xyXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc3RyaW5nTWFwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXQocHJvcCwgc3RyaW5nTWFwW3Byb3BdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICBNYXBXcmFwcGVyLnRvU3RyaW5nTWFwID0gZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICB2YXIgciA9IHt9O1xyXG4gICAgICAgIG0uZm9yRWFjaChmdW5jdGlvbiAodiwgaykgeyByZXR1cm4gcltrXSA9IHY7IH0pO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfTtcclxuICAgIE1hcFdyYXBwZXIuY3JlYXRlRnJvbVBhaXJzID0gZnVuY3Rpb24gKHBhaXJzKSB7IHJldHVybiBjcmVhdGVNYXBGcm9tUGFpcnMocGFpcnMpOyB9O1xyXG4gICAgTWFwV3JhcHBlci5jbGVhclZhbHVlcyA9IGZ1bmN0aW9uIChtKSB7IF9jbGVhclZhbHVlcyhtKTsgfTtcclxuICAgIE1hcFdyYXBwZXIuaXRlcmFibGUgPSBmdW5jdGlvbiAobSkgeyByZXR1cm4gbTsgfTtcclxuICAgIE1hcFdyYXBwZXIua2V5cyA9IGZ1bmN0aW9uIChtKSB7IHJldHVybiBfYXJyYXlGcm9tTWFwKG0sIGZhbHNlKTsgfTtcclxuICAgIE1hcFdyYXBwZXIudmFsdWVzID0gZnVuY3Rpb24gKG0pIHsgcmV0dXJuIF9hcnJheUZyb21NYXAobSwgdHJ1ZSk7IH07XHJcbiAgICByZXR1cm4gTWFwV3JhcHBlcjtcclxufSkoKTtcclxuZXhwb3J0cy5NYXBXcmFwcGVyID0gTWFwV3JhcHBlcjtcclxuLyoqXHJcbiAqIFdyYXBzIEphdmFzY3JpcHQgT2JqZWN0c1xyXG4gKi9cclxudmFyIFN0cmluZ01hcFdyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RyaW5nTWFwV3JhcHBlcigpIHtcclxuICAgIH1cclxuICAgIFN0cmluZ01hcFdyYXBwZXIuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIE5vdGU6IFdlIGFyZSBub3QgdXNpbmcgT2JqZWN0LmNyZWF0ZShudWxsKSBoZXJlIGR1ZSB0b1xyXG4gICAgICAgIC8vIHBlcmZvcm1hbmNlIVxyXG4gICAgICAgIC8vIGh0dHA6Ly9qc3BlcmYuY29tL25nMi1vYmplY3QtY3JlYXRlLW51bGxcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9O1xyXG4gICAgU3RyaW5nTWFwV3JhcHBlci5jb250YWlucyA9IGZ1bmN0aW9uIChtYXAsIGtleSkge1xyXG4gICAgICAgIHJldHVybiBtYXAuaGFzT3duUHJvcGVydHkoa2V5KTtcclxuICAgIH07XHJcbiAgICBTdHJpbmdNYXBXcmFwcGVyLmdldCA9IGZ1bmN0aW9uIChtYXAsIGtleSkge1xyXG4gICAgICAgIHJldHVybiBtYXAuaGFzT3duUHJvcGVydHkoa2V5KSA/IG1hcFtrZXldIDogdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuICAgIFN0cmluZ01hcFdyYXBwZXIuc2V0ID0gZnVuY3Rpb24gKG1hcCwga2V5LCB2YWx1ZSkgeyBtYXBba2V5XSA9IHZhbHVlOyB9O1xyXG4gICAgU3RyaW5nTWFwV3JhcHBlci5rZXlzID0gZnVuY3Rpb24gKG1hcCkgeyByZXR1cm4gT2JqZWN0LmtleXMobWFwKTsgfTtcclxuICAgIFN0cmluZ01hcFdyYXBwZXIuaXNFbXB0eSA9IGZ1bmN0aW9uIChtYXApIHtcclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG1hcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIFN0cmluZ01hcFdyYXBwZXIuZGVsZXRlID0gZnVuY3Rpb24gKG1hcCwga2V5KSB7IGRlbGV0ZSBtYXBba2V5XTsgfTtcclxuICAgIFN0cmluZ01hcFdyYXBwZXIuZm9yRWFjaCA9IGZ1bmN0aW9uIChtYXAsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBtYXApIHtcclxuICAgICAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWFwW3Byb3BdLCBwcm9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTdHJpbmdNYXBXcmFwcGVyLm1lcmdlID0gZnVuY3Rpb24gKG0xLCBtMikge1xyXG4gICAgICAgIHZhciBtID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBtMSkge1xyXG4gICAgICAgICAgICBpZiAobTEuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcclxuICAgICAgICAgICAgICAgIG1bYXR0cl0gPSBtMVthdHRyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBhdHRyIGluIG0yKSB7XHJcbiAgICAgICAgICAgIGlmIChtMi5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xyXG4gICAgICAgICAgICAgICAgbVthdHRyXSA9IG0yW2F0dHJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgfTtcclxuICAgIFN0cmluZ01hcFdyYXBwZXIuZXF1YWxzID0gZnVuY3Rpb24gKG0xLCBtMikge1xyXG4gICAgICAgIHZhciBrMSA9IE9iamVjdC5rZXlzKG0xKTtcclxuICAgICAgICB2YXIgazIgPSBPYmplY3Qua2V5cyhtMik7XHJcbiAgICAgICAgaWYgKGsxLmxlbmd0aCAhPSBrMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIga2V5O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgazEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAga2V5ID0gazFbaV07XHJcbiAgICAgICAgICAgIGlmIChtMVtrZXldICE9PSBtMltrZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0cmluZ01hcFdyYXBwZXI7XHJcbn0pKCk7XHJcbmV4cG9ydHMuU3RyaW5nTWFwV3JhcHBlciA9IFN0cmluZ01hcFdyYXBwZXI7XHJcbnZhciBMaXN0V3JhcHBlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMaXN0V3JhcHBlcigpIHtcclxuICAgIH1cclxuICAgIC8vIEpTIGhhcyBubyB3YXkgdG8gZXhwcmVzcyBhIHN0YXRpY2FsbHkgZml4ZWQgc2l6ZSBsaXN0LCBidXQgZGFydCBkb2VzIHNvIHdlXHJcbiAgICAvLyBrZWVwIGJvdGggbWV0aG9kcy5cclxuICAgIExpc3RXcmFwcGVyLmNyZWF0ZUZpeGVkU2l6ZSA9IGZ1bmN0aW9uIChzaXplKSB7IHJldHVybiBuZXcgQXJyYXkoc2l6ZSk7IH07XHJcbiAgICBMaXN0V3JhcHBlci5jcmVhdGVHcm93YWJsZVNpemUgPSBmdW5jdGlvbiAoc2l6ZSkgeyByZXR1cm4gbmV3IEFycmF5KHNpemUpOyB9O1xyXG4gICAgTGlzdFdyYXBwZXIuY2xvbmUgPSBmdW5jdGlvbiAoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDApOyB9O1xyXG4gICAgTGlzdFdyYXBwZXIuZm9yRWFjaFdpdGhJbmRleCA9IGZ1bmN0aW9uIChhcnJheSwgZm4pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZuKGFycmF5W2ldLCBpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGlzdFdyYXBwZXIuZmlyc3QgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICBpZiAoIWFycmF5KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gYXJyYXlbMF07XHJcbiAgICB9O1xyXG4gICAgTGlzdFdyYXBwZXIubGFzdCA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgIGlmICghYXJyYXkgfHwgYXJyYXkubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcclxuICAgIH07XHJcbiAgICBMaXN0V3JhcHBlci5pbmRleE9mID0gZnVuY3Rpb24gKGFycmF5LCB2YWx1ZSwgc3RhcnRJbmRleCkge1xyXG4gICAgICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSwgc3RhcnRJbmRleCk7XHJcbiAgICB9O1xyXG4gICAgTGlzdFdyYXBwZXIuY29udGFpbnMgPSBmdW5jdGlvbiAobGlzdCwgZWwpIHsgcmV0dXJuIGxpc3QuaW5kZXhPZihlbCkgIT09IC0xOyB9O1xyXG4gICAgTGlzdFdyYXBwZXIucmV2ZXJzZWQgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICB2YXIgYSA9IExpc3RXcmFwcGVyLmNsb25lKGFycmF5KTtcclxuICAgICAgICByZXR1cm4gYS5yZXZlcnNlKCk7XHJcbiAgICB9O1xyXG4gICAgTGlzdFdyYXBwZXIuY29uY2F0ID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuY29uY2F0KGIpOyB9O1xyXG4gICAgTGlzdFdyYXBwZXIuaW5zZXJ0ID0gZnVuY3Rpb24gKGxpc3QsIGluZGV4LCB2YWx1ZSkgeyBsaXN0LnNwbGljZShpbmRleCwgMCwgdmFsdWUpOyB9O1xyXG4gICAgTGlzdFdyYXBwZXIucmVtb3ZlQXQgPSBmdW5jdGlvbiAobGlzdCwgaW5kZXgpIHtcclxuICAgICAgICB2YXIgcmVzID0gbGlzdFtpbmRleF07XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9O1xyXG4gICAgTGlzdFdyYXBwZXIucmVtb3ZlQWxsID0gZnVuY3Rpb24gKGxpc3QsIGl0ZW1zKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2YoaXRlbXNbaV0pO1xyXG4gICAgICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExpc3RXcmFwcGVyLnJlbW92ZSA9IGZ1bmN0aW9uIChsaXN0LCBlbCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZihlbCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIExpc3RXcmFwcGVyLmNsZWFyID0gZnVuY3Rpb24gKGxpc3QpIHsgbGlzdC5sZW5ndGggPSAwOyB9O1xyXG4gICAgTGlzdFdyYXBwZXIuaXNFbXB0eSA9IGZ1bmN0aW9uIChsaXN0KSB7IHJldHVybiBsaXN0Lmxlbmd0aCA9PSAwOyB9O1xyXG4gICAgTGlzdFdyYXBwZXIuZmlsbCA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSwgc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIGlmIChzdGFydCA9PT0gdm9pZCAwKSB7IHN0YXJ0ID0gMDsgfVxyXG4gICAgICAgIGlmIChlbmQgPT09IHZvaWQgMCkgeyBlbmQgPSBudWxsOyB9XHJcbiAgICAgICAgbGlzdC5maWxsKHZhbHVlLCBzdGFydCwgZW5kID09PSBudWxsID8gbGlzdC5sZW5ndGggOiBlbmQpO1xyXG4gICAgfTtcclxuICAgIExpc3RXcmFwcGVyLmVxdWFscyA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBMaXN0V3JhcHBlci5zbGljZSA9IGZ1bmN0aW9uIChsLCBmcm9tLCB0bykge1xyXG4gICAgICAgIGlmIChmcm9tID09PSB2b2lkIDApIHsgZnJvbSA9IDA7IH1cclxuICAgICAgICBpZiAodG8gPT09IHZvaWQgMCkgeyB0byA9IG51bGw7IH1cclxuICAgICAgICByZXR1cm4gbC5zbGljZShmcm9tLCB0byA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IHRvKTtcclxuICAgIH07XHJcbiAgICBMaXN0V3JhcHBlci5zcGxpY2UgPSBmdW5jdGlvbiAobCwgZnJvbSwgbGVuZ3RoKSB7IHJldHVybiBsLnNwbGljZShmcm9tLCBsZW5ndGgpOyB9O1xyXG4gICAgTGlzdFdyYXBwZXIuc29ydCA9IGZ1bmN0aW9uIChsLCBjb21wYXJlRm4pIHtcclxuICAgICAgICBpZiAobGFuZ18xLmlzUHJlc2VudChjb21wYXJlRm4pKSB7XHJcbiAgICAgICAgICAgIGwuc29ydChjb21wYXJlRm4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbC5zb3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExpc3RXcmFwcGVyLnRvU3RyaW5nID0gZnVuY3Rpb24gKGwpIHsgcmV0dXJuIGwudG9TdHJpbmcoKTsgfTtcclxuICAgIExpc3RXcmFwcGVyLnRvSlNPTiA9IGZ1bmN0aW9uIChsKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeShsKTsgfTtcclxuICAgIExpc3RXcmFwcGVyLm1heGltdW0gPSBmdW5jdGlvbiAobGlzdCwgcHJlZGljYXRlKSB7XHJcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzb2x1dGlvbiA9IG51bGw7XHJcbiAgICAgICAgdmFyIG1heFZhbHVlID0gLUluZmluaXR5O1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB2YXIgY2FuZGlkYXRlID0gbGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChsYW5nXzEuaXNCbGFuayhjYW5kaWRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY2FuZGlkYXRlVmFsdWUgPSBwcmVkaWNhdGUoY2FuZGlkYXRlKTtcclxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZVZhbHVlID4gbWF4VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHNvbHV0aW9uID0gY2FuZGlkYXRlO1xyXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgPSBjYW5kaWRhdGVWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc29sdXRpb247XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExpc3RXcmFwcGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLkxpc3RXcmFwcGVyID0gTGlzdFdyYXBwZXI7XHJcbmZ1bmN0aW9uIGlzTGlzdExpa2VJdGVyYWJsZShvYmopIHtcclxuICAgIGlmICghbGFuZ18xLmlzSnNPYmplY3Qob2JqKSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gbGFuZ18xLmlzQXJyYXkob2JqKSB8fFxyXG4gICAgICAgICghKG9iaiBpbnN0YW5jZW9mIGV4cG9ydHMuTWFwKSAmJlxyXG4gICAgICAgICAgICBsYW5nXzEuZ2V0U3ltYm9sSXRlcmF0b3IoKSBpbiBvYmopOyAvLyBKUyBJdGVyYWJsZSBoYXZlIGEgU3ltYm9sLml0ZXJhdG9yIHByb3BcclxufVxyXG5leHBvcnRzLmlzTGlzdExpa2VJdGVyYWJsZSA9IGlzTGlzdExpa2VJdGVyYWJsZTtcclxuZnVuY3Rpb24gaXRlcmF0ZUxpc3RMaWtlKG9iaiwgZm4pIHtcclxuICAgIGlmIChsYW5nXzEuaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm4ob2JqW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgaXRlcmF0b3IgPSBvYmpbbGFuZ18xLmdldFN5bWJvbEl0ZXJhdG9yKCldKCk7XHJcbiAgICAgICAgdmFyIGl0ZW07XHJcbiAgICAgICAgd2hpbGUgKCEoKGl0ZW0gPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpKSB7XHJcbiAgICAgICAgICAgIGZuKGl0ZW0udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLml0ZXJhdGVMaXN0TGlrZSA9IGl0ZXJhdGVMaXN0TGlrZTtcclxuLy8gU2FmYXJpIGFuZCBJbnRlcm5ldCBFeHBsb3JlciBkbyBub3Qgc3VwcG9ydCB0aGUgaXRlcmFibGUgcGFyYW1ldGVyIHRvIHRoZVxyXG4vLyBTZXQgY29uc3RydWN0b3IuICBXZSB3b3JrIGFyb3VuZCB0aGF0IGJ5IG1hbnVhbGx5IGFkZGluZyB0aGUgaXRlbXMuXHJcbnZhciBjcmVhdGVTZXRGcm9tTGlzdCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGVzdCA9IG5ldyBleHBvcnRzLlNldChbMSwgMiwgM10pO1xyXG4gICAgaWYgKHRlc3Quc2l6ZSA9PT0gMykge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVTZXRGcm9tTGlzdChsc3QpIHsgcmV0dXJuIG5ldyBleHBvcnRzLlNldChsc3QpOyB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVNldEFuZFBvcHVsYXRlRnJvbUxpc3QobHN0KSB7XHJcbiAgICAgICAgICAgIHZhciByZXMgPSBuZXcgZXhwb3J0cy5TZXQobHN0KTtcclxuICAgICAgICAgICAgaWYgKHJlcy5zaXplICE9PSBsc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5hZGQobHN0W2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0pKCk7XHJcbnZhciBTZXRXcmFwcGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNldFdyYXBwZXIoKSB7XHJcbiAgICB9XHJcbiAgICBTZXRXcmFwcGVyLmNyZWF0ZUZyb21MaXN0ID0gZnVuY3Rpb24gKGxzdCkgeyByZXR1cm4gY3JlYXRlU2V0RnJvbUxpc3QobHN0KTsgfTtcclxuICAgIFNldFdyYXBwZXIuaGFzID0gZnVuY3Rpb24gKHMsIGtleSkgeyByZXR1cm4gcy5oYXMoa2V5KTsgfTtcclxuICAgIFNldFdyYXBwZXIuZGVsZXRlID0gZnVuY3Rpb24gKG0sIGspIHsgbS5kZWxldGUoayk7IH07XHJcbiAgICByZXR1cm4gU2V0V3JhcHBlcjtcclxufSkoKTtcclxuZXhwb3J0cy5TZXRXcmFwcGVyID0gU2V0V3JhcHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5c2JHVmpkR2x2Ymk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbUZ1WjNWc1lYSXlMM055WXk5bVlXTmhaR1V2WTI5c2JHVmpkR2x2Ymk1MGN5SmRMQ0p1WVcxbGN5STZXeUpqY21WaGRHVk5ZWEJHY205dFVHRnBjbk1pTENKamNtVmhkR1ZOWVhCQmJtUlFiM0IxYkdGMFpVWnliMjFRWVdseWN5SXNJbU55WldGMFpVMWhjRVp5YjIxTllYQWlMQ0pqY21WaGRHVk5ZWEJCYm1SUWIzQjFiR0YwWlVaeWIyMU5ZWEFpTENKZlkyeGxZWEpXWVd4MVpYTWlMQ0pmWTJ4bFlYSldZV3gxWlhOWGFYUm9SbTl5WlVWaFkyZ2lMQ0pqY21WaGRHVkJjbkpoZVVaeWIyMU5ZWEFpTENKamNtVmhkR1ZCY25KaGVVWnliMjFOWVhCWGFYUm9SbTl5WldGamFDSXNJazFoY0ZkeVlYQndaWElpTENKTllYQlhjbUZ3Y0dWeUxtTnZibk4wY25WamRHOXlJaXdpVFdGd1YzSmhjSEJsY2k1amJHOXVaU0lzSWsxaGNGZHlZWEJ3WlhJdVkzSmxZWFJsUm5KdmJWTjBjbWx1WjAxaGNDSXNJazFoY0ZkeVlYQndaWEl1ZEc5VGRISnBibWROWVhBaUxDSk5ZWEJYY21Gd2NHVnlMbU55WldGMFpVWnliMjFRWVdseWN5SXNJazFoY0ZkeVlYQndaWEl1WTJ4bFlYSldZV3gxWlhNaUxDSk5ZWEJYY21Gd2NHVnlMbWwwWlhKaFlteGxJaXdpVFdGd1YzSmhjSEJsY2k1clpYbHpJaXdpVFdGd1YzSmhjSEJsY2k1MllXeDFaWE1pTENKVGRISnBibWROWVhCWGNtRndjR1Z5SWl3aVUzUnlhVzVuVFdGd1YzSmhjSEJsY2k1amIyNXpkSEoxWTNSdmNpSXNJbE4wY21sdVowMWhjRmR5WVhCd1pYSXVZM0psWVhSbElpd2lVM1J5YVc1blRXRndWM0poY0hCbGNpNWpiMjUwWVdsdWN5SXNJbE4wY21sdVowMWhjRmR5WVhCd1pYSXVaMlYwSWl3aVUzUnlhVzVuVFdGd1YzSmhjSEJsY2k1elpYUWlMQ0pUZEhKcGJtZE5ZWEJYY21Gd2NHVnlMbXRsZVhNaUxDSlRkSEpwYm1kTllYQlhjbUZ3Y0dWeUxtbHpSVzF3ZEhraUxDSlRkSEpwYm1kTllYQlhjbUZ3Y0dWeUxtUmxiR1YwWlNJc0lsTjBjbWx1WjAxaGNGZHlZWEJ3WlhJdVptOXlSV0ZqYUNJc0lsTjBjbWx1WjAxaGNGZHlZWEJ3WlhJdWJXVnlaMlVpTENKVGRISnBibWROWVhCWGNtRndjR1Z5TG1WeGRXRnNjeUlzSWt4cGMzUlhjbUZ3Y0dWeUlpd2lUR2x6ZEZkeVlYQndaWEl1WTI5dWMzUnlkV04wYjNJaUxDSk1hWE4wVjNKaGNIQmxjaTVqY21WaGRHVkdhWGhsWkZOcGVtVWlMQ0pNYVhOMFYzSmhjSEJsY2k1amNtVmhkR1ZIY205M1lXSnNaVk5wZW1VaUxDSk1hWE4wVjNKaGNIQmxjaTVqYkc5dVpTSXNJa3hwYzNSWGNtRndjR1Z5TG1admNrVmhZMmhYYVhSb1NXNWtaWGdpTENKTWFYTjBWM0poY0hCbGNpNW1hWEp6ZENJc0lreHBjM1JYY21Gd2NHVnlMbXhoYzNRaUxDSk1hWE4wVjNKaGNIQmxjaTVwYm1SbGVFOW1JaXdpVEdsemRGZHlZWEJ3WlhJdVkyOXVkR0ZwYm5NaUxDSk1hWE4wVjNKaGNIQmxjaTV5WlhabGNuTmxaQ0lzSWt4cGMzUlhjbUZ3Y0dWeUxtTnZibU5oZENJc0lreHBjM1JYY21Gd2NHVnlMbWx1YzJWeWRDSXNJa3hwYzNSWGNtRndjR1Z5TG5KbGJXOTJaVUYwSWl3aVRHbHpkRmR5WVhCd1pYSXVjbVZ0YjNabFFXeHNJaXdpVEdsemRGZHlZWEJ3WlhJdWNtVnRiM1psSWl3aVRHbHpkRmR5WVhCd1pYSXVZMnhsWVhJaUxDSk1hWE4wVjNKaGNIQmxjaTVwYzBWdGNIUjVJaXdpVEdsemRGZHlZWEJ3WlhJdVptbHNiQ0lzSWt4cGMzUlhjbUZ3Y0dWeUxtVnhkV0ZzY3lJc0lreHBjM1JYY21Gd2NHVnlMbk5zYVdObElpd2lUR2x6ZEZkeVlYQndaWEl1YzNCc2FXTmxJaXdpVEdsemRGZHlZWEJ3WlhJdWMyOXlkQ0lzSWt4cGMzUlhjbUZ3Y0dWeUxuUnZVM1J5YVc1bklpd2lUR2x6ZEZkeVlYQndaWEl1ZEc5S1UwOU9JaXdpVEdsemRGZHlZWEJ3WlhJdWJXRjRhVzExYlNJc0ltbHpUR2x6ZEV4cGEyVkpkR1Z5WVdKc1pTSXNJbWwwWlhKaGRHVk1hWE4wVEdsclpTSXNJbU55WldGMFpWTmxkRVp5YjIxTWFYTjBJaXdpWTNKbFlYUmxVMlYwUVc1a1VHOXdkV3hoZEdWR2NtOXRUR2x6ZENJc0lsTmxkRmR5WVhCd1pYSWlMQ0pUWlhSWGNtRndjR1Z5TG1OdmJuTjBjblZqZEc5eUlpd2lVMlYwVjNKaGNIQmxjaTVqY21WaGRHVkdjbTl0VEdsemRDSXNJbE5sZEZkeVlYQndaWEl1YUdGeklpd2lVMlYwVjNKaGNIQmxjaTVrWld4bGRHVWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMSEZDUVU5UExEQkNRVUV3UWl4RFFVRkRMRU5CUVVFN1FVRkZka0lzVjBGQlJ5eEhRVUZITEdGQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1FVRkRha0lzVjBGQlJ5eEhRVUZITEdGQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1FVRkZOVUlzTkVWQlFUUkZPMEZCUXpWRkxITkZRVUZ6UlR0QlFVTjBSU3hKUVVGSkxHdENRVUZyUWl4SFFVRnZReXhEUVVGRE8wbEJRM3BFTEVsQlFVa3NRMEZCUXp0UlFVTklMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzVjBGQlJ5eERRVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1JETEUxQlFVMHNRMEZCUXl3MFFrRkJORUlzUzBGQldTeEpRVUZ0UWtFc1RVRkJUVUVzUTBGQlEwRXNTVUZCU1VFc1YwRkJSMEVzUTBGQlEwRXNTMEZCUzBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlF6dFJRVU0zUml4RFFVRkRPMGxCUTBnc1EwRkJSVHRKUVVGQkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRZaXhEUVVGRE8wbEJRMFFzVFVGQlRTeERRVUZETEhWRFFVRjFReXhMUVVGWk8xRkJRM2hFUXl4SlFVRkpRU3hIUVVGSFFTeEhRVUZIUVN4SlFVRkpRU3hYUVVGSFFTeEZRVUZGUVN4RFFVRkRRVHRSUVVOd1FrRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFc1IwRkJSMEVzUzBGQlMwRXNRMEZCUTBFc1RVRkJUVUVzUlVGQlJVRXNRMEZCUTBFc1JVRkJSVUVzUlVGQlJVRXNRMEZCUTBFN1dVRkRkRU5CTEVsQlFVbEJMRWxCUVVsQkxFZEJRVWRCTEV0QlFVdEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8xbEJRM0JDUVN4SFFVRkhRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeEZRVUZGUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0UlFVTTFRa0VzUTBGQlEwRTdVVUZEUkVFc1RVRkJUVUVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEU3U1VGRFlrRXNRMEZCUTBFc1EwRkJRenRCUVVOS0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdRVUZEVEN4SlFVRkpMR2RDUVVGblFpeEhRVUYzUXl4RFFVRkRPMGxCUXpORUxFbEJRVWtzUTBGQlF6dFJRVU5JTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1YwRkJSeXhEUVVGTkxFbEJRVWtzVjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROVUlzVFVGQlRTeERRVUZETERCQ1FVRXdRaXhEUVVGblFpeEpRVUZ0UWtNc1RVRkJUVUVzUTBGQlEwRXNTVUZCU1VFc1YwRkJSMEVzUTBGQlRVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlF6dFJRVU5vUnl4RFFVRkRPMGxCUTBnc1EwRkJSVHRKUVVGQkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRZaXhEUVVGRE8wbEJRMFFzVFVGQlRTeERRVUZETEhGRFFVRnhReXhEUVVGblFqdFJRVU14UkVNc1NVRkJTVUVzUjBGQlIwRXNSMEZCUjBFc1NVRkJTVUVzVjBGQlIwRXNSVUZCUlVFc1EwRkJRMEU3VVVGRGNFSkJMRU5CUVVOQkxFTkJRVU5CTEU5QlFVOUJMRU5CUVVOQkxGVkJRVU5CTEVOQlFVTkJMRVZCUVVWQkxFTkJRVU5CTEVsQlFVOUJMRWRCUVVkQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFTkJRVU5CTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8xRkJRM2hEUVN4TlFVRk5RU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRVHRKUVVOaVFTeERRVUZEUVN4RFFVRkRPMEZCUTBvc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEJRVU5NTEVsQlFVa3NXVUZCV1N4SFFVRjVRaXhEUVVGRE8wbEJRM2hETEVWQlFVVXNRMEZCUXl4RFFVRlBMRU5CUVVNc1NVRkJTU3hYUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJrTXNUVUZCVFN4RFFVRkRMSE5DUVVGelFpeERRVUZuUWp0WlFVTXpRME1zU1VGQlNVRXNWMEZCVjBFc1IwRkJSMEVzUTBGQlEwRXNRMEZCUTBFc1NVRkJTVUVzUlVGQlJVRXNRMEZCUTBFN1dVRkRNMEpCTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTzFsQlEwNUJMRTlCUVU5QkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVkQlFWTkJMRmRCUVZsQkxFTkJRVU5CTEVsQlFVbEJMRVZCUVVWQkxFTkJRVU5CTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEVWQlFVVkJMRU5CUVVOQk8yZENRVU12UTBFc1EwRkJRMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1MwRkJTMEVzUlVGQlJVRXNTVUZCU1VFc1EwRkJRMEVzUTBGQlEwRTdXVUZEZGtKQkxFTkJRVU5CTzFGQlEwaEJMRU5CUVVOQkxFTkJRVU03U1VGRFNpeERRVUZETzBsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRUaXhOUVVGTkxFTkJRVU1zYTBOQlFXdERMRU5CUVdkQ08xbEJRM1pFUXl4RFFVRkRRU3hEUVVGRFFTeFBRVUZQUVN4RFFVRkRRU3hWUVVGRFFTeERRVUZEUVN4RlFVRkZRU3hEUVVGRFFTeEpRVUZQUVN4RFFVRkRRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hEUVVGRFFTeEZRVUZGUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRSUVVNelEwRXNRMEZCUTBFc1EwRkJRenRKUVVOS0xFTkJRVU03UVVGRFNDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMEZCUTB3c2FVZEJRV2xITzBGQlEycEhMSEZHUVVGeFJqdEJRVU55Uml4SlFVRkpMR0ZCUVdFc1IwRkJiMFFzUTBGQlF6dEpRVU53UlN4SlFVRkpMRU5CUVVNN1VVRkRTQ3hGUVVGRkxFTkJRVU1zUTBGQlR5eERRVUZETEVsQlFVa3NWMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFMUJRVTBzUTBGQlF5dzBRa0ZCTkVJc1EwRkJaMElzUlVGQlJTeFRRVUZyUWp0blFrRkRja1ZETEUxQlFVMUJMRU5CUVVOQkxGTkJRVk5CTEVkQlFWTkJMRXRCUVUxQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRTFCUVUxQkxFVkJRVVZCTEVOQlFVTkJMRWRCUVZOQkxFdEJRVTFCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFbEJRVWxCTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTzFsQlEycEdRU3hEUVVGRFFTeERRVUZETzFGQlEwb3NRMEZCUXp0SlFVTklMRU5CUVVVN1NVRkJRU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJJc1EwRkJRenRKUVVORUxFMUJRVTBzUTBGQlF5eDFRMEZCZFVNc1EwRkJaMElzUlVGQlJTeFRRVUZyUWp0UlFVTm9Sa01zU1VGQlNVRXNSMEZCUjBFc1IwRkJSMEVzVjBGQlYwRXNRMEZCUTBFc1pVRkJaVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1JVRkJSVUVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRTdVVUZEY2tSQkxFTkJRVU5CTEVOQlFVTkJMRTlCUVU5QkxFTkJRVU5CTEZWQlFVTkJMRU5CUVVOQkxFVkJRVVZCTEVOQlFVTkJPMWxCUTJKQkxFZEJRVWRCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVkQlFVZEJMRk5CUVZOQkxFZEJRVWRCTEVOQlFVTkJMRWRCUVVkQkxFTkJRVU5CTEVOQlFVTkJPMWxCUXpOQ1FTeERRVUZEUVN4RlFVRkZRU3hEUVVGRFFUdFJRVU5PUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0UlFVTklRU3hOUVVGTlFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFUdEpRVU5pUVN4RFFVRkRRU3hEUVVGRE8wRkJRMG9zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0QlFVVk1PMGxCUVVGRE8wbEJiVUpCUXl4RFFVRkRRVHRKUVd4Q1VVUXNaMEpCUVV0QkxFZEJRVnBCTEZWQlFXMUNRU3hEUVVGWlFTeEpRVUZsUlN4TlFVRk5RU3hEUVVGRFFTeG5Ra0ZCWjBKQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJRM0JGUml3NFFrRkJiVUpCTEVkQlFURkNRU3hWUVVFNFFrRXNVMEZCTmtKQk8xRkJRM3BFUnl4SlFVRkpRU3hOUVVGTlFTeEhRVUZIUVN4SlFVRkpRU3hYUVVGSFFTeEZRVUZoUVN4RFFVRkRRVHRSUVVOc1EwRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzU1VGQlNVRXNTVUZCU1VFc1UwRkJVMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3V1VGRE0wSkJMRTFCUVUxQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFbEJRVWxCTEVWQlFVVkJMRk5CUVZOQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMUZCUTNCRFFTeERRVUZEUVR0UlFVTkVRU3hOUVVGTlFTeERRVUZEUVN4TlFVRk5RU3hEUVVGRFFUdEpRVU5vUWtFc1EwRkJRMEU3U1VGRFRVZ3NjMEpCUVZkQkxFZEJRV3hDUVN4VlFVRnpRa0VzUTBGQmFVSkJPMUZCUTNKRFNTeEpRVUZKUVN4RFFVRkRRU3hIUVVGMVFrRXNSVUZCUlVFc1EwRkJRMEU3VVVGREwwSkJMRU5CUVVOQkxFTkJRVU5CTEU5QlFVOUJMRU5CUVVOQkxGVkJRVU5CTEVOQlFVTkJMRVZCUVVWQkxFTkJRVU5CTEVsQlFVdEJMRTlCUVVGQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFVkJRVkpCTEVOQlFWRkJMRU5CUVVOQkxFTkJRVU5CTzFGQlF6bENRU3hOUVVGTlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU5ZUVN4RFFVRkRRVHRKUVVOTlNpd3dRa0ZCWlVFc1IwRkJkRUpCTEZWQlFYVkNRU3hMUVVGWlFTeEpRVUZ0UWtzc1RVRkJUVUVzUTBGQlEwRXNhMEpCUVd0Q1FTeERRVUZEUVN4TFFVRkxRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU5zUmt3c2MwSkJRVmRCTEVkQlFXeENRU3hWUVVGdFFrRXNRMEZCWjBKQkxFbEJRVWxOTEZsQlFWbEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMGxCUTJ4RVRpeHRRa0ZCVVVFc1IwRkJaa0VzVlVGQmJVSkJMRU5CUVVsQkxFbEJRVTlQTEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzBsQlEyeERVQ3hsUVVGSlFTeEhRVUZZUVN4VlFVRmxRU3hEUVVGalFTeEpRVUZUVVN4TlFVRk5RU3hEUVVGRFFTeGhRVUZoUVN4RFFVRkRRU3hEUVVGRFFTeEZRVUZGUVN4TFFVRkxRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU5vUlZJc2FVSkJRVTFCTEVkQlFXSkJMRlZCUVdsQ1FTeERRVUZqUVN4SlFVRlRVeXhOUVVGTlFTeERRVUZEUVN4aFFVRmhRU3hEUVVGRFFTeERRVUZEUVN4RlFVRkZRU3hKUVVGSlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0SlFVTXhSVlFzYVVKQlFVTkJPMEZCUVVSQkxFTkJRVU5CTEVGQmJrSkVMRWxCYlVKRE8wRkJia0paTEd0Q1FVRlZMR0ZCYlVKMFFpeERRVUZCTzBGQlJVUTdPMGRCUlVjN1FVRkRTRHRKUVVGQlZUdEpRU3RFUVVNc1EwRkJRMEU3U1VFNVJGRkVMSFZDUVVGTlFTeEhRVUZpUVR0UlFVTkZSU3g1UkVGQmVVUkJPMUZCUTNwRVFTeGxRVUZsUVR0UlFVTm1RU3d5UTBGQk1rTkJPMUZCUXpORFFTeE5RVUZOUVN4RFFVRkRRU3hGUVVGRlFTeERRVUZEUVR0SlFVTmFRU3hEUVVGRFFUdEpRVU5OUml4NVFrRkJVVUVzUjBGQlprRXNWVUZCWjBKQkxFZEJRWGxDUVN4RlFVRkZRU3hIUVVGWFFUdFJRVU53UkVjc1RVRkJUVUVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzWTBGQlkwRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNRMEZCUTBFN1NVRkRha05CTEVOQlFVTkJPMGxCUTAxSUxHOUNRVUZIUVN4SFFVRldRU3hWUVVGalFTeEhRVUYxUWtFc1JVRkJSVUVzUjBGQlYwRTdVVUZEYUVSSkxFMUJRVTFCTEVOQlFVTkJMRWRCUVVkQkxFTkJRVU5CTEdOQlFXTkJMRU5CUVVOQkxFZEJRVWRCTEVOQlFVTkJMRWRCUVVkQkxFZEJRVWRCTEVOQlFVTkJMRWRCUVVkQkxFTkJRVU5CTEVkQlFVZEJMRk5CUVZOQkxFTkJRVU5CTzBsQlEzaEVRU3hEUVVGRFFUdEpRVU5OU2l4dlFrRkJSMEVzUjBGQlZrRXNWVUZCWTBFc1IwRkJkVUpCTEVWQlFVVkJMRWRCUVZkQkxFVkJRVVZCTEV0QlFWRkJMRWxCUVVsTExFZEJRVWRCTEVOQlFVTkJMRWRCUVVkQkxFTkJRVU5CTEVkQlFVZEJMRXRCUVV0QkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJRelZGVEN4eFFrRkJTVUVzUjBGQldFRXNWVUZCV1VFc1IwRkJlVUpCTEVsQlFXTk5MRTFCUVUxQkxFTkJRVU5CTEUxQlFVMUJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRWRCUVVkQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzBsQlEzUkZUaXgzUWtGQlQwRXNSMEZCWkVFc1ZVRkJaVUVzUjBGQmVVSkJPMUZCUTNSRFR5eEhRVUZIUVN4RFFVRkRRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hKUVVGSlFTeEpRVUZKUVN4SFFVRkhRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRaUVVOeVFrRXNUVUZCVFVFc1EwRkJRMEVzUzBGQlMwRXNRMEZCUTBFN1VVRkRaa0VzUTBGQlEwRTdVVUZEUkVFc1RVRkJUVUVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEU3U1VGRFpFRXNRMEZCUTBFN1NVRkRUVkFzZFVKQlFVMUJMRWRCUVdKQkxGVkJRV1ZCTEVkQlFYbENRU3hGUVVGRlFTeEhRVUZYUVN4SlFVRkpVU3hQUVVGUFFTeEhRVUZIUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0SlFVTndSVklzZDBKQlFVOUJMRWRCUVdSQkxGVkJRWEZDUVN4SFFVRjFRa0VzUlVGQlJVRXNVVUZCY1VOQk8xRkJRMnBHVXl4SFFVRkhRU3hEUVVGRFFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFTeEpRVUZKUVN4SlFVRkpRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdFpRVU55UWtFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNZMEZCWTBFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1owSkJRemRDUVN4UlFVRlJRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVN4RlFVRkZRU3hKUVVGSlFTeERRVUZEUVN4RFFVRkRRVHRaUVVNMVFrRXNRMEZCUTBFN1VVRkRTRUVzUTBGQlEwRTdTVUZEU0VFc1EwRkJRMEU3U1VGRlRWUXNjMEpCUVV0QkxFZEJRVnBCTEZWQlFXZENRU3hGUVVGelFrRXNSVUZCUlVFc1JVRkJjMEpCTzFGQlF6VkVWU3hKUVVGSlFTeERRVUZEUVN4SFFVRjFRa0VzUlVGQlJVRXNRMEZCUTBFN1VVRkZMMEpCTEVkQlFVZEJMRU5CUVVOQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFbEJRVWxCTEVsQlFVbEJMRVZCUVVWQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8xbEJRM0JDUVN4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4RlFVRkZRU3hEUVVGRFFTeGpRVUZqUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0blFrRkROVUpCTEVOQlFVTkJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRWRCUVVkQkxFVkJRVVZCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEVOQlFVTkJPMWxCUTNKQ1FTeERRVUZEUVR0UlFVTklRU3hEUVVGRFFUdFJRVVZFUVN4SFFVRkhRU3hEUVVGRFFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFTeEpRVUZKUVN4SlFVRkpRU3hGUVVGRlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdFpRVU53UWtFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1JVRkJSVUVzUTBGQlEwRXNZMEZCWTBFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1owSkJRelZDUVN4RFFVRkRRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hIUVVGSFFTeEZRVUZGUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVN4RFFVRkRRVHRaUVVOeVFrRXNRMEZCUTBFN1VVRkRTRUVzUTBGQlEwRTdVVUZGUkVFc1RVRkJUVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3U1VGRFdFRXNRMEZCUTBFN1NVRkZUVllzZFVKQlFVMUJMRWRCUVdKQkxGVkJRV2xDUVN4RlFVRnpRa0VzUlVGQlJVRXNSVUZCYzBKQk8xRkJRemRFVnl4SlFVRkpRU3hGUVVGRlFTeEhRVUZIUVN4TlFVRk5RU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hGUVVGRlFTeERRVUZEUVN4RFFVRkRRVHRSUVVONlFrRXNTVUZCU1VFc1JVRkJSVUVzUjBGQlIwRXNUVUZCVFVFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFN1VVRkRla0pCTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTEVWQlFVVkJMRU5CUVVOQkxFMUJRVTFCTEVsQlFVbEJMRVZCUVVWQkxFTkJRVU5CTEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMWxCUXpOQ1FTeE5RVUZOUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVR0UlFVTm1RU3hEUVVGRFFUdFJRVU5FUVN4SlFVRkpRU3hIUVVGSFFTeERRVUZEUVR0UlFVTlNRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4RlFVRkZRU3hEUVVGRFFTeEhRVUZIUVN4RlFVRkZRU3hEUVVGRFFTeE5RVUZOUVN4RlFVRkZRU3hEUVVGRFFTeEZRVUZGUVN4RlFVRkZRU3hEUVVGRFFUdFpRVU51UTBFc1IwRkJSMEVzUjBGQlIwRXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3V1VGRFdrRXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNSVUZCUlVFc1EwRkJRMEVzUjBGQlIwRXNRMEZCUTBFc1MwRkJTMEVzUlVGQlJVRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdaMEpCUTNoQ1FTeE5RVUZOUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVR0WlFVTm1RU3hEUVVGRFFUdFJRVU5JUVN4RFFVRkRRVHRSUVVORVFTeE5RVUZOUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVR0SlFVTmtRU3hEUVVGRFFUdEpRVU5JV0N4MVFrRkJRMEU3UVVGQlJFRXNRMEZCUTBFc1FVRXZSRVFzU1VFclJFTTdRVUV2UkZrc2QwSkJRV2RDTEcxQ1FTdEVOVUlzUTBGQlFUdEJRVkZFTzBsQlFVRlpPMGxCTmtaQlF5eERRVUZEUVR0SlFUVkdRMFFzTmtWQlFUWkZRVHRKUVVNM1JVRXNjVUpCUVhGQ1FUdEpRVU5rUVN3eVFrRkJaVUVzUjBGQmRFSkJMRlZCUVhWQ1FTeEpRVUZaUVN4SlFVRlhSU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hMUVVGTFFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU5vUlVZc09FSkJRV3RDUVN4SFFVRjZRa0VzVlVGQk1FSkJMRWxCUVZsQkxFbEJRVmRITEUxQlFVMUJMRU5CUVVOQkxFbEJRVWxCTEV0QlFVdEJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMGxCUTI1RlNDeHBRa0ZCUzBFc1IwRkJXa0VzVlVGQlowSkJMRXRCUVZWQkxFbEJRVk5KTEUxQlFVMUJMRU5CUVVOQkxFdEJRVXRCTEVOQlFVTkJMRXRCUVV0QkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJRM0JFU2l3MFFrRkJaMEpCTEVkQlFYWkNRU3hWUVVFeVFrRXNTMEZCVlVFc1JVRkJSVUVzUlVGQk5rSkJPMUZCUTJ4RlN5eEhRVUZIUVN4RFFVRkRRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hGUVVGRlFTeERRVUZEUVN4SFFVRkhRU3hMUVVGTFFTeERRVUZEUVN4TlFVRk5RU3hGUVVGRlFTeERRVUZEUVN4RlFVRkZRU3hGUVVGRlFTeERRVUZEUVR0WlFVTjBRMEVzUlVGQlJVRXNRMEZCUTBFc1MwRkJTMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdVVUZEYkVKQkxFTkJRVU5CTzBsQlEwaEJMRU5CUVVOQk8wbEJRMDFNTEdsQ1FVRkxRU3hIUVVGYVFTeFZRVUZuUWtFc1MwRkJWVUU3VVVGRGVFSk5MRVZCUVVWQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFdEJRVXRCTEVOQlFVTkJPMWxCUVVOQkxFMUJRVTFCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTzFGQlEzaENRU3hOUVVGTlFTeERRVUZEUVN4TFFVRkxRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU5zUWtFc1EwRkJRMEU3U1VGRFRVNHNaMEpCUVVsQkxFZEJRVmhCTEZWQlFXVkJMRXRCUVZWQk8xRkJRM1pDVHl4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hMUVVGTFFTeEpRVUZKUVN4TFFVRkxRU3hEUVVGRFFTeE5RVUZOUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVR0WlFVRkRRU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFUdFJRVU0zUTBFc1RVRkJUVUVzUTBGQlEwRXNTMEZCUzBFc1EwRkJRMEVzUzBGQlMwRXNRMEZCUTBFc1RVRkJUVUVzUjBGQlIwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdTVUZEYWtOQkxFTkJRVU5CTzBsQlEwMVFMRzFDUVVGUFFTeEhRVUZrUVN4VlFVRnJRa0VzUzBGQlZVRXNSVUZCUlVFc1MwRkJVVUVzUlVGQlJVRXNWVUZCYzBKQk8xRkJRWFJDVVN3d1FrRkJjMEpCTEVkQlFYUkNRU3hqUVVGelFrRTdVVUZETlVSQkxFMUJRVTFCTEVOQlFVTkJMRXRCUVV0QkxFTkJRVU5CTEU5QlFVOUJMRU5CUVVOQkxFdEJRVXRCTEVWQlFVVkJMRlZCUVZWQkxFTkJRVU5CTEVOQlFVTkJPMGxCUXpGRFFTeERRVUZEUVR0SlFVTk5VaXh2UWtGQlVVRXNSMEZCWmtFc1ZVRkJiVUpCTEVsQlFWTkJMRVZCUVVWQkxFVkJRVXRCTEVsQlFXRlRMRTFCUVUxQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFOUJRVTlCTEVOQlFVTkJMRVZCUVVWQkxFTkJRVU5CTEV0QlFVdEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzBsQlF6RkZWQ3h2UWtGQlVVRXNSMEZCWmtFc1ZVRkJiVUpCTEV0QlFWVkJPMUZCUXpOQ1ZTeEpRVUZKUVN4RFFVRkRRU3hIUVVGSFFTeFhRVUZYUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVN4TFFVRkxRU3hEUVVGRFFTeERRVUZEUVR0UlFVTnFRMEVzVFVGQlRVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNUMEZCVDBFc1JVRkJSVUVzUTBGQlEwRTdTVUZEY2tKQkxFTkJRVU5CTzBsQlEwMVdMR3RDUVVGTlFTeEhRVUZpUVN4VlFVRmpRU3hEUVVGUlFTeEZRVUZGUVN4RFFVRlJRU3hKUVVGWFZ5eE5RVUZOUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4TlFVRk5RU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRKUVVONlJGZ3NhMEpCUVUxQkxFZEJRV0pCTEZWQlFXbENRU3hKUVVGVFFTeEZRVUZGUVN4TFFVRmhRU3hGUVVGRlFTeExRVUZSUVN4SlFVRkpXU3hKUVVGSlFTeERRVUZEUVN4TlFVRk5RU3hEUVVGRFFTeExRVUZMUVN4RlFVRkZRU3hEUVVGRFFTeEZRVUZGUVN4TFFVRkxRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU12UlZvc2IwSkJRVkZCTEVkQlFXWkJMRlZCUVcxQ1FTeEpRVUZUUVN4RlFVRkZRU3hMUVVGaFFUdFJRVU42UTJFc1NVRkJTVUVzUjBGQlIwRXNSMEZCUjBFc1NVRkJTVUVzUTBGQlEwRXNTMEZCUzBFc1EwRkJRMEVzUTBGQlEwRTdVVUZEZEVKQkxFbEJRVWxCTEVOQlFVTkJMRTFCUVUxQkxFTkJRVU5CTEV0QlFVdEJMRVZCUVVWQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8xRkJRM1JDUVN4TlFVRk5RU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRVHRKUVVOaVFTeERRVUZEUVR0SlFVTk5ZaXh4UWtGQlUwRXNSMEZCYUVKQkxGVkJRVzlDUVN4SlFVRlRRU3hGUVVGRlFTeExRVUZWUVR0UlFVTjJRMk1zUjBGQlIwRXNRMEZCUTBFc1EwRkJRMEVzUjBGQlIwRXNRMEZCUTBFc1EwRkJRMEVzUjBGQlIwRXNRMEZCUTBFc1JVRkJSVUVzUTBGQlEwRXNSMEZCUjBFc1MwRkJTMEVzUTBGQlEwRXNUVUZCVFVFc1JVRkJSVUVzUlVGQlJVRXNRMEZCUTBFc1JVRkJSVUVzUTBGQlEwRTdXVUZEZEVOQkxFbEJRVWxCTEV0QlFVdEJMRWRCUVVkQkxFbEJRVWxCTEVOQlFVTkJMRTlCUVU5QkxFTkJRVU5CTEV0QlFVdEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzFsQlEyNURRU3hKUVVGSlFTeERRVUZEUVN4TlFVRk5RU3hEUVVGRFFTeExRVUZMUVN4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRSUVVONFFrRXNRMEZCUTBFN1NVRkRTRUVzUTBGQlEwRTdTVUZEVFdRc2EwSkJRVTFCTEVkQlFXSkJMRlZCUVdsQ1FTeEpRVUZUUVN4RlFVRkZRU3hGUVVGTFFUdFJRVU12UW1Vc1NVRkJTVUVzUzBGQlMwRXNSMEZCUjBFc1NVRkJTVUVzUTBGQlEwRXNUMEZCVDBFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEU3VVVGRE4wSkJMRVZCUVVWQkxFTkJRVU5CTEVOQlFVTkJMRXRCUVV0QkxFZEJRVWRCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8xbEJRMlpCTEVsQlFVbEJMRU5CUVVOQkxFMUJRVTFCTEVOQlFVTkJMRXRCUVV0QkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzFsQlEzUkNRU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFUdFJRVU5rUVN4RFFVRkRRVHRSUVVORVFTeE5RVUZOUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVR0SlFVTm1RU3hEUVVGRFFUdEpRVU5OWml4cFFrRkJTMEVzUjBGQldrRXNWVUZCWVVFc1NVRkJWMEVzU1VGQlNXZENMRWxCUVVsQkxFTkJRVU5CTEUxQlFVMUJMRWRCUVVkQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzBsQlEzWkRhRUlzYlVKQlFVOUJMRWRCUVdSQkxGVkJRV1ZCTEVsQlFWZEJMRWxCUVdGcFFpeE5RVUZOUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVN4TlFVRk5RU3hKUVVGSlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0SlFVTXhSR3BDTEdkQ1FVRkpRU3hIUVVGWVFTeFZRVUZaUVN4SlFVRlhRU3hGUVVGRlFTeExRVUZWUVN4RlFVRkZRU3hMUVVGcFFrRXNSVUZCUlVFc1IwRkJhMEpCTzFGQlFYSkRhMElzY1VKQlFXbENRU3hIUVVGcVFrRXNVMEZCYVVKQk8xRkJRVVZCTEcxQ1FVRnJRa0VzUjBGQmJFSkJMRlZCUVd0Q1FUdFJRVU40UlVFc1NVRkJTVUVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzUzBGQlMwRXNSVUZCUlVFc1MwRkJTMEVzUlVGQlJVRXNSMEZCUjBFc1MwRkJTMEVzU1VGQlNVRXNSMEZCUjBFc1NVRkJTVUVzUTBGQlEwRXNUVUZCVFVFc1IwRkJSMEVzUjBGQlIwRXNRMEZCUTBFc1EwRkJRMEU3U1VGRE5VUkJMRU5CUVVOQk8wbEJRMDFzUWl4clFrRkJUVUVzUjBGQllrRXNWVUZCWTBFc1EwRkJVVUVzUlVGQlJVRXNRMEZCVVVFN1VVRkRPVUp0UWl4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeE5RVUZOUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4TlFVRk5RU3hEUVVGRFFUdFpRVUZEUVN4TlFVRk5RU3hEUVVGRFFTeExRVUZMUVN4RFFVRkRRVHRSUVVOMlEwRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNRMEZCUTBFc1RVRkJUVUVzUlVGQlJVRXNSVUZCUlVFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFN1dVRkRiRU5CTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRXRCUVV0QkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMmRDUVVGRFFTeE5RVUZOUVN4RFFVRkRRU3hMUVVGTFFTeERRVUZEUVR0UlFVTnNRMEVzUTBGQlEwRTdVVUZEUkVFc1RVRkJUVUVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEU3U1VGRFpFRXNRMEZCUTBFN1NVRkRUVzVDTEdsQ1FVRkxRU3hIUVVGYVFTeFZRVUZuUWtFc1EwRkJUVUVzUlVGQlJVRXNTVUZCWjBKQkxFVkJRVVZCTEVWQlFXbENRVHRSUVVGdVEyOUNMRzlDUVVGblFrRXNSMEZCYUVKQkxGRkJRV2RDUVR0UlFVRkZRU3hyUWtGQmFVSkJMRWRCUVdwQ1FTeFRRVUZwUWtFN1VVRkRla1JCTEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRXRCUVV0QkxFTkJRVU5CTEVsQlFVbEJMRVZCUVVWQkxFVkJRVVZCTEV0QlFVdEJMRWxCUVVsQkxFZEJRVWRCTEZOQlFWTkJMRWRCUVVkQkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQk8wbEJRM0pFUVN4RFFVRkRRVHRKUVVOTmNFSXNhMEpCUVUxQkxFZEJRV0pCTEZWQlFXbENRU3hEUVVGTlFTeEZRVUZGUVN4SlFVRlpRU3hGUVVGRlFTeE5RVUZqUVN4SlFVRlRjVUlzVFVGQlRVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNUVUZCVFVFc1EwRkJRMEVzU1VGQlNVRXNSVUZCUlVFc1RVRkJUVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdTVUZEZGtaeVFpeG5Ra0ZCU1VFc1IwRkJXRUVzVlVGQlpVRXNRMEZCVFVFc1JVRkJSVUVzVTBGQmEwTkJPMUZCUTNaRWMwSXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNaMEpCUVZOQkxFTkJRVU5CTEZOQlFWTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8xbEJRM3BDUVN4RFFVRkRRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hUUVVGVFFTeERRVUZEUVN4RFFVRkRRVHRSUVVOd1FrRXNRMEZCUTBFN1VVRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEU3V1VGRFRrRXNRMEZCUTBFc1EwRkJRMEVzU1VGQlNVRXNSVUZCUlVFc1EwRkJRMEU3VVVGRFdFRXNRMEZCUTBFN1NVRkRTRUVzUTBGQlEwRTdTVUZEVFhSQ0xHOUNRVUZSUVN4SFFVRm1RU3hWUVVGdFFrRXNRMEZCVFVFc1NVRkJXWFZDTEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRkZCUVZGQkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzBsQlEzQkVka0lzYTBKQlFVMUJMRWRCUVdKQkxGVkJRV2xDUVN4RFFVRk5RU3hKUVVGWmQwSXNUVUZCVFVFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1UwRkJVMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3U1VGRmRrUjRRaXh0UWtGQlQwRXNSMEZCWkVFc1ZVRkJhMEpCTEVsQlFWTkJMRVZCUVVWQkxGTkJRVEpDUVR0UlFVTjBSSGxDTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFMUJRVTFCTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8xbEJRM0pDUVN4TlFVRk5RU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRVHRSUVVOa1FTeERRVUZEUVR0UlFVTkVRU3hKUVVGSlFTeFJRVUZSUVN4SFFVRkhRU3hKUVVGSlFTeERRVUZEUVR0UlFVTndRa0VzU1VGQlNVRXNVVUZCVVVFc1IwRkJSMEVzUTBGQlEwRXNVVUZCVVVFc1EwRkJRMEU3VVVGRGVrSkJMRWRCUVVkQkxFTkJRVU5CTEVOQlFVTkJMRWRCUVVkQkxFTkJRVU5CTEV0QlFVdEJMRWRCUVVkQkxFTkJRVU5CTEVWQlFVVkJMRXRCUVV0QkxFZEJRVWRCTEVsQlFVbEJMRU5CUVVOQkxFMUJRVTFCTEVWQlFVVkJMRXRCUVV0QkxFVkJRVVZCTEVWQlFVVkJMRU5CUVVOQk8xbEJRMnBFUVN4SlFVRkpRU3hUUVVGVFFTeEhRVUZIUVN4SlFVRkpRU3hEUVVGRFFTeExRVUZMUVN4RFFVRkRRU3hEUVVGRFFUdFpRVU0xUWtFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1kwRkJUMEVzUTBGQlEwRXNVMEZCVTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3WjBKQlEzWkNRU3hSUVVGUlFTeERRVUZEUVR0WlFVTllRU3hEUVVGRFFUdFpRVU5FUVN4SlFVRkpRU3hqUVVGalFTeEhRVUZIUVN4VFFVRlRRU3hEUVVGRFFTeFRRVUZUUVN4RFFVRkRRU3hEUVVGRFFUdFpRVU14UTBFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1kwRkJZMEVzUjBGQlIwRXNVVUZCVVVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1owSkJRemxDUVN4UlFVRlJRU3hIUVVGSFFTeFRRVUZUUVN4RFFVRkRRVHRuUWtGRGNrSkJMRkZCUVZGQkxFZEJRVWRCTEdOQlFXTkJMRU5CUVVOQk8xbEJRelZDUVN4RFFVRkRRVHRSUVVOSVFTeERRVUZEUVR0UlFVTkVRU3hOUVVGTlFTeERRVUZEUVN4UlFVRlJRU3hEUVVGRFFUdEpRVU5zUWtFc1EwRkJRMEU3U1VGRFNIcENMR3RDUVVGRFFUdEJRVUZFUVN4RFFVRkRRU3hCUVRkR1JDeEpRVFpHUXp0QlFUZEdXU3h0UWtGQlZ5eGpRVFpHZGtJc1EwRkJRVHRCUVVWRUxEUkNRVUZ0UXl4SFFVRlJPMGxCUTNwRE1FSXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc2FVSkJRVlZCTEVOQlFVTkJMRWRCUVVkQkxFTkJRVU5CTEVOQlFVTkJPMUZCUVVOQkxFMUJRVTFCTEVOQlFVTkJMRXRCUVV0QkxFTkJRVU5CTzBsQlEyNURRU3hOUVVGTlFTeERRVUZEUVN4alFVRlBRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRVHRSUVVOYVFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeEhRVUZIUVN4WlFVRlpRU3hYUVVGSFFTeERRVUZEUVR0WlFVTnlRa0VzZDBKQlFXbENRU3hGUVVGRlFTeEpRVUZKUVN4SFFVRkhRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkZRU3d3UTBGQk1FTkJPMEZCUTJ4R1FTeERRVUZEUVR0QlFVeGxMREJDUVVGclFpeHhRa0ZMYWtNc1EwRkJRVHRCUVVWRUxIbENRVUZuUXl4SFFVRlJMRVZCUVVVc1JVRkJXVHRKUVVOd1JFTXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNZMEZCVDBFc1EwRkJRMEVzUjBGQlIwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1VVRkRha0pCTEVkQlFVZEJMRU5CUVVOQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFVkJRVVZCTEVOQlFVTkJMRWRCUVVkQkxFZEJRVWRCTEVOQlFVTkJMRTFCUVUxQkxFVkJRVVZCTEVOQlFVTkJMRVZCUVVWQkxFVkJRVVZCTEVOQlFVTkJPMWxCUTNCRFFTeEZRVUZGUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRSUVVOaVFTeERRVUZEUVR0SlFVTklRU3hEUVVGRFFUdEpRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVR0UlFVTk9RU3hKUVVGSlFTeFJRVUZSUVN4SFFVRkhRU3hIUVVGSFFTeERRVUZEUVN4M1FrRkJhVUpCTEVWQlFVVkJMRU5CUVVOQkxFVkJRVVZCTEVOQlFVTkJPMUZCUXpGRFFTeEpRVUZKUVN4SlFVRkpRU3hEUVVGRFFUdFJRVU5VUVN4UFFVRlBRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hKUVVGSlFTeEhRVUZIUVN4UlFVRlJRU3hEUVVGRFFTeEpRVUZKUVN4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeEZRVUZGUVN4RFFVRkRRVHRaUVVONFEwRXNSVUZCUlVFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1MwRkJTMEVzUTBGQlEwRXNRMEZCUTBFN1VVRkRha0pCTEVOQlFVTkJPMGxCUTBoQkxFTkJRVU5CTzBGQlEwaEJMRU5CUVVOQk8wRkJXbVVzZFVKQlFXVXNhMEpCV1RsQ0xFTkJRVUU3UVVGRlJDdzBSVUZCTkVVN1FVRkROVVVzYzBWQlFYTkZPMEZCUTNSRkxFbEJRVWtzYVVKQlFXbENMRWRCUVRaQ0xFTkJRVU03U1VGRGFrUXNTVUZCU1N4SlFVRkpMRWRCUVVjc1NVRkJTU3hYUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE9VSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNCQ0xFMUJRVTBzUTBGQlF5d3lRa0ZCTWtJc1IwRkJWU3hKUVVGalF5eE5RVUZOUVN4RFFVRkRRU3hKUVVGSlFTeFhRVUZIUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRPMGxCUTI1R0xFTkJRVU03U1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTk9MRTFCUVUwc1EwRkJReXh6UTBGQmMwTXNSMEZCVlR0WlFVTnlSRU1zU1VGQlNVRXNSMEZCUjBFc1IwRkJSMEVzU1VGQlNVRXNWMEZCUjBFc1EwRkJRMEVzUjBGQlIwRXNRMEZCUTBFc1EwRkJRMEU3V1VGRGRrSkJMRVZCUVVWQkxFTkJRVU5CTEVOQlFVTkJMRWRCUVVkQkxFTkJRVU5CTEVsQlFVbEJMRXRCUVV0QkxFZEJRVWRCTEVOQlFVTkJMRTFCUVUxQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8yZENRVU0xUWtFc1IwRkJSMEVzUTBGQlEwRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNSVUZCUlVFc1EwRkJRMEVzUjBGQlIwRXNSMEZCUjBFc1EwRkJRMEVzVFVGQlRVRXNSVUZCUlVFc1EwRkJRMEVzUlVGQlJVRXNSVUZCUlVFc1EwRkJRMEU3YjBKQlEzQkRRU3hIUVVGSFFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdG5Ra0ZEYkVKQkxFTkJRVU5CTzFsQlEwaEJMRU5CUVVOQk8xbEJRMFJCTEUxQlFVMUJMRU5CUVVOQkxFZEJRVWRCTEVOQlFVTkJPMUZCUTJKQkxFTkJRVU5CTEVOQlFVTTdTVUZEU2l4RFFVRkRPMEZCUTBnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEJRVU5NTzBsQlFVRkRPMGxCU1VGRExFTkJRVU5CTzBsQlNGRkVMSGxDUVVGalFTeEhRVUZ5UWtFc1ZVRkJlVUpCTEVkQlFWRkJMRWxCUVZsRkxFMUJRVTFCTEVOQlFVTkJMR2xDUVVGcFFrRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdTVUZEZEVWR0xHTkJRVWRCTEVkQlFWWkJMRlZCUVdOQkxFTkJRVk5CTEVWQlFVVkJMRWRCUVUxQkxFbEJRV0ZITEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRWRCUVVkQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQk8wbEJRM3BFU0N4cFFrRkJUVUVzUjBGQllrRXNWVUZCYVVKQkxFTkJRVk5CTEVWQlFVVkJMRU5CUVVsQkxFbEJRVWxKTEVOQlFVTkJMRU5CUVVOQkxFMUJRVTFCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzBsQlEzQkVTaXhwUWtGQlEwRTdRVUZCUkVFc1EwRkJRMEVzUVVGS1JDeEpRVWxETzBGQlNsa3NhMEpCUVZVc1lVRkpkRUlzUTBGQlFTSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdYRzRnSUdselNuTlBZbXBsWTNRc1hHNGdJR2RzYjJKaGJDeGNiaUFnYVhOUWNtVnpaVzUwTEZ4dUlDQnBjMEpzWVc1ckxGeHVJQ0JwYzBGeWNtRjVMRnh1SUNCblpYUlRlVzFpYjJ4SmRHVnlZWFJ2Y2x4dWZTQm1jbTl0SUNkaGJtZDFiR0Z5TWk5emNtTXZabUZqWVdSbEwyeGhibWNuTzF4dVhHNWxlSEJ2Y25RZ2RtRnlJRTFoY0NBOUlHZHNiMkpoYkM1TllYQTdYRzVsZUhCdmNuUWdkbUZ5SUZObGRDQTlJR2RzYjJKaGJDNVRaWFE3WEc1Y2JpOHZJRk5oWm1GeWFTQmhibVFnU1c1MFpYSnVaWFFnUlhod2JHOXlaWElnWkc4Z2JtOTBJSE4xY0hCdmNuUWdkR2hsSUdsMFpYSmhZbXhsSUhCaGNtRnRaWFJsY2lCMGJ5QjBhR1ZjYmk4dklFMWhjQ0JqYjI1emRISjFZM1J2Y2k0Z0lGZGxJSGR2Y21zZ1lYSnZkVzVrSUhSb1lYUWdZbmtnYldGdWRXRnNiSGtnWVdSa2FXNW5JSFJvWlNCcGRHVnRjeTVjYm5aaGNpQmpjbVZoZEdWTllYQkdjbTl0VUdGcGNuTTZJSHNvY0dGcGNuTTZJR0Z1ZVZ0ZEtUb2dUV0Z3UEdGdWVTd2dZVzU1UG4wZ1BTQW9ablZ1WTNScGIyNG9LU0I3WEc0Z0lIUnllU0I3WEc0Z0lDQWdhV1lnS0c1bGR5Qk5ZWEFvUEdGdWVUNWJXekVzSURKZFhTa3VjMmw2WlNBOVBUMGdNU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1oxYm1OMGFXOXVJR055WldGMFpVMWhjRVp5YjIxUVlXbHljeWh3WVdseWN6b2dZVzU1VzEwcE9pQk5ZWEE4WVc1NUxDQmhibmsrSUhzZ2NtVjBkWEp1SUc1bGR5Qk5ZWEFvY0dGcGNuTXBPeUI5TzF4dUlDQWdJSDFjYmlBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNCOVhHNGdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQmpjbVZoZEdWTllYQkJibVJRYjNCMWJHRjBaVVp5YjIxUVlXbHljeWh3WVdseWN6b2dZVzU1VzEwcE9pQk5ZWEE4WVc1NUxDQmhibmsrSUh0Y2JpQWdJQ0IyWVhJZ2JXRndJRDBnYm1WM0lFMWhjQ2dwTzF4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnY0dGcGNuTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUhaaGNpQndZV2x5SUQwZ2NHRnBjbk5iYVYwN1hHNGdJQ0FnSUNCdFlYQXVjMlYwS0hCaGFYSmJNRjBzSUhCaGFYSmJNVjBwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2JXRndPMXh1SUNCOU8xeHVmU2tvS1R0Y2JuWmhjaUJqY21WaGRHVk5ZWEJHY205dFRXRndPaUI3S0cwNklFMWhjRHhoYm5rc0lHRnVlVDRwT2lCTllYQThZVzU1TENCaGJuaytmU0E5SUNobWRXNWpkR2x2YmlncElIdGNiaUFnZEhKNUlIdGNiaUFnSUNCcFppQW9ibVYzSUUxaGNDZzhZVzU1UG01bGR5Qk5ZWEFvS1NrcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCamNtVmhkR1ZOWVhCR2NtOXRUV0Z3S0cwNklFMWhjRHhoYm5rc0lHRnVlVDRwT2lCTllYQThZVzU1TENCaGJuaytJSHNnY21WMGRYSnVJRzVsZHlCTllYQW9QR0Z1ZVQ1dEtUc2dmVHRjYmlBZ0lDQjlYRzRnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnZlZ4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0Z1kzSmxZWFJsVFdGd1FXNWtVRzl3ZFd4aGRHVkdjbTl0VFdGd0tHMDZJRTFoY0R4aGJua3NJR0Z1ZVQ0cE9pQk5ZWEE4WVc1NUxDQmhibmsrSUh0Y2JpQWdJQ0IyWVhJZ2JXRndJRDBnYm1WM0lFMWhjQ2dwTzF4dUlDQWdJRzB1Wm05eVJXRmphQ2dvZGl3Z2F5a2dQVDRnZXlCdFlYQXVjMlYwS0dzc0lIWXBPeUI5S1R0Y2JpQWdJQ0J5WlhSMWNtNGdiV0Z3TzF4dUlDQjlPMXh1ZlNrb0tUdGNiblpoY2lCZlkyeGxZWEpXWVd4MVpYTTZJSHNvYlRvZ1RXRndQR0Z1ZVN3Z1lXNTVQaWw5SUQwZ0tHWjFibU4wYVc5dUtDa2dlMXh1SUNCcFppQW9LRHhoYm5rK0tHNWxkeUJOWVhBb0tTa3VhMlY1Y3lncEtTNXVaWGgwS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1oxYm1OMGFXOXVJRjlqYkdWaGNsWmhiSFZsY3lodE9pQk5ZWEE4WVc1NUxDQmhibmsrS1NCN1hHNGdJQ0FnSUNCMllYSWdhMlY1U1hSbGNtRjBiM0lnUFNCdExtdGxlWE1vS1R0Y2JpQWdJQ0FnSUhaaGNpQnJPMXh1SUNBZ0lDQWdkMmhwYkdVZ0tDRW9LR3NnUFNBb1BHRnVlVDVyWlhsSmRHVnlZWFJ2Y2lrdWJtVjRkQ2dwS1M1a2IyNWxLU2tnZTF4dUlDQWdJQ0FnSUNCdExuTmxkQ2hyTG5aaGJIVmxMQ0J1ZFd4c0tUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOU8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCZlkyeGxZWEpXWVd4MVpYTlhhWFJvUm05eVpVVmhZMmdvYlRvZ1RXRndQR0Z1ZVN3Z1lXNTVQaWtnZTF4dUlDQWdJQ0FnYlM1bWIzSkZZV05vS0NoMkxDQnJLU0E5UGlCN0lHMHVjMlYwS0dzc0lHNTFiR3dwT3lCOUtUdGNiaUFnSUNCOU8xeHVJQ0I5WEc1OUtTZ3BPMXh1THk4Z1UyRm1ZWEpwSUdSdlpYTnVKM1FnYVcxd2JHVnRaVzUwSUUxaGNFbDBaWEpoZEc5eUxtNWxlSFFvS1N3Z2QyaHBZMmdnYVhNZ2RYTmxaQ0JwY3lCVWNtRmpaWFZ5SjNNZ2NHOXNlV1pwYkd3Z2IyWWdRWEp5WVhrdVpuSnZiVnh1THk4Z1ZFOUVUeWh0YkdGMllXd3BPaUJ5WlcxdmRtVWdkR2hsSUhkdmNtc2dZWEp2ZFc1a0lHOXVZMlVnZDJVZ2FHRjJaU0JoSUhkdmNtdHBibWNnY0c5c2VXWnBiR3dnYjJZZ1FYSnlZWGt1Wm5KdmJWeHVkbUZ5SUY5aGNuSmhlVVp5YjIxTllYQTZJSHNvYlRvZ1RXRndQR0Z1ZVN3Z1lXNTVQaXdnWjJWMFZtRnNkV1Z6T2lCaWIyOXNaV0Z1S1RvZ1lXNTVXMTE5SUQwZ0tHWjFibU4wYVc5dUtDa2dlMXh1SUNCMGNua2dlMXh1SUNBZ0lHbG1JQ2dvUEdGdWVUNG9ibVYzSUUxaGNDZ3BLUzUyWVd4MVpYTW9LU2t1Ym1WNGRDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlHTnlaV0YwWlVGeWNtRjVSbkp2YlUxaGNDaHRPaUJOWVhBOFlXNTVMQ0JoYm5rK0xDQm5aWFJXWVd4MVpYTTZJR0p2YjJ4bFlXNHBPaUJoYm5sYlhTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpYTWdQeUFvUEdGdWVUNUJjbkpoZVNrdVpuSnZiU2h0TG5aaGJIVmxjeWdwS1NBNklDZzhZVzU1UGtGeWNtRjVLUzVtY205dEtHMHVhMlY1Y3lncEtUdGNiaUFnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUdOeVpXRjBaVUZ5Y21GNVJuSnZiVTFoY0ZkcGRHaEdiM0psWVdOb0tHMDZJRTFoY0R4aGJua3NJR0Z1ZVQ0c0lHZGxkRlpoYkhWbGN6b2dZbTl2YkdWaGJpazZJR0Z1ZVZ0ZElIdGNiaUFnSUNCMllYSWdjbVZ6SUQwZ1RHbHpkRmR5WVhCd1pYSXVZM0psWVhSbFJtbDRaV1JUYVhwbEtHMHVjMmw2WlNrc0lHa2dQU0F3TzF4dUlDQWdJRzB1Wm05eVJXRmphQ2dvZGl3Z2F5a2dQVDRnZTF4dUlDQWdJQ0FnY21WelcybGRJRDBnWjJWMFZtRnNkV1Z6SUQ4Z2RpQTZJR3M3WEc0Z0lDQWdJQ0JwS3lzN1hHNGdJQ0FnZlNrN1hHNGdJQ0FnY21WMGRYSnVJSEpsY3p0Y2JpQWdmVHRjYm4wcEtDazdYRzVjYm1WNGNHOXlkQ0JqYkdGemN5Qk5ZWEJYY21Gd2NHVnlJSHRjYmlBZ2MzUmhkR2xqSUdOc2IyNWxQRXNzSUZZK0tHMDZJRTFoY0R4TExDQldQaWs2SUUxaGNEeExMQ0JXUGlCN0lISmxkSFZ5YmlCamNtVmhkR1ZOWVhCR2NtOXRUV0Z3S0cwcE95QjlYRzRnSUhOMFlYUnBZeUJqY21WaGRHVkdjbTl0VTNSeWFXNW5UV0Z3UEZRK0tITjBjbWx1WjAxaGNEb2dlMXRyWlhrNklITjBjbWx1WjEwNklGUjlLVG9nVFdGd1BITjBjbWx1Wnl3Z1ZENGdlMXh1SUNBZ0lIWmhjaUJ5WlhOMWJIUWdQU0J1WlhjZ1RXRndQSE4wY21sdVp5d2dWRDRvS1R0Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJ3Y205d0lHbHVJSE4wY21sdVowMWhjQ2tnZTF4dUlDQWdJQ0FnY21WemRXeDBMbk5sZENod2NtOXdMQ0J6ZEhKcGJtZE5ZWEJiY0hKdmNGMHBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1SUNCOVhHNGdJSE4wWVhScFl5QjBiMU4wY21sdVowMWhjRHhVUGlodE9pQk5ZWEE4YzNSeWFXNW5MQ0JVUGlrNklIdGJhMlY1T2lCemRISnBibWRkT2lCVWZTQjdYRzRnSUNBZ2RtRnlJSEk2SUh0YmEyVjVPaUJ6ZEhKcGJtZGRPaUJVZlNBOUlIdDlPMXh1SUNBZ0lHMHVabTl5UldGamFDZ29kaXdnYXlrZ1BUNGdjbHRyWFNBOUlIWXBPMXh1SUNBZ0lISmxkSFZ5YmlCeU8xeHVJQ0I5WEc0Z0lITjBZWFJwWXlCamNtVmhkR1ZHY205dFVHRnBjbk1vY0dGcGNuTTZJR0Z1ZVZ0ZEtUb2dUV0Z3UEdGdWVTd2dZVzU1UGlCN0lISmxkSFZ5YmlCamNtVmhkR1ZOWVhCR2NtOXRVR0ZwY25Nb2NHRnBjbk1wT3lCOVhHNGdJSE4wWVhScFl5QmpiR1ZoY2xaaGJIVmxjeWh0T2lCTllYQThZVzU1TENCaGJuaytLU0I3SUY5amJHVmhjbFpoYkhWbGN5aHRLVHNnZlZ4dUlDQnpkR0YwYVdNZ2FYUmxjbUZpYkdVOFZENG9iVG9nVkNrNklGUWdleUJ5WlhSMWNtNGdiVHNnZlZ4dUlDQnpkR0YwYVdNZ2EyVjVjenhMUGlodE9pQk5ZWEE4U3l3Z1lXNTVQaWs2SUV0YlhTQjdJSEpsZEhWeWJpQmZZWEp5WVhsR2NtOXRUV0Z3S0cwc0lHWmhiSE5sS1RzZ2ZWeHVJQ0J6ZEdGMGFXTWdkbUZzZFdWelBGWStLRzA2SUUxaGNEeGhibmtzSUZZK0tUb2dWbHRkSUhzZ2NtVjBkWEp1SUY5aGNuSmhlVVp5YjIxTllYQW9iU3dnZEhKMVpTazdJSDFjYm4xY2JseHVMeW9xWEc0Z0tpQlhjbUZ3Y3lCS1lYWmhjMk55YVhCMElFOWlhbVZqZEhOY2JpQXFMMXh1Wlhod2IzSjBJR05zWVhOeklGTjBjbWx1WjAxaGNGZHlZWEJ3WlhJZ2UxeHVJQ0J6ZEdGMGFXTWdZM0psWVhSbEtDazZJSHRiYXpvZ0x5cGhibmtxTHlCemRISnBibWRkT2lCaGJubDlJSHRjYmlBZ0lDQXZMeUJPYjNSbE9pQlhaU0JoY21VZ2JtOTBJSFZ6YVc1bklFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDa2dhR1Z5WlNCa2RXVWdkRzljYmlBZ0lDQXZMeUJ3WlhKbWIzSnRZVzVqWlNGY2JpQWdJQ0F2THlCb2RIUndPaTh2YW5Od1pYSm1MbU52YlM5dVp6SXRiMkpxWldOMExXTnlaV0YwWlMxdWRXeHNYRzRnSUNBZ2NtVjBkWEp1SUh0OU8xeHVJQ0I5WEc0Z0lITjBZWFJwWXlCamIyNTBZV2x1Y3lodFlYQTZJSHRiYTJWNU9pQnpkSEpwYm1kZE9pQmhibmw5TENCclpYazZJSE4wY21sdVp5azZJR0p2YjJ4bFlXNGdlMXh1SUNBZ0lISmxkSFZ5YmlCdFlYQXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLVHRjYmlBZ2ZWeHVJQ0J6ZEdGMGFXTWdaMlYwUEZZK0tHMWhjRG9nZTF0clpYazZJSE4wY21sdVoxMDZJRlo5TENCclpYazZJSE4wY21sdVp5azZJRllnZTF4dUlDQWdJSEpsZEhWeWJpQnRZWEF1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NBL0lHMWhjRnRyWlhsZElEb2dkVzVrWldacGJtVmtPMXh1SUNCOVhHNGdJSE4wWVhScFl5QnpaWFE4Vmo0b2JXRndPaUI3VzJ0bGVUb2djM1J5YVc1blhUb2dWbjBzSUd0bGVUb2djM1J5YVc1bkxDQjJZV3gxWlRvZ1Zpa2dleUJ0WVhCYmEyVjVYU0E5SUhaaGJIVmxPeUI5WEc0Z0lITjBZWFJwWXlCclpYbHpLRzFoY0RvZ2UxdHJaWGs2SUhOMGNtbHVaMTA2SUdGdWVYMHBPaUJ6ZEhKcGJtZGJYU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVhMlY1Y3lodFlYQXBPeUI5WEc0Z0lITjBZWFJwWXlCcGMwVnRjSFI1S0cxaGNEb2dlMXRyWlhrNklITjBjbWx1WjEwNklHRnVlWDBwT2lCaWIyOXNaV0Z1SUh0Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJ3Y205d0lHbHVJRzFoY0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnZlZ4dUlDQnpkR0YwYVdNZ1pHVnNaWFJsSUNodFlYQTZJSHRiYTJWNU9pQnpkSEpwYm1kZE9pQmhibmw5TENCclpYazZJSE4wY21sdVp5a2dleUJrWld4bGRHVWdiV0Z3VzJ0bGVWMDdJSDFjYmlBZ2MzUmhkR2xqSUdadmNrVmhZMmc4U3l3Z1ZqNG9iV0Z3T2lCN1cydGxlVG9nYzNSeWFXNW5YVG9nVm4wc0lHTmhiR3hpWVdOck9pQXZLaWhXTENCTEtTQTlQaUIyYjJsa0tpOGdSblZ1WTNScGIyNHBJSHRjYmlBZ0lDQm1iM0lnS0haaGNpQndjbTl3SUdsdUlHMWhjQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tHMWhjQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHdjbTl3S1NrZ2UxeHVJQ0FnSUNBZ0lDQmpZV3hzWW1GamF5aHRZWEJiY0hKdmNGMHNJSEJ5YjNBcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lITjBZWFJwWXlCdFpYSm5aVHhXUGlodE1Ub2dlMXRyWlhrNklITjBjbWx1WjEwNklGWjlMQ0J0TWpvZ2UxdHJaWGs2SUhOMGNtbHVaMTA2SUZaOUtUb2dlMXRyWlhrNklITjBjbWx1WjEwNklGWjlJSHRjYmlBZ0lDQjJZWElnYlRvZ2UxdHJaWGs2SUhOMGNtbHVaMTA2SUZaOUlEMGdlMzA3WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJoZEhSeUlHbHVJRzB4S1NCN1hHNGdJQ0FnSUNCcFppQW9iVEV1YUdGelQzZHVVSEp2Y0dWeWRIa29ZWFIwY2lrcElIdGNiaUFnSUNBZ0lDQWdiVnRoZEhSeVhTQTlJRzB4VzJGMGRISmRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHWnZjaUFvZG1GeUlHRjBkSElnYVc0Z2JUSXBJSHRjYmlBZ0lDQWdJR2xtSUNodE1pNW9ZWE5QZDI1UWNtOXdaWEowZVNoaGRIUnlLU2tnZTF4dUlDQWdJQ0FnSUNCdFcyRjBkSEpkSUQwZ2JUSmJZWFIwY2wwN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRzA3WEc0Z0lIMWNibHh1SUNCemRHRjBhV01nWlhGMVlXeHpQRlkrS0cweE9pQjdXMnRsZVRvZ2MzUnlhVzVuWFRvZ1ZuMHNJRzB5T2lCN1cydGxlVG9nYzNSeWFXNW5YVG9nVm4wcE9pQmliMjlzWldGdUlIdGNiaUFnSUNCMllYSWdhekVnUFNCUFltcGxZM1F1YTJWNWN5aHRNU2s3WEc0Z0lDQWdkbUZ5SUdzeUlEMGdUMkpxWldOMExtdGxlWE1vYlRJcE8xeHVJQ0FnSUdsbUlDaHJNUzVzWlc1bmRHZ2dJVDBnYXpJdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ2ZWeHVJQ0FnSUhaaGNpQnJaWGs3WEc0Z0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JyTVM1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdhMlY1SUQwZ2F6RmJhVjA3WEc0Z0lDQWdJQ0JwWmlBb2JURmJhMlY1WFNBaFBUMGdiVEpiYTJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQjlYRzU5WEc1Y2JpOHFLbHh1SUNvZ1FTQmliMjlzWldGdUxYWmhiSFZsWkNCbWRXNWpkR2x2YmlCdmRtVnlJR0VnZG1Gc2RXVXNJSEJ2YzNOcFlteDVJR2x1WTJ4MVpHbHVaeUJqYjI1MFpYaDBJR2x1Wm05eWJXRjBhVzl1WEc0Z0tpQnlaV2RoY21ScGJtY2dkR2hoZENCMllXeDFaU2R6SUhCdmMybDBhVzl1SUdsdUlHRnVJR0Z5Y21GNUxseHVJQ292WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUZCeVpXUnBZMkYwWlR4VVBpQjdJQ2gyWVd4MVpUb2dWQ3dnYVc1a1pYZy9PaUJ1ZFcxaVpYSXNJR0Z5Y21GNVB6b2dWRnRkS1RvZ1ltOXZiR1ZoYmpzZ2ZWeHVYRzVsZUhCdmNuUWdZMnhoYzNNZ1RHbHpkRmR5WVhCd1pYSWdlMXh1SUNBdkx5QktVeUJvWVhNZ2JtOGdkMkY1SUhSdklHVjRjSEpsYzNNZ1lTQnpkR0YwYVdOaGJHeDVJR1pwZUdWa0lITnBlbVVnYkdsemRDd2dZblYwSUdSaGNuUWdaRzlsY3lCemJ5QjNaVnh1SUNBdkx5QnJaV1Z3SUdKdmRHZ2diV1YwYUc5a2N5NWNiaUFnYzNSaGRHbGpJR055WldGMFpVWnBlR1ZrVTJsNlpTaHphWHBsT2lCdWRXMWlaWElwT2lCaGJubGJYU0I3SUhKbGRIVnliaUJ1WlhjZ1FYSnlZWGtvYzJsNlpTazdJSDFjYmlBZ2MzUmhkR2xqSUdOeVpXRjBaVWR5YjNkaFlteGxVMmw2WlNoemFYcGxPaUJ1ZFcxaVpYSXBPaUJoYm5sYlhTQjdJSEpsZEhWeWJpQnVaWGNnUVhKeVlYa29jMmw2WlNrN0lIMWNiaUFnYzNSaGRHbGpJR05zYjI1bFBGUStLR0Z5Y21GNU9pQlVXMTBwT2lCVVcxMGdleUJ5WlhSMWNtNGdZWEp5WVhrdWMyeHBZMlVvTUNrN0lIMWNiaUFnYzNSaGRHbGpJR1p2Y2tWaFkyaFhhWFJvU1c1a1pYZzhWRDRvWVhKeVlYazZJRlJiWFN3Z1ptNDZJQ2gwT2lCVUxDQnVPaUJ1ZFcxaVpYSXBJRDArSUhadmFXUXBJSHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR0Z5Y21GNUxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JtYmloaGNuSmhlVnRwWFN3Z2FTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lITjBZWFJwWXlCbWFYSnpkRHhVUGloaGNuSmhlVG9nVkZ0ZEtUb2dWQ0I3WEc0Z0lDQWdhV1lnS0NGaGNuSmhlU2tnY21WMGRYSnVJRzUxYkd3N1hHNGdJQ0FnY21WMGRYSnVJR0Z5Y21GNVd6QmRPMXh1SUNCOVhHNGdJSE4wWVhScFl5QnNZWE4wUEZRK0tHRnljbUY1T2lCVVcxMHBPaUJVSUh0Y2JpQWdJQ0JwWmlBb0lXRnljbUY1SUh4OElHRnljbUY1TG14bGJtZDBhQ0E5UFNBd0tTQnlaWFIxY200Z2JuVnNiRHRjYmlBZ0lDQnlaWFIxY200Z1lYSnlZWGxiWVhKeVlYa3ViR1Z1WjNSb0lDMGdNVjA3WEc0Z0lIMWNiaUFnYzNSaGRHbGpJR2x1WkdWNFQyWThWRDRvWVhKeVlYazZJRlJiWFN3Z2RtRnNkV1U2SUZRc0lITjBZWEowU1c1a1pYZzZJRzUxYldKbGNpQTlJREFwT2lCdWRXMWlaWElnZTF4dUlDQWdJSEpsZEhWeWJpQmhjbkpoZVM1cGJtUmxlRTltS0haaGJIVmxMQ0J6ZEdGeWRFbHVaR1Y0S1R0Y2JpQWdmVnh1SUNCemRHRjBhV01nWTI5dWRHRnBibk04VkQ0b2JHbHpkRG9nVkZ0ZExDQmxiRG9nVkNrNklHSnZiMnhsWVc0Z2V5QnlaWFIxY200Z2JHbHpkQzVwYm1SbGVFOW1LR1ZzS1NBaFBUMGdMVEU3SUgxY2JpQWdjM1JoZEdsaklISmxkbVZ5YzJWa1BGUStLR0Z5Y21GNU9pQlVXMTBwT2lCVVcxMGdlMXh1SUNBZ0lIWmhjaUJoSUQwZ1RHbHpkRmR5WVhCd1pYSXVZMnh2Ym1Vb1lYSnlZWGtwTzF4dUlDQWdJSEpsZEhWeWJpQmhMbkpsZG1WeWMyVW9LVHRjYmlBZ2ZWeHVJQ0J6ZEdGMGFXTWdZMjl1WTJGMEtHRTZJR0Z1ZVZ0ZExDQmlPaUJoYm5sYlhTazZJR0Z1ZVZ0ZElIc2djbVYwZFhKdUlHRXVZMjl1WTJGMEtHSXBPeUI5WEc0Z0lITjBZWFJwWXlCcGJuTmxjblE4VkQ0b2JHbHpkRG9nVkZ0ZExDQnBibVJsZURvZ2JuVnRZbVZ5TENCMllXeDFaVG9nVkNrZ2V5QnNhWE4wTG5Od2JHbGpaU2hwYm1SbGVDd2dNQ3dnZG1Gc2RXVXBPeUI5WEc0Z0lITjBZWFJwWXlCeVpXMXZkbVZCZER4VVBpaHNhWE4wT2lCVVcxMHNJR2x1WkdWNE9pQnVkVzFpWlhJcE9pQlVJSHRjYmlBZ0lDQjJZWElnY21WeklEMGdiR2x6ZEZ0cGJtUmxlRjA3WEc0Z0lDQWdiR2x6ZEM1emNHeHBZMlVvYVc1a1pYZ3NJREVwTzF4dUlDQWdJSEpsZEhWeWJpQnlaWE03WEc0Z0lIMWNiaUFnYzNSaGRHbGpJSEpsYlc5MlpVRnNiRHhVUGloc2FYTjBPaUJVVzEwc0lHbDBaVzF6T2lCVVcxMHBJSHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR2wwWlcxekxteGxibWQwYURzZ0t5dHBLU0I3WEc0Z0lDQWdJQ0IyWVhJZ2FXNWtaWGdnUFNCc2FYTjBMbWx1WkdWNFQyWW9hWFJsYlhOYmFWMHBPMXh1SUNBZ0lDQWdiR2x6ZEM1emNHeHBZMlVvYVc1a1pYZ3NJREVwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0J6ZEdGMGFXTWdjbVZ0YjNabFBGUStLR3hwYzNRNklGUmJYU3dnWld3NklGUXBPaUJpYjI5c1pXRnVJSHRjYmlBZ0lDQjJZWElnYVc1a1pYZ2dQU0JzYVhOMExtbHVaR1Y0VDJZb1pXd3BPMXh1SUNBZ0lHbG1JQ2hwYm1SbGVDQStJQzB4S1NCN1hHNGdJQ0FnSUNCc2FYTjBMbk53YkdsalpTaHBibVJsZUN3Z01TazdYRzRnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNCOVhHNGdJSE4wWVhScFl5QmpiR1ZoY2loc2FYTjBPaUJoYm5sYlhTa2dleUJzYVhOMExteGxibWQwYUNBOUlEQTdJSDFjYmlBZ2MzUmhkR2xqSUdselJXMXdkSGtvYkdsemREb2dZVzU1VzEwcE9pQmliMjlzWldGdUlIc2djbVYwZFhKdUlHeHBjM1F1YkdWdVozUm9JRDA5SURBN0lIMWNiaUFnYzNSaGRHbGpJR1pwYkd3b2JHbHpkRG9nWVc1NVcxMHNJSFpoYkhWbE9pQmhibmtzSUhOMFlYSjBPaUJ1ZFcxaVpYSWdQU0F3TENCbGJtUTZJRzUxYldKbGNpQTlJRzUxYkd3cElIdGNiaUFnSUNCc2FYTjBMbVpwYkd3b2RtRnNkV1VzSUhOMFlYSjBMQ0JsYm1RZ1BUMDlJRzUxYkd3Z1B5QnNhWE4wTG14bGJtZDBhQ0E2SUdWdVpDazdYRzRnSUgxY2JpQWdjM1JoZEdsaklHVnhkV0ZzY3loaE9pQmhibmxiWFN3Z1lqb2dZVzU1VzEwcE9pQmliMjlzWldGdUlIdGNiaUFnSUNCcFppQW9ZUzVzWlc1bmRHZ2dJVDBnWWk1c1pXNW5kR2dwSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHRXViR1Z1WjNSb095QXJLMmtwSUh0Y2JpQWdJQ0FnSUdsbUlDaGhXMmxkSUNFOVBTQmlXMmxkS1NCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0I5WEc0Z0lITjBZWFJwWXlCemJHbGpaVHhVUGloc09pQlVXMTBzSUdaeWIyMDZJRzUxYldKbGNpQTlJREFzSUhSdk9pQnVkVzFpWlhJZ1BTQnVkV3hzS1RvZ1ZGdGRJSHRjYmlBZ0lDQnlaWFIxY200Z2JDNXpiR2xqWlNobWNtOXRMQ0IwYnlBOVBUMGdiblZzYkNBL0lIVnVaR1ZtYVc1bFpDQTZJSFJ2S1R0Y2JpQWdmVnh1SUNCemRHRjBhV01nYzNCc2FXTmxQRlErS0d3NklGUmJYU3dnWm5KdmJUb2diblZ0WW1WeUxDQnNaVzVuZEdnNklHNTFiV0psY2lrNklGUmJYU0I3SUhKbGRIVnliaUJzTG5Od2JHbGpaU2htY205dExDQnNaVzVuZEdncE95QjlYRzRnSUhOMFlYUnBZeUJ6YjNKMFBGUStLR3c2SUZSYlhTd2dZMjl0Y0dGeVpVWnVQem9nS0dFNklGUXNJR0k2SUZRcElEMCtJRzUxYldKbGNpa2dlMXh1SUNBZ0lHbG1JQ2hwYzFCeVpYTmxiblFvWTI5dGNHRnlaVVp1S1NrZ2UxeHVJQ0FnSUNBZ2JDNXpiM0owS0dOdmJYQmhjbVZHYmlrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR3d1YzI5eWRDZ3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dUlDQnpkR0YwYVdNZ2RHOVRkSEpwYm1jOFZENG9iRG9nVkZ0ZEtUb2djM1J5YVc1bklIc2djbVYwZFhKdUlHd3VkRzlUZEhKcGJtY29LVHNnZlZ4dUlDQnpkR0YwYVdNZ2RHOUtVMDlPUEZRK0tHdzZJRlJiWFNrNklITjBjbWx1WnlCN0lISmxkSFZ5YmlCS1UwOU9Mbk4wY21sdVoybG1lU2hzS1RzZ2ZWeHVYRzRnSUhOMFlYUnBZeUJ0WVhocGJYVnRQRlErS0d4cGMzUTZJRlJiWFN3Z2NISmxaR2xqWVhSbE9pQW9kRG9nVkNrZ1BUNGdiblZ0WW1WeUtUb2dWQ0I3WEc0Z0lDQWdhV1lnS0d4cGMzUXViR1Z1WjNSb0lEMDlJREFwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ1ZFd4c08xeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ2MyOXNkWFJwYjI0Z1BTQnVkV3hzTzF4dUlDQWdJSFpoY2lCdFlYaFdZV3gxWlNBOUlDMUpibVpwYm1sMGVUdGNiaUFnSUNCbWIzSWdLSFpoY2lCcGJtUmxlQ0E5SURBN0lHbHVaR1Y0SUR3Z2JHbHpkQzVzWlc1bmRHZzdJR2x1WkdWNEt5c3BJSHRjYmlBZ0lDQWdJSFpoY2lCallXNWthV1JoZEdVZ1BTQnNhWE4wVzJsdVpHVjRYVHRjYmlBZ0lDQWdJR2xtSUNocGMwSnNZVzVyS0dOaGJtUnBaR0YwWlNrcElIdGNiaUFnSUNBZ0lDQWdZMjl1ZEdsdWRXVTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQjJZWElnWTJGdVpHbGtZWFJsVm1Gc2RXVWdQU0J3Y21Wa2FXTmhkR1VvWTJGdVpHbGtZWFJsS1R0Y2JpQWdJQ0FnSUdsbUlDaGpZVzVrYVdSaGRHVldZV3gxWlNBK0lHMWhlRlpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSE52YkhWMGFXOXVJRDBnWTJGdVpHbGtZWFJsTzF4dUlDQWdJQ0FnSUNCdFlYaFdZV3gxWlNBOUlHTmhibVJwWkdGMFpWWmhiSFZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2MyOXNkWFJwYjI0N1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHbHpUR2x6ZEV4cGEyVkpkR1Z5WVdKc1pTaHZZbW82SUdGdWVTazZJR0p2YjJ4bFlXNGdlMXh1SUNCcFppQW9JV2x6U25OUFltcGxZM1FvYjJKcUtTa2djbVYwZFhKdUlHWmhiSE5sTzF4dUlDQnlaWFIxY200Z2FYTkJjbkpoZVNodlltb3BJSHg4WEc0Z0lDQWdJQ0FnSUNBb0lTaHZZbW9nYVc1emRHRnVZMlZ2WmlCTllYQXBJQ1ltSUNBZ0lDQWdMeThnU2xNZ1RXRndJR0Z5WlNCcGRHVnlZV0pzWlhNZ1luVjBJSEpsZEhWeWJpQmxiblJ5YVdWeklHRnpJRnRyTENCMlhWeHVJQ0FnSUNBZ0lDQWdJR2RsZEZONWJXSnZiRWwwWlhKaGRHOXlLQ2tnYVc0Z2IySnFLVHNnSUM4dklFcFRJRWwwWlhKaFlteGxJR2hoZG1VZ1lTQlRlVzFpYjJ3dWFYUmxjbUYwYjNJZ2NISnZjRnh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2FYUmxjbUYwWlV4cGMzUk1hV3RsS0c5aWFqb2dZVzU1TENCbWJqb2dSblZ1WTNScGIyNHBJSHRjYmlBZ2FXWWdLR2x6UVhKeVlYa29iMkpxS1NrZ2UxeHVJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2IySnFMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCbWJpaHZZbXBiYVYwcE8xeHVJQ0FnSUgxY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCMllYSWdhWFJsY21GMGIzSWdQU0J2WW1wYloyVjBVM2x0WW05c1NYUmxjbUYwYjNJb0tWMG9LVHRjYmlBZ0lDQjJZWElnYVhSbGJUdGNiaUFnSUNCM2FHbHNaU0FvSVNnb2FYUmxiU0E5SUdsMFpYSmhkRzl5TG01bGVIUW9LU2t1Wkc5dVpTa3BJSHRjYmlBZ0lDQWdJR1p1S0dsMFpXMHVkbUZzZFdVcE8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNHZMeUJUWVdaaGNta2dZVzVrSUVsdWRHVnlibVYwSUVWNGNHeHZjbVZ5SUdSdklHNXZkQ0J6ZFhCd2IzSjBJSFJvWlNCcGRHVnlZV0pzWlNCd1lYSmhiV1YwWlhJZ2RHOGdkR2hsWEc0dkx5QlRaWFFnWTI5dWMzUnlkV04wYjNJdUlDQlhaU0IzYjNKcklHRnliM1Z1WkNCMGFHRjBJR0o1SUcxaGJuVmhiR3g1SUdGa1pHbHVaeUIwYUdVZ2FYUmxiWE11WEc1MllYSWdZM0psWVhSbFUyVjBSbkp2YlV4cGMzUTZJSHNvYkhOME9pQmhibmxiWFNrNklGTmxkRHhoYm5rK2ZTQTlJQ2htZFc1amRHbHZiaWdwSUh0Y2JpQWdkbUZ5SUhSbGMzUWdQU0J1WlhjZ1UyVjBLRnN4TENBeUxDQXpYU2s3WEc0Z0lHbG1JQ2gwWlhOMExuTnBlbVVnUFQwOUlETXBJSHRjYmlBZ0lDQnlaWFIxY200Z1puVnVZM1JwYjI0Z1kzSmxZWFJsVTJWMFJuSnZiVXhwYzNRb2JITjBPaUJoYm5sYlhTazZJRk5sZER4aGJuaytJSHNnY21WMGRYSnVJRzVsZHlCVFpYUW9iSE4wS1RzZ2ZUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnlaWFIxY200Z1puVnVZM1JwYjI0Z1kzSmxZWFJsVTJWMFFXNWtVRzl3ZFd4aGRHVkdjbTl0VEdsemRDaHNjM1E2SUdGdWVWdGRLVG9nVTJWMFBHRnVlVDRnZTF4dUlDQWdJQ0FnZG1GeUlISmxjeUE5SUc1bGR5QlRaWFFvYkhOMEtUdGNiaUFnSUNBZ0lHbG1JQ2h5WlhNdWMybDZaU0FoUFQwZ2JITjBMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUd4emRDNXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lISmxjeTVoWkdRb2JITjBXMmxkS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2NtVjBkWEp1SUhKbGN6dGNiaUFnSUNCOU8xeHVJQ0I5WEc1OUtTZ3BPMXh1Wlhod2IzSjBJR05zWVhOeklGTmxkRmR5WVhCd1pYSWdlMXh1SUNCemRHRjBhV01nWTNKbFlYUmxSbkp2YlV4cGMzUThWRDRvYkhOME9pQlVXMTBwT2lCVFpYUThWRDRnZXlCeVpYUjFjbTRnWTNKbFlYUmxVMlYwUm5KdmJVeHBjM1FvYkhOMEtUc2dmVnh1SUNCemRHRjBhV01nYUdGelBGUStLSE02SUZObGREeFVQaXdnYTJWNU9pQlVLVG9nWW05dmJHVmhiaUI3SUhKbGRIVnliaUJ6TG1oaGN5aHJaWGtwT3lCOVhHNGdJSE4wWVhScFl5QmtaV3hsZEdVOFN6NG9iVG9nVTJWMFBFcytMQ0JyT2lCTEtTQjdJRzB1WkdWc1pYUmxLR3NwT3lCOVhHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5pbXBvcnQgeyBUeXBlLCBpc0JsYW5rLCBpc1ByZXNlbnQsIENPTlNULCBDT05TVF9FWFBSLCBzdHJpbmdpZnksIGlzQXJyYXksIGlzVHlwZSwgaXNGdW5jdGlvbiwgbm9ybWFsaXplQm9vbCB9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQgeyBCYXNlRXhjZXB0aW9uIH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcbmltcG9ydCB7IE1hcFdyYXBwZXIsIExpc3RXcmFwcGVyIH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcbmltcG9ydCB7IHJlZmxlY3RvciB9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdGlvbic7XG5pbXBvcnQgeyBLZXkgfSBmcm9tICcuL2tleSc7XG5pbXBvcnQgeyBJbmplY3RNZXRhZGF0YSwgT3B0aW9uYWxNZXRhZGF0YSwgU2VsZk1ldGFkYXRhLCBIb3N0TWV0YWRhdGEsIFNraXBTZWxmTWV0YWRhdGEsIERlcGVuZGVuY3lNZXRhZGF0YSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHsgTm9Bbm5vdGF0aW9uRXJyb3IsIE1peGluZ011bHRpUHJvdmlkZXJzV2l0aFJlZ3VsYXJQcm92aWRlcnNFcnJvciwgSW52YWxpZFByb3ZpZGVyRXJyb3IgfSBmcm9tICcuL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHsgcmVzb2x2ZUZvcndhcmRSZWYgfSBmcm9tICcuL2ZvcndhcmRfcmVmJztcbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmN5IHtcbiAgICBjb25zdHJ1Y3RvcihrZXksIG9wdGlvbmFsLCBsb3dlckJvdW5kVmlzaWJpbGl0eSwgdXBwZXJCb3VuZFZpc2liaWxpdHksIHByb3BlcnRpZXMpIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMub3B0aW9uYWwgPSBvcHRpb25hbDtcbiAgICAgICAgdGhpcy5sb3dlckJvdW5kVmlzaWJpbGl0eSA9IGxvd2VyQm91bmRWaXNpYmlsaXR5O1xuICAgICAgICB0aGlzLnVwcGVyQm91bmRWaXNpYmlsaXR5ID0gdXBwZXJCb3VuZFZpc2liaWxpdHk7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tS2V5KGtleSkgeyByZXR1cm4gbmV3IERlcGVuZGVuY3koa2V5LCBmYWxzZSwgbnVsbCwgbnVsbCwgW10pOyB9XG59XG5jb25zdCBfRU1QVFlfTElTVCA9IENPTlNUX0VYUFIoW10pO1xuZXhwb3J0IGxldCBQcm92aWRlciA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2tlbiwgeyB1c2VDbGFzcywgdXNlVmFsdWUsIHVzZUV4aXN0aW5nLCB1c2VGYWN0b3J5LCBkZXBzLCBtdWx0aSB9KSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgdGhpcy51c2VDbGFzcyA9IHVzZUNsYXNzO1xuICAgICAgICB0aGlzLnVzZVZhbHVlID0gdXNlVmFsdWU7XG4gICAgICAgIHRoaXMudXNlRXhpc3RpbmcgPSB1c2VFeGlzdGluZztcbiAgICAgICAgdGhpcy51c2VGYWN0b3J5ID0gdXNlRmFjdG9yeTtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBkZXBzO1xuICAgICAgICB0aGlzLl9tdWx0aSA9IG11bHRpO1xuICAgIH1cbiAgICBnZXQgbXVsdGkoKSB7IHJldHVybiBub3JtYWxpemVCb29sKHRoaXMuX211bHRpKTsgfVxufTtcblByb3ZpZGVyID0gX19kZWNvcmF0ZShbXG4gICAgQ09OU1QoKSwgXG4gICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbT2JqZWN0LCBPYmplY3RdKVxuXSwgUHJvdmlkZXIpO1xuZXhwb3J0IGxldCBCaW5kaW5nID0gY2xhc3MgZXh0ZW5kcyBQcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IodG9rZW4sIHsgdG9DbGFzcywgdG9WYWx1ZSwgdG9BbGlhcywgdG9GYWN0b3J5LCBkZXBzLCBtdWx0aSB9KSB7XG4gICAgICAgIHN1cGVyKHRva2VuLCB7XG4gICAgICAgICAgICB1c2VDbGFzczogdG9DbGFzcyxcbiAgICAgICAgICAgIHVzZVZhbHVlOiB0b1ZhbHVlLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IHRvQWxpYXMsXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiB0b0ZhY3RvcnksXG4gICAgICAgICAgICBkZXBzOiBkZXBzLFxuICAgICAgICAgICAgbXVsdGk6IG11bHRpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgdG9DbGFzcygpIHsgcmV0dXJuIHRoaXMudXNlQ2xhc3M7IH1cbiAgICBnZXQgdG9BbGlhcygpIHsgcmV0dXJuIHRoaXMudXNlRXhpc3Rpbmc7IH1cbiAgICBnZXQgdG9GYWN0b3J5KCkgeyByZXR1cm4gdGhpcy51c2VGYWN0b3J5OyB9XG4gICAgZ2V0IHRvVmFsdWUoKSB7IHJldHVybiB0aGlzLnVzZVZhbHVlOyB9XG59O1xuQmluZGluZyA9IF9fZGVjb3JhdGUoW1xuICAgIENPTlNUKCksIFxuICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW09iamVjdCwgT2JqZWN0XSlcbl0sIEJpbmRpbmcpO1xuZXhwb3J0IGNsYXNzIFJlc29sdmVkUHJvdmlkZXJfIHtcbiAgICBjb25zdHJ1Y3RvcihrZXksIHJlc29sdmVkRmFjdG9yaWVzLCBtdWx0aVByb3ZpZGVyKSB7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnJlc29sdmVkRmFjdG9yaWVzID0gcmVzb2x2ZWRGYWN0b3JpZXM7XG4gICAgICAgIHRoaXMubXVsdGlQcm92aWRlciA9IG11bHRpUHJvdmlkZXI7XG4gICAgfVxuICAgIGdldCByZXNvbHZlZEZhY3RvcnkoKSB7IHJldHVybiB0aGlzLnJlc29sdmVkRmFjdG9yaWVzWzBdOyB9XG59XG5leHBvcnQgY2xhc3MgUmVzb2x2ZWRGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihmYWN0b3J5LCBkZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXM7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQodG9rZW4pIHtcbiAgICByZXR1cm4gbmV3IFByb3ZpZGVyQnVpbGRlcih0b2tlbik7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZSh0b2tlbiwgeyB1c2VDbGFzcywgdXNlVmFsdWUsIHVzZUV4aXN0aW5nLCB1c2VGYWN0b3J5LCBkZXBzLCBtdWx0aSB9KSB7XG4gICAgcmV0dXJuIG5ldyBQcm92aWRlcih0b2tlbiwge1xuICAgICAgICB1c2VDbGFzczogdXNlQ2xhc3MsXG4gICAgICAgIHVzZVZhbHVlOiB1c2VWYWx1ZSxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IHVzZUV4aXN0aW5nLFxuICAgICAgICB1c2VGYWN0b3J5OiB1c2VGYWN0b3J5LFxuICAgICAgICBkZXBzOiBkZXBzLFxuICAgICAgICBtdWx0aTogbXVsdGlcbiAgICB9KTtcbn1cbmV4cG9ydCBjbGFzcyBQcm92aWRlckJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKHRva2VuKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICB9XG4gICAgdG9DbGFzcyh0eXBlKSB7XG4gICAgICAgIGlmICghaXNUeXBlKHR5cGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihgVHJ5aW5nIHRvIGNyZWF0ZSBhIGNsYXNzIHByb3ZpZGVyIGJ1dCBcIiR7c3RyaW5naWZ5KHR5cGUpfVwiIGlzIG5vdCBhIGNsYXNzIWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvdmlkZXIodGhpcy50b2tlbiwgeyB1c2VDbGFzczogdHlwZSB9KTtcbiAgICB9XG4gICAgdG9WYWx1ZSh2YWx1ZSkgeyByZXR1cm4gbmV3IFByb3ZpZGVyKHRoaXMudG9rZW4sIHsgdXNlVmFsdWU6IHZhbHVlIH0pOyB9XG4gICAgdG9BbGlhcyhhbGlhc1Rva2VuKSB7XG4gICAgICAgIGlmIChpc0JsYW5rKGFsaWFzVG9rZW4pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihgQ2FuIG5vdCBhbGlhcyAke3N0cmluZ2lmeSh0aGlzLnRva2VuKX0gdG8gYSBibGFuayB2YWx1ZSFgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb3ZpZGVyKHRoaXMudG9rZW4sIHsgdXNlRXhpc3Rpbmc6IGFsaWFzVG9rZW4gfSk7XG4gICAgfVxuICAgIHRvRmFjdG9yeShmYWN0b3J5LCBkZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKGZhY3RvcnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihgVHJ5aW5nIHRvIGNyZWF0ZSBhIGZhY3RvcnkgcHJvdmlkZXIgYnV0IFwiJHtzdHJpbmdpZnkoZmFjdG9yeSl9XCIgaXMgbm90IGEgZnVuY3Rpb24hYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm92aWRlcih0aGlzLnRva2VuLCB7IHVzZUZhY3Rvcnk6IGZhY3RvcnksIGRlcHM6IGRlcGVuZGVuY2llcyB9KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUZhY3RvcnkocHJvdmlkZXIpIHtcbiAgICB2YXIgZmFjdG9yeUZuO1xuICAgIHZhciByZXNvbHZlZERlcHM7XG4gICAgaWYgKGlzUHJlc2VudChwcm92aWRlci51c2VDbGFzcykpIHtcbiAgICAgICAgdmFyIHVzZUNsYXNzID0gcmVzb2x2ZUZvcndhcmRSZWYocHJvdmlkZXIudXNlQ2xhc3MpO1xuICAgICAgICBmYWN0b3J5Rm4gPSByZWZsZWN0b3IuZmFjdG9yeSh1c2VDbGFzcyk7XG4gICAgICAgIHJlc29sdmVkRGVwcyA9IF9kZXBlbmRlbmNpZXNGb3IodXNlQ2xhc3MpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1ByZXNlbnQocHJvdmlkZXIudXNlRXhpc3RpbmcpKSB7XG4gICAgICAgIGZhY3RvcnlGbiA9IChhbGlhc0luc3RhbmNlKSA9PiBhbGlhc0luc3RhbmNlO1xuICAgICAgICByZXNvbHZlZERlcHMgPSBbRGVwZW5kZW5jeS5mcm9tS2V5KEtleS5nZXQocHJvdmlkZXIudXNlRXhpc3RpbmcpKV07XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUHJlc2VudChwcm92aWRlci51c2VGYWN0b3J5KSkge1xuICAgICAgICBmYWN0b3J5Rm4gPSBwcm92aWRlci51c2VGYWN0b3J5O1xuICAgICAgICByZXNvbHZlZERlcHMgPSBfY29uc3RydWN0RGVwZW5kZW5jaWVzKHByb3ZpZGVyLnVzZUZhY3RvcnksIHByb3ZpZGVyLmRlcGVuZGVuY2llcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmYWN0b3J5Rm4gPSAoKSA9PiBwcm92aWRlci51c2VWYWx1ZTtcbiAgICAgICAgcmVzb2x2ZWREZXBzID0gX0VNUFRZX0xJU1Q7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVzb2x2ZWRGYWN0b3J5KGZhY3RvcnlGbiwgcmVzb2x2ZWREZXBzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUHJvdmlkZXIocHJvdmlkZXIpIHtcbiAgICByZXR1cm4gbmV3IFJlc29sdmVkUHJvdmlkZXJfKEtleS5nZXQocHJvdmlkZXIudG9rZW4pLCBbcmVzb2x2ZUZhY3RvcnkocHJvdmlkZXIpXSwgcHJvdmlkZXIubXVsdGkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQcm92aWRlcnMocHJvdmlkZXJzKSB7XG4gICAgdmFyIG5vcm1hbGl6ZWQgPSBfbm9ybWFsaXplUHJvdmlkZXJzKHByb3ZpZGVycywgW10pO1xuICAgIHZhciByZXNvbHZlZCA9IG5vcm1hbGl6ZWQubWFwKHJlc29sdmVQcm92aWRlcik7XG4gICAgcmV0dXJuIE1hcFdyYXBwZXIudmFsdWVzKG1lcmdlUmVzb2x2ZWRQcm92aWRlcnMocmVzb2x2ZWQsIG5ldyBNYXAoKSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlUmVzb2x2ZWRQcm92aWRlcnMocHJvdmlkZXJzLCBub3JtYWxpemVkUHJvdmlkZXJzTWFwKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gcHJvdmlkZXJzW2ldO1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSBub3JtYWxpemVkUHJvdmlkZXJzTWFwLmdldChwcm92aWRlci5rZXkuaWQpO1xuICAgICAgICBpZiAoaXNQcmVzZW50KGV4aXN0aW5nKSkge1xuICAgICAgICAgICAgaWYgKHByb3ZpZGVyLm11bHRpUHJvdmlkZXIgIT09IGV4aXN0aW5nLm11bHRpUHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTWl4aW5nTXVsdGlQcm92aWRlcnNXaXRoUmVndWxhclByb3ZpZGVyc0Vycm9yKGV4aXN0aW5nLCBwcm92aWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvdmlkZXIubXVsdGlQcm92aWRlcikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcHJvdmlkZXIucmVzb2x2ZWRGYWN0b3JpZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcucmVzb2x2ZWRGYWN0b3JpZXMucHVzaChwcm92aWRlci5yZXNvbHZlZEZhY3Rvcmllc1tqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZFByb3ZpZGVyc01hcC5zZXQocHJvdmlkZXIua2V5LmlkLCBwcm92aWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZWRQcm92aWRlcjtcbiAgICAgICAgICAgIGlmIChwcm92aWRlci5tdWx0aVByb3ZpZGVyKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRQcm92aWRlciA9IG5ldyBSZXNvbHZlZFByb3ZpZGVyXyhwcm92aWRlci5rZXksIExpc3RXcmFwcGVyLmNsb25lKHByb3ZpZGVyLnJlc29sdmVkRmFjdG9yaWVzKSwgcHJvdmlkZXIubXVsdGlQcm92aWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZFByb3ZpZGVyID0gcHJvdmlkZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub3JtYWxpemVkUHJvdmlkZXJzTWFwLnNldChwcm92aWRlci5rZXkuaWQsIHJlc29sdmVkUHJvdmlkZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub3JtYWxpemVkUHJvdmlkZXJzTWFwO1xufVxuZnVuY3Rpb24gX25vcm1hbGl6ZVByb3ZpZGVycyhwcm92aWRlcnMsIHJlcykge1xuICAgIHByb3ZpZGVycy5mb3JFYWNoKGIgPT4ge1xuICAgICAgICBpZiAoYiBpbnN0YW5jZW9mIFR5cGUpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKHByb3ZpZGUoYiwgeyB1c2VDbGFzczogYiB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYiBpbnN0YW5jZW9mIFByb3ZpZGVyKSB7XG4gICAgICAgICAgICByZXMucHVzaChiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIF9ub3JtYWxpemVQcm92aWRlcnMoYiwgcmVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiIGluc3RhbmNlb2YgUHJvdmlkZXJCdWlsZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZFByb3ZpZGVyRXJyb3IoYi50b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZFByb3ZpZGVyRXJyb3IoYik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gX2NvbnN0cnVjdERlcGVuZGVuY2llcyhmYWN0b3J5RnVuY3Rpb24sIGRlcGVuZGVuY2llcykge1xuICAgIGlmIChpc0JsYW5rKGRlcGVuZGVuY2llcykpIHtcbiAgICAgICAgcmV0dXJuIF9kZXBlbmRlbmNpZXNGb3IoZmFjdG9yeUZ1bmN0aW9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSBkZXBlbmRlbmNpZXMubWFwKHQgPT4gW3RdKTtcbiAgICAgICAgcmV0dXJuIGRlcGVuZGVuY2llcy5tYXAodCA9PiBfZXh0cmFjdFRva2VuKGZhY3RvcnlGdW5jdGlvbiwgdCwgcGFyYW1zKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2RlcGVuZGVuY2llc0Zvcih0eXBlT3JGdW5jKSB7XG4gICAgdmFyIHBhcmFtcyA9IHJlZmxlY3Rvci5wYXJhbWV0ZXJzKHR5cGVPckZ1bmMpO1xuICAgIGlmIChpc0JsYW5rKHBhcmFtcykpXG4gICAgICAgIHJldHVybiBbXTtcbiAgICBpZiAocGFyYW1zLnNvbWUoaXNCbGFuaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IE5vQW5ub3RhdGlvbkVycm9yKHR5cGVPckZ1bmMsIHBhcmFtcyk7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXMubWFwKChwKSA9PiBfZXh0cmFjdFRva2VuKHR5cGVPckZ1bmMsIHAsIHBhcmFtcykpO1xufVxuZnVuY3Rpb24gX2V4dHJhY3RUb2tlbih0eXBlT3JGdW5jLCBtZXRhZGF0YSwgcGFyYW1zKSB7XG4gICAgdmFyIGRlcFByb3BzID0gW107XG4gICAgdmFyIHRva2VuID0gbnVsbDtcbiAgICB2YXIgb3B0aW9uYWwgPSBmYWxzZTtcbiAgICBpZiAoIWlzQXJyYXkobWV0YWRhdGEpKSB7XG4gICAgICAgIGlmIChtZXRhZGF0YSBpbnN0YW5jZW9mIEluamVjdE1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gX2NyZWF0ZURlcGVuZGVuY3kobWV0YWRhdGEudG9rZW4sIG9wdGlvbmFsLCBudWxsLCBudWxsLCBkZXBQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX2NyZWF0ZURlcGVuZGVuY3kobWV0YWRhdGEsIG9wdGlvbmFsLCBudWxsLCBudWxsLCBkZXBQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGxvd2VyQm91bmRWaXNpYmlsaXR5ID0gbnVsbDtcbiAgICB2YXIgdXBwZXJCb3VuZFZpc2liaWxpdHkgPSBudWxsO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YWRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHBhcmFtTWV0YWRhdGEgPSBtZXRhZGF0YVtpXTtcbiAgICAgICAgaWYgKHBhcmFtTWV0YWRhdGEgaW5zdGFuY2VvZiBUeXBlKSB7XG4gICAgICAgICAgICB0b2tlbiA9IHBhcmFtTWV0YWRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyYW1NZXRhZGF0YSBpbnN0YW5jZW9mIEluamVjdE1ldGFkYXRhKSB7XG4gICAgICAgICAgICB0b2tlbiA9IHBhcmFtTWV0YWRhdGEudG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyYW1NZXRhZGF0YSBpbnN0YW5jZW9mIE9wdGlvbmFsTWV0YWRhdGEpIHtcbiAgICAgICAgICAgIG9wdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJhbU1ldGFkYXRhIGluc3RhbmNlb2YgU2VsZk1ldGFkYXRhKSB7XG4gICAgICAgICAgICB1cHBlckJvdW5kVmlzaWJpbGl0eSA9IHBhcmFtTWV0YWRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyYW1NZXRhZGF0YSBpbnN0YW5jZW9mIEhvc3RNZXRhZGF0YSkge1xuICAgICAgICAgICAgdXBwZXJCb3VuZFZpc2liaWxpdHkgPSBwYXJhbU1ldGFkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmFtTWV0YWRhdGEgaW5zdGFuY2VvZiBTa2lwU2VsZk1ldGFkYXRhKSB7XG4gICAgICAgICAgICBsb3dlckJvdW5kVmlzaWJpbGl0eSA9IHBhcmFtTWV0YWRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyYW1NZXRhZGF0YSBpbnN0YW5jZW9mIERlcGVuZGVuY3lNZXRhZGF0YSkge1xuICAgICAgICAgICAgaWYgKGlzUHJlc2VudChwYXJhbU1ldGFkYXRhLnRva2VuKSkge1xuICAgICAgICAgICAgICAgIHRva2VuID0gcGFyYW1NZXRhZGF0YS50b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlcFByb3BzLnB1c2gocGFyYW1NZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9rZW4gPSByZXNvbHZlRm9yd2FyZFJlZih0b2tlbik7XG4gICAgaWYgKGlzUHJlc2VudCh0b2tlbikpIHtcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVEZXBlbmRlbmN5KHRva2VuLCBvcHRpb25hbCwgbG93ZXJCb3VuZFZpc2liaWxpdHksIHVwcGVyQm91bmRWaXNpYmlsaXR5LCBkZXBQcm9wcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgTm9Bbm5vdGF0aW9uRXJyb3IodHlwZU9yRnVuYywgcGFyYW1zKTtcbiAgICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlRGVwZW5kZW5jeSh0b2tlbiwgb3B0aW9uYWwsIGxvd2VyQm91bmRWaXNpYmlsaXR5LCB1cHBlckJvdW5kVmlzaWJpbGl0eSwgZGVwUHJvcHMpIHtcbiAgICByZXR1cm4gbmV3IERlcGVuZGVuY3koS2V5LmdldCh0b2tlbiksIG9wdGlvbmFsLCBsb3dlckJvdW5kVmlzaWJpbGl0eSwgdXBwZXJCb3VuZFZpc2liaWxpdHksIGRlcFByb3BzKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvcmUvZGkvcHJvdmlkZXIudHNcbiAqKi8iLCIndXNlIHN0cmljdCc7dmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufTtcclxudmFyIGV4Y2VwdGlvbl9oYW5kbGVyXzEgPSByZXF1aXJlKCcuL2V4Y2VwdGlvbl9oYW5kbGVyJyk7XHJcbnZhciBleGNlcHRpb25faGFuZGxlcl8yID0gcmVxdWlyZSgnLi9leGNlcHRpb25faGFuZGxlcicpO1xyXG5leHBvcnRzLkV4Y2VwdGlvbkhhbmRsZXIgPSBleGNlcHRpb25faGFuZGxlcl8yLkV4Y2VwdGlvbkhhbmRsZXI7XHJcbnZhciBCYXNlRXhjZXB0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCYXNlRXhjZXB0aW9uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQmFzZUV4Y2VwdGlvbihtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IHZvaWQgMCkgeyBtZXNzYWdlID0gXCItLVwiOyB9XHJcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcihtZXNzYWdlKSkuc3RhY2s7XHJcbiAgICB9XHJcbiAgICBCYXNlRXhjZXB0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMubWVzc2FnZTsgfTtcclxuICAgIHJldHVybiBCYXNlRXhjZXB0aW9uO1xyXG59KShFcnJvcik7XHJcbmV4cG9ydHMuQmFzZUV4Y2VwdGlvbiA9IEJhc2VFeGNlcHRpb247XHJcbi8qKlxyXG4gKiBXcmFwcyBhbiBleGNlcHRpb24gYW5kIHByb3ZpZGVzIGFkZGl0aW9uYWwgY29udGV4dCBvciBpbmZvcm1hdGlvbi5cclxuICovXHJcbnZhciBXcmFwcGVkRXhjZXB0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhXcmFwcGVkRXhjZXB0aW9uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gV3JhcHBlZEV4Y2VwdGlvbihfd3JhcHBlck1lc3NhZ2UsIF9vcmlnaW5hbEV4Y2VwdGlvbiwgX29yaWdpbmFsU3RhY2ssIF9jb250ZXh0KSB7XHJcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgX3dyYXBwZXJNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLl93cmFwcGVyTWVzc2FnZSA9IF93cmFwcGVyTWVzc2FnZTtcclxuICAgICAgICB0aGlzLl9vcmlnaW5hbEV4Y2VwdGlvbiA9IF9vcmlnaW5hbEV4Y2VwdGlvbjtcclxuICAgICAgICB0aGlzLl9vcmlnaW5hbFN0YWNrID0gX29yaWdpbmFsU3RhY2s7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IF9jb250ZXh0O1xyXG4gICAgICAgIHRoaXMuX3dyYXBwZXJTdGFjayA9IChuZXcgRXJyb3IoX3dyYXBwZXJNZXNzYWdlKSkuc3RhY2s7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JhcHBlZEV4Y2VwdGlvbi5wcm90b3R5cGUsIFwid3JhcHBlck1lc3NhZ2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fd3JhcHBlck1lc3NhZ2U7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyYXBwZWRFeGNlcHRpb24ucHJvdG90eXBlLCBcIndyYXBwZXJTdGFja1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl93cmFwcGVyU3RhY2s7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyYXBwZWRFeGNlcHRpb24ucHJvdG90eXBlLCBcIm9yaWdpbmFsRXhjZXB0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX29yaWdpbmFsRXhjZXB0aW9uOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcmFwcGVkRXhjZXB0aW9uLnByb3RvdHlwZSwgXCJvcmlnaW5hbFN0YWNrXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX29yaWdpbmFsU3RhY2s7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyYXBwZWRFeGNlcHRpb24ucHJvdG90eXBlLCBcImNvbnRleHRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY29udGV4dDsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JhcHBlZEV4Y2VwdGlvbi5wcm90b3R5cGUsIFwibWVzc2FnZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBleGNlcHRpb25faGFuZGxlcl8xLkV4Y2VwdGlvbkhhbmRsZXIuZXhjZXB0aW9uVG9TdHJpbmcodGhpcyk7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgV3JhcHBlZEV4Y2VwdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLm1lc3NhZ2U7IH07XHJcbiAgICByZXR1cm4gV3JhcHBlZEV4Y2VwdGlvbjtcclxufSkoRXJyb3IpO1xyXG5leHBvcnRzLldyYXBwZWRFeGNlcHRpb24gPSBXcmFwcGVkRXhjZXB0aW9uO1xyXG5mdW5jdGlvbiBtYWtlVHlwZUVycm9yKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKG1lc3NhZ2UpO1xyXG59XHJcbmV4cG9ydHMubWFrZVR5cGVFcnJvciA9IG1ha2VUeXBlRXJyb3I7XHJcbmZ1bmN0aW9uIHVuaW1wbGVtZW50ZWQoKSB7XHJcbiAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbigndW5pbXBsZW1lbnRlZCcpO1xyXG59XHJcbmV4cG9ydHMudW5pbXBsZW1lbnRlZCA9IHVuaW1wbGVtZW50ZWQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYaGpaWEIwYVc5dWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1GdVozVnNZWEl5TDNOeVl5OW1ZV05oWkdVdlpYaGpaWEIwYVc5dWN5NTBjeUpkTENKdVlXMWxjeUk2V3lKQ1lYTmxSWGhqWlhCMGFXOXVJaXdpUW1GelpVVjRZMlZ3ZEdsdmJpNWpiMjV6ZEhKMVkzUnZjaUlzSWtKaGMyVkZlR05sY0hScGIyNHVkRzlUZEhKcGJtY2lMQ0pYY21Gd2NHVmtSWGhqWlhCMGFXOXVJaXdpVjNKaGNIQmxaRVY0WTJWd2RHbHZiaTVqYjI1emRISjFZM1J2Y2lJc0lsZHlZWEJ3WldSRmVHTmxjSFJwYjI0dWQzSmhjSEJsY2sxbGMzTmhaMlVpTENKWGNtRndjR1ZrUlhoalpYQjBhVzl1TG5keVlYQndaWEpUZEdGamF5SXNJbGR5WVhCd1pXUkZlR05sY0hScGIyNHViM0pwWjJsdVlXeEZlR05sY0hScGIyNGlMQ0pYY21Gd2NHVmtSWGhqWlhCMGFXOXVMbTl5YVdkcGJtRnNVM1JoWTJzaUxDSlhjbUZ3Y0dWa1JYaGpaWEIwYVc5dUxtTnZiblJsZUhRaUxDSlhjbUZ3Y0dWa1JYaGpaWEIwYVc5dUxtMWxjM05oWjJVaUxDSlhjbUZ3Y0dWa1JYaGpaWEIwYVc5dUxuUnZVM1J5YVc1bklpd2liV0ZyWlZSNWNHVkZjbkp2Y2lJc0luVnVhVzF3YkdWdFpXNTBaV1FpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRXNhME5CUVN0Q0xIRkNRVUZ4UWl4RFFVRkRMRU5CUVVFN1FVRkZja1FzYTBOQlFTdENMSEZDUVVGeFFpeERRVUZETzBGQlFUZERMR2RGUVVFMlF6dEJRVVZ5UkR0SlFVRnRRMEVzYVVOQlFVdEJPMGxCUlhSRFFTeDFRa0ZCYlVKQkxFOUJRWE5DUVR0UlFVRTNRa01zZFVKQlFUWkNRU3hIUVVFM1FrRXNZMEZCTmtKQk8xRkJRM1pEUVN4clFrRkJUVUVzVDBGQlQwRXNRMEZCUTBFc1EwRkJRMEU3VVVGRVJVRXNXVUZCVDBFc1IwRkJVRUVzVDBGQlQwRXNRMEZCWlVFN1VVRkZka05CTEVsQlFVbEJMRU5CUVVOQkxFdEJRVXRCTEVkQlFVZEJMRU5CUVUxQkxFbEJRVWxCTEV0QlFVdEJMRU5CUVVOQkxFOUJRVTlCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEV0QlFVdEJMRU5CUVVOQk8wbEJReTlEUVN4RFFVRkRRVHRKUVVWRVJDeG5RMEZCVVVFc1IwRkJVa0VzWTBGQmNVSkZMRTFCUVUxQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFOUJRVTlCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzBsQlF6ZERSaXh2UWtGQlEwRTdRVUZCUkVFc1EwRkJRMEVzUVVGU1JDeEZRVUZ0UXl4TFFVRkxMRVZCVVhaRE8wRkJVbGtzY1VKQlFXRXNaMEpCVVhwQ0xFTkJRVUU3UVVGRlJEczdSMEZGUnp0QlFVTklPMGxCUVhORFJ5eHZRMEZCUzBFN1NVRkhla05CTERCQ1FVRnZRa0VzWlVGQmRVSkJMRVZCUVZWQkxHdENRVUZyUWtFc1JVRkJWVUVzWTBGQlpVRXNSVUZETlVWQkxGRkJRVk5CTzFGQlF6TkNReXhyUWtGQlRVRXNaVUZCWlVFc1EwRkJRMEVzUTBGQlEwRTdVVUZHVEVFc2IwSkJRV1ZCTEVkQlFXWkJMR1ZCUVdWQkxFTkJRVkZCTzFGQlFWVkJMSFZDUVVGclFrRXNSMEZCYkVKQkxHdENRVUZyUWtFc1EwRkJRVUU3VVVGQlZVRXNiVUpCUVdOQkxFZEJRV1JCTEdOQlFXTkJMRU5CUVVOQk8xRkJRelZGUVN4aFFVRlJRU3hIUVVGU1FTeFJRVUZSUVN4RFFVRkRRVHRSUVVVelFrRXNTVUZCU1VFc1EwRkJRMEVzWVVGQllVRXNSMEZCUjBFc1EwRkJUVUVzU1VGQlNVRXNTMEZCUzBFc1EwRkJRMEVzWlVGQlpVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNTMEZCUzBFc1EwRkJRMEU3U1VGREwwUkJMRU5CUVVOQk8wbEJSVVJFTEhOQ1FVRkpRU3cwUTBGQlkwRTdZVUZCYkVKQkxHTkJRU3RDUlN4TlFVRk5RU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hsUVVGbFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUczdPMDlCUVVGR08wbEJSVGRFUVN4elFrRkJTVUVzTUVOQlFWbEJPMkZCUVdoQ1FTeGpRVUV3UWtjc1RVRkJUVUVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzWVVGQllVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdPenRQUVVGQlNEdEpRVWQwUkVFc2MwSkJRVWxCTEN0RFFVRnBRa0U3WVVGQmNrSkJMR05CUVN0Q1NTeE5RVUZOUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVN4clFrRkJhMEpCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CT3pzN1QwRkJRVW83U1VGRmFFVkJMSE5DUVVGSlFTd3lRMEZCWVVFN1lVRkJha0pCTEdOQlFUSkNTeXhOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeGpRVUZqUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVRzN08wOUJRVUZNTzBsQlIzaEVRU3h6UWtGQlNVRXNjVU5CUVU5Qk8yRkJRVmhCTEdOQlFYRkNUU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeFJRVUZSUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVRzN08wOUJRVUZPTzBsQlJUVkRRU3h6UWtGQlNVRXNjVU5CUVU5Qk8yRkJRVmhCTEdOQlFYZENUeXhOUVVGTlFTeERRVUZEUVN4dlEwRkJaMEpCTEVOQlFVTkJMR2xDUVVGcFFrRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdPenRQUVVGQlVEdEpRVVV4UlVFc2JVTkJRVkZCTEVkQlFWSkJMR05CUVhGQ1VTeE5RVUZOUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVN4UFFVRlBRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRKUVVNM1ExSXNkVUpCUVVOQk8wRkJRVVJCTEVOQlFVTkJMRUZCZUVKRUxFVkJRWE5ETEV0QlFVc3NSVUYzUWpGRE8wRkJlRUpaTEhkQ1FVRm5RaXh0UWtGM1FqVkNMRU5CUVVFN1FVRkZSQ3gxUWtGQk9FSXNUMEZCWjBJN1NVRkROVU5UTEUxQlFVMUJMRU5CUVVOQkxFbEJRVWxCTEZOQlFWTkJMRU5CUVVOQkxFOUJRVTlCTEVOQlFVTkJMRU5CUVVOQk8wRkJRMmhEUVN4RFFVRkRRVHRCUVVabExIRkNRVUZoTEdkQ1FVVTFRaXhEUVVGQk8wRkJSVVE3U1VGRFJVTXNUVUZCVFVFc1NVRkJTVUVzWVVGQllVRXNRMEZCUTBFc1pVRkJaVUVzUTBGQlEwRXNRMEZCUTBFN1FVRkRNME5CTEVOQlFVTkJPMEZCUm1Vc2NVSkJRV0VzWjBKQlJUVkNMRU5CUVVFaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2UwVjRZMlZ3ZEdsdmJraGhibVJzWlhKOUlHWnliMjBnSnk0dlpYaGpaWEIwYVc5dVgyaGhibVJzWlhJbk8xeHVYRzVsZUhCdmNuUWdlMFY0WTJWd2RHbHZia2hoYm1Sc1pYSjlJR1p5YjIwZ0p5NHZaWGhqWlhCMGFXOXVYMmhoYm1Sc1pYSW5PMXh1WEc1bGVIQnZjblFnWTJ4aGMzTWdRbUZ6WlVWNFkyVndkR2x2YmlCbGVIUmxibVJ6SUVWeWNtOXlJSHRjYmlBZ2NIVmliR2xqSUhOMFlXTnJPaUJoYm5rN1hHNGdJR052Ym5OMGNuVmpkRzl5S0hCMVlteHBZeUJ0WlhOellXZGxPaUJ6ZEhKcGJtY2dQU0JjSWkwdFhDSXBJSHRjYmlBZ0lDQnpkWEJsY2lodFpYTnpZV2RsS1R0Y2JpQWdJQ0IwYUdsekxuTjBZV05ySUQwZ0tEeGhibmsrYm1WM0lFVnljbTl5S0cxbGMzTmhaMlVwS1M1emRHRmphenRjYmlBZ2ZWeHVYRzRnSUhSdlUzUnlhVzVuS0NrNklITjBjbWx1WnlCN0lISmxkSFZ5YmlCMGFHbHpMbTFsYzNOaFoyVTdJSDFjYm4xY2JseHVMeW9xWEc0Z0tpQlhjbUZ3Y3lCaGJpQmxlR05sY0hScGIyNGdZVzVrSUhCeWIzWnBaR1Z6SUdGa1pHbDBhVzl1WVd3Z1kyOXVkR1Y0ZENCdmNpQnBibVp2Y20xaGRHbHZiaTVjYmlBcUwxeHVaWGh3YjNKMElHTnNZWE56SUZkeVlYQndaV1JGZUdObGNIUnBiMjRnWlhoMFpXNWtjeUJGY25KdmNpQjdYRzRnSUhCeWFYWmhkR1VnWDNkeVlYQndaWEpUZEdGamF6b2dZVzU1TzF4dVhHNGdJR052Ym5OMGNuVmpkRzl5S0hCeWFYWmhkR1VnWDNkeVlYQndaWEpOWlhOellXZGxPaUJ6ZEhKcGJtY3NJSEJ5YVhaaGRHVWdYMjl5YVdkcGJtRnNSWGhqWlhCMGFXOXVMQ0J3Y21sMllYUmxJRjl2Y21sbmFXNWhiRk4wWVdOclB5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NISnBkbUYwWlNCZlkyOXVkR1Y0ZEQ4cElIdGNiaUFnSUNCemRYQmxjaWhmZDNKaGNIQmxjazFsYzNOaFoyVXBPMXh1SUNBZ0lIUm9hWE11WDNkeVlYQndaWEpUZEdGamF5QTlJQ2c4WVc1NVBtNWxkeUJGY25KdmNpaGZkM0poY0hCbGNrMWxjM05oWjJVcEtTNXpkR0ZqYXp0Y2JpQWdmVnh1WEc0Z0lHZGxkQ0IzY21Gd2NHVnlUV1Z6YzJGblpTZ3BPaUJ6ZEhKcGJtY2dleUJ5WlhSMWNtNGdkR2hwY3k1ZmQzSmhjSEJsY2sxbGMzTmhaMlU3SUgxY2JseHVJQ0JuWlhRZ2QzSmhjSEJsY2xOMFlXTnJLQ2s2SUdGdWVTQjdJSEpsZEhWeWJpQjBhR2x6TGw5M2NtRndjR1Z5VTNSaFkyczdJSDFjYmx4dVhHNGdJR2RsZENCdmNtbG5hVzVoYkVWNFkyVndkR2x2YmlncE9pQmhibmtnZXlCeVpYUjFjbTRnZEdocGN5NWZiM0pwWjJsdVlXeEZlR05sY0hScGIyNDdJSDFjYmx4dUlDQm5aWFFnYjNKcFoybHVZV3hUZEdGamF5Z3BPaUJoYm5rZ2V5QnlaWFIxY200Z2RHaHBjeTVmYjNKcFoybHVZV3hUZEdGamF6c2dmVnh1WEc1Y2JpQWdaMlYwSUdOdmJuUmxlSFFvS1RvZ1lXNTVJSHNnY21WMGRYSnVJSFJvYVhNdVgyTnZiblJsZUhRN0lIMWNibHh1SUNCblpYUWdiV1Z6YzJGblpTZ3BPaUJ6ZEhKcGJtY2dleUJ5WlhSMWNtNGdSWGhqWlhCMGFXOXVTR0Z1Wkd4bGNpNWxlR05sY0hScGIyNVViMU4wY21sdVp5aDBhR2x6S1RzZ2ZWeHVYRzRnSUhSdlUzUnlhVzVuS0NrNklITjBjbWx1WnlCN0lISmxkSFZ5YmlCMGFHbHpMbTFsYzNOaFoyVTdJSDFjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHMWhhMlZVZVhCbFJYSnliM0lvYldWemMyRm5aVDg2SUhOMGNtbHVaeWs2SUVWeWNtOXlJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QlVlWEJsUlhKeWIzSW9iV1Z6YzJGblpTazdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCMWJtbHRjR3hsYldWdWRHVmtLQ2s2SUdGdWVTQjdYRzRnSUhSb2NtOTNJRzVsZHlCQ1lYTmxSWGhqWlhCMGFXOXVLQ2QxYm1sdGNHeGxiV1Z1ZEdWa0p5azdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO3ZhciBsYW5nXzEgPSByZXF1aXJlKCdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnKTtcclxudmFyIGV4Y2VwdGlvbnNfMSA9IHJlcXVpcmUoJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucycpO1xyXG52YXIgY29sbGVjdGlvbl8xID0gcmVxdWlyZSgnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJyk7XHJcbnZhciBfQXJyYXlMb2dnZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gX0FycmF5TG9nZ2VyKCkge1xyXG4gICAgICAgIHRoaXMucmVzID0gW107XHJcbiAgICB9XHJcbiAgICBfQXJyYXlMb2dnZXIucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChzKSB7IHRoaXMucmVzLnB1c2gocyk7IH07XHJcbiAgICBfQXJyYXlMb2dnZXIucHJvdG90eXBlLmxvZ0Vycm9yID0gZnVuY3Rpb24gKHMpIHsgdGhpcy5yZXMucHVzaChzKTsgfTtcclxuICAgIF9BcnJheUxvZ2dlci5wcm90b3R5cGUubG9nR3JvdXAgPSBmdW5jdGlvbiAocykgeyB0aGlzLnJlcy5wdXNoKHMpOyB9O1xyXG4gICAgX0FycmF5TG9nZ2VyLnByb3RvdHlwZS5sb2dHcm91cEVuZCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIDtcclxuICAgIHJldHVybiBfQXJyYXlMb2dnZXI7XHJcbn0pKCk7XHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIGhvb2sgZm9yIGNlbnRyYWxpemVkIGV4Y2VwdGlvbiBoYW5kbGluZy5cclxuICpcclxuICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgYEV4Y2VwdGlvbkhhbmRsZXJgIHByaW50cyBlcnJvciBtZXNzYWdlcyB0byB0aGUgYENvbnNvbGVgLiBUb1xyXG4gKiBpbnRlcmNlcHQgZXJyb3IgaGFuZGxpbmcsXHJcbiAqIHdyaXRlIGEgY3VzdG9tIGV4Y2VwdGlvbiBoYW5kbGVyIHRoYXQgcmVwbGFjZXMgdGhpcyBkZWZhdWx0IGFzIGFwcHJvcHJpYXRlIGZvciB5b3VyIGFwcC5cclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKlxyXG4gKiBjbGFzcyBNeUV4Y2VwdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBFeGNlcHRpb25IYW5kbGVyIHtcclxuICogICBjYWxsKGVycm9yLCBzdGFja1RyYWNlID0gbnVsbCwgcmVhc29uID0gbnVsbCkge1xyXG4gKiAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdGhlIGV4Y2VwdGlvblxyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBib290c3RyYXAoTXlBcHAsIFtwcm92aWRlKEV4Y2VwdGlvbkhhbmRsZXIsIHt1c2VDbGFzczogTXlFeGNlcHRpb25IYW5kbGVyfSldKVxyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbnZhciBFeGNlcHRpb25IYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV4Y2VwdGlvbkhhbmRsZXIoX2xvZ2dlciwgX3JldGhyb3dFeGNlcHRpb24pIHtcclxuICAgICAgICBpZiAoX3JldGhyb3dFeGNlcHRpb24gPT09IHZvaWQgMCkgeyBfcmV0aHJvd0V4Y2VwdGlvbiA9IHRydWU7IH1cclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBfbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuX3JldGhyb3dFeGNlcHRpb24gPSBfcmV0aHJvd0V4Y2VwdGlvbjtcclxuICAgIH1cclxuICAgIEV4Y2VwdGlvbkhhbmRsZXIuZXhjZXB0aW9uVG9TdHJpbmcgPSBmdW5jdGlvbiAoZXhjZXB0aW9uLCBzdGFja1RyYWNlLCByZWFzb24pIHtcclxuICAgICAgICBpZiAoc3RhY2tUcmFjZSA9PT0gdm9pZCAwKSB7IHN0YWNrVHJhY2UgPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKHJlYXNvbiA9PT0gdm9pZCAwKSB7IHJlYXNvbiA9IG51bGw7IH1cclxuICAgICAgICB2YXIgbCA9IG5ldyBfQXJyYXlMb2dnZXIoKTtcclxuICAgICAgICB2YXIgZSA9IG5ldyBFeGNlcHRpb25IYW5kbGVyKGwsIGZhbHNlKTtcclxuICAgICAgICBlLmNhbGwoZXhjZXB0aW9uLCBzdGFja1RyYWNlLCByZWFzb24pO1xyXG4gICAgICAgIHJldHVybiBsLnJlcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfTtcclxuICAgIEV4Y2VwdGlvbkhhbmRsZXIucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoZXhjZXB0aW9uLCBzdGFja1RyYWNlLCByZWFzb24pIHtcclxuICAgICAgICBpZiAoc3RhY2tUcmFjZSA9PT0gdm9pZCAwKSB7IHN0YWNrVHJhY2UgPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKHJlYXNvbiA9PT0gdm9pZCAwKSB7IHJlYXNvbiA9IG51bGw7IH1cclxuICAgICAgICB2YXIgb3JpZ2luYWxFeGNlcHRpb24gPSB0aGlzLl9maW5kT3JpZ2luYWxFeGNlcHRpb24oZXhjZXB0aW9uKTtcclxuICAgICAgICB2YXIgb3JpZ2luYWxTdGFjayA9IHRoaXMuX2ZpbmRPcmlnaW5hbFN0YWNrKGV4Y2VwdGlvbik7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLl9maW5kQ29udGV4dChleGNlcHRpb24pO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2dHcm91cChcIkVYQ0VQVElPTjogXCIgKyB0aGlzLl9leHRyYWN0TWVzc2FnZShleGNlcHRpb24pKTtcclxuICAgICAgICBpZiAobGFuZ18xLmlzUHJlc2VudChzdGFja1RyYWNlKSAmJiBsYW5nXzEuaXNCbGFuayhvcmlnaW5hbFN0YWNrKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nRXJyb3IoXCJTVEFDS1RSQUNFOlwiKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZ0Vycm9yKHRoaXMuX2xvbmdTdGFja1RyYWNlKHN0YWNrVHJhY2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxhbmdfMS5pc1ByZXNlbnQocmVhc29uKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nRXJyb3IoXCJSRUFTT046IFwiICsgcmVhc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxhbmdfMS5pc1ByZXNlbnQob3JpZ2luYWxFeGNlcHRpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2dFcnJvcihcIk9SSUdJTkFMIEVYQ0VQVElPTjogXCIgKyB0aGlzLl9leHRyYWN0TWVzc2FnZShvcmlnaW5hbEV4Y2VwdGlvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGFuZ18xLmlzUHJlc2VudChvcmlnaW5hbFN0YWNrKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nRXJyb3IoXCJPUklHSU5BTCBTVEFDS1RSQUNFOlwiKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZ0Vycm9yKHRoaXMuX2xvbmdTdGFja1RyYWNlKG9yaWdpbmFsU3RhY2spKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxhbmdfMS5pc1ByZXNlbnQoY29udGV4dCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZ0Vycm9yKFwiRVJST1IgQ09OVEVYVDpcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2dFcnJvcihjb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZ0dyb3VwRW5kKCk7XHJcbiAgICAgICAgLy8gV2UgcmV0aHJvdyBleGNlcHRpb25zLCBzbyBvcGVyYXRpb25zIGxpa2UgJ2Jvb3RzdHJhcCcgd2lsbCByZXN1bHQgaW4gYW4gZXJyb3JcclxuICAgICAgICAvLyB3aGVuIGFuIGV4Y2VwdGlvbiBoYXBwZW5zLiBJZiB3ZSBkbyBub3QgcmV0aHJvdywgYm9vdHN0cmFwIHdpbGwgYWx3YXlzIHN1Y2NlZWQuXHJcbiAgICAgICAgaWYgKHRoaXMuX3JldGhyb3dFeGNlcHRpb24pXHJcbiAgICAgICAgICAgIHRocm93IGV4Y2VwdGlvbjtcclxuICAgIH07XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBFeGNlcHRpb25IYW5kbGVyLnByb3RvdHlwZS5fZXh0cmFjdE1lc3NhZ2UgPSBmdW5jdGlvbiAoZXhjZXB0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGV4Y2VwdGlvbiBpbnN0YW5jZW9mIGV4Y2VwdGlvbnNfMS5XcmFwcGVkRXhjZXB0aW9uID8gZXhjZXB0aW9uLndyYXBwZXJNZXNzYWdlIDogZXhjZXB0aW9uLnRvU3RyaW5nKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgRXhjZXB0aW9uSGFuZGxlci5wcm90b3R5cGUuX2xvbmdTdGFja1RyYWNlID0gZnVuY3Rpb24gKHN0YWNrVHJhY2UpIHtcclxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbl8xLmlzTGlzdExpa2VJdGVyYWJsZShzdGFja1RyYWNlKSA/IHN0YWNrVHJhY2Uuam9pbihcIlxcblxcbi0tLS0tYXN5bmMgZ2FwLS0tLS1cXG5cIikgOlxyXG4gICAgICAgICAgICBzdGFja1RyYWNlLnRvU3RyaW5nKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgRXhjZXB0aW9uSGFuZGxlci5wcm90b3R5cGUuX2ZpbmRDb250ZXh0ID0gZnVuY3Rpb24gKGV4Y2VwdGlvbikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghKGV4Y2VwdGlvbiBpbnN0YW5jZW9mIGV4Y2VwdGlvbnNfMS5XcmFwcGVkRXhjZXB0aW9uKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gbGFuZ18xLmlzUHJlc2VudChleGNlcHRpb24uY29udGV4dCkgPyBleGNlcHRpb24uY29udGV4dCA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5kQ29udGV4dChleGNlcHRpb24ub3JpZ2luYWxFeGNlcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyBleGNlcHRpb24uY29udGV4dCBjYW4gdGhyb3cgYW4gZXhjZXB0aW9uLiBpZiBpdCBoYXBwZW5zLCB3ZSBpZ25vcmUgdGhlIGNvbnRleHQuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBFeGNlcHRpb25IYW5kbGVyLnByb3RvdHlwZS5fZmluZE9yaWdpbmFsRXhjZXB0aW9uID0gZnVuY3Rpb24gKGV4Y2VwdGlvbikge1xyXG4gICAgICAgIGlmICghKGV4Y2VwdGlvbiBpbnN0YW5jZW9mIGV4Y2VwdGlvbnNfMS5XcmFwcGVkRXhjZXB0aW9uKSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgdmFyIGUgPSBleGNlcHRpb24ub3JpZ2luYWxFeGNlcHRpb247XHJcbiAgICAgICAgd2hpbGUgKGUgaW5zdGFuY2VvZiBleGNlcHRpb25zXzEuV3JhcHBlZEV4Y2VwdGlvbiAmJiBsYW5nXzEuaXNQcmVzZW50KGUub3JpZ2luYWxFeGNlcHRpb24pKSB7XHJcbiAgICAgICAgICAgIGUgPSBlLm9yaWdpbmFsRXhjZXB0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH07XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBFeGNlcHRpb25IYW5kbGVyLnByb3RvdHlwZS5fZmluZE9yaWdpbmFsU3RhY2sgPSBmdW5jdGlvbiAoZXhjZXB0aW9uKSB7XHJcbiAgICAgICAgaWYgKCEoZXhjZXB0aW9uIGluc3RhbmNlb2YgZXhjZXB0aW9uc18xLldyYXBwZWRFeGNlcHRpb24pKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB2YXIgZSA9IGV4Y2VwdGlvbjtcclxuICAgICAgICB2YXIgc3RhY2sgPSBleGNlcHRpb24ub3JpZ2luYWxTdGFjaztcclxuICAgICAgICB3aGlsZSAoZSBpbnN0YW5jZW9mIGV4Y2VwdGlvbnNfMS5XcmFwcGVkRXhjZXB0aW9uICYmIGxhbmdfMS5pc1ByZXNlbnQoZS5vcmlnaW5hbEV4Y2VwdGlvbikpIHtcclxuICAgICAgICAgICAgZSA9IGUub3JpZ2luYWxFeGNlcHRpb247XHJcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgZXhjZXB0aW9uc18xLldyYXBwZWRFeGNlcHRpb24gJiYgbGFuZ18xLmlzUHJlc2VudChlLm9yaWdpbmFsRXhjZXB0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sgPSBlLm9yaWdpbmFsU3RhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YWNrO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFeGNlcHRpb25IYW5kbGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLkV4Y2VwdGlvbkhhbmRsZXIgPSBFeGNlcHRpb25IYW5kbGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laWGhqWlhCMGFXOXVYMmhoYm1Sc1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKaGJtZDFiR0Z5TWk5emNtTXZabUZqWVdSbEwyVjRZMlZ3ZEdsdmJsOW9ZVzVrYkdWeUxuUnpJbDBzSW01aGJXVnpJanBiSWw5QmNuSmhlVXh2WjJkbGNpSXNJbDlCY25KaGVVeHZaMmRsY2k1amIyNXpkSEoxWTNSdmNpSXNJbDlCY25KaGVVeHZaMmRsY2k1c2IyY2lMQ0pmUVhKeVlYbE1iMmRuWlhJdWJHOW5SWEp5YjNJaUxDSmZRWEp5WVhsTWIyZG5aWEl1Ykc5blIzSnZkWEFpTENKZlFYSnlZWGxNYjJkblpYSXViRzluUjNKdmRYQkZibVFpTENKRmVHTmxjSFJwYjI1SVlXNWtiR1Z5SWl3aVJYaGpaWEIwYVc5dVNHRnVaR3hsY2k1amIyNXpkSEoxWTNSdmNpSXNJa1Y0WTJWd2RHbHZia2hoYm1Sc1pYSXVaWGhqWlhCMGFXOXVWRzlUZEhKcGJtY2lMQ0pGZUdObGNIUnBiMjVJWVc1a2JHVnlMbU5oYkd3aUxDSkZlR05sY0hScGIyNUlZVzVrYkdWeUxsOWxlSFJ5WVdOMFRXVnpjMkZuWlNJc0lrVjRZMlZ3ZEdsdmJraGhibVJzWlhJdVgyeHZibWRUZEdGamExUnlZV05sSWl3aVJYaGpaWEIwYVc5dVNHRnVaR3hsY2k1ZlptbHVaRU52Ym5SbGVIUWlMQ0pGZUdObGNIUnBiMjVJWVc1a2JHVnlMbDltYVc1a1QzSnBaMmx1WVd4RmVHTmxjSFJwYjI0aUxDSkZlR05sY0hScGIyNUlZVzVrYkdWeUxsOW1hVzVrVDNKcFoybHVZV3hUZEdGamF5SmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNjVUpCUVhkRExEQkNRVUV3UWl4RFFVRkRMRU5CUVVFN1FVRkRia1VzTWtKQlFUaERMR2REUVVGblF5eERRVUZETEVOQlFVRTdRVUZETDBVc01rSkJRVGhETEdkRFFVRm5ReXhEUVVGRExFTkJRVUU3UVVGRkwwVTdTVUZCUVVFN1VVRkRSVU1zVVVGQlIwRXNSMEZCVlVFc1JVRkJSVUVzUTBGQlEwRTdTVUZMYkVKQkxFTkJRVU5CTzBsQlNrTkVMREJDUVVGSFFTeEhRVUZJUVN4VlFVRkpRU3hEUVVGTlFTeEpRVUZWUlN4SlFVRkpRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU4yUTBZc0swSkJRVkZCTEVkQlFWSkJMRlZCUVZOQkxFTkJRVTFCTEVsQlFWVkhMRWxCUVVsQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzBsQlF6VkRTQ3dyUWtGQlVVRXNSMEZCVWtFc1ZVRkJVMEVzUTBGQlRVRXNTVUZCVlVrc1NVRkJTVUVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdTVUZETlVOS0xHdERRVUZYUVN4SFFVRllRU3hqUVVGalN5eERRVUZEUVRzN1NVRkRha0pNTEcxQ1FVRkRRVHRCUVVGRVFTeERRVUZEUVN4QlFVNUVMRWxCVFVNN1FVRkZSRHM3T3pzN096czdPenM3T3pzN096czdPenM3UjBGdlFrYzdRVUZEU0R0SlFVTkZUU3d3UWtGQmIwSkJMRTlCUVZsQkxFVkJRVlZCTEdsQ1FVRnBRMEU3VVVGQmVrTkRMR2xEUVVGNVEwRXNSMEZCZWtOQkxIZENRVUY1UTBFN1VVRkJka1JCTEZsQlFVOUJMRWRCUVZCQkxFOUJRVTlCTEVOQlFVdEJPMUZCUVZWQkxITkNRVUZwUWtFc1IwRkJha0pCTEdsQ1FVRnBRa0VzUTBGQlowSkJPMGxCUVVkQkxFTkJRVU5CTzBsQlJYaEZSQ3hyUTBGQmFVSkJMRWRCUVhoQ1FTeFZRVUY1UWtFc1UwRkJZMEVzUlVGQlJVRXNWVUZCYzBKQkxFVkJRVVZCTEUxQlFYRkNRVHRSUVVFM1EwVXNNRUpCUVhOQ1FTeEhRVUYwUWtFc2FVSkJRWE5DUVR0UlFVRkZRU3h6UWtGQmNVSkJMRWRCUVhKQ1FTeGhRVUZ4UWtFN1VVRkRjRVpCTEVsQlFVbEJMRU5CUVVOQkxFZEJRVWRCTEVsQlFVbEJMRmxCUVZsQkxFVkJRVVZCTEVOQlFVTkJPMUZCUXpOQ1FTeEpRVUZKUVN4RFFVRkRRU3hIUVVGSFFTeEpRVUZKUVN4blFrRkJaMEpCTEVOQlFVTkJMRU5CUVVOQkxFVkJRVVZCTEV0QlFVdEJMRU5CUVVOQkxFTkJRVU5CTzFGQlEzWkRRU3hEUVVGRFFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeFRRVUZUUVN4RlFVRkZRU3hWUVVGVlFTeEZRVUZGUVN4TlFVRk5RU3hEUVVGRFFTeERRVUZEUVR0UlFVTjBRMEVzVFVGQlRVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNSMEZCUjBFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFN1NVRkRNVUpCTEVOQlFVTkJPMGxCUlVSR0xDdENRVUZKUVN4SFFVRktRU3hWUVVGTFFTeFRRVUZqUVN4RlFVRkZRU3hWUVVGelFrRXNSVUZCUlVFc1RVRkJjVUpCTzFGQlFUZERSeXd3UWtGQmMwSkJMRWRCUVhSQ1FTeHBRa0ZCYzBKQk8xRkJRVVZCTEhOQ1FVRnhRa0VzUjBGQmNrSkJMR0ZCUVhGQ1FUdFJRVU5vUlVFc1NVRkJTVUVzYVVKQlFXbENRU3hIUVVGSFFTeEpRVUZKUVN4RFFVRkRRU3h6UWtGQmMwSkJMRU5CUVVOQkxGTkJRVk5CTEVOQlFVTkJMRU5CUVVOQk8xRkJReTlFUVN4SlFVRkpRU3hoUVVGaFFTeEhRVUZIUVN4SlFVRkpRU3hEUVVGRFFTeHJRa0ZCYTBKQkxFTkJRVU5CTEZOQlFWTkJMRU5CUVVOQkxFTkJRVU5CTzFGQlEzWkVRU3hKUVVGSlFTeFBRVUZQUVN4SFFVRkhRU3hKUVVGSlFTeERRVUZEUVN4WlFVRlpRU3hEUVVGRFFTeFRRVUZUUVN4RFFVRkRRU3hEUVVGRFFUdFJRVVV6UTBFc1NVRkJTVUVzUTBGQlEwRXNUMEZCVDBFc1EwRkJRMEVzVVVGQlVVRXNRMEZCUTBFc1owSkJRV05CTEVsQlFVbEJMRU5CUVVOQkxHVkJRV1ZCTEVOQlFVTkJMRk5CUVZOQkxFTkJRVWRCTEVOQlFVTkJMRU5CUVVOQk8xRkJSWFpGUVN4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4blFrRkJVMEVzUTBGQlEwRXNWVUZCVlVFc1EwRkJRMEVzU1VGQlNVRXNZMEZCVDBFc1EwRkJRMEVzWVVGQllVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1dVRkRjRVJCTEVsQlFVbEJMRU5CUVVOQkxFOUJRVTlCTEVOQlFVTkJMRkZCUVZGQkxFTkJRVU5CTEdGQlFXRkJMRU5CUVVOQkxFTkJRVU5CTzFsQlEzSkRRU3hKUVVGSlFTeERRVUZEUVN4UFFVRlBRU3hEUVVGRFFTeFJRVUZSUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVN4bFFVRmxRU3hEUVVGRFFTeFZRVUZWUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0UlFVTXhSRUVzUTBGQlEwRTdVVUZGUkVFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1owSkJRVk5CTEVOQlFVTkJMRTFCUVUxQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzFsQlEzUkNRU3hKUVVGSlFTeERRVUZEUVN4UFFVRlBRU3hEUVVGRFFTeFJRVUZSUVN4RFFVRkRRU3hoUVVGWFFTeE5RVUZSUVN4RFFVRkRRU3hEUVVGRFFUdFJRVU0zUTBFc1EwRkJRMEU3VVVGRlJFRXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNaMEpCUVZOQkxFTkJRVU5CTEdsQ1FVRnBRa0VzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdXVUZEYWtOQkxFbEJRVWxCTEVOQlFVTkJMRTlCUVU5QkxFTkJRVU5CTEZGQlFWRkJMRU5CUVVOQkxIbENRVUYxUWtFc1NVRkJTVUVzUTBGQlEwRXNaVUZCWlVFc1EwRkJRMEVzYVVKQlFXbENRU3hEUVVGSFFTeERRVUZEUVN4RFFVRkRRVHRSUVVNeFJrRXNRMEZCUTBFN1VVRkZSRUVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzWjBKQlFWTkJMRU5CUVVOQkxHRkJRV0ZCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMWxCUXpkQ1FTeEpRVUZKUVN4RFFVRkRRU3hQUVVGUFFTeERRVUZEUVN4UlFVRlJRU3hEUVVGRFFTeHpRa0ZCYzBKQkxFTkJRVU5CTEVOQlFVTkJPMWxCUXpsRFFTeEpRVUZKUVN4RFFVRkRRU3hQUVVGUFFTeERRVUZEUVN4UlFVRlJRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hsUVVGbFFTeERRVUZEUVN4aFFVRmhRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRSUVVNM1JFRXNRMEZCUTBFN1VVRkZSRUVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzWjBKQlFWTkJMRU5CUVVOQkxFOUJRVTlCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMWxCUTNaQ1FTeEpRVUZKUVN4RFFVRkRRU3hQUVVGUFFTeERRVUZEUVN4UlFVRlJRU3hEUVVGRFFTeG5Ra0ZCWjBKQkxFTkJRVU5CTEVOQlFVTkJPMWxCUTNoRFFTeEpRVUZKUVN4RFFVRkRRU3hQUVVGUFFTeERRVUZEUVN4UlFVRlJRU3hEUVVGRFFTeFBRVUZQUVN4RFFVRkRRU3hEUVVGRFFUdFJRVU5xUTBFc1EwRkJRMEU3VVVGRlJFRXNTVUZCU1VFc1EwRkJRMEVzVDBGQlQwRXNRMEZCUTBFc1YwRkJWMEVzUlVGQlJVRXNRMEZCUTBFN1VVRkZNMEpCTEdkR1FVRm5Sa0U3VVVGRGFFWkJMR3RHUVVGclJrRTdVVUZEYkVaQkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMR2xDUVVGcFFrRXNRMEZCUTBFN1dVRkJRMEVzVFVGQlRVRXNVMEZCVTBFc1EwRkJRMEU3U1VGRE9VTkJMRU5CUVVOQk8wbEJSVVJJTEdkQ1FVRm5Ra0U3U1VGRGFFSkJMREJEUVVGbFFTeEhRVUZtUVN4VlFVRm5Ra0VzVTBGQlkwRTdVVUZETlVKSkxFMUJRVTFCTEVOQlFVTkJMRk5CUVZOQkxGbEJRVmxCTERaQ1FVRm5Ra0VzUjBGQlIwRXNVMEZCVTBFc1EwRkJRMEVzWTBGQlkwRXNSMEZCUjBFc1UwRkJVMEVzUTBGQlEwRXNVVUZCVVVFc1JVRkJSVUVzUTBGQlEwRTdTVUZEYWtkQkxFTkJRVU5CTzBsQlJVUktMR2RDUVVGblFrRTdTVUZEYUVKQkxEQkRRVUZsUVN4SFFVRm1RU3hWUVVGblFrRXNWVUZCWlVFN1VVRkROMEpMTEUxQlFVMUJMRU5CUVVOQkxDdENRVUZyUWtFc1EwRkJRMEVzVlVGQlZVRXNRMEZCUTBFc1IwRkJWMEVzVlVGQlYwRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNNa0pCUVRKQ1FTeERRVUZEUVR0WlFVTnlSRUVzVlVGQlZVRXNRMEZCUTBFc1VVRkJVVUVzUlVGQlJVRXNRMEZCUTBFN1NVRkRhRVZCTEVOQlFVTkJPMGxCUlVSTUxHZENRVUZuUWtFN1NVRkRhRUpCTEhWRFFVRlpRU3hIUVVGYVFTeFZRVUZoUVN4VFFVRmpRVHRSUVVONlFrMHNTVUZCU1VFc1EwRkJRMEU3V1VGRFNFRXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzVTBGQlUwRXNXVUZCV1VFc05rSkJRV2RDUVN4RFFVRkRRU3hEUVVGRFFUdG5Ra0ZCUTBFc1RVRkJUVUVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEU3V1VGRE1VUkJMRTFCUVUxQkxFTkJRVU5CTEdkQ1FVRlRRU3hEUVVGRFFTeFRRVUZUUVN4RFFVRkRRU3hQUVVGUFFTeERRVUZEUVN4SFFVRkhRU3hUUVVGVFFTeERRVUZEUVN4UFFVRlBRVHRuUWtGRGFrSkJMRWxCUVVsQkxFTkJRVU5CTEZsQlFWbEJMRU5CUVVOQkxGTkJRVk5CTEVOQlFVTkJMR2xDUVVGcFFrRXNRMEZCUTBFc1EwRkJRMEU3VVVGRGRrWkJMRU5CUVVWQk8xRkJRVUZCTEV0QlFVdEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMWxCUTFoQkxHdEdRVUZyUmtFN1dVRkRiRVpCTEUxQlFVMUJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJPMUZCUTJSQkxFTkJRVU5CTzBsQlEwaEJMRU5CUVVOQk8wbEJSVVJPTEdkQ1FVRm5Ra0U3U1VGRGFFSkJMR2xFUVVGelFrRXNSMEZCZEVKQkxGVkJRWFZDUVN4VFFVRmpRVHRSUVVOdVEwOHNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzVTBGQlUwRXNXVUZCV1VFc05rSkJRV2RDUVN4RFFVRkRRU3hEUVVGRFFUdFpRVUZEUVN4TlFVRk5RU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRVHRSUVVVeFJFRXNTVUZCU1VFc1EwRkJRMEVzUjBGQlIwRXNVMEZCVTBFc1EwRkJRMEVzYVVKQlFXbENRU3hEUVVGRFFUdFJRVU53UTBFc1QwRkJUMEVzUTBGQlEwRXNXVUZCV1VFc05rSkJRV2RDUVN4SlFVRkpRU3huUWtGQlUwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNhVUpCUVdsQ1FTeERRVUZEUVN4RlFVRkZRU3hEUVVGRFFUdFpRVU4yUlVFc1EwRkJRMEVzUjBGQlIwRXNRMEZCUTBFc1EwRkJRMEVzYVVKQlFXbENRU3hEUVVGRFFUdFJRVU14UWtFc1EwRkJRMEU3VVVGRlJFRXNUVUZCVFVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1NVRkRXRUVzUTBGQlEwRTdTVUZGUkZBc1owSkJRV2RDUVR0SlFVTm9Ra0VzTmtOQlFXdENRU3hIUVVGc1FrRXNWVUZCYlVKQkxGTkJRV05CTzFGQlF5OUNVU3hGUVVGRlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4VFFVRlRRU3haUVVGWlFTdzJRa0ZCWjBKQkxFTkJRVU5CTEVOQlFVTkJPMWxCUVVOQkxFMUJRVTFCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTzFGQlJURkVRU3hKUVVGSlFTeERRVUZEUVN4SFFVRkhRU3hUUVVGVFFTeERRVUZEUVR0UlFVTnNRa0VzU1VGQlNVRXNTMEZCUzBFc1IwRkJSMEVzVTBGQlUwRXNRMEZCUTBFc1lVRkJZVUVzUTBGQlEwRTdVVUZEY0VOQkxFOUJRVTlCTEVOQlFVTkJMRmxCUVZsQkxEWkNRVUZuUWtFc1NVRkJTVUVzWjBKQlFWTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMR2xDUVVGcFFrRXNRMEZCUTBFc1JVRkJSVUVzUTBGQlEwRTdXVUZEZGtWQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFTkJRVU5CTEdsQ1FVRnBRa0VzUTBGQlEwRTdXVUZEZUVKQkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEZsQlFWbEJMRFpDUVVGblFrRXNTVUZCU1VFc1owSkJRVk5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEdsQ1FVRnBRa0VzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdaMEpCUTNCRlFTeExRVUZMUVN4SFFVRkhRU3hEUVVGRFFTeERRVUZEUVN4aFFVRmhRU3hEUVVGRFFUdFpRVU14UWtFc1EwRkJRMEU3VVVGRFNFRXNRMEZCUTBFN1VVRkZSRUVzVFVGQlRVRXNRMEZCUTBFc1MwRkJTMEVzUTBGQlEwRTdTVUZEWmtFc1EwRkJRMEU3U1VGRFNGSXNkVUpCUVVOQk8wRkJRVVJCTEVOQlFVTkJMRUZCYWtkRUxFbEJhVWRETzBGQmFrZFpMSGRDUVVGblFpeHRRa0ZwUnpWQ0xFTkJRVUVpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZTJselVISmxjMlZ1ZEN3Z2FYTkNiR0Z1YXl3Z2NISnBiblI5SUdaeWIyMGdKMkZ1WjNWc1lYSXlMM055WXk5bVlXTmhaR1V2YkdGdVp5YzdYRzVwYlhCdmNuUWdlMEpoYzJWRmVHTmxjSFJwYjI0c0lGZHlZWEJ3WldSRmVHTmxjSFJwYjI1OUlHWnliMjBnSjJGdVozVnNZWEl5TDNOeVl5OW1ZV05oWkdVdlpYaGpaWEIwYVc5dWN5YzdYRzVwYlhCdmNuUWdlMHhwYzNSWGNtRndjR1Z5TENCcGMweHBjM1JNYVd0bFNYUmxjbUZpYkdWOUlHWnliMjBnSjJGdVozVnNZWEl5TDNOeVl5OW1ZV05oWkdVdlkyOXNiR1ZqZEdsdmJpYzdYRzVjYm1Oc1lYTnpJRjlCY25KaGVVeHZaMmRsY2lCN1hHNGdJSEpsY3pvZ1lXNTVXMTBnUFNCYlhUdGNiaUFnYkc5bktITTZJR0Z1ZVNrNklIWnZhV1FnZXlCMGFHbHpMbkpsY3k1d2RYTm9LSE1wT3lCOVhHNGdJR3h2WjBWeWNtOXlLSE02SUdGdWVTazZJSFp2YVdRZ2V5QjBhR2x6TG5KbGN5NXdkWE5vS0hNcE95QjlYRzRnSUd4dlowZHliM1Z3S0hNNklHRnVlU2s2SUhadmFXUWdleUIwYUdsekxuSmxjeTV3ZFhOb0tITXBPeUI5WEc0Z0lHeHZaMGR5YjNWd1JXNWtLQ2w3ZlR0Y2JuMWNibHh1THlvcVhHNGdLaUJRY205MmFXUmxjeUJoSUdodmIyc2dabTl5SUdObGJuUnlZV3hwZW1Wa0lHVjRZMlZ3ZEdsdmJpQm9ZVzVrYkdsdVp5NWNiaUFxWEc0Z0tpQlVhR1VnWkdWbVlYVnNkQ0JwYlhCc1pXMWxiblJoZEdsdmJpQnZaaUJnUlhoalpYQjBhVzl1U0dGdVpHeGxjbUFnY0hKcGJuUnpJR1Z5Y205eUlHMWxjM05oWjJWeklIUnZJSFJvWlNCZ1EyOXVjMjlzWldBdUlGUnZYRzRnS2lCcGJuUmxjbU5sY0hRZ1pYSnliM0lnYUdGdVpHeHBibWNzWEc0Z0tpQjNjbWwwWlNCaElHTjFjM1J2YlNCbGVHTmxjSFJwYjI0Z2FHRnVaR3hsY2lCMGFHRjBJSEpsY0d4aFkyVnpJSFJvYVhNZ1pHVm1ZWFZzZENCaGN5QmhjSEJ5YjNCeWFXRjBaU0JtYjNJZ2VXOTFjaUJoY0hBdVhHNGdLbHh1SUNvZ0l5TWpJRVY0WVcxd2JHVmNiaUFxWEc0Z0tpQmdZR0JxWVhaaGMyTnlhWEIwWEc0Z0tseHVJQ29nWTJ4aGMzTWdUWGxGZUdObGNIUnBiMjVJWVc1a2JHVnlJR2x0Y0d4bGJXVnVkSE1nUlhoalpYQjBhVzl1U0dGdVpHeGxjaUI3WEc0Z0tpQWdJR05oYkd3b1pYSnliM0lzSUhOMFlXTnJWSEpoWTJVZ1BTQnVkV3hzTENCeVpXRnpiMjRnUFNCdWRXeHNLU0I3WEc0Z0tpQWdJQ0FnTHk4Z1pHOGdjMjl0WlhSb2FXNW5JSGRwZEdnZ2RHaGxJR1Y0WTJWd2RHbHZibHh1SUNvZ0lDQjlYRzRnS2lCOVhHNGdLbHh1SUNvZ1ltOXZkSE4wY21Gd0tFMTVRWEJ3TENCYmNISnZkbWxrWlNoRmVHTmxjSFJwYjI1SVlXNWtiR1Z5TENCN2RYTmxRMnhoYzNNNklFMTVSWGhqWlhCMGFXOXVTR0Z1Wkd4bGNuMHBYU2xjYmlBcVhHNGdLaUJnWUdCY2JpQXFMMXh1Wlhod2IzSjBJR05zWVhOeklFVjRZMlZ3ZEdsdmJraGhibVJzWlhJZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtbDJZWFJsSUY5c2IyZG5aWEk2SUdGdWVTd2djSEpwZG1GMFpTQmZjbVYwYUhKdmQwVjRZMlZ3ZEdsdmJqb2dZbTl2YkdWaGJpQTlJSFJ5ZFdVcElIdDlYRzVjYmlBZ2MzUmhkR2xqSUdWNFkyVndkR2x2YmxSdlUzUnlhVzVuS0dWNFkyVndkR2x2YmpvZ1lXNTVMQ0J6ZEdGamExUnlZV05sT2lCaGJua2dQU0J1ZFd4c0xDQnlaV0Z6YjI0NklITjBjbWx1WnlBOUlHNTFiR3dwT2lCemRISnBibWNnZTF4dUlDQWdJSFpoY2lCc0lEMGdibVYzSUY5QmNuSmhlVXh2WjJkbGNpZ3BPMXh1SUNBZ0lIWmhjaUJsSUQwZ2JtVjNJRVY0WTJWd2RHbHZia2hoYm1Sc1pYSW9iQ3dnWm1Gc2MyVXBPMXh1SUNBZ0lHVXVZMkZzYkNobGVHTmxjSFJwYjI0c0lITjBZV05yVkhKaFkyVXNJSEpsWVhOdmJpazdYRzRnSUNBZ2NtVjBkWEp1SUd3dWNtVnpMbXB2YVc0b1hDSmNYRzVjSWlrN1hHNGdJSDFjYmx4dUlDQmpZV3hzS0dWNFkyVndkR2x2YmpvZ1lXNTVMQ0J6ZEdGamExUnlZV05sT2lCaGJua2dQU0J1ZFd4c0xDQnlaV0Z6YjI0NklITjBjbWx1WnlBOUlHNTFiR3dwT2lCMmIybGtJSHRjYmlBZ0lDQjJZWElnYjNKcFoybHVZV3hGZUdObGNIUnBiMjRnUFNCMGFHbHpMbDltYVc1a1QzSnBaMmx1WVd4RmVHTmxjSFJwYjI0b1pYaGpaWEIwYVc5dUtUdGNiaUFnSUNCMllYSWdiM0pwWjJsdVlXeFRkR0ZqYXlBOUlIUm9hWE11WDJacGJtUlBjbWxuYVc1aGJGTjBZV05yS0dWNFkyVndkR2x2YmlrN1hHNGdJQ0FnZG1GeUlHTnZiblJsZUhRZ1BTQjBhR2x6TGw5bWFXNWtRMjl1ZEdWNGRDaGxlR05sY0hScGIyNHBPMXh1WEc0Z0lDQWdkR2hwY3k1ZmJHOW5aMlZ5TG14dlowZHliM1Z3S0dCRldFTkZVRlJKVDA0NklDUjdkR2hwY3k1ZlpYaDBjbUZqZEUxbGMzTmhaMlVvWlhoalpYQjBhVzl1S1gxZ0tUdGNibHh1SUNBZ0lHbG1JQ2hwYzFCeVpYTmxiblFvYzNSaFkydFVjbUZqWlNrZ0ppWWdhWE5DYkdGdWF5aHZjbWxuYVc1aGJGTjBZV05yS1NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmYkc5bloyVnlMbXh2WjBWeWNtOXlLRndpVTFSQlEwdFVVa0ZEUlRwY0lpazdYRzRnSUNBZ0lDQjBhR2x6TGw5c2IyZG5aWEl1Ykc5blJYSnliM0lvZEdocGN5NWZiRzl1WjFOMFlXTnJWSEpoWTJVb2MzUmhZMnRVY21GalpTa3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2hwYzFCeVpYTmxiblFvY21WaGMyOXVLU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWZiRzluWjJWeUxteHZaMFZ5Y205eUtHQlNSVUZUVDA0NklDUjdjbVZoYzI5dWZXQXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2hwYzFCeVpYTmxiblFvYjNKcFoybHVZV3hGZUdObGNIUnBiMjRwS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDlzYjJkblpYSXViRzluUlhKeWIzSW9ZRTlTU1VkSlRrRk1JRVZZUTBWUVZFbFBUam9nSkh0MGFHbHpMbDlsZUhSeVlXTjBUV1Z6YzJGblpTaHZjbWxuYVc1aGJFVjRZMlZ3ZEdsdmJpbDlZQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0dselVISmxjMlZ1ZENodmNtbG5hVzVoYkZOMFlXTnJLU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWZiRzluWjJWeUxteHZaMFZ5Y205eUtGd2lUMUpKUjBsT1FVd2dVMVJCUTB0VVVrRkRSVHBjSWlrN1hHNGdJQ0FnSUNCMGFHbHpMbDlzYjJkblpYSXViRzluUlhKeWIzSW9kR2hwY3k1ZmJHOXVaMU4wWVdOclZISmhZMlVvYjNKcFoybHVZV3hUZEdGamF5a3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2hwYzFCeVpYTmxiblFvWTI5dWRHVjRkQ2twSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYMnh2WjJkbGNpNXNiMmRGY25KdmNpaGNJa1ZTVWs5U0lFTlBUbFJGV0ZRNlhDSXBPMXh1SUNBZ0lDQWdkR2hwY3k1ZmJHOW5aMlZ5TG14dlowVnljbTl5S0dOdmJuUmxlSFFwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFJvYVhNdVgyeHZaMmRsY2k1c2IyZEhjbTkxY0VWdVpDZ3BPMXh1WEc0Z0lDQWdMeThnVjJVZ2NtVjBhSEp2ZHlCbGVHTmxjSFJwYjI1ekxDQnpieUJ2Y0dWeVlYUnBiMjV6SUd4cGEyVWdKMkp2YjNSemRISmhjQ2NnZDJsc2JDQnlaWE4xYkhRZ2FXNGdZVzRnWlhKeWIzSmNiaUFnSUNBdkx5QjNhR1Z1SUdGdUlHVjRZMlZ3ZEdsdmJpQm9ZWEJ3Wlc1ekxpQkpaaUIzWlNCa2J5QnViM1FnY21WMGFISnZkeXdnWW05dmRITjBjbUZ3SUhkcGJHd2dZV3gzWVhseklITjFZMk5sWldRdVhHNGdJQ0FnYVdZZ0tIUm9hWE11WDNKbGRHaHliM2RGZUdObGNIUnBiMjRwSUhSb2NtOTNJR1Y0WTJWd2RHbHZianRjYmlBZ2ZWeHVYRzRnSUM4cUtpQkFhVzUwWlhKdVlXd2dLaTljYmlBZ1gyVjRkSEpoWTNSTlpYTnpZV2RsS0dWNFkyVndkR2x2YmpvZ1lXNTVLVG9nYzNSeWFXNW5JSHRjYmlBZ0lDQnlaWFIxY200Z1pYaGpaWEIwYVc5dUlHbHVjM1JoYm1ObGIyWWdWM0poY0hCbFpFVjRZMlZ3ZEdsdmJpQS9JR1Y0WTJWd2RHbHZiaTUzY21Gd2NHVnlUV1Z6YzJGblpTQTZJR1Y0WTJWd2RHbHZiaTUwYjFOMGNtbHVaeWdwTzF4dUlDQjlYRzVjYmlBZ0x5b3FJRUJwYm5SbGNtNWhiQ0FxTDF4dUlDQmZiRzl1WjFOMFlXTnJWSEpoWTJVb2MzUmhZMnRVY21GalpUb2dZVzU1S1RvZ1lXNTVJSHRjYmlBZ0lDQnlaWFIxY200Z2FYTk1hWE4wVEdsclpVbDBaWEpoWW14bEtITjBZV05yVkhKaFkyVXBJRDhnS0R4aGJubGJYVDV6ZEdGamExUnlZV05sS1M1cWIybHVLRndpWEZ4dVhGeHVMUzB0TFMxaGMzbHVZeUJuWVhBdExTMHRMVnhjYmx3aUtTQTZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4wWVdOclZISmhZMlV1ZEc5VGRISnBibWNvS1R0Y2JpQWdmVnh1WEc0Z0lDOHFLaUJBYVc1MFpYSnVZV3dnS2k5Y2JpQWdYMlpwYm1SRGIyNTBaWGgwS0dWNFkyVndkR2x2YmpvZ1lXNTVLVG9nWVc1NUlIdGNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdhV1lnS0NFb1pYaGpaWEIwYVc5dUlHbHVjM1JoYm1ObGIyWWdWM0poY0hCbFpFVjRZMlZ3ZEdsdmJpa3BJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQWdJQ0FnY21WMGRYSnVJR2x6VUhKbGMyVnVkQ2hsZUdObGNIUnBiMjR1WTI5dWRHVjRkQ2tnUHlCbGVHTmxjSFJwYjI0dVkyOXVkR1Y0ZENBNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDJacGJtUkRiMjUwWlhoMEtHVjRZMlZ3ZEdsdmJpNXZjbWxuYVc1aGJFVjRZMlZ3ZEdsdmJpazdYRzRnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdMeThnWlhoalpYQjBhVzl1TG1OdmJuUmxlSFFnWTJGdUlIUm9jbTkzSUdGdUlHVjRZMlZ3ZEdsdmJpNGdhV1lnYVhRZ2FHRndjR1Z1Y3l3Z2QyVWdhV2R1YjNKbElIUm9aU0JqYjI1MFpYaDBMbHh1SUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlvcUlFQnBiblJsY201aGJDQXFMMXh1SUNCZlptbHVaRTl5YVdkcGJtRnNSWGhqWlhCMGFXOXVLR1Y0WTJWd2RHbHZiam9nWVc1NUtUb2dZVzU1SUh0Y2JpQWdJQ0JwWmlBb0lTaGxlR05sY0hScGIyNGdhVzV6ZEdGdVkyVnZaaUJYY21Gd2NHVmtSWGhqWlhCMGFXOXVLU2tnY21WMGRYSnVJRzUxYkd3N1hHNWNiaUFnSUNCMllYSWdaU0E5SUdWNFkyVndkR2x2Ymk1dmNtbG5hVzVoYkVWNFkyVndkR2x2Ymp0Y2JpQWdJQ0IzYUdsc1pTQW9aU0JwYm5OMFlXNWpaVzltSUZkeVlYQndaV1JGZUdObGNIUnBiMjRnSmlZZ2FYTlFjbVZ6Wlc1MEtHVXViM0pwWjJsdVlXeEZlR05sY0hScGIyNHBLU0I3WEc0Z0lDQWdJQ0JsSUQwZ1pTNXZjbWxuYVc1aGJFVjRZMlZ3ZEdsdmJqdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWlR0Y2JpQWdmVnh1WEc0Z0lDOHFLaUJBYVc1MFpYSnVZV3dnS2k5Y2JpQWdYMlpwYm1SUGNtbG5hVzVoYkZOMFlXTnJLR1Y0WTJWd2RHbHZiam9nWVc1NUtUb2dZVzU1SUh0Y2JpQWdJQ0JwWmlBb0lTaGxlR05sY0hScGIyNGdhVzV6ZEdGdVkyVnZaaUJYY21Gd2NHVmtSWGhqWlhCMGFXOXVLU2tnY21WMGRYSnVJRzUxYkd3N1hHNWNiaUFnSUNCMllYSWdaU0E5SUdWNFkyVndkR2x2Ymp0Y2JpQWdJQ0IyWVhJZ2MzUmhZMnNnUFNCbGVHTmxjSFJwYjI0dWIzSnBaMmx1WVd4VGRHRmphenRjYmlBZ0lDQjNhR2xzWlNBb1pTQnBibk4wWVc1alpXOW1JRmR5WVhCd1pXUkZlR05sY0hScGIyNGdKaVlnYVhOUWNtVnpaVzUwS0dVdWIzSnBaMmx1WVd4RmVHTmxjSFJwYjI0cEtTQjdYRzRnSUNBZ0lDQmxJRDBnWlM1dmNtbG5hVzVoYkVWNFkyVndkR2x2Ymp0Y2JpQWdJQ0FnSUdsbUlDaGxJR2x1YzNSaGJtTmxiMllnVjNKaGNIQmxaRVY0WTJWd2RHbHZiaUFtSmlCcGMxQnlaWE5sYm5Rb1pTNXZjbWxuYVc1aGJFVjRZMlZ3ZEdsdmJpa3BJSHRjYmlBZ0lDQWdJQ0FnYzNSaFkyc2dQU0JsTG05eWFXZHBibUZzVTNSaFkyczdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhOMFlXTnJPMXh1SUNCOVhHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9uX2hhbmRsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO3ZhciByZWZsZWN0b3JfMSA9IHJlcXVpcmUoJy4vcmVmbGVjdG9yJyk7XHJcbnZhciByZWZsZWN0b3JfMiA9IHJlcXVpcmUoJy4vcmVmbGVjdG9yJyk7XHJcbmV4cG9ydHMuUmVmbGVjdG9yID0gcmVmbGVjdG9yXzIuUmVmbGVjdG9yO1xyXG5leHBvcnRzLlJlZmxlY3Rpb25JbmZvID0gcmVmbGVjdG9yXzIuUmVmbGVjdGlvbkluZm87XHJcbnZhciByZWZsZWN0aW9uX2NhcGFiaWxpdGllc18xID0gcmVxdWlyZSgnLi9yZWZsZWN0aW9uX2NhcGFiaWxpdGllcycpO1xyXG4vKipcclxuICogVGhlIHtAbGluayBSZWZsZWN0b3J9IHVzZWQgaW50ZXJuYWxseSBpbiBBbmd1bGFyIHRvIGFjY2VzcyBtZXRhZGF0YVxyXG4gKiBhYm91dCBzeW1ib2xzLlxyXG4gKi9cclxuZXhwb3J0cy5yZWZsZWN0b3IgPSBuZXcgcmVmbGVjdG9yXzEuUmVmbGVjdG9yKG5ldyByZWZsZWN0aW9uX2NhcGFiaWxpdGllc18xLlJlZmxlY3Rpb25DYXBhYmlsaXRpZXMoKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtVm1iR1ZqZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1GdVozVnNZWEl5TDNOeVl5OWpiM0psTDNKbFpteGxZM1JwYjI0dmNtVm1iR1ZqZEdsdmJpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZGUVN3d1FrRkJkMElzWVVGQllTeERRVUZETEVOQlFVRTdRVUZEZEVNc01FSkJRWGRETEdGQlFXRXNRMEZCUXp0QlFVRTVReXd3UTBGQlV6dEJRVUZGTEc5RVFVRnRRenRCUVVOMFJDeDNRMEZCY1VNc01rSkJRVEpDTEVOQlFVTXNRMEZCUVR0QlFVVnFSVHM3TzBkQlIwYzdRVUZEVVN4cFFrRkJVeXhIUVVGSExFbEJRVWtzY1VKQlFWTXNRMEZCUXl4SlFVRkpMR2RFUVVGelFpeEZRVUZGTEVOQlFVTXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN1ZIbHdaU3dnYVhOUWNtVnpaVzUwZlNCbWNtOXRJQ2RoYm1kMWJHRnlNaTl6Y21NdlptRmpZV1JsTDJ4aGJtY25PMXh1YVcxd2IzSjBJSHRNYVhOMFYzSmhjSEJsY24wZ1puSnZiU0FuWVc1bmRXeGhjakl2YzNKakwyWmhZMkZrWlM5amIyeHNaV04wYVc5dUp6dGNibWx0Y0c5eWRDQjdVbVZtYkdWamRHOXlmU0JtY205dElDY3VMM0psWm14bFkzUnZjaWM3WEc1bGVIQnZjblFnZTFKbFpteGxZM1J2Y2l3Z1VtVm1iR1ZqZEdsdmJrbHVabTk5SUdaeWIyMGdKeTR2Y21WbWJHVmpkRzl5Snp0Y2JtbHRjRzl5ZENCN1VtVm1iR1ZqZEdsdmJrTmhjR0ZpYVd4cGRHbGxjMzBnWm5KdmJTQW5MaTl5Wldac1pXTjBhVzl1WDJOaGNHRmlhV3hwZEdsbGN5YzdYRzVjYmk4cUtseHVJQ29nVkdobElIdEFiR2x1YXlCU1pXWnNaV04wYjNKOUlIVnpaV1FnYVc1MFpYSnVZV3hzZVNCcGJpQkJibWQxYkdGeUlIUnZJR0ZqWTJWemN5QnRaWFJoWkdGMFlWeHVJQ29nWVdKdmRYUWdjM2x0WW05c2N5NWNiaUFxTDF4dVpYaHdiM0owSUhaaGNpQnlaV1pzWldOMGIzSWdQU0J1WlhjZ1VtVm1iR1ZqZEc5eUtHNWxkeUJTWldac1pXTjBhVzl1UTJGd1lXSnBiR2wwYVdWektDa3BPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7dmFyIGxhbmdfMSA9IHJlcXVpcmUoJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZycpO1xyXG52YXIgZXhjZXB0aW9uc18xID0gcmVxdWlyZSgnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJyk7XHJcbnZhciBjb2xsZWN0aW9uXzEgPSByZXF1aXJlKCdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nKTtcclxuLyoqXHJcbiAqIFJlZmxlY3RpdmUgaW5mb3JtYXRpb24gYWJvdXQgYSBzeW1ib2wsIGluY2x1ZGluZyBhbm5vdGF0aW9ucywgaW50ZXJmYWNlcywgYW5kIG90aGVyIG1ldGFkYXRhLlxyXG4gKi9cclxudmFyIFJlZmxlY3Rpb25JbmZvID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlZmxlY3Rpb25JbmZvKGFubm90YXRpb25zLCBwYXJhbWV0ZXJzLCBmYWN0b3J5LCBpbnRlcmZhY2VzLCBwcm9wTWV0YWRhdGEpIHtcclxuICAgICAgICB0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgICAgIHRoaXMuaW50ZXJmYWNlcyA9IGludGVyZmFjZXM7XHJcbiAgICAgICAgdGhpcy5wcm9wTWV0YWRhdGEgPSBwcm9wTWV0YWRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVmbGVjdGlvbkluZm87XHJcbn0pKCk7XHJcbmV4cG9ydHMuUmVmbGVjdGlvbkluZm8gPSBSZWZsZWN0aW9uSW5mbztcclxuLyoqXHJcbiAqIFByb3ZpZGVzIGFjY2VzcyB0byByZWZsZWN0aW9uIGRhdGEgYWJvdXQgc3ltYm9scy4gVXNlZCBpbnRlcm5hbGx5IGJ5IEFuZ3VsYXJcclxuICogdG8gcG93ZXIgZGVwZW5kZW5jeSBpbmplY3Rpb24gYW5kIGNvbXBpbGF0aW9uLlxyXG4gKi9cclxudmFyIFJlZmxlY3RvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWZsZWN0b3IocmVmbGVjdGlvbkNhcGFiaWxpdGllcykge1xyXG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgICAgICB0aGlzLl9pbmplY3RhYmxlSW5mbyA9IG5ldyBjb2xsZWN0aW9uXzEuTWFwKCk7XHJcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgICAgIHRoaXMuX2dldHRlcnMgPSBuZXcgY29sbGVjdGlvbl8xLk1hcCgpO1xyXG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgICAgICB0aGlzLl9zZXR0ZXJzID0gbmV3IGNvbGxlY3Rpb25fMS5NYXAoKTtcclxuICAgICAgICAvKiogQGludGVybmFsICovXHJcbiAgICAgICAgdGhpcy5fbWV0aG9kcyA9IG5ldyBjb2xsZWN0aW9uXzEuTWFwKCk7XHJcbiAgICAgICAgdGhpcy5fdXNlZEtleXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcyA9IHJlZmxlY3Rpb25DYXBhYmlsaXRpZXM7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0b3IucHJvdG90eXBlLmlzUmVmbGVjdGlvbkVuYWJsZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMuaXNSZWZsZWN0aW9uRW5hYmxlZCgpOyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYXVzZXMgYHRoaXNgIHJlZmxlY3RvciB0byB0cmFjayBrZXlzIHVzZWQgdG8gYWNjZXNzXHJcbiAgICAgKiB7QGxpbmsgUmVmbGVjdGlvbkluZm99IG9iamVjdHMuXHJcbiAgICAgKi9cclxuICAgIFJlZmxlY3Rvci5wcm90b3R5cGUudHJhY2tVc2FnZSA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fdXNlZEtleXMgPSBuZXcgY29sbGVjdGlvbl8xLlNldCgpOyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0cyB0eXBlcyBmb3Igd2hpY2ggcmVmbGVjdGlvbiBpbmZvcm1hdGlvbiB3YXMgbm90IHJlcXVlc3RlZCBzaW5jZVxyXG4gICAgICoge0BsaW5rICN0cmFja1VzYWdlfSB3YXMgY2FsbGVkLiBUaGlzIGxpc3QgY291bGQgbGF0ZXIgYmUgYXVkaXRlZCBhc1xyXG4gICAgICogcG90ZW50aWFsIGRlYWQgY29kZS5cclxuICAgICAqL1xyXG4gICAgUmVmbGVjdG9yLnByb3RvdHlwZS5saXN0VW51c2VkS2V5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLl91c2VkS2V5cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zXzEuQmFzZUV4Y2VwdGlvbignVXNhZ2UgdHJhY2tpbmcgaXMgZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFsbFR5cGVzID0gY29sbGVjdGlvbl8xLk1hcFdyYXBwZXIua2V5cyh0aGlzLl9pbmplY3RhYmxlSW5mbyk7XHJcbiAgICAgICAgcmV0dXJuIGFsbFR5cGVzLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAhY29sbGVjdGlvbl8xLlNldFdyYXBwZXIuaGFzKF90aGlzLl91c2VkS2V5cywga2V5KTsgfSk7XHJcbiAgICB9O1xyXG4gICAgUmVmbGVjdG9yLnByb3RvdHlwZS5yZWdpc3RlckZ1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMsIGZ1bmNJbmZvKSB7XHJcbiAgICAgICAgdGhpcy5faW5qZWN0YWJsZUluZm8uc2V0KGZ1bmMsIGZ1bmNJbmZvKTtcclxuICAgIH07XHJcbiAgICBSZWZsZWN0b3IucHJvdG90eXBlLnJlZ2lzdGVyVHlwZSA9IGZ1bmN0aW9uICh0eXBlLCB0eXBlSW5mbykge1xyXG4gICAgICAgIHRoaXMuX2luamVjdGFibGVJbmZvLnNldCh0eXBlLCB0eXBlSW5mbyk7XHJcbiAgICB9O1xyXG4gICAgUmVmbGVjdG9yLnByb3RvdHlwZS5yZWdpc3RlckdldHRlcnMgPSBmdW5jdGlvbiAoZ2V0dGVycykgeyBfbWVyZ2VNYXBzKHRoaXMuX2dldHRlcnMsIGdldHRlcnMpOyB9O1xyXG4gICAgUmVmbGVjdG9yLnByb3RvdHlwZS5yZWdpc3RlclNldHRlcnMgPSBmdW5jdGlvbiAoc2V0dGVycykgeyBfbWVyZ2VNYXBzKHRoaXMuX3NldHRlcnMsIHNldHRlcnMpOyB9O1xyXG4gICAgUmVmbGVjdG9yLnByb3RvdHlwZS5yZWdpc3Rlck1ldGhvZHMgPSBmdW5jdGlvbiAobWV0aG9kcykgeyBfbWVyZ2VNYXBzKHRoaXMuX21ldGhvZHMsIG1ldGhvZHMpOyB9O1xyXG4gICAgUmVmbGVjdG9yLnByb3RvdHlwZS5mYWN0b3J5ID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbnNSZWZsZWN0aW9uSW5mbyh0eXBlKSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5fZ2V0UmVmbGVjdGlvbkluZm8odHlwZSkuZmFjdG9yeTtcclxuICAgICAgICAgICAgcmV0dXJuIGxhbmdfMS5pc1ByZXNlbnQocmVzKSA/IHJlcyA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLmZhY3RvcnkodHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlZmxlY3Rvci5wcm90b3R5cGUucGFyYW1ldGVycyA9IGZ1bmN0aW9uICh0eXBlT3JGdW5jKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luamVjdGFibGVJbmZvLmhhcyh0eXBlT3JGdW5jKSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5fZ2V0UmVmbGVjdGlvbkluZm8odHlwZU9yRnVuYykucGFyYW1ldGVycztcclxuICAgICAgICAgICAgcmV0dXJuIGxhbmdfMS5pc1ByZXNlbnQocmVzKSA/IHJlcyA6IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5wYXJhbWV0ZXJzKHR5cGVPckZ1bmMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWZsZWN0b3IucHJvdG90eXBlLmFubm90YXRpb25zID0gZnVuY3Rpb24gKHR5cGVPckZ1bmMpIHtcclxuICAgICAgICBpZiAodGhpcy5faW5qZWN0YWJsZUluZm8uaGFzKHR5cGVPckZ1bmMpKSB7XHJcbiAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLl9nZXRSZWZsZWN0aW9uSW5mbyh0eXBlT3JGdW5jKS5hbm5vdGF0aW9ucztcclxuICAgICAgICAgICAgcmV0dXJuIGxhbmdfMS5pc1ByZXNlbnQocmVzKSA/IHJlcyA6IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5hbm5vdGF0aW9ucyh0eXBlT3JGdW5jKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVmbGVjdG9yLnByb3RvdHlwZS5wcm9wTWV0YWRhdGEgPSBmdW5jdGlvbiAodHlwZU9yRnVuYykge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbmplY3RhYmxlSW5mby5oYXModHlwZU9yRnVuYykpIHtcclxuICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMuX2dldFJlZmxlY3Rpb25JbmZvKHR5cGVPckZ1bmMpLnByb3BNZXRhZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIGxhbmdfMS5pc1ByZXNlbnQocmVzKSA/IHJlcyA6IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5wcm9wTWV0YWRhdGEodHlwZU9yRnVuYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlZmxlY3Rvci5wcm90b3R5cGUuaW50ZXJmYWNlcyA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luamVjdGFibGVJbmZvLmhhcyh0eXBlKSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5fZ2V0UmVmbGVjdGlvbkluZm8odHlwZSkuaW50ZXJmYWNlcztcclxuICAgICAgICAgICAgcmV0dXJuIGxhbmdfMS5pc1ByZXNlbnQocmVzKSA/IHJlcyA6IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5pbnRlcmZhY2VzKHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWZsZWN0b3IucHJvdG90eXBlLmdldHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dldHRlcnMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXR0ZXJzLmdldChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMuZ2V0dGVyKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWZsZWN0b3IucHJvdG90eXBlLnNldHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRlcnMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXR0ZXJzLmdldChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMuc2V0dGVyKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWZsZWN0b3IucHJvdG90eXBlLm1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21ldGhvZHMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZXRob2RzLmdldChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMubWV0aG9kKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBSZWZsZWN0b3IucHJvdG90eXBlLl9nZXRSZWZsZWN0aW9uSW5mbyA9IGZ1bmN0aW9uICh0eXBlT3JGdW5jKSB7XHJcbiAgICAgICAgaWYgKGxhbmdfMS5pc1ByZXNlbnQodGhpcy5fdXNlZEtleXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZWRLZXlzLmFkZCh0eXBlT3JGdW5jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luamVjdGFibGVJbmZvLmdldCh0eXBlT3JGdW5jKTtcclxuICAgIH07XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBSZWZsZWN0b3IucHJvdG90eXBlLl9jb250YWluc1JlZmxlY3Rpb25JbmZvID0gZnVuY3Rpb24gKHR5cGVPckZ1bmMpIHsgcmV0dXJuIHRoaXMuX2luamVjdGFibGVJbmZvLmhhcyh0eXBlT3JGdW5jKTsgfTtcclxuICAgIFJlZmxlY3Rvci5wcm90b3R5cGUuaW1wb3J0VXJpID0gZnVuY3Rpb24gKHR5cGUpIHsgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5pbXBvcnRVcmkodHlwZSk7IH07XHJcbiAgICByZXR1cm4gUmVmbGVjdG9yO1xyXG59KSgpO1xyXG5leHBvcnRzLlJlZmxlY3RvciA9IFJlZmxlY3RvcjtcclxuZnVuY3Rpb24gX21lcmdlTWFwcyh0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgY29sbGVjdGlvbl8xLlN0cmluZ01hcFdyYXBwZXIuZm9yRWFjaChjb25maWcsIGZ1bmN0aW9uICh2LCBrKSB7IHJldHVybiB0YXJnZXQuc2V0KGssIHYpOyB9KTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbVZtYkdWamRHOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVlXNW5kV3hoY2pJdmMzSmpMMk52Y21VdmNtVm1iR1ZqZEdsdmJpOXlaV1pzWldOMGIzSXVkSE1pWFN3aWJtRnRaWE1pT2xzaVVtVm1iR1ZqZEdsdmJrbHVabThpTENKU1pXWnNaV04wYVc5dVNXNW1ieTVqYjI1emRISjFZM1J2Y2lJc0lsSmxabXhsWTNSdmNpSXNJbEpsWm14bFkzUnZjaTVqYjI1emRISjFZM1J2Y2lJc0lsSmxabXhsWTNSdmNpNXBjMUpsWm14bFkzUnBiMjVGYm1GaWJHVmtJaXdpVW1WbWJHVmpkRzl5TG5SeVlXTnJWWE5oWjJVaUxDSlNaV1pzWldOMGIzSXViR2x6ZEZWdWRYTmxaRXRsZVhNaUxDSlNaV1pzWldOMGIzSXVjbVZuYVhOMFpYSkdkVzVqZEdsdmJpSXNJbEpsWm14bFkzUnZjaTV5WldkcGMzUmxjbFI1Y0dVaUxDSlNaV1pzWldOMGIzSXVjbVZuYVhOMFpYSkhaWFIwWlhKeklpd2lVbVZtYkdWamRHOXlMbkpsWjJsemRHVnlVMlYwZEdWeWN5SXNJbEpsWm14bFkzUnZjaTV5WldkcGMzUmxjazFsZEdodlpITWlMQ0pTWldac1pXTjBiM0l1Wm1GamRHOXllU0lzSWxKbFpteGxZM1J2Y2k1d1lYSmhiV1YwWlhKeklpd2lVbVZtYkdWamRHOXlMbUZ1Ym05MFlYUnBiMjV6SWl3aVVtVm1iR1ZqZEc5eUxuQnliM0JOWlhSaFpHRjBZU0lzSWxKbFpteGxZM1J2Y2k1cGJuUmxjbVpoWTJWeklpd2lVbVZtYkdWamRHOXlMbWRsZEhSbGNpSXNJbEpsWm14bFkzUnZjaTV6WlhSMFpYSWlMQ0pTWldac1pXTjBiM0l1YldWMGFHOWtJaXdpVW1WbWJHVmpkRzl5TGw5blpYUlNaV1pzWldOMGFXOXVTVzVtYnlJc0lsSmxabXhsWTNSdmNpNWZZMjl1ZEdGcGJuTlNaV1pzWldOMGFXOXVTVzVtYnlJc0lsSmxabXhsWTNSdmNpNXBiWEJ2Y25SVmNta2lMQ0pmYldWeVoyVk5ZWEJ6SWwwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4eFFrRkJlVU1zTUVKQlFUQkNMRU5CUVVNc1EwRkJRVHRCUVVOd1JTd3lRa0ZCT0VNc1owTkJRV2RETEVOQlFVTXNRMEZCUVR0QlFVTXZSU3d5UWtGUFR5eG5RMEZCWjBNc1EwRkJReXhEUVVGQk8wRkJUWGhET3p0SFFVVkhPMEZCUTBnN1NVRkRSVUVzZDBKQlFXMUNRU3hYUVVGdFFrRXNSVUZCVTBFc1ZVRkJiMEpCTEVWQlFWTkJMRTlCUVd0Q1FTeEZRVU16UlVFc1ZVRkJhMEpCTEVWQlFWTkJMRmxCUVhGRFFUdFJRVVJvUlVNc1owSkJRVmRCTEVkQlFWaEJMRmRCUVZkQkxFTkJRVkZCTzFGQlFWTkJMR1ZCUVZWQkxFZEJRVlpCTEZWQlFWVkJMRU5CUVZWQk8xRkJRVk5CTEZsQlFVOUJMRWRCUVZCQkxFOUJRVTlCTEVOQlFWZEJPMUZCUXpORlFTeGxRVUZWUVN4SFFVRldRU3hWUVVGVlFTeERRVUZSUVR0UlFVRlRRU3hwUWtGQldVRXNSMEZCV2tFc1dVRkJXVUVzUTBGQmVVSkJPMGxCUVVkQkxFTkJRVU5CTzBsQlEzcEdSQ3h4UWtGQlEwRTdRVUZCUkVFc1EwRkJRMEVzUVVGSVJDeEpRVWRETzBGQlNGa3NjMEpCUVdNc2FVSkJSekZDTEVOQlFVRTdRVUZGUkRzN08wZEJSMGM3UVVGRFNEdEpRV0ZGUlN4dFFrRkJXVUVzYzBKQlFYTkVRVHRSUVZwc1JVTXNaMEpCUVdkQ1FUdFJRVU5vUWtFc2IwSkJRV1ZCTEVkQlFVZEJMRWxCUVVsQkxHZENRVUZIUVN4RlFVRjFRa0VzUTBGQlEwRTdVVUZEYWtSQkxHZENRVUZuUWtFN1VVRkRhRUpCTEdGQlFWRkJMRWRCUVVkQkxFbEJRVWxCTEdkQ1FVRkhRU3hGUVVGdlFrRXNRMEZCUTBFN1VVRkRka05CTEdkQ1FVRm5Ra0U3VVVGRGFFSkJMR0ZCUVZGQkxFZEJRVWRCTEVsQlFVbEJMR2RDUVVGSFFTeEZRVUZ2UWtFc1EwRkJRMEU3VVVGRGRrTkJMR2RDUVVGblFrRTdVVUZEYUVKQkxHRkJRVkZCTEVkQlFVZEJMRWxCUVVsQkxHZENRVUZIUVN4RlFVRnZRa0VzUTBGQlEwRTdVVUZOY2tOQkxFbEJRVWxCTEVOQlFVTkJMRk5CUVZOQkxFZEJRVWRCTEVsQlFVbEJMRU5CUVVOQk8xRkJRM1JDUVN4SlFVRkpRU3hEUVVGRFFTeHpRa0ZCYzBKQkxFZEJRVWRCTEhOQ1FVRnpRa0VzUTBGQlEwRTdTVUZEZGtSQkxFTkJRVU5CTzBsQlJVUkVMSFZEUVVGdFFrRXNSMEZCYmtKQkxHTkJRV2xEUlN4TlFVRk5RU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3h6UWtGQmMwSkJMRU5CUVVOQkxHMUNRVUZ0UWtFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3U1VGRk5VWkdPenM3VDBGSFIwRTdTVUZEU0VFc09FSkJRVlZCTEVkQlFWWkJMR05CUVhGQ1J5eEpRVUZKUVN4RFFVRkRRU3hUUVVGVFFTeEhRVUZIUVN4SlFVRkpRU3huUWtGQlIwRXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1NVRkZiRVJJT3pzN08wOUJTVWRCTzBsQlEwaEJMR3REUVVGalFTeEhRVUZrUVR0UlFVRkJTU3hwUWtGTlEwRTdVVUZNUTBFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNVMEZCVTBFc1NVRkJTVUVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdXVUZETTBKQkxFMUJRVTFCTEVsQlFVbEJMREJDUVVGaFFTeERRVUZEUVN3MFFrRkJORUpCTEVOQlFVTkJMRU5CUVVOQk8xRkJRM2hFUVN4RFFVRkRRVHRSUVVORVFTeEpRVUZKUVN4UlFVRlJRU3hIUVVGSFFTeDFRa0ZCVlVFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNaVUZCWlVFc1EwRkJRMEVzUTBGQlEwRTdVVUZEY2tSQkxFMUJRVTFCTEVOQlFVTkJMRkZCUVZGQkxFTkJRVU5CTEUxQlFVMUJMRU5CUVVOQkxGVkJRVUZCTEVkQlFVZEJMRWxCUVVsQkxFOUJRVUZCTEVOQlFVTkJMSFZDUVVGVlFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFTeExRVUZKUVN4RFFVRkRRU3hUUVVGVFFTeEZRVUZGUVN4SFFVRkhRU3hEUVVGRFFTeEZRVUZ3UTBFc1EwRkJiME5CTEVOQlFVTkJMRU5CUVVOQk8wbEJRM1JGUVN4RFFVRkRRVHRKUVVWRVNpeHZRMEZCWjBKQkxFZEJRV2hDUVN4VlFVRnBRa0VzU1VGQlkwRXNSVUZCUlVFc1VVRkJkMEpCTzFGQlEzWkVTeXhKUVVGSlFTeERRVUZEUVN4bFFVRmxRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hKUVVGSlFTeEZRVUZGUVN4UlFVRlJRU3hEUVVGRFFTeERRVUZEUVR0SlFVTXpRMEVzUTBGQlEwRTdTVUZGUkV3c1owTkJRVmxCTEVkQlFWcEJMRlZCUVdGQkxFbEJRVlZCTEVWQlFVVkJMRkZCUVhkQ1FUdFJRVU12UTAwc1NVRkJTVUVzUTBGQlEwRXNaVUZCWlVFc1EwRkJRMEVzUjBGQlIwRXNRMEZCUTBFc1NVRkJTVUVzUlVGQlJVRXNVVUZCVVVFc1EwRkJRMEVzUTBGQlEwRTdTVUZETTBOQkxFTkJRVU5CTzBsQlJVUk9MRzFEUVVGbFFTeEhRVUZtUVN4VlFVRm5Ra0VzVDBGQmEwTkJMRWxCUVZWUExGVkJRVlZCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEZGQlFWRkJMRVZCUVVWQkxFOUJRVTlCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMGxCUldwSFVDeHRRMEZCWlVFc1IwRkJaa0VzVlVGQlowSkJMRTlCUVd0RFFTeEpRVUZWVVN4VlFVRlZRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hSUVVGUlFTeEZRVUZGUVN4UFFVRlBRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdEpRVVZxUjFJc2JVTkJRV1ZCTEVkQlFXWkJMRlZCUVdkQ1FTeFBRVUZyUTBFc1NVRkJWVk1zVlVGQlZVRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNVVUZCVVVFc1JVRkJSVUVzVDBGQlQwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1NVRkZha2RVTERKQ1FVRlBRU3hIUVVGUVFTeFZRVUZSUVN4SlFVRlZRVHRSUVVOb1FsVXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzZFVKQlFYVkNRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRaUVVOMlEwRXNTVUZCU1VFc1IwRkJSMEVzUjBGQlIwRXNTVUZCU1VFc1EwRkJRMEVzYTBKQlFXdENRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hEUVVGRFFTeFBRVUZQUVN4RFFVRkRRVHRaUVVOb1JFRXNUVUZCVFVFc1EwRkJRMEVzWjBKQlFWTkJMRU5CUVVOQkxFZEJRVWRCTEVOQlFVTkJMRWRCUVVkQkxFZEJRVWRCTEVkQlFVZEJMRWxCUVVsQkxFTkJRVU5CTzFGQlEzSkRRU3hEUVVGRFFUdFJRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVR0WlFVTk9RU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeHpRa0ZCYzBKQkxFTkJRVU5CTEU5QlFVOUJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRU5CUVVOQk8xRkJRMjVFUVN4RFFVRkRRVHRKUVVOSVFTeERRVUZEUVR0SlFVVkVWaXc0UWtGQlZVRXNSMEZCVmtFc1ZVRkJWMEVzVlVGQmQwSkJPMUZCUTJwRFZ5eEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hsUVVGbFFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFTeFZRVUZWUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRaUVVONlEwRXNTVUZCU1VFc1IwRkJSMEVzUjBGQlIwRXNTVUZCU1VFc1EwRkJRMEVzYTBKQlFXdENRU3hEUVVGRFFTeFZRVUZWUVN4RFFVRkRRU3hEUVVGRFFTeFZRVUZWUVN4RFFVRkRRVHRaUVVONlJFRXNUVUZCVFVFc1EwRkJRMEVzWjBKQlFWTkJMRU5CUVVOQkxFZEJRVWRCTEVOQlFVTkJMRWRCUVVkQkxFZEJRVWRCTEVkQlFVZEJMRVZCUVVWQkxFTkJRVU5CTzFGQlEyNURRU3hEUVVGRFFUdFJRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVR0WlFVTk9RU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeHpRa0ZCYzBKQkxFTkJRVU5CTEZWQlFWVkJMRU5CUVVOQkxGVkJRVlZCTEVOQlFVTkJMRU5CUVVOQk8xRkJRelZFUVN4RFFVRkRRVHRKUVVOSVFTeERRVUZEUVR0SlFVVkVXQ3dyUWtGQlYwRXNSMEZCV0VFc1ZVRkJXVUVzVlVGQmQwSkJPMUZCUTJ4RFdTeEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hsUVVGbFFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFTeFZRVUZWUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRaUVVONlEwRXNTVUZCU1VFc1IwRkJSMEVzUjBGQlIwRXNTVUZCU1VFc1EwRkJRMEVzYTBKQlFXdENRU3hEUVVGRFFTeFZRVUZWUVN4RFFVRkRRU3hEUVVGRFFTeFhRVUZYUVN4RFFVRkRRVHRaUVVNeFJFRXNUVUZCVFVFc1EwRkJRMEVzWjBKQlFWTkJMRU5CUVVOQkxFZEJRVWRCTEVOQlFVTkJMRWRCUVVkQkxFZEJRVWRCTEVkQlFVZEJMRVZCUVVWQkxFTkJRVU5CTzFGQlEyNURRU3hEUVVGRFFUdFJRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVR0WlFVTk9RU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeHpRa0ZCYzBKQkxFTkJRVU5CTEZkQlFWZEJMRU5CUVVOQkxGVkJRVlZCTEVOQlFVTkJMRU5CUVVOQk8xRkJRemRFUVN4RFFVRkRRVHRKUVVOSVFTeERRVUZEUVR0SlFVVkVXaXhuUTBGQldVRXNSMEZCV2tFc1ZVRkJZVUVzVlVGQmQwSkJPMUZCUTI1RFlTeEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hsUVVGbFFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFTeFZRVUZWUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRaUVVONlEwRXNTVUZCU1VFc1IwRkJSMEVzUjBGQlIwRXNTVUZCU1VFc1EwRkJRMEVzYTBKQlFXdENRU3hEUVVGRFFTeFZRVUZWUVN4RFFVRkRRU3hEUVVGRFFTeFpRVUZaUVN4RFFVRkRRVHRaUVVNelJFRXNUVUZCVFVFc1EwRkJRMEVzWjBKQlFWTkJMRU5CUVVOQkxFZEJRVWRCTEVOQlFVTkJMRWRCUVVkQkxFZEJRVWRCTEVkQlFVZEJMRVZCUVVWQkxFTkJRVU5CTzFGQlEyNURRU3hEUVVGRFFUdFJRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVR0WlFVTk9RU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeHpRa0ZCYzBKQkxFTkJRVU5CTEZsQlFWbEJMRU5CUVVOQkxGVkJRVlZCTEVOQlFVTkJMRU5CUVVOQk8xRkJRemxFUVN4RFFVRkRRVHRKUVVOSVFTeERRVUZEUVR0SlFVVkVZaXc0UWtGQlZVRXNSMEZCVmtFc1ZVRkJWMEVzU1VGQlZVRTdVVUZEYmtKakxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMR1ZCUVdWQkxFTkJRVU5CTEVkQlFVZEJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMWxCUTI1RFFTeEpRVUZKUVN4SFFVRkhRU3hIUVVGSFFTeEpRVUZKUVN4RFFVRkRRU3hyUWtGQmEwSkJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRU5CUVVOQkxGVkJRVlZCTEVOQlFVTkJPMWxCUTI1RVFTeE5RVUZOUVN4RFFVRkRRU3huUWtGQlUwRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNSMEZCUjBFc1IwRkJSMEVzUjBGQlIwRXNSVUZCUlVFc1EwRkJRMEU3VVVGRGJrTkJMRU5CUVVOQk8xRkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTzFsQlEwNUJMRTFCUVUxQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxITkNRVUZ6UWtFc1EwRkJRMEVzVlVGQlZVRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFN1VVRkRkRVJCTEVOQlFVTkJPMGxCUTBoQkxFTkJRVU5CTzBsQlJVUmtMREJDUVVGTlFTeEhRVUZPUVN4VlFVRlBRU3hKUVVGWlFUdFJRVU5xUW1Vc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNVVUZCVVVFc1EwRkJRMEVzUjBGQlIwRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdXVUZETlVKQkxFMUJRVTFCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEZGQlFWRkJMRU5CUVVOQkxFZEJRVWRCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEVOQlFVTkJPMUZCUTJwRFFTeERRVUZEUVR0UlFVRkRRU3hKUVVGSlFTeERRVUZEUVN4RFFVRkRRVHRaUVVOT1FTeE5RVUZOUVN4RFFVRkRRU3hKUVVGSlFTeERRVUZEUVN4elFrRkJjMEpCTEVOQlFVTkJMRTFCUVUxQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTzFGQlEyeEVRU3hEUVVGRFFUdEpRVU5JUVN4RFFVRkRRVHRKUVVWRVppd3dRa0ZCVFVFc1IwRkJUa0VzVlVGQlQwRXNTVUZCV1VFN1VVRkRha0puUWl4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeFJRVUZSUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdFpRVU0xUWtFc1RVRkJUVUVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzVVVGQlVVRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzUTBGQlEwRTdVVUZEYWtOQkxFTkJRVU5CTzFGQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEVOQlFVTkJPMWxCUTA1QkxFMUJRVTFCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEhOQ1FVRnpRa0VzUTBGQlEwRXNUVUZCVFVFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEU3VVVGRGJFUkJMRU5CUVVOQk8wbEJRMGhCTEVOQlFVTkJPMGxCUlVSb1Fpd3dRa0ZCVFVFc1IwRkJUa0VzVlVGQlQwRXNTVUZCV1VFN1VVRkRha0pwUWl4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeFJRVUZSUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdFpRVU0xUWtFc1RVRkJUVUVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzVVVGQlVVRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzUTBGQlEwRTdVVUZEYWtOQkxFTkJRVU5CTzFGQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEVOQlFVTkJPMWxCUTA1QkxFMUJRVTFCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEhOQ1FVRnpRa0VzUTBGQlEwRXNUVUZCVFVFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEU3VVVGRGJFUkJMRU5CUVVOQk8wbEJRMGhCTEVOQlFVTkJPMGxCUlVScVFpeG5Ra0ZCWjBKQk8wbEJRMmhDUVN4elEwRkJhMEpCTEVkQlFXeENRU3hWUVVGdFFrRXNWVUZCVlVFN1VVRkRNMEpyUWl4RlFVRkZRU3hEUVVGRFFTeERRVUZEUVN4blFrRkJVMEVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzVTBGQlUwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1dVRkRPVUpCTEVsQlFVbEJMRU5CUVVOQkxGTkJRVk5CTEVOQlFVTkJMRWRCUVVkQkxFTkJRVU5CTEZWQlFWVkJMRU5CUVVOQkxFTkJRVU5CTzFGQlEycERRU3hEUVVGRFFUdFJRVU5FUVN4TlFVRk5RU3hEUVVGRFFTeEpRVUZKUVN4RFFVRkRRU3hsUVVGbFFTeERRVUZEUVN4SFFVRkhRU3hEUVVGRFFTeFZRVUZWUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU01UTBFc1EwRkJRMEU3U1VGRlJHeENMR2RDUVVGblFrRTdTVUZEYUVKQkxESkRRVUYxUWtFc1IwRkJka0pCTEZWQlFYZENRU3hWUVVGVlFTeEpRVUZKYlVJc1RVRkJUVUVzUTBGQlEwRXNTVUZCU1VFc1EwRkJRMEVzWlVGQlpVRXNRMEZCUTBFc1IwRkJSMEVzUTBGQlEwRXNWVUZCVlVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3U1VGRmNFWnVRaXcyUWtGQlUwRXNSMEZCVkVFc1ZVRkJWVUVzU1VGQlZVRXNTVUZCV1c5Q0xFMUJRVTFCTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEhOQ1FVRnpRa0VzUTBGQlEwRXNVMEZCVTBFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1NVRkRka1p3UWl4blFrRkJRMEU3UVVGQlJFRXNRMEZCUTBFc1FVRjBTVVFzU1VGelNVTTdRVUYwU1Zrc2FVSkJRVk1zV1VGelNYSkNMRU5CUVVFN1FVRkZSQ3h2UWtGQmIwSXNUVUZCY1VJc1JVRkJSU3hOUVVGcFF6dEpRVU14UlhGQ0xEWkNRVUZuUWtFc1EwRkJRMEVzVDBGQlQwRXNRMEZCUTBFc1RVRkJUVUVzUlVGQlJVRXNWVUZCUTBFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFc1NVRkJTMEVzVDBGQlFVRXNUVUZCVFVFc1EwRkJRMEVzUjBGQlIwRXNRMEZCUTBFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzUlVGQmFFSkJMRU5CUVdkQ1FTeERRVUZEUVN4RFFVRkRRVHRCUVVNdlJFRXNRMEZCUTBFaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2UxUjVjR1VzSUdselVISmxjMlZ1ZEN3Z2MzUnlhVzVuYVdaNWZTQm1jbTl0SUNkaGJtZDFiR0Z5TWk5emNtTXZabUZqWVdSbEwyeGhibWNuTzF4dWFXMXdiM0owSUh0Q1lYTmxSWGhqWlhCMGFXOXVMQ0JYY21Gd2NHVmtSWGhqWlhCMGFXOXVmU0JtY205dElDZGhibWQxYkdGeU1pOXpjbU12Wm1GallXUmxMMlY0WTJWd2RHbHZibk1uTzF4dWFXMXdiM0owSUh0Y2JpQWdUR2x6ZEZkeVlYQndaWElzWEc0Z0lFMWhjQ3hjYmlBZ1RXRndWM0poY0hCbGNpeGNiaUFnVTJWMExGeHVJQ0JUWlhSWGNtRndjR1Z5TEZ4dUlDQlRkSEpwYm1kTllYQlhjbUZ3Y0dWeVhHNTlJR1p5YjIwZ0oyRnVaM1ZzWVhJeUwzTnlZeTltWVdOaFpHVXZZMjlzYkdWamRHbHZiaWM3WEc1cGJYQnZjblFnZTFObGRIUmxja1p1TENCSFpYUjBaWEpHYml3Z1RXVjBhRzlrUm01OUlHWnliMjBnSnk0dmRIbHdaWE1uTzF4dWFXMXdiM0owSUh0UWJHRjBabTl5YlZKbFpteGxZM1JwYjI1RFlYQmhZbWxzYVhScFpYTjlJR1p5YjIwZ0p5NHZjR3hoZEdadmNtMWZjbVZtYkdWamRHbHZibDlqWVhCaFltbHNhWFJwWlhNbk8xeHVaWGh3YjNKMElIdFRaWFIwWlhKR2Jpd2dSMlYwZEdWeVJtNHNJRTFsZEdodlpFWnVmU0JtY205dElDY3VMM1I1Y0dWekp6dGNibVY0Y0c5eWRDQjdVR3hoZEdadmNtMVNaV1pzWldOMGFXOXVRMkZ3WVdKcGJHbDBhV1Z6ZlNCbWNtOXRJQ2N1TDNCc1lYUm1iM0p0WDNKbFpteGxZM1JwYjI1ZlkyRndZV0pwYkdsMGFXVnpKenRjYmx4dUx5b3FYRzRnS2lCU1pXWnNaV04wYVhabElHbHVabTl5YldGMGFXOXVJR0ZpYjNWMElHRWdjM2x0WW05c0xDQnBibU5zZFdScGJtY2dZVzV1YjNSaGRHbHZibk1zSUdsdWRHVnlabUZqWlhNc0lHRnVaQ0J2ZEdobGNpQnRaWFJoWkdGMFlTNWNiaUFxTDF4dVpYaHdiM0owSUdOc1lYTnpJRkpsWm14bFkzUnBiMjVKYm1adklIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2NIVmliR2xqSUdGdWJtOTBZWFJwYjI1elB6b2dZVzU1VzEwc0lIQjFZbXhwWXlCd1lYSmhiV1YwWlhKelB6b2dZVzU1VzExYlhTd2djSFZpYkdsaklHWmhZM1J2Y25rL09pQkdkVzVqZEdsdmJpeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NIVmliR2xqSUdsdWRHVnlabUZqWlhNL09pQmhibmxiWFN3Z2NIVmliR2xqSUhCeWIzQk5aWFJoWkdGMFlUODZJSHRiYTJWNU9pQnpkSEpwYm1kZE9pQmhibmxiWFgwcElIdDlYRzU5WEc1Y2JpOHFLbHh1SUNvZ1VISnZkbWxrWlhNZ1lXTmpaWE56SUhSdklISmxabXhsWTNScGIyNGdaR0YwWVNCaFltOTFkQ0J6ZVcxaWIyeHpMaUJWYzJWa0lHbHVkR1Z5Ym1Gc2JIa2dZbmtnUVc1bmRXeGhjbHh1SUNvZ2RHOGdjRzkzWlhJZ1pHVndaVzVrWlc1amVTQnBibXBsWTNScGIyNGdZVzVrSUdOdmJYQnBiR0YwYVc5dUxseHVJQ292WEc1bGVIQnZjblFnWTJ4aGMzTWdVbVZtYkdWamRHOXlJSHRjYmlBZ0x5b3FJRUJwYm5SbGNtNWhiQ0FxTDF4dUlDQmZhVzVxWldOMFlXSnNaVWx1Wm04Z1BTQnVaWGNnVFdGd1BHRnVlU3dnVW1WbWJHVmpkR2x2YmtsdVptOCtLQ2s3WEc0Z0lDOHFLaUJBYVc1MFpYSnVZV3dnS2k5Y2JpQWdYMmRsZEhSbGNuTWdQU0J1WlhjZ1RXRndQSE4wY21sdVp5d2dSMlYwZEdWeVJtNCtLQ2s3WEc0Z0lDOHFLaUJBYVc1MFpYSnVZV3dnS2k5Y2JpQWdYM05sZEhSbGNuTWdQU0J1WlhjZ1RXRndQSE4wY21sdVp5d2dVMlYwZEdWeVJtNCtLQ2s3WEc0Z0lDOHFLaUJBYVc1MFpYSnVZV3dnS2k5Y2JpQWdYMjFsZEdodlpITWdQU0J1WlhjZ1RXRndQSE4wY21sdVp5d2dUV1YwYUc5a1JtNCtLQ2s3WEc0Z0lDOHFLaUJBYVc1MFpYSnVZV3dnS2k5Y2JpQWdYM1Z6WldSTFpYbHpPaUJUWlhROFlXNTVQanRjYmlBZ2NtVm1iR1ZqZEdsdmJrTmhjR0ZpYVd4cGRHbGxjem9nVUd4aGRHWnZjbTFTWldac1pXTjBhVzl1UTJGd1lXSnBiR2wwYVdWek8xeHVYRzRnSUdOdmJuTjBjblZqZEc5eUtISmxabXhsWTNScGIyNURZWEJoWW1sc2FYUnBaWE02SUZCc1lYUm1iM0p0VW1WbWJHVmpkR2x2YmtOaGNHRmlhV3hwZEdsbGN5a2dlMXh1SUNBZ0lIUm9hWE11WDNWelpXUkxaWGx6SUQwZ2JuVnNiRHRjYmlBZ0lDQjBhR2x6TG5KbFpteGxZM1JwYjI1RFlYQmhZbWxzYVhScFpYTWdQU0J5Wldac1pXTjBhVzl1UTJGd1lXSnBiR2wwYVdWek8xeHVJQ0I5WEc1Y2JpQWdhWE5TWldac1pXTjBhVzl1Ulc1aFlteGxaQ2dwT2lCaWIyOXNaV0Z1SUhzZ2NtVjBkWEp1SUhSb2FYTXVjbVZtYkdWamRHbHZia05oY0dGaWFXeHBkR2xsY3k1cGMxSmxabXhsWTNScGIyNUZibUZpYkdWa0tDazdJSDFjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRMkYxYzJWeklHQjBhR2x6WUNCeVpXWnNaV04wYjNJZ2RHOGdkSEpoWTJzZ2EyVjVjeUIxYzJWa0lIUnZJR0ZqWTJWemMxeHVJQ0FnS2lCN1FHeHBibXNnVW1WbWJHVmpkR2x2YmtsdVptOTlJRzlpYW1WamRITXVYRzRnSUNBcUwxeHVJQ0IwY21GamExVnpZV2RsS0NrNklIWnZhV1FnZXlCMGFHbHpMbDkxYzJWa1MyVjVjeUE5SUc1bGR5QlRaWFFvS1RzZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCTWFYTjBjeUIwZVhCbGN5Qm1iM0lnZDJocFkyZ2djbVZtYkdWamRHbHZiaUJwYm1admNtMWhkR2x2YmlCM1lYTWdibTkwSUhKbGNYVmxjM1JsWkNCemFXNWpaVnh1SUNBZ0tpQjdRR3hwYm1zZ0kzUnlZV05yVlhOaFoyVjlJSGRoY3lCallXeHNaV1F1SUZSb2FYTWdiR2x6ZENCamIzVnNaQ0JzWVhSbGNpQmlaU0JoZFdScGRHVmtJR0Z6WEc0Z0lDQXFJSEJ2ZEdWdWRHbGhiQ0JrWldGa0lHTnZaR1V1WEc0Z0lDQXFMMXh1SUNCc2FYTjBWVzUxYzJWa1MyVjVjeWdwT2lCaGJubGJYU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXVYM1Z6WldSTFpYbHpJRDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJDWVhObFJYaGpaWEIwYVc5dUtDZFZjMkZuWlNCMGNtRmphMmx1WnlCcGN5QmthWE5oWW14bFpDY3BPMXh1SUNBZ0lIMWNiaUFnSUNCMllYSWdZV3hzVkhsd1pYTWdQU0JOWVhCWGNtRndjR1Z5TG10bGVYTW9kR2hwY3k1ZmFXNXFaV04wWVdKc1pVbHVabThwTzF4dUlDQWdJSEpsZEhWeWJpQmhiR3hVZVhCbGN5NW1hV3gwWlhJb2EyVjVJRDArSUNGVFpYUlhjbUZ3Y0dWeUxtaGhjeWgwYUdsekxsOTFjMlZrUzJWNWN5d2dhMlY1S1NrN1hHNGdJSDFjYmx4dUlDQnlaV2RwYzNSbGNrWjFibU4wYVc5dUtHWjFibU02SUVaMWJtTjBhVzl1TENCbWRXNWpTVzVtYnpvZ1VtVm1iR1ZqZEdsdmJrbHVabThwT2lCMmIybGtJSHRjYmlBZ0lDQjBhR2x6TGw5cGJtcGxZM1JoWW14bFNXNW1ieTV6WlhRb1puVnVZeXdnWm5WdVkwbHVabThwTzF4dUlDQjlYRzVjYmlBZ2NtVm5hWE4wWlhKVWVYQmxLSFI1Y0dVNklGUjVjR1VzSUhSNWNHVkpibVp2T2lCU1pXWnNaV04wYVc5dVNXNW1ieWs2SUhadmFXUWdlMXh1SUNBZ0lIUm9hWE11WDJsdWFtVmpkR0ZpYkdWSmJtWnZMbk5sZENoMGVYQmxMQ0IwZVhCbFNXNW1ieWs3WEc0Z0lIMWNibHh1SUNCeVpXZHBjM1JsY2tkbGRIUmxjbk1vWjJWMGRHVnljem9nZTF0clpYazZJSE4wY21sdVoxMDZJRWRsZEhSbGNrWnVmU2s2SUhadmFXUWdleUJmYldWeVoyVk5ZWEJ6S0hSb2FYTXVYMmRsZEhSbGNuTXNJR2RsZEhSbGNuTXBPeUI5WEc1Y2JpQWdjbVZuYVhOMFpYSlRaWFIwWlhKektITmxkSFJsY25NNklIdGJhMlY1T2lCemRISnBibWRkT2lCVFpYUjBaWEpHYm4wcE9pQjJiMmxrSUhzZ1gyMWxjbWRsVFdGd2N5aDBhR2x6TGw5elpYUjBaWEp6TENCelpYUjBaWEp6S1RzZ2ZWeHVYRzRnSUhKbFoybHpkR1Z5VFdWMGFHOWtjeWh0WlhSb2IyUnpPaUI3VzJ0bGVUb2djM1J5YVc1blhUb2dUV1YwYUc5a1JtNTlLVG9nZG05cFpDQjdJRjl0WlhKblpVMWhjSE1vZEdocGN5NWZiV1YwYUc5a2N5d2diV1YwYUc5a2N5azdJSDFjYmx4dUlDQm1ZV04wYjNKNUtIUjVjR1U2SUZSNWNHVXBPaUJHZFc1amRHbHZiaUI3WEc0Z0lDQWdhV1lnS0hSb2FYTXVYMk52Ym5SaGFXNXpVbVZtYkdWamRHbHZia2x1Wm04b2RIbHdaU2twSUh0Y2JpQWdJQ0FnSUhaaGNpQnlaWE1nUFNCMGFHbHpMbDluWlhSU1pXWnNaV04wYVc5dVNXNW1ieWgwZVhCbEtTNW1ZV04wYjNKNU8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUdselVISmxjMlZ1ZENoeVpYTXBJRDhnY21WeklEb2diblZzYkR0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Y21WbWJHVmpkR2x2YmtOaGNHRmlhV3hwZEdsbGN5NW1ZV04wYjNKNUtIUjVjR1VwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhCaGNtRnRaWFJsY25Nb2RIbHdaVTl5Um5WdVl6b2dMeXBVZVhCbEtpOGdZVzU1S1RvZ1lXNTVXMTBnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbDlwYm1wbFkzUmhZbXhsU1c1bWJ5NW9ZWE1vZEhsd1pVOXlSblZ1WXlrcElIdGNiaUFnSUNBZ0lIWmhjaUJ5WlhNZ1BTQjBhR2x6TGw5blpYUlNaV1pzWldOMGFXOXVTVzVtYnloMGVYQmxUM0pHZFc1aktTNXdZWEpoYldWMFpYSnpPMXh1SUNBZ0lDQWdjbVYwZFhKdUlHbHpVSEpsYzJWdWRDaHlaWE1wSUQ4Z2NtVnpJRG9nVzEwN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbFpteGxZM1JwYjI1RFlYQmhZbWxzYVhScFpYTXVjR0Z5WVcxbGRHVnljeWgwZVhCbFQzSkdkVzVqS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCaGJtNXZkR0YwYVc5dWN5aDBlWEJsVDNKR2RXNWpPaUF2S2xSNWNHVXFMeUJoYm5rcE9pQmhibmxiWFNCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11WDJsdWFtVmpkR0ZpYkdWSmJtWnZMbWhoY3loMGVYQmxUM0pHZFc1aktTa2dlMXh1SUNBZ0lDQWdkbUZ5SUhKbGN5QTlJSFJvYVhNdVgyZGxkRkpsWm14bFkzUnBiMjVKYm1adktIUjVjR1ZQY2taMWJtTXBMbUZ1Ym05MFlYUnBiMjV6TzF4dUlDQWdJQ0FnY21WMGRYSnVJR2x6VUhKbGMyVnVkQ2h5WlhNcElEOGdjbVZ6SURvZ1cxMDdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxabXhsWTNScGIyNURZWEJoWW1sc2FYUnBaWE11WVc1dWIzUmhkR2x2Ym5Nb2RIbHdaVTl5Um5WdVl5azdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjSEp2Y0UxbGRHRmtZWFJoS0hSNWNHVlBja1oxYm1NNklDOHFWSGx3WlNvdklHRnVlU2s2SUh0YmEyVjVPaUJ6ZEhKcGJtZGRPaUJoYm5sYlhYMGdlMXh1SUNBZ0lHbG1JQ2gwYUdsekxsOXBibXBsWTNSaFlteGxTVzVtYnk1b1lYTW9kSGx3WlU5eVJuVnVZeWtwSUh0Y2JpQWdJQ0FnSUhaaGNpQnlaWE1nUFNCMGFHbHpMbDluWlhSU1pXWnNaV04wYVc5dVNXNW1ieWgwZVhCbFQzSkdkVzVqS1M1d2NtOXdUV1YwWVdSaGRHRTdYRzRnSUNBZ0lDQnlaWFIxY200Z2FYTlFjbVZ6Wlc1MEtISmxjeWtnUHlCeVpYTWdPaUI3ZlR0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Y21WbWJHVmpkR2x2YmtOaGNHRmlhV3hwZEdsbGN5NXdjbTl3VFdWMFlXUmhkR0VvZEhsd1pVOXlSblZ1WXlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FXNTBaWEptWVdObGN5aDBlWEJsT2lCVWVYQmxLVG9nWVc1NVcxMGdlMXh1SUNBZ0lHbG1JQ2gwYUdsekxsOXBibXBsWTNSaFlteGxTVzVtYnk1b1lYTW9kSGx3WlNrcElIdGNiaUFnSUNBZ0lIWmhjaUJ5WlhNZ1BTQjBhR2x6TGw5blpYUlNaV1pzWldOMGFXOXVTVzVtYnloMGVYQmxLUzVwYm5SbGNtWmhZMlZ6TzF4dUlDQWdJQ0FnY21WMGRYSnVJR2x6VUhKbGMyVnVkQ2h5WlhNcElEOGdjbVZ6SURvZ1cxMDdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxabXhsWTNScGIyNURZWEJoWW1sc2FYUnBaWE11YVc1MFpYSm1ZV05sY3loMGVYQmxLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JuWlhSMFpYSW9ibUZ0WlRvZ2MzUnlhVzVuS1RvZ1IyVjBkR1Z5Um00Z2UxeHVJQ0FnSUdsbUlDaDBhR2x6TGw5blpYUjBaWEp6TG1oaGN5aHVZVzFsS1NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMmRsZEhSbGNuTXVaMlYwS0c1aGJXVXBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXlaV1pzWldOMGFXOXVRMkZ3WVdKcGJHbDBhV1Z6TG1kbGRIUmxjaWh1WVcxbEtUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnpaWFIwWlhJb2JtRnRaVG9nYzNSeWFXNW5LVG9nVTJWMGRHVnlSbTRnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbDl6WlhSMFpYSnpMbWhoY3lodVlXMWxLU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgzTmxkSFJsY25NdVoyVjBLRzVoYldVcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1eVpXWnNaV04wYVc5dVEyRndZV0pwYkdsMGFXVnpMbk5sZEhSbGNpaHVZVzFsS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCdFpYUm9iMlFvYm1GdFpUb2djM1J5YVc1bktUb2dUV1YwYUc5a1JtNGdlMXh1SUNBZ0lHbG1JQ2gwYUdsekxsOXRaWFJvYjJSekxtaGhjeWh1WVcxbEtTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDIxbGRHaHZaSE11WjJWMEtHNWhiV1VwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV5Wldac1pXTjBhVzl1UTJGd1lXSnBiR2wwYVdWekxtMWxkR2h2WkNodVlXMWxLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2S2lvZ1FHbHVkR1Z5Ym1Gc0lDb3ZYRzRnSUY5blpYUlNaV1pzWldOMGFXOXVTVzVtYnloMGVYQmxUM0pHZFc1aktTQjdYRzRnSUNBZ2FXWWdLR2x6VUhKbGMyVnVkQ2gwYUdsekxsOTFjMlZrUzJWNWN5a3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVgzVnpaV1JMWlhsekxtRmtaQ2gwZVhCbFQzSkdkVzVqS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJsdWFtVmpkR0ZpYkdWSmJtWnZMbWRsZENoMGVYQmxUM0pHZFc1aktUdGNiaUFnZlZ4dVhHNGdJQzhxS2lCQWFXNTBaWEp1WVd3Z0tpOWNiaUFnWDJOdmJuUmhhVzV6VW1WbWJHVmpkR2x2YmtsdVptOG9kSGx3WlU5eVJuVnVZeWtnZXlCeVpYUjFjbTRnZEdocGN5NWZhVzVxWldOMFlXSnNaVWx1Wm04dWFHRnpLSFI1Y0dWUGNrWjFibU1wT3lCOVhHNWNiaUFnYVcxd2IzSjBWWEpwS0hSNWNHVTZJRlI1Y0dVcE9pQnpkSEpwYm1jZ2V5QnlaWFIxY200Z2RHaHBjeTV5Wldac1pXTjBhVzl1UTJGd1lXSnBiR2wwYVdWekxtbHRjRzl5ZEZWeWFTaDBlWEJsS1RzZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCZmJXVnlaMlZOWVhCektIUmhjbWRsZERvZ1RXRndQR0Z1ZVN3Z1lXNTVQaXdnWTI5dVptbG5PaUI3VzJ0bGVUb2djM1J5YVc1blhUb2dSblZ1WTNScGIyNTlLVG9nZG05cFpDQjdYRzRnSUZOMGNtbHVaMDFoY0ZkeVlYQndaWEl1Wm05eVJXRmphQ2hqYjI1bWFXY3NJQ2gyTENCcktTQTlQaUIwWVhKblpYUXVjMlYwS0dzc0lIWXBLVHRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYW5ndWxhcjIvc3JjL2NvcmUvcmVmbGVjdGlvbi9yZWZsZWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO3ZhciBsYW5nXzEgPSByZXF1aXJlKCdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnKTtcclxudmFyIGV4Y2VwdGlvbnNfMSA9IHJlcXVpcmUoJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucycpO1xyXG52YXIgUmVmbGVjdGlvbkNhcGFiaWxpdGllcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKHJlZmxlY3QpIHtcclxuICAgICAgICB0aGlzLl9yZWZsZWN0ID0gbGFuZ18xLmlzUHJlc2VudChyZWZsZWN0KSA/IHJlZmxlY3QgOiBsYW5nXzEuZ2xvYmFsLlJlZmxlY3Q7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnByb3RvdHlwZS5pc1JlZmxlY3Rpb25FbmFibGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfTtcclxuICAgIFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucHJvdG90eXBlLmZhY3RvcnkgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHN3aXRjaCAodC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyB0KCk7IH07XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEpIHsgcmV0dXJuIG5ldyB0KGExKTsgfTtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhMSwgYTIpIHsgcmV0dXJuIG5ldyB0KGExLCBhMik7IH07XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEsIGEyLCBhMykgeyByZXR1cm4gbmV3IHQoYTEsIGEyLCBhMyk7IH07XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEsIGEyLCBhMywgYTQpIHsgcmV0dXJuIG5ldyB0KGExLCBhMiwgYTMsIGE0KTsgfTtcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhMSwgYTIsIGEzLCBhNCwgYTUpIHsgcmV0dXJuIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSk7IH07XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNikgeyByZXR1cm4gbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7IH07XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpIHsgcmV0dXJuIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KTsgfTtcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgpIHsgcmV0dXJuIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCk7IH07XHJcbiAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSkgeyByZXR1cm4gbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSk7IH07XHJcbiAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAxNTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUsIGExNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1LCBhMTYpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAxNzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2LCBhMTcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2LCBhMTcpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2LCBhMTcsIGExOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1LCBhMTYsIGExNywgYTE4KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgMTk6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUsIGExNiwgYTE3LCBhMTgsIGExOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1LCBhMTYsIGExNywgYTE4LCBhMTkpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAyMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2LCBhMTcsIGExOCwgYTE5LCBhMjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2LCBhMTcsIGExOCwgYTE5LCBhMjApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBjcmVhdGUgYSBmYWN0b3J5IGZvciAnXCIgKyBsYW5nXzEuc3RyaW5naWZ5KHQpICsgXCInIGJlY2F1c2UgaXRzIGNvbnN0cnVjdG9yIGhhcyBtb3JlIHRoYW4gMjAgYXJndW1lbnRzXCIpO1xyXG4gICAgfTtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucHJvdG90eXBlLl96aXBUeXBlc0FuZEFubm90YWlvbnMgPSBmdW5jdGlvbiAocGFyYW1UeXBlcywgcGFyYW1Bbm5vdGF0aW9ucykge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbVR5cGVzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgQXJyYXkocGFyYW1Bbm5vdGF0aW9ucy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KHBhcmFtVHlwZXMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gVFMgb3V0cHV0cyBPYmplY3QgZm9yIHBhcmFtZXRlcnMgd2l0aG91dCB0eXBlcywgd2hpbGUgVHJhY2V1ciBvbWl0c1xyXG4gICAgICAgICAgICAvLyB0aGUgYW5ub3RhdGlvbnMuIEZvciBub3cgd2UgcHJlc2VydmUgdGhlIFRyYWNldXIgYmVoYXZpb3IgdG8gYWlkXHJcbiAgICAgICAgICAgIC8vIG1pZ3JhdGlvbiwgYnV0IHRoaXMgY2FuIGJlIHJldmlzaXRlZC5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbVR5cGVzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocGFyYW1UeXBlc1tpXSAhPSBPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IFtwYXJhbVR5cGVzW2ldXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsYW5nXzEuaXNQcmVzZW50KHBhcmFtQW5ub3RhdGlvbnMpICYmIGxhbmdfMS5pc1ByZXNlbnQocGFyYW1Bbm5vdGF0aW9uc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IHJlc3VsdFtpXS5jb25jYXQocGFyYW1Bbm5vdGF0aW9uc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnByb3RvdHlwZS5wYXJhbWV0ZXJzID0gZnVuY3Rpb24gKHR5cGVPckZ1bmMpIHtcclxuICAgICAgICAvLyBQcmVmZXIgdGhlIGRpcmVjdCBBUEkuXHJcbiAgICAgICAgaWYgKGxhbmdfMS5pc1ByZXNlbnQodHlwZU9yRnVuYy5wYXJhbWV0ZXJzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZU9yRnVuYy5wYXJhbWV0ZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGFuZ18xLmlzUHJlc2VudCh0aGlzLl9yZWZsZWN0KSAmJiBsYW5nXzEuaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEpKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbUFubm90YXRpb25zID0gdGhpcy5fcmVmbGVjdC5nZXRNZXRhZGF0YSgncGFyYW1ldGVycycsIHR5cGVPckZ1bmMpO1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1UeXBlcyA9IHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgdHlwZU9yRnVuYyk7XHJcbiAgICAgICAgICAgIGlmIChsYW5nXzEuaXNQcmVzZW50KHBhcmFtVHlwZXMpIHx8IGxhbmdfMS5pc1ByZXNlbnQocGFyYW1Bbm5vdGF0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96aXBUeXBlc0FuZEFubm90YWlvbnMocGFyYW1UeXBlcywgcGFyYW1Bbm5vdGF0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVGhlIGFycmF5IGhhcyB0byBiZSBmaWxsZWQgd2l0aCBgdW5kZWZpbmVkYCBiZWNhdXNlIGhvbGVzIHdvdWxkIGJlIHNraXBwZWQgYnkgYHNvbWVgXHJcbiAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBuZXcgQXJyYXkodHlwZU9yRnVuYy5sZW5ndGgpO1xyXG4gICAgICAgIHBhcmFtZXRlcnMuZmlsbCh1bmRlZmluZWQpO1xyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xyXG4gICAgfTtcclxuICAgIFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucHJvdG90eXBlLmFubm90YXRpb25zID0gZnVuY3Rpb24gKHR5cGVPckZ1bmMpIHtcclxuICAgICAgICAvLyBQcmVmZXIgdGhlIGRpcmVjdCBBUEkuXHJcbiAgICAgICAgaWYgKGxhbmdfMS5pc1ByZXNlbnQodHlwZU9yRnVuYy5hbm5vdGF0aW9ucykpIHtcclxuICAgICAgICAgICAgdmFyIGFubm90YXRpb25zID0gdHlwZU9yRnVuYy5hbm5vdGF0aW9ucztcclxuICAgICAgICAgICAgaWYgKGxhbmdfMS5pc0Z1bmN0aW9uKGFubm90YXRpb25zKSAmJiBhbm5vdGF0aW9ucy5hbm5vdGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucy5hbm5vdGF0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYW5ub3RhdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYW5nXzEuaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QpICYmIGxhbmdfMS5pc1ByZXNlbnQodGhpcy5fcmVmbGVjdC5nZXRNZXRhZGF0YSkpIHtcclxuICAgICAgICAgICAgdmFyIGFubm90YXRpb25zID0gdGhpcy5fcmVmbGVjdC5nZXRNZXRhZGF0YSgnYW5ub3RhdGlvbnMnLCB0eXBlT3JGdW5jKTtcclxuICAgICAgICAgICAgaWYgKGxhbmdfMS5pc1ByZXNlbnQoYW5ub3RhdGlvbnMpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9O1xyXG4gICAgUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5wcm90b3R5cGUucHJvcE1ldGFkYXRhID0gZnVuY3Rpb24gKHR5cGVPckZ1bmMpIHtcclxuICAgICAgICAvLyBQcmVmZXIgdGhlIGRpcmVjdCBBUEkuXHJcbiAgICAgICAgaWYgKGxhbmdfMS5pc1ByZXNlbnQodHlwZU9yRnVuYy5wcm9wTWV0YWRhdGEpKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9wTWV0YWRhdGEgPSB0eXBlT3JGdW5jLnByb3BNZXRhZGF0YTtcclxuICAgICAgICAgICAgaWYgKGxhbmdfMS5pc0Z1bmN0aW9uKHByb3BNZXRhZGF0YSkgJiYgcHJvcE1ldGFkYXRhLnByb3BNZXRhZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcE1ldGFkYXRhID0gcHJvcE1ldGFkYXRhLnByb3BNZXRhZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcHJvcE1ldGFkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGFuZ18xLmlzUHJlc2VudCh0aGlzLl9yZWZsZWN0KSAmJiBsYW5nXzEuaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEpKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9wTWV0YWRhdGEgPSB0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKCdwcm9wTWV0YWRhdGEnLCB0eXBlT3JGdW5jKTtcclxuICAgICAgICAgICAgaWYgKGxhbmdfMS5pc1ByZXNlbnQocHJvcE1ldGFkYXRhKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wTWV0YWRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH07XHJcbiAgICBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnByb3RvdHlwZS5pbnRlcmZhY2VzID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9uc18xLkJhc2VFeGNlcHRpb24oXCJKYXZhU2NyaXB0IGRvZXMgbm90IHN1cHBvcnQgaW50ZXJmYWNlc1wiKTtcclxuICAgIH07XHJcbiAgICBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnByb3RvdHlwZS5nZXR0ZXIgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbmV3IEZ1bmN0aW9uKCdvJywgJ3JldHVybiBvLicgKyBuYW1lICsgJzsnKTsgfTtcclxuICAgIFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucHJvdG90eXBlLnNldHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbignbycsICd2JywgJ3JldHVybiBvLicgKyBuYW1lICsgJyA9IHY7Jyk7XHJcbiAgICB9O1xyXG4gICAgUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5wcm90b3R5cGUubWV0aG9kID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB2YXIgZnVuY3Rpb25Cb2R5ID0gXCJpZiAoIW8uXCIgKyBuYW1lICsgXCIpIHRocm93IG5ldyBFcnJvcignXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyB1bmRlZmluZWQnKTtcXG4gICAgICAgIHJldHVybiBvLlwiICsgbmFtZSArIFwiLmFwcGx5KG8sIGFyZ3MpO1wiO1xyXG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oJ28nLCAnYXJncycsIGZ1bmN0aW9uQm9keSk7XHJcbiAgICB9O1xyXG4gICAgLy8gVGhlcmUgaXMgbm90IGEgY29uY2VwdCBvZiBpbXBvcnQgdXJpIGluIEpzLCBidXQgdGhpcyBpcyB1c2VmdWwgaW4gZGV2ZWxvcGluZyBEYXJ0IGFwcGxpY2F0aW9ucy5cclxuICAgIFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucHJvdG90eXBlLmltcG9ydFVyaSA9IGZ1bmN0aW9uICh0eXBlKSB7IHJldHVybiAnLi8nOyB9O1xyXG4gICAgcmV0dXJuIFJlZmxlY3Rpb25DYXBhYmlsaXRpZXM7XHJcbn0pKCk7XHJcbmV4cG9ydHMuUmVmbGVjdGlvbkNhcGFiaWxpdGllcyA9IFJlZmxlY3Rpb25DYXBhYmlsaXRpZXM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtVm1iR1ZqZEdsdmJsOWpZWEJoWW1sc2FYUnBaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SmhibWQxYkdGeU1pOXpjbU12WTI5eVpTOXlaV1pzWldOMGFXOXVMM0psWm14bFkzUnBiMjVmWTJGd1lXSnBiR2wwYVdWekxuUnpJbDBzSW01aGJXVnpJanBiSWxKbFpteGxZM1JwYjI1RFlYQmhZbWxzYVhScFpYTWlMQ0pTWldac1pXTjBhVzl1UTJGd1lXSnBiR2wwYVdWekxtTnZibk4wY25WamRHOXlJaXdpVW1WbWJHVmpkR2x2YmtOaGNHRmlhV3hwZEdsbGN5NXBjMUpsWm14bFkzUnBiMjVGYm1GaWJHVmtJaXdpVW1WbWJHVmpkR2x2YmtOaGNHRmlhV3hwZEdsbGN5NW1ZV04wYjNKNUlpd2lVbVZtYkdWamRHbHZia05oY0dGaWFXeHBkR2xsY3k1ZmVtbHdWSGx3WlhOQmJtUkJibTV2ZEdGcGIyNXpJaXdpVW1WbWJHVmpkR2x2YmtOaGNHRmlhV3hwZEdsbGN5NXdZWEpoYldWMFpYSnpJaXdpVW1WbWJHVmpkR2x2YmtOaGNHRmlhV3hwZEdsbGN5NWhibTV2ZEdGMGFXOXVjeUlzSWxKbFpteGxZM1JwYjI1RFlYQmhZbWxzYVhScFpYTXVjSEp2Y0UxbGRHRmtZWFJoSWl3aVVtVm1iR1ZqZEdsdmJrTmhjR0ZpYVd4cGRHbGxjeTVwYm5SbGNtWmhZMlZ6SWl3aVVtVm1iR1ZqZEdsdmJrTmhjR0ZpYVd4cGRHbGxjeTVuWlhSMFpYSWlMQ0pTWldac1pXTjBhVzl1UTJGd1lXSnBiR2wwYVdWekxuTmxkSFJsY2lJc0lsSmxabXhsWTNScGIyNURZWEJoWW1sc2FYUnBaWE11YldWMGFHOWtJaXdpVW1WbWJHVmpkR2x2YmtOaGNHRmlhV3hwZEdsbGN5NXBiWEJ2Y25SVmNta2lYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMSEZDUVU5UExEQkNRVUV3UWl4RFFVRkRMRU5CUVVFN1FVRkRiRU1zTWtKQlFUUkNMR2REUVVGblF5eERRVUZETEVOQlFVRTdRVUZKTjBRN1NVRkhSVUVzWjBOQlFWbEJMRTlCUVdGQk8xRkJRVWxETEVsQlFVbEJMRU5CUVVOQkxGRkJRVkZCTEVkQlFVZEJMR2RDUVVGVFFTeERRVUZEUVN4UFFVRlBRU3hEUVVGRFFTeEhRVUZIUVN4UFFVRlBRU3hIUVVGSFFTeGhRVUZOUVN4RFFVRkRRU3hQUVVGUFFTeERRVUZEUVR0SlFVRkRRU3hEUVVGRFFUdEpRVVUzUmtRc2IwUkJRVzFDUVN4SFFVRnVRa0VzWTBGQmFVTkZMRTFCUVUxQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMGxCUlM5RFJpeDNRMEZCVDBFc1IwRkJVRUVzVlVGQlVVRXNRMEZCWlVFN1VVRkRja0pITEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFMUJRVTFCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzFsQlEycENRU3hMUVVGTFFTeERRVUZEUVR0blFrRkRTa0VzVFVGQlRVRXNRMEZCUTBFc1kwRkJUVUVzVDBGQlFVRXNTVUZCU1VFc1EwRkJRMEVzUlVGQlJVRXNSVUZCVUVFc1EwRkJUMEVzUTBGQlEwRTdXVUZEZGtKQkxFdEJRVXRCTEVOQlFVTkJPMmRDUVVOS1FTeE5RVUZOUVN4RFFVRkRRU3hWUVVGRFFTeEZRVUZGUVN4SlFVRkxRU3hQUVVGQlFTeEpRVUZKUVN4RFFVRkRRU3hEUVVGRFFTeEZRVUZGUVN4RFFVRkRRU3hGUVVGVVFTeERRVUZUUVN4RFFVRkRRVHRaUVVNelFrRXNTMEZCUzBFc1EwRkJRMEU3WjBKQlEwcEJMRTFCUVUxQkxFTkJRVU5CTEZWQlFVTkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRWxCUVV0QkxFOUJRVUZCTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVOQlFVTkJMRVZCUVdKQkxFTkJRV0ZCTEVOQlFVTkJPMWxCUTI1RFFTeExRVUZMUVN4RFFVRkRRVHRuUWtGRFNrRXNUVUZCVFVFc1EwRkJRMEVzVlVGQlEwRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzU1VGQlMwRXNUMEZCUVVFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNRMEZCUTBFc1JVRkJha0pCTEVOQlFXbENRU3hEUVVGRFFUdFpRVU16UTBFc1MwRkJTMEVzUTBGQlEwRTdaMEpCUTBwQkxFMUJRVTFCTEVOQlFVTkJMRlZCUVVOQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVsQlFVdEJMRTlCUVVGQkxFbEJRVWxCTEVOQlFVTkJMRU5CUVVOQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVOQlFVTkJMRVZCUVhKQ1FTeERRVUZ4UWtFc1EwRkJRMEU3V1VGRGJrUkJMRXRCUVV0QkxFTkJRVU5CTzJkQ1FVTktRU3hOUVVGTlFTeERRVUZEUVN4VlFVRkRRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hKUVVGTFFTeFBRVUZCUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RFFVRkRRU3hGUVVGNlFrRXNRMEZCZVVKQkxFTkJRVU5CTzFsQlF6TkVRU3hMUVVGTFFTeERRVUZEUVR0blFrRkRTa0VzVFVGQlRVRXNRMEZCUTBFc1ZVRkJRMEVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1NVRkJTMEVzVDBGQlFVRXNTVUZCU1VFc1EwRkJRMEVzUTBGQlEwRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUTBGQlEwRXNSVUZCTjBKQkxFTkJRVFpDUVN4RFFVRkRRVHRaUVVOdVJVRXNTMEZCUzBFc1EwRkJRMEU3WjBKQlEwcEJMRTFCUVUxQkxFTkJRVU5CTEZWQlFVTkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFbEJRVXRCTEU5QlFVRkJMRWxCUVVsQkxFTkJRVU5CTEVOQlFVTkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFTkJRVU5CTEVWQlFXcERRU3hEUVVGcFEwRXNRMEZCUTBFN1dVRkRNMFZCTEV0QlFVdEJMRU5CUVVOQk8yZENRVU5LUVN4TlFVRk5RU3hEUVVGRFFTeFZRVUZEUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4SlFVRkxRU3hQUVVGQlFTeEpRVUZKUVN4RFFVRkRRU3hEUVVGRFFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeERRVUZEUVN4RlFVRnlRMEVzUTBGQmNVTkJMRU5CUVVOQk8xbEJRMjVHUVN4TFFVRkxRU3hEUVVGRFFUdG5Ra0ZEU2tFc1RVRkJUVUVzUTBGQlEwRXNWVUZCUTBFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNTVUZCUzBFc1QwRkJRVUVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1EwRkJRMEVzUlVGQmVrTkJMRU5CUVhsRFFTeERRVUZEUVR0WlFVTXpSa0VzUzBGQlMwRXNSVUZCUlVFN1owSkJRMHhCTEUxQlFVMUJMRU5CUVVOQkxGVkJRVU5CTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVkQlFVZEJPekpDUVVOd1EwRXNTVUZCU1VFc1EwRkJRMEVzUTBGQlEwRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSMEZCUjBFc1EwRkJRMEU3WjBKQlFUbERRU3hEUVVFNFEwRXNRMEZCUTBFN1dVRkROVVJCTEV0QlFVdEJMRVZCUVVWQk8yZENRVU5NUVN4TlFVRk5RU3hEUVVGRFFTeFZRVUZEUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVRzeVFrRkRla05CTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVOQlFVTkJPMmRDUVVGdVJFRXNRMEZCYlVSQkxFTkJRVU5CTzFsQlEycEZRU3hMUVVGTFFTeEZRVUZGUVR0blFrRkRURUVzVFVGQlRVRXNRMEZCUTBFc1ZVRkJRMEVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUjBGQlIwRXNSVUZCUlVFc1IwRkJSMEVzUlVGQlJVRXNSMEZCUjBFN01rSkJRemxEUVN4SlFVRkpRU3hEUVVGRFFTeERRVUZEUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVN4RlFVRkZRU3hIUVVGSFFTeERRVUZEUVR0blFrRkJlRVJCTEVOQlFYZEVRU3hEUVVGRFFUdFpRVU4wUlVFc1MwRkJTMEVzUlVGQlJVRTdaMEpCUTB4QkxFMUJRVTFCTEVOQlFVTkJMRlZCUVVOQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCT3pKQ1FVTnVSRUVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUjBGQlIwRXNSVUZCUlVFc1IwRkJSMEVzUlVGQlJVRXNSMEZCUjBFc1JVRkJSVUVzUjBGQlIwRXNRMEZCUTBFN1owSkJRVGRFUVN4RFFVRTJSRUVzUTBGQlEwRTdXVUZETTBWQkxFdEJRVXRCTEVWQlFVVkJPMmRDUVVOTVFTeE5RVUZOUVN4RFFVRkRRU3hWUVVGRFFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEhRVUZIUVN4RlFVRkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVN4RlFVRkZRU3hIUVVGSFFUc3lRa0ZEZUVSQkxFbEJRVWxCTEVOQlFVTkJMRU5CUVVOQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFTkJRVU5CTzJkQ1FVRnNSVUVzUTBGQmEwVkJMRU5CUVVOQk8xbEJRMmhHUVN4TFFVRkxRU3hGUVVGRlFUdG5Ra0ZEVEVFc1RVRkJUVUVzUTBGQlEwRXNWVUZCUTBFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1IwRkJSMEVzUlVGQlJVRXNSMEZCUjBFc1JVRkJSVUVzUjBGQlIwRXNSVUZCUlVFc1IwRkJSMEVzUlVGQlJVRXNSMEZCUjBFc1JVRkJSVUVzUjBGQlIwRTdNa0pCUXpkRVFTeEpRVUZKUVN4RFFVRkRRU3hEUVVGRFFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEhRVUZIUVN4RlFVRkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVN4RlFVRkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRU3hEUVVGRFFUdG5Ra0ZCZGtWQkxFTkJRWFZGUVN4RFFVRkRRVHRaUVVOeVJrRXNTMEZCUzBFc1JVRkJSVUU3WjBKQlEweEJMRTFCUVUxQkxFTkJRVU5CTEZWQlFVTkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQk96SkNRVU5zUlVFc1NVRkJTVUVzUTBGQlEwRXNRMEZCUTBFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1IwRkJSMEVzUlVGQlJVRXNSMEZCUjBFc1JVRkJSVUVzUjBGQlIwRXNSVUZCUlVFc1IwRkJSMEVzUlVGQlJVRXNSMEZCUjBFc1JVRkJSVUVzUjBGQlIwRXNSVUZCUlVFc1IwRkJSMEVzUTBGQlEwRTdaMEpCUVRWRlFTeERRVUUwUlVFc1EwRkJRMEU3V1VGRE1VWkJMRXRCUVV0QkxFVkJRVVZCTzJkQ1FVTk1RU3hOUVVGTlFTeERRVUZEUVN4VlFVRkRRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVN4RlFVRkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVN4RlFVRkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRVHN5UWtGRGRrVkJMRWxCUVVsQkxFTkJRVU5CTEVOQlFVTkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJRM0pGUVN4SFFVRkhRU3hEUVVGRFFUdG5Ra0ZFVmtFc1EwRkRWVUVzUTBGQlEwRTdXVUZEZUVKQkxFdEJRVXRCTEVWQlFVVkJPMmRDUVVOTVFTeE5RVUZOUVN4RFFVRkRRU3hWUVVGRFFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEhRVUZIUVN4RlFVRkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVN4RlFVRkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVN4RlFVRkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRVHN5UWtGRE5VVkJMRWxCUVVsQkxFTkJRVU5CTEVOQlFVTkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUXpGRlFTeEhRVUZIUVN4RFFVRkRRVHRuUWtGRVZrRXNRMEZEVlVFc1EwRkJRMEU3V1VGRGVFSkJMRXRCUVV0QkxFVkJRVVZCTzJkQ1FVTk1RU3hOUVVGTlFTeERRVUZEUVN4VlFVRkRRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hGUVVGRlFTeEZRVUZGUVN4RlFVRkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVN4RlFVRkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVN4RlFVRkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVN4RlFVTXZSVUVzUjBGQlIwRTdNa0pCUVV0QkxFbEJRVWxCTEVOQlFVTkJMRU5CUVVOQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlEzSkZRU3hIUVVGSFFTeEZRVUZGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVN4RFFVRkRRVHRuUWtGRWNFSkJMRU5CUTI5Q1FTeERRVUZEUVR0WlFVTjJRMEVzUzBGQlMwRXNSVUZCUlVFN1owSkJRMHhCTEUxQlFVMUJMRU5CUVVOQkxGVkJRVU5CTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVWQlFVVkJMRVZCUVVWQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJReTlGUVN4SFFVRkhRU3hGUVVGRlFTeEhRVUZIUVRzeVFrRkJTMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUlVGQlJVRXNSVUZCUlVFc1JVRkJSVUVzUjBGQlIwRXNSVUZCUlVFc1IwRkJSMEVzUlVGQlJVRXNSMEZCUjBFc1JVRkJSVUVzUjBGQlIwRXNSVUZCUlVFc1IwRkJSMEVzUlVGQlJVRXNSMEZCUjBFc1JVRkRhRVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVWQlFVVkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxFZEJRVWRCTEVOQlFVTkJPMmRDUVVRNVFrRXNRMEZET0VKQkxFTkJRVU5CTzFGQlEzaEVRU3hEUVVGRFFUdFJRVUZCUVN4RFFVRkRRVHRSUVVWR1FTeE5RVUZOUVN4SlFVRkpRU3hMUVVGTFFTeERRVU5ZUVN4clEwRkJaME5CTEdkQ1FVRlRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3g1UkVGQmMwUkJMRU5CUVVOQkxFTkJRVU5CTzBsQlF6RkhRU3hEUVVGRFFUdEpRVVZFU0N4blFrRkJaMEpCTzBsQlEyaENRU3gxUkVGQmMwSkJMRWRCUVhSQ1FTeFZRVUYxUWtFc1ZVRkJWVUVzUlVGQlJVRXNaMEpCUVdkQ1FUdFJRVU5xUkVrc1NVRkJTVUVzVFVGQlRVRXNRMEZCUTBFN1VVRkZXRUVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzVDBGQlQwRXNWVUZCVlVFc1MwRkJTMEVzVjBGQlYwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRTdXVUZEZEVOQkxFMUJRVTFCTEVkQlFVZEJMRWxCUVVsQkxFdEJRVXRCTEVOQlFVTkJMR2RDUVVGblFrRXNRMEZCUTBFc1RVRkJUVUVzUTBGQlEwRXNRMEZCUTBFN1VVRkRPVU5CTEVOQlFVTkJPMUZCUVVOQkxFbEJRVWxCTEVOQlFVTkJMRU5CUVVOQk8xbEJRMDVCTEUxQlFVMUJMRWRCUVVkQkxFbEJRVWxCTEV0QlFVdEJMRU5CUVVOQkxGVkJRVlZCTEVOQlFVTkJMRTFCUVUxQkxFTkJRVU5CTEVOQlFVTkJPMUZCUTNoRFFTeERRVUZEUVR0UlFVVkVRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4RFFVRkRRU3hIUVVGSFFTeERRVUZEUVN4RlFVRkZRU3hEUVVGRFFTeEhRVUZIUVN4TlFVRk5RU3hEUVVGRFFTeE5RVUZOUVN4RlFVRkZRU3hEUVVGRFFTeEZRVUZGUVN4RlFVRkZRU3hEUVVGRFFUdFpRVU4yUTBFc2MwVkJRWE5GUVR0WlFVTjBSVUVzYlVWQlFXMUZRVHRaUVVOdVJVRXNkME5CUVhkRFFUdFpRVU40UTBFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc1QwRkJUMEVzVlVGQlZVRXNTMEZCUzBFc1YwRkJWMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3WjBKQlEzUkRRU3hOUVVGTlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeEhRVUZIUVN4RlFVRkZRU3hEUVVGRFFUdFpRVU5xUWtFc1EwRkJRMEU3V1VGQlEwRXNTVUZCU1VFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzVlVGQlZVRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNTVUZCU1VFc1RVRkJUVUVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3WjBKQlEyNURRU3hOUVVGTlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeEhRVUZIUVN4RFFVRkRRU3hWUVVGVlFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRVHRaUVVNNVFrRXNRMEZCUTBFN1dVRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1EwRkJRMEU3WjBKQlEwNUJMRTFCUVUxQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFZEJRVWRCTEVWQlFVVkJMRU5CUVVOQk8xbEJRMnBDUVN4RFFVRkRRVHRaUVVORVFTeEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTeG5Ra0ZCVTBFc1EwRkJRMEVzWjBKQlFXZENRU3hEUVVGRFFTeEpRVUZKUVN4blFrRkJVMEVzUTBGQlEwRXNaMEpCUVdkQ1FTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0blFrRkRiRVZCTEUxQlFVMUJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRWRCUVVkQkxFMUJRVTFCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJMRTFCUVUxQkxFTkJRVU5CTEdkQ1FVRm5Ra0VzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFN1dVRkRjRVJCTEVOQlFVTkJPMUZCUTBoQkxFTkJRVU5CTzFGQlEwUkJMRTFCUVUxQkxFTkJRVU5CTEUxQlFVMUJMRU5CUVVOQk8wbEJRMmhDUVN4RFFVRkRRVHRKUVVWRVNpd3lRMEZCVlVFc1IwRkJWa0VzVlVGQlYwRXNWVUZCWjBKQk8xRkJRM3BDU3l4NVFrRkJlVUpCTzFGQlEzcENRU3hGUVVGRlFTeERRVUZEUVN4RFFVRkRRU3huUWtGQlUwRXNRMEZCVDBFc1ZVRkJWMEVzUTBGQlEwRXNWVUZCVlVFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3V1VGRE5VTkJMRTFCUVUxQkxFTkJRVTlCTEZWQlFWZEJMRU5CUVVOQkxGVkJRVlZCTEVOQlFVTkJPMUZCUTNSRFFTeERRVUZEUVR0UlFVTkVRU3hGUVVGRlFTeERRVUZEUVN4RFFVRkRRU3huUWtGQlUwRXNRMEZCUTBFc1NVRkJTVUVzUTBGQlEwRXNVVUZCVVVFc1EwRkJRMEVzU1VGQlNVRXNaMEpCUVZOQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxGRkJRVkZCTEVOQlFVTkJMRmRCUVZkQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzFsQlEzSkZRU3hKUVVGSlFTeG5Ra0ZCWjBKQkxFZEJRVWRCTEVsQlFVbEJMRU5CUVVOQkxGRkJRVkZCTEVOQlFVTkJMRmRCUVZkQkxFTkJRVU5CTEZsQlFWbEJMRVZCUVVWQkxGVkJRVlZCTEVOQlFVTkJMRU5CUVVOQk8xbEJRek5GUVN4SlFVRkpRU3hWUVVGVlFTeEhRVUZIUVN4SlFVRkpRU3hEUVVGRFFTeFJRVUZSUVN4RFFVRkRRU3hYUVVGWFFTeERRVUZEUVN4dFFrRkJiVUpCTEVWQlFVVkJMRlZCUVZWQkxFTkJRVU5CTEVOQlFVTkJPMWxCUXpWRlFTeEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTeG5Ra0ZCVTBFc1EwRkJRMEVzVlVGQlZVRXNRMEZCUTBFc1NVRkJTVUVzWjBKQlFWTkJMRU5CUVVOQkxHZENRVUZuUWtFc1EwRkJRMEVzUTBGQlEwRXNRMEZCUTBFc1EwRkJRMEU3WjBKQlEzcEVRU3hOUVVGTlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeHpRa0ZCYzBKQkxFTkJRVU5CTEZWQlFWVkJMRVZCUVVWQkxHZENRVUZuUWtFc1EwRkJRMEVzUTBGQlEwRTdXVUZEYmtWQkxFTkJRVU5CTzFGQlEwaEJMRU5CUVVOQk8xRkJRMFJCTEhWR1FVRjFSa0U3VVVGRGRrWkJMRWxCUVVsQkxGVkJRVlZCTEVkQlFVZEJMRWxCUVVsQkxFdEJRVXRCTEVOQlFVOUJMRlZCUVZWQkxFTkJRVU5CTEUxQlFVOUJMRU5CUVVOQkxFTkJRVU5CTzFGQlEzSkVRU3hWUVVGVlFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeFRRVUZUUVN4RFFVRkRRU3hEUVVGRFFUdFJRVU16UWtFc1RVRkJUVUVzUTBGQlEwRXNWVUZCVlVFc1EwRkJRMEU3U1VGRGNFSkJMRU5CUVVOQk8wbEJSVVJNTERSRFFVRlhRU3hIUVVGWVFTeFZRVUZaUVN4VlFVRm5Ra0U3VVVGRE1VSk5MSGxDUVVGNVFrRTdVVUZEZWtKQkxFVkJRVVZCTEVOQlFVTkJMRU5CUVVOQkxHZENRVUZUUVN4RFFVRlBRU3hWUVVGWFFTeERRVUZEUVN4WFFVRlhRU3hEUVVGRFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFUdFpRVU0zUTBFc1NVRkJTVUVzVjBGQlYwRXNSMEZCVTBFc1ZVRkJWMEVzUTBGQlEwRXNWMEZCVjBFc1EwRkJRMEU3V1VGRGFFUkJMRVZCUVVWQkxFTkJRVU5CTEVOQlFVTkJMR2xDUVVGVlFTeERRVUZEUVN4WFFVRlhRU3hEUVVGRFFTeEpRVUZKUVN4WFFVRlhRU3hEUVVGRFFTeFhRVUZYUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0blFrRkRka1JCTEZkQlFWZEJMRWRCUVVkQkxGZEJRVmRCTEVOQlFVTkJMRmRCUVZkQkxFTkJRVU5CTzFsQlEzaERRU3hEUVVGRFFUdFpRVU5FUVN4TlFVRk5RU3hEUVVGRFFTeFhRVUZYUVN4RFFVRkRRVHRSUVVOeVFrRXNRMEZCUTBFN1VVRkRSRUVzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzWjBKQlFWTkJMRU5CUVVOQkxFbEJRVWxCTEVOQlFVTkJMRkZCUVZGQkxFTkJRVU5CTEVsQlFVbEJMR2RDUVVGVFFTeERRVUZEUVN4SlFVRkpRU3hEUVVGRFFTeFJRVUZSUVN4RFFVRkRRU3hYUVVGWFFTeERRVUZEUVN4RFFVRkRRU3hEUVVGRFFTeERRVUZEUVR0WlFVTnlSVUVzU1VGQlNVRXNWMEZCVjBFc1IwRkJSMEVzU1VGQlNVRXNRMEZCUTBFc1VVRkJVVUVzUTBGQlEwRXNWMEZCVjBFc1EwRkJRMEVzWVVGQllVRXNSVUZCUlVFc1ZVRkJWVUVzUTBGQlEwRXNRMEZCUTBFN1dVRkRka1ZCTEVWQlFVVkJMRU5CUVVOQkxFTkJRVU5CTEdkQ1FVRlRRU3hEUVVGRFFTeFhRVUZYUVN4RFFVRkRRU3hEUVVGRFFUdG5Ra0ZCUTBFc1RVRkJUVUVzUTBGQlEwRXNWMEZCVjBFc1EwRkJRMEU3VVVGRGFrUkJMRU5CUVVOQk8xRkJRMFJCTEUxQlFVMUJMRU5CUVVOQkxFVkJRVVZCTEVOQlFVTkJPMGxCUTFwQkxFTkJRVU5CTzBsQlJVUk9MRFpEUVVGWlFTeEhRVUZhUVN4VlFVRmhRU3hWUVVGbFFUdFJRVU14UWs4c2VVSkJRWGxDUVR0UlFVTjZRa0VzUlVGQlJVRXNRMEZCUTBFc1EwRkJRMEVzWjBKQlFWTkJMRU5CUVU5QkxGVkJRVmRCTEVOQlFVTkJMRmxCUVZsQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzFsQlF6bERRU3hKUVVGSlFTeFpRVUZaUVN4SFFVRlRRU3hWUVVGWFFTeERRVUZEUVN4WlFVRlpRU3hEUVVGRFFUdFpRVU5zUkVFc1JVRkJSVUVzUTBGQlEwRXNRMEZCUTBFc2FVSkJRVlZCTEVOQlFVTkJMRmxCUVZsQkxFTkJRVU5CTEVsQlFVbEJMRmxCUVZsQkxFTkJRVU5CTEZsQlFWbEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMmRDUVVNeFJFRXNXVUZCV1VFc1IwRkJSMEVzV1VGQldVRXNRMEZCUTBFc1dVRkJXVUVzUTBGQlEwRTdXVUZETTBOQkxFTkJRVU5CTzFsQlEwUkJMRTFCUVUxQkxFTkJRVU5CTEZsQlFWbEJMRU5CUVVOQk8xRkJRM1JDUVN4RFFVRkRRVHRSUVVORVFTeEZRVUZGUVN4RFFVRkRRU3hEUVVGRFFTeG5Ra0ZCVTBFc1EwRkJRMEVzU1VGQlNVRXNRMEZCUTBFc1VVRkJVVUVzUTBGQlEwRXNTVUZCU1VFc1owSkJRVk5CTEVOQlFVTkJMRWxCUVVsQkxFTkJRVU5CTEZGQlFWRkJMRU5CUVVOQkxGZEJRVmRCTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMWxCUTNKRlFTeEpRVUZKUVN4WlFVRlpRU3hIUVVGSFFTeEpRVUZKUVN4RFFVRkRRU3hSUVVGUlFTeERRVUZEUVN4WFFVRlhRU3hEUVVGRFFTeGpRVUZqUVN4RlFVRkZRU3hWUVVGVlFTeERRVUZEUVN4RFFVRkRRVHRaUVVONlJVRXNSVUZCUlVFc1EwRkJRMEVzUTBGQlEwRXNaMEpCUVZOQkxFTkJRVU5CTEZsQlFWbEJMRU5CUVVOQkxFTkJRVU5CTzJkQ1FVRkRRU3hOUVVGTlFTeERRVUZEUVN4WlFVRlpRU3hEUVVGRFFUdFJRVU51UkVFc1EwRkJRMEU3VVVGRFJFRXNUVUZCVFVFc1EwRkJRMEVzUlVGQlJVRXNRMEZCUTBFN1NVRkRXa0VzUTBGQlEwRTdTVUZGUkZBc01rTkJRVlZCTEVkQlFWWkJMRlZCUVZkQkxFbEJRVlZCTzFGQlEyNUNVU3hOUVVGTlFTeEpRVUZKUVN3d1FrRkJZVUVzUTBGQlEwRXNkME5CUVhkRFFTeERRVUZEUVN4RFFVRkRRVHRKUVVOd1JVRXNRMEZCUTBFN1NVRkZSRklzZFVOQlFVMUJMRWRCUVU1QkxGVkJRVTlCTEVsQlFWbEJMRWxCUVdOVExFMUJRVTFCTEVOQlFWZEJMRWxCUVVsQkxGRkJRVkZCTEVOQlFVTkJMRWRCUVVkQkxFVkJRVVZCTEZkQlFWZEJMRWRCUVVkQkxFbEJRVWxCTEVkQlFVZEJMRWRCUVVkQkxFTkJRVU5CTEVOQlFVTkJMRU5CUVVOQkxFTkJRVU5CTzBsQlJXaEhWQ3gxUTBGQlRVRXNSMEZCVGtFc1ZVRkJUMEVzU1VGQldVRTdVVUZEYWtKVkxFMUJRVTFCTEVOQlFWZEJMRWxCUVVsQkxGRkJRVkZCTEVOQlFVTkJMRWRCUVVkQkxFVkJRVVZCTEVkQlFVZEJMRVZCUVVWQkxGZEJRVmRCTEVkQlFVZEJMRWxCUVVsQkxFZEJRVWRCTEU5QlFVOUJMRU5CUVVOQkxFTkJRVU5CTzBsQlEzaEZRU3hEUVVGRFFUdEpRVVZFVml4MVEwRkJUVUVzUjBGQlRrRXNWVUZCVDBFc1NVRkJXVUU3VVVGRGFrSlhMRWxCUVVsQkxGbEJRVmxCTEVkQlFVZEJMRmxCUVZWQkxFbEJRVWxCTERaQ1FVRjFRa0VzU1VGQlNVRXNOa05CUXpkRFFTeEpRVUZKUVN4eFFrRkJhMEpCTEVOQlFVTkJPMUZCUTNSRFFTeE5RVUZOUVN4RFFVRlhRU3hKUVVGSlFTeFJRVUZSUVN4RFFVRkRRU3hIUVVGSFFTeEZRVUZGUVN4TlFVRk5RU3hGUVVGRlFTeFpRVUZaUVN4RFFVRkRRU3hEUVVGRFFUdEpRVU16UkVFc1EwRkJRMEU3U1VGRlJGZ3NhMGRCUVd0SFFUdEpRVU5zUjBFc01FTkJRVk5CTEVkQlFWUkJMRlZCUVZWQkxFbEJRVlZCTEVsQlFWbFpMRTFCUVUxQkxFTkJRVU5CTEVsQlFVbEJMRU5CUVVOQkxFTkJRVU5CTEVOQlFVTkJPMGxCUTJoRVdpdzJRa0ZCUTBFN1FVRkJSRUVzUTBGQlEwRXNRVUY0UzBRc1NVRjNTME03UVVGNFMxa3NPRUpCUVhOQ0xIbENRWGRMYkVNc1EwRkJRU0lzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WEc0Z0lGUjVjR1VzWEc0Z0lHbHpVSEpsYzJWdWRDeGNiaUFnYVhOR2RXNWpkR2x2Yml4Y2JpQWdaMnh2WW1Gc0xGeHVJQ0J6ZEhKcGJtZHBabmtzWEc0Z0lFTnZibU55WlhSbFZIbHdaVnh1ZlNCbWNtOXRJQ2RoYm1kMWJHRnlNaTl6Y21NdlptRmpZV1JsTDJ4aGJtY25PMXh1YVcxd2IzSjBJSHRDWVhObFJYaGpaWEIwYVc5dWZTQm1jbTl0SUNkaGJtZDFiR0Z5TWk5emNtTXZabUZqWVdSbEwyVjRZMlZ3ZEdsdmJuTW5PMXh1YVcxd2IzSjBJSHRIWlhSMFpYSkdiaXdnVTJWMGRHVnlSbTRzSUUxbGRHaHZaRVp1ZlNCbWNtOXRJQ2N1TDNSNWNHVnpKenRjYm1sdGNHOXlkQ0I3VUd4aGRHWnZjbTFTWldac1pXTjBhVzl1UTJGd1lXSnBiR2wwYVdWemZTQm1jbTl0SUNjdUwzQnNZWFJtYjNKdFgzSmxabXhsWTNScGIyNWZZMkZ3WVdKcGJHbDBhV1Z6Snp0Y2JseHVaWGh3YjNKMElHTnNZWE56SUZKbFpteGxZM1JwYjI1RFlYQmhZbWxzYVhScFpYTWdhVzF3YkdWdFpXNTBjeUJRYkdGMFptOXliVkpsWm14bFkzUnBiMjVEWVhCaFltbHNhWFJwWlhNZ2UxeHVJQ0J3Y21sMllYUmxJRjl5Wldac1pXTjBPaUJoYm5rN1hHNWNiaUFnWTI5dWMzUnlkV04wYjNJb2NtVm1iR1ZqZEQ4NklHRnVlU2tnZXlCMGFHbHpMbDl5Wldac1pXTjBJRDBnYVhOUWNtVnpaVzUwS0hKbFpteGxZM1FwSUQ4Z2NtVm1iR1ZqZENBNklHZHNiMkpoYkM1U1pXWnNaV04wT3lCOVhHNWNiaUFnYVhOU1pXWnNaV04wYVc5dVJXNWhZbXhsWkNncE9pQmliMjlzWldGdUlIc2djbVYwZFhKdUlIUnlkV1U3SUgxY2JseHVJQ0JtWVdOMGIzSjVLSFE2SUVOdmJtTnlaWFJsVkhsd1pTazZJRVoxYm1OMGFXOXVJSHRjYmlBZ0lDQnpkMmwwWTJnZ0tIUXViR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQmpZWE5sSURBNlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb0tTQTlQaUJ1WlhjZ2RDZ3BPMXh1SUNBZ0lDQWdZMkZ6WlNBeE9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHRXhLU0E5UGlCdVpYY2dkQ2hoTVNrN1hHNGdJQ0FnSUNCallYTmxJREk2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvWVRFc0lHRXlLU0E5UGlCdVpYY2dkQ2hoTVN3Z1lUSXBPMXh1SUNBZ0lDQWdZMkZ6WlNBek9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHRXhMQ0JoTWl3Z1lUTXBJRDArSUc1bGR5QjBLR0V4TENCaE1pd2dZVE1wTzF4dUlDQWdJQ0FnWTJGelpTQTBPbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLR0V4TENCaE1pd2dZVE1zSUdFMEtTQTlQaUJ1WlhjZ2RDaGhNU3dnWVRJc0lHRXpMQ0JoTkNrN1hHNGdJQ0FnSUNCallYTmxJRFU2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvWVRFc0lHRXlMQ0JoTXl3Z1lUUXNJR0UxS1NBOVBpQnVaWGNnZENoaE1Td2dZVElzSUdFekxDQmhOQ3dnWVRVcE8xeHVJQ0FnSUNBZ1kyRnpaU0EyT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0dFeExDQmhNaXdnWVRNc0lHRTBMQ0JoTlN3Z1lUWXBJRDArSUc1bGR5QjBLR0V4TENCaE1pd2dZVE1zSUdFMExDQmhOU3dnWVRZcE8xeHVJQ0FnSUNBZ1kyRnpaU0EzT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0dFeExDQmhNaXdnWVRNc0lHRTBMQ0JoTlN3Z1lUWXNJR0UzS1NBOVBpQnVaWGNnZENoaE1Td2dZVElzSUdFekxDQmhOQ3dnWVRVc0lHRTJMQ0JoTnlrN1hHNGdJQ0FnSUNCallYTmxJRGc2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvWVRFc0lHRXlMQ0JoTXl3Z1lUUXNJR0UxTENCaE5pd2dZVGNzSUdFNEtTQTlQaUJ1WlhjZ2RDaGhNU3dnWVRJc0lHRXpMQ0JoTkN3Z1lUVXNJR0UyTENCaE55d2dZVGdwTzF4dUlDQWdJQ0FnWTJGelpTQTVPbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLR0V4TENCaE1pd2dZVE1zSUdFMExDQmhOU3dnWVRZc0lHRTNMQ0JoT0N3Z1lUa3BJRDArSUc1bGR5QjBLR0V4TENCaE1pd2dZVE1zSUdFMExDQmhOU3dnWVRZc0lHRTNMQ0JoT0N3Z1lUa3BPMXh1SUNBZ0lDQWdZMkZ6WlNBeE1EcGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaGhNU3dnWVRJc0lHRXpMQ0JoTkN3Z1lUVXNJR0UyTENCaE55d2dZVGdzSUdFNUxDQmhNVEFwSUQwK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzSUhRb1lURXNJR0V5TENCaE15d2dZVFFzSUdFMUxDQmhOaXdnWVRjc0lHRTRMQ0JoT1N3Z1lURXdLVHRjYmlBZ0lDQWdJR05oYzJVZ01URTZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9ZVEVzSUdFeUxDQmhNeXdnWVRRc0lHRTFMQ0JoTml3Z1lUY3NJR0U0TENCaE9Td2dZVEV3TENCaE1URXBJRDArWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNJSFFvWVRFc0lHRXlMQ0JoTXl3Z1lUUXNJR0UxTENCaE5pd2dZVGNzSUdFNExDQmhPU3dnWVRFd0xDQmhNVEVwTzF4dUlDQWdJQ0FnWTJGelpTQXhNanBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2hoTVN3Z1lUSXNJR0V6TENCaE5Dd2dZVFVzSUdFMkxDQmhOeXdnWVRnc0lHRTVMQ0JoTVRBc0lHRXhNU3dnWVRFeUtTQTlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGR5QjBLR0V4TENCaE1pd2dZVE1zSUdFMExDQmhOU3dnWVRZc0lHRTNMQ0JoT0N3Z1lUa3NJR0V4TUN3Z1lURXhMQ0JoTVRJcE8xeHVJQ0FnSUNBZ1kyRnpaU0F4TXpwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoaE1Td2dZVElzSUdFekxDQmhOQ3dnWVRVc0lHRTJMQ0JoTnl3Z1lUZ3NJR0U1TENCaE1UQXNJR0V4TVN3Z1lURXlMQ0JoTVRNcElEMCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM0lIUW9ZVEVzSUdFeUxDQmhNeXdnWVRRc0lHRTFMQ0JoTml3Z1lUY3NJR0U0TENCaE9Td2dZVEV3TENCaE1URXNJR0V4TWl3Z1lURXpLVHRjYmlBZ0lDQWdJR05oYzJVZ01UUTZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9ZVEVzSUdFeUxDQmhNeXdnWVRRc0lHRTFMQ0JoTml3Z1lUY3NJR0U0TENCaE9Td2dZVEV3TENCaE1URXNJR0V4TWl3Z1lURXpMQ0JoTVRRcElEMCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM0lIUW9ZVEVzSUdFeUxDQmhNeXdnWVRRc0lHRTFMQ0JoTml3Z1lUY3NJR0U0TENCaE9Td2dZVEV3TENCaE1URXNJR0V4TWl3Z1lURXpMQ0JoTVRRcE8xeHVJQ0FnSUNBZ1kyRnpaU0F4TlRwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoaE1Td2dZVElzSUdFekxDQmhOQ3dnWVRVc0lHRTJMQ0JoTnl3Z1lUZ3NJR0U1TENCaE1UQXNJR0V4TVN3Z1lURXlMQ0JoTVRNc0lHRXhOQ3dnWVRFMUtTQTlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGR5QjBLR0V4TENCaE1pd2dZVE1zSUdFMExDQmhOU3dnWVRZc0lHRTNMQ0JoT0N3Z1lUa3NJR0V4TUN3Z1lURXhMQ0JoTVRJc0lHRXhNeXdnWVRFMExDQmhNVFVwTzF4dUlDQWdJQ0FnWTJGelpTQXhOanBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2hoTVN3Z1lUSXNJR0V6TENCaE5Dd2dZVFVzSUdFMkxDQmhOeXdnWVRnc0lHRTVMQ0JoTVRBc0lHRXhNU3dnWVRFeUxDQmhNVE1zSUdFeE5Dd2dZVEUxTENCaE1UWXBJRDArWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNJSFFvWVRFc0lHRXlMQ0JoTXl3Z1lUUXNJR0UxTENCaE5pd2dZVGNzSUdFNExDQmhPU3dnWVRFd0xDQmhNVEVzSUdFeE1pd2dZVEV6TENCaE1UUXNJR0V4TlN3Z1lURTJLVHRjYmlBZ0lDQWdJR05oYzJVZ01UYzZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9ZVEVzSUdFeUxDQmhNeXdnWVRRc0lHRTFMQ0JoTml3Z1lUY3NJR0U0TENCaE9Td2dZVEV3TENCaE1URXNJR0V4TWl3Z1lURXpMQ0JoTVRRc0lHRXhOU3dnWVRFMkxDQmhNVGNwSUQwK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzSUhRb1lURXNJR0V5TENCaE15d2dZVFFzSUdFMUxDQmhOaXdnWVRjc0lHRTRMQ0JoT1N3Z1lURXdMQ0JoTVRFc0lHRXhNaXdnWVRFekxDQmhNVFFzSUdFeE5Td2dZVEUyTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdFeE55azdYRzRnSUNBZ0lDQmpZWE5sSURFNE9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHRXhMQ0JoTWl3Z1lUTXNJR0UwTENCaE5Td2dZVFlzSUdFM0xDQmhPQ3dnWVRrc0lHRXhNQ3dnWVRFeExDQmhNVElzSUdFeE15d2dZVEUwTENCaE1UVXNJR0V4Tml3Z1lURTNMQ0JoTVRncElEMCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM0lIUW9ZVEVzSUdFeUxDQmhNeXdnWVRRc0lHRTFMQ0JoTml3Z1lUY3NJR0U0TENCaE9Td2dZVEV3TENCaE1URXNJR0V4TWl3Z1lURXpMQ0JoTVRRc0lHRXhOU3dnWVRFMkxDQmhNVGNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVRFNEtUdGNiaUFnSUNBZ0lHTmhjMlVnTVRrNlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb1lURXNJR0V5TENCaE15d2dZVFFzSUdFMUxDQmhOaXdnWVRjc0lHRTRMQ0JoT1N3Z1lURXdMQ0JoTVRFc0lHRXhNaXdnWVRFekxDQmhNVFFzSUdFeE5Td2dZVEUyTENCaE1UY3NJR0V4T0N4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaE1Ua3BJRDArSUc1bGR5QjBLR0V4TENCaE1pd2dZVE1zSUdFMExDQmhOU3dnWVRZc0lHRTNMQ0JoT0N3Z1lUa3NJR0V4TUN3Z1lURXhMQ0JoTVRJc0lHRXhNeXdnWVRFMExDQmhNVFVzSUdFeE5peGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdFeE55d2dZVEU0TENCaE1Ua3BPMXh1SUNBZ0lDQWdZMkZ6WlNBeU1EcGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaGhNU3dnWVRJc0lHRXpMQ0JoTkN3Z1lUVXNJR0UyTENCaE55d2dZVGdzSUdFNUxDQmhNVEFzSUdFeE1Td2dZVEV5TENCaE1UTXNJR0V4TkN3Z1lURTFMQ0JoTVRZc0lHRXhOeXdnWVRFNExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRXhPU3dnWVRJd0tTQTlQaUJ1WlhjZ2RDaGhNU3dnWVRJc0lHRXpMQ0JoTkN3Z1lUVXNJR0UyTENCaE55d2dZVGdzSUdFNUxDQmhNVEFzSUdFeE1Td2dZVEV5TENCaE1UTXNJR0V4TkN3Z1lURTFMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoTVRZc0lHRXhOeXdnWVRFNExDQmhNVGtzSUdFeU1DazdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY2JpQWdJQ0FnSUNBZ1lFTmhibTV2ZENCamNtVmhkR1VnWVNCbVlXTjBiM0o1SUdadmNpQW5KSHR6ZEhKcGJtZHBabmtvZENsOUp5QmlaV05oZFhObElHbDBjeUJqYjI1emRISjFZM1J2Y2lCb1lYTWdiVzl5WlNCMGFHRnVJREl3SUdGeVozVnRaVzUwYzJBcE8xeHVJQ0I5WEc1Y2JpQWdMeW9xSUVCcGJuUmxjbTVoYkNBcUwxeHVJQ0JmZW1sd1ZIbHdaWE5CYm1SQmJtNXZkR0ZwYjI1ektIQmhjbUZ0Vkhsd1pYTXNJSEJoY21GdFFXNXViM1JoZEdsdmJuTXBPaUJoYm5sYlhWdGRJSHRjYmlBZ0lDQjJZWElnY21WemRXeDBPMXh1WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJ3WVhKaGJWUjVjR1Z6SUQwOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJQ0FnY21WemRXeDBJRDBnYm1WM0lFRnljbUY1S0hCaGNtRnRRVzV1YjNSaGRHbHZibk11YkdWdVozUm9LVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2NtVnpkV3gwSUQwZ2JtVjNJRUZ5Y21GNUtIQmhjbUZ0Vkhsd1pYTXViR1Z1WjNSb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElISmxjM1ZzZEM1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdMeThnVkZNZ2IzVjBjSFYwY3lCUFltcGxZM1FnWm05eUlIQmhjbUZ0WlhSbGNuTWdkMmwwYUc5MWRDQjBlWEJsY3l3Z2QyaHBiR1VnVkhKaFkyVjFjaUJ2YldsMGMxeHVJQ0FnSUNBZ0x5OGdkR2hsSUdGdWJtOTBZWFJwYjI1ekxpQkdiM0lnYm05M0lIZGxJSEJ5WlhObGNuWmxJSFJvWlNCVWNtRmpaWFZ5SUdKbGFHRjJhVzl5SUhSdklHRnBaRnh1SUNBZ0lDQWdMeThnYldsbmNtRjBhVzl1TENCaWRYUWdkR2hwY3lCallXNGdZbVVnY21WMmFYTnBkR1ZrTGx4dUlDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCd1lYSmhiVlI1Y0dWeklEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUNBZ0lDQnlaWE4xYkhSYmFWMGdQU0JiWFR0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2NHRnlZVzFVZVhCbGMxdHBYU0FoUFNCUFltcGxZM1FwSUh0Y2JpQWdJQ0FnSUNBZ2NtVnpkV3gwVzJsZElEMGdXM0JoY21GdFZIbHdaWE5iYVYxZE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NtVnpkV3gwVzJsZElEMGdXMTA3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JwWmlBb2FYTlFjbVZ6Wlc1MEtIQmhjbUZ0UVc1dWIzUmhkR2x2Ym5NcElDWW1JR2x6VUhKbGMyVnVkQ2h3WVhKaGJVRnVibTkwWVhScGIyNXpXMmxkS1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWE4xYkhSYmFWMGdQU0J5WlhOMWJIUmJhVjB1WTI5dVkyRjBLSEJoY21GdFFXNXViM1JoZEdsdmJuTmJhVjBwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2NtVnpkV3gwTzF4dUlDQjlYRzVjYmlBZ2NHRnlZVzFsZEdWeWN5aDBlWEJsVDNKR2RXNWpPaUJVZVhCbEtUb2dZVzU1VzExYlhTQjdYRzRnSUNBZ0x5OGdVSEpsWm1WeUlIUm9aU0JrYVhKbFkzUWdRVkJKTGx4dUlDQWdJR2xtSUNocGMxQnlaWE5sYm5Rb0tEeGhibmsrZEhsd1pVOXlSblZ1WXlrdWNHRnlZVzFsZEdWeWN5a3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9QR0Z1ZVQ1MGVYQmxUM0pHZFc1aktTNXdZWEpoYldWMFpYSnpPMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9hWE5RY21WelpXNTBLSFJvYVhNdVgzSmxabXhsWTNRcElDWW1JR2x6VUhKbGMyVnVkQ2gwYUdsekxsOXlaV1pzWldOMExtZGxkRTFsZEdGa1lYUmhLU2tnZTF4dUlDQWdJQ0FnZG1GeUlIQmhjbUZ0UVc1dWIzUmhkR2x2Ym5NZ1BTQjBhR2x6TGw5eVpXWnNaV04wTG1kbGRFMWxkR0ZrWVhSaEtDZHdZWEpoYldWMFpYSnpKeXdnZEhsd1pVOXlSblZ1WXlrN1hHNGdJQ0FnSUNCMllYSWdjR0Z5WVcxVWVYQmxjeUE5SUhSb2FYTXVYM0psWm14bFkzUXVaMlYwVFdWMFlXUmhkR0VvSjJSbGMybG5ianB3WVhKaGJYUjVjR1Z6Snl3Z2RIbHdaVTl5Um5WdVl5azdYRzRnSUNBZ0lDQnBaaUFvYVhOUWNtVnpaVzUwS0hCaGNtRnRWSGx3WlhNcElIeDhJR2x6VUhKbGMyVnVkQ2h3WVhKaGJVRnVibTkwWVhScGIyNXpLU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZlbWx3Vkhsd1pYTkJibVJCYm01dmRHRnBiMjV6S0hCaGNtRnRWSGx3WlhNc0lIQmhjbUZ0UVc1dWIzUmhkR2x2Ym5NcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0F2THlCVWFHVWdZWEp5WVhrZ2FHRnpJSFJ2SUdKbElHWnBiR3hsWkNCM2FYUm9JR0IxYm1SbFptbHVaV1JnSUdKbFkyRjFjMlVnYUc5c1pYTWdkMjkxYkdRZ1ltVWdjMnRwY0hCbFpDQmllU0JnYzI5dFpXQmNiaUFnSUNCc1pYUWdjR0Z5WVcxbGRHVnljeUE5SUc1bGR5QkJjbkpoZVNnb1BHRnVlVDUwZVhCbFQzSkdkVzVqTG14bGJtZDBhQ2twTzF4dUlDQWdJSEJoY21GdFpYUmxjbk11Wm1sc2JDaDFibVJsWm1sdVpXUXBPMXh1SUNBZ0lISmxkSFZ5YmlCd1lYSmhiV1YwWlhKek8xeHVJQ0I5WEc1Y2JpQWdZVzV1YjNSaGRHbHZibk1vZEhsd1pVOXlSblZ1WXpvZ1ZIbHdaU2s2SUdGdWVWdGRJSHRjYmlBZ0lDQXZMeUJRY21WbVpYSWdkR2hsSUdScGNtVmpkQ0JCVUVrdVhHNGdJQ0FnYVdZZ0tHbHpVSEpsYzJWdWRDZ29QR0Z1ZVQ1MGVYQmxUM0pHZFc1aktTNWhibTV2ZEdGMGFXOXVjeWtwSUh0Y2JpQWdJQ0FnSUhaaGNpQmhibTV2ZEdGMGFXOXVjeUE5SUNnOFlXNTVQblI1Y0dWUGNrWjFibU1wTG1GdWJtOTBZWFJwYjI1ek8xeHVJQ0FnSUNBZ2FXWWdLR2x6Um5WdVkzUnBiMjRvWVc1dWIzUmhkR2x2Ym5NcElDWW1JR0Z1Ym05MFlYUnBiMjV6TG1GdWJtOTBZWFJwYjI1ektTQjdYRzRnSUNBZ0lDQWdJR0Z1Ym05MFlYUnBiMjV6SUQwZ1lXNXViM1JoZEdsdmJuTXVZVzV1YjNSaGRHbHZibk03WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZVzV1YjNSaGRHbHZibk03WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2hwYzFCeVpYTmxiblFvZEdocGN5NWZjbVZtYkdWamRDa2dKaVlnYVhOUWNtVnpaVzUwS0hSb2FYTXVYM0psWm14bFkzUXVaMlYwVFdWMFlXUmhkR0VwS1NCN1hHNGdJQ0FnSUNCMllYSWdZVzV1YjNSaGRHbHZibk1nUFNCMGFHbHpMbDl5Wldac1pXTjBMbWRsZEUxbGRHRmtZWFJoS0NkaGJtNXZkR0YwYVc5dWN5Y3NJSFI1Y0dWUGNrWjFibU1wTzF4dUlDQWdJQ0FnYVdZZ0tHbHpVSEpsYzJWdWRDaGhibTV2ZEdGMGFXOXVjeWtwSUhKbGRIVnliaUJoYm01dmRHRjBhVzl1Y3p0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlGdGRPMXh1SUNCOVhHNWNiaUFnY0hKdmNFMWxkR0ZrWVhSaEtIUjVjR1ZQY2taMWJtTTZJR0Z1ZVNrNklIdGJhMlY1T2lCemRISnBibWRkT2lCaGJubGJYWDBnZTF4dUlDQWdJQzh2SUZCeVpXWmxjaUIwYUdVZ1pHbHlaV04wSUVGUVNTNWNiaUFnSUNCcFppQW9hWE5RY21WelpXNTBLQ2c4WVc1NVBuUjVjR1ZQY2taMWJtTXBMbkJ5YjNCTlpYUmhaR0YwWVNrcElIdGNiaUFnSUNBZ0lIWmhjaUJ3Y205d1RXVjBZV1JoZEdFZ1BTQW9QR0Z1ZVQ1MGVYQmxUM0pHZFc1aktTNXdjbTl3VFdWMFlXUmhkR0U3WEc0Z0lDQWdJQ0JwWmlBb2FYTkdkVzVqZEdsdmJpaHdjbTl3VFdWMFlXUmhkR0VwSUNZbUlIQnliM0JOWlhSaFpHRjBZUzV3Y205d1RXVjBZV1JoZEdFcElIdGNiaUFnSUNBZ0lDQWdjSEp2Y0UxbGRHRmtZWFJoSUQwZ2NISnZjRTFsZEdGa1lYUmhMbkJ5YjNCTlpYUmhaR0YwWVR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhKbGRIVnliaUJ3Y205d1RXVjBZV1JoZEdFN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNocGMxQnlaWE5sYm5Rb2RHaHBjeTVmY21WbWJHVmpkQ2tnSmlZZ2FYTlFjbVZ6Wlc1MEtIUm9hWE11WDNKbFpteGxZM1F1WjJWMFRXVjBZV1JoZEdFcEtTQjdYRzRnSUNBZ0lDQjJZWElnY0hKdmNFMWxkR0ZrWVhSaElEMGdkR2hwY3k1ZmNtVm1iR1ZqZEM1blpYUk5aWFJoWkdGMFlTZ25jSEp2Y0UxbGRHRmtZWFJoSnl3Z2RIbHdaVTl5Um5WdVl5azdYRzRnSUNBZ0lDQnBaaUFvYVhOUWNtVnpaVzUwS0hCeWIzQk5aWFJoWkdGMFlTa3BJSEpsZEhWeWJpQndjbTl3VFdWMFlXUmhkR0U3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCN2ZUdGNiaUFnZlZ4dVhHNGdJR2x1ZEdWeVptRmpaWE1vZEhsd1pUb2dWSGx3WlNrNklHRnVlVnRkSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUW1GelpVVjRZMlZ3ZEdsdmJpaGNJa3BoZG1GVFkzSnBjSFFnWkc5bGN5QnViM1FnYzNWd2NHOXlkQ0JwYm5SbGNtWmhZMlZ6WENJcE8xeHVJQ0I5WEc1Y2JpQWdaMlYwZEdWeUtHNWhiV1U2SUhOMGNtbHVaeWs2SUVkbGRIUmxja1p1SUhzZ2NtVjBkWEp1SUR4SFpYUjBaWEpHYmo1dVpYY2dSblZ1WTNScGIyNG9KMjhuTENBbmNtVjBkWEp1SUc4dUp5QXJJRzVoYldVZ0t5QW5PeWNwT3lCOVhHNWNiaUFnYzJWMGRHVnlLRzVoYldVNklITjBjbWx1WnlrNklGTmxkSFJsY2tadUlIdGNiaUFnSUNCeVpYUjFjbTRnUEZObGRIUmxja1p1UG01bGR5QkdkVzVqZEdsdmJpZ25ieWNzSUNkMkp5d2dKM0psZEhWeWJpQnZMaWNnS3lCdVlXMWxJQ3NnSnlBOUlIWTdKeWs3WEc0Z0lIMWNibHh1SUNCdFpYUm9iMlFvYm1GdFpUb2djM1J5YVc1bktUb2dUV1YwYUc5a1JtNGdlMXh1SUNBZ0lHeGxkQ0JtZFc1amRHbHZia0p2WkhrZ1BTQmdhV1lnS0NGdkxpUjdibUZ0WlgwcElIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblhDSWtlMjVoYldWOVhDSWdhWE1nZFc1a1pXWnBibVZrSnlrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdkxpUjdibUZ0WlgwdVlYQndiSGtvYnl3Z1lYSm5jeWs3WUR0Y2JpQWdJQ0J5WlhSMWNtNGdQRTFsZEdodlpFWnVQbTVsZHlCR2RXNWpkR2x2YmlnbmJ5Y3NJQ2RoY21kekp5d2dablZ1WTNScGIyNUNiMlI1S1R0Y2JpQWdmVnh1WEc0Z0lDOHZJRlJvWlhKbElHbHpJRzV2ZENCaElHTnZibU5sY0hRZ2IyWWdhVzF3YjNKMElIVnlhU0JwYmlCS2N5d2dZblYwSUhSb2FYTWdhWE1nZFhObFpuVnNJR2x1SUdSbGRtVnNiM0JwYm1jZ1JHRnlkQ0JoY0hCc2FXTmhkR2x2Ym5NdVhHNGdJR2x0Y0c5eWRGVnlhU2gwZVhCbE9pQlVlWEJsS1RvZ2MzUnlhVzVuSUhzZ2NtVjBkWEp1SUNjdUx5YzdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYW5ndWxhcjIvc3JjL2NvcmUvcmVmbGVjdGlvbi9yZWZsZWN0aW9uX2NhcGFiaWxpdGllcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBzdHJpbmdpZnksIGlzQmxhbmsgfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHsgQmFzZUV4Y2VwdGlvbiB9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQgeyBUeXBlTGl0ZXJhbCB9IGZyb20gJy4vdHlwZV9saXRlcmFsJztcbmltcG9ydCB7IHJlc29sdmVGb3J3YXJkUmVmIH0gZnJvbSAnLi9mb3J3YXJkX3JlZic7XG5leHBvcnQgeyBUeXBlTGl0ZXJhbCB9IGZyb20gJy4vdHlwZV9saXRlcmFsJztcbmV4cG9ydCBjbGFzcyBLZXkge1xuICAgIGNvbnN0cnVjdG9yKHRva2VuLCBpZCkge1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgaWYgKGlzQmxhbmsodG9rZW4pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbignVG9rZW4gbXVzdCBiZSBkZWZpbmVkIScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBkaXNwbGF5TmFtZSgpIHsgcmV0dXJuIHN0cmluZ2lmeSh0aGlzLnRva2VuKTsgfVxuICAgIHN0YXRpYyBnZXQodG9rZW4pIHsgcmV0dXJuIF9nbG9iYWxLZXlSZWdpc3RyeS5nZXQocmVzb2x2ZUZvcndhcmRSZWYodG9rZW4pKTsgfVxuICAgIHN0YXRpYyBnZXQgbnVtYmVyT2ZLZXlzKCkgeyByZXR1cm4gX2dsb2JhbEtleVJlZ2lzdHJ5Lm51bWJlck9mS2V5czsgfVxufVxuZXhwb3J0IGNsYXNzIEtleVJlZ2lzdHJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fYWxsS2V5cyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgZ2V0KHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIEtleSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgdmFyIHRoZVRva2VuID0gdG9rZW47XG4gICAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIFR5cGVMaXRlcmFsKSB7XG4gICAgICAgICAgICB0aGVUb2tlbiA9IHRva2VuLnR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW4gPSB0aGVUb2tlbjtcbiAgICAgICAgaWYgKHRoaXMuX2FsbEtleXMuaGFzKHRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FsbEtleXMuZ2V0KHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3S2V5ID0gbmV3IEtleSh0b2tlbiwgS2V5Lm51bWJlck9mS2V5cyk7XG4gICAgICAgIHRoaXMuX2FsbEtleXMuc2V0KHRva2VuLCBuZXdLZXkpO1xuICAgICAgICByZXR1cm4gbmV3S2V5O1xuICAgIH1cbiAgICBnZXQgbnVtYmVyT2ZLZXlzKCkgeyByZXR1cm4gdGhpcy5fYWxsS2V5cy5zaXplOyB9XG59XG52YXIgX2dsb2JhbEtleVJlZ2lzdHJ5ID0gbmV3IEtleVJlZ2lzdHJ5KCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb3JlL2RpL2tleS50c1xuICoqLyIsImV4cG9ydCBjbGFzcyBUeXBlTGl0ZXJhbCB7XG4gICAgZ2V0IHR5cGUoKSB7IHRocm93IG5ldyBFcnJvcihcIlR5cGUgbGl0ZXJhbHMgYXJlIG9ubHkgc3VwcG9ydGVkIGluIERhcnRcIik7IH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvcmUvZGkvdHlwZV9saXRlcmFsLnRzXG4gKiovIiwiaW1wb3J0IHsgTGlzdFdyYXBwZXIgfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgc3RyaW5naWZ5LCBpc0JsYW5rIH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7IEJhc2VFeGNlcHRpb24sIFdyYXBwZWRFeGNlcHRpb24gfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuZnVuY3Rpb24gZmluZEZpcnN0Q2xvc2VkQ3ljbGUoa2V5cykge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKExpc3RXcmFwcGVyLmNvbnRhaW5zKHJlcywga2V5c1tpXSkpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGtleXNbaV0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGtleXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBjb25zdHJ1Y3RSZXNvbHZpbmdQYXRoKGtleXMpIHtcbiAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciByZXZlcnNlZCA9IGZpbmRGaXJzdENsb3NlZEN5Y2xlKExpc3RXcmFwcGVyLnJldmVyc2VkKGtleXMpKTtcbiAgICAgICAgdmFyIHRva2VuU3RycyA9IHJldmVyc2VkLm1hcChrID0+IHN0cmluZ2lmeShrLnRva2VuKSk7XG4gICAgICAgIHJldHVybiBcIiAoXCIgKyB0b2tlblN0cnMuam9pbignIC0+ICcpICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQWJzdHJhY3RQcm92aWRlckVycm9yIGV4dGVuZHMgQmFzZUV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IoaW5qZWN0b3IsIGtleSwgY29uc3RydWN0UmVzb2x2aW5nTWVzc2FnZSkge1xuICAgICAgICBzdXBlcihcIkRJIEV4Y2VwdGlvblwiKTtcbiAgICAgICAgdGhpcy5rZXlzID0gW2tleV07XG4gICAgICAgIHRoaXMuaW5qZWN0b3JzID0gW2luamVjdG9yXTtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RSZXNvbHZpbmdNZXNzYWdlID0gY29uc3RydWN0UmVzb2x2aW5nTWVzc2FnZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5jb25zdHJ1Y3RSZXNvbHZpbmdNZXNzYWdlKHRoaXMua2V5cyk7XG4gICAgfVxuICAgIGFkZEtleShpbmplY3Rvciwga2V5KSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3JzLnB1c2goaW5qZWN0b3IpO1xuICAgICAgICB0aGlzLmtleXMucHVzaChrZXkpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmNvbnN0cnVjdFJlc29sdmluZ01lc3NhZ2UodGhpcy5rZXlzKTtcbiAgICB9XG4gICAgZ2V0IGNvbnRleHQoKSB7IHJldHVybiB0aGlzLmluamVjdG9yc1t0aGlzLmluamVjdG9ycy5sZW5ndGggLSAxXS5kZWJ1Z0NvbnRleHQoKTsgfVxufVxuZXhwb3J0IGNsYXNzIE5vUHJvdmlkZXJFcnJvciBleHRlbmRzIEFic3RyYWN0UHJvdmlkZXJFcnJvciB7XG4gICAgY29uc3RydWN0b3IoaW5qZWN0b3IsIGtleSkge1xuICAgICAgICBzdXBlcihpbmplY3Rvciwga2V5LCBmdW5jdGlvbiAoa2V5cykge1xuICAgICAgICAgICAgdmFyIGZpcnN0ID0gc3RyaW5naWZ5KExpc3RXcmFwcGVyLmZpcnN0KGtleXMpLnRva2VuKTtcbiAgICAgICAgICAgIHJldHVybiBgTm8gcHJvdmlkZXIgZm9yICR7Zmlyc3R9ISR7Y29uc3RydWN0UmVzb2x2aW5nUGF0aChrZXlzKX1gO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ3ljbGljRGVwZW5kZW5jeUVycm9yIGV4dGVuZHMgQWJzdHJhY3RQcm92aWRlckVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihpbmplY3Rvciwga2V5KSB7XG4gICAgICAgIHN1cGVyKGluamVjdG9yLCBrZXksIGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgICAgICByZXR1cm4gYENhbm5vdCBpbnN0YW50aWF0ZSBjeWNsaWMgZGVwZW5kZW5jeSEke2NvbnN0cnVjdFJlc29sdmluZ1BhdGgoa2V5cyl9YDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEluc3RhbnRpYXRpb25FcnJvciBleHRlbmRzIFdyYXBwZWRFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGluamVjdG9yLCBvcmlnaW5hbEV4Y2VwdGlvbiwgb3JpZ2luYWxTdGFjaywga2V5KSB7XG4gICAgICAgIHN1cGVyKFwiREkgRXhjZXB0aW9uXCIsIG9yaWdpbmFsRXhjZXB0aW9uLCBvcmlnaW5hbFN0YWNrLCBudWxsKTtcbiAgICAgICAgdGhpcy5rZXlzID0gW2tleV07XG4gICAgICAgIHRoaXMuaW5qZWN0b3JzID0gW2luamVjdG9yXTtcbiAgICB9XG4gICAgYWRkS2V5KGluamVjdG9yLCBrZXkpIHtcbiAgICAgICAgdGhpcy5pbmplY3RvcnMucHVzaChpbmplY3Rvcik7XG4gICAgICAgIHRoaXMua2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGdldCB3cmFwcGVyTWVzc2FnZSgpIHtcbiAgICAgICAgdmFyIGZpcnN0ID0gc3RyaW5naWZ5KExpc3RXcmFwcGVyLmZpcnN0KHRoaXMua2V5cykudG9rZW4pO1xuICAgICAgICByZXR1cm4gYEVycm9yIGR1cmluZyBpbnN0YW50aWF0aW9uIG9mICR7Zmlyc3R9ISR7Y29uc3RydWN0UmVzb2x2aW5nUGF0aCh0aGlzLmtleXMpfS5gO1xuICAgIH1cbiAgICBnZXQgY2F1c2VLZXkoKSB7IHJldHVybiB0aGlzLmtleXNbMF07IH1cbiAgICBnZXQgY29udGV4dCgpIHsgcmV0dXJuIHRoaXMuaW5qZWN0b3JzW3RoaXMuaW5qZWN0b3JzLmxlbmd0aCAtIDFdLmRlYnVnQ29udGV4dCgpOyB9XG59XG5leHBvcnQgY2xhc3MgSW52YWxpZFByb3ZpZGVyRXJyb3IgZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm92aWRlcikge1xuICAgICAgICBzdXBlcihcIkludmFsaWQgcHJvdmlkZXIgLSBvbmx5IGluc3RhbmNlcyBvZiBQcm92aWRlciBhbmQgVHlwZSBhcmUgYWxsb3dlZCwgZ290OiBcIiArXG4gICAgICAgICAgICBwcm92aWRlci50b1N0cmluZygpKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTm9Bbm5vdGF0aW9uRXJyb3IgZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlT3JGdW5jLCBwYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoTm9Bbm5vdGF0aW9uRXJyb3IuX2dlbk1lc3NhZ2UodHlwZU9yRnVuYywgcGFyYW1zKSk7XG4gICAgfVxuICAgIHN0YXRpYyBfZ2VuTWVzc2FnZSh0eXBlT3JGdW5jLCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIHNpZ25hdHVyZSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBwYXJhbXMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcmFtZXRlciA9IHBhcmFtc1tpXTtcbiAgICAgICAgICAgIGlmIChpc0JsYW5rKHBhcmFtZXRlcikgfHwgcGFyYW1ldGVyLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlLnB1c2goJz8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5wdXNoKHBhcmFtZXRlci5tYXAoc3RyaW5naWZ5KS5qb2luKCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCByZXNvbHZlIGFsbCBwYXJhbWV0ZXJzIGZvciAnXCIgKyBzdHJpbmdpZnkodHlwZU9yRnVuYykgKyBcIicoXCIgK1xuICAgICAgICAgICAgc2lnbmF0dXJlLmpvaW4oJywgJykgKyBcIikuIFwiICtcbiAgICAgICAgICAgIFwiTWFrZSBzdXJlIHRoYXQgYWxsIHRoZSBwYXJhbWV0ZXJzIGFyZSBkZWNvcmF0ZWQgd2l0aCBJbmplY3Qgb3IgaGF2ZSB2YWxpZCB0eXBlIGFubm90YXRpb25zIGFuZCB0aGF0ICdcIiArXG4gICAgICAgICAgICBzdHJpbmdpZnkodHlwZU9yRnVuYykgKyBcIicgaXMgZGVjb3JhdGVkIHdpdGggSW5qZWN0YWJsZS5cIjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgT3V0T2ZCb3VuZHNFcnJvciBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGluZGV4KSB7XG4gICAgICAgIHN1cGVyKGBJbmRleCAke2luZGV4fSBpcyBvdXQtb2YtYm91bmRzLmApO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNaXhpbmdNdWx0aVByb3ZpZGVyc1dpdGhSZWd1bGFyUHJvdmlkZXJzRXJyb3IgZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm92aWRlcjEsIHByb3ZpZGVyMikge1xuICAgICAgICBzdXBlcihcIkNhbm5vdCBtaXggbXVsdGkgcHJvdmlkZXJzIGFuZCByZWd1bGFyIHByb3ZpZGVycywgZ290OiBcIiArIHByb3ZpZGVyMS50b1N0cmluZygpICsgXCIgXCIgK1xuICAgICAgICAgICAgcHJvdmlkZXIyLnRvU3RyaW5nKCkpO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvcmUvZGkvZXhjZXB0aW9ucy50c1xuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5pbXBvcnQgeyBDT05TVCB9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5leHBvcnQgbGV0IE9wYXF1ZVRva2VuID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKF9kZXNjKSB7XG4gICAgICAgIHRoaXMuX2Rlc2MgPSBfZGVzYztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7IHJldHVybiBgVG9rZW4gJHt0aGlzLl9kZXNjfWA7IH1cbn07XG5PcGFxdWVUb2tlbiA9IF9fZGVjb3JhdGUoW1xuICAgIENPTlNUKCksIFxuICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW1N0cmluZ10pXG5dLCBPcGFxdWVUb2tlbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb3JlL2RpL29wYXF1ZV90b2tlbi50c1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=