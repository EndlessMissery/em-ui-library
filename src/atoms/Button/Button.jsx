import React from 'react';
import './Button.css';

function Button({ children, onClick, type = 'button', disabled = false, variant = 'primary' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
