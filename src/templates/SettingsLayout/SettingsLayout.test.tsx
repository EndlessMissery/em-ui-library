import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SettingsLayout from './SettingsLayout';

const user = { name: 'User Admin', avatar: '/me.png' };

describe('SettingsLayout', () => {
  it('renders header, settings links, and children', () => {
    render(
      <SettingsLayout user={user} onLogout={() => {}}>
        <p>Settings content</p>
      </SettingsLayout>
    );
    expect(screen.getByText('User Admin')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Profil' })).toHaveAttribute('href', '/settings/profile');
    expect(screen.getByRole('link', { name: 'Heslo' })).toHaveAttribute('href', '/settings/password');
    expect(screen.getByText('Settings content')).toBeInTheDocument();
  });
});
