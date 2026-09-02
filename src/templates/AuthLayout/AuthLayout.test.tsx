import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import AuthLayout from './AuthLayout';

describe('AuthLayout', () => {
  it('renders the welcome heading and children', () => {
    render(
      <AuthLayout>
        <p>Login form goes here</p>
      </AuthLayout>
    );
    expect(screen.getByRole('heading', { name: 'Welcome to MyApp' })).toBeInTheDocument();
    expect(screen.getByText('Login form goes here')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <AuthLayout>
        <p>Login form goes here</p>
      </AuthLayout>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
