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
      users: []
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
      _this.setState({
        slideActive: false
      }); // setTimeout(() => {
      //   this.setState({ activeUser: null });
      // }, 1000)

    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "clickOnCard", function (uniqueID) {
      _this.setState({
        activeUser: uniqueID,
        slideActive: true
      });
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
          lineNumber: 50,
          columnNumber: 7
        }
      }, __jsx(_components_slide_slide_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        slideActive: slideActive,
        outsideClickHandler: this.outsideClickHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, __jsx(_components_user_user_slide_makeup__WEBPACK_IMPORTED_MODULE_12__["default"], {
        activeUser: users[activeUser],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "users-page__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, "Users"), __jsx("div", {
        className: "users-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, users.map(function (item) {
        return __jsx(_components_user_user_card__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
          key: item.uniqueID,
          clickOnCard: _this2.clickOnCard,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXNlcnMudHN4Il0sIm5hbWVzIjpbIlVzZXJzIiwic2xpZGVBY3RpdmUiLCJhY3RpdmVVc2VyIiwidXNlcnMiLCJBUEkiLCJhcGkiLCJnZXRVc2VycyIsInRoZW4iLCJkYXRhIiwiaSIsInJlc3VsdCIsInJlc3VsdHMiLCJtYXAiLCJpdGVtIiwidW5pcXVlSUQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIm91dHNpZGVDbGlja0hhbmRsZXIiLCJjbGlja09uQ2FyZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxLOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGlCQUFXLEVBQUUsS0FEUDtBQUVOQyxnQkFBVSxFQUFFLElBRk47QUFHTkMsV0FBSyxFQUFFO0FBSEQsSzs7OE1BTUYsSUFBSUMsZ0RBQUosRTs7NE5BRWMsWUFBTTtBQUN4QixZQUFLQyxHQUFMLENBQVNDLFFBQVQsQ0FBa0IsRUFBbEIsRUFDR0MsSUFESCxDQUNRLFVBQUNDLElBQUQsRUFBVTtBQUNkLFlBQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsWUFBTUMsTUFBTSxHQUFHRixJQUFJLENBQUNHLE9BQUwsQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxJQUFELEVBQVU7QUFDeEMsaURBQ0tBLElBREw7QUFFRUMsb0JBQVEsRUFBRUwsQ0FBQztBQUZiO0FBSUQsU0FMYyxDQUFmOztBQU1BLGNBQUtNLFFBQUwsQ0FBYztBQUFFWixlQUFLLEVBQUVPO0FBQVQsU0FBZDtBQUNELE9BVkg7QUFXRCxLOzs4TkFFcUIsWUFBTTtBQUMxQixZQUFLSyxRQUFMLENBQWM7QUFBRWQsbUJBQVcsRUFBRTtBQUFmLE9BQWQsRUFEMEIsQ0FFMUI7QUFDQTtBQUNBOztBQUNELEs7O3NOQUVhLFVBQUNhLFFBQUQsRUFBYztBQUMxQixZQUFLQyxRQUFMLENBQWM7QUFDWmIsa0JBQVUsRUFBRVksUUFEQTtBQUVaYixtQkFBVyxFQUFFO0FBRkQsT0FBZDtBQUlELEs7Ozs7Ozs7NkJBRVE7QUFBQTs7QUFBQSx3QkFDb0MsS0FBS2UsS0FEekM7QUFBQSxVQUNDYixLQURELGVBQ0NBLEtBREQ7QUFBQSxVQUNRRCxVQURSLGVBQ1FBLFVBRFI7QUFBQSxVQUNvQkQsV0FEcEIsZUFDb0JBLFdBRHBCO0FBRVBnQixhQUFPLENBQUNDLEdBQVIsQ0FBWWYsS0FBWjtBQUVBLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVFLE1BQUMsMEVBQUQ7QUFDRSxtQkFBVyxFQUFFRixXQURmO0FBRUUsMkJBQW1CLEVBQUUsS0FBS2tCLG1CQUY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUUsTUFBQywyRUFBRDtBQUNFLGtCQUFVLEVBQUVoQixLQUFLLENBQUNELFVBQUQsQ0FEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpGLENBRkYsRUFXRTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixFQVlFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0MsS0FBSyxDQUFDUyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLGVBQ0UsTUFBQyxtRUFBRCx5RkFDTUEsSUFETjtBQUVFLGFBQUcsRUFBRUEsSUFBSSxDQUFDQyxRQUZaO0FBR0UscUJBQVcsRUFBRSxNQUFJLENBQUNNLFdBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELE9BUkEsQ0FESCxDQVpGLENBREY7QUEwQkQ7Ozs7RUFuRWlCQywrQzs7QUFzRUxyQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnMuanMuZjJiMjJjMzVmODQzMWEyZGY2MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQVBJIGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IFVzZXJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlci91c2VyLWNhcmQnO1xuaW1wb3J0IFNsaWRlQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGUvc2xpZGUtY29udGFpbmVyJztcbmltcG9ydCBVc2VyU2xpZGVNYWtldXAgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyL3VzZXItc2xpZGUtbWFrZXVwJztcbmltcG9ydCBPdXRzaWRlQ2xpY2tIYW5kbGVyIGZyb20gJ3JlYWN0LW91dHNpZGUtY2xpY2staGFuZGxlcic7XG5cbmNsYXNzIFVzZXJzIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHN0YXRlID0ge1xuICAgIHNsaWRlQWN0aXZlOiBmYWxzZSxcbiAgICBhY3RpdmVVc2VyOiBudWxsLFxuICAgIHVzZXJzOiBbXSBhcyBBcnJheTxhbnk+LFxuICB9XG5cbiAgYXBpID0gbmV3IEFQSSgpO1xuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIHRoaXMuYXBpLmdldFVzZXJzKDEyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkYXRhLnJlc3VsdHMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgdW5pcXVlSUQ6IGkrKyxcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcnM6IHJlc3VsdCB9KTtcbiAgICAgIH0pXG4gIH1cblxuICBvdXRzaWRlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUFjdGl2ZTogZmFsc2UgfSk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlVXNlcjogbnVsbCB9KTtcbiAgICAvLyB9LCAxMDAwKVxuICB9XG5cbiAgY2xpY2tPbkNhcmQgPSAodW5pcXVlSUQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVVzZXI6IHVuaXF1ZUlELFxuICAgICAgc2xpZGVBY3RpdmU6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VycywgYWN0aXZlVXNlciwgc2xpZGVBY3RpdmUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc29sZS5sb2codXNlcnMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnMtcGFnZVwiPlxuXG4gICAgICAgIDxTbGlkZUNvbnRhaW5lclxuICAgICAgICAgIHNsaWRlQWN0aXZlPXtzbGlkZUFjdGl2ZX1cbiAgICAgICAgICBvdXRzaWRlQ2xpY2tIYW5kbGVyPXt0aGlzLm91dHNpZGVDbGlja0hhbmRsZXJ9XG4gICAgICAgID5cbiAgICAgICAgICA8VXNlclNsaWRlTWFrZXVwXG4gICAgICAgICAgICBhY3RpdmVVc2VyPXt1c2Vyc1thY3RpdmVVc2VyXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NsaWRlQ29udGFpbmVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnMtcGFnZV9fdGl0bGVcIj5Vc2VyczwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzLWxpc3RcIj5cbiAgICAgICAgICB7dXNlcnMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VXNlckNhcmRcbiAgICAgICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udW5pcXVlSUR9XG4gICAgICAgICAgICAgICAgY2xpY2tPbkNhcmQ9e3RoaXMuY2xpY2tPbkNhcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=