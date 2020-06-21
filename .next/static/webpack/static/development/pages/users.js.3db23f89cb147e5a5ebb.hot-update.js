webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./src/components/user/user-slide-makeup.tsx":
/*!***************************************************!*\
  !*** ./src/components/user/user-slide-makeup.tsx ***!
  \***************************************************/
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





var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\user\\user-slide-makeup.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var UserSlideMakeup = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UserSlideMakeup, _Component);

  var _super = _createSuper(UserSlideMakeup);

  function UserSlideMakeup() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserSlideMakeup);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserSlideMakeup, [{
    key: "render",
    value: function render() {
      var activeUser = this.props.activeUser;
      if (!activeUser) return null;
      var name = activeUser.name,
          picture = activeUser.picture,
          login = activeUser.login,
          phone = activeUser.phone,
          registered = activeUser.registered,
          location = activeUser.location,
          uniqueID = activeUser.uniqueID,
          clickOnCard = activeUser.clickOnCard;
      return __jsx("div", {
        className: "slide-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "slide-info-img",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: picture.large,
        alt: "user",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "slide-info-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "slide-info-head",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }
      }, "Main info"), __jsx("div", {
        className: "slide-info-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }
      }, __jsx("span", {
        className: "slide-info__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }
      }, "Name:"), __jsx("span", {
        className: "slide-info__data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }
      }, name.first, " ", name.last)), __jsx("div", {
        className: "slide-info-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }
      }, __jsx("span", {
        className: "slide-info__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }
      }, "Username:"), __jsx("span", {
        className: "slide-info__data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }, login.username)), __jsx("div", {
        className: "slide-info-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }, __jsx("span", {
        className: "slide-info__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, "Phone:"), __jsx("span", {
        className: "slide-info__data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, phone))), __jsx("div", {
        className: "slide-info-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "slide-info-head",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }, "Location")), __jsx("div", {
        className: "slide-info-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "slide-info__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }, "Password:"), __jsx("span", {
        className: "slide-info__data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }, login.password)), __jsx("div", {
        className: "slide-info-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "slide-info__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, "Registered:"), __jsx("span", {
        className: "slide-info__data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      }, registered.date)), __jsx("div", {
        className: "slide-info-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "slide-info__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }
      }, "City:"), __jsx("span", {
        className: "slide-info__data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }, location.city)), __jsx("div", {
        className: "slide-info-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "slide-info__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }), __jsx("span", {
        className: "slide-info__data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "slide-info-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "slide-info__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }), __jsx("span", {
        className: "slide-info__data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      })));
    }
  }]);

  return UserSlideMakeup;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserSlideMakeup);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyL3VzZXItc2xpZGUtbWFrZXVwLnRzeCJdLCJuYW1lcyI6WyJVc2VyU2xpZGVNYWtldXAiLCJhY3RpdmVVc2VyIiwicHJvcHMiLCJuYW1lIiwicGljdHVyZSIsImxvZ2luIiwicGhvbmUiLCJyZWdpc3RlcmVkIiwibG9jYXRpb24iLCJ1bmlxdWVJRCIsImNsaWNrT25DYXJkIiwibGFyZ2UiLCJmaXJzdCIsImxhc3QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGF0ZSIsImNpdHkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxlOzs7Ozs7Ozs7Ozs7OzZCQUVLO0FBQUEsVUFDQ0MsVUFERCxHQUNnQixLQUFLQyxLQURyQixDQUNDRCxVQUREO0FBRVAsVUFBSSxDQUFDQSxVQUFMLEVBQWlCLE9BQU8sSUFBUDtBQUZWLFVBR0NFLElBSEQsR0FHOEVGLFVBSDlFLENBR0NFLElBSEQ7QUFBQSxVQUdPQyxPQUhQLEdBRzhFSCxVQUg5RSxDQUdPRyxPQUhQO0FBQUEsVUFHZ0JDLEtBSGhCLEdBRzhFSixVQUg5RSxDQUdnQkksS0FIaEI7QUFBQSxVQUd1QkMsS0FIdkIsR0FHOEVMLFVBSDlFLENBR3VCSyxLQUh2QjtBQUFBLFVBRzhCQyxVQUg5QixHQUc4RU4sVUFIOUUsQ0FHOEJNLFVBSDlCO0FBQUEsVUFHMENDLFFBSDFDLEdBRzhFUCxVQUg5RSxDQUcwQ08sUUFIMUM7QUFBQSxVQUdvREMsUUFIcEQsR0FHOEVSLFVBSDlFLENBR29EUSxRQUhwRDtBQUFBLFVBRzhEQyxXQUg5RCxHQUc4RVQsVUFIOUUsQ0FHOERTLFdBSDlEO0FBS1AsYUFDRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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aUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBTSxpQkFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FyQ0YsRUF5Q0U7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFNLGlCQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQU0saUJBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBekNGLENBREY7QUFrRUQ7Ozs7RUF6RTJCQywrQzs7QUE0RWZsQiw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnMuanMuM2RiMjNmODljYjE0N2U1YTVlYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFVzZXJTbGlkZU1ha2V1cCBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZVVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFhY3RpdmVVc2VyKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7IG5hbWUsIHBpY3R1cmUsIGxvZ2luLCBwaG9uZSwgcmVnaXN0ZXJlZCwgbG9jYXRpb24sIHVuaXF1ZUlELCBjbGlja09uQ2FyZCB9ID0gYWN0aXZlVXNlcjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWltZ1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtwaWN0dXJlLmxhcmdlfSBhbHQ9XCJ1c2VyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1ibG9ja1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm8taGVhZFwiPk1haW4gaW5mbzwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8tbGluZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fdGl0bGVcIj5OYW1lOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX2RhdGFcIj57bmFtZS5maXJzdH0ge25hbWUubGFzdH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWxpbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX3RpdGxlXCI+VXNlcm5hbWU6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPntsb2dpbi51c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWxpbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX3RpdGxlXCI+UGhvbmU6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPntwaG9uZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1ibG9ja1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm8taGVhZFwiPkxvY2F0aW9uPC9zcGFuPlxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWxpbmVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX190aXRsZVwiPlBhc3N3b3JkOjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX19kYXRhXCI+e2xvZ2luLnBhc3N3b3JkfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1saW5lXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fdGl0bGVcIj5SZWdpc3RlcmVkOjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX19kYXRhXCI+e3JlZ2lzdGVyZWQuZGF0ZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8tbGluZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX3RpdGxlXCI+Q2l0eTo8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPntsb2NhdGlvbi5jaXR5fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1saW5lXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fdGl0bGVcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1saW5lXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fdGl0bGVcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1pbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmRfX25hbWVcIj5cbiAgICAgICAgICAgICAge25hbWUuZmlyc3R9IHtuYW1lLmxhc3R9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2FyZF9faW1nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17cGljdHVyZS5sYXJnZX0gYWx0PVwidXNlclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaW5mb1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNlci1jYXJkLWluZm9fX2l0ZW1cIj5Vc2VybmFtZToge2xvZ2luLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzZXItY2FyZC1pbmZvX19pdGVtXCI+UGhvbmU6IHtwaG9uZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaW5mb19faXRlbVwiPlJlZ2lzdGVyZWQ6IHtyZWdpc3RlcmVkLmRhdGV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNlci1jYXJkLWluZm9fX2l0ZW1cIj5DaXR5OiB7bG9jYXRpb24uY2l0eX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTbGlkZU1ha2V1cDsiXSwic291cmNlUm9vdCI6IiJ9