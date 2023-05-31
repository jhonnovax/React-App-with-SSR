exports.id = "src_app_js";
exports.ids = ["src_app_js"];
exports.modules = {

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/routes.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout */ "./src/components/layout.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






App.getServerData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var _serverData, _serverData2;

    var path, query, route, serverData, component, params, location;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            path = _ref.path, query = _ref.query;
            route = _routes__WEBPACK_IMPORTED_MODULE_3__.default.find(function (route) {
              return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.matchPath)(path, route);
            });
            serverData = null;

            if (!(route && route.component.load)) {
              _context.next = 8;
              break;
            }

            _context.next = 6;
            return new Promise(function (resolve) {
              return route.component.load().then(function (component) {
                return resolve(component);
              });
            });

          case 6:
            component = _context.sent;
            route.component = component["default"];

          case 8:
            if (!(route && route.component.getServerData)) {
              _context.next = 14;
              break;
            }

            params = {}; //getRouteParams(route, path);

            location = {
              params: params,
              route: route,
              query: query
            };
            _context.next = 13;
            return route.component.getServerData(location);

          case 13:
            serverData = _context.sent;

          case 14:
            return _context.abrupt("return", {
              props: (_serverData = serverData) === null || _serverData === void 0 ? void 0 : _serverData.props,
              notFound: (_serverData2 = serverData) === null || _serverData2 === void 0 ? void 0 : _serverData2.notFound
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, null, _routes__WEBPACK_IMPORTED_MODULE_3__.default.map(function (route, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
      key: index,
      exact: route.exact,
      path: route.path,
      component: route.component
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
    id: "3617934902"
  }, "*{box-sizing:border-box;margin:0;padding:0;}html{font-size:65%;}body{font-family:Helvetica,Arial,sans-serif;font-size:1.6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbm92YS9Qcm9qZWN0cy9Ob2RlLVJlYWN0LVNTUi9zcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDeUIsQUFFeUIsQUFLUixBQUcyQixjQUgxQixRQUpOLFNBQ0MsUUFPTyxFQVBOLGVBT08iLCJmaWxlIjoiL1VzZXJzL2pub3ZhL1Byb2plY3RzL05vZGUtUmVhY3QtU1NSL3NyYy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCwgbWF0Y2hQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dCc7XG5cbkFwcC5nZXRTZXJ2ZXJEYXRhID0gYXN5bmMgKHsgcGF0aCwgcXVlcnkgfSkgPT4geyAgICBcbiAgY29uc3Qgcm91dGUgPSByb3V0ZXMuZmluZChyb3V0ZSA9PiBtYXRjaFBhdGgocGF0aCwgcm91dGUpKTsgXG4gIGxldCBzZXJ2ZXJEYXRhID0gbnVsbDtcblxuICBpZiAocm91dGUgJiYgcm91dGUuY29tcG9uZW50LmxvYWQpIHsgXG4gICAgY29uc3QgY29tcG9uZW50ID0gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiByb3V0ZS5jb21wb25lbnQubG9hZCgpLnRoZW4oY29tcG9uZW50ID0+IHJlc29sdmUoY29tcG9uZW50KSkpOyBcbiAgICByb3V0ZS5jb21wb25lbnQgPSBjb21wb25lbnQuZGVmYXVsdDtcbiAgfVxuXG4gIGlmIChyb3V0ZSAmJiByb3V0ZS5jb21wb25lbnQuZ2V0U2VydmVyRGF0YSkgeyAgIFxuICAgIGNvbnN0IHBhcmFtcyA9IHt9OyAvL2dldFJvdXRlUGFyYW1zKHJvdXRlLCBwYXRoKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHsgcGFyYW1zLCByb3V0ZSwgcXVlcnkgfTtcbiAgICBzZXJ2ZXJEYXRhID0gYXdhaXQgcm91dGUuY29tcG9uZW50LmdldFNlcnZlckRhdGEobG9jYXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogc2VydmVyRGF0YT8ucHJvcHMsXG4gICAgbm90Rm91bmQ6IHNlcnZlckRhdGE/Lm5vdEZvdW5kXG4gIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIHtyb3V0ZXMubWFwKChyb3V0ZSwgaW5kZXgpID0+IFxuICAgICAgICAgIDxSb3V0ZSBcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBleGFjdD17cm91dGUuZXhhY3R9IFxuICAgICAgICAgICAgcGF0aD17cm91dGUucGF0aH1cbiAgICAgICAgICAgIGNvbXBvbmVudD17cm91dGUuY29tcG9uZW50fT5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICApfVxuICAgICAgPC9Td2l0Y2g+IFxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNjUlO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/jnova/Projects/Node-React-SSR/src/app.js */"));
}

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);



