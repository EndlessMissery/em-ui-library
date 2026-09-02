import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Card from './Card';

describe('Card', () => {
  it('renders the title and children', () => {
    render(<Card title="Stats">Body</Card>);
    expect(screen.getByRole('heading', { name: 'Stats' })).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('renders without a title', () => {
    render(<Card>Body</Card>);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('merges a given className with the base "card" class', () => {
    const { container } = render(<Card className="dashboard-card">Body</Card>);
    expect(container.firstChild).toHaveClass('card', 'dashboard-card');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Card title="Stats">Body</Card>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
