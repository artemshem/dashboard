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
var _jsxFileName = "E:\\Work\\Projects\\dashboard\\src\\components\\slide\\slide-container.tsx";
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
var _jsxFileName = "E:\\Work\\Projects\\dashboard\\src\\components\\slide\\slide.tsx";
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
var _jsxFileName = "E:\\Work\\Projects\\dashboard\\src\\components\\user\\user-card.tsx";
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
var _jsxFileName = "E:\\Work\\Projects\\dashboard\\src\\components\\user\\user-slide-makeup.tsx";
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
var _jsxFileName = "E:\\Work\\Projects\\dashboard\\src\\components\\user\\users-filters.tsx";
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
var _jsxFileName = "E:\\Work\\Projects\\dashboard\\src\\pages\\users.tsx";
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

/***/ 5:
/*!***********************************!*\
  !*** multi ./src/pages/users.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Work\Projects\dashboard\src\pages\users.tsx */"./src/pages/users.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2xpZGUvc2xpZGUtY29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGlkZS9zbGlkZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlci91c2VyLWNhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXIvdXNlci1zbGlkZS1tYWtldXAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXIvdXNlcnMtZmlsdGVycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3VzZXJzLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsdXhvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtb3V0c2lkZS1jbGljay1oYW5kbGVyXCIiXSwibmFtZXMiOlsiQVBJIiwiZ2V0TmV3cyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZ2V0VXNlcnMiLCJudW1iZXJPZlVzZXJzIiwiU2xpZGVDb250YWluZXIiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJzbGlkZUFjdGl2ZSIsIm91dHNpZGVDbGlja0hhbmRsZXIiLCJjaGlsZHJlbiIsInByb3BzIiwiU2xpZGUiLCJjbG9zZUNsaWNrIiwiVXNlckNhcmQiLCJuYW1lIiwicGljdHVyZSIsImxvZ2luIiwicGhvbmUiLCJyZWdpc3RlcmVkIiwibG9jYXRpb24iLCJ1bmlxdWVJRCIsImdlbmRlciIsImRvYiIsImNsaWNrT25DYXJkIiwiZmlyc3QiLCJsYXN0IiwibGFyZ2UiLCJ1c2VybmFtZSIsImFnZSIsIlVzZXJTbGlkZU1ha2V1cCIsImFjdGl2ZVVzZXIiLCJlbWFpbCIsInJlZ2lzdGVyZWRGaXhlZCIsIkRhdGVUaW1lIiwiZnJvbUlTTyIsImRhdGUiLCJwYXNzd29yZCIsInRvRm9ybWF0IiwiY291bnRyeSIsInN0YXRlIiwiY2l0eSIsInN0cmVldCIsIm51bWJlciIsIlVzZXJGaWx0ZXJzIiwiY2hhbmdlRmlsdGVyIiwiZXZlbnQiLCJVc2VycyIsInVzZXJzIiwidXNlcnNGaWx0cmVkIiwiZmlsdGVyIiwiYXBpIiwidGhlbiIsImRhdGEiLCJpIiwicmVzdWx0IiwicmVzdWx0cyIsIm1hcCIsIml0ZW0iLCJzZXRTdGF0ZSIsInBhcmFtIiwidmFsdWUiLCJ0YXJnZXQiLCJ0b0xvd2VyQ2FzZSIsImZpbmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFlLE1BQU1BLEdBQU4sQ0FBVTtBQUN2QixRQUFNQyxPQUFOLEdBQWlCO0FBQ2YsVUFBTUMsR0FBRyxHQUFHLGtHQUFaO0FBRUEsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRCxDQUE1QjtBQUNBLFdBQU8sTUFBTUMsUUFBUSxDQUFDRSxJQUFULEVBQWI7QUFDRCxHQU5zQixDQVF2Qjs7O0FBRUEsUUFBTUMsUUFBTixDQUFnQkMsYUFBaEIsRUFBdUM7QUFDckMsVUFBTUwsR0FBRyxHQUFJLDZDQUE0Q0ssYUFBYyxFQUF2RTtBQUVBLFVBQU1KLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBNUI7QUFDQSxXQUFPLE1BQU1DLFFBQVEsQ0FBQ0UsSUFBVCxFQUFiO0FBQ0Q7O0FBZnNCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXpCO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxjQUFOLFNBQTZCQywrQ0FBN0IsQ0FBaUQ7QUFFL0NDLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUMsaUJBQUY7QUFBZUMseUJBQWY7QUFBb0NDO0FBQXBDLFFBQWlELEtBQUtDLEtBQTVEO0FBRUEsV0FDRTtBQUFLLGVBQVMsRUFBRyxtQkFBa0JILFdBQVcsR0FBRyxRQUFILEdBQWMsRUFBRyxFQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrRUFBRDtBQUFxQixvQkFBYyxFQUFFQyxtQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOENBQUQ7QUFBTyxnQkFBVSxFQUFFQSxtQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyxRQURILENBREYsQ0FERixDQURGO0FBU0Q7O0FBZDhDOztBQWVoRDtBQUVjTCw2RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTs7QUFFQSxNQUFNTyxLQUFOLFNBQW9CTiwrQ0FBcEIsQ0FBd0M7QUFFdENDLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRU0sZ0JBQUY7QUFBY0g7QUFBZCxRQUEyQixLQUFLQyxLQUF0QztBQUVBLFdBQ0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxTQUFHLEVBQUMsZ0JBRE47QUFFRSxlQUFTLEVBQUMsYUFGWjtBQUdFLGFBQU8sRUFBRUUsVUFIWDtBQUlFLFNBQUcsRUFBQyxPQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU9HSCxRQVBILENBREY7QUFXRDs7QUFoQnFDOztBQWlCdkM7QUFFY0Usb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7O0FBNEJBLE1BQU1FLFFBQU4sU0FBdUJSLCtDQUF2QixDQUFrRDtBQUVoREMsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFUSxVQUFGO0FBQVFDLGFBQVI7QUFBaUJDLFdBQWpCO0FBQXdCQyxXQUF4QjtBQUErQkMsZ0JBQS9CO0FBQTJDQyxjQUEzQztBQUFxREMsY0FBckQ7QUFBK0RDLFlBQS9EO0FBQXVFQyxTQUF2RTtBQUE0RUM7QUFBNUUsUUFBNEYsS0FBS2IsS0FBdkc7QUFFQSxXQUNFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQ0UsYUFBTyxFQUFFLE1BQU1hLFdBQVcsQ0FBQ0gsUUFBRCxDQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0U7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR04sSUFBSSxDQUFDVSxLQURSLE9BQ2dCVixJQUFJLENBQUNXLElBRHJCLENBREYsQ0FIRixFQVFFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRVYsT0FBTyxDQUFDVyxLQUFsQjtBQUF5QixTQUFHLEVBQUMsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBUkYsRUFXRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBK0NWLEtBQUssQ0FBQ1csUUFBckQsQ0FERixFQUVFO0FBQUcsZUFBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTRDVixLQUE1QyxDQUZGLEVBR0U7QUFBRyxlQUFTLEVBQUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBNkNJLE1BQTdDLENBSEYsRUFJRTtBQUFHLGVBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUEwQ0MsR0FBRyxDQUFDTSxHQUE5QyxDQUpGLENBWEYsQ0FERixDQURGO0FBc0JEOztBQTNCK0M7O0FBOEJuQ2YsdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBOztBQUVBLE1BQU1nQixlQUFOLFNBQThCeEIsK0NBQTlCLENBQWtEO0FBRWhEQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUV3QjtBQUFGLFFBQWlCLEtBQUtwQixLQUE1QjtBQUNBLFFBQUksQ0FBQ29CLFVBQUwsRUFBaUIsT0FBTyxJQUFQO0FBQ2pCLFVBQU07QUFBRWhCLFVBQUY7QUFBUUMsYUFBUjtBQUFpQkMsV0FBakI7QUFBd0JDLFdBQXhCO0FBQStCYyxXQUEvQjtBQUFzQ2IsZ0JBQXRDO0FBQ0pDLGNBREk7QUFDTUMsY0FETjtBQUNnQkcsaUJBRGhCO0FBQzZCRCxTQUQ3QjtBQUNrQ0Q7QUFEbEMsUUFDNkNTLFVBRG5EO0FBRUEsVUFBTUUsZUFBZSxHQUFHQyw4Q0FBUSxDQUFDQyxPQUFULENBQWlCaEIsVUFBVSxDQUFDaUIsSUFBNUIsQ0FBeEI7QUFFQSxXQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRXBCLE9BQU8sQ0FBQ1csS0FBbEI7QUFBeUIsU0FBRyxFQUFDLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUU7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9DWixJQUFJLENBQUNVLEtBQXpDLE9BQWlEVixJQUFJLENBQUNXLElBQXRELENBRkYsQ0FGRixFQU1FO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQU0sZUFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9DVCxLQUFLLENBQUNXLFFBQTFDLENBRkYsQ0FORixFQVVFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQU0sZUFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9DWCxLQUFLLENBQUNvQixRQUExQyxDQUZGLENBVkYsRUFjRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFNLGVBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvQ0osZUFBZSxDQUFDSyxRQUFoQixDQUF5QixZQUF6QixDQUFwQyxDQUZGLENBZEYsRUFrQkU7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLG1CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0NoQixNQUFwQyxDQUZGLENBbEJGLEVBc0JFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0NDLEdBQUcsQ0FBQ00sR0FBeEMsQ0FGRixDQXRCRixDQUpGLEVBK0JFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLG1CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0NYLEtBQXBDLENBRkYsQ0FGRixFQU1FO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQU0sZUFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9DYyxLQUFwQyxDQUZGLENBTkYsQ0EvQkYsRUEwQ0U7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFNLGVBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvQ1osUUFBUSxDQUFDbUIsT0FBN0MsQ0FGRixDQUZGLEVBTUU7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLG1CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0NuQixRQUFRLENBQUNvQixLQUE3QyxDQUZGLENBTkYsRUFVRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9DcEIsUUFBUSxDQUFDcUIsSUFBN0MsQ0FGRixDQVZGLEVBY0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLG1CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0NyQixRQUFRLENBQUNzQixNQUFULENBQWdCM0IsSUFBcEQsT0FBMkRLLFFBQVEsQ0FBQ3NCLE1BQVQsQ0FBZ0JDLE1BQTNFLENBRkYsQ0FkRixDQTFDRixDQURGO0FBZ0VEOztBQXpFK0M7O0FBMEVqRDtBQUVjYiw4RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTs7QUFFQSxNQUFNYyxXQUFOLFNBQTBCdEMsK0NBQTFCLENBQThDO0FBRTVDQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVzQztBQUFGLFFBQW1CLEtBQUtsQyxLQUE5QjtBQUVBLFdBQ0U7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUNFLGVBQVMsRUFBQyxzQkFEWjtBQUVFLGNBQVEsRUFBR21DLEtBQUQsSUFBV0QsWUFBWSxDQUFDQyxLQUFELEVBQVEsUUFBUixDQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsQ0FGRixDQURGLENBREY7QUFlRDs7QUFwQjJDOztBQXVCL0JGLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1HLEtBQU4sU0FBb0J6QywrQ0FBcEIsQ0FBd0M7QUFBQTtBQUFBOztBQUFBLG1DQUM5QjtBQUNORSxpQkFBVyxFQUFFLEtBRFA7QUFFTnVCLGdCQUFVLEVBQUUsSUFGTjtBQUdOaUIsV0FBSyxFQUFFLEVBSEQ7QUFJTkMsa0JBQVksRUFBRSxFQUpSO0FBS05DLFlBQU0sRUFBRTtBQUxGLEtBRDhCOztBQUFBLGlDQVNoQyxJQUFJckQsZ0RBQUosRUFUZ0M7O0FBQUEsK0NBV2xCLE1BQU07QUFDeEIsV0FBS3NELEdBQUwsQ0FBU2hELFFBQVQsQ0FBa0IsRUFBbEIsRUFDR2lELElBREgsQ0FDU0MsSUFBRCxJQUFVO0FBQ2QsWUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxjQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csT0FBTCxDQUFhQyxHQUFiLENBQWtCQyxJQUFELElBQVU7QUFDeEMsaURBQ0tBLElBREw7QUFFRXJDLG9CQUFRLEVBQUVpQyxDQUFDO0FBRmI7QUFJRCxTQUxjLENBQWY7QUFNQSxhQUFLSyxRQUFMLENBQWM7QUFDWlgsZUFBSyxFQUFFTyxNQURLO0FBRVpOLHNCQUFZLEVBQUVNO0FBRkYsU0FBZDtBQUlELE9BYkg7QUFjRCxLQTFCcUM7O0FBQUEsaURBNEJoQixNQUFNO0FBQzFCLFVBQUksS0FBS2YsS0FBTCxDQUFXaEMsV0FBZixFQUE0QjtBQUMxQixhQUFLbUQsUUFBTCxDQUFjO0FBQUVuRCxxQkFBVyxFQUFFO0FBQWYsU0FBZDtBQUNEO0FBQ0YsS0FoQ3FDOztBQUFBLHlDQWtDdkJhLFFBQUQsSUFBYztBQUMxQixXQUFLc0MsUUFBTCxDQUFjO0FBQ1o1QixrQkFBVSxFQUFFVixRQURBO0FBRVpiLG1CQUFXLEVBQUU7QUFGRCxPQUFkO0FBSUQsS0F2Q3FDOztBQUFBLDBDQXlDdkIsQ0FBQ3NDLEtBQUQsRUFBUWMsS0FBUixLQUFrQjtBQUMvQixZQUFNO0FBQUVaO0FBQUYsVUFBWSxLQUFLUixLQUF2QjtBQUNBLFlBQU07QUFBRXFCO0FBQUYsVUFBWWYsS0FBSyxDQUFDZ0IsTUFBeEI7O0FBQ0EsVUFBSUQsS0FBSyxLQUFLLFdBQWQsRUFBMkI7QUFDekIsYUFBS0YsUUFBTCxDQUFjO0FBQUVWLHNCQUFZLEVBQUVEO0FBQWhCLFNBQWQ7QUFDQTtBQUNEOztBQUNELFVBQUlDLFlBQUo7O0FBQ0EsVUFBSVcsS0FBSyxLQUFLLFFBQWQsRUFBd0I7QUFDdEJYLG9CQUFZLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFjUSxJQUFELElBQVVBLElBQUksQ0FBQ3BDLE1BQUwsS0FBZ0J1QyxLQUFLLENBQUNFLFdBQU4sRUFBdkMsQ0FBZjtBQUNEOztBQUNELFdBQUtKLFFBQUwsQ0FBYztBQUFFVjtBQUFGLE9BQWQ7QUFDRCxLQXJEcUM7QUFBQTs7QUF1RHRDMUMsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFeUMsV0FBRjtBQUFTQyxrQkFBVDtBQUF1QmxCLGdCQUF2QjtBQUFtQ3ZCO0FBQW5DLFFBQW1ELEtBQUtnQyxLQUE5RDtBQUVBLFdBQ0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5RUFBRDtBQUNFLGlCQUFXLEVBQUVoQyxXQURmO0FBRUUseUJBQW1CLEVBQUUsS0FBS0MsbUJBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRSxNQUFDLDBFQUFEO0FBQ0UsZ0JBQVUsRUFBRXVDLEtBQUssQ0FBQ2dCLElBQU4sQ0FBWU4sSUFBRCxJQUFVQSxJQUFJLENBQUNyQyxRQUFMLEtBQWtCVSxVQUF2QyxDQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixDQURGLEVBU0U7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLEVBVUUsTUFBQyxzRUFBRDtBQUNFLGtCQUFZLEVBQUUsS0FBS2MsWUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZGLEVBYUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dJLFlBQVksQ0FBQ1EsR0FBYixDQUFrQkMsSUFBRCxJQUFVO0FBQzFCLGFBQ0UsTUFBQyxrRUFBRCxlQUNNQSxJQUROO0FBRUUsV0FBRyxFQUFFQSxJQUFJLENBQUNyQyxRQUZaO0FBR0UsbUJBQVcsRUFBRSxLQUFLRyxXQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFPRCxLQVJBLENBREgsQ0FiRixDQURGO0FBMkJEOztBQXJGcUM7O0FBc0Z2QztBQUVjdUIsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0QiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcbiAgYXN5bmMgZ2V0TmV3cyAoKSB7XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9zb3VyY2VzPWhhY2tlci1uZXdzJmFwaUtleT1mMjJiY2MyZmI5YTU0MTg1Yjc2NDkxYjljMzUzZDg5NCc7XG4gICAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICAvLyZzZWVkPWFidlxuXG4gIGFzeW5jIGdldFVzZXJzIChudW1iZXJPZlVzZXJzOiBudW1iZXIpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8/cGFnZT0xJnJlc3VsdHM9JHtudW1iZXJPZlVzZXJzfWA7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5pbXBvcnQgT3V0c2lkZUNsaWNrSGFuZGxlciBmcm9tICdyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXInO1xuXG5jbGFzcyBTbGlkZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNsaWRlQWN0aXZlLCBvdXRzaWRlQ2xpY2tIYW5kbGVyLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHNsaWRlLWNvbnRhaW5lciAke3NsaWRlQWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31gfSA+XG4gICAgICAgIDxPdXRzaWRlQ2xpY2tIYW5kbGVyIG9uT3V0c2lkZUNsaWNrPXtvdXRzaWRlQ2xpY2tIYW5kbGVyfSA+XG4gICAgICAgICAgPFNsaWRlIGNsb3NlQ2xpY2s9e291dHNpZGVDbGlja0hhbmRsZXJ9ID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICA8LyBPdXRzaWRlQ2xpY2tIYW5kbGVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlQ29udGFpbmVyOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNsaWRlIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xvc2VDbGljaywgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLXNsaWRlXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW1nL2Nsb3NlLnN2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGUtY2xvc2VcIlxuICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQ2xpY2t9XG4gICAgICAgICAgYWx0PVwiY2xvc2VcIlxuICAgICAgICAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIElDb21wb25lbnRQcm9wcyB7XG4gIG5hbWU6IHtcbiAgICBmaXJzdDogc3RyaW5nO1xuICAgIGxhc3Q6IHN0cmluZztcbiAgfTtcbiAgcGljdHVyZToge1xuICAgIGxhcmdlOiBzdHJpbmc7XG4gIH07XG4gIGxvZ2luOiB7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgfTtcbiAgcGhvbmU6IHN0cmluZztcbiAgcmVnaXN0ZXJlZDoge1xuICAgIGRhdGU6IHN0cmluZztcbiAgfTtcbiAgbG9jYXRpb246IHtcbiAgICBjaXR5OiBzdHJpbmc7XG4gIH07XG4gIHVuaXF1ZUlEOiBudW1iZXI7XG4gIGdlbmRlcjogc3RyaW5nLFxuICBkb2I6IHtcbiAgICBhZ2U6IG51bWJlcjtcbiAgfVxuICBjbGlja09uQ2FyZDogKHVuaXF1ZUlEKSA9PiBudW1iZXI7XG59XG5cbmNsYXNzIFVzZXJDYXJkIGV4dGVuZHMgQ29tcG9uZW50PElDb21wb25lbnRQcm9wcz4ge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHBpY3R1cmUsIGxvZ2luLCBwaG9uZSwgcmVnaXN0ZXJlZCwgbG9jYXRpb24sIHVuaXF1ZUlELCBnZW5kZXIsIGRvYiwgY2xpY2tPbkNhcmQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtb3V0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrT25DYXJkKHVuaXF1ZUlEKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmRfX25hbWVcIj5cbiAgICAgICAgICAgICAge25hbWUuZmlyc3R9IHtuYW1lLmxhc3R9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItY2FyZF9faW1nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17cGljdHVyZS5sYXJnZX0gYWx0PVwidXNlclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaW5mb1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNlci1jYXJkLWluZm9fX2l0ZW1cIj5Vc2VybmFtZToge2xvZ2luLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzZXItY2FyZC1pbmZvX19pdGVtXCI+UGhvbmU6IHtwaG9uZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaW5mb19faXRlbVwiPkdlbmRlcjoge2dlbmRlcn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtaW5mb19faXRlbVwiPkFnZToge2RvYi5hZ2V9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2FyZDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XG5cbmNsYXNzIFVzZXJTbGlkZU1ha2V1cCBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZVVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFhY3RpdmVVc2VyKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7IG5hbWUsIHBpY3R1cmUsIGxvZ2luLCBwaG9uZSwgZW1haWwsIHJlZ2lzdGVyZWQsIFxuICAgICAgbG9jYXRpb24sIHVuaXF1ZUlELCBjbGlja09uQ2FyZCwgZG9iLCBnZW5kZXIgfSA9IGFjdGl2ZVVzZXI7XG4gICAgY29uc3QgcmVnaXN0ZXJlZEZpeGVkID0gRGF0ZVRpbWUuZnJvbUlTTyhyZWdpc3RlcmVkLmRhdGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8taW1nXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3BpY3R1cmUubGFyZ2V9IGFsdD1cInVzZXJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWhlYWRcIj5QZXJzb25hbCBpbmZvPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWxpbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX3RpdGxlXCI+TmFtZTo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX19kYXRhXCI+e25hbWUuZmlyc3R9IHtuYW1lLmxhc3R9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1saW5lXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX190aXRsZVwiPlVzZXJuYW1lOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX2RhdGFcIj57bG9naW4udXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1saW5lXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX190aXRsZVwiPlBhc3N3b3JkOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX2RhdGFcIj57bG9naW4ucGFzc3dvcmR9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1saW5lXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX190aXRsZVwiPlJlZ2lzdGVyZWQ6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPntyZWdpc3RlcmVkRml4ZWQudG9Gb3JtYXQoJ3l5eXktTU0tZGQnKX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWxpbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX3RpdGxlXCI+R2VuZGVyOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX2RhdGFcIj57Z2VuZGVyfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8tbGluZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fdGl0bGVcIj5BZ2U6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPntkb2IuYWdlfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1oZWFkXCI+Q29udGFjdHM8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8tbGluZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fdGl0bGVcIj5QaG9uZTo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX19kYXRhXCI+e3Bob25lfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8tbGluZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fdGl0bGVcIj5FbWFpbDo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX19kYXRhXCI+e2VtYWlsfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1oZWFkXCI+TG9jYXRpb248L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluZm8tbGluZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fdGl0bGVcIj5Db3VudHJ5Ojwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX2RhdGFcIj57bG9jYXRpb24uY291bnRyeX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWxpbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX3RpdGxlXCI+U3RhdGU6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGUtaW5mb19fZGF0YVwiPntsb2NhdGlvbi5zdGF0ZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvLWxpbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlLWluZm9fX3RpdGxlXCI+Q2l0eTo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX19kYXRhXCI+e2xvY2F0aW9uLmNpdHl9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5mby1saW5lXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX190aXRsZVwiPlN0cmVldDo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZS1pbmZvX19kYXRhXCI+e2xvY2F0aW9uLnN0cmVldC5uYW1lfSB7bG9jYXRpb24uc3RyZWV0Lm51bWJlcn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTbGlkZU1ha2V1cDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBVc2VyRmlsdGVycyBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoYW5nZUZpbHRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYmxvY2tcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ZXItYmxvY2tfX3RpdGxlXCI+R2VuZGVyPC9zcGFuPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci1ibG9ja19fc2VsZWN0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGNoYW5nZUZpbHRlcihldmVudCwgJ2dlbmRlcicpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24+Tm8gZmlsdGVyPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uPk1hbGU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+RmVtYWxlPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJGaWx0ZXJzOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQVBJIGZyb20gJy4uL2FwaS9hcGknO1xuaW1wb3J0IFVzZXJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlci91c2VyLWNhcmQnO1xuaW1wb3J0IFNsaWRlQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGUvc2xpZGUtY29udGFpbmVyJztcbmltcG9ydCBVc2VyU2xpZGVNYWtldXAgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyL3VzZXItc2xpZGUtbWFrZXVwJztcbmltcG9ydCBVc2VyRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL3VzZXIvdXNlcnMtZmlsdGVycyc7XG5cbmNsYXNzIFVzZXJzIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHN0YXRlID0ge1xuICAgIHNsaWRlQWN0aXZlOiBmYWxzZSxcbiAgICBhY3RpdmVVc2VyOiBudWxsLFxuICAgIHVzZXJzOiBbXSBhcyBBcnJheTxhbnk+LFxuICAgIHVzZXJzRmlsdHJlZDogW10gYXMgQXJyYXk8YW55PixcbiAgICBmaWx0ZXI6IG51bGwsXG4gIH07XG5cbiAgYXBpID0gbmV3IEFQSSgpO1xuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIHRoaXMuYXBpLmdldFVzZXJzKDEyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkYXRhLnJlc3VsdHMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgdW5pcXVlSUQ6IGkrKyxcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VyczogcmVzdWx0LFxuICAgICAgICAgIHVzZXJzRmlsdHJlZDogcmVzdWx0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIG91dHNpZGVDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUFjdGl2ZTogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNsaWNrT25DYXJkID0gKHVuaXF1ZUlEKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVVc2VyOiB1bmlxdWVJRCxcbiAgICAgIHNsaWRlQWN0aXZlOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNoYW5nZUZpbHRlciA9IChldmVudCwgcGFyYW0pID0+IHtcbiAgICBjb25zdCB7IHVzZXJzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodmFsdWUgPT09ICdObyBmaWx0ZXInKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcnNGaWx0cmVkOiB1c2VycyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHVzZXJzRmlsdHJlZDtcbiAgICBpZiAocGFyYW0gPT09ICdnZW5kZXInKSB7XG4gICAgICB1c2Vyc0ZpbHRyZWQgPSB1c2Vycy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZ2VuZGVyID09PSB2YWx1ZS50b0xvd2VyQ2FzZSgpKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgdXNlcnNGaWx0cmVkIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXJzLCB1c2Vyc0ZpbHRyZWQsIGFjdGl2ZVVzZXIsIHNsaWRlQWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnMtcGFnZVwiPlxuICAgICAgICA8U2xpZGVDb250YWluZXJcbiAgICAgICAgICBzbGlkZUFjdGl2ZT17c2xpZGVBY3RpdmV9XG4gICAgICAgICAgb3V0c2lkZUNsaWNrSGFuZGxlcj17dGhpcy5vdXRzaWRlQ2xpY2tIYW5kbGVyfVxuICAgICAgICA+XG4gICAgICAgICAgPFVzZXJTbGlkZU1ha2V1cFxuICAgICAgICAgICAgYWN0aXZlVXNlcj17dXNlcnMuZmluZCgoaXRlbSkgPT4gaXRlbS51bmlxdWVJRCA9PT0gYWN0aXZlVXNlcil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TbGlkZUNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2Vycy1wYWdlX190aXRsZVwiPlVzZXJzPC9kaXY+XG4gICAgICAgIDxVc2VyRmlsdGVyc1xuICAgICAgICAgIGNoYW5nZUZpbHRlcj17dGhpcy5jaGFuZ2VGaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnMtbGlzdFwiPlxuICAgICAgICAgIHt1c2Vyc0ZpbHRyZWQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VXNlckNhcmRcbiAgICAgICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udW5pcXVlSUR9XG4gICAgICAgICAgICAgICAgY2xpY2tPbkNhcmQ9e3RoaXMuY2xpY2tPbkNhcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImx1eG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW91dHNpZGUtY2xpY2staGFuZGxlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9