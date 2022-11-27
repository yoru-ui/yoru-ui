import Button from './button';
import Input from './input';
import Checkbox from './checkbox';
import Switch from './switch';

export { default as Button } from './button';
export { default as Input } from './input';
export { default as Checkbox } from './checkbox';
export { default as Switch } from './switch';

export const components = {
  Button,
  Input,
  Checkbox,
  Switch,
};

type Component = typeof components;
export type ComponentType<T extends keyof typeof components> = Component[T] & {
  colorScheme?: Component[T] extends { colorScheme: any } ? Component[T]['colorScheme'] : never;
  variants?: Component[T] extends { variants: any } ? Component[T]['variants'] : never;
  sizes?: Component[T] extends { sizes: any } ? Component[T]['sizes'] : never;
};
export type ComponentNames = keyof typeof components;
