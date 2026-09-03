import React from 'react';
import './Spinner.css';

export interface SpinnerProps {
  'aria-label'?: string;
}

function Spinner({ ['aria-label']: ariaLabel = 'Loading' }: SpinnerProps) {
  return <div className="spinner" role="status" aria-label={ariaLabel} />;
}

export default Spinner;
