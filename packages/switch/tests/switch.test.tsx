import * as React from 'react';
import { render } from '@testing-library/react';
import { Switch } from '../src';

const setup = (checked?: boolean) => {
  const util = render(<Switch checked={checked} />);

  const SwitchInput = util.getByTestId('yoru-switch') as HTMLInputElement;

  return {
    SwitchInput,
    ...util,
  };
};

describe('Switch', () => {
  it('it should test Switch component', () => {
    const { getByTestId } = render(<Switch />);
    expect(getByTestId('yoru-switch')).toBeDefined();
  });

  it('Should test default checked switch', () => {
    const { SwitchInput } = setup(true);

    expect(SwitchInput.getAttribute('aria-checked')).toBe('true');
  });

  it('Should test default checked switch', () => {
    const { SwitchInput } = setup(false);

    expect(SwitchInput.getAttribute('aria-checked')).toBe('false');
  });
});
