import React from 'react';
import './Avatar.css';
export interface AvatarProps {
    src?: string;
    alt?: string;
    size?: number;
    name?: string;
}
declare function Avatar({ src, alt, size, name }: AvatarProps): React.JSX.Element;
export default Avatar;
