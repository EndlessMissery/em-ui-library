import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Tabs from './Tabs';

const tabs = [
  { label: 'Profile', content: 'Profile content' },
  { label: 'Billing', content: 'Billing content' },
];

describe('Tabs', () => {
  it('shows the first tab content by default', () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByText('Profile content')).toBeInTheDocument();
    expect(screen.queryByText('Billing content')).not.toBeInTheDocument();
  });

  it('marks the active tab button', () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByRole('button', { name: 'Profile' })).toHaveClass('active');
    expect(screen.getByRole('button', { name: 'Billing' })).not.toHaveClass('active');
  });

  it('switches content when a different tab is clicked', async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={tabs} />);

    await user.click(screen.getByRole('button', { name: 'Billing' }));

    expect(screen.getByText('Billing content')).toBeInTheDocument();
    expect(screen.queryByText('Profile content')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Billing' })).toHaveClass('active');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Tabs tabs={tabs} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
