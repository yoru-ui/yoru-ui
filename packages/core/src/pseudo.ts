export const pseudoSelector = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: '&:hover, &[data-hover]',
  /**
   * Styles for CSS selector `&:focus`
   */
  _focus: '&:focus, &[data-focus]',
  /**
   * Styles for CSS input placeholder `&::placeholder`
   */
  _placeholder: '&::placeholder',
};

export type Pseudo = typeof pseudoSelector;

export type PseudoProperties = {
  [key in keyof Pseudo]?: React.CSSProperties & PseudoProperties;
};

export const keyIsPseudoSelector = (key: string): key is keyof typeof pseudoSelector => {
  return key in pseudoSelector;
};
