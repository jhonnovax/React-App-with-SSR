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
  }, ".img-container.jsx-2420844829{aspect-ratio:16/9;}.img-container.jsx-2420844829 img.jsx-2420844829{width:100%;height:100%;object-fit:cover;}h2.jsx-2420844829{margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbm92YS9EZXNrdG9wL05vZGUtUmVhY3QtU1NSL3NyYy9jb21wb25lbnRzL3Bvc3QtdGlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFFcUIsQUFFTCxBQUtHLFdBSkYsS0FJRyxFQVBFLEtBSUEsaUJBQUMiLCJmaWxlIjoiL1VzZXJzL2pub3ZhL0Rlc2t0b3AvTm9kZS1SZWFjdC1TU1Ivc3JjL2NvbXBvbmVudHMvcG9zdC10aWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFRpbGUocHJvcHMpIHtcbiAgY29uc3QgeyB0aXRsZSwgaW1hZ2UgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPExpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICB9ICBcbiAgICAgICAgfSBcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGluaz5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/jnova/Desktop/Node-React-SSR/src/components/post-tile.js */"));
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
          return fetch("".concat(process.env.API_URL, "/posts"), {
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
  }, "main.jsx-2260138154{width:100%;padding:15px;}main.jsx-2260138154 h1.jsx-2260138154{margin-bottom:10px;}main.jsx-2260138154 .post-list.jsx-2260138154{display:grid;grid-template-columns:1fr 1fr 1fr;-webkit-column-gap:10px;column-gap:10px;row-gap:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbm92YS9EZXNrdG9wL05vZGUtUmVhY3QtU1NSL3NyYy9wYWdlcy9ob21lLXBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJrQixBQUVjLEFBR1UsQUFFTixXQUpGLEVBS3VCLE1BSGQsS0FGUix1QkFNSSx3Q0FDSCxhQUFDIiwiZmlsZSI6Ii9Vc2Vycy9qbm92YS9EZXNrdG9wL05vZGUtUmVhY3QtU1NSL3NyYy9wYWdlcy9ob21lLXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvc3RUaWxlIGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdC10aWxlJztcblxuSG9tZVBhZ2UuZ2V0U2VydmVyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vcG9zdHNgLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzXG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IHBvc3RzID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcbiAgICA/IFtdXG4gICAgOiB3aW5kb3cuaW5pdGlhbFByb3BzPy5wb3N0cyB8fCBbXTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGgxPldlbGNvbWUgdG8gSG9tZSBQYWdlPC9oMT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBvc3QtbGlzdFwiPlxuICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gXG4gICAgICAgICAgPFBvc3RUaWxlIGtleT17cG9zdC5pZH0gdGl0bGU9e3Bvc3QudGl0bGV9IGltYWdlPXtwb3N0LmltYWdlfSAvPlxuICAgICAgICApfVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdC1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICAgICAgY29sdW1uLWdhcDogMTBweDtcbiAgICAgICAgICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9ICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59Il19 */\n/*@ sourceURL=/Users/jnova/Desktop/Node-React-SSR/src/pages/home-page.js */"));
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
//# sourceMappingURL=chunk-b23fe1179f1ed0237589.js.map