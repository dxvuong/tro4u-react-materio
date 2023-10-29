"use strict";
(() => {
var exports = {};
exports.id = 8751;
exports.ids = [8751];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 69274:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 21668:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 40328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouter": () => (/* reexport default from dynamic */ next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "GlobalError": () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3___default.a),
/* harmony export */   "LayoutRouter": () => (/* reexport default from dynamic */ next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "RenderFromTemplateContext": () => (/* reexport default from dynamic */ next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "__next_app_webpack_require__": () => (/* binding */ __next_app_webpack_require__),
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "renderToReadableStream": () => (/* reexport safe */ next_dist_compiled_react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_7__.renderToReadableStream),
/* harmony export */   "requestAsyncStorage": () => (/* reexport safe */ next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__.requestAsyncStorage),
/* harmony export */   "serverHooks": () => (/* reexport module object */ next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "staticGenerationAsyncStorage": () => (/* reexport safe */ next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__.staticGenerationAsyncStorage),
/* harmony export */   "tree": () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2286);
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65717);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88353);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7340);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79029);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32458);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94065);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dist_compiled_react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68378);

    const tree = {
        children: [
        '',
        {
        children: [
        'components',
        {
        children: [
        'UserTable',
        {
        children: ['', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96534)), "C:\\Users\\sangn\\Desktop\\ADMIN-TEMPLATE\\admin-template\\src\\app\\components\\UserTable\\page.tsx"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14838)), "C:\\Users\\sangn\\Desktop\\ADMIN-TEMPLATE\\admin-template\\src\\app\\layout.tsx"],
'loading': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 59642)), "C:\\Users\\sangn\\Desktop\\ADMIN-TEMPLATE\\admin-template\\src\\app\\loading.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 68059)), "C:\\Users\\sangn\\Desktop\\ADMIN-TEMPLATE\\admin-template\\src\\app\\not-found.tsx"],
          metadata: {
    icon: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 51656))],
    apple: [],
    opengraph: [],
    twitter: [],
  }
        }
      ]
      }.children;
    const pages = ["C:\\Users\\sangn\\Desktop\\ADMIN-TEMPLATE\\admin-template\\src\\app\\components\\UserTable\\page.tsx"];

    
    
    
    

    
    
    

    

    
    const __next_app_webpack_require__ = __webpack_require__
  

/***/ }),

/***/ 96534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54458);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91094);
// import { TableContainer, Paper, Table, TableRow, TableCell, TableBody } from '@mui/material'
// import TableHead from '@mui/material/TableHead/TableHead'
// import React from 'react'
// import "./page.scss"
// function createData(
//     name: string,
//     email: string,
//     date: string,
//     salary: number,
//     age: number,
//   ) {
//     return { name, email, date, salary, age };
//   }
// const rows = [
//     createData('Sally Quinn', "eebsworth2m@sbwire.com", "09/27/2018", 19586.23, 27),
//     createData('Sally Quinn', "kocrevy0@thetimes.co.uk", "09/23/2016", 23896.35, 61),
//     createData('Minnie Roy', "ediehn6@163.com", "10/15/2017", 18991.67, 59),
//     createData('Ralph Leonard', "dfalloona@ifeng.com", "06/12/2018", 19252.12, 30),
//     createData('Annie Martin', "sganderton2@tuttocitta.it", "03/24/2018", 13076.28, 66),
//   ];
// const UserTable = () => {
//   return (
//     <div className='table-container'>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{fontWeight: "bold", }} className="fixed-cell" >NAME</TableCell>
//             <TableCell sx={{fontWeight: "bold", }} align="left">EMAIL</TableCell>
//             <TableCell sx={{fontWeight: "bold", }} align="left">DATE</TableCell>
//             <TableCell sx={{fontWeight: "bold", }} align="left">SALARY</TableCell>
//             <TableCell sx={{fontWeight: "bold", }} align="left">AGE</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.email}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell className="fixed-cell" component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="left">{row.email}</TableCell>
//               <TableCell align="left">{row.date}</TableCell>
//               <TableCell align="left">{row.salary}</TableCell>
//               <TableCell align="left">{row.age}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   )
// }
// export default UserTable


const page = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "page"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7442,6371], () => (__webpack_exec__(40328)));
module.exports = __webpack_exports__;

})();