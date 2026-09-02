import React from 'react';
import { HeaderUser } from '../../organisms/Header/Header';
export interface DashboardLayoutProps {
    children: React.ReactNode;
    user: HeaderUser;
    onLogout?: () => void;
}
declare function DashboardLayout({ children, user, onLogout }: DashboardLayoutProps): React.JSX.Element;
export default DashboardLayout;
