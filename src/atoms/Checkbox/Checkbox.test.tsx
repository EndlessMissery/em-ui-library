import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders the label and associates it via htmlFor/id', () => {
    render(<Checkbox id="terms" label="Accept terms" checked={false} onChange={() => {}} />);
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
  });

  it('reflects the checked state', () => {
    render(<Checkbox id="terms" label="Accept terms" checked onChange={() => {}} />);
    expect(screen.getByLabelText('Accept terms')).toBeChecked();
  });

  it('calls onChange when toggled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox id="terms" label="Accept terms" checked={false} onChange={onChange} />);

    await user.click(screen.getByLabelText('Accept terms'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Checkbox id="terms" label="Accept terms" checked={false} onChange={() => {}} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
