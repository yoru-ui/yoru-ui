export const isObject = (value: any): value is Record<string, any> => {
  if (isArray(value) || value === null) return false;
  return typeof value === 'object' || typeof value === 'function';
};

export const isArray = (value: any): value is any[] => {
  return Array.isArray(value);
};
