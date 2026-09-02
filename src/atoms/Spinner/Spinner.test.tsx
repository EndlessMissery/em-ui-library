import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('renders a spinner element', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('.spinner')).toBeInTheDocument();
  });

  it('exposes a status role so screen readers announce the loading state', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toHaveAccessibleName('Načítání');
  });

  it('accepts a custom accessible label', () => {
    render(<Spinner aria-label="Ukládám změny" />);
    expect(screen.getByRole('status')).toHaveAccessibleName('Ukládám změny');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Spinner />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
