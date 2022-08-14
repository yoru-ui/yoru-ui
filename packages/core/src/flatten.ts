import { isObject, isArray } from '@yoru-ui/utils';

export const fromEntries = <T extends unknown>(entries: [string, any][]) =>
  entries.reduce((carry, [key, value]) => {
    carry[key] = value;
    return carry;
  }, {} as Record<string, any>) as T;

export type FlattenTokensParam = {
  tokens?: object;
  semanticTokens?: object;
};

export type PlainToken = { value: string | number };

export type FlatToken = PlainToken;
export type FlatTokens = Record<string, FlatToken>;

export function flatten<Value = any>(
  target: Record<string, Value> | undefined | null,
  maxDepth = Infinity,
) {
  if ((!isObject(target) && !isArray(target)) || !maxDepth) {
    return target;
  }

  return Object.entries(target).reduce((result, [key, value]) => {
    if (isObject(value) || isArray(value)) {
      Object.entries(flatten(value, maxDepth - 1)).forEach(([childKey, childValue]) => {
        // e.g. gray.500
        result[`${key}.${childKey}`] = childValue;
      });
    } else {
      // e.g. transparent
      result[key] = value;
    }

    return result;
  }, {} as any);
}

export function flattenTokens<T extends FlattenTokensParam>({ tokens }: T) {
  const tokenEntries = Object.entries(flatten(tokens) ?? {}).map(([token, value]) => {
    const enhancedToken = { value };
    return [token, enhancedToken] as [string, PlainToken];
  });

  return fromEntries([...tokenEntries]);
}
