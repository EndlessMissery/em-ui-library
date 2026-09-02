import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Textarea from './Textarea';

describe('Textarea', () => {
  it('renders with the given placeholder', () => {
    render(
      <Textarea name="bio" value="" onChange={() => {}} placeholder="Tell us about you" label="Bio" />
    );
    expect(screen.getByPlaceholderText('Tell us about you')).toBeInTheDocument();
  });

  it('calls onChange when typed into', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Textarea name="bio" value="" onChange={onChange} placeholder="Bio" label="Bio" />);

    await user.type(screen.getByPlaceholderText('Bio'), 'a');

    expect(onChange).toHaveBeenCalled();
  });

  it('associates the label with the textarea via htmlFor/id', () => {
    render(<Textarea name="bio" value="" onChange={() => {}} label="Bio" />);
    expect(screen.getByLabelText('Bio')).toBeInTheDocument();
  });

  it('falls back to aria-label when there is no visible label', () => {
    render(<Textarea name="bio" value="" onChange={() => {}} aria-label="Bio" />);
    expect(screen.getByRole('textbox', { name: 'Bio' })).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Textarea name="bio" value="" onChange={() => {}} label="Bio" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
