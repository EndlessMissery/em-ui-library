import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Login from './Login';

const meta: Meta<typeof Login> = {
  title: 'Organisms/Login',
  component: Login,
  tags: ['autodocs'],
  args: { onLogin: fn() },
  // Login ships without its own card chrome (see Login.css) — it's meant to
  // be composed inside a layout like AuthLayout. This decorator only gives
  // the isolated story a readable frame; it's not part of the component.
  decorators: [
    Story => (
      <div
        style={{
          maxWidth: 420,
          margin: '2rem auto',
          padding: '1.5rem',
          border: '1px solid var(--eui-color-border)',
          borderRadius: 'var(--eui-radius-lg)',
          boxShadow: 'var(--eui-shadow-md)',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Default: Story = {};
