export type Dictionary<T = any> = Record<string, T>;

export type ThemeConfigProperties = {
  baseStyle?: Dictionary;
  variants?: Dictionary;
  sizes?: Dictionary;
};

export type VariantsProperties = React.CSSProperties;
