import React from 'react';
import './Badge.css';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

function Badge({ children, variant = 'primary' }: BadgeProps) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}

export default Badge;
