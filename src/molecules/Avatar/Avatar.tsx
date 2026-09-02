import React from 'react';
import './Avatar.css';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  name?: string;
}

function Avatar({ src, alt, size = 40, name }: AvatarProps) {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase()
    : '';

  return src ? (
    <img src={src} alt={alt ?? name ?? ''} className="avatar" style={{ width: size, height: size }} />
  ) : (
    <div className="avatar avatar--placeholder" style={{ width: size, height: size }}>
      {initials}
    </div>
  );
}

export default Avatar;
