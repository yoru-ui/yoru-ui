import { YoruProvider } from '@yoru-ui/themes';

export const decorators = [
  Story => (
    <YoruProvider
      theme={{
        colors: {
          button: {
            primary: '#fac',
            secondary: '#faa',
          },
        },
        borderRadius: {
          sm: '1rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      }}
      config={{ initialColorMode: 'light', useSystemColorMode: true }}
    >
      <Story />
    </YoruProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
