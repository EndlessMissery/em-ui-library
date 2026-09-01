import React from 'react';
import './Heading.css';
export interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
}
declare function Heading({ level, children }: HeadingProps): React.JSX.Element;
export default Heading;
