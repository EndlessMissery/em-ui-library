'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$y = ".Button_btn__drVb- {\n    padding: 0.5rem 1rem;\n    font-size: 1rem;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n  }\n  \n  .Button_btn-primary__DZD5w {\n    background-color: #007bff;\n    color: white;\n  }\n  \n  .Button_btn-secondary__LdcJc {\n    background-color: #6c757d;\n    color: white;\n  }\n  \n  .Button_btn__drVb-:disabled {\n    background-color: #ccc;\n    cursor: not-allowed;\n  }\n  ";
styleInject(css_248z$y);

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

var css_248z$x = ".Input_form-group__wZqOh {\n    margin-bottom: 1rem;\n  }\n  \n  input {\n    padding: 0.5rem;\n    width: 100%;\n    font-size: 1rem;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n  }\n  ";
styleInject(css_248z$x);

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

var css_248z$w = ".Spinner_spinner__8jSlW {\n    border: 4px solid rgba(0,0,0,0.1);\n    border-top: 4px solid #007bff;\n    border-radius: 50%;\n    width: 36px;\n    height: 36px;\n    animation: Spinner_spin__--Dct 1s linear infinite;\n    margin: 1rem auto;\n  }\n  \n  @keyframes Spinner_spin__--Dct {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  ";
styleInject(css_248z$w);

function Spinner() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "spinner"
  });
}

var css_248z$v = ".Label_label__s-7vF {\n    display: block;\n    margin-bottom: 0.5rem;\n    font-weight: 500;\n  }\n  ";
styleInject(css_248z$v);

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

var css_248z$u = ".Textarea_textarea__cmdiy {\n    width: 100%;\n    min-height: 100px;\n    padding: 0.5rem;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    resize: vertical;\n    font-family: inherit;\n  }\n  ";
styleInject(css_248z$u);

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

var css_248z$t = ".Checkbox_checkbox-wrapper__jDuoD {\n    display: flex;\n    align-items: center;\n    margin-bottom: 0.5rem;\n  }\n  \n  .Checkbox_checkbox-wrapper__jDuoD input[type=\"checkbox\"] {\n    margin-right: 0.5rem;\n  }\n  ";
styleInject(css_248z$t);

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

var css_248z$s = ".RadioButton_radio-button__FT0F8 {\n    margin-right: 1rem;\n    display: inline-flex;\n    align-items: center;\n  }\n  \n  .RadioButton_radio-button__FT0F8 input[type=\"radio\"] {\n    margin-right: 0.4rem;\n  }\n  ";
styleInject(css_248z$s);

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

var css_248z$r = ".Select_select__siXU8 {\n    padding: 0.5rem;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    width: 100%;\n    font-size: 1rem;\n  }\n  ";
styleInject(css_248z$r);

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

var css_248z$q = ".Divider_divider__SzFMu {\n    border: none;\n    border-top: 1px solid #ccc;\n    margin: 1rem 0;\n  }\n  ";
styleInject(css_248z$q);

function Divider() {
  return /*#__PURE__*/React__default["default"].createElement("hr", {
    style: {
      border: 'none',
      borderTop: '1px solid #ccc',
      margin: '1rem 0'
    }
  });
}

var css_248z$p = "\n.Heading_heading__41I42 {\n    font-weight: bold;\n    margin: 1rem 0 0.5rem;\n  }\n  ";
styleInject(css_248z$p);

function Heading(_ref) {
  var _ref$level = _ref.level,
    level = _ref$level === void 0 ? 1 : _ref$level,
    children = _ref.children;
  var Tag = "h".concat(level);
  return /*#__PURE__*/React__default["default"].createElement(Tag, null, children);
}

var css_248z$o = ".Avatar_avatar__Ic7iM {\n    border-radius: 50%;\n    object-fit: cover;\n    display: inline-block;\n  }\n  \n  .Avatar_avatar--placeholder__SjMrJ {\n    background-color: #ccc;\n    color: #555;\n    font-weight: bold;\n    font-size: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    user-select: none;\n  }\n  ";
styleInject(css_248z$o);

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

var css_248z$n = ".Accordion_accordion-item__84MD- {\n    border-bottom: 1px solid #ccc;\n  }\n  \n  .Accordion_accordion-header__xRJYP {\n    background: none;\n    border: none;\n    width: 100%;\n    text-align: left;\n    padding: 0.75rem 1rem;\n    font-weight: 600;\n    cursor: pointer;\n  }\n  \n  .Accordion_accordion-content__3Ea-8 {\n    padding: 0 1rem 1rem;\n    font-size: 0.9rem;\n    color: #444;\n  }\n  ";
styleInject(css_248z$n);

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

