import React from 'react';
import './FormField.css';
export interface FormFieldProps {
    id: string;
    label: React.ReactNode;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    error?: React.ReactNode;
    type?: React.HTMLInputTypeAttribute;
}
declare function FormField({ id, label, value, onChange, placeholder, error, type }: FormFieldProps): React.JSX.Element;
export default FormField;
