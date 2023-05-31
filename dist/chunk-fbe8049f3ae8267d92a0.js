exports.id = "pages-home-page";
exports.ids = ["pages-home-page"];
exports.modules = {

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);



function PostTile(props) {
  var title = props.title,
      image = props.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "jsx-2420844829" + " " + "img-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: image,
    alt: title,
    className: "jsx-2420844829"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", {
    className: "jsx-2420844829"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_post_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post-tile */ "./src/components/post-tile.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



HomePage.getServerData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var fetch, response, posts;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fetch = __webpack_require__(/*! node-fetch */ "node-fetch");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("main", {
    className: "jsx-2260138154"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", {
    className: "jsx-2260138154"
  }, "Welcome to Home Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "jsx-2260138154" + " " + "post-list"
  }, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_post_tile__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: post.id,
      title: post.title,
      image: post.image
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
    id: "2260138154"
  }, "main.jsx-2260138154{width:100%;padding:15px;}main.jsx-2260138154 h1.jsx-2260138154{margin-bottom:10px;}main.jsx-2260138154 .post-list.jsx-2260138154{display:grid;grid-template-columns:1fr 1fr 1fr;-webkit-column-gap:10px;column-gap:10px;row-gap:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbm92YS9Qcm9qZWN0cy9Ob2RlLVJlYWN0LVNTUi9zcmMvcGFnZXMvaG9tZS1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCa0IsQUFFYyxBQUdVLEFBRU4sV0FKRixFQUt1QixNQUhkLEtBRlIsdUJBTUksd0NBQ0gsYUFBQyIsImZpbGUiOiIvVXNlcnMvam5vdmEvUHJvamVjdHMvTm9kZS1SZWFjdC1TU1Ivc3JjL3BhZ2VzL2hvbWUtcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9zdFRpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0LXRpbGUnO1xuXG5Ib21lUGFnZS5nZXRTZXJ2ZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0cycsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHNcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgcG9zdHMgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuICAgID8gW11cbiAgICA6IHdpbmRvdy5pbml0aWFsUHJvcHM/LnBvc3RzIHx8IFtdO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8aDE+V2VsY29tZSB0byBIb21lIFBhZ2U8L2gxPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicG9zdC1saXN0XCI+XG4gICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiBcbiAgICAgICAgICA8UG9zdFRpbGUga2V5PXtwb3N0LmlkfSB0aXRsZT17cG9zdC50aXRsZX0gaW1hZ2U9e3Bvc3QuaW1hZ2V9IC8+XG4gICAgICAgICl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0LWxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgICAgICAgICAgcm93LWdhcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gIFxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/jnova/Projects/Node-React-SSR/src/pages/home-page.js */"));
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1hcHAvLi9zcmMvY29tcG9uZW50cy9wb3N0LXRpbGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtYXBwLy4vc3JjL3BhZ2VzL2hvbWUtcGFnZS5qcyJdLCJuYW1lcyI6WyJQb3N0VGlsZSIsInByb3BzIiwidGl0bGUiLCJpbWFnZSIsIkhvbWVQYWdlIiwiZ2V0U2VydmVyRGF0YSIsImZldGNoIiwicmVxdWlyZSIsIm1ldGhvZCIsInJlc3BvbnNlIiwianNvbiIsInBvc3RzIiwid2luZG93IiwiaW5pdGlhbFByb3BzIiwibWFwIiwicG9zdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUEsTUFDOUJDLEtBRDhCLEdBQ2JELEtBRGEsQ0FDOUJDLEtBRDhCO0FBQUEsTUFDdkJDLEtBRHVCLEdBQ2JGLEtBRGEsQ0FDdkJFLEtBRHVCO0FBR3RDLHNCQUNFLDJEQUFDLGtEQUFELHFCQUNFO0FBQUEsd0NBQWU7QUFBZixrQkFDRTtBQUFLLE9BQUcsRUFBRUEsS0FBVjtBQUFpQixPQUFHLEVBQUVELEtBQXRCO0FBQUE7QUFBQSxJQURGLENBREYsZUFJRTtBQUFBO0FBQUEsS0FBS0EsS0FBTCxDQUpGO0FBQUE7QUFBQSwyOENBREY7QUF1QkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGFBQVQsd0VBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQkMsZUFEaUIsR0FDVEMsbUJBQU8sQ0FBQyw4QkFBRCxDQURFO0FBQUE7QUFBQSxpQkFFQUQsS0FBSyxDQUFDLGlDQUFELEVBQW9DO0FBQUVFLGtCQUFNLEVBQUU7QUFBVixXQUFwQyxDQUZMOztBQUFBO0FBRWpCQyxrQkFGaUI7QUFBQTtBQUFBLGlCQUdIQSxRQUFRLENBQUNDLElBQVQsRUFIRzs7QUFBQTtBQUdqQkMsZUFIaUI7QUFBQSwyQ0FLaEI7QUFDTFYsaUJBQUssRUFBRTtBQUNMVSxtQkFBSyxFQUFMQTtBQURLO0FBREYsV0FMZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBekI7QUFZZSxTQUFTUCxRQUFULEdBQW9CO0FBQUE7O0FBQ2pDLE1BQU1PLEtBQUssR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQ1YsRUFEVSxHQUVWLHlCQUFBQSxNQUFNLENBQUNDLFlBQVAsOEVBQXFCRixLQUFyQixLQUE4QixFQUZsQztBQUlBLHNCQUNFO0FBQUE7QUFBQSxrQkFDRTtBQUFBO0FBQUEsNEJBREYsZUFFRTtBQUFBLHdDQUFtQjtBQUFuQixLQUNHQSxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsd0JBQ2IsMkRBQUMsMERBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBcEI7QUFBd0IsV0FBSyxFQUFFRCxJQUFJLENBQUNiLEtBQXBDO0FBQTJDLFdBQUssRUFBRWEsSUFBSSxDQUFDWjtBQUF2RCxNQURhO0FBQUEsR0FBZCxDQURILENBRkY7QUFBQTtBQUFBLDhxRUFERjtBQTJCRCxDIiwiZmlsZSI6ImNodW5rLWZiZTgwNDlmM2FlODI2N2Q5MmEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFRpbGUocHJvcHMpIHtcbiAgY29uc3QgeyB0aXRsZSwgaW1hZ2UgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPExpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICB9ICBcbiAgICAgICAgfSBcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGluaz5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvc3RUaWxlIGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdC10aWxlJztcblxuSG9tZVBhZ2UuZ2V0U2VydmVyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdHMnLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzXG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IHBvc3RzID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcbiAgICA/IFtdXG4gICAgOiB3aW5kb3cuaW5pdGlhbFByb3BzPy5wb3N0cyB8fCBbXTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGgxPldlbGNvbWUgdG8gSG9tZSBQYWdlPC9oMT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBvc3QtbGlzdFwiPlxuICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gXG4gICAgICAgICAgPFBvc3RUaWxlIGtleT17cG9zdC5pZH0gdGl0bGU9e3Bvc3QudGl0bGV9IGltYWdlPXtwb3N0LmltYWdlfSAvPlxuICAgICAgICApfVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdC1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICAgICAgY29sdW1uLWdhcDogMTBweDtcbiAgICAgICAgICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9ICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==