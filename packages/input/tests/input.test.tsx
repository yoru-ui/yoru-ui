import * as React from 'react';
import { render } from '@testing-library/react';
import { Input } from '../src';

describe('Input', () => {
  test('it should test Input component', () => {
    const { container } = render(<Input placeholder="Input Component" />);
    expect(container.querySelector('input')).toBeDefined();
  });
});
