import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  it('renders the label wrapping the radio input', () => {
    render(<RadioButton name="plan" value="pro" checked={false} onChange={() => {}} label="Pro" />);
    expect(screen.getByLabelText('Pro')).toBeInTheDocument();
  });

  it('reflects the checked state', () => {
    render(<RadioButton name="plan" value="pro" checked onChange={() => {}} label="Pro" />);
    expect(screen.getByLabelText('Pro')).toBeChecked();
  });

  it('calls onChange when selected', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<RadioButton name="plan" value="pro" checked={false} onChange={onChange} label="Pro" />);

    await user.click(screen.getByLabelText('Pro'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <RadioButton name="plan" value="pro" checked={false} onChange={() => {}} label="Pro" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
