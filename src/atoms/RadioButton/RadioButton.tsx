import React from 'react';
import './RadioButton.css';

export interface RadioButtonProps {
  name?: string;
  value?: string | number;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: React.ReactNode;
}

function RadioButton({ name, value, checked, onChange, label }: RadioButtonProps) {
  return (
    <label className="radio-button">
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
