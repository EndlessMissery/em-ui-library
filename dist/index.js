'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant;
  return /*#__PURE__*/React__default["default"].createElement("button", {
    type: type,
    onClick: onClick,
    className: "btn btn-".concat(variant),
    disabled: disabled
  }, children);
}

function Input(_ref) {
  var label = _ref.label,
    name = _ref.name,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    value = _ref.value,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "form-group"
  }, label && /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/React__default["default"].createElement("input", {
    type: type,
    id: name,
    name: name,
    value: value,
    placeholder: placeholder,
    onChange: onChange
  }));
}

function Spinner() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "spinner"
  });
}

function Label(_ref) {
  var htmlFor = _ref.htmlFor,
    children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'block',
      marginBottom: '0.5rem'
    }
  }, children);
}

function Textarea(_ref) {
  var name = _ref.name,
    value = _ref.value,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder;
  return /*#__PURE__*/React__default["default"].createElement("textarea", {
    name: name,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      width: '100%',
      minHeight: '100px',
      padding: '0.5rem'
    }
  });
}

function Checkbox(_ref) {
  var id = _ref.id,
    name = _ref.name,
    checked = _ref.checked,
    onChange = _ref.onChange,
    label = _ref.label;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      marginBottom: '0.5rem'
    }
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "checkbox",
    id: id,
    name: name,
    checked: checked,
    onChange: onChange
  }), /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: id,
    style: {
      marginLeft: '0.5rem'
    }
  }, label));
}

function RadioButton(_ref) {
  var name = _ref.name,
    value = _ref.value,
    checked = _ref.checked,
    onChange = _ref.onChange,
    label = _ref.label;
  return /*#__PURE__*/React__default["default"].createElement("label", {
    style: {
      marginRight: '1rem'
    }
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange
  }), label);
}

function Select(_ref) {
  var name = _ref.name,
    value = _ref.value,
    onChange = _ref.onChange,
    options = _ref.options;
  return /*#__PURE__*/React__default["default"].createElement("select", {
    name: name,
    value: value,
    onChange: onChange
  }, options.map(function (opt) {
    return /*#__PURE__*/React__default["default"].createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }));
}

function Divider() {
  return /*#__PURE__*/React__default["default"].createElement("hr", {
    style: {
      border: 'none',
      borderTop: '1px solid #ccc',
      margin: '1rem 0'
    }
  });
}

function Heading(_ref) {
  var _ref$level = _ref.level,
    level = _ref$level === void 0 ? 1 : _ref$level,
    children = _ref.children;
  var Tag = "h".concat(level);
  return /*#__PURE__*/React__default["default"].createElement(Tag, null, children);
}

function Avatar(_ref) {
  var src = _ref.src,
    alt = _ref.alt,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 40 : _ref$size,
    name = _ref.name;
  var initials = name ? name.split(' ').map(function (n) {
    return n[0];
  }).join('').toUpperCase() : '';
  return src ? /*#__PURE__*/React__default["default"].createElement("img", {
    src: src,
    alt: alt,
    className: "avatar",
    style: {
      width: size,
      height: size
    }
  }) : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "avatar avatar--placeholder",
    style: {
      width: size,
      height: size
    }
  }, initials);
}

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function Accordion(_ref) {
  var items = _ref.items;
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    openIndex = _useState2[0],
    setOpenIndex = _useState2[1];
  var toggleIndex = function toggleIndex(idx) {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "accordion"
  }, items.map(function (item, idx) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: idx,
      className: "accordion-item"
    }, /*#__PURE__*/React__default["default"].createElement("button", {
      className: "accordion-header",
      onClick: function onClick() {
        return toggleIndex(idx);
      },
      "aria-expanded": openIndex === idx
    }, item.title), openIndex === idx && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "accordion-content"
    }, item.content));
  }));
}

function Badge(_ref) {
  var children = _ref.children,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant;
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: "badge badge--".concat(variant)
  }, children);
}

function ButtonGroup(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "button-group"
  }, children);
}

function Card(_ref) {
  var title = _ref.title,
    children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card"
  }, title && /*#__PURE__*/React__default["default"].createElement("h3", {
    className: "card-title"
  }, title), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-content"
  }, children));
}

function FormField(_ref) {
  var id = _ref.id,
    label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    error = _ref.error,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React__default["default"].createElement(Label, {
    htmlFor: id
  }, label), /*#__PURE__*/React__default["default"].createElement(Input, {
    id: id,
    name: id,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    "aria-invalid": !!error
  }), error && /*#__PURE__*/React__default["default"].createElement("p", {
    className: "form-field-error"
  }, error));
}

