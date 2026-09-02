import React from 'react';
export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
}
declare function Badge({ children, variant }: BadgeProps): React.JSX.Element;
export default Badge;
