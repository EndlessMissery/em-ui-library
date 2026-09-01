import React from 'react';
import './Card.css';

export interface CardProps {
  title?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

function Card({ title, className, children }: CardProps) {
  return (
    <div className={className ? `card ${className}` : 'card'}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;
