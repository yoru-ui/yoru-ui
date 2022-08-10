import theme from '..';
import { ThemeConfigProperties, VariantsProperties } from '../types';
import { resolverStyleConfig } from '../utils/styled-config';

export const useGetThemes = (themeKey: string) => {
  const { components } = theme;
  const themeStyleConfig = components[themeKey] as ThemeConfigProperties;
  const getStyle = resolverStyleConfig(themeStyleConfig);
  // should return 3 object: baseStyle, variants, sizes
  return getStyle;
};

export const useGetVariants = (themeKey: string, variantKey: string) => {
  const Component = useGetThemes(themeKey);
  const { variants } = Component;
  const variant = variants[variantKey] as VariantsProperties;
  return variant;
};
