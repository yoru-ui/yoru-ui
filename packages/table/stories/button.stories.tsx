// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Table from '../src/table';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => <Table {...args} />;

// Basic Controller Stories
export const Basic = Template.bind({});
Basic.argTypes = {};

Basic.args = {
  columns: [
    {
      title: 'Name',
      selector: 'name',
    },
    {
      title: 'Email',
      selector: 'email',
    },
    {
      title: 'Address',
      selector: 'address',
      render: (text: string, record: any) => {
        return <button onClick={() => alert(`${String(record.name)}`)}>{text}</button>;
      },
    },
  ],
  fields: [
    {
      name: 'John Doe',
      email: 'jhon.doe@gmail.com',
      address: '123, Main Street, New York',
    },
    {
      name: 'Jane Doe',
      email: 'Jane.doe@gmail.com',
      address: '321, Main Street, New York',
    },
    {
      name: 'Wales Doe',
      email: 'wales.doe@gmail.com',
      address: '456, Main Street, New York',
    },
  ],
};
