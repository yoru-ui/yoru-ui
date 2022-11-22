import { YoruStyleProperties } from '@yoru-ui/core';

const baseStyle: YoruStyleProperties = {
  position: 'relative',
  display: 'inline-block',
  width: '60px',
  height: '34px',
  '& input': {
    opacity: '0',
    width: '0',
    height: '0',
    '&:checked + .switch:before': {
      WebkitTransform: 'translateX(26px)',
      MsTransform: 'translateX(26px)',
      transform: 'translateX(26px)',
    },
  },
  '& .switch': {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    borderRadius: '34px',
    transition: '0.4s',
    WebkitTransition: '0.4s',
    '&:before': {
      position: 'absolute',
      content: '""',
      height: '26px',
      width: '26px',
      left: '4px',
      bottom: '4px',
      borderRadius: '50%',
      transition: '0.4s',
      WebkitTransition: '0.4s',
    },
  },
};

const sizes = {
  sm: {
    width: '28px',
    height: '16px',
    '& input': {
      '&:checked + .switch:before': {
        WebkitTransform: 'translateX(12px)',
        MsTransform: 'translateX(12px)',
        transform: 'translateX(12px)',
      },
    },
    '& .switch': {
      '&:before': {
        width: '10px',
        height: '10px',
        bottom: '3px',
        left: '3px',
      },
    },
  },
  md: {
    width: '40px',
    height: '24px',
    '& input': {
      '&:checked + .switch:before': {
        WebkitTransform: 'translateX(16px)',
        MsTransform: 'translateX(16px)',
        transform: 'translateX(16px)',
      },
    },
    '& .switch': {
      '&:before': {
        width: '18px',
        height: '18px',
        bottom: '3px',
        left: '3px',
      },
    },
  },
  lg: {
    width: '60px',
    height: '34px',
  },
};

export default {
  baseStyle,
  sizes,
};
