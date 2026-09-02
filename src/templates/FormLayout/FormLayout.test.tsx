import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import FormLayout from './FormLayout';

describe('FormLayout', () => {
  it('renders the title, description, and children', () => {
    render(
      <FormLayout title="Sign up" description="It only takes a minute">
        <input aria-label="Email" />
      </FormLayout>
    );
    expect(screen.getByRole('heading', { name: 'Sign up' })).toBeInTheDocument();
    expect(screen.getByText('It only takes a minute')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders without a description', () => {
    render(
      <FormLayout title="Sign up">
        <input aria-label="Email" />
      </FormLayout>
    );
    expect(screen.queryByText('It only takes a minute')).not.toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <FormLayout title="Sign up" description="It only takes a minute">
        <input aria-label="Email" />
      </FormLayout>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
