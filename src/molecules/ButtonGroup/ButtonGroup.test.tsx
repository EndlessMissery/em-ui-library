import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import ButtonGroup from './ButtonGroup';
import Button from '../../atoms/Button/Button';

describe('ButtonGroup', () => {
  it('renders every child button', () => {
    render(
      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>
    );
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('wraps children in a button-group container', () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Save</Button>
      </ButtonGroup>
    );
    expect(container.querySelector('.button-group')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
