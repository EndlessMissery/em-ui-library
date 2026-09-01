import React from 'react';
import './Select.css';
export interface SelectOption {
    value: string | number;
    label: React.ReactNode;
}
export interface SelectProps {
    name?: string;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    options: SelectOption[];
}
declare function Select({ name, value, onChange, options }: SelectProps): React.JSX.Element;
export default Select;
