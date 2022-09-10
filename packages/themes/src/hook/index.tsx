import theme, { setTheme as setYoruTheme, ThemeContext, getTheme, ThemeVariant } from '..';
import { ThemeConfigProperties } from '../types';
import { resolverStyleConfig } from '../utils/styled-config';
import { useContext, useEffect, useState } from 'react';
import { useTheme as GetTheme } from '@emotion/react';

export const useResolvedThemes = (componentKey: string, props: ThemeConfigProperties) => {
  const { colorScheme, sizes, variants } = props;
  const yoruThemes = GetTheme();
  const { components } = theme;
  const themeStyleConfig = components[componentKey] as ThemeConfigProperties;
  const getStyle = resolverStyleConfig(themeStyleConfig);

  // selector for get all baseStyle from theme
  const getBaseStyled = getStyle.baseStyle;
  // selector for get all colorScheme from theme
  const colorSchemes = getStyle.colorScheme[colorScheme as any];
  const getColorScheme =
    typeof colorSchemes === 'function' ? colorSchemes(yoruThemes) : colorSchemes;
  // selector for get all size from theme
  const getSizes = getStyle.sizes[sizes as any];
  // selector for get all variants from theme
  const getVariants = getStyle.variants[variants as any];

  return {
    ...getBaseStyled,
    ...getColorScheme,
    ...getSizes,
    ...getVariants,
  };
};

export const useTheme = () => {
  const defaultValue = useContext(ThemeContext) as ThemeVariant;
  const [theme, setTheme] = useState<ThemeVariant>(getTheme(defaultValue));

  useEffect(() => {
    setYoruTheme(theme);
  }, [theme]);

  return { theme, setTheme };
};
