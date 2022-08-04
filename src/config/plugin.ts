import { EggPlugin } from 'egg';
export default {
  // static: false,
} as EggPlugin;
export const redis = {
  enable: true,
  package: 'egg-redis',
}