import { TransformConfig } from '../utils';
import colorConfig from './color';
import pseudoConfig from './pseudo';
import shadowConfig from './shadows';
import textConfig from './text';
import lineHeight from './lineHeight';

type ConfigMode =
  | keyof typeof colorConfig
  | keyof typeof pseudoConfig
  | keyof typeof shadowConfig
  | keyof typeof textConfig
  | keyof typeof lineHeight;

export type Config = Record<ConfigMode, TransformConfig>;

export default {
  ...colorConfig,
  ...pseudoConfig,
  ...shadowConfig,
  ...textConfig,
  ...lineHeight,
};
