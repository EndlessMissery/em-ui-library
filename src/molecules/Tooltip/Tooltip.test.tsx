import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('does not show the tooltip text initially', () => {
    render(<Tooltip text="More info">Hover me</Tooltip>);
    expect(screen.queryByText('More info')).not.toBeInTheDocument();
  });

  it('shows the tooltip text on focus and hides it on blur', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Tooltip text="More info">Hover me</Tooltip>
        <button>Elsewhere</button>
      </>
    );

    await user.tab();
    expect(screen.getByText('More info')).toBeInTheDocument();

    await user.tab();
    expect(screen.queryByText('More info')).not.toBeInTheDocument();
  });

  it('is keyboard-focusable', () => {
    render(<Tooltip text="More info">Hover me</Tooltip>);
    expect(screen.getByText('Hover me').closest('.tooltip-wrapper')).toHaveAttribute('tabindex', '0');
  });

  // NOTE: no accessibility test here on purpose!!!
});
