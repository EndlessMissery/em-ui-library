import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
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

  it('links the trigger to the tooltip text via aria-describedby once visible', async () => {
    const user = userEvent.setup();
    render(<Tooltip text="More info">Hover me</Tooltip>);

    const trigger = screen.getByText('Hover me').closest('.tooltip-wrapper') as HTMLElement;
    expect(trigger).not.toHaveAttribute('aria-describedby');

    await user.tab();

    const describedBy = trigger.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    expect(screen.getByRole('tooltip')).toHaveAttribute('id', describedBy as string);
  });

  it('hides the tooltip on Escape', async () => {
    const user = userEvent.setup();
    render(<Tooltip text="More info">Hover me</Tooltip>);

    await user.tab();
    expect(screen.getByText('More info')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(screen.queryByText('More info')).not.toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Tooltip text="More info">Hover me</Tooltip>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
