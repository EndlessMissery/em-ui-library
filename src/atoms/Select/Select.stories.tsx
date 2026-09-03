import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const options = [
  { value: 'cz', label: 'Czech Republic' },
  { value: 'sk', label: 'Slovakia' },
  { value: 'de', label: 'Germany' },
];

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const WithLabel: Story = {
  args: {
    name: 'country',
    label: 'Country',
    value: 'cz',
    options,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('cz');
    return <Select name="country" label="Country" value={value} onChange={e => setValue(e.target.value)} options={options} />;
  },
};
