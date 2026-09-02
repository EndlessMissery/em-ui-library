import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('Modal', () => {
  it('renders nothing when closed', () => {
    render(
      <Modal isOpen={false} onClose={() => {}} title="Confirm">
        Are you sure?
      </Modal>
    );
    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
  });

  it('renders the title and content when open', () => {
    render(
      <Modal isOpen onClose={() => {}} title="Confirm">
        Are you sure?
      </Modal>
    );
    expect(screen.getByRole('heading', { name: 'Confirm' })).toBeInTheDocument();
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
  });

  it('calls onClose when the backdrop is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const { container } = render(
      <Modal isOpen onClose={onClose} title="Confirm">
        Are you sure?
      </Modal>
    );

    await user.click(container.querySelector('.modal-backdrop') as HTMLElement);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when the content is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose} title="Confirm">
        Are you sure?
      </Modal>
    );

    await user.click(screen.getByText('Are you sure?'));

    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onClose via the close button', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose} title="Confirm">
        Are you sure?
      </Modal>
    );

    await user.click(screen.getByRole('button', { name: 'Zavřít modal' }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // NOTE: no accessibility test here on purpose!!! Modal has no role="dialog"
});
