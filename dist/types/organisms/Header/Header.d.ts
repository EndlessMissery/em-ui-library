import React from 'react';
export interface HeaderUser {
    name: string;
    avatar?: string;
}
export interface HeaderProps {
    user: HeaderUser;
    onLogout?: () => void;
}
declare function Header({ user, onLogout }: HeaderProps): React.JSX.Element;
export default Header;
