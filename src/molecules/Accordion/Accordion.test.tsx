import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Accordion from './Accordion';

const items = [
  { title: 'First', content: 'First content' },
  { title: 'Second', content: 'Second content' },
];

describe('Accordion', () => {
  it('starts with every panel collapsed', () => {
    render(<Accordion items={items} />);
    expect(screen.queryByText('First content')).not.toBeInTheDocument();
    expect(screen.queryByText('Second content')).not.toBeInTheDocument();
  });

  it('expands a panel on click and sets aria-expanded', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    const firstHeader = screen.getByRole('button', { name: 'First' });
    expect(firstHeader).toHaveAttribute('aria-expanded', 'false');

    await user.click(firstHeader);

    expect(firstHeader).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('First content')).toBeInTheDocument();
  });

  it('collapses an open panel when clicked again', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    const firstHeader = screen.getByRole('button', { name: 'First' });
    await user.click(firstHeader);
    await user.click(firstHeader);

    expect(firstHeader).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText('First content')).not.toBeInTheDocument();
  });

  it('only keeps one panel open at a time', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    await user.click(screen.getByRole('button', { name: 'First' }));
    await user.click(screen.getByRole('button', { name: 'Second' }));

    expect(screen.getByRole('button', { name: 'First' })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('button', { name: 'Second' })).toHaveAttribute('aria-expanded', 'true');
  });

  it('links the header to its panel via aria-controls', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    const firstHeader = screen.getByRole('button', { name: 'First' });
    await user.click(firstHeader);

    const panelId = firstHeader.getAttribute('aria-controls');
    expect(panelId).toBeTruthy();
    expect(screen.getByText('First content').closest(`#${panelId}`)).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Accordion items={items} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
