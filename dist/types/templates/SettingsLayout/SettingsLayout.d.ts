import React from 'react';
import { HeaderUser } from '../../organisms/Header/Header';
import './SettingsLayout.css';
export interface SettingsLayoutProps {
    user: HeaderUser;
    onLogout?: () => void;
    children: React.ReactNode;
}
declare const SettingsLayout: ({ user, onLogout, children }: SettingsLayoutProps) => React.JSX.Element;
export default SettingsLayout;
