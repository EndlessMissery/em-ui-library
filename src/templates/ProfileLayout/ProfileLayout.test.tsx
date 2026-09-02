import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProfileLayout from './ProfileLayout';

const user = { name: 'User Admin', email: 'useradmin@example.com', avatar: '/me.png' };
const tabs = [
  { label: 'Overview', content: 'Overview content' },
  { label: 'Activity', content: 'Activity content' },
];

describe('ProfileLayout', () => {
  it('renders the user info, tabs, and children', () => {
    render(
      <ProfileLayout user={user} tabs={tabs}>
        <p>Extra content</p>
      </ProfileLayout>
    );
    expect(screen.getByRole('img', { name: 'User Admin' })).toBeInTheDocument();
    expect(screen.getByText('useradmin@example.com')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Overview' })).toBeInTheDocument();
    expect(screen.getByText('Overview content')).toBeInTheDocument();
    expect(screen.getByText('Extra content')).toBeInTheDocument();
  });
});
