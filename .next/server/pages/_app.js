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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            const storedToken = localStorage.getItem('token');\n            const storedUser = JSON.parse(localStorage.getItem('user'));\n            if (storedToken && storedUser) {\n                setToken(storedToken);\n                setUser(storedUser);\n                axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common['x-auth-token'] = storedToken;\n            }\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    const login = async (email, password)=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/api/auth/login', {\n                email,\n                password\n            });\n            localStorage.setItem('token', res.data.token);\n            localStorage.setItem('user', JSON.stringify(res.data.user));\n            setToken(res.data.token);\n            setUser(res.data.user);\n            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common['x-auth-token'] = res.data.token;\n            router.push('/');\n        } catch (error) {\n            console.error('Login failed', error);\n            throw error;\n        }\n    };\n    const register = async (userData)=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/api/auth/register', userData);\n            localStorage.setItem('token', res.data.token);\n            localStorage.setItem('user', JSON.stringify(res.data.user));\n            setToken(res.data.token);\n            setUser(res.data.user);\n            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common['x-auth-token'] = res.data.token;\n            router.push('/');\n        } catch (error) {\n            console.error('Registration failed', error);\n            throw error;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            token,\n            login,\n            register,\n            isAuthenticated: !!token\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\saloni\\\\appraisal-system\\\\client\\\\context\\\\AuthContext.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0U7QUFDeEM7QUFDYztBQUVqQyxNQUFNTSw0QkFBY0wsb0RBQWFBLEdBQUc7QUFFcEMsTUFBTU0sZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1XLFNBQVNSLHNEQUFTQTtJQUV4QkYsZ0RBQVNBO2tDQUFDO1lBQ1IsTUFBTVcsY0FBY0MsYUFBYUMsT0FBTyxDQUFDO1lBQ3pDLE1BQU1DLGFBQWFDLEtBQUtDLEtBQUssQ0FBQ0osYUFBYUMsT0FBTyxDQUFDO1lBRW5ELElBQUlGLGVBQWVHLFlBQVk7Z0JBQzdCTCxTQUFTRTtnQkFDVEosUUFBUU87Z0JBQ1JiLHNEQUFjLENBQUNpQixPQUFPLENBQUNDLE1BQU0sQ0FBQyxlQUFlLEdBQUdSO1lBQ2xEO1FBQ0Y7aUNBQUcsRUFBRTtJQUVMLE1BQU1TLFFBQVEsT0FBT0MsT0FBT0M7UUFDMUIsSUFBSTtZQUNGLE1BQU1DLE1BQU0sTUFBTXRCLGtEQUFVLENBQUMsbUJBQW1CO2dCQUFFb0I7Z0JBQU9DO1lBQVM7WUFDbEVWLGFBQWFhLE9BQU8sQ0FBQyxTQUFTRixJQUFJRyxJQUFJLENBQUNsQixLQUFLO1lBQzVDSSxhQUFhYSxPQUFPLENBQUMsUUFBUVYsS0FBS1ksU0FBUyxDQUFDSixJQUFJRyxJQUFJLENBQUNwQixJQUFJO1lBRXpERyxTQUFTYyxJQUFJRyxJQUFJLENBQUNsQixLQUFLO1lBQ3ZCRCxRQUFRZ0IsSUFBSUcsSUFBSSxDQUFDcEIsSUFBSTtZQUVyQkwsc0RBQWMsQ0FBQ2lCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsR0FBR0ksSUFBSUcsSUFBSSxDQUFDbEIsS0FBSztZQUM5REUsT0FBT2tCLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0JBQWdCQTtZQUM5QixNQUFNQTtRQUNSO0lBQ0Y7SUFFQSxNQUFNRSxXQUFXLE9BQU9DO1FBQ3RCLElBQUk7WUFDRixNQUFNVCxNQUFNLE1BQU10QixrREFBVSxDQUFDLHNCQUFzQitCO1lBQ25EcEIsYUFBYWEsT0FBTyxDQUFDLFNBQVNGLElBQUlHLElBQUksQ0FBQ2xCLEtBQUs7WUFDNUNJLGFBQWFhLE9BQU8sQ0FBQyxRQUFRVixLQUFLWSxTQUFTLENBQUNKLElBQUlHLElBQUksQ0FBQ3BCLElBQUk7WUFFekRHLFNBQVNjLElBQUlHLElBQUksQ0FBQ2xCLEtBQUs7WUFDdkJELFFBQVFnQixJQUFJRyxJQUFJLENBQUNwQixJQUFJO1lBRXJCTCxzREFBYyxDQUFDaUIsT0FBTyxDQUFDQyxNQUFNLENBQUMsZUFBZSxHQUFHSSxJQUFJRyxJQUFJLENBQUNsQixLQUFLO1lBQzlERSxPQUFPa0IsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx1QkFBdUJBO1lBQ3JDLE1BQU1BO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDMUIsWUFBWThCLFFBQVE7UUFBQ0MsT0FBTztZQUMzQjVCO1lBQ0FFO1lBQ0FZO1lBQ0FXO1lBQ0FJLGlCQUFpQixDQUFDLENBQUMzQjtRQUNyQjtrQkFDR0g7Ozs7OztBQUdQLEVBQUUiLCJzb3VyY2VzIjpbIkQ6XFxzYWxvbmlcXGFwcHJhaXNhbC1zeXN0ZW1cXGNsaWVudFxcY29udGV4dFxcQXV0aENvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBjb25zdCBzdG9yZWRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuICAgIFxyXG4gICAgaWYgKHN0b3JlZFRva2VuICYmIHN0b3JlZFVzZXIpIHtcclxuICAgICAgc2V0VG9rZW4oc3RvcmVkVG9rZW4pO1xyXG4gICAgICBzZXRVc2VyKHN0b3JlZFVzZXIpO1xyXG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsneC1hdXRoLXRva2VuJ10gPSBzdG9yZWRUb2tlbjtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hdXRoL2xvZ2luJywgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlcy5kYXRhLnRva2VuKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS51c2VyKSk7XHJcbiAgICAgIFxyXG4gICAgICBzZXRUb2tlbihyZXMuZGF0YS50b2tlbik7XHJcbiAgICAgIHNldFVzZXIocmVzLmRhdGEudXNlcik7XHJcbiAgICAgIFxyXG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsneC1hdXRoLXRva2VuJ10gPSByZXMuZGF0YS50b2tlbjtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGZhaWxlZCcsIGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAodXNlckRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvYXV0aC9yZWdpc3RlcicsIHVzZXJEYXRhKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLmRhdGEudG9rZW4pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLnVzZXIpKTtcclxuICAgICAgXHJcbiAgICAgIHNldFRva2VuKHJlcy5kYXRhLnRva2VuKTtcclxuICAgICAgc2V0VXNlcihyZXMuZGF0YS51c2VyKTtcclxuICAgICAgXHJcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWyd4LWF1dGgtdG9rZW4nXSA9IHJlcy5kYXRhLnRva2VuO1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGZhaWxlZCcsIGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBcclxuICAgICAgdXNlciwgXHJcbiAgICAgIHRva2VuLCBcclxuICAgICAgbG9naW4sIFxyXG4gICAgICByZWdpc3RlcixcclxuICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIXRva2VuIFxyXG4gICAgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInRva2VuIiwic2V0VG9rZW4iLCJyb3V0ZXIiLCJzdG9yZWRUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRVc2VyIiwiSlNPTiIsInBhcnNlIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzIiwicG9zdCIsInNldEl0ZW0iLCJkYXRhIiwic3RyaW5naWZ5IiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsInJlZ2lzdGVyIiwidXNlckRhdGEiLCJQcm92aWRlciIsInZhbHVlIiwiaXNBdXRoZW50aWNhdGVkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n//import { ToastContainer } from 'react-toastify'\n//import 'react-toastify/dist/ReactToastify.css'\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\saloni\\\\appraisal-system\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\saloni\\\\appraisal-system\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDdUI7QUFDckQsaURBQWlEO0FBQ2pELGdEQUFnRDtBQUVoRCxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSCw4REFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFJOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsiRDpcXHNhbG9uaVxcYXBwcmFpc2FsLXN5c3RlbVxcY2xpZW50XFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCdcclxuLy9pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG4vL2ltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIFxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();