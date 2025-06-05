import React from 'react';
import './Select.css';

function Select({ name, value, onChange, options }) {
  return (
    <select name={name} value={value} onChange={onChange}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}

export default Select;
