import React from 'react';
import './Select.css';

export interface SelectOption {
  value: string | number;
  label: React.ReactNode;
}

export interface SelectProps {
  name?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  options: SelectOption[];
}

function Select({ name, value, onChange, options }: SelectProps) {
  return (
    <select name={name} value={value} onChange={onChange}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}

export default Select;
