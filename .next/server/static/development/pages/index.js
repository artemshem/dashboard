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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
    return fetch(url).then(response => response.json());
  }

  async getUsers(numberOfUsers) {
    const url = `https://randomuser.me/api/?page=1&results=${numberOfUsers}&seed=abv`;
    return fetch(url).then(response => response.json());
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
var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\main-page-components\\info-line\\info-line-item.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class InfoLineItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      title,
      desc,
      theme,
      img
    } = this.props;
    return __jsx("div", {
      className: "info-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "info-item-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: `info-item__img info-item__img_${theme}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: img,
      alt: "img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }))), __jsx("div", {
      className: "info-item-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "info-item__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, title), __jsx("span", {
      className: "info-item__desc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, desc)));
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
var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\main-page-components\\info-line\\info-line.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




class InfoLine extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      data
    } = this.props;
    return __jsx("div", {
      className: "info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, data.map((item, index) => {
      return __jsx(_info_line_item__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, item, {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
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
var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\main-page-components\\users-scroll-list\\users-scroll-list.tsx";
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
      className: "info-item info-item_tall",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "user-scroll-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "user-scroll-header__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, "Users")), __jsx("div", {
      className: "user-scroll-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "user-scroll-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, users.map(item => {
      return __jsx("div", {
        className: "user-scroll-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, __jsx("img", {
        className: "user-scroll__img",
        src: item.picture.thumbnail,
        alt: "user",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 19
        }
      }), __jsx("span", {
        className: "user-scroll__name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 19
        }
      }, item.name.first, " ", item.name.last));
    }))));
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
var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\pages\\main.tsx";
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
    return __jsx("div", {
      className: "main-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "info-block info-block_top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, __jsx(_components_main_page_components_info_line_info_line__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: _config__WEBPACK_IMPORTED_MODULE_1__["topData"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "info-block info-block_left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "info-item info-item_chart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"], {
      chartType: "LineChart",
      data: data,
      options: options,
      width: "100%",
      height: "378px",
      legendToggle: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    })), __jsx(_components_main_page_components_info_line_info_line__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: _config__WEBPACK_IMPORTED_MODULE_1__["bottomData"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "info-line info-line_tall",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, __jsx(_components_main_page_components_users_scroll_list_users_scroll_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "info-item info-item_tall",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Work\Projects\test-app\src\pages\index.tsx */"./src/pages/index.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlLWNvbXBvbmVudHMvaW5mby1saW5lL2luZm8tbGluZS1pdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UtY29tcG9uZW50cy9pbmZvLWxpbmUvaW5mby1saW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UtY29tcG9uZW50cy91c2Vycy1zY3JvbGwtbGlzdC91c2Vycy1zY3JvbGwtbGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9tYWluLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1jaGFydHNcIiJdLCJuYW1lcyI6WyJBUEkiLCJnZXROZXdzIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZ2V0VXNlcnMiLCJudW1iZXJPZlVzZXJzIiwiSW5mb0xpbmVJdGVtIiwiQ29tcG9uZW50IiwicmVuZGVyIiwidGl0bGUiLCJkZXNjIiwidGhlbWUiLCJpbWciLCJwcm9wcyIsIkluZm9MaW5lIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIlVzZXJTY3JvbGxMaXN0IiwidXNlcnMiLCJhcGkiLCJzZXRTdGF0ZSIsInJlc3VsdHMiLCJzdGF0ZSIsInBpY3R1cmUiLCJ0aHVtYm5haWwiLCJuYW1lIiwiZmlyc3QiLCJsYXN0IiwidG9wRGF0YSIsImJvdHRvbURhdGEiLCJNYWluIiwib3B0aW9ucyIsImN1cnZlVHlwZSIsImxlZ2VuZCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoi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LEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLHlEQUFEO0FBQ0UsZUFBUyxFQUFDLFdBRFo7QUFFRSxVQUFJLEVBQUVmLElBRlI7QUFHRSxhQUFPLEVBQUVrQixPQUhYO0FBSUUsV0FBSyxFQUFDLE1BSlI7QUFLRSxZQUFNLEVBQUMsT0FMVDtBQU1FLGtCQUFZLE1BTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLENBREYsRUFXRSxNQUFDLDRGQUFEO0FBQWMsVUFBSSxFQUFFRixrREFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVhGLENBREYsRUFjRTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw0R0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FkRixDQUpGLENBREY7QUE0QkQ7O0FBaENvQzs7QUFtQ3hCQyxtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xuICBhc3luYyBnZXROZXdzICgpIHtcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP3NvdXJjZXM9aGFja2VyLW5ld3MmYXBpS2V5PWYyMmJjYzJmYjlhNTQxODViNzY0OTFiOWMzNTNkODk0JztcbiAgICByZXR1cm4gZmV0Y2godXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH1cblxuICBhc3luYyBnZXRVc2VycyAobnVtYmVyT2ZVc2VyczogbnVtYmVyKSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvP3BhZ2U9MSZyZXN1bHRzPSR7bnVtYmVyT2ZVc2Vyc30mc2VlZD1hYnZgO1xuICAgIHJldHVybiBmZXRjaCh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfVxufSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSUNvbXBvbmVudFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzYzogc3RyaW5nO1xuICB0aGVtZTogc3RyaW5nO1xuICBpbWc6IHN0cmluZztcbn1cblxuY2xhc3MgSW5mb0xpbmVJdGVtIGV4dGVuZHMgQ29tcG9uZW50PElDb21wb25lbnRQcm9wcz4ge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjLCB0aGVtZSwgaW1nIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1pdGVtLWxlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGluZm8taXRlbV9faW1nIGluZm8taXRlbV9faW1nXyR7dGhlbWV9YH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJpbWdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWl0ZW0tcmlnaHRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvLWl0ZW1fX3RpdGxlXCI+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvLWl0ZW1fX2Rlc2NcIj57ZGVzY308L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZvTGluZUl0ZW07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbmZvTGluZUl0ZW0gZnJvbSAnLi9pbmZvLWxpbmUtaXRlbSc7XG5cbmludGVyZmFjZSBJQ29tcG9uZW50UHJvcHMge1xuICBkYXRhOiBBcnJheTxhbnk+O1xufVxuXG5jbGFzcyBJbmZvTGluZSBleHRlbmRzIENvbXBvbmVudDxJQ29tcG9uZW50UHJvcHM+IHtcbiAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWxpbmVcIj5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SW5mb0xpbmVJdGVtIHsuLi5pdGVtfSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmZvTGluZTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcblxuY2xhc3MgVXNlclNjcm9sbExpc3QgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgc3RhdGUgPSB7XG4gICAgdXNlcnM6IFtdIGFzIEFycmF5PGFueT4sXG4gIH1cblxuICBhcGkgPSBuZXcgQVBJKCk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5hcGkuZ2V0VXNlcnMoMTIpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcnM6IGRhdGEucmVzdWx0cyB9KTtcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VycyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8taXRlbSBpbmZvLWl0ZW1fdGFsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItc2Nyb2xsLWhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItc2Nyb2xsLWhlYWRlcl9fdGl0bGVcIj5Vc2Vyczwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1zY3JvbGwtYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1zY3JvbGwtbGlzdFwiPlxuICAgICAgICAgICAge3VzZXJzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1zY3JvbGwtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1c2VyLXNjcm9sbF9faW1nXCIgc3JjPXtpdGVtLnBpY3R1cmUudGh1bWJuYWlsfSBhbHQ9XCJ1c2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItc2Nyb2xsX19uYW1lXCI+e2l0ZW0ubmFtZS5maXJzdH0ge2l0ZW0ubmFtZS5sYXN0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTY3JvbGxMaXN0OyIsImV4cG9ydCBjb25zdCB0b3BEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6ICc2MicsXG4gICAgZGVzYzogJ1VzZXJzJyxcbiAgICB0aGVtZTogJ2dyYXknLFxuICAgIGltZzogJy9pbWcvaW5mby0xLnN2ZycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJzYuOCcsXG4gICAgZGVzYzogJ0F2ZXJhZ2UgTWFyaycsXG4gICAgdGhlbWU6ICdncmVlbicsXG4gICAgaW1nOiAnL2ltZy9pbmZvLTIuc3ZnJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnOSAoMTQlKScsXG4gICAgZGVzYzogJ1VuZGVycGVyZm9ybWluZyBzdHVkZW50cycsXG4gICAgdGhlbWU6ICdyZWQnLFxuICAgIGltZzogJy9pbWcvaW5mby0zLnN2ZycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJzgzJScsXG4gICAgZGVzYzogJ0ZpbmlzaGVkIGhvbWV3b3JrcycsXG4gICAgdGhlbWU6ICdibHVlJyxcbiAgICBpbWc6ICcvaW1nL2luZm8tNC5zdmcnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGJvdHRvbURhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogJzI1JyxcbiAgICBkZXNjOiAnTGVjdGlvbnMgbGVmdCcsXG4gICAgdGhlbWU6ICd5ZWxsb3cnLFxuICAgIGltZzogJy9pbWcvaW5mby01LnN2ZycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJzEzOScsXG4gICAgZGVzYzogJ0hvdXJzIHNwZW50IG9uIGxlY3Rpb25zJyxcbiAgICB0aGVtZTogJ2JsdWUnLFxuICAgIGltZzogJy9pbWcvaW5mby02LnN2ZycsXG4gIH0sXG5dO1xuXG4iLCJpbXBvcnQgTWFpbiBmcm9tICcuL21haW4nO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3RvcERhdGEsIGJvdHRvbURhdGF9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgQVBJIGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IEluZm9MaW5lSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL21haW4tcGFnZS1jb21wb25lbnRzL2luZm8tbGluZS9pbmZvLWxpbmUnO1xuaW1wb3J0IFVzZXJTY3JvbGxMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi1wYWdlLWNvbXBvbmVudHMvdXNlcnMtc2Nyb2xsLWxpc3QvdXNlcnMtc2Nyb2xsLWxpc3QnO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLWNoYXJ0c1wiO1xuXG5jb25zdCBkYXRhID0gW1xuICBbXCJZZWFyXCIsIFwiU2FsZXNcIiwgXCJFeHBlbnNlc1wiXSxcbiAgW1wiMjAwNFwiLCAxMDAwLCA0MDBdLFxuICBbXCIyMDA1XCIsIDExNzAsIDQ2MF0sXG4gIFtcIjIwMDZcIiwgNjYwLCAxMTIwXSxcbiAgW1wiMjAwN1wiLCAxMDMwLCA1NDBdXG5dIGFzIEFycmF5PGFueT47XG5cbmxldCBvcHRpb25zID0ge1xuICB0aXRsZTogXCJDb21wYW55IFBlcmZvcm1hbmNlXCIsXG4gIGN1cnZlVHlwZTogXCJmdW5jdGlvblwiLFxuICBsZWdlbmQ6IHsgcG9zaXRpb246IFwiYm90dG9tXCIgfVxufSBhcyBvYmplY3Q7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYmxvY2sgaW5mby1ibG9ja190b3BcIj5cbiAgICAgICAgICA8SW5mb0xpbmVJdGVtIGRhdGE9e3RvcERhdGF9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tbGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1ibG9jayBpbmZvLWJsb2NrX2xlZnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1pdGVtIGluZm8taXRlbV9jaGFydFwiPlxuICAgICAgICAgICAgPENoYXJ0XG4gICAgICAgICAgICAgIGNoYXJ0VHlwZT1cIkxpbmVDaGFydFwiXG4gICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjM3OHB4XCJcbiAgICAgICAgICAgICAgbGVnZW5kVG9nZ2xlXG4gICAgICAgICAgICAvPiAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxJbmZvTGluZUl0ZW0gZGF0YT17Ym90dG9tRGF0YX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tbGluZSBpbmZvLWxpbmVfdGFsbFwiPlxuICAgICAgICAgICAgPFVzZXJTY3JvbGxMaXN0IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8taXRlbSBpbmZvLWl0ZW1fdGFsbFwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtY2hhcnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=