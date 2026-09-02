import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Badge from './Badge';

describe('Badge', () => {
  it('renders its children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('defaults to the primary variant', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toHaveClass('badge--primary');
  });

  it('applies the given variant', () => {
    render(<Badge variant="danger">Error</Badge>);
    expect(screen.getByText('Error')).toHaveClass('badge--danger');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Badge>New</Badge>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
