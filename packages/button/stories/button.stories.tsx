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
    type: 'string',
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
  iconPosition: {
    options: ['left', 'right'],
    control: {
      type: 'select',
    },
  },
};

Basic.args = {
  children: 'Button',
  colorScheme: 'gray',
  sizes: 'md',
  block: false,
  loading: true,
  disabled: false,
  icon: '',
};

export const AllVariant = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <Button colorScheme="pink" variants="solid">
        Button
      </Button>
      <Button colorScheme="pink" variants="outline">
        Button
      </Button>
      <Button colorScheme="pink" variants="ghost" sizes="md">
        Button
      </Button>
      <Button colorScheme="pink" variants="link">
        Button
      </Button>
    </div>
  );
};
