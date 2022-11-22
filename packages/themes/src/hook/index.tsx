import baseTheme, { ThemeContext, ThemeContextValue } from '..';
import { ThemeConfigProperties, ThemeStyleProperties } from '../types';
import { resolverStyleConfig } from '../utils/styled-config';
import { useContext } from 'react';
import { useTheme as GetTheme } from '@emotion/react';
import { mergeWith, runIfFN } from '@yoru-ui/utils';

const mergeResolvedThemes = (obj1: any, obj2: any, ...args: any[]): any => {
  const result = mergeWith(obj1, obj2);
  if (args.length > 0) {
    return mergeResolvedThemes(result, args[0], ...args.slice(1, args.length));
  }
  return result;
};

export const useResolvedThemes = (componentKey: string, props: ThemeStyleProperties) => {
  const { colorScheme, sizes, variants } = props;
  const yoruThemes = GetTheme();
  const { theme } = useTheme();
  const { components } = baseTheme;
  const themeStyleConfig = components[componentKey] as ThemeConfigProperties;
  const getStyle = resolverStyleConfig(themeStyleConfig);
  // selector for get all baseStyle from theme
  const getBaseStyled = getStyle.baseStyle;
  // selector for get all colorScheme from theme
  const colorSchemes = colorScheme && getStyle.colorScheme[colorScheme];
  const getColorScheme =
    typeof colorSchemes === 'function' ? colorSchemes(yoruThemes) : colorSchemes;
  // selector for get all size from theme
  const getSizes = sizes && getStyle.sizes[sizes];
  // selector for get all variants from theme
  const getVariants =
    variants && runIfFN(getStyle.variants[variants], { ...props, colorMode: theme });

  return mergeResolvedThemes(getBaseStyled, getColorScheme, getSizes, getVariants);
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext) as ThemeContextValue;

  if (themeContext) return themeContext;

  return { theme: 'light', setTheme: () => {} };
};
