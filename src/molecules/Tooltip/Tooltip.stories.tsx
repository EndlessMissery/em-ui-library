import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import Button from '../../atoms/Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip text="This will permanently delete the item">
      <Button variant="danger">Delete</Button>
    </Tooltip>
  ),
};

export const OnText: Story = {
  render: () => (
    <Tooltip text="Full explanation of this term">
      <span style={{ textDecoration: 'underline dotted' }}>Hover or focus me</span>
    </Tooltip>
  ),
};
