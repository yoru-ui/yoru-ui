// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

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
  sizes: {
    options: ['sm', 'md', 'lg'],
    control: {
      type: 'select',
    },
  },
  block: {
    control: 'boolean',
  },
  variants: {
    options: ['solid', 'outline', 'ghost', 'link'],
    control: {
      type: 'select',
    },
  },
};

Basic.args = {
  children: 'Button',
  colorScheme: 'default',
  sizes: 'md',
  block: false,
};

export const AllColorScheme = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <Button colorScheme="default" className="sda sada">
        Button
      </Button>
      <Button colorScheme="primary">Button</Button>
      <Button colorScheme="secondary">Button</Button>
      <Button colorScheme="danger">Button</Button>
    </div>
  );
};