function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    title = _ref.title,
    children = _ref.children;
  if (!isOpen) return null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React__default["default"].createElement("header", {
    className: "modal-header"
  }, /*#__PURE__*/React__default["default"].createElement("h2", null, title), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "modal-close",
    onClick: onClose,
    "aria-label": "Zav\u0159\xEDt modal"
  }, "\xD7")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-body"
  }, children)));
}

function Notification(_ref) {
  var message = _ref.message,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'success' : _ref$type,
    onClose = _ref.onClose;
  if (!message) return null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "notification ".concat(type)
  }, /*#__PURE__*/React__default["default"].createElement("span", null, message), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: onClose
  }, "\xD7"));
}

function Tabs(_ref) {
  var tabs = _ref.tabs;
  var _useState = React.useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "tabs"
  }, /*#__PURE__*/React__default["default"].createElement("nav", {
    className: "tabs-nav"
  }, tabs.map(function (tab, idx) {
    return /*#__PURE__*/React__default["default"].createElement("button", {
      key: idx,
      className: "tabs-nav-button ".concat(idx === activeIndex ? 'active' : ''),
      onClick: function onClick() {
        return setActiveIndex(idx);
      }
    }, tab.label);
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "tabs-content"
  }, tabs[activeIndex].content));
}

function Tooltip(_ref) {
  var children = _ref.children,
    text = _ref.text;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: "tooltip-wrapper",
    onMouseEnter: function onMouseEnter() {
      return setVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setVisible(false);
    },
    tabIndex: 0,
    onFocus: function onFocus() {
      return setVisible(true);
    },
    onBlur: function onBlur() {
      return setVisible(false);
    }
  }, children, visible && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "tooltip-box"
  }, text));
}

function Dashboard(_ref) {
  var stats = _ref.stats;
  return /*#__PURE__*/React__default["default"].createElement("section", {
    className: "dashboard"
  }, /*#__PURE__*/React__default["default"].createElement("h1", null, "Dashboard"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dashboard-cards"
  }, stats.map(function (_ref2) {
    var id = _ref2.id,
      title = _ref2.title,
      value = _ref2.value,
      icon = _ref2.icon;
    return /*#__PURE__*/React__default["default"].createElement(Card, {
      key: id,
      className: "dashboard-card"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "dashboard-card-icon"
    }, icon), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "dashboard-card-info"
    }, /*#__PURE__*/React__default["default"].createElement("h3", null, title), /*#__PURE__*/React__default["default"].createElement("p", null, value)));
  })));
}

function Footer() {
  return /*#__PURE__*/React__default["default"].createElement("footer", {
    className: "footer"
  }, "\xA9 ", new Date().getFullYear(), " MyApp. V\u0161echna pr\xE1va vyhrazena.");
}

function Header(_ref) {
  var user = _ref.user,
    onLogout = _ref.onLogout;
  return /*#__PURE__*/React__default["default"].createElement("header", {
    className: "header"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "header__logo"
  }, "MyApp"), /*#__PURE__*/React__default["default"].createElement("nav", {
    className: "header__nav"
  }, /*#__PURE__*/React__default["default"].createElement("a", {
    href: "/"
  }, "Dom\u016F"), /*#__PURE__*/React__default["default"].createElement("a", {
    href: "/dashboard"
  }, "Dashboard"), /*#__PURE__*/React__default["default"].createElement("a", {
    href: "/settings"
  }, "Nastaven\xED")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "header__user"
  }, /*#__PURE__*/React__default["default"].createElement(Avatar, {
    name: user.name,
    src: user.avatar
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "header__username"
  }, user.name), /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: onLogout
  }, "Odhl\xE1sit se")));
}

function ListView(_ref) {
  var items = _ref.items,
    renderItem = _ref.renderItem;
  if (!items || items.length === 0) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "listview-empty"
    }, "\u017D\xE1dn\xE9 polo\u017Eky");
  }
  return /*#__PURE__*/React__default["default"].createElement("ul", {
    className: "listview"
  }, items.map(function (item, idx) {
    return /*#__PURE__*/React__default["default"].createElement("li", {
      key: idx,
      className: "listview-item"
    }, renderItem(item));
  }));
}

