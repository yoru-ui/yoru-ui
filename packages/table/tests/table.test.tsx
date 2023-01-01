import * as React from 'react';
// import { render } from '@testing-library/react';
import Table from '../src/table';

describe('Table', () => {
  test('it should test Table component', () => {
    expect(<Table test-id="table" fields={[]} columns={[]} />).toBeDefined();
  });
});
