import React from 'react';
import './FormLayout.css';
import { Heading } from '../../atoms';

export interface FormLayoutProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
}

const FormLayout = ({ title, description, children }: FormLayoutProps) => {
  return (
    <div className="form-layout">
      <div className="form-header">
        <Heading level={2}>{title}</Heading>
        {description && <p className="form-description">{description}</p>}
      </div>
      <div className="form-body">{children}</div>
    </div>
  );
};

export default FormLayout;
