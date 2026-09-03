import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const WithLabel: Story = {
  args: {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'you@example.com',
  },
};

export const PlaceholderOnly: Story = {
  args: {
    name: 'search',
    placeholder: 'Search...',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Email',
    name: 'email',
    value: 'not-an-email',
    'aria-invalid': true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input label="Username" name="username" value={value} onChange={e => setValue(e.target.value)} />
    );
  },
};
