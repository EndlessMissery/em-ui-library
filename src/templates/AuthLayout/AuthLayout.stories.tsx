import type { Meta, StoryObj } from '@storybook/react';
import AuthLayout from './AuthLayout';
import Login from '../../organisms/Login/Login';

const meta: Meta<typeof AuthLayout> = {
  title: 'Templates/AuthLayout',
  component: AuthLayout,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof AuthLayout>;

export const WithLoginForm: Story = {
  render: () => (
    <AuthLayout>
      <Login onLogin={() => {}} />
    </AuthLayout>
  ),
};
