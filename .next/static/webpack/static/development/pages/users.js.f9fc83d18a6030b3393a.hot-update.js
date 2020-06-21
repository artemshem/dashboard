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
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide */ "./src/components/slide/slide.tsx");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-outside-click-handler */ "./node_modules/react-outside-click-handler/index.js");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\slide\\slide-container.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var SlideContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SlideContainer, _Component);

  var _super = _createSuper(SlideContainer);

  function SlideContainer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SlideContainer);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SlideContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          slideActive = _this$props.slideActive,
          outsideClickHandler = _this$props.outsideClickHandler,
          children = _this$props.children;
      return __jsx("div", {
        className: "slide-container ".concat(slideActive ? 'active' : ''),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 7
        }
      }, __jsx(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_7___default.a, {
        onOutsideClick: outsideClickHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, __jsx(_slide__WEBPACK_IMPORTED_MODULE_6__["default"], {
        closeClick: outsideClickHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }
      }, children)));
    }
  }]);

  return SlideContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGlkZS9zbGlkZS1jb250YWluZXIudHN4Il0sIm5hbWVzIjpbIlNsaWRlQ29udGFpbmVyIiwicHJvcHMiLCJzbGlkZUFjdGl2ZSIsIm91dHNpZGVDbGlja0hhbmRsZXIiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxjOzs7Ozs7Ozs7Ozs7OzZCQUVLO0FBQUEsd0JBQ2dELEtBQUtDLEtBRHJEO0FBQUEsVUFDQ0MsV0FERCxlQUNDQSxXQUREO0FBQUEsVUFDY0MsbUJBRGQsZUFDY0EsbUJBRGQ7QUFBQSxVQUNtQ0MsUUFEbkMsZUFDbUNBLFFBRG5DO0FBR1AsYUFDRTtBQUFLLGlCQUFTLDRCQUFxQkYsV0FBVyxHQUFHLFFBQUgsR0FBYyxFQUE5QyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGtFQUFEO0FBQXFCLHNCQUFjLEVBQUVDLG1CQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw4Q0FBRDtBQUFPLGtCQUFVLEVBQUVBLG1CQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dDLFFBREgsQ0FERixDQURGLENBREY7QUFTRDs7OztFQWQwQkMsK0M7O0FBaUJkTCw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnMuanMuZjlmYzgzZDE4YTYwMzBiMzM5M2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5pbXBvcnQgT3V0c2lkZUNsaWNrSGFuZGxlciBmcm9tICdyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXInO1xuXG5jbGFzcyBTbGlkZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNsaWRlQWN0aXZlLCBvdXRzaWRlQ2xpY2tIYW5kbGVyLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHNsaWRlLWNvbnRhaW5lciAke3NsaWRlQWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31gfSA+XG4gICAgICAgIDxPdXRzaWRlQ2xpY2tIYW5kbGVyIG9uT3V0c2lkZUNsaWNrPXtvdXRzaWRlQ2xpY2tIYW5kbGVyfSA+XG4gICAgICAgICAgPFNsaWRlIGNsb3NlQ2xpY2s9e291dHNpZGVDbGlja0hhbmRsZXJ9ID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICA8LyBPdXRzaWRlQ2xpY2tIYW5kbGVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlQ29udGFpbmVyOyJdLCJzb3VyY2VSb290IjoiIn0=