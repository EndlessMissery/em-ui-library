import React from 'react';
import { Label, Input } from '../../atoms';
import './FormField.css';

function FormField({ id, label, value, onChange, placeholder, error, type = 'text' }) {
  return (
    <div className="form-field">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
      />
      {error && <p className="form-field-error">{error}</p>}
    </div>
  );
}

export default FormField;
