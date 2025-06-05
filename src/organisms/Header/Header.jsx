import React from 'react';
import { Button } from '../../atoms';
import { Avatar } from '../../molecules';
import './Header.css';

function Header({ user, onLogout }) {
  return (
    <header className="header">
      <div className="header__logo">MyApp</div>
      <nav className="header__nav">
        <a href="/">Domů</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/settings">Nastavení</a>
      </nav>
      <div className="header__user">
        <Avatar name={user.name} src={user.avatar} />
        <span className="header__username">{user.name}</span>
        <Button onClick={onLogout}>Odhlásit se</Button>
      </div>
    </header>
  );
}

export default Header;
