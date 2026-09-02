import React from 'react';
export interface SelectOption {
    value: string | number;
    label: React.ReactNode;
}
export interface SelectProps {
    name?: string;
    label?: React.ReactNode;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    options: SelectOption[];
    'aria-label'?: string;
}
declare function Select({ name, label, value, onChange, options, ['aria-label']: ariaLabel }: SelectProps): React.JSX.Element;
export default Select;
