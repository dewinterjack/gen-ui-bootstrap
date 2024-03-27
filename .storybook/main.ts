const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-addon-module-mock',
  ],
  framework: {
    name: '@storybook/nextjs',
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../public'],
  features: {
    experimentalRSC: true
  }
}
export default config