function Login(_ref) {
  var onLogin = _ref.onLogin;
  var _React$useState = React__default["default"].useState({
      username: '',
      password: ''
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    formData = _React$useState2[0],
    setFormData = _React$useState2[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(function (prev) {
      return _objectSpread2(_objectSpread2({}, prev), {}, _defineProperty({}, name, value));
    });
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var username = formData.username,
      password = formData.password;
    if (username === 'admin' && password === '1234') {
      onLogin();
    } else {
      alert('Nesprávné uživatelské jméno nebo heslo');
    }
  };
  return /*#__PURE__*/React__default["default"].createElement("form", {
    className: "login-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React__default["default"].createElement("h2", null, "P\u0159ihl\xE1\u0161en\xED"), /*#__PURE__*/React__default["default"].createElement(FormField, {
    label: "U\u017Eivatelsk\xE9 jm\xE9no",
    name: "username",
    type: "text",
    value: formData.username,
    onChange: handleChange,
    placeholder: "Zadejte u\u017Eivatelsk\xE9 jm\xE9no"
  }), /*#__PURE__*/React__default["default"].createElement(FormField, {
    label: "Heslo",
    name: "password",
    type: "password",
    value: formData.password,
    onChange: handleChange,
    placeholder: "Zadejte heslo"
  }), /*#__PURE__*/React__default["default"].createElement(Button, {
    type: "submit"
  }, "P\u0159ihl\xE1sit se"));
}

function NotificationCenter(_ref) {
  var notifications = _ref.notifications,
    onDismiss = _ref.onDismiss;
  if (!notifications.length) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "notification-center-empty"
    }, "\u017D\xE1dn\xE9 notifikace");
  }
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "notification-center"
  }, notifications.map(function (_ref2) {
    var id = _ref2.id,
      type = _ref2.type,
      message = _ref2.message;
    return /*#__PURE__*/React__default["default"].createElement(Notification, {
      key: id,
      type: type,
      onClose: function onClose() {
        return onDismiss(id);
      }
    }, message);
  }));
}

function Register(_ref) {
  var onRegister = _ref.onRegister;
  var _React$useState = React__default["default"].useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    formData = _React$useState2[0],
    setFormData = _React$useState2[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(function (prev) {
      return _objectSpread2(_objectSpread2({}, prev), {}, _defineProperty({}, name, value));
    });
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    formData.username;
      formData.email;
      var password = formData.password,
      confirmPassword = formData.confirmPassword;
    if (password !== confirmPassword) {
      alert('Hesla se neshodují');
      return;
    }
    onRegister(formData);
  };
  return /*#__PURE__*/React__default["default"].createElement("form", {
    className: "register-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React__default["default"].createElement("h2", null, "Registrace"), /*#__PURE__*/React__default["default"].createElement(FormField, {
    label: "U\u017Eivatelsk\xE9 jm\xE9no",
    name: "username",
    type: "text",
    value: formData.username,
    onChange: handleChange,
    placeholder: "Zadejte u\u017Eivatelsk\xE9 jm\xE9no"
  }), /*#__PURE__*/React__default["default"].createElement(FormField, {
    label: "Email",
    name: "email",
    type: "email",
    value: formData.email,
    onChange: handleChange,
    placeholder: "Zadejte email"
  }), /*#__PURE__*/React__default["default"].createElement(FormField, {
    label: "Heslo",
    name: "password",
    type: "password",
    value: formData.password,
    onChange: handleChange,
    placeholder: "Zadejte heslo"
  }), /*#__PURE__*/React__default["default"].createElement(FormField, {
    label: "Potvr\u010Fte heslo",
    name: "confirmPassword",
    type: "password",
    value: formData.confirmPassword,
    onChange: handleChange,
    placeholder: "Potvr\u010Fte heslo"
  }), /*#__PURE__*/React__default["default"].createElement(Button, {
    type: "submit"
  }, "Registrovat se"));
}

function SearchBar(_ref) {
  var onSearch = _ref.onSearch;
  var _useState = React.useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onSearch(query);
  };
  return /*#__PURE__*/React__default["default"].createElement("form", {
    className: "searchbar",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React__default["default"].createElement(Input, {
    type: "text",
    placeholder: "Hledat...",
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    }
  }), /*#__PURE__*/React__default["default"].createElement(Button, {
    type: "submit"
  }, "Hledat"));
}

function Sidebar(_ref) {
  var links = _ref.links;
  return /*#__PURE__*/React__default["default"].createElement("aside", {
    className: "sidebar"
  }, /*#__PURE__*/React__default["default"].createElement("nav", {
    className: "sidebar-nav"
  }, links.map(function (link) {
    return /*#__PURE__*/React__default["default"].createElement("a", {
      key: link.href,
      href: link.href,
      className: "sidebar-link"
    }, link.label);
  })));
}

