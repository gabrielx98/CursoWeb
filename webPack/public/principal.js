/*! For license information please see principal.js.LICENSE.txt */
!function(_){var e={};function s(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return _[r].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=_,s.c=e,s.d=function(_,e,r){s.o(_,e)||Object.defineProperty(_,e,{enumerable:!0,get:r})},s.r=function(_){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},s.t=function(_,e){if(1&e&&(_=s(_)),8&e)return _;if(4&e&&"object"==typeof _&&_&&_.__esModule)return _;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:_}),2&e&&"string"!=typeof _)for(var o in _)s.d(r,o,function(e){return _[e]}.bind(null,o));return r},s.n=function(_){var e=_&&_.__esModule?function(){return _.default}:function(){return _};return s.d(e,"a",e),e},s.o=function(_,e){return Object.prototype.hasOwnProperty.call(_,e)},s.p="",s(s.s="./src/principal.js")}({"./src/assets/css/estilo.css":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/estilo.css?")},"./src/assets/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/estilo.css */ "./src/assets/css/estilo.css");\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_estilo_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ "./src/assets/scss/index.scss");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./src/assets/index.js?')},"./src/assets/scss/index.scss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/scss/index.scss?")},"./src/modulos/moduloA.js":function(module,exports,__webpack_require__){eval('const modulo = __webpack_require__(/*! ./moduloB */ "./src/modulos/moduloB.js")\r\n\r\nconsole.log(modulo.saudacao())\r\n\r\n\n\n//# sourceURL=webpack:///./src/modulos/moduloA.js?')},"./src/modulos/moduloB.js":function(module,exports){eval('module.exports = {\r\n    saudacao () {return "ola sou modulo B!!!"}\r\n}\n\n//# sourceURL=webpack:///./src/modulos/moduloB.js?')},"./src/pessoa.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pessoa; });\nclass Pessoa {\r\n    cumprimentar (){\r\n        return "Bom dia"\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/pessoa.js?')},"./src/principal.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ "./src/pessoa.js");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/moduloA */ "./src/modulos/moduloA.js");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modulos_moduloA__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets */ "./src/assets/index.js");\n\r\n\r\n\r\n\r\nconst atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0__["default"]\r\nconsole.log(atendente.cumprimentar())\n\n//# sourceURL=webpack:///./src/principal.js?')}});