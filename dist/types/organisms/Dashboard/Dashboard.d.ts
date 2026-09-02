import React from 'react';
export interface DashboardStat {
    id: string | number;
    title: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
}
export interface DashboardProps {
    stats: DashboardStat[];
}
declare function Dashboard({ stats }: DashboardProps): React.JSX.Element;
export default Dashboard;