var css_248z$m = ".Badge_badge__S0ydK {\n    display: inline-block;\n    padding: 0.2rem 0.6rem;\n    font-size: 0.75rem;\n    font-weight: 600;\n    border-radius: 9999px;\n    color: white;\n    user-select: none;\n  }\n  \n  .Badge_badge--primary__OrGmO {\n    background-color: #007bff;\n  }\n  \n  .Badge_badge--success__QSo0P {\n    background-color: #28a745;\n  }\n  \n  .Badge_badge--warning__v5QDv {\n    background-color: #ffc107;\n    color: black;\n  }\n  \n  .Badge_badge--danger__320o1 {\n    background-color: #dc3545;\n  }\n  ";
styleInject(css_248z$m);

function Badge(_ref) {
  var children = _ref.children,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant;
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: "badge badge--".concat(variant)
  }, children);
}

var css_248z$l = ".ButtonGroup_button-group__SwiZD {\n    display: flex;\n    gap: 0.5rem;\n  }\n  ";
styleInject(css_248z$l);

function ButtonGroup(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "button-group"
  }, children);
}

var css_248z$k = ".Card_card__pbFkw {\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    padding: 1rem;\n    background: white;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    margin: 1rem 0;\n  }\n  \n  .Card_card-title__QTrTx {\n    margin: 0 0 0.5rem 0;\n    font-size: 1.25rem;\n  }\n  \n  .Card_card-content__ObHzj {\n    font-size: 1rem;\n  }\n  ";
styleInject(css_248z$k);

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

var css_248z$j = "  .FormField_form-field__z5aH1 {\n    margin-bottom: 1rem;\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .FormField_form-field-error__mKIQm {\n    color: #d93025;\n    font-size: 0.85rem;\n    margin-top: 0.25rem;\n  }\n  \n  .FormField_form-field__z5aH1 label {\n    margin-bottom: 0.5rem;\n    font-weight: 500;\n    color: #555;\n  }\n  \n  .FormField_form-field__z5aH1 input {\n    padding: 0.5rem 0.75rem;\n    font-size: 1rem;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    transition: border-color 0.3s ease;\n  }\n  \n  .FormField_form-field__z5aH1 input:focus {\n    border-color: #007bff;\n    outline: none;\n  }\n  ";
styleInject(css_248z$j);

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

var css_248z$i = ".Modal_modal-backdrop__R76CG {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0,0,0,0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 999;\n}\n\n.Modal_modal-content__blyHN {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 8px;\n  max-width: 500px;\n  width: 90%;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.2);\n}\n\n.Modal_modal-header__X-Duc {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.Modal_modal-close__F96V3 {\n  font-size: 1.5rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.Modal_modal-body__Sfzvg {\n  margin-top: 1rem;\n}\n";
styleInject(css_248z$i);

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

var css_248z$h = ".Notification_notification__Xk16M {\n    padding: 1rem;\n    margin: 1rem;\n    border-radius: 6px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: white;\n  }\n  \n  .Notification_notification__Xk16M.Notification_success__lSY-y {\n    background-color: #4caf50;\n  }\n  \n  .Notification_notification__Xk16M.Notification_error__Ivmsd {\n    background-color: #f44336;\n  }\n  \n  .Notification_notification__Xk16M button {\n    background: none;\n    border: none;\n    font-size: 1.2rem;\n    color: white;\n    cursor: pointer;\n  }\n  ";
styleInject(css_248z$h);

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

var css_248z$g = ".Tabs_tabs-nav__GG24N {\n    display: flex;\n    border-bottom: 1px solid #ccc;\n  }\n  \n  .Tabs_tabs-nav-button__rEO9N {\n    background: none;\n    border: none;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n    font-weight: 600;\n    border-bottom: 2px solid transparent;\n  }\n  \n  .Tabs_tabs-nav-button__rEO9N.Tabs_active__8FExN {\n    border-color: #007bff;\n    color: #007bff;\n  }\n  \n  .Tabs_tabs-nav-button__rEO9N:hover:not(.Tabs_active__8FExN) {\n    background-color: #f0f0f0;\n  }\n  \n  .Tabs_tabs-content__Psc-Z {\n    padding: 1rem 0;\n  }\n  ";
styleInject(css_248z$g);

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

var css_248z$f = ".Tooltip_tooltip-wrapper__-DVJg {\n    position: relative;\n    display: inline-block;\n    cursor: help;\n  }\n  \n  .Tooltip_tooltip-box__lT5RY {\n    position: absolute;\n    bottom: 125%;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: #333;\n    color: white;\n    padding: 0.4rem 0.6rem;\n    border-radius: 4px;\n    white-space: nowrap;\n    font-size: 0.75rem;\n    z-index: 10;\n    opacity: 0.9;\n  }\n  \n  .Tooltip_tooltip-box__lT5RY::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #333 transparent transparent transparent;\n  }\n  ";
styleInject(css_248z$f);

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

