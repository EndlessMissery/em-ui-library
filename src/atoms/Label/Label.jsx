import React from 'react';
import './Label.css';

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} style={{ display: 'block', marginBottom: '0.5rem' }}>
      {children}
    </label>
  );
}

export default Label;
