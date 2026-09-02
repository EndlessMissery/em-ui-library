import React from 'react';
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
