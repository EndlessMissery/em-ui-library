import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import UserProfile from './UserProfile';

const user = { name: 'User Admin', email: 'useradmin@example.com', avatar: '/me.png' };

describe('UserProfile', () => {
  it('renders the name and email', () => {
    render(<UserProfile user={user} onEdit={() => {}} onLogout={() => {}} />);
    expect(screen.getByRole('heading', { name: 'User Admin' })).toBeInTheDocument();
    expect(screen.getByText('useradmin@example.com')).toBeInTheDocument();
  });

  it('calls onEdit and onLogout from their respective buttons', async () => {
    const userEventInstance = userEvent.setup();
    const onEdit = vi.fn();
    const onLogout = vi.fn();
    render(<UserProfile user={user} onEdit={onEdit} onLogout={onLogout} />);

    await userEventInstance.click(screen.getByRole('button', { name: 'Edit profile' }));
    await userEventInstance.click(screen.getByRole('button', { name: 'Log out' }));

    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(onLogout).toHaveBeenCalledTimes(1);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<UserProfile user={user} onEdit={() => {}} onLogout={() => {}} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
