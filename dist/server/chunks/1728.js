"use strict";
exports.id = 1728;
exports.ids = [1728];
exports.modules = {

/***/ 5416:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(27574);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(30935));
var _jsxRuntime = __webpack_require__(56786);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
}), 'LockOpenOutlined');
exports.Z = _default;

/***/ }),

/***/ 70954:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(27574);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(30935));
var _jsxRuntime = __webpack_require__(56786);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M22 19h-6v-4h-2.68c-1.14 2.42-3.6 4-6.32 4-3.86 0-7-3.14-7-7s3.14-7 7-7c2.72 0 5.17 1.58 6.32 4H24v6h-2v4zm-4-2h2v-4h2v-2H11.94l-.23-.67C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
}), 'VpnKeyOutlined');
exports.Z = _default;

/***/ }),

/***/ 91191:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = TabContext;
exports.getPanelId = getPanelId;
exports.getTabId = getTabId;
exports.useTabContext = useTabContext;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @type {React.Context<{ idPrefix: string; value: string } | null>}
 */const Context = /*#__PURE__*/React.createContext(null);
if (false) {}
function useUniquePrefix() {
  const [id, setId] = React.useState(null);
  React.useEffect(() => {
    setId(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}
function TabContext(props) {
  const {
    children,
    value
  } = props;
  const idPrefix = useUniquePrefix();
  const context = React.useMemo(() => {
    return {
      idPrefix,
      value
    };
  }, [idPrefix, value]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Context.Provider, {
    value: context,
    children: children
  });
}
 false ? 0 : void 0;

/**
 * @returns {unknown}
 */
function useTabContext() {
  return React.useContext(Context);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-T-${value}`;
}

/***/ }),

/***/ 40782:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _TabContext.default;
  }
}));
var _TabContext = _interopRequireWildcard(__webpack_require__(91191));
Object.keys(_TabContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabContext[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 88052:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _Tabs = _interopRequireDefault(__webpack_require__(90206));
var _TabContext = __webpack_require__(40782);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const TabList = /*#__PURE__*/React.forwardRef(function TabList(props, ref) {
  const {
      children: childrenProp
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const context = (0, _TabContext.useTabContext)();
  if (context === null) {
    throw new TypeError('No TabContext provided');
  }
  const children = React.Children.map(childrenProp, child => {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return null;
    }
    return /*#__PURE__*/React.cloneElement(child, {
      // SOMEDAY: `Tabs` will set those themselves
      'aria-controls': (0, _TabContext.getPanelId)(context, child.props.value),
      id: (0, _TabContext.getTabId)(context, child.props.value)
    });
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.default, (0, _extends2.default)({}, other, {
    ref: ref,
    value: context.value,
    children: children
  }));
});
 false ? 0 : void 0;
var _default = exports["default"] = TabList;

/***/ }),

/***/ 6438:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(27574);
__webpack_unused_export__ = ({
  value: true
});
Object.defineProperty(exports, "Z", ({
  enumerable: true,
  get: function () {
    return _TabList.default;
  }
}));
var _TabList = _interopRequireDefault(__webpack_require__(88052));

/***/ }),

/***/ 76373:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _clsx = _interopRequireDefault(__webpack_require__(14889));
var _styles = __webpack_require__(22166);
var _base = __webpack_require__(68068);
var _tabPanelClasses = __webpack_require__(66714);
var _TabContext = __webpack_require__(40782);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["children", "className", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0, _base.unstable_composeClasses)(slots, _tabPanelClasses.getTabPanelUtilityClass, classes);
};
const TabPanelRoot = (0, _styles.styled)('div', {
  name: 'MuiTabPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
const TabPanel = /*#__PURE__*/React.forwardRef(function TabPanel(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiTabPanel'
  });
  const {
      children,
      className,
      value
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props);
  const classes = useUtilityClasses(ownerState);
  const context = (0, _TabContext.useTabContext)();
  if (context === null) {
    throw new TypeError('No TabContext provided');
  }
  const id = (0, _TabContext.getPanelId)(context, value);
  const tabId = (0, _TabContext.getTabId)(context, value);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanelRoot, (0, _extends2.default)({
    "aria-labelledby": tabId,
    className: (0, _clsx.default)(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    ownerState: ownerState
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
var _default = exports["default"] = TabPanel;

/***/ }),

/***/ 22356:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  tabPanelClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _TabPanel.default;
  }
}));
Object.defineProperty(exports, "tabPanelClasses", ({
  enumerable: true,
  get: function () {
    return _tabPanelClasses.default;
  }
}));
var _TabPanel = _interopRequireDefault(__webpack_require__(76373));
var _tabPanelClasses = _interopRequireWildcard(__webpack_require__(66714));
Object.keys(_tabPanelClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabPanelClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabPanelClasses[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 66714:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getTabPanelUtilityClass = getTabPanelUtilityClass;
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(62736));
var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(32434));
function getTabPanelUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiTabPanel', slot);
}
const tabPanelClasses = (0, _generateUtilityClasses.default)('MuiTabPanel', ['root']);
var _default = exports["default"] = tabPanelClasses;

/***/ }),

/***/ 85877:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Badge = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _composeClasses = __webpack_require__(66676);
var _useBadge = __webpack_require__(41138);
var _badgeClasses = __webpack_require__(45084);
var _utils = __webpack_require__(36610);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["badgeContent", "children", "invisible", "max", "slotProps", "slots", "showZero"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    invisible
  } = ownerState;
  const slots = {
    root: ['root'],
    badge: ['badge', invisible && 'invisible']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_badgeClasses.getBadgeUtilityClass));
};
/**
 *
 * Demos:
 *
 * - [Badge](https://mui.com/base-ui/react-badge/)
 *
 * API:
 *
 * - [Badge API](https://mui.com/base-ui/react-badge/components-api/#badge)
 */
const Badge = exports.Badge = /*#__PURE__*/React.forwardRef(function Badge(props, forwardedRef) {
  var _slots$root, _slots$badge;
  const {
      children,
      max: maxProp = 99,
      slotProps = {},
      slots = {},
      showZero = false
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    badgeContent,
    max,
    displayValue,
    invisible
  } = (0, _useBadge.useBadge)((0, _extends2.default)({}, props, {
    max: maxProp
  }));
  const ownerState = (0, _extends2.default)({}, props, {
    badgeContent,
    invisible,
    max,
    showZero
  });
  const classes = useUtilityClasses(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'span';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const BadgeComponent = (_slots$badge = slots.badge) != null ? _slots$badge : 'span';
  const badgeProps = (0, _utils.useSlotProps)({
    elementType: BadgeComponent,
    externalSlotProps: slotProps.badge,
    ownerState,
    className: classes.badge
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(BadgeComponent, (0, _extends2.default)({}, badgeProps, {
      children: displayValue
    }))]
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 64884:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 45084:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.badgeClasses = void 0;
exports.getBadgeUtilityClass = getBadgeUtilityClass;
var _generateUtilityClasses = __webpack_require__(6419);
var _generateUtilityClass = __webpack_require__(21923);
function getBadgeUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiBadge', slot);
}
const badgeClasses = exports.badgeClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiBadge', ['root', 'badge', 'invisible']);

/***/ }),

/***/ 90434:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Badge: true
};
Object.defineProperty(exports, "Badge", ({
  enumerable: true,
  get: function () {
    return _Badge.Badge;
  }
}));
var _Badge = __webpack_require__(85877);
var _Badge2 = __webpack_require__(64884);
Object.keys(_Badge2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Badge2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Badge2[key];
    }
  });
});
var _badgeClasses = __webpack_require__(45084);
Object.keys(_badgeClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _badgeClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _badgeClasses[key];
    }
  });
});

/***/ }),

/***/ 78010:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Button = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _composeClasses = __webpack_require__(66676);
var _buttonClasses = __webpack_require__(38192);
var _useButton = __webpack_require__(64877);
var _utils = __webpack_require__(36610);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["action", "children", "disabled", "focusableWhenDisabled", "onFocusVisible", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    active,
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', active && 'active']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_buttonClasses.getButtonUtilityClass));
};
/**
 * The foundation for building custom-styled buttons.
 *
 * Demos:
 *
 * - [Button](https://mui.com/base-ui/react-button/)
 *
 * API:
 *
 * - [Button API](https://mui.com/base-ui/react-button/components-api/#button)
 */
const Button = exports.Button = /*#__PURE__*/React.forwardRef(function Button(props, forwardedRef) {
  var _slots$root;
  const {
      action,
      children,
      focusableWhenDisabled = false,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const buttonRef = React.useRef();
  const {
    active,
    focusVisible,
    setFocusVisible,
    getRootProps
  } = (0, _useButton.useButton)((0, _extends2.default)({}, props, {
    focusableWhenDisabled
  }));
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = (0, _extends2.default)({}, props, {
    active,
    focusableWhenDisabled,
    focusVisible
  });
  const classes = useUtilityClasses(ownerState);
  const defaultElement = other.href || other.to ? 'a' : 'button';
  const Root = (_slots$root = slots.root) != null ? _slots$root : defaultElement;
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: children
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 10265:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 38192:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.buttonClasses = void 0;
exports.getButtonUtilityClass = getButtonUtilityClass;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getButtonUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiButton', slot);
}
const buttonClasses = exports.buttonClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiButton', ['root', 'active', 'disabled', 'focusVisible']);

/***/ }),

/***/ 22275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Button: true
};
Object.defineProperty(exports, "Button", ({
  enumerable: true,
  get: function () {
    return _Button.Button;
  }
}));
var _Button = __webpack_require__(78010);
var _buttonClasses = __webpack_require__(38192);
Object.keys(_buttonClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _buttonClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _buttonClasses[key];
    }
  });
});
var _Button2 = __webpack_require__(10265);
Object.keys(_Button2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Button2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Button2[key];
    }
  });
});

/***/ }),

/***/ 22161:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ClickAwayListener = ClickAwayListener;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// TODO: return `EventHandlerName extends `on${infer EventName}` ? Lowercase<EventName> : never` once generatePropTypes runs with TS 4.1
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 *
 * Demos:
 *
 * - [Click-Away Listener](https://mui.com/base-ui/react-click-away-listener/)
 *
 * API:
 *
 * - [ClickAwayListener API](https://mui.com/base-ui/react-click-away-listener/components-api/#click-away-listener)
 */
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = 'onClick',
    onClickAway,
    touchEvent = 'onTouchEnd'
  } = props;
  const movedRef = React.useRef(false);
  const nodeRef = React.useRef(null);
  const activatedRef = React.useRef(false);
  const syntheticEventRef = React.useRef(false);
  React.useEffect(() => {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = (0, _utils.unstable_useForkRef)(
  // @ts-expect-error TODO upstream fix
  children.ref, nodeRef);

  // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviors like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.
  const handleClickAway = (0, _utils.unstable_useEventCallback)(event => {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = (0, _utils.unstable_ownerDocument)(nodeRef.current);

    // 1. IE11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.
    if (!activatedRef.current || !nodeRef.current || 'clientX' in event && clickedRootScrollbar(event, doc)) {
      return;
    }

    // Do not act if user performed touchmove
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;

    // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      event.target) || nodeRef.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      event.target);
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });

  // Keep track of mouse/touch events that bubbled up through the portal.
  const createHandleSynthetic = handlerName => event => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  React.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = (0, _utils.unstable_ownerDocument)(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }
    return undefined;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  React.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = (0, _utils.unstable_ownerDocument)(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return undefined;
  }, [handleClickAway, mouseEvent]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
    children: /*#__PURE__*/React.cloneElement(children, childrenProps)
  });
}
 false ? 0 : void 0;
if (false) {}

/***/ }),

/***/ 9381:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _ClickAwayListener = __webpack_require__(22161);
Object.keys(_ClickAwayListener).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ClickAwayListener[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ClickAwayListener[key];
    }
  });
});

/***/ }),

/***/ 96497:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Dropdown = Dropdown;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _DropdownContext = __webpack_require__(15611);
var _useDropdown = __webpack_require__(43403);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base-ui/react-menu/)
 *
 * API:
 *
 * - [Dropdown API](https://mui.com/base-ui/react-menu/components-api/#dropdown)
 */function Dropdown(props) {
  const {
    children,
    open,
    defaultOpen,
    onOpenChange
  } = props;
  const {
    contextValue
  } = (0, _useDropdown.useDropdown)({
    defaultOpen,
    onOpenChange,
    open
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownContext.DropdownContext.Provider, {
    value: contextValue,
    children: children
  });
}
 false ? 0 : void 0;
if (false) {}

/***/ }),

/***/ 3373:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 73220:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _Dropdown = __webpack_require__(96497);
Object.keys(_Dropdown).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Dropdown[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Dropdown[key];
    }
  });
});
var _Dropdown2 = __webpack_require__(3373);
Object.keys(_Dropdown2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Dropdown2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Dropdown2[key];
    }
  });
});

/***/ }),

/***/ 94563:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */
var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FocusTrap = FocusTrap;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }

  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.
  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node: node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}

/**
 * Utility component that locks focus inside the component.
 *
 * Demos:
 *
 * - [Focus Trap](https://mui.com/base-ui/react-focus-trap/)
 *
 * API:
 *
 * - [FocusTrap API](https://mui.com/base-ui/react-focus-trap/components-api/#focus-trap)
 */
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = React.useRef(false);
  const sentinelStart = React.useRef(null);
  const sentinelEnd = React.useRef(null);
  const nodeToRestore = React.useRef(null);
  const reactFocusEventTarget = React.useRef(null);
  // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.
  const activated = React.useRef(false);
  const rootRef = React.useRef(null);
  // @ts-expect-error TODO upstream fix
  const handleRef = (0, _utils.unstable_useForkRef)(children.ref, rootRef);
  const lastKeydown = React.useRef(null);
  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = (0, _utils.unstable_ownerDocument)(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (false) {}
        rootRef.current.setAttribute('tabIndex', '-1');
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
    // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open FocusTrap
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = (0, _utils.unstable_ownerDocument)(rootRef.current);
    const loopFocus = nativeEvent => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      }

      // Make sure the next tab starts from the right place.
      // doc.activeElement refers to the origin.
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      const rootElement = rootRef.current;

      // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      // The focus is already inside
      if (rootElement.contains(doc.activeElement)) {
        return;
      }

      // The disableEnforceFocus is set and the focus is outside of the focus trap (and sentinel nodes)
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }

      // if the focus event is not coming from inside the children's react tree, reset the refs
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }

      // one of the sentinel nodes was focused, so move the focus
      // to the first/last tabbable element inside the focus trap
      if (tabbable.length > 0) {
        var _lastKeydown$current, _lastKeydown$current2;
        const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
        // no tabbable elements in the trap focus or the focus was outside of the focus trap
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true);

    // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /*#__PURE__*/React.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
 false ? 0 : void 0;
if (false) {}

/***/ }),

/***/ 81527:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 29827:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  FocusTrap: true
};
Object.defineProperty(exports, "FocusTrap", ({
  enumerable: true,
  get: function () {
    return _FocusTrap.FocusTrap;
  }
}));
var _FocusTrap = __webpack_require__(94563);
var _FocusTrap2 = __webpack_require__(81527);
Object.keys(_FocusTrap2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FocusTrap2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FocusTrap2[key];
    }
  });
});

/***/ }),

/***/ 5314:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FormControl = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _useControlled = _interopRequireDefault(__webpack_require__(73390));
var _FormControlContext = __webpack_require__(55494);
var _formControlClasses = __webpack_require__(58124);
var _utils = __webpack_require__(36610);
var _composeClasses = __webpack_require__(66676);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["defaultValue", "children", "disabled", "error", "onChange", "required", "slotProps", "slots", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0) && value !== '';
}
function useUtilityClasses(ownerState) {
  const {
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focused && 'focused', error && 'error', filled && 'filled', required && 'required']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_formControlClasses.getFormControlUtilityClass));
}

/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 * *   FormLabel
 * *   FormHelperText
 * *   Input
 * *   InputLabel
 *
 * You can find one composition example below and more going to [the demos](https://mui.com/material-ui/react-text-field/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️ Only one `Input` can be used within a FormControl because it create visual inconsistencies.
 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
 *
 * Demos:
 *
 * - [Form Control](https://mui.com/base-ui/react-form-control/)
 * - [Input](https://mui.com/joy-ui/react-input/)
 * - [Checkbox](https://mui.com/material-ui/react-checkbox/)
 * - [Radio Group](https://mui.com/material-ui/react-radio-button/)
 * - [Switch](https://mui.com/material-ui/react-switch/)
 * - [Text Field](https://mui.com/material-ui/react-text-field/)
 *
 * API:
 *
 * - [FormControl API](https://mui.com/base-ui/react-form-control/components-api/#form-control)
 */
const FormControl = exports.FormControl = /*#__PURE__*/React.forwardRef(function FormControl(props, forwardedRef) {
  var _slots$root;
  const {
      defaultValue,
      children,
      disabled = false,
      error = false,
      onChange,
      required = false,
      slotProps = {},
      slots = {},
      value: incomingValue
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const [value, setValue] = (0, _useControlled.default)({
    controlled: incomingValue,
    default: defaultValue,
    name: 'FormControl',
    state: 'value'
  });
  const filled = hasValue(value);
  const [focusedState, setFocused] = React.useState(false);
  const focused = focusedState && !disabled;
  React.useEffect(() => setFocused(isFocused => disabled ? false : isFocused), [disabled]);
  const ownerState = (0, _extends2.default)({}, props, {
    disabled,
    error,
    filled,
    focused,
    required
  });
  const childContext = React.useMemo(() => {
    return {
      disabled,
      error,
      filled,
      focused,
      onBlur: () => {
        setFocused(false);
      },
      onChange: event => {
        setValue(event.target.value);
        onChange == null || onChange(event);
      },
      onFocus: () => {
        setFocused(true);
      },
      required,
      value: value != null ? value : ''
    };
  }, [disabled, error, filled, focused, onChange, required, setValue, value]);
  const classes = useUtilityClasses(ownerState);
  const renderChildren = () => {
    if (typeof children === 'function') {
      return children(childContext);
    }
    return children;
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef,
      children: renderChildren()
    },
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlContext.FormControlContext.Provider, {
    value: childContext,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps))
  });
});
 false ? 0 : void 0;

/***/ }),

/***/ 55494:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FormControlContext = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @ignore - internal component.
 */
const FormControlContext = exports.FormControlContext = /*#__PURE__*/React.createContext(undefined);
if (false) {}

/***/ }),

/***/ 58124:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.formControlClasses = void 0;
exports.getFormControlUtilityClass = getFormControlUtilityClass;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getFormControlUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiFormControl', slot);
}
const formControlClasses = exports.formControlClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiFormControl', ['root', 'disabled', 'error', 'filled', 'focused', 'required']);

/***/ }),

/***/ 39541:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  FormControl: true,
  FormControlContext: true,
  useFormControlContext: true
};
Object.defineProperty(exports, "FormControl", ({
  enumerable: true,
  get: function () {
    return _FormControl.FormControl;
  }
}));
Object.defineProperty(exports, "FormControlContext", ({
  enumerable: true,
  get: function () {
    return _FormControlContext.FormControlContext;
  }
}));
Object.defineProperty(exports, "useFormControlContext", ({
  enumerable: true,
  get: function () {
    return _useFormControlContext.useFormControlContext;
  }
}));
var _FormControl = __webpack_require__(5314);
var _FormControlContext = __webpack_require__(55494);
var _formControlClasses = __webpack_require__(58124);
Object.keys(_formControlClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _formControlClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formControlClasses[key];
    }
  });
});
var _useFormControlContext = __webpack_require__(77095);

/***/ }),

/***/ 77095:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useFormControlContext = useFormControlContext;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _FormControlContext = __webpack_require__(55494);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 *
 * Demos:
 *
 * - [Form Control](https://mui.com/base-ui/react-form-control/#hook)
 *
 * API:
 *
 * - [useFormControlContext API](https://mui.com/base-ui/react-form-control/hooks-api/#use-form-control-context)
 */
function useFormControlContext() {
  return React.useContext(_FormControlContext.FormControlContext);
}

/***/ }),

/***/ 46294:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Input = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _isHostComponent = __webpack_require__(26695);
var _inputClasses = __webpack_require__(68185);
var _useInput = __webpack_require__(38407);
var _utils = __webpack_require__(36610);
var _composeClasses = __webpack_require__(66676);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "defaultValue", "disabled", "endAdornment", "error", "id", "multiline", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "startAdornment", "value", "type", "rows", "slotProps", "slots", "minRows", "maxRows"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    disabled,
    error,
    focused,
    formControlContext,
    multiline,
    startAdornment,
    endAdornment
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', error && 'error', focused && 'focused', Boolean(formControlContext) && 'formControl', multiline && 'multiline', Boolean(startAdornment) && 'adornedStart', Boolean(endAdornment) && 'adornedEnd'],
    input: ['input', disabled && 'disabled', multiline && 'multiline']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_inputClasses.getInputUtilityClass));
};

/**
 *
 * Demos:
 *
 * - [Input](https://mui.com/base-ui/react-input/)
 *
 * API:
 *
 * - [Input API](https://mui.com/base-ui/react-input/components-api/#input)
 */
const Input = exports.Input = /*#__PURE__*/React.forwardRef(function Input(props, forwardedRef) {
  var _slots$root, _slots$textarea, _slots$input;
  const {
      'aria-describedby': ariaDescribedby,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      autoComplete,
      autoFocus,
      className,
      defaultValue,
      disabled,
      endAdornment,
      error,
      id,
      multiline = false,
      name,
      onClick,
      onChange,
      onKeyDown,
      onKeyUp,
      onFocus,
      onBlur,
      placeholder,
      readOnly,
      required,
      startAdornment,
      value,
      type: typeProp,
      rows,
      slotProps = {},
      slots = {},
      minRows,
      maxRows
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    getRootProps,
    getInputProps,
    focused,
    formControlContext,
    error: errorState,
    disabled: disabledState
  } = (0, _useInput.useInput)({
    disabled,
    defaultValue,
    error,
    onBlur,
    onClick,
    onChange,
    onFocus,
    required,
    value
  });
  const type = !multiline ? typeProp != null ? typeProp : 'text' : undefined;
  const ownerState = (0, _extends2.default)({}, props, {
    disabled: disabledState,
    error: errorState,
    focused,
    formControlContext,
    multiline,
    type
  });
  const classes = useUtilityClasses(ownerState);
  const propsToForward = {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoComplete,
    autoFocus,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: [classes.root, className]
  });
  const InputComponent = multiline ? (_slots$textarea = slots.textarea) != null ? _slots$textarea : 'textarea' : (_slots$input = slots.input) != null ? _slots$input : 'input';
  const inputProps = (0, _utils.useSlotProps)({
    elementType: InputComponent,
    getSlotProps: otherHandlers => {
      return getInputProps((0, _extends2.default)({}, propsToForward, otherHandlers));
    },
    externalSlotProps: slotProps.input,
    additionalProps: (0, _extends2.default)({
      rows: multiline ? rows : undefined
    }, multiline && !(0, _isHostComponent.isHostComponent)(InputComponent) && {
      minRows: rows || minRows,
      maxRows: rows || maxRows
    }),
    ownerState,
    className: classes.input
  });
  if (false) {}
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [startAdornment, /*#__PURE__*/(0, _jsxRuntime.jsx)(InputComponent, (0, _extends2.default)({}, inputProps)), endAdornment]
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 19387:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 13223:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Input: true
};
Object.defineProperty(exports, "Input", ({
  enumerable: true,
  get: function () {
    return _Input.Input;
  }
}));
var _Input = __webpack_require__(46294);
var _Input2 = __webpack_require__(19387);
Object.keys(_Input2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Input2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Input2[key];
    }
  });
});
var _inputClasses = __webpack_require__(68185);
Object.keys(_inputClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _inputClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _inputClasses[key];
    }
  });
});

/***/ }),

/***/ 68185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getInputUtilityClass = getInputUtilityClass;
exports.inputClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getInputUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiInput', slot);
}
const inputClasses = exports.inputClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiInput', ['root', 'formControl', 'focused', 'disabled', 'error', 'multiline', 'input', 'inputMultiline', 'inputTypeSearch', 'adornedStart', 'adornedEnd']);

/***/ }),

/***/ 13973:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MenuButton = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(36610);
var _useMenuButton = __webpack_require__(30396);
var _composeClasses = __webpack_require__(66676);
var _ClassNameConfigurator = __webpack_require__(55383);
var _menuButtonClasses = __webpack_require__(48615);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["children", "disabled", "label", "slots", "slotProps", "focusableWhenDisabled"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    active,
    disabled,
    open
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', active && 'active', open && 'expanded']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_menuButtonClasses.getMenuButtonUtilityClass));
};

/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base-ui/react-menu/)
 *
 * API:
 *
 * - [MenuButton API](https://mui.com/base-ui/react-menu/components-api/#menu-button)
 */
const MenuButton = exports.MenuButton = /*#__PURE__*/React.forwardRef(function MenuButton(props, forwardedRef) {
  const {
      children,
      disabled = false,
      slots = {},
      slotProps = {},
      focusableWhenDisabled = false
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    getRootProps,
    open,
    active
  } = (0, _useMenuButton.useMenuButton)({
    disabled,
    focusableWhenDisabled,
    rootRef: forwardedRef
  });
  const ownerState = (0, _extends2.default)({}, props, {
    open,
    active,
    disabled,
    focusableWhenDisabled
  });
  const classes = useUtilityClasses(ownerState);
  const Root = slots.root || 'button';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef,
      type: 'button'
    },
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: children
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 20811:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 24751:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  MenuButton: true
};
Object.defineProperty(exports, "MenuButton", ({
  enumerable: true,
  get: function () {
    return _MenuButton.MenuButton;
  }
}));
var _MenuButton = __webpack_require__(13973);
var _MenuButton2 = __webpack_require__(20811);
Object.keys(_MenuButton2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MenuButton2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MenuButton2[key];
    }
  });
});
var _menuButtonClasses = __webpack_require__(48615);
Object.keys(_menuButtonClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _menuButtonClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _menuButtonClasses[key];
    }
  });
});

/***/ }),

/***/ 48615:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMenuButtonUtilityClass = getMenuButtonUtilityClass;
exports.menuButtonClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getMenuButtonUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiMenuButton', slot);
}
const menuButtonClasses = exports.menuButtonClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiMenuButton', ['root', 'active', 'disabled', 'expanded']);

/***/ }),

/***/ 65400:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MenuItem = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _menuItemClasses = __webpack_require__(3139);
var _useMenuItem = __webpack_require__(78857);
var _composeClasses = __webpack_require__(66676);
var _useSlotProps = __webpack_require__(31994);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["children", "disabled", "label", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useUtilityClasses(ownerState) {
  const {
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_menuItemClasses.getMenuItemUtilityClass));
}

/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base-ui/react-menu/)
 *
 * API:
 *
 * - [MenuItem API](https://mui.com/base-ui/react-menu/components-api/#menu-item)
 */
const MenuItem = exports.MenuItem = /*#__PURE__*/React.forwardRef(function MenuItem(props, forwardedRef) {
  var _slots$root;
  const {
      children,
      disabled: disabledProp = false,
      label,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    getRootProps,
    disabled,
    focusVisible,
    highlighted
  } = (0, _useMenuItem.useMenuItem)({
    disabled: disabledProp,
    rootRef: forwardedRef,
    label
  });
  const ownerState = (0, _extends2.default)({}, props, {
    disabled,
    focusVisible,
    highlighted
  });
  const classes = useUtilityClasses(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'li';
  const rootProps = (0, _useSlotProps.useSlotProps)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: children
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 14599:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 61290:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  MenuItem: true
};
Object.defineProperty(exports, "MenuItem", ({
  enumerable: true,
  get: function () {
    return _MenuItem.MenuItem;
  }
}));
var _MenuItem = __webpack_require__(65400);
var _MenuItem2 = __webpack_require__(14599);
Object.keys(_MenuItem2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MenuItem2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MenuItem2[key];
    }
  });
});
var _menuItemClasses = __webpack_require__(3139);
Object.keys(_menuItemClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _menuItemClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _menuItemClasses[key];
    }
  });
});

/***/ }),

/***/ 3139:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMenuItemUtilityClass = getMenuItemUtilityClass;
exports.menuItemClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getMenuItemUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiMenuItem', slot);
}
const menuItemClasses = exports.menuItemClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiMenuItem', ['root', 'disabled', 'focusVisible']);

/***/ }),

/***/ 76254:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Menu = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _menuClasses = __webpack_require__(51801);
var _useMenu = __webpack_require__(17319);
var _MenuProvider = __webpack_require__(89423);
var _composeClasses = __webpack_require__(66676);
var _Popper = __webpack_require__(33841);
var _useSlotProps = __webpack_require__(31994);
var _ClassNameConfigurator = __webpack_require__(55383);
var _useList = __webpack_require__(63080);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["actions", "anchor", "children", "onItemsChange", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useUtilityClasses(ownerState) {
  const {
    open
  } = ownerState;
  const slots = {
    root: ['root', open && 'expanded'],
    listbox: ['listbox', open && 'expanded']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_menuClasses.getMenuUtilityClass));
}

/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base-ui/react-menu/)
 *
 * API:
 *
 * - [Menu API](https://mui.com/base-ui/react-menu/components-api/#menu)
 */
const Menu = exports.Menu = /*#__PURE__*/React.forwardRef(function Menu(props, forwardedRef) {
  var _slots$root, _slots$listbox;
  const {
      actions,
      anchor: anchorProp,
      children,
      onItemsChange,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    contextValue,
    getListboxProps,
    dispatch,
    open,
    triggerElement
  } = (0, _useMenu.useMenu)({
    onItemsChange
  });
  const anchor = anchorProp != null ? anchorProp : triggerElement;
  React.useImperativeHandle(actions, () => ({
    dispatch,
    resetHighlight: () => dispatch({
      type: _useList.ListActionTypes.resetHighlight,
      event: null
    })
  }), [dispatch]);
  const ownerState = (0, _extends2.default)({}, props, {
    open
  });
  const classes = useUtilityClasses(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const rootProps = (0, _useSlotProps.useSlotProps)({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef,
      role: undefined
    },
    className: classes.root,
    ownerState
  });
  const Listbox = (_slots$listbox = slots.listbox) != null ? _slots$listbox : 'ul';
  const listboxProps = (0, _useSlotProps.useSlotProps)({
    elementType: Listbox,
    getSlotProps: getListboxProps,
    externalSlotProps: slotProps.listbox,
    className: classes.listbox,
    ownerState
  });
  if (open === true && anchor == null) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Listbox, (0, _extends2.default)({}, listboxProps, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuProvider.MenuProvider, {
          value: contextValue,
          children: children
        })
      }))
    }));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popper.Popper, (0, _extends2.default)({}, rootProps, {
    open: open,
    anchorEl: anchor,
    slots: {
      root: Root
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Listbox, (0, _extends2.default)({}, listboxProps, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuProvider.MenuProvider, {
        value: contextValue,
        children: children
      })
    }))
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 24611:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 10275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Menu: true
};
Object.defineProperty(exports, "Menu", ({
  enumerable: true,
  get: function () {
    return _Menu.Menu;
  }
}));
var _Menu = __webpack_require__(76254);
var _menuClasses = __webpack_require__(51801);
Object.keys(_menuClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _menuClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _menuClasses[key];
    }
  });
});
var _Menu2 = __webpack_require__(24611);
Object.keys(_Menu2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Menu2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Menu2[key];
    }
  });
});

/***/ }),

/***/ 51801:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMenuUtilityClass = getMenuUtilityClass;
exports.menuClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getMenuUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiMenu', slot);
}
const menuClasses = exports.menuClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiMenu', ['root', 'listbox', 'expanded']);

/***/ }),

/***/ 26754:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Modal = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _utils2 = __webpack_require__(36610);
var _ClassNameConfigurator = __webpack_require__(55383);
var _composeClasses = __webpack_require__(66676);
var _Portal = __webpack_require__(70783);
var _unstable_useModal = __webpack_require__(23871);
var _FocusTrap = __webpack_require__(29827);
var _modalClasses = __webpack_require__(86544);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    open,
    exited
  } = ownerState;
  const slots = {
    root: ['root', !open && exited && 'hidden'],
    backdrop: ['backdrop']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_modalClasses.getModalUtilityClass));
};

/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * *   [Dialog](https://mui.com/material-ui/api/dialog/)
 * *   [Drawer](https://mui.com/material-ui/api/drawer/)
 * *   [Menu](https://mui.com/material-ui/api/menu/)
 * *   [Popover](https://mui.com/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](https://mui.com/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 *
 * Demos:
 *
 * - [Modal](https://mui.com/base-ui/react-modal/)
 *
 * API:
 *
 * - [Modal API](https://mui.com/base-ui/react-modal/components-api/#modal)
 */
const Modal = exports.Modal = /*#__PURE__*/React.forwardRef(function Modal(props, forwardedRef) {
  var _slots$root;
  const {
      children,
      closeAfterTransition = false,
      container,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      onBackdropClick,
      open,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const propsWithDefaults = (0, _extends2.default)({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  });
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = (0, _unstable_useModal.unstable_useModal)((0, _extends2.default)({}, propsWithDefaults, {
    rootRef: forwardedRef
  }));
  const ownerState = (0, _extends2.default)({}, propsWithDefaults, {
    exited,
    hasTransition
  });
  const classes = useUtilityClasses(ownerState);
  const childProps = {};
  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = '-1';
  }

  // It's a Transition like component
  if (hasTransition) {
    const {
      onEnter,
      onExited
    } = getTransitionProps();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const rootProps = (0, _utils2.useSlotProps)({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    getSlotProps: getRootProps,
    className: classes.root,
    ownerState
  });
  const BackdropComponent = slots.backdrop;
  const backdropProps = (0, _utils2.useSlotProps)({
    elementType: BackdropComponent,
    externalSlotProps: slotProps.backdrop,
    getSlotProps: otherHandlers => {
      return getBackdropProps((0, _extends2.default)({}, otherHandlers, {
        onClick: e => {
          if (onBackdropClick) {
            onBackdropClick(e);
          }
          if (otherHandlers != null && otherHandlers.onClick) {
            otherHandlers.onClick(e);
          }
        }
      }));
    },
    className: classes.backdrop,
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Portal.Portal, {
    ref: portalRef,
    container: container,
    disablePortal: disablePortal,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/(0, _jsxRuntime.jsx)(BackdropComponent, (0, _extends2.default)({}, backdropProps)) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_FocusTrap.FocusTrap, {
        disableEnforceFocus: disableEnforceFocus,
        disableAutoFocus: disableAutoFocus,
        disableRestoreFocus: disableRestoreFocus,
        isEnabled: isTopModal,
        open: open,
        children: /*#__PURE__*/React.cloneElement(children, childProps)
      })]
    }))
  });
});
 false ? 0 : void 0;

/***/ }),

/***/ 23956:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 36150:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Modal: true
};
Object.defineProperty(exports, "Modal", ({
  enumerable: true,
  get: function () {
    return _Modal.Modal;
  }
}));
var _Modal = __webpack_require__(26754);
var _Modal2 = __webpack_require__(23956);
Object.keys(_Modal2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Modal2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Modal2[key];
    }
  });
});
var _modalClasses = __webpack_require__(86544);
Object.keys(_modalClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _modalClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _modalClasses[key];
    }
  });
});

/***/ }),

/***/ 86544:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getModalUtilityClass = getModalUtilityClass;
exports.modalClasses = void 0;
var _generateUtilityClasses = __webpack_require__(6419);
var _generateUtilityClass = __webpack_require__(21923);
function getModalUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiModal', slot);
}
const modalClasses = exports.modalClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiModal', ['root', 'hidden', 'backdrop']);

/***/ }),

/***/ 67543:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NoSsr = NoSsr;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
 *
 * This component can be useful in a variety of situations:
 *
 * *   Escape hatch for broken dependencies not supporting SSR.
 * *   Improve the time-to-first paint on the client by only rendering above the fold.
 * *   Reduce the rendering time on the server.
 * *   Under too heavy server load, you can turn on service degradation.
 *
 * Demos:
 *
 * - [No SSR](https://mui.com/base-ui/react-no-ssr/)
 *
 * API:
 *
 * - [NoSsr API](https://mui.com/base-ui/react-no-ssr/components-api/#no-ssr)
 */
function NoSsr(props) {
  const {
    children,
    defer = false,
    fallback = null
  } = props;
  const [mountedState, setMountedState] = React.useState(false);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  React.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);

  // We need the Fragment here to force react-docgen to recognise NoSsr as a component.
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
    children: mountedState ? children : fallback
  });
}
 false ? 0 : void 0;
if (false) {}

/***/ }),

/***/ 62549:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 99204:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  NoSsr: true
};
Object.defineProperty(exports, "NoSsr", ({
  enumerable: true,
  get: function () {
    return _NoSsr.NoSsr;
  }
}));
var _NoSsr = __webpack_require__(67543);
var _NoSsr2 = __webpack_require__(62549);
Object.keys(_NoSsr2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _NoSsr2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _NoSsr2[key];
    }
  });
});

/***/ }),

/***/ 23375:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OptionGroup = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _composeClasses = __webpack_require__(66676);
var _optionGroupClasses = __webpack_require__(70764);
var _utils = __webpack_require__(36610);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["disabled", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useUtilityClasses(disabled) {
  const slots = {
    root: ['root', disabled && 'disabled'],
    label: ['label'],
    list: ['list']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_optionGroupClasses.getOptionGroupUtilityClass));
}

/**
 * An unstyled option group to be used within a Select.
 *
 * Demos:
 *
 * - [Select](https://mui.com/base-ui/react-select/)
 *
 * API:
 *
 * - [OptionGroup API](https://mui.com/base-ui/react-select/components-api/#option-group)
 */
const OptionGroup = exports.OptionGroup = /*#__PURE__*/React.forwardRef(function OptionGroup(props, forwardedRef) {
  const {
      disabled = false,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const Root = (slots == null ? void 0 : slots.root) || 'li';
  const Label = (slots == null ? void 0 : slots.label) || 'span';
  const List = (slots == null ? void 0 : slots.list) || 'ul';
  const classes = useUtilityClasses(disabled);
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState: props,
    className: classes.root
  });
  const labelProps = (0, _utils.useSlotProps)({
    elementType: Label,
    externalSlotProps: slotProps.label,
    ownerState: props,
    className: classes.label
  });
  const listProps = (0, _utils.useSlotProps)({
    elementType: List,
    externalSlotProps: slotProps.list,
    ownerState: props,
    className: classes.list
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Label, (0, _extends2.default)({}, labelProps, {
      children: props.label
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(List, (0, _extends2.default)({}, listProps, {
      children: props.children
    }))]
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 80532:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 36906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  OptionGroup: true
};
Object.defineProperty(exports, "OptionGroup", ({
  enumerable: true,
  get: function () {
    return _OptionGroup.OptionGroup;
  }
}));
var _OptionGroup = __webpack_require__(23375);
var _OptionGroup2 = __webpack_require__(80532);
Object.keys(_OptionGroup2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _OptionGroup2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _OptionGroup2[key];
    }
  });
});
var _optionGroupClasses = __webpack_require__(70764);
Object.keys(_optionGroupClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _optionGroupClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _optionGroupClasses[key];
    }
  });
});

/***/ }),

/***/ 70764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getOptionGroupUtilityClass = getOptionGroupUtilityClass;
exports.optionGroupClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getOptionGroupUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiOptionGroup', slot);
}
const optionGroupClasses = exports.optionGroupClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiOptionGroup', ['root', 'disabled', 'label', 'list']);

/***/ }),

/***/ 8359:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Option = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _composeClasses = __webpack_require__(66676);
var _optionClasses = __webpack_require__(6081);
var _utils2 = __webpack_require__(36610);
var _useOption = __webpack_require__(29199);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["children", "disabled", "label", "slotProps", "slots", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useUtilityClasses(ownerState) {
  const {
    disabled,
    highlighted,
    selected
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', highlighted && 'highlighted', selected && 'selected']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_optionClasses.getOptionUtilityClass));
}

/**
 * An unstyled option to be used within a Select.
 *
 * Demos:
 *
 * - [Select](https://mui.com/base-ui/react-select/)
 *
 * API:
 *
 * - [Option API](https://mui.com/base-ui/react-select/components-api/#option)
 */
const Option = exports.Option = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function Option(props, forwardedRef) {
  var _slots$root, _optionRef$current;
  const {
      children,
      disabled = false,
      label,
      slotProps = {},
      slots = {},
      value
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'li';
  const optionRef = React.useRef(null);
  const combinedRef = (0, _utils.unstable_useForkRef)(optionRef, forwardedRef);

  // If `label` is not explicitly provided, the `children` are used for convenience.
  // This is used to populate the select's trigger with the selected option's label.
  const computedLabel = label != null ? label : typeof children === 'string' ? children : (_optionRef$current = optionRef.current) == null ? void 0 : _optionRef$current.innerText;
  const {
    getRootProps,
    selected,
    highlighted,
    index
  } = (0, _useOption.useOption)({
    disabled,
    label: computedLabel,
    rootRef: combinedRef,
    value
  });
  const ownerState = (0, _extends2.default)({}, props, {
    disabled,
    highlighted,
    index,
    selected
  });
  const classes = useUtilityClasses(ownerState);
  const rootProps = (0, _utils2.useSlotProps)({
    getSlotProps: getRootProps,
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: children
  }));
}));
 false ? 0 : void 0;

/***/ }),

/***/ 59562:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 90698:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Option: true
};
Object.defineProperty(exports, "Option", ({
  enumerable: true,
  get: function () {
    return _Option.Option;
  }
}));
var _Option = __webpack_require__(8359);
var _Option2 = __webpack_require__(59562);
Object.keys(_Option2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Option2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Option2[key];
    }
  });
});
var _optionClasses = __webpack_require__(6081);
Object.keys(_optionClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _optionClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _optionClasses[key];
    }
  });
});

/***/ }),

/***/ 6081:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getOptionUtilityClass = getOptionUtilityClass;
exports.optionClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getOptionUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiOption', slot);
}
const optionClasses = exports.optionClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiOption', ['root', 'disabled', 'selected', 'highlighted']);

/***/ }),

/***/ 49254:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Popper = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _core = __webpack_require__(31163);
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _composeClasses = __webpack_require__(66676);
var _Portal = __webpack_require__(70783);
var _popperClasses = __webpack_require__(35424);
var _utils2 = __webpack_require__(36610);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"],
  _excluded2 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function flipPlacement(placement, direction) {
  if (direction === 'ltr') {
    return placement;
  }
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
function isHTMLElement(element) {
  return element.nodeType !== undefined;
}
function isVirtualElement(element) {
  return !isHTMLElement(element);
}
const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_popperClasses.getPopperUtilityClass));
};
const defaultPopperOptions = {};
const PopperTooltip = /*#__PURE__*/React.forwardRef(function PopperTooltip(props, forwardedRef) {
  var _slots$root;
  const {
      anchorEl,
      children,
      direction,
      disablePortal,
      modifiers,
      open,
      placement: initialPlacement,
      popperOptions,
      popperRef: popperRefProp,
      slotProps = {},
      slots = {},
      TransitionProps
      // @ts-ignore internal logic
      // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const tooltipRef = React.useRef(null);
  const ownRef = (0, _utils.unstable_useForkRef)(tooltipRef, forwardedRef);
  const popperRef = React.useRef(null);
  const handlePopperRef = (0, _utils.unstable_useForkRef)(popperRef, popperRefProp);
  const handlePopperRefRef = React.useRef(handlePopperRef);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */
  const [placement, setPlacement] = React.useState(rtlPlacement);
  const [resolvedAnchorElement, setResolvedAnchorElement] = React.useState(resolveAnchorEl(anchorEl));
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  React.useEffect(() => {
    if (anchorEl) {
      setResolvedAnchorElement(resolveAnchorEl(anchorEl));
    }
  }, [anchorEl]);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (!resolvedAnchorElement || !open) {
      return undefined;
    }
    const handlePopperUpdate = data => {
      setPlacement(data.placement);
    };
    if (false) {}
    let popperModifiers = [{
      name: 'preventOverflow',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'flip',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'onUpdate',
      enabled: true,
      phase: 'afterWrite',
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper = (0, _core.createPopper)(resolvedAnchorElement, tooltipRef.current, (0, _extends2.default)({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    handlePopperRefRef.current(popper);
    return () => {
      popper.destroy();
      handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement: placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  const classes = useUtilityClasses();
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const rootProps = (0, _utils2.useSlotProps)({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: 'tooltip',
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: typeof children === 'function' ? children(childProps) : children
  }));
});

/**
 * Poppers rely on the 3rd party library [Popper.js](https://popper.js.org/docs/v2/) for positioning.
 *
 * Demos:
 *
 * - [Popper](https://mui.com/base-ui/react-popper/)
 *
 * API:
 *
 * - [Popper API](https://mui.com/base-ui/react-popper/components-api/#popper)
 */
const Popper = exports.Popper = /*#__PURE__*/React.forwardRef(function Popper(props, forwardedRef) {
  const {
      anchorEl,
      children,
      container: containerProp,
      direction = 'ltr',
      disablePortal = false,
      keepMounted = false,
      modifiers,
      open,
      placement = 'bottom',
      popperOptions = defaultPopperOptions,
      popperRef,
      style,
      transition = false,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded2);
  const [exited, setExited] = React.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container
  let container;
  if (containerProp) {
    container = containerProp;
  } else if (anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? (0, _utils.unstable_ownerDocument)(resolvedAnchorEl).body : (0, _utils.unstable_ownerDocument)(null).body;
  }
  const display = !open && keepMounted && (!transition || exited) ? 'none' : undefined;
  const transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : undefined;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Portal.Portal, {
    disablePortal: disablePortal,
    container: container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PopperTooltip, (0, _extends2.default)({
      anchorEl: anchorEl,
      direction: direction,
      disablePortal: disablePortal,
      modifiers: modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement: placement,
      popperOptions: popperOptions,
      popperRef: popperRef,
      slotProps: slotProps,
      slots: slots
    }, other, {
      style: (0, _extends2.default)({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: 'fixed',
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display
      }, style),
      TransitionProps: transitionProps,
      children: children
    }))
  });
});
 false ? 0 : void 0;

/***/ }),

/***/ 33841:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Popper", ({
  enumerable: true,
  get: function () {
    return _Popper.Popper;
  }
}));
Object.defineProperty(exports, "getPopperUtilityClass", ({
  enumerable: true,
  get: function () {
    return _popperClasses.getPopperUtilityClass;
  }
}));
Object.defineProperty(exports, "popperClasses", ({
  enumerable: true,
  get: function () {
    return _popperClasses.popperClasses;
  }
}));
var _Popper = __webpack_require__(49254);
var _popperClasses = __webpack_require__(35424);

/***/ }),

/***/ 35424:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPopperUtilityClass = getPopperUtilityClass;
exports.popperClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getPopperUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiPopper', slot);
}
const popperClasses = exports.popperClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiPopper', ['root']);

/***/ }),

/***/ 36987:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Portal = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var ReactDOM = _interopRequireWildcard(__webpack_require__(98704));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * Demos:
 *
 * - [Portal](https://mui.com/base-ui/react-portal/)
 *
 * API:
 *
 * - [Portal API](https://mui.com/base-ui/react-portal/components-api/#portal)
 */
const Portal = exports.Portal = /*#__PURE__*/React.forwardRef(function Portal(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React.useState(null);
  // @ts-expect-error TODO upstream fix
  const handleRef = (0, _utils.unstable_useForkRef)( /*#__PURE__*/React.isValidElement(children) ? children.ref : null, forwardedRef);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (mountNode && !disablePortal) {
      (0, _utils.unstable_setRef)(forwardedRef, mountNode);
      return () => {
        (0, _utils.unstable_setRef)(forwardedRef, null);
      };
    }
    return undefined;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if ( /*#__PURE__*/React.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /*#__PURE__*/React.cloneElement(children, newProps);
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
      children: children
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
    children: mountNode ? /*#__PURE__*/ReactDOM.createPortal(children, mountNode) : mountNode
  });
});
 false ? 0 : void 0;
if (false) {}

/***/ }),

/***/ 11977:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 70783:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Portal: true
};
Object.defineProperty(exports, "Portal", ({
  enumerable: true,
  get: function () {
    return _Portal.Portal;
  }
}));
var _Portal = __webpack_require__(36987);
var _Portal2 = __webpack_require__(11977);
Object.keys(_Portal2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Portal2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Portal2[key];
    }
  });
});

/***/ }),

/***/ 56000:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Select = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _useSelect = __webpack_require__(11909);
var _utils2 = __webpack_require__(36610);
var _Popper = __webpack_require__(33841);
var _composeClasses = __webpack_require__(66676);
var _selectClasses = __webpack_require__(99474);
var _defaultOptionStringifier = __webpack_require__(18312);
var _ClassNameConfigurator = __webpack_require__(55383);
var _SelectProvider = __webpack_require__(42463);
var _jsxRuntime = __webpack_require__(56786);
var _span;
const _excluded = ["areOptionsEqual", "autoFocus", "children", "defaultValue", "defaultListboxOpen", "disabled", "getSerializedValue", "listboxId", "listboxOpen", "multiple", "name", "required", "onChange", "onListboxOpenChange", "getOptionAsString", "renderValue", "placeholder", "slotProps", "slots", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function defaultRenderValue(selectedOptions) {
  var _selectedOptions$labe;
  if (Array.isArray(selectedOptions)) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
      children: selectedOptions.map(o => o.label).join(', ')
    });
  }
  return (_selectedOptions$labe = selectedOptions == null ? void 0 : selectedOptions.label) != null ? _selectedOptions$labe : null;
}
function useUtilityClasses(ownerState) {
  const {
    active,
    disabled,
    open,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', active && 'active', open && 'expanded'],
    listbox: ['listbox', disabled && 'disabled'],
    popper: ['popper']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_selectClasses.getSelectUtilityClass));
}

/**
 * The foundation for building custom-styled select components.
 *
 * Demos:
 *
 * - [Select](https://mui.com/base-ui/react-select/)
 *
 * API:
 *
 * - [Select API](https://mui.com/base-ui/react-select/components-api/#select)
 */
const Select = exports.Select = /*#__PURE__*/React.forwardRef(function Select(props, forwardedRef) {
  var _slots$root, _slots$listbox, _slots$popper, _ref, _renderValue;
  const {
      areOptionsEqual,
      autoFocus,
      children,
      defaultValue,
      defaultListboxOpen = false,
      disabled: disabledProp,
      getSerializedValue,
      listboxId,
      listboxOpen: listboxOpenProp,
      multiple = false,
      name,
      required = false,
      onChange,
      onListboxOpenChange,
      getOptionAsString = _defaultOptionStringifier.defaultOptionStringifier,
      renderValue: renderValueProp,
      placeholder,
      slotProps = {},
      slots = {},
      value: valueProp
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const renderValue = renderValueProp != null ? renderValueProp : defaultRenderValue;
  const [buttonDefined, setButtonDefined] = React.useState(false);
  const buttonRef = React.useRef(null);
  const listboxRef = React.useRef(null);
  const Button = (_slots$root = slots.root) != null ? _slots$root : 'button';
  const ListboxRoot = (_slots$listbox = slots.listbox) != null ? _slots$listbox : 'ul';
  const PopperComponent = (_slots$popper = slots.popper) != null ? _slots$popper : _Popper.Popper;
  const handleButtonRefChange = React.useCallback(element => {
    setButtonDefined(element != null);
  }, []);
  const handleButtonRef = (0, _utils.unstable_useForkRef)(forwardedRef, buttonRef, handleButtonRefChange);
  React.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);
  const {
    buttonActive,
    buttonFocusVisible,
    contextValue,
    disabled,
    getButtonProps,
    getListboxProps,
    getHiddenInputProps,
    getOptionMetadata,
    value,
    open
  } = (0, _useSelect.useSelect)({
    name,
    required,
    getSerializedValue,
    areOptionsEqual,
    buttonRef: handleButtonRef,
    defaultOpen: defaultListboxOpen,
    defaultValue,
    disabled: disabledProp,
    listboxId,
    multiple,
    open: listboxOpenProp,
    onChange,
    onOpenChange: onListboxOpenChange,
    getOptionAsString,
    value: valueProp
  });
  const ownerState = (0, _extends2.default)({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open,
    multiple,
    renderValue,
    value
  });
  const classes = useUtilityClasses(ownerState);
  const buttonProps = (0, _utils2.useSlotProps)({
    elementType: Button,
    getSlotProps: getButtonProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  const listboxProps = (0, _utils2.useSlotProps)({
    elementType: ListboxRoot,
    getSlotProps: getListboxProps,
    externalSlotProps: slotProps.listbox,
    additionalProps: {
      ref: listboxRef
    },
    ownerState,
    className: classes.listbox
  });
  const popperProps = (0, _utils2.useSlotProps)({
    elementType: PopperComponent,
    externalSlotProps: slotProps.popper,
    additionalProps: {
      anchorEl: buttonRef.current,
      keepMounted: true,
      open,
      placement: 'bottom-start',
      role: undefined
    },
    ownerState,
    className: classes.popper
  });
  let selectedOptionsMetadata;
  if (multiple) {
    selectedOptionsMetadata = value.map(v => getOptionMetadata(v)).filter(o => o !== undefined);
  } else {
    var _getOptionMetadata;
    selectedOptionsMetadata = (_getOptionMetadata = getOptionMetadata(value)) != null ? _getOptionMetadata : null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Button, (0, _extends2.default)({}, buttonProps, {
      children: (_ref = (_renderValue = renderValue(selectedOptionsMetadata)) != null ? _renderValue : placeholder) != null ? _ref : // fall back to a zero-width space to prevent layout shift
      // from https://github.com/mui/material-ui/pull/24563
      _span || (_span = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "notranslate",
        children: "\u200B"
      }))
    })), buttonDefined && /*#__PURE__*/(0, _jsxRuntime.jsx)(PopperComponent, (0, _extends2.default)({}, popperProps, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ListboxRoot, (0, _extends2.default)({}, listboxProps, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectProvider.SelectProvider, {
          value: contextValue,
          children: children
        })
      }))
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", (0, _extends2.default)({}, getHiddenInputProps()))]
  });
});
 false ? 0 : void 0;

/***/ }),

/***/ 51207:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 50339:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Select: true
};
Object.defineProperty(exports, "Select", ({
  enumerable: true,
  get: function () {
    return _Select.Select;
  }
}));
var _Select = __webpack_require__(56000);
var _selectClasses = __webpack_require__(99474);
Object.keys(_selectClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _selectClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _selectClasses[key];
    }
  });
});
var _Select2 = __webpack_require__(51207);
Object.keys(_Select2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Select2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Select2[key];
    }
  });
});

/***/ }),

/***/ 99474:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSelectUtilityClass = getSelectUtilityClass;
exports.selectClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getSelectUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiSelect', slot);
}
const selectClasses = exports.selectClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiSelect', ['root', 'button', 'listbox', 'popper', 'active', 'expanded', 'disabled', 'focusVisible']);

/***/ }),

/***/ 73170:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Slider = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _clsx = _interopRequireDefault(__webpack_require__(14889));
var _utils = __webpack_require__(90480);
var _isHostComponent = __webpack_require__(26695);
var _composeClasses = __webpack_require__(66676);
var _sliderClasses = __webpack_require__(87480);
var _useSlider = __webpack_require__(7415);
var _useSlotProps = __webpack_require__(31994);
var _resolveComponentProps = __webpack_require__(38191);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["aria-label", "aria-valuetext", "aria-labelledby", "className", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelFormat", "isRtl", "defaultValue", "slotProps", "slots"]; // @ts-ignore
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Identity(x) {
  return x;
}
const useUtilityClasses = ownerState => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', dragging && 'dragging', marked && 'marked', orientation === 'vertical' && 'vertical', track === 'inverted' && 'trackInverted', track === false && 'trackFalse'],
    rail: ['rail'],
    track: ['track'],
    mark: ['mark'],
    markActive: ['markActive'],
    markLabel: ['markLabel'],
    markLabelActive: ['markLabelActive'],
    valueLabel: ['valueLabel'],
    thumb: ['thumb', disabled && 'disabled'],
    active: ['active'],
    disabled: ['disabled'],
    focusVisible: ['focusVisible']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_sliderClasses.getSliderUtilityClass));
};

/**
 *
 * Demos:
 *
 * - [Slider](https://mui.com/base-ui/react-slider/)
 *
 * API:
 *
 * - [Slider API](https://mui.com/base-ui/react-slider/components-api/#slider)
 */
const Slider = exports.Slider = /*#__PURE__*/React.forwardRef(function Slider(props, forwardedRef) {
  var _slots$root, _slots$rail, _slots$track, _slots$thumb, _slots$mark, _slots$markLabel;
  const {
      'aria-label': ariaLabel,
      'aria-valuetext': ariaValuetext,
      'aria-labelledby': ariaLabelledby,
      className,
      disableSwap = false,
      disabled = false,
      getAriaLabel,
      getAriaValueText,
      marks: marksProp = false,
      max = 100,
      min = 0,
      orientation = 'horizontal',
      scale = Identity,
      step = 1,
      track = 'normal',
      valueLabelFormat = Identity,
      isRtl = false,
      defaultValue,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);

  // all props with defaults
  // consider extracting to hook an reusing the lint rule for the variants
  const partialOwnerState = (0, _extends2.default)({}, props, {
    marks: marksProp,
    disabled,
    disableSwap,
    isRtl,
    defaultValue,
    max,
    min,
    orientation,
    scale,
    step,
    track,
    valueLabelFormat
  });
  const {
    axisProps,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    active,
    axis,
    range,
    focusedThumbIndex,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap,
    getThumbStyle
  } = (0, _useSlider.useSlider)((0, _extends2.default)({}, partialOwnerState, {
    rootRef: forwardedRef
  }));
  const ownerState = (0, _extends2.default)({}, partialOwnerState, {
    marked: marks.length > 0 && marks.some(mark => mark.label),
    dragging,
    focusedThumbIndex,
    activeThumbIndex: active
  });
  const classes = useUtilityClasses(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'span';
  const rootProps = (0, _useSlotProps.useSlotProps)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: [classes.root, className]
  });
  const Rail = (_slots$rail = slots.rail) != null ? _slots$rail : 'span';
  const railProps = (0, _useSlotProps.useSlotProps)({
    elementType: Rail,
    externalSlotProps: slotProps.rail,
    ownerState,
    className: classes.rail
  });
  const Track = (_slots$track = slots.track) != null ? _slots$track : 'span';
  const trackProps = (0, _useSlotProps.useSlotProps)({
    elementType: Track,
    externalSlotProps: slotProps.track,
    additionalProps: {
      style: (0, _extends2.default)({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap))
    },
    ownerState,
    className: classes.track
  });
  const Thumb = (_slots$thumb = slots.thumb) != null ? _slots$thumb : 'span';
  const thumbProps = (0, _useSlotProps.useSlotProps)({
    elementType: Thumb,
    getSlotProps: getThumbProps,
    externalSlotProps: slotProps.thumb,
    ownerState,
    skipResolvingSlotProps: true
  });
  const ValueLabel = slots.valueLabel;
  const valueLabelProps = (0, _useSlotProps.useSlotProps)({
    elementType: ValueLabel,
    externalSlotProps: slotProps.valueLabel,
    ownerState
  });
  const Mark = (_slots$mark = slots.mark) != null ? _slots$mark : 'span';
  const markProps = (0, _useSlotProps.useSlotProps)({
    elementType: Mark,
    externalSlotProps: slotProps.mark,
    ownerState,
    className: classes.mark
  });
  const MarkLabel = (_slots$markLabel = slots.markLabel) != null ? _slots$markLabel : 'span';
  const markLabelProps = (0, _useSlotProps.useSlotProps)({
    elementType: MarkLabel,
    externalSlotProps: slotProps.markLabel,
    ownerState
  });
  const Input = slots.input || 'input';
  const inputProps = (0, _useSlotProps.useSlotProps)({
    elementType: Input,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: slotProps.input,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Rail, (0, _extends2.default)({}, railProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(Track, (0, _extends2.default)({}, trackProps)), marks.filter(mark => mark.value >= min && mark.value <= max).map((mark, index) => {
      const percent = (0, _useSlider.valueToPercent)(mark.value, min, max);
      const style = axisProps[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Mark, (0, _extends2.default)({
          "data-index": index
        }, markProps, !(0, _isHostComponent.isHostComponent)(Mark) && {
          markActive
        }, {
          style: (0, _extends2.default)({}, style, markProps.style),
          className: (0, _clsx.default)(markProps.className, markActive && classes.markActive)
        })), mark.label != null ? /*#__PURE__*/(0, _jsxRuntime.jsx)(MarkLabel, (0, _extends2.default)({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !(0, _isHostComponent.isHostComponent)(MarkLabel) && {
          markLabelActive: markActive
        }, {
          style: (0, _extends2.default)({}, style, markLabelProps.style),
          className: (0, _clsx.default)(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, index);
    }), values.map((value, index) => {
      const percent = (0, _useSlider.valueToPercent)(value, min, max);
      const style = axisProps[axis].offset(percent);
      const resolvedSlotProps = (0, _resolveComponentProps.resolveComponentProps)(slotProps.thumb, ownerState, {
        index,
        focused: focusedThumbIndex === index,
        active: active === index
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Thumb, (0, _extends2.default)({
        "data-index": index
      }, thumbProps, resolvedSlotProps, {
        className: (0, _clsx.default)(classes.thumb, thumbProps.className, resolvedSlotProps == null ? void 0 : resolvedSlotProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
        style: (0, _extends2.default)({}, style, getThumbStyle(index), thumbProps.style, resolvedSlotProps == null ? void 0 : resolvedSlotProps.style),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Input, (0, _extends2.default)({
          "data-index": index,
          "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
          "aria-valuenow": scale(value),
          "aria-labelledby": ariaLabelledby,
          "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
          value: values[index]
        }, inputProps)), ValueLabel ? /*#__PURE__*/(0, _jsxRuntime.jsx)(ValueLabel, (0, _extends2.default)({}, !(0, _isHostComponent.isHostComponent)(ValueLabel) && {
          valueLabelFormat,
          index,
          disabled
        }, valueLabelProps, {
          children: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat
        })) : null]
      }), index);
    })]
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 67674:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 64467:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Slider: true
};
Object.defineProperty(exports, "Slider", ({
  enumerable: true,
  get: function () {
    return _Slider.Slider;
  }
}));
var _Slider = __webpack_require__(73170);
var _Slider2 = __webpack_require__(67674);
Object.keys(_Slider2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Slider2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Slider2[key];
    }
  });
});
var _sliderClasses = __webpack_require__(87480);
Object.keys(_sliderClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _sliderClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sliderClasses[key];
    }
  });
});

/***/ }),

/***/ 87480:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSliderUtilityClass = getSliderUtilityClass;
exports.sliderClasses = void 0;
var _generateUtilityClasses = __webpack_require__(6419);
var _generateUtilityClass = __webpack_require__(21923);
function getSliderUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiSlider', slot);
}
const sliderClasses = exports.sliderClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiSlider', ['root', 'active', 'focusVisible', 'disabled', 'dragging', 'marked', 'vertical', 'trackInverted', 'trackFalse', 'rail', 'track', 'mark', 'markActive', 'markLabel', 'markLabelActive', 'thumb']);

/***/ }),

/***/ 41048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Snackbar = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _ClickAwayListener = __webpack_require__(9381);
var _composeClasses = __webpack_require__(66676);
var _snackbarClasses = __webpack_require__(29502);
var _useSnackbar = __webpack_require__(84475);
var _utils = __webpack_require__(36610);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["autoHideDuration", "children", "disableWindowBlurListener", "exited", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_snackbarClasses.getSnackbarUtilityClass));
};
/**
 *
 * Demos:
 *
 * - [Snackbar](https://mui.com/base-ui/react-snackbar/)
 * - [Snackbar](https://mui.com/material-ui/react-snackbar/)
 *
 * API:
 *
 * - [Snackbar API](https://mui.com/base-ui/react-snackbar/components-api/#snackbar)
 */
const Snackbar = exports.Snackbar = /*#__PURE__*/React.forwardRef(function Snackbar(props, forwardedRef) {
  const {
      autoHideDuration = null,
      children,
      disableWindowBlurListener = false,
      exited = true,
      onClose,
      open,
      resumeHideDuration,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const classes = useUtilityClasses();
  const {
    getRootProps,
    onClickAway
  } = (0, _useSnackbar.useSnackbar)((0, _extends2.default)({}, props, {
    autoHideDuration,
    disableWindowBlurListener,
    onClose,
    open,
    resumeHideDuration
  }));
  const ownerState = props;
  const Root = slots.root || 'div';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const clickAwayListenerProps = (0, _utils.useSlotProps)({
    elementType: _ClickAwayListener.ClickAwayListener,
    externalSlotProps: slotProps.clickAwayListener,
    additionalProps: {
      onClickAway
    },
    ownerState
  });

  // ClickAwayListener doesn't support ownerState
  delete clickAwayListenerProps.ownerState;

  // So that we only render active snackbars.
  if (!open && exited) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ClickAwayListener.ClickAwayListener, (0, _extends2.default)({}, clickAwayListenerProps, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
      children: children
    }))
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 75670:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 15237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Snackbar: true
};
Object.defineProperty(exports, "Snackbar", ({
  enumerable: true,
  get: function () {
    return _Snackbar.Snackbar;
  }
}));
var _Snackbar = __webpack_require__(41048);
var _Snackbar2 = __webpack_require__(75670);
Object.keys(_Snackbar2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Snackbar2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Snackbar2[key];
    }
  });
});
var _snackbarClasses = __webpack_require__(29502);
Object.keys(_snackbarClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _snackbarClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _snackbarClasses[key];
    }
  });
});

/***/ }),

/***/ 29502:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSnackbarUtilityClass = getSnackbarUtilityClass;
exports.snackbarClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getSnackbarUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiSnackbar', slot);
}
const snackbarClasses = exports.snackbarClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiSnackbar', ['root']);

/***/ }),

/***/ 10054:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Switch = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _composeClasses = __webpack_require__(66676);
var _useSwitch = __webpack_require__(70724);
var _utils = __webpack_require__(36610);
var _ClassNameConfigurator = __webpack_require__(55383);
var _switchClasses = __webpack_require__(74194);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["checked", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    checked,
    disabled,
    focusVisible,
    readOnly
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', focusVisible && 'focusVisible', readOnly && 'readOnly'],
    thumb: ['thumb'],
    input: ['input'],
    track: ['track']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_switchClasses.getSwitchUtilityClass));
};

/**
 * The foundation for building custom-styled switches.
 *
 * Demos:
 *
 * - [Switch](https://mui.com/base-ui/react-switch/)
 *
 * API:
 *
 * - [Switch API](https://mui.com/base-ui/react-switch/components-api/#switch)
 */
const Switch = exports.Switch = /*#__PURE__*/React.forwardRef(function Switch(props, forwardedRef) {
  var _slots$root, _slots$thumb, _slots$input, _slots$track;
  const {
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible,
    readOnly
  } = (0, _useSwitch.useSwitch)(props);
  const ownerState = (0, _extends2.default)({}, props, {
    checked,
    disabled,
    focusVisible,
    readOnly
  });
  const classes = useUtilityClasses(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'span';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const Thumb = (_slots$thumb = slots.thumb) != null ? _slots$thumb : 'span';
  const thumbProps = (0, _utils.useSlotProps)({
    elementType: Thumb,
    externalSlotProps: slotProps.thumb,
    ownerState,
    className: classes.thumb
  });
  const Input = (_slots$input = slots.input) != null ? _slots$input : 'input';
  const inputProps = (0, _utils.useSlotProps)({
    elementType: Input,
    getSlotProps: getInputProps,
    externalSlotProps: slotProps.input,
    ownerState,
    className: classes.input
  });
  const Track = slots.track === null ? () => null : (_slots$track = slots.track) != null ? _slots$track : 'span';
  const trackProps = (0, _utils.useSlotProps)({
    elementType: Track,
    externalSlotProps: slotProps.track,
    ownerState,
    className: classes.track
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Track, (0, _extends2.default)({}, trackProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(Thumb, (0, _extends2.default)({}, thumbProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(Input, (0, _extends2.default)({}, inputProps))]
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 75568:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 94973:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Switch: true
};
Object.defineProperty(exports, "Switch", ({
  enumerable: true,
  get: function () {
    return _Switch.Switch;
  }
}));
var _Switch = __webpack_require__(10054);
var _Switch2 = __webpack_require__(75568);
Object.keys(_Switch2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Switch2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Switch2[key];
    }
  });
});
var _switchClasses = __webpack_require__(74194);
Object.keys(_switchClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _switchClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _switchClasses[key];
    }
  });
});

/***/ }),

/***/ 74194:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSwitchUtilityClass = getSwitchUtilityClass;
exports.switchClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getSwitchUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiSwitch', slot);
}
const switchClasses = exports.switchClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiSwitch', ['root', 'input', 'track', 'thumb', 'checked', 'disabled', 'focusVisible', 'readOnly']);

/***/ }),

/***/ 95639:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TabPanel = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(36610);
var _composeClasses = __webpack_require__(66676);
var _tabPanelClasses = __webpack_require__(285);
var _useTabPanel = __webpack_require__(24058);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["children", "value", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    hidden
  } = ownerState;
  const slots = {
    root: ['root', hidden && 'hidden']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_tabPanelClasses.getTabPanelUtilityClass));
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/)
 *
 * API:
 *
 * - [TabPanel API](https://mui.com/base-ui/react-tabs/components-api/#tab-panel)
 */
const TabPanel = exports.TabPanel = /*#__PURE__*/React.forwardRef(function TabPanel(props, forwardedRef) {
  var _slots$root;
  const {
      children,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    hidden,
    getRootProps
  } = (0, _useTabPanel.useTabPanel)(props);
  const ownerState = (0, _extends2.default)({}, props, {
    hidden
  });
  const classes = useUtilityClasses(ownerState);
  const TabPanelRoot = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const tabPanelRootProps = (0, _utils.useSlotProps)({
    elementType: TabPanelRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: 'tabpanel',
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TabPanelRoot, (0, _extends2.default)({}, tabPanelRootProps, {
    children: !hidden && children
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 96825:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 92874:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  TabPanel: true
};
Object.defineProperty(exports, "TabPanel", ({
  enumerable: true,
  get: function () {
    return _TabPanel.TabPanel;
  }
}));
var _TabPanel = __webpack_require__(95639);
var _TabPanel2 = __webpack_require__(96825);
Object.keys(_TabPanel2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabPanel2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabPanel2[key];
    }
  });
});
var _tabPanelClasses = __webpack_require__(285);
Object.keys(_tabPanelClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabPanelClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabPanelClasses[key];
    }
  });
});

/***/ }),

/***/ 285:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTabPanelUtilityClass = getTabPanelUtilityClass;
exports.tabPanelClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getTabPanelUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiTabPanel', slot);
}
const tabPanelClasses = exports.tabPanelClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiTabPanel', ['root', 'hidden']);

/***/ }),

/***/ 8998:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Tab = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _composeClasses = __webpack_require__(66676);
var _tabClasses = __webpack_require__(54860);
var _useTab = __webpack_require__(15012);
var _utils2 = __webpack_require__(36610);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["action", "children", "value", "disabled", "onChange", "onClick", "onFocus", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', selected && 'selected', disabled && 'disabled']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_tabClasses.getTabUtilityClass));
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/)
 *
 * API:
 *
 * - [Tab API](https://mui.com/base-ui/react-tabs/components-api/#tab)
 */
const Tab = exports.Tab = /*#__PURE__*/React.forwardRef(function Tab(props, forwardedRef) {
  var _slots$root;
  const {
      children,
      disabled = false,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const tabRef = React.useRef();
  const handleRef = (0, _utils.unstable_useForkRef)(tabRef, forwardedRef);
  const {
    active,
    highlighted,
    selected,
    getRootProps
  } = (0, _useTab.useTab)((0, _extends2.default)({}, props, {
    rootRef: handleRef
  }));
  const ownerState = (0, _extends2.default)({}, props, {
    active,
    disabled,
    highlighted,
    selected
  });
  const classes = useUtilityClasses(ownerState);
  const TabRoot = (_slots$root = slots.root) != null ? _slots$root : 'button';
  const tabRootProps = (0, _utils2.useSlotProps)({
    elementType: TabRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TabRoot, (0, _extends2.default)({}, tabRootProps, {
    children: children
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 90242:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 43894:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Tab: true
};
Object.defineProperty(exports, "Tab", ({
  enumerable: true,
  get: function () {
    return _Tab.Tab;
  }
}));
var _Tab = __webpack_require__(8998);
var _Tab2 = __webpack_require__(90242);
Object.keys(_Tab2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Tab2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Tab2[key];
    }
  });
});
var _tabClasses = __webpack_require__(54860);
Object.keys(_tabClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabClasses[key];
    }
  });
});

/***/ }),

/***/ 54860:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTabUtilityClass = getTabUtilityClass;
exports.tabClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getTabUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiTab', slot);
}
const tabClasses = exports.tabClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiTab', ['root', 'selected', 'disabled']);

/***/ }),

/***/ 83271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TablePagination = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var _react = _interopRequireWildcard(__webpack_require__(18038));
var React = _react;
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _utils2 = __webpack_require__(36610);
var _composeClasses = __webpack_require__(66676);
var _isHostComponent = __webpack_require__(26695);
var _TablePaginationActions = __webpack_require__(32599);
var _tablePaginationClasses = __webpack_require__(12346);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["colSpan", "count", "getItemAriaLabel", "labelDisplayedRows", "labelId", "labelRowsPerPage", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "selectId", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}
function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}
const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
    toolbar: ['toolbar'],
    spacer: ['spacer'],
    selectLabel: ['selectLabel'],
    select: ['select'],
    input: ['input'],
    selectIcon: ['selectIcon'],
    menuItem: ['menuItem'],
    displayedRows: ['displayedRows'],
    actions: ['actions']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_tablePaginationClasses.getTablePaginationUtilityClass));
};

/**
 * A pagination for tables.
 *
 * Demos:
 *
 * - [Table Pagination](https://mui.com/base-ui/react-table-pagination/)
 *
 * API:
 *
 * - [TablePagination API](https://mui.com/base-ui/react-table-pagination/components-api/#table-pagination)
 */
const TablePagination = exports.TablePagination = /*#__PURE__*/React.forwardRef(function TablePagination(props, forwardedRef) {
  var _slots$root, _slots$select, _slots$actions, _slots$menuItem, _slots$selectLabel, _slots$displayedRows, _slots$toolbar, _slots$spacer;
  const {
      colSpan: colSpanProp,
      count,
      getItemAriaLabel = defaultGetAriaLabel,
      labelDisplayedRows = defaultLabelDisplayedRows,
      labelId: labelIdProp,
      labelRowsPerPage = 'Rows per page:',
      onPageChange,
      onRowsPerPageChange,
      page,
      rowsPerPage,
      rowsPerPageOptions = [10, 25, 50, 100],
      selectId: selectIdProp,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses();
  let colSpan;
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'td';
  if (Root === 'td' || !(0, _isHostComponent.isHostComponent)(Root)) {
    colSpan = colSpanProp || 1000; // col-span over everything
  }

  const getLabelDisplayedRowsTo = () => {
    if (count === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };
  const selectId = (0, _utils.unstable_useId)(selectIdProp);
  const labelId = (0, _utils.unstable_useId)(labelIdProp);
  const rootProps = (0, _utils2.useSlotProps)({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      colSpan,
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const Select = (_slots$select = slots.select) != null ? _slots$select : 'select';
  const selectProps = (0, _utils2.useSlotProps)({
    elementType: Select,
    externalSlotProps: slotProps.select,
    additionalProps: {
      value: rowsPerPage,
      id: selectId,
      onChange: event => onRowsPerPageChange && onRowsPerPageChange(event),
      'aria-label': rowsPerPage.toString(),
      'aria-labelledby': [labelId, selectId].filter(Boolean).join(' ') || undefined
    },
    ownerState,
    className: classes.select
  });
  const Actions = (_slots$actions = slots.actions) != null ? _slots$actions : _TablePaginationActions.TablePaginationActions;
  const actionsProps = (0, _utils2.useSlotProps)({
    elementType: Actions,
    externalSlotProps: slotProps.actions,
    additionalProps: {
      page,
      rowsPerPage,
      count,
      onPageChange,
      getItemAriaLabel
    },
    ownerState,
    className: classes.actions
  });
  const MenuItem = (_slots$menuItem = slots.menuItem) != null ? _slots$menuItem : 'option';
  const menuItemProps = (0, _utils2.useSlotProps)({
    elementType: MenuItem,
    externalSlotProps: slotProps.menuItem,
    additionalProps: {
      value: undefined
    },
    ownerState,
    className: classes.menuItem
  });
  const SelectLabel = (_slots$selectLabel = slots.selectLabel) != null ? _slots$selectLabel : 'p';
  const selectLabelProps = (0, _utils2.useSlotProps)({
    elementType: SelectLabel,
    externalSlotProps: slotProps.selectLabel,
    additionalProps: {
      id: labelId
    },
    ownerState,
    className: classes.selectLabel
  });
  const DisplayedRows = (_slots$displayedRows = slots.displayedRows) != null ? _slots$displayedRows : 'p';
  const displayedRowsProps = (0, _utils2.useSlotProps)({
    elementType: DisplayedRows,
    externalSlotProps: slotProps.displayedRows,
    ownerState,
    className: classes.displayedRows
  });
  const Toolbar = (_slots$toolbar = slots.toolbar) != null ? _slots$toolbar : 'div';
  const toolbarProps = (0, _utils2.useSlotProps)({
    elementType: Toolbar,
    externalSlotProps: slotProps.toolbar,
    ownerState,
    className: classes.toolbar
  });
  const Spacer = (_slots$spacer = slots.spacer) != null ? _slots$spacer : 'div';
  const spacerProps = (0, _utils2.useSlotProps)({
    elementType: Spacer,
    externalSlotProps: slotProps.spacer,
    ownerState,
    className: classes.spacer
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(Toolbar, (0, _extends2.default)({}, toolbarProps, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Spacer, (0, _extends2.default)({}, spacerProps)), rowsPerPageOptions.length > 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(SelectLabel, (0, _extends2.default)({}, selectLabelProps, {
        children: labelRowsPerPage
      })), rowsPerPageOptions.length > 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(Select, (0, _extends2.default)({}, selectProps, {
        children: rowsPerPageOptions.map(rowsPerPageOption => /*#__PURE__*/(0, _react.createElement)(MenuItem, (0, _extends2.default)({}, menuItemProps, {
          key: typeof rowsPerPageOption !== 'number' && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
          value: typeof rowsPerPageOption !== 'number' && rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
        }), typeof rowsPerPageOption !== 'number' && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)(DisplayedRows, (0, _extends2.default)({}, displayedRowsProps, {
        children: labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: getLabelDisplayedRowsTo(),
          count: count === -1 ? -1 : count,
          page
        })
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)(Actions, (0, _extends2.default)({}, actionsProps))]
    }))
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 87837:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 32599:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TablePaginationActions = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(36610);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["count", "getItemAriaLabel", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton", "direction", "ownerState", "slotProps", "slots"];
var _span, _span2, _span3, _span4;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function LastPageIconDefault() {
  return _span || (_span = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    children: '⇾|'
  }));
}
function FirstPageIconDefault() {
  return _span2 || (_span2 = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    children: '|⇽'
  }));
}
function NextPageIconDefault() {
  return _span3 || (_span3 = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    children: '⇾'
  }));
}
function BackPageIconDefault() {
  return _span4 || (_span4 = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    children: '⇽'
  }));
}
function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}

/**
 * @ignore - internal component.
 */
const TablePaginationActions = exports.TablePaginationActions = /*#__PURE__*/React.forwardRef(function TablePaginationActions(props, forwardedRef) {
  var _slots$root, _slots$firstButton, _slots$lastButton, _slots$nextButton, _slots$backButton, _slots$lastPageIcon, _slots$firstPageIcon, _slots$nextPageIcon, _slots$backPageIcon;
  const {
      count,
      getItemAriaLabel = defaultGetAriaLabel,
      onPageChange,
      page,
      rowsPerPage,
      showFirstButton = false,
      showLastButton = false,
      direction
      // @ts-ignore
      ,

      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = props;
  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = event => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = event => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState
  });
  const FirstButton = (_slots$firstButton = slots.firstButton) != null ? _slots$firstButton : 'button';
  const firstButtonProps = (0, _utils.useSlotProps)({
    elementType: FirstButton,
    externalSlotProps: slotProps.firstButton,
    additionalProps: {
      onClick: handleFirstPageButtonClick,
      disabled: page === 0,
      'aria-label': getItemAriaLabel('first', page),
      title: getItemAriaLabel('first', page)
    },
    ownerState
  });
  const LastButton = (_slots$lastButton = slots.lastButton) != null ? _slots$lastButton : 'button';
  const lastButtonProps = (0, _utils.useSlotProps)({
    elementType: LastButton,
    externalSlotProps: slotProps.lastButton,
    additionalProps: {
      onClick: handleLastPageButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1,
      'aria-label': getItemAriaLabel('last', page),
      title: getItemAriaLabel('last', page)
    },
    ownerState
  });
  const NextButton = (_slots$nextButton = slots.nextButton) != null ? _slots$nextButton : 'button';
  const nextButtonProps = (0, _utils.useSlotProps)({
    elementType: NextButton,
    externalSlotProps: slotProps.nextButton,
    additionalProps: {
      onClick: handleNextButtonClick,
      disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
      'aria-label': getItemAriaLabel('next', page),
      title: getItemAriaLabel('next', page)
    },
    ownerState
  });
  const BackButton = (_slots$backButton = slots.backButton) != null ? _slots$backButton : 'button';
  const backButtonProps = (0, _utils.useSlotProps)({
    elementType: BackButton,
    externalSlotProps: slotProps.backButton,
    additionalProps: {
      onClick: handleBackButtonClick,
      disabled: page === 0,
      'aria-label': getItemAriaLabel('previous', page),
      title: getItemAriaLabel('previous', page)
    },
    ownerState
  });
  const LastPageIcon = (_slots$lastPageIcon = slots.lastPageIcon) != null ? _slots$lastPageIcon : LastPageIconDefault;
  const FirstPageIcon = (_slots$firstPageIcon = slots.firstPageIcon) != null ? _slots$firstPageIcon : FirstPageIconDefault;
  const NextPageIcon = (_slots$nextPageIcon = slots.nextPageIcon) != null ? _slots$nextPageIcon : NextPageIconDefault;
  const BackPageIcon = (_slots$backPageIcon = slots.backPageIcon) != null ? _slots$backPageIcon : BackPageIconDefault;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [showFirstButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(FirstButton, (0, _extends2.default)({}, firstButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(LastPageIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(FirstPageIcon, {})
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(BackButton, (0, _extends2.default)({}, backButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(NextPageIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(BackPageIcon, {})
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(NextButton, (0, _extends2.default)({}, nextButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(BackPageIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(NextPageIcon, {})
    })), showLastButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(LastButton, (0, _extends2.default)({}, lastButtonProps, {
      children: direction === 'rtl' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(FirstPageIcon, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(LastPageIcon, {})
    }))]
  }));
});

/***/ }),

/***/ 97375:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 49826:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 34955:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  TablePagination: true,
  TablePaginationActions: true
};
Object.defineProperty(exports, "TablePagination", ({
  enumerable: true,
  get: function () {
    return _TablePagination.TablePagination;
  }
}));
Object.defineProperty(exports, "TablePaginationActions", ({
  enumerable: true,
  get: function () {
    return _TablePaginationActions.TablePaginationActions;
  }
}));
var _TablePagination = __webpack_require__(83271);
var _TablePagination2 = __webpack_require__(87837);
Object.keys(_TablePagination2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TablePagination2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TablePagination2[key];
    }
  });
});
var _TablePaginationActions = __webpack_require__(32599);
var _TablePaginationActions2 = __webpack_require__(97375);
Object.keys(_TablePaginationActions2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TablePaginationActions2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TablePaginationActions2[key];
    }
  });
});
var _tablePaginationClasses = __webpack_require__(12346);
Object.keys(_tablePaginationClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tablePaginationClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tablePaginationClasses[key];
    }
  });
});
var _common = __webpack_require__(49826);
Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _common[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _common[key];
    }
  });
});

/***/ }),

/***/ 12346:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTablePaginationUtilityClass = getTablePaginationUtilityClass;
exports.tablePaginationClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getTablePaginationUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiTablePagination', slot);
}
const tablePaginationClasses = exports.tablePaginationClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiTablePagination', ['root', 'toolbar', 'spacer', 'selectLabel', 'selectRoot', 'select', 'selectIcon', 'input', 'menuItem', 'displayedRows', 'actions']);

/***/ }),

/***/ 46848:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TabsList = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _composeClasses = __webpack_require__(66676);
var _utils = __webpack_require__(36610);
var _tabsListClasses = __webpack_require__(66288);
var _useTabsList = __webpack_require__(41962);
var _ClassNameConfigurator = __webpack_require__(55383);
var _TabsListProvider = __webpack_require__(93642);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["children", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation]
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_tabsListClasses.getTabsListUtilityClass));
};

/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/)
 *
 * API:
 *
 * - [TabsList API](https://mui.com/base-ui/react-tabs/components-api/#tabs-list)
 */
const TabsList = exports.TabsList = /*#__PURE__*/React.forwardRef(function TabsList(props, forwardedRef) {
  var _slots$root;
  const {
      children,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    isRtl,
    orientation,
    getRootProps,
    contextValue
  } = (0, _useTabsList.useTabsList)({
    rootRef: forwardedRef
  });
  const ownerState = (0, _extends2.default)({}, props, {
    isRtl,
    orientation
  });
  const classes = useUtilityClasses(ownerState);
  const TabsListRoot = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const tabsListRootProps = (0, _utils.useSlotProps)({
    elementType: TabsListRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabsListProvider.TabsListProvider, {
    value: contextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TabsListRoot, (0, _extends2.default)({}, tabsListRootProps, {
      children: children
    }))
  });
});
 false ? 0 : void 0;

/***/ }),

/***/ 85832:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 54907:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  TabsList: true
};
Object.defineProperty(exports, "TabsList", ({
  enumerable: true,
  get: function () {
    return _TabsList.TabsList;
  }
}));
var _TabsList = __webpack_require__(46848);
var _TabsList2 = __webpack_require__(85832);
Object.keys(_TabsList2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabsList2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabsList2[key];
    }
  });
});
var _tabsListClasses = __webpack_require__(66288);
Object.keys(_tabsListClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabsListClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabsListClasses[key];
    }
  });
});

/***/ }),

/***/ 66288:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTabsListUtilityClass = getTabsListUtilityClass;
exports.tabsListClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getTabsListUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiTabsList', slot);
}
const tabsListClasses = exports.tabsListClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiTabsList', ['root', 'horizontal', 'vertical']);

/***/ }),

/***/ 6155:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Tabs = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(36610);
var _composeClasses = __webpack_require__(66676);
var _tabsClasses = __webpack_require__(90097);
var _useTabs = __webpack_require__(37962);
var _TabsProvider = __webpack_require__(28378);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["children", "value", "defaultValue", "orientation", "direction", "onChange", "selectionFollowsFocus", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation]
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_tabsClasses.getTabsUtilityClass));
};

/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/)
 *
 * API:
 *
 * - [Tabs API](https://mui.com/base-ui/react-tabs/components-api/#tabs)
 */
const Tabs = exports.Tabs = /*#__PURE__*/React.forwardRef(function Tabs(props, forwardedRef) {
  var _slots$root;
  const {
      children,
      orientation = 'horizontal',
      direction = 'ltr',
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    contextValue
  } = (0, _useTabs.useTabs)(props);
  const ownerState = (0, _extends2.default)({}, props, {
    orientation,
    direction
  });
  const classes = useUtilityClasses(ownerState);
  const TabsRoot = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const tabsRootProps = (0, _utils.useSlotProps)({
    elementType: TabsRoot,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TabsRoot, (0, _extends2.default)({}, tabsRootProps, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabsProvider.TabsProvider, {
      value: contextValue,
      children: children
    })
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 23605:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 64965:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TabsContext = void 0;
exports.useTabsContext = useTabsContext;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @ignore - internal component.
 */
const TabsContext = exports.TabsContext = /*#__PURE__*/React.createContext(null);
if (false) {}
function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (context == null) {
    throw new Error('No TabsContext provided');
  }
  return context;
}

/***/ }),

/***/ 17381:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Tabs: true
};
Object.defineProperty(exports, "Tabs", ({
  enumerable: true,
  get: function () {
    return _Tabs.Tabs;
  }
}));
var _Tabs = __webpack_require__(6155);
var _TabsContext = __webpack_require__(64965);
Object.keys(_TabsContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabsContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabsContext[key];
    }
  });
});
var _tabsClasses = __webpack_require__(90097);
Object.keys(_tabsClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tabsClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tabsClasses[key];
    }
  });
});
var _Tabs2 = __webpack_require__(23605);
Object.keys(_Tabs2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Tabs2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Tabs2[key];
    }
  });
});

/***/ }),

/***/ 90097:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTabsUtilityClass = getTabsUtilityClass;
exports.tabsClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getTabsUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiTabs', slot);
}
const tabsClasses = exports.tabsClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiTabs', ['root', 'horizontal', 'vertical']);

/***/ }),

/***/ 72730:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TextareaAutosize = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var ReactDOM = _interopRequireWildcard(__webpack_require__(98704));
var _utils = __webpack_require__(90480);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["onChange", "maxRows", "minRows", "style", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
const styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflow;
}

/**
 *
 * Demos:
 *
 * - [Textarea Autosize](https://mui.com/base-ui/react-textarea-autosize/)
 * - [Textarea Autosize](https://mui.com/material-ui/react-textarea-autosize/)
 *
 * API:
 *
 * - [TextareaAutosize API](https://mui.com/base-ui/react-textarea-autosize/components-api/#textarea-autosize)
 */
const TextareaAutosize = exports.TextareaAutosize = /*#__PURE__*/React.forwardRef(function TextareaAutosize(props, forwardedRef) {
  const {
      onChange,
      maxRows,
      minRows = 1,
      style,
      value
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    current: isControlled
  } = React.useRef(value != null);
  const inputRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(forwardedRef, inputRef);
  const shadowRef = React.useRef(null);
  const renders = React.useRef(0);
  const [state, setState] = React.useState({
    outerHeightStyle: 0
  });
  const getUpdatedState = React.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = (0, _utils.unstable_ownerWindow)(input);
    const computedStyle = containerWindow.getComputedStyle(input);

    // If input's width is shrunk and it's not visible, don't sync height.
    if (computedStyle.width === '0px') {
      return {
        outerHeightStyle: 0
      };
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';
    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);

    // The height of the inner content
    const innerHeight = inputShallow.scrollHeight;

    // Measure height of a textarea with a single row
    inputShallow.value = 'x';
    const singleRowHeight = inputShallow.scrollHeight;

    // The height of the outer content
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);

    // Take the box sizing into account for applying this value as a style.
    const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflow
    };
  }, [maxRows, minRows, props.placeholder]);
  const updateState = (prevState, newState) => {
    const {
      outerHeightStyle,
      overflow
    } = newState;
    // Need a large enough difference to update the height.
    // This prevents infinite rendering loop.
    if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
      renders.current += 1;
      return {
        overflow,
        outerHeightStyle
      };
    }
    if (false) {}
    return prevState;
  };
  const syncHeight = React.useCallback(() => {
    const newState = getUpdatedState();
    if (isEmpty(newState)) {
      return;
    }
    setState(prevState => updateState(prevState, newState));
  }, [getUpdatedState]);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    const syncHeightWithFlushSync = () => {
      const newState = getUpdatedState();
      if (isEmpty(newState)) {
        return;
      }

      // In React 18, state updates in a ResizeObserver's callback are happening after
      // the paint, this leads to an infinite rendering.
      //
      // Using flushSync ensures that the states is updated before the next pain.
      // Related issue - https://github.com/facebook/react/issues/24331
      ReactDOM.flushSync(() => {
        setState(prevState => updateState(prevState, newState));
      });
    };
    const handleResize = () => {
      renders.current = 0;
      syncHeightWithFlushSync();
    };
    // Workaround a "ResizeObserver loop completed with undelivered notifications" error
    // in test.
    // Note that we might need to use this logic in production per https://github.com/WICG/resize-observer/issues/38
    // Also see https://github.com/mui/mui-x/issues/8733
    let rAF;
    const rAFHandleResize = () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        handleResize();
      });
    };
    const debounceHandleResize = (0, _utils.unstable_debounce)(handleResize);
    const input = inputRef.current;
    const containerWindow = (0, _utils.unstable_ownerWindow)(input);
    containerWindow.addEventListener('resize', debounceHandleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver( false ? 0 : handleResize);
      resizeObserver.observe(input);
    }
    return () => {
      debounceHandleResize.clear();
      cancelAnimationFrame(rAF);
      containerWindow.removeEventListener('resize', debounceHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [getUpdatedState]);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    syncHeight();
  });
  React.useEffect(() => {
    renders.current = 0;
  }, [value]);
  const handleChange = event => {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", (0, _extends2.default)({
      value: value,
      onChange: handleChange,
      ref: handleRef
      // Apply the rows prop to get a "correct" first SSR paint
      ,
      rows: minRows,
      style: (0, _extends2.default)({
        height: state.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: state.overflow ? 'hidden' : undefined
      }, style)
    }, other)), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: (0, _extends2.default)({}, styles.shadow, style, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
 false ? 0 : void 0;

/***/ }),

/***/ 14655:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 23420:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  TextareaAutosize: true
};
Object.defineProperty(exports, "TextareaAutosize", ({
  enumerable: true,
  get: function () {
    return _TextareaAutosize.TextareaAutosize;
  }
}));
var _TextareaAutosize = __webpack_require__(72730);
var _TextareaAutosize2 = __webpack_require__(14655);
Object.keys(_TextareaAutosize2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TextareaAutosize2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TextareaAutosize2[key];
    }
  });
});

/***/ }),

/***/ 73224:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NumberInput = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _numberInputClasses = __webpack_require__(25683);
var _unstable_useNumberInput = __webpack_require__(70456);
var _composeClasses = __webpack_require__(66676);
var _utils = __webpack_require__(36610);
var _ClassNameConfigurator = __webpack_require__(55383);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "defaultValue", "disabled", "endAdornment", "error", "id", "max", "min", "onBlur", "onInputChange", "onFocus", "onChange", "placeholder", "required", "readOnly", "shiftMultiplier", "startAdornment", "step", "value", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    disabled,
    error,
    focused,
    readOnly,
    formControlContext,
    isIncrementDisabled,
    isDecrementDisabled,
    startAdornment,
    endAdornment
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', error && 'error', focused && 'focused', readOnly && 'readOnly', Boolean(formControlContext) && 'formControl', Boolean(startAdornment) && 'adornedStart', Boolean(endAdornment) && 'adornedEnd'],
    input: ['input', disabled && 'disabled', readOnly && 'readOnly'],
    incrementButton: ['incrementButton', isIncrementDisabled && 'disabled'],
    decrementButton: ['decrementButton', isDecrementDisabled && 'disabled']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_numberInputClasses.getNumberInputUtilityClass));
};

/**
 *
 * Demos:
 *
 * - [Number Input](https://mui.com/base-ui/react-number-input/)
 *
 * API:
 *
 * - [NumberInput API](https://mui.com/base-ui/react-number-input/components-api/#number-input)
 */
const NumberInput = exports.NumberInput = /*#__PURE__*/React.forwardRef(function NumberInput(props, forwardedRef) {
  var _slots$root, _slots$input, _slots$incrementButto, _slots$decrementButto;
  const {
      className,
      defaultValue,
      disabled,
      endAdornment,
      error,
      id,
      max,
      min,
      onBlur,
      onInputChange,
      onFocus,
      onChange,
      placeholder,
      required,
      readOnly = false,
      shiftMultiplier,
      startAdornment,
      step,
      value,
      slotProps = {},
      slots = {}
    } = props,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    getRootProps,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    focused,
    error: errorState,
    disabled: disabledState,
    formControlContext,
    isIncrementDisabled,
    isDecrementDisabled
  } = (0, _unstable_useNumberInput.unstable_useNumberInput)({
    min,
    max,
    step,
    shiftMultiplier,
    defaultValue,
    disabled,
    error,
    onFocus,
    onInputChange,
    onBlur,
    onChange,
    required,
    readOnly,
    value,
    inputId: id
  });
  const ownerState = (0, _extends2.default)({}, props, {
    disabled: disabledState,
    error: errorState,
    focused,
    readOnly,
    formControlContext,
    isIncrementDisabled,
    isDecrementDisabled
  });
  const classes = useUtilityClasses(ownerState);
  const propsForwardedToInputSlot = {
    placeholder
  };
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: rest,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: [classes.root, className]
  });
  const Input = (_slots$input = slots.input) != null ? _slots$input : 'input';
  const inputProps = (0, _utils.useSlotProps)({
    elementType: Input,
    getSlotProps: otherHandlers => getInputProps((0, _extends2.default)({}, otherHandlers, propsForwardedToInputSlot)),
    externalSlotProps: slotProps.input,
    ownerState,
    className: classes.input
  });
  const IncrementButton = (_slots$incrementButto = slots.incrementButton) != null ? _slots$incrementButto : 'button';
  const incrementButtonProps = (0, _utils.useSlotProps)({
    elementType: IncrementButton,
    getSlotProps: getIncrementButtonProps,
    externalSlotProps: slotProps.incrementButton,
    ownerState,
    className: classes.incrementButton
  });
  const DecrementButton = (_slots$decrementButto = slots.decrementButton) != null ? _slots$decrementButto : 'button';
  const decrementButtonProps = (0, _utils.useSlotProps)({
    elementType: DecrementButton,
    getSlotProps: getDecrementButtonProps,
    externalSlotProps: slotProps.decrementButton,
    ownerState,
    className: classes.decrementButton
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, (0, _extends2.default)({}, rootProps, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(DecrementButton, (0, _extends2.default)({}, decrementButtonProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(IncrementButton, (0, _extends2.default)({}, incrementButtonProps)), startAdornment, /*#__PURE__*/(0, _jsxRuntime.jsx)(Input, (0, _extends2.default)({}, inputProps)), endAdornment]
  }));
});
 false ? 0 : void 0;

/***/ }),

/***/ 27891:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 40238:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Unstable_NumberInput: true
};
Object.defineProperty(exports, "Unstable_NumberInput", ({
  enumerable: true,
  get: function () {
    return _NumberInput.NumberInput;
  }
}));
var _NumberInput = __webpack_require__(73224);
var _numberInputClasses = __webpack_require__(25683);
Object.keys(_numberInputClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _numberInputClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _numberInputClasses[key];
    }
  });
});
var _NumberInput2 = __webpack_require__(27891);
Object.keys(_NumberInput2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _NumberInput2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _NumberInput2[key];
    }
  });
});

/***/ }),

/***/ 25683:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getNumberInputUtilityClass = getNumberInputUtilityClass;
exports.numberInputClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getNumberInputUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiNumberInput', slot);
}
const numberInputClasses = exports.numberInputClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiNumberInput', ['root', 'formControl', 'focused', 'disabled', 'readOnly', 'error', 'input', 'incrementButton', 'decrementButton', 'adornedStart', 'adornedEnd']);

/***/ }),

/***/ 41763:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Popup = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _reactDom = __webpack_require__(11920);
var _utils = __webpack_require__(90480);
var _composeClasses = __webpack_require__(66676);
var _Portal = __webpack_require__(70783);
var _utils2 = __webpack_require__(36610);
var _ClassNameConfigurator = __webpack_require__(55383);
var _popupClasses = __webpack_require__(71423);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["anchor", "children", "container", "disablePortal", "keepMounted", "middleware", "offset", "open", "placement", "slotProps", "slots", "strategy", "withTransition"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useUtilityClasses(ownerState) {
  const {
    open
  } = ownerState;
  const slots = {
    root: ['root', open && 'open']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_popupClasses.getPopupUtilityClass));
}
function resolveAnchor(anchor) {
  return typeof anchor === 'function' ? anchor() : anchor;
}
/**
 *
 * Demos:
 *
 * - [Popup](https://mui.com/base-ui/react-popup/)
 *
 * API:
 *
 * - [Popup API](https://mui.com/base-ui/react-popup/components-api/#popup)
 */
const Popup = exports.Popup = /*#__PURE__*/React.forwardRef(function Popup(props, forwardedRef) {
  var _slots$root;
  const {
      anchor: anchorProp,
      children,
      container,
      disablePortal = false,
      keepMounted = false,
      middleware,
      offset: offsetProp = 0,
      open = false,
      placement = 'bottom',
      slotProps = {},
      slots = {},
      strategy = 'absolute',
      withTransition = false
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    refs,
    elements,
    floatingStyles,
    update,
    placement: finalPlacement
  } = (0, _reactDom.useFloating)({
    elements: {
      reference: resolveAnchor(anchorProp)
    },
    open,
    middleware: middleware != null ? middleware : [(0, _reactDom.offset)(offsetProp != null ? offsetProp : 0), (0, _reactDom.flip)()],
    placement,
    strategy,
    whileElementsMounted: !keepMounted ? _reactDom.autoUpdate : undefined
  });
  const handleRef = (0, _utils.unstable_useForkRef)(refs.setFloating, forwardedRef);
  const [exited, setExited] = React.useState(true);
  const handleEntering = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (keepMounted && open && elements.reference && elements.floating) {
      const cleanup = (0, _reactDom.autoUpdate)(elements.reference, elements.floating, update);
      return cleanup;
    }
    return undefined;
  }, [keepMounted, open, elements, update]);
  const ownerState = (0, _extends2.default)({}, props, {
    disablePortal,
    keepMounted,
    offset: _reactDom.offset,
    open,
    placement,
    finalPlacement,
    strategy,
    withTransition
  });
  const display = !open && keepMounted && (!withTransition || exited) ? 'none' : undefined;
  const classes = useUtilityClasses(ownerState);
  const Root = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : 'div';
  const rootProps = (0, _utils2.useSlotProps)({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root,
    additionalProps: {
      ref: handleRef,
      role: 'tooltip',
      style: (0, _extends2.default)({}, floatingStyles, {
        display
      })
    }
  });
  const shouldRender = open || keepMounted || withTransition && !exited;
  if (!shouldRender) {
    return null;
  }
  const childProps = {
    placement: finalPlacement,
    requestOpen: open,
    onExited: handleExited,
    onEnter: handleEntering
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Portal.Portal, {
    disablePortal: disablePortal,
    container: container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
      children: typeof children === 'function' ? children(childProps) : children
    }))
  });
});
 false ? 0 : void 0;

/***/ }),

/***/ 17921:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 21287:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Unstable_Popup: true
};
Object.defineProperty(exports, "Unstable_Popup", ({
  enumerable: true,
  get: function () {
    return _Popup.Popup;
  }
}));
var _Popup = __webpack_require__(41763);
var _Popup2 = __webpack_require__(17921);
Object.keys(_Popup2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Popup2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Popup2[key];
    }
  });
});
var _popupClasses = __webpack_require__(71423);
Object.keys(_popupClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _popupClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _popupClasses[key];
    }
  });
});

/***/ }),

/***/ 71423:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPopupUtilityClass = getPopupUtilityClass;
exports.popupClasses = void 0;
var _generateUtilityClass = __webpack_require__(21923);
var _generateUtilityClasses = __webpack_require__(6419);
function getPopupUtilityClass(slot) {
  return (0, _generateUtilityClass.generateUtilityClass)('MuiPopup', slot);
}
const popupClasses = exports.popupClasses = (0, _generateUtilityClasses.generateUtilityClasses)('MuiPopup', ['root', 'open']);

/***/ }),

/***/ 66676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "unstable_composeClasses", ({
  enumerable: true,
  get: function () {
    return _utils.unstable_composeClasses;
  }
}));
var _utils = __webpack_require__(90480);

/***/ }),

/***/ 21923:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "generateUtilityClass", ({
  enumerable: true,
  get: function () {
    return _utils.unstable_generateUtilityClass;
  }
}));
var _utils = __webpack_require__(90480);

/***/ }),

/***/ 6419:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "generateUtilityClasses", ({
  enumerable: true,
  get: function () {
    return _utils.unstable_generateUtilityClasses;
  }
}));
var _utils = __webpack_require__(90480);

/***/ }),

/***/ 68068:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @mui/base v5.0.0-beta.19
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  ClickAwayListener: true,
  Dropdown: true,
  FocusTrap: true,
  NoSsr: true,
  Popper: true,
  Portal: true,
  TextareaAutosize: true,
  useDropdown: true
};
Object.defineProperty(exports, "ClickAwayListener", ({
  enumerable: true,
  get: function () {
    return _ClickAwayListener.ClickAwayListener;
  }
}));
Object.defineProperty(exports, "Dropdown", ({
  enumerable: true,
  get: function () {
    return _Dropdown.Dropdown;
  }
}));
Object.defineProperty(exports, "FocusTrap", ({
  enumerable: true,
  get: function () {
    return _FocusTrap.FocusTrap;
  }
}));
Object.defineProperty(exports, "NoSsr", ({
  enumerable: true,
  get: function () {
    return _NoSsr.NoSsr;
  }
}));
Object.defineProperty(exports, "Popper", ({
  enumerable: true,
  get: function () {
    return _Popper.Popper;
  }
}));
Object.defineProperty(exports, "Portal", ({
  enumerable: true,
  get: function () {
    return _Portal.Portal;
  }
}));
Object.defineProperty(exports, "TextareaAutosize", ({
  enumerable: true,
  get: function () {
    return _TextareaAutosize.TextareaAutosize;
  }
}));
Object.defineProperty(exports, "useDropdown", ({
  enumerable: true,
  get: function () {
    return _useDropdown.useDropdown;
  }
}));
var _utils = __webpack_require__(36610);
Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});
var _Badge = __webpack_require__(90434);
Object.keys(_Badge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Badge[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Badge[key];
    }
  });
});
var _Button = __webpack_require__(22275);
Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Button[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Button[key];
    }
  });
});
var _ClickAwayListener = __webpack_require__(9381);
var _composeClasses = __webpack_require__(66676);
Object.keys(_composeClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _composeClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _composeClasses[key];
    }
  });
});
var _Dropdown = __webpack_require__(73220);
var _FocusTrap = __webpack_require__(29827);
var _FormControl = __webpack_require__(39541);
Object.keys(_FormControl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FormControl[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FormControl[key];
    }
  });
});
var _Input = __webpack_require__(13223);
Object.keys(_Input).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Input[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Input[key];
    }
  });
});
var _Menu = __webpack_require__(10275);
Object.keys(_Menu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Menu[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Menu[key];
    }
  });
});
var _MenuButton = __webpack_require__(24751);
Object.keys(_MenuButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MenuButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MenuButton[key];
    }
  });
});
var _MenuItem = __webpack_require__(61290);
Object.keys(_MenuItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MenuItem[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MenuItem[key];
    }
  });
});
var _Modal = __webpack_require__(36150);
Object.keys(_Modal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Modal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Modal[key];
    }
  });
});
var _NoSsr = __webpack_require__(99204);
var _Unstable_NumberInput = __webpack_require__(40238);
Object.keys(_Unstable_NumberInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Unstable_NumberInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Unstable_NumberInput[key];
    }
  });
});
var _OptionGroup = __webpack_require__(36906);
Object.keys(_OptionGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _OptionGroup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _OptionGroup[key];
    }
  });
});
var _Option = __webpack_require__(90698);
Object.keys(_Option).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Option[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Option[key];
    }
  });
});
var _Popper = __webpack_require__(33841);
var _Unstable_Popup = __webpack_require__(21287);
Object.keys(_Unstable_Popup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Unstable_Popup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Unstable_Popup[key];
    }
  });
});
var _Portal = __webpack_require__(70783);
var _Select = __webpack_require__(50339);
Object.keys(_Select).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Select[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Select[key];
    }
  });
});
var _Slider = __webpack_require__(64467);
Object.keys(_Slider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Slider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Slider[key];
    }
  });
});
var _Snackbar = __webpack_require__(15237);
Object.keys(_Snackbar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Snackbar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Snackbar[key];
    }
  });
});
var _Switch = __webpack_require__(94973);
Object.keys(_Switch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Switch[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Switch[key];
    }
  });
});
var _TablePagination = __webpack_require__(34955);
Object.keys(_TablePagination).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TablePagination[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TablePagination[key];
    }
  });
});
var _TabPanel = __webpack_require__(92874);
Object.keys(_TabPanel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabPanel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabPanel[key];
    }
  });
});
var _TabsList = __webpack_require__(54907);
Object.keys(_TabsList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabsList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabsList[key];
    }
  });
});
var _Tabs = __webpack_require__(17381);
Object.keys(_Tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Tabs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Tabs[key];
    }
  });
});
var _Tab = __webpack_require__(43894);
Object.keys(_Tab).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Tab[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Tab[key];
    }
  });
});
var _TextareaAutosize = __webpack_require__(23420);
var _useAutocomplete = __webpack_require__(2189);
Object.keys(_useAutocomplete).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useAutocomplete[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useAutocomplete[key];
    }
  });
});
var _useBadge = __webpack_require__(41138);
Object.keys(_useBadge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useBadge[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useBadge[key];
    }
  });
});
var _useButton = __webpack_require__(64877);
Object.keys(_useButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useButton[key];
    }
  });
});
var _useDropdown = __webpack_require__(63329);
var _useInput = __webpack_require__(38407);
Object.keys(_useInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useInput[key];
    }
  });
});
var _useMenu = __webpack_require__(17319);
Object.keys(_useMenu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useMenu[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useMenu[key];
    }
  });
});
var _useMenuButton = __webpack_require__(30396);
Object.keys(_useMenuButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useMenuButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useMenuButton[key];
    }
  });
});
var _useMenuItem = __webpack_require__(78857);
Object.keys(_useMenuItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useMenuItem[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useMenuItem[key];
    }
  });
});
var _unstable_useNumberInput = __webpack_require__(70456);
Object.keys(_unstable_useNumberInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _unstable_useNumberInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _unstable_useNumberInput[key];
    }
  });
});
var _useOption = __webpack_require__(29199);
Object.keys(_useOption).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useOption[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useOption[key];
    }
  });
});
var _useSelect = __webpack_require__(11909);
Object.keys(_useSelect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useSelect[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSelect[key];
    }
  });
});
var _useSlider = __webpack_require__(7415);
Object.keys(_useSlider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useSlider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSlider[key];
    }
  });
});
var _useSnackbar = __webpack_require__(84475);
Object.keys(_useSnackbar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useSnackbar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSnackbar[key];
    }
  });
});
var _useSwitch = __webpack_require__(70724);
Object.keys(_useSwitch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useSwitch[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSwitch[key];
    }
  });
});
var _useTab = __webpack_require__(15012);
Object.keys(_useTab).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useTab[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTab[key];
    }
  });
});
var _useTabPanel = __webpack_require__(12511);
Object.keys(_useTabPanel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useTabPanel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTabPanel[key];
    }
  });
});
var _useTabs = __webpack_require__(37962);
Object.keys(_useTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useTabs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTabs[key];
    }
  });
});
var _useTabsList = __webpack_require__(41962);
Object.keys(_useTabsList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useTabsList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTabsList[key];
    }
  });
});
var _unstable_useModal = __webpack_require__(23871);
Object.keys(_unstable_useModal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _unstable_useModal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _unstable_useModal[key];
    }
  });
});

/***/ }),

/***/ 52083:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ModalManager = void 0;
exports.ariaHidden = ariaHidden;
var _utils = __webpack_require__(90480);
// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = (0, _utils.unstable_ownerDocument)(container);
  if (doc.body === container) {
    return (0, _utils.unstable_ownerWindow)(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}
function getPaddingRight(element) {
  return parseInt((0, _utils.unstable_ownerWindow)(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  // The forbidden HTML tags are the ones from ARIA specification that
  // can be children of body and can't have aria-hidden attribute.
  // cf. https://www.w3.org/TR/html-aria/#docconformance
  const forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, element => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = (0, _utils.unstable_getScrollbarSize)((0, _utils.unstable_ownerDocument)(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      });
      // Use computed style, here to get the real padding to add our scrollbar width.
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;

      // .mui-fixed is a global helper.
      const fixedElements = (0, _utils.unstable_ownerDocument)(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = (0, _utils.unstable_ownerDocument)(container).body;
    } else {
      // Support html overflow-y: auto for scroll stability between pages
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
      const parent = container.parentElement;
      const containerWindow = (0, _utils.unstable_ownerWindow)(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
    }

    // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);

    // If the modal we are adding is already in the DOM.
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    // If that was the last modal in a container, clean up the container.
    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}
exports.ModalManager = ModalManager;

/***/ }),

/***/ 23871:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  unstable_useModal: true
};
Object.defineProperty(exports, "unstable_useModal", ({
  enumerable: true,
  get: function () {
    return _useModal.useModal;
  }
}));
var _useModal = __webpack_require__(46722);
var _useModal2 = __webpack_require__(4297);
Object.keys(_useModal2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useModal2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useModal2[key];
    }
  });
});
var _ModalManager = __webpack_require__(52083);
Object.keys(_ModalManager).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ModalManager[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ModalManager[key];
    }
  });
});

/***/ }),

/***/ 46722:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useModal = useModal;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _utils2 = __webpack_require__(36610);
var _ModalManager = __webpack_require__(52083);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty('in') : false;
}

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const defaultManager = new _ModalManager.ModalManager();
/**
 *
 * Demos:
 *
 * - [Modal](https://mui.com/base-ui/react-modal/#hook)
 *
 * API:
 *
 * - [useModal API](https://mui.com/base-ui/react-modal/hooks-api/#use-modal)
 */
function useModal(parameters) {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager = defaultManager,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children,
    onClose,
    open,
    rootRef
  } = parameters;

  // @ts-ignore internal logic
  const modal = React.useRef({});
  const mountNodeRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(modalRef, rootRef);
  const [exited, setExited] = React.useState(!open);
  const hasTransition = getHasTransition(children);
  let ariaHiddenProp = true;
  if (parameters['aria-hidden'] === 'false' || parameters['aria-hidden'] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => (0, _utils.unstable_ownerDocument)(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });

    // Fix a bug on Chrome where the scroll isn't initially 0.
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = (0, _utils.unstable_useEventCallback)(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);

    // The element was already mounted.
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = React.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = (0, _utils.unstable_useEventCallback)(node => {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      (0, _ModalManager.ariaHidden)(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp, manager]);
  React.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);

    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();
      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };
  const createHandleBackdropClick = otherHandlers => event => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = (0, _utils2.extractEventHandlers)(parameters);

    // The custom event handlers shouldn't be spread on the root element
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = (0, _extends2.default)({}, propsEventHandlers, otherHandlers);
    return (0, _extends2.default)({
      role: 'presentation'
    }, externalEventHandlers, {
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    });
  };
  const getBackdropProps = (otherHandlers = {}) => {
    const externalEventHandlers = otherHandlers;
    return (0, _extends2.default)({
      'aria-hidden': true
    }, externalEventHandlers, {
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    });
  };
  const getTransitionProps = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: (0, _utils.unstable_createChainedFunction)(handleEnter, children == null ? void 0 : children.props.onEnter),
      onExited: (0, _utils.unstable_createChainedFunction)(handleExited, children == null ? void 0 : children.props.onExited)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}

/***/ }),

/***/ 4297:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 70456:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  unstable_useNumberInput: true
};
Object.defineProperty(exports, "unstable_useNumberInput", ({
  enumerable: true,
  get: function () {
    return _useNumberInput.useNumberInput;
  }
}));
var _useNumberInput = __webpack_require__(75921);
var _useNumberInput2 = __webpack_require__(90768);
Object.keys(_useNumberInput2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useNumberInput2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useNumberInput2[key];
    }
  });
});

/***/ }),

/***/ 75921:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useNumberInput = useNumberInput;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _utils = __webpack_require__(90480);
var React = _interopRequireWildcard(__webpack_require__(18038));
var _FormControl = __webpack_require__(39541);
var _utils2 = __webpack_require__(50412);
var _extractEventHandlers = __webpack_require__(61843);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const STEP_KEYS = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown'];
const SUPPORTED_KEYS = [...STEP_KEYS, 'Home', 'End'];
function parseInput(v) {
  return v ? String(v.trim()) : String(v);
}

/**
 *
 * Demos:
 *
 * - [Number Input](https://mui.com/base-ui/react-number-input/#hook)
 *
 * API:
 *
 * - [useNumberInput API](https://mui.com/base-ui/react-number-input/hooks-api/#use-number-input)
 */
function useNumberInput(parameters) {
  const {
    min,
    max,
    step,
    shiftMultiplier = 10,
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onInputChange,
    onFocus,
    onChange,
    required: requiredProp = false,
    readOnly: readOnlyProp = false,
    value: valueProp,
    inputRef: inputRefProp,
    inputId: inputIdProp
  } = parameters;

  // TODO: make it work with FormControl
  const formControlContext = (0, _FormControl.useFormControlContext)();
  const {
    current: isControlled
  } = React.useRef(valueProp != null);
  const handleInputRefWarning = React.useCallback(instance => {
    if (false) {}
  }, []);
  const inputRef = React.useRef(null);
  const handleInputRef = (0, _utils.unstable_useForkRef)(inputRef, inputRefProp, handleInputRefWarning);
  const inputId = (0, _utils.unstable_useId)(inputIdProp);
  const [focused, setFocused] = React.useState(false);

  // the "final" value
  const [value, setValue] = (0, _utils.unstable_useControlled)({
    controlled: valueProp,
    default: defaultValueProp,
    name: 'NumberInput'
  });

  // the (potentially) dirty or invalid input value
  const [dirtyValue, setDirtyValue] = React.useState(value ? String(value) : undefined);
  React.useEffect(() => {
    if (!formControlContext && disabledProp && focused) {
      setFocused(false);
      onBlur == null || onBlur();
    }
  }, [formControlContext, disabledProp, focused, onBlur]);
  const handleFocus = otherHandlers => event => {
    var _otherHandlers$onFocu;
    (_otherHandlers$onFocu = otherHandlers.onFocus) == null || _otherHandlers$onFocu.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;
      formControlContext == null || (_formControlContext$o = formControlContext.onFocus) == null || _formControlContext$o.call(formControlContext);
    }
    setFocused(true);
  };
  const handleValueChange = () => (event, val) => {
    let newValue;
    if (val === undefined) {
      newValue = val;
      setDirtyValue('');
    } else {
      newValue = (0, _utils2.clamp)(val, min, max, step);
      setDirtyValue(String(newValue));
    }
    setValue(newValue);
    if ((0, _utils2.isNumber)(newValue)) {
      onChange == null || onChange(event, newValue);
    } else {
      onChange == null || onChange(event, undefined);
    }
  };
  const handleInputChange = otherHandlers => event => {
    var _formControlContext$o2, _otherHandlers$onInpu;
    if (!isControlled && event.target === null) {
      throw new Error( false ? 0 : (0, _utils.formatMuiErrorMessage)(17));
    }
    formControlContext == null || (_formControlContext$o2 = formControlContext.onChange) == null || _formControlContext$o2.call(formControlContext, event);
    (_otherHandlers$onInpu = otherHandlers.onInputChange) == null || _otherHandlers$onInpu.call(otherHandlers, event);
    const val = parseInput(event.currentTarget.value);
    if (val === '' || val === '-') {
      setDirtyValue(val);
      setValue(undefined);
    }
    if (val.match(/^-?\d+?$/)) {
      setDirtyValue(val);
      setValue(parseInt(val, 10));
    }
  };
  const handleBlur = otherHandlers => event => {
    var _otherHandlers$onBlur;
    const val = parseInput(event.currentTarget.value);
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
    if (val === '' || val === '-') {
      handleValueChange()(event, undefined);
    } else {
      handleValueChange()(event, parseInt(val, 10));
    }
    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    }
    setFocused(false);
  };
  const handleClick = otherHandlers => event => {
    var _otherHandlers$onClic;
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
  };
  const handleStep = direction => event => {
    let newValue;
    if ((0, _utils2.isNumber)(value)) {
      const multiplier = event.shiftKey || event.key === 'PageUp' || event.key === 'PageDown' ? shiftMultiplier : 1;
      newValue = {
        up: value + (step != null ? step : 1) * multiplier,
        down: value - (step != null ? step : 1) * multiplier
      }[direction];
    } else {
      // no value
      newValue = {
        up: min != null ? min : 0,
        down: max != null ? max : 0
      }[direction];
    }
    handleValueChange()(event, newValue);
  };
  const handleKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (SUPPORTED_KEYS.includes(event.key)) {
      event.preventDefault();
    }
    if (STEP_KEYS.includes(event.key)) {
      const direction = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        PageUp: 'up',
        PageDown: 'down'
      }[event.key];
      handleStep(direction)(event);
    }
    if (event.key === 'Home' && (0, _utils2.isNumber)(max)) {
      handleValueChange()(event, max);
    }
    if (event.key === 'End' && (0, _utils2.isNumber)(min)) {
      handleValueChange()(event, min);
    }
  };
  const getRootProps = (externalProps = {}) => {
    const propsEventHandlers = (0, _extractEventHandlers.extractEventHandlers)(parameters, ['onBlur', 'onInputChange', 'onFocus', 'onChange']);
    const externalEventHandlers = (0, _extends2.default)({}, propsEventHandlers, (0, _extractEventHandlers.extractEventHandlers)(externalProps));
    return (0, _extends2.default)({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers)
    });
  };
  const getInputProps = (externalProps = {}) => {
    var _ref;
    const externalEventHandlers = (0, _extends2.default)({
      onBlur,
      onFocus
    }, (0, _extractEventHandlers.extractEventHandlers)(externalProps, ['onInputChange']));
    const mergedEventHandlers = (0, _extends2.default)({}, externalProps, externalEventHandlers, {
      onFocus: handleFocus(externalEventHandlers),
      onChange: handleInputChange((0, _extends2.default)({}, externalEventHandlers, {
        onInputChange
      })),
      onBlur: handleBlur(externalEventHandlers),
      onKeyDown: handleKeyDown(externalEventHandlers)
    });
    const displayValue = (_ref = focused ? dirtyValue : value) != null ? _ref : '';
    return (0, _extends2.default)({}, mergedEventHandlers, {
      type: 'text',
      id: inputId,
      'aria-invalid': errorProp || undefined,
      defaultValue: undefined,
      ref: handleInputRef,
      value: displayValue,
      'aria-valuenow': displayValue,
      'aria-valuetext': String(displayValue),
      'aria-valuemin': min,
      'aria-valuemax': max,
      autoComplete: 'off',
      autoCorrect: 'off',
      spellCheck: 'false',
      required: requiredProp,
      readOnly: readOnlyProp,
      'aria-disabled': disabledProp,
      disabled: disabledProp
    });
  };
  const handleStepperButtonMouseDown = event => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const stepperButtonCommonProps = {
    'aria-controls': inputId,
    tabIndex: -1
  };
  const isIncrementDisabled = disabledProp || ((0, _utils2.isNumber)(value) ? value >= (max != null ? max : Number.MAX_SAFE_INTEGER) : false);
  const getIncrementButtonProps = (externalProps = {}) => {
    return (0, _extends2.default)({}, externalProps, stepperButtonCommonProps, {
      disabled: isIncrementDisabled,
      'aria-disabled': isIncrementDisabled,
      onMouseDown: handleStepperButtonMouseDown,
      onClick: handleStep('up')
    });
  };
  const isDecrementDisabled = disabledProp || ((0, _utils2.isNumber)(value) ? value <= (min != null ? min : Number.MIN_SAFE_INTEGER) : false);
  const getDecrementButtonProps = (externalProps = {}) => {
    return (0, _extends2.default)({}, externalProps, stepperButtonCommonProps, {
      disabled: isDecrementDisabled,
      'aria-disabled': isDecrementDisabled,
      onMouseDown: handleStepperButtonMouseDown,
      onClick: handleStep('down')
    });
  };
  return {
    disabled: disabledProp,
    error: errorProp,
    focused,
    formControlContext,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    getRootProps,
    required: requiredProp,
    value: focused ? dirtyValue : value,
    isIncrementDisabled,
    isDecrementDisabled,
    inputValue: dirtyValue
  };
}

/***/ }),

/***/ 90768:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 50412:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clamp = clamp;
exports.isNumber = isNumber;
function simpleClamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, stepProp = NaN) {
  if (Number.isNaN(stepProp)) {
    return simpleClamp(val, min, max);
  }
  const step = stepProp || 1;
  const remainder = val % step;
  const positivity = Math.sign(remainder);
  if (Math.abs(remainder) > step / 2) {
    return simpleClamp(val + positivity * (step - Math.abs(remainder)), min, max);
  }
  return simpleClamp(val - positivity * Math.abs(remainder), min, max);
}
function isNumber(val) {
  return typeof val === 'number' && !Number.isNaN(val) && Number.isFinite(val);
}

/***/ }),

/***/ 2189:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _useAutocomplete = __webpack_require__(53648);
Object.keys(_useAutocomplete).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useAutocomplete[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useAutocomplete[key];
    }
  });
});

/***/ }),

/***/ 53648:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

/* eslint-disable no-constant-condition */
var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createFilterOptions = createFilterOptions;
exports.useAutocomplete = useAutocomplete;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
// Give up on IE11 support for this feature
function stripDiacritics(string) {
  return typeof string.normalize !== 'undefined' ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : string;
}
function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = 'any',
    stringify,
    trim = false
  } = config;
  return (options, {
    inputValue,
    getOptionLabel
  }) => {
    let input = trim ? inputValue.trim() : inputValue;
    if (ignoreCase) {
      input = input.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
    }
    const filteredOptions = !input ? options : options.filter(option => {
      let candidate = (stringify || getOptionLabel)(option);
      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }
      return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
  };
}

// To replace with .findIndex() once we stop IE11 support.
function findIndex(array, comp) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }
  return -1;
}
const defaultFilterOptions = createFilterOptions();

// Number of options to jump in list box when `Page Up` and `Page Down` keys are used.
const pageSize = 5;
const defaultIsActiveElementInListbox = listboxRef => {
  var _listboxRef$current$p;
  return listboxRef.current !== null && ((_listboxRef$current$p = listboxRef.current.parentElement) == null ? void 0 : _listboxRef$current$p.contains(document.activeElement));
};
function useAutocomplete(props) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox = defaultIsActiveElementInListbox,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix = 'Mui',
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    componentName = 'useAutocomplete',
    defaultValue = props.multiple ? [] : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabled: disabledProp,
    disabledItemsFocusable = false,
    disableListWrap = false,
    filterOptions = defaultFilterOptions,
    filterSelectedOptions = false,
    freeSolo = false,
    getOptionDisabled,
    getOptionLabel: getOptionLabelProp = option => {
      var _option$label;
      return (_option$label = option.label) != null ? _option$label : option;
    },
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    id: idProp,
    includeInputInList = false,
    inputValue: inputValueProp,
    isOptionEqualToValue = (option, value) => option === value,
    multiple = false,
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open: openProp,
    openOnFocus = false,
    options,
    readOnly = false,
    selectOnFocus = !props.freeSolo,
    value: valueProp
  } = props;
  const id = (0, _utils.unstable_useId)(idProp);
  let getOptionLabel = getOptionLabelProp;
  getOptionLabel = option => {
    const optionLabel = getOptionLabelProp(option);
    if (typeof optionLabel !== 'string') {
      if (false) {}
      return String(optionLabel);
    }
    return optionLabel;
  };
  const ignoreFocus = React.useRef(false);
  const firstFocus = React.useRef(true);
  const inputRef = React.useRef(null);
  const listboxRef = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [focusedTag, setFocusedTag] = React.useState(-1);
  const defaultHighlighted = autoHighlight ? 0 : -1;
  const highlightedIndexRef = React.useRef(defaultHighlighted);
  const [value, setValueState] = (0, _utils.unstable_useControlled)({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  });
  const [inputValue, setInputValueState] = (0, _utils.unstable_useControlled)({
    controlled: inputValueProp,
    default: '',
    name: componentName,
    state: 'inputValue'
  });
  const [focused, setFocused] = React.useState(false);
  const resetInputValue = React.useCallback((event, newValue) => {
    // retain current `inputValue` if new option isn't selected and `clearOnBlur` is false
    // When `multiple` is enabled, `newValue` is an array of all selected items including the newly selected item
    const isOptionSelected = multiple ? value.length < newValue.length : newValue !== null;
    if (!isOptionSelected && !clearOnBlur) {
      return;
    }
    let newInputValue;
    if (multiple) {
      newInputValue = '';
    } else if (newValue == null) {
      newInputValue = '';
    } else {
      const optionLabel = getOptionLabel(newValue);
      newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
    }
    if (inputValue === newInputValue) {
      return;
    }
    setInputValueState(newInputValue);
    if (onInputChange) {
      onInputChange(event, newInputValue, 'reset');
    }
  }, [getOptionLabel, inputValue, multiple, onInputChange, setInputValueState, clearOnBlur, value]);
  const [open, setOpenState] = (0, _utils.unstable_useControlled)({
    controlled: openProp,
    default: false,
    name: componentName,
    state: 'open'
  });
  const [inputPristine, setInputPristine] = React.useState(true);
  const inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  const popupOpen = open && !readOnly;
  const filteredOptions = popupOpen ? filterOptions(options.filter(option => {
    if (filterSelectedOptions && (multiple ? value : [value]).some(value2 => value2 !== null && isOptionEqualToValue(option, value2))) {
      return false;
    }
    return true;
  }),
  // we use the empty string to manipulate `filterOptions` to not filter any options
  // i.e. the filter predicate always returns true
  {
    inputValue: inputValueIsSelectedValue && inputPristine ? '' : inputValue,
    getOptionLabel
  }) : [];
  const previousProps = (0, _utils.usePreviousProps)({
    filteredOptions,
    value,
    inputValue
  });
  React.useEffect(() => {
    const valueChange = value !== previousProps.value;
    if (focused && !valueChange) {
      return;
    }

    // Only reset the input's value when freeSolo if the component's value changes.
    if (freeSolo && !valueChange) {
      return;
    }
    resetInputValue(null, value);
  }, [value, resetInputValue, focused, previousProps.value, freeSolo]);
  const listboxAvailable = open && filteredOptions.length > 0 && !readOnly;
  if (false) {}
  const focusTag = (0, _utils.unstable_useEventCallback)(tagToFocus => {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector(`[data-tag-index="${tagToFocus}"]`).focus();
    }
  });

  // Ensure the focusedTag is never inconsistent
  React.useEffect(() => {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);
  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index === -1) {
      return -1;
    }
    let nextFocus = index;
    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === filteredOptions.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }
      const option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`);

      // Same logic as MenuList.js
      const nextFocusDisabled = disabledItemsFocusable ? false : !option || option.disabled || option.getAttribute('aria-disabled') === 'true';
      if (option && !option.hasAttribute('tabindex') || nextFocusDisabled) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }
  const setHighlightedIndex = (0, _utils.unstable_useEventCallback)(({
    event,
    index,
    reason = 'auto'
  }) => {
    highlightedIndexRef.current = index;

    // does the index exist?
    if (index === -1) {
      inputRef.current.removeAttribute('aria-activedescendant');
    } else {
      inputRef.current.setAttribute('aria-activedescendant', `${id}-option-${index}`);
    }
    if (onHighlightChange) {
      onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
    }
    if (!listboxRef.current) {
      return;
    }
    const prev = listboxRef.current.querySelector(`[role="option"].${unstable_classNamePrefix}-focused`);
    if (prev) {
      prev.classList.remove(`${unstable_classNamePrefix}-focused`);
      prev.classList.remove(`${unstable_classNamePrefix}-focusVisible`);
    }
    let listboxNode = listboxRef.current;
    if (listboxRef.current.getAttribute('role') !== 'listbox') {
      listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]');
    }

    // "No results"
    if (!listboxNode) {
      return;
    }
    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }
    const option = listboxRef.current.querySelector(`[data-option-index="${index}"]`);
    if (!option) {
      return;
    }
    option.classList.add(`${unstable_classNamePrefix}-focused`);
    if (reason === 'keyboard') {
      option.classList.add(`${unstable_classNamePrefix}-focusVisible`);
    }

    // Scroll active descendant into view.
    // Logic copied from https://www.w3.org/WAI/content-assets/wai-aria-practices/patterns/combobox/examples/js/select-only.js
    // In case of mouse clicks and touch (in mobile devices) we avoid scrolling the element and keep both behaviors same.
    // Consider this API instead once it has a better browser support:
    // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });
    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse' && reason !== 'touch') {
      const element = option;
      const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      const elementBottom = element.offsetTop + element.offsetHeight;
      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  const changeHighlightedIndex = (0, _utils.unstable_useEventCallback)(({
    event,
    diff,
    direction = 'next',
    reason = 'auto'
  }) => {
    if (!popupOpen) {
      return;
    }
    const getNextIndex = () => {
      const maxIndex = filteredOptions.length - 1;
      if (diff === 'reset') {
        return defaultHighlighted;
      }
      if (diff === 'start') {
        return 0;
      }
      if (diff === 'end') {
        return maxIndex;
      }
      const newIndex = highlightedIndexRef.current + diff;
      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }
        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }
        return maxIndex;
      }
      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }
        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }
        return 0;
      }
      return newIndex;
    };
    const nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason,
      event
    });

    // Sync the content of the input with the highlighted option.
    if (autoComplete && diff !== 'reset') {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        const option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option;

        // The portion of the selected suggestion that has not been typed by the user,
        // a completion string, appears inline after the input cursor in the textbox.
        const index = option.toLowerCase().indexOf(inputValue.toLowerCase());
        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  const checkHighlightedOptionExists = () => {
    const isSameValue = (value1, value2) => {
      const label1 = value1 ? getOptionLabel(value1) : '';
      const label2 = value2 ? getOptionLabel(value2) : '';
      return label1 === label2;
    };
    if (highlightedIndexRef.current !== -1 && previousProps.filteredOptions && previousProps.filteredOptions.length !== filteredOptions.length && previousProps.inputValue === inputValue && (multiple ? value.length === previousProps.value.length && previousProps.value.every((val, i) => getOptionLabel(value[i]) === getOptionLabel(val)) : isSameValue(previousProps.value, value))) {
      const previousHighlightedOption = previousProps.filteredOptions[highlightedIndexRef.current];
      if (previousHighlightedOption) {
        const previousHighlightedOptionExists = filteredOptions.some(option => {
          return getOptionLabel(option) === getOptionLabel(previousHighlightedOption);
        });
        if (previousHighlightedOptionExists) {
          return true;
        }
      }
    }
    return false;
  };
  const syncHighlightedIndex = React.useCallback(() => {
    if (!popupOpen) {
      return;
    }

    // Check if the previously highlighted option still exists in the updated filtered options list and if the value and inputValue haven't changed
    // If it exists and the value and the inputValue haven't changed, return, otherwise continue execution
    if (checkHighlightedOptionExists()) {
      return;
    }
    const valueItem = multiple ? value[0] : value;

    // The popup is empty, reset
    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: 'reset'
      });
      return;
    }
    if (!listboxRef.current) {
      return;
    }

    // Synchronize the value with the highlighted index
    if (valueItem != null) {
      const currentOption = filteredOptions[highlightedIndexRef.current];

      // Keep the current highlighted index if possible
      if (multiple && currentOption && findIndex(value, val => isOptionEqualToValue(currentOption, val)) !== -1) {
        return;
      }
      const itemIndex = findIndex(filteredOptions, optionItem => isOptionEqualToValue(optionItem, valueItem));
      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: 'reset'
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }
      return;
    }

    // Prevent the highlighted index to leak outside the boundaries.
    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    }

    // Restore the focus to the previous index.
    setHighlightedIndex({
      index: highlightedIndexRef.current
    });
    // Ignore filteredOptions (and options, isOptionEqualToValue, getOptionLabel) not to break the scroll position
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
  // Only sync the highlighted index when the option switch between empty and not
  filteredOptions.length,
  // Don't sync the highlighted index with the value when multiple
  // eslint-disable-next-line react-hooks/exhaustive-deps
  multiple ? false : value, filterSelectedOptions, changeHighlightedIndex, setHighlightedIndex, popupOpen, inputValue, multiple]);
  const handleListboxRef = (0, _utils.unstable_useEventCallback)(node => {
    (0, _utils.unstable_setRef)(listboxRef, node);
    if (!node) {
      return;
    }
    syncHighlightedIndex();
  });
  if (false) {}
  React.useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);
  const handleOpen = event => {
    if (open) {
      return;
    }
    setOpenState(true);
    setInputPristine(true);
    if (onOpen) {
      onOpen(event);
    }
  };
  const handleClose = (event, reason) => {
    if (!open) {
      return;
    }
    setOpenState(false);
    if (onClose) {
      onClose(event, reason);
    }
  };
  const handleValue = (event, newValue, reason, details) => {
    if (multiple) {
      if (value.length === newValue.length && value.every((val, i) => val === newValue[i])) {
        return;
      }
    } else if (value === newValue) {
      return;
    }
    if (onChange) {
      onChange(event, newValue, reason, details);
    }
    setValueState(newValue);
  };
  const isTouch = React.useRef(false);
  const selectNewValue = (event, option, reasonProp = 'selectOption', origin = 'options') => {
    let reason = reasonProp;
    let newValue = option;
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      if (false) {}
      const itemIndex = findIndex(newValue, valueItem => isOptionEqualToValue(option, valueItem));
      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== 'freeSolo') {
        newValue.splice(itemIndex, 1);
        reason = 'removeOption';
      }
    }
    resetInputValue(event, newValue);
    handleValue(event, newValue, reason, {
      option
    });
    if (!disableCloseOnSelect && (!event || !event.ctrlKey && !event.metaKey)) {
      handleClose(event, reason);
    }
    if (blurOnSelect === true || blurOnSelect === 'touch' && isTouch.current || blurOnSelect === 'mouse' && !isTouch.current) {
      inputRef.current.blur();
    }
  };
  function validTagIndex(index, direction) {
    if (index === -1) {
      return -1;
    }
    let nextFocus = index;
    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === value.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }
      const option = anchorEl.querySelector(`[data-tag-index="${nextFocus}"]`);

      // Same logic as MenuList.js
      if (!option || !option.hasAttribute('tabindex') || option.disabled || option.getAttribute('aria-disabled') === 'true') {
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }
  const handleFocusTag = (event, direction) => {
    if (!multiple) {
      return;
    }
    if (inputValue === '') {
      handleClose(event, 'toggleInput');
    }
    let nextTag = focusedTag;
    if (focusedTag === -1) {
      if (inputValue === '' && direction === 'previous') {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === 'next' ? 1 : -1;
      if (nextTag < 0) {
        nextTag = 0;
      }
      if (nextTag === value.length) {
        nextTag = -1;
      }
    }
    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };
  const handleClear = event => {
    ignoreFocus.current = true;
    setInputValueState('');
    if (onInputChange) {
      onInputChange(event, '', 'clear');
    }
    handleValue(event, multiple ? [] : null, 'clear');
  };
  const handleKeyDown = other => event => {
    if (other.onKeyDown) {
      other.onKeyDown(event);
    }
    if (event.defaultMuiPrevented) {
      return;
    }
    if (focusedTag !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1) {
      setFocusedTag(-1);
      focusTag(-1);
    }

    // Wait until IME is settled.
    if (event.which !== 229) {
      switch (event.key) {
        case 'Home':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'start',
              direction: 'next',
              reason: 'keyboard',
              event
            });
          }
          break;
        case 'End':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'end',
              direction: 'previous',
              reason: 'keyboard',
              event
            });
          }
          break;
        case 'PageUp':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: 'previous',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;
        case 'PageDown':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: 'next',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;
        case 'ArrowDown':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: 'next',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;
        case 'ArrowUp':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: 'previous',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;
        case 'ArrowLeft':
          handleFocusTag(event, 'previous');
          break;
        case 'ArrowRight':
          handleFocusTag(event, 'next');
          break;
        case 'Enter':
          if (highlightedIndexRef.current !== -1 && popupOpen) {
            const option = filteredOptions[highlightedIndexRef.current];
            const disabled = getOptionDisabled ? getOptionDisabled(option) : false;

            // Avoid early form validation, let the end-users continue filling the form.
            event.preventDefault();
            if (disabled) {
              return;
            }
            selectNewValue(event, option, 'selectOption');

            // Move the selection to the end.
            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
            if (multiple) {
              // Allow people to add new values before they submit the form.
              event.preventDefault();
            }
            selectNewValue(event, inputValue, 'createOption', 'freeSolo');
          }
          break;
        case 'Escape':
          if (popupOpen) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault();
            // Avoid the Modal to handle the event.
            event.stopPropagation();
            handleClose(event, 'escape');
          } else if (clearOnEscape && (inputValue !== '' || multiple && value.length > 0)) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault();
            // Avoid the Modal to handle the event.
            event.stopPropagation();
            handleClear(event);
          }
          break;
        case 'Backspace':
          if (multiple && !readOnly && inputValue === '' && value.length > 0) {
            const index = focusedTag === -1 ? value.length - 1 : focusedTag;
            const newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, 'removeOption', {
              option: value[index]
            });
          }
          break;
        case 'Delete':
          if (multiple && !readOnly && inputValue === '' && value.length > 0 && focusedTag !== -1) {
            const index = focusedTag;
            const newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, 'removeOption', {
              option: value[index]
            });
          }
          break;
        default:
      }
    }
  };
  const handleFocus = event => {
    setFocused(true);
    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };
  const handleBlur = event => {
    // Ignore the event when using the scrollbar with IE11
    if (unstable_isActiveElementInListbox(listboxRef)) {
      inputRef.current.focus();
      return;
    }
    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;
    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
    } else if (autoSelect && freeSolo && inputValue !== '') {
      selectNewValue(event, inputValue, 'blur', 'freeSolo');
    } else if (clearOnBlur) {
      resetInputValue(event, value);
    }
    handleClose(event, 'blur');
  };
  const handleInputChange = event => {
    const newValue = event.target.value;
    if (inputValue !== newValue) {
      setInputValueState(newValue);
      setInputPristine(false);
      if (onInputChange) {
        onInputChange(event, newValue, 'input');
      }
    }
    if (newValue === '') {
      if (!disableClearable && !multiple) {
        handleValue(event, null, 'clear');
      }
    } else {
      handleOpen(event);
    }
  };
  const handleOptionMouseMove = event => {
    const index = Number(event.currentTarget.getAttribute('data-option-index'));
    if (highlightedIndexRef.current !== index) {
      setHighlightedIndex({
        event,
        index,
        reason: 'mouse'
      });
    }
  };
  const handleOptionTouchStart = event => {
    setHighlightedIndex({
      event,
      index: Number(event.currentTarget.getAttribute('data-option-index')),
      reason: 'touch'
    });
    isTouch.current = true;
  };
  const handleOptionClick = event => {
    const index = Number(event.currentTarget.getAttribute('data-option-index'));
    selectNewValue(event, filteredOptions[index], 'selectOption');
    isTouch.current = false;
  };
  const handleTagDelete = index => event => {
    const newValue = value.slice();
    newValue.splice(index, 1);
    handleValue(event, newValue, 'removeOption', {
      option: value[index]
    });
  };
  const handlePopupIndicator = event => {
    if (open) {
      handleClose(event, 'toggleInput');
    } else {
      handleOpen(event);
    }
  };

  // Prevent input blur when interacting with the combobox
  const handleMouseDown = event => {
    // Prevent focusing the input if click is anywhere outside the Autocomplete
    if (!event.currentTarget.contains(event.target)) {
      return;
    }
    if (event.target.getAttribute('id') !== id) {
      event.preventDefault();
    }
  };

  // Focus the input when interacting with the combobox
  const handleClick = event => {
    // Prevent focusing the input if click is anywhere outside the Autocomplete
    if (!event.currentTarget.contains(event.target)) {
      return;
    }
    inputRef.current.focus();
    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }
    firstFocus.current = false;
  };
  const handleInputMouseDown = event => {
    if (!disabledProp && (inputValue === '' || !open)) {
      handlePopupIndicator(event);
    }
  };
  let dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  let groupedOptions = filteredOptions;
  if (groupBy) {
    // used to keep track of key and indexes in the result array
    const indexBy = new Map();
    let warn = false;
    groupedOptions = filteredOptions.reduce((acc, option, index) => {
      const group = groupBy(option);
      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (false) {}
        acc.push({
          key: index,
          index,
          group,
          options: [option]
        });
      }
      return acc;
    }, []);
  }
  if (disabledProp && focused) {
    handleBlur();
  }
  return {
    getRootProps: (other = {}) => (0, _extends2.default)({
      'aria-owns': listboxAvailable ? `${id}-listbox` : null
    }, other, {
      onKeyDown: handleKeyDown(other),
      onMouseDown: handleMouseDown,
      onClick: handleClick
    }),
    getInputLabelProps: () => ({
      id: `${id}-label`,
      htmlFor: id
    }),
    getInputProps: () => ({
      id,
      value: inputValue,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onChange: handleInputChange,
      onMouseDown: handleInputMouseDown,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      'aria-activedescendant': popupOpen ? '' : null,
      'aria-autocomplete': autoComplete ? 'both' : 'list',
      'aria-controls': listboxAvailable ? `${id}-listbox` : undefined,
      'aria-expanded': listboxAvailable,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: 'off',
      ref: inputRef,
      autoCapitalize: 'none',
      spellCheck: 'false',
      role: 'combobox',
      disabled: disabledProp
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: 'button',
      onClick: handleClear
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: 'button',
      onClick: handlePopupIndicator
    }),
    getTagProps: ({
      index
    }) => (0, _extends2.default)({
      key: index,
      'data-tag-index': index,
      tabIndex: -1
    }, !readOnly && {
      onDelete: handleTagDelete(index)
    }),
    getListboxProps: () => ({
      role: 'listbox',
      id: `${id}-listbox`,
      'aria-labelledby': `${id}-label`,
      ref: handleListboxRef,
      onMouseDown: event => {
        // Prevent blur
        event.preventDefault();
      }
    }),
    getOptionProps: ({
      index,
      option
    }) => {
      const selected = (multiple ? value : [value]).some(value2 => value2 != null && isOptionEqualToValue(option, value2));
      const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: getOptionLabel(option),
        tabIndex: -1,
        role: 'option',
        id: `${id}-option-${index}`,
        onMouseMove: handleOptionMouseMove,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected
      };
    },
    id,
    inputValue,
    value,
    dirty,
    expanded: popupOpen && anchorEl,
    popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl,
    setAnchorEl,
    focusedTag,
    groupedOptions
  };
}

