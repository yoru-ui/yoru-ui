import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePicker } from '../src';

export default {
  title: 'Date Picker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = args => {
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  return (
    <div style={{ width: '260px', height: '100%' }}>
      <DatePicker
        selectedDate={selectedDate}
        onChange={(date: Date) => setSelectedDate(date)}
        {...args}
      />
    </div>
  );
};

// Basic Controller Stories
export const Basic = Template.bind({});

Basic.argTypes = {
  selectedDate: { control: { disable: true } },
  format: { type: { name: 'string' } },
};
