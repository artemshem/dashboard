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
      }), this.props.children);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGlkZS9zbGlkZS50c3giXSwibmFtZXMiOlsiU2xpZGUiLCJwcm9wcyIsImNsb3NlQ2xpY2siLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7NkJBRUs7QUFDUDtBQUVBLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsV0FBRyxFQUFDLGdCQUROO0FBRUUsaUJBQVMsRUFBQyxhQUZaO0FBR0UsZUFBTyxFQUFFLEtBQUtDLEtBQUwsQ0FBV0MsVUFIdEI7QUFJRSxXQUFHLEVBQUMsT0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFPRyxLQUFLRCxLQUFMLENBQVdFLFFBUGQsQ0FERjtBQVdEOzs7O0VBaEJpQkMsK0M7O0FBbUJMSixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnMuanMuNjNjN2E0ZDZkOGMxZjZlNTJjZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIGludGVyZmFjZSBJQ29tcG9uZW50UHJvcHMge1xuLy8gICBuYW1lOiB7XG4vLyAgICAgZmlyc3Q6IHN0cmluZztcbi8vICAgICBsYXN0OiBzdHJpbmc7XG4vLyAgIH07XG4vLyAgIHBpY3R1cmU6IHtcbi8vICAgICBsYXJnZTogc3RyaW5nO1xuLy8gICB9O1xuLy8gICBsb2dpbjoge1xuLy8gICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4vLyAgIH07XG4vLyAgIHBob25lOiBzdHJpbmc7XG4vLyAgIHJlZ2lzdGVyZWQ6IHtcbi8vICAgICBkYXRlOiBzdHJpbmc7XG4vLyAgIH07XG4vLyAgIGxvY2F0aW9uOiB7XG4vLyAgICAgY2l0eTogc3RyaW5nO1xuLy8gICB9O1xuLy8gfVxuXG5jbGFzcyBTbGlkZSBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zdCB7IG5hbWUsIHBpY3R1cmUsIGxvZ2luLCBwaG9uZSwgcmVnaXN0ZXJlZCwgbG9jYXRpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLXNsaWRlXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW1nL2Nsb3NlLnN2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGUtY2xvc2VcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VDbGlja31cbiAgICAgICAgICBhbHQ9XCJjbG9zZVwiXG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlOyJdLCJzb3VyY2VSb290IjoiIn0=