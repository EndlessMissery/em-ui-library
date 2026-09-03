import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Unchecked: Story = {
  args: {
    name: 'plan',
    value: 'free',
    label: 'Free',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    name: 'plan',
    value: 'pro',
    label: 'Pro',
    checked: true,
  },
};

export const Group: Story = {
  render: () => {
    const [plan, setPlan] = useState('free');
    return (
      <>
        <RadioButton name="plan" value="free" label="Free" checked={plan === 'free'} onChange={() => setPlan('free')} />
        <RadioButton name="plan" value="pro" label="Pro" checked={plan === 'pro'} onChange={() => setPlan('pro')} />
        <RadioButton name="plan" value="enterprise" label="Enterprise" checked={plan === 'enterprise'} onChange={() => setPlan('enterprise')} />
      </>
    );
  },
};
