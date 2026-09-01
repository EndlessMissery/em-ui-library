'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Button({ children, onClick, type = 'button', disabled = false, variant = 'primary' }) {
    return (React__default["default"].createElement("button", { type: type, onClick: onClick, className: `btn btn-${variant}`, disabled: disabled }, children));
}

function Input({ label, name, type = 'text', value, onChange, placeholder }) {
    return (React__default["default"].createElement("div", { className: "form-group" },
        label && React__default["default"].createElement("label", { htmlFor: name }, label),
        React__default["default"].createElement("input", { type: type, id: name, name: name, value: value, placeholder: placeholder, onChange: onChange })));
}

function Spinner() {
    return React__default["default"].createElement("div", { className: "spinner" });
}

function Label({ htmlFor, children }) {
    return (React__default["default"].createElement("label", { htmlFor: htmlFor, style: { display: 'block', marginBottom: '0.5rem' } }, children));
}

function Textarea({ name, value, onChange, placeholder }) {
    return (React__default["default"].createElement("textarea", { name: name, value: value, onChange: onChange, placeholder: placeholder, style: { width: '100%', minHeight: '100px', padding: '0.5rem' } }));
}

function Checkbox({ id, name, checked, onChange, label }) {
    return (React__default["default"].createElement("div", { style: { marginBottom: '0.5rem' } },
        React__default["default"].createElement("input", { type: "checkbox", id: id, name: name, checked: checked, onChange: onChange }),
        React__default["default"].createElement("label", { htmlFor: id, style: { marginLeft: '0.5rem' } }, label)));
}

function RadioButton({ name, value, checked, onChange, label }) {
    return (React__default["default"].createElement("label", { style: { marginRight: '1rem' } },
        React__default["default"].createElement("input", { type: "radio", name: name, value: value, checked: checked, onChange: onChange }),
        label));
}

function Select({ name, value, onChange, options }) {
    return (React__default["default"].createElement("select", { name: name, value: value, onChange: onChange }, options.map(opt => (React__default["default"].createElement("option", { key: opt.value, value: opt.value }, opt.label)))));
}

function Divider() {
    return (React__default["default"].createElement("hr", { style: { border: 'none', borderTop: '1px solid #ccc', margin: '1rem 0' } }));
}

function Heading({ level = 1, children }) {
    const Tag = `h${level}`;
    return React__default["default"].createElement(Tag, null, children);
}

function Avatar({ src, alt, size = 40, name }) {
    const initials = name
        ? name.split(' ').map(n => n[0]).join('').toUpperCase()
        : '';
    return src ? (React__default["default"].createElement("img", { src: src, alt: alt, className: "avatar", style: { width: size, height: size } })) : (React__default["default"].createElement("div", { className: "avatar avatar--placeholder", style: { width: size, height: size } }, initials));
}

function Accordion({ items }) {
    const [openIndex, setOpenIndex] = React.useState(null);
    const toggleIndex = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };
    return (React__default["default"].createElement("div", { className: "accordion" }, items.map((item, idx) => (React__default["default"].createElement("div", { key: idx, className: "accordion-item" },
        React__default["default"].createElement("button", { className: "accordion-header", onClick: () => toggleIndex(idx), "aria-expanded": openIndex === idx }, item.title),
        openIndex === idx && (React__default["default"].createElement("div", { className: "accordion-content" }, item.content)))))));
}

function Badge({ children, variant = 'primary' }) {
    return React__default["default"].createElement("span", { className: `badge badge--${variant}` }, children);
}

function ButtonGroup({ children }) {
    return React__default["default"].createElement("div", { className: "button-group" }, children);
}

function Card({ title, className, children }) {
    return (React__default["default"].createElement("div", { className: className ? `card ${className}` : 'card' },
        title && React__default["default"].createElement("h3", { className: "card-title" }, title),
        React__default["default"].createElement("div", { className: "card-content" }, children)));
}

function FormField({ id, label, value, onChange, placeholder, error, type = 'text' }) {
    return (React__default["default"].createElement("div", { className: "form-field" },
        React__default["default"].createElement(Label, { htmlFor: id }, label),
        React__default["default"].createElement(Input, { name: id, type: type, value: value, onChange: onChange, placeholder: placeholder }),
        error && React__default["default"].createElement("p", { className: "form-field-error" }, error)));
}

function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen)
        return null;
    return (React__default["default"].createElement("div", { className: "modal-backdrop", onClick: onClose },
        React__default["default"].createElement("div", { className: "modal-content", onClick: e => e.stopPropagation() },
            React__default["default"].createElement("header", { className: "modal-header" },
                React__default["default"].createElement("h2", null, title),
                React__default["default"].createElement("button", { className: "modal-close", onClick: onClose, "aria-label": "Zav\u0159\u00EDt modal" }, "\u00D7")),
            React__default["default"].createElement("div", { className: "modal-body" }, children))));
}