/***/ }),

/***/ 41138:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useBadge: true
};
Object.defineProperty(exports, "useBadge", ({
  enumerable: true,
  get: function () {
    return _useBadge.useBadge;
  }
}));
var _useBadge = __webpack_require__(36631);
var _useBadge2 = __webpack_require__(58464);
Object.keys(_useBadge2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useBadge2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useBadge2[key];
    }
  });
});

/***/ }),

/***/ 36631:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useBadge = useBadge;
var _utils = __webpack_require__(90480);
/**
 *
 * Demos:
 *
 * - [Badge](https://mui.com/base-ui/react-badge/#hook)
 *
 * API:
 *
 * - [useBadge API](https://mui.com/base-ui/react-badge/hooks-api/#use-badge)
 */
function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false
  } = parameters;
  const prevProps = (0, _utils.usePreviousProps)({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  let invisible = invisibleProp;
  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }
  const {
    badgeContent,
    max = maxProp
  } = invisible ? prevProps : parameters;
  const displayValue = badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max,
    displayValue
  };
}

/***/ }),

/***/ 58464:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 64877:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useButton: true
};
Object.defineProperty(exports, "useButton", ({
  enumerable: true,
  get: function () {
    return _useButton.useButton;
  }
}));
var _useButton = __webpack_require__(32945);
var _useButton2 = __webpack_require__(33880);
Object.keys(_useButton2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useButton2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useButton2[key];
    }
  });
});

