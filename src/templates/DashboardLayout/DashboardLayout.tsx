import React from 'react';
import Header, { HeaderUser } from '../../organisms/Header/Header';
import Sidebar from '../../organisms/Sidebar/Sidebar';
import Footer from '../../organisms/Footer/Footer';
import './DashboardLayout.css';

export interface DashboardLayoutProps {
  children: React.ReactNode;
  user: HeaderUser;
  onLogout?: () => void;
}

function DashboardLayout({ children, user, onLogout }: DashboardLayoutProps) {
  const sidebarLinks = [
    { label: 'Přehled', href: '/dashboard' },
    { label: 'Úkoly', href: '/tasks' },
    { label: 'Nastavení', href: '/settings' }
  ];

  return (
    <div className="dashboard-layout">
      <Header user={user} onLogout={onLogout} />
      <div className="dashboard-main">
        <Sidebar links={sidebarLinks} />
        <main className="dashboard-content">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
