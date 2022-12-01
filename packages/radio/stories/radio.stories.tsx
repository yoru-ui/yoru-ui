import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Radio } from '../src';

const Template: ComponentStory<typeof Radio> = args => {
  return (
    <div style={{ width: '200px' }}>
      <Radio label="Yoru" name="group-1" value="male" {...args} />
    </div>
  );
};

export const Basic = Template.bind({});

export const RadioGroup = () => {
  return (
    <div style={{ width: '200px' }}>
      <div style={{ marginBottom: 10 }}>
        <p style={{ padding: 0, margin: 0, marginBottom: 5 }}>Gender</p>
        <Radio label="Male" name="group-1" value="male" />
        <Radio label="Female" name="group-1" value="female" />
      </div>

      <div>
        <p style={{ padding: 0, margin: 0, marginBottom: 5 }}>Age</p>
        <Radio label="Below 20" name="group-2" value="<20" />
        <Radio label="Under 20" name="group-2" value=">20" />
      </div>
    </div>
  );
};

Basic.argTypes = {
  sizes: {
    control: {
      type: 'select',
      options: ['sm', 'md', 'lg'],
    },
    defaultValue: 'md',
  },
  background: {
    control: {
      type: 'color',
    },
    defaultValue: 'pink.500',
  },
  dotColor: {
    control: {
      type: 'color',
    },
    defaultValue: 'white',
  },
};

export default {
  title: 'Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;
