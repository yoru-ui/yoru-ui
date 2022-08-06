import * as React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../src';

describe('Testing Button Component', () => {
  it('Should render Button Component Correctly', () => {
    const { getByTestId } = render(<Button data-testid="yoru-button">Button</Button>);
    expect(getByTestId('yoru-button')).toBeDefined();
  });
});
