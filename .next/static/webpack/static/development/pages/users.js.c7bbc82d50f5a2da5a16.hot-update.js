webpackHotUpdate("static\\development\\pages\\users.js",{

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
        className: "slide-close",
        onClick: this.props.closeClick,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGlkZS9zbGlkZS50c3giXSwibmFtZXMiOlsiU2xpZGUiLCJwcm9wcyIsImNsb3NlQ2xpY2siLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxLOzs7Ozs7Ozs7Ozs7OzZCQUVLO0FBQ1A7QUFFQSxhQUNFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFdBQUcsRUFBQyxnQkFETjtBQUVFLGlCQUFTLEVBQUMsYUFGWjtBQUdFLGVBQU8sRUFBRSxLQUFLQyxLQUFMLENBQVdDLFVBSHRCO0FBSUUsV0FBRyxFQUFDLE9BSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREY7QUFXRDs7OztFQWhCaUJDLCtDOztBQW1CTEgsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVzZXJzLmpzLmM3YmJjODJkNTBmNWEyZGE1YTE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBpbnRlcmZhY2UgSUNvbXBvbmVudFByb3BzIHtcbi8vICAgbmFtZToge1xuLy8gICAgIGZpcnN0OiBzdHJpbmc7XG4vLyAgICAgbGFzdDogc3RyaW5nO1xuLy8gICB9O1xuLy8gICBwaWN0dXJlOiB7XG4vLyAgICAgbGFyZ2U6IHN0cmluZztcbi8vICAgfTtcbi8vICAgbG9naW46IHtcbi8vICAgICB1c2VybmFtZTogc3RyaW5nO1xuLy8gICB9O1xuLy8gICBwaG9uZTogc3RyaW5nO1xuLy8gICByZWdpc3RlcmVkOiB7XG4vLyAgICAgZGF0ZTogc3RyaW5nO1xuLy8gICB9O1xuLy8gICBsb2NhdGlvbjoge1xuLy8gICAgIGNpdHk6IHN0cmluZztcbi8vICAgfTtcbi8vIH1cblxuY2xhc3MgU2xpZGUgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcblxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc3QgeyBuYW1lLCBwaWN0dXJlLCBsb2dpbiwgcGhvbmUsIHJlZ2lzdGVyZWQsIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1zbGlkZVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltZy9jbG9zZS5zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlLWNsb3NlXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlQ2xpY2t9XG4gICAgICAgICAgYWx0PVwiY2xvc2VcIlxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZTsiXSwic291cmNlUm9vdCI6IiJ9