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
    expect(screen.getByLabelText('Uživatelské jméno')).toBeInTheDocument();
    expect(screen.getByLabelText('Heslo')).toBeInTheDocument();
  });

  it('calls onLogin with valid credentials', async () => {
    const user = userEvent.setup();
    const onLogin = vi.fn();
    render(<Login onLogin={onLogin} />);

    await user.type(screen.getByLabelText('Uživatelské jméno'), 'admin');
    await user.type(screen.getByLabelText('Heslo'), '1234');
    await user.click(screen.getByRole('button', { name: 'Přihlásit se' }));

    expect(onLogin).toHaveBeenCalledTimes(1);
  });

  it('alerts and does not call onLogin with invalid credentials', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const user = userEvent.setup();
    const onLogin = vi.fn();
    render(<Login onLogin={onLogin} />);

    await user.type(screen.getByLabelText('Uživatelské jméno'), 'wrong');
    await user.type(screen.getByLabelText('Heslo'), 'wrong');
    await user.click(screen.getByRole('button', { name: 'Přihlásit se' }));

    expect(onLogin).not.toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Nesprávné uživatelské jméno nebo heslo');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Login onLogin={() => {}} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
