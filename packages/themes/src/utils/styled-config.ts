import { ThemeConfigProperties } from '../types';

/**
 * a utils for resolving style themes
 * @param config
 * @returns
 */
export const resolverStyleConfig = (config: ThemeConfigProperties) => {
  const { baseStyle, variants, sizes } = config;
  const resolvedBaseStyle = baseStyle ? baseStyle : {};
  const resolvedVariants = variants ? variants : {};
  const resolvedSizes = sizes ? sizes : {};
  return {
    baseStyle: resolvedBaseStyle,
    variants: resolvedVariants,
    sizes: resolvedSizes,
  };
};
