import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('calls onSearch with the typed query on submit', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    await user.type(screen.getByPlaceholderText('Hledat...'), 'react');
    await user.click(screen.getByRole('button', { name: 'Hledat' }));

    expect(onSearch).toHaveBeenCalledWith('react');
  });

  it('does not navigate/reload the page on submit', async () => {
    const user = userEvent.setup();
    render(<SearchBar onSearch={() => {}} />);

    await user.click(screen.getByRole('button', { name: 'Hledat' }));

    expect(screen.getByPlaceholderText('Hledat...')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<SearchBar onSearch={() => {}} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
