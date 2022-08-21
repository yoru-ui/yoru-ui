import { mergeWith } from '../object';

describe('Should test object utilities', () => {
  it('Should test mergeWith function', () => {
    const obj1 = { a: 1, b: [1, 2], c: { d: 3, e: 4 } };
    const obj2 = { a: 2, b: [3, 4], c: { d: 4, f: 5 }, f: 5 };
    const obj3 = mergeWith(obj1, obj2);
    expect(obj3).toEqual({ a: 2, b: [1, 2, 3, 4], c: { d: 4, e: 4, f: 5 }, f: 5 });
  });
});
