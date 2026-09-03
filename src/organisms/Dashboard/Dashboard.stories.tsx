import type { Meta, StoryObj } from '@storybook/react';
import Dashboard from './Dashboard';
import { UsersIcon, WalletIcon, BoltIcon } from '../../stories/icons';

const meta: Meta<typeof Dashboard> = {
  title: 'Organisms/Dashboard',
  component: Dashboard,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {
  args: {
    stats: [
      { id: 1, title: 'Users', value: 1204, icon: <UsersIcon /> },
      { id: 2, title: 'Revenue', value: '$12.4k', icon: <WalletIcon /> },
      { id: 3, title: 'Active sessions', value: 87, icon: <BoltIcon /> },
    ],
  },
};
