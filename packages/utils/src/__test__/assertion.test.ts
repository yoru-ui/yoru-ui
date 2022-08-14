import { isArray, isObject } from '../assertion';

describe('Should test assertion utility', () => {
  it('Should test isArray utils', () => {
    expect(isArray([])).toBe(true);
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray('1')).toBe(false);
  });

  it('Should test isObject utils', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject('1')).toBe(false);
  });
});
