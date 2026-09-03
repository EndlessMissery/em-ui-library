import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Molecules/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/80',
    alt: 'User Admin',
  },
};

export const Initials: Story = {
  args: {
    name: 'User Admin',
  },
};

export const CustomSize: Story = {
  args: {
    name: 'User Admin',
    size: 80,
  },
};
