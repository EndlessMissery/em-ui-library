import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Button from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  it('defaults to type="button" and variant="primary"', () => {
    render(<Button>Save</Button>);
    const button = screen.getByRole('button', { name: 'Save' });
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveClass('btn', 'btn-primary');
  });

  it('applies the given variant class', () => {
    render(<Button variant="danger">Delete</Button>);
    expect(screen.getByRole('button', { name: 'Delete' })).toHaveClass('btn-danger');
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Save</Button>);

    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick} disabled>Save</Button>);

    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(onClick).not.toHaveBeenCalled();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Save</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
