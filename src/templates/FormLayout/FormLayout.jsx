import React from 'react';
import './FormLayout.css';
import { Heading } from '../../atoms';

const FormLayout = ({ title, description, children }) => {
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
