import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotificationCenter from './NotificationCenter';

describe('NotificationCenter', () => {
  it('shows an empty state when there are no notifications', () => {
    render(<NotificationCenter notifications={[]} onDismiss={() => {}} />);
    expect(screen.getByText('No notifications')).toBeInTheDocument();
  });

  it('renders each notification message', () => {
    render(
      <NotificationCenter
        notifications={[
          { id: 1, type: 'success', message: 'Saved!' },
          { id: 2, type: 'error', message: 'Failed!' },
        ]}
        onDismiss={() => {}}
      />
    );

    expect(screen.getByText('Saved!')).toBeInTheDocument();
    expect(screen.getByText('Failed!')).toBeInTheDocument();
  });

  it('calls onDismiss with the notification id', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(
      <NotificationCenter
        notifications={[{ id: 'abc', type: 'success', message: 'Saved!' }]}
        onDismiss={onDismiss}
      />
    );

    await user.click(screen.getByRole('button'));

    expect(onDismiss).toHaveBeenCalledWith('abc');
  });
});
