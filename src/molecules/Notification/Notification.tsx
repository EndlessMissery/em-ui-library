import React from 'react';
import './Notification.css';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface NotificationProps {
  message?: React.ReactNode;
  type?: NotificationType;
  onClose?: () => void;
}

function Notification({ message, type = 'success', onClose }: NotificationProps) {
  if (!message) return null;

  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button onClick={onClose} aria-label="Zavřít">×</button>
    </div>
  );
}

export default Notification;
