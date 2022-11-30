/* eslint-disable @typescript-eslint/ban-types */
import { YoruStyleProperties } from '@yoru-ui/core';
import { ComponentNames, ComponentType } from '../components';
import { ColorFoundation as ColorFoundationType } from '../foundations';

export type Dictionary<T = any> = Record<string, T>;

type ThemeStyleResolve<T extends ComponentNames, K> = ComponentType<T> extends K
  ? keyof ComponentType<T>[keyof K]
  : never;

export type ThemeStyleProperties<T extends ComponentNames> = {
  colorScheme?: ColorFoundationType;
  variants?: ThemeStyleResolve<T, { variants: any }>;
  sizes?: ThemeStyleResolve<T, { sizes: any }>;
};

export type ThemeConfigProperties<T extends ComponentNames> = {
  [Property in keyof ThemeStyleProperties<T>]: Record<Property, any>;
};

export type ColorScheme = ColorFoundationType;

export type VariantsProperties = (props: any) => YoruStyleProperties;