/***/ }),

/***/ 32945:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useButton = useButton;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _extractEventHandlers = __webpack_require__(61843);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 *
 * Demos:
 *
 * - [Button](https://mui.com/base-ui/react-button/#hook)
 *
 * API:
 *
 * - [useButton API](https://mui.com/base-ui/react-button/hooks-api/#use-button)
 */
function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    href,
    rootRef: externalRef,
    tabIndex,
    to,
    type
  } = parameters;
  const buttonRef = React.useRef();
  const [active, setActive] = React.useState(false);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = (0, _utils.unstable_useIsFocusVisible)();
  const [focusVisible, setFocusVisible] = React.useState(false);
  if (disabled && !focusableWhenDisabled && focusVisible) {
    setFocusVisible(false);
  }
  React.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const [hostElementName, setHostElementName] = React.useState('');
  const createHandleMouseLeave = otherHandlers => event => {
    var _otherHandlers$onMous;
    if (focusVisible) {
      event.preventDefault();
    }
    (_otherHandlers$onMous = otherHandlers.onMouseLeave) == null || _otherHandlers$onMous.call(otherHandlers, event);
  };
  const createHandleBlur = otherHandlers => event => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
  };
  const createHandleFocus = otherHandlers => event => {
    var _otherHandlers$onFocu2;
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      var _otherHandlers$onFocu;
      setFocusVisible(true);
      (_otherHandlers$onFocu = otherHandlers.onFocusVisible) == null || _otherHandlers$onFocu.call(otherHandlers, event);
    }
    (_otherHandlers$onFocu2 = otherHandlers.onFocus) == null || _otherHandlers$onFocu2.call(otherHandlers, event);
  };
  const isNativeButton = () => {
    const button = buttonRef.current;
    return hostElementName === 'BUTTON' || hostElementName === 'INPUT' && ['button', 'submit', 'reset'].includes(button == null ? void 0 : button.type) || hostElementName === 'A' && (button == null ? void 0 : button.href);
  };
  const createHandleClick = otherHandlers => event => {
    if (!disabled) {
      var _otherHandlers$onClic;
      (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    }
  };
  const createHandleMouseDown = otherHandlers => event => {
    var _otherHandlers$onMous2;
    if (!disabled) {
      setActive(true);
      document.addEventListener('mouseup', () => {
        setActive(false);
      }, {
        once: true
      });
    }
    (_otherHandlers$onMous2 = otherHandlers.onMouseDown) == null || _otherHandlers$onMous2.call(otherHandlers, event);
  };
  const createHandleKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.target === event.currentTarget && !isNativeButton() && event.key === ' ') {
      event.preventDefault();
    }
    if (event.target === event.currentTarget && event.key === ' ' && !disabled) {
      setActive(true);
    }

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && !isNativeButton() && event.key === 'Enter' && !disabled) {
      var _otherHandlers$onClic2;
      (_otherHandlers$onClic2 = otherHandlers.onClick) == null || _otherHandlers$onClic2.call(otherHandlers, event);
      event.preventDefault();
    }
  };
  const createHandleKeyUp = otherHandlers => event => {
    var _otherHandlers$onKeyU;
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0

    if (event.target === event.currentTarget) {
      setActive(false);
    }
    (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null || _otherHandlers$onKeyU.call(otherHandlers, event);

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && !isNativeButton() && !disabled && event.key === ' ' && !event.defaultMuiPrevented) {
      var _otherHandlers$onClic3;
      (_otherHandlers$onClic3 = otherHandlers.onClick) == null || _otherHandlers$onClic3.call(otherHandlers, event);
    }
  };
  const updateHostElementName = React.useCallback(instance => {
    var _instance$tagName;
    setHostElementName((_instance$tagName = instance == null ? void 0 : instance.tagName) != null ? _instance$tagName : '');
  }, []);
  const handleRef = (0, _utils.unstable_useForkRef)(updateHostElementName, externalRef, focusVisibleRef, buttonRef);
  const buttonProps = {};
  if (tabIndex !== undefined) {
    buttonProps.tabIndex = tabIndex;
  }
  if (hostElementName === 'BUTTON') {
    buttonProps.type = type != null ? type : 'button';
    if (focusableWhenDisabled) {
      buttonProps['aria-disabled'] = disabled;
    } else {
      buttonProps.disabled = disabled;
    }
  } else if (hostElementName !== '') {
    if (!href && !to) {
      buttonProps.role = 'button';
      buttonProps.tabIndex = tabIndex != null ? tabIndex : 0;
    }
    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
      buttonProps.tabIndex = focusableWhenDisabled ? tabIndex != null ? tabIndex : 0 : -1;
    }
  }
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = (0, _extends2.default)({}, (0, _extractEventHandlers.extractEventHandlers)(parameters), (0, _extractEventHandlers.extractEventHandlers)(externalProps));
    const props = (0, _extends2.default)({
      type
    }, externalEventHandlers, buttonProps, externalProps, {
      onBlur: createHandleBlur(externalEventHandlers),
      onClick: createHandleClick(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      onKeyUp: createHandleKeyUp(externalEventHandlers),
      onMouseDown: createHandleMouseDown(externalEventHandlers),
      onMouseLeave: createHandleMouseLeave(externalEventHandlers),
      ref: handleRef
    });

    // onFocusVisible can be present on the props or parameters,
    // but it's not a valid React event handler so it must not be forwarded to the inner component.
    // If present, it will be handled by the focus handler.
    delete props.onFocusVisible;
    return props;
  };
  return {
    getRootProps,
    focusVisible,
    setFocusVisible,
    active,
    rootRef: handleRef
  };
}

