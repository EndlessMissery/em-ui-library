import React from 'react';
import { NotificationType } from '../../molecules';
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
declare function NotificationCenter({ notifications, onDismiss }: NotificationCenterProps): React.JSX.Element;
export default NotificationCenter;
