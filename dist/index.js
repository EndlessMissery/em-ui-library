'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Button({ children, onClick, type = 'button', disabled = false, variant = 'primary' }) {
    return (jsxRuntime.jsx("button", { type: type, onClick: onClick, className: `btn btn-${variant}`, disabled: disabled, children: children }));
}

function Input({ label, name, type = 'text', value, onChange, placeholder, ['aria-invalid']: ariaInvalid, ['aria-describedby']: ariaDescribedby, }) {
    return (jsxRuntime.jsxs("div", { className: "form-group", children: [label && jsxRuntime.jsx("label", { htmlFor: name, children: label }), jsxRuntime.jsx("input", { type: type, id: name, name: name, className: "input", value: value, placeholder: placeholder, onChange: onChange, "aria-invalid": ariaInvalid, "aria-describedby": ariaDescribedby })] }));
}

function Spinner({ ['aria-label']: ariaLabel = 'Loading' }) {
    return jsxRuntime.jsx("div", { className: "spinner", role: "status", "aria-label": ariaLabel });
}

function Label({ htmlFor, children }) {
    return (jsxRuntime.jsx("label", { htmlFor: htmlFor, className: "label", children: children }));
}

function Textarea({ name, label, value, onChange, placeholder, ['aria-label']: ariaLabel }) {
    const generatedId = React.useId();
    const textareaId = name !== null && name !== void 0 ? name : generatedId;
    return (jsxRuntime.jsxs("div", { className: "form-group", children: [label && jsxRuntime.jsx("label", { htmlFor: textareaId, children: label }), jsxRuntime.jsx("textarea", { id: textareaId, name: name, value: value, onChange: onChange, placeholder: placeholder, className: "textarea", "aria-label": !label ? ariaLabel : undefined })] }));
}

function Checkbox({ id, name, checked, onChange, label }) {
    return (jsxRuntime.jsxs("div", { className: "checkbox-wrapper", children: [jsxRuntime.jsx("input", { type: "checkbox", id: id, name: name, checked: checked, onChange: onChange }), jsxRuntime.jsx("label", { htmlFor: id, children: label })] }));
}

function RadioButton({ name, value, checked, onChange, label }) {
    return (jsxRuntime.jsxs("label", { className: "radio-button", children: [jsxRuntime.jsx("input", { type: "radio", name: name, value: value, checked: checked, onChange: onChange }), label] }));
}

function Select({ name, label, value, onChange, options, ['aria-label']: ariaLabel }) {
    const generatedId = React.useId();
    const selectId = name !== null && name !== void 0 ? name : generatedId;
    return (jsxRuntime.jsxs("div", { className: "form-group", children: [label && jsxRuntime.jsx("label", { htmlFor: selectId, children: label }), jsxRuntime.jsx("select", { id: selectId, name: name, value: value, onChange: onChange, className: "select", "aria-label": !label ? ariaLabel : undefined, children: options.map(opt => (jsxRuntime.jsx("option", { value: opt.value, children: opt.label }, opt.value))) })] }));
}

function Divider() {
    return jsxRuntime.jsx("hr", { className: "divider" });
}

function Heading({ level = 1, children }) {
    const Tag = `h${level}`;
    return jsxRuntime.jsx(Tag, { className: "heading", children: children });
}

function Avatar({ src, alt, size = 40, name }) {
    var _a;
    const initials = name
        ? name.split(' ').map(n => n[0]).join('').toUpperCase()
        : '';
    return src ? (jsxRuntime.jsx("img", { src: src, alt: (_a = alt !== null && alt !== void 0 ? alt : name) !== null && _a !== void 0 ? _a : '', className: "avatar", style: { width: size, height: size } })) : (jsxRuntime.jsx("div", { className: "avatar avatar--placeholder", style: { width: size, height: size }, children: initials }));
}

function Accordion({ items }) {
    const [openIndex, setOpenIndex] = React.useState(null);
    const baseId = React.useId();
    const toggleIndex = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };
    return (jsxRuntime.jsx("div", { className: "accordion", children: items.map((item, idx) => {
            const headerId = `${baseId}-header-${idx}`;
            const panelId = `${baseId}-panel-${idx}`;
            const isOpen = openIndex === idx;
            return (jsxRuntime.jsxs("div", { className: "accordion-item", children: [jsxRuntime.jsx("button", { id: headerId, className: "accordion-header", onClick: () => toggleIndex(idx), "aria-expanded": isOpen, "aria-controls": panelId, children: item.title }), isOpen && (jsxRuntime.jsx("div", { id: panelId, role: "region", "aria-labelledby": headerId, className: "accordion-content", children: item.content }))] }, idx));
        }) }));
}