/***/ }),

/***/ 33880:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 15611:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DropdownContext = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DropdownContext = exports.DropdownContext = /*#__PURE__*/React.createContext(null);

/***/ }),

/***/ 25912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.dropdownReducer = dropdownReducer;
var _useDropdown = __webpack_require__(7117);
function dropdownReducer(state, action) {
  switch (action.type) {
    case _useDropdown.DropdownActionTypes.blur:
      return {
        open: false
      };
    case _useDropdown.DropdownActionTypes.escapeKeyDown:
      return {
        open: false
      };
    case _useDropdown.DropdownActionTypes.toggle:
      return {
        open: !state.open
      };
    case _useDropdown.DropdownActionTypes.open:
      return {
        open: true
      };
    case _useDropdown.DropdownActionTypes.close:
      return {
        open: false
      };
    default:
      throw new Error(`Unhandled action`);
  }
}

/***/ }),

/***/ 63329:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _useDropdown = __webpack_require__(43403);
Object.keys(_useDropdown).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useDropdown[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useDropdown[key];
    }
  });
});
var _useDropdown2 = __webpack_require__(7117);
Object.keys(_useDropdown2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useDropdown2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useDropdown2[key];
    }
  });
});
var _DropdownContext = __webpack_require__(15611);
Object.keys(_DropdownContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DropdownContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DropdownContext[key];
    }
  });
});