var css_248z$e = ".Dashboard_dashboard__AixYV {\n    padding: 1rem;\n  }\n  \n  .Dashboard_dashboard-cards__BkFDG {\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(180px,1fr));\n    gap: 1rem;\n  }\n  \n  .Dashboard_dashboard-card__9xR1v {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n  }\n  \n  .Dashboard_dashboard-card-icon__BZdaV {\n    font-size: 2.5rem;\n    color: #007bff;\n  }\n  \n  .Dashboard_dashboard-card-info__Var6W h3 {\n    margin: 0 0 0.25rem;\n  }\n  \n  .Dashboard_dashboard-card-info__Var6W p {\n    margin: 0;\n    font-weight: bold;\n    font-size: 1.2rem;\n  }\n  ";
styleInject(css_248z$e);

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

var css_248z$d = ".Footer_footer__WYRUO {\n    text-align: center;\n    padding: 1rem;\n    font-size: 0.85rem;\n    color: #666;\n    background-color: #f8f9fa;\n    margin-top: auto;\n    box-shadow: inset 0 1px 0 #ddd;\n  }\n  ";
styleInject(css_248z$d);

function Footer() {
  return /*#__PURE__*/React__default["default"].createElement("footer", {
    className: "footer"
  }, "\xA9 ", new Date().getFullYear(), " MyApp. V\u0161echna pr\xE1va vyhrazena.");
}

var css_248z$c = ".Header_header__vDDKG {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.75rem 1.5rem;\n    background-color: #007bff;\n    color: white;\n    font-family: Arial, sans-serif;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  }\n  \n  .Header_header__logo__5--0- {\n    font-weight: 700;\n    font-size: 1.5rem;\n    cursor: pointer;\n  }\n  \n  .Header_header__nav__hpEYx a {\n    color: white;\n    text-decoration: none;\n    margin: 0 0.75rem;\n    font-weight: 600;\n    transition: color 0.2s ease-in-out;\n  }\n  \n  .Header_header__nav__hpEYx a:hover {\n    color: #cce5ff;\n  }\n  \n  .Header_header__user__H0I4Z {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n  }\n  \n  .Header_header__username__ZcMTz {\n    font-weight: 600;\n  }\n  ";
styleInject(css_248z$c);

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

var css_248z$b = ".ListView_listview__jJI-x {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n  \n  .ListView_listview-item__WHXtc {\n    padding: 0.75rem 1rem;\n    border-bottom: 1px solid #eee;\n  }\n  \n  .ListView_listview-item__WHXtc:hover {\n    background-color: #f0f0f0;\n    cursor: pointer;\n  }\n  \n  .ListView_listview-empty__FyGNC {\n    padding: 1rem;\n    color: #777;\n    font-style: italic;\n  }\n  ";
styleInject(css_248z$b);

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

var css_248z$a = ".Login_login-form__Va6Zf {\n    max-width: 400px;\n    margin: 2rem auto;\n    padding: 1.5rem;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    background-color: #fff;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  }\n  \n  .Login_login-form__Va6Zf h2 {\n    text-align: center;\n    margin-bottom: 1.5rem;\n    font-weight: 600;\n    color: #333;\n  }\n  \n  .Login_login-form__Va6Zf button {\n    width: 100%;\n    padding: 0.75rem;\n    font-size: 1.1rem;\n    color: #fff;\n    background-color: #007bff;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n  }\n  \n  .Login_login-form__Va6Zf button:hover {\n    background-color: #0056b3;\n  }\n  ";
styleInject(css_248z$a);

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

var css_248z$9 = ".NotificationCenter_notification-center__BLvnT {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    max-width: 400px;\n    margin: 1rem auto;\n  }\n  \n  .NotificationCenter_notification-center-empty__Q-Pr5 {\n    color: #777;\n    font-style: italic;\n    text-align: center;\n    margin: 1rem 0;\n  }\n  ";
styleInject(css_248z$9);

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

var css_248z$8 = ".Register_register-form__aO9En {\n    max-width: 450px;\n    margin: 2rem auto;\n    padding: 1.5rem;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    background-color: #fff;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  }\n  \n  .Register_register-form__aO9En h2 {\n    text-align: center;\n    margin-bottom: 1.5rem;\n    font-weight: 600;\n    color: #333;\n  }\n  \n  .Register_register-form__aO9En button {\n    width: 100%;\n    padding: 0.75rem;\n    font-size: 1.1rem;\n    color: #fff;\n    background-color: #28a745;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n  }\n  \n  .Register_register-form__aO9En button:hover {\n    background-color: #1e7e34;\n  }\n  ";
styleInject(css_248z$8);

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

