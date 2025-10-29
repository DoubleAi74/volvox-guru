"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/d3-random";
exports.ids = ["vendor-chunks/d3-random"];
exports.modules = {

/***/ "(ssr)/./node_modules/d3-random/src/defaultSource.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-random/src/defaultSource.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Math.random);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtcmFuZG9tL3NyYy9kZWZhdWx0U291cmNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXM0X3ZvbHZveC8uL25vZGVfbW9kdWxlcy9kMy1yYW5kb20vc3JjL2RlZmF1bHRTb3VyY2UuanM/YmRjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBNYXRoLnJhbmRvbTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-random/src/defaultSource.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/d3-random/src/normal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-random/src/normal.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _defaultSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultSource.js */ \"(ssr)/./node_modules/d3-random/src/defaultSource.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function sourceRandomNormal(source) {\n  function randomNormal(mu, sigma) {\n    var x, r;\n    mu = mu == null ? 0 : +mu;\n    sigma = sigma == null ? 1 : +sigma;\n    return function() {\n      var y;\n\n      // If available, use the second previously-generated uniform random.\n      if (x != null) y = x, x = null;\n\n      // Otherwise, generate a new x and y.\n      else do {\n        x = source() * 2 - 1;\n        y = source() * 2 - 1;\n        r = x * x + y * y;\n      } while (!r || r > 1);\n\n      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);\n    };\n  }\n\n  randomNormal.source = sourceRandomNormal;\n\n  return randomNormal;\n})(_defaultSource_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZDMtcmFuZG9tL3NyYy9ub3JtYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7O0FBRS9DLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQyxFQUFFLHlEQUFhLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhczRfdm9sdm94Ly4vbm9kZV9tb2R1bGVzL2QzLXJhbmRvbS9zcmMvbm9ybWFsLmpzPzliYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZmF1bHRTb3VyY2UgZnJvbSBcIi4vZGVmYXVsdFNvdXJjZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gc291cmNlUmFuZG9tTm9ybWFsKHNvdXJjZSkge1xuICBmdW5jdGlvbiByYW5kb21Ob3JtYWwobXUsIHNpZ21hKSB7XG4gICAgdmFyIHgsIHI7XG4gICAgbXUgPSBtdSA9PSBudWxsID8gMCA6ICttdTtcbiAgICBzaWdtYSA9IHNpZ21hID09IG51bGwgPyAxIDogK3NpZ21hO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB5O1xuXG4gICAgICAvLyBJZiBhdmFpbGFibGUsIHVzZSB0aGUgc2Vjb25kIHByZXZpb3VzbHktZ2VuZXJhdGVkIHVuaWZvcm0gcmFuZG9tLlxuICAgICAgaWYgKHggIT0gbnVsbCkgeSA9IHgsIHggPSBudWxsO1xuXG4gICAgICAvLyBPdGhlcndpc2UsIGdlbmVyYXRlIGEgbmV3IHggYW5kIHkuXG4gICAgICBlbHNlIGRvIHtcbiAgICAgICAgeCA9IHNvdXJjZSgpICogMiAtIDE7XG4gICAgICAgIHkgPSBzb3VyY2UoKSAqIDIgLSAxO1xuICAgICAgICByID0geCAqIHggKyB5ICogeTtcbiAgICAgIH0gd2hpbGUgKCFyIHx8IHIgPiAxKTtcblxuICAgICAgcmV0dXJuIG11ICsgc2lnbWEgKiB5ICogTWF0aC5zcXJ0KC0yICogTWF0aC5sb2cocikgLyByKTtcbiAgICB9O1xuICB9XG5cbiAgcmFuZG9tTm9ybWFsLnNvdXJjZSA9IHNvdXJjZVJhbmRvbU5vcm1hbDtcblxuICByZXR1cm4gcmFuZG9tTm9ybWFsO1xufSkoZGVmYXVsdFNvdXJjZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/d3-random/src/normal.js\n");

/***/ })

};
;