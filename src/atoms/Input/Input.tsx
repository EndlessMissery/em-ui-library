import React from 'react';
import './Input.css';

export interface InputProps {
  label?: React.ReactNode;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
}

function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  ['aria-invalid']: ariaInvalid,
  ['aria-describedby']: ariaDescribedby,
}: InputProps) {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedby}
      />
    </div>
  );
}

export default Input;
