import type { FlatTokens } from './flatten';
import { cssVar } from './css-var';

function tokenToCssVar(token: string | number, prefix?: string) {
  return cssVar(String(token).replace(/\./g, '-'), undefined, prefix);
}

export const createCssVariable = (token: FlatTokens) => {
  const cssVars: Record<string, any> = {};
  const cssMaps: Record<string, any> = {};

  for (const [tokenValue, value] of Object.entries(token)) {
    const { variable, reference } = tokenToCssVar(tokenValue, 'yoru');
    const { value: cssValue } = value;
    cssVars[variable] = cssValue;
    cssMaps[tokenValue] = {
      value: cssValue,
      var: variable,
      varRef: reference,
    };
  }

  return {
    cssMaps,
    cssVars,
  };
};
