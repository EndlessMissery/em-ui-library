import type { Preview } from '@storybook/react'
import '../src/styles/tokens.css'
import theme from './theme'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'canvas',
      values: [
        { name: 'canvas', value: '#faf9f7' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    docs: {
      theme,
    },
  },
};

export default preview;
