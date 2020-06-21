webpackHotUpdate("static\\development\\pages\\users.js",{

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "clickOnCard", function () {
      clickOnCard;
    });

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
          lineNumber: 34,
          columnNumber: 7
        }
      }, __jsx(_components_slide_slide_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "users-page__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, "Users"), __jsx("div", {
        className: "users-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, users.map(function (item, index) {
        return __jsx(_components_user_user_card__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
          key: index,
          clickOnCard: _this2.clickOnCard,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXNlcnMudHN4Il0sIm5hbWVzIjpbIlVzZXJzIiwidXNlcnMiLCJBUEkiLCJhcGkiLCJnZXRVc2VycyIsInRoZW4iLCJkYXRhIiwic2V0U3RhdGUiLCJyZXN1bHRzIiwiY2xpY2tPbkNhcmQiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxLOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLFdBQUssRUFBRTtBQURELEs7OzhNQUlGLElBQUlDLGdEQUFKLEU7OzROQUVjLFlBQU07QUFDeEIsWUFBS0MsR0FBTCxDQUFTQyxRQUFULENBQWtCLEVBQWxCLEVBQ0dDLElBREgsQ0FDUSxVQUFDQyxJQUFELEVBQVU7QUFDZCxjQUFLQyxRQUFMLENBQWM7QUFBRU4sZUFBSyxFQUFFSyxJQUFJLENBQUNFO0FBQWQsU0FBZDtBQUNELE9BSEg7QUFJRCxLOzs4TkFFcUIsWUFBTSxDQUUzQixDOztzTkFFYSxZQUFNO0FBQ2xCQyxpQkFBVztBQUNaLEs7Ozs7Ozs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDUixLQURELEdBQ1csS0FBS1MsS0FEaEIsQ0FDQ1QsS0FERDtBQUVQVSxhQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBWjtBQUVBLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVVFLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVZGLEVBV0U7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsRUFZRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dBLEtBQUssQ0FBQ1ksR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMxQixlQUNFLE1BQUMsbUVBQUQseUZBQ01ELElBRE47QUFFRSxhQUFHLEVBQUVDLEtBRlA7QUFHRSxxQkFBVyxFQUFFLE1BQUksQ0FBQ04sV0FIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsT0FSQSxDQURILENBWkYsQ0FERjtBQTBCRDs7OztFQXBEaUJPLCtDOztBQXVETGhCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx1c2Vycy5qcy4zZmEwNDE4ODk5Njg0OGUwMTI2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgVXNlckNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyL3VzZXItY2FyZCc7XG5pbXBvcnQgU2xpZGVDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlkZS9zbGlkZS1jb250YWluZXInO1xuaW1wb3J0IE91dHNpZGVDbGlja0hhbmRsZXIgZnJvbSAncmVhY3Qtb3V0c2lkZS1jbGljay1oYW5kbGVyJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgc3RhdGUgPSB7XG4gICAgdXNlcnM6IFtdIGFzIEFycmF5PGFueT4sXG4gIH1cblxuICBhcGkgPSBuZXcgQVBJKCk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5hcGkuZ2V0VXNlcnMoMTIpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcnM6IGRhdGEucmVzdWx0cyB9KTtcbiAgICAgIH0pXG4gIH1cblxuICBvdXRzaWRlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuXG4gIH1cblxuICBjbGlja09uQ2FyZCA9ICgpID0+IHtcbiAgICBjbGlja09uQ2FyZFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlcnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc29sZS5sb2codXNlcnMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnMtcGFnZVwiPlxuICAgICAgICB7LyogPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlQ29udGFpbmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxPdXRzaWRlQ2xpY2tIYW5kbGVyXG4gICAgICAgICAgICBvbk91dHNpZGVDbGljaz17dGhpcy5vdXRzaWRlQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxVc2VyU2xpZGUgLz5cbiAgICAgICAgICA8LyBPdXRzaWRlQ2xpY2tIYW5kbGVyPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxTbGlkZUNvbnRhaW5lciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzLXBhZ2VfX3RpdGxlXCI+VXNlcnM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2Vycy1saXN0XCI+XG4gICAgICAgICAge3VzZXJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxVc2VyQ2FyZCBcbiAgICAgICAgICAgICAgICB7Li4uaXRlbX0gXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgY2xpY2tPbkNhcmQ9e3RoaXMuY2xpY2tPbkNhcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==