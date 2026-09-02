import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Input from './Input';

describe('Input', () => {
  it('associates the label via htmlFor/id when a label is given', () => {
    render(<Input label="Email" name="email" value="" onChange={() => {}} />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders without a label', () => {
    render(<Input name="email" value="" onChange={() => {}} placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });

  it('calls onChange with the typed value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Input label="Email" name="email" value="" onChange={onChange} />);

    await user.type(screen.getByLabelText('Email'), 'a');

    expect(onChange).toHaveBeenCalled();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Input label="Email" name="email" value="" onChange={() => {}} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
