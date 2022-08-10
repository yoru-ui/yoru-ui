import { colors } from '../foundations/colors';

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
  backgroundColor: '#f3f4f6',
  color: '#1F0101',
  boxShadow: '0 2px #00000004',
  border: '1px solid transparent',
};

const primaryVariants = {
  backgroundColor: colors.sky[500],
  color: colors.white,
  '&:hover': {
    background: colors.sky[400],
  },
};

const secondaryVariants = {
  backgroundColor: colors.sky[100],
  color: colors.sky[500],
  '&:hover': {
    background: colors.sky[50],
  },
};

const dangerVariants = {
  backgroundColor: colors.red[500],
  color: colors.white,
  '&:hover': {
    background: colors.red[400],
  },
};

// varians button
const variants = {
  primary: primaryVariants,
  secondary: secondaryVariants,
  danger: dangerVariants,
};

export default {
  baseStyle,
  variants,
};
