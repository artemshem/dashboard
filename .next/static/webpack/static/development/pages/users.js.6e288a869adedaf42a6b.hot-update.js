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

      if (event.target.value.toLowerCase() === 'no filter') {
        _this.setState({
          usersFiltred: users
        });

        return;
      }

      var usersFiltredUpdated;

      if (param === 'gender') {
        usersFiltredUpdated = users.filter(function (item) {
          return item.gender === event.target.value.toLowerCase();
        });
      }

      if (param === 'age') {
        usersFiltredUpdated = usersFiltred.sort(function (a, b) {
          if (event.target.value === 'Ascending') {
            return a.dob.age - b.dob.age;
          }

          if (event.target.value === 'Descending') {
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
          lineNumber: 78,
          columnNumber: 7
        }
      }, __jsx(_components_slide_slide_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        slideActive: slideActive,
        outsideClickHandler: this.outsideClickHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }
      }, __jsx(_components_user_user_slide_makeup__WEBPACK_IMPORTED_MODULE_12__["default"], {
        activeUser: users.find(function (item) {
          return item.uniqueID === activeUser;
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "users-page__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }
      }, "Users"), __jsx(_components_user_users_filters__WEBPACK_IMPORTED_MODULE_13__["default"], {
        changeFilter: this.changeFilter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "users-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 9
        }
      }, usersFiltred.map(function (item) {
        return __jsx(_components_user_user_card__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
          key: item.uniqueID,
          clickOnCard: _this2.clickOnCard,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXNlcnMudHN4Il0sIm5hbWVzIjpbIlVzZXJzIiwic2xpZGVBY3RpdmUiLCJhY3RpdmVVc2VyIiwidXNlcnMiLCJ1c2Vyc0ZpbHRyZWQiLCJmaWx0ZXIiLCJBUEkiLCJhcGkiLCJnZXRVc2VycyIsInRoZW4iLCJkYXRhIiwiaSIsInJlc3VsdCIsInJlc3VsdHMiLCJtYXAiLCJpdGVtIiwidW5pcXVlSUQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiZXZlbnQiLCJwYXJhbSIsInRhcmdldCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJ1c2Vyc0ZpbHRyZWRVcGRhdGVkIiwiZ2VuZGVyIiwic29ydCIsImEiLCJiIiwiZG9iIiwiYWdlIiwib3V0c2lkZUNsaWNrSGFuZGxlciIsImZpbmQiLCJjaGFuZ2VGaWx0ZXIiLCJjbGlja09uQ2FyZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxLOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGlCQUFXLEVBQUUsS0FEUDtBQUVOQyxnQkFBVSxFQUFFLElBRk47QUFHTkMsV0FBSyxFQUFFLEVBSEQ7QUFJTkMsa0JBQVksRUFBRSxFQUpSO0FBS05DLFlBQU0sRUFBRTtBQUxGLEs7OzhNQVFGLElBQUlDLGdEQUFKLEU7OzROQUVjLFlBQU07QUFDeEIsWUFBS0MsR0FBTCxDQUFTQyxRQUFULENBQWtCLEVBQWxCLEVBQ0dDLElBREgsQ0FDUSxVQUFDQyxJQUFELEVBQVU7QUFDZCxZQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLFlBQU1DLE1BQU0sR0FBR0YsSUFBSSxDQUFDRyxPQUFMLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hDLGlEQUNLQSxJQURMO0FBRUVDLG9CQUFRLEVBQUVMLENBQUM7QUFGYjtBQUlELFNBTGMs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QTtBQUFBO0FBQUEsaUJBVEYsRUFVRSxNQUFDLHVFQUFEO0FBQ0Usb0JBQVksRUFBRSxLQUFLK0IsWUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVZGLEVBYUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHN0IsWUFBWSxDQUFDVSxHQUFiLENBQWlCLFVBQUNDLElBQUQsRUFBVTtBQUMxQixlQUNFLE1BQUMsbUVBQUQseUZBQ01BLElBRE47QUFFRSxhQUFHLEVBQUVBLElBQUksQ0FBQ0MsUUFGWjtBQUdFLHFCQUFXLEVBQUUsTUFBSSxDQUFDa0IsV0FIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsT0FSQSxDQURILENBYkYsQ0FERjtBQTJCRDs7OztFQWhHaUJDLCtDOztBQWlHbkI7QUFFY25DLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx1c2Vycy5qcy42ZTI4OGE4NjlhZGVkYWY0MmE2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgVXNlckNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyL3VzZXItY2FyZCc7XG5pbXBvcnQgU2xpZGVDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlkZS9zbGlkZS1jb250YWluZXInO1xuaW1wb3J0IFVzZXJTbGlkZU1ha2V1cCBmcm9tICcuLi9jb21wb25lbnRzL3VzZXIvdXNlci1zbGlkZS1tYWtldXAnO1xuaW1wb3J0IFVzZXJGaWx0ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlci91c2Vycy1maWx0ZXJzJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgc3RhdGUgPSB7XG4gICAgc2xpZGVBY3RpdmU6IGZhbHNlLFxuICAgIGFjdGl2ZVVzZXI6IG51bGwsXG4gICAgdXNlcnM6IFtdIGFzIEFycmF5PGFueT4sXG4gICAgdXNlcnNGaWx0cmVkOiBbXSBhcyBBcnJheTxhbnk+LFxuICAgIGZpbHRlcjogbnVsbCxcbiAgfTtcblxuICBhcGkgPSBuZXcgQVBJKCk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5hcGkuZ2V0VXNlcnMoMTIpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGEucmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICB1bmlxdWVJRDogaSsrLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHVzZXJzOiByZXN1bHQsXG4gICAgICAgICAgdXNlcnNGaWx0cmVkOiByZXN1bHQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgb3V0c2lkZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zbGlkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQWN0aXZlOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY2xpY2tPbkNhcmQgPSAodW5pcXVlSUQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVVzZXI6IHVuaXF1ZUlELFxuICAgICAgc2xpZGVBY3RpdmU6IHRydWUsXG4gICAgfSk7XG4gIH07XG5cbiAgY2hhbmdlRmlsdGVyID0gKGV2ZW50LCBwYXJhbSkgPT4ge1xuICAgIGNvbnN0IHsgdXNlcnMsIHVzZXJzRmlsdHJlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdubyBmaWx0ZXInKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcnNGaWx0cmVkOiB1c2VycyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHVzZXJzRmlsdHJlZFVwZGF0ZWQ7XG4gICAgaWYgKHBhcmFtID09PSAnZ2VuZGVyJykge1xuICAgICAgdXNlcnNGaWx0cmVkVXBkYXRlZCA9IHVzZXJzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZW5kZXIgPT09IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKVxuICAgIH1cbiAgICBpZiAocGFyYW0gPT09ICdhZ2UnKSB7XG4gICAgICB1c2Vyc0ZpbHRyZWRVcGRhdGVkID0gdXNlcnNGaWx0cmVkLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ0FzY2VuZGluZycpIHtcbiAgICAgICAgICByZXR1cm4gYS5kb2IuYWdlIC0gYi5kb2IuYWdlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09ICdEZXNjZW5kaW5nJykge1xuICAgICAgICAgIHJldHVybiBiLmRvYi5hZ2UgLSBhLmRvYi5hZ2U7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJzRmlsdHJlZDogdXNlcnNGaWx0cmVkVXBkYXRlZCB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VycywgdXNlcnNGaWx0cmVkLCBhY3RpdmVVc2VyLCBzbGlkZUFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzLXBhZ2VcIj5cbiAgICAgICAgPFNsaWRlQ29udGFpbmVyXG4gICAgICAgICAgc2xpZGVBY3RpdmU9e3NsaWRlQWN0aXZlfVxuICAgICAgICAgIG91dHNpZGVDbGlja0hhbmRsZXI9e3RoaXMub3V0c2lkZUNsaWNrSGFuZGxlcn1cbiAgICAgICAgPlxuICAgICAgICAgIDxVc2VyU2xpZGVNYWtldXBcbiAgICAgICAgICAgIGFjdGl2ZVVzZXI9e3VzZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0udW5pcXVlSUQgPT09IGFjdGl2ZVVzZXIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2xpZGVDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnMtcGFnZV9fdGl0bGVcIj5Vc2VyczwvZGl2PlxuICAgICAgICA8VXNlckZpbHRlcnNcbiAgICAgICAgICBjaGFuZ2VGaWx0ZXI9e3RoaXMuY2hhbmdlRmlsdGVyfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzLWxpc3RcIj5cbiAgICAgICAgICB7dXNlcnNGaWx0cmVkLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFVzZXJDYXJkXG4gICAgICAgICAgICAgICAgey4uLml0ZW19XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLnVuaXF1ZUlEfVxuICAgICAgICAgICAgICAgIGNsaWNrT25DYXJkPXt0aGlzLmNsaWNrT25DYXJkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwic291cmNlUm9vdCI6IiJ9