import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    links: [
      { label: 'Overview', href: '/dashboard' },
      { label: 'Tasks', href: '/tasks' },
      { label: 'Settings', href: '/settings' },
    ],
  },
};
