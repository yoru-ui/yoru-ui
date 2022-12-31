import { YoruStyleProperties } from '@yoru-ui/core';

const baseStyle: YoruStyleProperties = {
  display: 'inline-block',
  fontSize: 14,
  width: '100%',
  position: 'relative',

  '.yoru-select-inner': {
    border: '1px solid',
    borderRadius: '3px',
    borderColor: 'gray.200',
    // focused styling
    '&--focused': {
      borderColor: 'blue.500',
    },

    '&:hover .yoru-selector': {
      '&__close-button': {
        display: 'block',
        cursor: 'pointer',
      },
    },

    '& .yoru-selector-multiple__selectedItem ': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '.25rem',
      padding: '.25em .5em',
      paddingRight: '3rem',
    },

    '& .yoru-selector': {
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      minHeight: '3em',

      '&__close-button': {
        display: 'none',
      },

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
  },
};

export default {
  baseStyle,
};
