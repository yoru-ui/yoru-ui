import { components } from './components';

export const theme = {
  components,
};

export type Theme = typeof theme;

export * from './hook';
export * from './theme';
export * from './types';
export * from './foundations';

export default theme;
