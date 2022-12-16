import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../src';

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => {
  return <Text {...args} />;
};

// Basic Controller Stories
export const Basic = Template.bind({});

export const Link = () => {
  return (
    <Text>
      Read Yoru UI's{' '}
      <Text variant="link" target="_blank" fw="bold" color="pink.500" href="https://github.com">
        docs
      </Text>{' '}
      to get the latest component update.
    </Text>
  );
};

Basic.argTypes = {
  children: {
    defaultValue:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  size: {
    defaultValue: 'base',
    control: {
      type: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
  },
  align: {
    defaultValue: 'left',
    control: {
      type: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
  },
  fw: {
    defaultValue: 'regular',
    control: {
      type: 'select',
      options: ['lighter', 'normal', 'bold'],
    },
  },
  fs: {
    defaultValue: 'normal',
    control: {
      type: 'select',
      options: ['normal', 'italic'],
    },
  },
  as: {
    defaultValue: 'p',
    control: {
      type: 'text',
    },
  },
  color: {
    defaultValue: '#333333',
    control: {
      type: 'color',
    },
  },
};
