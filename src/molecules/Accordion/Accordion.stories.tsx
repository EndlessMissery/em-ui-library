import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const items = [
  { title: 'What is em-ui-library?', content: 'A reusable React component library built with Atomic Design.' },
  { title: 'Is it TypeScript?', content: 'Yes, every component ships with full type definitions.' },
  { title: 'Is it accessible?', content: 'Keyboard navigation, ARIA attributes, and focus management are built in.' },
];

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: { items },
};
