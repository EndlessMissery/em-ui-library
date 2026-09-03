import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NotificationCenter from './NotificationCenter';

const meta: Meta<typeof NotificationCenter> = {
  title: 'Organisms/NotificationCenter',
  component: NotificationCenter,
  tags: ['autodocs'],
  args: { onDismiss: fn() },
};

export default meta;
type Story = StoryObj<typeof NotificationCenter>;

export const WithNotifications: Story = {
  args: {
    notifications: [
      { id: 1, type: 'success', message: 'Changes saved successfully.' },
      { id: 2, type: 'error', message: 'Failed to upload file.' },
      { id: 3, type: 'info', message: 'A new version is available.' },
    ],
  },
};

export const Empty: Story = {
  args: { notifications: [] },
};
