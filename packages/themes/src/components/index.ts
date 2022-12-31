import Button from './button';
import Input from './input';
import Checkbox from './checkbox';
import Switch from './switch';
import Select from './select';
import Radio from './radio';
import DatePicker from './datepicker';
import Text from './text';
import type { ColorScheme } from '../';

export { default as Button } from './button';
export { default as Input } from './input';
export { default as Checkbox } from './checkbox';
export { default as Switch } from './switch';
export { default as Select } from './select';
export { default as Radio } from './radio';
export { default as DatePicker } from './datepicker';
export { default as Text } from './text';

export const components = {
  Button,
  Input,
  Checkbox,
  Switch,
  Select,
  Radio,
  DatePicker,
  Text,
};

type Component = typeof components;
export type ComponentType<T extends keyof typeof components> = Component[T] & {
  colorScheme?: ColorScheme;
  variants?: Component[T] extends { variants: any } ? Component[T]['variants'] : never;
  sizes?: Component[T] extends { sizes: any } ? Component[T]['sizes'] : never;
};
export type ComponentNames = keyof typeof components;
