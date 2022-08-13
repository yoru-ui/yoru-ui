// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../src/button';

import { YoruProvider } from '@yoru-ui/themes';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

// Basic Controller Stories
export const Basic = Template.bind({});
Basic.argTypes = {
  colorScheme: {
    options: ['default', 'primary', 'secondary', 'danger'],
    control: {
      type: 'select',
    },
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: {
      type: 'select',
    },
  },
  block: {
    control: 'boolean',
  },
};

Basic.args = {
  children: 'Button',
  colorScheme: 'default',
  size: 'md',
  block: false,
};

export const AllColorScheme = () => {
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