/***/ }),

/***/ 43403:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useDropdown = useDropdown;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useControllableReducer = __webpack_require__(98664);
var _useDropdown = __webpack_require__(7117);
var _dropdownReducer = __webpack_require__(25912);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base-ui/react-menu/#hooks)
 *
 * API:
 *
 * - [useDropdown API](https://mui.com/base-ui/react-menu/hooks-api/#use-dropdown)
 */
function useDropdown(parameters = {}) {
  const {
    defaultOpen,
    onOpenChange,
    open: openProp
  } = parameters;
  const [popupId, setPopupId] = React.useState('');
  const [triggerElement, setTriggerElement] = React.useState(null);
  const lastActionType = React.useRef(null);
  const handleStateChange = React.useCallback((event, field, value, reason) => {
    if (field === 'open') {
      onOpenChange == null || onOpenChange(event, value);
    }
    lastActionType.current = reason;
  }, [onOpenChange]);
  const controlledProps = React.useMemo(() => openProp !== undefined ? {
    open: openProp
  } : {}, [openProp]);
  const [state, dispatch] = (0, _useControllableReducer.useControllableReducer)({
    controlledProps,
    initialState: defaultOpen ? {
      open: true
    } : {
      open: false
    },
    onStateChange: handleStateChange,
    reducer: _dropdownReducer.dropdownReducer
  });
  React.useEffect(() => {
    if (!state.open && lastActionType.current !== null && lastActionType.current !== _useDropdown.DropdownActionTypes.blur) {
      triggerElement == null || triggerElement.focus();
    }
  }, [state.open, triggerElement]);
  const contextValue = {
    state,
    dispatch,
    popupId,
    registerPopup: setPopupId,
    registerTrigger: setTriggerElement,
    triggerElement
  };
  return {
    contextValue,
    open: state.open
  };
}

/***/ }),

/***/ 7117:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DropdownActionTypes = void 0;
const DropdownActionTypes = exports.DropdownActionTypes = {
  blur: 'dropdown:blur',
  escapeKeyDown: 'dropdown:escapeKeyDown',
  toggle: 'dropdown:toggle',
  open: 'dropdown:open',
  close: 'dropdown:close'
};

/***/ }),

/***/ 38407:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useInput: true
};
Object.defineProperty(exports, "useInput", ({
  enumerable: true,
  get: function () {
    return _useInput.useInput;
  }
}));
var _useInput = __webpack_require__(99409);
var _useInput2 = __webpack_require__(86580);
Object.keys(_useInput2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useInput2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useInput2[key];
    }
  });
});

/***/ }),

/***/ 99409:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useInput = useInput;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _utils = __webpack_require__(90480);
var React = _interopRequireWildcard(__webpack_require__(18038));
var _FormControl = __webpack_require__(39541);
var _extractEventHandlers = __webpack_require__(61843);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 *
 * Demos:
 *
 * - [Input](https://mui.com/base-ui/react-input/#hook)
 *
 * API:
 *
 * - [useInput API](https://mui.com/base-ui/react-input/hooks-api/#use-input)
 */
function useInput(parameters = {}) {
  const {
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onChange,
    onFocus,
    required: requiredProp = false,
    value: valueProp,
    inputRef: inputRefProp
  } = parameters;
  const formControlContext = (0, _FormControl.useFormControlContext)();
  let defaultValue;
  let disabled;
  let error;
  let required;
  let value;
  if (formControlContext) {
    var _formControlContext$d, _formControlContext$e, _formControlContext$r;
    defaultValue = undefined;
    disabled = (_formControlContext$d = formControlContext.disabled) != null ? _formControlContext$d : false;
    error = (_formControlContext$e = formControlContext.error) != null ? _formControlContext$e : false;
    required = (_formControlContext$r = formControlContext.required) != null ? _formControlContext$r : false;
    value = formControlContext.value;
    if (false) {}
  } else {
    defaultValue = defaultValueProp;
    disabled = disabledProp;
    error = errorProp;
    required = requiredProp;
    value = valueProp;
  }
  const {
    current: isControlled
  } = React.useRef(value != null);
  const handleInputRefWarning = React.useCallback(instance => {
    if (false) {}
  }, []);
  const inputRef = React.useRef(null);
  const handleInputRef = (0, _utils.unstable_useForkRef)(inputRef, inputRefProp, handleInputRefWarning);
  const [focused, setFocused] = React.useState(false);

  // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.
  React.useEffect(() => {
    if (!formControlContext && disabled && focused) {
      setFocused(false);

      // @ts-ignore
      onBlur == null || onBlur();
    }
  }, [formControlContext, disabled, focused, onBlur]);
  const handleFocus = otherHandlers => event => {
    var _otherHandlers$onFocu;
    // Fix a bug with IE11 where the focus/blur events are triggered
    // while the component is disabled.
    if (formControlContext != null && formControlContext.disabled) {
      event.stopPropagation();
      return;
    }
    (_otherHandlers$onFocu = otherHandlers.onFocus) == null || _otherHandlers$onFocu.call(otherHandlers, event);
    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;
      formControlContext == null || (_formControlContext$o = formControlContext.onFocus) == null || _formControlContext$o.call(formControlContext);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = otherHandlers => event => {
    var _otherHandlers$onBlur;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    } else {
      setFocused(false);
    }
  };
  const handleChange = otherHandlers => (event, ...args) => {
    var _formControlContext$o2, _otherHandlers$onChan;
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error( false ? 0 : (0, _utils.formatMuiErrorMessage)(17));
      }
    }
    formControlContext == null || (_formControlContext$o2 = formControlContext.onChange) == null || _formControlContext$o2.call(formControlContext, event);

    // @ts-ignore
    (_otherHandlers$onChan = otherHandlers.onChange) == null || _otherHandlers$onChan.call(otherHandlers, event, ...args);
  };
  const handleClick = otherHandlers => event => {
    var _otherHandlers$onClic;
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
  };
  const getRootProps = (externalProps = {}) => {
    // onBlur, onChange and onFocus are forwarded to the input slot.
    const propsEventHandlers = (0, _extractEventHandlers.extractEventHandlers)(parameters, ['onBlur', 'onChange', 'onFocus']);
    const externalEventHandlers = (0, _extends2.default)({}, propsEventHandlers, (0, _extractEventHandlers.extractEventHandlers)(externalProps));
    return (0, _extends2.default)({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers)
    });
  };
  const getInputProps = (externalProps = {}) => {
    const propsEventHandlers = {
      onBlur,
      onChange,
      onFocus
    };
    const externalEventHandlers = (0, _extends2.default)({}, propsEventHandlers, (0, _extractEventHandlers.extractEventHandlers)(externalProps));
    const mergedEventHandlers = (0, _extends2.default)({}, externalEventHandlers, {
      onBlur: handleBlur(externalEventHandlers),
      onChange: handleChange(externalEventHandlers),
      onFocus: handleFocus(externalEventHandlers)
    });
    return (0, _extends2.default)({}, mergedEventHandlers, {
      'aria-invalid': error || undefined,
      defaultValue: defaultValue,
      value: value,
      required,
      disabled
    }, externalProps, {
      ref: handleInputRef
    }, mergedEventHandlers);
  };
  return {
    disabled,
    error,
    focused,
    formControlContext,
    getInputProps,
    getRootProps,
    inputRef: handleInputRef,
    required,
    value
  };
}

/***/ }),

/***/ 86580:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 25294:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ListContext = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ListContext = exports.ListContext = /*#__PURE__*/React.createContext(null);
if (false) {}

/***/ }),

/***/ 63080:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useList: true,
  useListItem: true
};
Object.defineProperty(exports, "useList", ({
  enumerable: true,
  get: function () {
    return _useList.useList;
  }
}));
Object.defineProperty(exports, "useListItem", ({
  enumerable: true,
  get: function () {
    return _useListItem.useListItem;
  }
}));
var _useList = __webpack_require__(24308);
var _useList2 = __webpack_require__(53162);
Object.keys(_useList2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useList2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useList2[key];
    }
  });
});
var _useListItem = __webpack_require__(72179);
var _useListItem2 = __webpack_require__(80322);
Object.keys(_useListItem2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useListItem2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useListItem2[key];
    }
  });
});
var _listReducer = __webpack_require__(13780);
Object.keys(_listReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _listReducer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _listReducer[key];
    }
  });
});
var _listActions = __webpack_require__(99060);
Object.keys(_listActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _listActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _listActions[key];
    }
  });
});
var _ListContext = __webpack_require__(25294);
Object.keys(_ListContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ListContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ListContext[key];
    }
  });
});

/***/ }),

/***/ 99060:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ListActionTypes = void 0;
const ListActionTypes = exports.ListActionTypes = {
  blur: 'list:blur',
  focus: 'list:focus',
  itemClick: 'list:itemClick',
  itemHover: 'list:itemHover',
  itemsChange: 'list:itemsChange',
  keyDown: 'list:keyDown',
  resetHighlight: 'list:resetHighlight',
  textNavigation: 'list:textNavigation'
};

/**
 * A union of all standard actions that can be dispatched to the list reducer.
 */

/***/ }),

/***/ 13780:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.listReducer = listReducer;
exports.moveHighlight = moveHighlight;
exports.toggleSelection = toggleSelection;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _listActions = __webpack_require__(99060);
/**
 * Looks up the next valid item to highlight within the list.
 *
 * @param currentIndex The index of the start of the search.
 * @param lookupDirection Whether to look for the next or previous item.
 * @param items The array of items to search.
 * @param includeDisabledItems Whether to include disabled items in the search.
 * @param isItemDisabled A function that determines whether an item is disabled.
 * @param wrapAround Whether to wrap around the list when searching.
 * @returns The index of the next valid item to highlight or -1 if no valid item is found.
 */
function findValidItemToHighlight(currentIndex, lookupDirection, items, includeDisabledItems, isItemDisabled, wrapAround) {
  if (items.length === 0 || !includeDisabledItems && items.every((item, itemIndex) => isItemDisabled(item, itemIndex))) {
    return -1;
  }
  let nextFocus = currentIndex;
  for (;;) {
    // No valid items found
    if (!wrapAround && lookupDirection === 'next' && nextFocus === items.length || !wrapAround && lookupDirection === 'previous' && nextFocus === -1) {
      return -1;
    }
    const nextFocusDisabled = includeDisabledItems ? false : isItemDisabled(items[nextFocus], nextFocus);
    if (nextFocusDisabled) {
      nextFocus += lookupDirection === 'next' ? 1 : -1;
      if (wrapAround) {
        nextFocus = (nextFocus + items.length) % items.length;
      }
    } else {
      return nextFocus;
    }
  }
}

/**
 * Gets the next item to highlight based on the current highlighted item and the search direction.
 *
 * @param previouslyHighlightedValue The item from which to start the search for the next candidate.
 * @param offset The offset from the previously highlighted item to search for the next candidate or a special named value ('reset', 'start', 'end').
 * @param context The list action context.
 *
 * @returns The next item to highlight or null if no item is valid.
 */
function moveHighlight(previouslyHighlightedValue, offset, context) {
  var _items$nextIndex;
  const {
    items,
    isItemDisabled,
    disableListWrap,
    disabledItemsFocusable,
    itemComparer,
    focusManagement
  } = context;

  // TODO: make this configurable
  // The always should be an item highlighted when focus is managed by the DOM
  // so that it's accessible by the `tab` key.
  const defaultHighlightedIndex = focusManagement === 'DOM' ? 0 : -1;
  const maxIndex = items.length - 1;
  const previouslyHighlightedIndex = previouslyHighlightedValue == null ? -1 : items.findIndex(item => itemComparer(item, previouslyHighlightedValue));
  let nextIndexCandidate;
  let lookupDirection;
  let wrapAround = !disableListWrap;
  switch (offset) {
    case 'reset':
      if (defaultHighlightedIndex === -1) {
        return null;
      }
      nextIndexCandidate = 0;
      lookupDirection = 'next';
      wrapAround = false;
      break;
    case 'start':
      nextIndexCandidate = 0;
      lookupDirection = 'next';
      wrapAround = false;
      break;
    case 'end':
      nextIndexCandidate = maxIndex;
      lookupDirection = 'previous';
      wrapAround = false;
      break;
    default:
      {
        const newIndex = previouslyHighlightedIndex + offset;
        if (newIndex < 0) {
          if (!wrapAround && previouslyHighlightedIndex !== -1 || Math.abs(offset) > 1) {
            nextIndexCandidate = 0;
            lookupDirection = 'next';
          } else {
            nextIndexCandidate = maxIndex;
            lookupDirection = 'previous';
          }
        } else if (newIndex > maxIndex) {
          if (!wrapAround || Math.abs(offset) > 1) {
            nextIndexCandidate = maxIndex;
            lookupDirection = 'previous';
          } else {
            nextIndexCandidate = 0;
            lookupDirection = 'next';
          }
        } else {
          nextIndexCandidate = newIndex;
          lookupDirection = offset >= 0 ? 'next' : 'previous';
        }
      }
  }
  const nextIndex = findValidItemToHighlight(nextIndexCandidate, lookupDirection, items, disabledItemsFocusable, isItemDisabled, wrapAround);

  // If there are no valid items to highlight, return the previously highlighted item (if it's still valid).
  if (nextIndex === -1 && previouslyHighlightedValue !== null && !isItemDisabled(previouslyHighlightedValue, previouslyHighlightedIndex)) {
    return previouslyHighlightedValue;
  }
  return (_items$nextIndex = items[nextIndex]) != null ? _items$nextIndex : null;
}

/**
 * Toggles the selection of an item.
 *
 * @param item Item to toggle.
 * @param selectedValues Already selected items.
 * @param selectionMode The number of items that can be simultanously selected.
 * @param itemComparer A custom item comparer function.
 *
 * @returns The new array of selected items.
 */
