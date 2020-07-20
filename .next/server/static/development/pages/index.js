module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return API; });
class API {
  async getNews() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=f22bcc2fb9a54185b76491b9c353d894';
    const response = await fetch(url);
    return await response.json();
  } //&seed=abv


  async getUsers(numberOfUsers) {
    const url = `https://randomuser.me/api/?page=1&results=${numberOfUsers}`;
    const response = await fetch(url);
    return await response.json();
  }

}

/***/ }),

/***/ "./src/components/main-page-components/info-line/info-line-item.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/main-page-components/info-line/info-line-item.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Work\\Projects\\dashboard\\src\\components\\main-page-components\\info-line\\info-line-item.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class InfoLineItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      title,
      desc,
      theme,
      img,
      grid
    } = this.props;
    return __jsx("div", {
      className: `info-item ${grid}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "info-item-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "info-item-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: `info-item__img info-item__img_${theme}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: img,
      alt: "img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }))), __jsx("div", {
      className: "info-item-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "info-item__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, title), __jsx("span", {
      className: "info-item__desc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, desc))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (InfoLineItem);

/***/ }),

/***/ "./src/components/main-page-components/info-line/info-line.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/main-page-components/info-line/info-line.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _info_line_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-line-item */ "./src/components/main-page-components/info-line/info-line-item.tsx");
var _jsxFileName = "E:\\Work\\Projects\\dashboard\\src\\components\\main-page-components\\info-line\\info-line.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




class InfoLine extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      data,
      grid
    } = this.props;
    return __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, data.map((item, index) => {
      return __jsx(_info_line_item__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, item, {
        grid: grid,
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }
      }));
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (InfoLine);

/***/ }),

/***/ "./src/components/main-page-components/users-scroll-list/users-scroll-list.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/main-page-components/users-scroll-list/users-scroll-list.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api */ "./src/api/api.ts");
var _jsxFileName = "E:\\Work\\Projects\\dashboard\\src\\components\\main-page-components\\users-scroll-list\\users-scroll-list.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class UserScrollList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      users: []
    });

    _defineProperty(this, "api", new _api_api__WEBPACK_IMPORTED_MODULE_1__["default"]());

    _defineProperty(this, "componentDidMount", () => {
      this.api.getUsers(12).then(data => {
        this.setState({
          users: data.results
        });
      });
    });
  }

  render() {
    const {
      users
    } = this.state;
    return __jsx("div", {
      className: "info-item info-item_tall col-12 col-md-6 col-lg-6 col-xl-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "info-item-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "user-scroll-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "user-scroll-header__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, "Users")), __jsx("div", {
      className: "user-scroll-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "user-scroll-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, users.map((item, index) => {
      return __jsx("div", {
        className: "user-scroll-item",
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 19
        }
      }, __jsx("img", {
        className: "user-scroll__img",
        src: item.picture.thumbnail,
        alt: "user",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }), __jsx("span", {
        className: "user-scroll__name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }
      }, item.name.first, " ", item.name.last));
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserScrollList);

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: topData, bottomData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topData", function() { return topData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottomData", function() { return bottomData; });
const topData = [{
  title: '62',
  desc: 'Users',
  theme: 'gray',
  img: '/img/info-1.svg'
}, {
  title: '6.8',
  desc: 'Average Mark',
  theme: 'green',
  img: '/img/info-2.svg'
}, {
  title: '9 (14%)',
  desc: 'Underperforming students',
  theme: 'red',
  img: '/img/info-3.svg'
}, {
  title: '83%',
  desc: 'Finished homeworks',
  theme: 'blue',
  img: '/img/info-4.svg'
}];
const bottomData = [{
  title: '25',
  desc: 'Lections left',
  theme: 'yellow',
  img: '/img/info-5.svg'
}, {
  title: '139',
  desc: 'Hours spent on lections',
  theme: 'blue',
  img: '/img/info-6.svg'
}];

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/pages/main.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/pages/main.tsx":
/*!****************************!*\
  !*** ./src/pages/main.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _components_main_page_components_info_line_info_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main-page-components/info-line/info-line */ "./src/components/main-page-components/info-line/info-line.tsx");
/* harmony import */ var _components_main_page_components_users_scroll_list_users_scroll_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/main-page-components/users-scroll-list/users-scroll-list */ "./src/components/main-page-components/users-scroll-list/users-scroll-list.tsx");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-charts */ "react-google-charts");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_charts__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\Work\\Projects\\dashboard\\src\\pages\\main.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const data = [["Year", "Sales", "Expenses"], ["2004", 1000, 400], ["2005", 1170, 460], ["2006", 660, 1120], ["2007", 1030, 540]];
let options = {
  title: "Company Performance",
  curveType: "function",
  legend: {
    position: "bottom"
  }
};

