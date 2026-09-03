import React from 'react';
import { Notification, NotificationType } from '../../molecules';
import './NotificationCenter.css';

export interface NotificationItem {
  id: string | number;
  type?: NotificationType;
  message: React.ReactNode;
}

export interface NotificationCenterProps {
  notifications: NotificationItem[];
  onDismiss: (id: string | number) => void;
}

function NotificationCenter({ notifications, onDismiss }: NotificationCenterProps) {
  if (!notifications.length) {
    return <div className="notification-center-empty">No notifications</div>;
  }

  return (
    <div className="notification-center">
      {notifications.map(({ id, type, message }) => (
        <Notification
          key={id}
          type={type}
          message={message}
          onClose={() => onDismiss(id)}
        />
      ))}
    </div>
  );
}

export default NotificationCenter;
