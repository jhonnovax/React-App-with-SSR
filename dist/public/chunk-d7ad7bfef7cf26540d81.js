(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-home-page"],{

/***/ "./src/components/post-tile.js":
/*!*************************************!*\
  !*** ./src/components/post-tile.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostTile)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



function PostTile(props) {
  var title = props.title,
      image = props.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "jsx-2420844829" + " " + "img-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: image,
    alt: title,
    className: "jsx-2420844829"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
    className: "jsx-2420844829"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__.default, {
    id: "2420844829"
  }, ".img-container.jsx-2420844829{aspect-ratio:16/9;}.img-container.jsx-2420844829 img.jsx-2420844829{width:100%;height:100%;object-fit:cover;}h2.jsx-2420844829{margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbm92YS9Qcm9qZWN0cy9Ob2RlLVJlYWN0LVNTUi9zcmMvY29tcG9uZW50cy9wb3N0LXRpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWtCLEFBRXFCLEFBRUwsQUFLRyxXQUpGLEtBSUcsRUFQRSxLQUlBLGlCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9qbm92YS9Qcm9qZWN0cy9Ob2RlLVJlYWN0LVNTUi9zcmMvY29tcG9uZW50cy9wb3N0LXRpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0VGlsZShwcm9wcykge1xuICBjb25zdCB7IHRpdGxlLCBpbWFnZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmltZy1jb250YWluZXIge1xuICAgICAgICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIH0gIFxuICAgICAgICB9IFxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MaW5rPlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/jnova/Projects/Node-React-SSR/src/components/post-tile.js */"));
}

/***/ }),

/***/ "./src/pages/home-page.js":
/*!********************************!*\
  !*** ./src/pages/home-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_post_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post-tile */ "./src/components/post-tile.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



HomePage.getServerData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var fetch, response, posts;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
          _context.next = 3;
          return fetch('http://localhost:3000/api/posts', {
            method: 'GET'
          });

        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();

        case 6:
          posts = _context.sent;
          return _context.abrupt("return", {
            props: {
              posts: posts
            }
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
function HomePage() {
  var _window$initialProps;

  var posts = typeof window === 'undefined' ? [] : ((_window$initialProps = window.initialProps) === null || _window$initialProps === void 0 ? void 0 : _window$initialProps.posts) || [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", {
    className: "jsx-2260138154"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {
    className: "jsx-2260138154"
  }, "Welcome to Home Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: "jsx-2260138154" + " " + "post-list"
  }, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_post_tile__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: post.id,
      title: post.title,
      image: post.image
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__.default, {
    id: "2260138154"
  }, "main.jsx-2260138154{width:100%;padding:15px;}main.jsx-2260138154 h1.jsx-2260138154{margin-bottom:10px;}main.jsx-2260138154 .post-list.jsx-2260138154{display:grid;grid-template-columns:1fr 1fr 1fr;-webkit-column-gap:10px;column-gap:10px;row-gap:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbm92YS9Qcm9qZWN0cy9Ob2RlLVJlYWN0LVNTUi9zcmMvcGFnZXMvaG9tZS1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCa0IsQUFFYyxBQUdVLEFBRU4sV0FKRixFQUt1QixNQUhkLEtBRlIsdUJBTUksd0NBQ0gsYUFBQyIsImZpbGUiOiIvVXNlcnMvam5vdmEvUHJvamVjdHMvTm9kZS1SZWFjdC1TU1Ivc3JjL3BhZ2VzL2hvbWUtcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9zdFRpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0LXRpbGUnO1xuXG5Ib21lUGFnZS5nZXRTZXJ2ZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cycsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHNcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgcG9zdHMgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuICAgID8gW11cbiAgICA6IHdpbmRvdy5pbml0aWFsUHJvcHM/LnBvc3RzIHx8IFtdO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8aDE+V2VsY29tZSB0byBIb21lIFBhZ2U8L2gxPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicG9zdC1saXN0XCI+XG4gICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiBcbiAgICAgICAgICA8UG9zdFRpbGUga2V5PXtwb3N0LmlkfSB0aXRsZT17cG9zdC50aXRsZX0gaW1hZ2U9e3Bvc3QuaW1hZ2V9IC8+XG4gICAgICAgICl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0LWxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgICAgICAgICAgcm93LWdhcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gIFxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/jnova/Projects/Node-React-SSR/src/pages/home-page.js */"));
}

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ })

}]);
//# sourceMappingURL=chunk-d7ad7bfef7cf26540d81.js.map