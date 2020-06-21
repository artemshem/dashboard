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
          age = _this$props.age,
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
      }, "City: ", location.city), __jsx("p", {
        className: "user-card-info__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyL3VzZXItY2FyZC50c3giXSwibmFtZXMiOlsiVXNlckNhcmQiLCJwcm9wcyIsIm5hbWUiLCJwaWN0dXJlIiwibG9naW4iLCJwaG9uZSIsInJlZ2lzdGVyZWQiLCJsb2NhdGlvbiIsInVuaXF1ZUlEIiwiZ2VuZGVyIiwiYWdlIiwiY2xpY2tPbkNhcmQiLCJmaXJzdCIsImxhc3QiLCJsYXJnZSIsInVzZXJuYW1lIiwiY2l0eSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBNEJNQSxROzs7Ozs7Ozs7Ozs7OzZCQUVLO0FBQUEsd0JBQzJGLEtBQUtDLEtBRGhHO0FBQUEsVUFDQ0MsSUFERCxlQUNDQSxJQUREO0FBQUEsVUFDT0MsT0FEUCxlQUNPQSxPQURQO0FBQUEsVUFDZ0JDLEtBRGhCLGVBQ2dCQSxLQURoQjtBQUFBLFVBQ3VCQyxLQUR2QixlQUN1QkEsS0FEdkI7QUFBQSxVQUM4QkMsVUFEOUIsZUFDOEJBLFVBRDlCO0FBQUEsVUFDMENDLFFBRDFDLGVBQzBDQSxRQUQxQztBQUFBLFVBQ29EQyxRQURwRCxlQUNvREEsUUFEcEQ7QUFBQSxVQUM4REMsTUFEOUQsZUFDOERBLE1BRDlEO0FBQUEsVUFDc0VDLEdBRHRFLGVBQ3NFQSxHQUR0RTtBQUFBLFVBQzJFQyxXQUQzRSxlQUMyRUEsV0FEM0U7QUFHUCxhQUNFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFDRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUEsV0FBVyxDQUFDSCxRQUFELENBQWpCO0FBQUEsU0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0U7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHTixJQUFJLENBQUNVLEtBRFIsT0FDZ0JWLElBQUksQ0FBQ1csSUFEckIsQ0FERixDQUhGLEVBUUU7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLFdBQUcsRUFBRVYsT0FBTyxDQUFDVyxLQUFsQjtBQUF5QixXQUFHLEVBQUMsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBUkYsRUFXRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUErQ1YsS0FBSyxDQUFDVyxRQUFyRCxDQURGLEVBRUU7QUFBRyxpQkFBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTRDVixLQUE1QyxDQUZGLEVBR0U7QUFBRyxpQkFBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTJDRSxRQUFRLENBQUNTLElBQXBELENBSEYsRUFJRTtBQUFHLGlCQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBMkNULFFBQVEsQ0FBQ1MsSUFBcEQsQ0FKRixFQUtFO0FBQUcsaUJBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUEyQ1QsUUFBUSxDQUFDUyxJQUFwRCxDQUxGLENBWEYsQ0FERixDQURGO0FBdUJEOzs7O0VBNUJvQkMsK0M7O0FBK0JSakIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVzZXJzLmpzLmRhMDBhZTNiNTEwOWUwYmUxNjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSUNvbXBvbmVudFByb3BzIHtcbiAgbmFtZToge1xuICAgIGZpcnN0OiBzdHJpbmc7XG4gICAgbGFzdDogc3RyaW5nO1xuICB9O1xuICBwaWN0dXJlOiB7XG4gICAgbGFyZ2U6IHN0cmluZztcbiAgfTtcbiAgbG9naW46IHtcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICB9O1xuICBwaG9uZTogc3RyaW5nO1xuICByZWdpc3RlcmVkOiB7XG4gICAgZGF0ZTogc3RyaW5nO1xuICB9O1xuICBsb2NhdGlvbjoge1xuICAgIGNpdHk6IHN0cmluZztcbiAgfTtcbiAgdW5pcXVlSUQ6IG51bWJlcjtcbiAgZ2VuZGVyOiBzdHJpbmcsXG4gIGRvYjoge1xuICAgIGFnZTogbnVtYmVyO1xuICB9XG4gIGNsaWNrT25DYXJkOiAodW5pcXVlSUQpID0+IG51bWJlcjtcbn1cblxuY2xhc3MgVXNlckNhcmQgZXh0ZW5kcyBDb21wb25lbnQ8SUNvbXBvbmVudFByb3BzPiB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcGljdHVyZSwgbG9naW4sIHBob25lLCByZWdpc3RlcmVkLCBsb2NhdGlvbiwgdW5pcXVlSUQsIGdlbmRlciwgYWdlLCBjbGlja09uQ2FyZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2FyZC1vdXRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2FyZFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2xpY2tPbkNhcmQodW5pcXVlSUQpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2FyZF9fbmFtZVwiPlxuICAgICAgICAgICAgICB7bmFtZS5maXJzdH0ge25hbWUubGFzdH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jYXJkX19pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN0dXJlLmxhcmdlfSBhbHQ9XCJ1c2VyXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2FyZC1pbmZvXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaW5mb19faXRlbVwiPlVzZXJuYW1lOiB7bG9naW4udXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNlci1jYXJkLWluZm9fX2l0ZW1cIj5QaG9uZToge3Bob25lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzZXItY2FyZC1pbmZvX19pdGVtXCI+Q2l0eToge2xvY2F0aW9uLmNpdHl9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNlci1jYXJkLWluZm9fX2l0ZW1cIj5DaXR5OiB7bG9jYXRpb24uY2l0eX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaW5mb19faXRlbVwiPkNpdHk6IHtsb2NhdGlvbi5jaXR5fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==