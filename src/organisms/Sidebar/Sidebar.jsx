import React from 'react';
import './Sidebar.css';

function Sidebar({ links }) {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="sidebar-link">
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
