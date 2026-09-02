import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Sidebar from './Sidebar';

const links = [
  { label: 'Overview', href: '/dashboard' },
  { label: 'Tasks', href: '/tasks' },
];

describe('Sidebar', () => {
  it('renders every link with its href', () => {
    render(<Sidebar links={links} />);
    expect(screen.getByRole('link', { name: 'Overview' })).toHaveAttribute('href', '/dashboard');
    expect(screen.getByRole('link', { name: 'Tasks' })).toHaveAttribute('href', '/tasks');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Sidebar links={links} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
