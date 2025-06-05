import React from 'react';
import './Checkbox.css';

function Checkbox({ id, name, checked, onChange, label }) {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} style={{ marginLeft: '0.5rem' }}>{label}</label>
    </div>
  );
}

export default Checkbox;