function toggleSelection(item, selectedValues, selectionMode, itemComparer) {
  if (selectionMode === 'none') {
    return [];
  }
  if (selectionMode === 'single') {
    // if the item to select has already been selected, return the original array
    if (itemComparer(selectedValues[0], item)) {
      return selectedValues;
    }
    return [item];
  }

  // The toggled item is selected; remove it from the selection.
  if (selectedValues.some(sv => itemComparer(sv, item))) {
    return selectedValues.filter(sv => !itemComparer(sv, item));
  }

  // The toggled item is not selected - add it to the selection.
  return [...selectedValues, item];
}
function handleItemSelection(item, state, context) {
  const {
    itemComparer,
    isItemDisabled,
    selectionMode,
    items
  } = context;
  const {
    selectedValues
  } = state;
  const itemIndex = items.findIndex(i => itemComparer(item, i));
  if (isItemDisabled(item, itemIndex)) {
    return state;
  }

  // if the item is already selected, remove it from the selection, otherwise add it
  const newSelectedValues = toggleSelection(item, selectedValues, selectionMode, itemComparer);
  return (0, _extends2.default)({}, state, {
    selectedValues: newSelectedValues,
    highlightedValue: item
  });
}
function handleKeyDown(key, state, context) {
  const previouslySelectedValue = state.highlightedValue;
  const {
    orientation,
    pageSize
  } = context;
  switch (key) {
    case 'Home':
      return (0, _extends2.default)({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, 'start', context)
      });
    case 'End':
      return (0, _extends2.default)({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, 'end', context)
      });
    case 'PageUp':
      return (0, _extends2.default)({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, -pageSize, context)
      });
    case 'PageDown':
      return (0, _extends2.default)({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, pageSize, context)
      });
    case 'ArrowUp':
      if (orientation !== 'vertical') {
        break;
      }
      return (0, _extends2.default)({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, -1, context)
      });
    case 'ArrowDown':
      if (orientation !== 'vertical') {
        break;
      }
      return (0, _extends2.default)({}, state, {
        highlightedValue: moveHighlight(previouslySelectedValue, 1, context)
      });
    case 'ArrowLeft':
      {
        if (orientation === 'vertical') {
          break;
        }
        const offset = orientation === 'horizontal-ltr' ? -1 : 1;
        return (0, _extends2.default)({}, state, {
          highlightedValue: moveHighlight(previouslySelectedValue, offset, context)
        });
      }
    case 'ArrowRight':
      {
        if (orientation === 'vertical') {
          break;
        }
        const offset = orientation === 'horizontal-ltr' ? 1 : -1;
        return (0, _extends2.default)({}, state, {
          highlightedValue: moveHighlight(previouslySelectedValue, offset, context)
        });
      }
    case 'Enter':
    case ' ':
      if (state.highlightedValue === null) {
        return state;
      }
      return handleItemSelection(state.highlightedValue, state, context);
    default:
      break;
  }
  return state;
}
function handleBlur(state, context) {
  if (context.focusManagement === 'DOM') {
    return state;
  }
  return (0, _extends2.default)({}, state, {
    highlightedValue: null
  });
}
function textCriteriaMatches(nextFocus, searchString, stringifyItem) {
  var _stringifyItem;
  const text = (_stringifyItem = stringifyItem(nextFocus)) == null ? void 0 : _stringifyItem.trim().toLowerCase();
  if (!text || text.length === 0) {
    // Make item not navigable if stringification fails or results in empty string.
    return false;
  }
  return text.indexOf(searchString) === 0;
}
function handleTextNavigation(state, searchString, context) {
  const {
    items,
    isItemDisabled,
    disabledItemsFocusable,
    getItemAsString
  } = context;
  const startWithCurrentItem = searchString.length > 1;
  let nextItem = startWithCurrentItem ? state.highlightedValue : moveHighlight(state.highlightedValue, 1, context);
  for (let index = 0; index < items.length; index += 1) {
    // Return un-mutated state if looped back to the currently highlighted value
    if (!nextItem || !startWithCurrentItem && state.highlightedValue === nextItem) {
      return state;
    }
    if (textCriteriaMatches(nextItem, searchString, getItemAsString) && (!isItemDisabled(nextItem, items.indexOf(nextItem)) || disabledItemsFocusable)) {
      // The nextItem is the element to be highlighted
      return (0, _extends2.default)({}, state, {
        highlightedValue: nextItem
      });
    }
    // Move to the next element.
    nextItem = moveHighlight(nextItem, 1, context);
  }

  // No item matches the text search criteria
  return state;
}
function handleItemsChange(items, previousItems, state, context) {
  var _state$selectedValues;
  const {
    itemComparer,
    focusManagement
  } = context;
  let newHighlightedValue = null;
  if (state.highlightedValue != null) {
    var _items$find;
    newHighlightedValue = (_items$find = items.find(item => itemComparer(item, state.highlightedValue))) != null ? _items$find : null;
  } else if (focusManagement === 'DOM' && previousItems.length === 0) {
    newHighlightedValue = moveHighlight(null, 'reset', context);
  }

  // exclude selected values that are no longer in the items list
  const selectedValues = (_state$selectedValues = state.selectedValues) != null ? _state$selectedValues : [];
  const newSelectedValues = selectedValues.filter(selectedValue => items.some(item => itemComparer(item, selectedValue)));
  return (0, _extends2.default)({}, state, {
    highlightedValue: newHighlightedValue,
    selectedValues: newSelectedValues
  });
}
function handleResetHighlight(state, context) {
  return (0, _extends2.default)({}, state, {
    highlightedValue: moveHighlight(null, 'reset', context)
  });
}
function listReducer(state, action) {
  const {
    type,
    context
  } = action;
  switch (type) {
    case _listActions.ListActionTypes.keyDown:
      return handleKeyDown(action.key, state, context);
    case _listActions.ListActionTypes.itemClick:
      return handleItemSelection(action.item, state, context);
    case _listActions.ListActionTypes.blur:
      return handleBlur(state, context);
    case _listActions.ListActionTypes.textNavigation:
      return handleTextNavigation(state, action.searchString, context);
    case _listActions.ListActionTypes.itemsChange:
      return handleItemsChange(action.items, action.previousItems, state, context);
    case _listActions.ListActionTypes.resetHighlight:
      return handleResetHighlight(state, context);
    default:
      return state;
  }
}

/***/ }),

/***/ 24308:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useList = useList;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _listActions = __webpack_require__(99060);
var _listReducer = __webpack_require__(13780);
var _useListChangeNotifiers = __webpack_require__(73674);
var _useControllableReducer = __webpack_require__(98664);
var _areArraysEqual = __webpack_require__(49724);
var _useLatest = __webpack_require__(56653);
var _useTextNavigation = __webpack_require__(11946);
var _extractEventHandlers = __webpack_require__(61843);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const EMPTY_OBJECT = {};
const NOOP = () => {};
const defaultItemComparer = (optionA, optionB) => optionA === optionB;
const defaultIsItemDisabled = () => false;
const defaultItemStringifier = item => typeof item === 'string' ? item : String(item);
const defaultGetInitialState = () => ({
  highlightedValue: null,
  selectedValues: []
});

/**
 * The useList is a lower-level utility that is used to build list-like components.
 * It's used to manage the state of the list and its items.
 *
 * Supports highlighting a single item and selecting an arbitrary number of items.
 *
 * The state of the list is managed by a controllable reducer - that is a reducer that can have its state
 * controlled from outside.
 *
 * By default, the state consists of `selectedValues` and `highlightedValue` but can be extended by the caller of the hook.
 * Also the actions that can be dispatched and the reducer function can be defined externally.
 *
 * @template ItemValue The type of the item values.
 * @template State The type of the list state. This should be a subtype of `ListState<ItemValue>`.
 * @template CustomAction The type of the actions that can be dispatched (besides the standard ListAction).
 * @template CustomActionContext The shape of additional properties that will be added to actions when dispatched.
 *
 * @ignore - internal hook.
 */
function useList(params) {
  const {
    controlledProps = EMPTY_OBJECT,
    disabledItemsFocusable = false,
    disableListWrap = false,
    focusManagement = 'activeDescendant',
    getInitialState = defaultGetInitialState,
    getItemDomElement,
    getItemId,
    isItemDisabled = defaultIsItemDisabled,
    rootRef: externalListRef,
    onStateChange = NOOP,
    items,
    itemComparer = defaultItemComparer,
    getItemAsString = defaultItemStringifier,
    onChange,
    onHighlightChange,
    onItemsChange,
    orientation = 'vertical',
    pageSize = 5,
    reducerActionContext = EMPTY_OBJECT,
    selectionMode = 'single',
    stateReducer: externalReducer
  } = params;
  if (false) {}
  const listRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(externalListRef, listRef);
  const handleHighlightChange = React.useCallback((event, value, reason) => {
    onHighlightChange == null || onHighlightChange(event, value, reason);
    if (focusManagement === 'DOM' && value != null && (reason === _listActions.ListActionTypes.itemClick || reason === _listActions.ListActionTypes.keyDown || reason === _listActions.ListActionTypes.textNavigation)) {
      var _getItemDomElement;
      getItemDomElement == null || (_getItemDomElement = getItemDomElement(value)) == null || _getItemDomElement.focus();
    }
  }, [getItemDomElement, onHighlightChange, focusManagement]);
  const stateComparers = React.useMemo(() => ({
    highlightedValue: itemComparer,
    selectedValues: (valuesArray1, valuesArray2) => (0, _areArraysEqual.areArraysEqual)(valuesArray1, valuesArray2, itemComparer)
  }), [itemComparer]);

  // This gets called whenever a reducer changes the state.
  const handleStateChange = React.useCallback((event, field, value, reason, state) => {
    onStateChange == null || onStateChange(event, field, value, reason, state);
    switch (field) {
      case 'highlightedValue':
        handleHighlightChange(event, value, reason);
        break;
      case 'selectedValues':
        onChange == null || onChange(event, value, reason);
        break;
      default:
        break;
    }
  }, [handleHighlightChange, onChange, onStateChange]);

  // The following object is added to each action when it's dispatched.
  // It's accessible in the reducer via the `action.context` field.
  const listActionContext = React.useMemo(() => {
    return {
      disabledItemsFocusable,
      disableListWrap,
      focusManagement,
      isItemDisabled,
      itemComparer,
      items,
      getItemAsString,
      onHighlightChange: handleHighlightChange,
      orientation,
      pageSize,
      selectionMode,
      stateComparers
    };
  }, [disabledItemsFocusable, disableListWrap, focusManagement, isItemDisabled, itemComparer, items, getItemAsString, handleHighlightChange, orientation, pageSize, selectionMode, stateComparers]);
  const initialState = getInitialState();
  const reducer = externalReducer != null ? externalReducer : _listReducer.listReducer;
  const actionContext = React.useMemo(() => (0, _extends2.default)({}, reducerActionContext, listActionContext), [reducerActionContext, listActionContext]);
  const [state, dispatch] = (0, _useControllableReducer.useControllableReducer)({
    reducer,
    actionContext,
    initialState: initialState,
    controlledProps,
    stateComparers,
    onStateChange: handleStateChange
  });
  const {
    highlightedValue,
    selectedValues
  } = state;
  const handleTextNavigation = (0, _useTextNavigation.useTextNavigation)((searchString, event) => dispatch({
    type: _listActions.ListActionTypes.textNavigation,
    event,
    searchString
  }));

  // introducing refs to avoid recreating the getItemState function on each change.
  const latestSelectedValues = (0, _useLatest.useLatest)(selectedValues);
  const latestHighlightedValue = (0, _useLatest.useLatest)(highlightedValue);
  const previousItems = React.useRef([]);
  React.useEffect(() => {
    // Whenever the `items` object changes, we need to determine if the actual items changed.
    // If they did, we need to dispatch an `itemsChange` action, so the selected/highlighted state is updated.
    if ((0, _areArraysEqual.areArraysEqual)(previousItems.current, items, itemComparer)) {
      return;
    }
    dispatch({
      type: _listActions.ListActionTypes.itemsChange,
      event: null,
      items,
      previousItems: previousItems.current
    });
    previousItems.current = items;
    onItemsChange == null || onItemsChange(items);
  }, [items, itemComparer, dispatch, onItemsChange]);

  // Subitems are notified of changes to the highlighted and selected values.
  // This is not done via context because we don't want to trigger a re-render of all the subitems each time any of them changes state.
  // Instead, we use a custom message bus to publish messages about changes.
  // On the child component, we use a custom hook to subscribe to these messages and re-render only when the value they care about changes.
  const {
    notifySelectionChanged,
    notifyHighlightChanged,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  } = (0, _useListChangeNotifiers.useListChangeNotifiers)();
  React.useEffect(() => {
    notifySelectionChanged(selectedValues);
  }, [selectedValues, notifySelectionChanged]);
  React.useEffect(() => {
    notifyHighlightChanged(highlightedValue);
  }, [highlightedValue, notifyHighlightChanged]);
  const createHandleKeyDown = externalHandlers => event => {
    var _externalHandlers$onK;
    (_externalHandlers$onK = externalHandlers.onKeyDown) == null || _externalHandlers$onK.call(externalHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    const keysToPreventDefault = ['Home', 'End', 'PageUp', 'PageDown'];
    if (orientation === 'vertical') {
      keysToPreventDefault.push('ArrowUp', 'ArrowDown');
    } else {
      keysToPreventDefault.push('ArrowLeft', 'ArrowRight');
    }
    if (focusManagement === 'activeDescendant') {
      // When the child element is focused using the activeDescendant attribute,
      // the list handles keyboard events on its behalf.
      // We have to `preventDefault()` is this case to prevent the browser from
      // scrolling the view when space is pressed or submitting forms when enter is pressed.
      keysToPreventDefault.push(' ', 'Enter');
    }
    if (keysToPreventDefault.includes(event.key)) {
      event.preventDefault();
    }
    dispatch({
      type: _listActions.ListActionTypes.keyDown,
      key: event.key,
      event
    });
    handleTextNavigation(event);
  };
  const createHandleBlur = externalHandlers => event => {
    var _externalHandlers$onB, _listRef$current;
    (_externalHandlers$onB = externalHandlers.onBlur) == null || _externalHandlers$onB.call(externalHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if ((_listRef$current = listRef.current) != null && _listRef$current.contains(event.relatedTarget)) {
      // focus remains within the list
      return;
    }
    dispatch({
      type: _listActions.ListActionTypes.blur,
      event
    });
  };
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = (0, _extractEventHandlers.extractEventHandlers)(externalProps);
    return (0, _extends2.default)({}, externalProps, {
      'aria-activedescendant': focusManagement === 'activeDescendant' && highlightedValue != null ? getItemId(highlightedValue) : undefined,
      tabIndex: focusManagement === 'DOM' ? -1 : 0,
      ref: handleRef
    }, externalEventHandlers, {
      onBlur: createHandleBlur(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers)
    });
  };
  const getItemState = React.useCallback(item => {
    var _latestSelectedValues;
    const index = items.findIndex(i => itemComparer(i, item));
    const selected = ((_latestSelectedValues = latestSelectedValues.current) != null ? _latestSelectedValues : []).some(value => value != null && itemComparer(item, value));
    const disabled = isItemDisabled(item, index);
    const highlighted = latestHighlightedValue.current != null && itemComparer(item, latestHighlightedValue.current);
    const focusable = focusManagement === 'DOM';
    return {
      disabled,
      focusable,
      highlighted,
      index,
      selected
    };
  }, [items, isItemDisabled, itemComparer, latestSelectedValues, latestHighlightedValue, focusManagement]);
  const contextValue = React.useMemo(() => ({
    dispatch,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [dispatch, getItemState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  React.useDebugValue({
    state
  });
  return {
    contextValue,
    dispatch,
    getRootProps,
    rootRef: handleRef,
    state
  };
}

/***/ }),

/***/ 53162:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 73674:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useListChangeNotifiers = useListChangeNotifiers;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useMessageBus = __webpack_require__(44036);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const SELECTION_CHANGE_TOPIC = 'select:change-selection';
const HIGHLIGHT_CHANGE_TOPIC = 'select:change-highlight';
/**
 * @ignore - internal hook.
 *
 * This hook is used to notify any interested components about changes in the list's selection and highlight.
 */
function useListChangeNotifiers() {
  const messageBus = (0, _useMessageBus.useMessageBus)();
  const notifySelectionChanged = React.useCallback(newSelectedItems => {
    messageBus.publish(SELECTION_CHANGE_TOPIC, newSelectedItems);
  }, [messageBus]);
  const notifyHighlightChanged = React.useCallback(newHighlightedItem => {
    messageBus.publish(HIGHLIGHT_CHANGE_TOPIC, newHighlightedItem);
  }, [messageBus]);
  const registerSelectionChangeHandler = React.useCallback(handler => {
    return messageBus.subscribe(SELECTION_CHANGE_TOPIC, handler);
  }, [messageBus]);
  const registerHighlightChangeHandler = React.useCallback(handler => {
    return messageBus.subscribe(HIGHLIGHT_CHANGE_TOPIC, handler);
  }, [messageBus]);
  return {
    notifySelectionChanged,
    notifyHighlightChanged,
    registerSelectionChangeHandler,
    registerHighlightChangeHandler
  };
}

/***/ }),

/***/ 72179:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useListItem = useListItem;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _useForcedRerendering = __webpack_require__(25508);
var _extractEventHandlers = __webpack_require__(61843);
var _listActions = __webpack_require__(99060);
var _ListContext = __webpack_require__(25294);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Contains the logic for an item of a list-like component (e.g. Select, Menu, etc.).
 * It provides information about the item's state (selected, highlighted) and
 * handles the item's mouse events.
 *
 * @template ItemValue The type of the item's value. This should be consistent with the type of useList's `items` parameter.
 * @ignore - internal hook.
 */
function useListItem(parameters) {
  const {
    handlePointerOverEvents = false,
    item,
    rootRef: externalRef
  } = parameters;
  const itemRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(itemRef, externalRef);
  const listContext = React.useContext(_ListContext.ListContext);
  if (!listContext) {
    throw new Error('useListItem must be used within a ListProvider');
  }
  const {
    dispatch,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  } = listContext;
  const {
    highlighted,
    selected,
    focusable
  } = getItemState(item);
  const rerender = (0, _useForcedRerendering.useForcedRerendering)();
  (0, _utils.unstable_useEnhancedEffect)(() => {
    function updateHighlightedState(highlightedItem) {
      if (highlightedItem === item && !highlighted) {
        rerender();
      } else if (highlightedItem !== item && highlighted) {
        rerender();
      }
    }
    return registerHighlightChangeHandler(updateHighlightedState);
  });
  (0, _utils.unstable_useEnhancedEffect)(() => {
    function updateSelectedState(selectedItems) {
      if (!selected) {
        if (selectedItems.includes(item)) {
          rerender();
        }
      } else if (!selectedItems.includes(item)) {
        rerender();
      }
    }
    return registerSelectionChangeHandler(updateSelectedState);
  }, [registerSelectionChangeHandler, rerender, selected, item]);
  const createHandleClick = React.useCallback(externalHandlers => event => {
    var _externalHandlers$onC;
    (_externalHandlers$onC = externalHandlers.onClick) == null || _externalHandlers$onC.call(externalHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    dispatch({
      type: _listActions.ListActionTypes.itemClick,
      item,
      event
    });
  }, [dispatch, item]);
  const createHandlePointerOver = React.useCallback(externalHandlers => event => {
    var _externalHandlers$onM;
    (_externalHandlers$onM = externalHandlers.onMouseOver) == null || _externalHandlers$onM.call(externalHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    dispatch({
      type: _listActions.ListActionTypes.itemHover,
      item,
      event
    });
  }, [dispatch, item]);
  let tabIndex;
  if (focusable) {
    tabIndex = highlighted ? 0 : -1;
  }
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = (0, _extractEventHandlers.extractEventHandlers)(externalProps);
    return (0, _extends2.default)({}, externalProps, {
      onClick: createHandleClick(externalEventHandlers),
      onPointerOver: handlePointerOverEvents ? createHandlePointerOver(externalEventHandlers) : undefined,
      ref: handleRef,
      tabIndex
    });
  };
  return {
    getRootProps,
    highlighted,
    rootRef: handleRef,
    selected
  };
}

/***/ }),

/***/ 80322:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 30396:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useMenuButton: true
};
Object.defineProperty(exports, "useMenuButton", ({
  enumerable: true,
  get: function () {
    return _useMenuButton.useMenuButton;
  }
}));
var _useMenuButton = __webpack_require__(32708);
var _useMenuButton2 = __webpack_require__(27645);
Object.keys(_useMenuButton2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useMenuButton2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useMenuButton2[key];
    }
  });
});

/***/ }),

/***/ 32708:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useMenuButton = useMenuButton;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _DropdownContext = __webpack_require__(15611);
var _useDropdown = __webpack_require__(7117);
var _useButton = __webpack_require__(32945);
var _combineHooksSlotProps = __webpack_require__(5065);
var _utils2 = __webpack_require__(36610);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base-ui/react-menu/#hooks)
 *
 * API:
 *
 * - [useMenuButton API](https://mui.com/base-ui/react-menu/hooks-api/#use-menu-button)
 */
function useMenuButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    rootRef: externalRef
  } = parameters;
  const menuContext = React.useContext(_DropdownContext.DropdownContext);
  if (menuContext === null) {
    throw new Error('useMenuButton: no menu context available.');
  }
  const {
    state,
    dispatch,
    registerTrigger,
    popupId
  } = menuContext;
  const {
    getRootProps: getButtonRootProps,
    rootRef: buttonRootRef,
    active
  } = (0, _useButton.useButton)({
    disabled,
    focusableWhenDisabled,
    rootRef: externalRef
  });
  const handleRef = (0, _utils.unstable_useForkRef)(buttonRootRef, registerTrigger);
  const createHandleClick = otherHandlers => event => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    dispatch({
      type: _useDropdown.DropdownActionTypes.toggle,
      event
    });
  };
  const createHandleKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      dispatch({
        type: _useDropdown.DropdownActionTypes.open,
        event
      });
    }
  };
  const getOwnRootProps = (otherHandlers = {}) => ({
    onClick: createHandleClick(otherHandlers),
    onKeyDown: createHandleKeyDown(otherHandlers)
  });
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = (0, _utils2.extractEventHandlers)(externalProps);
    const getCombinedProps = (0, _combineHooksSlotProps.combineHooksSlotProps)(getButtonRootProps, getOwnRootProps);
    return (0, _extends2.default)({
      'aria-haspopup': 'menu',
      'aria-expanded': state.open,
      'aria-controls': popupId
    }, externalProps, externalEventHandlers, getCombinedProps(externalEventHandlers), {
      ref: handleRef
    });
  };
  return {
    active,
    getRootProps,
    open: state.open,
    rootRef: handleRef
  };
}

/***/ }),

/***/ 27645:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 78857:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useMenuItem: true
};
Object.defineProperty(exports, "useMenuItem", ({
  enumerable: true,
  get: function () {
    return _useMenuItem.useMenuItem;
  }
}));
var _useMenuItem = __webpack_require__(52889);
var _useMenuItem2 = __webpack_require__(82860);
Object.keys(_useMenuItem2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useMenuItem2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useMenuItem2[key];
    }
  });
});

/***/ }),

/***/ 52889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useMenuItem = useMenuItem;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _useButton = __webpack_require__(64877);
var _useList = __webpack_require__(63080);
var _useDropdown = __webpack_require__(63329);
var _DropdownContext = __webpack_require__(15611);
var _combineHooksSlotProps = __webpack_require__(5065);
var _useCompoundItem = __webpack_require__(28584);
var _extractEventHandlers = __webpack_require__(61843);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function idGenerator(existingKeys) {
  return `menu-item-${existingKeys.size}`;
}
const FALLBACK_MENU_CONTEXT = {
  dispatch: () => {},
  popupId: '',
  registerPopup: () => {},
  registerTrigger: () => {},
  state: {
    open: true
  },
  triggerElement: null
};

/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base-ui/react-menu/#hooks)
 *
 * API:
 *
 * - [useMenuItem API](https://mui.com/base-ui/react-menu/hooks-api/#use-menu-item)
 */
function useMenuItem(params) {
  var _React$useContext;
  const {
    disabled = false,
    id: idParam,
    rootRef: externalRef,
    label
  } = params;
  const id = (0, _utils.unstable_useId)(idParam);
  const itemRef = React.useRef(null);
  const itemMetadata = React.useMemo(() => ({
    disabled,
    id: id != null ? id : '',
    label,
    ref: itemRef
  }), [disabled, id, label]);
  const {
    dispatch
  } = (_React$useContext = React.useContext(_DropdownContext.DropdownContext)) != null ? _React$useContext : FALLBACK_MENU_CONTEXT;
  const {
    getRootProps: getListRootProps,
    highlighted,
    rootRef: listItemRefHandler
  } = (0, _useList.useListItem)({
    item: id
  });
  const {
    index,
    totalItemCount
  } = (0, _useCompoundItem.useCompoundItem)(id != null ? id : idGenerator, itemMetadata);
  const {
    getRootProps: getButtonProps,
    focusVisible,
    rootRef: buttonRefHandler
  } = (0, _useButton.useButton)({
    disabled,
    focusableWhenDisabled: true
  });
  const handleRef = (0, _utils.unstable_useForkRef)(listItemRefHandler, buttonRefHandler, externalRef, itemRef);
  React.useDebugValue({
    id,
    highlighted,
    disabled,
    label
  });
  const createHandleClick = otherHandlers => event => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    dispatch({
      type: _useDropdown.DropdownActionTypes.close,
      event
    });
  };
  const getOwnHandlers = (otherHandlers = {}) => (0, _extends2.default)({}, otherHandlers, {
    onClick: createHandleClick(otherHandlers)
  });
  function getRootProps(externalProps = {}) {
    const externalEventHandlers = (0, _extractEventHandlers.extractEventHandlers)(externalProps);
    const getCombinedRootProps = (0, _combineHooksSlotProps.combineHooksSlotProps)(getOwnHandlers, (0, _combineHooksSlotProps.combineHooksSlotProps)(getButtonProps, getListRootProps));
    return (0, _extends2.default)({}, externalProps, externalEventHandlers, getCombinedRootProps(externalEventHandlers), {
      ref: handleRef,
      role: 'menuitem'
    });
  }

  // If `id` is undefined (during SSR in React < 18), we fall back to rendering a simplified menu item
  // which does not have access to infortmation about its position or highlighted state.
  if (id === undefined) {
    return {
      getRootProps,
      disabled: false,
      focusVisible,
      highlighted: false,
      index: -1,
      totalItemCount: 0,
      rootRef: handleRef
    };
  }
  return {
    getRootProps,
    disabled,
    focusVisible,
    highlighted,
    index,
    totalItemCount,
    rootRef: handleRef
  };
}

/***/ }),

/***/ 82860:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 89423:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MenuProvider = MenuProvider;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _ListContext = __webpack_require__(25294);
var _useCompound = __webpack_require__(85777);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Sets up the contexts for the underlying MenuItem components.
 *
 * @ignore - do not document.
 */
function MenuProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [dispatch, getItemIndex, getItemState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  const compoundComponentContextValue = React.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_useCompound.CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListContext.ListContext.Provider, {
      value: listContextValue,
      children: children
    })
  });
}

/***/ }),

/***/ 17319:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useMenu: true
};
Object.defineProperty(exports, "useMenu", ({
  enumerable: true,
  get: function () {
    return _useMenu.useMenu;
  }
}));
var _useMenu = __webpack_require__(10714);
var _useMenu2 = __webpack_require__(85133);
Object.keys(_useMenu2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useMenu2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useMenu2[key];
    }
  });
});
var _MenuProvider = __webpack_require__(89423);
Object.keys(_MenuProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MenuProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MenuProvider[key];
    }
  });
});

/***/ }),

/***/ 49672:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.menuReducer = menuReducer;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _useList = __webpack_require__(63080);
function menuReducer(state, action) {
  if (action.type === _useList.ListActionTypes.itemHover) {
    return state;
  }
  const newState = (0, _useList.listReducer)(state, action);

  // make sure an item is always highlighted
  if (newState.highlightedValue === null && action.context.items.length > 0) {
    return (0, _extends2.default)({}, newState, {
      highlightedValue: action.context.items[0]
    });
  }
  if (action.type === _useList.ListActionTypes.keyDown) {
    if (action.event.key === 'Escape') {
      return (0, _extends2.default)({}, newState, {
        open: false
      });
    }
  }
  if (action.type === _useList.ListActionTypes.blur) {
    var _action$context$listb;
    if (!((_action$context$listb = action.context.listboxRef.current) != null && _action$context$listb.contains(action.event.relatedTarget))) {
      var _action$context$listb2, _action$event$related;
      // To prevent the menu from closing when the focus leaves the menu to the button.
      // For more details, see https://github.com/mui/material-ui/pull/36917#issuecomment-1566992698
      const listboxId = (_action$context$listb2 = action.context.listboxRef.current) == null ? void 0 : _action$context$listb2.getAttribute('id');
      const controlledBy = (_action$event$related = action.event.relatedTarget) == null ? void 0 : _action$event$related.getAttribute('aria-controls');
      if (listboxId && controlledBy && listboxId === controlledBy) {
        return newState;
      }
      return (0, _extends2.default)({}, newState, {
        open: false,
        highlightedValue: action.context.items[0]
      });
    }
  }
  return newState;
}

/***/ }),

/***/ 10714:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useMenu = useMenu;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _menuReducer = __webpack_require__(49672);
var _DropdownContext = __webpack_require__(15611);
var _useList = __webpack_require__(63080);
var _useDropdown = __webpack_require__(63329);
var _useCompound = __webpack_require__(85777);
var _combineHooksSlotProps = __webpack_require__(5065);
var _extractEventHandlers = __webpack_require__(61843);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const FALLBACK_MENU_CONTEXT = {
  dispatch: () => {},
  popupId: '',
  registerPopup: () => {},
  registerTrigger: () => {},
  state: {
    open: true
  },
  triggerElement: null
};

/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base-ui/react-menu/#hooks)
 *
 * API:
 *
 * - [useMenu API](https://mui.com/base-ui/react-menu/hooks-api/#use-menu)
 */
function useMenu(parameters = {}) {
  var _useId, _React$useContext;
  const {
    listboxRef: listboxRefProp,
    onItemsChange,
    id: idParam
  } = parameters;
  const rootRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(rootRef, listboxRefProp);
  const listboxId = (_useId = (0, _utils.unstable_useId)(idParam)) != null ? _useId : '';
  const {
    state: {
      open
    },
    dispatch: menuDispatch,
    triggerElement,
    registerPopup
  } = (_React$useContext = React.useContext(_DropdownContext.DropdownContext)) != null ? _React$useContext : FALLBACK_MENU_CONTEXT;

  // store the initial open state to prevent focus stealing
  // (the first menu items gets focued only when the menu is opened by the user)
  const isInitiallyOpen = React.useRef(open);
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = (0, _useCompound.useCompoundParent)();
  const subitemKeys = React.useMemo(() => Array.from(subitems.keys()), [subitems]);
  const getItemDomElement = React.useCallback(itemId => {
    var _subitems$get$ref$cur, _subitems$get;
    if (itemId == null) {
      return null;
    }
    return (_subitems$get$ref$cur = (_subitems$get = subitems.get(itemId)) == null ? void 0 : _subitems$get.ref.current) != null ? _subitems$get$ref$cur : null;
  }, [subitems]);
  const {
    dispatch: listDispatch,
    getRootProps: getListRootProps,
    contextValue: listContextValue,
    state: {
      highlightedValue
    },
    rootRef: mergedListRef
  } = (0, _useList.useList)({
    disabledItemsFocusable: true,
    focusManagement: 'DOM',
    getItemDomElement,
    getInitialState: () => ({
      selectedValues: [],
      highlightedValue: null
    }),
    isItemDisabled: id => {
      var _subitems$get2;
      return (subitems == null || (_subitems$get2 = subitems.get(id)) == null ? void 0 : _subitems$get2.disabled) || false;
    },
    items: subitemKeys,
    getItemAsString: id => {
      var _subitems$get3, _subitems$get4;
      return ((_subitems$get3 = subitems.get(id)) == null ? void 0 : _subitems$get3.label) || ((_subitems$get4 = subitems.get(id)) == null || (_subitems$get4 = _subitems$get4.ref.current) == null ? void 0 : _subitems$get4.innerText);
    },
    rootRef: handleRef,
    onItemsChange,
    reducerActionContext: {
      listboxRef: rootRef
    },
    selectionMode: 'none',
    stateReducer: _menuReducer.menuReducer
  });
  (0, _utils.unstable_useEnhancedEffect)(() => {
    registerPopup(listboxId);
  }, [listboxId, registerPopup]);
  React.useEffect(() => {
    if (open && highlightedValue === subitemKeys[0] && !isInitiallyOpen.current) {
      var _subitems$get5;
      (_subitems$get5 = subitems.get(subitemKeys[0])) == null || (_subitems$get5 = _subitems$get5.ref) == null || (_subitems$get5 = _subitems$get5.current) == null || _subitems$get5.focus();
    }
  }, [open, highlightedValue, subitems, subitemKeys]);
  React.useEffect(() => {
    var _rootRef$current;
    // set focus to the highlighted item (but prevent stealing focus from other elements on the page)
    if ((_rootRef$current = rootRef.current) != null && _rootRef$current.contains(document.activeElement) && highlightedValue !== null) {
      var _subitems$get6;
      subitems == null || (_subitems$get6 = subitems.get(highlightedValue)) == null || (_subitems$get6 = _subitems$get6.ref.current) == null || _subitems$get6.focus();
    }
  }, [highlightedValue, subitems]);
  const createHandleBlur = otherHandlers => event => {
    var _otherHandlers$onBlur, _rootRef$current2;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if ((_rootRef$current2 = rootRef.current) != null && _rootRef$current2.contains(event.relatedTarget) || event.relatedTarget === triggerElement) {
      return;
    }
    menuDispatch({
      type: _useDropdown.DropdownActionTypes.blur,
      event
    });
  };
  const createHandleKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.key === 'Escape') {
      menuDispatch({
        type: _useDropdown.DropdownActionTypes.escapeKeyDown,
        event
      });
    }
  };
  const getOwnListboxHandlers = (otherHandlers = {}) => ({
    onBlur: createHandleBlur(otherHandlers),
    onKeyDown: createHandleKeyDown(otherHandlers)
  });
  const getListboxProps = (externalProps = {}) => {
    const getCombinedRootProps = (0, _combineHooksSlotProps.combineHooksSlotProps)(getOwnListboxHandlers, getListRootProps);
    const externalEventHandlers = (0, _extractEventHandlers.extractEventHandlers)(externalProps);
    return (0, _extends2.default)({}, externalProps, externalEventHandlers, getCombinedRootProps(externalEventHandlers), {
      id: listboxId,
      role: 'menu'
    });
  };
  React.useDebugValue({
    subitems,
    highlightedValue
  });
  return {
    contextValue: (0, _extends2.default)({}, compoundComponentContextValue, listContextValue),
    dispatch: listDispatch,
    getListboxProps,
    highlightedValue,
    listboxRef: mergedListRef,
    menuItems: subitems,
    open,
    triggerElement
  };
}

/***/ }),

/***/ 85133:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 29199:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useOption: true
};
Object.defineProperty(exports, "useOption", ({
  enumerable: true,
  get: function () {
    return _useOption.useOption;
  }
}));
var _useOption = __webpack_require__(4270);
var _useOption2 = __webpack_require__(56248);
Object.keys(_useOption2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useOption2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useOption2[key];
    }
  });
});

/***/ }),

/***/ 4270:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useOption = useOption;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _extractEventHandlers = __webpack_require__(61843);
var _useList = __webpack_require__(63080);
var _useCompoundItem = __webpack_require__(28584);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 *
 * Demos:
 *
 * - [Select](https://mui.com/base-ui/react-select/#hooks)
 *
 * API:
 *
 * - [useOption API](https://mui.com/base-ui/react-select/hooks-api/#use-option)
 */
function useOption(params) {
  const {
    value,
    label,
    disabled,
    rootRef: optionRefParam,
    id: idParam
  } = params;
  const {
    getRootProps: getListItemProps,
    rootRef: listItemRefHandler,
    highlighted,
    selected
  } = (0, _useList.useListItem)({
    item: value
  });
  const id = (0, _utils.unstable_useId)(idParam);
  const optionRef = React.useRef(null);
  const selectOption = React.useMemo(() => ({
    disabled,
    label,
    value,
    ref: optionRef,
    id
  }), [disabled, label, value, id]);
  const {
    index
  } = (0, _useCompoundItem.useCompoundItem)(value, selectOption);
  const handleRef = (0, _utils.unstable_useForkRef)(optionRefParam, optionRef, listItemRefHandler);
  return {
    getRootProps: (externalProps = {}) => {
      const externalEventHandlers = (0, _extractEventHandlers.extractEventHandlers)(externalProps);
      return (0, _extends2.default)({}, externalProps, getListItemProps(externalEventHandlers), {
        id,
        ref: handleRef,
        role: 'option',
        'aria-selected': selected
      });
    },
    highlighted,
    index,
    selected,
    rootRef: handleRef
  };
}

/***/ }),

