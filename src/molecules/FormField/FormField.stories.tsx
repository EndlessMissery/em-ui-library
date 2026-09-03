import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FormField from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    id: 'username',
    label: 'Username',
    value: '',
  },
};

export const WithError: Story = {
  args: {
    id: 'username-error',
    label: 'Username',
    value: '',
    error: 'Username is required',
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <FormField
        id="email"
        label="Email"
        type="email"
        value={value}
        onChange={e => setValue(e.target.value)}
        error={value && !value.includes('@') ? 'Enter a valid email' : undefined}
      />
    );
  },
};
