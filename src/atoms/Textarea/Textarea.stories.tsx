import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const WithLabel: Story = {
  args: {
    name: 'bio',
    label: 'Bio',
    placeholder: 'Tell us about yourself',
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return <Textarea name="bio" label="Bio" value={value} onChange={e => setValue(e.target.value)} />;
  },
};
