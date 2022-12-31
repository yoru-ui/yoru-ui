// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from '../src/select';
import { SelectOption } from '../src/Select.interface';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;
const options = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
  {
    label: 'Option 4',
    value: 'option4',
  },
  {
    label: 'Option 5',
    value: 'option5',
  },
  {
    label: 'Option 6',
    value: 'option6',
  },
  {
    label: 'Option 7',
    value: 'option7',
  },
  {
    label: 'Option 8',
    value: 'option8',
  },
  {
    label: 'Option 9',
    value: 'option9',
  },
  {
    label: 'Option 10',
    value: 'option10',
  },
];
// Basic Controller Stories
export const Basic = Template.bind({});
Basic.argTypes = {};

Basic.args = {
  placeholder: 'This is Placeholder',
  value: {
    label: 'Option 1',
    value: 'option1',
  },
  showSearch: false,
  options: options,
};

export const SingleSelect = () => {
  const [value, setValue] = React.useState<SelectOption | null>(null);

  const handleChange = (value: SelectOption | null) => {
    setValue(value);
  };

  return (
    <Select
      value={value}
      styles={{ width: '300px' }}
      onChange={handleChange}
      placeholder="Controlled select"
      options={options}
    />
  );
};

export const MultipleSelect = () => {
  const [value, setValue] = React.useState<SelectOption[]>([]);

  const handleChange = (value: SelectOption[]) => {
    setValue(value);
  };

  return (
    <Select
      value={value}
      styles={{ width: '400px' }}
      onChange={handleChange}
      placeholder="Controlled select Multiple"
      isMultiple
      options={options}
    />
  );
};
