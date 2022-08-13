import * as React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../src';

describe('Testing Button Component', () => {
  it('Should render Button Component Correctly', () => {
    const { getByText } = render(<Button>Button</Button>);
    expect(getByText('Button')).toBeDefined();
  });
});