/***/ 56248:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 42463:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SelectProvider = SelectProvider;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _ListContext = __webpack_require__(25294);
var _useCompound = __webpack_require__(85777);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Sets up the contexts for the underlying Option components.
 *
 * @ignore - do not document.
 */
function SelectProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [dispatch, getItemIndex, getItemState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  const compoundComponentContextValue = React.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_useCompound.CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListContext.ListContext.Provider, {
      value: listContextValue,
      children: children
    })
  });
}

/***/ }),

/***/ 18312:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultOptionStringifier = void 0;
const defaultOptionStringifier = option => {
  const {
    label,
    value
  } = option;
  if (typeof label === 'string') {
    return label;
  }
  if (typeof value === 'string') {
    return value;
  }

  // Fallback string representation
  return String(option);
};
exports.defaultOptionStringifier = defaultOptionStringifier;

/***/ }),

/***/ 11909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useSelect: true
};
Object.defineProperty(exports, "useSelect", ({
  enumerable: true,
  get: function () {
    return _useSelect.useSelect;
  }
}));
var _useSelect = __webpack_require__(17779);
var _useSelect2 = __webpack_require__(12621);
Object.keys(_useSelect2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useSelect2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSelect2[key];
    }
  });
});
var _SelectProvider = __webpack_require__(42463);
Object.keys(_SelectProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SelectProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SelectProvider[key];
    }
  });
});

/***/ }),

/***/ 16993:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.selectReducer = selectReducer;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _useList = __webpack_require__(63080);
var _useSelect = __webpack_require__(12621);
function selectReducer(state, action) {
  const {
    open
  } = state;
  const {
    context: {
      selectionMode
    }
  } = action;
  if (action.type === _useSelect.SelectActionTypes.buttonClick) {
    var _state$selectedValues;
    const itemToHighlight = (_state$selectedValues = state.selectedValues[0]) != null ? _state$selectedValues : (0, _useList.moveHighlight)(null, 'start', action.context);
    return (0, _extends2.default)({}, state, {
      open: !open,
      highlightedValue: !open ? itemToHighlight : null
    });
  }
  const newState = (0, _useList.listReducer)(state, action);
  switch (action.type) {
    case _useList.ListActionTypes.keyDown:
      if (state.open) {
        if (action.event.key === 'Escape') {
          return (0, _extends2.default)({}, newState, {
            open: false
          });
        }
        if (selectionMode === 'single' && (action.event.key === 'Enter' || action.event.key === ' ')) {
          return (0, _extends2.default)({}, newState, {
            open: false
          });
        }
      } else {
        if (action.event.key === 'Enter' || action.event.key === ' ' || action.event.key === 'ArrowDown') {
          var _state$selectedValues2;
          return (0, _extends2.default)({}, state, {
            open: true,
            highlightedValue: (_state$selectedValues2 = state.selectedValues[0]) != null ? _state$selectedValues2 : (0, _useList.moveHighlight)(null, 'start', action.context)
          });
        }
        if (action.event.key === 'ArrowUp') {
          var _state$selectedValues3;
          return (0, _extends2.default)({}, state, {
            open: true,
            highlightedValue: (_state$selectedValues3 = state.selectedValues[0]) != null ? _state$selectedValues3 : (0, _useList.moveHighlight)(null, 'end', action.context)
          });
        }
      }
      break;
    case _useList.ListActionTypes.itemClick:
      if (selectionMode === 'single') {
        return (0, _extends2.default)({}, newState, {
          open: false
        });
      }
      break;
    case _useList.ListActionTypes.blur:
      return (0, _extends2.default)({}, newState, {
        open: false
      });
    default:
      return newState;
  }
  return newState;
}

/***/ }),

/***/ 17779:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useSelect = useSelect;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _useButton = __webpack_require__(64877);
var _useSelect = __webpack_require__(12621);
var _useList = __webpack_require__(63080);
var _defaultOptionStringifier = __webpack_require__(18312);
var _useCompound = __webpack_require__(85777);
var _extractEventHandlers = __webpack_require__(61843);
var _selectReducer = __webpack_require__(16993);
var _combineHooksSlotProps = __webpack_require__(5065);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// visually hidden style based on https://webaim.org/techniques/css/invisiblecontent/
const visuallyHiddenStyle = {
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'inset(50%)',
  height: '1px',
  width: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  left: '50%',
  bottom: 0 // to display the native browser validation error at the bottom of the Select.
};

const noop = () => {};
function defaultFormValueProvider(selectedOption) {
  if (Array.isArray(selectedOption)) {
    if (selectedOption.length === 0) {
      return '';
    }
    return JSON.stringify(selectedOption.map(o => o.value));
  }
  if ((selectedOption == null ? void 0 : selectedOption.value) == null) {
    return '';
  }
  if (typeof selectedOption.value === 'string' || typeof selectedOption.value === 'number') {
    return selectedOption.value;
  }
  return JSON.stringify(selectedOption.value);
}
function preventDefault(event) {
  event.preventDefault();
}

/**
 *
 * Demos:
 *
 * - [Select](https://mui.com/base-ui/react-select/#hooks)
 *
 * API:
 *
 * - [useSelect API](https://mui.com/base-ui/react-select/hooks-api/#use-select)
 */
function useSelect(props) {
  const {
    areOptionsEqual,
    buttonRef: buttonRefProp,
    defaultOpen = false,
    defaultValue: defaultValueProp,
    disabled = false,
    listboxId: listboxIdProp,
    listboxRef: listboxRefProp,
    multiple = false,
    name,
    required,
    onChange,
    onHighlightChange,
    onOpenChange,
    open: openProp,
    options: optionsParam,
    getOptionAsString = _defaultOptionStringifier.defaultOptionStringifier,
    getSerializedValue = defaultFormValueProvider,
    value: valueProp
  } = props;
  const buttonRef = React.useRef(null);
  const handleButtonRef = (0, _utils.unstable_useForkRef)(buttonRefProp, buttonRef);
  const listboxRef = React.useRef(null);
  const listboxId = (0, _utils.unstable_useId)(listboxIdProp);
  let defaultValue;
  if (valueProp === undefined && defaultValueProp === undefined) {
    defaultValue = [];
  } else if (defaultValueProp !== undefined) {
    if (multiple) {
      defaultValue = defaultValueProp;
    } else {
      defaultValue = defaultValueProp == null ? [] : [defaultValueProp];
    }
  }
  const value = React.useMemo(() => {
    if (valueProp !== undefined) {
      if (multiple) {
        return valueProp;
      }
      return valueProp == null ? [] : [valueProp];
    }
    return undefined;
  }, [valueProp, multiple]);
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = (0, _useCompound.useCompoundParent)();
  const options = React.useMemo(() => {
    if (optionsParam != null) {
      return new Map(optionsParam.map((option, index) => [option.value, {
        value: option.value,
        label: option.label,
        disabled: option.disabled,
        ref: /*#__PURE__*/React.createRef(),
        id: `${listboxId}_${index}`
      }]));
    }
    return subitems;
  }, [optionsParam, subitems, listboxId]);
  const handleListboxRef = (0, _utils.unstable_useForkRef)(listboxRefProp, listboxRef);
  const {
    getRootProps: getButtonRootProps,
    active: buttonActive,
    focusVisible: buttonFocusVisible,
    rootRef: mergedButtonRef
  } = (0, _useButton.useButton)({
    disabled,
    rootRef: handleButtonRef
  });
  const optionValues = React.useMemo(() => Array.from(options.keys()), [options]);
  const getOptionByValue = React.useCallback(valueToGet => {
    // This can't be simply `options.get(valueToGet)` because of the `areOptionsEqual` prop.
    // If it's provided, we assume that the user wants to compare the options by value.
    if (areOptionsEqual !== undefined) {
      const similarValue = optionValues.find(optionValue => areOptionsEqual(optionValue, valueToGet));
      return options.get(similarValue);
    }
    return options.get(valueToGet);
  }, [options, areOptionsEqual, optionValues]);
  const isItemDisabled = React.useCallback(valueToCheck => {
    var _option$disabled;
    const option = getOptionByValue(valueToCheck);
    return (_option$disabled = option == null ? void 0 : option.disabled) != null ? _option$disabled : false;
  }, [getOptionByValue]);
  const stringifyOption = React.useCallback(valueToCheck => {
    const option = getOptionByValue(valueToCheck);
    if (!option) {
      return '';
    }
    return getOptionAsString(option);
  }, [getOptionByValue, getOptionAsString]);
  const controlledState = React.useMemo(() => ({
    selectedValues: value,
    open: openProp
  }), [value, openProp]);
  const getItemId = React.useCallback(itemValue => {
    var _options$get;
    return (_options$get = options.get(itemValue)) == null ? void 0 : _options$get.id;
  }, [options]);
  const handleSelectionChange = React.useCallback((event, newValues) => {
    if (multiple) {
      onChange == null || onChange(event, newValues);
    } else {
      var _newValues$;
      onChange == null || onChange(event, (_newValues$ = newValues[0]) != null ? _newValues$ : null);
    }
  }, [multiple, onChange]);
  const handleHighlightChange = React.useCallback((event, newValue) => {
    onHighlightChange == null || onHighlightChange(event, newValue != null ? newValue : null);
  }, [onHighlightChange]);
  const handleStateChange = React.useCallback((event, field, fieldValue) => {
    if (field === 'open') {
      onOpenChange == null || onOpenChange(fieldValue);
      if (fieldValue === false && (event == null ? void 0 : event.type) !== 'blur') {
        var _buttonRef$current;
        (_buttonRef$current = buttonRef.current) == null || _buttonRef$current.focus();
      }
    }
  }, [onOpenChange]);
  const useListParameters = {
    getInitialState: () => {
      var _defaultValue;
      return {
        highlightedValue: null,
        selectedValues: (_defaultValue = defaultValue) != null ? _defaultValue : [],
        open: defaultOpen
      };
    },
    getItemId,
    controlledProps: controlledState,
    itemComparer: areOptionsEqual,
    isItemDisabled,
    rootRef: mergedButtonRef,
    onChange: handleSelectionChange,
    onHighlightChange: handleHighlightChange,
    onStateChange: handleStateChange,
    reducerActionContext: React.useMemo(() => ({
      multiple
    }), [multiple]),
    items: optionValues,
    getItemAsString: stringifyOption,
    selectionMode: multiple ? 'multiple' : 'single',
    stateReducer: _selectReducer.selectReducer
  };
  const {
    dispatch,
    getRootProps: getListboxRootProps,
    contextValue: listContextValue,
    state: {
      open,
      highlightedValue: highlightedOption,
      selectedValues: selectedOptions
    },
    rootRef: mergedListRootRef
  } = (0, _useList.useList)(useListParameters);
  const createHandleButtonMouseDown = externalEventHandlers => event => {
    var _externalEventHandler;
    externalEventHandlers == null || (_externalEventHandler = externalEventHandlers.onMouseDown) == null || _externalEventHandler.call(externalEventHandlers, event);
    if (!event.defaultMuiPrevented) {
      const action = {
        type: _useSelect.SelectActionTypes.buttonClick,
        event
      };
      dispatch(action);
    }
  };
  (0, _utils.unstable_useEnhancedEffect)(() => {
    // Scroll to the currently highlighted option.
    if (highlightedOption != null) {
      var _getOptionByValue;
      const optionRef = (_getOptionByValue = getOptionByValue(highlightedOption)) == null ? void 0 : _getOptionByValue.ref;
      if (!listboxRef.current || !(optionRef != null && optionRef.current)) {
        return;
      }
      const listboxClientRect = listboxRef.current.getBoundingClientRect();
      const optionClientRect = optionRef.current.getBoundingClientRect();
      if (optionClientRect.top < listboxClientRect.top) {
        listboxRef.current.scrollTop -= listboxClientRect.top - optionClientRect.top;
      } else if (optionClientRect.bottom > listboxClientRect.bottom) {
        listboxRef.current.scrollTop += optionClientRect.bottom - listboxClientRect.bottom;
      }
    }
  }, [highlightedOption, getOptionByValue]);
  const getOptionMetadata = React.useCallback(optionValue => getOptionByValue(optionValue), [getOptionByValue]);
  const getSelectTriggerProps = (otherHandlers = {}) => {
    return (0, _extends2.default)({}, otherHandlers, {
      onMouseDown: createHandleButtonMouseDown(otherHandlers),
      ref: mergedListRootRef,
      role: 'combobox',
      'aria-expanded': open,
      'aria-controls': listboxId
    });
  };
  const getButtonProps = (externalProps = {}) => {
    const externalEventHandlers = (0, _extractEventHandlers.extractEventHandlers)(externalProps);
    const listboxAndButtonProps = (0, _combineHooksSlotProps.combineHooksSlotProps)(getButtonRootProps, getListboxRootProps);
    const combinedProps = (0, _combineHooksSlotProps.combineHooksSlotProps)(listboxAndButtonProps, getSelectTriggerProps);
    return (0, _extends2.default)({}, externalProps, combinedProps(externalEventHandlers));
  };
  const getListboxProps = (externalProps = {}) => {
    return (0, _extends2.default)({}, externalProps, {
      id: listboxId,
      role: 'listbox',
      'aria-multiselectable': multiple ? 'true' : undefined,
      ref: handleListboxRef,
      onMouseDown: preventDefault // to prevent the button from losing focus when interacting with the listbox
    });
  };

  React.useDebugValue({
    selectedOptions,
    highlightedOption,
    open
  });
  const contextValue = React.useMemo(() => (0, _extends2.default)({}, listContextValue, compoundComponentContextValue), [listContextValue, compoundComponentContextValue]);
  let selectValue;
  if (props.multiple) {
    selectValue = selectedOptions;
  } else {
    selectValue = selectedOptions.length > 0 ? selectedOptions[0] : null;
  }
  let selectedOptionsMetadata;
  if (multiple) {
    selectedOptionsMetadata = selectValue.map(v => getOptionMetadata(v)).filter(o => o !== undefined);
  } else {
    var _getOptionMetadata;
    selectedOptionsMetadata = (_getOptionMetadata = getOptionMetadata(selectValue)) != null ? _getOptionMetadata : null;
  }
  const getHiddenInputProps = (externalProps = {}) => {
    return (0, _extends2.default)({
      name,
      tabIndex: -1,
      'aria-hidden': true,
      required: required ? true : undefined,
      value: getSerializedValue(selectedOptionsMetadata),
      onChange: noop,
      style: visuallyHiddenStyle
    }, externalProps);
  };
  return {
    buttonActive,
    buttonFocusVisible,
    buttonRef: mergedButtonRef,
    contextValue,
    disabled,
    dispatch,
    getButtonProps,
    getHiddenInputProps,
    getListboxProps,
    getOptionMetadata,
    listboxRef: mergedListRootRef,
    open,
    options: optionValues,
    value: selectValue,
    highlightedOption
  };
}

/***/ }),

/***/ 12621:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SelectActionTypes = void 0;
const SelectActionTypes = exports.SelectActionTypes = {
  buttonClick: 'buttonClick'
};

/***/ }),

/***/ 7415:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _useSlider = __webpack_require__(10396);
Object.keys(_useSlider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useSlider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSlider[key];
    }
  });
});
var _useSlider2 = __webpack_require__(93459);
Object.keys(_useSlider2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useSlider2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSlider2[key];
    }
  });
});

/***/ }),

/***/ 10396:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Identity = void 0;
exports.useSlider = useSlider;
exports.valueToPercent = valueToPercent;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _utils2 = __webpack_require__(36610);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function asc(a, b) {
  return a - b;
}
function clamp(value, min, max) {
  if (value == null) {
    return min;
  }
  return Math.min(Math.max(min, value), max);
}
function findClosest(values, currentValue) {
  var _values$reduce;
  const {
    index: closestIndex
  } = (_values$reduce = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null)) != null ? _values$reduce : {};
  return closestIndex;
}
function trackFinger(event, touchId) {
  // The event is TouchEvent
  if (touchId.current !== undefined && event.changedTouches) {
    const touchEvent = event;
    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }

  // The event is MouseEvent
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values,
  newValue,
  index
}) {
  const output = values.slice();
  output[index] = newValue;
  return output.sort(asc);
}
function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  var _sliderRef$current, _doc$activeElement;
  const doc = (0, _utils.unstable_ownerDocument)(sliderRef.current);
  if (!((_sliderRef$current = sliderRef.current) != null && _sliderRef$current.contains(doc.activeElement)) || Number(doc == null || (_doc$activeElement = doc.activeElement) == null ? void 0 : _doc$activeElement.getAttribute('data-index')) !== activeIndex) {
    var _sliderRef$current2;
    (_sliderRef$current2 = sliderRef.current) == null || _sliderRef$current2.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
function areValuesEqual(newValue, oldValue) {
  if (typeof newValue === 'number' && typeof oldValue === 'number') {
    return newValue === oldValue;
  }
  if (typeof newValue === 'object' && typeof oldValue === 'object') {
    return (0, _utils2.areArraysEqual)(newValue, oldValue);
  }
  return false;
}
const axisProps = {
  horizontal: {
    offset: percent => ({
      left: `${percent}%`
    }),
    leap: percent => ({
      width: `${percent}%`
    })
  },
  'horizontal-reverse': {
    offset: percent => ({
      right: `${percent}%`
    }),
    leap: percent => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: percent => ({
      bottom: `${percent}%`
    }),
    leap: percent => ({
      height: `${percent}%`
    })
  }
};
const Identity = x => x;

// TODO: remove support for Safari < 13.
// https://caniuse.com/#search=touch-action
//
// Safari, on iOS, supports touch action since v13.
// Over 80% of the iOS phones are compatible
// in August 2020.
// Utilizing the CSS.supports method to check if touch-action is supported.
// Since CSS.supports is supported on all but Edge@12 and IE and touch-action
// is supported on both Edge@12 and IE if CSS.supports is not available that means that
// touch-action will be supported
exports.Identity = Identity;
let cachedSupportsTouchActionNone;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === undefined) {
    if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function') {
      cachedSupportsTouchActionNone = CSS.supports('touch-action', 'none');
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }
  return cachedSupportsTouchActionNone;
}
/**
 *
 * Demos:
 *
 * - [Slider](https://mui.com/base-ui/react-slider/#hook)
 *
 * API:
 *
 * - [useSlider API](https://mui.com/base-ui/react-slider/hooks-api/#use-slider)
 */
function useSlider(parameters) {
  const {
    'aria-labelledby': ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = 'horizontal',
    rootRef: ref,
    scale = Identity,
    step = 1,
    tabIndex,
    value: valueProp
  } = parameters;
  const touchId = React.useRef();
  // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transferred when inversing a range slider.
  const [active, setActive] = React.useState(-1);
  const [open, setOpen] = React.useState(-1);
  const [dragging, setDragging] = React.useState(false);
  const moveCount = React.useRef(0);
  const [valueDerived, setValueState] = (0, _utils.unstable_useControlled)({
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : min,
    name: 'Slider'
  });
  const handleChange = onChange && ((event, value, thumbIndex) => {
    // Redefine target to allow name and value to be read.
    // This allows seamless integration with the most popular form libraries.
    // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
    // Clone the event to not override `target` of the original event.
    const nativeEvent = event.nativeEvent || event;
    // @ts-ignore The nativeEvent is function, not object
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, 'target', {
      writable: true,
      value: {
        value,
        name
      }
    });
    onChange(clonedEvent, value, thumbIndex);
  });
  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map(value => clamp(value, min, max));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({
    value: min + step * index
  })) : marksProp || [];
  const marksValues = marks.map(mark => mark.value);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = (0, _utils.unstable_useIsFocusVisible)();
  const [focusedThumbIndex, setFocusedThumbIndex] = React.useState(-1);
  const sliderRef = React.useRef();
  const handleFocusRef = (0, _utils.unstable_useForkRef)(focusVisibleRef, sliderRef);
  const handleRef = (0, _utils.unstable_useForkRef)(ref, handleFocusRef);
  const createHandleHiddenInputFocus = otherHandlers => event => {
    var _otherHandlers$onFocu;
    const index = Number(event.currentTarget.getAttribute('data-index'));
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusedThumbIndex(index);
    }
    setOpen(index);
    otherHandlers == null || (_otherHandlers$onFocu = otherHandlers.onFocus) == null || _otherHandlers$onFocu.call(otherHandlers, event);
  };
  const createHandleHiddenInputBlur = otherHandlers => event => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusedThumbIndex(-1);
    }
    setOpen(-1);
    otherHandlers == null || (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
  };
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      var _document$activeEleme;
      // This is necessary because Firefox and Safari will keep focus
      // on a disabled element:
      // https://codesandbox.io/s/mui-pr-22247-forked-h151h?file=/src/App.js
      // @ts-ignore
      (_document$activeEleme = document.activeElement) == null || _document$activeEleme.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }
  const createHandleHiddenInputChange = otherHandlers => event => {
    var _otherHandlers$onChan;
    (_otherHandlers$onChan = otherHandlers.onChange) == null || _otherHandlers$onChan.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute('data-index'));
    const value = values[index];
    const marksIndex = marksValues.indexOf(value);

    // @ts-ignore
    let newValue = event.target.valueAsNumber;
    if (marks && step == null) {
      const maxMarksValue = marksValues[marksValues.length - 1];
      if (newValue > maxMarksValue) {
        newValue = maxMarksValue;
      } else if (newValue < marksValues[0]) {
        newValue = marksValues[0];
      } else {
        newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
      }
    }
    newValue = clamp(newValue, min, max);
    if (range) {
      // Bound the new value to the thumb's neighbours.
      if (disableSwap) {
        newValue = clamp(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index
      });
      let activeIndex = index;

      // Potentially swap the index if needed.
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }
      focusThumb({
        sliderRef,
        activeIndex
      });
    }
    setValueState(newValue);
    setFocusedThumbIndex(index);
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(event, newValue, index);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  };
  const previousIndex = React.useRef();
  let axis = orientation;
  if (isRtl && orientation === 'horizontal') {
    axis += '-reverse';
  }
  const getFingerNewValue = ({
    finger,
    move = false
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width,
      height,
      bottom,
      left
    } = slider.getBoundingClientRect();
    let percent;
    if (axis.indexOf('vertical') === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }
    if (axis.indexOf('-reverse') !== -1) {
      percent = 1 - percent;
    }
    let newValue;
    newValue = percentToValue(percent, min, max);
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp(newValue, min, max);
    let activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values, newValue);
      } else {
        activeIndex = previousIndex.current;
      }

      // Bound the new value to the thumb's neighbours.
      if (disableSwap) {
        newValue = clamp(newValue, values[activeIndex - 1] || -Infinity, values[activeIndex + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index: activeIndex
      });

      // Potentially swap the index if needed.
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }
    return {
      newValue,
      activeIndex
    };
  };
  const handleTouchMove = (0, _utils.unstable_useEventCallback)(nativeEvent => {
    const finger = trackFinger(nativeEvent, touchId);
    if (!finger) {
      return;
    }
    moveCount.current += 1;

    // Cancel move in case some other element consumed a mouseup event and it was not fired.
    // @ts-ignore buttons doesn't not exists on touch event
    if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleTouchEnd(nativeEvent);
      return;
    }
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = (0, _utils.unstable_useEventCallback)(nativeEvent => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);
    if (!finger) {
      return;
    }
    const {
      newValue
    } = getFingerNewValue({
      finger,
      move: true
    });
    setActive(-1);
    if (nativeEvent.type === 'touchend') {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }
    touchId.current = undefined;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    stopListening();
  });
  const handleTouchStart = (0, _utils.unstable_useEventCallback)(nativeEvent => {
    if (disabled) {
      return;
    }
    // If touch-action: none; is not supported we need to prevent the scroll manually.
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(nativeEvent, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = (0, _utils.unstable_ownerDocument)(sliderRef.current);
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });
  const stopListening = React.useCallback(() => {
    const doc = (0, _utils.unstable_ownerDocument)(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  React.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener('touchstart', handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      // @ts-ignore
      slider.removeEventListener('touchstart', handleTouchStart, {
        passive: doesSupportTouchActionNone()
      });
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  React.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const createHandleMouseDown = otherHandlers => event => {
    var _otherHandlers$onMous;
    (_otherHandlers$onMous = otherHandlers.onMouseDown) == null || _otherHandlers$onMous.call(otherHandlers, event);
    if (disabled) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }

    // Only handle left clicks
    if (event.button !== 0) {
      return;
    }

    // Avoid text selection
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(event, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = (0, _utils.unstable_ownerDocument)(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove);
    doc.addEventListener('mouseup', handleTouchEnd);
  };
  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;
  const getRootProps = (externalProps = {}) => {
    const externalHandlers = (0, _utils2.extractEventHandlers)(externalProps);
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(externalHandlers || {})
    };
    const mergedEventHandlers = (0, _extends2.default)({}, externalHandlers, ownEventHandlers);
    return (0, _extends2.default)({}, externalProps, {
      ref: handleRef
    }, mergedEventHandlers);
  };
  const createHandleMouseOver = otherHandlers => event => {
    var _otherHandlers$onMous2;
    (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null || _otherHandlers$onMous2.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute('data-index'));
    setOpen(index);
  };
  const createHandleMouseLeave = otherHandlers => event => {
    var _otherHandlers$onMous3;
    (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null || _otherHandlers$onMous3.call(otherHandlers, event);
    setOpen(-1);
  };
  const getThumbProps = (externalProps = {}) => {
    const externalHandlers = (0, _utils2.extractEventHandlers)(externalProps);
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(externalHandlers || {}),
      onMouseLeave: createHandleMouseLeave(externalHandlers || {})
    };
    return (0, _extends2.default)({}, externalProps, externalHandlers, ownEventHandlers);
  };
  const getThumbStyle = index => {
    return {
      // So the non active thumb doesn't show its label on hover.
      pointerEvents: active !== -1 && active !== index ? 'none' : undefined
    };
  };
  const getHiddenInputProps = (externalProps = {}) => {
    var _parameters$step;
    const externalHandlers = (0, _utils2.extractEventHandlers)(externalProps);
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(externalHandlers || {}),
      onFocus: createHandleHiddenInputFocus(externalHandlers || {}),
      onBlur: createHandleHiddenInputBlur(externalHandlers || {})
    };
    const mergedEventHandlers = (0, _extends2.default)({}, externalHandlers, ownEventHandlers);
    return (0, _extends2.default)({
      tabIndex,
      'aria-labelledby': ariaLabelledby,
      'aria-orientation': orientation,
      'aria-valuemax': scale(max),
      'aria-valuemin': scale(min),
      name,
      type: 'range',
      min: parameters.min,
      max: parameters.max,
      step: parameters.step === null && parameters.marks ? 'any' : (_parameters$step = parameters.step) != null ? _parameters$step : undefined,
      disabled
    }, externalProps, mergedEventHandlers, {
      style: (0, _extends2.default)({}, _utils.visuallyHidden, {
        direction: isRtl ? 'rtl' : 'ltr',
        // So that VoiceOver's focus indicator matches the thumb's dimensions
        width: '100%',
        height: '100%'
      })
    });
  };
  return {
    active,
    axis: axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks: marks,
    open,
    range,
    rootRef: handleRef,
    trackLeap,
    trackOffset,
    values,
    getThumbStyle
  };
}

/***/ }),

/***/ 93459:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 84475:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useSnackbar: true
};
Object.defineProperty(exports, "useSnackbar", ({
  enumerable: true,
  get: function () {
    return _useSnackbar.useSnackbar;
  }
}));
var _useSnackbar = __webpack_require__(37194);
var _useSnackbar2 = __webpack_require__(43228);
Object.keys(_useSnackbar2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useSnackbar2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSnackbar2[key];
    }
  });
});

/***/ }),

/***/ 37194:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useSnackbar = useSnackbar;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _extractEventHandlers = __webpack_require__(61843);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * The basic building block for creating custom snackbar.
 *
 * Demos:
 *
 * - [Snackbar](https://mui.com/base-ui/react-snackbar/#hook)
 *
 * API:
 *
 * - [useSnackbar API](https://mui.com/base-ui/react-snackbar/hooks-api/#use-snackbar)
 */
function useSnackbar(parameters = {}) {
  const {
    autoHideDuration = null,
    disableWindowBlurListener = false,
    onClose,
    open,
    resumeHideDuration
  } = parameters;
  const timerAutoHide = React.useRef();
  React.useEffect(() => {
    if (!open) {
      return undefined;
    }

    /**
     * @param {KeyboardEvent} nativeEvent
     */
    function handleKeyDown(nativeEvent) {
      if (!nativeEvent.defaultPrevented) {
        // IE11, Edge (prior to using Blink?) use 'Esc'
        if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
          // not calling `preventDefault` since we don't know if people may ignore this event e.g. a permanently open snackbar
          onClose == null || onClose(nativeEvent, 'escapeKeyDown');
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);
  const handleClose = (0, _utils.unstable_useEventCallback)((event, reason) => {
    onClose == null || onClose(event, reason);
  });
  const setAutoHideTimer = (0, _utils.unstable_useEventCallback)(autoHideDurationParam => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }
    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(() => {
      handleClose(null, 'timeout');
    }, autoHideDurationParam);
  });
  React.useEffect(() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }
    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);
  const handleClickAway = event => {
    onClose == null || onClose(event, 'clickaway');
  };

  // Pause the timer when the user is interacting with the Snackbar
  // or when the user hide the window.
  const handlePause = () => {
    clearTimeout(timerAutoHide.current);
  };

  // Restart the timer when the user is no longer interacting with the Snackbar
  // or when the window is shown back.
  const handleResume = React.useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
  const createHandleBlur = otherHandlers => event => {
    const onBlurCallback = otherHandlers.onBlur;
    onBlurCallback == null || onBlurCallback(event);
    handleResume();
  };
  const createHandleFocus = otherHandlers => event => {
    const onFocusCallback = otherHandlers.onFocus;
    onFocusCallback == null || onFocusCallback(event);
    handlePause();
  };
  const createMouseEnter = otherHandlers => event => {
    const onMouseEnterCallback = otherHandlers.onMouseEnter;
    onMouseEnterCallback == null || onMouseEnterCallback(event);
    handlePause();
  };
  const createMouseLeave = otherHandlers => event => {
    const onMouseLeaveCallback = otherHandlers.onMouseLeave;
    onMouseLeaveCallback == null || onMouseLeaveCallback(event);
    handleResume();
  };
  React.useEffect(() => {
    // TODO: window global should be refactored here
    if (!disableWindowBlurListener && open) {
      window.addEventListener('focus', handleResume);
      window.addEventListener('blur', handlePause);
      return () => {
        window.removeEventListener('focus', handleResume);
        window.removeEventListener('blur', handlePause);
      };
    }
    return undefined;
  }, [disableWindowBlurListener, handleResume, open]);
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = (0, _extends2.default)({}, (0, _extractEventHandlers.extractEventHandlers)(parameters), (0, _extractEventHandlers.extractEventHandlers)(externalProps));
    return (0, _extends2.default)({
      // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
      // See https://github.com/mui/material-ui/issues/29080
      role: 'presentation'
    }, externalProps, externalEventHandlers, {
      onBlur: createHandleBlur(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onMouseEnter: createMouseEnter(externalEventHandlers),
      onMouseLeave: createMouseLeave(externalEventHandlers)
    });
  };
  return {
    getRootProps,
    onClickAway: handleClickAway
  };
}

/***/ }),

/***/ 43228:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 70724:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useSwitch: true
};
Object.defineProperty(exports, "useSwitch", ({
  enumerable: true,
  get: function () {
    return _useSwitch.useSwitch;
  }
}));
var _useSwitch = __webpack_require__(66052);
var _useSwitch2 = __webpack_require__(27306);
Object.keys(_useSwitch2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useSwitch2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSwitch2[key];
    }
  });
});

/***/ }),

/***/ 66052:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useSwitch = useSwitch;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * The basic building block for creating custom switches.
 *
 * Demos:
 *
 * - [Switch](https://mui.com/base-ui/react-switch/#hook)
 *
 * API:
 *
 * - [useSwitch API](https://mui.com/base-ui/react-switch/hooks-api/#use-switch)
 */
function useSwitch(props) {
  const {
    checked: checkedProp,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required
  } = props;
  const [checked, setCheckedState] = (0, _utils.unstable_useControlled)({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'Switch',
    state: 'checked'
  });
  const createHandleInputChange = otherProps => event => {
    var _otherProps$onChange;
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    setCheckedState(event.target.checked);
    onChange == null || onChange(event);
    (_otherProps$onChange = otherProps.onChange) == null || _otherProps$onChange.call(otherProps, event);
  };
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = (0, _utils.unstable_useIsFocusVisible)();
  const [focusVisible, setFocusVisible] = React.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const inputRef = React.useRef(null);
  const createHandleFocus = otherProps => event => {
    var _otherProps$onFocus;
    // Fix for https://github.com/facebook/react/issues/7769
    if (!inputRef.current) {
      inputRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      onFocusVisible == null || onFocusVisible(event);
    }
    onFocus == null || onFocus(event);
    (_otherProps$onFocus = otherProps.onFocus) == null || _otherProps$onFocus.call(otherProps, event);
  };
  const createHandleBlur = otherProps => event => {
    var _otherProps$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    onBlur == null || onBlur(event);
    (_otherProps$onBlur = otherProps.onBlur) == null || _otherProps$onBlur.call(otherProps, event);
  };
  const handleInputRef = (0, _utils.unstable_useForkRef)(focusVisibleRef, inputRef);
  const getInputProps = (otherProps = {}) => (0, _extends2.default)({
    checked: checkedProp,
    defaultChecked,
    disabled,
    readOnly,
    ref: handleInputRef,
    required,
    type: 'checkbox'
  }, otherProps, {
    onChange: createHandleInputChange(otherProps),
    onFocus: createHandleFocus(otherProps),
    onBlur: createHandleBlur(otherProps)
  });
  return {
    checked,
    disabled: Boolean(disabled),
    focusVisible,
    getInputProps,
    inputRef: handleInputRef,
    readOnly: Boolean(readOnly)
  };
}

/***/ }),

