import React from 'react';
import './ButtonGroup.css';

export interface ButtonGroupProps {
  children: React.ReactNode;
}

function ButtonGroup({ children }: ButtonGroupProps) {
  return <div className="button-group">{children}</div>;
}

export default ButtonGroup;
