const path = require('path');

module.exports = {
  stories: ['../packages/**/stories/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@yoru-ui/react': path.resolve(__dirname, '../packages/react/src'),
    };
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  typescript: {
    reactDocgen: false,
  },
};
