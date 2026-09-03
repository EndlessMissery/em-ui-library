import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Register from './Register';

describe('Register', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('associates each label with its input', () => {
    render(<Register onRegister={() => {}} />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm password')).toBeInTheDocument();
  });

  it('calls onRegister with the form data when passwords match', async () => {
    const user = userEvent.setup();
    const onRegister = vi.fn();
    render(<Register onRegister={onRegister} />);

    await user.type(screen.getByLabelText('Username'), 'user');
    await user.type(screen.getByLabelText('Email'), 'user@example.com');
    await user.type(screen.getByLabelText('Password'), 'secret');
    await user.type(screen.getByLabelText('Confirm password'), 'secret');
    await user.click(screen.getByRole('button', { name: 'Sign up' }));

    expect(onRegister).toHaveBeenCalledWith({
      username: 'user',
      email: 'user@example.com',
      password: 'secret',
      confirmPassword: 'secret',
    });
  });

  it('alerts and does not call onRegister when passwords do not match', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const user = userEvent.setup();
    const onRegister = vi.fn();
    render(<Register onRegister={onRegister} />);

    await user.type(screen.getByLabelText('Password'), 'secret');
    await user.type(screen.getByLabelText('Confirm password'), 'different');
    await user.click(screen.getByRole('button', { name: 'Sign up' }));

    expect(onRegister).not.toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Passwords do not match');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Register onRegister={() => {}} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
