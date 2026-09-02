import React from 'react';
export interface TextareaProps {
    name?: string;
    label?: React.ReactNode;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    'aria-label'?: string;
}
declare function Textarea({ name, label, value, onChange, placeholder, ['aria-label']: ariaLabel }: TextareaProps): React.JSX.Element;
export default Textarea;
