import type { Meta, StoryObj } from '@storybook/react';
import ListView from './ListView';
declare const meta: Meta<typeof ListView<string>>;
export default meta;
type Story = StoryObj<typeof ListView<string>>;
export declare const WithItems: Story;
export declare const Empty: Story;
