import React from 'react';
import { Notification } from '../../molecules';
import './NotificationCenter.css';

function NotificationCenter({ notifications, onDismiss }) {
  if (!notifications.length) {
    return <div className="notification-center-empty">Žádné notifikace</div>;
  }

  return (
    <div className="notification-center">
      {notifications.map(({ id, type, message }) => (
        <Notification
          key={id}
          type={type}
          onClose={() => onDismiss(id)}
        >
          {message}
        </Notification>
      ))}
    </div>
  );
}

export default NotificationCenter;
