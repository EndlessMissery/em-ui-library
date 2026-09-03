import React from 'react';
import './Heading.css';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

function Heading({ level = 1, children }: HeadingProps) {
  const Tag = `h${level}` as React.ElementType;
  return <Tag className="heading">{children}</Tag>;
}

export default Heading;
