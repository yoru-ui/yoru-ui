import { YoruStyleProperties } from '@yoru-ui/core';
import type { TextSize } from '../foundations/text';

const baseStyle: YoruStyleProperties = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  padding: 0,
  margin: 0,
};

const sizes: Record<TextSize, YoruStyleProperties> = {
  xs: {
    fontSize: 'xs',
    lineHeight: 'xs',
  },
  sm: {
    fontSize: 'sm',
    lineHeight: 'sm',
  },
  base: {
    fontSize: 'base',
    lineHeight: 'base',
  },
  lg: {
    fontSize: 'lg',
    lineHeight: 'lg',
  },
  xl: {
    fontSize: 'xl',
    lineHeight: 'xl',
  },
  '2xl': {
    fontSize: '2xl',
    lineHeight: '2xl',
  },
  '3xl': {
    fontSize: '3xl',
    lineHeight: '3xl',
  },
  '4xl': {
    fontSize: '4xl',
    lineHeight: '4xl',
  },
  '5xl': {
    fontSize: '5xl',
    lineHeight: '5xl',
  },
};

const linkVariant = (): YoruStyleProperties => {
  return {
    textDecoration: 'underline',
    cursor: 'pointer',
  };
};

const variants = {
  link: linkVariant,
};

export default {
  baseStyle,
  variants,
  sizes,
};
