import React from 'react';
import './RadioButton.css';
export interface RadioButtonProps {
    name?: string;
    value?: string | number;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    label?: React.ReactNode;
}
declare function RadioButton({ name, value, checked, onChange, label }: RadioButtonProps): React.JSX.Element;
export default RadioButton;
