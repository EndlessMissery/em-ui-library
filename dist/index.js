'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Button({ children, onClick, type = 'button', disabled = false, variant = 'primary' }) {
    return (jsxRuntime.jsx("button", { type: type, onClick: onClick, className: `btn btn-${variant}`, disabled: disabled, children: children }));
}

function Input({ label, name, type = 'text', value, onChange, placeholder }) {
    return (jsxRuntime.jsxs("div", { className: "form-group", children: [label && jsxRuntime.jsx("label", { htmlFor: name, children: label }), jsxRuntime.jsx("input", { type: type, id: name, name: name, value: value, placeholder: placeholder, onChange: onChange })] }));
}

function Spinner() {
    return jsxRuntime.jsx("div", { className: "spinner" });
}

function Label({ htmlFor, children }) {
    return (jsxRuntime.jsx("label", { htmlFor: htmlFor, style: { display: 'block', marginBottom: '0.5rem' }, children: children }));
}

function Textarea({ name, value, onChange, placeholder }) {
    return (jsxRuntime.jsx("textarea", { name: name, value: value, onChange: onChange, placeholder: placeholder, style: { width: '100%', minHeight: '100px', padding: '0.5rem' } }));
}

function Checkbox({ id, name, checked, onChange, label }) {
    return (jsxRuntime.jsxs("div", { style: { marginBottom: '0.5rem' }, children: [jsxRuntime.jsx("input", { type: "checkbox", id: id, name: name, checked: checked, onChange: onChange }), jsxRuntime.jsx("label", { htmlFor: id, style: { marginLeft: '0.5rem' }, children: label })] }));
}

function RadioButton({ name, value, checked, onChange, label }) {
    return (jsxRuntime.jsxs("label", { style: { marginRight: '1rem' }, children: [jsxRuntime.jsx("input", { type: "radio", name: name, value: value, checked: checked, onChange: onChange }), label] }));
}

function Select({ name, value, onChange, options }) {
    return (jsxRuntime.jsx("select", { name: name, value: value, onChange: onChange, children: options.map(opt => (jsxRuntime.jsx("option", { value: opt.value, children: opt.label }, opt.value))) }));
}

function Divider() {
    return (jsxRuntime.jsx("hr", { style: { border: 'none', borderTop: '1px solid #ccc', margin: '1rem 0' } }));
}

function Heading({ level = 1, children }) {
    const Tag = `h${level}`;
    return jsxRuntime.jsx(Tag, { children: children });
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
    const toggleIndex = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };
    return (jsxRuntime.jsx("div", { className: "accordion", children: items.map((item, idx) => (jsxRuntime.jsxs("div", { className: "accordion-item", children: [jsxRuntime.jsx("button", { className: "accordion-header", onClick: () => toggleIndex(idx), "aria-expanded": openIndex === idx, children: item.title }), openIndex === idx && (jsxRuntime.jsx("div", { className: "accordion-content", children: item.content }))] }, idx))) }));
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
    return (jsxRuntime.jsxs("div", { className: "form-field", children: [jsxRuntime.jsx(Label, { htmlFor: id, children: label }), jsxRuntime.jsx(Input, { name: id, type: type, value: value, onChange: onChange, placeholder: placeholder }), error && jsxRuntime.jsx("p", { className: "form-field-error", children: error })] }));
}

function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen)
        return null;
    return (jsxRuntime.jsx("div", { className: "modal-backdrop", onClick: onClose, children: jsxRuntime.jsxs("div", { className: "modal-content", onClick: e => e.stopPropagation(), children: [jsxRuntime.jsxs("header", { className: "modal-header", children: [jsxRuntime.jsx("h2", { children: title }), jsxRuntime.jsx("button", { className: "modal-close", onClick: onClose, "aria-label": "Zav\u0159\u00EDt modal", children: "\u00D7" })] }), jsxRuntime.jsx("div", { className: "modal-body", children: children })] }) }));
}

function Notification({ message, type = 'success', onClose }) {
    if (!message)
        return null;
    return (jsxRuntime.jsxs("div", { className: `notification ${type}`, children: [jsxRuntime.jsx("span", { children: message }), jsxRuntime.jsx("button", { onClick: onClose, children: "\u00D7" })] }));
}

