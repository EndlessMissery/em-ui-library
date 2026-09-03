import React from 'react';
import { Heading } from '../../atoms';
import { Card } from '../../molecules';
import './Dashboard.css';

export interface DashboardStat {
  id: string | number;
  title: React.ReactNode;
  value: React.ReactNode;
  icon?: React.ReactNode;
}

export interface DashboardProps {
  stats: DashboardStat[];
}

function Dashboard({ stats }: DashboardProps) {
  return (
    <section className="dashboard">
      <Heading level={1}>Dashboard</Heading>
      <div className="dashboard-cards">
        {stats.map(({ id, title, value, icon }) => (
          <Card key={id} className="dashboard-card">
            <div className="dashboard-card-icon">{icon}</div>
            <div className="dashboard-card-info">
              <h2>{title}</h2>
              <p>{value}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