/***/ 27306:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 12511:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useTabPanel: true
};
Object.defineProperty(exports, "useTabPanel", ({
  enumerable: true,
  get: function () {
    return _useTabPanel.useTabPanel;
  }
}));
var _useTabPanel = __webpack_require__(24058);
var _useTabPanel2 = __webpack_require__(21712);
Object.keys(_useTabPanel2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useTabPanel2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTabPanel2[key];
    }
  });
});

/***/ }),

/***/ 24058:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useTabPanel = useTabPanel;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _Tabs = __webpack_require__(17381);
var _useCompoundItem = __webpack_require__(28584);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function tabPanelValueGenerator(otherTabPanelValues) {
  return otherTabPanelValues.size;
}

/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/#hooks)
 *
 * API:
 *
 * - [useTabPanel API](https://mui.com/base-ui/react-tabs/hooks-api/#use-tab-panel)
 */
function useTabPanel(parameters) {
  const {
    value: valueParam,
    id: idParam,
    rootRef: externalRef
  } = parameters;
  const context = (0, _Tabs.useTabsContext)();
  if (context === null) {
    throw new Error('No TabContext provided');
  }
  const {
    value: selectedTabValue,
    getTabId
  } = context;
  const id = (0, _utils.unstable_useId)(idParam);
  const ref = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(ref, externalRef);
  const metadata = React.useMemo(() => ({
    id,
    ref
  }), [id]);
  const {
    id: value
  } = (0, _useCompoundItem.useCompoundItem)(valueParam != null ? valueParam : tabPanelValueGenerator, metadata);
  const hidden = value !== selectedTabValue;
  const correspondingTabId = value !== undefined ? getTabId(value) : undefined;
  const getRootProps = (externalProps = {}) => {
    return (0, _extends2.default)({
      'aria-labelledby': correspondingTabId != null ? correspondingTabId : undefined,
      hidden,
      id: id != null ? id : undefined
    }, externalProps, {
      ref: handleRef
    });
  };
  return {
    hidden,
    getRootProps,
    rootRef: handleRef
  };
}

/***/ }),

/***/ 21712:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 15012:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useTab: true
};
Object.defineProperty(exports, "useTab", ({
  enumerable: true,
  get: function () {
    return _useTab.useTab;
  }
}));
var _useTab = __webpack_require__(67564);
var _useTab2 = __webpack_require__(31210);
Object.keys(_useTab2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useTab2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTab2[key];
    }
  });
});

/***/ }),

/***/ 67564:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useTab = useTab;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _Tabs = __webpack_require__(17381);
var _extractEventHandlers = __webpack_require__(61843);
var _useCompoundItem = __webpack_require__(28584);
var _useList = __webpack_require__(63080);
var _useButton = __webpack_require__(64877);
var _combineHooksSlotProps = __webpack_require__(5065);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function tabValueGenerator(otherTabValues) {
  return otherTabValues.size;
}

/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/#hooks)
 *
 * API:
 *
 * - [useTab API](https://mui.com/base-ui/react-tabs/hooks-api/#use-tab)
 */
function useTab(parameters) {
  const {
    value: valueParam,
    rootRef: externalRef,
    disabled = false,
    id: idParam
  } = parameters;
  const tabRef = React.useRef(null);
  const id = (0, _utils.unstable_useId)(idParam);
  const {
    value: selectedValue,
    selectionFollowsFocus,
    getTabPanelId
  } = (0, _Tabs.useTabsContext)();
  const tabMetadata = React.useMemo(() => ({
    disabled,
    ref: tabRef,
    id
  }), [disabled, tabRef, id]);
  const {
    id: value,
    index,
    totalItemCount: totalTabsCount
  } = (0, _useCompoundItem.useCompoundItem)(valueParam != null ? valueParam : tabValueGenerator, tabMetadata);
  const {
    getRootProps: getTabProps,
    rootRef: listItemRefHandler,
    highlighted,
    selected
  } = (0, _useList.useListItem)({
    item: value
  });
  const {
    getRootProps: getButtonProps,
    rootRef: buttonRefHandler,
    active,
    focusVisible,
    setFocusVisible
  } = (0, _useButton.useButton)({
    disabled,
    focusableWhenDisabled: !selectionFollowsFocus,
    type: 'button'
  });
  const handleRef = (0, _utils.unstable_useForkRef)(tabRef, externalRef, listItemRefHandler, buttonRefHandler);
  const tabPanelId = value !== undefined ? getTabPanelId(value) : undefined;
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = (0, _extractEventHandlers.extractEventHandlers)(externalProps);
    const getCombinedRootProps = (0, _combineHooksSlotProps.combineHooksSlotProps)(getTabProps, getButtonProps);
    return (0, _extends2.default)({}, externalProps, getCombinedRootProps(externalEventHandlers), {
      role: 'tab',
      'aria-controls': tabPanelId,
      'aria-selected': selected,
      id,
      ref: handleRef
    });
  };
  return {
    getRootProps,
    active,
    focusVisible,
    highlighted,
    index,
    rootRef: handleRef,
    // the `selected` state isn't set on the server (it relies on effects to be calculated),
    // so we fall back to checking the `value` prop with the selectedValue from the TabsContext
    selected: selected || value === selectedValue,
    setFocusVisible,
    totalTabsCount
  };
}

/***/ }),

/***/ 31210:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 93642:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TabsListProvider = TabsListProvider;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _ListContext = __webpack_require__(25294);
var _useCompound = __webpack_require__(85777);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Sets up the contexts for the underlying Tab components.
 *
 * @ignore - do not document.
 */
function TabsListProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [dispatch, getItemIndex, getItemState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  const compoundComponentContextValue = React.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_useCompound.CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListContext.ListContext.Provider, {
      value: listContextValue,
      children: children
    })
  });
}

/***/ }),

/***/ 41962:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useTabsList: true
};
Object.defineProperty(exports, "useTabsList", ({
  enumerable: true,
  get: function () {
    return _useTabsList.useTabsList;
  }
}));
var _useTabsList = __webpack_require__(85092);
var _useTabsList2 = __webpack_require__(37378);
Object.keys(_useTabsList2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useTabsList2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTabsList2[key];
    }
  });
});
var _TabsListProvider = __webpack_require__(93642);
Object.keys(_TabsListProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabsListProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabsListProvider[key];
    }
  });
});

/***/ }),

/***/ 95801:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tabsListReducer = tabsListReducer;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _useList = __webpack_require__(63080);
var _useTabsList = __webpack_require__(37378);
function tabsListReducer(state, action) {
  if (action.type === _useTabsList.TabsListActionTypes.valueChange) {
    return (0, _extends2.default)({}, state, {
      highlightedValue: action.value
    });
  }
  const newState = (0, _useList.listReducer)(state, action);
  const {
    context: {
      selectionFollowsFocus
    }
  } = action;
  if (action.type === _useList.ListActionTypes.itemsChange) {
    if (newState.selectedValues.length > 0) {
      return (0, _extends2.default)({}, newState, {
        highlightedValue: newState.selectedValues[0]
      });
    }
    (0, _useList.moveHighlight)(null, 'reset', action.context);
  }
  if (selectionFollowsFocus && newState.highlightedValue != null) {
    return (0, _extends2.default)({}, newState, {
      selectedValues: [newState.highlightedValue]
    });
  }
  return newState;
}

/***/ }),

/***/ 85092:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useTabsList = useTabsList;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Tabs = __webpack_require__(17381);
var _useTabsList = __webpack_require__(37378);
var _useCompound = __webpack_require__(85777);
var _useList = __webpack_require__(63080);
var _tabsListReducer = __webpack_require__(95801);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/#hooks)
 *
 * API:
 *
 * - [useTabsList API](https://mui.com/base-ui/react-tabs/hooks-api/#use-tabs-list)
 */
function useTabsList(parameters) {
  var _selectedValues$;
  const {
    rootRef: externalRef
  } = parameters;
  const {
    direction = 'ltr',
    onSelected,
    orientation = 'horizontal',
    value,
    registerTabIdLookup,
    selectionFollowsFocus
  } = (0, _Tabs.useTabsContext)();
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = (0, _useCompound.useCompoundParent)();
  const tabIdLookup = React.useCallback(tabValue => {
    var _subitems$get;
    return (_subitems$get = subitems.get(tabValue)) == null ? void 0 : _subitems$get.id;
  }, [subitems]);
  registerTabIdLookup(tabIdLookup);
  const subitemKeys = React.useMemo(() => Array.from(subitems.keys()), [subitems]);
  const getTabElement = React.useCallback(tabValue => {
    var _subitems$get$ref$cur, _subitems$get2;
    if (tabValue == null) {
      return null;
    }
    return (_subitems$get$ref$cur = (_subitems$get2 = subitems.get(tabValue)) == null ? void 0 : _subitems$get2.ref.current) != null ? _subitems$get$ref$cur : null;
  }, [subitems]);
  const isRtl = direction === 'rtl';
  let listOrientation;
  if (orientation === 'vertical') {
    listOrientation = 'vertical';
  } else {
    listOrientation = isRtl ? 'horizontal-rtl' : 'horizontal-ltr';
  }
  const handleChange = React.useCallback((event, newValue) => {
    var _newValue$;
    onSelected(event, (_newValue$ = newValue[0]) != null ? _newValue$ : null);
  }, [onSelected]);
  const controlledProps = React.useMemo(() => {
    if (value === undefined) {
      return {};
    }
    return value != null ? {
      selectedValues: [value]
    } : {
      selectedValues: []
    };
  }, [value]);
  const isItemDisabled = React.useCallback(item => {
    var _subitems$get$disable, _subitems$get3;
    return (_subitems$get$disable = (_subitems$get3 = subitems.get(item)) == null ? void 0 : _subitems$get3.disabled) != null ? _subitems$get$disable : false;
  }, [subitems]);
  const {
    contextValue: listContextValue,
    dispatch,
    getRootProps: getListboxRootProps,
    state: {
      highlightedValue,
      selectedValues
    },
    rootRef: mergedRootRef
  } = (0, _useList.useList)({
    controlledProps,
    disabledItemsFocusable: !selectionFollowsFocus,
    focusManagement: 'DOM',
    getItemDomElement: getTabElement,
    isItemDisabled,
    items: subitemKeys,
    rootRef: externalRef,
    onChange: handleChange,
    orientation: listOrientation,
    reducerActionContext: React.useMemo(() => ({
      selectionFollowsFocus: selectionFollowsFocus || false
    }), [selectionFollowsFocus]),
    selectionMode: 'single',
    stateReducer: _tabsListReducer.tabsListReducer
  });
  React.useEffect(() => {
    if (value === undefined) {
      return;
    }

    // when a value changes externally, the highlighted value should be synced to it
    if (value != null) {
      dispatch({
        type: _useTabsList.TabsListActionTypes.valueChange,
        value
      });
    }
  }, [dispatch, value]);
  const getRootProps = (externalProps = {}) => {
    return (0, _extends2.default)({}, externalProps, getListboxRootProps(externalProps), {
      'aria-orientation': orientation === 'vertical' ? 'vertical' : undefined,
      role: 'tablist'
    });
  };
  const contextValue = React.useMemo(() => (0, _extends2.default)({}, compoundComponentContextValue, listContextValue), [compoundComponentContextValue, listContextValue]);
  return {
    contextValue,
    dispatch,
    getRootProps,
    highlightedValue,
    isRtl,
    orientation,
    rootRef: mergedRootRef,
    selectedValue: (_selectedValues$ = selectedValues[0]) != null ? _selectedValues$ : null
  };
}

/***/ }),

/***/ 37378:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TabsListActionTypes = void 0;
const TabsListActionTypes = exports.TabsListActionTypes = {
  valueChange: 'valueChange'
};

/***/ }),

/***/ 28378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TabsProvider = TabsProvider;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _TabsContext = __webpack_require__(64965);
var _useCompound = __webpack_require__(85777);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Sets up the contexts for the underlying Tab and TabPanel components.
 *
 * @ignore - do not document.
 */
function TabsProvider(props) {
  const {
    value: valueProp,
    children
  } = props;
  const {
    direction,
    getItemIndex,
    onSelected,
    orientation,
    registerItem,
    registerTabIdLookup,
    selectionFollowsFocus,
    totalSubitemCount,
    value,
    getTabId,
    getTabPanelId
  } = valueProp;
  const compoundComponentContextValue = React.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  const tabsContextValue = React.useMemo(() => ({
    direction,
    getTabId,
    getTabPanelId,
    onSelected,
    orientation,
    registerTabIdLookup,
    selectionFollowsFocus,
    value
  }), [direction, getTabId, getTabPanelId, onSelected, orientation, registerTabIdLookup, selectionFollowsFocus, value]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_useCompound.CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabsContext.TabsContext.Provider, {
      value: tabsContextValue,
      children: children
    })
  });
}

/***/ }),

/***/ 37962:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _useTabs = __webpack_require__(73455);
Object.keys(_useTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useTabs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTabs[key];
    }
  });
});
var _useTabs2 = __webpack_require__(33710);
Object.keys(_useTabs2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useTabs2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTabs2[key];
    }
  });
});
var _TabsProvider = __webpack_require__(28378);
Object.keys(_TabsProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TabsProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TabsProvider[key];
    }
  });
});

/***/ }),

/***/ 73455:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useTabs = useTabs;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _useCompound = __webpack_require__(85777);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base-ui/react-tabs/#hooks)
 *
 * API:
 *
 * - [useTabs API](https://mui.com/base-ui/react-tabs/hooks-api/#use-tabs)
 */
function useTabs(parameters) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    orientation,
    direction,
    selectionFollowsFocus
  } = parameters;
  const [value, setValue] = (0, _utils.unstable_useControlled)({
    controlled: valueProp,
    default: defaultValue,
    name: 'Tabs',
    state: 'value'
  });
  const onSelected = React.useCallback((event, newValue) => {
    setValue(newValue);
    onChange == null || onChange(event, newValue);
  }, [onChange, setValue]);
  const {
    subitems: tabPanels,
    contextValue: compoundComponentContextValue
  } = (0, _useCompound.useCompoundParent)();
  const tabIdLookup = React.useRef(() => undefined);
  const getTabPanelId = React.useCallback(tabValue => {
    var _tabPanels$get;
    return (_tabPanels$get = tabPanels.get(tabValue)) == null ? void 0 : _tabPanels$get.id;
  }, [tabPanels]);
  const getTabId = React.useCallback(tabPanelId => {
    return tabIdLookup.current(tabPanelId);
  }, []);
  const registerTabIdLookup = React.useCallback(lookupFunction => {
    tabIdLookup.current = lookupFunction;
  }, []);
  return {
    contextValue: (0, _extends2.default)({
      direction,
      getTabId,
      getTabPanelId,
      onSelected,
      orientation,
      registerTabIdLookup,
      selectionFollowsFocus,
      value
    }, compoundComponentContextValue)
  };
}

/***/ }),

/***/ 33710:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 55383:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ClassNameConfigurator = ClassNameConfigurator;
exports.useClassNamesOverride = useClassNamesOverride;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const defaultContextValue = {
  disableDefaultClasses: false
};
const ClassNameConfiguratorContext = /*#__PURE__*/React.createContext(defaultContextValue);
/**
 * @ignore - internal hook.
 *
 * Wraps the `generateUtilityClass` function and controls how the classes are generated.
 * Currently it only affects whether the classes are applied or not.
 *
 * @returns Function to be called with the `generateUtilityClass` function specific to a component to generate the classes.
 */
function useClassNamesOverride(generateUtilityClass) {
  const {
    disableDefaultClasses
  } = React.useContext(ClassNameConfiguratorContext);
  return slot => {
    if (disableDefaultClasses) {
      return '';
    }
    return generateUtilityClass(slot);
  };
}

/**
 * Allows to configure the components within to not apply any built-in classes.
 */
function ClassNameConfigurator(props) {
  const {
    disableDefaultClasses,
    children
  } = props;
  const contextValue = React.useMemo(() => ({
    disableDefaultClasses: disableDefaultClasses != null ? disableDefaultClasses : false
  }), [disableDefaultClasses]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ClassNameConfiguratorContext.Provider, {
    value: contextValue,
    children: children
  });
}

/***/ }),

/***/ 56575:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 13125:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.appendOwnerState = appendOwnerState;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _isHostComponent = __webpack_require__(26695);
/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || (0, _isHostComponent.isHostComponent)(elementType)) {
    return otherProps;
  }
  return (0, _extends2.default)({}, otherProps, {
    ownerState: (0, _extends2.default)({}, otherProps.ownerState, ownerState)
  });
}

/***/ }),

/***/ 49724:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.areArraysEqual = areArraysEqual;
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

/***/ }),

/***/ 5065:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.combineHooksSlotProps = combineHooksSlotProps;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
/**
 * Combines the two get*Props functions from Base UI hooks into one.
 * Useful when a hook uses two other hooks behind the scenes
 * (such as useSelect that depends on useList and useButton for its root slot).
 *
 * The resulting function will return the combined props.
 * They are merged from left to right, similarly to how Object.assign works.
 *
 * The getSecondProps function will receive the result of the getFirstProps function as its argument,
 * so its event handlers can call the previous handlers and act depending on its result.
 *
 * @param getFirstProps - A getter function that returns the props for the first slot. It receives the external event handlers as its argument.
 * @param getSecondProps - A getter function that returns the props for the second slot. It receives the result of the getFirstProps function as its argument.
 */
function combineHooksSlotProps(getFirstProps, getSecondProps) {
  return function getCombinedProps(external = {}) {
    const firstResult = (0, _extends2.default)({}, external, getFirstProps(external));
    const result = (0, _extends2.default)({}, firstResult, getSecondProps(firstResult));
    return result;
  };
}

/***/ }),

/***/ 61843:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.extractEventHandlers = extractEventHandlers;
/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/***/ }),

/***/ 36610:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  appendOwnerState: true,
  areArraysEqual: true,
  ClassNameConfigurator: true,
  extractEventHandlers: true,
  isHostComponent: true,
  resolveComponentProps: true,
  useSlotProps: true,
  mergeSlotProps: true,
  prepareForSlot: true
};
Object.defineProperty(exports, "ClassNameConfigurator", ({
  enumerable: true,
  get: function () {
    return _ClassNameConfigurator.ClassNameConfigurator;
  }
}));
Object.defineProperty(exports, "appendOwnerState", ({
  enumerable: true,
  get: function () {
    return _appendOwnerState.appendOwnerState;
  }
}));
Object.defineProperty(exports, "areArraysEqual", ({
  enumerable: true,
  get: function () {
    return _areArraysEqual.areArraysEqual;
  }
}));
Object.defineProperty(exports, "extractEventHandlers", ({
  enumerable: true,
  get: function () {
    return _extractEventHandlers.extractEventHandlers;
  }
}));
Object.defineProperty(exports, "isHostComponent", ({
  enumerable: true,
  get: function () {
    return _isHostComponent.isHostComponent;
  }
}));
Object.defineProperty(exports, "mergeSlotProps", ({
  enumerable: true,
  get: function () {
    return _mergeSlotProps.mergeSlotProps;
  }
}));
Object.defineProperty(exports, "prepareForSlot", ({
  enumerable: true,
  get: function () {
    return _prepareForSlot.prepareForSlot;
  }
}));
Object.defineProperty(exports, "resolveComponentProps", ({
  enumerable: true,
  get: function () {
    return _resolveComponentProps.resolveComponentProps;
  }
}));
Object.defineProperty(exports, "useSlotProps", ({
  enumerable: true,
  get: function () {
    return _useSlotProps.useSlotProps;
  }
}));
var _appendOwnerState = __webpack_require__(13125);
var _areArraysEqual = __webpack_require__(49724);
var _ClassNameConfigurator = __webpack_require__(55383);
var _extractEventHandlers = __webpack_require__(61843);
var _isHostComponent = __webpack_require__(26695);
var _resolveComponentProps = __webpack_require__(38191);
var _useSlotProps = __webpack_require__(31994);
var _mergeSlotProps = __webpack_require__(27416);
var _prepareForSlot = __webpack_require__(54875);
var _PolymorphicComponent = __webpack_require__(56575);
Object.keys(_PolymorphicComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PolymorphicComponent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PolymorphicComponent[key];
    }
  });
});
var _types = __webpack_require__(69168);
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

/***/ }),

/***/ 26695:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isHostComponent = isHostComponent;
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

/***/ }),

/***/ 27416:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mergeSlotProps = mergeSlotProps;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _clsx = _interopRequireDefault(__webpack_require__(14889));
var _extractEventHandlers = __webpack_require__(61843);
var _omitEventHandlers = __webpack_require__(76235);
/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = (0, _clsx.default)(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
    const mergedStyle = (0, _extends2.default)({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props = (0, _extends2.default)({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = (0, _extractEventHandlers.extractEventHandlers)((0, _extends2.default)({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = (0, _omitEventHandlers.omitEventHandlers)(externalSlotProps);
  const otherPropsWithoutEventHandlers = (0, _omitEventHandlers.omitEventHandlers)(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = (0, _clsx.default)(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = (0, _extends2.default)({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = (0, _extends2.default)({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

/***/ }),

/***/ 76235:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.omitEventHandlers = omitEventHandlers;
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/***/ }),

/***/ 54875:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.prepareForSlot = prepareForSlot;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
const _excluded = ["ownerState"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function prepareForSlot(Component) {
  return /*#__PURE__*/React.forwardRef(function Slot(props, ref) {
    const other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({}, other, {
      ref
    }));
  });
}

/***/ }),

/***/ 38191:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resolveComponentProps = resolveComponentProps;
/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}

/***/ }),

/***/ 69168:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 85777:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CompoundComponentContext = void 0;
exports.useCompoundParent = useCompoundParent;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const CompoundComponentContext = exports.CompoundComponentContext = /*#__PURE__*/React.createContext(null);
CompoundComponentContext.displayName = 'CompoundComponentContext';
/**
 * Sorts the subitems by their position in the DOM.
 */
function sortSubitems(subitems) {
  const subitemsArray = Array.from(subitems.keys()).map(key => {
    const subitem = subitems.get(key);
    return {
      key,
      subitem
    };
  });
  subitemsArray.sort((a, b) => {
    const aNode = a.subitem.ref.current;
    const bNode = b.subitem.ref.current;
    if (aNode === null || bNode === null || aNode === bNode) {
      return 0;
    }

    // eslint-disable-next-line no-bitwise
    return aNode.compareDocumentPosition(bNode) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
  });
  return new Map(subitemsArray.map(item => [item.key, item.subitem]));
}

/**
 * Provides a way for a component to know about its children.
 *
 * Child components register themselves with the `useCompoundItem` hook, passing in arbitrary metadata to the parent.
 *
 * This is a more powerful altervantive to `children` traversal, as child components don't have to be placed
 * directly inside the parent component. They can be anywhere in the tree (and even rendered by other components).
 *
 * The downside is that this doesn't work with SSR as it relies on the useEffect hook.
 *
 * @ignore - internal hook.
 */
function useCompoundParent() {
  const [subitems, setSubitems] = React.useState(new Map());
  const subitemKeys = React.useRef(new Set());
  const deregisterItem = React.useCallback(function deregisterItem(id) {
    subitemKeys.current.delete(id);
    setSubitems(previousState => {
      const newState = new Map(previousState);
      newState.delete(id);
      return newState;
    });
  }, []);
  const registerItem = React.useCallback(function registerItem(id, item) {
    let providedOrGeneratedId;
    if (typeof id === 'function') {
      providedOrGeneratedId = id(subitemKeys.current);
    } else {
      providedOrGeneratedId = id;
    }
    subitemKeys.current.add(providedOrGeneratedId);
    setSubitems(previousState => {
      const newState = new Map(previousState);
      newState.set(providedOrGeneratedId, item);
      return newState;
    });
    return {
      id: providedOrGeneratedId,
      deregister: () => deregisterItem(providedOrGeneratedId)
    };
  }, [deregisterItem]);
  const sortedSubitems = React.useMemo(() => sortSubitems(subitems), [subitems]);
  const getItemIndex = React.useCallback(function getItemIndex(id) {
    return Array.from(sortedSubitems.keys()).indexOf(id);
  }, [sortedSubitems]);
  const contextValue = React.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount: subitems.size
  }), [getItemIndex, registerItem, subitems.size]);
  return {
    contextValue,
    subitems: sortedSubitems
  };
}

/***/ }),

/***/ 28584:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useCompoundItem = useCompoundItem;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(90480);
var _useCompound = __webpack_require__(85777);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Registers a child component with the parent component.
 *
 * @param id A unique key for the child component. If the `id` is `undefined`, the registration logic will not run (this can sometimes be the case during SSR).
 * @param itemMetadata Arbitrary metadata to pass to the parent component. This should be a stable reference (e.g. a memoized object), to avoid unnecessary re-registrations.
 * @param missingKeyGenerator A function that generates a unique id for the item.
 *   It is called with the set of the ids of all the items that have already been registered.
 *   Return `existingKeys.size` if you want to use the index of the new item as the id.
 *
 * @ignore - internal hook.
 */

function useCompoundItem(id, itemMetadata) {
  const context = React.useContext(_useCompound.CompoundComponentContext);
  if (context === null) {
    throw new Error('useCompoundItem must be used within a useCompoundParent');
  }
  const {
    registerItem
  } = context;
  const [registeredId, setRegisteredId] = React.useState(typeof id === 'function' ? undefined : id);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    const {
      id: returnedId,
      deregister
    } = registerItem(id, itemMetadata);
    setRegisteredId(returnedId);
    return deregister;
  }, [registerItem, itemMetadata, id]);
  return {
    id: registeredId,
    index: registeredId !== undefined ? context.getItemIndex(registeredId) : -1,
    totalItemCount: context.totalSubitemCount
  };
}

/***/ }),

/***/ 98664:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useControllableReducer = useControllableReducer;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function areEqual(a, b) {
  return a === b;
}
const EMPTY_OBJECT = {};
const NOOP = () => {};

/**
 * Gets the current state augmented with controlled values from the outside.
 * If a state item has a corresponding controlled value, it will be used instead of the internal state.
 */
function getControlledState(internalState, controlledProps) {
  const augmentedState = (0, _extends2.default)({}, internalState);
  Object.keys(controlledProps).forEach(key => {
    if (controlledProps[key] !== undefined) {
      augmentedState[key] = controlledProps[key];
    }
  });
  return augmentedState;
}
/**
 * Defines an effect that compares the next state with the previous state and calls
 * the `onStateChange` callback if the state has changed.
 * The comparison is done based on the `stateComparers` parameter.
 */
function useStateChangeDetection(parameters) {
  const {
    nextState,
    initialState,
    stateComparers,
    onStateChange,
    controlledProps,
    lastActionRef
  } = parameters;
  const internalPreviousStateRef = React.useRef(initialState);
  React.useEffect(() => {
    if (lastActionRef.current === null) {
      // Detect changes only if an action has been dispatched.
      return;
    }
    const previousState = getControlledState(internalPreviousStateRef.current, controlledProps);
    Object.keys(nextState).forEach(key => {
      var _stateComparers$key;
      // go through all state keys and compare them with the previous state
      const stateComparer = (_stateComparers$key = stateComparers[key]) != null ? _stateComparers$key : areEqual;
      const nextStateItem = nextState[key];
      const previousStateItem = previousState[key];
      if (previousStateItem == null && nextStateItem != null || previousStateItem != null && nextStateItem == null || previousStateItem != null && nextStateItem != null && !stateComparer(nextStateItem, previousStateItem)) {
        var _event, _type;
        onStateChange == null || onStateChange((_event = lastActionRef.current.event) != null ? _event : null, key, nextStateItem, (_type = lastActionRef.current.type) != null ? _type : '', nextState);
      }
    });
    internalPreviousStateRef.current = nextState;
    lastActionRef.current = null;
  }, [internalPreviousStateRef, nextState, lastActionRef, onStateChange, stateComparers, controlledProps]);
}

/**
 * The alternative to `React.useReducer` that lets you control the state from the outside.
 *
 * It can be used in an uncontrolled mode, similar to `React.useReducer`, or in a controlled mode, when the state is controlled by the props.
 * It also supports partially controlled state, when some state items are controlled and some are not.
 *
 * The controlled state items are provided via the `controlledProps` parameter.
 * When a reducer action is dispatched, the internal state is updated with the new values.
 * A change event (`onStateChange`) is then triggered (for each changed state item) if the new state is different from the previous state.
 * This event can be used to update the controlled values.
 *
 * The comparison of the previous and next states is done using the `stateComparers` parameter.
 * If a state item has a corresponding comparer, it will be used to determine if the state has changed.
 * This is useful when the state item is an object and you want to compare only a subset of its properties or if it's an array and you want to compare its contents.
 *
 * An additional feature is the `actionContext` parameter. It allows you to add additional properties to every action object,
 * similarly to how React context is implicitly available to every component.
 *
 * @template State - The type of the state calculated by the reducer.
 * @template Action - The type of the actions that can be dispatched.
 * @template ActionContext - The type of the additional properties that will be added to every action object.
 *
 * @ignore - internal hook.
 */
function useControllableReducer(parameters) {
  const lastActionRef = React.useRef(null);
  const {
    reducer,
    initialState,
    controlledProps = EMPTY_OBJECT,
    stateComparers = EMPTY_OBJECT,
    onStateChange = NOOP,
    actionContext
  } = parameters;

  // The reducer that is passed to React.useReducer is wrapped with a function that augments the state with controlled values.
  const reducerWithControlledState = React.useCallback((state, action) => {
    lastActionRef.current = action;
    const controlledState = getControlledState(state, controlledProps);
    const newState = reducer(controlledState, action);
    return newState;
  }, [controlledProps, reducer]);
  const [nextState, dispatch] = React.useReducer(reducerWithControlledState, initialState);

  // The action that is passed to dispatch is augmented with the actionContext.
  const dispatchWithContext = React.useCallback(action => {
    dispatch((0, _extends2.default)({}, action, {
      context: actionContext
    }));
  }, [actionContext]);
  useStateChangeDetection({
    nextState,
    initialState,
    stateComparers: stateComparers != null ? stateComparers : EMPTY_OBJECT,
    onStateChange: onStateChange != null ? onStateChange : NOOP,
    controlledProps,
    lastActionRef
  });
  return [getControlledState(nextState, controlledProps), dispatchWithContext];
}

/***/ }),

/***/ 25508:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useForcedRerendering = useForcedRerendering;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @ignore - internal hook.
 */
function useForcedRerendering() {
  const [, setState] = React.useState({});
  return React.useCallback(() => {
    setState({});
  }, []);
}

/***/ }),

/***/ 56653:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useLatest = useLatest;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @ignore - internal hook.
 *
 * Initializes a ref with the given value and updates it when the value changes.
 *
 * @param value Value to store in the ref
 * @param deps An optional array of dependencies to watch for changes. If not provided, the ref will be updated each time the `value` changes.
 * @returns A React.RefObject containing the latest value
 *
 * API:
 *
 * - [useLatest API](https://mui.com/base-ui/api/use-latest/)
 */
function useLatest(value, deps) {
  const ref = React.useRef(value);
  React.useEffect(() => {
    ref.current = value;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps != null ? deps : [value]);
  return ref;
}

/***/ }),

/***/ 44036:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createMessageBus = createMessageBus;
exports.useMessageBus = useMessageBus;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createMessageBus() {
  const listeners = new Map();
  function subscribe(topic, callback) {
    let topicListeners = listeners.get(topic);
    if (!topicListeners) {
      topicListeners = new Set([callback]);
      listeners.set(topic, topicListeners);
    } else {
      topicListeners.add(callback);
    }
    return () => {
      topicListeners.delete(callback);
      if (topicListeners.size === 0) {
        listeners.delete(topic);
      }
    };
  }
  function publish(topic, ...args) {
    const topicListeners = listeners.get(topic);
    if (topicListeners) {
      topicListeners.forEach(callback => callback(...args));
    }
  }
  return {
    subscribe,
    publish
  };
}

/**
 * @ignore - internal hook.
 */
function useMessageBus() {
  const bus = React.useRef();
  if (!bus.current) {
    bus.current = createMessageBus();
  }
  return bus.current;
}

/***/ }),

/***/ 31994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useSlotProps = useSlotProps;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var _utils = __webpack_require__(90480);
var _appendOwnerState = __webpack_require__(13125);
var _mergeSlotProps = __webpack_require__(27416);
var _resolveComponentProps = __webpack_require__(38191);
const _excluded = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
      elementType,
      externalSlotProps,
      ownerState,
      skipResolvingSlotProps = false
    } = parameters,
    rest = (0, _objectWithoutPropertiesLoose2.default)(parameters, _excluded);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : (0, _resolveComponentProps.resolveComponentProps)(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = (0, _mergeSlotProps.mergeSlotProps)((0, _extends2.default)({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = (0, _utils.unstable_useForkRef)(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = (0, _appendOwnerState.appendOwnerState)(elementType, (0, _extends2.default)({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}

/***/ }),

/***/ 11946:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useTextNavigation = useTextNavigation;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const TEXT_NAVIGATION_RESET_TIMEOUT = 500; // milliseconds

/**
 * @ignore - internal hook.
 *
 * Provides a handler for text navigation.
 * It's used to navigate a list by typing the first letters of the options.
 *
 * @param callback A function to be called when the navigation should be performed.
 * @returns A function to be used in a keydown event handler.
 */
function useTextNavigation(callback) {
  const textCriteriaRef = React.useRef({
    searchString: '',
    lastTime: null
  });
  return React.useCallback(event => {
    if (event.key.length === 1 && event.key !== ' ') {
      const textCriteria = textCriteriaRef.current;
      const lowerKey = event.key.toLowerCase();
      const currentTime = performance.now();
      if (textCriteria.searchString.length > 0 && textCriteria.lastTime && currentTime - textCriteria.lastTime > TEXT_NAVIGATION_RESET_TIMEOUT) {
        textCriteria.searchString = lowerKey;
      } else if (textCriteria.searchString.length !== 1 || lowerKey !== textCriteria.searchString) {
        // If there is just one character in the buffer and the key is the same, do not append
        textCriteria.searchString += lowerKey;
      }
      textCriteria.lastTime = currentTime;
      callback(textCriteria.searchString, event);
    }
  }, [callback]);
}

/***/ })

};
;