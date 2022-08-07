/**
 * a Utils for Capitalize a string
 * @param str
 * @returns
 */
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const camelCase = (str: string) => {
  return str
    .replace(/\s(.)/g, $1 => {
      return $1.toUpperCase();
    })
    .replace(/\s/g, '');
};
