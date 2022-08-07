import * as React from 'react';
import { render } from '@testing-library/react';
import { Empty } from '../src';

describe('Empty', () => {
  test('it should test Empty component', () => {
    const { getByText } = render(<Empty>Empty Component</Empty>);
    expect(getByText('Empty Component')).toBeDefined();
  });
});
