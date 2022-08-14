// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { YoruProvider } from '@yoru-ui/themes';

import { Button } from '../src/button';

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
    <YoruProvider theme={{}} config={{ initialColorMode: 'light', useSystemColorMode: false }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <Button colorScheme="default" className="sda sada">
          Button
        </Button>
        <Button colorScheme="primary">Button</Button>
        <Button colorScheme="secondary">Button</Button>
        <Button colorScheme="danger">Button</Button>
      </div>
    </YoruProvider>
  );
};
