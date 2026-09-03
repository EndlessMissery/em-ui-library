import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Notification, { NotificationType } from './Notification';

const meta: Meta<typeof Notification> = {
  title: 'Molecules/Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Success: Story = {
  args: { message: 'Changes saved successfully.', type: 'success' },
};

export const ErrorType: Story = {
  name: 'Error',
  args: { message: 'Something went wrong.', type: 'error' },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Notification message="Saved successfully." type="success" onClose={() => {}} />
      <Notification message="Something went wrong." type="error" onClose={() => {}} />
      <Notification message="This action is irreversible." type="warning" onClose={() => {}} />
      <Notification message="A new version is available." type="info" onClose={() => {}} />
    </div>
  ),
};

interface Item {
  id: number;
  type: NotificationType;
  message: string;
}

const initialItems: Item[] = [
  { id: 1, type: 'success', message: 'Saved successfully.' },
  { id: 2, type: 'error', message: 'Something went wrong.' },
  { id: 3, type: 'warning', message: 'This action is irreversible.' },
  { id: 4, type: 'info', message: 'A new version is available.' },
];

export const Interactive: Story = {
  render: () => {
    const [items, setItems] = useState(initialItems);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {items.map(item => (
          <Notification
            key={item.id}
            message={item.message}
            type={item.type}
            onClose={() => setItems(prev => prev.filter(i => i.id !== item.id))}
          />
        ))}
      </div>
    );
  },
};
