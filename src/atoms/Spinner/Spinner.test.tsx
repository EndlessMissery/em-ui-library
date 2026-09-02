import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('renders a spinner element', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('.spinner')).toBeInTheDocument();
  });

  // NOTE: no accessibility test here on purpose. A bare `<div class="spinner">`
  // has no role/label, so a screen reader announces nothing while loading.
  // Needs role="status" (or aria-live) — tracked for the accessibility pass.
});
