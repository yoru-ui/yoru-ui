import { YoruStyleProperties } from '@yoru-ui/core';

const baseStyle: YoruStyleProperties = {
  '& .date-picker-overlay': {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '400px',
    zIndex: 100,
    '& .date-picker--weekdays': {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
      placeItems: 'center',
    },
    '& .date-picker--days': {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
      placeItems: 'center',
    },
  },
};

export default {
  baseStyle,
};