function Tabs({ tabs }) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    return (jsxRuntime.jsxs("div", { className: "tabs", children: [jsxRuntime.jsx("nav", { className: "tabs-nav", children: tabs.map((tab, idx) => (jsxRuntime.jsx("button", { className: `tabs-nav-button ${idx === activeIndex ? 'active' : ''}`, onClick: () => setActiveIndex(idx), children: tab.label }, idx))) }), jsxRuntime.jsx("div", { className: "tabs-content", children: tabs[activeIndex].content })] }));
}

function Tooltip({ children, text }) {
    const [visible, setVisible] = React.useState(false);
    return (jsxRuntime.jsxs("span", { className: "tooltip-wrapper", onMouseEnter: () => setVisible(true), onMouseLeave: () => setVisible(false), tabIndex: 0, onFocus: () => setVisible(true), onBlur: () => setVisible(false), children: [children, visible && jsxRuntime.jsx("div", { className: "tooltip-box", children: text })] }));
}

function Dashboard({ stats }) {
    return (jsxRuntime.jsxs("section", { className: "dashboard", children: [jsxRuntime.jsx("h1", { children: "Dashboard" }), jsxRuntime.jsx("div", { className: "dashboard-cards", children: stats.map(({ id, title, value, icon }) => (jsxRuntime.jsxs(Card, { className: "dashboard-card", children: [jsxRuntime.jsx("div", { className: "dashboard-card-icon", children: icon }), jsxRuntime.jsxs("div", { className: "dashboard-card-info", children: [jsxRuntime.jsx("h3", { children: title }), jsxRuntime.jsx("p", { children: value })] })] }, id))) })] }));
}

function Footer() {
    return (jsxRuntime.jsxs("footer", { className: "footer", children: ["\u00A9 ", new Date().getFullYear(), " MyApp. V\u0161echna pr\u00E1va vyhrazena."] }));
}

function Header({ user, onLogout }) {
    return (jsxRuntime.jsxs("header", { className: "header", children: [jsxRuntime.jsx("div", { className: "header__logo", children: "MyApp" }), jsxRuntime.jsxs("nav", { className: "header__nav", children: [jsxRuntime.jsx("a", { href: "/", children: "Dom\u016F" }), jsxRuntime.jsx("a", { href: "/dashboard", children: "Dashboard" }), jsxRuntime.jsx("a", { href: "/settings", children: "Nastaven\u00ED" })] }), jsxRuntime.jsxs("div", { className: "header__user", children: [jsxRuntime.jsx(Avatar, { name: user.name, src: user.avatar }), jsxRuntime.jsx("span", { className: "header__username", children: user.name }), jsxRuntime.jsx(Button, { onClick: onLogout, children: "Odhl\u00E1sit se" })] })] }));
}

function ListView({ items, renderItem }) {
    if (!items || items.length === 0) {
        return jsxRuntime.jsx("div", { className: "listview-empty", children: "\u017D\u00E1dn\u00E9 polo\u017Eky" });
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
            alert('Nesprávné uživatelské jméno nebo heslo');
        }
    };
    return (jsxRuntime.jsxs("form", { className: "login-form", onSubmit: handleSubmit, children: [jsxRuntime.jsx("h2", { children: "P\u0159ihl\u00E1\u0161en\u00ED" }), jsxRuntime.jsx(FormField, { id: "username", label: "U\u017Eivatelsk\u00E9 jm\u00E9no", type: "text", value: formData.username, onChange: handleChange, placeholder: "Zadejte u\u017Eivatelsk\u00E9 jm\u00E9no" }), jsxRuntime.jsx(FormField, { id: "password", label: "Heslo", type: "password", value: formData.password, onChange: handleChange, placeholder: "Zadejte heslo" }), jsxRuntime.jsx(Button, { type: "submit", children: "P\u0159ihl\u00E1sit se" })] }));
}

