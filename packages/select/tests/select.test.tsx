import * as React from 'react';
import { render } from '@testing-library/react';
import { Select } from '../src';

describe('Select', () => {
  test('it should test Select component', () => {
    const { getByText } = render(
      <Select onChange={() => {}} options={[]} placeholder="This is placeholder" />,
    );
    expect(getByText('This is placeholder')).toBeDefined();
  });
});
