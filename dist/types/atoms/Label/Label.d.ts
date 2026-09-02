import React from 'react';
export interface LabelProps {
    htmlFor?: string;
    children: React.ReactNode;
}
declare function Label({ htmlFor, children }: LabelProps): React.JSX.Element;
export default Label;