function Notification({ message, type = 'success', onClose }) {
    if (!message)
        return null;
    return (React__default["default"].createElement("div", { className: `notification ${type}` },
        React__default["default"].createElement("span", null, message),
        React__default["default"].createElement("button", { onClick: onClose }, "\u00D7")));
}

function Tabs({ tabs }) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    return (React__default["default"].createElement("div", { className: "tabs" },
        React__default["default"].createElement("nav", { className: "tabs-nav" }, tabs.map((tab, idx) => (React__default["default"].createElement("button", { key: idx, className: `tabs-nav-button ${idx === activeIndex ? 'active' : ''}`, onClick: () => setActiveIndex(idx) }, tab.label)))),
        React__default["default"].createElement("div", { className: "tabs-content" }, tabs[activeIndex].content)));
}

function Tooltip({ children, text }) {
    const [visible, setVisible] = React.useState(false);
    return (React__default["default"].createElement("span", { className: "tooltip-wrapper", onMouseEnter: () => setVisible(true), onMouseLeave: () => setVisible(false), tabIndex: 0, onFocus: () => setVisible(true), onBlur: () => setVisible(false) },
        children,
        visible && React__default["default"].createElement("div", { className: "tooltip-box" }, text)));
}

function Dashboard({ stats }) {
    return (React__default["default"].createElement("section", { className: "dashboard" },
        React__default["default"].createElement("h1", null, "Dashboard"),
        React__default["default"].createElement("div", { className: "dashboard-cards" }, stats.map(({ id, title, value, icon }) => (React__default["default"].createElement(Card, { key: id, className: "dashboard-card" },
            React__default["default"].createElement("div", { className: "dashboard-card-icon" }, icon),
            React__default["default"].createElement("div", { className: "dashboard-card-info" },
                React__default["default"].createElement("h3", null, title),
                React__default["default"].createElement("p", null, value))))))));
}

function Footer() {
    return (React__default["default"].createElement("footer", { className: "footer" },
        "\u00A9 ",
        new Date().getFullYear(),
        " MyApp. V\u0161echna pr\u00E1va vyhrazena."));
}

function Header({ user, onLogout }) {
    return (React__default["default"].createElement("header", { className: "header" },
        React__default["default"].createElement("div", { className: "header__logo" }, "MyApp"),
        React__default["default"].createElement("nav", { className: "header__nav" },
            React__default["default"].createElement("a", { href: "/" }, "Dom\u016F"),
            React__default["default"].createElement("a", { href: "/dashboard" }, "Dashboard"),
            React__default["default"].createElement("a", { href: "/settings" }, "Nastaven\u00ED")),
        React__default["default"].createElement("div", { className: "header__user" },
            React__default["default"].createElement(Avatar, { name: user.name, src: user.avatar }),
            React__default["default"].createElement("span", { className: "header__username" }, user.name),
            React__default["default"].createElement(Button, { onClick: onLogout }, "Odhl\u00E1sit se"))));
}

function ListView({ items, renderItem }) {
    if (!items || items.length === 0) {
        return React__default["default"].createElement("div", { className: "listview-empty" }, "\u017D\u00E1dn\u00E9 polo\u017Eky");
    }
    return (React__default["default"].createElement("ul", { className: "listview" }, items.map((item, idx) => (React__default["default"].createElement("li", { key: idx, className: "listview-item" }, renderItem(item))))));
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
    return (React__default["default"].createElement("form", { className: "login-form", onSubmit: handleSubmit },
        React__default["default"].createElement("h2", null, "P\u0159ihl\u00E1\u0161en\u00ED"),
        React__default["default"].createElement(FormField, { id: "username", label: "U\u017Eivatelsk\u00E9 jm\u00E9no", type: "text", value: formData.username, onChange: handleChange, placeholder: "Zadejte u\u017Eivatelsk\u00E9 jm\u00E9no" }),
        React__default["default"].createElement(FormField, { id: "password", label: "Heslo", type: "password", value: formData.password, onChange: handleChange, placeholder: "Zadejte heslo" }),
        React__default["default"].createElement(Button, { type: "submit" }, "P\u0159ihl\u00E1sit se")));
}

