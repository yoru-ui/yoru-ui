import * as React from 'react';
import { render } from '@testing-library/react';
import { Text } from '../src';

describe('Text', () => {
  test('it should test Text component', () => {
    const { getByText } = render(<Text>Text Component</Text>);
    expect(getByText('Text Component')).toBeDefined();
  });
});
