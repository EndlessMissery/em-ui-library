import React from 'react';
import './Textarea.css';
export interface TextareaProps {
    name?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
}
declare function Textarea({ name, value, onChange, placeholder }: TextareaProps): React.JSX.Element;
export default Textarea;
