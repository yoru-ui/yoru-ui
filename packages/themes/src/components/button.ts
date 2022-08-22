import { colors } from '../foundations/colors';

const baseStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: '1.2',
  borderRadius: '0.25rem',
  fontWeight: '500',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all .3s',
  padding: '4px 15px',
  height: 32,
  fontSize: 14,
  boxShadow: '0 2px #00000004',
  border: '1px solid transparent',
};

const defaultVariants = {
  backgroundColor: colors.gray[200],
  color: `${colors.gray[900]}`,
  outline: {
    backgroundColor: colors.transparent,
    borderColor: colors.gray[500],
    color: colors.gray[900],
  },
  _hover: {
    background: colors.gray[300],
  },
};

const primaryVariants = () => {
  return {
    backgroundColor: colors.sky[500],
    color: 'white',
    _hover: {
      background: 'red.200',
    },
  };
};

const secondaryVariants = {
  backgroundColor: colors.sky[100],
  color: 'sky.500',
  _hover: {
    background: 'sky.500',
  },
};

const dangerVariants = {
  backgroundColor: colors.red[500],
  color: colors.white,
  _hover: {
    background: 'red.600',
  },
};

// varians button
const variants = {
  default: defaultVariants,
  primary: primaryVariants(),
  secondary: secondaryVariants,
  danger: dangerVariants,
};

// size button
const sizes = {
  // https://tailwindcss.com/docs/font-size
  sm: {
    height: '1.5rem',
    fontSize: '0.75rem', // todo: make it dynamic we can use sm, md, lg, xl
    padding: '0.25rem 0.75rem',
  },
  md: {
    height: '2rem',
    fontSize: '0.875rem', // todo: make it dynamic we can use sm, md, lg, xl
    padding: '0.25rem 1rem',
  },
  lg: {
    height: '2.5rem',
    fontSize: '1rem', // todo: make it dynamic we can use sm, md, lg, xl
    padding: '0.5rem 1.5rem',
  },
};

export default {
  baseStyle,
  variants,
  sizes,
};
