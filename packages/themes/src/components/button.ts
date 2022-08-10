import { VariantsProperties } from '../types';

const baseStyle: React.CSSProperties = {
  lineHeight: '1.2',
  borderRadius: '0.25rem',
  fontWeight: 'semibold',
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

const primaryVariants: VariantsProperties = {
  backgroundColor: '#0ea5e9',
  color: '#fff',
};

const secondaryVariants: VariantsProperties = {
  backgroundColor: '#CBEEFD',
  color: '#0ea5e9',
};

const dangerVariants = {
  backgroundColor: '#F43F5E',
  color: '#fff',
  _hover: {
    backgroundColor: '#333',
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
