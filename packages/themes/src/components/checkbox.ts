import { YoruStyleProperties } from '@yoru-ui/core';

const baseStyle: YoruStyleProperties = {
  position: 'relative',
  display: 'block',
  minWidth: '16px',
  maxWidth: 'max-content',
  height: '16px',
  paddingLeft: '18px',
  cursor: 'pointer',
  '& > input.checkbox': {
    opacity: '0',
    width: '0',
    height: '0',
    '&:checked + .checkbox-box': {
      background: 'sky.500',
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -60%) rotate(45deg)',
        width: '3px',
        height: '8px',
        border: 'solid',
        borderWidth: '0 2px 2px 0',
        borderColor: 'white',
      },
    },
    '&:not(:checked) + .checkbox-box': {
      border: '1px solid',
      borderColor: 'gray.400',
      boxSizing: 'border-box',
    },
  },
  '& > .checkbox-box': {
    position: 'absolute',
    width: '1rem',
    height: '1rem',
    borderRadius: '2px',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
};

const sizes = {
  sm: {
    paddingLeft: '10px',
    '& > .checkbox-box': {
      width: '0.75rem',
      height: '0.75rem',
    },
    '& > input.checkbox': {
      '&:checked + .checkbox-box': {
        '&:after': {
          borderWidth: '0 2px 2px 0',
          width: '1.5px',
          height: '5px',
        },
      },
    },
  },
  md: {},
  lg: {
    paddingLeft: '20px',
    '& > .checkbox-box': {
      width: '1.25rem',
      height: '1.25rem',
    },
    '& > input.checkbox': {
      '&:checked + .checkbox-box': {
        '&:after': {
          borderWidth: '0 3px 3px 0',
          width: '4px',
        },
      },
    },
  },
};

export default {
  baseStyle,
  sizes,
};
