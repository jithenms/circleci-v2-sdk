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

/***/ "./src/core/circleci.ts":
/*!******************************!*\
  !*** ./src/core/circleci.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CircleCI = void 0;\nconst pipelines_1 = __webpack_require__(/*! ./pipelines */ \"./src/core/pipelines.ts\");\nconst jobs_1 = __webpack_require__(/*! ./jobs */ \"./src/core/jobs.ts\");\nclass CircleCI {\n    constructor(config) {\n        this.config = config;\n        this.pipelines = new pipelines_1.Pipelines(config);\n        this.jobs = new jobs_1.Jobs(config);\n    }\n}\nexports.CircleCI = CircleCI;\n\n\n//# sourceURL=webpack://@jithen/circleci-v2-sdk/./src/core/circleci.ts?");

/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./circleci */ \"./src/core/circleci.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./pipelines */ \"./src/core/pipelines.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./jobs */ \"./src/core/jobs.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./workflows */ \"./src/core/workflows.ts\"), exports);\n\n\n//# sourceURL=webpack://@jithen/circleci-v2-sdk/./src/core/index.ts?");

/***/ }),

/***/ "./src/core/jobs.ts":
/*!**************************!*\
  !*** ./src/core/jobs.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Jobs = void 0;\nclass Jobs {\n    constructor(config) {\n        this.config = config;\n    }\n    getJobDetails(jobNumber) {\n        return new Promise((resolve, reject) => {\n            this.config.client\n                .get(`/project/${this.config.projectSlug}/job/${jobNumber}`)\n                .then((res) => resolve(res.data))\n                .catch((error) => reject(error));\n        });\n    }\n    getJobArtifacts(jobNumber) {\n        return new Promise((resolve, reject) => {\n            this.config.client\n                .get(`/project/${this.config.projectSlug}/${jobNumber}/artifacts`)\n                .then((res) => resolve(res.data))\n                .catch((error) => reject(error));\n        });\n    }\n    getTests(jobNumber) {\n        return new Promise((resolve, reject) => {\n            this.config.client\n                .get(`/project/${this.config.projectSlug}/${jobNumber}/tests`)\n                .then((res) => resolve(res.data))\n                .catch((error) => reject(error));\n        });\n    }\n}\nexports.Jobs = Jobs;\n\n\n//# sourceURL=webpack://@jithen/circleci-v2-sdk/./src/core/jobs.ts?");

/***/ }),

/***/ "./src/core/pipelines.ts":
/*!*******************************!*\
  !*** ./src/core/pipelines.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Pipelines = void 0;\nclass Pipelines {\n    constructor(config) {\n        this.config = config;\n    }\n    triggerPipeline(branch, tag, parameters) {\n        return new Promise((resolve, reject) => {\n            this.config.client\n                .post(`/project/${this.config.projectSlug}/pipeline`, {\n                branch: branch,\n                tag: tag,\n                parameters: parameters,\n            })\n                .then((res) => resolve(res.data))\n                .catch((error) => reject(error));\n        });\n    }\n    listPipelinesForProject(branch, pageToken) {\n        return new Promise((resolve, reject) => {\n            this.config.client\n                .get(`/project/${this.config.projectSlug}/pipeline`, {\n                params: {\n                    branch: branch,\n                    \"page-token\": pageToken,\n                },\n            })\n                .then((res) => resolve(res.data))\n                .catch((error) => reject(error));\n        });\n    }\n    getPipelineById(id) {\n        return new Promise((resolve, reject) => {\n            this.config.client\n                .get(`/pipeline/${id}`)\n                .then((res) => resolve(res.data))\n                .catch((error) => reject(error));\n        });\n    }\n}\nexports.Pipelines = Pipelines;\n\n\n//# sourceURL=webpack://@jithen/circleci-v2-sdk/./src/core/pipelines.ts?");

/***/ }),

/***/ "./src/core/workflows.ts":
/*!*******************************!*\
  !*** ./src/core/workflows.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Workflows = void 0;\nclass Workflows {\n    constructor(config) {\n        this.config = config;\n    }\n    getWorkflowById(id) {\n        return new Promise((resolve, reject) => {\n            this.config.client\n                .get(`/workflow/${id}`)\n                .then((res) => resolve(res.data))\n                .catch((error) => reject(error));\n        });\n    }\n    listWorkflowJobs(id) {\n        return new Promise((resolve, reject) => {\n            this.config.client\n                .get(`/workflow/${id}/job`)\n                .then((res) => resolve(res.data))\n                .catch((error) => reject(error));\n        });\n    }\n    rerunWorkflow(id, options) {\n        return new Promise((resolve, reject) => {\n            this.config.client\n                .post(`/workflow/${id}/rerun`, options)\n                .then((res) => resolve(res.data))\n                .catch((error) => reject(error));\n        });\n    }\n}\nexports.Workflows = Workflows;\n\n\n//# sourceURL=webpack://@jithen/circleci-v2-sdk/./src/core/workflows.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./core */ \"./src/core/index.ts\"), exports);\n\n\n//# sourceURL=webpack://@jithen/circleci-v2-sdk/./src/index.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;