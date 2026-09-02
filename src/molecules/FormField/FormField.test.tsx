import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import FormField from './FormField';

describe('FormField', () => {
  it('associates the label with the input via id', () => {
    render(<FormField id="username" label="Username" value="" onChange={() => {}} />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('calls onChange when typed into', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<FormField id="username" label="Username" value="" onChange={onChange} />);

    await user.type(screen.getByLabelText('Username'), 'a');

    expect(onChange).toHaveBeenCalled();
  });

  it('renders an error message when given', () => {
    render(
      <FormField id="username" label="Username" value="" onChange={() => {}} error="Required" />
    );
    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  it('renders no error message by default', () => {
    render(<FormField id="username" label="Username" value="" onChange={() => {}} />);
    expect(screen.queryByText('Required')).not.toBeInTheDocument();
  });

  it('marks the input as invalid and links it to the error message', () => {
    render(
      <FormField id="username" label="Username" value="" onChange={() => {}} error="Required" />
    );
    const input = screen.getByLabelText('Username');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby', 'username-error');
    expect(screen.getByText('Required')).toHaveAttribute('id', 'username-error');
  });

  it('does not mark the input as invalid when there is no error', () => {
    render(<FormField id="username" label="Username" value="" onChange={() => {}} />);
    const input = screen.getByLabelText('Username');
    expect(input).toHaveAttribute('aria-invalid', 'false');
    expect(input).not.toHaveAttribute('aria-describedby');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <FormField id="username" label="Username" value="" onChange={() => {}} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