function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("header", {
    className: "jsx-2053586313"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("nav", {
    className: "jsx-2053586313"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/about"
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
    id: "2053586313"
  }, "header.jsx-2053586313{background:#fafafb;box-shadow:rgba(0,0,0,0.05) 0px 1px 2px 0px,rgba(0,0,0,0.05) 0px 1px 4px 0px,rgba(0,0,0,0.05) 0px 2px 8px 0px;padding:15px;}header.jsx-2053586313 nav.jsx-2053586313 a{padding:0 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbm92YS9Qcm9qZWN0cy9Ob2RlLVJlYWN0LVNTUi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2tCLEFBRXNCLEFBSUgsY0FBQyxLQUh3Ryw4R0FDNUcsYUFBQyIsImZpbGUiOiIvVXNlcnMvam5vdmEvUHJvamVjdHMvTm9kZS1SZWFjdC1TU1Ivc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XG4gICAgICA8L25hdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDJweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCA0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAycHggOHB4IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgOmdsb2JhbChhKSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApO1xuXG59Il19 */\n/*@ sourceURL=/Users/jnova/Projects/Node-React-SSR/src/components/header.js */"));
}

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/components/header.js");


function Layout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header__WEBPACK_IMPORTED_MODULE_1__.default, null), props.children);
}

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);

