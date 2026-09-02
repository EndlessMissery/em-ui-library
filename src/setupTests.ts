// jest-dom adds custom matchers for asserting on DOM nodes,
// e.g. expect(element).toHaveTextContent(/react/i)
// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

// jest-axe adds expect(container).toHaveNoViolations() for accessibility checks.
// https://github.com/nickcolley/jest-axe
import { afterEach, expect } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';
import { cleanup } from '@testing-library/react';

expect.extend(toHaveNoViolations);

// Without Vitest's `globals: true` (deliberately off for a library, so test
// files import what they use), RTL's auto-cleanup afterEach hook never
// registers, so we do it explicitly here.
afterEach(() => {
  cleanup();
});
