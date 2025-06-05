import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import Sidebar from '../../organisms/Sidebar/Sidebar';
import './SettingsLayout.css';

const SettingsLayout = ({ user, onLogout, children }) => {
  const settingsLinks = [
    { label: 'Profil', href: '/settings/profile' },
    { label: 'Heslo', href: '/settings/password' },
    { label: 'Notifikace', href: '/settings/notifications' },
    { label: 'Předvolby', href: '/settings/preferences' },
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
