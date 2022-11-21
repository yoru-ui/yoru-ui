import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Checkbox } from '../src';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
  <Checkbox label="I agree to terms and condition" {...args} />
);

export const Basic = Template.bind({});

Basic.argTypes = {
  sizes: {
    options: ['sm', 'md', 'lg'],
    control: {
      type: 'select',
    },
    defaultValue: 'md',
  },
};

Basic.args = {
  label: 'I agree to terms and condition',
  checked: true,
};
