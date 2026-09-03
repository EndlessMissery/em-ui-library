import type { Meta, StoryObj } from '@storybook/react';
import SettingsLayout from './SettingsLayout';

const meta: Meta<typeof SettingsLayout> = {
  title: 'Templates/SettingsLayout',
  component: SettingsLayout,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof SettingsLayout>;

export const Default: Story = {
  args: {
    user: { name: 'User Admin', avatar: 'https://i.pravatar.cc/40' },
    onLogout: () => {},
    children: <p>Settings content goes here.</p>,
  },
};
