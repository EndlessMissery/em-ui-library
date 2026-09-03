import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SearchBar from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Organisms/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  args: { onSearch: fn() },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};
