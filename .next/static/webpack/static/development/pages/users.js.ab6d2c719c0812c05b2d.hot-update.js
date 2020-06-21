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
      usersFiltred: [],
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
          users: result,
          usersFiltred: result
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
      var _this$state = _this.state,
          users = _this$state.users,
          usersFiltred = _this$state.usersFiltred;
      var value = event.target.value;
      console.log(value === 'No filter');

      if (value === 'No filter') {
        _this.setState({
          usersFiltred: users
        });

        return;
      }

      var usersFiltredUpdated;

      if (param === 'gender') {
        usersFiltredUpdated = usersFiltred.filter(function (item) {
          return item.gender === value.toLowerCase();
        });
      }

      if (param === 'age') {
        usersFiltredUpdated = usersFiltred.sort(function (a, b) {
          if (value === 'Ascending') {
            return a.dob.age - b.dob.age;
          }

          if (value === 'Descending') {
            return b.dob.age - a.dob.age;
          } else return 0;
        });
      }

      _this.setState({
        usersFiltred: usersFiltredUpdated
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Users, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          users = _this$state2.users,
          usersFiltred = _this$state2.usersFiltred,
          activeUser = _this$state2.activeUser,
          slideActive = _this$state2.slideActive;
      return __jsx("div", {
        className: "users-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 7
        }
      }, __jsx(_components_slide_slide_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        slideActive: slideActive,
        outsideClickHandler: this.outsideClickHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }
      }, __jsx(_components_user_user_slide_makeup__WEBPACK_IMPORTED_MODULE_12__["default"], {
        activeUser: users.find(function (item) {
          return item.uniqueID === activeUser;
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "users-page__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }, "Users"), __jsx(_components_user_users_filters__WEBPACK_IMPORTED_MODULE_13__["default"], {
        changeFilter: this.changeFilter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "users-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, usersFiltred.map(function (item) {
        return __jsx(_components_user_user_card__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
          key: item.uniqueID,
          clickOnCard: _this2.clickOnCard,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXNlcnMudHN4Il0sIm5hbWVzIjpbIlVzZXJzIiwic2xpZGVBY3RpdmUiLCJhY3RpdmVVc2VyIiwidXNlcnMiLCJ1c2Vyc0ZpbHRyZWQiLCJmaWx0ZXIiLCJBUEkiLCJhcGkiLCJnZXRVc2VycyIsInRoZW4iLCJkYXRhIiwiaSIsInJlc3VsdCIsInJlc3VsdHMiLCJtYXAiLCJpdGVtIiwidW5pcXVlSUQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiZXZlbnQiLCJwYXJhbSIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInVzZXJzRmlsdHJlZFVwZGF0ZWQiLCJnZW5kZXIiLCJ0b0xvd2VyQ2FzZSIsInNvcnQiLCJhIiwiYiIsImRvYiIsImFnZSIsIm91dHNpZGVDbGlja0hhbmRsZXIiLCJmaW5kIiwiY2hhbmdlRmlsdGVyIiwiY2xpY2tPbkNhcmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxpQkFBVyxFQUFFLEtBRFA7QUFFTkMsZ0JBQVUsRUFBRSxJQUZOO0FBR05DLFdBQUssRUFBRSxFQUhEO0FBSU5DLGtCQUFZLEVBQUUsRUFKUjtBQUtOQyxZQUFNLEVBQUU7QUFMRixLOzs4TUFRRixJQUFJQyxnREFBSixFOzs0TkFFYyxZQUFNO0FBQ3hCLFlBQUtDLEdBQUwsQ0FBU0MsUUFBVCxDQUFrQixFQUFsQixFQUNHQyxJQURILENBQ1EsVUFBQ0MsSUFBRCxFQUFVO0FBQ2QsWUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxZQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csT0FBTCxDQUFhQyxHQUFiLENBQWlCLFVBQUNDLElBQUQsRUFBVTtBQUN4QyxpREFDS0EsSUFETDtBQUVFQyxvQkFBUSxFQUFFTCxDQUFD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QUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLEVBVUUsTUFBQyx1RUFBRDtBQUNFLG9CQUFZLEVBQUUsS0FBS2lDLFlBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFWRixFQWFFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRy9CLFlBQVksQ0FBQ1UsR0FBYixDQUFpQixVQUFDQyxJQUFELEVBQVU7QUFDMUIsZUFDRSxNQUFDLG1FQUFELHlGQUNNQSxJQUROO0FBRUUsYUFBRyxFQUFFQSxJQUFJLENBQUNDLFFBRlo7QUFHRSxxQkFBVyxFQUFFLE1BQUksQ0FBQ29CLFdBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELE9BUkEsQ0FESCxDQWJGLENBREY7QUEyQkQ7Ozs7RUFsR2lCQywrQzs7QUFtR25CO0FBRWNyQyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnMuanMuYWI2ZDJjNzE5YzA4MTJjMDViMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQVBJIGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IFVzZXJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlci91c2VyLWNhcmQnO1xuaW1wb3J0IFNsaWRlQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGUvc2xpZGUtY29udGFpbmVyJztcbmltcG9ydCBVc2VyU2xpZGVNYWtldXAgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyL3VzZXItc2xpZGUtbWFrZXVwJztcbmltcG9ydCBVc2VyRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL3VzZXIvdXNlcnMtZmlsdGVycyc7XG5cbmNsYXNzIFVzZXJzIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHN0YXRlID0ge1xuICAgIHNsaWRlQWN0aXZlOiBmYWxzZSxcbiAgICBhY3RpdmVVc2VyOiBudWxsLFxuICAgIHVzZXJzOiBbXSBhcyBBcnJheTxhbnk+LFxuICAgIHVzZXJzRmlsdHJlZDogW10gYXMgQXJyYXk8YW55PixcbiAgICBmaWx0ZXI6IG51bGwsXG4gIH07XG5cbiAgYXBpID0gbmV3IEFQSSgpO1xuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIHRoaXMuYXBpLmdldFVzZXJzKDEyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkYXRhLnJlc3VsdHMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgdW5pcXVlSUQ6IGkrKyxcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VyczogcmVzdWx0LFxuICAgICAgICAgIHVzZXJzRmlsdHJlZDogcmVzdWx0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIG91dHNpZGVDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUFjdGl2ZTogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNsaWNrT25DYXJkID0gKHVuaXF1ZUlEKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVVc2VyOiB1bmlxdWVJRCxcbiAgICAgIHNsaWRlQWN0aXZlOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNoYW5nZUZpbHRlciA9IChldmVudCwgcGFyYW0pID0+IHtcbiAgICBjb25zdCB7IHVzZXJzLCB1c2Vyc0ZpbHRyZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnNvbGUubG9nKHZhbHVlID09PSAnTm8gZmlsdGVyJyk7XG4gICAgaWYgKHZhbHVlID09PSAnTm8gZmlsdGVyJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJzRmlsdHJlZDogdXNlcnMgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB1c2Vyc0ZpbHRyZWRVcGRhdGVkO1xuICAgIGlmIChwYXJhbSA9PT0gJ2dlbmRlcicpIHtcbiAgICAgIHVzZXJzRmlsdHJlZFVwZGF0ZWQgPSB1c2Vyc0ZpbHRyZWQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdlbmRlciA9PT0gdmFsdWUudG9Mb3dlckNhc2UoKSlcbiAgICB9XG4gICAgaWYgKHBhcmFtID09PSAnYWdlJykge1xuICAgICAgdXNlcnNGaWx0cmVkVXBkYXRlZCA9IHVzZXJzRmlsdHJlZC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ0FzY2VuZGluZycpIHtcbiAgICAgICAgICByZXR1cm4gYS5kb2IuYWdlIC0gYi5kb2IuYWdlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ0Rlc2NlbmRpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIGIuZG9iLmFnZSAtIGEuZG9iLmFnZTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdXNlcnNGaWx0cmVkOiB1c2Vyc0ZpbHRyZWRVcGRhdGVkIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXJzLCB1c2Vyc0ZpbHRyZWQsIGFjdGl2ZVVzZXIsIHNsaWRlQWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnMtcGFnZVwiPlxuICAgICAgICA8U2xpZGVDb250YWluZXJcbiAgICAgICAgICBzbGlkZUFjdGl2ZT17c2xpZGVBY3RpdmV9XG4gICAgICAgICAgb3V0c2lkZUNsaWNrSGFuZGxlcj17dGhpcy5vdXRzaWRlQ2xpY2tIYW5kbGVyfVxuICAgICAgICA+XG4gICAgICAgICAgPFVzZXJTbGlkZU1ha2V1cFxuICAgICAgICAgICAgYWN0aXZlVXNlcj17dXNlcnMuZmluZCgoaXRlbSkgPT4gaXRlbS51bmlxdWVJRCA9PT0gYWN0aXZlVXNlcil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TbGlkZUNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2Vycy1wYWdlX190aXRsZVwiPlVzZXJzPC9kaXY+XG4gICAgICAgIDxVc2VyRmlsdGVyc1xuICAgICAgICAgIGNoYW5nZUZpbHRlcj17dGhpcy5jaGFuZ2VGaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnMtbGlzdFwiPlxuICAgICAgICAgIHt1c2Vyc0ZpbHRyZWQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VXNlckNhcmRcbiAgICAgICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udW5pcXVlSUR9XG4gICAgICAgICAgICAgICAgY2xpY2tPbkNhcmQ9e3RoaXMuY2xpY2tPbkNhcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=