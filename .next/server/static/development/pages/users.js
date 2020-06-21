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
    return fetch(url).then(response => response.json());
  } //&seed=abv


  async getUsers(numberOfUsers) {
    const url = `https://randomuser.me/api/?page=1&results=${numberOfUsers}`;
    return fetch(url).then(response => response.json());
  }

}

/***/ }),

/***/ "./src/components/slide/slide-container.tsx":
/*!**************************************************!*\
  !*** ./src/components/slide/slide-container.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide */ "./src/components/slide/slide.tsx");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-outside-click-handler */ "react-outside-click-handler");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\slide\\slide-container.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class SlideContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      slideActive,
      outsideClickHandler,
      children
    } = this.props;
    return __jsx("div", {
      className: `slide-container ${slideActive ? 'active' : ''}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, __jsx(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onOutsideClick: outsideClickHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx(_slide__WEBPACK_IMPORTED_MODULE_1__["default"], {
      closeClick: outsideClickHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, children)));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (SlideContainer);

/***/ }),

/***/ "./src/components/slide/slide.tsx":
/*!****************************************!*\
  !*** ./src/components/slide/slide.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\slide\\slide.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Slide extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      closeClick,
      children
    } = this.props;
    return __jsx("div", {
      className: "side-slide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "/img/close.svg",
      className: "slide-close",
      onClick: closeClick,
      alt: "close",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }), children);
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ }),

/***/ "./src/components/user/user-card.tsx":
/*!*******************************************!*\
  !*** ./src/components/user/user-card.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\user\\user-card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class UserCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      picture,
      login,
      phone,
      registered,
      location,
      uniqueID,
      gender,
      dob,
      clickOnCard
    } = this.props;
    return __jsx("div", {
      className: "user-card-outer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "user-card",
      onClick: () => clickOnCard(uniqueID),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "user-card-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "user-card__name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, name.first, " ", name.last)), __jsx("div", {
      className: "user-card__img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: picture.large,
      alt: "user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "user-card-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, __jsx("p", {
      className: "user-card-info__item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, "Username: ", login.username), __jsx("p", {
      className: "user-card-info__item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, "Phone: ", phone), __jsx("p", {
      className: "user-card-info__item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, "Gender: ", gender), __jsx("p", {
      className: "user-card-info__item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, "Age: ", dob.age))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserCard);

/***/ }),

/***/ "./src/components/user/user-slide-makeup.tsx":
/*!***************************************************!*\
  !*** ./src/components/user/user-slide-makeup.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "luxon");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\user\\user-slide-makeup.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class UserSlideMakeup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      activeUser
    } = this.props;
    if (!activeUser) return null;
    const {
      name,
      picture,
      login,
      phone,
      email,
      registered,
      location,
      uniqueID,
      clickOnCard,
      dob,
      gender
    } = activeUser;
    const registeredFixed = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].fromISO(registered.date);
    return __jsx("div", {
      className: "slide-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "slide-info-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: picture.large,
      alt: "user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "slide-info-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "slide-info-head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, "Personal info"), __jsx("div", {
      className: "slide-info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "slide-info__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, "Name:"), __jsx("span", {
      className: "slide-info__data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, name.first, " ", name.last)), __jsx("div", {
      className: "slide-info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "slide-info__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, "Username:"), __jsx("span", {
      className: "slide-info__data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, login.username)), __jsx("div", {
      className: "slide-info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "slide-info__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, "Password:"), __jsx("span", {
      className: "slide-info__data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, login.password)), __jsx("div", {
      className: "slide-info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "slide-info__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, "Registered:"), __jsx("span", {
      className: "slide-info__data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, registeredFixed.toFormat('yyyy-MM-dd'))), __jsx("div", {
      className: "slide-info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "slide-info__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, "Gender:"), __jsx("span", {
      className: "slide-info__data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, gender)), __jsx("div", {
      className: "slide-info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "slide-info__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, "Age:"), __jsx("span", {
      className: "slide-info__data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, dob.age))), __jsx("div", {
      className: "slide-info-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "slide-info-head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, "Contacts"), __jsx("div", {
      className: "slide-info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "slide-info__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, "Phone:"), __jsx("span", {
      className: "slide-info__data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, phone)), __jsx("div", {
      className: "slide-info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "slide-info__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, "Email:"), __jsx("span", {
      className: "slide-info__data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, email))), __jsx("div", {
      className: "slide-info-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "slide-info-head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, "Location"), __jsx("div", {
      className: "slide-info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "slide-info__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, "Country:"), __jsx("span", {
      className: "slide-info__data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, location.country)), __jsx("div", {
      className: "slide-info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "slide-info__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, "State:"), __jsx("span", {
      className: "slide-info__data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, location.state)), __jsx("div", {
      className: "slide-info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "slide-info__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, "City:"), __jsx("span", {
      className: "slide-info__data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, location.city)), __jsx("div", {
      className: "slide-info-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "slide-info__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, "Street:"), __jsx("span", {
      className: "slide-info__data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, location.street.name, " ", location.street.number))));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (UserSlideMakeup);

/***/ }),

/***/ "./src/components/user/users-filters.tsx":
/*!***********************************************!*\
  !*** ./src/components/user/users-filters.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\components\\user\\users-filters.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class UserFilters extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      changeFilter
    } = this.props;
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
      onChange: event => changeFilter(event, 'gender'),
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
    }, "No filter"), __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, "Male"), __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, "Female"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserFilters);

/***/ }),

/***/ "./src/pages/users.tsx":
/*!*****************************!*\
  !*** ./src/pages/users.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
/* harmony import */ var _components_user_user_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/user/user-card */ "./src/components/user/user-card.tsx");
/* harmony import */ var _components_slide_slide_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/slide/slide-container */ "./src/components/slide/slide-container.tsx");
/* harmony import */ var _components_user_user_slide_makeup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/user/user-slide-makeup */ "./src/components/user/user-slide-makeup.tsx");
/* harmony import */ var _components_user_users_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/user/users-filters */ "./src/components/user/users-filters.tsx");
var _jsxFileName = "E:\\Work\\Projects\\test-app\\src\\pages\\users.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Users extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      slideActive: false,
      activeUser: null,
      users: [],
      usersFiltred: [],
      filter: null
    });

    _defineProperty(this, "api", new _api_api__WEBPACK_IMPORTED_MODULE_1__["default"]());

    _defineProperty(this, "componentDidMount", () => {
      this.api.getUsers(12).then(data => {
        let i = 0;
        const result = data.results.map(item => {
          return _objectSpread(_objectSpread({}, item), {}, {
            uniqueID: i++
          });
        });
        this.setState({
          users: result,
          usersFiltred: result
        });
      });
    });

    _defineProperty(this, "outsideClickHandler", () => {
      if (this.state.slideActive) {
        this.setState({
          slideActive: false
        });
      }
    });

    _defineProperty(this, "clickOnCard", uniqueID => {
      this.setState({
        activeUser: uniqueID,
        slideActive: true
      });
    });

    _defineProperty(this, "changeFilter", (event, param) => {
      const {
        users
      } = this.state;
      const {
        value
      } = event.target;

      if (value === 'No filter') {
        this.setState({
          usersFiltred: users
        });
        return;
      }

      let usersFiltred;

      if (param === 'gender') {
        usersFiltred = users.filter(item => item.gender === value.toLowerCase());
      }

      this.setState({
        usersFiltred
      });
    });
  }

  render() {
    const {
      users,
      usersFiltred,
      activeUser,
      slideActive
    } = this.state;
    return __jsx("div", {
      className: "users-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    }, __jsx(_components_slide_slide_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      slideActive: slideActive,
      outsideClickHandler: this.outsideClickHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    }, __jsx(_components_user_user_slide_makeup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      activeUser: users.find(item => item.uniqueID === activeUser),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "users-page__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, "Users"), __jsx(_components_user_users_filters__WEBPACK_IMPORTED_MODULE_5__["default"], {
      changeFilter: this.changeFilter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "users-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, usersFiltred.map(item => {
      return __jsx(_components_user_user_card__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, item, {
        key: item.uniqueID,
        clickOnCard: this.clickOnCard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }
      }));
    })));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/users.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Work\Projects\test-app\src\pages\users.tsx */"./src/pages/users.tsx");


/***/ }),

/***/ "luxon":
/*!************************!*\
  !*** external "luxon" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("luxon");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-outside-click-handler":
/*!**********************************************!*\
  !*** external "react-outside-click-handler" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-outside-click-handler");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2xpZGUvc2xpZGUtY29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGlkZS9zbGlkZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlci91c2VyLWNhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXIvdXNlci1zbGlkZS1tYWtldXAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXIvdXNlcnMtZmlsdGVycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3VzZXJzLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsdXhvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtb3V0c2lkZS1jbGljay1oYW5kbGVyXCIiXSwibmFtZXMiOlsiQVBJIiwiZ2V0TmV3cyIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImdldFVzZXJzIiwibnVtYmVyT2ZVc2VycyIsIlNsaWRlQ29udGFpbmVyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwic2xpZGVBY3RpdmUiLCJvdXRzaWRlQ2xpY2tIYW5kbGVyIiwiY2hpbGRyZW4iLCJwcm9wcyIsIlNsaWRlIiwiY2xvc2VDbGljayIsIlVzZXJDYXJkIiwibmFtZSIsInBpY3R1cmUiLCJsb2dpbiIsInBob25lIiwicmVnaXN0ZXJlZCIsImxvY2F0aW9uIiwidW5pcXVlSUQiLCJnZW5kZXIiLCJkb2IiLCJjbGlja09uQ2FyZCIsImZpcnN0IiwibGFzdCIsImxhcmdlIiwidXNlcm5hbWUiLCJhZ2UiLCJVc2VyU2xpZGVNYWtldXAiLCJhY3RpdmVVc2VyIiwiZW1haWwiLCJyZWdpc3RlcmVkRml4ZWQiLCJEYXRlVGltZSIsImZyb21JU08iLCJkYXRlIiwicGFzc3dvcmQiLCJ0b0Zvcm1hdCIsImNvdW50cnkiLCJzdGF0ZSIsImNpdHkiLCJzdHJlZXQiLCJudW1iZXIiLCJVc2VyRmlsdGVycyIsImNoYW5nZUZpbHRlciIsImV2ZW50IiwiVXNlcnMiLCJ1c2VycyIsInVzZXJzRmlsdHJlZCIsImZpbHRlciIsImFwaSIsImRhdGEiLCJpIiwicmVzdWx0IiwicmVzdWx0cyIsIm1hcCIsIml0ZW0iLCJzZXRTdGF0ZSIsInBhcmFtIiwidmFsdWUiLCJ0YXJnZXQiLCJ0b0xvd2VyQ2FzZSIsImZpbmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFlLE1BQU1BLEdBQU4sQ0FBVTtBQUN2QixRQUFNQyxPQUFOLEdBQWlCO0FBQ2YsVUFBTUMsR0FBRyxHQUFH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ZWxvcG1lbnRcXHBhZ2VzXFx1c2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XG4gIGFzeW5jIGdldE5ld3MgKCkge1xuICAgIGNvbnN0IHVybCA9ICdodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/c291cmNlcz1oYWNrZXItbmV3cyZhcGlLZXk9ZjIyYmNjMmZiOWE1NDE4NWI3NjQ5MWI5YzM1M2Q4OTQnO1xuICAgIHJldHVybiBmZXRjaCh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfVxuXG4gIC8vJnNlZWQ9YWJ2XG5cbiAgYXN5bmMgZ2V0VXNlcnMgKG51bWJlck9mVXNlcnM6IG51bWJlcikge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLz9wYWdlPTEmcmVzdWx0cz0ke251bWJlck9mVXNlcnN9YDtcbiAgICByZXR1cm4gZmV0Y2godXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlIGZyb20gJy4vc2xpZGUnO1xuaW1wb3J0IE91dHNpZGVDbGlja0hhbmRsZXIgZnJvbSAncmVhY3Qtb3V0c2lkZS1jbGljay1oYW5kbGVyJztcblxuY2xhc3MgU2xpZGVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzbGlkZUFjdGl2ZSwgb3V0c2lkZUNsaWNrSGFuZGxlciwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BzbGlkZS1jb250YWluZXIgJHtzbGlkZUFjdGl2ZSA/ICdhY3RpdmUnIDogJyd9YH0gPlxuICAgICAgICA8T3V0c2lkZUNsaWNrSGFuZGxlciBvbk91dHNpZGVDbGljaz17b3V0c2lkZUNsaWNrSGFuZGxlcn0gPlxuICAgICAgICAgIDxTbGlkZSBjbG9zZUNsaWNrPXtvdXRzaWRlQ2xpY2tIYW5kbGVyfSA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9TbGlkZT5cbiAgICAgICAgPC8gT3V0c2lkZUNsaWNrSGFuZGxlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZUNvbnRhaW5lcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTbGlkZSBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsb3NlQ2xpY2ssIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1zbGlkZVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltZy9jbG9zZS5zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlLWNsb3NlXCJcbiAgICAgICAgICBvbkNsaWNrPXtjbG9zZUNsaWNrfVxuICAgICAgICAgIGFsdD1cImNsb3NlXCJcbiAgICAgICAgLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBJQ29tcG9uZW50UHJvcHMge1xuICBuYW1lOiB7XG4gICAgZmlyc3Q6IHN0cmluZztcbiAgICBsYXN0OiBzdHJpbmc7XG4gIH07XG4gIHBpY3R1cmU6IHtcbiAgICBsYXJnZTogc3RyaW5nO1xuICB9O1xuICBsb2dpbjoge1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gIH07XG4gIHBob25lOiBzdHJpbmc7XG4gIHJlZ2lzdGVyZWQ6IHtcbiAgICBkYXRlOiBzdHJpbmc7XG4gIH07XG4gIGxvY2F0aW9uOiB7XG4gICAgY2l0eTogc3RyaW5nO1xuICB9O1xuICB1bmlxdWVJRDogbnVtYmVyO1xuICBnZW5kZXI6IHN0cmluZyxcbiAgZG9iOiB7XG4gICAgYWdlOiBudW1iZXI7XG4gIH1cbiAgY2xpY2tPbkNhcmQ6ICh1bmlxdWVJRCkgPT4gbnVtYmVyO1xufVxuXG5jbGFzcyBVc2VyQ2FyZCBleHRlbmRzIENvbXBvbmVudDxJQ29tcG9uZW50UHJvcHM+IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBwaWN0dXJlLCBsb2dpbiwgcGhvbmUsIHJlZ2lzdGVyZWQsIGxvY2F0aW9uLCB1bmlxdWVJRCwgZ2VuZGVyLCBkb2IsIGNsaWNrT25DYXJkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jYXJkLW91dGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jYXJkXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbGlja09uQ2FyZCh1bmlxdWVJRCl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jYXJkX19uYW1lXCI+XG4gICAgICAgICAgICAgIHtuYW1lLmZpcnN0fSB7bmFtZS5sYXN0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmRfX2ltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3BpY3R1cmUubGFyZ2V9IGFsdD1cInVzZXJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jYXJkLWluZm9cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzZXItY2FyZC1pbmZvX19pdGVtXCI+VXNlcm5hbWU6IHtsb2dpbi51c2VybmFtZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaW5mb19faXRlbVwiPlBob25lOiB7cGhvbmV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNlci1jYXJkLWluZm9fX2l0ZW1cIj5HZW5kZXI6IHtnZW5kZXJ9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNlci1jYXJkLWluZm9fX2l0ZW1cIj5BZ2U6IHtkb2IuYWdlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcmQ7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuXG5jbGFzcyBVc2VyU2xpZGVNYWtldXAgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVVc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghYWN0aXZlVXNlcikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBuYW1lLCBwaWN0dXJlLCBsb2dpbiwgcGhvbmUsIGVtYWlsLCByZWdpc3RlcmVkLCBcbiAgICAgIGxvY2F0aW9uLCB1bmlxdWVJRCwgY2xpY2tPbkNhcmQsIGRvYiwgZ2VuZGVyIH0gPSBhY3RpdmVVc2VyO1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRGaXhlZCA9IERhdGVUaW1lLmZyb21JU08ocmVnaXN0ZXJlZC5kYXRlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWltZ1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtwaWN0dXJlLmxhcmdlfSBhbHQ9XCJ1c2VyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1oZWFkXCI+UGVyc29uYWwgaW5mbzwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1saW5lXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX190aXRsZVwiPk5hbWU6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPntuYW1lLmZpcnN0fSB7bmFtZS5sYXN0fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8tbGluZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fdGl0bGVcIj5Vc2VybmFtZTo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX19kYXRhXCI+e2xvZ2luLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8tbGluZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fdGl0bGVcIj5QYXNzd29yZDo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX19kYXRhXCI+e2xvZ2luLnBhc3N3b3JkfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8tbGluZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fdGl0bGVcIj5SZWdpc3RlcmVkOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX2RhdGFcIj57cmVnaXN0ZXJlZEZpeGVkLnRvRm9ybWF0KCd5eXl5LU1NLWRkJyl9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1saW5lXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX190aXRsZVwiPkdlbmRlcjo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX19kYXRhXCI+e2dlbmRlcn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWxpbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX3RpdGxlXCI+QWdlOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX2RhdGFcIj57ZG9iLmFnZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8tYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8taGVhZFwiPkNvbnRhY3RzPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWxpbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX3RpdGxlXCI+UGhvbmU6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPntwaG9uZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWxpbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX3RpdGxlXCI+RW1haWw6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPntlbWFpbH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8tYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8taGVhZFwiPkxvY2F0aW9uPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWxpbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX3RpdGxlXCI+Q291bnRyeTo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX19kYXRhXCI+e2xvY2F0aW9uLmNvdW50cnl9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1saW5lXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX190aXRsZVwiPlN0YXRlOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX2RhdGFcIj57bG9jYXRpb24uc3RhdGV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1saW5lXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX190aXRsZVwiPkNpdHk6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPntsb2NhdGlvbi5jaXR5fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8tbGluZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fdGl0bGVcIj5TdHJlZXQ6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPntsb2NhdGlvbi5zdHJlZXQubmFtZX0ge2xvY2F0aW9uLnN0cmVldC5udW1iZXJ9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyU2xpZGVNYWtldXA7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgVXNlckZpbHRlcnMgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGFuZ2VGaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJsb2NrXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdGVyLWJsb2NrX190aXRsZVwiPkdlbmRlcjwvc3Bhbj5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItYmxvY2tfX3NlbGVjdFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBjaGFuZ2VGaWx0ZXIoZXZlbnQsICdnZW5kZXInKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uPk5vIGZpbHRlcjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbj5NYWxlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPkZlbWFsZTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyRmlsdGVyczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFQSSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCBVc2VyQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3VzZXIvdXNlci1jYXJkJztcbmltcG9ydCBTbGlkZUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL3NsaWRlL3NsaWRlLWNvbnRhaW5lcic7XG5pbXBvcnQgVXNlclNsaWRlTWFrZXVwIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlci91c2VyLXNsaWRlLW1ha2V1cCc7XG5pbXBvcnQgVXNlckZpbHRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyL3VzZXJzLWZpbHRlcnMnO1xuXG5jbGFzcyBVc2VycyBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBzdGF0ZSA9IHtcbiAgICBzbGlkZUFjdGl2ZTogZmFsc2UsXG4gICAgYWN0aXZlVXNlcjogbnVsbCxcbiAgICB1c2VyczogW10gYXMgQXJyYXk8YW55PixcbiAgICB1c2Vyc0ZpbHRyZWQ6IFtdIGFzIEFycmF5PGFueT4sXG4gICAgZmlsdGVyOiBudWxsLFxuICB9O1xuXG4gIGFwaSA9IG5ldyBBUEkoKTtcblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLmFwaS5nZXRVc2VycygxMilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YS5yZXN1bHRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIHVuaXF1ZUlEOiBpKyssXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnM6IHJlc3VsdCxcbiAgICAgICAgICB1c2Vyc0ZpbHRyZWQ6IHJlc3VsdCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBvdXRzaWRlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVBY3RpdmU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICBjbGlja09uQ2FyZCA9ICh1bmlxdWVJRCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlVXNlcjogdW5pcXVlSUQsXG4gICAgICBzbGlkZUFjdGl2ZTogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjaGFuZ2VGaWx0ZXIgPSAoZXZlbnQsIHBhcmFtKSA9PiB7XG4gICAgY29uc3QgeyB1c2VycyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHZhbHVlID09PSAnTm8gZmlsdGVyJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJzRmlsdHJlZDogdXNlcnMgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB1c2Vyc0ZpbHRyZWQ7XG4gICAgaWYgKHBhcmFtID09PSAnZ2VuZGVyJykge1xuICAgICAgdXNlcnNGaWx0cmVkID0gdXNlcnMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdlbmRlciA9PT0gdmFsdWUudG9Mb3dlckNhc2UoKSlcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJzRmlsdHJlZCB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VycywgdXNlcnNGaWx0cmVkLCBhY3RpdmVVc2VyLCBzbGlkZUFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzLXBhZ2VcIj5cbiAgICAgICAgPFNsaWRlQ29udGFpbmVyXG4gICAgICAgICAgc2xpZGVBY3RpdmU9e3NsaWRlQWN0aXZlfVxuICAgICAgICAgIG91dHNpZGVDbGlja0hhbmRsZXI9e3RoaXMub3V0c2lkZUNsaWNrSGFuZGxlcn1cbiAgICAgICAgPlxuICAgICAgICAgIDxVc2VyU2xpZGVNYWtldXBcbiAgICAgICAgICAgIGFjdGl2ZVVzZXI9e3VzZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0udW5pcXVlSUQgPT09IGFjdGl2ZVVzZXIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2xpZGVDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnMtcGFnZV9fdGl0bGVcIj5Vc2VyczwvZGl2PlxuICAgICAgICA8VXNlckZpbHRlcnNcbiAgICAgICAgICBjaGFuZ2VGaWx0ZXI9e3RoaXMuY2hhbmdlRmlsdGVyfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzLWxpc3RcIj5cbiAgICAgICAgICB7dXNlcnNGaWx0cmVkLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFVzZXJDYXJkXG4gICAgICAgICAgICAgICAgey4uLml0ZW19XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLnVuaXF1ZUlEfVxuICAgICAgICAgICAgICAgIGNsaWNrT25DYXJkPXt0aGlzLmNsaWNrT25DYXJkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsdXhvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==