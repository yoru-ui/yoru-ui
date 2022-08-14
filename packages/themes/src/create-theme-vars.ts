import { flattenTokens } from '@yoru-ui/system';

export function yoruCSSVars(rawTheme: Record<string, any>): Record<string, any> {
  const theme = {};
  const cssMap = flattenTokens({ tokens: rawTheme });

  Object.assign(theme, {
    __cssMap: cssMap,
  });

  return theme;
}
