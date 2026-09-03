import React from 'react';
import Header, { HeaderUser } from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import Sidebar from '../../organisms/Sidebar/Sidebar';
import './SettingsLayout.css';

export interface SettingsLayoutProps {
  user: HeaderUser;
  onLogout?: () => void;
  children: React.ReactNode;
}

const SettingsLayout = ({ user, onLogout, children }: SettingsLayoutProps) => {
  const settingsLinks = [
    { label: 'Profile', href: '/settings/profile' },
    { label: 'Password', href: '/settings/password' },
    { label: 'Notifications', href: '/settings/notifications' },
    { label: 'Preferences', href: '/settings/preferences' },
  ];

  return (
    <div className="settings-layout">
      <Header user={user} onLogout={onLogout} />
      <div className="settings-main">
        <Sidebar links={settingsLinks} />
        <div className="settings-content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default SettingsLayout;
