import { keyframes } from '@emotion/react';
import { YoruStyleProperties } from '@yoru-ui/core';

const opacity = keyframes`
  0% {
   opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
}
`;

const baseStyle: YoruStyleProperties = {
  '& .date-picker-overlay': {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '280px',
    zIndex: 100,
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    padding: '1em 0 0.4em 0',
    animation: 'all 0.2s',
    borderRadius: '0.25rem',
    '& .date-picker--header': {
      marginBottom: '1em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 0.5em',
      '& .prev-month, .next-month': {
        padding: '0 5px',
        border: '1px solid',
        borderColor: 'gray.200',
        height: '20px',
      },
      '& p': {
        margin: 0,
      },
    },
    '& .date-picker--weekdays': {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
      placeItems: 'center',
      fontSize: '0.75em',
      fontWeight: 'bold',
      margin: '0.5em 0',
    },
    '& .date-picker--days': {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
      placeItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      '& > span:not(.inactive)': {
        cursor: 'pointer',
        margin: '0.2em',
        '&:hover': {
          color: 'white',
          animation: `${opacity} 200ms ease-in-out`,
          '& > span': {
            cursor: 'pointer',
            backgroundColor: 'pink.500',
            borderRadius: '50%',
          },
        },
        '& > span': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          width: '24px',
          height: '24px',
          fontSize: '0.7em',
          textAlign: 'center',
        },
      },
    },
    '& .date-picker--months, .date-picker--years': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      placeItems: 'center',
      '& > span': {
        cursor: 'pointer',
        fontSize: '0.8em',
        padding: '6px',
        margin: '0.5rem 0',
        '& > span': {
          padding: '0.2em 0.8em',
        },
        '&:hover span': {
          backgroundColor: 'pink.200',
          borderRadius: '0.5em',
        },
      },
      '& > span.active': {
        color: 'pink.500',
        fontWeight: 'bold',
      },
    },
  },
};

export default {
  baseStyle,
};
