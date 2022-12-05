import * as React from 'react';
import { render } from '@testing-library/react';
import { Radio } from '../src';

describe('Radio', () => {
  test('it should test Radio component', () => {
    const { getByText } = render(<Radio label="Male" />);
    expect(getByText('Male')).toBeDefined();
  });
});
