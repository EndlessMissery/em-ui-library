import React from 'react';
import { Card } from '../../molecules';
import './Dashboard.css';

function Dashboard({ stats }) {
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        {stats.map(({ id, title, value, icon }) => (
          <Card key={id} className="dashboard-card">
            <div className="dashboard-card-icon">{icon}</div>
            <div className="dashboard-card-info">
              <h3>{title}</h3>
              <p>{value}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
