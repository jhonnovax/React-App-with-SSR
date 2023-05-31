/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apis/posts/get-all.js":
/*!***********************************!*\
  !*** ./src/apis/posts/get-all.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_posts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/posts.json */ "./src/database/posts.json");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, res) {
  res.json(_database_posts_json__WEBPACK_IMPORTED_MODULE_0__);
});

/***/ }),

/***/ "./src/apis/posts/get-by-id.js":
/*!*************************************!*\
  !*** ./src/apis/posts/get-by-id.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_posts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/posts.json */ "./src/database/posts.json");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, res) {
  var postId = req.params.postId;
  var postData = _database_posts_json__WEBPACK_IMPORTED_MODULE_0__.find(function (post) {
    return post.id === postId;
  });

  if (!postData) {
    res.status(400).json({
      message: 'Post not found'
    });
    return;
  }

  res.json(postData);
});

/***/ }),

/***/ "./src/apis/routes.js":
/*!****************************!*\
  !*** ./src/apis/routes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _posts_get_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts/get-all */ "./src/apis/posts/get-all.js");
/* harmony import */ var _posts_get_by_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts/get-by-id */ "./src/apis/posts/get-by-id.js");



var router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();
router.get('/api/posts', _posts_get_all__WEBPACK_IMPORTED_MODULE_1__.default);
router.get('/api/posts/:postId', _posts_get_by_id__WEBPACK_IMPORTED_MODULE_2__.default);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apis/routes */ "./src/apis/routes.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var expressApp = express__WEBPACK_IMPORTED_MODULE_0___default()();
var isDev = "development" !== 'production';
expressApp.use(__webpack_require__(/*! cors */ "cors")({
  origin: true
}));
expressApp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(isDev ? 'dist/public' : './public'));
expressApp.use(_apis_routes__WEBPACK_IMPORTED_MODULE_1__.default);
expressApp.use('*', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var React, _yield$import, ChunkExtractor, _yield$import2, renderToString, _yield$import3, StaticRouter, _yield$import4, HelmetProvider, _yield$import5, renderStyledJsx, path, App, _yield$App$getServerD, props, notFound, helmetContext, contentComponent, _isDev, statsFile, extractor, appJsx, appTags, styleTags, helmet, html;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react */ "react", 23));

          case 3:
            React = _context.sent;
            _context.next = 6;
            return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! @loadable/server */ "@loadable/server", 23));

          case 6:
            _yield$import = _context.sent;
            ChunkExtractor = _yield$import.ChunkExtractor;
            _context.next = 10;
            return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-dom/server */ "react-dom/server", 23));

          case 10:
            _yield$import2 = _context.sent;
            renderToString = _yield$import2.renderToString;
            _context.next = 14;
            return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-router-dom */ "react-router-dom", 23));

          case 14:
            _yield$import3 = _context.sent;
            StaticRouter = _yield$import3.StaticRouter;
            _context.next = 18;
            return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-helmet-async */ "react-helmet-async", 23));

          case 18:
            _yield$import4 = _context.sent;
            HelmetProvider = _yield$import4.HelmetProvider;
            _context.next = 22;
            return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! styled-jsx/server */ "styled-jsx/server", 23));

          case 22:
            _yield$import5 = _context.sent;
            renderStyledJsx = _yield$import5.flushToHTML;
            _context.next = 26;
            return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! path */ "path", 23));

          case 26:
            path = _context.sent;
            _context.next = 29;
            return __webpack_require__.e(/*! import() */ "src_app_js").then(__webpack_require__.bind(__webpack_require__, /*! ./app */ "./src/app.js"));

          case 29:
            App = _context.sent["default"];
            _context.next = 32;
            return App.getServerData({
              path: req.baseUrl,
              query: req.query
            });

          case 32:
            _yield$App$getServerD = _context.sent;
            props = _yield$App$getServerD.props;
            notFound = _yield$App$getServerD.notFound;

            if (!notFound) {
              _context.next = 38;
              break;
            }

            res.redirect('/404');
            return _context.abrupt("return");

          case 38:
            helmetContext = {};
            contentComponent = /*#__PURE__*/React.createElement(HelmetProvider, {
              context: helmetContext
            }, /*#__PURE__*/React.createElement(StaticRouter, {
              location: req.baseUrl
            }, /*#__PURE__*/React.createElement(App, null)));
            _isDev = "development" !== 'production';
            statsFile = path.resolve(_isDev ? './dist/public' : './public', 'loadable-stats.json');
            extractor = new ChunkExtractor({
              statsFile: statsFile
            });
            appJsx = extractor.collectChunks(contentComponent);
            appTags = renderToString(appJsx);
            styleTags = renderStyledJsx();
            helmet = helmetContext.helmet;
            html = "\n      <!DOCTYPE html>\n      <html ".concat(helmet.htmlAttributes.toString(), ">\n        <head>\n          ").concat(helmet.title.toString(), "\n          ").concat(helmet.meta.toString(), "\n          ").concat(extractor.getLinkTags(), "\n          ").concat(helmet.link.toString(), "\n          ").concat(extractor.getStyleTags(), "\n          ").concat(helmet.style.toString(), "\n          ").concat(helmet.script.toString(), "\n          ").concat(styleTags, "\n        </head>\n        <body ").concat(helmet.bodyAttributes.toString(), ">\n          <div id=\"app\">\n            ").concat(appTags, "\n          </div>\n          <script>window.initialProps=").concat(JSON.stringify(props), "</script>\n          ").concat(extractor.getScriptTags(), "\n        </body>\n      </html>\n    ");
            res.send(html);
            _context.next = 55;
            break;

          case 51:
            _context.prev = 51;
            _context.t0 = _context["catch"](0);
            console.error('Error server side rendering', _context.t0);
            res.status(500).json(_context.t0);

          case 55:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 51]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
