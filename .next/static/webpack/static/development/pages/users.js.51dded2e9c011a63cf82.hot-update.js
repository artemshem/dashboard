webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./node_modules/airbnb-prop-types/build/and.js":
/*!*****************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/and.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = andValidator;

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function andValidator(validators) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'and';

  if (!Array.isArray(validators)) {
    throw new TypeError('and: 2 or more validators are required');
  }

  if (validators.length <= 1) {
    throw new RangeError('and: 2 or more validators are required');
  }

  var validator = function and() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var firstError = null;
    validators.some(function (validatorFn) {
      firstError = validatorFn.apply(void 0, args);
      return firstError != null;
    });
    return firstError == null ? null : firstError;
  };

  validator.isRequired = function andIsRequired() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var firstError = null;
    validators.some(function (validatorFn) {
      firstError = validatorFn.isRequired.apply(validatorFn, args);
      return firstError != null;
    });
    return firstError == null ? null : firstError;
  };

  return (0, _wrapValidator["default"])(validator, name, validators);
}
//# sourceMappingURL=and.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/between.js":
/*!*********************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/between.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = betweenValidator;

var _object = _interopRequireDefault(__webpack_require__(/*! object.entries */ "./node_modules/object.entries/index.js"));

var _shape = _interopRequireDefault(__webpack_require__(/*! ./shape */ "./node_modules/airbnb-prop-types/build/shape.js"));

var _valuesOf = _interopRequireDefault(__webpack_require__(/*! ./valuesOf */ "./node_modules/airbnb-prop-types/build/valuesOf.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function number(props, propName, componentName) {
  var value = props[propName];

  if (typeof value === 'number' && !isNaN(value)) {
    return null;
  }

  return new TypeError("".concat(componentName, ": ").concat(propName, " must be a non-NaN number."));
}

function numberOrPropsFunc(props, propName) {
  var value = props[propName];

  if (typeof value === 'function') {
    return null;
  }

  if (typeof value === 'number' && !isNaN(value)) {
    return null;
  }

  return new TypeError("".concat(propName, ": a function, or a non-NaN number is required"));
}

function lowerCompare(value, _ref) {
  var gt = _ref.gt,
      gte = _ref.gte;

  if (typeof gt === 'number') {
    return value > gt;
  }

  if (typeof gte === 'number') {
    return value >= gte;
  }

  return true;
}

function upperCompare(value, _ref2) {
  var lt = _ref2.lt,
      lte = _ref2.lte;

  if (typeof lt === 'number') {
    return value < lt;
  }

  if (typeof lte === 'number') {
    return value <= lte;
  }

  return true;
}

function greaterThanError(_ref3) {
  var gt = _ref3.gt,
      gte = _ref3.gte;

  if (typeof gt === 'number') {
    return "greater than ".concat(gt);
  }

  if (typeof gte === 'number') {
    return "greater than or equal to ".concat(gte);
  }

  return '';
}

function lessThanError(_ref4) {
  var lt = _ref4.lt,
      lte = _ref4.lte;

  if (typeof lt === 'number') {
    return "less than ".concat(lt);
  }

  if (typeof lte === 'number') {
    return "less than or equal to ".concat(lte);
  }

  return '';
}

function errorMessage(componentName, propName, opts) {
  var errors = [greaterThanError(opts), lessThanError(opts)].filter(Boolean).join(' and ');
  return "".concat(componentName, ": ").concat(propName, " must be ").concat(errors);
}

function propsThunkify(opts) {
  return (0, _object["default"])(opts).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];

    var numberThunk = typeof value === 'number' ? function () {
      return value;
    } : value;
    return _objectSpread({}, acc, _defineProperty({}, key, numberThunk));
  }, {});
}

function invokeWithProps(optsThunks, props) {
  return (0, _object["default"])(optsThunks).reduce(function (acc, _ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        key = _ref8[0],
        thunk = _ref8[1];

    var value = thunk(props);
    return _objectSpread({}, acc, _defineProperty({}, key, value));
  }, {});
}

var argValidators = [(0, _shape["default"])({
  lt: numberOrPropsFunc,
  gt: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  lte: numberOrPropsFunc,
  gt: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  lt: numberOrPropsFunc,
  gte: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  lte: numberOrPropsFunc,
  gte: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  lt: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  lte: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  gt: numberOrPropsFunc
}).isRequired, (0, _shape["default"])({
  gte: numberOrPropsFunc
}).isRequired];

function argValidator(props, propName) {
  return argValidators.every(function (validator) {
    return !!validator(props, propName);
  });
}

var thunkValueValidator = (0, _valuesOf["default"])(number).isRequired;

function betweenValidator(options) {
  var argError = argValidator({
    options: options
  }, 'options');

  if (argError) {
    throw new TypeError('between: only one of the pairs of `lt`/`lte`, and `gt`/`gte`, may be supplied, and at least one pair must be provided.');
  }

  var optsThunks = propsThunkify(options);

  var validator = function between(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }

    if (typeof propValue !== 'number') {
      return new RangeError("".concat(componentName, ": ").concat(propName, " must be a number, got \"").concat(_typeof(propValue), "\""));
    }

    var opts = invokeWithProps(optsThunks, props);

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var thunkValuesError = thunkValueValidator.apply(void 0, [_defineProperty({}, propName, opts), propName, componentName].concat(rest));

    if (thunkValuesError) {
      return thunkValuesError;
    }

    if (!lowerCompare(propValue, opts) || !upperCompare(propValue, opts)) {
      return new RangeError(errorMessage(componentName, propName, opts));
    }

    return null;
  };

  validator.isRequired = function betweenRequired(props, propName, componentName) {
    var propValue = props[propName];

    if (typeof propValue !== 'number') {
      return new RangeError("".concat(componentName, ": ").concat(propName, " must be a number, got \"").concat(_typeof(propValue), "\""));
    }

    var opts = invokeWithProps(optsThunks, props);

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    var thunkValuesError = thunkValueValidator.apply(void 0, [_defineProperty({}, propName, opts), propName, componentName].concat(rest));

    if (thunkValuesError) {
      return thunkValuesError;
    }

    if (!lowerCompare(propValue, opts) || !upperCompare(propValue, opts)) {
      return new RangeError(errorMessage(componentName, propName, opts));
    }

    return null;
  };

  return (0, _wrapValidator["default"])(validator, 'between', options);
}
//# sourceMappingURL=between.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/booleanSome.js":
/*!*************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/booleanSome.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = booleanSomeValidator;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function booleanSomeValidator() {
  for (var _len = arguments.length, notAllPropsFalse = new Array(_len), _key = 0; _key < _len; _key++) {
    notAllPropsFalse[_key] = arguments[_key];
  }

  if (notAllPropsFalse.length < 1) {
    throw new TypeError('at least one prop (one of which must be `true`) is required');
  }

  if (!notAllPropsFalse.every(function (x) {
    return typeof x === 'string';
  })) {
    throw new TypeError('all booleanSome props must be strings');
  }

  var propsList = notAllPropsFalse.join(', or ');

  var validator = function booleanSome(props, propName, componentName) {
    var countFalse = function countFalse(count, prop) {
      return count + (props[prop] === false ? 1 : 0);
    };

    var falsePropCount = notAllPropsFalse.reduce(countFalse, 0);

    if (falsePropCount === notAllPropsFalse.length) {
      return new Error("A ".concat(componentName, " must have at least one of these boolean props be `true`: ").concat(propsList));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return _propTypes.bool.apply(void 0, [props, propName, componentName].concat(rest));
  };

  validator.isRequired = function booleanSomeRequired(props, propName, componentName) {
    var countFalse = function countFalse(count, prop) {
      return count + (props[prop] === false ? 1 : 0);
    };

    var falsePropCount = notAllPropsFalse.reduce(countFalse, 0);

    if (falsePropCount === notAllPropsFalse.length) {
      return new Error("A ".concat(componentName, " must have at least one of these boolean props be `true`: ").concat(propsList));
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    return _propTypes.bool.isRequired.apply(_propTypes.bool, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, "booleanSome: ".concat(propsList), notAllPropsFalse);
}
//# sourceMappingURL=booleanSome.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/childrenHavePropXorChildren.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/childrenHavePropXorChildren.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = childrenHavePropXorChildren;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function childrenHavePropXorChildren(prop) {
  if (typeof prop !== 'string' && _typeof(prop) !== 'symbol') {
    throw new TypeError('invalid prop: must be string or symbol');
  }

  var validator = function childrenHavePropXorChildrenWithProp(_ref, _, componentName) {
    var children = _ref.children;
    var truthyChildrenCount = 0;
    var propCount = 0;
    var grandchildrenCount = 0;

    _react["default"].Children.forEach(children, function (child) {
      if (!child) {
        return;
      }

      truthyChildrenCount += 1;

      if (child.props[prop]) {
        propCount += 1;
      }

      if (_react["default"].Children.count(child.props.children)) {
        grandchildrenCount += 1;
      }
    });

    if (propCount === truthyChildrenCount && grandchildrenCount === 0 || propCount === 0 && grandchildrenCount === truthyChildrenCount || propCount === 0 && grandchildrenCount === 0) {
      return null;
    }

    return new TypeError("`".concat(componentName, "` requires children to all have prop \u201C").concat(prop, "\u201D, all have children, or all have neither."));
  };

  validator.isRequired = validator;
  return (0, _wrapValidator["default"])(validator, "childrenHavePropXorChildrenWithProp:".concat(prop), prop);
}
//# sourceMappingURL=childrenHavePropXorChildren.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/childrenOf.js":
/*!************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/childrenOf.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = childrenOf;

var _renderableChildren = _interopRequireDefault(__webpack_require__(/*! ./helpers/renderableChildren */ "./node_modules/airbnb-prop-types/build/helpers/renderableChildren.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function validateChildren(propType, children, props) {
  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var error;
  children.some(function (child) {
    error = propType.apply(void 0, [_objectSpread({}, props, {
      children: child
    }), 'children'].concat(rest));
    return error;
  });
  return error || null;
}

function childrenOf(propType) {
  function childrenOfPropType(props, propName, componentName) {
    if (propName !== 'children') {
      return new TypeError("".concat(componentName, " is using the childrenOf validator on non-children prop \"").concat(propName, "\""));
    }

    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }

    var children = (0, _renderableChildren["default"])(propValue);

    if (children.length === 0) {
      return null;
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return validateChildren.apply(void 0, [propType, children, props, componentName].concat(rest));
  }

  childrenOfPropType.isRequired = function (props, propName, componentName) {
    if (propName !== 'children') {
      return new TypeError("".concat(componentName, " is using the childrenOf validator on non-children prop \"").concat(propName, "\""));
    }

    var children = (0, _renderableChildren["default"])(props[propName]);

    if (children.length === 0) {
      return new TypeError("`".concat(componentName, "` requires at least one node of type ").concat(propType.typeName || propType.name));
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    return validateChildren.apply(void 0, [propType, children, props, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(childrenOfPropType, 'childrenOf', propType);
}
//# sourceMappingURL=childrenOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/childrenOfType.js":
/*!****************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/childrenOfType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _arrayPrototype = _interopRequireDefault(__webpack_require__(/*! array.prototype.find */ "./node_modules/array.prototype.find/index.js"));

var _getComponentName = _interopRequireDefault(__webpack_require__(/*! ./helpers/getComponentName */ "./node_modules/airbnb-prop-types/build/helpers/getComponentName.js"));

var _renderableChildren = _interopRequireDefault(__webpack_require__(/*! ./helpers/renderableChildren */ "./node_modules/airbnb-prop-types/build/helpers/renderableChildren.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function onlyTypes(types, children, componentName) {
  if (!children.every(function (child) {
    return child && (0, _arrayPrototype["default"])(types, function (Type) {
      return Type === '*' || child.type === Type;
    });
  })) {
    var typeNames = types.map(_getComponentName["default"]).join(', or ');
    return new TypeError("`".concat(componentName, "` only accepts children of type ").concat(typeNames));
  }

  return null;
}

function isRequired(types, children, componentName) {
  if (children.length === 0) {
    var typeNames = types.map(_getComponentName["default"]).join(', or ');
    return new TypeError("`".concat(componentName, "` requires at least one node of type ").concat(typeNames));
  }

  return null;
}

function childrenOfType() {
  for (var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++) {
    types[_key] = arguments[_key];
  }

  if (types.length < 1) {
    throw new TypeError('childrenOfType: at least 1 type is required');
  }

  function validator(props, propName, componentName) {
    return onlyTypes(types, (0, _renderableChildren["default"])(props[propName]), componentName);
  }

  validator.isRequired = function (props, propName, componentName) {
    var children = (0, _renderableChildren["default"])(props[propName]);
    return isRequired(types, children, componentName) || onlyTypes(types, children, componentName);
  };

  return (0, _wrapValidator["default"])(validator, 'childrenOfType', types);
}

var _default = childrenOfType;
exports["default"] = _default;
//# sourceMappingURL=childrenOfType.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/childrenSequenceOf.js":
/*!********************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/childrenSequenceOf.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = childrenSequenceOfValidator;

var _sequenceOf = _interopRequireDefault(__webpack_require__(/*! ./sequenceOf */ "./node_modules/airbnb-prop-types/build/sequenceOf.js"));

var _renderableChildren = _interopRequireDefault(__webpack_require__(/*! ./helpers/renderableChildren */ "./node_modules/airbnb-prop-types/build/helpers/renderableChildren.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function childrenSequenceOfValidator() {
  for (var _len = arguments.length, specifiers = new Array(_len), _key = 0; _key < _len; _key++) {
    specifiers[_key] = arguments[_key];
  }

  var seq = _sequenceOf["default"].apply(void 0, specifiers);

  var validator = function childrenSequenceOf(props, propName, componentName) {
    if (propName !== 'children') {
      return new TypeError("".concat(componentName, " is using the childrenSequenceOf validator on non-children prop \"").concat(propName, "\""));
    }

    var propValue = props[propName];
    var children = (0, _renderableChildren["default"])(propValue);

    if (children.length === 0) {
      return null;
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return seq.apply(void 0, [_objectSpread({}, props, {
      children: children
    }), propName, componentName].concat(rest));
  };

  validator.isRequired = function childrenSequenceOfRequired(props, propName, componentName) {
    if (propName !== 'children') {
      return new TypeError("".concat(componentName, " is using the childrenSequenceOf validator on non-children prop \"").concat(propName, "\""));
    }

    var propValue = props[propName];
    var children = (0, _renderableChildren["default"])(propValue);

    if (children.length === 0) {
      return new TypeError("".concat(componentName, ": renderable children are required."));
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    return seq.isRequired.apply(seq, [_objectSpread({}, props, {
      children: children
    }), propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, 'childrenSequenceOf', specifiers);
}
//# sourceMappingURL=childrenSequenceOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/componentWithName.js":
/*!*******************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/componentWithName.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = componentWithName;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _isRegex = _interopRequireDefault(__webpack_require__(/*! is-regex */ "./node_modules/is-regex/index.js"));

var _arrayPrototype = _interopRequireDefault(__webpack_require__(/*! array.prototype.find */ "./node_modules/array.prototype.find/index.js"));

var _getComponentName = _interopRequireDefault(__webpack_require__(/*! ./helpers/getComponentName */ "./node_modules/airbnb-prop-types/build/helpers/getComponentName.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function stripHOCs(fullName, namesOfHOCsToStrip) {
  var innerName = fullName;

  while (/\([^()]*\)/g.test(innerName)) {
    var HOC = innerName;
    var previousHOC = void 0;

    do {
      previousHOC = HOC;
      HOC = previousHOC.replace(/\([^()]*\)/g, '');
    } while (previousHOC !== HOC);

    if (namesOfHOCsToStrip.indexOf(HOC) === -1) {
      return innerName;
    }

    innerName = innerName.replace(RegExp("^".concat(HOC, "\\(|\\)$"), 'g'), '');
  }

  return innerName;
}

function hasName(name, namesOfHOCsToStrip, propValue, propName, componentName) {
  for (var _len = arguments.length, rest = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
    rest[_key - 5] = arguments[_key];
  }

  if (Array.isArray(propValue)) {
    return (0, _arrayPrototype["default"])(propValue.map(function (item) {
      return hasName.apply(void 0, [name, namesOfHOCsToStrip, item, propName, componentName].concat(rest));
    }), Boolean) || null;
  }

  if (!_react["default"].isValidElement(propValue)) {
    return new TypeError("".concat(componentName, ".").concat(propName, " is not a valid React element"));
  }

  var type = propValue.type;
  var componentNameFromType = (0, _getComponentName["default"])(type);
  var innerComponentName = namesOfHOCsToStrip.length > 0 ? stripHOCs(componentNameFromType, namesOfHOCsToStrip) : componentNameFromType;

  if ((0, _isRegex["default"])(name) && !name.test(innerComponentName)) {
    return new TypeError("`".concat(componentName, ".").concat(propName, "` only accepts components matching the regular expression ").concat(name));
  }

  if (!(0, _isRegex["default"])(name) && innerComponentName !== name) {
    return new TypeError("`".concat(componentName, ".").concat(propName, "` only accepts components named ").concat(name, ", got ").concat(innerComponentName));
  }

  return null;
}

function componentWithName(name) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof name !== 'string' && !(0, _isRegex["default"])(name)) {
    throw new TypeError('name must be a string or a regex');
  }

  var passedOptions = Object.keys(options);

  if (passedOptions.length > 1 || passedOptions.length === 1 && passedOptions[0] !== 'stripHOCs') {
    throw new TypeError("The only options supported are: \u201CstripHOCs\u201D, got: \u201C".concat(passedOptions.join('”, “'), "\u201D"));
  }

  var _options$stripHOCs = options.stripHOCs,
      namesOfHOCsToStrip = _options$stripHOCs === void 0 ? [] : _options$stripHOCs;
  var allHOCNamesAreValid = namesOfHOCsToStrip.every(function (x) {
    if (typeof x !== 'string' || /[()]/g.test(x)) {
      return false;
    }

    return /^(?:[a-z][a-zA-Z0-9]+|[A-Z][a-z][a-zA-Z0-9]+)$/.test(x);
  });

  if (!allHOCNamesAreValid) {
    throw new TypeError('every provided HOC name must be a string with no parens, and in camelCase');
  }

  function componentWithNameValidator(props, propName, componentName) {
    var propValue = props[propName];

    if (props[propName] == null) {
      return null;
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return hasName.apply(void 0, [name, namesOfHOCsToStrip, propValue, propName, componentName].concat(rest));
  }

  componentWithNameValidator.isRequired = function componentWithNameRequired(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return new TypeError("`".concat(componentName, ".").concat(propName, "` requires at least one component named ").concat(name));
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    return hasName.apply(void 0, [name, namesOfHOCsToStrip, propValue, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(componentWithNameValidator, "componentWithName:".concat(name), name);
}
//# sourceMappingURL=componentWithName.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/disallowedIf.js":
/*!**************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/disallowedIf.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = disallowedIf;

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function disallowedIf(propType, otherPropName, otherPropType) {
  if (typeof propType !== 'function' || typeof propType.isRequired !== 'function') {
    throw new TypeError('a propType validator is required; propType validators must also provide `.isRequired`');
  }

  if (typeof otherPropName !== 'string') {
    throw new TypeError('other prop name must be a string');
  }

  if (typeof otherPropType !== 'function') {
    throw new TypeError('other prop type validator is required');
  }

  function disallowedIfRequired(props, propName, componentName) {
    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var error = propType.isRequired.apply(propType, [props, propName, componentName].concat(rest));

    if (error) {
      return error;
    }

    if (props[otherPropName] == null) {
      return null;
    }

    var otherError = otherPropType.apply(void 0, [props, otherPropName, componentName].concat(rest));

    if (otherError) {
      return null;
    }

    return new Error("prop \u201C".concat(propName, "\u201D is disallowed when \u201C").concat(otherPropName, "\u201D matches the provided validator"));
  }

  var validator = function disallowedIfPropType(props, propName) {
    if (props[propName] == null) {
      return null;
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      rest[_key2 - 2] = arguments[_key2];
    }

    return disallowedIfRequired.apply(void 0, [props, propName].concat(rest));
  };

  validator.isRequired = disallowedIfRequired;
  return (0, _wrapValidator["default"])(validator, 'disallowedIf', {
    propType: propType,
    otherPropName: otherPropName,
    otherPropType: otherPropType
  });
}
//# sourceMappingURL=disallowedIf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/elementType.js":
/*!*************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/elementType.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = elementTypeValidator;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/airbnb-prop-types/build/and.js"));

var _getComponentName = _interopRequireDefault(__webpack_require__(/*! ./helpers/getComponentName */ "./node_modules/airbnb-prop-types/build/helpers/getComponentName.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getTypeName(Type) {
  if (typeof Type === 'string') {
    return Type;
  }

  var type = (0, _getComponentName["default"])(Type);
  /* istanbul ignore next */
  // in environments where functions do not have names

  return type || 'Anonymous Component';
}

function validateElementType(Type, props, propName, componentName) {
  var type = props[propName].type;

  if (type === Type) {
    return null;
  }

  return new TypeError("".concat(componentName, ".").concat(propName, " must be a React element of type ").concat(getTypeName(Type)));
}

function elementTypeValidator(Type) {
  if (Type === '*') {
    return (0, _wrapValidator["default"])(_propTypes.element, 'elementType(*)', Type);
  }

  if (!(0, _reactIs.isValidElementType)(Type)) {
    throw new TypeError("Type must be a React Component, an HTML element tag name, or \"*\". Got an ".concat(_typeof(Type)));
  }

  function elementType(props, propName, componentName) {
    if (props[propName] == null) {
      return null;
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return validateElementType.apply(void 0, [Type, props, propName, componentName].concat(rest));
  }

  elementType.isRequired = elementType; // covered by and + element

  var typeName = getTypeName(Type);
  var validatorName = "elementType(".concat(typeName, ")");
  return (0, _wrapValidator["default"])((0, _and["default"])([_propTypes.element, elementType], validatorName), validatorName, Type);
}
//# sourceMappingURL=elementType.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/empty.js":
/*!*******************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/empty.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _or = _interopRequireDefault(__webpack_require__(/*! ./or */ "./node_modules/airbnb-prop-types/build/or.js"));

var _explicitNull = _interopRequireDefault(__webpack_require__(/*! ./explicitNull */ "./node_modules/airbnb-prop-types/build/explicitNull.js"));

var _withShape = _interopRequireDefault(__webpack_require__(/*! ./withShape */ "./node_modules/airbnb-prop-types/build/withShape.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var arrayOfValidator;
var validator = (0, _or["default"])([_explicitNull["default"], // null/undefined
(0, _propTypes.oneOf)([false, '', NaN]), (0, _withShape["default"])(_propTypes.array, {
  length: (0, _propTypes.oneOf)([0]).isRequired
}).isRequired, function () {
  return arrayOfValidator.apply(void 0, arguments);
}]);
arrayOfValidator = (0, _propTypes.arrayOf)(validator).isRequired;

var _default = function _default() {
  return (0, _wrapValidator["default"])(validator, 'empty');
};

exports["default"] = _default;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/explicitNull.js":
/*!**************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/explicitNull.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function explicitNull(props, propName, componentName) {
  if (props[propName] == null) {
    return null;
  }

  return new TypeError("".concat(componentName, ": prop \u201C").concat(propName, "\u201D must be null or undefined; received ").concat(_typeof(props[propName])));
}

explicitNull.isRequired = function explicitNullRequired(props, propName, componentName) {
  if (props[propName] === null) {
    return null;
  }

  return new TypeError("".concat(componentName, ": prop \u201C").concat(propName, "\u201D must be null; received ").concat(_typeof(props[propName])));
};

var _default = function _default() {
  return (0, _wrapValidator["default"])(explicitNull, 'explicitNull');
};

exports["default"] = _default;
//# sourceMappingURL=explicitNull.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/getComponentName.js":
/*!**************************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/helpers/getComponentName.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getComponentName;

var _functionPrototype = _interopRequireDefault(__webpack_require__(/*! function.prototype.name */ "./node_modules/function.prototype.name/index.js"));

var _reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getComponentName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return Component.displayName || (0, _functionPrototype["default"])(Component);
  }

  if ((0, _reactIs.isForwardRef)({
    type: Component,
    $$typeof: _reactIs.Element
  })) {
    return Component.displayName;
  }

  if ((0, _reactIs.isMemo)(Component)) {
    return getComponentName(Component.type);
  }

  return null;
}
//# sourceMappingURL=getComponentName.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/isInteger.js":
/*!*******************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/helpers/isInteger.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var floor = Math.floor;
var finite = isFinite;

var _default = Number.isInteger ||
/* istanbul ignore next */
function (x) {
  return typeof x === 'number' && finite(x) && floor(x) === x;
};

exports["default"] = _default;
//# sourceMappingURL=isInteger.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/isPlainObject.js":
/*!***********************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/helpers/isPlainObject.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isPlainObject = _interopRequireDefault(__webpack_require__(/*! prop-types-exact/build/helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _isPlainObject["default"];
exports["default"] = _default;
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/isPrimitive.js":
/*!*********************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/helpers/isPrimitive.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isPrimitive;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isPrimitive(x) {
  return !x || _typeof(x) !== 'object' && typeof x !== 'function';
}
//# sourceMappingURL=isPrimitive.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/renderableChildren.js":
/*!****************************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/helpers/renderableChildren.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = renderableChildren;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function renderableChildren(childrenProp) {
  return _react["default"].Children.toArray(childrenProp).filter(function (child) {
    return child === 0 || child;
  });
}
//# sourceMappingURL=renderableChildren.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/typeOf.js":
/*!****************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/helpers/typeOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = typeOf;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function typeOf(child) {
  if (child === null) {
    return 'null';
  }

  if (Array.isArray(child)) {
    return 'array';
  }

  if (_typeof(child) !== 'object') {
    return _typeof(child);
  }

  if (_react["default"].isValidElement(child)) {
    return child.type;
  }

  return child;
}
//# sourceMappingURL=typeOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wrapValidator;

var _object = _interopRequireDefault(__webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function wrapValidator(validator, typeName) {
  var typeChecker = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _object["default"])(validator.bind(), {
    typeName: typeName,
    typeChecker: typeChecker,
    isRequired: (0, _object["default"])(validator.isRequired.bind(), {
      typeName: typeName,
      typeChecker: typeChecker,
      typeRequired: true
    })
  });
}
//# sourceMappingURL=wrapValidator.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _propTypesExact = _interopRequireDefault(__webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/airbnb-prop-types/build/and.js"));

var _between = _interopRequireDefault(__webpack_require__(/*! ./between */ "./node_modules/airbnb-prop-types/build/between.js"));

var _booleanSome = _interopRequireDefault(__webpack_require__(/*! ./booleanSome */ "./node_modules/airbnb-prop-types/build/booleanSome.js"));

var _childrenHavePropXorChildren = _interopRequireDefault(__webpack_require__(/*! ./childrenHavePropXorChildren */ "./node_modules/airbnb-prop-types/build/childrenHavePropXorChildren.js"));

var _childrenOf = _interopRequireDefault(__webpack_require__(/*! ./childrenOf */ "./node_modules/airbnb-prop-types/build/childrenOf.js"));

var _childrenOfType = _interopRequireDefault(__webpack_require__(/*! ./childrenOfType */ "./node_modules/airbnb-prop-types/build/childrenOfType.js"));

var _childrenSequenceOf = _interopRequireDefault(__webpack_require__(/*! ./childrenSequenceOf */ "./node_modules/airbnb-prop-types/build/childrenSequenceOf.js"));

var _componentWithName = _interopRequireDefault(__webpack_require__(/*! ./componentWithName */ "./node_modules/airbnb-prop-types/build/componentWithName.js"));

var _disallowedIf = _interopRequireDefault(__webpack_require__(/*! ./disallowedIf */ "./node_modules/airbnb-prop-types/build/disallowedIf.js"));

var _elementType = _interopRequireDefault(__webpack_require__(/*! ./elementType */ "./node_modules/airbnb-prop-types/build/elementType.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./node_modules/airbnb-prop-types/build/empty.js"));

var _explicitNull = _interopRequireDefault(__webpack_require__(/*! ./explicitNull */ "./node_modules/airbnb-prop-types/build/explicitNull.js"));

var _integer = _interopRequireDefault(__webpack_require__(/*! ./integer */ "./node_modules/airbnb-prop-types/build/integer.js"));

var _keysOf = _interopRequireDefault(__webpack_require__(/*! ./keysOf */ "./node_modules/airbnb-prop-types/build/keysOf.js"));

var _mutuallyExclusiveProps = _interopRequireDefault(__webpack_require__(/*! ./mutuallyExclusiveProps */ "./node_modules/airbnb-prop-types/build/mutuallyExclusiveProps.js"));

var _mutuallyExclusiveTrueProps = _interopRequireDefault(__webpack_require__(/*! ./mutuallyExclusiveTrueProps */ "./node_modules/airbnb-prop-types/build/mutuallyExclusiveTrueProps.js"));

var _nChildren = _interopRequireDefault(__webpack_require__(/*! ./nChildren */ "./node_modules/airbnb-prop-types/build/nChildren.js"));

var _nonNegativeInteger = _interopRequireDefault(__webpack_require__(/*! ./nonNegativeInteger */ "./node_modules/airbnb-prop-types/build/nonNegativeInteger.js"));

var _nonNegativeNumber = _interopRequireDefault(__webpack_require__(/*! ./nonNegativeNumber */ "./node_modules/airbnb-prop-types/build/nonNegativeNumber.js"));

var _numericString = _interopRequireDefault(__webpack_require__(/*! ./numericString */ "./node_modules/airbnb-prop-types/build/numericString.js"));

var _object = _interopRequireDefault(__webpack_require__(/*! ./object */ "./node_modules/airbnb-prop-types/build/object.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! ./or */ "./node_modules/airbnb-prop-types/build/or.js"));

var _range = _interopRequireDefault(__webpack_require__(/*! ./range */ "./node_modules/airbnb-prop-types/build/range.js"));

var _ref = _interopRequireDefault(__webpack_require__(/*! ./ref */ "./node_modules/airbnb-prop-types/build/ref.js"));

var _requiredBy = _interopRequireDefault(__webpack_require__(/*! ./requiredBy */ "./node_modules/airbnb-prop-types/build/requiredBy.js"));

var _restrictedProp = _interopRequireDefault(__webpack_require__(/*! ./restrictedProp */ "./node_modules/airbnb-prop-types/build/restrictedProp.js"));

var _sequenceOf = _interopRequireDefault(__webpack_require__(/*! ./sequenceOf */ "./node_modules/airbnb-prop-types/build/sequenceOf.js"));

var _shape = _interopRequireDefault(__webpack_require__(/*! ./shape */ "./node_modules/airbnb-prop-types/build/shape.js"));

var _stringEndsWith = _interopRequireDefault(__webpack_require__(/*! ./stringEndsWith */ "./node_modules/airbnb-prop-types/build/stringEndsWith.js"));

var _stringStartsWith = _interopRequireDefault(__webpack_require__(/*! ./stringStartsWith */ "./node_modules/airbnb-prop-types/build/stringStartsWith.js"));

var _uniqueArray = _interopRequireDefault(__webpack_require__(/*! ./uniqueArray */ "./node_modules/airbnb-prop-types/build/uniqueArray.js"));

var _uniqueArrayOf = _interopRequireDefault(__webpack_require__(/*! ./uniqueArrayOf */ "./node_modules/airbnb-prop-types/build/uniqueArrayOf.js"));

var _valuesOf = _interopRequireDefault(__webpack_require__(/*! ./valuesOf */ "./node_modules/airbnb-prop-types/build/valuesOf.js"));

var _withShape = _interopRequireDefault(__webpack_require__(/*! ./withShape */ "./node_modules/airbnb-prop-types/build/withShape.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  and: _and["default"],
  between: _between["default"],
  booleanSome: _booleanSome["default"],
  childrenHavePropXorChildren: _childrenHavePropXorChildren["default"],
  childrenOf: _childrenOf["default"],
  childrenOfType: _childrenOfType["default"],
  childrenSequenceOf: _childrenSequenceOf["default"],
  componentWithName: _componentWithName["default"],
  disallowedIf: _disallowedIf["default"],
  elementType: _elementType["default"],
  empty: _empty["default"],
  explicitNull: _explicitNull["default"],
  forbidExtraProps: _propTypesExact["default"],
  integer: _integer["default"],
  keysOf: _keysOf["default"],
  mutuallyExclusiveProps: _mutuallyExclusiveProps["default"],
  mutuallyExclusiveTrueProps: _mutuallyExclusiveTrueProps["default"],
  nChildren: _nChildren["default"],
  nonNegativeInteger: _nonNegativeInteger["default"],
  nonNegativeNumber: _nonNegativeNumber["default"],
  numericString: _numericString["default"],
  object: _object["default"],
  or: _or["default"],
  range: _range["default"],
  ref: _ref["default"],
  requiredBy: _requiredBy["default"],
  restrictedProp: _restrictedProp["default"],
  sequenceOf: _sequenceOf["default"],
  shape: _shape["default"],
  stringEndsWith: _stringEndsWith["default"],
  stringStartsWith: _stringStartsWith["default"],
  uniqueArray: _uniqueArray["default"],
  uniqueArrayOf: _uniqueArrayOf["default"],
  valuesOf: _valuesOf["default"],
  withShape: _withShape["default"]
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/integer.js":
/*!*********************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/integer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isInteger = _interopRequireDefault(__webpack_require__(/*! ./helpers/isInteger */ "./node_modules/airbnb-prop-types/build/helpers/isInteger.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function requiredInteger(props, propName, componentName) {
  var propValue = props[propName];

  if (propValue == null || !(0, _isInteger["default"])(propValue)) {
    return new RangeError("".concat(propName, " in ").concat(componentName, " must be an integer"));
  }

  return null;
}

var validator = function integer(props, propName) {
  var propValue = props[propName];

  if (propValue == null) {
    return null;
  }

  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  return requiredInteger.apply(void 0, [props, propName].concat(rest));
};

validator.isRequired = requiredInteger;

var _default = function _default() {
  return (0, _wrapValidator["default"])(validator, 'integer');
};

exports["default"] = _default;
//# sourceMappingURL=integer.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/keysOf.js":
/*!********************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/keysOf.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = keysOfValidator;

var _isPrimitive = _interopRequireDefault(__webpack_require__(/*! ./helpers/isPrimitive */ "./node_modules/airbnb-prop-types/build/helpers/isPrimitive.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function keysOfValidator(propType) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'keysOf';

  if (typeof propType !== 'function') {
    throw new TypeError('argument to keysOf must be a valid PropType function');
  }

  var validator = function keysOf(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];

    if (propValue == null || (0, _isPrimitive["default"])(propValue)) {
      return null;
    }

    var firstError = null;
    Object.keys(propValue).some(function (key) {
      firstError = propType.apply(void 0, [_defineProperty({}, key, key), key, componentName, location, "(".concat(propFullName, ").").concat(key)].concat(rest));
      return firstError != null;
    });
    return firstError || null;
  };

  validator.isRequired = function keyedByRequired(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return new TypeError("".concat(componentName, ": ").concat(propName, " is required, but value is ").concat(propValue));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return validator.apply(void 0, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, name, propType);
}
//# sourceMappingURL=keysOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/mutuallyExclusiveProps.js":
/*!************************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/mutuallyExclusiveProps.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mutuallyExclusiveOfType;

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mutuallyExclusiveOfType(propType) {
  if (typeof propType !== 'function') {
    throw new TypeError('a propType is required');
  }

  for (var _len = arguments.length, exclusiveProps = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    exclusiveProps[_key - 1] = arguments[_key];
  }

  if (exclusiveProps.length < 1) {
    throw new TypeError('at least one prop that is mutually exclusive with this propType is required');
  }

  var propList = exclusiveProps.join(', or ');
  var map = exclusiveProps.reduce(function (acc, prop) {
    return _objectSpread({}, acc, _defineProperty({}, prop, true));
  }, {});

  var countProps = function countProps(count, prop) {
    return count + (map[prop] ? 1 : 0);
  };

  var validator = function mutuallyExclusiveProps(props, propName, componentName) {
    var exclusivePropCount = Object.keys(props).filter(function (prop) {
      return props[prop] != null;
    }).reduce(countProps, 0);

    if (exclusivePropCount > 1) {
      return new Error("A ".concat(componentName, " cannot have more than one of these props: ").concat(propList));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };

  validator.isRequired = function mutuallyExclusivePropsRequired(props, propName, componentName) {
    var exclusivePropCount = Object.keys(props).filter(function (prop) {
      return prop === propName || props[prop] != null;
    }).reduce(countProps, 0);

    if (exclusivePropCount > 1) {
      return new Error("A ".concat(componentName, " cannot have more than one of these props: ").concat(propList));
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, "mutuallyExclusiveProps:".concat(propList), exclusiveProps);
}
//# sourceMappingURL=mutuallyExclusiveProps.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/mutuallyExclusiveTrueProps.js":
/*!****************************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/mutuallyExclusiveTrueProps.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mutuallyExclusiveTrue;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function mutuallyExclusiveTrue() {
  for (var _len = arguments.length, exclusiveProps = new Array(_len), _key = 0; _key < _len; _key++) {
    exclusiveProps[_key] = arguments[_key];
  }

  if (exclusiveProps.length < 1) {
    throw new TypeError('at least one prop that is mutually exclusive is required');
  }

  if (!exclusiveProps.every(function (x) {
    return typeof x === 'string';
  })) {
    throw new TypeError('all exclusive true props must be strings');
  }

  var propsList = exclusiveProps.join(', or ');

  var validator = function mutuallyExclusiveTrueProps(props, propName, componentName) {
    var countProps = function countProps(count, prop) {
      return count + (props[prop] ? 1 : 0);
    };

    var exclusivePropCount = exclusiveProps.reduce(countProps, 0);

    if (exclusivePropCount > 1) {
      return new Error("A ".concat(componentName, " cannot have more than one of these boolean props be true: ").concat(propsList));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return _propTypes.bool.apply(void 0, [props, propName, componentName].concat(rest));
  };

  validator.isRequired = function mutuallyExclusiveTruePropsRequired(props, propName, componentName) {
    var countProps = function countProps(count, prop) {
      return count + (props[prop] ? 1 : 0);
    };

    var exclusivePropCount = exclusiveProps.reduce(countProps, 0);

    if (exclusivePropCount > 1) {
      return new Error("A ".concat(componentName, " cannot have more than one of these boolean props be true: ").concat(propsList));
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    return _propTypes.bool.isRequired.apply(_propTypes.bool, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, "mutuallyExclusiveTrueProps: ".concat(propsList), exclusiveProps);
}
//# sourceMappingURL=mutuallyExclusiveTrueProps.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/nChildren.js":
/*!***********************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/nChildren.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = nChildren;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function nChildren(n) {
  var propType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _propTypes.node;

  if (typeof n !== 'number' || isNaN(n) || n < 0) {
    throw new TypeError('a non-negative number is required');
  }

  var validator = function nChildrenValidator(props, propName, componentName) {
    if (propName !== 'children') {
      return new TypeError("".concat(componentName, " is using the nChildren validator on a non-children prop"));
    }

    var children = props.children;

    var childrenCount = _react["default"].Children.count(children);

    if (childrenCount !== n) {
      return new RangeError("".concat(componentName, " expects to receive ").concat(n, " children, but received ").concat(childrenCount, " children."));
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };

  validator.isRequired = validator;
  return (0, _wrapValidator["default"])(validator, "nChildren:".concat(n), n);
}
//# sourceMappingURL=nChildren.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/nonNegativeInteger.js":
/*!********************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/nonNegativeInteger.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/airbnb-prop-types/build/and.js"));

var _integer = _interopRequireDefault(__webpack_require__(/*! ./integer */ "./node_modules/airbnb-prop-types/build/integer.js"));

var _nonNegativeNumber = _interopRequireDefault(__webpack_require__(/*! ./nonNegativeNumber */ "./node_modules/airbnb-prop-types/build/nonNegativeNumber.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _and["default"])([(0, _integer["default"])(), (0, _nonNegativeNumber["default"])()], 'nonNegativeInteger');

exports["default"] = _default;
//# sourceMappingURL=nonNegativeInteger.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/nonNegativeNumber.js":
/*!*******************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/nonNegativeNumber.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectIs = _interopRequireDefault(__webpack_require__(/*! object-is */ "./node_modules/object-is/index.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isNonNegative(x) {
  return typeof x === 'number' && isFinite(x) && x >= 0 && !(0, _objectIs["default"])(x, -0);
}

function nonNegativeNumber(props, propName, componentName) {
  var value = props[propName];

  if (value == null || isNonNegative(value)) {
    return null;
  }

  return new RangeError("".concat(propName, " in ").concat(componentName, " must be a non-negative number"));
}

function requiredNonNegativeNumber(props, propName, componentName) {
  var value = props[propName];

  if (isNonNegative(value)) {
    return null;
  }

  return new RangeError("".concat(propName, " in ").concat(componentName, " must be a non-negative number"));
}

nonNegativeNumber.isRequired = requiredNonNegativeNumber;

var _default = function _default() {
  return (0, _wrapValidator["default"])(nonNegativeNumber, 'nonNegativeNumber');
};

exports["default"] = _default;
//# sourceMappingURL=nonNegativeNumber.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/numericString.js":
/*!***************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/numericString.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validNumericChars = /^[-+]?(?:[1-9][0-9]*(?:\.[0-9]+)?|0|0\.[0-9]+)$/;

var validator = function numericString(props, propName, componentName) {
  if (props[propName] == null) {
    return null;
  }

  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var stringError = _propTypes.string.apply(void 0, [props, propName, componentName].concat(rest));

  if (stringError) {
    return stringError;
  }

  var value = props[propName];
  var passesRegex = validNumericChars.test(value);

  if (passesRegex) {
    return null;
  }

  return new TypeError("".concat(componentName, ": prop \"").concat(propName, "\" (value \"").concat(value, "\") must be a numeric string:\n    - starting with an optional + or -\n    - that does not have a leading zero\n    - with an optional decimal part (that contains only one decimal point, if present)\n    - that otherwise only contains digits (0-9)\n    - not +-NaN, or +-Infinity\n  "));
};

validator.isRequired = function numericStringRequired(props, propName, componentName) {
  if (props[propName] == null) {
    return new TypeError("".concat(componentName, ": ").concat(propName, " is required"));
  }

  for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    rest[_key2 - 3] = arguments[_key2];
  }

  return validator.apply(void 0, [props, propName, componentName].concat(rest));
};

var _default = function _default() {
  return (0, _wrapValidator["default"])(validator, 'numericString');
};

exports["default"] = _default;
//# sourceMappingURL=numericString.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/object.js":
/*!********************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/object.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isPlainObject = _interopRequireDefault(__webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/airbnb-prop-types/build/helpers/isPlainObject.js"));

var _typeOf = _interopRequireDefault(__webpack_require__(/*! ./helpers/typeOf */ "./node_modules/airbnb-prop-types/build/helpers/typeOf.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
  code adapted from https://github.com/facebook/react/blob/14156e56b9cf18ac86963185c5af4abddf3ff811/src/isomorphic/classic/types/ReactPropTypes.js#L202-L206
  so that it can be called outside of React's normal PropType flow
*/
var ReactPropTypeLocationNames = {
  prop: 'prop',
  context: 'context',
  childContext: 'child context'
};

function object(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];

  if (propValue == null) {
    return null;
  }

  if ((0, _isPlainObject["default"])(propValue)) {
    return null;
  }

  var locationName = ReactPropTypeLocationNames[location] || location;
  return new TypeError("Invalid ".concat(locationName, " `").concat(propFullName, "` of type `").concat((0, _typeOf["default"])(propValue), "` supplied to `").concat(componentName, "`, expected `object`."));
}

object.isRequired = function objectRequired(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];

  if (propValue == null) {
    var locationName = ReactPropTypeLocationNames[location] || location;
    return new TypeError("The ".concat(locationName, " `").concat(propFullName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(propValue, "`."));
  }

  for (var _len = arguments.length, rest = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
    rest[_key - 5] = arguments[_key];
  }

  return object.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
};

var _default = function _default() {
  return (0, _wrapValidator["default"])(object, 'object');
};

exports["default"] = _default;
//# sourceMappingURL=object.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/or.js":
/*!****************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/or.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = or;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function oneOfTypeValidator(validators) {
  var validator = function oneOfType(props, propName, componentName) {
    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var propValue = props[propName];

    if (typeof propValue === 'undefined') {
      return null;
    }

    var errors = validators.map(function (v) {
      return v.apply(void 0, [props, propName, componentName].concat(rest));
    }).filter(Boolean);

    if (errors.length < validators.length) {
      return null;
    }

    return new TypeError("".concat(componentName, ": invalid value supplied to ").concat(propName, "."));
  };

  validator.isRequired = function oneOfTypeRequired(props, propName, componentName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    var propValue = props[propName];

    if (typeof propValue === 'undefined') {
      return new TypeError("".concat(componentName, ": missing value for required ").concat(propName, "."));
    }

    var errors = validators.map(function (v) {
      return v.apply(void 0, [props, propName, componentName].concat(rest));
    }).filter(Boolean);

    if (errors.length === validators.length) {
      return new TypeError("".concat(componentName, ": invalid value ").concat(errors, " supplied to required ").concat(propName, "."));
    }

    return null;
  };

  return (0, _wrapValidator["default"])(validator, 'oneOfType', validators);
}

function or(validators) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'or';

  if (!Array.isArray(validators)) {
    throw new TypeError('or: 2 or more validators are required');
  }

  if (validators.length <= 1) {
    throw new RangeError('or: 2 or more validators are required');
  }

  var validator = oneOfTypeValidator([(0, _propTypes.arrayOf)(oneOfTypeValidator(validators))].concat(_toConsumableArray(validators)));
  return (0, _wrapValidator["default"])(validator, name, validators);
}
//# sourceMappingURL=or.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/range.js":
/*!*******************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/range.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = range;

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/airbnb-prop-types/build/and.js"));

var _between = _interopRequireDefault(__webpack_require__(/*! ./between */ "./node_modules/airbnb-prop-types/build/between.js"));

var _integer = _interopRequireDefault(__webpack_require__(/*! ./integer */ "./node_modules/airbnb-prop-types/build/integer.js"));

var _isInteger = _interopRequireDefault(__webpack_require__(/*! ./helpers/isInteger */ "./node_modules/airbnb-prop-types/build/helpers/isInteger.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */
Math.pow(2, 53) - 1;

function isValidLength(x) {
  return (0, _isInteger["default"])(x) && Math.abs(x) < MAX_SAFE_INTEGER;
}

function range(min, max) {
  if (!isValidLength(min) || !isValidLength(max)) {
    throw new RangeError("\"range\" requires two integers: ".concat(min, " and ").concat(max, " given"));
  }

  if (min === max) {
    throw new RangeError('min and max must not be the same');
  }

  return (0, _wrapValidator["default"])((0, _and["default"])([(0, _integer["default"])(), (0, _between["default"])({
    gte: min,
    lt: max
  })], 'range'), 'range', {
    min: min,
    max: max
  });
}
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/ref.js":
/*!*****************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/ref.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _isPlainObject = _interopRequireDefault(__webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/airbnb-prop-types/build/helpers/isPlainObject.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isPrototypeOf = Object.prototype.isPrototypeOf;

function isNewRef(prop) {
  if (!(0, _isPlainObject["default"])(prop)) {
    return false;
  }

  var ownProperties = Object.keys(prop);
  return ownProperties.length === 1 && ownProperties[0] === 'current';
}

function isCallbackRef(prop) {
  return typeof prop === 'function' && !isPrototypeOf.call(_react.Component, prop) && (!_react.PureComponent || !isPrototypeOf.call(_react.PureComponent, prop));
}

function requiredRef(props, propName, componentName) {
  var propValue = props[propName];

  if (isCallbackRef(propValue) || isNewRef(propValue)) {
    return null;
  }

  return new TypeError("".concat(propName, " in ").concat(componentName, " must be a ref"));
}

function ref(props, propName, componentName) {
  var propValue = props[propName];

  if (propValue == null) {
    return null;
  }

  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  return requiredRef.apply(void 0, [props, propName, componentName].concat(rest));
}

ref.isRequired = requiredRef;

var _default = function _default() {
  return (0, _wrapValidator["default"])(ref, 'ref');
};

exports["default"] = _default;
//# sourceMappingURL=ref.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/requiredBy.js":
/*!************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/requiredBy.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRequiredBy;

var _objectIs = _interopRequireDefault(__webpack_require__(/*! object-is */ "./node_modules/object-is/index.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getRequiredBy(requiredByPropName, propType) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  function requiredBy(props, propName, componentName) {
    if (props[requiredByPropName]) {
      var propValue = props[propName];

      if ((0, _objectIs["default"])(propValue, defaultValue) || typeof propValue === 'undefined') {
        return new TypeError("".concat(componentName, ": when ").concat(requiredByPropName, " is true, prop \u201C").concat(propName, "\u201D must be present."));
      }
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  }

  requiredBy.isRequired = function requiredByRequired(props, propName, componentName) {
    var propValue = props[propName];

    if ((0, _objectIs["default"])(propValue, defaultValue)) {
      return new TypeError("".concat(componentName, ": prop \u201C").concat(propName, "\u201D must be present."));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return propType.isRequired.apply(propType, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(requiredBy, "requiredBy \u201C".concat(requiredByPropName, "\u201D"), [requiredByPropName, defaultValue]);
}
//# sourceMappingURL=requiredBy.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/restrictedProp.js":
/*!****************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/restrictedProp.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function customMessageWrapper(messsageFunction) {
  function restrictedProp(props, propName, componentName, location) {
    if (props[propName] == null) {
      return null;
    }

    if (messsageFunction && typeof messsageFunction === 'function') {
      for (var _len = arguments.length, rest = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        rest[_key - 4] = arguments[_key];
      }

      return new TypeError(messsageFunction.apply(void 0, [props, propName, componentName, location].concat(rest)));
    }

    return new TypeError("The ".concat(propName, " ").concat(location, " on ").concat(componentName, " is not allowed."));
  }

  restrictedProp.isRequired = restrictedProp;
  return restrictedProp;
}

var _default = function _default() {
  var messsageFunction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _wrapValidator["default"])(customMessageWrapper(messsageFunction), 'restrictedProp');
};

exports["default"] = _default;
//# sourceMappingURL=restrictedProp.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/sequenceOf.js":
/*!************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/sequenceOf.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sequenceOfValidator;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/airbnb-prop-types/build/and.js"));

var _between = _interopRequireDefault(__webpack_require__(/*! ./between */ "./node_modules/airbnb-prop-types/build/between.js"));

var _nonNegativeInteger = _interopRequireDefault(__webpack_require__(/*! ./nonNegativeInteger */ "./node_modules/airbnb-prop-types/build/nonNegativeInteger.js"));

var _object = _interopRequireDefault(__webpack_require__(/*! ./object */ "./node_modules/airbnb-prop-types/build/object.js"));

var _withShape = _interopRequireDefault(__webpack_require__(/*! ./withShape */ "./node_modules/airbnb-prop-types/build/withShape.js"));

var _typeOf = _interopRequireDefault(__webpack_require__(/*! ./helpers/typeOf */ "./node_modules/airbnb-prop-types/build/helpers/typeOf.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var minValidator = _nonNegativeInteger["default"];
var maxValidator = (0, _and["default"])([_nonNegativeInteger["default"], (0, _between["default"])({
  gte: 1
})]);

function validateRange(min, max) {
  if (typeof max !== 'number' || typeof min !== 'number') {
    return null; // no additional checking needed unless both are present
  }

  if (min <= max) {
    return null;
  }

  return new RangeError('min must be less than or equal to max');
}

var specifierShape = {
  validator: function validator(props, propName) {
    var propValue = props[propName];

    if (typeof propValue !== 'function') {
      return new TypeError('"validator" must be a propType validator function');
    }

    return null;
  },
  min: function min(props, propName) {
    return minValidator(props, propName) || validateRange(props.min, props.max);
  },
  max: function max(props, propName) {
    return maxValidator(props, propName) || validateRange(props.min, props.max);
  }
};

function getMinMax(_ref) {
  var min = _ref.min,
      max = _ref.max;
  var minimum;
  var maximum;

  if (typeof min !== 'number' && typeof max !== 'number') {
    // neither provided, default to "1"
    minimum = 1;
    maximum = 1;
  } else {
    minimum = typeof min === 'number' ? min : 1;
    maximum = typeof max === 'number' ? max : Infinity;
  }

  return {
    minimum: minimum,
    maximum: maximum
  };
}

function chunkByType(items) {
  var chunk = [];
  var lastType;
  return items.reduce(function (chunks, item) {
    var itemType = (0, _typeOf["default"])(item);

    if (!lastType || itemType === lastType) {
      chunk.push(item);
    } else {
      chunks.push(chunk);
      chunk = [item];
    }

    lastType = itemType;
    return chunks;
  }, []).concat(chunk.length > 0 ? [chunk] : []);
}

function validateChunks(specifiers, props, propName, componentName) {
  var items = props[propName];
  var chunks = chunkByType(items);

  for (var _len = arguments.length, rest = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    rest[_key - 4] = arguments[_key];
  }

  for (var i = 0; i < specifiers.length; i += 1) {
    var _specifiers$i = specifiers[i],
        validator = _specifiers$i.validator,
        min = _specifiers$i.min,
        max = _specifiers$i.max;

    var _getMinMax = getMinMax({
      min: min,
      max: max
    }),
        minimum = _getMinMax.minimum,
        maximum = _getMinMax.maximum;

    if (chunks.length === 0 && minimum === 0) {
      // no chunks left, but this specifier does not require any items
      continue; // eslint-disable-line no-continue
    }

    var arrayOfValidator = (0, _propTypes.arrayOf)(validator).isRequired;
    var chunk = chunks.shift(); // extract the next chunk to test

    var chunkError = arrayOfValidator.apply(void 0, [_objectSpread({}, props, _defineProperty({}, propName, chunk)), propName, componentName].concat(rest));

    if (chunkError) {
      // this chunk is invalid
      if (minimum === 0) {
        // but, specifier has a min of 0 and can be skipped
        chunks.unshift(chunk); // put the chunk back, for the next iteration

        continue; // eslint-disable-line no-continue
      }

      return chunkError;
    } // chunk is valid!


    if (chunk.length < minimum) {
      return new RangeError("".concat(componentName, ": specifier index ").concat(i, " requires a minimum of ").concat(min, " items, but only has ").concat(chunk.length, "."));
    }

    if (chunk.length > maximum) {
      return new RangeError("".concat(componentName, ": specifier index ").concat(i, " requires a maximum of ").concat(max, " items, but has ").concat(chunk.length, "."));
    }
  }

  if (chunks.length > 0) {
    return new TypeError("".concat(componentName, ": after all ").concat(specifiers.length, " specifiers matched, ").concat(chunks.length, " types of items were remaining."));
  }

  return null;
}

var specifierValidator = (0, _withShape["default"])((0, _object["default"])(), specifierShape).isRequired;

function sequenceOfValidator() {
  for (var _len2 = arguments.length, specifiers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    specifiers[_key2] = arguments[_key2];
  }

  if (specifiers.length === 0) {
    throw new RangeError('sequenceOf: at least one specifier is required');
  }

  var errors = specifiers.map(function (specifier, i) {
    return specifierValidator({
      specifier: specifier
    }, 'specifier', 'sequenceOf specifier', "suequenceOf specifier, index ".concat(i), "specifier, index ".concat(i));
  });

  if (errors.some(Boolean)) {
    throw new TypeError("\n      sequenceOf: all specifiers must match the appropriate shape.\n\n      Errors:\n        ".concat(errors.map(function (e, i) {
      return " - Argument index ".concat(i, ": ").concat(e.message);
    }).join(',\n        '), "\n    "));
  }

  var validator = function sequenceOf(props, propName) {
    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }

    for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      rest[_key3 - 2] = arguments[_key3];
    }

    var error = _propTypes.array.apply(void 0, [props, propName].concat(rest));

    if (error) {
      return error;
    }

    return validateChunks.apply(void 0, [specifiers, props, propName].concat(rest));
  };

  validator.isRequired = function sequenceOfRequired(props, propName, componentName) {
    for (var _len4 = arguments.length, rest = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
      rest[_key4 - 3] = arguments[_key4];
    }

    var error = _propTypes.array.isRequired.apply(_propTypes.array, [props, propName, componentName].concat(rest));

    if (error) {
      return error;
    }

    return validateChunks.apply(void 0, [specifiers, props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, 'sequenceOf', specifiers);
}
//# sourceMappingURL=sequenceOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/shape.js":
/*!*******************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/shape.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shapeValidator;

var _isPlainObject = _interopRequireDefault(__webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/airbnb-prop-types/build/helpers/isPlainObject.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function shapeValidator(shapeTypes) {
  if (!(0, _isPlainObject["default"])(shapeTypes)) {
    throw new TypeError('shape must be a normal object');
  }

  function shape(props, propName, componentName, location) {
    var propValue = props[propName];

    if (propValue == null) {
      return null;
    } // code adapted from PropTypes.shape: https://github.com/facebook/react/blob/14156e56b9cf18ac86963185c5af4abddf3ff811/src/isomorphic/classic/types/ReactPropTypes.js#L381
    // eslint-disable-next-line guard-for-in, no-restricted-syntax


    for (var _len = arguments.length, rest = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      rest[_key - 4] = arguments[_key];
    }

    for (var key in shapeTypes) {
      var checker = shapeTypes[key];

      if (checker) {
        var error = checker.apply(void 0, [propValue, key, componentName, location].concat(rest));

        if (error) {
          return error;
        }
      }
    }

    return null;
  }

  shape.isRequired = function shapeRequired(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return new TypeError("".concat(componentName, ": ").concat(propName, " is required."));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return shape.apply(void 0, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(shape, 'shape', shapeTypes);
}
//# sourceMappingURL=shape.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/stringEndsWith.js":
/*!****************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/stringEndsWith.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = stringEndsWithValidator;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function stringEndsWithValidator(end) {
  if (typeof end !== 'string' || end.length === 0) {
    throw new TypeError('a non-empty string is required');
  }

  var validator = function stringEndsWith(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var stringError = _propTypes.string.apply(void 0, [props, propName, componentName].concat(rest));

    if (stringError) {
      return stringError;
    }

    if (!propValue.endsWith(end) || propValue.length <= end.length) {
      return new TypeError("".concat(componentName, ": ").concat(propName, " does not end with \"").concat(end, "\""));
    }

    return null;
  };

  validator.isRequired = function requiredStringEndsWith() {
    var stringError = _propTypes.string.isRequired.apply(_propTypes.string, arguments);

    if (stringError) {
      return stringError;
    }

    return validator.apply(void 0, arguments);
  };

  return (0, _wrapValidator["default"])(validator, "stringEndsWith: ".concat(end));
}
//# sourceMappingURL=stringEndsWith.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/stringStartsWith.js":
/*!******************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/stringStartsWith.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = stringStartsWithValidator;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function stringStartsWithValidator(start) {
  if (typeof start !== 'string' || start.length === 0) {
    throw new TypeError('a non-empty string is required');
  }

  var validator = function stringStartsWith(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var stringError = _propTypes.string.apply(void 0, [props, propName, componentName].concat(rest));

    if (stringError) {
      return stringError;
    }

    if (!propValue.startsWith(start) || propValue.length <= start.length) {
      return new TypeError("".concat(componentName, ": ").concat(propName, " does not start with \"").concat(start, "\""));
    }

    return null;
  };

  validator.isRequired = function requiredStringStartsWith() {
    var stringError = _propTypes.string.isRequired.apply(_propTypes.string, arguments);

    if (stringError) {
      return stringError;
    }

    return validator.apply(void 0, arguments);
  };

  return (0, _wrapValidator["default"])(validator, "stringStartsWith: ".concat(start));
}
//# sourceMappingURL=stringStartsWith.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/uniqueArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/uniqueArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function uniqueCountWithSet(arr) {
  return new Set(arr).size;
}
/* istanbul ignore next */


function uniqueCountLegacy(arr) {
  var seen = [];
  arr.forEach(function (item) {
    if (seen.indexOf(item) === -1) {
      seen.push(item);
    }
  });
  return seen.length;
}

var getUniqueCount = typeof Set === 'function' ? uniqueCountWithSet :
/* istanbul ignore next */
uniqueCountLegacy;

function requiredUniqueArray(props, propName, componentName) {
  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var result = _propTypes.array.isRequired.apply(_propTypes.array, [props, propName, componentName].concat(rest));

  if (result != null) {
    return result;
  }

  var propValue = props[propName];
  var uniqueCount = getUniqueCount(propValue);

  if (uniqueCount !== propValue.length) {
    return new RangeError("".concat(componentName, ": values must be unique. ").concat(propValue.length - uniqueCount, " duplicate values found."));
  }

  return null;
}

function uniqueArray(props, propName) {
  var propValue = props[propName];

  if (propValue == null) {
    return null;
  }

  for (var _len2 = arguments.length, rest = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    rest[_key2 - 2] = arguments[_key2];
  }

  return requiredUniqueArray.apply(void 0, [props, propName].concat(rest));
}

uniqueArray.isRequired = requiredUniqueArray;

var _default = function _default() {
  return (0, _wrapValidator["default"])(uniqueArray, 'uniqueArray');
};

exports["default"] = _default;
//# sourceMappingURL=uniqueArray.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/uniqueArrayOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/uniqueArrayOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = uniqueArrayOfTypeValidator;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/airbnb-prop-types/build/and.js"));

var _uniqueArray = _interopRequireDefault(__webpack_require__(/*! ./uniqueArray */ "./node_modules/airbnb-prop-types/build/uniqueArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var unique = (0, _uniqueArray["default"])();

function uniqueArrayOfTypeValidator(type) {
  if (typeof type !== 'function') {
    throw new TypeError('type must be a validator function');
  }

  var mapper = null;
  var name = 'uniqueArrayOfType';

  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  if (rest.length === 1) {
    if (typeof rest[0] === 'function') {
      mapper = rest[0];
    } else if (typeof rest[0] === 'string') {
      name = rest[0];
    } else {
      throw new TypeError('single input must either be string or function');
    }
  } else if (rest.length === 2) {
    if (typeof rest[0] === 'function' && typeof rest[1] === 'string') {
      mapper = rest[0];
      name = rest[1];
    } else {
      throw new TypeError('multiple inputs must be in [function, string] order');
    }
  } else if (rest.length > 2) {
    throw new TypeError('only [], [name], [mapper], and [mapper, name] are valid inputs');
  }

  function uniqueArrayOfMapped(props, propName) {
    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }

    var values = propValue.map(mapper);

    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return unique.apply(void 0, [_objectSpread({}, props, _defineProperty({}, propName, values)), propName].concat(args));
  }

  uniqueArrayOfMapped.isRequired = function isRequired(props, propName) {
    var propValue = props[propName];

    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    if (propValue == null) {
      return _propTypes.array.isRequired.apply(_propTypes.array, [props, propName].concat(args));
    }

    return uniqueArrayOfMapped.apply(void 0, [props, propName].concat(args));
  };

  var arrayValidator = (0, _propTypes.arrayOf)(type);
  var uniqueValidator = mapper ? uniqueArrayOfMapped : unique;
  var validator = (0, _and["default"])([arrayValidator, uniqueValidator], name);
  validator.isRequired = (0, _and["default"])([uniqueValidator.isRequired, arrayValidator.isRequired], "".concat(name, ".isRequired"));
  return validator;
}
//# sourceMappingURL=uniqueArrayOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/valuesOf.js":
/*!**********************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/valuesOf.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = valuesOfValidator;

var _isPrimitive = _interopRequireDefault(__webpack_require__(/*! ./helpers/isPrimitive */ "./node_modules/airbnb-prop-types/build/helpers/isPrimitive.js"));

var _wrapValidator = _interopRequireDefault(__webpack_require__(/*! ./helpers/wrapValidator */ "./node_modules/airbnb-prop-types/build/helpers/wrapValidator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// code adapted from https://github.com/facebook/react/blob/14156e56b9cf18ac86963185c5af4abddf3ff811/src/isomorphic/classic/types/ReactPropTypes.js#L307-L340
function valuesOfValidator(propType) {
  if (typeof propType !== 'function') {
    throw new TypeError('objectOf: propType must be a function');
  }

  var validator = function valuesOf(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];

    if (propValue == null || (0, _isPrimitive["default"])(propValue)) {
      return null;
    }

    var firstError;
    Object.keys(propValue).some(function (key) {
      firstError = propType.apply(void 0, [propValue, key, componentName, location, "".concat(propFullName, ".").concat(key)].concat(rest));
      return firstError;
    });
    return firstError || null;
  };

  validator.isRequired = function valuesOfRequired(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue == null) {
      return new TypeError("".concat(componentName, ": ").concat(propName, " is required."));
    }

    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return validator.apply(void 0, [props, propName, componentName].concat(rest));
  };

  return (0, _wrapValidator["default"])(validator, 'valuesOf', propType);
}
//# sourceMappingURL=valuesOf.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/build/withShape.js":
/*!***********************************************************!*\
  !*** ./node_modules/airbnb-prop-types/build/withShape.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withShape;

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/airbnb-prop-types/build/and.js"));

var _shape = _interopRequireDefault(__webpack_require__(/*! ./shape */ "./node_modules/airbnb-prop-types/build/shape.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function withShape(type, shapeTypes) {
  if (typeof type !== 'function') {
    throw new TypeError('type must be a valid PropType');
  }

  var shapeValidator = (0, _shape["default"])(shapeTypes);
  return (0, _and["default"])([type, shapeValidator], 'withShape');
}
//# sourceMappingURL=withShape.js.map

/***/ }),

/***/ "./node_modules/airbnb-prop-types/index.js":
/*!*************************************************!*\
  !*** ./node_modules/airbnb-prop-types/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =  false ? undefined : __webpack_require__(/*! ./build */ "./node_modules/airbnb-prop-types/build/index.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/array.prototype.find/implementation.js":
/*!*************************************************************!*\
  !*** ./node_modules/array.prototype.find/implementation.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ToObject = __webpack_require__(/*! es-abstract/2019/ToObject */ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToObject.js");
var ToLength = __webpack_require__(/*! es-abstract/2019/ToLength */ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToLength.js");
var IsCallable = __webpack_require__(/*! es-abstract/2019/IsCallable */ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/IsCallable.js");

module.exports = function find(predicate) {
	var list = ToObject(this);
	var length = ToLength(list.length);
	if (!IsCallable(predicate)) {
		throw new TypeError('Array#find: predicate must be a function');
	}
	if (length === 0) {
		return void 0;
	}
	var thisArg;
	if (arguments.length > 0) {
		thisArg = arguments[1];
	}

	for (var i = 0, value; i < length; i++) {
		value = list[i];
		// inlined for performance: if (Call(predicate, thisArg, [value, i, list])) {
		if (predicate.apply(thisArg, [value, i, list])) {
			return value;
		}
	}
	return void 0;
};


/***/ }),

/***/ "./node_modules/array.prototype.find/index.js":
/*!****************************************************!*\
  !*** ./node_modules/array.prototype.find/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var RequireObjectCoercible = __webpack_require__(/*! es-abstract/2019/RequireObjectCoercible */ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/RequireObjectCoercible.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/array.prototype.find/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/array.prototype.find/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/array.prototype.find/shim.js");

var slice = Array.prototype.slice;

var polyfill = getPolyfill();

var boundFindShim = function find(array, predicate) { // eslint-disable-line no-unused-vars
	RequireObjectCoercible(array);
	var args = slice.call(arguments, 1);
	return polyfill.apply(array, args);
};

define(boundFindShim, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFindShim;


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/IsCallable.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/2019/IsCallable.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = __webpack_require__(/*! is-callable */ "./node_modules/is-callable/index.js");


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/RequireObjectCoercible.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/2019/RequireObjectCoercible.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ../5/CheckObjectCoercible */ "./node_modules/array.prototype.find/node_modules/es-abstract/5/CheckObjectCoercible.js");


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToInteger.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToInteger.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES5ToInteger = __webpack_require__(/*! ../5/ToInteger */ "./node_modules/array.prototype.find/node_modules/es-abstract/5/ToInteger.js");

var ToNumber = __webpack_require__(/*! ./ToNumber */ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToNumber.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	return ES5ToInteger(number);
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToLength.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToLength.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MAX_SAFE_INTEGER = __webpack_require__(/*! ../helpers/maxSafeInteger */ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/maxSafeInteger.js");

var ToInteger = __webpack_require__(/*! ./ToInteger */ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToInteger.js");

module.exports = function ToLength(argument) {
	var len = ToInteger(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToNumber.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToNumber.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/array.prototype.find/node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = __webpack_require__(/*! ../helpers/callBound */ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/callBound.js");
var regexTester = __webpack_require__(/*! ../helpers/regexTester */ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/regexTester.js");
var isPrimitive = __webpack_require__(/*! ../helpers/isPrimitive */ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/isPrimitive.js");

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = __webpack_require__(/*! ./ToPrimitive */ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToPrimitive.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		} else {
			var trimmed = $trim(value);
			if (trimmed !== value) {
				return ToNumber(trimmed);
			}
		}
	}
	return $Number(value);
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToObject.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToObject.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/array.prototype.find/node_modules/es-abstract/GetIntrinsic.js");

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = __webpack_require__(/*! ./RequireObjectCoercible */ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/RequireObjectCoercible.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToPrimitive.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/2019/ToPrimitive.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__(/*! es-to-primitive/es2015 */ "./node_modules/es-to-primitive/es2015.js");

// https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/5/CheckObjectCoercible.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/5/CheckObjectCoercible.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/array.prototype.find/node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.10

module.exports = function CheckObjectCoercible(value, optMessage) {
	if (value == null) {
		throw new $TypeError(optMessage || ('Cannot call method on ' + value));
	}
	return value;
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/5/ToInteger.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/5/ToInteger.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/array.prototype.find/node_modules/es-abstract/GetIntrinsic.js");

var $Math = GetIntrinsic('%Math%');

var ToNumber = __webpack_require__(/*! ./ToNumber */ "./node_modules/array.prototype.find/node_modules/es-abstract/5/ToNumber.js");
var $isNaN = __webpack_require__(/*! ../helpers/isNaN */ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/isNaN.js");
var $isFinite = __webpack_require__(/*! ../helpers/isFinite */ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/isFinite.js");
var $sign = __webpack_require__(/*! ../helpers/sign */ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/sign.js");

var $floor = $Math.floor;
var $abs = $Math.abs;

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.4

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	if ($isNaN(number)) { return 0; }
	if (number === 0 || !$isFinite(number)) { return number; }
	return $sign(number) * $floor($abs(number));
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/5/ToNumber.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/5/ToNumber.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.3

module.exports = function ToNumber(value) {
	return +value; // eslint-disable-line no-implicit-coercion
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/GetIntrinsic.js":
/*!************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/GetIntrinsic.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/callBind.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/helpers/callBind.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/array.prototype.find/node_modules/es-abstract/GetIntrinsic.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

module.exports.apply = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/callBound.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/helpers/callBound.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/array.prototype.find/node_modules/es-abstract/GetIntrinsic.js");

var callBind = __webpack_require__(/*! ./callBind */ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/callBind.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/isFinite.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/helpers/isFinite.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/isNaN.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/helpers/isNaN.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/isPrimitive.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/helpers/isPrimitive.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/maxSafeInteger.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/helpers/maxSafeInteger.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/array.prototype.find/node_modules/es-abstract/GetIntrinsic.js");

var $Math = GetIntrinsic('%Math%');
var $Number = GetIntrinsic('%Number%');

module.exports = $Number.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/regexTester.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/helpers/regexTester.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/array.prototype.find/node_modules/es-abstract/GetIntrinsic.js");

var $test = GetIntrinsic('RegExp.prototype.test');

var callBind = __webpack_require__(/*! ./callBind */ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/callBind.js");

module.exports = function regexTester(regex) {
	return callBind($test, regex);
};


/***/ }),

/***/ "./node_modules/array.prototype.find/node_modules/es-abstract/helpers/sign.js":
/*!************************************************************************************!*\
  !*** ./node_modules/array.prototype.find/node_modules/es-abstract/helpers/sign.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),

/***/ "./node_modules/array.prototype.find/polyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/array.prototype.find/polyfill.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getPolyfill() {
	// Detect if an implementation exists
	// Detect early implementations which skipped holes in sparse arrays
	// eslint-disable-next-line no-sparse-arrays
	var implemented = Array.prototype.find && [, 1].find(function () {
		return true;
	}) !== 1;

	// eslint-disable-next-line global-require
	return implemented ? Array.prototype.find : __webpack_require__(/*! ./implementation */ "./node_modules/array.prototype.find/implementation.js");
};


/***/ }),

/***/ "./node_modules/array.prototype.find/shim.js":
/*!***************************************************!*\
  !*** ./node_modules/array.prototype.find/shim.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/array.prototype.find/polyfill.js");

module.exports = function shimArrayPrototypeFind() {
	var polyfill = getPolyfill();

	define(Array.prototype, { find: polyfill }, {
		find: function () {
			return Array.prototype.find !== polyfill;
		}
	});

	return polyfill;
};


/***/ }),

/***/ "./node_modules/consolidated-events/lib/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/consolidated-events/lib/index.esm.js ***!
  \***********************************************************/
/*! exports provided: addEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
var CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Adapted from Modernizr
// https://github.com/Modernizr/Modernizr/blob/acb3f0d9/feature-detects/dom/passiveeventlisteners.js#L26-L37
function testPassiveEventListeners() {
  if (!CAN_USE_DOM) {
    return false;
  }

  if (!window.addEventListener || !window.removeEventListener || !Object.defineProperty) {
    return false;
  }

  var supportsPassiveOption = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get: function () {
        function get() {
          supportsPassiveOption = true;
        }

        return get;
      }()
    });
    var noop = function noop() {};
    window.addEventListener('testPassiveEventSupport', noop, opts);
    window.removeEventListener('testPassiveEventSupport', noop, opts);
  } catch (e) {
    // do nothing
  }

  return supportsPassiveOption;
}

var memoized = void 0;

function canUsePassiveEventListeners() {
  if (memoized === undefined) {
    memoized = testPassiveEventListeners();
  }
  return memoized;
}

function normalizeEventOptions(eventOptions) {
  if (!eventOptions) {
    return undefined;
  }

  if (!canUsePassiveEventListeners()) {
    // If the browser does not support the passive option, then it is expecting
    // a boolean for the options argument to specify whether it should use
    // capture or not. In more modern browsers, this is passed via the `capture`
    // option, so let's just hoist that value up.
    return !!eventOptions.capture;
  }

  return eventOptions;
}

/* eslint-disable no-bitwise */

/**
 * Generate a unique key for any set of event options
 */
function eventOptionsKey(normalizedEventOptions) {
  if (!normalizedEventOptions) {
    return 0;
  }

  // If the browser does not support passive event listeners, the normalized
  // event options will be a boolean.
  if (normalizedEventOptions === true) {
    return 100;
  }

  // At this point, the browser supports passive event listeners, so we expect
  // the event options to be an object with possible properties of capture,
  // passive, and once.
  //
  // We want to consistently return the same value, regardless of the order of
  // these properties, so let's use binary maths to assign each property to a
  // bit, and then add those together (with an offset to account for the
  // booleans at the beginning of this function).
  var capture = normalizedEventOptions.capture << 0;
  var passive = normalizedEventOptions.passive << 1;
  var once = normalizedEventOptions.once << 2;
  return capture + passive + once;
}

function ensureCanMutateNextEventHandlers(eventHandlers) {
  if (eventHandlers.handlers === eventHandlers.nextHandlers) {
    // eslint-disable-next-line no-param-reassign
    eventHandlers.nextHandlers = eventHandlers.handlers.slice();
  }
}

function TargetEventHandlers(target) {
  this.target = target;
  this.events = {};
}

TargetEventHandlers.prototype.getEventHandlers = function () {
  function getEventHandlers(eventName, options) {
    var key = String(eventName) + ' ' + String(eventOptionsKey(options));

    if (!this.events[key]) {
      this.events[key] = {
        handlers: [],
        handleEvent: undefined
      };
      this.events[key].nextHandlers = this.events[key].handlers;
    }

    return this.events[key];
  }

  return getEventHandlers;
}();

TargetEventHandlers.prototype.handleEvent = function () {
  function handleEvent(eventName, options, event) {
    var eventHandlers = this.getEventHandlers(eventName, options);
    eventHandlers.handlers = eventHandlers.nextHandlers;
    eventHandlers.handlers.forEach(function (handler) {
      if (handler) {
        // We need to check for presence here because a handler function may
        // cause later handlers to get removed. This can happen if you for
        // instance have a waypoint that unmounts another waypoint as part of an
        // onEnter/onLeave handler.
        handler(event);
      }
    });
  }

  return handleEvent;
}();

TargetEventHandlers.prototype.add = function () {
  function add(eventName, listener, options) {
    var _this = this;

    // options has already been normalized at this point.
    var eventHandlers = this.getEventHandlers(eventName, options);

    ensureCanMutateNextEventHandlers(eventHandlers);

    if (eventHandlers.nextHandlers.length === 0) {
      eventHandlers.handleEvent = this.handleEvent.bind(this, eventName, options);

      this.target.addEventListener(eventName, eventHandlers.handleEvent, options);
    }

    eventHandlers.nextHandlers.push(listener);

    var isSubscribed = true;
    var unsubscribe = function () {
      function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        isSubscribed = false;

        ensureCanMutateNextEventHandlers(eventHandlers);
        var index = eventHandlers.nextHandlers.indexOf(listener);
        eventHandlers.nextHandlers.splice(index, 1);

        if (eventHandlers.nextHandlers.length === 0) {
          // All event handlers have been removed, so we want to remove the event
          // listener from the target node.

          if (_this.target) {
            // There can be a race condition where the target may no longer exist
            // when this function is called, e.g. when a React component is
            // unmounting. Guarding against this prevents the following error:
            //
            //   Cannot read property 'removeEventListener' of undefined
            _this.target.removeEventListener(eventName, eventHandlers.handleEvent, options);
          }

          eventHandlers.handleEvent = undefined;
        }
      }

      return unsubscribe;
    }();
    return unsubscribe;
  }

  return add;
}();

var EVENT_HANDLERS_KEY = '__consolidated_events_handlers__';

// eslint-disable-next-line import/prefer-default-export
function addEventListener(target, eventName, listener, options) {
  if (!target[EVENT_HANDLERS_KEY]) {
    // eslint-disable-next-line no-param-reassign
    target[EVENT_HANDLERS_KEY] = new TargetEventHandlers(target);
  }
  var normalizedEventOptions = normalizeEventOptions(options);
  return target[EVENT_HANDLERS_KEY].add(eventName, listener, normalizedEventOptions);
}




/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/document.contains/implementation.js":
/*!**********************************************************!*\
  !*** ./node_modules/document.contains/implementation.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function contains(other) {
	if (arguments.length < 1) {
		throw new TypeError('1 argument is required');
	}
	if (typeof other !== 'object') {
		throw new TypeError('Argument 1 (”other“) to Node.contains must be an instance of Node');
	}

	var node = other;
	do {
		if (this === node) {
			return true;
		}
		if (node) {
			node = node.parentNode;
		}
	} while (node);

	return false;
};


/***/ }),

/***/ "./node_modules/document.contains/index.js":
/*!*************************************************!*\
  !*** ./node_modules/document.contains/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/document.contains/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/document.contains/polyfill.js");
var polyfill = getPolyfill();
var shim = __webpack_require__(/*! ./shim */ "./node_modules/document.contains/shim.js");

var boundContains = function contains(node, other) {
	return polyfill.apply(node, [other]);
};

define(boundContains, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundContains;


/***/ }),

/***/ "./node_modules/document.contains/polyfill.js":
/*!****************************************************!*\
  !*** ./node_modules/document.contains/polyfill.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/document.contains/implementation.js");

module.exports = function getPolyfill() {
	if (typeof document !== 'undefined') {
		if (document.contains) {
			return document.contains;
		}
		if (document.body && document.body.contains) {
			try {
				if (typeof document.body.contains.call(document, '') === 'boolean') {
					return document.body.contains;
				}
			} catch (e) { /**/ }
		}
	}
	return implementation;
};


/***/ }),

/***/ "./node_modules/document.contains/shim.js":
/*!************************************************!*\
  !*** ./node_modules/document.contains/shim.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/document.contains/polyfill.js");

module.exports = function shimContains() {
	var polyfill = getPolyfill();
	if (typeof document !== 'undefined') {
		define(
			document,
			{ contains: polyfill },
			{ contains: function () { return document.contains !== polyfill; } }
		);
		if (typeof Element !== 'undefined') {
			define(
				Element.prototype,
				{ contains: polyfill },
				{ contains: function () { return Element.prototype.contains !== polyfill; } }
			);
		}
	}
	return polyfill;
};


/***/ }),

/***/ "./node_modules/es-abstract/2019/IsCallable.js":
/*!*****************************************************!*\
  !*** ./node_modules/es-abstract/2019/IsCallable.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = __webpack_require__(/*! is-callable */ "./node_modules/is-callable/index.js");


/***/ }),

/***/ "./node_modules/es-abstract/2019/RequireObjectCoercible.js":
/*!*****************************************************************!*\
  !*** ./node_modules/es-abstract/2019/RequireObjectCoercible.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ../5/CheckObjectCoercible */ "./node_modules/es-abstract/5/CheckObjectCoercible.js");


/***/ }),

/***/ "./node_modules/es-abstract/5/CheckObjectCoercible.js":
/*!************************************************************!*\
  !*** ./node_modules/es-abstract/5/CheckObjectCoercible.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/es-abstract/GetIntrinsic.js");

var $TypeError = GetIntrinsic('%TypeError%');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.10

module.exports = function CheckObjectCoercible(value, optMessage) {
	if (value == null) {
		throw new $TypeError(optMessage || ('Cannot call method on ' + value));
	}
	return value;
};


/***/ }),

/***/ "./node_modules/es-abstract/GetIntrinsic.js":
/*!**************************************************!*\
  !*** ./node_modules/es-abstract/GetIntrinsic.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/es-abstract/helpers/callBind.js":
/*!******************************************************!*\
  !*** ./node_modules/es-abstract/helpers/callBind.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/es-abstract/GetIntrinsic.js");

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};


/***/ }),

/***/ "./node_modules/es-abstract/helpers/callBound.js":
/*!*******************************************************!*\
  !*** ./node_modules/es-abstract/helpers/callBound.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/es-abstract/GetIntrinsic.js");

var callBind = __webpack_require__(/*! ./callBind */ "./node_modules/es-abstract/helpers/callBind.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/es-to-primitive/es2015.js":
/*!************************************************!*\
  !*** ./node_modules/es-to-primitive/es2015.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__(/*! ./helpers/isPrimitive */ "./node_modules/es-to-primitive/helpers/isPrimitive.js");
var isCallable = __webpack_require__(/*! is-callable */ "./node_modules/is-callable/index.js");
var isDate = __webpack_require__(/*! is-date-object */ "./node_modules/is-date-object/index.js");
var isSymbol = __webpack_require__(/*! is-symbol */ "./node_modules/is-symbol/index.js");

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
	return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (arguments[1] === String) {
			hint = 'string';
		} else if (arguments[1] === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),

/***/ "./node_modules/es-to-primitive/helpers/isPrimitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/es-to-primitive/helpers/isPrimitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ "./node_modules/function.prototype.name/implementation.js":
/*!****************************************************************!*\
  !*** ./node_modules/function.prototype.name/implementation.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IsCallable = __webpack_require__(/*! es-abstract/2019/IsCallable */ "./node_modules/es-abstract/2019/IsCallable.js");
var functionsHaveNames = __webpack_require__(/*! functions-have-names */ "./node_modules/functions-have-names/index.js")();
var callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ "./node_modules/es-abstract/helpers/callBound.js");
var $functionToString = callBound('Function.prototype.toString');
var $stringMatch = callBound('String.prototype.match');

var classRegex = /^class /;

var isClass = function isClassConstructor(fn) {
	if (IsCallable(fn)) {
		return false;
	}
	if (typeof fn !== 'function') {
		return false;
	}
	try {
		var match = $stringMatch($functionToString(fn), classRegex);
		return !!match;
	} catch (e) {}
	return false;
};

var regex = /\s*function\s+([^(\s]*)\s*/;

var functionProto = Function.prototype;

module.exports = function getName() {
	if (!isClass(this) && !IsCallable(this)) {
		throw new TypeError('Function.prototype.name sham getter called on non-function');
	}
	if (functionsHaveNames) {
		return this.name;
	}
	if (this === functionProto) {
		return '';
	}
	var str = $functionToString(this);
	var match = $stringMatch(str, regex);
	var name = match && match[1];
	return name;
};


/***/ }),

/***/ "./node_modules/function.prototype.name/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/function.prototype.name/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ "./node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function.prototype.name/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/function.prototype.name/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/function.prototype.name/shim.js");

var bound = callBind(implementation);

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),

/***/ "./node_modules/function.prototype.name/polyfill.js":
/*!**********************************************************!*\
  !*** ./node_modules/function.prototype.name/polyfill.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function.prototype.name/implementation.js");

module.exports = function getPolyfill() {
	return implementation;
};


/***/ }),

/***/ "./node_modules/function.prototype.name/shim.js":
/*!******************************************************!*\
  !*** ./node_modules/function.prototype.name/shim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var supportsDescriptors = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js").supportsDescriptors;
var functionsHaveNames = __webpack_require__(/*! functions-have-names */ "./node_modules/functions-have-names/index.js")();
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/function.prototype.name/polyfill.js");
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;

module.exports = function shimName() {
	var polyfill = getPolyfill();
	if (functionsHaveNames) {
		return polyfill;
	}
	if (!supportsDescriptors) {
		throw new TypeErr('Shimming Function.prototype.name support requires ES5 property descriptor support.');
	}
	var functionProto = Function.prototype;
	defineProperty(functionProto, 'name', {
		configurable: true,
		enumerable: false,
		get: function () {
			var name = polyfill.call(this);
			if (this !== functionProto) {
				defineProperty(this, 'name', {
					configurable: true,
					enumerable: false,
					value: name,
					writable: false
				});
			}
			return name;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/functions-have-names/index.js":
/*!****************************************************!*\
  !*** ./node_modules/functions-have-names/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functionsHaveNames = function functionsHaveNames() {
	return typeof function f() {}.name === 'string';
};

var gOPD = Object.getOwnPropertyDescriptor;
if (gOPD) {
	try {
		gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		gOPD = null;
	}
}

functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
	return functionsHaveNames() && gOPD && !!gOPD(function () {}, 'name').configurable;
};

var $bind = Function.prototype.bind;

functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
	return functionsHaveNames() && typeof $bind === 'function' && function f() {}.bind().name !== '';
};

module.exports = functionsHaveNames;


/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/is-callable/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-callable/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
	} catch (_) {
		reflectApply = null;
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = reflectApply
	? function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value);
	}
	: function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ }),

/***/ "./node_modules/is-date-object/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-date-object/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ "./node_modules/is-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/is-regex/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';
var regexExec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	regexExec = Function.call.bind(RegExp.prototype.exec);
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		try {
			regexExec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return toStr.call(value) === regexClass;
	};


/***/ }),

/***/ "./node_modules/is-symbol/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-symbol/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),

/***/ "./node_modules/object-is/implementation.js":
/*!**************************************************!*\
  !*** ./node_modules/object-is/implementation.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ "./node_modules/object-is/index.js":
/*!*****************************************!*\
  !*** ./node_modules/object-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ "./node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object-is/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object-is/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object-is/shim.js");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object-is/polyfill.js":
/*!********************************************!*\
  !*** ./node_modules/object-is/polyfill.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object-is/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),

/***/ "./node_modules/object-is/shim.js":
/*!****************************************!*\
  !*** ./node_modules/object-is/shim.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object-is/polyfill.js");
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.entries/implementation.js":
/*!*******************************************************!*\
  !*** ./node_modules/object.entries/implementation.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RequireObjectCoercible = __webpack_require__(/*! es-abstract/2019/RequireObjectCoercible */ "./node_modules/es-abstract/2019/RequireObjectCoercible.js");
var has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ "./node_modules/es-abstract/helpers/callBound.js");
var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

module.exports = function entries(O) {
	var obj = RequireObjectCoercible(O);
	var entrys = [];
	for (var key in obj) {
		if (has(obj, key) && $isEnumerable(obj, key)) {
			entrys.push([key, obj[key]]);
		}
	}
	return entrys;
};


/***/ }),

/***/ "./node_modules/object.entries/index.js":
/*!**********************************************!*\
  !*** ./node_modules/object.entries/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ "./node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.entries/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.entries/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object.entries/shim.js");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.entries/polyfill.js":
/*!*************************************************!*\
  !*** ./node_modules/object.entries/polyfill.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.entries/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.entries === 'function' ? Object.entries : implementation;
};


/***/ }),

/***/ "./node_modules/object.entries/shim.js":
/*!*********************************************!*\
  !*** ./node_modules/object.entries/shim.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.entries/polyfill.js");
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

module.exports = function shimEntries() {
	var polyfill = getPolyfill();
	define(Object, { entries: polyfill }, {
		entries: function testEntries() {
			return Object.entries !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/object.values/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.values/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var RequireObjectCoercible = __webpack_require__(/*! es-abstract/2019/RequireObjectCoercible */ "./node_modules/es-abstract/2019/RequireObjectCoercible.js");
var callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ "./node_modules/es-abstract/helpers/callBound.js");

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

module.exports = function values(O) {
	var obj = RequireObjectCoercible(O);
	var vals = [];
	for (var key in obj) {
		if (has(obj, key) && $isEnumerable(obj, key)) {
			vals.push(obj[key]);
		}
	}
	return vals;
};


/***/ }),

/***/ "./node_modules/object.values/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.values/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.values/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.values/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object.values/shim.js");

var polyfill = getPolyfill();

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.values/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.values/polyfill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.values/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.values === 'function' ? Object.values : implementation;
};


/***/ }),

/***/ "./node_modules/object.values/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.values/shim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.values/polyfill.js");
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

module.exports = function shimValues() {
	var polyfill = getPolyfill();
	define(Object, { values: polyfill }, {
		values: function testValues() {
			return Object.values !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/react-outside-click-handler/build/OutsideClickHandler.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-outside-click-handler/build/OutsideClickHandler.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = __webpack_require__(/*! airbnb-prop-types */ "./node_modules/airbnb-prop-types/index.js");

var _consolidatedEvents = __webpack_require__(/*! consolidated-events */ "./node_modules/consolidated-events/lib/index.esm.js");

var _object = __webpack_require__(/*! object.values */ "./node_modules/object.values/index.js");

var _object2 = _interopRequireDefault(_object);

var _document = __webpack_require__(/*! document.contains */ "./node_modules/document.contains/index.js");

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DISPLAY = {
  BLOCK: 'block',
  FLEX: 'flex',
  INLINE: 'inline',
  INLINE_BLOCK: 'inline-block',
  CONTENTS: 'contents'
};

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  children: _propTypes2['default'].node.isRequired,
  onOutsideClick: _propTypes2['default'].func.isRequired,
  disabled: _propTypes2['default'].bool,
  useCapture: _propTypes2['default'].bool,
  display: _propTypes2['default'].oneOf((0, _object2['default'])(DISPLAY))
});

var defaultProps = {
  disabled: false,

  // `useCapture` is set to true by default so that a `stopPropagation` in the
  // children will not prevent all outside click handlers from firing - maja
  useCapture: true,
  display: DISPLAY.BLOCK
};

var OutsideClickHandler = function (_React$Component) {
  _inherits(OutsideClickHandler, _React$Component);

  function OutsideClickHandler() {
    var _ref;

    _classCallCheck(this, OutsideClickHandler);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = OutsideClickHandler.__proto__ || Object.getPrototypeOf(OutsideClickHandler)).call.apply(_ref, [this].concat(args)));

    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.setChildNodeRef = _this.setChildNodeRef.bind(_this);
    return _this;
  }

  _createClass(OutsideClickHandler, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _props = this.props,
            disabled = _props.disabled,
            useCapture = _props.useCapture;


        if (!disabled) this.addMouseDownEventListener(useCapture);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(_ref2) {
        var prevDisabled = _ref2.disabled;
        var _props2 = this.props,
            disabled = _props2.disabled,
            useCapture = _props2.useCapture;

        if (prevDisabled !== disabled) {
          if (disabled) {
            this.removeEventListeners();
          } else {
            this.addMouseDownEventListener(useCapture);
          }
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        this.removeEventListeners();
      }

      return componentWillUnmount;
    }()

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.

  }, {
    key: 'onMouseDown',
    value: function () {
      function onMouseDown(e) {
        var useCapture = this.props.useCapture;


        var isDescendantOfRoot = this.childNode && (0, _document2['default'])(this.childNode, e.target);
        if (!isDescendantOfRoot) {
          if (this.removeMouseUp) {
            this.removeMouseUp();
            this.removeMouseUp = null;
          }
          this.removeMouseUp = (0, _consolidatedEvents.addEventListener)(document, 'mouseup', this.onMouseUp, { capture: useCapture });
        }
      }

      return onMouseDown;
    }()

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.

  }, {
    key: 'onMouseUp',
    value: function () {
      function onMouseUp(e) {
        var onOutsideClick = this.props.onOutsideClick;


        var isDescendantOfRoot = this.childNode && (0, _document2['default'])(this.childNode, e.target);
        if (this.removeMouseUp) {
          this.removeMouseUp();
          this.removeMouseUp = null;
        }

        if (!isDescendantOfRoot) {
          onOutsideClick(e);
        }
      }

      return onMouseUp;
    }()
  }, {
    key: 'setChildNodeRef',
    value: function () {
      function setChildNodeRef(ref) {
        this.childNode = ref;
      }

      return setChildNodeRef;
    }()
  }, {
    key: 'addMouseDownEventListener',
    value: function () {
      function addMouseDownEventListener(useCapture) {
        this.removeMouseDown = (0, _consolidatedEvents.addEventListener)(document, 'mousedown', this.onMouseDown, { capture: useCapture });
      }

      return addMouseDownEventListener;
    }()
  }, {
    key: 'removeEventListeners',
    value: function () {
      function removeEventListeners() {
        if (this.removeMouseDown) this.removeMouseDown();
        if (this.removeMouseUp) this.removeMouseUp();
      }

      return removeEventListeners;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props3 = this.props,
            children = _props3.children,
            display = _props3.display;


        return _react2['default'].createElement(
          'div',
          {
            ref: this.setChildNodeRef,
            style: display !== DISPLAY.BLOCK && (0, _object2['default'])(DISPLAY).includes(display) ? { display: display } : undefined
          },
          children
        );
      }

      return render;
    }()
  }]);

  return OutsideClickHandler;
}(_react2['default'].Component);

exports['default'] = OutsideClickHandler;


OutsideClickHandler.propTypes = propTypes;
OutsideClickHandler.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/react-outside-click-handler/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-outside-click-handler/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__(/*! ./build/OutsideClickHandler */ "./node_modules/react-outside-click-handler/build/OutsideClickHandler.js");


/***/ }),

/***/ "./src/components/slide/slide-container.tsx":
/*!**************************************************!*\
  !*** ./src/components/slide/slide-container.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slide */ "./src/components/slide/slide.tsx");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-outside-click-handler */ "./node_modules/react-outside-click-handler/index.js");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\slide\\slide-container.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var SlideContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SlideContainer, _Component);

  var _super = _createSuper(SlideContainer);

  function SlideContainer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SlideContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      active: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "outsideClickHandler", function () {
      _this.setState({
        active: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SlideContainer, [{
    key: "render",
    value: function render() {
      var active = this.state.active;
      return __jsx("div", {
        className: "slideContainer ".concat(active ? 'active' : ''),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }
      }, __jsx(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onOutsideClick: this.outsideClickHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }, __jsx(_slide__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }
      })));
    }
  }]);

  return SlideContainer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SlideContainer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/slide/slide.tsx":
/*!****************************************!*\
  !*** ./src/components/slide/slide.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\slide\\slide.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 // interface IComponentProps {
//   name: {
//     first: string;
//     last: string;
//   };
//   picture: {
//     large: string;
//   };
//   login: {
//     username: string;
//   };
//   phone: string;
//   registered: {
//     date: string;
//   };
//   location: {
//     city: string;
//   };
// }

var Slide = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Slide, _Component);

  var _super = _createSuper(Slide);

  function Slide() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Slide);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Slide, [{
    key: "render",
    value: function render() {
      // const { name, picture, login, phone, registered, location } = this.props;
      return __jsx("div", {
        className: "side-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }
      }, __jsx("img", {
        src: "/img/close.svg",
        className: "slide-close" // onClick={this.props.closeClick}
        ,
        alt: "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Slide;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Slide);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/users.tsx":
/*!*****************************!*\
  !*** ./src/pages/users.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
/* harmony import */ var _components_user_user_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/user/user-card */ "./src/components/user/user-card.tsx");
/* harmony import */ var _components_slide_slide_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/slide/slide-container */ "./src/components/slide/slide-container.tsx");








var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\pages\\users.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Users = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Users, _Component);

  var _super = _createSuper(Users);

  function Users() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Users);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      users: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "api", new _api_api__WEBPACK_IMPORTED_MODULE_9__["default"]());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "componentDidMount", function () {
      _this.api.getUsers(12).then(function (data) {
        _this.setState({
          users: data.results
        });
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "outsideClickHandler", function () {});

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Users, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var users = this.state.users;
      console.log(users);
      return __jsx("div", {
        className: "users-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 7
        }
      }, __jsx(_components_slide_slide_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "users-page__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, "Users"), __jsx("div", {
        className: "users-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, users.map(function (item, index) {
        return __jsx(_components_user_user_card__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }
        }));
      })));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Users);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvYW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC9iZXR3ZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC9ib29sZWFuU29tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvY2hpbGRyZW5IYXZlUHJvcFhvckNoaWxkcmVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC9jaGlsZHJlbk9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC9jaGlsZHJlbk9mVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvY2hpbGRyZW5TZXF1ZW5jZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC9jb21wb25lbnRXaXRoTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvZGlzYWxsb3dlZElmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC9lbGVtZW50VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FpcmJuYi1wcm9wLXR5cGVzL2J1aWxkL2V4cGxpY2l0TnVsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvaGVscGVycy9nZXRDb21wb25lbnROYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC9oZWxwZXJzL2lzSW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvaGVscGVycy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC9oZWxwZXJzL3JlbmRlcmFibGVDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvaGVscGVycy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FpcmJuYi1wcm9wLXR5cGVzL2J1aWxkL2hlbHBlcnMvd3JhcFZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FpcmJuYi1wcm9wLXR5cGVzL2J1aWxkL2ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FpcmJuYi1wcm9wLXR5cGVzL2J1aWxkL2tleXNPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvbXV0dWFsbHlFeGNsdXNpdmVQcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvbXV0dWFsbHlFeGNsdXNpdmVUcnVlUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FpcmJuYi1wcm9wLXR5cGVzL2J1aWxkL25DaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvbm9uTmVnYXRpdmVJbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC9ub25OZWdhdGl2ZU51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvbnVtZXJpY1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC9vci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FpcmJuYi1wcm9wLXR5cGVzL2J1aWxkL3JlZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvcmVxdWlyZWRCeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvcmVzdHJpY3RlZFByb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FpcmJuYi1wcm9wLXR5cGVzL2J1aWxkL3NlcXVlbmNlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FpcmJuYi1wcm9wLXR5cGVzL2J1aWxkL3NoYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC9zdHJpbmdFbmRzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvc3RyaW5nU3RhcnRzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWlyYm5iLXByb3AtdHlwZXMvYnVpbGQvdW5pcXVlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FpcmJuYi1wcm9wLXR5cGVzL2J1aWxkL3VuaXF1ZUFycmF5T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FpcmJuYi1wcm9wLXR5cGVzL2J1aWxkL3ZhbHVlc09mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9haXJibmItcHJvcC10eXBlcy9idWlsZC93aXRoU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FpcmJuYi1wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcnJheS5wcm90b3R5cGUuZmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJyYXkucHJvdG90eXBlLmZpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FycmF5LnByb3RvdHlwZS5maW5kL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC8yMDE5L0lzQ2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FycmF5LnByb3RvdHlwZS5maW5kL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC8yMDE5L1JlcXVpcmVPYmplY3RDb2VyY2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FycmF5LnByb3RvdHlwZS5maW5kL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC8yMDE5L1RvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJyYXkucHJvdG90eXBlLmZpbmQvbm9kZV9tb2R1bGVzL2VzLWFic3RyYWN0LzIwMTkvVG9MZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FycmF5LnByb3RvdHlwZS5maW5kL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC8yMDE5L1RvTnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcnJheS5wcm90b3R5cGUuZmluZC9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvMjAxOS9Ub09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJyYXkucHJvdG90eXBlLmZpbmQvbm9kZV9tb2R1bGVzL2VzLWFic3RyYWN0LzIwMTkvVG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FycmF5LnByb3RvdHlwZS5maW5kL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC81L0NoZWNrT2JqZWN0Q29lcmNpYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcnJheS5wcm90b3R5cGUuZmluZC9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvNS9Ub0ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FycmF5LnByb3RvdHlwZS5maW5kL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC81L1RvTnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcnJheS5wcm90b3R5cGUuZmluZC9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvR2V0SW50cmluc2ljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcnJheS5wcm90b3R5cGUuZmluZC9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvaGVscGVycy9jYWxsQmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJyYXkucHJvdG90eXBlLmZpbmQvbm9kZV9tb2R1bGVzL2VzLWFic3RyYWN0L2hlbHBlcnMvY2FsbEJvdW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcnJheS5wcm90b3R5cGUuZmluZC9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvaGVscGVycy9pc0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJyYXkucHJvdG90eXBlLmZpbmQvbm9kZV9tb2R1bGVzL2VzLWFic3RyYWN0L2hlbHBlcnMvaXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FycmF5LnByb3RvdHlwZS5maW5kL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcnJheS5wcm90b3R5cGUuZmluZC9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvaGVscGVycy9tYXhTYWZlSW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJyYXkucHJvdG90eXBlLmZpbmQvbm9kZV9tb2R1bGVzL2VzLWFic3RyYWN0L2hlbHBlcnMvcmVnZXhUZXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FycmF5LnByb3RvdHlwZS5maW5kL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC9oZWxwZXJzL3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FycmF5LnByb3RvdHlwZS5maW5kL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcnJheS5wcm90b3R5cGUuZmluZC9zaGltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25zb2xpZGF0ZWQtZXZlbnRzL2xpYi9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb2N1bWVudC5jb250YWlucy9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvY3VtZW50LmNvbnRhaW5zL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb2N1bWVudC5jb250YWlucy9zaGltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC8yMDE5L0lzQ2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzLWFic3RyYWN0LzIwMTkvUmVxdWlyZU9iamVjdENvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvNS9DaGVja09iamVjdENvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvR2V0SW50cmluc2ljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC9oZWxwZXJzL2NhbGxCaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC9oZWxwZXJzL2NhbGxCb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXMtdG8tcHJpbWl0aXZlL2VzMjAxNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLnByb3RvdHlwZS5uYW1lL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mdW5jdGlvbi5wcm90b3R5cGUubmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnVuY3Rpb24ucHJvdG90eXBlLm5hbWUvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLnByb3RvdHlwZS5uYW1lL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9ucy1oYXZlLW5hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXMtc3ltYm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzLXN5bWJvbHMvc2hhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWNhbGxhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1kYXRlLW9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXN5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC5lbnRyaWVzL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QuZW50cmllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LmVudHJpZXMvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC5lbnRyaWVzL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC52YWx1ZXMvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC52YWx1ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC52YWx1ZXMvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC52YWx1ZXMvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3V0c2lkZS1jbGljay1oYW5kbGVyL2J1aWxkL091dHNpZGVDbGlja0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW91dHNpZGUtY2xpY2staGFuZGxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGlkZS9zbGlkZS1jb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlL3NsaWRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXNlcnMudHN4Il0sIm5hbWVzIjpbIlNsaWRlQ29udGFpbmVyIiwiYWN0aXZlIiwic2V0U3RhdGUiLCJzdGF0ZSIsIm91dHNpZGVDbGlja0hhbmRsZXIiLCJDb21wb25lbnQiLCJTbGlkZSIsIlVzZXJzIiwidXNlcnMiLCJBUEkiLCJhcGkiLCJnZXRVc2VycyIsInRoZW4iLCJkYXRhIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLDRDQUE0QyxtQkFBTyxDQUFDLGdHQUF5Qjs7QUFFN0Usc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRSxlQUFlO0FBQ3pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0I7Ozs7Ozs7Ozs7OztBQ2xEYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLHFD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QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFF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QUE7QUFBQSxRQVZGLEVBV0U7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsRUFZRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dBLEtBQUssQ0FBQ1MsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMxQixlQUNFLE1BQUMsbUVBQUQseUZBQWNELElBQWQ7QUFBb0IsYUFBRyxFQUFFQyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxPQUpBLENBREgsQ0FaRixDQURGO0FBc0JEOzs7O0VBNUNpQmQsK0M7O0FBK0NMRSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnMuanMuNTFkZGVkMmU5YzAxMWE2M2NmODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBhbmRWYWxpZGF0b3I7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFuZFZhbGlkYXRvcih2YWxpZGF0b3JzKSB7XG4gIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnYW5kJztcblxuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsaWRhdG9ycykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhbmQ6IDIgb3IgbW9yZSB2YWxpZGF0b3JzIGFyZSByZXF1aXJlZCcpO1xuICB9XG5cbiAgaWYgKHZhbGlkYXRvcnMubGVuZ3RoIDw9IDEpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYW5kOiAyIG9yIG1vcmUgdmFsaWRhdG9ycyBhcmUgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIHZhciB2YWxpZGF0b3IgPSBmdW5jdGlvbiBhbmQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBmaXJzdEVycm9yID0gbnVsbDtcbiAgICB2YWxpZGF0b3JzLnNvbWUoZnVuY3Rpb24gKHZhbGlkYXRvckZuKSB7XG4gICAgICBmaXJzdEVycm9yID0gdmFsaWRhdG9yRm4uYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgIHJldHVybiBmaXJzdEVycm9yICE9IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpcnN0RXJyb3IgPT0gbnVsbCA/IG51bGwgOiBmaXJzdEVycm9yO1xuICB9O1xuXG4gIHZhbGlkYXRvci5pc1JlcXVpcmVkID0gZnVuY3Rpb24gYW5kSXNSZXF1aXJlZCgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RFcnJvciA9IG51bGw7XG4gICAgdmFsaWRhdG9ycy5zb21lKGZ1bmN0aW9uICh2YWxpZGF0b3JGbikge1xuICAgICAgZmlyc3RFcnJvciA9IHZhbGlkYXRvckZuLmlzUmVxdWlyZWQuYXBwbHkodmFsaWRhdG9yRm4sIGFyZ3MpO1xuICAgICAgcmV0dXJuIGZpcnN0RXJyb3IgIT0gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlyc3RFcnJvciA9PSBudWxsID8gbnVsbCA6IGZpcnN0RXJyb3I7XG4gIH07XG5cbiAgcmV0dXJuICgwLCBfd3JhcFZhbGlkYXRvcltcImRlZmF1bHRcIl0pKHZhbGlkYXRvciwgbmFtZSwgdmFsaWRhdG9ycyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGJldHdlZW5WYWxpZGF0b3I7XG5cbnZhciBfb2JqZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib2JqZWN0LmVudHJpZXNcIikpO1xuXG52YXIgX3NoYXBlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaGFwZVwiKSk7XG5cbnZhciBfdmFsdWVzT2YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbHVlc09mXCIpKTtcblxudmFyIF93cmFwVmFsaWRhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3dyYXBWYWxpZGF0b3JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIG51bWJlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBuZXcgVHlwZUVycm9yKFwiXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiOiBcIikuY29uY2F0KHByb3BOYW1lLCBcIiBtdXN0IGJlIGEgbm9uLU5hTiBudW1iZXIuXCIpKTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyT3JQcm9wc0Z1bmMocHJvcHMsIHByb3BOYW1lKSB7XG4gIHZhciB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChwcm9wTmFtZSwgXCI6IGEgZnVuY3Rpb24sIG9yIGEgbm9uLU5hTiBudW1iZXIgaXMgcmVxdWlyZWRcIikpO1xufVxuXG5mdW5jdGlvbiBsb3dlckNvbXBhcmUodmFsdWUsIF9yZWYpIHtcbiAgdmFyIGd0ID0gX3JlZi5ndCxcbiAgICAgIGd0ZSA9IF9yZWYuZ3RlO1xuXG4gIGlmICh0eXBlb2YgZ3QgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlID4gZ3Q7XG4gIH1cblxuICBpZiAodHlwZW9mIGd0ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gZ3RlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHVwcGVyQ29tcGFyZSh2YWx1ZSwgX3JlZjIpIHtcbiAgdmFyIGx0ID0gX3JlZjIubHQsXG4gICAgICBsdGUgPSBfcmVmMi5sdGU7XG5cbiAgaWYgKHR5cGVvZiBsdCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWUgPCBsdDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbHRlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZSA8PSBsdGU7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ3JlYXRlclRoYW5FcnJvcihfcmVmMykge1xuICB2YXIgZ3QgPSBfcmVmMy5ndCxcbiAgICAgIGd0ZSA9IF9yZWYzLmd0ZTtcblxuICBpZiAodHlwZW9mIGd0ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBcImdyZWF0ZXIgdGhhbiBcIi5jb25jYXQoZ3QpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBndGUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIFwiLmNvbmNhdChndGUpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBsZXNzVGhhbkVycm9yKF9yZWY0KSB7XG4gIHZhciBsdCA9IF9yZWY0Lmx0LFxuICAgICAgbHRlID0gX3JlZjQubHRlO1xuXG4gIGlmICh0eXBlb2YgbHQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFwibGVzcyB0aGFuIFwiLmNvbmNhdChsdCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGx0ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gXCJsZXNzIHRoYW4gb3IgZXF1YWwgdG8gXCIuY29uY2F0KGx0ZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGVycm9yTWVzc2FnZShjb21wb25lbnROYW1lLCBwcm9wTmFtZSwgb3B0cykge1xuICB2YXIgZXJyb3JzID0gW2dyZWF0ZXJUaGFuRXJyb3Iob3B0cyksIGxlc3NUaGFuRXJyb3Iob3B0cyldLmZpbHRlcihCb29sZWFuKS5qb2luKCcgYW5kICcpO1xuICByZXR1cm4gXCJcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCI6IFwiKS5jb25jYXQocHJvcE5hbWUsIFwiIG11c3QgYmUgXCIpLmNvbmNhdChlcnJvcnMpO1xufVxuXG5mdW5jdGlvbiBwcm9wc1RodW5raWZ5KG9wdHMpIHtcbiAgcmV0dXJuICgwLCBfb2JqZWN0W1wiZGVmYXVsdFwiXSkob3B0cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIF9yZWY1KSB7XG4gICAgdmFyIF9yZWY2ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjUsIDIpLFxuICAgICAgICBrZXkgPSBfcmVmNlswXSxcbiAgICAgICAgdmFsdWUgPSBfcmVmNlsxXTtcblxuICAgIHZhciBudW1iZXJUaHVuayA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSA6IHZhbHVlO1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBhY2MsIF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCBudW1iZXJUaHVuaykpO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGludm9rZVdpdGhQcm9wcyhvcHRzVGh1bmtzLCBwcm9wcykge1xuICByZXR1cm4gKDAsIF9vYmplY3RbXCJkZWZhdWx0XCJdKShvcHRzVGh1bmtzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgX3JlZjcpIHtcbiAgICB2YXIgX3JlZjggPSBfc2xpY2VkVG9BcnJheShfcmVmNywgMiksXG4gICAgICAgIGtleSA9IF9yZWY4WzBdLFxuICAgICAgICB0aHVuayA9IF9yZWY4WzFdO1xuXG4gICAgdmFyIHZhbHVlID0gdGh1bmsocHJvcHMpO1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBhY2MsIF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCB2YWx1ZSkpO1xuICB9LCB7fSk7XG59XG5cbnZhciBhcmdWYWxpZGF0b3JzID0gWygwLCBfc2hhcGVbXCJkZWZhdWx0XCJdKSh7XG4gIGx0OiBudW1iZXJPclByb3BzRnVuYyxcbiAgZ3Q6IG51bWJlck9yUHJvcHNGdW5jXG59KS5pc1JlcXVpcmVkLCAoMCwgX3NoYXBlW1wiZGVmYXVsdFwiXSkoe1xuICBsdGU6IG51bWJlck9yUHJvcHNGdW5jLFxuICBndDogbnVtYmVyT3JQcm9wc0Z1bmNcbn0pLmlzUmVxdWlyZWQsICgwLCBfc2hhcGVbXCJkZWZhdWx0XCJdKSh7XG4gIGx0OiBudW1iZXJPclByb3BzRnVuYyxcbiAgZ3RlOiBudW1iZXJPclByb3BzRnVuY1xufSkuaXNSZXF1aXJlZCwgKDAsIF9zaGFwZVtcImRlZmF1bHRcIl0pKHtcbiAgbHRlOiBudW1iZXJPclByb3BzRnVuYyxcbiAgZ3RlOiBudW1iZXJPclByb3BzRnVuY1xufSkuaXNSZXF1aXJlZCwgKDAsIF9zaGFwZVtcImRlZmF1bHRcIl0pKHtcbiAgbHQ6IG51bWJlck9yUHJvcHNGdW5jXG59KS5pc1JlcXVpcmVkLCAoMCwgX3NoYXBlW1wiZGVmYXVsdFwiXSkoe1xuICBsdGU6IG51bWJlck9yUHJvcHNGdW5jXG59KS5pc1JlcXVpcmVkLCAoMCwgX3NoYXBlW1wiZGVmYXVsdFwiXSkoe1xuICBndDogbnVtYmVyT3JQcm9wc0Z1bmNcbn0pLmlzUmVxdWlyZWQsICgwLCBfc2hhcGVbXCJkZWZhdWx0XCJdKSh7XG4gIGd0ZTogbnVtYmVyT3JQcm9wc0Z1bmNcbn0pLmlzUmVxdWlyZWRdO1xuXG5mdW5jdGlvbiBhcmdWYWxpZGF0b3IocHJvcHMsIHByb3BOYW1lKSB7XG4gIHJldHVybiBhcmdWYWxpZGF0b3JzLmV2ZXJ5KGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICByZXR1cm4gISF2YWxpZGF0b3IocHJvcHMsIHByb3BOYW1lKTtcbiAgfSk7XG59XG5cbnZhciB0aHVua1ZhbHVlVmFsaWRhdG9yID0gKDAsIF92YWx1ZXNPZltcImRlZmF1bHRcIl0pKG51bWJlcikuaXNSZXF1aXJlZDtcblxuZnVuY3Rpb24gYmV0d2VlblZhbGlkYXRvcihvcHRpb25zKSB7XG4gIHZhciBhcmdFcnJvciA9IGFyZ1ZhbGlkYXRvcih7XG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9LCAnb3B0aW9ucycpO1xuXG4gIGlmIChhcmdFcnJvcikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2JldHdlZW46IG9ubHkgb25lIG9mIHRoZSBwYWlycyBvZiBgbHRgL2BsdGVgLCBhbmQgYGd0YC9gZ3RlYCwgbWF5IGJlIHN1cHBsaWVkLCBhbmQgYXQgbGVhc3Qgb25lIHBhaXIgbXVzdCBiZSBwcm92aWRlZC4nKTtcbiAgfVxuXG4gIHZhciBvcHRzVGh1bmtzID0gcHJvcHNUaHVua2lmeShvcHRpb25zKTtcblxuICB2YXIgdmFsaWRhdG9yID0gZnVuY3Rpb24gYmV0d2Vlbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBuZXcgUmFuZ2VFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIjogXCIpLmNvbmNhdChwcm9wTmFtZSwgXCIgbXVzdCBiZSBhIG51bWJlciwgZ290IFxcXCJcIikuY29uY2F0KF90eXBlb2YocHJvcFZhbHVlKSwgXCJcXFwiXCIpKTtcbiAgICB9XG5cbiAgICB2YXIgb3B0cyA9IGludm9rZVdpdGhQcm9wcyhvcHRzVGh1bmtzLCBwcm9wcyk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICByZXN0W19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgdGh1bmtWYWx1ZXNFcnJvciA9IHRodW5rVmFsdWVWYWxpZGF0b3IuYXBwbHkodm9pZCAwLCBbX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wTmFtZSwgb3B0cyksIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuXG4gICAgaWYgKHRodW5rVmFsdWVzRXJyb3IpIHtcbiAgICAgIHJldHVybiB0aHVua1ZhbHVlc0Vycm9yO1xuICAgIH1cblxuICAgIGlmICghbG93ZXJDb21wYXJlKHByb3BWYWx1ZSwgb3B0cykgfHwgIXVwcGVyQ29tcGFyZShwcm9wVmFsdWUsIG9wdHMpKSB7XG4gICAgICByZXR1cm4gbmV3IFJhbmdlRXJyb3IoZXJyb3JNZXNzYWdlKGNvbXBvbmVudE5hbWUsIHByb3BOYW1lLCBvcHRzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdmFsaWRhdG9yLmlzUmVxdWlyZWQgPSBmdW5jdGlvbiBiZXR3ZWVuUmVxdWlyZWQocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIG5ldyBSYW5nZUVycm9yKFwiXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiOiBcIikuY29uY2F0KHByb3BOYW1lLCBcIiBtdXN0IGJlIGEgbnVtYmVyLCBnb3QgXFxcIlwiKS5jb25jYXQoX3R5cGVvZihwcm9wVmFsdWUpLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIHZhciBvcHRzID0gaW52b2tlV2l0aFByb3BzKG9wdHNUaHVua3MsIHByb3BzKTtcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMiA+IDMgPyBfbGVuMiAtIDMgOiAwKSwgX2tleTIgPSAzOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICByZXN0W19rZXkyIC0gM10gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciB0aHVua1ZhbHVlc0Vycm9yID0gdGh1bmtWYWx1ZVZhbGlkYXRvci5hcHBseSh2b2lkIDAsIFtfZGVmaW5lUHJvcGVydHkoe30sIHByb3BOYW1lLCBvcHRzKSwgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG5cbiAgICBpZiAodGh1bmtWYWx1ZXNFcnJvcikge1xuICAgICAgcmV0dXJuIHRodW5rVmFsdWVzRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKCFsb3dlckNvbXBhcmUocHJvcFZhbHVlLCBvcHRzKSB8fCAhdXBwZXJDb21wYXJlKHByb3BWYWx1ZSwgb3B0cykpIHtcbiAgICAgIHJldHVybiBuZXcgUmFuZ2VFcnJvcihlcnJvck1lc3NhZ2UoY29tcG9uZW50TmFtZSwgcHJvcE5hbWUsIG9wdHMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gKDAsIF93cmFwVmFsaWRhdG9yW1wiZGVmYXVsdFwiXSkodmFsaWRhdG9yLCAnYmV0d2VlbicsIG9wdGlvbnMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmV0d2Vlbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gYm9vbGVhblNvbWVWYWxpZGF0b3I7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGJvb2xlYW5Tb21lVmFsaWRhdG9yKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbm90QWxsUHJvcHNGYWxzZSA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBub3RBbGxQcm9wc0ZhbHNlW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKG5vdEFsbFByb3BzRmFsc2UubGVuZ3RoIDwgMSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2F0IGxlYXN0IG9uZSBwcm9wIChvbmUgb2Ygd2hpY2ggbXVzdCBiZSBgdHJ1ZWApIGlzIHJlcXVpcmVkJyk7XG4gIH1cblxuICBpZiAoIW5vdEFsbFByb3BzRmFsc2UuZXZlcnkoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnO1xuICB9KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FsbCBib29sZWFuU29tZSBwcm9wcyBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgfVxuXG4gIHZhciBwcm9wc0xpc3QgPSBub3RBbGxQcm9wc0ZhbHNlLmpvaW4oJywgb3IgJyk7XG5cbiAgdmFyIHZhbGlkYXRvciA9IGZ1bmN0aW9uIGJvb2xlYW5Tb21lKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIHZhciBjb3VudEZhbHNlID0gZnVuY3Rpb24gY291bnRGYWxzZShjb3VudCwgcHJvcCkge1xuICAgICAgcmV0dXJuIGNvdW50ICsgKHByb3BzW3Byb3BdID09PSBmYWxzZSA/IDEgOiAwKTtcbiAgICB9O1xuXG4gICAgdmFyIGZhbHNlUHJvcENvdW50ID0gbm90QWxsUHJvcHNGYWxzZS5yZWR1Y2UoY291bnRGYWxzZSwgMCk7XG5cbiAgICBpZiAoZmFsc2VQcm9wQ291bnQgPT09IG5vdEFsbFByb3BzRmFsc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiQSBcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBvZiB0aGVzZSBib29sZWFuIHByb3BzIGJlIGB0cnVlYDogXCIpLmNvbmNhdChwcm9wc0xpc3QpKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjIgPiAzID8gX2xlbjIgLSAzIDogMCksIF9rZXkyID0gMzsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgcmVzdFtfa2V5MiAtIDNdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Byb3BUeXBlcy5ib29sLmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZV0uY29uY2F0KHJlc3QpKTtcbiAgfTtcblxuICB2YWxpZGF0b3IuaXNSZXF1aXJlZCA9IGZ1bmN0aW9uIGJvb2xlYW5Tb21lUmVxdWlyZWQocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIGNvdW50RmFsc2UgPSBmdW5jdGlvbiBjb3VudEZhbHNlKGNvdW50LCBwcm9wKSB7XG4gICAgICByZXR1cm4gY291bnQgKyAocHJvcHNbcHJvcF0gPT09IGZhbHNlID8gMSA6IDApO1xuICAgIH07XG5cbiAgICB2YXIgZmFsc2VQcm9wQ291bnQgPSBub3RBbGxQcm9wc0ZhbHNlLnJlZHVjZShjb3VudEZhbHNlLCAwKTtcblxuICAgIGlmIChmYWxzZVByb3BDb3VudCA9PT0gbm90QWxsUHJvcHNGYWxzZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJBIFwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIiBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIG9mIHRoZXNlIGJvb2xlYW4gcHJvcHMgYmUgYHRydWVgOiBcIikuY29uY2F0KHByb3BzTGlzdCkpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMyA+IDMgPyBfbGVuMyAtIDMgOiAwKSwgX2tleTMgPSAzOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICByZXN0W19rZXkzIC0gM10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiBfcHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZC5hcHBseShfcHJvcFR5cGVzLmJvb2wsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gIH07XG5cbiAgcmV0dXJuICgwLCBfd3JhcFZhbGlkYXRvcltcImRlZmF1bHRcIl0pKHZhbGlkYXRvciwgXCJib29sZWFuU29tZTogXCIuY29uY2F0KHByb3BzTGlzdCksIG5vdEFsbFByb3BzRmFsc2UpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vbGVhblNvbWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNoaWxkcmVuSGF2ZVByb3BYb3JDaGlsZHJlbjtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF93cmFwVmFsaWRhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3dyYXBWYWxpZGF0b3JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gY2hpbGRyZW5IYXZlUHJvcFhvckNoaWxkcmVuKHByb3ApIHtcbiAgaWYgKHR5cGVvZiBwcm9wICE9PSAnc3RyaW5nJyAmJiBfdHlwZW9mKHByb3ApICE9PSAnc3ltYm9sJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgcHJvcDogbXVzdCBiZSBzdHJpbmcgb3Igc3ltYm9sJyk7XG4gIH1cblxuICB2YXIgdmFsaWRhdG9yID0gZnVuY3Rpb24gY2hpbGRyZW5IYXZlUHJvcFhvckNoaWxkcmVuV2l0aFByb3AoX3JlZiwgXywgY29tcG9uZW50TmFtZSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gICAgdmFyIHRydXRoeUNoaWxkcmVuQ291bnQgPSAwO1xuICAgIHZhciBwcm9wQ291bnQgPSAwO1xuICAgIHZhciBncmFuZGNoaWxkcmVuQ291bnQgPSAwO1xuXG4gICAgX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnV0aHlDaGlsZHJlbkNvdW50ICs9IDE7XG5cbiAgICAgIGlmIChjaGlsZC5wcm9wc1twcm9wXSkge1xuICAgICAgICBwcm9wQ291bnQgKz0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9yZWFjdFtcImRlZmF1bHRcIl0uQ2hpbGRyZW4uY291bnQoY2hpbGQucHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgIGdyYW5kY2hpbGRyZW5Db3VudCArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHByb3BDb3VudCA9PT0gdHJ1dGh5Q2hpbGRyZW5Db3VudCAmJiBncmFuZGNoaWxkcmVuQ291bnQgPT09IDAgfHwgcHJvcENvdW50ID09PSAwICYmIGdyYW5kY2hpbGRyZW5Db3VudCA9PT0gdHJ1dGh5Q2hpbGRyZW5Db3VudCB8fCBwcm9wQ291bnQgPT09IDAgJiYgZ3JhbmRjaGlsZHJlbkNvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcImBcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgIHJlcXVpcmVzIGNoaWxkcmVuIHRvIGFsbCBoYXZlIHByb3AgXFx1MjAxQ1wiKS5jb25jYXQocHJvcCwgXCJcXHUyMDFELCBhbGwgaGF2ZSBjaGlsZHJlbiwgb3IgYWxsIGhhdmUgbmVpdGhlci5cIikpO1xuICB9O1xuXG4gIHZhbGlkYXRvci5pc1JlcXVpcmVkID0gdmFsaWRhdG9yO1xuICByZXR1cm4gKDAsIF93cmFwVmFsaWRhdG9yW1wiZGVmYXVsdFwiXSkodmFsaWRhdG9yLCBcImNoaWxkcmVuSGF2ZVByb3BYb3JDaGlsZHJlbldpdGhQcm9wOlwiLmNvbmNhdChwcm9wKSwgcHJvcCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGlsZHJlbkhhdmVQcm9wWG9yQ2hpbGRyZW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNoaWxkcmVuT2Y7XG5cbnZhciBfcmVuZGVyYWJsZUNoaWxkcmVuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3JlbmRlcmFibGVDaGlsZHJlblwiKSk7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRyZW4ocHJvcFR5cGUsIGNoaWxkcmVuLCBwcm9wcykge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcmVzdFtfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgZXJyb3I7XG4gIGNoaWxkcmVuLnNvbWUoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgZXJyb3IgPSBwcm9wVHlwZS5hcHBseSh2b2lkIDAsIFtfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcywge1xuICAgICAgY2hpbGRyZW46IGNoaWxkXG4gICAgfSksICdjaGlsZHJlbiddLmNvbmNhdChyZXN0KSk7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9KTtcbiAgcmV0dXJuIGVycm9yIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuT2YocHJvcFR5cGUpIHtcbiAgZnVuY3Rpb24gY2hpbGRyZW5PZlByb3BUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmIChwcm9wTmFtZSAhPT0gJ2NoaWxkcmVuJykge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIgaXMgdXNpbmcgdGhlIGNoaWxkcmVuT2YgdmFsaWRhdG9yIG9uIG5vbi1jaGlsZHJlbiBwcm9wIFxcXCJcIikuY29uY2F0KHByb3BOYW1lLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgICBpZiAocHJvcFZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9ICgwLCBfcmVuZGVyYWJsZUNoaWxkcmVuW1wiZGVmYXVsdFwiXSkocHJvcFZhbHVlKTtcblxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMiA+IDMgPyBfbGVuMiAtIDMgOiAwKSwgX2tleTIgPSAzOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICByZXN0W19rZXkyIC0gM10gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZUNoaWxkcmVuLmFwcGx5KHZvaWQgMCwgW3Byb3BUeXBlLCBjaGlsZHJlbiwgcHJvcHMsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gIH1cblxuICBjaGlsZHJlbk9mUHJvcFR5cGUuaXNSZXF1aXJlZCA9IGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAocHJvcE5hbWUgIT09ICdjaGlsZHJlbicpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiIGlzIHVzaW5nIHRoZSBjaGlsZHJlbk9mIHZhbGlkYXRvciBvbiBub24tY2hpbGRyZW4gcHJvcCBcXFwiXCIpLmNvbmNhdChwcm9wTmFtZSwgXCJcXFwiXCIpKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSAoMCwgX3JlbmRlcmFibGVDaGlsZHJlbltcImRlZmF1bHRcIl0pKHByb3BzW3Byb3BOYW1lXSk7XG5cbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcImBcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBub2RlIG9mIHR5cGUgXCIpLmNvbmNhdChwcm9wVHlwZS50eXBlTmFtZSB8fCBwcm9wVHlwZS5uYW1lKSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4zID4gMyA/IF9sZW4zIC0gMyA6IDApLCBfa2V5MyA9IDM7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIHJlc3RbX2tleTMgLSAzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlQ2hpbGRyZW4uYXBwbHkodm9pZCAwLCBbcHJvcFR5cGUsIGNoaWxkcmVuLCBwcm9wcywgY29tcG9uZW50TmFtZV0uY29uY2F0KHJlc3QpKTtcbiAgfTtcblxuICByZXR1cm4gKDAsIF93cmFwVmFsaWRhdG9yW1wiZGVmYXVsdFwiXSkoY2hpbGRyZW5PZlByb3BUeXBlLCAnY2hpbGRyZW5PZicsIHByb3BUeXBlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoaWxkcmVuT2YuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9hcnJheVByb3RvdHlwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImFycmF5LnByb3RvdHlwZS5maW5kXCIpKTtcblxudmFyIF9nZXRDb21wb25lbnROYW1lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2dldENvbXBvbmVudE5hbWVcIikpO1xuXG52YXIgX3JlbmRlcmFibGVDaGlsZHJlbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9yZW5kZXJhYmxlQ2hpbGRyZW5cIikpO1xuXG52YXIgX3dyYXBWYWxpZGF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvd3JhcFZhbGlkYXRvclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBvbmx5VHlwZXModHlwZXMsIGNoaWxkcmVuLCBjb21wb25lbnROYW1lKSB7XG4gIGlmICghY2hpbGRyZW4uZXZlcnkoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkICYmICgwLCBfYXJyYXlQcm90b3R5cGVbXCJkZWZhdWx0XCJdKSh0eXBlcywgZnVuY3Rpb24gKFR5cGUpIHtcbiAgICAgIHJldHVybiBUeXBlID09PSAnKicgfHwgY2hpbGQudHlwZSA9PT0gVHlwZTtcbiAgICB9KTtcbiAgfSkpIHtcbiAgICB2YXIgdHlwZU5hbWVzID0gdHlwZXMubWFwKF9nZXRDb21wb25lbnROYW1lW1wiZGVmYXVsdFwiXSkuam9pbignLCBvciAnKTtcbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcImBcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgIG9ubHkgYWNjZXB0cyBjaGlsZHJlbiBvZiB0eXBlIFwiKS5jb25jYXQodHlwZU5hbWVzKSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNSZXF1aXJlZCh0eXBlcywgY2hpbGRyZW4sIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgIHZhciB0eXBlTmFtZXMgPSB0eXBlcy5tYXAoX2dldENvbXBvbmVudE5hbWVbXCJkZWZhdWx0XCJdKS5qb2luKCcsIG9yICcpO1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiYFwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIG5vZGUgb2YgdHlwZSBcIikuY29uY2F0KHR5cGVOYW1lcykpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuT2ZUeXBlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHlwZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdHlwZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAodHlwZXMubGVuZ3RoIDwgMSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NoaWxkcmVuT2ZUeXBlOiBhdCBsZWFzdCAxIHR5cGUgaXMgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRvcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICByZXR1cm4gb25seVR5cGVzKHR5cGVzLCAoMCwgX3JlbmRlcmFibGVDaGlsZHJlbltcImRlZmF1bHRcIl0pKHByb3BzW3Byb3BOYW1lXSksIGNvbXBvbmVudE5hbWUpO1xuICB9XG5cbiAgdmFsaWRhdG9yLmlzUmVxdWlyZWQgPSBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gKDAsIF9yZW5kZXJhYmxlQ2hpbGRyZW5bXCJkZWZhdWx0XCJdKShwcm9wc1twcm9wTmFtZV0pO1xuICAgIHJldHVybiBpc1JlcXVpcmVkKHR5cGVzLCBjaGlsZHJlbiwgY29tcG9uZW50TmFtZSkgfHwgb25seVR5cGVzKHR5cGVzLCBjaGlsZHJlbiwgY29tcG9uZW50TmFtZSk7XG4gIH07XG5cbiAgcmV0dXJuICgwLCBfd3JhcFZhbGlkYXRvcltcImRlZmF1bHRcIl0pKHZhbGlkYXRvciwgJ2NoaWxkcmVuT2ZUeXBlJywgdHlwZXMpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBjaGlsZHJlbk9mVHlwZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGlsZHJlbk9mVHlwZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY2hpbGRyZW5TZXF1ZW5jZU9mVmFsaWRhdG9yO1xuXG52YXIgX3NlcXVlbmNlT2YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NlcXVlbmNlT2ZcIikpO1xuXG52YXIgX3JlbmRlcmFibGVDaGlsZHJlbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9yZW5kZXJhYmxlQ2hpbGRyZW5cIikpO1xuXG52YXIgX3dyYXBWYWxpZGF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvd3JhcFZhbGlkYXRvclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBjaGlsZHJlblNlcXVlbmNlT2ZWYWxpZGF0b3IoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzcGVjaWZpZXJzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHNwZWNpZmllcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgc2VxID0gX3NlcXVlbmNlT2ZbXCJkZWZhdWx0XCJdLmFwcGx5KHZvaWQgMCwgc3BlY2lmaWVycyk7XG5cbiAgdmFyIHZhbGlkYXRvciA9IGZ1bmN0aW9uIGNoaWxkcmVuU2VxdWVuY2VPZihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAocHJvcE5hbWUgIT09ICdjaGlsZHJlbicpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiIGlzIHVzaW5nIHRoZSBjaGlsZHJlblNlcXVlbmNlT2YgdmFsaWRhdG9yIG9uIG5vbi1jaGlsZHJlbiBwcm9wIFxcXCJcIikuY29uY2F0KHByb3BOYW1lLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgdmFyIGNoaWxkcmVuID0gKDAsIF9yZW5kZXJhYmxlQ2hpbGRyZW5bXCJkZWZhdWx0XCJdKShwcm9wVmFsdWUpO1xuXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4yID4gMyA/IF9sZW4yIC0gMyA6IDApLCBfa2V5MiA9IDM7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIHJlc3RbX2tleTIgLSAzXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlcS5hcHBseSh2b2lkIDAsIFtfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcywge1xuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfSksIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuICB9O1xuXG4gIHZhbGlkYXRvci5pc1JlcXVpcmVkID0gZnVuY3Rpb24gY2hpbGRyZW5TZXF1ZW5jZU9mUmVxdWlyZWQocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKHByb3BOYW1lICE9PSAnY2hpbGRyZW4nKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIiBpcyB1c2luZyB0aGUgY2hpbGRyZW5TZXF1ZW5jZU9mIHZhbGlkYXRvciBvbiBub24tY2hpbGRyZW4gcHJvcCBcXFwiXCIpLmNvbmNhdChwcm9wTmFtZSwgXCJcXFwiXCIpKTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgIHZhciBjaGlsZHJlbiA9ICgwLCBfcmVuZGVyYWJsZUNoaWxkcmVuW1wiZGVmYXVsdFwiXSkocHJvcFZhbHVlKTtcblxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiOiByZW5kZXJhYmxlIGNoaWxkcmVuIGFyZSByZXF1aXJlZC5cIikpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMyA+IDMgPyBfbGVuMyAtIDMgOiAwKSwgX2tleTMgPSAzOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICByZXN0W19rZXkzIC0gM10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiBzZXEuaXNSZXF1aXJlZC5hcHBseShzZXEsIFtfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcywge1xuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfSksIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuICB9O1xuXG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKSh2YWxpZGF0b3IsICdjaGlsZHJlblNlcXVlbmNlT2YnLCBzcGVjaWZpZXJzKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoaWxkcmVuU2VxdWVuY2VPZi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY29tcG9uZW50V2l0aE5hbWU7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfaXNSZWdleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImlzLXJlZ2V4XCIpKTtcblxudmFyIF9hcnJheVByb3RvdHlwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImFycmF5LnByb3RvdHlwZS5maW5kXCIpKTtcblxudmFyIF9nZXRDb21wb25lbnROYW1lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2dldENvbXBvbmVudE5hbWVcIikpO1xuXG52YXIgX3dyYXBWYWxpZGF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvd3JhcFZhbGlkYXRvclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHJpcEhPQ3MoZnVsbE5hbWUsIG5hbWVzT2ZIT0NzVG9TdHJpcCkge1xuICB2YXIgaW5uZXJOYW1lID0gZnVsbE5hbWU7XG5cbiAgd2hpbGUgKC9cXChbXigpXSpcXCkvZy50ZXN0KGlubmVyTmFtZSkpIHtcbiAgICB2YXIgSE9DID0gaW5uZXJOYW1lO1xuICAgIHZhciBwcmV2aW91c0hPQyA9IHZvaWQgMDtcblxuICAgIGRvIHtcbiAgICAgIHByZXZpb3VzSE9DID0gSE9DO1xuICAgICAgSE9DID0gcHJldmlvdXNIT0MucmVwbGFjZSgvXFwoW14oKV0qXFwpL2csICcnKTtcbiAgICB9IHdoaWxlIChwcmV2aW91c0hPQyAhPT0gSE9DKTtcblxuICAgIGlmIChuYW1lc09mSE9Dc1RvU3RyaXAuaW5kZXhPZihIT0MpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGlubmVyTmFtZTtcbiAgICB9XG5cbiAgICBpbm5lck5hbWUgPSBpbm5lck5hbWUucmVwbGFjZShSZWdFeHAoXCJeXCIuY29uY2F0KEhPQywgXCJcXFxcKHxcXFxcKSRcIiksICdnJyksICcnKTtcbiAgfVxuXG4gIHJldHVybiBpbm5lck5hbWU7XG59XG5cbmZ1bmN0aW9uIGhhc05hbWUobmFtZSwgbmFtZXNPZkhPQ3NUb1N0cmlwLCBwcm9wVmFsdWUsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiA1ID8gX2xlbiAtIDUgOiAwKSwgX2tleSA9IDU7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZXN0W19rZXkgLSA1XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICByZXR1cm4gKDAsIF9hcnJheVByb3RvdHlwZVtcImRlZmF1bHRcIl0pKHByb3BWYWx1ZS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBoYXNOYW1lLmFwcGx5KHZvaWQgMCwgW25hbWUsIG5hbWVzT2ZIT0NzVG9TdHJpcCwgaXRlbSwgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gICAgfSksIEJvb2xlYW4pIHx8IG51bGw7XG4gIH1cblxuICBpZiAoIV9yZWFjdFtcImRlZmF1bHRcIl0uaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiLlwiKS5jb25jYXQocHJvcE5hbWUsIFwiIGlzIG5vdCBhIHZhbGlkIFJlYWN0IGVsZW1lbnRcIikpO1xuICB9XG5cbiAgdmFyIHR5cGUgPSBwcm9wVmFsdWUudHlwZTtcbiAgdmFyIGNvbXBvbmVudE5hbWVGcm9tVHlwZSA9ICgwLCBfZ2V0Q29tcG9uZW50TmFtZVtcImRlZmF1bHRcIl0pKHR5cGUpO1xuICB2YXIgaW5uZXJDb21wb25lbnROYW1lID0gbmFtZXNPZkhPQ3NUb1N0cmlwLmxlbmd0aCA+IDAgPyBzdHJpcEhPQ3MoY29tcG9uZW50TmFtZUZyb21UeXBlLCBuYW1lc09mSE9Dc1RvU3RyaXApIDogY29tcG9uZW50TmFtZUZyb21UeXBlO1xuXG4gIGlmICgoMCwgX2lzUmVnZXhbXCJkZWZhdWx0XCJdKShuYW1lKSAmJiAhbmFtZS50ZXN0KGlubmVyQ29tcG9uZW50TmFtZSkpIHtcbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcImBcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIuXCIpLmNvbmNhdChwcm9wTmFtZSwgXCJgIG9ubHkgYWNjZXB0cyBjb21wb25lbnRzIG1hdGNoaW5nIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gXCIpLmNvbmNhdChuYW1lKSk7XG4gIH1cblxuICBpZiAoISgwLCBfaXNSZWdleFtcImRlZmF1bHRcIl0pKG5hbWUpICYmIGlubmVyQ29tcG9uZW50TmFtZSAhPT0gbmFtZSkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiYFwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIi5cIikuY29uY2F0KHByb3BOYW1lLCBcImAgb25seSBhY2NlcHRzIGNvbXBvbmVudHMgbmFtZWQgXCIpLmNvbmNhdChuYW1lLCBcIiwgZ290IFwiKS5jb25jYXQoaW5uZXJDb21wb25lbnROYW1lKSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2l0aE5hbWUobmFtZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1JlZ2V4W1wiZGVmYXVsdFwiXSkobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCduYW1lIG11c3QgYmUgYSBzdHJpbmcgb3IgYSByZWdleCcpO1xuICB9XG5cbiAgdmFyIHBhc3NlZE9wdGlvbnMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcblxuICBpZiAocGFzc2VkT3B0aW9ucy5sZW5ndGggPiAxIHx8IHBhc3NlZE9wdGlvbnMubGVuZ3RoID09PSAxICYmIHBhc3NlZE9wdGlvbnNbMF0gIT09ICdzdHJpcEhPQ3MnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBvbmx5IG9wdGlvbnMgc3VwcG9ydGVkIGFyZTogXFx1MjAxQ3N0cmlwSE9Dc1xcdTIwMUQsIGdvdDogXFx1MjAxQ1wiLmNvbmNhdChwYXNzZWRPcHRpb25zLmpvaW4oJ+KAnSwg4oCcJyksIFwiXFx1MjAxRFwiKSk7XG4gIH1cblxuICB2YXIgX29wdGlvbnMkc3RyaXBIT0NzID0gb3B0aW9ucy5zdHJpcEhPQ3MsXG4gICAgICBuYW1lc09mSE9Dc1RvU3RyaXAgPSBfb3B0aW9ucyRzdHJpcEhPQ3MgPT09IHZvaWQgMCA/IFtdIDogX29wdGlvbnMkc3RyaXBIT0NzO1xuICB2YXIgYWxsSE9DTmFtZXNBcmVWYWxpZCA9IG5hbWVzT2ZIT0NzVG9TdHJpcC5ldmVyeShmdW5jdGlvbiAoeCkge1xuICAgIGlmICh0eXBlb2YgeCAhPT0gJ3N0cmluZycgfHwgL1soKV0vZy50ZXN0KHgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIC9eKD86W2Etel1bYS16QS1aMC05XSt8W0EtWl1bYS16XVthLXpBLVowLTldKykkLy50ZXN0KHgpO1xuICB9KTtcblxuICBpZiAoIWFsbEhPQ05hbWVzQXJlVmFsaWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdldmVyeSBwcm92aWRlZCBIT0MgbmFtZSBtdXN0IGJlIGEgc3RyaW5nIHdpdGggbm8gcGFyZW5zLCBhbmQgaW4gY2FtZWxDYXNlJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wb25lbnRXaXRoTmFtZVZhbGlkYXRvcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjIgPiAzID8gX2xlbjIgLSAzIDogMCksIF9rZXkyID0gMzsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgcmVzdFtfa2V5MiAtIDNdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzTmFtZS5hcHBseSh2b2lkIDAsIFtuYW1lLCBuYW1lc09mSE9Dc1RvU3RyaXAsIHByb3BWYWx1ZSwgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gIH1cblxuICBjb21wb25lbnRXaXRoTmFtZVZhbGlkYXRvci5pc1JlcXVpcmVkID0gZnVuY3Rpb24gY29tcG9uZW50V2l0aE5hbWVSZXF1aXJlZChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcImBcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIuXCIpLmNvbmNhdChwcm9wTmFtZSwgXCJgIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBjb21wb25lbnQgbmFtZWQgXCIpLmNvbmNhdChuYW1lKSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4zID4gMyA/IF9sZW4zIC0gMyA6IDApLCBfa2V5MyA9IDM7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIHJlc3RbX2tleTMgLSAzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc05hbWUuYXBwbHkodm9pZCAwLCBbbmFtZSwgbmFtZXNPZkhPQ3NUb1N0cmlwLCBwcm9wVmFsdWUsIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuICB9O1xuXG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKShjb21wb25lbnRXaXRoTmFtZVZhbGlkYXRvciwgXCJjb21wb25lbnRXaXRoTmFtZTpcIi5jb25jYXQobmFtZSksIG5hbWUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50V2l0aE5hbWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGRpc2FsbG93ZWRJZjtcblxudmFyIF93cmFwVmFsaWRhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3dyYXBWYWxpZGF0b3JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gZGlzYWxsb3dlZElmKHByb3BUeXBlLCBvdGhlclByb3BOYW1lLCBvdGhlclByb3BUeXBlKSB7XG4gIGlmICh0eXBlb2YgcHJvcFR5cGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHByb3BUeXBlLmlzUmVxdWlyZWQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhIHByb3BUeXBlIHZhbGlkYXRvciBpcyByZXF1aXJlZDsgcHJvcFR5cGUgdmFsaWRhdG9ycyBtdXN0IGFsc28gcHJvdmlkZSBgLmlzUmVxdWlyZWRgJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIG90aGVyUHJvcE5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3RoZXIgcHJvcCBuYW1lIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3RoZXJQcm9wVHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ290aGVyIHByb3AgdHlwZSB2YWxpZGF0b3IgaXMgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FsbG93ZWRJZlJlcXVpcmVkKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHJlc3RbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBlcnJvciA9IHByb3BUeXBlLmlzUmVxdWlyZWQuYXBwbHkocHJvcFR5cGUsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvcHNbb3RoZXJQcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG90aGVyRXJyb3IgPSBvdGhlclByb3BUeXBlLmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBvdGhlclByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuXG4gICAgaWYgKG90aGVyRXJyb3IpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRXJyb3IoXCJwcm9wIFxcdTIwMUNcIi5jb25jYXQocHJvcE5hbWUsIFwiXFx1MjAxRCBpcyBkaXNhbGxvd2VkIHdoZW4gXFx1MjAxQ1wiKS5jb25jYXQob3RoZXJQcm9wTmFtZSwgXCJcXHUyMDFEIG1hdGNoZXMgdGhlIHByb3ZpZGVkIHZhbGlkYXRvclwiKSk7XG4gIH1cblxuICB2YXIgdmFsaWRhdG9yID0gZnVuY3Rpb24gZGlzYWxsb3dlZElmUHJvcFR5cGUocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgcmVzdFtfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlzYWxsb3dlZElmUmVxdWlyZWQuYXBwbHkodm9pZCAwLCBbcHJvcHMsIHByb3BOYW1lXS5jb25jYXQocmVzdCkpO1xuICB9O1xuXG4gIHZhbGlkYXRvci5pc1JlcXVpcmVkID0gZGlzYWxsb3dlZElmUmVxdWlyZWQ7XG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKSh2YWxpZGF0b3IsICdkaXNhbGxvd2VkSWYnLCB7XG4gICAgcHJvcFR5cGU6IHByb3BUeXBlLFxuICAgIG90aGVyUHJvcE5hbWU6IG90aGVyUHJvcE5hbWUsXG4gICAgb3RoZXJQcm9wVHlwZTogb3RoZXJQcm9wVHlwZVxuICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpc2FsbG93ZWRJZi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZWxlbWVudFR5cGVWYWxpZGF0b3I7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcmVhY3RJcyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTtcblxudmFyIF9hbmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FuZFwiKSk7XG5cbnZhciBfZ2V0Q29tcG9uZW50TmFtZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9nZXRDb21wb25lbnROYW1lXCIpKTtcblxudmFyIF93cmFwVmFsaWRhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3dyYXBWYWxpZGF0b3JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gZ2V0VHlwZU5hbWUoVHlwZSkge1xuICBpZiAodHlwZW9mIFR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIFR5cGU7XG4gIH1cblxuICB2YXIgdHlwZSA9ICgwLCBfZ2V0Q29tcG9uZW50TmFtZVtcImRlZmF1bHRcIl0pKFR5cGUpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAvLyBpbiBlbnZpcm9ubWVudHMgd2hlcmUgZnVuY3Rpb25zIGRvIG5vdCBoYXZlIG5hbWVzXG5cbiAgcmV0dXJuIHR5cGUgfHwgJ0Fub255bW91cyBDb21wb25lbnQnO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUVsZW1lbnRUeXBlKFR5cGUsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgdHlwZSA9IHByb3BzW3Byb3BOYW1lXS50eXBlO1xuXG4gIGlmICh0eXBlID09PSBUeXBlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIi5cIikuY29uY2F0KHByb3BOYW1lLCBcIiBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCBvZiB0eXBlIFwiKS5jb25jYXQoZ2V0VHlwZU5hbWUoVHlwZSkpKTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudFR5cGVWYWxpZGF0b3IoVHlwZSkge1xuICBpZiAoVHlwZSA9PT0gJyonKSB7XG4gICAgcmV0dXJuICgwLCBfd3JhcFZhbGlkYXRvcltcImRlZmF1bHRcIl0pKF9wcm9wVHlwZXMuZWxlbWVudCwgJ2VsZW1lbnRUeXBlKCopJywgVHlwZSk7XG4gIH1cblxuICBpZiAoISgwLCBfcmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUpKFR5cGUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlR5cGUgbXVzdCBiZSBhIFJlYWN0IENvbXBvbmVudCwgYW4gSFRNTCBlbGVtZW50IHRhZyBuYW1lLCBvciBcXFwiKlxcXCIuIEdvdCBhbiBcIi5jb25jYXQoX3R5cGVvZihUeXBlKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWxlbWVudFR5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICByZXN0W19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVFbGVtZW50VHlwZS5hcHBseSh2b2lkIDAsIFtUeXBlLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gIH1cblxuICBlbGVtZW50VHlwZS5pc1JlcXVpcmVkID0gZWxlbWVudFR5cGU7IC8vIGNvdmVyZWQgYnkgYW5kICsgZWxlbWVudFxuXG4gIHZhciB0eXBlTmFtZSA9IGdldFR5cGVOYW1lKFR5cGUpO1xuICB2YXIgdmFsaWRhdG9yTmFtZSA9IFwiZWxlbWVudFR5cGUoXCIuY29uY2F0KHR5cGVOYW1lLCBcIilcIik7XG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKSgoMCwgX2FuZFtcImRlZmF1bHRcIl0pKFtfcHJvcFR5cGVzLmVsZW1lbnQsIGVsZW1lbnRUeXBlXSwgdmFsaWRhdG9yTmFtZSksIHZhbGlkYXRvck5hbWUsIFR5cGUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZWxlbWVudFR5cGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9vciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vb3JcIikpO1xuXG52YXIgX2V4cGxpY2l0TnVsbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZXhwbGljaXROdWxsXCIpKTtcblxudmFyIF93aXRoU2hhcGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGhTaGFwZVwiKSk7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBhcnJheU9mVmFsaWRhdG9yO1xudmFyIHZhbGlkYXRvciA9ICgwLCBfb3JbXCJkZWZhdWx0XCJdKShbX2V4cGxpY2l0TnVsbFtcImRlZmF1bHRcIl0sIC8vIG51bGwvdW5kZWZpbmVkXG4oMCwgX3Byb3BUeXBlcy5vbmVPZikoW2ZhbHNlLCAnJywgTmFOXSksICgwLCBfd2l0aFNoYXBlW1wiZGVmYXVsdFwiXSkoX3Byb3BUeXBlcy5hcnJheSwge1xuICBsZW5ndGg6ICgwLCBfcHJvcFR5cGVzLm9uZU9mKShbMF0pLmlzUmVxdWlyZWRcbn0pLmlzUmVxdWlyZWQsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGFycmF5T2ZWYWxpZGF0b3IuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xufV0pO1xuYXJyYXlPZlZhbGlkYXRvciA9ICgwLCBfcHJvcFR5cGVzLmFycmF5T2YpKHZhbGlkYXRvcikuaXNSZXF1aXJlZDtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKSh2YWxpZGF0b3IsICdlbXB0eScpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtcHR5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIGV4cGxpY2l0TnVsbChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIjogcHJvcCBcXHUyMDFDXCIpLmNvbmNhdChwcm9wTmFtZSwgXCJcXHUyMDFEIG11c3QgYmUgbnVsbCBvciB1bmRlZmluZWQ7IHJlY2VpdmVkIFwiKS5jb25jYXQoX3R5cGVvZihwcm9wc1twcm9wTmFtZV0pKSk7XG59XG5cbmV4cGxpY2l0TnVsbC5pc1JlcXVpcmVkID0gZnVuY3Rpb24gZXhwbGljaXROdWxsUmVxdWlyZWQocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBuZXcgVHlwZUVycm9yKFwiXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiOiBwcm9wIFxcdTIwMUNcIikuY29uY2F0KHByb3BOYW1lLCBcIlxcdTIwMUQgbXVzdCBiZSBudWxsOyByZWNlaXZlZCBcIikuY29uY2F0KF90eXBlb2YocHJvcHNbcHJvcE5hbWVdKSkpO1xufTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKShleHBsaWNpdE51bGwsICdleHBsaWNpdE51bGwnKTtcbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leHBsaWNpdE51bGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldENvbXBvbmVudE5hbWU7XG5cbnZhciBfZnVuY3Rpb25Qcm90b3R5cGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJmdW5jdGlvbi5wcm90b3R5cGUubmFtZVwiKSk7XG5cbnZhciBfcmVhY3RJcyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB7XG4gIGlmICh0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgKDAsIF9mdW5jdGlvblByb3RvdHlwZVtcImRlZmF1bHRcIl0pKENvbXBvbmVudCk7XG4gIH1cblxuICBpZiAoKDAsIF9yZWFjdElzLmlzRm9yd2FyZFJlZikoe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICAkJHR5cGVvZjogX3JlYWN0SXMuRWxlbWVudFxuICB9KSkge1xuICAgIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWU7XG4gIH1cblxuICBpZiAoKDAsIF9yZWFjdElzLmlzTWVtbykoQ29tcG9uZW50KSkge1xuICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudC50eXBlKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0Q29tcG9uZW50TmFtZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciBmaW5pdGUgPSBpc0Zpbml0ZTtcblxudmFyIF9kZWZhdWx0ID0gTnVtYmVyLmlzSW50ZWdlciB8fFxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgZmluaXRlKHgpICYmIGZsb29yKHgpID09PSB4O1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzSW50ZWdlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0L2J1aWxkL2hlbHBlcnMvaXNQbGFpbk9iamVjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSBfaXNQbGFpbk9iamVjdFtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNQbGFpbk9iamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gaXNQcmltaXRpdmU7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHgpIHtcbiAgcmV0dXJuICF4IHx8IF90eXBlb2YoeCkgIT09ICdvYmplY3QnICYmIHR5cGVvZiB4ICE9PSAnZnVuY3Rpb24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNQcmltaXRpdmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJlbmRlcmFibGVDaGlsZHJlbjtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHJlbmRlcmFibGVDaGlsZHJlbihjaGlsZHJlblByb3ApIHtcbiAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlblByb3ApLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQgPT09IDAgfHwgY2hpbGQ7XG4gIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVuZGVyYWJsZUNoaWxkcmVuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB0eXBlT2Y7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiB0eXBlT2YoY2hpbGQpIHtcbiAgaWYgKGNoaWxkID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9XG5cbiAgaWYgKF90eXBlb2YoY2hpbGQpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBfdHlwZW9mKGNoaWxkKTtcbiAgfVxuXG4gIGlmIChfcmVhY3RbXCJkZWZhdWx0XCJdLmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgIHJldHVybiBjaGlsZC50eXBlO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwZU9mLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB3cmFwVmFsaWRhdG9yO1xuXG52YXIgX29iamVjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9iamVjdC5hc3NpZ25cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gd3JhcFZhbGlkYXRvcih2YWxpZGF0b3IsIHR5cGVOYW1lKSB7XG4gIHZhciB0eXBlQ2hlY2tlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgcmV0dXJuICgwLCBfb2JqZWN0W1wiZGVmYXVsdFwiXSkodmFsaWRhdG9yLmJpbmQoKSwge1xuICAgIHR5cGVOYW1lOiB0eXBlTmFtZSxcbiAgICB0eXBlQ2hlY2tlcjogdHlwZUNoZWNrZXIsXG4gICAgaXNSZXF1aXJlZDogKDAsIF9vYmplY3RbXCJkZWZhdWx0XCJdKSh2YWxpZGF0b3IuaXNSZXF1aXJlZC5iaW5kKCksIHtcbiAgICAgIHR5cGVOYW1lOiB0eXBlTmFtZSxcbiAgICAgIHR5cGVDaGVja2VyOiB0eXBlQ2hlY2tlcixcbiAgICAgIHR5cGVSZXF1aXJlZDogdHJ1ZVxuICAgIH0pXG4gIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JhcFZhbGlkYXRvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9wcm9wVHlwZXNFeGFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIikpO1xuXG52YXIgX2FuZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYW5kXCIpKTtcblxudmFyIF9iZXR3ZWVuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iZXR3ZWVuXCIpKTtcblxudmFyIF9ib29sZWFuU29tZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYm9vbGVhblNvbWVcIikpO1xuXG52YXIgX2NoaWxkcmVuSGF2ZVByb3BYb3JDaGlsZHJlbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY2hpbGRyZW5IYXZlUHJvcFhvckNoaWxkcmVuXCIpKTtcblxudmFyIF9jaGlsZHJlbk9mID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jaGlsZHJlbk9mXCIpKTtcblxudmFyIF9jaGlsZHJlbk9mVHlwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY2hpbGRyZW5PZlR5cGVcIikpO1xuXG52YXIgX2NoaWxkcmVuU2VxdWVuY2VPZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY2hpbGRyZW5TZXF1ZW5jZU9mXCIpKTtcblxudmFyIF9jb21wb25lbnRXaXRoTmFtZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50V2l0aE5hbWVcIikpO1xuXG52YXIgX2Rpc2FsbG93ZWRJZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZGlzYWxsb3dlZElmXCIpKTtcblxudmFyIF9lbGVtZW50VHlwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZWxlbWVudFR5cGVcIikpO1xuXG52YXIgX2VtcHR5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9lbXB0eVwiKSk7XG5cbnZhciBfZXhwbGljaXROdWxsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9leHBsaWNpdE51bGxcIikpO1xuXG52YXIgX2ludGVnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2ludGVnZXJcIikpO1xuXG52YXIgX2tleXNPZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4va2V5c09mXCIpKTtcblxudmFyIF9tdXR1YWxseUV4Y2x1c2l2ZVByb3BzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tdXR1YWxseUV4Y2x1c2l2ZVByb3BzXCIpKTtcblxudmFyIF9tdXR1YWxseUV4Y2x1c2l2ZVRydWVQcm9wcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbXV0dWFsbHlFeGNsdXNpdmVUcnVlUHJvcHNcIikpO1xuXG52YXIgX25DaGlsZHJlbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbkNoaWxkcmVuXCIpKTtcblxudmFyIF9ub25OZWdhdGl2ZUludGVnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25vbk5lZ2F0aXZlSW50ZWdlclwiKSk7XG5cbnZhciBfbm9uTmVnYXRpdmVOdW1iZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25vbk5lZ2F0aXZlTnVtYmVyXCIpKTtcblxudmFyIF9udW1lcmljU3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9udW1lcmljU3RyaW5nXCIpKTtcblxudmFyIF9vYmplY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL29iamVjdFwiKSk7XG5cbnZhciBfb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL29yXCIpKTtcblxudmFyIF9yYW5nZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmFuZ2VcIikpO1xuXG52YXIgX3JlZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVmXCIpKTtcblxudmFyIF9yZXF1aXJlZEJ5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZXF1aXJlZEJ5XCIpKTtcblxudmFyIF9yZXN0cmljdGVkUHJvcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVzdHJpY3RlZFByb3BcIikpO1xuXG52YXIgX3NlcXVlbmNlT2YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NlcXVlbmNlT2ZcIikpO1xuXG52YXIgX3NoYXBlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaGFwZVwiKSk7XG5cbnZhciBfc3RyaW5nRW5kc1dpdGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N0cmluZ0VuZHNXaXRoXCIpKTtcblxudmFyIF9zdHJpbmdTdGFydHNXaXRoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdHJpbmdTdGFydHNXaXRoXCIpKTtcblxudmFyIF91bmlxdWVBcnJheSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdW5pcXVlQXJyYXlcIikpO1xuXG52YXIgX3VuaXF1ZUFycmF5T2YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VuaXF1ZUFycmF5T2ZcIikpO1xuXG52YXIgX3ZhbHVlc09mID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWx1ZXNPZlwiKSk7XG5cbnZhciBfd2l0aFNoYXBlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoU2hhcGVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFuZDogX2FuZFtcImRlZmF1bHRcIl0sXG4gIGJldHdlZW46IF9iZXR3ZWVuW1wiZGVmYXVsdFwiXSxcbiAgYm9vbGVhblNvbWU6IF9ib29sZWFuU29tZVtcImRlZmF1bHRcIl0sXG4gIGNoaWxkcmVuSGF2ZVByb3BYb3JDaGlsZHJlbjogX2NoaWxkcmVuSGF2ZVByb3BYb3JDaGlsZHJlbltcImRlZmF1bHRcIl0sXG4gIGNoaWxkcmVuT2Y6IF9jaGlsZHJlbk9mW1wiZGVmYXVsdFwiXSxcbiAgY2hpbGRyZW5PZlR5cGU6IF9jaGlsZHJlbk9mVHlwZVtcImRlZmF1bHRcIl0sXG4gIGNoaWxkcmVuU2VxdWVuY2VPZjogX2NoaWxkcmVuU2VxdWVuY2VPZltcImRlZmF1bHRcIl0sXG4gIGNvbXBvbmVudFdpdGhOYW1lOiBfY29tcG9uZW50V2l0aE5hbWVbXCJkZWZhdWx0XCJdLFxuICBkaXNhbGxvd2VkSWY6IF9kaXNhbGxvd2VkSWZbXCJkZWZhdWx0XCJdLFxuICBlbGVtZW50VHlwZTogX2VsZW1lbnRUeXBlW1wiZGVmYXVsdFwiXSxcbiAgZW1wdHk6IF9lbXB0eVtcImRlZmF1bHRcIl0sXG4gIGV4cGxpY2l0TnVsbDogX2V4cGxpY2l0TnVsbFtcImRlZmF1bHRcIl0sXG4gIGZvcmJpZEV4dHJhUHJvcHM6IF9wcm9wVHlwZXNFeGFjdFtcImRlZmF1bHRcIl0sXG4gIGludGVnZXI6IF9pbnRlZ2VyW1wiZGVmYXVsdFwiXSxcbiAga2V5c09mOiBfa2V5c09mW1wiZGVmYXVsdFwiXSxcbiAgbXV0dWFsbHlFeGNsdXNpdmVQcm9wczogX211dHVhbGx5RXhjbHVzaXZlUHJvcHNbXCJkZWZhdWx0XCJdLFxuICBtdXR1YWxseUV4Y2x1c2l2ZVRydWVQcm9wczogX211dHVhbGx5RXhjbHVzaXZlVHJ1ZVByb3BzW1wiZGVmYXVsdFwiXSxcbiAgbkNoaWxkcmVuOiBfbkNoaWxkcmVuW1wiZGVmYXVsdFwiXSxcbiAgbm9uTmVnYXRpdmVJbnRlZ2VyOiBfbm9uTmVnYXRpdmVJbnRlZ2VyW1wiZGVmYXVsdFwiXSxcbiAgbm9uTmVnYXRpdmVOdW1iZXI6IF9ub25OZWdhdGl2ZU51bWJlcltcImRlZmF1bHRcIl0sXG4gIG51bWVyaWNTdHJpbmc6IF9udW1lcmljU3RyaW5nW1wiZGVmYXVsdFwiXSxcbiAgb2JqZWN0OiBfb2JqZWN0W1wiZGVmYXVsdFwiXSxcbiAgb3I6IF9vcltcImRlZmF1bHRcIl0sXG4gIHJhbmdlOiBfcmFuZ2VbXCJkZWZhdWx0XCJdLFxuICByZWY6IF9yZWZbXCJkZWZhdWx0XCJdLFxuICByZXF1aXJlZEJ5OiBfcmVxdWlyZWRCeVtcImRlZmF1bHRcIl0sXG4gIHJlc3RyaWN0ZWRQcm9wOiBfcmVzdHJpY3RlZFByb3BbXCJkZWZhdWx0XCJdLFxuICBzZXF1ZW5jZU9mOiBfc2VxdWVuY2VPZltcImRlZmF1bHRcIl0sXG4gIHNoYXBlOiBfc2hhcGVbXCJkZWZhdWx0XCJdLFxuICBzdHJpbmdFbmRzV2l0aDogX3N0cmluZ0VuZHNXaXRoW1wiZGVmYXVsdFwiXSxcbiAgc3RyaW5nU3RhcnRzV2l0aDogX3N0cmluZ1N0YXJ0c1dpdGhbXCJkZWZhdWx0XCJdLFxuICB1bmlxdWVBcnJheTogX3VuaXF1ZUFycmF5W1wiZGVmYXVsdFwiXSxcbiAgdW5pcXVlQXJyYXlPZjogX3VuaXF1ZUFycmF5T2ZbXCJkZWZhdWx0XCJdLFxuICB2YWx1ZXNPZjogX3ZhbHVlc09mW1wiZGVmYXVsdFwiXSxcbiAgd2l0aFNoYXBlOiBfd2l0aFNoYXBlW1wiZGVmYXVsdFwiXVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfaXNJbnRlZ2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2lzSW50ZWdlclwiKSk7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHJlcXVpcmVkSW50ZWdlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICBpZiAocHJvcFZhbHVlID09IG51bGwgfHwgISgwLCBfaXNJbnRlZ2VyW1wiZGVmYXVsdFwiXSkocHJvcFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgUmFuZ2VFcnJvcihcIlwiLmNvbmNhdChwcm9wTmFtZSwgXCIgaW4gXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcIiBtdXN0IGJlIGFuIGludGVnZXJcIikpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciB2YWxpZGF0b3IgPSBmdW5jdGlvbiBpbnRlZ2VyKHByb3BzLCBwcm9wTmFtZSkge1xuICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gIGlmIChwcm9wVmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlc3RbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVpcmVkSW50ZWdlci5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWVdLmNvbmNhdChyZXN0KSk7XG59O1xuXG52YWxpZGF0b3IuaXNSZXF1aXJlZCA9IHJlcXVpcmVkSW50ZWdlcjtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKSh2YWxpZGF0b3IsICdpbnRlZ2VyJyk7XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZWdlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0ga2V5c09mVmFsaWRhdG9yO1xuXG52YXIgX2lzUHJpbWl0aXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2lzUHJpbWl0aXZlXCIpKTtcblxudmFyIF93cmFwVmFsaWRhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3dyYXBWYWxpZGF0b3JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24ga2V5c09mVmFsaWRhdG9yKHByb3BUeXBlKSB7XG4gIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAna2V5c09mJztcblxuICBpZiAodHlwZW9mIHByb3BUeXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgdG8ga2V5c09mIG11c3QgYmUgYSB2YWxpZCBQcm9wVHlwZSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIHZhbGlkYXRvciA9IGZ1bmN0aW9uIGtleXNPZihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuID4gNSA/IF9sZW4gLSA1IDogMCksIF9rZXkgPSA1OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICByZXN0W19rZXkgLSA1XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgaWYgKHByb3BWYWx1ZSA9PSBudWxsIHx8ICgwLCBfaXNQcmltaXRpdmVbXCJkZWZhdWx0XCJdKShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RFcnJvciA9IG51bGw7XG4gICAgT2JqZWN0LmtleXMocHJvcFZhbHVlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGZpcnN0RXJyb3IgPSBwcm9wVHlwZS5hcHBseSh2b2lkIDAsIFtfZGVmaW5lUHJvcGVydHkoe30sIGtleSwga2V5KSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgXCIoXCIuY29uY2F0KHByb3BGdWxsTmFtZSwgXCIpLlwiKS5jb25jYXQoa2V5KV0uY29uY2F0KHJlc3QpKTtcbiAgICAgIHJldHVybiBmaXJzdEVycm9yICE9IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpcnN0RXJyb3IgfHwgbnVsbDtcbiAgfTtcblxuICB2YWxpZGF0b3IuaXNSZXF1aXJlZCA9IGZ1bmN0aW9uIGtleWVkQnlSZXF1aXJlZChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIjogXCIpLmNvbmNhdChwcm9wTmFtZSwgXCIgaXMgcmVxdWlyZWQsIGJ1dCB2YWx1ZSBpcyBcIikuY29uY2F0KHByb3BWYWx1ZSkpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMiA+IDMgPyBfbGVuMiAtIDMgOiAwKSwgX2tleTIgPSAzOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICByZXN0W19rZXkyIC0gM10gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3IuYXBwbHkodm9pZCAwLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuICB9O1xuXG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKSh2YWxpZGF0b3IsIG5hbWUsIHByb3BUeXBlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWtleXNPZi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbXV0dWFsbHlFeGNsdXNpdmVPZlR5cGU7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIG11dHVhbGx5RXhjbHVzaXZlT2ZUeXBlKHByb3BUeXBlKSB7XG4gIGlmICh0eXBlb2YgcHJvcFR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhIHByb3BUeXBlIGlzIHJlcXVpcmVkJyk7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZXhjbHVzaXZlUHJvcHMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGV4Y2x1c2l2ZVByb3BzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChleGNsdXNpdmVQcm9wcy5sZW5ndGggPCAxKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXQgbGVhc3Qgb25lIHByb3AgdGhhdCBpcyBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCB0aGlzIHByb3BUeXBlIGlzIHJlcXVpcmVkJyk7XG4gIH1cblxuICB2YXIgcHJvcExpc3QgPSBleGNsdXNpdmVQcm9wcy5qb2luKCcsIG9yICcpO1xuICB2YXIgbWFwID0gZXhjbHVzaXZlUHJvcHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHByb3ApIHtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgYWNjLCBfZGVmaW5lUHJvcGVydHkoe30sIHByb3AsIHRydWUpKTtcbiAgfSwge30pO1xuXG4gIHZhciBjb3VudFByb3BzID0gZnVuY3Rpb24gY291bnRQcm9wcyhjb3VudCwgcHJvcCkge1xuICAgIHJldHVybiBjb3VudCArIChtYXBbcHJvcF0gPyAxIDogMCk7XG4gIH07XG5cbiAgdmFyIHZhbGlkYXRvciA9IGZ1bmN0aW9uIG11dHVhbGx5RXhjbHVzaXZlUHJvcHMocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIGV4Y2x1c2l2ZVByb3BDb3VudCA9IE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJldHVybiBwcm9wc1twcm9wXSAhPSBudWxsO1xuICAgIH0pLnJlZHVjZShjb3VudFByb3BzLCAwKTtcblxuICAgIGlmIChleGNsdXNpdmVQcm9wQ291bnQgPiAxKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiQSBcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIgY2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBvZiB0aGVzZSBwcm9wczogXCIpLmNvbmNhdChwcm9wTGlzdCkpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMiA+IDMgPyBfbGVuMiAtIDMgOiAwKSwgX2tleTIgPSAzOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICByZXN0W19rZXkyIC0gM10gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wVHlwZS5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gIH07XG5cbiAgdmFsaWRhdG9yLmlzUmVxdWlyZWQgPSBmdW5jdGlvbiBtdXR1YWxseUV4Y2x1c2l2ZVByb3BzUmVxdWlyZWQocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIGV4Y2x1c2l2ZVByb3BDb3VudCA9IE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJldHVybiBwcm9wID09PSBwcm9wTmFtZSB8fCBwcm9wc1twcm9wXSAhPSBudWxsO1xuICAgIH0pLnJlZHVjZShjb3VudFByb3BzLCAwKTtcblxuICAgIGlmIChleGNsdXNpdmVQcm9wQ291bnQgPiAxKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiQSBcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIgY2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBvZiB0aGVzZSBwcm9wczogXCIpLmNvbmNhdChwcm9wTGlzdCkpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMyA+IDMgPyBfbGVuMyAtIDMgOiAwKSwgX2tleTMgPSAzOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICByZXN0W19rZXkzIC0gM10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wVHlwZS5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gIH07XG5cbiAgcmV0dXJuICgwLCBfd3JhcFZhbGlkYXRvcltcImRlZmF1bHRcIl0pKHZhbGlkYXRvciwgXCJtdXR1YWxseUV4Y2x1c2l2ZVByb3BzOlwiLmNvbmNhdChwcm9wTGlzdCksIGV4Y2x1c2l2ZVByb3BzKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW11dHVhbGx5RXhjbHVzaXZlUHJvcHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG11dHVhbGx5RXhjbHVzaXZlVHJ1ZTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF93cmFwVmFsaWRhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3dyYXBWYWxpZGF0b3JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gbXV0dWFsbHlFeGNsdXNpdmVUcnVlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZXhjbHVzaXZlUHJvcHMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZXhjbHVzaXZlUHJvcHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZXhjbHVzaXZlUHJvcHMubGVuZ3RoIDwgMSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2F0IGxlYXN0IG9uZSBwcm9wIHRoYXQgaXMgbXV0dWFsbHkgZXhjbHVzaXZlIGlzIHJlcXVpcmVkJyk7XG4gIH1cblxuICBpZiAoIWV4Y2x1c2l2ZVByb3BzLmV2ZXJ5KGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJztcbiAgfSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhbGwgZXhjbHVzaXZlIHRydWUgcHJvcHMgbXVzdCBiZSBzdHJpbmdzJyk7XG4gIH1cblxuICB2YXIgcHJvcHNMaXN0ID0gZXhjbHVzaXZlUHJvcHMuam9pbignLCBvciAnKTtcblxuICB2YXIgdmFsaWRhdG9yID0gZnVuY3Rpb24gbXV0dWFsbHlFeGNsdXNpdmVUcnVlUHJvcHMocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIGNvdW50UHJvcHMgPSBmdW5jdGlvbiBjb3VudFByb3BzKGNvdW50LCBwcm9wKSB7XG4gICAgICByZXR1cm4gY291bnQgKyAocHJvcHNbcHJvcF0gPyAxIDogMCk7XG4gICAgfTtcblxuICAgIHZhciBleGNsdXNpdmVQcm9wQ291bnQgPSBleGNsdXNpdmVQcm9wcy5yZWR1Y2UoY291bnRQcm9wcywgMCk7XG5cbiAgICBpZiAoZXhjbHVzaXZlUHJvcENvdW50ID4gMSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIkEgXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgb2YgdGhlc2UgYm9vbGVhbiBwcm9wcyBiZSB0cnVlOiBcIikuY29uY2F0KHByb3BzTGlzdCkpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMiA+IDMgPyBfbGVuMiAtIDMgOiAwKSwgX2tleTIgPSAzOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICByZXN0W19rZXkyIC0gM10gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBfcHJvcFR5cGVzLmJvb2wuYXBwbHkodm9pZCAwLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuICB9O1xuXG4gIHZhbGlkYXRvci5pc1JlcXVpcmVkID0gZnVuY3Rpb24gbXV0dWFsbHlFeGNsdXNpdmVUcnVlUHJvcHNSZXF1aXJlZChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgY291bnRQcm9wcyA9IGZ1bmN0aW9uIGNvdW50UHJvcHMoY291bnQsIHByb3ApIHtcbiAgICAgIHJldHVybiBjb3VudCArIChwcm9wc1twcm9wXSA/IDEgOiAwKTtcbiAgICB9O1xuXG4gICAgdmFyIGV4Y2x1c2l2ZVByb3BDb3VudCA9IGV4Y2x1c2l2ZVByb3BzLnJlZHVjZShjb3VudFByb3BzLCAwKTtcblxuICAgIGlmIChleGNsdXNpdmVQcm9wQ291bnQgPiAxKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiQSBcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIgY2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBvZiB0aGVzZSBib29sZWFuIHByb3BzIGJlIHRydWU6IFwiKS5jb25jYXQocHJvcHNMaXN0KSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4zID4gMyA/IF9sZW4zIC0gMyA6IDApLCBfa2V5MyA9IDM7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIHJlc3RbX2tleTMgLSAzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIF9wcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLmFwcGx5KF9wcm9wVHlwZXMuYm9vbCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZV0uY29uY2F0KHJlc3QpKTtcbiAgfTtcblxuICByZXR1cm4gKDAsIF93cmFwVmFsaWRhdG9yW1wiZGVmYXVsdFwiXSkodmFsaWRhdG9yLCBcIm11dHVhbGx5RXhjbHVzaXZlVHJ1ZVByb3BzOiBcIi5jb25jYXQocHJvcHNMaXN0KSwgZXhjbHVzaXZlUHJvcHMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXV0dWFsbHlFeGNsdXNpdmVUcnVlUHJvcHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG5DaGlsZHJlbjtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF93cmFwVmFsaWRhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3dyYXBWYWxpZGF0b3JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gbkNoaWxkcmVuKG4pIHtcbiAgdmFyIHByb3BUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBfcHJvcFR5cGVzLm5vZGU7XG5cbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBpc05hTihuKSB8fCBuIDwgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Egbm9uLW5lZ2F0aXZlIG51bWJlciBpcyByZXF1aXJlZCcpO1xuICB9XG5cbiAgdmFyIHZhbGlkYXRvciA9IGZ1bmN0aW9uIG5DaGlsZHJlblZhbGlkYXRvcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAocHJvcE5hbWUgIT09ICdjaGlsZHJlbicpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiIGlzIHVzaW5nIHRoZSBuQ2hpbGRyZW4gdmFsaWRhdG9yIG9uIGEgbm9uLWNoaWxkcmVuIHByb3BcIikpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgdmFyIGNoaWxkcmVuQ291bnQgPSBfcmVhY3RbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKTtcblxuICAgIGlmIChjaGlsZHJlbkNvdW50ICE9PSBuKSB7XG4gICAgICByZXR1cm4gbmV3IFJhbmdlRXJyb3IoXCJcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIgZXhwZWN0cyB0byByZWNlaXZlIFwiKS5jb25jYXQobiwgXCIgY2hpbGRyZW4sIGJ1dCByZWNlaXZlZCBcIikuY29uY2F0KGNoaWxkcmVuQ291bnQsIFwiIGNoaWxkcmVuLlwiKSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcmVzdFtfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BUeXBlLmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZV0uY29uY2F0KHJlc3QpKTtcbiAgfTtcblxuICB2YWxpZGF0b3IuaXNSZXF1aXJlZCA9IHZhbGlkYXRvcjtcbiAgcmV0dXJuICgwLCBfd3JhcFZhbGlkYXRvcltcImRlZmF1bHRcIl0pKHZhbGlkYXRvciwgXCJuQ2hpbGRyZW46XCIuY29uY2F0KG4pLCBuKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5DaGlsZHJlbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2FuZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYW5kXCIpKTtcblxudmFyIF9pbnRlZ2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pbnRlZ2VyXCIpKTtcblxudmFyIF9ub25OZWdhdGl2ZU51bWJlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbm9uTmVnYXRpdmVOdW1iZXJcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0gKDAsIF9hbmRbXCJkZWZhdWx0XCJdKShbKDAsIF9pbnRlZ2VyW1wiZGVmYXVsdFwiXSkoKSwgKDAsIF9ub25OZWdhdGl2ZU51bWJlcltcImRlZmF1bHRcIl0pKCldLCAnbm9uTmVnYXRpdmVJbnRlZ2VyJyk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub25OZWdhdGl2ZUludGVnZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9vYmplY3RJcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9iamVjdC1pc1wiKSk7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzTm9uTmVnYXRpdmUoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInICYmIGlzRmluaXRlKHgpICYmIHggPj0gMCAmJiAhKDAsIF9vYmplY3RJc1tcImRlZmF1bHRcIl0pKHgsIC0wKTtcbn1cblxuZnVuY3Rpb24gbm9uTmVnYXRpdmVOdW1iZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBpc05vbk5lZ2F0aXZlKHZhbHVlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSYW5nZUVycm9yKFwiXCIuY29uY2F0KHByb3BOYW1lLCBcIiBpbiBcIikuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiIG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyXCIpKTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZWROb25OZWdhdGl2ZU51bWJlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gIGlmIChpc05vbk5lZ2F0aXZlKHZhbHVlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSYW5nZUVycm9yKFwiXCIuY29uY2F0KHByb3BOYW1lLCBcIiBpbiBcIikuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiIG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyXCIpKTtcbn1cblxubm9uTmVnYXRpdmVOdW1iZXIuaXNSZXF1aXJlZCA9IHJlcXVpcmVkTm9uTmVnYXRpdmVOdW1iZXI7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICByZXR1cm4gKDAsIF93cmFwVmFsaWRhdG9yW1wiZGVmYXVsdFwiXSkobm9uTmVnYXRpdmVOdW1iZXIsICdub25OZWdhdGl2ZU51bWJlcicpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vbk5lZ2F0aXZlTnVtYmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciB2YWxpZE51bWVyaWNDaGFycyA9IC9eWy0rXT8oPzpbMS05XVswLTldKig/OlxcLlswLTldKyk/fDB8MFxcLlswLTldKykkLztcblxudmFyIHZhbGlkYXRvciA9IGZ1bmN0aW9uIG51bWVyaWNTdHJpbmcocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlc3RbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHN0cmluZ0Vycm9yID0gX3Byb3BUeXBlcy5zdHJpbmcuYXBwbHkodm9pZCAwLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuXG4gIGlmIChzdHJpbmdFcnJvcikge1xuICAgIHJldHVybiBzdHJpbmdFcnJvcjtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgdmFyIHBhc3Nlc1JlZ2V4ID0gdmFsaWROdW1lcmljQ2hhcnMudGVzdCh2YWx1ZSk7XG5cbiAgaWYgKHBhc3Nlc1JlZ2V4KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIjogcHJvcCBcXFwiXCIpLmNvbmNhdChwcm9wTmFtZSwgXCJcXFwiICh2YWx1ZSBcXFwiXCIpLmNvbmNhdCh2YWx1ZSwgXCJcXFwiKSBtdXN0IGJlIGEgbnVtZXJpYyBzdHJpbmc6XFxuICAgIC0gc3RhcnRpbmcgd2l0aCBhbiBvcHRpb25hbCArIG9yIC1cXG4gICAgLSB0aGF0IGRvZXMgbm90IGhhdmUgYSBsZWFkaW5nIHplcm9cXG4gICAgLSB3aXRoIGFuIG9wdGlvbmFsIGRlY2ltYWwgcGFydCAodGhhdCBjb250YWlucyBvbmx5IG9uZSBkZWNpbWFsIHBvaW50LCBpZiBwcmVzZW50KVxcbiAgICAtIHRoYXQgb3RoZXJ3aXNlIG9ubHkgY29udGFpbnMgZGlnaXRzICgwLTkpXFxuICAgIC0gbm90ICstTmFOLCBvciArLUluZmluaXR5XFxuICBcIikpO1xufTtcblxudmFsaWRhdG9yLmlzUmVxdWlyZWQgPSBmdW5jdGlvbiBudW1lcmljU3RyaW5nUmVxdWlyZWQocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiOiBcIikuY29uY2F0KHByb3BOYW1lLCBcIiBpcyByZXF1aXJlZFwiKSk7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjIgPiAzID8gX2xlbjIgLSAzIDogMCksIF9rZXkyID0gMzsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIHJlc3RbX2tleTIgLSAzXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdG9yLmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZV0uY29uY2F0KHJlc3QpKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICByZXR1cm4gKDAsIF93cmFwVmFsaWRhdG9yW1wiZGVmYXVsdFwiXSkodmFsaWRhdG9yLCAnbnVtZXJpY1N0cmluZycpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW51bWVyaWNTdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2lzUGxhaW5PYmplY3RcIikpO1xuXG52YXIgX3R5cGVPZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy90eXBlT2ZcIikpO1xuXG52YXIgX3dyYXBWYWxpZGF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvd3JhcFZhbGlkYXRvclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKlxuICBjb2RlIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8xNDE1NmU1NmI5Y2YxOGFjODY5NjMxODVjNWFmNGFiZGRmM2ZmODExL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvdHlwZXMvUmVhY3RQcm9wVHlwZXMuanMjTDIwMi1MMjA2XG4gIHNvIHRoYXQgaXQgY2FuIGJlIGNhbGxlZCBvdXRzaWRlIG9mIFJlYWN0J3Mgbm9ybWFsIFByb3BUeXBlIGZsb3dcbiovXG52YXIgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMgPSB7XG4gIHByb3A6ICdwcm9wJyxcbiAgY29udGV4dDogJ2NvbnRleHQnLFxuICBjaGlsZENvbnRleHQ6ICdjaGlsZCBjb250ZXh0J1xufTtcblxuZnVuY3Rpb24gb2JqZWN0KHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gIGlmIChwcm9wVmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCgwLCBfaXNQbGFpbk9iamVjdFtcImRlZmF1bHRcIl0pKHByb3BWYWx1ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBsb2NhdGlvbk5hbWUgPSBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lc1tsb2NhdGlvbl0gfHwgbG9jYXRpb247XG4gIHJldHVybiBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBcIi5jb25jYXQobG9jYXRpb25OYW1lLCBcIiBgXCIpLmNvbmNhdChwcm9wRnVsbE5hbWUsIFwiYCBvZiB0eXBlIGBcIikuY29uY2F0KCgwLCBfdHlwZU9mW1wiZGVmYXVsdFwiXSkocHJvcFZhbHVlKSwgXCJgIHN1cHBsaWVkIHRvIGBcIikuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiYCwgZXhwZWN0ZWQgYG9iamVjdGAuXCIpKTtcbn1cblxub2JqZWN0LmlzUmVxdWlyZWQgPSBmdW5jdGlvbiBvYmplY3RSZXF1aXJlZChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICBpZiAocHJvcFZhbHVlID09IG51bGwpIHtcbiAgICB2YXIgbG9jYXRpb25OYW1lID0gUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dIHx8IGxvY2F0aW9uO1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiVGhlIFwiLmNvbmNhdChsb2NhdGlvbk5hbWUsIFwiIGBcIikuY29uY2F0KHByb3BGdWxsTmFtZSwgXCJgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAsIGJ1dCBpdHMgdmFsdWUgaXMgYFwiKS5jb25jYXQocHJvcFZhbHVlLCBcImAuXCIpKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiA1ID8gX2xlbiAtIDUgOiAwKSwgX2tleSA9IDU7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZXN0W19rZXkgLSA1XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3QuYXBwbHkodm9pZCAwLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lXS5jb25jYXQocmVzdCkpO1xufTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKShvYmplY3QsICdvYmplY3QnKTtcbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG9yO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3dyYXBWYWxpZGF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvd3JhcFZhbGlkYXRvclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gfVxuXG5mdW5jdGlvbiBvbmVPZlR5cGVWYWxpZGF0b3IodmFsaWRhdG9ycykge1xuICB2YXIgdmFsaWRhdG9yID0gZnVuY3Rpb24gb25lT2ZUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHJlc3RbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBlcnJvcnMgPSB2YWxpZGF0b3JzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIHYuYXBwbHkodm9pZCAwLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuICAgIH0pLmZpbHRlcihCb29sZWFuKTtcblxuICAgIGlmIChlcnJvcnMubGVuZ3RoIDwgdmFsaWRhdG9ycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiOiBpbnZhbGlkIHZhbHVlIHN1cHBsaWVkIHRvIFwiKS5jb25jYXQocHJvcE5hbWUsIFwiLlwiKSk7XG4gIH07XG5cbiAgdmFsaWRhdG9yLmlzUmVxdWlyZWQgPSBmdW5jdGlvbiBvbmVPZlR5cGVSZXF1aXJlZChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjIgPiAzID8gX2xlbjIgLSAzIDogMCksIF9rZXkyID0gMzsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgcmVzdFtfa2V5MiAtIDNdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIjogbWlzc2luZyB2YWx1ZSBmb3IgcmVxdWlyZWQgXCIpLmNvbmNhdChwcm9wTmFtZSwgXCIuXCIpKTtcbiAgICB9XG5cbiAgICB2YXIgZXJyb3JzID0gdmFsaWRhdG9ycy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2LmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZV0uY29uY2F0KHJlc3QpKTtcbiAgICB9KS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gdmFsaWRhdG9ycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiOiBpbnZhbGlkIHZhbHVlIFwiKS5jb25jYXQoZXJyb3JzLCBcIiBzdXBwbGllZCB0byByZXF1aXJlZCBcIikuY29uY2F0KHByb3BOYW1lLCBcIi5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKSh2YWxpZGF0b3IsICdvbmVPZlR5cGUnLCB2YWxpZGF0b3JzKTtcbn1cblxuZnVuY3Rpb24gb3IodmFsaWRhdG9ycykge1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ29yJztcblxuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsaWRhdG9ycykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcjogMiBvciBtb3JlIHZhbGlkYXRvcnMgYXJlIHJlcXVpcmVkJyk7XG4gIH1cblxuICBpZiAodmFsaWRhdG9ycy5sZW5ndGggPD0gMSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvcjogMiBvciBtb3JlIHZhbGlkYXRvcnMgYXJlIHJlcXVpcmVkJyk7XG4gIH1cblxuICB2YXIgdmFsaWRhdG9yID0gb25lT2ZUeXBlVmFsaWRhdG9yKFsoMCwgX3Byb3BUeXBlcy5hcnJheU9mKShvbmVPZlR5cGVWYWxpZGF0b3IodmFsaWRhdG9ycykpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHZhbGlkYXRvcnMpKSk7XG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKSh2YWxpZGF0b3IsIG5hbWUsIHZhbGlkYXRvcnMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJhbmdlO1xuXG52YXIgX2FuZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYW5kXCIpKTtcblxudmFyIF9iZXR3ZWVuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iZXR3ZWVuXCIpKTtcblxudmFyIF9pbnRlZ2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pbnRlZ2VyXCIpKTtcblxudmFyIF9pc0ludGVnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvaXNJbnRlZ2VyXCIpKTtcblxudmFyIF93cmFwVmFsaWRhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3dyYXBWYWxpZGF0b3JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fFxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbk1hdGgucG93KDIsIDUzKSAtIDE7XG5cbmZ1bmN0aW9uIGlzVmFsaWRMZW5ndGgoeCkge1xuICByZXR1cm4gKDAsIF9pc0ludGVnZXJbXCJkZWZhdWx0XCJdKSh4KSAmJiBNYXRoLmFicyh4KSA8IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbmZ1bmN0aW9uIHJhbmdlKG1pbiwgbWF4KSB7XG4gIGlmICghaXNWYWxpZExlbmd0aChtaW4pIHx8ICFpc1ZhbGlkTGVuZ3RoKG1heCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlxcXCJyYW5nZVxcXCIgcmVxdWlyZXMgdHdvIGludGVnZXJzOiBcIi5jb25jYXQobWluLCBcIiBhbmQgXCIpLmNvbmNhdChtYXgsIFwiIGdpdmVuXCIpKTtcbiAgfVxuXG4gIGlmIChtaW4gPT09IG1heCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdtaW4gYW5kIG1heCBtdXN0IG5vdCBiZSB0aGUgc2FtZScpO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfd3JhcFZhbGlkYXRvcltcImRlZmF1bHRcIl0pKCgwLCBfYW5kW1wiZGVmYXVsdFwiXSkoWygwLCBfaW50ZWdlcltcImRlZmF1bHRcIl0pKCksICgwLCBfYmV0d2VlbltcImRlZmF1bHRcIl0pKHtcbiAgICBndGU6IG1pbixcbiAgICBsdDogbWF4XG4gIH0pXSwgJ3JhbmdlJyksICdyYW5nZScsIHtcbiAgICBtaW46IG1pbixcbiAgICBtYXg6IG1heFxuICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9pc1BsYWluT2JqZWN0XCIpKTtcblxudmFyIF93cmFwVmFsaWRhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3dyYXBWYWxpZGF0b3JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIGlzUHJvdG90eXBlT2YgPSBPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2Y7XG5cbmZ1bmN0aW9uIGlzTmV3UmVmKHByb3ApIHtcbiAgaWYgKCEoMCwgX2lzUGxhaW5PYmplY3RbXCJkZWZhdWx0XCJdKShwcm9wKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBvd25Qcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMocHJvcCk7XG4gIHJldHVybiBvd25Qcm9wZXJ0aWVzLmxlbmd0aCA9PT0gMSAmJiBvd25Qcm9wZXJ0aWVzWzBdID09PSAnY3VycmVudCc7XG59XG5cbmZ1bmN0aW9uIGlzQ2FsbGJhY2tSZWYocHJvcCkge1xuICByZXR1cm4gdHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlT2YuY2FsbChfcmVhY3QuQ29tcG9uZW50LCBwcm9wKSAmJiAoIV9yZWFjdC5QdXJlQ29tcG9uZW50IHx8ICFpc1Byb3RvdHlwZU9mLmNhbGwoX3JlYWN0LlB1cmVDb21wb25lbnQsIHByb3ApKTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZWRSZWYocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgaWYgKGlzQ2FsbGJhY2tSZWYocHJvcFZhbHVlKSB8fCBpc05ld1JlZihwcm9wVmFsdWUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChwcm9wTmFtZSwgXCIgaW4gXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcIiBtdXN0IGJlIGEgcmVmXCIpKTtcbn1cblxuZnVuY3Rpb24gcmVmKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gIGlmIChwcm9wVmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlc3RbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVpcmVkUmVmLmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZV0uY29uY2F0KHJlc3QpKTtcbn1cblxucmVmLmlzUmVxdWlyZWQgPSByZXF1aXJlZFJlZjtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKShyZWYsICdyZWYnKTtcbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWYuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldFJlcXVpcmVkQnk7XG5cbnZhciBfb2JqZWN0SXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJvYmplY3QtaXNcIikpO1xuXG52YXIgX3dyYXBWYWxpZGF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvd3JhcFZhbGlkYXRvclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRSZXF1aXJlZEJ5KHJlcXVpcmVkQnlQcm9wTmFtZSwgcHJvcFR5cGUpIHtcbiAgdmFyIGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblxuICBmdW5jdGlvbiByZXF1aXJlZEJ5KHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmIChwcm9wc1tyZXF1aXJlZEJ5UHJvcE5hbWVdKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgICBpZiAoKDAsIF9vYmplY3RJc1tcImRlZmF1bHRcIl0pKHByb3BWYWx1ZSwgZGVmYXVsdFZhbHVlKSB8fCB0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIjogd2hlbiBcIikuY29uY2F0KHJlcXVpcmVkQnlQcm9wTmFtZSwgXCIgaXMgdHJ1ZSwgcHJvcCBcXHUyMDFDXCIpLmNvbmNhdChwcm9wTmFtZSwgXCJcXHUyMDFEIG11c3QgYmUgcHJlc2VudC5cIikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHJlc3RbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wVHlwZS5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gIH1cblxuICByZXF1aXJlZEJ5LmlzUmVxdWlyZWQgPSBmdW5jdGlvbiByZXF1aXJlZEJ5UmVxdWlyZWQocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICAgIGlmICgoMCwgX29iamVjdElzW1wiZGVmYXVsdFwiXSkocHJvcFZhbHVlLCBkZWZhdWx0VmFsdWUpKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIjogcHJvcCBcXHUyMDFDXCIpLmNvbmNhdChwcm9wTmFtZSwgXCJcXHUyMDFEIG11c3QgYmUgcHJlc2VudC5cIikpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMiA+IDMgPyBfbGVuMiAtIDMgOiAwKSwgX2tleTIgPSAzOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICByZXN0W19rZXkyIC0gM10gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wVHlwZS5pc1JlcXVpcmVkLmFwcGx5KHByb3BUeXBlLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuICB9O1xuXG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKShyZXF1aXJlZEJ5LCBcInJlcXVpcmVkQnkgXFx1MjAxQ1wiLmNvbmNhdChyZXF1aXJlZEJ5UHJvcE5hbWUsIFwiXFx1MjAxRFwiKSwgW3JlcXVpcmVkQnlQcm9wTmFtZSwgZGVmYXVsdFZhbHVlXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1aXJlZEJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGN1c3RvbU1lc3NhZ2VXcmFwcGVyKG1lc3NzYWdlRnVuY3Rpb24pIHtcbiAgZnVuY3Rpb24gcmVzdHJpY3RlZFByb3AocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbikge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NzYWdlRnVuY3Rpb24gJiYgdHlwZW9mIG1lc3NzYWdlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiA0ID8gX2xlbiAtIDQgOiAwKSwgX2tleSA9IDQ7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgcmVzdFtfa2V5IC0gNF0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKG1lc3NzYWdlRnVuY3Rpb24uYXBwbHkodm9pZCAwLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbl0uY29uY2F0KHJlc3QpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJUaGUgXCIuY29uY2F0KHByb3BOYW1lLCBcIiBcIikuY29uY2F0KGxvY2F0aW9uLCBcIiBvbiBcIikuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiIGlzIG5vdCBhbGxvd2VkLlwiKSk7XG4gIH1cblxuICByZXN0cmljdGVkUHJvcC5pc1JlcXVpcmVkID0gcmVzdHJpY3RlZFByb3A7XG4gIHJldHVybiByZXN0cmljdGVkUHJvcDtcbn1cblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIHZhciBtZXNzc2FnZUZ1bmN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICByZXR1cm4gKDAsIF93cmFwVmFsaWRhdG9yW1wiZGVmYXVsdFwiXSkoY3VzdG9tTWVzc2FnZVdyYXBwZXIobWVzc3NhZ2VGdW5jdGlvbiksICdyZXN0cmljdGVkUHJvcCcpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlc3RyaWN0ZWRQcm9wLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzZXF1ZW5jZU9mVmFsaWRhdG9yO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX2FuZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYW5kXCIpKTtcblxudmFyIF9iZXR3ZWVuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iZXR3ZWVuXCIpKTtcblxudmFyIF9ub25OZWdhdGl2ZUludGVnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25vbk5lZ2F0aXZlSW50ZWdlclwiKSk7XG5cbnZhciBfb2JqZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9vYmplY3RcIikpO1xuXG52YXIgX3dpdGhTaGFwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aFNoYXBlXCIpKTtcblxudmFyIF90eXBlT2YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvdHlwZU9mXCIpKTtcblxudmFyIF93cmFwVmFsaWRhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL3dyYXBWYWxpZGF0b3JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIG1pblZhbGlkYXRvciA9IF9ub25OZWdhdGl2ZUludGVnZXJbXCJkZWZhdWx0XCJdO1xudmFyIG1heFZhbGlkYXRvciA9ICgwLCBfYW5kW1wiZGVmYXVsdFwiXSkoW19ub25OZWdhdGl2ZUludGVnZXJbXCJkZWZhdWx0XCJdLCAoMCwgX2JldHdlZW5bXCJkZWZhdWx0XCJdKSh7XG4gIGd0ZTogMVxufSldKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVSYW5nZShtaW4sIG1heCkge1xuICBpZiAodHlwZW9mIG1heCAhPT0gJ251bWJlcicgfHwgdHlwZW9mIG1pbiAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbnVsbDsgLy8gbm8gYWRkaXRpb25hbCBjaGVja2luZyBuZWVkZWQgdW5sZXNzIGJvdGggYXJlIHByZXNlbnRcbiAgfVxuXG4gIGlmIChtaW4gPD0gbWF4KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV3IFJhbmdlRXJyb3IoJ21pbiBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBtYXgnKTtcbn1cblxudmFyIHNwZWNpZmllclNoYXBlID0ge1xuICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcihwcm9wcywgcHJvcE5hbWUpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKCdcInZhbGlkYXRvclwiIG11c3QgYmUgYSBwcm9wVHlwZSB2YWxpZGF0b3IgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgbWluOiBmdW5jdGlvbiBtaW4ocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgcmV0dXJuIG1pblZhbGlkYXRvcihwcm9wcywgcHJvcE5hbWUpIHx8IHZhbGlkYXRlUmFuZ2UocHJvcHMubWluLCBwcm9wcy5tYXgpO1xuICB9LFxuICBtYXg6IGZ1bmN0aW9uIG1heChwcm9wcywgcHJvcE5hbWUpIHtcbiAgICByZXR1cm4gbWF4VmFsaWRhdG9yKHByb3BzLCBwcm9wTmFtZSkgfHwgdmFsaWRhdGVSYW5nZShwcm9wcy5taW4sIHByb3BzLm1heCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldE1pbk1heChfcmVmKSB7XG4gIHZhciBtaW4gPSBfcmVmLm1pbixcbiAgICAgIG1heCA9IF9yZWYubWF4O1xuICB2YXIgbWluaW11bTtcbiAgdmFyIG1heGltdW07XG5cbiAgaWYgKHR5cGVvZiBtaW4gIT09ICdudW1iZXInICYmIHR5cGVvZiBtYXggIT09ICdudW1iZXInKSB7XG4gICAgLy8gbmVpdGhlciBwcm92aWRlZCwgZGVmYXVsdCB0byBcIjFcIlxuICAgIG1pbmltdW0gPSAxO1xuICAgIG1heGltdW0gPSAxO1xuICB9IGVsc2Uge1xuICAgIG1pbmltdW0gPSB0eXBlb2YgbWluID09PSAnbnVtYmVyJyA/IG1pbiA6IDE7XG4gICAgbWF4aW11bSA9IHR5cGVvZiBtYXggPT09ICdudW1iZXInID8gbWF4IDogSW5maW5pdHk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1pbmltdW06IG1pbmltdW0sXG4gICAgbWF4aW11bTogbWF4aW11bVxuICB9O1xufVxuXG5mdW5jdGlvbiBjaHVua0J5VHlwZShpdGVtcykge1xuICB2YXIgY2h1bmsgPSBbXTtcbiAgdmFyIGxhc3RUeXBlO1xuICByZXR1cm4gaXRlbXMucmVkdWNlKGZ1bmN0aW9uIChjaHVua3MsIGl0ZW0pIHtcbiAgICB2YXIgaXRlbVR5cGUgPSAoMCwgX3R5cGVPZltcImRlZmF1bHRcIl0pKGl0ZW0pO1xuXG4gICAgaWYgKCFsYXN0VHlwZSB8fCBpdGVtVHlwZSA9PT0gbGFzdFR5cGUpIHtcbiAgICAgIGNodW5rLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNodW5rcy5wdXNoKGNodW5rKTtcbiAgICAgIGNodW5rID0gW2l0ZW1dO1xuICAgIH1cblxuICAgIGxhc3RUeXBlID0gaXRlbVR5cGU7XG4gICAgcmV0dXJuIGNodW5rcztcbiAgfSwgW10pLmNvbmNhdChjaHVuay5sZW5ndGggPiAwID8gW2NodW5rXSA6IFtdKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDaHVua3Moc3BlY2lmaWVycywgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBpdGVtcyA9IHByb3BzW3Byb3BOYW1lXTtcbiAgdmFyIGNodW5rcyA9IGNodW5rQnlUeXBlKGl0ZW1zKTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuID4gNCA/IF9sZW4gLSA0IDogMCksIF9rZXkgPSA0OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcmVzdFtfa2V5IC0gNF0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNwZWNpZmllcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgX3NwZWNpZmllcnMkaSA9IHNwZWNpZmllcnNbaV0sXG4gICAgICAgIHZhbGlkYXRvciA9IF9zcGVjaWZpZXJzJGkudmFsaWRhdG9yLFxuICAgICAgICBtaW4gPSBfc3BlY2lmaWVycyRpLm1pbixcbiAgICAgICAgbWF4ID0gX3NwZWNpZmllcnMkaS5tYXg7XG5cbiAgICB2YXIgX2dldE1pbk1heCA9IGdldE1pbk1heCh7XG4gICAgICBtaW46IG1pbixcbiAgICAgIG1heDogbWF4XG4gICAgfSksXG4gICAgICAgIG1pbmltdW0gPSBfZ2V0TWluTWF4Lm1pbmltdW0sXG4gICAgICAgIG1heGltdW0gPSBfZ2V0TWluTWF4Lm1heGltdW07XG5cbiAgICBpZiAoY2h1bmtzLmxlbmd0aCA9PT0gMCAmJiBtaW5pbXVtID09PSAwKSB7XG4gICAgICAvLyBubyBjaHVua3MgbGVmdCwgYnV0IHRoaXMgc3BlY2lmaWVyIGRvZXMgbm90IHJlcXVpcmUgYW55IGl0ZW1zXG4gICAgICBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250aW51ZVxuICAgIH1cblxuICAgIHZhciBhcnJheU9mVmFsaWRhdG9yID0gKDAsIF9wcm9wVHlwZXMuYXJyYXlPZikodmFsaWRhdG9yKS5pc1JlcXVpcmVkO1xuICAgIHZhciBjaHVuayA9IGNodW5rcy5zaGlmdCgpOyAvLyBleHRyYWN0IHRoZSBuZXh0IGNodW5rIHRvIHRlc3RcblxuICAgIHZhciBjaHVua0Vycm9yID0gYXJyYXlPZlZhbGlkYXRvci5hcHBseSh2b2lkIDAsIFtfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcywgX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wTmFtZSwgY2h1bmspKSwgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG5cbiAgICBpZiAoY2h1bmtFcnJvcikge1xuICAgICAgLy8gdGhpcyBjaHVuayBpcyBpbnZhbGlkXG4gICAgICBpZiAobWluaW11bSA9PT0gMCkge1xuICAgICAgICAvLyBidXQsIHNwZWNpZmllciBoYXMgYSBtaW4gb2YgMCBhbmQgY2FuIGJlIHNraXBwZWRcbiAgICAgICAgY2h1bmtzLnVuc2hpZnQoY2h1bmspOyAvLyBwdXQgdGhlIGNodW5rIGJhY2ssIGZvciB0aGUgbmV4dCBpdGVyYXRpb25cblxuICAgICAgICBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250aW51ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2h1bmtFcnJvcjtcbiAgICB9IC8vIGNodW5rIGlzIHZhbGlkIVxuXG5cbiAgICBpZiAoY2h1bmsubGVuZ3RoIDwgbWluaW11bSkge1xuICAgICAgcmV0dXJuIG5ldyBSYW5nZUVycm9yKFwiXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiOiBzcGVjaWZpZXIgaW5kZXggXCIpLmNvbmNhdChpLCBcIiByZXF1aXJlcyBhIG1pbmltdW0gb2YgXCIpLmNvbmNhdChtaW4sIFwiIGl0ZW1zLCBidXQgb25seSBoYXMgXCIpLmNvbmNhdChjaHVuay5sZW5ndGgsIFwiLlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGNodW5rLmxlbmd0aCA+IG1heGltdW0pIHtcbiAgICAgIHJldHVybiBuZXcgUmFuZ2VFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIjogc3BlY2lmaWVyIGluZGV4IFwiKS5jb25jYXQoaSwgXCIgcmVxdWlyZXMgYSBtYXhpbXVtIG9mIFwiKS5jb25jYXQobWF4LCBcIiBpdGVtcywgYnV0IGhhcyBcIikuY29uY2F0KGNodW5rLmxlbmd0aCwgXCIuXCIpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoY2h1bmtzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIjogYWZ0ZXIgYWxsIFwiKS5jb25jYXQoc3BlY2lmaWVycy5sZW5ndGgsIFwiIHNwZWNpZmllcnMgbWF0Y2hlZCwgXCIpLmNvbmNhdChjaHVua3MubGVuZ3RoLCBcIiB0eXBlcyBvZiBpdGVtcyB3ZXJlIHJlbWFpbmluZy5cIikpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBzcGVjaWZpZXJWYWxpZGF0b3IgPSAoMCwgX3dpdGhTaGFwZVtcImRlZmF1bHRcIl0pKCgwLCBfb2JqZWN0W1wiZGVmYXVsdFwiXSkoKSwgc3BlY2lmaWVyU2hhcGUpLmlzUmVxdWlyZWQ7XG5cbmZ1bmN0aW9uIHNlcXVlbmNlT2ZWYWxpZGF0b3IoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgc3BlY2lmaWVycyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIHNwZWNpZmllcnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIGlmIChzcGVjaWZpZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdzZXF1ZW5jZU9mOiBhdCBsZWFzdCBvbmUgc3BlY2lmaWVyIGlzIHJlcXVpcmVkJyk7XG4gIH1cblxuICB2YXIgZXJyb3JzID0gc3BlY2lmaWVycy5tYXAoZnVuY3Rpb24gKHNwZWNpZmllciwgaSkge1xuICAgIHJldHVybiBzcGVjaWZpZXJWYWxpZGF0b3Ioe1xuICAgICAgc3BlY2lmaWVyOiBzcGVjaWZpZXJcbiAgICB9LCAnc3BlY2lmaWVyJywgJ3NlcXVlbmNlT2Ygc3BlY2lmaWVyJywgXCJzdWVxdWVuY2VPZiBzcGVjaWZpZXIsIGluZGV4IFwiLmNvbmNhdChpKSwgXCJzcGVjaWZpZXIsIGluZGV4IFwiLmNvbmNhdChpKSk7XG4gIH0pO1xuXG4gIGlmIChlcnJvcnMuc29tZShCb29sZWFuKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXG4gICAgICBzZXF1ZW5jZU9mOiBhbGwgc3BlY2lmaWVycyBtdXN0IG1hdGNoIHRoZSBhcHByb3ByaWF0ZSBzaGFwZS5cXG5cXG4gICAgICBFcnJvcnM6XFxuICAgICAgICBcIi5jb25jYXQoZXJyb3JzLm1hcChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgcmV0dXJuIFwiIC0gQXJndW1lbnQgaW5kZXggXCIuY29uY2F0KGksIFwiOiBcIikuY29uY2F0KGUubWVzc2FnZSk7XG4gICAgfSkuam9pbignLFxcbiAgICAgICAgJyksIFwiXFxuICAgIFwiKSk7XG4gIH1cblxuICB2YXIgdmFsaWRhdG9yID0gZnVuY3Rpb24gc2VxdWVuY2VPZihwcm9wcywgcHJvcE5hbWUpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjMgPiAyID8gX2xlbjMgLSAyIDogMCksIF9rZXkzID0gMjsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgcmVzdFtfa2V5MyAtIDJdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICB2YXIgZXJyb3IgPSBfcHJvcFR5cGVzLmFycmF5LmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZV0uY29uY2F0KHJlc3QpKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZUNodW5rcy5hcHBseSh2b2lkIDAsIFtzcGVjaWZpZXJzLCBwcm9wcywgcHJvcE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gIH07XG5cbiAgdmFsaWRhdG9yLmlzUmVxdWlyZWQgPSBmdW5jdGlvbiBzZXF1ZW5jZU9mUmVxdWlyZWQocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW40ID4gMyA/IF9sZW40IC0gMyA6IDApLCBfa2V5NCA9IDM7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgIHJlc3RbX2tleTQgLSAzXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgfVxuXG4gICAgdmFyIGVycm9yID0gX3Byb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLmFwcGx5KF9wcm9wVHlwZXMuYXJyYXksIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVDaHVua3MuYXBwbHkodm9pZCAwLCBbc3BlY2lmaWVycywgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuICB9O1xuXG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKSh2YWxpZGF0b3IsICdzZXF1ZW5jZU9mJywgc3BlY2lmaWVycyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXF1ZW5jZU9mLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzaGFwZVZhbGlkYXRvcjtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oZWxwZXJzL2lzUGxhaW5PYmplY3RcIikpO1xuXG52YXIgX3dyYXBWYWxpZGF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hlbHBlcnMvd3JhcFZhbGlkYXRvclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzaGFwZVZhbGlkYXRvcihzaGFwZVR5cGVzKSB7XG4gIGlmICghKDAsIF9pc1BsYWluT2JqZWN0W1wiZGVmYXVsdFwiXSkoc2hhcGVUeXBlcykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzaGFwZSBtdXN0IGJlIGEgbm9ybWFsIG9iamVjdCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hhcGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbikge1xuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgICBpZiAocHJvcFZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gLy8gY29kZSBhZGFwdGVkIGZyb20gUHJvcFR5cGVzLnNoYXBlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8xNDE1NmU1NmI5Y2YxOGFjODY5NjMxODVjNWFmNGFiZGRmM2ZmODExL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvdHlwZXMvUmVhY3RQcm9wVHlwZXMuanMjTDM4MVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW4sIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiA0ID8gX2xlbiAtIDQgOiAwKSwgX2tleSA9IDQ7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHJlc3RbX2tleSAtIDRdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcblxuICAgICAgaWYgKGNoZWNrZXIpIHtcbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlci5hcHBseSh2b2lkIDAsIFtwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb25dLmNvbmNhdChyZXN0KSk7XG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzaGFwZS5pc1JlcXVpcmVkID0gZnVuY3Rpb24gc2hhcGVSZXF1aXJlZChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIjogXCIpLmNvbmNhdChwcm9wTmFtZSwgXCIgaXMgcmVxdWlyZWQuXCIpKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjIgPiAzID8gX2xlbjIgLSAzIDogMCksIF9rZXkyID0gMzsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgcmVzdFtfa2V5MiAtIDNdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhcGUuYXBwbHkodm9pZCAwLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuICB9O1xuXG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKShzaGFwZSwgJ3NoYXBlJywgc2hhcGVUeXBlcyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGFwZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gc3RyaW5nRW5kc1dpdGhWYWxpZGF0b3I7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHN0cmluZ0VuZHNXaXRoVmFsaWRhdG9yKGVuZCkge1xuICBpZiAodHlwZW9mIGVuZCAhPT0gJ3N0cmluZycgfHwgZW5kLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Egbm9uLWVtcHR5IHN0cmluZyBpcyByZXF1aXJlZCcpO1xuICB9XG5cbiAgdmFyIHZhbGlkYXRvciA9IGZ1bmN0aW9uIHN0cmluZ0VuZHNXaXRoKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgICBpZiAocHJvcFZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHJlc3RbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBzdHJpbmdFcnJvciA9IF9wcm9wVHlwZXMuc3RyaW5nLmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZV0uY29uY2F0KHJlc3QpKTtcblxuICAgIGlmIChzdHJpbmdFcnJvcikge1xuICAgICAgcmV0dXJuIHN0cmluZ0Vycm9yO1xuICAgIH1cblxuICAgIGlmICghcHJvcFZhbHVlLmVuZHNXaXRoKGVuZCkgfHwgcHJvcFZhbHVlLmxlbmd0aCA8PSBlbmQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIlwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIjogXCIpLmNvbmNhdChwcm9wTmFtZSwgXCIgZG9lcyBub3QgZW5kIHdpdGggXFxcIlwiKS5jb25jYXQoZW5kLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHZhbGlkYXRvci5pc1JlcXVpcmVkID0gZnVuY3Rpb24gcmVxdWlyZWRTdHJpbmdFbmRzV2l0aCgpIHtcbiAgICB2YXIgc3RyaW5nRXJyb3IgPSBfcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLmFwcGx5KF9wcm9wVHlwZXMuc3RyaW5nLCBhcmd1bWVudHMpO1xuXG4gICAgaWYgKHN0cmluZ0Vycm9yKSB7XG4gICAgICByZXR1cm4gc3RyaW5nRXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvci5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuICgwLCBfd3JhcFZhbGlkYXRvcltcImRlZmF1bHRcIl0pKHZhbGlkYXRvciwgXCJzdHJpbmdFbmRzV2l0aDogXCIuY29uY2F0KGVuZCkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RyaW5nRW5kc1dpdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHN0cmluZ1N0YXJ0c1dpdGhWYWxpZGF0b3I7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHN0cmluZ1N0YXJ0c1dpdGhWYWxpZGF0b3Ioc3RhcnQpIHtcbiAgaWYgKHR5cGVvZiBzdGFydCAhPT0gJ3N0cmluZycgfHwgc3RhcnQubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYSBub24tZW1wdHkgc3RyaW5nIGlzIHJlcXVpcmVkJyk7XG4gIH1cblxuICB2YXIgdmFsaWRhdG9yID0gZnVuY3Rpb24gc3RyaW5nU3RhcnRzV2l0aChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICByZXN0W19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgc3RyaW5nRXJyb3IgPSBfcHJvcFR5cGVzLnN0cmluZy5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG5cbiAgICBpZiAoc3RyaW5nRXJyb3IpIHtcbiAgICAgIHJldHVybiBzdHJpbmdFcnJvcjtcbiAgICB9XG5cbiAgICBpZiAoIXByb3BWYWx1ZS5zdGFydHNXaXRoKHN0YXJ0KSB8fCBwcm9wVmFsdWUubGVuZ3RoIDw9IHN0YXJ0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCI6IFwiKS5jb25jYXQocHJvcE5hbWUsIFwiIGRvZXMgbm90IHN0YXJ0IHdpdGggXFxcIlwiKS5jb25jYXQoc3RhcnQsIFwiXFxcIlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdmFsaWRhdG9yLmlzUmVxdWlyZWQgPSBmdW5jdGlvbiByZXF1aXJlZFN0cmluZ1N0YXJ0c1dpdGgoKSB7XG4gICAgdmFyIHN0cmluZ0Vycm9yID0gX3Byb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZC5hcHBseShfcHJvcFR5cGVzLnN0cmluZywgYXJndW1lbnRzKTtcblxuICAgIGlmIChzdHJpbmdFcnJvcikge1xuICAgICAgcmV0dXJuIHN0cmluZ0Vycm9yO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3IuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHJldHVybiAoMCwgX3dyYXBWYWxpZGF0b3JbXCJkZWZhdWx0XCJdKSh2YWxpZGF0b3IsIFwic3RyaW5nU3RhcnRzV2l0aDogXCIuY29uY2F0KHN0YXJ0KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJpbmdTdGFydHNXaXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHVuaXF1ZUNvdW50V2l0aFNldChhcnIpIHtcbiAgcmV0dXJuIG5ldyBTZXQoYXJyKS5zaXplO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG5mdW5jdGlvbiB1bmlxdWVDb3VudExlZ2FjeShhcnIpIHtcbiAgdmFyIHNlZW4gPSBbXTtcbiAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoc2Vlbi5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgc2Vlbi5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWVuLmxlbmd0aDtcbn1cblxudmFyIGdldFVuaXF1ZUNvdW50ID0gdHlwZW9mIFNldCA9PT0gJ2Z1bmN0aW9uJyA/IHVuaXF1ZUNvdW50V2l0aFNldCA6XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudW5pcXVlQ291bnRMZWdhY3k7XG5cbmZ1bmN0aW9uIHJlcXVpcmVkVW5pcXVlQXJyYXkocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZXN0W19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBfcHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQuYXBwbHkoX3Byb3BUeXBlcy5hcnJheSwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZV0uY29uY2F0KHJlc3QpKTtcblxuICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgdmFyIHVuaXF1ZUNvdW50ID0gZ2V0VW5pcXVlQ291bnQocHJvcFZhbHVlKTtcblxuICBpZiAodW5pcXVlQ291bnQgIT09IHByb3BWYWx1ZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IFJhbmdlRXJyb3IoXCJcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCI6IHZhbHVlcyBtdXN0IGJlIHVuaXF1ZS4gXCIpLmNvbmNhdChwcm9wVmFsdWUubGVuZ3RoIC0gdW5pcXVlQ291bnQsIFwiIGR1cGxpY2F0ZSB2YWx1ZXMgZm91bmQuXCIpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiB1bmlxdWVBcnJheShwcm9wcywgcHJvcE5hbWUpIHtcbiAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICBpZiAocHJvcFZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgcmVzdFtfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiByZXF1aXJlZFVuaXF1ZUFycmF5LmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZV0uY29uY2F0KHJlc3QpKTtcbn1cblxudW5pcXVlQXJyYXkuaXNSZXF1aXJlZCA9IHJlcXVpcmVkVW5pcXVlQXJyYXk7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICByZXR1cm4gKDAsIF93cmFwVmFsaWRhdG9yW1wiZGVmYXVsdFwiXSkodW5pcXVlQXJyYXksICd1bmlxdWVBcnJheScpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuaXF1ZUFycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB1bmlxdWVBcnJheU9mVHlwZVZhbGlkYXRvcjtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9hbmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FuZFwiKSk7XG5cbnZhciBfdW5pcXVlQXJyYXkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VuaXF1ZUFycmF5XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciB1bmlxdWUgPSAoMCwgX3VuaXF1ZUFycmF5W1wiZGVmYXVsdFwiXSkoKTtcblxuZnVuY3Rpb24gdW5pcXVlQXJyYXlPZlR5cGVWYWxpZGF0b3IodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0eXBlIG11c3QgYmUgYSB2YWxpZGF0b3IgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHZhciBtYXBwZXIgPSBudWxsO1xuICB2YXIgbmFtZSA9ICd1bmlxdWVBcnJheU9mVHlwZSc7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlc3RbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHJlc3QubGVuZ3RoID09PSAxKSB7XG4gICAgaWYgKHR5cGVvZiByZXN0WzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBtYXBwZXIgPSByZXN0WzBdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlc3RbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gcmVzdFswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignc2luZ2xlIGlucHV0IG11c3QgZWl0aGVyIGJlIHN0cmluZyBvciBmdW5jdGlvbicpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChyZXN0Lmxlbmd0aCA9PT0gMikge1xuICAgIGlmICh0eXBlb2YgcmVzdFswXSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmVzdFsxXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1hcHBlciA9IHJlc3RbMF07XG4gICAgICBuYW1lID0gcmVzdFsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbXVsdGlwbGUgaW5wdXRzIG11c3QgYmUgaW4gW2Z1bmN0aW9uLCBzdHJpbmddIG9yZGVyJyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHJlc3QubGVuZ3RoID4gMikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29ubHkgW10sIFtuYW1lXSwgW21hcHBlcl0sIGFuZCBbbWFwcGVyLCBuYW1lXSBhcmUgdmFsaWQgaW5wdXRzJyk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmlxdWVBcnJheU9mTWFwcGVkKHByb3BzLCBwcm9wTmFtZSkge1xuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgICBpZiAocHJvcFZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBwcm9wVmFsdWUubWFwKG1hcHBlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pcXVlLmFwcGx5KHZvaWQgMCwgW19vYmplY3RTcHJlYWQoe30sIHByb3BzLCBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BOYW1lLCB2YWx1ZXMpKSwgcHJvcE5hbWVdLmNvbmNhdChhcmdzKSk7XG4gIH1cblxuICB1bmlxdWVBcnJheU9mTWFwcGVkLmlzUmVxdWlyZWQgPSBmdW5jdGlvbiBpc1JlcXVpcmVkKHByb3BzLCBwcm9wTmFtZSkge1xuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAyID8gX2xlbjMgLSAyIDogMCksIF9rZXkzID0gMjsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5MyAtIDJdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICBpZiAocHJvcFZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBfcHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQuYXBwbHkoX3Byb3BUeXBlcy5hcnJheSwgW3Byb3BzLCBwcm9wTmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pcXVlQXJyYXlPZk1hcHBlZC5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWVdLmNvbmNhdChhcmdzKSk7XG4gIH07XG5cbiAgdmFyIGFycmF5VmFsaWRhdG9yID0gKDAsIF9wcm9wVHlwZXMuYXJyYXlPZikodHlwZSk7XG4gIHZhciB1bmlxdWVWYWxpZGF0b3IgPSBtYXBwZXIgPyB1bmlxdWVBcnJheU9mTWFwcGVkIDogdW5pcXVlO1xuICB2YXIgdmFsaWRhdG9yID0gKDAsIF9hbmRbXCJkZWZhdWx0XCJdKShbYXJyYXlWYWxpZGF0b3IsIHVuaXF1ZVZhbGlkYXRvcl0sIG5hbWUpO1xuICB2YWxpZGF0b3IuaXNSZXF1aXJlZCA9ICgwLCBfYW5kW1wiZGVmYXVsdFwiXSkoW3VuaXF1ZVZhbGlkYXRvci5pc1JlcXVpcmVkLCBhcnJheVZhbGlkYXRvci5pc1JlcXVpcmVkXSwgXCJcIi5jb25jYXQobmFtZSwgXCIuaXNSZXF1aXJlZFwiKSk7XG4gIHJldHVybiB2YWxpZGF0b3I7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bmlxdWVBcnJheU9mLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2YWx1ZXNPZlZhbGlkYXRvcjtcblxudmFyIF9pc1ByaW1pdGl2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy9pc1ByaW1pdGl2ZVwiKSk7XG5cbnZhciBfd3JhcFZhbGlkYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGVscGVycy93cmFwVmFsaWRhdG9yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8vIGNvZGUgYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzE0MTU2ZTU2YjljZjE4YWM4Njk2MzE4NWM1YWY0YWJkZGYzZmY4MTEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy90eXBlcy9SZWFjdFByb3BUeXBlcy5qcyNMMzA3LUwzNDBcbmZ1bmN0aW9uIHZhbHVlc09mVmFsaWRhdG9yKHByb3BUeXBlKSB7XG4gIGlmICh0eXBlb2YgcHJvcFR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvYmplY3RPZjogcHJvcFR5cGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgdmFsaWRhdG9yID0gZnVuY3Rpb24gdmFsdWVzT2YocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDUgPyBfbGVuIC0gNSA6IDApLCBfa2V5ID0gNTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcmVzdFtfa2V5IC0gNV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICAgIGlmIChwcm9wVmFsdWUgPT0gbnVsbCB8fCAoMCwgX2lzUHJpbWl0aXZlW1wiZGVmYXVsdFwiXSkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0RXJyb3I7XG4gICAgT2JqZWN0LmtleXMocHJvcFZhbHVlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGZpcnN0RXJyb3IgPSBwcm9wVHlwZS5hcHBseSh2b2lkIDAsIFtwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIFwiXCIuY29uY2F0KHByb3BGdWxsTmFtZSwgXCIuXCIpLmNvbmNhdChrZXkpXS5jb25jYXQocmVzdCkpO1xuICAgICAgcmV0dXJuIGZpcnN0RXJyb3I7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpcnN0RXJyb3IgfHwgbnVsbDtcbiAgfTtcblxuICB2YWxpZGF0b3IuaXNSZXF1aXJlZCA9IGZ1bmN0aW9uIHZhbHVlc09mUmVxdWlyZWQocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICAgIGlmIChwcm9wVmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCI6IFwiKS5jb25jYXQocHJvcE5hbWUsIFwiIGlzIHJlcXVpcmVkLlwiKSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4yID4gMyA/IF9sZW4yIC0gMyA6IDApLCBfa2V5MiA9IDM7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIHJlc3RbX2tleTIgLSAzXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvci5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gIH07XG5cbiAgcmV0dXJuICgwLCBfd3JhcFZhbGlkYXRvcltcImRlZmF1bHRcIl0pKHZhbGlkYXRvciwgJ3ZhbHVlc09mJywgcHJvcFR5cGUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmFsdWVzT2YuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHdpdGhTaGFwZTtcblxudmFyIF9hbmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FuZFwiKSk7XG5cbnZhciBfc2hhcGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NoYXBlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHdpdGhTaGFwZSh0eXBlLCBzaGFwZVR5cGVzKSB7XG4gIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3R5cGUgbXVzdCBiZSBhIHZhbGlkIFByb3BUeXBlJyk7XG4gIH1cblxuICB2YXIgc2hhcGVWYWxpZGF0b3IgPSAoMCwgX3NoYXBlW1wiZGVmYXVsdFwiXSkoc2hhcGVUeXBlcyk7XG4gIHJldHVybiAoMCwgX2FuZFtcImRlZmF1bHRcIl0pKFt0eXBlLCBzaGFwZVZhbGlkYXRvcl0sICd3aXRoU2hhcGUnKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGhTaGFwZS5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyByZXF1aXJlKCcuL2J1aWxkL21vY2tzJykgOiByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIFRvT2JqZWN0ID0gcmVxdWlyZSgnZXMtYWJzdHJhY3QvMjAxOS9Ub09iamVjdCcpO1xudmFyIFRvTGVuZ3RoID0gcmVxdWlyZSgnZXMtYWJzdHJhY3QvMjAxOS9Ub0xlbmd0aCcpO1xudmFyIElzQ2FsbGFibGUgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC8yMDE5L0lzQ2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuXHR2YXIgbGlzdCA9IFRvT2JqZWN0KHRoaXMpO1xuXHR2YXIgbGVuZ3RoID0gVG9MZW5ndGgobGlzdC5sZW5ndGgpO1xuXHRpZiAoIUlzQ2FsbGFibGUocHJlZGljYXRlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5I2ZpbmQ6IHByZWRpY2F0ZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0fVxuXHRpZiAobGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHZvaWQgMDtcblx0fVxuXHR2YXIgdGhpc0FyZztcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0dGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwLCB2YWx1ZTsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsdWUgPSBsaXN0W2ldO1xuXHRcdC8vIGlubGluZWQgZm9yIHBlcmZvcm1hbmNlOiBpZiAoQ2FsbChwcmVkaWNhdGUsIHRoaXNBcmcsIFt2YWx1ZSwgaSwgbGlzdF0pKSB7XG5cdFx0aWYgKHByZWRpY2F0ZS5hcHBseSh0aGlzQXJnLCBbdmFsdWUsIGksIGxpc3RdKSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdm9pZCAwO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgUmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0LzIwMTkvUmVxdWlyZU9iamVjdENvZXJjaWJsZScpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cbnZhciBib3VuZEZpbmRTaGltID0gZnVuY3Rpb24gZmluZChhcnJheSwgcHJlZGljYXRlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0UmVxdWlyZU9iamVjdENvZXJjaWJsZShhcnJheSk7XG5cdHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXHRyZXR1cm4gcG9seWZpbGwuYXBwbHkoYXJyYXksIGFyZ3MpO1xufTtcblxuZGVmaW5lKGJvdW5kRmluZFNoaW0sIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5kRmluZFNoaW07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy05LjExXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi81L0NoZWNrT2JqZWN0Q29lcmNpYmxlJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBFUzVUb0ludGVnZXIgPSByZXF1aXJlKCcuLi81L1RvSW50ZWdlcicpO1xuXG52YXIgVG9OdW1iZXIgPSByZXF1aXJlKCcuL1RvTnVtYmVyJyk7XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9pbnRlZ2VyXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9JbnRlZ2VyKHZhbHVlKSB7XG5cdHZhciBudW1iZXIgPSBUb051bWJlcih2YWx1ZSk7XG5cdHJldHVybiBFUzVUb0ludGVnZXIobnVtYmVyKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gcmVxdWlyZSgnLi4vaGVscGVycy9tYXhTYWZlSW50ZWdlcicpO1xuXG52YXIgVG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9Ub0ludGVnZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb0xlbmd0aChhcmd1bWVudCkge1xuXHR2YXIgbGVuID0gVG9JbnRlZ2VyKGFyZ3VtZW50KTtcblx0aWYgKGxlbiA8PSAwKSB7IHJldHVybiAwOyB9IC8vIGluY2x1ZGVzIGNvbnZlcnRpbmcgLTAgdG8gKzBcblx0aWYgKGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHsgcmV0dXJuIE1BWF9TQUZFX0lOVEVHRVI7IH1cblx0cmV0dXJuIGxlbjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJE51bWJlciA9IEdldEludHJpbnNpYygnJU51bWJlciUnKTtcbnZhciAkUmVnRXhwID0gR2V0SW50cmluc2ljKCclUmVnRXhwJScpO1xudmFyICRwYXJzZUludGVnZXIgPSBHZXRJbnRyaW5zaWMoJyVwYXJzZUludCUnKTtcblxudmFyIGNhbGxCb3VuZCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY2FsbEJvdW5kJyk7XG52YXIgcmVnZXhUZXN0ZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3JlZ2V4VGVzdGVyJyk7XG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG5cbnZhciAkc3RyU2xpY2UgPSBjYWxsQm91bmQoJ1N0cmluZy5wcm90b3R5cGUuc2xpY2UnKTtcbnZhciBpc0JpbmFyeSA9IHJlZ2V4VGVzdGVyKC9eMGJbMDFdKyQvaSk7XG52YXIgaXNPY3RhbCA9IHJlZ2V4VGVzdGVyKC9eMG9bMC03XSskL2kpO1xudmFyIGlzSW52YWxpZEhleExpdGVyYWwgPSByZWdleFRlc3RlcigvXlstK10weFswLTlhLWZdKyQvaSk7XG52YXIgbm9uV1MgPSBbJ1xcdTAwODUnLCAnXFx1MjAwYicsICdcXHVmZmZlJ10uam9pbignJyk7XG52YXIgbm9uV1NyZWdleCA9IG5ldyAkUmVnRXhwKCdbJyArIG5vbldTICsgJ10nLCAnZycpO1xudmFyIGhhc05vbldTID0gcmVnZXhUZXN0ZXIobm9uV1NyZWdleCk7XG5cbi8vIHdoaXRlc3BhY2UgZnJvbTogaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4MTUuNS40LjIwXG4vLyBpbXBsZW1lbnRhdGlvbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL3YzLjQuMC9lczUtc2hpbS5qcyNMMTMwNC1MMTMyNFxudmFyIHdzID0gW1xuXHQnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnLFxuXHQnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjgnLFxuXHQnXFx1MjAyOVxcdUZFRkYnXG5dLmpvaW4oJycpO1xudmFyIHRyaW1SZWdleCA9IG5ldyBSZWdFeHAoJyheWycgKyB3cyArICddKyl8KFsnICsgd3MgKyAnXSskKScsICdnJyk7XG52YXIgJHJlcGxhY2UgPSBjYWxsQm91bmQoJ1N0cmluZy5wcm90b3R5cGUucmVwbGFjZScpO1xudmFyICR0cmltID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiAkcmVwbGFjZSh2YWx1ZSwgdHJpbVJlZ2V4LCAnJyk7XG59O1xuXG52YXIgVG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL1RvUHJpbWl0aXZlJyk7XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9udW1iZXJcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb051bWJlcihhcmd1bWVudCkge1xuXHR2YXIgdmFsdWUgPSBpc1ByaW1pdGl2ZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IFRvUHJpbWl0aXZlKGFyZ3VtZW50LCAkTnVtYmVyKTtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBudW1iZXInKTtcblx0fVxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdGlmIChpc0JpbmFyeSh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBUb051bWJlcigkcGFyc2VJbnRlZ2VyKCRzdHJTbGljZSh2YWx1ZSwgMiksIDIpKTtcblx0XHR9IGVsc2UgaWYgKGlzT2N0YWwodmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gVG9OdW1iZXIoJHBhcnNlSW50ZWdlcigkc3RyU2xpY2UodmFsdWUsIDIpLCA4KSk7XG5cdFx0fSBlbHNlIGlmIChoYXNOb25XUyh2YWx1ZSkgfHwgaXNJbnZhbGlkSGV4TGl0ZXJhbCh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBOYU47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB0cmltbWVkID0gJHRyaW0odmFsdWUpO1xuXHRcdFx0aWYgKHRyaW1tZWQgIT09IHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBUb051bWJlcih0cmltbWVkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuICROdW1iZXIodmFsdWUpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4uL0dldEludHJpbnNpYycpO1xuXG52YXIgJE9iamVjdCA9IEdldEludHJpbnNpYygnJU9iamVjdCUnKTtcblxudmFyIFJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuL1JlcXVpcmVPYmplY3RDb2VyY2libGUnKTtcblxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b29iamVjdFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFJlcXVpcmVPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRyZXR1cm4gJE9iamVjdCh2YWx1ZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXMyMDE1Jyk7XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9wcmltaXRpdmVcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCkge1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRyZXR1cm4gdG9QcmltaXRpdmUoaW5wdXQsIGFyZ3VtZW50c1sxXSk7XG5cdH1cblx0cmV0dXJuIHRvUHJpbWl0aXZlKGlucHV0KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG5cbi8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy05LjEwXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gQ2hlY2tPYmplY3RDb2VyY2libGUodmFsdWUsIG9wdE1lc3NhZ2UpIHtcblx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcihvcHRNZXNzYWdlIHx8ICgnQ2Fubm90IGNhbGwgbWV0aG9kIG9uICcgKyB2YWx1ZSkpO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRNYXRoID0gR2V0SW50cmluc2ljKCclTWF0aCUnKTtcblxudmFyIFRvTnVtYmVyID0gcmVxdWlyZSgnLi9Ub051bWJlcicpO1xudmFyICRpc05hTiA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNOYU4nKTtcbnZhciAkaXNGaW5pdGUgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzRmluaXRlJyk7XG52YXIgJHNpZ24gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3NpZ24nKTtcblxudmFyICRmbG9vciA9ICRNYXRoLmZsb29yO1xudmFyICRhYnMgPSAkTWF0aC5hYnM7XG5cbi8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy05LjRcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb0ludGVnZXIodmFsdWUpIHtcblx0dmFyIG51bWJlciA9IFRvTnVtYmVyKHZhbHVlKTtcblx0aWYgKCRpc05hTihudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdGlmIChudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiBudW1iZXI7IH1cblx0cmV0dXJuICRzaWduKG51bWJlcikgKiAkZmxvb3IoJGFicyhudW1iZXIpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy05LjNcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb051bWJlcih2YWx1ZSkge1xuXHRyZXR1cm4gK3ZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWxzXG5cdEF0b21pY3MsXG5cdFNoYXJlZEFycmF5QnVmZmVyLFxuKi9cblxudmFyIHVuZGVmaW5lZDtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbnZhciAkZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5pZiAoJGdPUEQpIHtcblx0dHJ5IHtcblx0XHQkZ09QRCh7fSwgJycpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0JGdPUEQgPSBudWxsOyAvLyB0aGlzIGlzIElFIDgsIHdoaWNoIGhhcyBhIGJyb2tlbiBnT1BEXG5cdH1cbn1cblxudmFyIHRocm93VHlwZUVycm9yID0gZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgJFR5cGVFcnJvcigpOyB9O1xudmFyIFRocm93VHlwZUVycm9yID0gJGdPUERcblx0PyAoZnVuY3Rpb24gKCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zLCBuby1jYWxsZXIsIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllc1xuXHRcdFx0YXJndW1lbnRzLmNhbGxlZTsgLy8gSUUgOCBkb2VzIG5vdCB0aHJvdyBoZXJlXG5cdFx0XHRyZXR1cm4gdGhyb3dUeXBlRXJyb3I7XG5cdFx0fSBjYXRjaCAoY2FsbGVlVGhyb3dzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBJRSA4IHRocm93cyBvbiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFyZ3VtZW50cywgJycpXG5cdFx0XHRcdHJldHVybiAkZ09QRChhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7XG5cdFx0XHR9IGNhdGNoIChnT1BEdGhyb3dzKSB7XG5cdFx0XHRcdHJldHVybiB0aHJvd1R5cGVFcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH0oKSlcblx0OiB0aHJvd1R5cGVFcnJvcjtcblxudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG5cbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5fX3Byb3RvX187IH07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblxudmFyIGdlbmVyYXRvcjsgLy8gPSBmdW5jdGlvbiAqICgpIHt9O1xudmFyIGdlbmVyYXRvckZ1bmN0aW9uID0gZ2VuZXJhdG9yID8gZ2V0UHJvdG8oZ2VuZXJhdG9yKSA6IHVuZGVmaW5lZDtcbnZhciBhc3luY0ZuOyAvLyBhc3luYyBmdW5jdGlvbigpIHt9O1xudmFyIGFzeW5jRnVuY3Rpb24gPSBhc3luY0ZuID8gYXN5bmNGbi5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZDtcbnZhciBhc3luY0dlbjsgLy8gYXN5bmMgZnVuY3Rpb24gKiAoKSB7fTtcbnZhciBhc3luY0dlbkZ1bmN0aW9uID0gYXN5bmNHZW4gPyBnZXRQcm90byhhc3luY0dlbikgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNHZW5JdGVyYXRvciA9IGFzeW5jR2VuID8gYXN5bmNHZW4oKSA6IHVuZGVmaW5lZDtcblxudmFyIFR5cGVkQXJyYXkgPSB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBnZXRQcm90byhVaW50OEFycmF5KTtcblxudmFyIElOVFJJTlNJQ1MgPSB7XG5cdCclQXJyYXklJzogQXJyYXksXG5cdCclQXJyYXlCdWZmZXIlJzogdHlwZW9mIEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEFycmF5QnVmZmVyLFxuXHQnJUFycmF5QnVmZmVyUHJvdG90eXBlJSc6IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBcnJheUJ1ZmZlci5wcm90b3R5cGUsXG5cdCclQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyVBcnJheVByb3RvdHlwZSUnOiBBcnJheS5wcm90b3R5cGUsXG5cdCclQXJyYXlQcm90b19lbnRyaWVzJSc6IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzLFxuXHQnJUFycmF5UHJvdG9fZm9yRWFjaCUnOiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCxcblx0JyVBcnJheVByb3RvX2tleXMlJzogQXJyYXkucHJvdG90eXBlLmtleXMsXG5cdCclQXJyYXlQcm90b192YWx1ZXMlJzogQXJyYXkucHJvdG90eXBlLnZhbHVlcyxcblx0JyVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJUFzeW5jRnVuY3Rpb24lJzogYXN5bmNGdW5jdGlvbixcblx0JyVBc3luY0Z1bmN0aW9uUHJvdG90eXBlJSc6IGFzeW5jRnVuY3Rpb24gPyBhc3luY0Z1bmN0aW9uLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyVBc3luY0dlbmVyYXRvciUnOiBhc3luY0dlbiA/IGdldFByb3RvKGFzeW5jR2VuSXRlcmF0b3IpIDogdW5kZWZpbmVkLFxuXHQnJUFzeW5jR2VuZXJhdG9yRnVuY3Rpb24lJzogYXN5bmNHZW5GdW5jdGlvbixcblx0JyVBc3luY0dlbmVyYXRvclByb3RvdHlwZSUnOiBhc3luY0dlbkZ1bmN0aW9uID8gYXN5bmNHZW5GdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCclQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiBhc3luY0dlbkl0ZXJhdG9yICYmIGhhc1N5bWJvbHMgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IgPyBhc3luY0dlbkl0ZXJhdG9yW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDogdW5kZWZpbmVkLFxuXHQnJUF0b21pY3MlJzogdHlwZW9mIEF0b21pY3MgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXRvbWljcyxcblx0JyVCb29sZWFuJSc6IEJvb2xlYW4sXG5cdCclQm9vbGVhblByb3RvdHlwZSUnOiBCb29sZWFuLnByb3RvdHlwZSxcblx0JyVEYXRhVmlldyUnOiB0eXBlb2YgRGF0YVZpZXcgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRGF0YVZpZXcsXG5cdCclRGF0YVZpZXdQcm90b3R5cGUlJzogdHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IERhdGFWaWV3LnByb3RvdHlwZSxcblx0JyVEYXRlJSc6IERhdGUsXG5cdCclRGF0ZVByb3RvdHlwZSUnOiBEYXRlLnByb3RvdHlwZSxcblx0JyVkZWNvZGVVUkklJzogZGVjb2RlVVJJLFxuXHQnJWRlY29kZVVSSUNvbXBvbmVudCUnOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdCclZW5jb2RlVVJJJSc6IGVuY29kZVVSSSxcblx0JyVlbmNvZGVVUklDb21wb25lbnQlJzogZW5jb2RlVVJJQ29tcG9uZW50LFxuXHQnJUVycm9yJSc6IEVycm9yLFxuXHQnJUVycm9yUHJvdG90eXBlJSc6IEVycm9yLnByb3RvdHlwZSxcblx0JyVldmFsJSc6IGV2YWwsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuXHQnJUV2YWxFcnJvciUnOiBFdmFsRXJyb3IsXG5cdCclRXZhbEVycm9yUHJvdG90eXBlJSc6IEV2YWxFcnJvci5wcm90b3R5cGUsXG5cdCclRmxvYXQzMkFycmF5JSc6IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQzMkFycmF5LFxuXHQnJUZsb2F0MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheS5wcm90b3R5cGUsXG5cdCclRmxvYXQ2NEFycmF5JSc6IHR5cGVvZiBGbG9hdDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQ2NEFycmF5LFxuXHQnJUZsb2F0NjRBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgRmxvYXQ2NEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0NjRBcnJheS5wcm90b3R5cGUsXG5cdCclRnVuY3Rpb24lJzogRnVuY3Rpb24sXG5cdCclRnVuY3Rpb25Qcm90b3R5cGUlJzogRnVuY3Rpb24ucHJvdG90eXBlLFxuXHQnJUdlbmVyYXRvciUnOiBnZW5lcmF0b3IgPyBnZXRQcm90byhnZW5lcmF0b3IoKSkgOiB1bmRlZmluZWQsXG5cdCclR2VuZXJhdG9yRnVuY3Rpb24lJzogZ2VuZXJhdG9yRnVuY3Rpb24sXG5cdCclR2VuZXJhdG9yUHJvdG90eXBlJSc6IGdlbmVyYXRvckZ1bmN0aW9uID8gZ2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJUludDhBcnJheSUnOiB0eXBlb2YgSW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDhBcnJheSxcblx0JyVJbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJUludDE2QXJyYXklJzogdHlwZW9mIEludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MTZBcnJheSxcblx0JyVJbnQxNkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBJbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDhBcnJheS5wcm90b3R5cGUsXG5cdCclSW50MzJBcnJheSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LFxuXHQnJUludDMyQXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MzJBcnJheS5wcm90b3R5cGUsXG5cdCclaXNGaW5pdGUlJzogaXNGaW5pdGUsXG5cdCclaXNOYU4lJzogaXNOYU4sXG5cdCclSXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKGdldFByb3RvKFtdW1N5bWJvbC5pdGVyYXRvcl0oKSkpIDogdW5kZWZpbmVkLFxuXHQnJUpTT04lJzogdHlwZW9mIEpTT04gPT09ICdvYmplY3QnID8gSlNPTiA6IHVuZGVmaW5lZCxcblx0JyVKU09OUGFyc2UlJzogdHlwZW9mIEpTT04gPT09ICdvYmplY3QnID8gSlNPTi5wYXJzZSA6IHVuZGVmaW5lZCxcblx0JyVNYXAlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBNYXAsXG5cdCclTWFwSXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgTWFwKClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyVNYXBQcm90b3R5cGUlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBNYXAucHJvdG90eXBlLFxuXHQnJU1hdGglJzogTWF0aCxcblx0JyVOdW1iZXIlJzogTnVtYmVyLFxuXHQnJU51bWJlclByb3RvdHlwZSUnOiBOdW1iZXIucHJvdG90eXBlLFxuXHQnJU9iamVjdCUnOiBPYmplY3QsXG5cdCclT2JqZWN0UHJvdG90eXBlJSc6IE9iamVjdC5wcm90b3R5cGUsXG5cdCclT2JqUHJvdG9fdG9TdHJpbmclJzogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcblx0JyVPYmpQcm90b192YWx1ZU9mJSc6IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZixcblx0JyVwYXJzZUZsb2F0JSc6IHBhcnNlRmxvYXQsXG5cdCclcGFyc2VJbnQlJzogcGFyc2VJbnQsXG5cdCclUHJvbWlzZSUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLFxuXHQnJVByb21pc2VQcm90b3R5cGUlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5wcm90b3R5cGUsXG5cdCclUHJvbWlzZVByb3RvX3RoZW4lJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5wcm90b3R5cGUudGhlbixcblx0JyVQcm9taXNlX2FsbCUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLmFsbCxcblx0JyVQcm9taXNlX3JlamVjdCUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLnJlamVjdCxcblx0JyVQcm9taXNlX3Jlc29sdmUlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZXNvbHZlLFxuXHQnJVByb3h5JSc6IHR5cGVvZiBQcm94eSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm94eSxcblx0JyVSYW5nZUVycm9yJSc6IFJhbmdlRXJyb3IsXG5cdCclUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBSYW5nZUVycm9yLnByb3RvdHlwZSxcblx0JyVSZWZlcmVuY2VFcnJvciUnOiBSZWZlcmVuY2VFcnJvcixcblx0JyVSZWZlcmVuY2VFcnJvclByb3RvdHlwZSUnOiBSZWZlcmVuY2VFcnJvci5wcm90b3R5cGUsXG5cdCclUmVmbGVjdCUnOiB0eXBlb2YgUmVmbGVjdCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBSZWZsZWN0LFxuXHQnJVJlZ0V4cCUnOiBSZWdFeHAsXG5cdCclUmVnRXhwUHJvdG90eXBlJSc6IFJlZ0V4cC5wcm90b3R5cGUsXG5cdCclU2V0JSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LFxuXHQnJVNldEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IFNldCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclU2V0UHJvdG90eXBlJSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LnByb3RvdHlwZSxcblx0JyVTaGFyZWRBcnJheUJ1ZmZlciUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIsXG5cdCclU2hhcmVkQXJyYXlCdWZmZXJQcm90b3R5cGUlJzogdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNoYXJlZEFycmF5QnVmZmVyLnByb3RvdHlwZSxcblx0JyVTdHJpbmclJzogU3RyaW5nLFxuXHQnJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90bygnJ1tTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJVN0cmluZ1Byb3RvdHlwZSUnOiBTdHJpbmcucHJvdG90eXBlLFxuXHQnJVN5bWJvbCUnOiBoYXNTeW1ib2xzID8gU3ltYm9sIDogdW5kZWZpbmVkLFxuXHQnJVN5bWJvbFByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyVTeW50YXhFcnJvciUnOiBTeW50YXhFcnJvcixcblx0JyVTeW50YXhFcnJvclByb3RvdHlwZSUnOiBTeW50YXhFcnJvci5wcm90b3R5cGUsXG5cdCclVGhyb3dUeXBlRXJyb3IlJzogVGhyb3dUeXBlRXJyb3IsXG5cdCclVHlwZWRBcnJheSUnOiBUeXBlZEFycmF5LFxuXHQnJVR5cGVkQXJyYXlQcm90b3R5cGUlJzogVHlwZWRBcnJheSA/IFR5cGVkQXJyYXkucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJVR5cGVFcnJvciUnOiAkVHlwZUVycm9yLFxuXHQnJVR5cGVFcnJvclByb3RvdHlwZSUnOiAkVHlwZUVycm9yLnByb3RvdHlwZSxcblx0JyVVaW50OEFycmF5JSc6IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4QXJyYXksXG5cdCclVWludDhBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OEFycmF5LnByb3RvdHlwZSxcblx0JyVVaW50OENsYW1wZWRBcnJheSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXksXG5cdCclVWludDhDbGFtcGVkQXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4Q2xhbXBlZEFycmF5LnByb3RvdHlwZSxcblx0JyVVaW50MTZBcnJheSUnOiB0eXBlb2YgVWludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDE2QXJyYXksXG5cdCclVWludDE2QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LnByb3RvdHlwZSxcblx0JyVVaW50MzJBcnJheSUnOiB0eXBlb2YgVWludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDMyQXJyYXksXG5cdCclVWludDMyQXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQzMkFycmF5LnByb3RvdHlwZSxcblx0JyVVUklFcnJvciUnOiBVUklFcnJvcixcblx0JyVVUklFcnJvclByb3RvdHlwZSUnOiBVUklFcnJvci5wcm90b3R5cGUsXG5cdCclV2Vha01hcCUnOiB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrTWFwLFxuXHQnJVdlYWtNYXBQcm90b3R5cGUlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcC5wcm90b3R5cGUsXG5cdCclV2Vha1NldCUnOiB0eXBlb2YgV2Vha1NldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrU2V0LFxuXHQnJVdlYWtTZXRQcm90b3R5cGUlJzogdHlwZW9mIFdlYWtTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1NldC5wcm90b3R5cGVcbn07XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyICRyZXBsYWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG5cbi8qIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iLzQuMTcuMTUvZGlzdC9sb2Rhc2guanMjTDY3MzUtTDY3NDQgKi9cbnZhciByZVByb3BOYW1lID0gL1teJS5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwlJCkpL2c7XG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7IC8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IGZ1bmN0aW9uIHN0cmluZ1RvUGF0aChzdHJpbmcpIHtcblx0dmFyIHJlc3VsdCA9IFtdO1xuXHQkcmVwbGFjZShzdHJpbmcsIHJlUHJvcE5hbWUsIGZ1bmN0aW9uIChtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG5cdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gcXVvdGUgPyAkcmVwbGFjZShzdWJTdHJpbmcsIHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKTtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xuLyogZW5kIGFkYXB0YXRpb24gKi9cblxudmFyIGdldEJhc2VJbnRyaW5zaWMgPSBmdW5jdGlvbiBnZXRCYXNlSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHRpZiAoIShuYW1lIGluIElOVFJJTlNJQ1MpKSB7XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGRvZXMgbm90IGV4aXN0IScpO1xuXHR9XG5cblx0Ly8gaXN0YW5idWwgaWdub3JlIGlmIC8vIGhvcGVmdWxseSB0aGlzIGlzIGltcG9zc2libGUgdG8gdGVzdCA6LSlcblx0aWYgKHR5cGVvZiBJTlRSSU5TSUNTW25hbWVdID09PSAndW5kZWZpbmVkJyAmJiAhYWxsb3dNaXNzaW5nKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZXhpc3RzLCBidXQgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGZpbGUgYW4gaXNzdWUhJyk7XG5cdH1cblxuXHRyZXR1cm4gSU5UUklOU0lDU1tuYW1lXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gR2V0SW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHRpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaW50cmluc2ljIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcblx0fVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFsbG93TWlzc2luZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignXCJhbGxvd01pc3NpbmdcIiBhcmd1bWVudCBtdXN0IGJlIGEgYm9vbGVhbicpO1xuXHR9XG5cblx0dmFyIHBhcnRzID0gc3RyaW5nVG9QYXRoKG5hbWUpO1xuXG5cdHZhciB2YWx1ZSA9IGdldEJhc2VJbnRyaW5zaWMoJyUnICsgKHBhcnRzLmxlbmd0aCA+IDAgPyBwYXJ0c1swXSA6ICcnKSArICclJywgYWxsb3dNaXNzaW5nKTtcblx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoJGdPUEQgJiYgKGkgKyAxKSA+PSBwYXJ0cy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGRlc2MgPSAkZ09QRCh2YWx1ZSwgcGFydHNbaV0pO1xuXHRcdFx0XHRpZiAoIWFsbG93TWlzc2luZyAmJiAhKHBhcnRzW2ldIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdiYXNlIGludHJpbnNpYyBmb3IgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IHRoZSBwcm9wZXJ0eSBpcyBub3QgYXZhaWxhYmxlLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbHVlID0gZGVzYyA/IChkZXNjLmdldCB8fCBkZXNjLnZhbHVlKSA6IHZhbHVlW3BhcnRzW2ldXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWVbcGFydHNbaV1dO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4uL0dldEludHJpbnNpYycpO1xuXG52YXIgJGFwcGx5ID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5JScpO1xudmFyICRjYWxsID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwlJyk7XG52YXIgJHJlZmxlY3RBcHBseSA9IEdldEludHJpbnNpYygnJVJlZmxlY3QuYXBwbHklJywgdHJ1ZSkgfHwgYmluZC5jYWxsKCRjYWxsLCAkYXBwbHkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCaW5kKCkge1xuXHRyZXR1cm4gJHJlZmxlY3RBcHBseShiaW5kLCAkY2FsbCwgYXJndW1lbnRzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmFwcGx5ID0gZnVuY3Rpb24gYXBwbHlCaW5kKCkge1xuXHRyZXR1cm4gJHJlZmxlY3RBcHBseShiaW5kLCAkYXBwbHksIGFyZ3VtZW50cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi4vR2V0SW50cmluc2ljJyk7XG5cbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vY2FsbEJpbmQnKTtcblxudmFyICRpbmRleE9mID0gY2FsbEJpbmQoR2V0SW50cmluc2ljKCdTdHJpbmcucHJvdG90eXBlLmluZGV4T2YnKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbEJvdW5kSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHR2YXIgaW50cmluc2ljID0gR2V0SW50cmluc2ljKG5hbWUsICEhYWxsb3dNaXNzaW5nKTtcblx0aWYgKHR5cGVvZiBpbnRyaW5zaWMgPT09ICdmdW5jdGlvbicgJiYgJGluZGV4T2YobmFtZSwgJy5wcm90b3R5cGUuJykpIHtcblx0XHRyZXR1cm4gY2FsbEJpbmQoaW50cmluc2ljKTtcblx0fVxuXHRyZXR1cm4gaW50cmluc2ljO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyICRpc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSAhPT0gYTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiAhJGlzTmFOKHgpICYmIHggIT09IEluZmluaXR5ICYmIHggIT09IC1JbmZpbml0eTsgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gaXNOYU4oYSkge1xuXHRyZXR1cm4gYSAhPT0gYTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi4vR2V0SW50cmluc2ljJyk7XG5cbnZhciAkTWF0aCA9IEdldEludHJpbnNpYygnJU1hdGglJyk7XG52YXIgJE51bWJlciA9IEdldEludHJpbnNpYygnJU51bWJlciUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAkTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgJE1hdGgucG93KDIsIDUzKSAtIDE7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICR0ZXN0ID0gR2V0SW50cmluc2ljKCdSZWdFeHAucHJvdG90eXBlLnRlc3QnKTtcblxudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnLi9jYWxsQmluZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlZ2V4VGVzdGVyKHJlZ2V4KSB7XG5cdHJldHVybiBjYWxsQmluZCgkdGVzdCwgcmVnZXgpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaWduKG51bWJlcikge1xuXHRyZXR1cm4gbnVtYmVyID49IDAgPyAxIDogLTE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHQvLyBEZXRlY3QgaWYgYW4gaW1wbGVtZW50YXRpb24gZXhpc3RzXG5cdC8vIERldGVjdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgd2hpY2ggc2tpcHBlZCBob2xlcyBpbiBzcGFyc2UgYXJyYXlzXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zcGFyc2UtYXJyYXlzXG5cdHZhciBpbXBsZW1lbnRlZCA9IEFycmF5LnByb3RvdHlwZS5maW5kICYmIFssIDFdLmZpbmQoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9KSAhPT0gMTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2xvYmFsLXJlcXVpcmVcblx0cmV0dXJuIGltcGxlbWVudGVkID8gQXJyYXkucHJvdG90eXBlLmZpbmQgOiByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltQXJyYXlQcm90b3R5cGVGaW5kKCkge1xuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG5cdGRlZmluZShBcnJheS5wcm90b3R5cGUsIHsgZmluZDogcG9seWZpbGwgfSwge1xuXHRcdGZpbmQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZmluZCAhPT0gcG9seWZpbGw7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuIiwidmFyIENBTl9VU0VfRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuLy8gQWRhcHRlZCBmcm9tIE1vZGVybml6clxuLy8gaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9hY2IzZjBkOS9mZWF0dXJlLWRldGVjdHMvZG9tL3Bhc3NpdmVldmVudGxpc3RlbmVycy5qcyNMMjYtTDM3XG5mdW5jdGlvbiB0ZXN0UGFzc2l2ZUV2ZW50TGlzdGVuZXJzKCkge1xuICBpZiAoIUNBTl9VU0VfRE9NKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCF3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCAhd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIgfHwgIU9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBzdXBwb3J0c1Bhc3NpdmVPcHRpb24gPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2V0dGVyLXJldHVyblxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmVPcHRpb24gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldDtcbiAgICAgIH0oKVxuICAgIH0pO1xuICAgIHZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCcsIG5vb3AsIG9wdHMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCcsIG5vb3AsIG9wdHMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbjtcbn1cblxudmFyIG1lbW9pemVkID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBjYW5Vc2VQYXNzaXZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmIChtZW1vaXplZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWVtb2l6ZWQgPSB0ZXN0UGFzc2l2ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVFdmVudE9wdGlvbnMoZXZlbnRPcHRpb25zKSB7XG4gIGlmICghZXZlbnRPcHRpb25zKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICghY2FuVXNlUGFzc2l2ZUV2ZW50TGlzdGVuZXJzKCkpIHtcbiAgICAvLyBJZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBwYXNzaXZlIG9wdGlvbiwgdGhlbiBpdCBpcyBleHBlY3RpbmdcbiAgICAvLyBhIGJvb2xlYW4gZm9yIHRoZSBvcHRpb25zIGFyZ3VtZW50IHRvIHNwZWNpZnkgd2hldGhlciBpdCBzaG91bGQgdXNlXG4gICAgLy8gY2FwdHVyZSBvciBub3QuIEluIG1vcmUgbW9kZXJuIGJyb3dzZXJzLCB0aGlzIGlzIHBhc3NlZCB2aWEgdGhlIGBjYXB0dXJlYFxuICAgIC8vIG9wdGlvbiwgc28gbGV0J3MganVzdCBob2lzdCB0aGF0IHZhbHVlIHVwLlxuICAgIHJldHVybiAhIWV2ZW50T3B0aW9ucy5jYXB0dXJlO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50T3B0aW9ucztcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgdW5pcXVlIGtleSBmb3IgYW55IHNldCBvZiBldmVudCBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGV2ZW50T3B0aW9uc0tleShub3JtYWxpemVkRXZlbnRPcHRpb25zKSB7XG4gIGlmICghbm9ybWFsaXplZEV2ZW50T3B0aW9ucykge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLy8gSWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgdGhlIG5vcm1hbGl6ZWRcbiAgLy8gZXZlbnQgb3B0aW9ucyB3aWxsIGJlIGEgYm9vbGVhbi5cbiAgaWYgKG5vcm1hbGl6ZWRFdmVudE9wdGlvbnMgPT09IHRydWUpIHtcbiAgICByZXR1cm4gMTAwO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIHNvIHdlIGV4cGVjdFxuICAvLyB0aGUgZXZlbnQgb3B0aW9ucyB0byBiZSBhbiBvYmplY3Qgd2l0aCBwb3NzaWJsZSBwcm9wZXJ0aWVzIG9mIGNhcHR1cmUsXG4gIC8vIHBhc3NpdmUsIGFuZCBvbmNlLlxuICAvL1xuICAvLyBXZSB3YW50IHRvIGNvbnNpc3RlbnRseSByZXR1cm4gdGhlIHNhbWUgdmFsdWUsIHJlZ2FyZGxlc3Mgb2YgdGhlIG9yZGVyIG9mXG4gIC8vIHRoZXNlIHByb3BlcnRpZXMsIHNvIGxldCdzIHVzZSBiaW5hcnkgbWF0aHMgdG8gYXNzaWduIGVhY2ggcHJvcGVydHkgdG8gYVxuICAvLyBiaXQsIGFuZCB0aGVuIGFkZCB0aG9zZSB0b2dldGhlciAod2l0aCBhbiBvZmZzZXQgdG8gYWNjb3VudCBmb3IgdGhlXG4gIC8vIGJvb2xlYW5zIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhpcyBmdW5jdGlvbikuXG4gIHZhciBjYXB0dXJlID0gbm9ybWFsaXplZEV2ZW50T3B0aW9ucy5jYXB0dXJlIDw8IDA7XG4gIHZhciBwYXNzaXZlID0gbm9ybWFsaXplZEV2ZW50T3B0aW9ucy5wYXNzaXZlIDw8IDE7XG4gIHZhciBvbmNlID0gbm9ybWFsaXplZEV2ZW50T3B0aW9ucy5vbmNlIDw8IDI7XG4gIHJldHVybiBjYXB0dXJlICsgcGFzc2l2ZSArIG9uY2U7XG59XG5cbmZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRFdmVudEhhbmRsZXJzKGV2ZW50SGFuZGxlcnMpIHtcbiAgaWYgKGV2ZW50SGFuZGxlcnMuaGFuZGxlcnMgPT09IGV2ZW50SGFuZGxlcnMubmV4dEhhbmRsZXJzKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZXZlbnRIYW5kbGVycy5uZXh0SGFuZGxlcnMgPSBldmVudEhhbmRsZXJzLmhhbmRsZXJzLnNsaWNlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gVGFyZ2V0RXZlbnRIYW5kbGVycyh0YXJnZXQpIHtcbiAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIHRoaXMuZXZlbnRzID0ge307XG59XG5cblRhcmdldEV2ZW50SGFuZGxlcnMucHJvdG90eXBlLmdldEV2ZW50SGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGdldEV2ZW50SGFuZGxlcnMoZXZlbnROYW1lLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleSA9IFN0cmluZyhldmVudE5hbWUpICsgJyAnICsgU3RyaW5nKGV2ZW50T3B0aW9uc0tleShvcHRpb25zKSk7XG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzW2tleV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbXSxcbiAgICAgICAgaGFuZGxlRXZlbnQ6IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICAgIHRoaXMuZXZlbnRzW2tleV0ubmV4dEhhbmRsZXJzID0gdGhpcy5ldmVudHNba2V5XS5oYW5kbGVycztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5ldmVudHNba2V5XTtcbiAgfVxuXG4gIHJldHVybiBnZXRFdmVudEhhbmRsZXJzO1xufSgpO1xuXG5UYXJnZXRFdmVudEhhbmRsZXJzLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gaGFuZGxlRXZlbnQoZXZlbnROYW1lLCBvcHRpb25zLCBldmVudCkge1xuICAgIHZhciBldmVudEhhbmRsZXJzID0gdGhpcy5nZXRFdmVudEhhbmRsZXJzKGV2ZW50TmFtZSwgb3B0aW9ucyk7XG4gICAgZXZlbnRIYW5kbGVycy5oYW5kbGVycyA9IGV2ZW50SGFuZGxlcnMubmV4dEhhbmRsZXJzO1xuICAgIGV2ZW50SGFuZGxlcnMuaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBmb3IgcHJlc2VuY2UgaGVyZSBiZWNhdXNlIGEgaGFuZGxlciBmdW5jdGlvbiBtYXlcbiAgICAgICAgLy8gY2F1c2UgbGF0ZXIgaGFuZGxlcnMgdG8gZ2V0IHJlbW92ZWQuIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgZm9yXG4gICAgICAgIC8vIGluc3RhbmNlIGhhdmUgYSB3YXlwb2ludCB0aGF0IHVubW91bnRzIGFub3RoZXIgd2F5cG9pbnQgYXMgcGFydCBvZiBhblxuICAgICAgICAvLyBvbkVudGVyL29uTGVhdmUgaGFuZGxlci5cbiAgICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gaGFuZGxlRXZlbnQ7XG59KCk7XG5cblRhcmdldEV2ZW50SGFuZGxlcnMucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gYWRkKGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gb3B0aW9ucyBoYXMgYWxyZWFkeSBiZWVuIG5vcm1hbGl6ZWQgYXQgdGhpcyBwb2ludC5cbiAgICB2YXIgZXZlbnRIYW5kbGVycyA9IHRoaXMuZ2V0RXZlbnRIYW5kbGVycyhldmVudE5hbWUsIG9wdGlvbnMpO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dEV2ZW50SGFuZGxlcnMoZXZlbnRIYW5kbGVycyk7XG5cbiAgICBpZiAoZXZlbnRIYW5kbGVycy5uZXh0SGFuZGxlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBldmVudEhhbmRsZXJzLmhhbmRsZUV2ZW50ID0gdGhpcy5oYW5kbGVFdmVudC5iaW5kKHRoaXMsIGV2ZW50TmFtZSwgb3B0aW9ucyk7XG5cbiAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXJzLmhhbmRsZUV2ZW50LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBldmVudEhhbmRsZXJzLm5leHRIYW5kbGVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRFdmVudEhhbmRsZXJzKGV2ZW50SGFuZGxlcnMpO1xuICAgICAgICB2YXIgaW5kZXggPSBldmVudEhhbmRsZXJzLm5leHRIYW5kbGVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgZXZlbnRIYW5kbGVycy5uZXh0SGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICBpZiAoZXZlbnRIYW5kbGVycy5uZXh0SGFuZGxlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gQWxsIGV2ZW50IGhhbmRsZXJzIGhhdmUgYmVlbiByZW1vdmVkLCBzbyB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgZXZlbnRcbiAgICAgICAgICAvLyBsaXN0ZW5lciBmcm9tIHRoZSB0YXJnZXQgbm9kZS5cblxuICAgICAgICAgIGlmIChfdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIFRoZXJlIGNhbiBiZSBhIHJhY2UgY29uZGl0aW9uIHdoZXJlIHRoZSB0YXJnZXQgbWF5IG5vIGxvbmdlciBleGlzdFxuICAgICAgICAgICAgLy8gd2hlbiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCwgZS5nLiB3aGVuIGEgUmVhY3QgY29tcG9uZW50IGlzXG4gICAgICAgICAgICAvLyB1bm1vdW50aW5nLiBHdWFyZGluZyBhZ2FpbnN0IHRoaXMgcHJldmVudHMgdGhlIGZvbGxvd2luZyBlcnJvcjpcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgIENhbm5vdCByZWFkIHByb3BlcnR5ICdyZW1vdmVFdmVudExpc3RlbmVyJyBvZiB1bmRlZmluZWRcbiAgICAgICAgICAgIF90aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVycy5oYW5kbGVFdmVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXZlbnRIYW5kbGVycy5oYW5kbGVFdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5zdWJzY3JpYmU7XG4gICAgfSgpO1xuICAgIHJldHVybiB1bnN1YnNjcmliZTtcbiAgfVxuXG4gIHJldHVybiBhZGQ7XG59KCk7XG5cbnZhciBFVkVOVF9IQU5ETEVSU19LRVkgPSAnX19jb25zb2xpZGF0ZWRfZXZlbnRzX2hhbmRsZXJzX18nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgaWYgKCF0YXJnZXRbRVZFTlRfSEFORExFUlNfS0VZXSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHRhcmdldFtFVkVOVF9IQU5ETEVSU19LRVldID0gbmV3IFRhcmdldEV2ZW50SGFuZGxlcnModGFyZ2V0KTtcbiAgfVxuICB2YXIgbm9ybWFsaXplZEV2ZW50T3B0aW9ucyA9IG5vcm1hbGl6ZUV2ZW50T3B0aW9ucyhvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldFtFVkVOVF9IQU5ETEVSU19LRVldLmFkZChldmVudE5hbWUsIGxpc3RlbmVyLCBub3JtYWxpemVkRXZlbnRPcHRpb25zKTtcbn1cblxuZXhwb3J0IHsgYWRkRXZlbnRMaXN0ZW5lciB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgnZm9vJykgPT09ICdzeW1ib2wnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgb3JpZ0RlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudmFyIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBvYmogPSB7fTtcblx0dHJ5IHtcblx0XHRvcmlnRGVmaW5lUHJvcGVydHkob2JqLCAneCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBvYmogfSk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzLCBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRcdGZvciAodmFyIF8gaW4gb2JqKSB7IC8vIGpzY3M6aWdub3JlIGRpc2FsbG93VW51c2VkVmFyaWFibGVzXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBvYmoueCA9PT0gb2JqO1xuXHR9IGNhdGNoIChlKSB7IC8qIHRoaXMgaXMgSUUgOC4gKi9cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9IG9yaWdEZWZpbmVQcm9wZXJ0eSAmJiBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkKCk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIHZhbHVlLCBwcmVkaWNhdGUpIHtcblx0aWYgKG5hbWUgaW4gb2JqZWN0ICYmICghaXNGdW5jdGlvbihwcmVkaWNhdGUpIHx8ICFwcmVkaWNhdGUoKSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcblx0XHRvcmlnRGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b2JqZWN0W25hbWVdID0gdmFsdWU7XG5cdH1cbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iamVjdCwgbWFwKSB7XG5cdHZhciBwcmVkaWNhdGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB7fTtcblx0dmFyIHByb3BzID0ga2V5cyhtYXApO1xuXHRpZiAoaGFzU3ltYm9scykge1xuXHRcdHByb3BzID0gY29uY2F0LmNhbGwocHJvcHMsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobWFwKSk7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcHNbaV0sIG1hcFtwcm9wc1tpXV0sIHByZWRpY2F0ZXNbcHJvcHNbaV1dKTtcblx0fVxufTtcblxuZGVmaW5lUHJvcGVydGllcy5zdXBwb3J0c0Rlc2NyaXB0b3JzID0gISFzdXBwb3J0c0Rlc2NyaXB0b3JzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnRpZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29udGFpbnMob3RoZXIpIHtcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCBpcyByZXF1aXJlZCcpO1xuXHR9XG5cdGlmICh0eXBlb2Ygb3RoZXIgIT09ICdvYmplY3QnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgMSAo4oCdb3RoZXLigJwpIHRvIE5vZGUuY29udGFpbnMgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBOb2RlJyk7XG5cdH1cblxuXHR2YXIgbm9kZSA9IG90aGVyO1xuXHRkbyB7XG5cdFx0aWYgKHRoaXMgPT09IG5vZGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAobm9kZSkge1xuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0XHR9XG5cdH0gd2hpbGUgKG5vZGUpO1xuXG5cdHJldHVybiBmYWxzZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIGJvdW5kQ29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhub2RlLCBvdGhlcikge1xuXHRyZXR1cm4gcG9seWZpbGwuYXBwbHkobm9kZSwgW290aGVyXSk7XG59O1xuXG5kZWZpbmUoYm91bmRDb250YWlucywge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmRDb250YWlucztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGlmIChkb2N1bWVudC5jb250YWlucykge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmNvbnRhaW5zO1xuXHRcdH1cblx0XHRpZiAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuY29udGFpbnMuY2FsbChkb2N1bWVudCwgJycpID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0XHRyZXR1cm4gZG9jdW1lbnQuYm9keS5jb250YWlucztcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkgeyAvKiovIH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGltcGxlbWVudGF0aW9uO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbUNvbnRhaW5zKCkge1xuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGRlZmluZShcblx0XHRcdGRvY3VtZW50LFxuXHRcdFx0eyBjb250YWluczogcG9seWZpbGwgfSxcblx0XHRcdHsgY29udGFpbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LmNvbnRhaW5zICE9PSBwb2x5ZmlsbDsgfSB9XG5cdFx0KTtcblx0XHRpZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRkZWZpbmUoXG5cdFx0XHRcdEVsZW1lbnQucHJvdG90eXBlLFxuXHRcdFx0XHR7IGNvbnRhaW5zOiBwb2x5ZmlsbCB9LFxuXHRcdFx0XHR7IGNvbnRhaW5zOiBmdW5jdGlvbiAoKSB7IHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5jb250YWlucyAhPT0gcG9seWZpbGw7IH0gfVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTkuMTFcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLzUvQ2hlY2tPYmplY3RDb2VyY2libGUnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4uL0dldEludHJpbnNpYycpO1xuXG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcblxuLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTkuMTBcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBDaGVja09iamVjdENvZXJjaWJsZSh2YWx1ZSwgb3B0TWVzc2FnZSkge1xuXHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKG9wdE1lc3NhZ2UgfHwgKCdDYW5ub3QgY2FsbCBtZXRob2Qgb24gJyArIHZhbHVlKSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsc1xuXHRBdG9taWNzLFxuXHRTaGFyZWRBcnJheUJ1ZmZlcixcbiovXG5cbnZhciB1bmRlZmluZWQ7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgJGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuaWYgKCRnT1BEKSB7XG5cdHRyeSB7XG5cdFx0JGdPUEQoe30sICcnKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdCRnT1BEID0gbnVsbDsgLy8gdGhpcyBpcyBJRSA4LCB3aGljaCBoYXMgYSBicm9rZW4gZ09QRFxuXHR9XG59XG5cbnZhciB0aHJvd1R5cGVFcnJvciA9IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3ICRUeXBlRXJyb3IoKTsgfTtcbnZhciBUaHJvd1R5cGVFcnJvciA9ICRnT1BEXG5cdD8gKGZ1bmN0aW9uICgpIHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9ucywgbm8tY2FsbGVyLCBuby1yZXN0cmljdGVkLXByb3BlcnRpZXNcblx0XHRcdGFyZ3VtZW50cy5jYWxsZWU7IC8vIElFIDggZG9lcyBub3QgdGhyb3cgaGVyZVxuXHRcdFx0cmV0dXJuIHRocm93VHlwZUVycm9yO1xuXHRcdH0gY2F0Y2ggKGNhbGxlZVRocm93cykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gSUUgOCB0aHJvd3Mgb24gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhcmd1bWVudHMsICcnKVxuXHRcdFx0XHRyZXR1cm4gJGdPUEQoYXJndW1lbnRzLCAnY2FsbGVlJykuZ2V0O1xuXHRcdFx0fSBjYXRjaCAoZ09QRHRocm93cykge1xuXHRcdFx0XHRyZXR1cm4gdGhyb3dUeXBlRXJyb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KCkpXG5cdDogdGhyb3dUeXBlRXJyb3I7XG5cbnZhciBoYXNTeW1ib2xzID0gcmVxdWlyZSgnaGFzLXN5bWJvbHMnKSgpO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguX19wcm90b19fOyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cbnZhciBnZW5lcmF0b3I7IC8vID0gZnVuY3Rpb24gKiAoKSB7fTtcbnZhciBnZW5lcmF0b3JGdW5jdGlvbiA9IGdlbmVyYXRvciA/IGdldFByb3RvKGdlbmVyYXRvcikgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNGbjsgLy8gYXN5bmMgZnVuY3Rpb24oKSB7fTtcbnZhciBhc3luY0Z1bmN0aW9uID0gYXN5bmNGbiA/IGFzeW5jRm4uY29uc3RydWN0b3IgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNHZW47IC8vIGFzeW5jIGZ1bmN0aW9uICogKCkge307XG52YXIgYXN5bmNHZW5GdW5jdGlvbiA9IGFzeW5jR2VuID8gZ2V0UHJvdG8oYXN5bmNHZW4pIDogdW5kZWZpbmVkO1xudmFyIGFzeW5jR2VuSXRlcmF0b3IgPSBhc3luY0dlbiA/IGFzeW5jR2VuKCkgOiB1bmRlZmluZWQ7XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJUFycmF5JSc6IEFycmF5LFxuXHQnJUFycmF5QnVmZmVyJSc6IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBcnJheUJ1ZmZlcixcblx0JyVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKFtdW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCclQXJyYXlQcm90b3R5cGUlJzogQXJyYXkucHJvdG90eXBlLFxuXHQnJUFycmF5UHJvdG9fZW50cmllcyUnOiBBcnJheS5wcm90b3R5cGUuZW50cmllcyxcblx0JyVBcnJheVByb3RvX2ZvckVhY2glJzogQXJyYXkucHJvdG90eXBlLmZvckVhY2gsXG5cdCclQXJyYXlQcm90b19rZXlzJSc6IEFycmF5LnByb3RvdHlwZS5rZXlzLFxuXHQnJUFycmF5UHJvdG9fdmFsdWVzJSc6IEFycmF5LnByb3RvdHlwZS52YWx1ZXMsXG5cdCclQXN5bmNGcm9tU3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IHVuZGVmaW5lZCxcblx0JyVBc3luY0Z1bmN0aW9uJSc6IGFzeW5jRnVuY3Rpb24sXG5cdCclQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBhc3luY0Z1bmN0aW9uID8gYXN5bmNGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCclQXN5bmNHZW5lcmF0b3IlJzogYXN5bmNHZW4gPyBnZXRQcm90byhhc3luY0dlbkl0ZXJhdG9yKSA6IHVuZGVmaW5lZCxcblx0JyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJSc6IGFzeW5jR2VuRnVuY3Rpb24sXG5cdCclQXN5bmNHZW5lcmF0b3JQcm90b3R5cGUlJzogYXN5bmNHZW5GdW5jdGlvbiA/IGFzeW5jR2VuRnVuY3Rpb24ucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJUFzeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogYXN5bmNHZW5JdGVyYXRvciAmJiBoYXNTeW1ib2xzICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yID8gYXN5bmNHZW5JdGVyYXRvcltTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSA6IHVuZGVmaW5lZCxcblx0JyVBdG9taWNzJSc6IHR5cGVvZiBBdG9taWNzID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEF0b21pY3MsXG5cdCclQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJUJvb2xlYW5Qcm90b3R5cGUlJzogQm9vbGVhbi5wcm90b3R5cGUsXG5cdCclRGF0YVZpZXclJzogdHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IERhdGFWaWV3LFxuXHQnJURhdGFWaWV3UHJvdG90eXBlJSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldy5wcm90b3R5cGUsXG5cdCclRGF0ZSUnOiBEYXRlLFxuXHQnJURhdGVQcm90b3R5cGUlJzogRGF0ZS5wcm90b3R5cGUsXG5cdCclZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyVkZWNvZGVVUklDb21wb25lbnQlJzogZGVjb2RlVVJJQ29tcG9uZW50LFxuXHQnJWVuY29kZVVSSSUnOiBlbmNvZGVVUkksXG5cdCclZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyVFcnJvciUnOiBFcnJvcixcblx0JyVFcnJvclByb3RvdHlwZSUnOiBFcnJvci5wcm90b3R5cGUsXG5cdCclZXZhbCUnOiBldmFsLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcblx0JyVFdmFsRXJyb3IlJzogRXZhbEVycm9yLFxuXHQnJUV2YWxFcnJvclByb3RvdHlwZSUnOiBFdmFsRXJyb3IucHJvdG90eXBlLFxuXHQnJUZsb2F0MzJBcnJheSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheSxcblx0JyVGbG9hdDMyQXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEZsb2F0MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDMyQXJyYXkucHJvdG90eXBlLFxuXHQnJUZsb2F0NjRBcnJheSUnOiB0eXBlb2YgRmxvYXQ2NEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0NjRBcnJheSxcblx0JyVGbG9hdDY0QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXkucHJvdG90eXBlLFxuXHQnJUZ1bmN0aW9uJSc6IEZ1bmN0aW9uLFxuXHQnJUZ1bmN0aW9uUHJvdG90eXBlJSc6IEZ1bmN0aW9uLnByb3RvdHlwZSxcblx0JyVHZW5lcmF0b3IlJzogZ2VuZXJhdG9yID8gZ2V0UHJvdG8oZ2VuZXJhdG9yKCkpIDogdW5kZWZpbmVkLFxuXHQnJUdlbmVyYXRvckZ1bmN0aW9uJSc6IGdlbmVyYXRvckZ1bmN0aW9uLFxuXHQnJUdlbmVyYXRvclByb3RvdHlwZSUnOiBnZW5lcmF0b3JGdW5jdGlvbiA/IGdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCclSW50OEFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBJbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50OEFycmF5LnByb3RvdHlwZSxcblx0JyVJbnQxNkFycmF5JSc6IHR5cGVvZiBJbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDE2QXJyYXksXG5cdCclSW50MTZBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJUludDMyQXJyYXklJzogdHlwZW9mIEludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MzJBcnJheSxcblx0JyVJbnQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBJbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDMyQXJyYXkucHJvdG90eXBlLFxuXHQnJWlzRmluaXRlJSc6IGlzRmluaXRlLFxuXHQnJWlzTmFOJSc6IGlzTmFOLFxuXHQnJUl0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90byhnZXRQcm90byhbXVtTeW1ib2wuaXRlcmF0b3JdKCkpKSA6IHVuZGVmaW5lZCxcblx0JyVKU09OJSc6IHR5cGVvZiBKU09OID09PSAnb2JqZWN0JyA/IEpTT04gOiB1bmRlZmluZWQsXG5cdCclSlNPTlBhcnNlJSc6IHR5cGVvZiBKU09OID09PSAnb2JqZWN0JyA/IEpTT04ucGFyc2UgOiB1bmRlZmluZWQsXG5cdCclTWFwJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTWFwLFxuXHQnJU1hcEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IE1hcCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclTWFwUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTWFwLnByb3RvdHlwZSxcblx0JyVNYXRoJSc6IE1hdGgsXG5cdCclTnVtYmVyJSc6IE51bWJlcixcblx0JyVOdW1iZXJQcm90b3R5cGUlJzogTnVtYmVyLnByb3RvdHlwZSxcblx0JyVPYmplY3QlJzogT2JqZWN0LFxuXHQnJU9iamVjdFByb3RvdHlwZSUnOiBPYmplY3QucHJvdG90eXBlLFxuXHQnJU9ialByb3RvX3RvU3RyaW5nJSc6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG5cdCclT2JqUHJvdG9fdmFsdWVPZiUnOiBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YsXG5cdCclcGFyc2VGbG9hdCUnOiBwYXJzZUZsb2F0LFxuXHQnJXBhcnNlSW50JSc6IHBhcnNlSW50LFxuXHQnJVByb21pc2UlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZSxcblx0JyVQcm9taXNlUHJvdG90eXBlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucHJvdG90eXBlLFxuXHQnJVByb21pc2VQcm90b190aGVuJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucHJvdG90eXBlLnRoZW4sXG5cdCclUHJvbWlzZV9hbGwlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5hbGwsXG5cdCclUHJvbWlzZV9yZWplY3QlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZWplY3QsXG5cdCclUHJvbWlzZV9yZXNvbHZlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucmVzb2x2ZSxcblx0JyVQcm94eSUnOiB0eXBlb2YgUHJveHkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJveHksXG5cdCclUmFuZ2VFcnJvciUnOiBSYW5nZUVycm9yLFxuXHQnJVJhbmdlRXJyb3JQcm90b3R5cGUlJzogUmFuZ2VFcnJvci5wcm90b3R5cGUsXG5cdCclUmVmZXJlbmNlRXJyb3IlJzogUmVmZXJlbmNlRXJyb3IsXG5cdCclUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogUmVmZXJlbmNlRXJyb3IucHJvdG90eXBlLFxuXHQnJVJlZmxlY3QlJzogdHlwZW9mIFJlZmxlY3QgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUmVmbGVjdCxcblx0JyVSZWdFeHAlJzogUmVnRXhwLFxuXHQnJVJlZ0V4cFByb3RvdHlwZSUnOiBSZWdFeHAucHJvdG90eXBlLFxuXHQnJVNldCUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldCxcblx0JyVTZXRJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBTZXQoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJVNldFByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldC5wcm90b3R5cGUsXG5cdCclU2hhcmVkQXJyYXlCdWZmZXIlJzogdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNoYXJlZEFycmF5QnVmZmVyLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlJSc6IHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTaGFyZWRBcnJheUJ1ZmZlci5wcm90b3R5cGUsXG5cdCclU3RyaW5nJSc6IFN0cmluZyxcblx0JyVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oJydbU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyVTdHJpbmdQcm90b3R5cGUlJzogU3RyaW5nLnByb3RvdHlwZSxcblx0JyVTeW1ib2wlJzogaGFzU3ltYm9scyA/IFN5bWJvbCA6IHVuZGVmaW5lZCxcblx0JyVTeW1ib2xQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCclU3ludGF4RXJyb3IlJzogU3ludGF4RXJyb3IsXG5cdCclU3ludGF4RXJyb3JQcm90b3R5cGUlJzogU3ludGF4RXJyb3IucHJvdG90eXBlLFxuXHQnJVRocm93VHlwZUVycm9yJSc6IFRocm93VHlwZUVycm9yLFxuXHQnJVR5cGVkQXJyYXklJzogVHlwZWRBcnJheSxcblx0JyVUeXBlZEFycmF5UHJvdG90eXBlJSc6IFR5cGVkQXJyYXkgPyBUeXBlZEFycmF5LnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyVUeXBlRXJyb3IlJzogJFR5cGVFcnJvcixcblx0JyVUeXBlRXJyb3JQcm90b3R5cGUlJzogJFR5cGVFcnJvci5wcm90b3R5cGUsXG5cdCclVWludDhBcnJheSUnOiB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OEFycmF5LFxuXHQnJVVpbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheS5wcm90b3R5cGUsXG5cdCclVWludDhDbGFtcGVkQXJyYXklJzogdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4Q2xhbXBlZEFycmF5LFxuXHQnJVVpbnQ4Q2xhbXBlZEFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OENsYW1wZWRBcnJheS5wcm90b3R5cGUsXG5cdCclVWludDE2QXJyYXklJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LFxuXHQnJVVpbnQxNkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MTZBcnJheS5wcm90b3R5cGUsXG5cdCclVWludDMyQXJyYXklJzogdHlwZW9mIFVpbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQzMkFycmF5LFxuXHQnJVVpbnQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheS5wcm90b3R5cGUsXG5cdCclVVJJRXJyb3IlJzogVVJJRXJyb3IsXG5cdCclVVJJRXJyb3JQcm90b3R5cGUlJzogVVJJRXJyb3IucHJvdG90eXBlLFxuXHQnJVdlYWtNYXAlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcCxcblx0JyVXZWFrTWFwUHJvdG90eXBlJSc6IHR5cGVvZiBXZWFrTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtNYXAucHJvdG90eXBlLFxuXHQnJVdlYWtTZXQlJzogdHlwZW9mIFdlYWtTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1NldCxcblx0JyVXZWFrU2V0UHJvdG90eXBlJSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQucHJvdG90eXBlXG59O1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciAkcmVwbGFjZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xuXG4vKiBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi80LjE3LjE1L2Rpc3QvbG9kYXNoLmpzI0w2NzM1LUw2NzQ0ICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXiUuW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JSQpKS9nO1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nOyAvKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBmdW5jdGlvbiBzdHJpbmdUb1BhdGgoc3RyaW5nKSB7XG5cdHZhciByZXN1bHQgPSBbXTtcblx0JHJlcGxhY2Uoc3RyaW5nLCByZVByb3BOYW1lLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuXHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHF1b3RlID8gJHJlcGxhY2Uoc3ViU3RyaW5nLCByZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCk7XG5cdH0pO1xuXHRyZXR1cm4gcmVzdWx0O1xufTtcbi8qIGVuZCBhZGFwdGF0aW9uICovXG5cbnZhciBnZXRCYXNlSW50cmluc2ljID0gZnVuY3Rpb24gZ2V0QmFzZUludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKCEobmFtZSBpbiBJTlRSSU5TSUNTKSkge1xuXHRcdHRocm93IG5ldyBTeW50YXhFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBkb2VzIG5vdCBleGlzdCEnKTtcblx0fVxuXG5cdC8vIGlzdGFuYnVsIGlnbm9yZSBpZiAvLyBob3BlZnVsbHkgdGhpcyBpcyBpbXBvc3NpYmxlIHRvIHRlc3QgOi0pXG5cdGlmICh0eXBlb2YgSU5UUklOU0lDU1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgJiYgIWFsbG93TWlzc2luZykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIScpO1xuXHR9XG5cblx0cmV0dXJuIElOVFJJTlNJQ1NbbmFtZV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEdldEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCBuYW1lLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludHJpbnNpYyBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYWxsb3dNaXNzaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBhIGJvb2xlYW4nKTtcblx0fVxuXG5cdHZhciBwYXJ0cyA9IHN0cmluZ1RvUGF0aChuYW1lKTtcblxuXHR2YXIgdmFsdWUgPSBnZXRCYXNlSW50cmluc2ljKCclJyArIChwYXJ0cy5sZW5ndGggPiAwID8gcGFydHNbMF0gOiAnJykgKyAnJScsIGFsbG93TWlzc2luZyk7XG5cdGZvciAodmFyIGkgPSAxOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAodmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0aWYgKCRnT1BEICYmIChpICsgMSkgPj0gcGFydHMubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBkZXNjID0gJGdPUEQodmFsdWUsIHBhcnRzW2ldKTtcblx0XHRcdFx0aWYgKCFhbGxvd01pc3NpbmcgJiYgIShwYXJ0c1tpXSBpbiB2YWx1ZSkpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYmFzZSBpbnRyaW5zaWMgZm9yICcgKyBuYW1lICsgJyBleGlzdHMsIGJ1dCB0aGUgcHJvcGVydHkgaXMgbm90IGF2YWlsYWJsZS4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YWx1ZSA9IGRlc2MgPyAoZGVzYy5nZXQgfHwgZGVzYy52YWx1ZSkgOiB2YWx1ZVtwYXJ0c1tpXV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlW3BhcnRzW2ldXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRGdW5jdGlvbiA9IEdldEludHJpbnNpYygnJUZ1bmN0aW9uJScpO1xudmFyICRhcHBseSA9ICRGdW5jdGlvbi5hcHBseTtcbnZhciAkY2FsbCA9ICRGdW5jdGlvbi5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCaW5kKCkge1xuXHRyZXR1cm4gYmluZC5hcHBseSgkY2FsbCwgYXJndW1lbnRzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmFwcGx5ID0gZnVuY3Rpb24gYXBwbHlCaW5kKCkge1xuXHRyZXR1cm4gYmluZC5hcHBseSgkYXBwbHksIGFyZ3VtZW50cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi4vR2V0SW50cmluc2ljJyk7XG5cbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vY2FsbEJpbmQnKTtcblxudmFyICRpbmRleE9mID0gY2FsbEJpbmQoR2V0SW50cmluc2ljKCdTdHJpbmcucHJvdG90eXBlLmluZGV4T2YnKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbEJvdW5kSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHR2YXIgaW50cmluc2ljID0gR2V0SW50cmluc2ljKG5hbWUsICEhYWxsb3dNaXNzaW5nKTtcblx0aWYgKHR5cGVvZiBpbnRyaW5zaWMgPT09ICdmdW5jdGlvbicgJiYgJGluZGV4T2YobmFtZSwgJy5wcm90b3R5cGUuJykpIHtcblx0XHRyZXR1cm4gY2FsbEJpbmQoaW50cmluc2ljKTtcblx0fVxuXHRyZXR1cm4gaW50cmluc2ljO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcbnZhciBpc0RhdGUgPSByZXF1aXJlKCdpcy1kYXRlLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnaXMtc3ltYm9sJyk7XG5cbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gZnVuY3Rpb24gT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KSB7XG5cdGlmICh0eXBlb2YgTyA9PT0gJ3VuZGVmaW5lZCcgfHwgTyA9PT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgTyk7XG5cdH1cblx0aWYgKHR5cGVvZiBoaW50ICE9PSAnc3RyaW5nJyB8fCAoaGludCAhPT0gJ251bWJlcicgJiYgaGludCAhPT0gJ3N0cmluZycpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaGludCBtdXN0IGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIicpO1xuXHR9XG5cdHZhciBtZXRob2ROYW1lcyA9IGhpbnQgPT09ICdzdHJpbmcnID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0dmFyIG1ldGhvZCwgcmVzdWx0LCBpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kTmFtZXMubGVuZ3RoOyArK2kpIHtcblx0XHRtZXRob2QgPSBPW21ldGhvZE5hbWVzW2ldXTtcblx0XHRpZiAoaXNDYWxsYWJsZShtZXRob2QpKSB7XG5cdFx0XHRyZXN1bHQgPSBtZXRob2QuY2FsbChPKTtcblx0XHRcdGlmIChpc1ByaW1pdGl2ZShyZXN1bHQpKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcbn07XG5cbnZhciBHZXRNZXRob2QgPSBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHR2YXIgZnVuYyA9IE9bUF07XG5cdGlmIChmdW5jICE9PSBudWxsICYmIHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGlmICghaXNDYWxsYWJsZShmdW5jKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihmdW5jICsgJyByZXR1cm5lZCBmb3IgcHJvcGVydHkgJyArIFAgKyAnIG9mIG9iamVjdCAnICsgTyArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH1cblx0cmV0dXJuIHZvaWQgMDtcbn07XG5cbi8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdHZhciBoaW50ID0gJ2RlZmF1bHQnO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRpZiAoYXJndW1lbnRzWzFdID09PSBTdHJpbmcpIHtcblx0XHRcdGhpbnQgPSAnc3RyaW5nJztcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50c1sxXSA9PT0gTnVtYmVyKSB7XG5cdFx0XHRoaW50ID0gJ251bWJlcic7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGV4b3RpY1RvUHJpbTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRpZiAoU3ltYm9sLnRvUHJpbWl0aXZlKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBHZXRNZXRob2QoaW5wdXQsIFN5bWJvbC50b1ByaW1pdGl2ZSk7XG5cdFx0fSBlbHNlIGlmIChpc1N5bWJvbChpbnB1dCkpIHtcblx0XHRcdGV4b3RpY1RvUHJpbSA9IFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZjtcblx0XHR9XG5cdH1cblx0aWYgKHR5cGVvZiBleG90aWNUb1ByaW0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBoaW50KTtcblx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcigndW5hYmxlIHRvIGNvbnZlcnQgZXhvdGljIG9iamVjdCB0byBwcmltaXRpdmUnKTtcblx0fVxuXHRpZiAoaGludCA9PT0gJ2RlZmF1bHQnICYmIChpc0RhdGUoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkpIHtcblx0XHRoaW50ID0gJ3N0cmluZyc7XG5cdH1cblx0cmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09ICdkZWZhdWx0JyA/ICdudW1iZXInIDogaGludCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIElzQ2FsbGFibGUgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC8yMDE5L0lzQ2FsbGFibGUnKTtcbnZhciBmdW5jdGlvbnNIYXZlTmFtZXMgPSByZXF1aXJlKCdmdW5jdGlvbnMtaGF2ZS1uYW1lcycpKCk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnZXMtYWJzdHJhY3QvaGVscGVycy9jYWxsQm91bmQnKTtcbnZhciAkZnVuY3Rpb25Ub1N0cmluZyA9IGNhbGxCb3VuZCgnRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nJyk7XG52YXIgJHN0cmluZ01hdGNoID0gY2FsbEJvdW5kKCdTdHJpbmcucHJvdG90eXBlLm1hdGNoJyk7XG5cbnZhciBjbGFzc1JlZ2V4ID0gL15jbGFzcyAvO1xuXG52YXIgaXNDbGFzcyA9IGZ1bmN0aW9uIGlzQ2xhc3NDb25zdHJ1Y3Rvcihmbikge1xuXHRpZiAoSXNDYWxsYWJsZShmbikpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHR0cnkge1xuXHRcdHZhciBtYXRjaCA9ICRzdHJpbmdNYXRjaCgkZnVuY3Rpb25Ub1N0cmluZyhmbiksIGNsYXNzUmVnZXgpO1xuXHRcdHJldHVybiAhIW1hdGNoO1xuXHR9IGNhdGNoIChlKSB7fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgcmVnZXggPSAvXFxzKmZ1bmN0aW9uXFxzKyhbXihcXHNdKilcXHMqLztcblxudmFyIGZ1bmN0aW9uUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0TmFtZSgpIHtcblx0aWYgKCFpc0NsYXNzKHRoaXMpICYmICFJc0NhbGxhYmxlKHRoaXMpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUgc2hhbSBnZXR0ZXIgY2FsbGVkIG9uIG5vbi1mdW5jdGlvbicpO1xuXHR9XG5cdGlmIChmdW5jdGlvbnNIYXZlTmFtZXMpIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xuXHR9XG5cdGlmICh0aGlzID09PSBmdW5jdGlvblByb3RvKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHZhciBzdHIgPSAkZnVuY3Rpb25Ub1N0cmluZyh0aGlzKTtcblx0dmFyIG1hdGNoID0gJHN0cmluZ01hdGNoKHN0ciwgcmVnZXgpO1xuXHR2YXIgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuXHRyZXR1cm4gbmFtZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnZXMtYWJzdHJhY3QvaGVscGVycy9jYWxsQmluZCcpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgYm91bmQgPSBjYWxsQmluZChpbXBsZW1lbnRhdGlvbik7XG5cbmRlZmluZShib3VuZCwge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0cmV0dXJuIGltcGxlbWVudGF0aW9uO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpLnN1cHBvcnRzRGVzY3JpcHRvcnM7XG52YXIgZnVuY3Rpb25zSGF2ZU5hbWVzID0gcmVxdWlyZSgnZnVuY3Rpb25zLWhhdmUtbmFtZXMnKSgpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIFR5cGVFcnIgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbU5hbWUoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cdGlmIChmdW5jdGlvbnNIYXZlTmFtZXMpIHtcblx0XHRyZXR1cm4gcG9seWZpbGw7XG5cdH1cblx0aWYgKCFzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnIoJ1NoaW1taW5nIEZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lIHN1cHBvcnQgcmVxdWlyZXMgRVM1IHByb3BlcnR5IGRlc2NyaXB0b3Igc3VwcG9ydC4nKTtcblx0fVxuXHR2YXIgZnVuY3Rpb25Qcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblx0ZGVmaW5lUHJvcGVydHkoZnVuY3Rpb25Qcm90bywgJ25hbWUnLCB7XG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIG5hbWUgPSBwb2x5ZmlsbC5jYWxsKHRoaXMpO1xuXHRcdFx0aWYgKHRoaXMgIT09IGZ1bmN0aW9uUHJvdG8pIHtcblx0XHRcdFx0ZGVmaW5lUHJvcGVydHkodGhpcywgJ25hbWUnLCB7XG5cdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0XHRcdHZhbHVlOiBuYW1lLFxuXHRcdFx0XHRcdHdyaXRhYmxlOiBmYWxzZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuYW1lO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmdW5jdGlvbnNIYXZlTmFtZXMgPSBmdW5jdGlvbiBmdW5jdGlvbnNIYXZlTmFtZXMoKSB7XG5cdHJldHVybiB0eXBlb2YgZnVuY3Rpb24gZigpIHt9Lm5hbWUgPT09ICdzdHJpbmcnO1xufTtcblxudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuaWYgKGdPUEQpIHtcblx0dHJ5IHtcblx0XHRnT1BEKFtdLCAnbGVuZ3RoJyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBnT1BEXG5cdFx0Z09QRCA9IG51bGw7XG5cdH1cbn1cblxuZnVuY3Rpb25zSGF2ZU5hbWVzLmZ1bmN0aW9uc0hhdmVDb25maWd1cmFibGVOYW1lcyA9IGZ1bmN0aW9uIGZ1bmN0aW9uc0hhdmVDb25maWd1cmFibGVOYW1lcygpIHtcblx0cmV0dXJuIGZ1bmN0aW9uc0hhdmVOYW1lcygpICYmIGdPUEQgJiYgISFnT1BEKGZ1bmN0aW9uICgpIHt9LCAnbmFtZScpLmNvbmZpZ3VyYWJsZTtcbn07XG5cbnZhciAkYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuXG5mdW5jdGlvbnNIYXZlTmFtZXMuYm91bmRGdW5jdGlvbnNIYXZlTmFtZXMgPSBmdW5jdGlvbiBib3VuZEZ1bmN0aW9uc0hhdmVOYW1lcygpIHtcblx0cmV0dXJuIGZ1bmN0aW9uc0hhdmVOYW1lcygpICYmIHR5cGVvZiAkYmluZCA9PT0gJ2Z1bmN0aW9uJyAmJiBmdW5jdGlvbiBmKCkge30uYmluZCgpLm5hbWUgIT09ICcnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbnNIYXZlTmFtZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvcmlnU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBoYXNTeW1ib2xTaGFtID0gcmVxdWlyZSgnLi9zaGFtcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc05hdGl2ZVN5bWJvbHMoKSB7XG5cdGlmICh0eXBlb2Ygb3JpZ1N5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2Ygb3JpZ1N5bWJvbCgnZm9vJykgIT09ICdzeW1ib2wnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCgnYmFyJykgIT09ICdzeW1ib2wnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHJldHVybiBoYXNTeW1ib2xTaGFtKCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgY29tcGxleGl0eTogWzIsIDE4XSwgbWF4LXN0YXRlbWVudHM6IFsyLCAzM10gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJykgeyByZXR1cm4gdHJ1ZTsgfVxuXG5cdHZhciBvYmogPSB7fTtcblx0dmFyIHN5bSA9IFN5bWJvbCgndGVzdCcpO1xuXHR2YXIgc3ltT2JqID0gT2JqZWN0KHN5bSk7XG5cdGlmICh0eXBlb2Ygc3ltID09PSAnc3RyaW5nJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bU9iaikgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIHRlbXAgZGlzYWJsZWQgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvb2JqZWN0LmFzc2lnbi9pc3N1ZXMvMTdcblx0Ly8gaWYgKHN5bSBpbnN0YW5jZW9mIFN5bWJvbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzL2lzc3Vlcy80XG5cdC8vIGlmICghKHN5bU9iaiBpbnN0YW5jZW9mIFN5bWJvbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gaWYgKHR5cGVvZiBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyBpZiAoU3RyaW5nKHN5bSkgIT09IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHZhciBzeW1WYWwgPSA0Mjtcblx0b2JqW3N5bV0gPSBzeW1WYWw7XG5cdGZvciAoc3ltIGluIG9iaikgeyByZXR1cm4gZmFsc2U7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRpZiAodHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoICE9PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaik7XG5cdGlmIChzeW1zLmxlbmd0aCAhPT0gMSB8fCBzeW1zWzBdICE9PSBzeW0pIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqLCBzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHN5bSk7XG5cdFx0aWYgKGRlc2NyaXB0b3IudmFsdWUgIT09IHN5bVZhbCB8fCBkZXNjcmlwdG9yLmVudW1lcmFibGUgIT09IHRydWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmblRvU3RyID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHJlZmxlY3RBcHBseSA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0ICE9PSBudWxsICYmIFJlZmxlY3QuYXBwbHk7XG52YXIgYmFkQXJyYXlMaWtlO1xudmFyIGlzQ2FsbGFibGVNYXJrZXI7XG5pZiAodHlwZW9mIHJlZmxlY3RBcHBseSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG5cdHRyeSB7XG5cdFx0YmFkQXJyYXlMaWtlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnbGVuZ3RoJywge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGlzQ2FsbGFibGVNYXJrZXI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aXNDYWxsYWJsZU1hcmtlciA9IHt9O1xuXHR9IGNhdGNoIChfKSB7XG5cdFx0cmVmbGVjdEFwcGx5ID0gbnVsbDtcblx0fVxufSBlbHNlIHtcblx0cmVmbGVjdEFwcGx5ID0gbnVsbDtcbn1cblxudmFyIGNvbnN0cnVjdG9yUmVnZXggPSAvXlxccypjbGFzc1xcYi87XG52YXIgaXNFUzZDbGFzc0ZuID0gZnVuY3Rpb24gaXNFUzZDbGFzc0Z1bmN0aW9uKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0dmFyIGZuU3RyID0gZm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gY29uc3RydWN0b3JSZWdleC50ZXN0KGZuU3RyKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTsgLy8gbm90IGEgZnVuY3Rpb25cblx0fVxufTtcblxudmFyIHRyeUZ1bmN0aW9uT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RnVuY3Rpb25Ub1N0cih2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGlmIChpc0VTNkNsYXNzRm4odmFsdWUpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZuQ2xhc3MgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xudmFyIGdlbkNsYXNzID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVmbGVjdEFwcGx5XG5cdD8gZnVuY3Rpb24gaXNDYWxsYWJsZSh2YWx1ZSkge1xuXHRcdGlmICghdmFsdWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgIXZhbHVlLnByb3RvdHlwZSkgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdHRyeSB7XG5cdFx0XHRyZWZsZWN0QXBwbHkodmFsdWUsIG51bGwsIGJhZEFycmF5TGlrZSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aWYgKGUgIT09IGlzQ2FsbGFibGVNYXJrZXIpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0fVxuXHRcdHJldHVybiAhaXNFUzZDbGFzc0ZuKHZhbHVlKTtcblx0fVxuXHQ6IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0XHRpZiAoIXZhbHVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmICF2YWx1ZS5wcm90b3R5cGUpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAoaGFzVG9TdHJpbmdUYWcpIHsgcmV0dXJuIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKTsgfVxuXHRcdGlmIChpc0VTNkNsYXNzRm4odmFsdWUpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiBzdHJDbGFzcyA9PT0gZm5DbGFzcyB8fCBzdHJDbGFzcyA9PT0gZ2VuQ2xhc3M7XG5cdH07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXREYXkgPSBEYXRlLnByb3RvdHlwZS5nZXREYXk7XG52YXIgdHJ5RGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHRyeURhdGVHZXREYXlDYWxsKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0Z2V0RGF5LmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGRhdGVDbGFzcyA9ICdbb2JqZWN0IERhdGVdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeURhdGVPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGRhdGVDbGFzcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNTeW1ib2xzID0gcmVxdWlyZSgnaGFzLXN5bWJvbHMnKSgpO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gaGFzU3ltYm9scyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcbnZhciByZWdleEV4ZWM7XG52YXIgaXNSZWdleE1hcmtlcjtcbnZhciBiYWRTdHJpbmdpZmllcjtcblxuaWYgKGhhc1RvU3RyaW5nVGFnKSB7XG5cdHJlZ2V4RXhlYyA9IEZ1bmN0aW9uLmNhbGwuYmluZChSZWdFeHAucHJvdG90eXBlLmV4ZWMpO1xuXHRpc1JlZ2V4TWFya2VyID0ge307XG5cblx0dmFyIHRocm93UmVnZXhNYXJrZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhyb3cgaXNSZWdleE1hcmtlcjtcblx0fTtcblx0YmFkU3RyaW5naWZpZXIgPSB7XG5cdFx0dG9TdHJpbmc6IHRocm93UmVnZXhNYXJrZXIsXG5cdFx0dmFsdWVPZjogdGhyb3dSZWdleE1hcmtlclxuXHR9O1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sLnRvUHJpbWl0aXZlID09PSAnc3ltYm9sJykge1xuXHRcdGJhZFN0cmluZ2lmaWVyW1N5bWJvbC50b1ByaW1pdGl2ZV0gPSB0aHJvd1JlZ2V4TWFya2VyO1xuXHR9XG59XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgcmVnZXhDbGFzcyA9ICdbb2JqZWN0IFJlZ0V4cF0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1RvU3RyaW5nVGFnXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXHQ/IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0XHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0cmVnZXhFeGVjKHZhbHVlLCBiYWRTdHJpbmdpZmllcik7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGUgPT09IGlzUmVnZXhNYXJrZXI7XG5cdFx0fVxuXHR9XG5cdDogZnVuY3Rpb24gaXNSZWdleCh2YWx1ZSkge1xuXHRcdC8vIEluIG9sZGVyIGJyb3dzZXJzLCB0eXBlb2YgcmVnZXggaW5jb3JyZWN0bHkgcmV0dXJucyAnZnVuY3Rpb24nXG5cdFx0aWYgKCF2YWx1ZSB8fCAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSByZWdleENsYXNzO1xuXHR9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNSZWFsU3ltYm9sT2JqZWN0KHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS52YWx1ZU9mKCkgIT09ICdzeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1TdHJpbmdSZWdleC50ZXN0KHN5bVRvU3RyLmNhbGwodmFsdWUpKTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHQvLyB0aGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgU3ltYm9scy5cblx0XHRyZXR1cm4gZmFsc2UgJiYgdmFsdWU7XG5cdH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBudW1iZXJJc05hTiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpcyhhLCBiKSB7XG5cdGlmIChhID09PSAwICYmIGIgPT09IDApIHtcblx0XHRyZXR1cm4gMSAvIGEgPT09IDEgLyBiO1xuXHR9XG5cdGlmIChhID09PSBiKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKG51bWJlcklzTmFOKGEpICYmIG51bWJlcklzTmFOKGIpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0L2hlbHBlcnMvY2FsbEJpbmQnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHBvbHlmaWxsID0gY2FsbEJpbmQoZ2V0UG9seWZpbGwoKSwgT2JqZWN0KTtcblxuZGVmaW5lKHBvbHlmaWxsLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHRyZXR1cm4gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGltcGxlbWVudGF0aW9uO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbU9iamVjdElzKCkge1xuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXHRkZWZpbmUoT2JqZWN0LCB7IGlzOiBwb2x5ZmlsbCB9LCB7XG5cdFx0aXM6IGZ1bmN0aW9uIHRlc3RPYmplY3RJcygpIHtcblx0XHRcdHJldHVybiBPYmplY3QuaXMgIT09IHBvbHlmaWxsO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzU2hpbTtcbmlmICghT2JqZWN0LmtleXMpIHtcblx0Ly8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cblx0dmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cdHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ2xvYmFsLXJlcXVpcmVcblx0dmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cdHZhciBoYXNEb250RW51bUJ1ZyA9ICFpc0VudW1lcmFibGUuY2FsbCh7IHRvU3RyaW5nOiBudWxsIH0sICd0b1N0cmluZycpO1xuXHR2YXIgaGFzUHJvdG9FbnVtQnVnID0gaXNFbnVtZXJhYmxlLmNhbGwoZnVuY3Rpb24gKCkge30sICdwcm90b3R5cGUnKTtcblx0dmFyIGRvbnRFbnVtcyA9IFtcblx0XHQndG9TdHJpbmcnLFxuXHRcdCd0b0xvY2FsZVN0cmluZycsXG5cdFx0J3ZhbHVlT2YnLFxuXHRcdCdoYXNPd25Qcm9wZXJ0eScsXG5cdFx0J2lzUHJvdG90eXBlT2YnLFxuXHRcdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdFx0J2NvbnN0cnVjdG9yJ1xuXHRdO1xuXHR2YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHRcdHZhciBjdG9yID0gby5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gY3RvciAmJiBjdG9yLnByb3RvdHlwZSA9PT0gbztcblx0fTtcblx0dmFyIGV4Y2x1ZGVkS2V5cyA9IHtcblx0XHQkYXBwbGljYXRpb25DYWNoZTogdHJ1ZSxcblx0XHQkY29uc29sZTogdHJ1ZSxcblx0XHQkZXh0ZXJuYWw6IHRydWUsXG5cdFx0JGZyYW1lOiB0cnVlLFxuXHRcdCRmcmFtZUVsZW1lbnQ6IHRydWUsXG5cdFx0JGZyYW1lczogdHJ1ZSxcblx0XHQkaW5uZXJIZWlnaHQ6IHRydWUsXG5cdFx0JGlubmVyV2lkdGg6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmNoYW5nZTogdHJ1ZSxcblx0XHQkb25tb3pmdWxsc2NyZWVuZXJyb3I6IHRydWUsXG5cdFx0JG91dGVySGVpZ2h0OiB0cnVlLFxuXHRcdCRvdXRlcldpZHRoOiB0cnVlLFxuXHRcdCRwYWdlWE9mZnNldDogdHJ1ZSxcblx0XHQkcGFnZVlPZmZzZXQ6IHRydWUsXG5cdFx0JHBhcmVudDogdHJ1ZSxcblx0XHQkc2Nyb2xsTGVmdDogdHJ1ZSxcblx0XHQkc2Nyb2xsVG9wOiB0cnVlLFxuXHRcdCRzY3JvbGxYOiB0cnVlLFxuXHRcdCRzY3JvbGxZOiB0cnVlLFxuXHRcdCRzZWxmOiB0cnVlLFxuXHRcdCR3ZWJraXRJbmRleGVkREI6IHRydWUsXG5cdFx0JHdlYmtpdFN0b3JhZ2VJbmZvOiB0cnVlLFxuXHRcdCR3aW5kb3c6IHRydWVcblx0fTtcblx0dmFyIGhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1ZyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmb3IgKHZhciBrIGluIHdpbmRvdykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKCFleGNsdWRlZEtleXNbJyQnICsga10gJiYgaGFzLmNhbGwod2luZG93LCBrKSAmJiB3aW5kb3dba10gIT09IG51bGwgJiYgdHlwZW9mIHdpbmRvd1trXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSgpKTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneSA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnKSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRrZXlzU2hpbSA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdFx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHRcdHZhciBpc0Z1bmN0aW9uID0gdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHRcdHZhciBpc0FyZ3VtZW50cyA9IGlzQXJncyhvYmplY3QpO1xuXHRcdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdFx0dmFyIHRoZUtleXMgPSBbXTtcblxuXHRcdGlmICghaXNPYmplY3QgJiYgIWlzRnVuY3Rpb24gJiYgIWlzQXJndW1lbnRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIHNraXBQcm90byA9IGhhc1Byb3RvRW51bUJ1ZyAmJiBpc0Z1bmN0aW9uO1xuXHRcdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGlzQXJndW1lbnRzICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGopKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcblx0XHRcdFx0aWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBoYXMuY2FsbChvYmplY3QsIG5hbWUpKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaGFzRG9udEVudW1CdWcpIHtcblx0XHRcdHZhciBza2lwQ29uc3RydWN0b3IgPSBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kob2JqZWN0KTtcblxuXHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdFx0aWYgKCEoc2tpcENvbnN0cnVjdG9yICYmIGRvbnRFbnVtc1trXSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgaGFzLmNhbGwob2JqZWN0LCBkb250RW51bXNba10pKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKGRvbnRFbnVtc1trXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoZUtleXM7XG5cdH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xuXG52YXIgb3JpZ0tleXMgPSBPYmplY3Qua2V5cztcbnZhciBrZXlzU2hpbSA9IG9yaWdLZXlzID8gZnVuY3Rpb24ga2V5cyhvKSB7IHJldHVybiBvcmlnS2V5cyhvKTsgfSA6IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIG9yaWdpbmFsS2V5cyA9IE9iamVjdC5rZXlzO1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHR2YXIgYXJncyA9IE9iamVjdC5rZXlzKGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gYXJncyAmJiBhcmdzLmxlbmd0aCA9PT0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdE9iamVjdC5rZXlzID0ga2V5c1NoaW07XG5cdH1cblx0cmV0dXJuIE9iamVjdC5rZXlzIHx8IGtleXNTaGltO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHR2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBpc0FyZ3MgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJncykge1xuXHRcdGlzQXJncyA9IHN0ciAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdFx0dG9TdHIuY2FsbCh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBpc0FyZ3M7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0LzIwMTkvUmVxdWlyZU9iamVjdENvZXJjaWJsZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIGNhbGxCb3VuZCA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0L2hlbHBlcnMvY2FsbEJvdW5kJyk7XG52YXIgJGlzRW51bWVyYWJsZSA9IGNhbGxCb3VuZCgnT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVudHJpZXMoTykge1xuXHR2YXIgb2JqID0gUmVxdWlyZU9iamVjdENvZXJjaWJsZShPKTtcblx0dmFyIGVudHJ5cyA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG5cdFx0aWYgKGhhcyhvYmosIGtleSkgJiYgJGlzRW51bWVyYWJsZShvYmosIGtleSkpIHtcblx0XHRcdGVudHJ5cy5wdXNoKFtrZXksIG9ialtrZXldXSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBlbnRyeXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0L2hlbHBlcnMvY2FsbEJpbmQnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHBvbHlmaWxsID0gY2FsbEJpbmQoZ2V0UG9seWZpbGwoKSwgT2JqZWN0KTtcblxuZGVmaW5lKHBvbHlmaWxsLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHRyZXR1cm4gdHlwZW9mIE9iamVjdC5lbnRyaWVzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmVudHJpZXMgOiBpbXBsZW1lbnRhdGlvbjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1FbnRyaWVzKCkge1xuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXHRkZWZpbmUoT2JqZWN0LCB7IGVudHJpZXM6IHBvbHlmaWxsIH0sIHtcblx0XHRlbnRyaWVzOiBmdW5jdGlvbiB0ZXN0RW50cmllcygpIHtcblx0XHRcdHJldHVybiBPYmplY3QuZW50cmllcyAhPT0gcG9seWZpbGw7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIFJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC8yMDE5L1JlcXVpcmVPYmplY3RDb2VyY2libGUnKTtcbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9oZWxwZXJzL2NhbGxCb3VuZCcpO1xuXG52YXIgJGlzRW51bWVyYWJsZSA9IGNhbGxCb3VuZCgnT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHZhbHVlcyhPKSB7XG5cdHZhciBvYmogPSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKE8pO1xuXHR2YXIgdmFscyA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG5cdFx0aWYgKGhhcyhvYmosIGtleSkgJiYgJGlzRW51bWVyYWJsZShvYmosIGtleSkpIHtcblx0XHRcdHZhbHMucHVzaChvYmpba2V5XSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YWxzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBzaGltID0gcmVxdWlyZSgnLi9zaGltJyk7XG5cbnZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cbmRlZmluZShwb2x5ZmlsbCwge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9seWZpbGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0cmV0dXJuIHR5cGVvZiBPYmplY3QudmFsdWVzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LnZhbHVlcyA6IGltcGxlbWVudGF0aW9uO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbVZhbHVlcygpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblx0ZGVmaW5lKE9iamVjdCwgeyB2YWx1ZXM6IHBvbHlmaWxsIH0sIHtcblx0XHR2YWx1ZXM6IGZ1bmN0aW9uIHRlc3RWYWx1ZXMoKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnZhbHVlcyAhPT0gcG9seWZpbGw7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9haXJibmJQcm9wVHlwZXMgPSByZXF1aXJlKCdhaXJibmItcHJvcC10eXBlcycpO1xuXG52YXIgX2NvbnNvbGlkYXRlZEV2ZW50cyA9IHJlcXVpcmUoJ2NvbnNvbGlkYXRlZC1ldmVudHMnKTtcblxudmFyIF9vYmplY3QgPSByZXF1aXJlKCdvYmplY3QudmFsdWVzJyk7XG5cbnZhciBfb2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdCk7XG5cbnZhciBfZG9jdW1lbnQgPSByZXF1aXJlKCdkb2N1bWVudC5jb250YWlucycpO1xuXG52YXIgX2RvY3VtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RvY3VtZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBESVNQTEFZID0ge1xuICBCTE9DSzogJ2Jsb2NrJyxcbiAgRkxFWDogJ2ZsZXgnLFxuICBJTkxJTkU6ICdpbmxpbmUnLFxuICBJTkxJTkVfQkxPQ0s6ICdpbmxpbmUtYmxvY2snLFxuICBDT05URU5UUzogJ2NvbnRlbnRzJ1xufTtcblxudmFyIHByb3BUeXBlcyA9ICgwLCBfYWlyYm5iUHJvcFR5cGVzLmZvcmJpZEV4dHJhUHJvcHMpKHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubm9kZS5pc1JlcXVpcmVkLFxuICBvbk91dHNpZGVDbGljazogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5mdW5jLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsXG4gIHVzZUNhcHR1cmU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCxcbiAgZGlzcGxheTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZigoMCwgX29iamVjdDJbJ2RlZmF1bHQnXSkoRElTUExBWSkpXG59KTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuXG4gIC8vIGB1c2VDYXB0dXJlYCBpcyBzZXQgdG8gdHJ1ZSBieSBkZWZhdWx0IHNvIHRoYXQgYSBgc3RvcFByb3BhZ2F0aW9uYCBpbiB0aGVcbiAgLy8gY2hpbGRyZW4gd2lsbCBub3QgcHJldmVudCBhbGwgb3V0c2lkZSBjbGljayBoYW5kbGVycyBmcm9tIGZpcmluZyAtIG1hamFcbiAgdXNlQ2FwdHVyZTogdHJ1ZSxcbiAgZGlzcGxheTogRElTUExBWS5CTE9DS1xufTtcblxudmFyIE91dHNpZGVDbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoT3V0c2lkZUNsaWNrSGFuZGxlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gT3V0c2lkZUNsaWNrSGFuZGxlcigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPdXRzaWRlQ2xpY2tIYW5kbGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gT3V0c2lkZUNsaWNrSGFuZGxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE91dHNpZGVDbGlja0hhbmRsZXIpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgIF90aGlzLm9uTW91c2VEb3duID0gX3RoaXMub25Nb3VzZURvd24uYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25Nb3VzZVVwID0gX3RoaXMub25Nb3VzZVVwLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnNldENoaWxkTm9kZVJlZiA9IF90aGlzLnNldENoaWxkTm9kZVJlZi5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoT3V0c2lkZUNsaWNrSGFuZGxlciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgdXNlQ2FwdHVyZSA9IF9wcm9wcy51c2VDYXB0dXJlO1xuXG5cbiAgICAgICAgaWYgKCFkaXNhYmxlZCkgdGhpcy5hZGRNb3VzZURvd25FdmVudExpc3RlbmVyKHVzZUNhcHR1cmUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcG9uZW50RGlkTW91bnQ7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoX3JlZjIpIHtcbiAgICAgICAgdmFyIHByZXZEaXNhYmxlZCA9IF9yZWYyLmRpc2FibGVkO1xuICAgICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wczIuZGlzYWJsZWQsXG4gICAgICAgICAgICB1c2VDYXB0dXJlID0gX3Byb3BzMi51c2VDYXB0dXJlO1xuXG4gICAgICAgIGlmIChwcmV2RGlzYWJsZWQgIT09IGRpc2FibGVkKSB7XG4gICAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTW91c2VEb3duRXZlbnRMaXN0ZW5lcih1c2VDYXB0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudERpZFVwZGF0ZTtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudFdpbGxVbm1vdW50O1xuICAgIH0oKVxuXG4gICAgLy8gVXNlIG1vdXNlZG93bi9tb3VzZXVwIHRvIGVuZm9yY2UgdGhhdCBjbGlja3MgcmVtYWluIG91dHNpZGUgdGhlIHJvb3Qnc1xuICAgIC8vIGRlc2NlbmRhbnQgdHJlZSwgZXZlbiB3aGVuIGRyYWdnZWQuIFRoaXMgc2hvdWxkIGFsc28gZ2V0IHRyaWdnZXJlZCBvblxuICAgIC8vIHRvdWNoIGRldmljZXMuXG5cbiAgfSwge1xuICAgIGtleTogJ29uTW91c2VEb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgICB2YXIgdXNlQ2FwdHVyZSA9IHRoaXMucHJvcHMudXNlQ2FwdHVyZTtcblxuXG4gICAgICAgIHZhciBpc0Rlc2NlbmRhbnRPZlJvb3QgPSB0aGlzLmNoaWxkTm9kZSAmJiAoMCwgX2RvY3VtZW50MlsnZGVmYXVsdCddKSh0aGlzLmNoaWxkTm9kZSwgZS50YXJnZXQpO1xuICAgICAgICBpZiAoIWlzRGVzY2VuZGFudE9mUm9vdCkge1xuICAgICAgICAgIGlmICh0aGlzLnJlbW92ZU1vdXNlVXApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTW91c2VVcCgpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVNb3VzZVVwID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZW1vdmVNb3VzZVVwID0gKDAsIF9jb25zb2xpZGF0ZWRFdmVudHMuYWRkRXZlbnRMaXN0ZW5lcikoZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAsIHsgY2FwdHVyZTogdXNlQ2FwdHVyZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb25Nb3VzZURvd247XG4gICAgfSgpXG5cbiAgICAvLyBVc2UgbW91c2Vkb3duL21vdXNldXAgdG8gZW5mb3JjZSB0aGF0IGNsaWNrcyByZW1haW4gb3V0c2lkZSB0aGUgcm9vdCdzXG4gICAgLy8gZGVzY2VuZGFudCB0cmVlLCBldmVuIHdoZW4gZHJhZ2dlZC4gVGhpcyBzaG91bGQgYWxzbyBnZXQgdHJpZ2dlcmVkIG9uXG4gICAgLy8gdG91Y2ggZGV2aWNlcy5cblxuICB9LCB7XG4gICAga2V5OiAnb25Nb3VzZVVwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgdmFyIG9uT3V0c2lkZUNsaWNrID0gdGhpcy5wcm9wcy5vbk91dHNpZGVDbGljaztcblxuXG4gICAgICAgIHZhciBpc0Rlc2NlbmRhbnRPZlJvb3QgPSB0aGlzLmNoaWxkTm9kZSAmJiAoMCwgX2RvY3VtZW50MlsnZGVmYXVsdCddKSh0aGlzLmNoaWxkTm9kZSwgZS50YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5yZW1vdmVNb3VzZVVwKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVNb3VzZVVwKCk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVNb3VzZVVwID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNEZXNjZW5kYW50T2ZSb290KSB7XG4gICAgICAgICAgb25PdXRzaWRlQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9uTW91c2VVcDtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogJ3NldENoaWxkTm9kZVJlZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIHNldENoaWxkTm9kZVJlZihyZWYpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGUgPSByZWY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXRDaGlsZE5vZGVSZWY7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6ICdhZGRNb3VzZURvd25FdmVudExpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gYWRkTW91c2VEb3duRXZlbnRMaXN0ZW5lcih1c2VDYXB0dXJlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTW91c2VEb3duID0gKDAsIF9jb25zb2xpZGF0ZWRFdmVudHMuYWRkRXZlbnRMaXN0ZW5lcikoZG9jdW1lbnQsICdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLCB7IGNhcHR1cmU6IHVzZUNhcHR1cmUgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhZGRNb3VzZURvd25FdmVudExpc3RlbmVyO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlRXZlbnRMaXN0ZW5lcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlTW91c2VEb3duKSB0aGlzLnJlbW92ZU1vdXNlRG93bigpO1xuICAgICAgICBpZiAodGhpcy5yZW1vdmVNb3VzZVVwKSB0aGlzLnJlbW92ZU1vdXNlVXAoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbW92ZUV2ZW50TGlzdGVuZXJzO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczMuY2hpbGRyZW4sXG4gICAgICAgICAgICBkaXNwbGF5ID0gX3Byb3BzMy5kaXNwbGF5O1xuXG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogdGhpcy5zZXRDaGlsZE5vZGVSZWYsXG4gICAgICAgICAgICBzdHlsZTogZGlzcGxheSAhPT0gRElTUExBWS5CTE9DSyAmJiAoMCwgX29iamVjdDJbJ2RlZmF1bHQnXSkoRElTUExBWSkuaW5jbHVkZXMoZGlzcGxheSkgPyB7IGRpc3BsYXk6IGRpc3BsYXkgfSA6IHVuZGVmaW5lZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBPdXRzaWRlQ2xpY2tIYW5kbGVyO1xufShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gT3V0c2lkZUNsaWNrSGFuZGxlcjtcblxuXG5PdXRzaWRlQ2xpY2tIYW5kbGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbk91dHNpZGVDbGlja0hhbmRsZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzOyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2J1aWxkL091dHNpZGVDbGlja0hhbmRsZXInKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5pbXBvcnQgT3V0c2lkZUNsaWNrSGFuZGxlciBmcm9tICdyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXInO1xuXG5jbGFzcyBTbGlkZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBzdGF0ZSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICB9XG5cbiAgb3V0c2lkZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHNsaWRlQ29udGFpbmVyICR7YWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgPlxuICAgICAgICA8T3V0c2lkZUNsaWNrSGFuZGxlclxuICAgICAgICAgIG9uT3V0c2lkZUNsaWNrPXt0aGlzLm91dHNpZGVDbGlja0hhbmRsZXJ9XG4gICAgICAgID5cbiAgICAgICAgICA8U2xpZGUgLz5cbiAgICAgICAgPC8gT3V0c2lkZUNsaWNrSGFuZGxlcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZUNvbnRhaW5lcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBpbnRlcmZhY2UgSUNvbXBvbmVudFByb3BzIHtcbi8vICAgbmFtZToge1xuLy8gICAgIGZpcnN0OiBzdHJpbmc7XG4vLyAgICAgbGFzdDogc3RyaW5nO1xuLy8gICB9O1xuLy8gICBwaWN0dXJlOiB7XG4vLyAgICAgbGFyZ2U6IHN0cmluZztcbi8vICAgfTtcbi8vICAgbG9naW46IHtcbi8vICAgICB1c2VybmFtZTogc3RyaW5nO1xuLy8gICB9O1xuLy8gICBwaG9uZTogc3RyaW5nO1xuLy8gICByZWdpc3RlcmVkOiB7XG4vLyAgICAgZGF0ZTogc3RyaW5nO1xuLy8gICB9O1xuLy8gICBsb2NhdGlvbjoge1xuLy8gICAgIGNpdHk6IHN0cmluZztcbi8vICAgfTtcbi8vIH1cblxuY2xhc3MgU2xpZGUgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcblxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc3QgeyBuYW1lLCBwaWN0dXJlLCBsb2dpbiwgcGhvbmUsIHJlZ2lzdGVyZWQsIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1zbGlkZVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltZy9jbG9zZS5zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlLWNsb3NlXCJcbiAgICAgICAgICAvLyBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlQ2xpY2t9XG4gICAgICAgICAgYWx0PVwiY2xvc2VcIlxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFQSSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCBVc2VyQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3VzZXIvdXNlci1jYXJkJztcbmltcG9ydCBTbGlkZUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL3NsaWRlL3NsaWRlLWNvbnRhaW5lcic7XG5pbXBvcnQgT3V0c2lkZUNsaWNrSGFuZGxlciBmcm9tICdyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXInO1xuXG5jbGFzcyBVc2VycyBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBzdGF0ZSA9IHtcbiAgICB1c2VyczogW10gYXMgQXJyYXk8YW55PixcbiAgfVxuXG4gIGFwaSA9IG5ldyBBUEkoKTtcblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLmFwaS5nZXRVc2VycygxMilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyczogZGF0YS5yZXN1bHRzIH0pO1xuICAgICAgfSlcbiAgfVxuXG4gIG91dHNpZGVDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXJzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzLXBhZ2VcIj5cbiAgICAgICAgey8qIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZUNvbnRhaW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICA8T3V0c2lkZUNsaWNrSGFuZGxlclxuICAgICAgICAgICAgb25PdXRzaWRlQ2xpY2s9e3RoaXMub3V0c2lkZUNsaWNrSGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VXNlclNsaWRlIC8+XG4gICAgICAgICAgPC8gT3V0c2lkZUNsaWNrSGFuZGxlcj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8U2xpZGVDb250YWluZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2Vycy1wYWdlX190aXRsZVwiPlVzZXJzPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnMtbGlzdFwiPlxuICAgICAgICAgIHt1c2Vycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VXNlckNhcmQgey4uLml0ZW19IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=