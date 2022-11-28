import { YoruStyleProperties } from '@yoru-ui/core';

const baseStyle: YoruStyleProperties = {
  display: 'inline-block',
  fontSize: 14,
  width: 300,
  position: 'relative',

  '& .yoru-selector': {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    minHeight: '3em',
    border: '1px solid',
    borderRadius: '3px',
    borderColor: 'gray.200',

    '&__input': {
      width: '100%',
      overflow: 'hidden',
      '& .yoru-input-affix-wrapper': {
        '& .yoru-input-affix': {
          padding: '3px 6px',
        },
      },

      '& input': {
        minHeight: '3em',
        border: 'none',
        outline: 'none',
        background: 'white',
        width: '100%',
        '&--showSearch': {
          opacity: 1,
        },
        '&--hiddenSearch': {
          opacity: 0,
        },
      },
    },
    '&__selectedItem': {
      position: 'absolute',
      left: 5,
      pointerEvents: 'none',
    },
    '&__placeholder': {
      position: 'absolute',
      left: 10,
      pointerEvents: 'none',
      fontFamily: 'arial',
      fontSize: 14,
      color: 'gray.400',
    },
  },
};

export default {
  baseStyle,
};
