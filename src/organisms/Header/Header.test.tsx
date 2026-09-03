import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Header from './Header';

const user = { name: 'User Admin', avatar: '/me.png' };

describe('Header', () => {
  it('renders the user name and avatar', () => {
    render(<Header user={user} onLogout={() => {}} />);
    expect(screen.getByText('User Admin')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'User Admin' })).toHaveAttribute('src', '/me.png');
  });

  it('calls onLogout when the logout button is clicked', async () => {
    const userEventInstance = userEvent.setup();
    const onLogout = vi.fn();
    render(<Header user={user} onLogout={onLogout} />);

    await userEventInstance.click(screen.getByRole('button', { name: 'Log out' }));

    expect(onLogout).toHaveBeenCalledTimes(1);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Header user={user} onLogout={() => {}} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
