import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders an image when src is given', () => {
    render(<Avatar src="/me.png" alt="User Admin" />);
    expect(screen.getByRole('img', { name: 'User Admin' })).toHaveAttribute('src', '/me.png');
  });

  // Regression test: Header/UserProfile only pass `name`, not `alt`, to
  // Avatar. It now falls back to `name` for the img's alt text instead of
  // rendering an unlabelled image.
  it('falls back to name for alt text when alt is not given', () => {
    render(<Avatar src="/me.png" name="User Admin" />);
    expect(screen.getByRole('img', { name: 'User Admin' })).toBeInTheDocument();
  });

  it('renders initials as a placeholder when there is no src', () => {
    render(<Avatar name="User Admin" />);
    expect(screen.getByText('UA')).toBeInTheDocument();
  });

  it('applies the size to width and height', () => {
    render(<Avatar name="User Admin" size={80} />);
    expect(screen.getByText('UA')).toHaveStyle({ width: '80px', height: '80px' });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Avatar src="/me.png" alt="User Admin" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
