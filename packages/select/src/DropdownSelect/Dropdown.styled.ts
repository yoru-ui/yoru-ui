import { YoruStyleProperties } from '@yoru-ui/core/src/system';

export const styledDrodpwon: YoruStyleProperties = {
  position: 'absolute',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  maxHeight: '15em',
  overflowY: 'auto',
  border: '.05em solid',
  borderColor: 'gray.200',
  borderRadius: '.25em',
  background: 'white',
  zIndex: 100,
  fontFamily: 'sans-serif',

  '& .yoru-select-dropdown__dropdownItem': {
    padding: '.25em .5em',
    cursor: 'pointer',

    '&--selected': {
      background: 'sky.100',
    },

    '&:hover': {
      background: 'gray.200',
    },

    // '&--highlighted': {
    //   background: 'sky.200',
    // },

    '&--disabled': {
      pointerEvents: 'none',
      opacity: 0.6,
    },
  },
};
