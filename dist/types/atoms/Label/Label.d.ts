import React from 'react';
import './Label.css';
export interface LabelProps {
    htmlFor?: string;
    children: React.ReactNode;
}
declare function Label({ htmlFor, children }: LabelProps): React.JSX.Element;
export default Label;