expressApp.listen(3000);

/***/ }),

/***/ "./src/database/posts.json":
/*!*********************************!*\
  !*** ./src/database/posts.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"1","title":"New ways to learn","image":"https://unsplash.it/250/250?gravity=center"},{"id":"2","title":"Best practices to learn","image":"https://unsplash.it/250/250?gravity=center"},{"id":"3","title":"Life series","image":"https://unsplash.it/250/250?gravity=center"},{"id":"4","title":"New Experiences","image":"https://unsplash.it/250/250?gravity=center"},{"id":"5","title":"Webinar expectations","image":"https://unsplash.it/250/250?gravity=center"},{"id":"6","title":"Trend topics","image":"https://unsplash.it/250/250?gravity=center"}]');

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@babel/polyfill");;

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@loadable/component");;

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@loadable/server");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-helmet-async":
/*!*************************************!*\
  !*** external "react-helmet-async" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("react-helmet-async");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-jsx/server");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "chunk-" + {"src_app_js":"bb0ce767afc26da59707","pages-404":"575f800c2c5d1d53399b","pages-home-page":"fbe8049f3ae8267d92a0","pages-about-page":"5adce4a0c11d7aef62c4"}[chunkId] + ".js";
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
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("@babel/polyfill");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1hcHAvLi9zcmMvYXBpcy9wb3N0cy9nZXQtYWxsLmpzIiwid2VicGFjazovL3JlYWN0LWFwcC8uL3NyYy9hcGlzL3Bvc3RzL2dldC1ieS1pZC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1hcHAvLi9zcmMvYXBpcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtYXBwLy4vc3JjL3NlcnZlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1hcHAvZXh0ZXJuYWwgXCJAYmFiZWwvcG9seWZpbGxcIiIsIndlYnBhY2s6Ly9yZWFjdC1hcHAvZXh0ZXJuYWwgXCJAbG9hZGFibGUvY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vcmVhY3QtYXBwL2V4dGVybmFsIFwiQGxvYWRhYmxlL3NlcnZlclwiIiwid2VicGFjazovL3JlYWN0LWFwcC9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly9yZWFjdC1hcHAvZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtYXBwL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovL3JlYWN0LWFwcC9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9yZWFjdC1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JlYWN0LWFwcC9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9yZWFjdC1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXQtYXN5bmNcIiIsIndlYnBhY2s6Ly9yZWFjdC1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtYXBwL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9yZWFjdC1hcHAvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZWFjdC1hcHAvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVhY3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWFjdC1hcHAvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9yZWFjdC1hcHAvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3JlYWN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlYWN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlYWN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvcmVxdWlyZSBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3JlYWN0LWFwcC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsicmVxIiwicmVzIiwianNvbiIsImFsbFBvc3RzIiwicG9zdElkIiwicGFyYW1zIiwicG9zdERhdGEiLCJwb3N0IiwiaWQiLCJzdGF0dXMiLCJtZXNzYWdlIiwicm91dGVyIiwiZXhwcmVzcyIsImdldCIsImdldEFsbFBvc3RzIiwiZ2V0QnlJZCIsImV4cHJlc3NBcHAiLCJpc0RldiIsInByb2Nlc3MiLCJ1c2UiLCJyZXF1aXJlIiwib3JpZ2luIiwicm91dGVzIiwiUmVhY3QiLCJDaHVua0V4dHJhY3RvciIsInJlbmRlclRvU3RyaW5nIiwiU3RhdGljUm91dGVyIiwiSGVsbWV0UHJvdmlkZXIiLCJyZW5kZXJTdHlsZWRKc3giLCJmbHVzaFRvSFRNTCIsInBhdGgiLCJBcHAiLCJnZXRTZXJ2ZXJEYXRhIiwiYmFzZVVybCIsInF1ZXJ5IiwicHJvcHMiLCJub3RGb3VuZCIsInJlZGlyZWN0IiwiaGVsbWV0Q29udGV4dCIsImNvbnRlbnRDb21wb25lbnQiLCJzdGF0c0ZpbGUiLCJyZXNvbHZlIiwiZXh0cmFjdG9yIiwiYXBwSnN4IiwiY29sbGVjdENodW5rcyIsImFwcFRhZ3MiLCJzdHlsZVRhZ3MiLCJoZWxtZXQiLCJodG1sIiwiaHRtbEF0dHJpYnV0ZXMiLCJ0b1N0cmluZyIsInRpdGxlIiwibWV0YSIsImdldExpbmtUYWdzIiwibGluayIsImdldFN0eWxlVGFncyIsInN0eWxlIiwic2NyaXB0IiwiYm9keUF0dHJpYnV0ZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0U2NyaXB0VGFncyIsInNlbmQiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsaUVBQWUsVUFBQ0EsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDM0JBLEtBQUcsQ0FBQ0MsSUFBSixDQUFTQyxpREFBVDtBQUNELENBRkQsRTs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFQSxpRUFBZSxVQUFDSCxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUFBLE1BQ25CRyxNQURtQixHQUNSSixHQUFHLENBQUNLLE1BREksQ0FDbkJELE1BRG1CO0FBRTNCLE1BQU1FLFFBQVEsR0FBR0gsc0RBQUEsQ0FBYyxVQUFBSSxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlKLE1BQWhCO0FBQUEsR0FBbEIsQ0FBakI7O0FBRUEsTUFBSSxDQUFDRSxRQUFMLEVBQWU7QUFDYkwsT0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQlAsSUFBaEIsQ0FBcUI7QUFBRVEsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDQTtBQUNEOztBQUVEVCxLQUFHLENBQUNDLElBQUosQ0FBU0ksUUFBVDtBQUNELENBVkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0EsSUFBTUssTUFBTSxHQUFHQyxxREFBQSxFQUFmO0FBRUFELE1BQU0sQ0FBQ0UsR0FBUCxD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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRDtXQUN0RCxxQ0FBcUMsaUVBQWlFO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0YsRTs7Ozs7V0NSQTtXQUNBO1dBQ0E7V0FDQSxvQkFBb0IsMEpBQTBKO1dBQzlLLEU7Ozs7O1dDSkEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZUFBZSxxQkFBcUI7V0FDcEM7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxZQUFZO1dBQ1o7V0FDQSxHQUFHO1dBQ0g7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQSxrQjs7Ozs7VUNyQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbGxQb3N0cyBmcm9tICcuLi8uLi9kYXRhYmFzZS9wb3N0cy5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5qc29uKGFsbFBvc3RzKTtcbn07IiwiaW1wb3J0IGFsbFBvc3RzIGZyb20gJy4uLy4uL2RhdGFiYXNlL3Bvc3RzLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBwb3N0SWQgfSA9IHJlcS5wYXJhbXM7XG4gIGNvbnN0IHBvc3REYXRhID0gYWxsUG9zdHMuZmluZChwb3N0ID0+IHBvc3QuaWQgPT09IHBvc3RJZCk7XG5cbiAgaWYgKCFwb3N0RGF0YSkge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ1Bvc3Qgbm90IGZvdW5kJyB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXMuanNvbihwb3N0RGF0YSk7XG59OyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGdldEFsbFBvc3RzIGZyb20gJy4vcG9zdHMvZ2V0LWFsbCc7XG5pbXBvcnQgZ2V0QnlJZCBmcm9tICcuL3Bvc3RzL2dldC1ieS1pZCc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvYXBpL3Bvc3RzJywgZ2V0QWxsUG9zdHMpO1xucm91dGVyLmdldCgnL2FwaS9wb3N0cy86cG9zdElkJywgZ2V0QnlJZCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9hcGlzL3JvdXRlcyc7XG5cbmNvbnN0IGV4cHJlc3NBcHAgPSBleHByZXNzKCk7XG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbmV4cHJlc3NBcHAudXNlKHJlcXVpcmUoJ2NvcnMnKSh7IG9yaWdpbjogdHJ1ZSB9KSk7XG5leHByZXNzQXBwLnVzZShleHByZXNzLnN0YXRpYyhpc0RldiA/ICdkaXN0L3B1YmxpYycgOiAnLi9wdWJsaWMnKSk7XG5leHByZXNzQXBwLnVzZShyb3V0ZXMpO1xuXG5leHByZXNzQXBwLnVzZSgnKicsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkgeyAgXG4gICAgY29uc3QgUmVhY3QgPSBhd2FpdCBpbXBvcnQoJ3JlYWN0Jyk7XG4gICAgY29uc3QgeyBDaHVua0V4dHJhY3RvciB9ID0gYXdhaXQgaW1wb3J0KCdAbG9hZGFibGUvc2VydmVyJyk7XG4gICAgY29uc3QgeyByZW5kZXJUb1N0cmluZyB9ID0gYXdhaXQgaW1wb3J0KCdyZWFjdC1kb20vc2VydmVyJyk7XG4gICAgY29uc3QgeyBTdGF0aWNSb3V0ZXIgfSA9IGF3YWl0IGltcG9ydCgncmVhY3Qtcm91dGVyLWRvbScpO1xuICAgIGNvbnN0IHsgSGVsbWV0UHJvdmlkZXIgfSA9IGF3YWl0IGltcG9ydCgncmVhY3QtaGVsbWV0LWFzeW5jJyk7XG4gICAgY29uc3QgeyBmbHVzaFRvSFRNTDogcmVuZGVyU3R5bGVkSnN4IH0gPSBhd2FpdCBpbXBvcnQoJ3N0eWxlZC1qc3gvc2VydmVyJyk7XG4gICAgY29uc3QgcGF0aCA9IGF3YWl0IGltcG9ydCgncGF0aCcpO1xuICAgIGNvbnN0IEFwcCA9IChhd2FpdCBpbXBvcnQoJy4vYXBwJykpLmRlZmF1bHQ7XG4gICAgXG4gICAgY29uc3QgeyBwcm9wcywgbm90Rm91bmQgfSA9IGF3YWl0IEFwcC5nZXRTZXJ2ZXJEYXRhKHsgcGF0aDogcmVxLmJhc2VVcmwsIHF1ZXJ5OiByZXEucXVlcnkgfSk7XG5cbiAgICBpZiAobm90Rm91bmQpIHtcbiAgICAgIHJlcy5yZWRpcmVjdCgnLzQwNCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhlbG1ldENvbnRleHQgPSB7fTsgIFxuICAgIGNvbnN0IGNvbnRlbnRDb21wb25lbnQgPSAoXG4gICAgICA8SGVsbWV0UHJvdmlkZXIgY29udGV4dD17aGVsbWV0Q29udGV4dH0+XG4gICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS5iYXNlVXJsfT5cbiAgICAgICAgICA8QXBwIC8+XG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgPC9IZWxtZXRQcm92aWRlcj5cbiAgICApO1xuXG4gICAgY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuICAgIGNvbnN0IHN0YXRzRmlsZSA9IHBhdGgucmVzb2x2ZShpc0RldiA/ICcuL2Rpc3QvcHVibGljJyA6ICcuL3B1YmxpYycsICdsb2FkYWJsZS1zdGF0cy5qc29uJyk7XG4gICAgY29uc3QgZXh0cmFjdG9yID0gbmV3IENodW5rRXh0cmFjdG9yKHsgc3RhdHNGaWxlIH0pO1xuICAgIGNvbnN0IGFwcEpzeCA9IGV4dHJhY3Rvci5jb2xsZWN0Q2h1bmtzKGNvbnRlbnRDb21wb25lbnQpO1xuICAgIGNvbnN0IGFwcFRhZ3MgPSByZW5kZXJUb1N0cmluZyhhcHBKc3gpOyAgICAgICAgICBcbiAgICBjb25zdCBzdHlsZVRhZ3MgPSByZW5kZXJTdHlsZWRKc3goKTtcbiAgICBjb25zdCB7IGhlbG1ldCB9ID0gaGVsbWV0Q29udGV4dDtcbiAgICBjb25zdCBodG1sID0gYFxuICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICA8aHRtbCAke2hlbG1ldC5odG1sQXR0cmlidXRlcy50b1N0cmluZygpfT5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgJHtoZWxtZXQudGl0bGUudG9TdHJpbmcoKX1cbiAgICAgICAgICAke2hlbG1ldC5tZXRhLnRvU3RyaW5nKCl9XG4gICAgICAgICAgJHtleHRyYWN0b3IuZ2V0TGlua1RhZ3MoKX1cbiAgICAgICAgICAke2hlbG1ldC5saW5rLnRvU3RyaW5nKCl9XG4gICAgICAgICAgJHtleHRyYWN0b3IuZ2V0U3R5bGVUYWdzKCl9XG4gICAgICAgICAgJHtoZWxtZXQuc3R5bGUudG9TdHJpbmcoKX1cbiAgICAgICAgICAke2hlbG1ldC5zY3JpcHQudG9TdHJpbmcoKX1cbiAgICAgICAgICAke3N0eWxlVGFnc31cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keSAke2hlbG1ldC5ib2R5QXR0cmlidXRlcy50b1N0cmluZygpfT5cbiAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgICAgICAgICAke2FwcFRhZ3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNjcmlwdD53aW5kb3cuaW5pdGlhbFByb3BzPSR7SlNPTi5zdHJpbmdpZnkocHJvcHMpfTwvc2NyaXB0PlxuICAgICAgICAgICR7ZXh0cmFjdG9yLmdldFNjcmlwdFRhZ3MoKX1cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIGA7XG4gICAgXG4gICAgcmVzLnNlbmQoaHRtbCk7ICBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcnLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xuICB9XG59KTtcblxuZXhwcmVzc0FwcC5saXN0ZW4oMzAwMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcG9seWZpbGxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBsb2FkYWJsZS9jb21wb25lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBsb2FkYWJsZS9zZXJ2ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXQtYXN5bmNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcImNodW5rLVwiICsge1wic3JjX2FwcF9qc1wiOlwiYmIwY2U3NjdhZmMyNmRhNTk3MDdcIixcInBhZ2VzLTQwNFwiOlwiNTc1ZjgwMGMyYzVkMWQ1MzM5OWJcIixcInBhZ2VzLWhvbWUtcGFnZVwiOlwiZmJlODA0OWYzYWU4MjY3ZDkyYTBcIixcInBhZ2VzLWFib3V0LXBhZ2VcIjpcIjVhZGNlNGEwYzExZDdhZWY2MmM0XCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwibG9hZGVkXCIsIG90aGVyd2lzZSBub3QgbG9hZGVkIHlldFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDFcbn07XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxudmFyIGluc3RhbGxDaHVuayA9IChjaHVuaykgPT4ge1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcywgcnVudGltZSA9IGNodW5rLnJ1bnRpbWU7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAxO1xuXG59O1xuXG4vLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLnJlcXVpcmUgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW5zdGFsbENodW5rKHJlcXVpcmUoXCIuL1wiICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKSk7XG5cdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDE7XG5cdH1cbn07XG5cbi8vIG5vIGV4dGVybmFsIGluc3RhbGwgY2h1bmtcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsIi8vIG1vZHVsZSBmYWN0b3JpZXMgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIkBiYWJlbC9wb2x5ZmlsbFwiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NlcnZlci5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=