import { Transform, transformConfig } from '../utils';
import { Pseudo, pseudoSelector } from '../pseudo';

let pseudoTransformer: Record<string, Transform> = {};

Object.keys({ ...pseudoSelector, object: '' }).map(selector => {
  pseudoTransformer = {
    ...pseudoTransformer,
    [selector]: transformConfig['pseudo'],
  };
});

type PseudoWithObject = Pseudo & { object: string };

export default pseudoTransformer as Record<keyof PseudoWithObject, Transform>;
