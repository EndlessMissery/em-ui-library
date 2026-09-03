import type { Meta, StoryObj } from '@storybook/react';
import DashboardLayout from './DashboardLayout';
import Dashboard from '../../organisms/Dashboard/Dashboard';
import { UsersIcon, WalletIcon } from '../../stories/icons';

const meta: Meta<typeof DashboardLayout> = {
  title: 'Templates/DashboardLayout',
  component: DashboardLayout,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof DashboardLayout>;

export const Default: Story = {
  render: () => (
    <DashboardLayout user={{ name: 'User Admin', avatar: 'https://i.pravatar.cc/40' }} onLogout={() => {}}>
      <Dashboard
        stats={[
          { id: 1, title: 'Users', value: 1204, icon: <UsersIcon /> },
          { id: 2, title: 'Revenue', value: '$12.4k', icon: <WalletIcon /> },
        ]}
      />
    </DashboardLayout>
  ),
};
