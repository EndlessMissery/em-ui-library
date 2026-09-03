import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Login from './Login';

describe('Login', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('associates each label with its input', () => {
    render(<Login onLogin={() => {}} />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('calls onLogin with valid credentials', async () => {
    const user = userEvent.setup();
    const onLogin = vi.fn();
    render(<Login onLogin={onLogin} />);

    await user.type(screen.getByLabelText('Username'), 'admin');
    await user.type(screen.getByLabelText('Password'), '1234');
    await user.click(screen.getByRole('button', { name: 'Log in' }));

    expect(onLogin).toHaveBeenCalledTimes(1);
  });

  it('alerts and does not call onLogin with invalid credentials', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const user = userEvent.setup();
    const onLogin = vi.fn();
    render(<Login onLogin={onLogin} />);

    await user.type(screen.getByLabelText('Username'), 'wrong');
    await user.type(screen.getByLabelText('Password'), 'wrong');
    await user.click(screen.getByRole('button', { name: 'Log in' }));

    expect(onLogin).not.toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Incorrect username or password');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Login onLogin={() => {}} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