class Main extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    // if( typeof(window) !== 'undefined') {
    //   console.log(window.innerWidth);
    // }
    return __jsx("div", {
      className: "main-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "info-block info-block_top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx(_components_main_page_components_info_line_info_line__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: _config__WEBPACK_IMPORTED_MODULE_1__["topData"],
      grid: 'col-12 col-md-6 col-lg-4 col-xl-3',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "info-block info-block_left col-12 col-xl-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "info-item info-item_chart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"], {
      chartType: "LineChart",
      data: data,
      options: options,
      width: "100%",
      height: "100%",
      legendToggle: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    })), __jsx(_components_main_page_components_info_line_info_line__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: _config__WEBPACK_IMPORTED_MODULE_1__["bottomData"],
      grid: 'col-12 col-md-6 col-xl-6',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    })), __jsx(_components_main_page_components_users_scroll_list_users_scroll_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "info-item info-item_tall col-12 col-md-6 col-lg-6 col-xl-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "info-item-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, " "))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Work\Projects\dashboard\src\pages\index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-google-charts":
/*!**************************************!*\
  !*** external "react-google-charts" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-charts");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlLWNvbXBvbmVudHMvaW5mby1saW5lL2luZm8tbGluZS1pdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UtY29tcG9uZW50cy9pbmZvLWxpbmUvaW5mby1saW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UtY29tcG9uZW50cy91c2Vycy1zY3JvbGwtbGlzdC91c2Vycy1zY3JvbGwtbGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9tYWluLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1jaGFydHNcIiJdLCJuYW1lcyI6WyJBUEkiLCJnZXROZXdzIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJnZXRVc2VycyIsIm51bWJlck9mVXNlcnMiLCJJbmZvTGluZUl0ZW0iLCJDb21wb25lbnQiLCJyZW5kZXIiLCJ0aXRsZSIsImRlc2MiLCJ0aGVtZSIsImltZyIsImdyaWQiLCJwcm9wcyIsIkluZm9MaW5lIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIlVzZXJTY3JvbGxMaXN0IiwidXNlcnMiLCJhcGkiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZXN1bHRzIiwic3RhdGUiLCJwaWN0dXJlIiwidGh1bWJuYWlsIiwibmFtZSIsImZpcnN0IiwibGFzdCIsInRvcERhdGEiLCJib3R0b21EYXRhIiwiTWFpbiIsIm9wdGlvbnMiLCJjdXJ2ZVR5cGUiLCJsZWdlbmQiLCJwb3NpdGlvbiJdLCJtYXBw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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBZkYsQ0FKRixDQURGO0FBMEJEOztBQWxDb0M7O0FBcUN4QkMsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcbiAgYXN5bmMgZ2V0TmV3cyAoKSB7XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9zb3VyY2VzPWhhY2tlci1uZXdzJmFwaUtleT1mMjJiY2MyZmI5YTU0MTg1Yjc2NDkxYjljMzUzZDg5NCc7XG4gICAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICAvLyZzZWVkPWFidlxuXG4gIGFzeW5jIGdldFVzZXJzIChudW1iZXJPZlVzZXJzOiBudW1iZXIpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8/cGFnZT0xJnJlc3VsdHM9JHtudW1iZXJPZlVzZXJzfWA7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBJQ29tcG9uZW50UHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjOiBzdHJpbmc7XG4gIHRoZW1lOiBzdHJpbmc7XG4gIGltZzogc3RyaW5nO1xuICBncmlkOiBzdHJpbmc7XG59XG5cbmNsYXNzIEluZm9MaW5lSXRlbSBleHRlbmRzIENvbXBvbmVudDxJQ29tcG9uZW50UHJvcHM+IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzYywgdGhlbWUsIGltZywgZ3JpZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGluZm8taXRlbSAke2dyaWR9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1pdGVtLWlubmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWl0ZW0tbGVmdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpbmZvLWl0ZW1fX2ltZyBpbmZvLWl0ZW1fX2ltZ18ke3RoZW1lfWB9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJpbWdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWl0ZW0tcmlnaHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm8taXRlbV9fdGl0bGVcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5mby1pdGVtX19kZXNjXCI+e2Rlc2N9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mb0xpbmVJdGVtOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5mb0xpbmVJdGVtIGZyb20gJy4vaW5mby1saW5lLWl0ZW0nO1xuXG5pbnRlcmZhY2UgSUNvbXBvbmVudFByb3BzIHtcbiAgZGF0YTogQXJyYXk8YW55PjtcbiAgZ3JpZDogc3RyaW5nO1xufVxuXG5jbGFzcyBJbmZvTGluZSBleHRlbmRzIENvbXBvbmVudDxJQ29tcG9uZW50UHJvcHM+IHtcbiAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIGdyaWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SW5mb0xpbmVJdGVtIHsuLi5pdGVtfSBncmlkPXtncmlkfSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmZvTGluZTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcblxuY2xhc3MgVXNlclNjcm9sbExpc3QgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgc3RhdGUgPSB7XG4gICAgdXNlcnM6IFtdIGFzIEFycmF5PGFueT4sXG4gIH1cblxuICBhcGkgPSBuZXcgQVBJKCk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5hcGkuZ2V0VXNlcnMoMTIpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcnM6IGRhdGEucmVzdWx0cyB9KTtcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VycyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8taXRlbSBpbmZvLWl0ZW1fdGFsbCBjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWl0ZW0taW5uZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItc2Nyb2xsLWhlYWRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1zY3JvbGwtaGVhZGVyX190aXRsZVwiPlVzZXJzPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1zY3JvbGwtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXNjcm9sbC1saXN0XCI+XG4gICAgICAgICAgICAgIHt1c2Vycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1zY3JvbGwtaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInVzZXItc2Nyb2xsX19pbWdcIiBzcmM9e2l0ZW0ucGljdHVyZS50aHVtYm5haWx9IGFsdD1cInVzZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLXNjcm9sbF9fbmFtZVwiPntpdGVtLm5hbWUuZmlyc3R9IHtpdGVtLm5hbWUubGFzdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTY3JvbGxMaXN0OyIsImV4cG9ydCBjb25zdCB0b3BEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6ICc2MicsXG4gICAgZGVzYzogJ1VzZXJzJyxcbiAgICB0aGVtZTogJ2dyYXknLFxuICAgIGltZzogJy9pbWcvaW5mby0xLnN2ZycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJzYuOCcsXG4gICAgZGVzYzogJ0F2ZXJhZ2UgTWFyaycsXG4gICAgdGhlbWU6ICdncmVlbicsXG4gICAgaW1nOiAnL2ltZy9pbmZvLTIuc3ZnJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnOSAoMTQlKScsXG4gICAgZGVzYzogJ1VuZGVycGVyZm9ybWluZyBzdHVkZW50cycsXG4gICAgdGhlbWU6ICdyZWQnLFxuICAgIGltZzogJy9pbWcvaW5mby0zLnN2ZycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJzgzJScsXG4gICAgZGVzYzogJ0ZpbmlzaGVkIGhvbWV3b3JrcycsXG4gICAgdGhlbWU6ICdibHVlJyxcbiAgICBpbWc6ICcvaW1nL2luZm8tNC5zdmcnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGJvdHRvbURhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogJzI1JyxcbiAgICBkZXNjOiAnTGVjdGlvbnMgbGVmdCcsXG4gICAgdGhlbWU6ICd5ZWxsb3cnLFxuICAgIGltZzogJy9pbWcvaW5mby01LnN2ZycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJzEzOScsXG4gICAgZGVzYzogJ0hvdXJzIHNwZW50IG9uIGxlY3Rpb25zJyxcbiAgICB0aGVtZTogJ2JsdWUnLFxuICAgIGltZzogJy9pbWcvaW5mby02LnN2ZycsXG4gIH0sXG5dO1xuXG4iLCJpbXBvcnQgTWFpbiBmcm9tICcuL21haW4nO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b3BEYXRhLCBib3R0b21EYXRhIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgSW5mb0xpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluLXBhZ2UtY29tcG9uZW50cy9pbmZvLWxpbmUvaW5mby1saW5lJztcbmltcG9ydCBVc2VyU2Nyb2xsTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21haW4tcGFnZS1jb21wb25lbnRzL3VzZXJzLXNjcm9sbC1saXN0L3VzZXJzLXNjcm9sbC1saXN0JztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSBcInJlYWN0LWdvb2dsZS1jaGFydHNcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAgW1wiWWVhclwiLCBcIlNhbGVzXCIsIFwiRXhwZW5zZXNcIl0sXG4gIFtcIjIwMDRcIiwgMTAwMCwgNDAwXSxcbiAgW1wiMjAwNVwiLCAxMTcwLCA0NjBdLFxuICBbXCIyMDA2XCIsIDY2MCwgMTEyMF0sXG4gIFtcIjIwMDdcIiwgMTAzMCwgNTQwXVxuXSBhcyBBcnJheTxhbnk+O1xuXG5sZXQgb3B0aW9ucyA9IHtcbiAgdGl0bGU6IFwiQ29tcGFueSBQZXJmb3JtYW5jZVwiLFxuICBjdXJ2ZVR5cGU6IFwiZnVuY3Rpb25cIixcbiAgbGVnZW5kOiB7IHBvc2l0aW9uOiBcImJvdHRvbVwiIH1cbn0gYXMgb2JqZWN0O1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gaWYoIHR5cGVvZih3aW5kb3cpICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpO1xuICAgIC8vIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYmxvY2sgaW5mby1ibG9ja190b3BcIj5cbiAgICAgICAgICA8SW5mb0xpbmUgZGF0YT17dG9wRGF0YX0gZ3JpZD17J2NvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1ibG9jayBpbmZvLWJsb2NrX2xlZnQgY29sLTEyIGNvbC14bC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8taXRlbSBpbmZvLWl0ZW1fY2hhcnRcIj5cbiAgICAgICAgICAgICAgPENoYXJ0XG4gICAgICAgICAgICAgICAgY2hhcnRUeXBlPVwiTGluZUNoYXJ0XCJcbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBsZWdlbmRUb2dnbGVcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEluZm9MaW5lIGRhdGE9e2JvdHRvbURhdGF9IGdyaWQ9eydjb2wtMTIgY29sLW1kLTYgY29sLXhsLTYnfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxVc2VyU2Nyb2xsTGlzdCAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1pdGVtIGluZm8taXRlbV90YWxsIGNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWl0ZW0taW5uZXJcIj4gPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLWNoYXJ0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9