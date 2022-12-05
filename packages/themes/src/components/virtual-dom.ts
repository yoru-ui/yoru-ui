import { YoruStyleProperties } from '@yoru-ui/core';

const baseStyle: YoruStyleProperties = {
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
};

export default {
  baseStyle,
};
