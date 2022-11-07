import { YoruStyleProperties } from '@yoru-ui/core';

export type Dictionary<T = any> = Record<string, T>;

export type ThemeStyleProperties = {
  baseStyle?: string;
  variants?: string;
  sizes?: string;
  colorScheme?: string;
  colorMode?: string;
};

export type ThemeConfigProperties = {
  [Property in keyof ThemeStyleProperties]: Dictionary;
};

export type VariantsProperties = (props: any) => YoruStyleProperties;
