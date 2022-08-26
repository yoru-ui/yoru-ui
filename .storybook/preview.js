import { YoruProvider } from '@yoru-ui/themes';

export const decorators = [
  Story => (
    <YoruProvider
      theme={{
        colors: {
          primary: '#fac',
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
