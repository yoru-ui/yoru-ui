import { Transform, transformConfig } from '../utils';
import { Pseudo, pseudoSelector } from '../pseudo';

let pseudoTransformer: Record<string, Transform> = {};

Object.keys({ ...pseudoSelector, default: '' }).map(selector => {
  pseudoTransformer = {
    ...pseudoTransformer,
    [selector]: transformConfig['pseudo'],
  };
});

type PseudoWithDefault = Pseudo & { default: string };

export default pseudoTransformer as Record<keyof PseudoWithDefault, Transform>;
