import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ListView from './ListView';

describe('ListView', () => {
  it('shows an empty state when there are no items', () => {
    render(<ListView items={[]} renderItem={(item: string) => item} />);
    expect(screen.getByText('No items')).toBeInTheDocument();
  });

  it('renders each item via renderItem', () => {
    render(
      <ListView items={['Alpha', 'Beta']} renderItem={(item: string) => <span>{item}</span>} />
    );
    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.getByText('Beta')).toBeInTheDocument();
  });

  it('renders items as a list', () => {
    render(<ListView items={['Alpha']} renderItem={(item: string) => item} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });
});
