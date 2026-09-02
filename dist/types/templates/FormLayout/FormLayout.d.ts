import React from 'react';
export interface FormLayoutProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    children: React.ReactNode;
}
declare const FormLayout: ({ title, description, children }: FormLayoutProps) => React.JSX.Element;
export default FormLayout;
