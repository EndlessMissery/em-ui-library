import React from 'react';
import './Button.css';
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    variant?: ButtonVariant;
}
declare function Button({ children, onClick, type, disabled, variant }: ButtonProps): React.JSX.Element;
export default Button;
