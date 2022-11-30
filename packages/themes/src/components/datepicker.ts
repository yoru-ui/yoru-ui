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
  position: 'relative',
  width: '100%',
  '& .yoru-click-listener': {
    transition: 'all .3s',
    border: '1px solid',
    borderColor: '#EDEDED',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    cursor: 'pointer',
    borderRadius: 4,
    _hover: {
      borderColor: 'sky.500',
    },
  },
  '& .date-picker-overlay': {
    position: 'absolute',
    backgroundColor: 'white',
    marginTop: '0.3em',
    width: '100%',
    minWidth: '260px',
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
        '& span': {
          cursor: 'pointer',
          _hover: {
            textDecoration: 'underline',
          },
        },
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
      '& > span.inactive': {
        '& > span': {
          fontSize: '0.7em',
          color: 'gray.300',
          cursor: 'not-allowed',
        },
      },
      '& > span:not(.inactive)': {
        cursor: 'pointer',
        margin: '0.2em',
        _hover: {
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
        '&.selected-date': {
          margin: '0.2em',
          '& > span': {
            border: '1px solid',
            borderColor: 'pink.500',
            borderRadius: '50%',
          },
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
