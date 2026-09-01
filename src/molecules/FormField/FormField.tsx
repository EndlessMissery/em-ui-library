import React from 'react';
import { Label, Input } from '../../atoms';
import './FormField.css';

export interface FormFieldProps {
  id: string;
  label: React.ReactNode;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
}

function FormField({ id, label, value, onChange, placeholder, error, type = 'text' }: FormFieldProps) {
  return (
    <div className="form-field">
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        // TODO(a11y phase): Input doesn't forward aria-invalid yet, revisit
        // once Input is wired up for accessibility attributes.
      />
      {error && <p className="form-field-error">{error}</p>}
    </div>
  );
}

export default FormField;
