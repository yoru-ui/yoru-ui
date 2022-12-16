import { YoruStyleProperties } from '@yoru-ui/core';
import { mode } from '../utils/theme-utils';

const baseStyle = (props: any): YoruStyleProperties => ({
  position: 'relative',
  transition: 'all .3s',
  padding: '4px 11px',
  boxSizing: 'border-box',
  border: '1px solid',
  borderColor: '#EDEDED',
  borderRadius: 4,
  width: '100%',
  _placeholder: {
    color: mode('gray.400', 'gray.100')(props),
  },
  background: mode('white', '#121212')(props),
  color: mode('gray.700', 'white')(props),
  height: 38,
  _hover: {
    borderColor: 'sky.500',
  },
  _focus: {
    borderColor: 'sky.500',
    boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2);',
    outline: 'none',
  },
});

export default {
  baseStyle,
};
