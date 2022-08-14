import theme, { setTheme as setYoruTheme, ThemeContext, getTheme, ThemeVariant } from '..';
import { ThemeConfigProperties, VariantsProperties } from '../types';
import { resolverStyleConfig } from '../utils/styled-config';
import { useContext, useEffect, useState } from 'react';

export const useGetThemes = (themeKey: string) => {
  const { components } = theme;
  const themeStyleConfig = components[themeKey] as ThemeConfigProperties;
  const getStyle = resolverStyleConfig(themeStyleConfig);
  return getStyle;
};

export const useGetColorScheme = (themeKey: string, variantKey: string) => {
  const Component = useGetThemes(themeKey);
  const { variants } = Component;
  const variant = variants[variantKey] as VariantsProperties;
  return variant;
};

export const useTheme = () => {
  const defaultValue = useContext(ThemeContext) as ThemeVariant;
  const [theme, setTheme] = useState<ThemeVariant>(getTheme(defaultValue));

  useEffect(() => {
    setYoruTheme(theme);
  }, [theme]);

  return { theme, setTheme };
};

export const useGetSizes = (themeKey: string, sizeKey: string) => {
  const Component = useGetThemes(themeKey);
  const { sizes } = Component;
  const size = sizes[sizeKey] as VariantsProperties;
  return size;
};
