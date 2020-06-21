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
          lineNumber: 42,
          columnNumber: 7
        }
      }, __jsx(_components_slide_slide_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        activeUser: Boolean(users[activeUser]),
        outsideClickHandler: this.outsideClickHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }, "This is some children makeup"), __jsx("div", {
        className: "users-page__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, "Users"), __jsx("div", {
        className: "users-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }
      }, users.map(function (item) {
        return __jsx(_components_user_user_card__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
          key: item.uniqueID,
          clickOnCard: _this2.clickOnCard,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXNlcnMudHN4Il0sIm5hbWVzIjpbIlVzZXJzIiwiYWN0aXZlVXNlciIsInVzZXJzIiwiQVBJIiwiYXBpIiwiZ2V0VXNlcnMiLCJ0aGVuIiwiZGF0YSIsImkiLCJyZXN1bHQiLCJyZXN1bHRzIiwibWFwIiwiaXRlbSIsInVuaXF1ZUlEIiwic2V0U3RhdGUiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJCb29sZWFuIiwib3V0c2lkZUNsaWNrSGFuZGxlciIsImNsaWNrT25DYXJkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsZ0JBQVUsRUFBRSxJQUROO0FBRU5DLFdBQUssRUFBRTtBQUZELEs7OzhNQUtGLElBQUlDLGdEQUFKLEU7OzROQUVjLFlBQU07QUFDeEIsWUFBS0MsR0FBTCxDQUFTQyxRQUFULENBQWtCLEVBQWxCLEVBQ0dDLElBREgsQ0FDUSxVQUFDQyxJQUFELEVBQVU7QUFDZCxZQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLFlBQU1DLE1BQU0sR0FBR0YsSUFBSSxDQUFDRyxPQUFMLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hDLGlEQUNLQSxJQURMO0FBRUVDLG9CQUFRLEVBQUVMLENBQUM7QUFGYjtBQUlELFNBTGMsQ0FBZjs7QUFNQSxjQUFLTSxRQUFMLENBQWM7QUFBRVosZUFBSyxFQUFFTztBQUFULFNBQWQ7QUFDRCxPQVZIO0FBV0QsSzs7OE5BRXFCLFlBQU07QUFDMUIsWUFBS0ssUUFBTCxDQUFjO0FBQUViLGtCQUFVLEVBQUU7QUFBZCxPQUFkO0FBQ0QsSzs7c05BRWEsVUFBQ1ksUUFBRCxFQUFjO0FBQzFCLFlBQUtDLFFBQUwsQ0FBYztBQUFFYixrQkFBVSxFQUFFWTtBQUFkLE9BQWQ7QUFDRCxLOzs7Ozs7OzZCQUVRO0FBQUE7O0FBQUEsd0JBQ3VCLEtBQUtFLEtBRDVCO0FBQUEsVUFDQ2IsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUQsVUFEUixlQUNRQSxVQURSO0FBRVBlLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZixLQUFaO0FBRUEsYUFDRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywwRUFBRDtBQUNFLGtCQUFVLEVBQUVnQixPQUFPLENBQUNoQixLQUFLLENBQUNELFVBQUQsQ0FBTixDQURyQjtBQUVFLDJCQUFtQixFQUFFLEtBQUtrQixtQkFGNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FERixFQU9FO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLEVBUUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHakIsS0FBSyxDQUFDUyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLGVBQ0UsTUFBQyxtRUFBRCx5RkFDTUEsSUFETjtBQUVFLGFBQUcsRUFBRUEsSUFBSSxDQUFDQyxRQUZaO0FBR0UscUJBQVcsRUFBRSxNQUFJLENBQUNPLFdBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELE9BUkEsQ0FESCxDQVJGLENBREY7QUFzQkQ7Ozs7RUF4RGlCQywrQzs7QUEyRExyQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnMuanMuNDNhZTAyNzAxN2VmMTA3YjUxODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQVBJIGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IFVzZXJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlci91c2VyLWNhcmQnO1xuaW1wb3J0IFNsaWRlQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGUvc2xpZGUtY29udGFpbmVyJztcbmltcG9ydCBPdXRzaWRlQ2xpY2tIYW5kbGVyIGZyb20gJ3JlYWN0LW91dHNpZGUtY2xpY2staGFuZGxlcic7XG5cbmNsYXNzIFVzZXJzIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHN0YXRlID0ge1xuICAgIGFjdGl2ZVVzZXI6IG51bGwsXG4gICAgdXNlcnM6IFtdIGFzIEFycmF5PGFueT4sXG4gIH1cblxuICBhcGkgPSBuZXcgQVBJKCk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5hcGkuZ2V0VXNlcnMoMTIpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGEucmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICB1bmlxdWVJRDogaSsrLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyczogcmVzdWx0IH0pO1xuICAgICAgfSlcbiAgfVxuXG4gIG91dHNpZGVDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZVVzZXI6IG51bGwgfSk7XG4gIH1cblxuICBjbGlja09uQ2FyZCA9ICh1bmlxdWVJRCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVVc2VyOiB1bmlxdWVJRCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXJzLCBhY3RpdmVVc2VyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzLXBhZ2VcIj5cbiAgICAgICAgPFNsaWRlQ29udGFpbmVyXG4gICAgICAgICAgYWN0aXZlVXNlcj17Qm9vbGVhbih1c2Vyc1thY3RpdmVVc2VyXSl9XG4gICAgICAgICAgb3V0c2lkZUNsaWNrSGFuZGxlcj17dGhpcy5vdXRzaWRlQ2xpY2tIYW5kbGVyfVxuICAgICAgICA+XG4gICAgICAgICAgVGhpcyBpcyBzb21lIGNoaWxkcmVuIG1ha2V1cFxuICAgICAgICA8L1NsaWRlQ29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzLXBhZ2VfX3RpdGxlXCI+VXNlcnM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2Vycy1saXN0XCI+XG4gICAgICAgICAge3VzZXJzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFVzZXJDYXJkXG4gICAgICAgICAgICAgICAgey4uLml0ZW19XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLnVuaXF1ZUlEfVxuICAgICAgICAgICAgICAgIGNsaWNrT25DYXJkPXt0aGlzLmNsaWNrT25DYXJkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwic291cmNlUm9vdCI6IiJ9