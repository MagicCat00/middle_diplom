/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_modal_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal_menu */ \"./src/modules/modal_menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_slider_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider_services */ \"./src/modules/slider_services.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('22 february 2022')\r\n;(0,_modules_modal_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_slider_services__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({ formId: 'form1' })\r\n_modules_scroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.services-modal')\r\n    const overlay = document.querySelector('.overlay')\r\n    const buttons = document.querySelectorAll('.service-btn')\r\n    const closeBtn = modal.querySelector('.services-modal__close')\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = 'block',\r\n            overlay.style.display = 'block'\r\n        })\r\n    })\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.style.display = 'none',\r\n        overlay.style.display = 'none'\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/modal_menu.js":
/*!***********************************!*\
  !*** ./src/modules/modal_menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal_menu = () => {\r\n    const modal = document.querySelector('.header-modal')\r\n    const overlay = document.querySelector('.overlay')\r\n    const buttons = document.querySelectorAll('.menu_button')\r\n    const closeBtn = modal.querySelector('.header-modal__close')\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = 'block',\r\n            overlay.style.display = 'block'\r\n        })\r\n    })\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.style.display = 'none',\r\n        overlay.style.display = 'none'\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal_menu);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal_menu.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrolls = document.querySelectorAll('a[href*=\"#home\"]')\r\n\r\nfor (let scroll of scrolls) {\r\n    scroll.addEventListener(\"click\", function(event) {\r\n        event.preventDefault();\r\n        const blockID = scroll.getAttribute('href')\r\n        document.querySelector('' + blockID).scrollIntoView({\r\n            behavior: \"smooth\",\r\n            block: \"start\"\r\n        })\r\n    })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//name=\"fio\" - ваше имя\r\n//name=\"phone\" - ваш телефон\r\n\r\nconst sendForm = ({ formId }) => {\r\n    const form = document.getElementById(formId)\r\n    const statusBlock = document.createElement('div')\r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка...'\r\n    const successText = 'Спасибо! Наш менеджер с Вами свяжется!'\r\n\r\n    //валидация\r\n    const validate = (list) => {\r\n        let success = true\r\n\r\n        return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    form.addEventListener('submit', (event) => {\r\n        event.preventDefault()\r\n\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n\r\n        statusBlock.textContent = loadText\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val\r\n        })\r\n\r\n        console.log('submit');\r\n\r\n        //очистка value и сообщения\r\n        if (validate(formElements)) {\r\n            sendData(formBody)\r\n            .then(data => {\r\n                statusBlock.textContent = successText\r\n\r\n                formElements.forEach(input => {\r\n                    input.value = ''\r\n                })\r\n             })\r\n             .catch(error => {\r\n                statusBlock.textContent = errorText\r\n             })\r\n        } else {\r\n            alert('Данные не валидны')\r\n        }\r\n        \r\n        \r\n    })\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider_services.js":
/*!****************************************!*\
  !*** ./src/modules/slider_services.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider_services = () => {\r\n    //slider_content - все слайды\r\n    //slider_block - слайды по отдельности\r\n    //slider_block--active - видно\r\n    //slider_block - скрыто\r\n\r\n   const sliderBlock = document.querySelector('.slider_content')\r\n   const slides = document.querySelectorAll('.slider_block')\r\n\r\n   let currentSlide = 0\r\n\r\n\r\n   const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass)\r\n   }\r\n\r\n   const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass)\r\n   }\r\n\r\n\r\n   const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'slider_block--active')\r\n    currentSlide++\r\n\r\n    if (currentSlide >= slides.length) {\r\n        currentSlide = 0\r\n    }\r\n    nextSlide(slides, currentSlide, 'slider_block--active')\r\n   }\r\n\r\n   const startSlide = () => {\r\n        setInterval(autoSlide, 5000)\r\n   }\r\n\r\n   const stopSlide = () => {\r\n\r\n   }\r\n\r\n   sliderBlock.addEventListener('click', (e) => {\r\n       e.preventDefault()\r\n       \r\n       if (e.target.matches('#arrow-right')) {\r\n            console.log('arrow-right');\r\n       } else if (e.target.matches('#arrow-left')) {\r\n        console.log('arrow-left');\r\n       } \r\n   })\r\n\r\n   startSlide()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider_services);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/slider_services.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.getElementById('timer-days');\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n \r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n\r\n        return { timeRemaining, days, hours, minutes, seconds }\r\n    }\r\n    //countTimer('22 february 2022')\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining()\r\n        \r\n        timerDays.textContent = getTime.days < 10 ? '0' + getTime.days : getTime.days;\r\n        timerHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            setTimeout(updateClock, 1000)\r\n        }\r\n        \r\n    }\r\n    updateClock()\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;