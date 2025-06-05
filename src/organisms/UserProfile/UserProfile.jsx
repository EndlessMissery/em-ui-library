import React from 'react';
import { Avatar, Button } from '../../atoms';
import './UserProfile.css';

function UserProfile({ user, onEdit, onLogout }) {
  return (
    <section className="user-profile">
      <Avatar name={user.name} src={user.avatar} size={80} />
      <h2 className="user-profile__name">{user.name}</h2>
      <p className="user-profile__email">{user.email}</p>
      <div className="user-profile__actions">
        <Button onClick={onEdit}>Upravit profil</Button>
        <Button onClick={onLogout} variant="secondary">Odhlásit se</Button>
      </div>
    </section>
  );
}

export default UserProfile;
