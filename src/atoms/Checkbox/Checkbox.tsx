import React from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  id?: string;
  name?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: React.ReactNode;
}

function Checkbox({ id, name, checked, onChange, label }: CheckboxProps) {
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
