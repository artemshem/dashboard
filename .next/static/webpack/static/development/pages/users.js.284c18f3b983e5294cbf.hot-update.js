webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./src/components/user/users-filters.tsx":
/*!***********************************************!*\
  !*** ./src/components/user/users-filters.tsx ***!
  \***********************************************/
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





var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\user\\users-filters.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var UserFilters = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UserFilters, _Component);

  var _super = _createSuper(UserFilters);

  function UserFilters() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserFilters);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserFilters, [{
    key: "render",
    value: function render() {
      var changeFilter = this.props.changeFilter;
      return __jsx("div", {
        className: "filters",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "filter-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "filter-block__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }
      }, "Gender"), __jsx("select", {
        className: "filter-block__select",
        onChange: function onChange(event) {
          return changeFilter(event, 'gender');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }
      }, __jsx("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }
      }, "Male"), __jsx("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }
      }, "Female"))), __jsx("div", {
        className: "filter-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "filter-block__title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }
      }, "Sorting by age"), __jsx("select", {
        className: "filter-block__select",
        onChange: function onChange(event) {
          return changeFilter(event, 'gender');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, __jsx("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, "Ascending "), __jsx("option", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, "Descending"))));
    }
  }]);

  return UserFilters;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserFilters);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyL3VzZXJzLWZpbHRlcnMudHN4Il0sIm5hbWVzIjpbIlVzZXJGaWx0ZXJzIiwiY2hhbmdlRmlsdGVyIiwicHJvcHMiLCJldmVudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7NkJBRUs7QUFBQSxVQUNDQyxZQURELEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0NELFlBREQ7QUFHUCxhQUNFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTSxpQkFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFDRSxpQkFBUyxFQUFDLHNCQURaO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ0UsS0FBRDtBQUFBLGlCQUFXRixZQUFZLENBQUNFLEtBQUQsRUFBUSxRQUFSLENBQXZCO0FBQUEsU0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsQ0FGRixDQURGLEVBV0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUVFO0FBQ0UsaUJBQVMsRUFBQyxzQkFEWjtBQUVFLGdCQUFRLEVBQUUsa0JBQUNBLEtBQUQ7QUFBQSxpQkFBV0YsWUFBWSxDQUFDRSxLQUFELEVBQVEsUUFBUixDQUF2QjtBQUFBLFNBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxGLENBRkYsQ0FYRixDQURGO0FBd0JEOzs7O0VBN0J1QkMsK0M7O0FBZ0NYSiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnMuanMuMjg0YzE4ZjNiOTgzZTUyOTRjYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFVzZXJGaWx0ZXJzIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hhbmdlRmlsdGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1ibG9ja1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRlci1ibG9ja19fdGl0bGVcIj5HZW5kZXI8L3NwYW4+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLWJsb2NrX19zZWxlY3RcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gY2hhbmdlRmlsdGVyKGV2ZW50LCAnZ2VuZGVyJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbj5NYWxlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPkZlbWFsZTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYmxvY2tcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ZXItYmxvY2tfX3RpdGxlXCI+U29ydGluZyBieSBhZ2U8L3NwYW4+XG4gICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci1ibG9ja19fc2VsZWN0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGNoYW5nZUZpbHRlcihldmVudCwgJ2dlbmRlcicpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24+QXNjZW5kaW5nIDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbj5EZXNjZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJGaWx0ZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=