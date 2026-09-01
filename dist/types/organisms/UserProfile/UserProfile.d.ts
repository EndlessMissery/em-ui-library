import React from 'react';
import './UserProfile.css';
export interface UserProfileUser {
    name: string;
    email: string;
    avatar?: string;
}
export interface UserProfileProps {
    user: UserProfileUser;
    onEdit?: () => void;
    onLogout?: () => void;
}
declare function UserProfile({ user, onEdit, onLogout }: UserProfileProps): React.JSX.Element;
export default UserProfile;
