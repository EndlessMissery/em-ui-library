import React from 'react';
export interface InputProps {
    label?: React.ReactNode;
    name?: string;
    type?: React.HTMLInputTypeAttribute;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    'aria-invalid'?: boolean;
    'aria-describedby'?: string;
}
declare function Input({ label, name, type, value, onChange, placeholder, ['aria-invalid']: ariaInvalid, ['aria-describedby']: ariaDescribedby, }: InputProps): React.JSX.Element;
export default Input;
