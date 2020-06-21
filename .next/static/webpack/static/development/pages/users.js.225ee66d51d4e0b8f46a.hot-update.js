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
        activeUser: null
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "clickOnCard", function (uniqueID) {
      console.log(uniqueID);

      _this.setState({
        activeUser: uniqueID
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
          activeUser = _this$state.activeUser;
      console.log(users);
      return __jsx("div", {
        className: "users-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }
      }, __jsx(_components_slide_slide_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        activeUser: users[activeUser],
        outsideClickHandler: this.outsideClickHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }, "This is some children makeup"), __jsx("div", {
        className: "users-page__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      }, "Users"), __jsx("div", {
        className: "users-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      }, users.map(function (item) {
        return __jsx(_components_user_user_card__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
          key: item.uniqueID,
          clickOnCard: _this2.clickOnCard,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXNlcnMudHN4Il0sIm5hbWVzIjpbIlVzZXJzIiwiYWN0aXZlVXNlciIsInVzZXJzIiwiQVBJIiwiYXBpIiwiZ2V0VXNlcnMiLCJ0aGVuIiwiZGF0YSIsImkiLCJyZXN1bHQiLCJyZXN1bHRzIiwibWFwIiwiaXRlbSIsInVuaXF1ZUlEIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJvdXRzaWRlQ2xpY2tIYW5kbGVyIiwiY2xpY2tPbkNhcmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxnQkFBVSxFQUFFLElBRE47QUFFTkMsV0FBSyxFQUFFO0FBRkQsSzs7OE1BS0YsSUFBSUMsZ0RBQUosRTs7NE5BRWMsWUFBTTtBQUN4QixZQUFLQyxHQUFMLENBQVNDLFFBQVQsQ0FBa0IsRUFBbEIsRUFDR0MsSUFESCxDQUNRLFVBQUNDLElBQUQsRUFBVTtBQUNkLFlBQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsWUFBTUMsTUFBTSxHQUFHRixJQUFJLENBQUNHLE9BQUwsQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxJQUFELEVBQVU7QUFDeEMsaURBQ0tBLElBREw7QUFFRUMsb0JBQVEsRUFBRUwsQ0FBQztBQUZiO0FBSUQsU0FMYyxDQUFmOztBQU1BLGNBQUtNLFFBQUwsQ0FBYztBQUFFWixlQUFLLEVBQUVPO0FBQVQsU0FBZDtBQUNELE9BVkg7QUFXRCxLOzs4TkFFcUIsWUFBTTtBQUMxQixZQUFLSyxRQUFMLENBQWM7QUFBRWIsa0JBQVUsRUFBRTtBQUFkLE9BQWQ7QUFDRCxLOztzTkFFYSxVQUFDWSxRQUFELEVBQWM7QUFDMUJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFDYixrQkFBVSxFQUFFWTtBQUFiLE9BQWQ7QUFDRCxLOzs7Ozs7OzZCQUVRO0FBQUE7O0FBQUEsd0JBQ3VCLEtBQUtJLEtBRDVCO0FBQUEsVUFDQ2YsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUQsVUFEUixlQUNRQSxVQURSO0FBRVBjLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFaO0FBRUEsYUFDRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBVUUsTUFBQywwRUFBRDtBQUNFLGtCQUFVLEVBQUVBLEtBQUssQ0FBQ0QsVUFBRCxDQURuQjtBQUVFLDJCQUFtQixFQUFFLEtBQUtpQixtQkFGNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FWRixFQWdCRTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkYsRUFpQkU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHaEIsS0FBSyxDQUFDUyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLGVBQ0UsTUFBQyxtRUFBRCx5RkFDTUEsSUFETjtBQUVFLGFBQUcsRUFBRUEsSUFBSSxDQUFDQyxRQUZaO0FBR0UscUJBQVcsRUFBRSxNQUFJLENBQUNNLFdBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELE9BUkEsQ0FESCxDQWpCRixDQURGO0FBK0JEOzs7O0VBbEVpQkMsK0M7O0FBcUVMcEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVzZXJzLmpzLjIyNWVlNjZkNTFkNGUwYjhmNDZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFQSSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCBVc2VyQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3VzZXIvdXNlci1jYXJkJztcbmltcG9ydCBTbGlkZUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL3NsaWRlL3NsaWRlLWNvbnRhaW5lcic7XG5pbXBvcnQgT3V0c2lkZUNsaWNrSGFuZGxlciBmcm9tICdyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXInO1xuXG5jbGFzcyBVc2VycyBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBzdGF0ZSA9IHtcbiAgICBhY3RpdmVVc2VyOiBudWxsLFxuICAgIHVzZXJzOiBbXSBhcyBBcnJheTxhbnk+LFxuICB9XG5cbiAgYXBpID0gbmV3IEFQSSgpO1xuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIHRoaXMuYXBpLmdldFVzZXJzKDEyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkYXRhLnJlc3VsdHMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgdW5pcXVlSUQ6IGkrKyxcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcnM6IHJlc3VsdCB9KTtcbiAgICAgIH0pXG4gIH1cblxuICBvdXRzaWRlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVVc2VyOiBudWxsIH0pO1xuICB9XG5cbiAgY2xpY2tPbkNhcmQgPSAodW5pcXVlSUQpID0+IHtcbiAgICBjb25zb2xlLmxvZyh1bmlxdWVJRCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlVXNlcjogdW5pcXVlSUR9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXJzLCBhY3RpdmVVc2VyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzLXBhZ2VcIj5cbiAgICAgICAgey8qIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZUNvbnRhaW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICA8T3V0c2lkZUNsaWNrSGFuZGxlclxuICAgICAgICAgICAgb25PdXRzaWRlQ2xpY2s9e3RoaXMub3V0c2lkZUNsaWNrSGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VXNlclNsaWRlIC8+XG4gICAgICAgICAgPC8gT3V0c2lkZUNsaWNrSGFuZGxlcj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8U2xpZGVDb250YWluZXJcbiAgICAgICAgICBhY3RpdmVVc2VyPXt1c2Vyc1thY3RpdmVVc2VyXX1cbiAgICAgICAgICBvdXRzaWRlQ2xpY2tIYW5kbGVyPXt0aGlzLm91dHNpZGVDbGlja0hhbmRsZXJ9XG4gICAgICAgID4gXG4gICAgICAgICAgVGhpcyBpcyBzb21lIGNoaWxkcmVuIG1ha2V1cFxuICAgICAgICA8L1NsaWRlQ29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzLXBhZ2VfX3RpdGxlXCI+VXNlcnM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2Vycy1saXN0XCI+XG4gICAgICAgICAge3VzZXJzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFVzZXJDYXJkXG4gICAgICAgICAgICAgICAgey4uLml0ZW19XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLnVuaXF1ZUlEfVxuICAgICAgICAgICAgICAgIGNsaWNrT25DYXJkPXt0aGlzLmNsaWNrT25DYXJkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwic291cmNlUm9vdCI6IiJ9