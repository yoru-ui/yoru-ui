import { tokenToCSSVar } from '../css';
import { Theme } from '../system';

const transformCSS = (token: string) => (theme: Theme, value: string) => {
  const _value = tokenToCSSVar(token, value)(theme);

  return _value;
};

export const transformConfig = {
  colors: transformCSS('colors'),
};
