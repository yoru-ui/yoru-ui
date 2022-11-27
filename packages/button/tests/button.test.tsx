import * as React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { Button } from '../src';

let container: RenderResult;

beforeEach(() => {
  container = render(<Button>Button</Button>);
});

describe('Testing Button Component', () => {
  it('Should render Button Component Correctly', () => {
    expect(screen.getByText('Button')).toBeDefined();
  });

  it('Should render button with icon', () => {
    const { rerender } = container;
    rerender(<Button icon="icon">Button</Button>);
    expect(screen.getByText('Button')).toBeDefined();
  });

  it('Should clicked successfully', () => {
    const { rerender } = container;
    const onClick = jest.fn();
    rerender(<Button onClick={onClick}>Button</Button>);
    const button = screen.getByText('Button');
    button.click();
    expect(onClick).toBeCalled();
  });

  it('Should clicked href successfully', () => {
    const { rerender } = container;
    rerender(
      <Button variants="link" href="https://github.com/yoru-ui/yoru-ui">
        Button Link
      </Button>,
    );
    expect(screen.getByText('Button Link').closest('a')).toHaveAttribute(
      'href',
      'https://github.com/yoru-ui/yoru-ui',
    );
  });
});
