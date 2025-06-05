import React from 'react';
import './Avatar.css';

function Avatar({ src, alt, size = 40, name }) {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase()
    : '';

  return src ? (
    <img src={src} alt={alt} className="avatar" style={{ width: size, height: size }} />
  ) : (
    <div className="avatar avatar--placeholder" style={{ width: size, height: size }}>
      {initials}
    </div>
  );
}

export default Avatar;
