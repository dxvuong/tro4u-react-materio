exports.id = 9413;
exports.ids = [9413];
exports.modules = {

/***/ 99413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tabAccountSetting_page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(64085);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/TabContext/index.js
var TabContext = __webpack_require__(40782);
var TabContext_default = /*#__PURE__*/__webpack_require__.n(TabContext);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/TabList/index.js
var TabList = __webpack_require__(6438);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/TabPanel/index.js
var TabPanel = __webpack_require__(22356);
var TabPanel_default = /*#__PURE__*/__webpack_require__.n(TabPanel);
// EXTERNAL MODULE: ./public/assets/img/1.png
var _1 = __webpack_require__(40623);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/app/components/tabAccountSetting/page.scss
var page = __webpack_require__(42788);
;// CONCATENATED MODULE: ./public/assets/img/pose.png
/* harmony default export */ const pose = ({"src":"/_next/static/media/pose.09bcd7ac.png","height":548,"width":392,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAV1BMVEVMaXHzwbCkfam0nphwTL1GZdWfgHC5jrG5i3W0jb5fkLrokE2ok7J1UL59XcLassyui/OYdtfYsejRo6bMmnnoyb1qm9C4mf9xr+3huKPLoNP3yrSsivanZi+IAAAAGXRSTlMAoOLE/iQO/k7+gxfbP/u1qv7g4O/e97W7LaFYbAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwdyFsSQCAAQNFL6SGKXhT7X6fJ15k5cNcFUKUZgCmrnzTyek+/Q7RSbivhsboJjq5n4z4vFQHY3q6c7QAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/VpnKeyOutlined.js
var VpnKeyOutlined = __webpack_require__(70954);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/LockOpenOutlined.js
var LockOpenOutlined = __webpack_require__(5416);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/PersonOutlineOutlined.js
var PersonOutlineOutlined = __webpack_require__(68752);
;// CONCATENATED MODULE: ./src/app/components/tabAccountSetting/page.tsx













const TabAccountSetting = ()=>{
    const [value, setValue] = react_default().useState("1");
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    const [role, setRole] = react_default().useState("");
    const [status, setStatus] = react_default().useState("");
    const handleChangeRole = (event)=>{
        setRole(event.target.value);
    };
    const handleChangeStatus = (event)=>{
        setStatus(event.target.value);
    };
    console.log("role selected:", role);
    return /*#__PURE__*/ jsx_runtime_.jsx(node.Paper, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
            sx: {
                width: "100%",
                typography: "body1"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabContext_default()), {
                value: value,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                        sx: {
                            borderBottom: 1,
                            borderColor: "divider"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabList/* default */.Z, {
                            onChange: handleChange,
                            "aria-label": "lab API tabs example",
                            sx: {
                                "& .MuiTabs-indicator": {
                                    backgroundColor: "rgb(128, 75, 223)"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(node.Tab, {
                                    label: "ACCOUNT",
                                    value: "1",
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(PersonOutlineOutlined/* default */.Z, {}),
                                    iconPosition: "start",
                                    style: {
                                        color: "rgb(128, 75, 223)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(node.Tab, {
                                    label: "SECURITY",
                                    value: "2",
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(LockOpenOutlined/* default */.Z, {}),
                                    iconPosition: "start",
                                    style: {
                                        color: "rgb(128, 75, 223)"
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TabPanel_default()), {
                        value: "1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "account-container",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img-info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "avatar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: _1/* default */.Z,
                                                priority: true,
                                                alt: "avatar",
                                                width: 120,
                                                height: 120,
                                                style: {
                                                    borderRadius: "5px"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "actions",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "top",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                                                            style: {
                                                                backgroundColor: "#804BDF",
                                                                color: "#fff",
                                                                height: "36px"
                                                            },
                                                            className: "btn-reponsive",
                                                            variant: "contained",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: " Upload new photo"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                                                            style: {
                                                                color: "red",
                                                                border: "1px solid red",
                                                                width: "90px",
                                                                height: "36px"
                                                            },
                                                            variant: "outlined",
                                                            children: "Reset"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "bottom",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                                        sx: {
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            lineHeight: 1.5,
                                                            color: "rgba(58, 53, 65, 0.68)",
                                                            marginTop: "20px"
                                                        },
                                                        children: "Allowed PNG or JPEG. Max size of 800K."
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "form-info",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                                        container: true,
                                        spacing: 2,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                                                item: true,
                                                xs: 12,
                                                lg: 6,
                                                xl: 6,
                                                className: "form-left",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(node.TextField, {
                                                        sx: {
                                                            margin: "10px 0"
                                                        },
                                                        id: "outlined-basic",
                                                        label: "Username",
                                                        variant: "outlined"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(node.TextField, {
                                                        sx: {
                                                            margin: "10px 0"
                                                        },
                                                        id: "outlined-basic",
                                                        label: "Email",
                                                        variant: "outlined"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.FormControl, {
                                                        fullWidth: true,
                                                        sx: {
                                                            margin: "10px 0"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(node.InputLabel, {
                                                                id: "demo-simple-select-label",
                                                                children: "Status"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Select, {
                                                                labelId: "demo-simple-select-label",
                                                                id: "demo-simple-select",
                                                                value: status,
                                                                label: "Status",
                                                                onChange: handleChangeStatus,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                                                        value: "active",
                                                                        children: "Active"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                                                        value: "inactive",
                                                                        children: "Inactive"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                                                        value: "pending",
                                                                        children: "Pending"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                                                item: true,
                                                xs: 12,
                                                lg: 6,
                                                xl: 6,
                                                className: "form-right",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(node.TextField, {
                                                        sx: {
                                                            margin: "10px 0"
                                                        },
                                                        id: "outlined-basic",
                                                        label: "Name",
                                                        variant: "outlined"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.FormControl, {
                                                        fullWidth: true,
                                                        sx: {
                                                            margin: "10px 0"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(node.InputLabel, {
                                                                id: "demo-simple-select-label",
                                                                children: "Role"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Select, {
                                                                labelId: "demo-simple-select-label",
                                                                id: "demo-simple-select",
                                                                value: role,
                                                                label: "Role",
                                                                onChange: handleChangeRole,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                                                        value: 10,
                                                                        children: "Admin"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                                                        value: 20,
                                                                        children: "Author"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                                                        value: 30,
                                                                        children: "Editor"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                                                        value: 40,
                                                                        children: "Maintainer"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                                                        value: 50,
                                                                        children: "Subcriber"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(node.TextField, {
                                                        sx: {
                                                            margin: "10px 0"
                                                        },
                                                        id: "outlined-basic",
                                                        label: "Company",
                                                        variant: "outlined"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "btn-action",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                                            style: {
                                                backgroundColor: "#804BDF",
                                                color: "#fff",
                                                width: "155px",
                                                height: "36px"
                                            },
                                            variant: "contained",
                                            children: "SAVE CHANGES"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                                            style: {
                                                border: "1px solid #ccc",
                                                color: "#8A8D93",
                                                width: "90",
                                                height: "36px"
                                            },
                                            variant: "outlined",
                                            children: "RESET"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TabPanel_default()), {
                        value: "2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "security-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "top",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                                        container: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                                                item: true,
                                                xs: 12,
                                                lg: 6,
                                                xl: 6,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "left",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(node.TextField, {
                                                            sx: {
                                                                margin: "10px 0"
                                                            },
                                                            id: "outlined-basic",
                                                            label: "Current Password",
                                                            variant: "outlined",
                                                            fullWidth: true
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(node.TextField, {
                                                            sx: {
                                                                margin: "10px 0"
                                                            },
                                                            id: "outlined-basic",
                                                            label: "New Password",
                                                            variant: "outlined",
                                                            fullWidth: true
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(node.TextField, {
                                                            sx: {
                                                                margin: "10px 0"
                                                            },
                                                            id: "outlined-basic",
                                                            label: "Confirm New Password",
                                                            variant: "outlined",
                                                            fullWidth: true
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                                                item: true,
                                                xs: 12,
                                                lg: 6,
                                                xl: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "right",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: pose,
                                                        width: 183,
                                                        height: 256,
                                                        alt: "pose",
                                                        priority: true
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(node.Divider, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bottom",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "access",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(VpnKeyOutlined/* default */.Z, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                                    sx: {
                                                        fontSize: "20px"
                                                    },
                                                    children: "Two-factor authentication"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(LockOpenOutlined/* default */.Z, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                                    sx: {
                                                        fontSize: "18px",
                                                        fontWeight: "600"
                                                    },
                                                    children: "Two factor authentication is not enabled yet."
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Typography, {
                                                    sx: {
                                                        fontSize: "15px",
                                                        color: "rgba(58, 53, 65, 0.68);"
                                                    },
                                                    children: [
                                                        "Two-factor authentication adds an additional layer of ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        "security to your account by requiring more than just a",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        "password to log in. Learn more."
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "actions",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                                                    style: {
                                                        backgroundColor: "#804BDF",
                                                        color: "#fff",
                                                        width: "155px",
                                                        height: "36px"
                                                    },
                                                    variant: "contained",
                                                    children: "SAVE CHANGES"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                                                    style: {
                                                        border: "1px solid #ccc",
                                                        color: "#8A8D93",
                                                        width: "90",
                                                        height: "36px"
                                                    },
                                                    variant: "outlined",
                                                    children: "RESET"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const tabAccountSetting_page = (TabAccountSetting);


/***/ }),

/***/ 42788:
/***/ (() => {



/***/ })

};
;