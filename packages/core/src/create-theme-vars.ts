import { flattenTokens, createCssVariable, FlatTokens } from './';

export function yoruCSSVars(rawTheme: Record<string, any>): Record<string, any> {
  const theme = {};
  const cssMap = flattenTokens({ tokens: rawTheme }) as FlatTokens;

  const { cssVars, cssMaps } = createCssVariable(cssMap);

  Object.assign(theme, {
    __cssMap: cssMaps,
    __cssVar: cssVars,
  });

  return theme;
}
