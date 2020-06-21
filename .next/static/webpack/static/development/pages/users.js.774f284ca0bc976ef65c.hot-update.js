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
          gender = _this$props.gender,
          dob = _this$props.dob,
          clickOnCard = _this$props.clickOnCard;
      return __jsx("div", {
        className: "user-card-outer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
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
          lineNumber: 36,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "user-card-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "user-card__name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, name.first, " ", name.last)), __jsx("div", {
        className: "user-card__img",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, __jsx("img", {
        src: picture.large,
        alt: "user",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "user-card-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }, __jsx("p", {
        className: "user-card-info__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }
      }, "Username: ", login.username), __jsx("p", {
        className: "user-card-info__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }
      }, "Phone: ", phone), __jsx("p", {
        className: "user-card-info__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }, "City: ", location.city), __jsx("p", {
        className: "user-card-info__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, "Gender: ", gender), __jsx("p", {
        className: "user-card-info__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, "Age: ", dob.age))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyL3VzZXItY2FyZC50c3giXSwibmFtZXMiOlsiVXNlckNhcmQiLCJwcm9wcyIsIm5hbWUiLCJwaWN0dXJlIiwibG9naW4iLCJwaG9uZSIsInJlZ2lzdGVyZWQiLCJsb2NhdGlvbiIsInVuaXF1ZUlEIiwiZ2VuZGVyIiwiZG9iIiwiY2xpY2tPbkNhcmQiLCJmaXJzdCIsImxhc3QiLCJsYXJnZSIsInVzZXJuYW1lIiwiY2l0eSIsImFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBNEJNQSxROzs7Ozs7Ozs7Ozs7OzZCQUVLO0FBQUEsd0JBQzJGLEtBQUtDLEtBRGhHO0FBQUEsVUFDQ0MsSUFERCxlQUNDQSxJQUREO0FBQUEsVUFDT0MsT0FEUCxlQUNPQSxPQURQO0FBQUEsVUFDZ0JDLEtBRGhCLGVBQ2dCQSxLQURoQjtBQUFBLFVBQ3VCQyxLQUR2QixlQUN1QkEsS0FEdkI7QUFBQSxVQUM4QkMsVUFEOUIsZUFDOEJBLFVBRDlCO0FBQUEsVUFDMENDLFFBRDFDLGVBQzBDQSxRQUQxQztBQUFBLFVBQ29EQyxRQURwRCxlQUNvREEsUUFEcEQ7QUFBQSxVQUM4REMsTUFEOUQsZUFDOERBLE1BRDlEO0FBQUEsVUFDc0VDLEdBRHRFLGVBQ3NFQSxHQUR0RTtBQUFBLFVBQzJFQyxXQUQzRSxlQUMyRUEsV0FEM0U7QUFHUCxhQUNFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFDRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUEsV0FBVyxDQUFDSCxRQUFELENBQWpCO0FBQUEsU0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0U7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHTixJQUFJLENBQUNVLEtBRFIsT0FDZ0JWLElBQUksQ0FBQ1csSUFEckIsQ0FERixDQUhGLEVBUUU7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLFdBQUcsRUFBRVYsT0FBTyxDQUFDVyxLQUFsQjtBQUF5QixXQUFHLEVBQUMsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBUkYsRUFXRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUErQ1YsS0FBSyxDQUFDVyxRQUFyRCxDQURGLEVBRUU7QUFBRyxpQkFBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTRDVixLQUE1QyxDQUZGLEVBR0U7QUFBRyxpQkFBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTJDRSxRQUFRLENBQUNTLElBQXBELENBSEYsRUFJRTtBQUFHLGlCQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBNkNQLE1BQTdDLENBSkYsRUFLRTtBQUFHLGlCQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBMENDLEdBQUcsQ0FBQ08sR0FBOUMsQ0FMRixDQVhGLENBREYsQ0FERjtBQXVCRDs7OztFQTVCb0JDLCtDOztBQStCUmxCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx1c2Vycy5qcy43NzRmMjg0Y2EwYmM5NzZlZjY1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIElDb21wb25lbnRQcm9wcyB7XG4gIG5hbWU6IHtcbiAgICBmaXJzdDogc3RyaW5nO1xuICAgIGxhc3Q6IHN0cmluZztcbiAgfTtcbiAgcGljdHVyZToge1xuICAgIGxhcmdlOiBzdHJpbmc7XG4gIH07XG4gIGxvZ2luOiB7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgfTtcbiAgcGhvbmU6IHN0cmluZztcbiAgcmVnaXN0ZXJlZDoge1xuICAgIGRhdGU6IHN0cmluZztcbiAgfTtcbiAgbG9jYXRpb246IHtcbiAgICBjaXR5OiBzdHJpbmc7XG4gIH07XG4gIHVuaXF1ZUlEOiBudW1iZXI7XG4gIGdlbmRlcjogc3RyaW5nLFxuICBkb2I6IHtcbiAgICBhZ2U6IG51bWJlcjtcbiAgfVxuICBjbGlja09uQ2FyZDogKHVuaXF1ZUlEKSA9PiBudW1iZXI7XG59XG5cbmNsYXNzIFVzZXJDYXJkIGV4dGVuZHMgQ29tcG9uZW50PElDb21wb25lbnRQcm9wcz4ge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHBpY3R1cmUsIGxvZ2luLCBwaG9uZSwgcmVnaXN0ZXJlZCwgbG9jYXRpb24sIHVuaXF1ZUlELCBnZW5kZXIsIGRvYiwgY2xpY2tPbkNhcmQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtb3V0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrT25DYXJkKHVuaXF1ZUlEKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmRfX25hbWVcIj5cbiAgICAgICAgICAgICAge25hbWUuZmlyc3R9IHtuYW1lLmxhc3R9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2FyZF9faW1nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17cGljdHVyZS5sYXJnZX0gYWx0PVwidXNlclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaW5mb1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNlci1jYXJkLWluZm9fX2l0ZW1cIj5Vc2VybmFtZToge2xvZ2luLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzZXItY2FyZC1pbmZvX19pdGVtXCI+UGhvbmU6IHtwaG9uZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaW5mb19faXRlbVwiPkNpdHk6IHtsb2NhdGlvbi5jaXR5fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzZXItY2FyZC1pbmZvX19pdGVtXCI+R2VuZGVyOiB7Z2VuZGVyfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzZXItY2FyZC1pbmZvX19pdGVtXCI+QWdlOiB7ZG9iLmFnZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=