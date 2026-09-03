import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const WithTitle: Story = {
  args: {
    title: 'Revenue',
    children: '$12,340',
  },
};

export const WithoutTitle: Story = {
  args: {
    children: 'Just some content, no title.',
  },
};

export const CustomClassName: Story = {
  args: {
    title: 'Users',
    className: 'dashboard-card',
    children: '42',
  },
};
