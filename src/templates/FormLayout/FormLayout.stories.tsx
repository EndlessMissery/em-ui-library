import type { Meta, StoryObj } from '@storybook/react';
import FormLayout from './FormLayout';
import Register from '../../organisms/Register/Register';

const meta: Meta<typeof FormLayout> = {
  title: 'Templates/FormLayout',
  component: FormLayout,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof FormLayout>;

export const WithRegisterForm: Story = {
  render: () => (
    <FormLayout title="Create an account" description="It only takes a minute.">
      <Register onRegister={() => {}} />
    </FormLayout>
  ),
};
