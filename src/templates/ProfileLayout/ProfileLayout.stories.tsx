import type { Meta, StoryObj } from '@storybook/react';
import ProfileLayout from './ProfileLayout';

const meta: Meta<typeof ProfileLayout> = {
  title: 'Templates/ProfileLayout',
  component: ProfileLayout,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ProfileLayout>;

export const Default: Story = {
  args: {
    user: { name: 'User Admin', email: 'useradmin@example.com', avatar: 'https://i.pravatar.cc/80' },
    tabs: [
      { label: 'Overview', content: 'Overview content goes here.' },
      { label: 'Activity', content: 'Recent activity goes here.' },
    ],
    children: null,
  },
};
