import { ThemeProvider, Theme } from '@emotion/react';
import React, { createContext, useEffect } from 'react';

export type YoruTheme = Partial<Theme> | ((outherTheme: Theme) => Theme);

export type ThemeVariant = 'light' | 'dark';

type ThemeConfig = {
  initialColorMode: ThemeVariant;
  useSystemColorMode?: boolean;
};

export type ThemeContextType = ThemeVariant;

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const EmotionThemeProvider: React.FunctionComponent<{
  children?: React.ReactNode;
  theme: YoruTheme;
}> = ({ children, theme }): React.ReactElement => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

type ThemeContextValue = ThemeVariant | 'system';

export const YoruProvider: React.FunctionComponent<{
  children: React.ReactNode;
  config: ThemeConfig;
}> = ({ children, config }): React.ReactElement => {
  const { initialColorMode, useSystemColorMode } = config;

  useEffect(() => {
    setTheme(useSystemColorMode ? 'system' : getTheme(initialColorMode));
  });

  return (
    <ThemeContext.Provider value={initialColorMode}>
      <EmotionThemeProvider theme={{}}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

/**
 * Set the theme based on the color mode
 * @param defaultValue @type {ThemeVariant}
 */
export const setTheme = (value: ThemeContextValue): ThemeVariant => {
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const _value = value === 'system' ? system : value;

  const clxLight = 'yoru-light';
  const clxDark = 'yoru-dark';
  const body = document.body;

  body.classList.add(_value === 'light' ? clxLight : clxDark);
  body.classList.remove(_value === 'light' ? clxDark : clxLight);

  localStorage.setItem('yoru-theme', _value);
  return _value;
};

/**
 * Get theme from localStorage or initialColorMode if not exist
 * @param defaultValue @type {ThemeVariant}
 */
export const getTheme = (defaultValue: ThemeVariant): ThemeVariant => {
  const storedValue = localStorage.getItem('yoru-theme');
  if (storedValue === 'light' || storedValue === 'dark') return storedValue;

  return defaultValue;
};
