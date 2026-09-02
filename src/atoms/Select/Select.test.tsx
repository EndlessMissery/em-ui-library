import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';

const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
];

describe('Select', () => {
  it('renders every option', () => {
    render(<Select name="choice" value="a" onChange={() => {}} options={options} />);
    expect(screen.getByRole('option', { name: 'Option A' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Option B' })).toBeInTheDocument();
  });

  it('reflects the selected value', () => {
    render(<Select name="choice" value="b" onChange={() => {}} options={options} />);
    expect(screen.getByRole('combobox')).toHaveValue('b');
  });

  it('calls onChange when a new option is picked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Select name="choice" value="a" onChange={onChange} options={options} />);

    await user.selectOptions(screen.getByRole('combobox'), 'b');

    expect(onChange).toHaveBeenCalled();
  });

  // NOTE: no accessibility test here on purpose. Select has no way to attach
  // an accessible name (no label prop, no attribute passthrough), which axe
  // correctly flags. Tracked for the accessibility pass, not fixed here.
});
