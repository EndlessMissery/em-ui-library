import type { Meta, StoryObj } from '@storybook/react';
import Notification from './Notification';

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
