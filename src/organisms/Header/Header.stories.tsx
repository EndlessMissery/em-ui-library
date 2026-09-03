import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    user: { name: 'User Admin', avatar: 'https://i.pravatar.cc/40' },
  },
};

export const WithoutAvatar: Story = {
  args: {
    user: { name: 'User Admin' },
  },
};
