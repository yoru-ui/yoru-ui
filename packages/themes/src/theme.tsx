import { ThemeProvider, Theme, ThemeProviderProps, Global } from '@emotion/react';
import { mergeWith } from '@yoru-ui/utils';
import React, { createContext, useEffect, useState, useMemo } from 'react';
import { yoruCSSVars } from '@yoru-ui/core';
import cssVars from './foundations';

export type YoruTheme = Partial<Theme> | ((outherTheme: Theme) => Theme);

export type ThemeVariant = 'light' | 'dark' | 'system';

type ThemeConfig = {
  initialColorMode: ThemeVariant;
  useSystemColorMode?: boolean;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const EmotionThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
  theme,
}): React.ReactElement => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export type ThemeContextValue = {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
};

export const YoruProvider: React.FunctionComponent<{
  children: React.ReactNode;
  config: ThemeConfig;
  theme: ThemeProviderProps['theme'];
}> = ({ children, config, theme }): React.ReactElement => {
  const { initialColorMode, useSystemColorMode } = config;
  const [value, setValue] = useState<ThemeVariant | 'system'>(
    useSystemColorMode ? 'system' : getTheme(initialColorMode),
  );

  const memoizedTheme = useMemo(
    () => ({
      theme: value,
      setTheme: setValue,
    }),
    [value],
  );

  useEffect(() => {
    setTheme(value);
  }, [value]);

  return (
    <ThemeContext.Provider value={memoizedTheme}>
      <EmotionThemeProvider theme={{ ...yoruCSSVars(mergeWith(cssVars, theme)) }}>
        <CSSVar />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

const CSSVar: React.FunctionComponent<{ root?: string }> = ({ root = ':host, :root' }) => {
  const selector = [root, '[data-theme]'].join(',');
  return <Global styles={(theme: any) => ({ [selector]: theme.__cssVar })} />;
};

/**
 * Set the theme based on the color mode
 * @param defaultValue @type {ThemeVariant}
 */
export const setTheme = (value: ThemeVariant): ThemeVariant => {
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
