import baseTheme, { ThemeContext, ThemeContextValue } from '..';
import { ThemeStyleProperties } from '../types';
import { useContext } from 'react';
// import { useTheme as GetTheme } from '@emotion/react';
import { mergeWith, runIfFN } from '@yoru-ui/utils';
import { ComponentNames, ComponentType } from '../components';

const mergeResolvedThemes = (obj1: any, obj2: any, ...args: any[]): any => {
  const result = mergeWith(obj1, obj2);
  if (args.length > 0) {
    return mergeResolvedThemes(result, args[0], ...args.slice(1, args.length));
  }
  return result;
};

export const useResolvedThemes = <T extends ComponentNames>(
  componentKey: T,
  props: ThemeStyleProperties<T>,
) => {
  const { colorScheme, sizes, variants } = props;
  // const yoruThemes = GetTheme();
  const { theme } = useTheme();
  const { components } = baseTheme;
  const themeStyleConfig = components[componentKey] as ComponentType<T>;
  // selector for get all baseStyle from theme
  const getBaseStyled = themeStyleConfig.baseStyle;
  // selector for get all colorScheme from theme
  const colorSchemes =
    colorScheme && themeStyleConfig.colorScheme && themeStyleConfig.colorScheme[colorScheme];
  const getColorScheme = typeof colorSchemes === 'function' ? colorSchemes() : colorSchemes;
  // selector for get all size from theme
  const getSizes =
    sizes &&
    themeStyleConfig.sizes &&
    themeStyleConfig.sizes[sizes as keyof typeof themeStyleConfig.sizes];
  // selector for get all variants from theme
  const getVariants =
    variants &&
    themeStyleConfig.variants &&
    runIfFN(themeStyleConfig.variants[variants as keyof typeof themeStyleConfig.variants], {
      ...props,
      colorMode: theme,
    });

  return mergeResolvedThemes(getBaseStyled, getColorScheme, getSizes, getVariants);
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext) as ThemeContextValue;

  if (themeContext) return themeContext;

  return { theme: 'light', setTheme: () => {} };
};
