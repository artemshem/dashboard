webpackHotUpdate("static\\development\\pages\\users.js",{

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
      console.log(this.props);
      return __jsx("div", {
        className: "slideContainer ".concat(active ? 'active' : ''),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }
      }, __jsx(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onOutsideClick: this.outsideClickHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }, __jsx(_slide__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGlkZS9zbGlkZS1jb250YWluZXIudHN4Il0sIm5hbWVzIjpbIlNsaWRlQ29udGFpbmVyIiwiYWN0aXZlIiwic2V0U3RhdGUiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIm91dHNpZGVDbGlja0hhbmRsZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsWUFBTSxFQUFFO0FBREYsSzs7OE5BSWMsWUFBTTtBQUMxQixZQUFLQyxRQUFMLENBQWM7QUFBRUQsY0FBTSxFQUFFO0FBQVYsT0FBZDtBQUNELEs7Ozs7Ozs7NkJBRVE7QUFBQSxVQUNDQSxNQURELEdBQ1ksS0FBS0UsS0FEakIsQ0FDQ0YsTUFERDtBQUVQRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFqQjtBQUVBLGFBQ0U7QUFDRSxpQkFBUywyQkFBb0JMLE1BQU0sR0FBRyxRQUFILEdBQWMsRUFBeEMsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0UsTUFBQyxrRUFBRDtBQUNFLHNCQUFjLEVBQUUsS0FBS00sbUJBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQUhGLENBREY7QUFXRDs7OztFQXhCMEJDLCtDOztBQTJCZFIsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVzZXJzLmpzLjljYmQyMmQ0OTVjNTZiNDY2OTgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlIGZyb20gJy4vc2xpZGUnO1xuaW1wb3J0IE91dHNpZGVDbGlja0hhbmRsZXIgZnJvbSAncmVhY3Qtb3V0c2lkZS1jbGljay1oYW5kbGVyJztcblxuY2xhc3MgU2xpZGVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgc3RhdGUgPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgfVxuXG4gIG91dHNpZGVDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogZmFsc2UgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BzbGlkZUNvbnRhaW5lciAke2FjdGl2ZSA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgID5cbiAgICAgICAgPE91dHNpZGVDbGlja0hhbmRsZXJcbiAgICAgICAgICBvbk91dHNpZGVDbGljaz17dGhpcy5vdXRzaWRlQ2xpY2tIYW5kbGVyfVxuICAgICAgICA+XG4gICAgICAgICAgPFNsaWRlIC8+XG4gICAgICAgIDwvIE91dHNpZGVDbGlja0hhbmRsZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==