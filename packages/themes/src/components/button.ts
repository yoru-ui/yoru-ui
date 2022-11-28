import { YoruStyleProperties } from '@yoru-ui/core';
import { runIfFN } from '@yoru-ui/utils';
import { mode } from '../utils/theme-utils';

type AccessibleColor = {
  bg?: string;
  color?: string;
  hoverBg?: string;
  activeBg?: string;
};

const baseStyle: YoruStyleProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: '1.2',
  borderRadius: '0.25rem',
  fontWeight: '600',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all .3s',
  padding: '4px 15px',
  height: 32,
  fontSize: 14,
  boxShadow: 'sm',
  fontFamily: 'arial',
  border: '1px solid transparent',
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    boxShadow: 'none',
    borderColor: 'gray.100',
  },
  '&:hover': {
    '&:disabled': {
      background: 'initial',
    },
  },

  svg: {
    stroke: 'currentColor',
  },
};

const variantGhost = (props: any) => {
  const { colorScheme: c } = props;

  const cScheme = String(c) || '';

  if (cScheme === '' || cScheme === 'gray') {
    return {
      background: 'transparent',
      boxShadow: 'unset',
      color: mode(`gray.500`, `slate.900`)(props),
      '&:hover': {
        background: mode(`gray.100`, `slate.200`)(props),
      },
      '&:active': { background: mode(`gray.200`, `slate.300`)(props) },
    };
  }

  return {
    color: mode(`${cScheme}.500`, `${cScheme}.900`)(props),
    background: 'transparent',
    boxShadow: 'unset',
    '&:hover': {
      background: mode(`${cScheme}.50`, `${cScheme}.200`)(props),
    },
    '&:active': {
      background: mode(`${cScheme}.100`, `${cScheme}.300`)(props),
    },
  };
};

const outlineVariant = (props: any) => {
  return {
    border: '1px solid',
    borderColor: 'currentColor',
    ...runIfFN(variantGhost, props),
  };
};

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: 'yellow.400',
    color: 'black',
    hoverBg: 'yellow.500',
    activeBg: 'yellow.600',
  },
  cyan: {
    bg: 'cyan.400',
    color: 'black',
    hoverBg: 'cyan.500',
    activeBg: 'cyan.600',
  },
};

const solidVariant = (props: any) => {
  const { colorScheme: c } = props;

  const cScheme = String(c) || '';

  if (cScheme === '' || cScheme === 'gray') {
    const bg = mode(`gray.100`, `slate.200`)(props);

    return {
      background: bg,
      '&:hover': {
        background: mode(`gray.200`, `slate.300`)(props),
        '&:disabled': {
          background: bg,
        },
      },
      '&:active': { background: mode(`gray.300`, `slate.400`)(props) },
    };
  }

  const {
    bg = `${cScheme}.500`,
    color = 'white',
    hoverBg = `${cScheme}.600`,
    activeBg = `${cScheme}.700`,
  } = accessibleColorMap[c] ?? {};

  const background = mode(bg, `${cScheme}.200`)(props);

  return {
    background: background,
    color: mode(color, `gray.800`)(props),
    '&:hover': {
      background: mode(hoverBg, `${cScheme}.300`)(props),
      '&:disabled': {
        background: background,
      },
    },
    '&:active': { background: mode(activeBg, `${cScheme}.400`)(props) },
  };
};

const linkVariant = (props: any) => {
  const { colorScheme: c } = props;
  const cScheme = String(c) || '';

  return {
    padding: 0,
    height: 'auto',
    lineHeight: 'normal',
    verticalAlign: 'baseline',
    boxShadow: 'unset',
    background: 'transparent',
    color: mode(`${cScheme}.500`, `${cScheme}.200`)(props),
    '&:hover': {
      textDecoration: 'underline',
      '&:disabled': {
        textDecoration: 'none',
      },
    },
    '&:active': {
      color: mode(`${cScheme}.700`, `${cScheme}.500`)(props),
    },
  };
};

// varians button
const variants = {
  solid: solidVariant,
  outline: outlineVariant,
  link: linkVariant,
  ghost: variantGhost,
};

// size button
const sizes = {
  sm: {
    height: '1.5rem',
    fontSize: '0.75rem',
    padding: '0.25rem 0.75rem',
  },
  md: {
    height: '2rem',
    fontSize: '0.875rem',
    padding: '0.25rem 1rem',
  },
  lg: {
    height: '2.5rem',
    fontSize: '1rem',
    padding: '0.5rem 1.5rem',
  },
};

export default {
  baseStyle,
  variants,
  sizes,
};
