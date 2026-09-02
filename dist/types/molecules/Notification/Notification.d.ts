import React from 'react';
export type NotificationType = 'success' | 'error' | 'warning' | 'info';
export interface NotificationProps {
    message?: React.ReactNode;
    type?: NotificationType;
    onClose?: () => void;
}
declare function Notification({ message, type, onClose }: NotificationProps): React.JSX.Element | null;
export default Notification;
