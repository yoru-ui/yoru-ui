// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from '../src/select';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

// Basic Controller Stories
export const Basic = Template.bind({});
Basic.argTypes = {};

Basic.args = {
  placeholder: 'This is Placeholder',
  value: null,
  showSearch: true,
};
