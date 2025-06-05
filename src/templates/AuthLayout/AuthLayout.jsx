import React from 'react';
import './AuthLayout.css';
import { Heading } from '../../atoms';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-box">
        <Heading level={1}>Welcome to MyApp</Heading>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
