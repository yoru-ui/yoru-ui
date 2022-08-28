import theme, { setTheme as setYoruTheme, ThemeContext, getTheme, ThemeVariant } from '..';
import { ThemeConfigProperties, VariantsProperties } from '../types';
import { resolverStyleConfig } from '../utils/styled-config';
import { useContext, useEffect, useState } from 'react';
import { useTheme as GetTheme } from '@emotion/react';

export const useGetThemes = (componentKey: string) => {
  const { components } = theme;
  const themeStyleConfig = components[componentKey] as ThemeConfigProperties;
  const getStyle = resolverStyleConfig(themeStyleConfig);
  return getStyle;
};

export const useGetColorScheme = (componentKey: string, variantKey: string) => {
  const Component = useGetThemes(componentKey);
  const { variants } = Component;
  const variant = variants[variantKey] as VariantsProperties;
  const theme = GetTheme();
  return variant(theme);
};

export const useGetSizes = (componentKey: string, sizeKey: string) => {
  const Component = useGetThemes(componentKey);
  const { sizes } = Component;
  const size = sizes[sizeKey] as VariantsProperties;
  return size;
};

export const useTheme = () => {
  const defaultValue = useContext(ThemeContext) as ThemeVariant;
  const [theme, setTheme] = useState<ThemeVariant>(getTheme(defaultValue));

  useEffect(() => {
    setYoruTheme(theme);
  }, [theme]);

  return { theme, setTheme };
};