function UserProfile(_ref) {
  var user = _ref.user,
    onEdit = _ref.onEdit,
    onLogout = _ref.onLogout;
  return /*#__PURE__*/React__default["default"].createElement("section", {
    className: "user-profile"
  }, /*#__PURE__*/React__default["default"].createElement(Avatar, {
    name: user.name,
    src: user.avatar,
    size: 80
  }), /*#__PURE__*/React__default["default"].createElement("h2", {
    className: "user-profile__name"
  }, user.name), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "user-profile__email"
  }, user.email), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "user-profile__actions"
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: onEdit
  }, "Upravit profil"), /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: onLogout,
    variant: "secondary"
  }, "Odhl\xE1sit se")));
}

var AuthLayout = function AuthLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "auth-layout"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "auth-box"
  }, /*#__PURE__*/React__default["default"].createElement(Heading, {
    level: 1
  }, "Welcome to MyApp"), children));
};

function DashboardLayout(_ref) {
  var children = _ref.children,
    user = _ref.user,
    onLogout = _ref.onLogout;
  var sidebarLinks = [{
    label: 'Přehled',
    href: '/dashboard'
  }, {
    label: 'Úkoly',
    href: '/tasks'
  }, {
    label: 'Nastavení',
    href: '/settings'
  }];
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dashboard-layout"
  }, /*#__PURE__*/React__default["default"].createElement(Header, {
    user: user,
    onLogout: onLogout
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dashboard-main"
  }, /*#__PURE__*/React__default["default"].createElement(Sidebar, {
    links: sidebarLinks
  }), /*#__PURE__*/React__default["default"].createElement("main", {
    className: "dashboard-content"
  }, children)), /*#__PURE__*/React__default["default"].createElement(Footer, null));
}

var FormLayout = function FormLayout(_ref) {
  var title = _ref.title,
    description = _ref.description,
    children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "form-layout"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "form-header"
  }, /*#__PURE__*/React__default["default"].createElement(Heading, {
    level: 2
  }, title), description && /*#__PURE__*/React__default["default"].createElement("p", {
    className: "form-description"
  }, description)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "form-body"
  }, children));
};

var ProfileLayout = function ProfileLayout(_ref) {
  var user = _ref.user,
    tabs = _ref.tabs,
    children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "profile-layout"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "profile-header"
  }, /*#__PURE__*/React__default["default"].createElement(Avatar, {
    src: user.avatar,
    alt: user.name
  }), /*#__PURE__*/React__default["default"].createElement("h2", null, user.name), /*#__PURE__*/React__default["default"].createElement("p", null, user.email)), /*#__PURE__*/React__default["default"].createElement(Tabs, {
    tabs: tabs
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "profile-content"
  }, children));
};

var SettingsLayout = function SettingsLayout(_ref) {
  var user = _ref.user,
    onLogout = _ref.onLogout,
    children = _ref.children;
  var settingsLinks = [{
    label: 'Profil',
    href: '/settings/profile'
  }, {
    label: 'Heslo',
    href: '/settings/password'
  }, {
    label: 'Notifikace',
    href: '/settings/notifications'
  }, {
    label: 'Předvolby',
    href: '/settings/preferences'
  }];
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "settings-layout"
  }, /*#__PURE__*/React__default["default"].createElement(Header, {
    user: user,
    onLogout: onLogout
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "settings-main"
  }, /*#__PURE__*/React__default["default"].createElement(Sidebar, {
    links: settingsLinks
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "settings-content"
  }, children)), /*#__PURE__*/React__default["default"].createElement(Footer, null));
};

exports.Accordion = Accordion;
exports.AuthLayout = AuthLayout;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.Dashboard = Dashboard;
exports.DashboardLayout = DashboardLayout;
exports.Divider = Divider;
exports.Footer = Footer;
exports.FormField = FormField;
exports.FormLayout = FormLayout;
exports.Header = Header;
exports.Heading = Heading;
exports.Input = Input;
exports.Label = Label;
exports.ListView = ListView;
exports.Login = Login;
exports.Modal = Modal;
exports.Notification = Notification;
exports.NotificationCenter = NotificationCenter;
exports.ProfileLayout = ProfileLayout;
exports.RadioButton = RadioButton;
exports.Register = Register;
exports.SearchBar = SearchBar;
exports.Select = Select;
exports.SettingsLayout = SettingsLayout;
exports.Sidebar = Sidebar;
exports.Spinner = Spinner;
exports.Tabs = Tabs;
exports.Textarea = Textarea;
exports.Tooltip = Tooltip;
exports.UserProfile = UserProfile;
