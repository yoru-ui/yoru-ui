import { isArray, isObject } from './assertion';

type FilterFn<T> = (value: any, key: string, object: T) => boolean;

export const mergeWith = (obj1: any, obj2: any) => {
  const obj3 = { ...obj1 };

  if (typeof obj2 === 'object') {
    Object.keys(obj2).forEach(key => {
      if (isObject(obj3[key])) {
        obj3[key] = mergeWith(obj3[key], obj2[key]);
        return;
      }

      if (isArray(obj3[key])) {
        obj3[key] = [...obj3[key], ...obj2[key]];
        return;
      }

      obj3[key] = obj2[key];
    });
  }

  return obj3;
};

export function objectFilter<T extends Record<string, any>>(object: T, fn: FilterFn<T>) {
  const result: Record<string, any> = {};

  Object.keys(object).forEach(key => {
    const value = object[key];
    const shouldPass = fn(value, key, object);
    if (shouldPass && value) {
      result[key] = value;
    }
  });

  return result;
}
