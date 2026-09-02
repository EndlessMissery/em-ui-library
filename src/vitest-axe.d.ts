// jest-axe ships Jest-only type augmentations. This wires its
// `toHaveNoViolations` matcher into Vitest's `expect`, mirroring
// how @testing-library/jest-dom/vitest augments Vitest itself.
import 'vitest';

interface AxeMatchers {
  toHaveNoViolations(): void;
}

declare module 'vitest' {
  interface Assertion<T = unknown> extends AxeMatchers {}
  interface AsymmetricMatchersContaining extends AxeMatchers {}
}
