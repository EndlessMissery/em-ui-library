import React from 'react';
import './Badge.css';

function Badge({ children, variant = 'primary' }) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}

export default Badge;
