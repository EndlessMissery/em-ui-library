import React from 'react';
export interface CheckboxProps {
    id?: string;
    name?: string;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    label?: React.ReactNode;
}
declare function Checkbox({ id, name, checked, onChange, label }: CheckboxProps): React.JSX.Element;
export default Checkbox;
