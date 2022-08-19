/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { YoruStyleProperties } from './system';

export const pseudoSelector = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: '&:hover, &[data-hover]',
  /**
   * Styles for CSS selector `&:focus`
   */
  _focus: '&:focus, &[data-focus]',
};

type Pseudo = typeof pseudoSelector;

export type PseudoProperties = {
  [key in keyof Pseudo]?: React.CSSProperties & PseudoProperties;
};

/**
 * Recursively transform pseudo properties
 * @param style @type {YoruStyleProperties | string}
 */
export const transformPseudo = (style: YoruStyleProperties | string): string | object => {
  let css = {};
  if (typeof style === 'object') {
    Object.entries(style).forEach(([pseudo, value]: [string, string | YoruStyleProperties]) => {
      css = {
        ...css,
        [pseudoSelector[pseudo as keyof Pseudo] ?? pseudo]: transformPseudo(value),
      };
    });
    return css;
  }

  return style;
};
