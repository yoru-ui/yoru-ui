// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta } from '@storybook/react';

import { Button } from '../src/button';

import { YoruProvider } from '@yoru-ui/themes';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const WithVariants = () => {
  return (
    <YoruProvider
      config={{ initialColorMode: 'light', useSystemColorMode: true }}
      theme={{
        colors: {
          primary: 'hotpink',
        },
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <Button variant="primary" className="sdsda">
          Button
        </Button>
        <Button variant="secondary">Button</Button>
        <Button variant="danger">Button</Button>
      </div>
    </YoruProvider>
  );
};
