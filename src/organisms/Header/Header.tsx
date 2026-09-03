import React from 'react';
import { Button } from '../../atoms';
import { Avatar } from '../../molecules';
import './Header.css';

export interface HeaderUser {
  name: string;
  avatar?: string;
}

export interface HeaderProps {
  user: HeaderUser;
  onLogout?: () => void;
}

function Header({ user, onLogout }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__logo">MyApp</div>
      <nav className="header__nav">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/settings">Settings</a>
      </nav>
      <div className="header__user">
        <Avatar name={user.name} src={user.avatar} />
        <span className="header__username">{user.name}</span>
        <Button onClick={onLogout}>Log out</Button>
      </div>
    </header>
  );
}

export default Header;
