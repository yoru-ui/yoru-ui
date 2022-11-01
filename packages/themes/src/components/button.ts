import { YoruStyleProperties } from '@yoru-ui/core';

const baseStyle: YoruStyleProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: '1.2',
  borderRadius: '0.25rem',
  fontWeight: '500',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all .3s',
  padding: '4px 15px',
  height: 32,
  fontSize: 14,
  boxShadow: 'sm',
  border: '1px solid transparent',
};

const defaultVariants = () => {
  return {
    backgroundColor: 'gray.200',
    color: 'gray.900',
    outline: {
      backgroundColor: 'transparent',
      borderColor: 'gray.500',
      color: 'gray.900',
    },
    _hover: {
      background: 'gray.300',
    },
  };
};

const primaryVariants = () => {
  return {
    backgroundColor: 'sky.500',
    color: 'white',
    _hover: {
      background: 'sky.600',
    },
  };
};

const secondaryVariants = () => {
  return {
    backgroundColor: 'sky.100',
    color: 'sky.500',
    _hover: {
      background: 'sky.200',
    },
  };
};

const dangerVariants = {
  backgroundColor: 'red.500',
  color: 'white',
  _hover: {
    background: 'red.600',
  },
};

// varians button
const colorScheme = {
  default: defaultVariants,
  primary: primaryVariants,
  secondary: secondaryVariants,
  danger: dangerVariants,
};

// size button
const sizes = {
  sm: {
    height: '1.5rem',
    fontSize: '0.75rem',
    padding: '0.25rem 0.75rem',
  },
  md: {
    height: '2rem',
    fontSize: '0.875rem',
    padding: '0.25rem 1rem',
  },
  lg: {
    height: '2.5rem',
    fontSize: '1rem',
    padding: '0.5rem 1.5rem',
  },
};

export default {
  baseStyle,
  colorScheme,
  sizes,
};
