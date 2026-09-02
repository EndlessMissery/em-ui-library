import React from 'react';
import { TabItem } from '../../molecules';
export interface ProfileLayoutUser {
    name: string;
    email: string;
    avatar?: string;
}
export interface ProfileLayoutProps {
    user: ProfileLayoutUser;
    tabs: TabItem[];
    children: React.ReactNode;
}
declare const ProfileLayout: ({ user, tabs, children }: ProfileLayoutProps) => React.JSX.Element;
export default ProfileLayout;
