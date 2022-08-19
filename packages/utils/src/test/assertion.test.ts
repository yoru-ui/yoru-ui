import { isArray, isObject } from '../assertion';
import { runIfFN } from '../function';
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

  it('Should test runIfFn to return the actual data', () => {
    const colorSceheme = () => {
      return {
        backgroundColor: 'colors.sky[500]',
        color: 'white',
        _hover: {
          background: 'colors.sky[600]',
        },
      };
    };
    expect(runIfFN(colorSceheme)).toEqual({
      backgroundColor: 'colors.sky[500]',
      color: 'white',
      _hover: {
        background: 'colors.sky[600]',
      },
    });
  });
});
