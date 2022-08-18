import { isObject } from '@yoru-ui/utils';
import { YoruStyleProperties } from './system';
import configs from './configs';
import { transformPseudo, pseudoSelector } from './pseudo';

export const getCss =
  (style: YoruStyleProperties) =>
  (theme: Record<string, any>): YoruStyleProperties => {
    for (const key of Object.keys(style)) {
      let transform;

      if (key in configs) {
        transform = configs[key as keyof typeof configs];
      }

      if (transform) {
        style[key] = transform(theme, style[key]);
      }

      if (key in pseudoSelector) {
        style[pseudoSelector[key as keyof typeof pseudoSelector]] = transformPseudo(style[key]);
        delete style[key];
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
