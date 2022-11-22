import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Switch } from '../src';

const Template: ComponentStory<typeof Switch> = args => {
  return (
    <div style={{ width: '200px' }}>
      <Switch {...args} />
    </div>
  );
};

export const Basic = Template.bind({});

Basic.argTypes = {
  sizes: {
    options: ['sm', 'md', 'lg'],
    control: {
      type: 'select',
    },
    defaultValue: 'sm',
  },
  checked: {
    options: [true, false],
    control: {
      type: 'select',
    },
  },
};

Basic.args = {
  sizes: 'sm',
  activeColor: 'sky.500',
  inactiveColor: 'gray.300',
  ringColor: 'white',
};

export default {
  title: 'Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const allSizes = () => (
  <div
    style={{
      display: 'flex',
      width: '160px',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <Switch />
    <Switch sizes="md" />
    <Switch sizes="lg" />
  </div>
);
