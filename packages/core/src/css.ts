import { isObject } from '@yoru-ui/utils';
import { YoruStyleProperties } from './system';
import configs, { Config } from './configs';
import { keyIsPseudoSelector, pseudoSelector } from './pseudo';

const isHasConfig = (key: string): key is keyof Config => key in configs;

export const getCss =
  (style: YoruStyleProperties) =>
  (theme: Record<string, any>): YoruStyleProperties => {
    for (let key of Object.keys(style)) {
      let transform;

      if (isHasConfig(key)) {
        transform = configs[key];
      }

      if (isObject(style[key]) && !transform) {
        transform = configs['object'];
      }

      if (keyIsPseudoSelector(key)) {
        style[pseudoSelector[key]] = style[key];
        delete style[key];
        key = pseudoSelector[key];
      }

      if (transform) {
        style[key] = transform(theme, style[key]);
      }
    }
    return style;
  };

export const tokenToCSSVar =
  (token: string, value: any) =>
  (theme: Record<string, any>): string => {
    const valueStr = String(value);
    const key = token ? `${token}.${valueStr}` : valueStr;

    const transformed = (
      isObject(theme.__cssMap) && key in theme.__cssMap ? theme.__cssMap[key].varRef : value
    ) as string;

    return transformed;
  };
