import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Notification from './Notification';

describe('Notification', () => {
  it('renders nothing when there is no message', () => {
    const { container } = render(<Notification message="" onClose={() => {}} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the message', () => {
    render(<Notification message="Saved!" onClose={() => {}} />);
    expect(screen.getByText('Saved!')).toBeInTheDocument();
  });

  it('defaults to the success type class', () => {
    const { container } = render(<Notification message="Saved!" onClose={() => {}} />);
    expect(container.firstChild).toHaveClass('notification', 'success');
  });

  it('applies the given type class', () => {
    const { container } = render(
      <Notification message="Failed!" type="error" onClose={() => {}} />
    );
    expect(container.firstChild).toHaveClass('error');
  });

  it('calls onClose when dismissed', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Notification message="Saved!" onClose={onClose} />);

    await user.click(screen.getByRole('button'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
