import { create } from '@storybook/theming/create';

// Shared Storybook UI theme (manager sidebar/toolbar + docs pages) so the
// demo's own chrome uses the same typeface as the components it's showing,
// instead of Storybook's default docs font clashing with ours.
export default create({
  base: 'light',
  fontBase: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', Roboto, 'Helvetica Neue', Arial, sans-serif",
  fontCode: "ui-monospace, 'SF Mono', 'Cascadia Code', Menlo, Consolas, monospace",

  colorPrimary: '#5b5bd6',
  colorSecondary: '#5b5bd6',

  appBg: '#faf9f7',
  appContentBg: '#ffffff',
  appBorderColor: '#e5e1dc',
  appBorderRadius: 8,

  textColor: '#221f1a',
  textInverseColor: '#ffffff',

  barTextColor: '#6b6459',
  barSelectedColor: '#5b5bd6',
  barBg: '#ffffff',

  inputBg: '#ffffff',
  inputBorder: '#d3cdc4',
  inputTextColor: '#221f1a',
  inputBorderRadius: 6,

  brandTitle: 'em-ui-library',
  brandUrl: 'https://github.com/EndlessMissery/em-ui-library',
  brandTarget: '_blank',
});
