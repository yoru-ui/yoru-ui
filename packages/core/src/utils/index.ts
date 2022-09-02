import configs from '../configs';
import { tokenToCSSVar } from '../css';
import { Pseudo, pseudoSelector } from '../pseudo';
import { Theme, YoruStyleProperties } from '../system';
import { runIfFN } from '@yoru-ui/utils';

export type Transform = (theme: Theme, value: string | object) => object;

export type TransformConfig = Record<string, Transform>;

const transformCSS =
  (token: string): Transform =>
  (theme: Theme, value: string | object) => {
    let css = {};

    /**
     * Recursively transform pseudo properties
     * @param style @type {YoruStyleProperties | string}
     */
    if (typeof value === 'object') {
      Object.entries(value).forEach(([pseudo, _value]: [string, string | YoruStyleProperties]) => {
        const transform =
          pseudo in configs ? configs[pseudo as keyof typeof configs](theme, _value) : _value;
        css = {
          ...css,
          [pseudoSelector[pseudo as keyof Pseudo] ?? pseudo]: runIfFN(transform),
        };
      });
      return css;
    }
    const _value = tokenToCSSVar(token, value)(theme);

    return _value;
  };

export const transformConfig: TransformConfig = {
  color: transformCSS('colors'),
  pseudo: transformCSS('pseudo'),
  shadows: transformCSS('shadows'),
};
