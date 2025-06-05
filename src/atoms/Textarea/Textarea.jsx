import React from 'react';
import './Textarea.css';

function Textarea({ name, value, onChange, placeholder }) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ width: '100%', minHeight: '100px', padding: '0.5rem' }}
    />
  );
}

export default Textarea;
