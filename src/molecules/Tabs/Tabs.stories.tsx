import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const tabs = [
  { label: 'Profile', content: 'Your profile settings go here.' },
  { label: 'Billing', content: 'Manage your billing information here.' },
  { label: 'Notifications', content: 'Configure your notification preferences here.' },
];

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: { tabs },
};
