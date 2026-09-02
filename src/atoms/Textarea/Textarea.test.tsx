import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Textarea from './Textarea';

describe('Textarea', () => {
  it('renders with the given placeholder', () => {
    render(<Textarea name="bio" value="" onChange={() => {}} placeholder="Tell us about you" />);
    expect(screen.getByPlaceholderText('Tell us about you')).toBeInTheDocument();
  });

  it('calls onChange when typed into', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Textarea name="bio" value="" onChange={onChange} placeholder="Bio" />);

    await user.type(screen.getByPlaceholderText('Bio'), 'a');

    expect(onChange).toHaveBeenCalled();
  });

  // NOTE: no accessibility test here on purpose. Textarea has no way to
  // attach an accessible name (no label prop, no id). Tracked for the
  // accessibility pass, not fixed here.
});
