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
exports.id = "pages/api/get";
exports.ids = ["pages/api/get"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/db.js":
/*!*************************!*\
  !*** ./pages/api/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWpDLGlFQUFlQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYi10ZXN0NS8uL3BhZ2VzL2FwaS9kYi5qcz9iODE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/get.js":
/*!**************************!*\
  !*** ./pages/api/get.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db.js */ \"(api)/./pages/api/db.js\");\n\nfunction handler(req, res) {\n    const getUsers = async ()=>{\n        try {\n            // get all kiosks from db\n            const kiosks = await _db_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findMany({\n                orderBy: [\n                    {\n                        email: \"asc\"\n                    },\n                    {\n                        name: \"asc\"\n                    }, \n                ]\n            });\n            res.status(200).json(kiosks);\n        } catch (error) {\n            res.status(500);\n        }\n    };\n    getUsers();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZCO0FBR2QsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN0QyxNQUFNQyxRQUFRLEdBQUcsVUFBWTtRQUN6QixJQUFJO1lBQ0EseUJBQXlCO1lBQ3pCLE1BQU1DLE1BQU0sR0FBRyxNQUFNTCw0REFBb0IsQ0FBQztnQkFDdENRLE9BQU8sRUFBRTtvQkFDTDt3QkFDSUMsS0FBSyxFQUFFLEtBQUs7cUJBQ2Y7b0JBQ0Q7d0JBQ0lDLElBQUksRUFBRSxLQUFLO3FCQUNkO2lCQUNKO2FBQ0osQ0FBQztZQUVGUCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDUCxNQUFNLENBQUM7U0FDL0IsQ0FBQyxPQUFPUSxLQUFLLEVBQUU7WUFDWlYsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ2xCO0tBQ0o7SUFDRFAsUUFBUSxFQUFFO0NBRVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYi10ZXN0NS8uL3BhZ2VzL2FwaS9nZXQuanM/NmYyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuL2RiLmpzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gZ2V0IGFsbCBraW9za3MgZnJvbSBkYlxuICAgICAgICAgICAgY29uc3Qga2lvc2tzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xuICAgICAgICAgICAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiYXNjXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXNjXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihraW9za3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMClcbiAgICAgICAgfVxuICAgIH07XG4gICAgZ2V0VXNlcnMoKVxuXG4gIH1cbiAgXG5cbiAgIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJnZXRVc2VycyIsImtpb3NrcyIsInVzZXIiLCJmaW5kTWFueSIsIm9yZGVyQnkiLCJlbWFpbCIsIm5hbWUiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/get.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get.js"));
module.exports = __webpack_exports__;

})();