var css_248z$7 = ".SearchBar_searchbar__FJdGX {\n    display: flex;\n    gap: 0.5rem;\n    margin-bottom: 1rem;\n  }\n  \n  .SearchBar_searchbar__FJdGX input {\n    flex-grow: 1;\n  }\n  ";
styleInject(css_248z$7);

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

var css_248z$6 = ".Sidebar_sidebar__vTSNL {\n    width: 220px;\n    background-color: #f8f9fa;\n    height: 100vh;\n    padding: 1rem;\n    box-shadow: 2px 0 5px rgba(0,0,0,0.1);\n    box-sizing: border-box;\n  }\n  \n  .Sidebar_sidebar-nav__rtLq5 {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .Sidebar_sidebar-link__Acetv {\n    padding: 0.75rem 1rem;\n    text-decoration: none;\n    color: #333;\n    font-weight: 600;\n    border-radius: 4px;\n    margin-bottom: 0.5rem;\n    transition: background-color 0.2s ease-in-out;\n  }\n  \n  .Sidebar_sidebar-link__Acetv:hover {\n    background-color: #007bff;\n    color: white;\n  }\n  ";
styleInject(css_248z$6);

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

var css_248z$5 = ".UserProfile_user-profile__MkBhO {\n    text-align: center;\n    padding: 1rem;\n    background-color: #fff;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0,0,0,0.05);\n  }\n  \n  .UserProfile_user-profile__name__AmQ4N {\n    margin: 0.5rem 0 0.25rem;\n  }\n  \n  .UserProfile_user-profile__email__Mc-dK {\n    margin: 0 0 1rem;\n    color: #555;\n    font-size: 0.9rem;\n  }\n  \n  .UserProfile_user-profile__actions__ELMMH > button {\n    margin: 0 0.5rem;\n  }\n  ";
styleInject(css_248z$5);

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

var css_248z$4 = ".AuthLayout_auth-layout__Lptj3 {\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(120deg, #007bff, #0056b3);\n  }\n  \n  .AuthLayout_auth-box__SGoRS {\n    background-color: white;\n    padding: 2rem;\n    border-radius: 10px;\n    box-shadow: 0 8px 30px rgba(0,0,0,0.1);\n    min-width: 320px;\n    max-width: 400px;\n  }\n  ";
styleInject(css_248z$4);

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

var css_248z$3 = ".DashboardLayout_dashboard-layout__pb5y7 {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n  }\n  \n  .DashboardLayout_dashboard-layout-main__cL3E4 {\n    display: flex;\n    flex: 1;\n    background-color: #f5f5f5;\n  }\n  \n  .DashboardLayout_dashboard-layout-content__mLGpp {\n    flex: 1;\n    padding: 2rem;\n    overflow-y: auto;\n  }\n  ";
styleInject(css_248z$3);

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

var css_248z$2 = ".FormLayout_form-layout__zHq24 {\n    max-width: 800px;\n    margin: 3rem auto;\n    background-color: #fff;\n    padding: 2rem;\n    border-radius: 10px;\n    box-shadow: 0 8px 24px rgba(0,0,0,0.06);\n  }\n  \n  .FormLayout_form-header__e6-YQ {\n    margin-bottom: 1.5rem;\n  }\n  \n  .FormLayout_form-description__9bYWM {\n    color: #666;\n  }\n  ";
styleInject(css_248z$2);

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

var css_248z$1 = ".ProfileLayout_profile-layout__pTY4G {\n    max-width: 900px;\n    margin: 3rem auto;\n    background-color: #fff;\n    padding: 2rem;\n    border-radius: 10px;\n    box-shadow: 0 10px 30px rgba(0,0,0,0.05);\n  }\n  \n  .ProfileLayout_profile-header__cl5dt {\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n  \n  .ProfileLayout_profile-header__cl5dt h2 {\n    margin: 0.5rem 0 0;\n  }\n  \n  .ProfileLayout_profile-content__qaevM {\n    margin-top: 2rem;\n  }\n  ";
styleInject(css_248z$1);

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

var css_248z = ".SettingsLayout_settings-layout__SRkTG {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n  }\n  \n  .SettingsLayout_settings-main__P7yUn {\n    display: flex;\n    flex: 1;\n    background-color: #fafafa;\n  }\n  \n  .SettingsLayout_settings-content__81ITI {\n    flex: 1;\n    padding: 2rem;\n    overflow-y: auto;\n  }\n  ";
styleInject(css_248z);

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
