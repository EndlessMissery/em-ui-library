import React from 'react';
import './ProfileLayout.css';
import { Avatar, Tabs } from '../../molecules';

const ProfileLayout = ({ user, tabs, children }) => {
  return (
    <div className="profile-layout">
      <div className="profile-header">
        <Avatar src={user.avatar} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <Tabs tabs={tabs} />
      <div className="profile-content">{children}</div>
    </div>
  );
};

export default ProfileLayout;
