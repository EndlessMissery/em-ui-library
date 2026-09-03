import React from 'react';
import { Button } from '../../atoms';
import { Avatar } from '../../molecules';
import './UserProfile.css';

export interface UserProfileUser {
  name: string;
  email: string;
  avatar?: string;
}

export interface UserProfileProps {
  user: UserProfileUser;
  onEdit?: () => void;
  onLogout?: () => void;
}

function UserProfile({ user, onEdit, onLogout }: UserProfileProps) {
  return (
    <section className="user-profile">
      <Avatar name={user.name} src={user.avatar} size={80} />
      <h2 className="user-profile__name">{user.name}</h2>
      <p className="user-profile__email">{user.email}</p>
      <div className="user-profile__actions">
        <Button onClick={onEdit}>Edit profile</Button>
        <Button onClick={onLogout} variant="secondary">Log out</Button>
      </div>
    </section>
  );
}

export default UserProfile;
