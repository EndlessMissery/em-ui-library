import React from 'react';
export interface CardProps {
    title?: React.ReactNode;
    className?: string;
    children: React.ReactNode;
}
declare function Card({ title, className, children }: CardProps): React.JSX.Element;
export default Card;
