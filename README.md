# EM UI Library

A reusable React component library built with Atomic Design — TypeScript, tested, and accessible out of the box.

[![npm version](https://img.shields.io/npm/v/em-ui-library.svg)](https://www.npmjs.com/package/em-ui-library)
[![Deploy Storybook](https://github.com/EndlessMissery/em-ui-library/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/EndlessMissery/em-ui-library/actions/workflows/deploy-storybook.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**[Live Demo](https://endlessmissery.github.io/em-ui-library/)** · **[npm](https://www.npmjs.com/package/em-ui-library)** · **[GitHub](https://github.com/EndlessMissery/em-ui-library)**

## Features

- ✓ 35 components across atoms, molecules, organisms, and templates
- ✓ Atomic Design architecture
- ✓ Written in TypeScript, ships full type definitions
- ✓ React 18 & 19 (peer dependency, tree-shakable via Rollup)
- ✓ 138 tests (Vitest + React Testing Library)
- ✓ Accessibility built in — keyboard navigation, focus management, ARIA, checked with jest-axe
- ✓ Live, browsable Storybook documentation for every component

## In action

| Modal | Tabs | Accordion |
| --- | --- | --- |
| ![Modal component with focus trap and Escape-to-close](https://raw.githubusercontent.com/EndlessMissery/em-ui-library/main/docs/media/modal.gif) | ![Tabs switching between panels with arrow-key navigation](https://raw.githubusercontent.com/EndlessMissery/em-ui-library/main/docs/media/tabs.gif) | ![Accordion expanding and collapsing panels](https://raw.githubusercontent.com/EndlessMissery/em-ui-library/main/docs/media/accordion.gif) |

| Tooltip | Notification | Login |
| --- | --- | --- |
| ![Tooltip appearing on hover with an aria-describedby link](https://raw.githubusercontent.com/EndlessMissery/em-ui-library/main/docs/media/tooltip.gif) | ![Notifications being dismissed one by one](https://raw.githubusercontent.com/EndlessMissery/em-ui-library/main/docs/media/notification.gif) | ![Login form being filled in and submitted](https://raw.githubusercontent.com/EndlessMissery/em-ui-library/main/docs/media/login.gif) |

More at the **[Storybook live demo](https://endlessmissery.github.io/em-ui-library/)**.

## Installation

```bash
npm install em-ui-library
```

`react` and `react-dom` (^18 or ^19) are peer dependencies — install them in your app if they aren't already there.

## Usage

```tsx
import { Button, Card, FormField } from 'em-ui-library';
import 'em-ui-library/dist/index.css';

function App() {
  return (
    <Card title="Sign in">
      <FormField id="email" label="Email" type="email" value="" onChange={() => {}} />
      <Button variant="primary" type="submit">
        Continue
      </Button>
    </Card>
  );
}
```

Every component's props, variants, and interactive states are documented and browsable in the [Storybook demo](https://endlessmissery.github.io/em-ui-library/) — that's the source of truth for usage, instead of code samples here that would drift out of date.

## Architecture

Components are organized by [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) level, each composing only from the level below it:

```
atoms      → Button, Input, Select, Textarea, Checkbox, RadioButton, Label, Heading, Divider, Spinner
molecules  → Accordion, Avatar, Badge, ButtonGroup, Card, FormField, Modal, Notification, Tabs, Tooltip
organisms  → Dashboard, Header, Footer, ListView, Login, NotificationCenter, Register, SearchBar, Sidebar, UserProfile
templates  → AuthLayout, DashboardLayout, FormLayout, ProfileLayout, SettingsLayout
```

Each component lives in its own folder with its implementation, styles, tests, and Storybook stories colocated:

```
src/atoms/Button/
  Button.tsx
  Button.css
  Button.test.tsx
  Button.stories.tsx
  index.ts
```

Design tokens (color, spacing, radius, shadow, typography) live in `src/styles/tokens.css` and ship with the package, so the whole library draws from one consistent palette that consumers can override.

## Development

```bash
npm install          # install dependencies
npm run storybook    # run Storybook locally at localhost:6006
npm test             # run the test suite (Vitest + Testing Library)
npm run test:coverage
npm run typecheck
npm run build         # bundle the library (Rollup) + emit type declarations
npm run build-storybook
```

## Tech stack

React · TypeScript · Rollup · Vitest · React Testing Library · jest-axe · Storybook

## License

[MIT](LICENSE) © Roman Kalita
