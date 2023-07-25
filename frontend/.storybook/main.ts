import type { StorybookConfig } from '@storybook/nextjs';
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: true,
      },
    },
    "storybook-tailwind-dark-mode",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [
    "../public",
  ],
  webpackFinal: async (config) => {
    if (config?.resolve?.alias) {}
    return config;
  }
}

export default config;
