import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the current year in the copyright line', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Footer />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
