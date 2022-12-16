import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../src';
import SearchIcon from '../src/searchIcon';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => {
  return (
    <div>
      <Input {...args} />
    </div>
  );
};

// Basic Controller Stories
export const Basic = Template.bind({});
Basic.argTypes = {
  placeholder: {
    defaultValue: 'Search...',
    control: {
      type: 'text',
    },
  },
};

export const WithPrefix = () => {
  return (
    <div style={{ width: '220px' }}>
      <Input placeholder="Search..." prefix={<SearchIcon />}></Input>
    </div>
  );
};

export const WithSuffix = () => {
  return (
    <div style={{ width: '220px' }}>
      <Input placeholder="Search..." suffix={<SearchIcon />}></Input>
    </div>
  );
};
