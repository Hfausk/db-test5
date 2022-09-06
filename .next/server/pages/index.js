"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/displayUsers.js":
/*!*******************************!*\
  !*** ./pages/displayUsers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nfun;\nasync function getServerSideProps() {\n    const allUsers = await prisma.user.findMany({\n        orderBy: [\n            {\n                email: \"asc\"\n            },\n            {\n                name: \"asc\"\n            }, \n        ]\n    });\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaXNwbGF5VXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWpDRSxHQUFHO0FBRUksZUFBZUMsa0JBQWtCLEdBQUc7SUFDdkMsTUFBTUMsUUFBUSxHQUFHLE1BQU1ILE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFDeENDLE9BQU8sRUFBRTtZQUNMO2dCQUNJQyxLQUFLLEVBQUUsS0FBSzthQUNmO1lBQ0Q7Z0JBQ0lDLElBQUksRUFBRSxLQUFLO2FBQ2Q7U0FDSjtLQUNKLENBQUM7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RiLXRlc3Q1Ly4vcGFnZXMvZGlzcGxheVVzZXJzLmpzPzhmMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZnVuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gICAgY29uc3QgYWxsVXNlcnMgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kTWFueSh7XG4gICAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJhc2NcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJhc2NcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSk7XG4gICAgfTtcblxuXG5cbiAgICBcblxuXG5cblxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImZ1biIsImdldFNlcnZlclNpZGVQcm9wcyIsImFsbFVzZXJzIiwidXNlciIsImZpbmRNYW55Iiwib3JkZXJCeSIsImVtYWlsIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/displayUsers.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _displayUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayUsers */ \"./pages/displayUsers.js\");\n\n\nfetch(\"/api/get\").then((response)=>response.json()).then((data)=>console.log(data));\nconst Index = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home Page\"\n            }, void 0, false, {\n                fileName: \"/Users/herman/Documents/New Projects/db-test5/db-test5/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_displayUsers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/herman/Documents/New Projects/db-test5/db-test5/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/herman/Documents/New Projects/db-test5/db-test5/pages/index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBa0M7QUFFbENDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FDaEJDLElBQUksQ0FBQyxDQUFDQyxRQUFRLEdBQUtBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDbkNGLElBQUksQ0FBQyxDQUFDRyxJQUFJLEdBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztBQUVsQyxNQUFNRyxLQUFLLEdBQUcsa0JBSVYsOERBQUNDLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFDLFdBQVM7Ozs7O3lCQUFLOzBCQUNsQiw4REFBQ1YscURBQUs7Ozs7eUJBQVM7Ozs7OztpQkFDYjtBQUdWLGlFQUFlUSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGItdGVzdDUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb29kcyBmcm9tIFwiLi9kaXNwbGF5VXNlcnNcIlxuXG5mZXRjaCgnL2FwaS9nZXQnKVxuLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4udGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuXG5cblxuICAgIDxkaXY+XG4gICAgICAgIDxoMT5Ib21lIFBhZ2U8L2gxPlxuICAgICAgICA8Rm9vZHM+PC9Gb29kcz5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwibmFtZXMiOlsiRm9vZHMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkluZGV4IiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();