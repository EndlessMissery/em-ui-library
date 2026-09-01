import React from 'react';
import './Textarea.css';

export interface TextareaProps {
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
}

function Textarea({ name, value, onChange, placeholder }: TextareaProps) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ width: '100%', minHeight: '100px', padding: '0.5rem' }}
    />
  );
}

export default Textarea;
