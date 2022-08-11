import { colors } from '../foundations/colors';

// todo: make transform variable from js to css
const baseStyle: React.CSSProperties = {
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
  color: colors.gray[900],
  outline: {
    backgroundColor: colors.transparent,
    borderColor: colors.gray[500],
    color: colors.gray[900],
  },
  '&:hover': {
    background: colors.gray[300],
  },
};

const primaryVariants = {
  backgroundColor: colors.sky[500],
  color: colors.white,
  '&:hover': {
    background: colors.sky[600],
  },
};

const secondaryVariants = {
  backgroundColor: colors.sky[100],
  color: colors.sky[500],
  outline: {
    backgroundColor: colors.transparent,
    color: colors.sky[500],
    borderColor: colors.sky[300],
  },
  '&:hover': {
    background: colors.sky[200],
  },
};

const dangerVariants = {
  backgroundColor: colors.red[500],
  color: colors.white,
  '&:hover': {
    background: colors.red[600],
  },
};

// varians button
const variants = {
  default: defaultVariants,
  primary: primaryVariants,
  secondary: secondaryVariants,
  danger: dangerVariants,
};

export default {
  baseStyle,
  variants,
};
