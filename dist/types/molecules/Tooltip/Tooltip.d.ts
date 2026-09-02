import React from 'react';
export interface TooltipProps {
    children: React.ReactNode;
    text: React.ReactNode;
}
declare function Tooltip({ children, text }: TooltipProps): React.JSX.Element;
export default Tooltip;