function Badge({ children, variant = 'primary' }) {
    return jsxRuntime.jsx("span", { className: `badge badge--${variant}`, children: children });
}

function ButtonGroup({ children }) {
    return jsxRuntime.jsx("div", { className: "button-group", children: children });
}

function Card({ title, className, children }) {
    return (jsxRuntime.jsxs("div", { className: className ? `card ${className}` : 'card', children: [title && jsxRuntime.jsx("h3", { className: "card-title", children: title }), jsxRuntime.jsx("div", { className: "card-content", children: children })] }));
}

function FormField({ id, label, value, onChange, placeholder, error, type = 'text' }) {
    const errorId = error ? `${id}-error` : undefined;
    return (jsxRuntime.jsxs("div", { className: "form-field", children: [jsxRuntime.jsx(Label, { htmlFor: id, children: label }), jsxRuntime.jsx(Input, { name: id, type: type, value: value, onChange: onChange, placeholder: placeholder, "aria-invalid": !!error, "aria-describedby": errorId }), error && (jsxRuntime.jsx("p", { id: errorId, className: "form-field-error", children: error }))] }));
}

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
function Modal({ isOpen, onClose, title, children }) {
    const contentRef = React.useRef(null);
    const previouslyFocusedRef = React.useRef(null);
    const titleId = React.useId();
    React.useEffect(() => {
        var _a;
        if (!isOpen)
            return;
        previouslyFocusedRef.current = document.activeElement;
        (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
                return;
            }
            if (e.key === 'Tab' && contentRef.current) {
                const focusable = contentRef.current.querySelectorAll(FOCUSABLE_SELECTOR);
                if (focusable.length === 0)
                    return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
                else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            var _a;
            document.removeEventListener('keydown', handleKeyDown);
            (_a = previouslyFocusedRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        };
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    return (jsxRuntime.jsx("div", { className: "modal-backdrop", onClick: onClose, children: jsxRuntime.jsxs("div", { className: "modal-content", role: "dialog", "aria-modal": "true", "aria-labelledby": titleId, ref: contentRef, tabIndex: -1, onClick: e => e.stopPropagation(), children: [jsxRuntime.jsxs("header", { className: "modal-header", children: [jsxRuntime.jsx("h2", { id: titleId, children: title }), jsxRuntime.jsx("button", { className: "modal-close", onClick: onClose, "aria-label": "Close modal", children: "\u00D7" })] }), jsxRuntime.jsx("div", { className: "modal-body", children: children })] }) }));
}

function Notification({ message, type = 'success', onClose }) {
    if (!message)
        return null;
    return (jsxRuntime.jsxs("div", { className: `notification ${type}`, children: [jsxRuntime.jsx("span", { children: message }), jsxRuntime.jsx("button", { onClick: onClose, "aria-label": "Close", children: "\u00D7" })] }));
}

function Tabs({ tabs }) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const baseId = React.useId();
    const tabRefs = React.useRef([]);
    const activate = (idx) => {
        var _a;
        setActiveIndex(idx);
        (_a = tabRefs.current[idx]) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const handleKeyDown = (e, idx) => {
        switch (e.key) {
            case 'ArrowRight':
                e.preventDefault();
                activate((idx + 1) % tabs.length);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                activate((idx - 1 + tabs.length) % tabs.length);
                break;
            case 'Home':
                e.preventDefault();
                activate(0);
                break;
            case 'End':
                e.preventDefault();
                activate(tabs.length - 1);
                break;
        }
    };
    return (jsxRuntime.jsxs("div", { className: "tabs", children: [jsxRuntime.jsx("nav", { className: "tabs-nav", role: "tablist", children: tabs.map((tab, idx) => {
                    const tabId = `${baseId}-tab-${idx}`;
                    const panelId = `${baseId}-panel-${idx}`;
                    const isActive = idx === activeIndex;
                    return (jsxRuntime.jsx("button", { ref: el => {
                            tabRefs.current[idx] = el;
                        }, id: tabId, role: "tab", "aria-selected": isActive, "aria-controls": panelId, tabIndex: isActive ? 0 : -1, className: `tabs-nav-button ${isActive ? 'active' : ''}`, onClick: () => setActiveIndex(idx), onKeyDown: e => handleKeyDown(e, idx), children: tab.label }, idx));
                }) }), jsxRuntime.jsx("div", { className: "tabs-content", role: "tabpanel", id: `${baseId}-panel-${activeIndex}`, "aria-labelledby": `${baseId}-tab-${activeIndex}`, tabIndex: 0, children: tabs[activeIndex].content })] }));
}

function Tooltip({ children, text }) {
    const [visible, setVisible] = React.useState(false);
    const tooltipId = React.useId();
    return (jsxRuntime.jsxs("span", { className: "tooltip-wrapper", onMouseEnter: () => setVisible(true), onMouseLeave: () => setVisible(false), tabIndex: 0, onFocus: () => setVisible(true), onBlur: () => setVisible(false), onKeyDown: e => {
            if (e.key === 'Escape')
                setVisible(false);
        }, "aria-describedby": visible ? tooltipId : undefined, children: [children, visible && (jsxRuntime.jsx("div", { className: "tooltip-box", role: "tooltip", id: tooltipId, children: text }))] }));
}

function Dashboard({ stats }) {
    return (jsxRuntime.jsxs("section", { className: "dashboard", children: [jsxRuntime.jsx(Heading, { level: 1, children: "Dashboard" }), jsxRuntime.jsx("div", { className: "dashboard-cards", children: stats.map(({ id, title, value, icon }) => (jsxRuntime.jsxs(Card, { className: "dashboard-card", children: [jsxRuntime.jsx("div", { className: "dashboard-card-icon", children: icon }), jsxRuntime.jsxs("div", { className: "dashboard-card-info", children: [jsxRuntime.jsx("h2", { children: title }), jsxRuntime.jsx("p", { children: value })] })] }, id))) })] }));
}

function Footer() {
    return (jsxRuntime.jsxs("footer", { className: "footer", children: ["\u00A9 ", new Date().getFullYear(), " MyApp. All rights reserved."] }));
}

function Header({ user, onLogout }) {
    return (jsxRuntime.jsxs("header", { className: "header", children: [jsxRuntime.jsx("div", { className: "header__logo", children: "MyApp" }), jsxRuntime.jsxs("nav", { className: "header__nav", children: [jsxRuntime.jsx("a", { href: "/", children: "Home" }), jsxRuntime.jsx("a", { href: "/dashboard", children: "Dashboard" }), jsxRuntime.jsx("a", { href: "/settings", children: "Settings" })] }), jsxRuntime.jsxs("div", { className: "header__user", children: [jsxRuntime.jsx(Avatar, { name: user.name, src: user.avatar }), jsxRuntime.jsx("span", { className: "header__username", children: user.name }), jsxRuntime.jsx(Button, { onClick: onLogout, children: "Log out" })] })] }));
}

function ListView({ items, renderItem }) {
    if (!items || items.length === 0) {
        return jsxRuntime.jsx("div", { className: "listview-empty", children: "No items" });
    }
    return (jsxRuntime.jsx("ul", { className: "listview", children: items.map((item, idx) => (jsxRuntime.jsx("li", { className: "listview-item", children: renderItem(item) }, idx))) }));
}

function Login({ onLogin }) {
    const [formData, setFormData] = React__default["default"].useState({
        username: '',
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = formData;
        if (username === 'admin' && password === '1234') {
            onLogin();
        }
        else {
            alert('Incorrect username or password');
        }
    };
    return (jsxRuntime.jsxs("form", { className: "login-form", onSubmit: handleSubmit, children: [jsxRuntime.jsx("h2", { children: "Log in" }), jsxRuntime.jsx(FormField, { id: "username", label: "Username", type: "text", value: formData.username, onChange: handleChange, placeholder: "Enter your username" }), jsxRuntime.jsx(FormField, { id: "password", label: "Password", type: "password", value: formData.password, onChange: handleChange, placeholder: "Enter your password" }), jsxRuntime.jsx(Button, { type: "submit", children: "Log in" })] }));
}

function NotificationCenter({ notifications, onDismiss }) {
    if (!notifications.length) {
        return jsxRuntime.jsx("div", { className: "notification-center-empty", children: "No notifications" });
    }
    return (jsxRuntime.jsx("div", { className: "notification-center", children: notifications.map(({ id, type, message }) => (jsxRuntime.jsx(Notification, { type: type, message: message, onClose: () => onDismiss(id) }, id))) }));
}

function Register({ onRegister }) {
    const [formData, setFormData] = React__default["default"].useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        onRegister(formData);
    };
    return (jsxRuntime.jsxs("form", { className: "register-form", onSubmit: handleSubmit, children: [jsxRuntime.jsx("h2", { children: "Create an account" }), jsxRuntime.jsx(FormField, { id: "username", label: "Username", type: "text", value: formData.username, onChange: handleChange, placeholder: "Enter your username" }), jsxRuntime.jsx(FormField, { id: "email", label: "Email", type: "email", value: formData.email, onChange: handleChange, placeholder: "Enter your email" }), jsxRuntime.jsx(FormField, { id: "password", label: "Password", type: "password", value: formData.password, onChange: handleChange, placeholder: "Enter your password" }), jsxRuntime.jsx(FormField, { id: "confirmPassword", label: "Confirm password", type: "password", value: formData.confirmPassword, onChange: handleChange, placeholder: "Confirm your password" }), jsxRuntime.jsx(Button, { type: "submit", children: "Sign up" })] }));
}

function SearchBar({ onSearch }) {
    const [query, setQuery] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };
    return (jsxRuntime.jsxs("form", { className: "searchbar", onSubmit: handleSubmit, children: [jsxRuntime.jsx(Input, { type: "text", placeholder: "Hledat...", value: query, onChange: e => setQuery(e.target.value) }), jsxRuntime.jsx(Button, { type: "submit", children: "Hledat" })] }));
}

function Sidebar({ links }) {
    return (jsxRuntime.jsx("aside", { className: "sidebar", children: jsxRuntime.jsx("nav", { className: "sidebar-nav", children: links.map((link) => (jsxRuntime.jsx("a", { href: link.href, className: "sidebar-link", children: link.label }, link.href))) }) }));
}

function UserProfile({ user, onEdit, onLogout }) {
    return (jsxRuntime.jsxs("section", { className: "user-profile", children: [jsxRuntime.jsx(Avatar, { name: user.name, src: user.avatar, size: 80 }), jsxRuntime.jsx("h2", { className: "user-profile__name", children: user.name }), jsxRuntime.jsx("p", { className: "user-profile__email", children: user.email }), jsxRuntime.jsxs("div", { className: "user-profile__actions", children: [jsxRuntime.jsx(Button, { onClick: onEdit, children: "Edit profile" }), jsxRuntime.jsx(Button, { onClick: onLogout, variant: "secondary", children: "Log out" })] })] }));
}

const AuthLayout = ({ children }) => {
    return (jsxRuntime.jsx("div", { className: "auth-layout", children: jsxRuntime.jsxs("div", { className: "auth-box", children: [jsxRuntime.jsx(Heading, { level: 1, children: "Welcome to MyApp" }), children] }) }));
};

function DashboardLayout({ children, user, onLogout }) {
    const sidebarLinks = [
        { label: 'Overview', href: '/dashboard' },
        { label: 'Tasks', href: '/tasks' },
        { label: 'Settings', href: '/settings' }
    ];
    return (jsxRuntime.jsxs("div", { className: "dashboard-layout", children: [jsxRuntime.jsx(Header, { user: user, onLogout: onLogout }), jsxRuntime.jsxs("div", { className: "dashboard-main", children: [jsxRuntime.jsx(Sidebar, { links: sidebarLinks }), jsxRuntime.jsx("main", { className: "dashboard-content", children: children })] }), jsxRuntime.jsx(Footer, {})] }));
}

const FormLayout = ({ title, description, children }) => {
    return (jsxRuntime.jsxs("div", { className: "form-layout", children: [jsxRuntime.jsxs("div", { className: "form-header", children: [jsxRuntime.jsx(Heading, { level: 2, children: title }), description && jsxRuntime.jsx("p", { className: "form-description", children: description })] }), jsxRuntime.jsx("div", { className: "form-body", children: children })] }));
};

const ProfileLayout = ({ user, tabs, children }) => {
    return (jsxRuntime.jsxs("div", { className: "profile-layout", children: [jsxRuntime.jsxs("div", { className: "profile-header", children: [jsxRuntime.jsx(Avatar, { src: user.avatar, alt: user.name }), jsxRuntime.jsx("h2", { children: user.name }), jsxRuntime.jsx("p", { className: "profile-header__email", children: user.email })] }), jsxRuntime.jsx(Tabs, { tabs: tabs }), jsxRuntime.jsx("div", { className: "profile-content", children: children })] }));
};

const SettingsLayout = ({ user, onLogout, children }) => {
    const settingsLinks = [
        { label: 'Profile', href: '/settings/profile' },
        { label: 'Password', href: '/settings/password' },
        { label: 'Notifications', href: '/settings/notifications' },
        { label: 'Preferences', href: '/settings/preferences' },
    ];
    return (jsxRuntime.jsxs("div", { className: "settings-layout", children: [jsxRuntime.jsx(Header, { user: user, onLogout: onLogout }), jsxRuntime.jsxs("div", { className: "settings-main", children: [jsxRuntime.jsx(Sidebar, { links: settingsLinks }), jsxRuntime.jsx("div", { className: "settings-content", children: children })] }), jsxRuntime.jsx(Footer, {})] }));
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
