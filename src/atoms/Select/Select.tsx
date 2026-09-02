import React, { useId } from 'react';
import './Select.css';

export interface SelectOption {
  value: string | number;
  label: React.ReactNode;
}

export interface SelectProps {
  name?: string;
  label?: React.ReactNode;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  options: SelectOption[];
  'aria-label'?: string;
}

function Select({ name, label, value, onChange, options, ['aria-label']: ariaLabel }: SelectProps) {
  const generatedId = useId();
  const selectId = name ?? generatedId;

  return (
    <div className="form-group">
      {label && <label htmlFor={selectId}>{label}</label>}
      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        className="select"
        aria-label={!label ? ariaLabel : undefined}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
