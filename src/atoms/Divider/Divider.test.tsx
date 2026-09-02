import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Divider from './Divider';

describe('Divider', () => {
  it('renders an hr element', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Divider />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
