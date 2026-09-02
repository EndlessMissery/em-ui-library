import React, { useId } from 'react';
import './Textarea.css';

export interface TextareaProps {
  name?: string;
  label?: React.ReactNode;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  'aria-label'?: string;
}

function Textarea({ name, label, value, onChange, placeholder, ['aria-label']: ariaLabel }: TextareaProps) {
  const generatedId = useId();
  const textareaId = name ?? generatedId;

  return (
    <div className="form-group">
      {label && <label htmlFor={textareaId}>{label}</label>}
      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="textarea"
        aria-label={!label ? ariaLabel : undefined}
      />
    </div>
  );
}

export default Textarea;
