import * as React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from '../src';

describe('Checkbox', () => {
  test('it should test Checkbox component', () => {
    const { getByText } = render(<Checkbox label="I agree to terms and condition" />);
    expect(getByText('I agree to terms and condition')).toBeDefined();
  });
});
