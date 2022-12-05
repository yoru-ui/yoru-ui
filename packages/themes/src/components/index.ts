import Button from './button';
import Input from './input';
import Checkbox from './checkbox';
import Switch from './switch';
import DatePicker from './datepicker';
import type { ColorScheme } from '../';

export { default as Button } from './button';
export { default as Input } from './input';
export { default as Checkbox } from './checkbox';
export { default as Switch } from './switch';
export { default as DatePicker } from './datepicker';

export const components = {
  Button,
  Input,
  Checkbox,
  Switch,
  DatePicker,
};

type Component = typeof components;
export type ComponentType<T extends keyof typeof components> = Component[T] & {
  colorScheme?: ColorScheme;
  variants?: Component[T] extends { variants: any } ? Component[T]['variants'] : never;
  sizes?: Component[T] extends { sizes: any } ? Component[T]['sizes'] : never;
};
export type ComponentNames = keyof typeof components;
