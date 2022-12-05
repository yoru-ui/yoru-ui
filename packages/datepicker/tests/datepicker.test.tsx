/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { render } from '@testing-library/react';
import { DatePicker } from '../src';

describe('Datepicker', () => {
  test('it should test Datepicker component', () => {
    const { getByText } = render(<DatePicker />);
  });
});
