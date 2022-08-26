import { TransformConfig } from '../utils';
import colorConfig from './color';
import pseudoConfig from './pseudo';

type ConfigMode = keyof typeof colorConfig | keyof typeof pseudoConfig;

export type Config = Record<ConfigMode, TransformConfig>;

export default {
  ...colorConfig,
  ...pseudoConfig,
};
