import colors from './colors';
import shadows from './shadow';
import texts from './text';
import lineHeights from './lineHeight';

export type ColorFoundation = keyof typeof colors;

export default {
  colors,
  shadows,
  texts,
  lineHeights,
};
