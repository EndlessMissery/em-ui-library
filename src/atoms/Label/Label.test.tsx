import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Label from './Label';

describe('Label', () => {
  it('renders its children', () => {
    render(<Label htmlFor="email">Email</Label>);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('sets htmlFor', () => {
    render(<Label htmlFor="email">Email</Label>);
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Label htmlFor="email">Email</Label>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
