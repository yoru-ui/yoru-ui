export const mode =
  <T>(light: T, dark: T) =>
  ({ colorMode }: { colorMode?: string }) =>
    colorMode === 'light' ? light : dark;
