import { runIfFN } from '../function';

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
