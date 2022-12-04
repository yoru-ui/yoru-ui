import { YoruStyleProperties } from '@yoru-ui/core';

const baseStyle: YoruStyleProperties = {
  display: 'inline-block',
  fontSize: 14,
  width: 300,
  position: 'relative',
  border: '1px solid',
  borderRadius: '3px',
  borderColor: 'gray.200',

  '&:focus, &:focus-within': {
    borderColor: 'blue.500',
  },

  '& .yoru-selector': {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    minHeight: '3em',

    '&__input': {
      width: '100%',
      overflow: 'hidden',

      '& .yoru-input-affix-wrapper': {
        '& .yoru-input-affix': {
          padding: '3px 6px',
        },
        '& input': {
          minHeight: '3em',
          border: 'none',
          outline: 'none',
          background: 'white',
          width: '100%',
          '&--showSearch': {
            opacity: 1,
            display: 'none',
          },
          '&--hiddenSearch': {
            opacity: 0,
            cursor: 'auto',
          },
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

    '&__dropdown': {
      position: 'absolute',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'none',
      maxHeight: '15em',
      overflowY: 'auto',
      border: '.05em solid',
      borderColor: 'gray.200',
      borderRadius: '.25em',
      width: '100%',
      left: 0,
      top: 'calc(100% + .25em)',
      background: 'white',
      zIndex: 100,

      '&--show': {
        display: 'block',
      },
    },

    '&__dropdownItem': {
      padding: '.25em .5em',
      cursor: 'pointer',

      '&:hover': {
        background: 'gray.200',
      },

      '&--selected': {
        background: 'sky.100',
      },
    },
  },
};

export default {
  baseStyle,
};
