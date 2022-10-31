import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../src';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => {
  return (
    <div style={{ width: '200px' }}>
      <Input {...args} />
    </div>
  );
};

// Basic Controller Stories
export const Basic = Template.bind({});

export const WithPrefix = () => {
  return (
    <div style={{ width: '220px' }}>
      <Input prefix={<span style={{ padding: '0 10px' }}>Search</span>}></Input>
    </div>
  );
};

export const WithSuffix = () => {
  return (
    <div style={{ width: '220px' }}>
      <Input suffix={<span style={{ padding: '0 10px 0 10px' }}>Search hello</span>}></Input>
    </div>
  );
};
