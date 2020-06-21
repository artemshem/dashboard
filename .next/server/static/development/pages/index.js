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
  } //&seed=abv


  async getUsers(numberOfUsers) {
    const url = `https://randomuser.me/api/?page=1&results=${numberOfUsers}`;
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
    }, users.map((item, index) => {
      return __jsx("div", {
        className: "user-scroll-item",
        key: index,
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
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "info-block info-block_left",
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
        columnNumber: 13
      }
    })), __jsx(_components_main_page_components_info_line_info_line__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: _config__WEBPACK_IMPORTED_MODULE_1__["bottomData"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "info-line info-line_tall",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, __jsx(_components_main_page_components_users_scroll_list_users_scroll_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "info-item info-item_tall",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlLWNvbXBvbmVudHMvaW5mby1saW5lL2luZm8tbGluZS1pdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UtY29tcG9uZW50cy9pbmZvLWxpbmUvaW5mby1saW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UtY29tcG9uZW50cy91c2Vycy1zY3JvbGwtbGlzdC91c2Vycy1zY3JvbGwtbGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9tYWluLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1jaGFydHNcIiJdLCJuYW1lcyI6WyJBUEkiLCJnZXROZXdzIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZ2V0VXNlcnMiLCJudW1iZXJPZlVzZXJzIiwiSW5mb0xpbmVJdGVtIiwiQ29tcG9uZW50IiwicmVuZGVyIiwidGl0bGUiLCJkZXNjIiwidGhlbWUiLCJpbWciLCJwcm9wcyIsIkluZm9MaW5lIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIlVzZXJTY3JvbGxMaXN0IiwidXNlcnMiLCJhcGkiLCJzZXRTdGF0ZSIsInJlc3VsdHMiLCJzdGF0ZSIsInBpY3R1cmUiLCJ0aHVtYm5haWwiLCJuYW1lIiwiZmlyc3QiLCJsYXN0IiwidG9wRGF0YSIsImJvdHRvbURhdGEiLCJNYWluIiwib3B0aW9ucyIsImN1cnZlVHlwZSIsImxlZ2VuZCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoi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QiwrQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFJRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLE1BQUMseURBQUQ7QUFDRSxlQUFTLEVBQUMsV0FEWjtBQUVFLFVBQUksRUFBRWYsSUFGUjtBQUdFLGFBQU8sRUFBRWtCLE9BSFg7QUFJRSxXQUFLLEVBQUMsTUFKUjtBQUtFLFlBQU0sRUFBQyxNQUxUO0FBTUUsa0JBQVksTUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREEsQ0FERixFQVdFLE1BQUMsNEZBQUQ7QUFBYyxVQUFJLEVBQUVGLGtEQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWEYsQ0FERixFQWNFO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDRHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQWRGLENBSkYsQ0FERjtBQTRCRDs7QUFwQ29DOztBQXVDeEJDLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XG4gIGFzeW5jIGdldE5ld3MgKCkge1xuICAgIGNvbnN0IHVybCA9ICdodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/c291cmNlcz1oYWNrZXItbmV3cyZhcGlLZXk9ZjIyYmNjMmZiOWE1NDE4NWI3NjQ5MWI5YzM1M2Q4OTQnO1xuICAgIHJldHVybiBmZXRjaCh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfVxuXG4gIC8vJnNlZWQ9YWJ2XG5cbiAgYXN5bmMgZ2V0VXNlcnMgKG51bWJlck9mVXNlcnM6IG51bWJlcikge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLz9wYWdlPTEmcmVzdWx0cz0ke251bWJlck9mVXNlcnN9YDtcbiAgICByZXR1cm4gZmV0Y2godXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIElDb21wb25lbnRQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2M6IHN0cmluZztcbiAgdGhlbWU6IHN0cmluZztcbiAgaW1nOiBzdHJpbmc7XG59XG5cbmNsYXNzIEluZm9MaW5lSXRlbSBleHRlbmRzIENvbXBvbmVudDxJQ29tcG9uZW50UHJvcHM+IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzYywgdGhlbWUsIGltZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8taXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8taXRlbS1sZWZ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpbmZvLWl0ZW1fX2ltZyBpbmZvLWl0ZW1fX2ltZ18ke3RoZW1lfWB9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiaW1nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1pdGVtLXJpZ2h0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5mby1pdGVtX190aXRsZVwiPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5mby1pdGVtX19kZXNjXCI+e2Rlc2N9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mb0xpbmVJdGVtOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5mb0xpbmVJdGVtIGZyb20gJy4vaW5mby1saW5lLWl0ZW0nO1xuXG5pbnRlcmZhY2UgSUNvbXBvbmVudFByb3BzIHtcbiAgZGF0YTogQXJyYXk8YW55Pjtcbn1cblxuY2xhc3MgSW5mb0xpbmUgZXh0ZW5kcyBDb21wb25lbnQ8SUNvbXBvbmVudFByb3BzPiB7XG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1saW5lXCI+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEluZm9MaW5lSXRlbSB7Li4uaXRlbX0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mb0xpbmU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaSc7XG5cbmNsYXNzIFVzZXJTY3JvbGxMaXN0IGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHN0YXRlID0ge1xuICAgIHVzZXJzOiBbXSBhcyBBcnJheTxhbnk+LFxuICB9XG5cbiAgYXBpID0gbmV3IEFQSSgpO1xuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIHRoaXMuYXBpLmdldFVzZXJzKDEyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJzOiBkYXRhLnJlc3VsdHMgfSk7XG4gICAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlcnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWl0ZW0gaW5mby1pdGVtX3RhbGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXNjcm9sbC1oZWFkZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLXNjcm9sbC1oZWFkZXJfX3RpdGxlXCI+VXNlcnM8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItc2Nyb2xsLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItc2Nyb2xsLWxpc3RcIj5cbiAgICAgICAgICAgIHt1c2Vycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXNjcm9sbC1pdGVtXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInVzZXItc2Nyb2xsX19pbWdcIiBzcmM9e2l0ZW0ucGljdHVyZS50aHVtYm5haWx9IGFsdD1cInVzZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1zY3JvbGxfX25hbWVcIj57aXRlbS5uYW1lLmZpcnN0fSB7aXRlbS5uYW1lLmxhc3R9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNjcm9sbExpc3Q7IiwiZXhwb3J0IGNvbnN0IHRvcERhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogJzYyJyxcbiAgICBkZXNjOiAnVXNlcnMnLFxuICAgIHRoZW1lOiAnZ3JheScsXG4gICAgaW1nOiAnL2ltZy9pbmZvLTEuc3ZnJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnNi44JyxcbiAgICBkZXNjOiAnQXZlcmFnZSBNYXJrJyxcbiAgICB0aGVtZTogJ2dyZWVuJyxcbiAgICBpbWc6ICcvaW1nL2luZm8tMi5zdmcnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICc5ICgxNCUpJyxcbiAgICBkZXNjOiAnVW5kZXJwZXJmb3JtaW5nIHN0dWRlbnRzJyxcbiAgICB0aGVtZTogJ3JlZCcsXG4gICAgaW1nOiAnL2ltZy9pbmZvLTMuc3ZnJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnODMlJyxcbiAgICBkZXNjOiAnRmluaXNoZWQgaG9tZXdvcmtzJyxcbiAgICB0aGVtZTogJ2JsdWUnLFxuICAgIGltZzogJy9pbWcvaW5mby00LnN2ZycsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYm90dG9tRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiAnMjUnLFxuICAgIGRlc2M6ICdMZWN0aW9ucyBsZWZ0JyxcbiAgICB0aGVtZTogJ3llbGxvdycsXG4gICAgaW1nOiAnL2ltZy9pbmZvLTUuc3ZnJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnMTM5JyxcbiAgICBkZXNjOiAnSG91cnMgc3BlbnQgb24gbGVjdGlvbnMnLFxuICAgIHRoZW1lOiAnYmx1ZScsXG4gICAgaW1nOiAnL2ltZy9pbmZvLTYuc3ZnJyxcbiAgfSxcbl07XG5cbiIsImltcG9ydCBNYWluIGZyb20gJy4vbWFpbic7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dG9wRGF0YSwgYm90dG9tRGF0YX0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpL2FwaSc7XG5pbXBvcnQgSW5mb0xpbmVJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi1wYWdlLWNvbXBvbmVudHMvaW5mby1saW5lL2luZm8tbGluZSc7XG5pbXBvcnQgVXNlclNjcm9sbExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluLXBhZ2UtY29tcG9uZW50cy91c2Vycy1zY3JvbGwtbGlzdC91c2Vycy1zY3JvbGwtbGlzdCc7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gXCJyZWFjdC1nb29nbGUtY2hhcnRzXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIFtcIlllYXJcIiwgXCJTYWxlc1wiLCBcIkV4cGVuc2VzXCJdLFxuICBbXCIyMDA0XCIsIDEwMDAsIDQwMF0sXG4gIFtcIjIwMDVcIiwgMTE3MCwgNDYwXSxcbiAgW1wiMjAwNlwiLCA2NjAsIDExMjBdLFxuICBbXCIyMDA3XCIsIDEwMzAsIDU0MF1cbl0gYXMgQXJyYXk8YW55PjtcblxubGV0IG9wdGlvbnMgPSB7XG4gIHRpdGxlOiBcIkNvbXBhbnkgUGVyZm9ybWFuY2VcIixcbiAgY3VydmVUeXBlOiBcImZ1bmN0aW9uXCIsXG4gIGxlZ2VuZDogeyBwb3NpdGlvbjogXCJib3R0b21cIiB9XG59IGFzIG9iamVjdDtcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBcbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gaWYoIHR5cGVvZih3aW5kb3cpICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpO1xuICAgIC8vIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYmxvY2sgaW5mby1ibG9ja190b3BcIj5cbiAgICAgICAgICA8SW5mb0xpbmVJdGVtIGRhdGE9e3RvcERhdGF9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tbGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1ibG9jayBpbmZvLWJsb2NrX2xlZnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1pdGVtIGluZm8taXRlbV9jaGFydFwiPlxuICAgICAgICAgICAgPENoYXJ0XG4gICAgICAgICAgICAgIGNoYXJ0VHlwZT1cIkxpbmVDaGFydFwiXG4gICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICBsZWdlbmRUb2dnbGVcbiAgICAgICAgICAgIC8+ICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEluZm9MaW5lSXRlbSBkYXRhPXtib3R0b21EYXRhfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1saW5lIGluZm8tbGluZV90YWxsXCI+XG4gICAgICAgICAgICA8VXNlclNjcm9sbExpc3QgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1pdGVtIGluZm8taXRlbV90YWxsXCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1jaGFydHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==