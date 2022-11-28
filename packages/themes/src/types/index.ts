/* eslint-disable @typescript-eslint/ban-types */
import { YoruStyleProperties } from '@yoru-ui/core';
import { ComponentNames, ComponentType } from '../components';

export type Dictionary<T = any> = Record<string, T>;

type ThemeStyleResolve<T extends ComponentNames, K> = ComponentType<T> extends K
  ? keyof ComponentType<T>[keyof K]
  : string;

export type ThemeStyleProperties<T extends ComponentNames> = {
  colorScheme?: ThemeStyleResolve<T, { colorScheme: string }>;
  variants?: ThemeStyleResolve<T, { variants: any }>;
  sizes?: ThemeStyleResolve<T, { sizes: any }>;
};

export type ThemeConfigProperties<T extends ComponentNames> = {
  [Property in keyof ThemeStyleProperties<T>]: Record<Property, any>;
};

export type VariantsProperties = (props: any) => YoruStyleProperties;
