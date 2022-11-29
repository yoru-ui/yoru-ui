import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePicker } from '../src';

export default {
  title: 'Date Picker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = args => {
  return (
    <div style={{ width: '200px', height: '300px' }}>
      <DatePicker {...args} />
    </div>
  );
};

// Basic Controller Stories
export const Basic = Template.bind({});
