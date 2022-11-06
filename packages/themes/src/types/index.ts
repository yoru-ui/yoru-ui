import { YoruStyleProperties } from '@yoru-ui/core';

export type Dictionary<T = any> = Record<string, T>;

export type ThemeConfigProperties = {
  baseStyle?: Dictionary;
  variants?: Dictionary;
  sizes?: Dictionary;
  colorScheme?: Dictionary;
};

export type VariantsProperties = (props: any) => YoruStyleProperties;
