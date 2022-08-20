import { isArray, isObject } from './assertion';

export const mergeWith = (obj1: any, obj2: any) => {
  const obj3 = { ...obj1 };

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

  return obj3;
};
