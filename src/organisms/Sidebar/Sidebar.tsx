import React from 'react';
import './Sidebar.css';

export interface SidebarLink {
  href: string;
  label: React.ReactNode;
}

export interface SidebarProps {
  links: SidebarLink[];
}

function Sidebar({ links }: SidebarProps) {
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
