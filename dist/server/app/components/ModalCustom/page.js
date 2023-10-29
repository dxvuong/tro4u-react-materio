"use strict";
(() => {
var exports = {};
exports.id = 3411;
exports.ids = [3411];
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

/***/ 67863:
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
        'ModalCustom',
        {
        children: ['', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 53428)), "C:\\Users\\sangn\\Desktop\\ADMIN-TEMPLATE\\admin-template\\src\\app\\components\\ModalCustom\\page.tsx"],
          
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
    const pages = ["C:\\Users\\sangn\\Desktop\\ADMIN-TEMPLATE\\admin-template\\src\\app\\components\\ModalCustom\\page.tsx"];

    
    
    
    

    
    
    

    

    
    const __next_app_webpack_require__ = __webpack_require__
  

/***/ }),

/***/ 53428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54458);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91094);
// import {
//   DialogTitle,
//   IconButton,
//   DialogContent,
//   Typography,
//   DialogActions,
//   Button,
//   Dialog,
//   styled,
// } from "@mui/material";
// import React from "react";
// import CloseIcon from "@mui/icons-material/Close";
// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(3),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(2),
//   },
// }));
//   return (
//     <div>
//       <BootstrapDialog
//         onClose={isClose}
//         aria-labelledby="customized-dialog-title"
//         open={isOpen}
//       >
//         <DialogTitle sx={{ m: 0, p: 3 }} id="customized-dialog-title">
//           Modal title
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={isClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogContent dividers>
//           <Typography gutterBottom>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
//             ac consectetur ac, vestibulum at eros.
//           </Typography>
//           <Typography gutterBottom>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
//             Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
//             auctor.
//           </Typography>
//           <Typography gutterBottom>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
//             cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
//             dui. Donec ullamcorper nulla non metus auctor fringilla.
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button variant="contained" autoFocus onClick={isClose}>
//             Save changes
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </div>
//   );
// };
// export default ModalCustom;


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
var __webpack_exports__ = __webpack_require__.X(0, [7442,6371], () => (__webpack_exec__(67863)));
module.exports = __webpack_exports__;

})();