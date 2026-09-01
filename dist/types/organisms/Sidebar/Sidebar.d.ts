import React from 'react';
import './Sidebar.css';
export interface SidebarLink {
    href: string;
    label: React.ReactNode;
}
export interface SidebarProps {
    links: SidebarLink[];
}
declare function Sidebar({ links }: SidebarProps): React.JSX.Element;
export default Sidebar;
