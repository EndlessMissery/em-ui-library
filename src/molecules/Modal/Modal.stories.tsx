import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import Button from '../../atoms/Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal title">
          This is the modal body content.
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Terms of Service">
          {Array.from({ length: 8 }).map((_, i) => (
            <p key={i}>
              Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </Modal>
      </>
    );
  },
};

export const Confirmation: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <>
        <Button variant="danger" onClick={() => setIsOpen(true)}>Delete account</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Delete account?">
          <p>This action cannot be undone. Are you sure you want to continue?</p>
          <ButtonGroup>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="danger" onClick={() => setIsOpen(false)}>Delete</Button>
          </ButtonGroup>
        </Modal>
      </>
    );
  },
};