function NotificationCenter({ notifications, onDismiss }) {
    if (!notifications.length) {
        return React__default["default"].createElement("div", { className: "notification-center-empty" }, "\u017D\u00E1dn\u00E9 notifikace");
    }
    return (React__default["default"].createElement("div", { className: "notification-center" }, notifications.map(({ id, type, message }) => (React__default["default"].createElement(Notification, { key: id, type: type, message: message, onClose: () => onDismiss(id) })))));
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
    return (React__default["default"].createElement("form", { className: "register-form", onSubmit: handleSubmit },
        React__default["default"].createElement("h2", null, "Registrace"),
        React__default["default"].createElement(FormField, { id: "username", label: "U\u017Eivatelsk\u00E9 jm\u00E9no", type: "text", value: formData.username, onChange: handleChange, placeholder: "Zadejte u\u017Eivatelsk\u00E9 jm\u00E9no" }),
        React__default["default"].createElement(FormField, { id: "email", label: "Email", type: "email", value: formData.email, onChange: handleChange, placeholder: "Zadejte email" }),
        React__default["default"].createElement(FormField, { id: "password", label: "Heslo", type: "password", value: formData.password, onChange: handleChange, placeholder: "Zadejte heslo" }),
        React__default["default"].createElement(FormField, { id: "confirmPassword", label: "Potvr\u010Fte heslo", type: "password", value: formData.confirmPassword, onChange: handleChange, placeholder: "Potvr\u010Fte heslo" }),
        React__default["default"].createElement(Button, { type: "submit" }, "Registrovat se")));
}

function SearchBar({ onSearch }) {
    const [query, setQuery] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };
    return (React__default["default"].createElement("form", { className: "searchbar", onSubmit: handleSubmit },
        React__default["default"].createElement(Input, { type: "text", placeholder: "Hledat...", value: query, onChange: e => setQuery(e.target.value) }),
        React__default["default"].createElement(Button, { type: "submit" }, "Hledat")));
}

function Sidebar({ links }) {
    return (React__default["default"].createElement("aside", { className: "sidebar" },
        React__default["default"].createElement("nav", { className: "sidebar-nav" }, links.map((link) => (React__default["default"].createElement("a", { key: link.href, href: link.href, className: "sidebar-link" }, link.label))))));
}

function UserProfile({ user, onEdit, onLogout }) {
    return (React__default["default"].createElement("section", { className: "user-profile" },
        React__default["default"].createElement(Avatar, { name: user.name, src: user.avatar, size: 80 }),
        React__default["default"].createElement("h2", { className: "user-profile__name" }, user.name),
        React__default["default"].createElement("p", { className: "user-profile__email" }, user.email),
        React__default["default"].createElement("div", { className: "user-profile__actions" },
            React__default["default"].createElement(Button, { onClick: onEdit }, "Upravit profil"),
            React__default["default"].createElement(Button, { onClick: onLogout, variant: "secondary" }, "Odhl\u00E1sit se"))));
}

const AuthLayout = ({ children }) => {
    return (React__default["default"].createElement("div", { className: "auth-layout" },
        React__default["default"].createElement("div", { className: "auth-box" },
            React__default["default"].createElement(Heading, { level: 1 }, "Welcome to MyApp"),
            children)));
};

function DashboardLayout({ children, user, onLogout }) {
    const sidebarLinks = [
        { label: 'Přehled', href: '/dashboard' },
        { label: 'Úkoly', href: '/tasks' },
        { label: 'Nastavení', href: '/settings' }
    ];
    return (React__default["default"].createElement("div", { className: "dashboard-layout" },
        React__default["default"].createElement(Header, { user: user, onLogout: onLogout }),
        React__default["default"].createElement("div", { className: "dashboard-main" },
            React__default["default"].createElement(Sidebar, { links: sidebarLinks }),
            React__default["default"].createElement("main", { className: "dashboard-content" }, children)),
        React__default["default"].createElement(Footer, null)));
}

const FormLayout = ({ title, description, children }) => {
    return (React__default["default"].createElement("div", { className: "form-layout" },
        React__default["default"].createElement("div", { className: "form-header" },
            React__default["default"].createElement(Heading, { level: 2 }, title),
            description && React__default["default"].createElement("p", { className: "form-description" }, description)),
        React__default["default"].createElement("div", { className: "form-body" }, children)));
};

const ProfileLayout = ({ user, tabs, children }) => {
    return (React__default["default"].createElement("div", { className: "profile-layout" },
        React__default["default"].createElement("div", { className: "profile-header" },
            React__default["default"].createElement(Avatar, { src: user.avatar, alt: user.name }),
            React__default["default"].createElement("h2", null, user.name),
            React__default["default"].createElement("p", null, user.email)),
        React__default["default"].createElement(Tabs, { tabs: tabs }),
        React__default["default"].createElement("div", { className: "profile-content" }, children)));
};

const SettingsLayout = ({ user, onLogout, children }) => {
    const settingsLinks = [
        { label: 'Profil', href: '/settings/profile' },
        { label: 'Heslo', href: '/settings/password' },
        { label: 'Notifikace', href: '/settings/notifications' },
        { label: 'Předvolby', href: '/settings/preferences' },
    ];
    return (React__default["default"].createElement("div", { className: "settings-layout" },
        React__default["default"].createElement(Header, { user: user, onLogout: onLogout }),
        React__default["default"].createElement("div", { className: "settings-main" },
            React__default["default"].createElement(Sidebar, { links: settingsLinks }),
            React__default["default"].createElement("div", { className: "settings-content" }, children)),
        React__default["default"].createElement(Footer, null)));
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
