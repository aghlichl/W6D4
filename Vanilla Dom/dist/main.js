/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const nodes = __webpack_require__(/*! ./index.js */ \"./src/index.js\")\n\nclass DomNodeCollection{\n  constructor(nodeListArray){\n    this.nodeListArray = nodeListArray;\n  }\n  \n  html(string){\n    if(!string.length){\n      return this.nodeListArray[0].innerHTML\n    }\n    else{\n      for (let i = 0; i < this.nodeListArray.length; i++) {\n        let el = this.nodeListArray[i];\n        el.innerHTML = string;\n      }\n    } \n  }\n\n  empty(){\n    for (let i = 0; i < this.nodeListArray.length; i++) {\n      let el = this.nodeListArray[i];\n      el.innerHTML = \"\";\n    }\n\n  }\n\n  append(element){\n    if (element instanceof HTMLElement){\n      for (let i = 0; i < this.nodeListArray.length; i++) {\n        let el = this.nodeListArray[i];\n        el.innerHTML += `${element}`;\n      }\n    } else if (typeof element === \"string\") {\n      for (let i = 0; i < this.nodeListArray.length; i++) {\n        let el = this.nodeListArray[i];\n        el.innerHTML += element;\n      }\n    } else if (element instanceof DomNodeCollection) {\n      for (let i = 0; i < this.nodeListArray.length; i++) {\n        let outerEl = this.nodeListArray[i];\n        for (let j = 0; j < element.nodeListArray.length; j++) {\n          let el = element.nodeListArray[j].innerHTML;\n          outerEl.innerHTML += el;\n        }\n      }\n    }\n  }\n\n  remove(){\n    for (let i = 0; i < this.nodeListArray.length; i++) {\n      this.nodeListArray[i].parentNode.removeChild(this.nodeListArray[i]);\n    } \n  }\n\n  // attr(){\n  //   let attrs = [];\n  //   for (let i = 0; i < this.nodeListArray.length; i++) {\n  //     attrs.push(this.nodeListArray[i].attributes);\n  //   }\n  //   return attrs;\n  // }\n\n  addClass(clas){\n    for (let i = 0; i < this.nodeListArray.length; i++) {\n      let el = this.nodeListArray[i];\n      el.className += ` ${clas}`;\n    }\n  }\n\n  removeClass(){\n    for (let i = 0; i < this.nodeListArray.length; i++) {\n      let el = this.nodeListArray[i];\n      el.className = \"\";\n    }\n  }\n  \n\n\n  find(selector){\n    let children = this.children();\n    if (typeof selector === \"string\") {\n      let selected = document.querySelectorAll(`${selector}`);\n      let selected_array = Array.from(selected);\n      return selected_array;\n    } else if (selector instanceof HTMLElement) {\n      let selected_array = Array.from(selector);\n      return selected_array;\n    }\n  }\n\n  children(){\n    let children = [];\n\n    for (let i = 0; i < this.nodeListArray.length; i++) {\n      let el = this.nodeListArray[i];\n      children.push(el.children);\n    }\n\n    return children;\n  }\n\n parent(){\n    let parent = [];\n\n    for (let i = 0; i < this.nodeListArray.length; i++) {\n      let el = this.nodeListArray[i];\n      parent.push(el.parentNode);\n    }\n\n    return parent;\n  } \n\n}\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\")\n\nfunction $l(selector) {\n  if (typeof selector === \"string\"){\n    let selected = document.querySelectorAll(`${selector}`);\n    let selected_array = Array.from(selected);\n    return new DomNodeCollection(selected_array);\n  } else if (selector instanceof HTMLElement){\n    let selected_array = Array.from(selector);\n    return new DomNodeCollection(selected_array);\n  }\n}\n\nwindow.$l = $l;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });