import { YoruStyleProperties } from '@yoru-ui/core';

const baseStyle: YoruStyleProperties = {
  display: 'inline-flex',
  cursor: 'pointer',
  alignItems: 'center',
  marginRight: '8px',
  '& > input': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    witeSpace: 'nowrap',
    border: '0px',
    '&:checked + .yoru-radio__control': {
      border: 'none',
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        height: '40%',
        borderRadius: '50%',
      },
    },
  },
  '& .yoru-radio__control': {
    transition: '0.4s',
    position: 'relative',
    boxSizing: 'border-box',
    border: '1px solid',
    borderColor: 'gray.400',
    borderRadius: '100%',
    marginRight: '8px',
  },
};

const sizes = {
  sm: {
    '& .yoru-radio__control': {
      height: '12px',
      width: '12px',
    },
  },
  md: {
    '& .yoru-radio__control': {
      height: '16px',
      width: '16px',
    },
  },
  lg: {
    '& .yoru-radio__control': {
      height: '20px',
      width: '20px',
    },
  },
};

// const colorScheme = {};
export default {
  sizes,
  baseStyle,
};
