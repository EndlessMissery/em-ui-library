import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
declare const meta: Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof Card>;
export declare const WithTitle: Story;
export declare const WithoutTitle: Story;
export declare const CustomClassName: Story;
