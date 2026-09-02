import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Heading from './Heading';

describe('Heading', () => {
  it('defaults to level 1', () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole('heading', { level: 1, name: 'Title' })).toBeInTheDocument();
  });

  it('renders the requested heading level', () => {
    render(<Heading level={3}>Subtitle</Heading>);
    expect(screen.getByRole('heading', { level: 3, name: 'Subtitle' })).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Heading level={2}>Title</Heading>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
