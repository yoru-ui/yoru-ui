import { mergeWith, objectFilter } from '../object';

describe('Should test object utilities', () => {
  it('Should test mergeWith function', () => {
    const obj1 = { a: 1, b: [1, 2], c: { d: 3, e: 4 } };
    const obj2 = { a: 2, b: [3, 4], c: { d: 4, f: 5 }, f: 5 };
    const obj3 = mergeWith(obj1, obj2);
    expect(obj3).toEqual({ a: 2, b: [1, 2, 3, 4], c: { d: 4, e: 4, f: 5 }, f: 5 });
  });

  it('Should test objectFilter function', () => {
    const isEven = (num: number): boolean => num % 2 === 0;

    const numbers = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 };

    const obj2 = objectFilter(numbers, value => isEven(Number(value)));
    expect(obj2).toEqual({ b: 2, d: 4, f: 6, h: 8, j: 10 });
  });
});
