import { ThemeConfigProperties } from '../types';

/**
 * a utils for resolving style themes
 * @param config
 * @returns
 */
export const resolverStyleConfig = (config: ThemeConfigProperties) => {
  const { baseStyle, colorScheme, sizes, variants } = config;
  const resolvedBaseStyle = baseStyle ? baseStyle : {};
  const resolvedColorScheme = colorScheme ? colorScheme : {};
  const resolvedSizes = sizes ? sizes : {};
  const resolvedVariants = variants ? variants : {};
  return {
    baseStyle: resolvedBaseStyle,
    colorScheme: resolvedColorScheme,
    sizes: resolvedSizes,
    variants: resolvedVariants,
  };
};
