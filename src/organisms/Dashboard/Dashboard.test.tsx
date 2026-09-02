import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Dashboard from './Dashboard';

const stats = [
  { id: 1, title: 'Users', value: 42, icon: '👤' },
  { id: 2, title: 'Revenue', value: '$1k', icon: '💰' },
];

describe('Dashboard', () => {
  it('renders a card per stat', () => {
    render(<Dashboard stats={stats} />);
    expect(screen.getByRole('heading', { name: 'Users' })).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Revenue' })).toBeInTheDocument();
    expect(screen.getByText('$1k')).toBeInTheDocument();
  });

  it('applies the dashboard-card class to each stat card', () => {
    const { container } = render(<Dashboard stats={stats} />);
    expect(container.querySelectorAll('.dashboard-card')).toHaveLength(2);
  });

  it('keeps stat card titles at heading level 2', () => {
    render(<Dashboard stats={stats} />);
    expect(screen.getByRole('heading', { level: 2, name: 'Users' })).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Dashboard stats={stats} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
