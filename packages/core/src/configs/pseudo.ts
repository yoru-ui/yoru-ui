import { Transform, transformConfig } from '../utils';
import { pseudoSelector } from '../pseudo';

let pseudoTransformer: Record<string, Transform> = {};

Object.keys(pseudoSelector).map(selector => {
  pseudoTransformer = {
    ...pseudoTransformer,
    [selector]: transformConfig['pseudo'],
  };
});

export default pseudoTransformer;
