import { YoruStyleProperties } from '@yoru-ui/core';

const baseStyle: YoruStyleProperties = {
  position: 'relative',
  transition: 'all .3s',
  padding: '4px 11px',
  boxSizing: 'border-box',
  border: '1px solid',
  borderColor: '#EDEDED',
  borderRadius: 4,
  width: '100%',
  height: 32,
  _hover: {
    borderColor: 'sky.500',
  },
  _focus: {
    borderColor: 'sky.500',
    boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2);',
    outline: 'none',
  },
};

const defaultVariants = () => {
  return {
    width: '100%',
    border: 'none',
    outline: 'none',
    _placeholder: {
      color: 'gray.400',
    },
  };
};

const variants = {
  default: defaultVariants,
};

export default {
  baseStyle,
  variants,
};
