import React from 'react';
import './RadioButton.css';

function RadioButton({ name, value, checked, onChange, label }) {
  return (
    <label style={{ marginRight: '1rem' }}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export default RadioButton;
