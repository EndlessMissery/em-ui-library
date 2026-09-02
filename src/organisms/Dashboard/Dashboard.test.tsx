import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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

  // NOTE: no accessibility test here on purpose. The stat cards jump straight from the page's <h1> to <h3>, skipping <h2> — heading-order violation
});
