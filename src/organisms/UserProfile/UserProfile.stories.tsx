import type { Meta, StoryObj } from '@storybook/react';
import UserProfile from './UserProfile';

const meta: Meta<typeof UserProfile> = {
  title: 'Organisms/UserProfile',
  component: UserProfile,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserProfile>;

export const Default: Story = {
  args: {
    user: { name: 'User Admin', email: 'useradmin@example.com', avatar: 'https://i.pravatar.cc/80' },
  },
};
