webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./src/components/user/user-card.tsx":
/*!*******************************************!*\
  !*** ./src/components/user/user-card.tsx ***!
  \*******************************************/
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





var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\user\\user-card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var UserCard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UserCard, _Component);

  var _super = _createSuper(UserCard);

  function UserCard() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserCard);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          picture = _this$props.picture,
          login = _this$props.login,
          phone = _this$props.phone,
          registered = _this$props.registered,
          location = _this$props.location,
          uniqueID = _this$props.uniqueID,
          clickOnCard = _this$props.clickOnCard;
      return __jsx("div", {
        className: "user-card-outer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "user-card",
        onClick: function onClick() {
          return clickOnCard(uniqueID);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "user-card-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "user-card__name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }
      }, name.first, " ", name.last)), __jsx("div", {
        className: "user-card__img",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      }, __jsx("img", {
        src: picture.large,
        alt: "user",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "user-card-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, __jsx("p", {
        className: "user-card-info__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, "Username: ", login.username), __jsx("p", {
        className: "user-card-info__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }
      }, "Phone: ", phone), __jsx("p", {
        className: "user-card-info__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }
      }, "City: ", location.city))));
    }
  }]);

  return UserCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserCard);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyL3VzZXItY2FyZC50c3giXSwibmFtZXMiOlsiVXNlckNhcmQiLCJwcm9wcyIsIm5hbWUiLCJwaWN0dXJlIiwibG9naW4iLCJwaG9uZSIsInJlZ2lzdGVyZWQiLCJsb2NhdGlvbiIsInVuaXF1ZUlEIiwiY2xpY2tPbkNhcmQiLCJmaXJzdCIsImxhc3QiLCJsYXJnZSIsInVzZXJuYW1lIiwiY2l0eSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBd0JNQSxROzs7Ozs7Ozs7Ozs7OzZCQUVLO0FBQUEsd0JBQzhFLEtBQUtDLEtBRG5GO0FBQUEsVUFDQ0MsSUFERCxlQUNDQSxJQUREO0FBQUEsVUFDT0MsT0FEUCxlQUNPQSxPQURQO0FBQUEsVUFDZ0JDLEtBRGhCLGVBQ2dCQSxLQURoQjtBQUFBLFVBQ3VCQyxLQUR2QixlQUN1QkEsS0FEdkI7QUFBQSxVQUM4QkMsVUFEOUIsZUFDOEJBLFVBRDlCO0FBQUEsVUFDMENDLFFBRDFDLGVBQzBDQSxRQUQxQztBQUFBLFVBQ29EQyxRQURwRCxlQUNvREEsUUFEcEQ7QUFBQSxVQUM4REMsV0FEOUQsZUFDOERBLFdBRDlEO0FBR1AsYUFDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQ0UsZUFBTyxFQUFFO0FBQUEsaUJBQU1BLFdBQVcsQ0FBQ0QsUUFBRCxDQUFqQjtBQUFBLFNBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR04sSUFBSSxDQUFDUSxLQURSLE9BQ2dCUixJQUFJLENBQUNTLElBRHJCLENBREYsQ0FIRixFQVFFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxXQUFHLEVBQUVSLE9BQU8sQ0FBQ1MsS0FBbEI7QUFBeUIsV0FBRyxFQUFDLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQVJGLEVBV0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLGlCQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBK0NSLEtBQUssQ0FBQ1MsUUFBckQsQ0FERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUE0Q1IsS0FBNUMsQ0FGRixFQUdFO0FBQUcsaUJBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUEyQ0UsUUFBUSxDQUFDTyxJQUFwRCxDQUhGLENBWEYsQ0FERixDQURGO0FBcUJEOzs7O0VBMUJvQkMsK0M7O0FBNkJSZix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnMuanMuN2U4MTMwZTFhMzI0MDgxY2Y4NjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBJQ29tcG9uZW50UHJvcHMge1xuICBuYW1lOiB7XG4gICAgZmlyc3Q6IHN0cmluZztcbiAgICBsYXN0OiBzdHJpbmc7XG4gIH07XG4gIHBpY3R1cmU6IHtcbiAgICBsYXJnZTogc3RyaW5nO1xuICB9O1xuICBsb2dpbjoge1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gIH07XG4gIHBob25lOiBzdHJpbmc7XG4gIHJlZ2lzdGVyZWQ6IHtcbiAgICBkYXRlOiBzdHJpbmc7XG4gIH07XG4gIGxvY2F0aW9uOiB7XG4gICAgY2l0eTogc3RyaW5nO1xuICB9O1xuICB1bmlxdWVJRDogbnVtYmVyO1xuICBjbGlja09uQ2FyZDogKHVuaXF1ZUlEKSA9PiBudW1iZXI7XG59XG5cbmNsYXNzIFVzZXJDYXJkIGV4dGVuZHMgQ29tcG9uZW50PElDb21wb25lbnRQcm9wcz4ge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHBpY3R1cmUsIGxvZ2luLCBwaG9uZSwgcmVnaXN0ZXJlZCwgbG9jYXRpb24sIHVuaXF1ZUlELCBjbGlja09uQ2FyZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2FyZC1vdXRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2FyZFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2xpY2tPbkNhcmQodW5pcXVlSUQpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2FyZF9fbmFtZVwiPlxuICAgICAgICAgICAgICB7bmFtZS5maXJzdH0ge25hbWUubGFzdH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jYXJkX19pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN0dXJlLmxhcmdlfSBhbHQ9XCJ1c2VyXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2FyZC1pbmZvXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaW5mb19faXRlbVwiPlVzZXJuYW1lOiB7bG9naW4udXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNlci1jYXJkLWluZm9fX2l0ZW1cIj5QaG9uZToge3Bob25lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzZXItY2FyZC1pbmZvX19pdGVtXCI+Q2l0eToge2xvY2F0aW9uLmNpdHl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9