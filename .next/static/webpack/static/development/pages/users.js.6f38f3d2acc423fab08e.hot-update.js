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
/* harmony import */ var _components_user_user_slide_makeup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/user/user-slide-makeup */ "./src/components/user/user-slide-makeup.tsx");
/* harmony import */ var _components_user_users_filters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/user/users-filters */ "./src/components/user/users-filters.tsx");








var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\pages\\users.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      slideActive: false,
      activeUser: null,
      users: [],
      usersFilterd: [],
      filter: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "api", new _api_api__WEBPACK_IMPORTED_MODULE_9__["default"]());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "componentDidMount", function () {
      _this.api.getUsers(12).then(function (data) {
        var i = 0;
        var result = data.results.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            uniqueID: i++
          });
        });

        _this.setState({
          users: result
        });
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "outsideClickHandler", function () {
      if (_this.state.slideActive) {
        _this.setState({
          slideActive: false
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "clickOnCard", function (uniqueID) {
      _this.setState({
        activeUser: uniqueID,
        slideActive: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "changeFilter", function (event, param) {
      console.log(event.target.value);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Users, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          users = _this$state.users,
          activeUser = _this$state.activeUser,
          slideActive = _this$state.slideActive;
      console.log(users);
      return __jsx("div", {
        className: "users-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, __jsx(_components_slide_slide_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        slideActive: slideActive,
        outsideClickHandler: this.outsideClickHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, __jsx(_components_user_user_slide_makeup__WEBPACK_IMPORTED_MODULE_12__["default"], {
        activeUser: users[activeUser],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "users-page__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, "Users"), __jsx(_components_user_users_filters__WEBPACK_IMPORTED_MODULE_13__["default"], {
        changeFilter: this.changeFilter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "users-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }
      }, users.map(function (item) {
        return __jsx(_components_user_user_card__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
          key: item.uniqueID,
          clickOnCard: _this2.clickOnCard,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }
        }));
      })));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXNlcnMudHN4Il0sIm5hbWVzIjpbIlVzZXJzIiwic2xpZGVBY3RpdmUiLCJhY3RpdmVVc2VyIiwidXNlcnMiLCJ1c2Vyc0ZpbHRlcmQiLCJmaWx0ZXIiLCJBUEkiLCJhcGkiLCJnZXRVc2VycyIsInRoZW4iLCJkYXRhIiwiaSIsInJlc3VsdCIsInJlc3VsdHMiLCJtYXAiLCJpdGVtIiwidW5pcXVlSUQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiZXZlbnQiLCJwYXJhbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsIm91dHNpZGVDbGlja0hhbmRsZXIiLCJjaGFuZ2VGaWx0ZXIiLCJjbGlja09uQ2FyZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxLOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGlCQUFXLEVBQUUsS0FEUDtBQUVOQyxnQkFBVSxFQUFFLElBRk47QUFHTkMsV0FBSyxFQUFFLEVBSEQ7QUFJTkMsa0JBQVksRUFBRSxFQUpSO0FBS05DLFlBQU0sRUFBRTtBQUxGLEs7OzhNQVFGLElBQUlDLGdEQUFKLEU7OzROQUVjLFlBQU07QUFDeEIsWUFBS0MsR0FBTCxDQUFTQyxRQUFULENBQWtCLEVBQWxCLEVBQ0dDLElBREgsQ0FDUSxVQUFDQyxJQUFELEVBQVU7QUFDZCxZQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLFlBQU1DLE1BQU0sR0FBR0YsSUFBSSxDQUFDRyxPQUFMLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hDLGlEQUNLQSxJQURMO0FBRUVDLG9CQUFRLEVBQUVMLENBQUM7QUFGYjtBQUlELFNBTGMsQ0FBZjs7QUFNQSxjQUFLTSxRQUFMLENBQWM7QUFBRWQsZUFBSyxFQUFFUztBQUFULFNBQWQ7QUFDRCxPQVZIO0FBV0QsSzs7OE5BRXFCLFlBQU07QUFDMUIsVUFBRyxNQUFLTSxLQUFMLENBQVdqQixXQUFkLEVBQTJCO0FBQ3pCLGNBQUtnQixRQUFMLENBQWM7QUFBRWhCLHFCQUFXLEVBQUU7QUFBZixTQUFkO0FBQ0Q7QUFDRixLOztzTkFFYSxVQUFDZSxRQUFELEVBQWM7QUFDMUIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pmLGtCQUFVLEVBQUVjLFFBREE7QUFFWmYsbUJBQVcsRUFBRTtBQUZELE9BQWQ7QUFJRCxLOzt1TkFFYyxVQUFDa0IsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQy9CQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQXpCO0FBQ0QsSzs7Ozs7Ozs2QkFFUTtBQUFBOztBQUFBLHdCQUNvQyxLQUFLTixLQUR6QztBQUFBLFVBQ0NmLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FELFVBRFIsZUFDUUEsVUFEUjtBQUFBLFVBQ29CRCxXQURwQixlQUNvQkEsV0FEcEI7QUFFUG9CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsS0FBWjtBQUVBLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsMEVBQUQ7QUFDRSxtQkFBVyxFQUFFRixXQURmO0FBRUUsMkJBQW1CLEVBQUUsS0FBS3dCLG1CQUY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUUsTUFBQywyRUFBRDtBQUNFLGtCQUFVLEVBQUV0QixLQUFLLENBQUNELFVBQUQsQ0FEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpGLENBREYsRUFTRTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixFQVVFLE1BQUMsdUVBQUQ7QUFDRSxvQkFBWSxFQUFFLEtBQUt3QixZQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVkYsRUFhRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0d2QixLQUFLLENBQUNXLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDbkIsZUFDRSxNQUFDLG1FQUFELHlGQUNNQSxJQUROO0FBRUUsYUFBRyxFQUFFQSxJQUFJLENBQUNDLFFBRlo7QUFHRSxxQkFBVyxFQUFFLE1BQUksQ0FBQ1csV0FIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsT0FSQSxDQURILENBYkYsQ0FERjtBQTJCRDs7OztFQXpFaUJDLCtDOztBQTBFbkI7QUFFYzVCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx1c2Vycy5qcy42ZjM4ZjNkMmFjYzQyM2ZhYjA4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgVXNlckNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyL3VzZXItY2FyZCc7XG5pbXBvcnQgU2xpZGVDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlkZS9zbGlkZS1jb250YWluZXInO1xuaW1wb3J0IFVzZXJTbGlkZU1ha2V1cCBmcm9tICcuLi9jb21wb25lbnRzL3VzZXIvdXNlci1zbGlkZS1tYWtldXAnO1xuaW1wb3J0IFVzZXJGaWx0ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlci91c2Vycy1maWx0ZXJzJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgc3RhdGUgPSB7XG4gICAgc2xpZGVBY3RpdmU6IGZhbHNlLFxuICAgIGFjdGl2ZVVzZXI6IG51bGwsXG4gICAgdXNlcnM6IFtdIGFzIEFycmF5PGFueT4sXG4gICAgdXNlcnNGaWx0ZXJkOiBbXSBhcyBBcnJheTxhbnk+LFxuICAgIGZpbHRlcjogbnVsbCxcbiAgfVxuXG4gIGFwaSA9IG5ldyBBUEkoKTtcblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLmFwaS5nZXRVc2VycygxMilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YS5yZXN1bHRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIHVuaXF1ZUlEOiBpKyssXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJzOiByZXN1bHQgfSk7XG4gICAgICB9KVxuICB9XG5cbiAgb3V0c2lkZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZih0aGlzLnN0YXRlLnNsaWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVBY3RpdmU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrT25DYXJkID0gKHVuaXF1ZUlEKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVVc2VyOiB1bmlxdWVJRCxcbiAgICAgIHNsaWRlQWN0aXZlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlRmlsdGVyID0gKGV2ZW50LCBwYXJhbSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VycywgYWN0aXZlVXNlciwgc2xpZGVBY3RpdmUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc29sZS5sb2codXNlcnMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnMtcGFnZVwiPlxuICAgICAgICA8U2xpZGVDb250YWluZXJcbiAgICAgICAgICBzbGlkZUFjdGl2ZT17c2xpZGVBY3RpdmV9XG4gICAgICAgICAgb3V0c2lkZUNsaWNrSGFuZGxlcj17dGhpcy5vdXRzaWRlQ2xpY2tIYW5kbGVyfVxuICAgICAgICA+XG4gICAgICAgICAgPFVzZXJTbGlkZU1ha2V1cFxuICAgICAgICAgICAgYWN0aXZlVXNlcj17dXNlcnNbYWN0aXZlVXNlcl19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TbGlkZUNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2Vycy1wYWdlX190aXRsZVwiPlVzZXJzPC9kaXY+XG4gICAgICAgIDxVc2VyRmlsdGVycyBcbiAgICAgICAgICBjaGFuZ2VGaWx0ZXI9e3RoaXMuY2hhbmdlRmlsdGVyfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzLWxpc3RcIj5cbiAgICAgICAgICB7dXNlcnMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VXNlckNhcmRcbiAgICAgICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udW5pcXVlSUR9XG4gICAgICAgICAgICAgICAgY2xpY2tPbkNhcmQ9e3RoaXMuY2xpY2tPbkNhcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=