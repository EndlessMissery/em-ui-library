import React from 'react';
import './Label.css';

export interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}

function Label({ htmlFor, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} style={{ display: 'block', marginBottom: '0.5rem' }}>
      {children}
    </label>
  );
}

export default Label;