var NotFound = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-404";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/*! import() | pages-404 */ "pages-404").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/404 */ "./src/pages/404.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/404 */ "./src/pages/404.js");
    }

    return eval('require.resolve')("./pages/404");
  }
});
var HomePage = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-home-page";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/*! import() | pages-home-page */ "pages-home-page").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home-page */ "./src/pages/home-page.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/home-page */ "./src/pages/home-page.js");
    }

    return eval('require.resolve')("./pages/home-page");
  }
});
var AboutPage = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-about-page";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/*! import() | pages-about-page */ "pages-about-page").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about-page */ "./src/pages/about-page.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/about-page */ "./src/pages/about-page.js");
    }

    return eval('require.resolve')("./pages/about-page");
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  exact: true,
  path: '/',
  component: HomePage
}, {
  path: '/about',
  component: AboutPage
}, {
  path: '*',
  component: NotFound
}]);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1hcHAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3JlYWN0LWFwcC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1hcHAvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtYXBwLy4vc3JjL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJBcHAiLCJnZXRTZXJ2ZXJEYXRhIiwicGF0aCIsInF1ZXJ5Iiwicm91dGUiLCJyb3V0ZXMiLCJtYXRjaFBhdGgiLCJzZXJ2ZXJEYXRhIiwiY29tcG9uZW50IiwibG9hZCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsInBhcmFtcyIsImxvY2F0aW9uIiwicHJvcHMiLCJub3RGb3VuZCIsImluZGV4IiwiZXhhY3QiLCJIZWFkZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIk5vdEZvdW5kIiwibG9hZGFibGUiLCJIb21lUGFnZSIsIkFib3V0UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsR0FBRyxDQUFDQyxhQUFKO0FBQUEsc0VBQW9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxnQkFBVCxRQUFTQSxJQUFULEVBQWVDLEtBQWYsUUFBZUEsS0FBZjtBQUNaQyxpQkFEWSxHQUNKQyxpREFBQSxDQUFZLFVBQUFELEtBQUs7QUFBQSxxQkFBSUUsMkRBQVMsQ0FBQ0osSUFBRCxFQUFPRSxLQUFQLENBQWI7QUFBQSxhQUFqQixDQURJO0FBRWRHLHNCQUZjLEdBRUQsSUFGQzs7QUFBQSxrQkFJZEgsS0FBSyxJQUFJQSxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JDLElBSlg7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFLUSxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLHFCQUFJUCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JD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O0FBQ0EsSUFBTUUsU0FBUyxHQUFHRiwwREFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxlQUFDO0FBQUEsV0FBTSx1TEFBTjtBQUFBLEdBQUQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBQztBQUFEOztBQUFBO0FBQUE7QUFBQSxFQUExQjtBQUVBLGlFQUFlLENBQ2I7QUFDRUwsT0FBSyxFQUFFLElBRFQ7QUFFRWhCLE1BQUksRUFBRSxHQUZSO0FBR0VNLFdBQVMsRUFBRWdCO0FBSGIsQ0FEYSxFQU1iO0FBQ0V0QixNQUFJLEVBQUUsUUFEUjtBQUVFTSxXQUFTLEVBQUVpQjtBQUZiLENBTmEsRUFVYjtBQUNFdkIsTUFBSSxFQUFFLEdBRFI7QUFFRU0sV0FBUyxFQUFFYztBQUZiLENBVmEsQ0FBZixFIiwiZmlsZSI6ImNodW5rLWJiMGNlNzY3YWZjMjZkYTU5NzA3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIG1hdGNoUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG5BcHAuZ2V0U2VydmVyRGF0YSA9IGFzeW5jICh7IHBhdGgsIHF1ZXJ5IH0pID0+IHsgICAgXG4gIGNvbnN0IHJvdXRlID0gcm91dGVzLmZpbmQocm91dGUgPT4gbWF0Y2hQYXRoKHBhdGgsIHJvdXRlKSk7IFxuICBsZXQgc2VydmVyRGF0YSA9IG51bGw7XG5cbiAgaWYgKHJvdXRlICYmIHJvdXRlLmNvbXBvbmVudC5sb2FkKSB7IFxuICAgIGNvbnN0IGNvbXBvbmVudCA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gcm91dGUuY29tcG9uZW50LmxvYWQoKS50aGVuKGNvbXBvbmVudCA9PiByZXNvbHZlKGNvbXBvbmVudCkpKTsgXG4gICAgcm91dGUuY29tcG9uZW50ID0gY29tcG9uZW50LmRlZmF1bHQ7XG4gIH1cblxuICBpZiAocm91dGUgJiYgcm91dGUuY29tcG9uZW50LmdldFNlcnZlckRhdGEpIHsgICBcbiAgICBjb25zdCBwYXJhbXMgPSB7fTsgLy9nZXRSb3V0ZVBhcmFtcyhyb3V0ZSwgcGF0aCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSB7IHBhcmFtcywgcm91dGUsIHF1ZXJ5IH07XG4gICAgc2VydmVyRGF0YSA9IGF3YWl0IHJvdXRlLmNvbXBvbmVudC5nZXRTZXJ2ZXJEYXRhKGxvY2F0aW9uKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHNlcnZlckRhdGE/LnByb3BzLFxuICAgIG5vdEZvdW5kOiBzZXJ2ZXJEYXRhPy5ub3RGb3VuZFxuICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICB7cm91dGVzLm1hcCgocm91dGUsIGluZGV4KSA9PiBcbiAgICAgICAgICA8Um91dGUgXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgZXhhY3Q9e3JvdXRlLmV4YWN0fSBcbiAgICAgICAgICAgIHBhdGg9e3JvdXRlLnBhdGh9XG4gICAgICAgICAgICBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH0+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgKX1cbiAgICAgIDwvU3dpdGNoPiBcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LXNpemU6IDY1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdj5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgIDwvbmF2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUxKTtcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDJweCA4cHggMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICA6Z2xvYmFsKGEpIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gICk7XG5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xuXG4gIHJldHVybiAoXG4gICAgPD4gICAgICAgICBcbiAgICAgIDxIZWFkZXI+XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8Lz5cbiAgKTtcblxufVxuIiwiaW1wb3J0IGxvYWRhYmxlIGZyb20gJ0Bsb2FkYWJsZS9jb21wb25lbnQnO1xuY29uc3QgTm90Rm91bmQgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoJy4vcGFnZXMvNDA0JykpO1xuY29uc3QgSG9tZVBhZ2UgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoJy4vcGFnZXMvaG9tZS1wYWdlJykpO1xuY29uc3QgQWJvdXRQYWdlID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCcuL3BhZ2VzL2Fib3V0LXBhZ2UnKSk7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIGV4YWN0OiB0cnVlLFxuICAgIHBhdGg6ICcvJyxcbiAgICBjb21wb25lbnQ6IEhvbWVQYWdlXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICBjb21wb25lbnQ6IEFib3V0UGFnZVxuICB9LFxuICB7XG4gICAgcGF0aDogJyonLFxuICAgIGNvbXBvbmVudDogTm90Rm91bmRcbiAgfVxuXTsiXSwic291cmNlUm9vdCI6IiJ9