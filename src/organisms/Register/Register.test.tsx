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
    expect(screen.getByLabelText('Uživatelské jméno')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Heslo')).toBeInTheDocument();
    expect(screen.getByLabelText('Potvrďte heslo')).toBeInTheDocument();
  });

  it('calls onRegister with the form data when passwords match', async () => {
    const user = userEvent.setup();
    const onRegister = vi.fn();
    render(<Register onRegister={onRegister} />);

    await user.type(screen.getByLabelText('Uživatelské jméno'), 'user');
    await user.type(screen.getByLabelText('Email'), 'user@example.com');
    await user.type(screen.getByLabelText('Heslo'), 'secret');
    await user.type(screen.getByLabelText('Potvrďte heslo'), 'secret');
    await user.click(screen.getByRole('button', { name: 'Registrovat se' }));

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

    await user.type(screen.getByLabelText('Heslo'), 'secret');
    await user.type(screen.getByLabelText('Potvrďte heslo'), 'different');
    await user.click(screen.getByRole('button', { name: 'Registrovat se' }));

    expect(onRegister).not.toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Hesla se neshodují');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Register onRegister={() => {}} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
