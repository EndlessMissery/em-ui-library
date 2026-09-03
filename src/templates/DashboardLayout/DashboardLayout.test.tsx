import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DashboardLayout from './DashboardLayout';

const user = { name: 'User Admin', avatar: '/me.png' };

describe('DashboardLayout', () => {
  it('renders header, sidebar links, children, and footer', () => {
    render(
      <DashboardLayout user={user} onLogout={() => {}}>
        <p>Page content</p>
      </DashboardLayout>
    );
    expect(screen.getByText('User Admin')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Overview' })).toHaveAttribute('href', '/dashboard');
    expect(screen.getByRole('link', { name: 'Tasks' })).toHaveAttribute('href', '/tasks');
    expect(screen.getByText('Page content')).toBeInTheDocument();
    expect(screen.getByText(new RegExp(new Date().getFullYear().toString()))).toBeInTheDocument();
  });

  it('calls onLogout from the header', async () => {
    const userEventInstance = userEvent.setup();
    const onLogout = vi.fn();
    render(
      <DashboardLayout user={user} onLogout={onLogout}>
        <p>Page content</p>
      </DashboardLayout>
    );

    await userEventInstance.click(screen.getByRole('button', { name: 'Log out' }));

    expect(onLogout).toHaveBeenCalledTimes(1);
  });
});
