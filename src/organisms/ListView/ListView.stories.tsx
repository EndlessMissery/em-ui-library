import type { Meta, StoryObj } from '@storybook/react';
import ListView from './ListView';

const meta: Meta<typeof ListView<string>> = {
  title: 'Organisms/ListView',
  component: ListView,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ListView<string>>;

export const WithItems: Story = {
  args: {
    items: ['Design system', 'Storybook setup', 'Accessibility pass'],
    renderItem: item => <span>{item}</span>,
  },
};

export const Empty: Story = {
  args: {
    items: [],
    renderItem: item => <span>{item}</span>,
  },
};
