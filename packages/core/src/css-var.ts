export const addPrefix = (value: string, prefix = ''): string => {
  return [prefix, escape(value)].filter(Boolean).join('-');
};

export const toVarReference = (name: string, fallback?: string): string => {
  return `var(${escape(name)}${fallback ? `, ${fallback}` : ''})`;
};

export const toVarDefinition = (value: string, prefix = ''): string => {
  return `--${addPrefix(value, prefix)}`;
};

export const cssVar = (name: string, fallback?: string, cssVarPrefix?: string) => {
  const cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback),
  };
};