function NotificationCenter({ notifications, onDismiss }) {
    if (!notifications.length) {
        return jsxRuntime.jsx("div", { className: "notification-center-empty", children: "\u017D\u00E1dn\u00E9 notifikace" });
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
            alert('Hesla se neshodují');
            return;
        }
        onRegister(formData);
    };
    return (jsxRuntime.jsxs("form", { className: "register-form", onSubmit: handleSubmit, children: [jsxRuntime.jsx("h2", { children: "Registrace" }), jsxRuntime.jsx(FormField, { id: "username", label: "U\u017Eivatelsk\u00E9 jm\u00E9no", type: "text", value: formData.username, onChange: handleChange, placeholder: "Zadejte u\u017Eivatelsk\u00E9 jm\u00E9no" }), jsxRuntime.jsx(FormField, { id: "email", label: "Email", type: "email", value: formData.email, onChange: handleChange, placeholder: "Zadejte email" }), jsxRuntime.jsx(FormField, { id: "password", label: "Heslo", type: "password", value: formData.password, onChange: handleChange, placeholder: "Zadejte heslo" }), jsxRuntime.jsx(FormField, { id: "confirmPassword", label: "Potvr\u010Fte heslo", type: "password", value: formData.confirmPassword, onChange: handleChange, placeholder: "Potvr\u010Fte heslo" }), jsxRuntime.jsx(Button, { type: "submit", children: "Registrovat se" })] }));
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
    return (jsxRuntime.jsxs("section", { className: "user-profile", children: [jsxRuntime.jsx(Avatar, { name: user.name, src: user.avatar, size: 80 }), jsxRuntime.jsx("h2", { className: "user-profile__name", children: user.name }), jsxRuntime.jsx("p", { className: "user-profile__email", children: user.email }), jsxRuntime.jsxs("div", { className: "user-profile__actions", children: [jsxRuntime.jsx(Button, { onClick: onEdit, children: "Upravit profil" }), jsxRuntime.jsx(Button, { onClick: onLogout, variant: "secondary", children: "Odhl\u00E1sit se" })] })] }));
}

const AuthLayout = ({ children }) => {
    return (jsxRuntime.jsx("div", { className: "auth-layout", children: jsxRuntime.jsxs("div", { className: "auth-box", children: [jsxRuntime.jsx(Heading, { level: 1, children: "Welcome to MyApp" }), children] }) }));
};

function DashboardLayout({ children, user, onLogout }) {
    const sidebarLinks = [
        { label: 'Přehled', href: '/dashboard' },
        { label: 'Úkoly', href: '/tasks' },
        { label: 'Nastavení', href: '/settings' }
    ];
    return (jsxRuntime.jsxs("div", { className: "dashboard-layout", children: [jsxRuntime.jsx(Header, { user: user, onLogout: onLogout }), jsxRuntime.jsxs("div", { className: "dashboard-main", children: [jsxRuntime.jsx(Sidebar, { links: sidebarLinks }), jsxRuntime.jsx("main", { className: "dashboard-content", children: children })] }), jsxRuntime.jsx(Footer, {})] }));
}

const FormLayout = ({ title, description, children }) => {
    return (jsxRuntime.jsxs("div", { className: "form-layout", children: [jsxRuntime.jsxs("div", { className: "form-header", children: [jsxRuntime.jsx(Heading, { level: 2, children: title }), description && jsxRuntime.jsx("p", { className: "form-description", children: description })] }), jsxRuntime.jsx("div", { className: "form-body", children: children })] }));
};

const ProfileLayout = ({ user, tabs, children }) => {
    return (jsxRuntime.jsxs("div", { className: "profile-layout", children: [jsxRuntime.jsxs("div", { className: "profile-header", children: [jsxRuntime.jsx(Avatar, { src: user.avatar, alt: user.name }), jsxRuntime.jsx("h2", { children: user.name }), jsxRuntime.jsx("p", { children: user.email })] }), jsxRuntime.jsx(Tabs, { tabs: tabs }), jsxRuntime.jsx("div", { className: "profile-content", children: children })] }));
};

const SettingsLayout = ({ user, onLogout, children }) => {
    const settingsLinks = [
        { label: 'Profil', href: '/settings/profile' },
        { label: 'Heslo', href: '/settings/password' },
        { label: 'Notifikace', href: '/settings/notifications' },
        { label: 'Předvolby', href: '/settings/preferences' },
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
