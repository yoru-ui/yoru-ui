import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch } from '../../switch/src/';
import { useTheme } from '../src';

export default {
  title: 'Theme',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => {
  const { theme, setTheme } = useTheme();
  const handleTheme = (checked: boolean): void => {
    if (checked) {
      setTheme('dark');
      return;
    }

    setTheme('light');
  };

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <Switch checked={theme === 'dark'} onChange={handleTheme} {...args} />
    </div>
  );
};

// Basic Controller Stories
export const Basic = Template.bind({});
