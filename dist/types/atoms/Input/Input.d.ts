import React from 'react';
import './Input.css';
export interface InputProps {
    label?: React.ReactNode;
    name?: string;
    type?: React.HTMLInputTypeAttribute;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
}
declare function Input({ label, name, type, value, onChange, placeholder }: InputProps): React.JSX.Element;
export default Input;
