import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Select from './Select';

const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
];

describe('Select', () => {
  it('renders every option', () => {
    render(<Select name="choice" value="a" onChange={() => {}} options={options} label="Choice" />);
    expect(screen.getByRole('option', { name: 'Option A' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Option B' })).toBeInTheDocument();
  });

  it('reflects the selected value', () => {
    render(<Select name="choice" value="b" onChange={() => {}} options={options} label="Choice" />);
    expect(screen.getByRole('combobox')).toHaveValue('b');
  });

  it('calls onChange when a new option is picked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Select name="choice" value="a" onChange={onChange} options={options} label="Choice" />);

    await user.selectOptions(screen.getByRole('combobox'), 'b');

    expect(onChange).toHaveBeenCalled();
  });

  it('associates the label with the select via htmlFor/id', () => {
    render(<Select name="choice" value="a" onChange={() => {}} options={options} label="Choice" />);
    expect(screen.getByLabelText('Choice')).toBeInTheDocument();
  });

  it('falls back to aria-label when there is no visible label', () => {
    render(
      <Select name="choice" value="a" onChange={() => {}} options={options} aria-label="Choice" />
    );
    expect(screen.getByRole('combobox', { name: 'Choice' })).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Select name="choice" value="a" onChange={() => {}} options={options} label="Choice" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
