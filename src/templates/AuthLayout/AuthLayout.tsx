import React from 'react';
import './AuthLayout.css';
import { Heading } from '../../atoms';

export interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
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
