import { useState } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Modal from './Modal';

function ControlledModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
        <button>Confirm</button>
        <button>Cancel</button>
      </Modal>
    </>
  );
}

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

  it('exposes a labelled dialog role', () => {
    render(
      <Modal isOpen onClose={() => {}} title="Confirm">
        Are you sure?
      </Modal>
    );
    expect(screen.getByRole('dialog', { name: 'Confirm' })).toHaveAttribute('aria-modal', 'true');
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

  it('calls onClose when Escape is pressed', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose} title="Confirm">
        Are you sure?
      </Modal>
    );

    await user.keyboard('{Escape}');

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('moves focus into the dialog when opened', () => {
    render(
      <Modal isOpen onClose={() => {}} title="Confirm">
        Are you sure?
      </Modal>
    );
    expect(screen.getByRole('dialog')).toHaveFocus();
  });

  it('restores focus to the trigger element on close', async () => {
    const user = userEvent.setup();
    render(<ControlledModal />);

    const openButton = screen.getByRole('button', { name: 'Open modal' });
    await user.click(openButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(openButton).toHaveFocus();
  });

  it('traps Tab focus inside the dialog', async () => {
    const user = userEvent.setup();
    render(<ControlledModal />);

    await user.click(screen.getByRole('button', { name: 'Open modal' }));

    const closeButton = screen.getByRole('button', { name: 'Zavřít modal' });
    const confirmButton = screen.getByRole('button', { name: 'Confirm' });
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });

    closeButton.focus();
    await user.tab();
    expect(confirmButton).toHaveFocus();
    await user.tab();
    expect(cancelButton).toHaveFocus();
    await user.tab();
    expect(closeButton).toHaveFocus();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Modal isOpen onClose={() => {}} title="Confirm">
        Are you sure?
      </Modal>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
