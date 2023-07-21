import type { StorybookConfig } from "@storybook/nextjs";
import type { Options } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "",
  ],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
      },
    },
    "storybook-addon-react-router-v6",
    "storybook-addon-pseudo-states",
    "@nrwl/react/plugins/storybook",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: { disableTelemetry: true },
  webpackFinal: async (config, { configType }: Options) => {
    return config;
  },
};

module.exports = config;

// export const rootMain: StorybookConfig = {
//   stories: [],
//   addons: [
//     {
//       name: '@storybook/addon-essentials',
//       options: {
//         actions: false,
//       },
//     },
//   ],
//   framework: {
//     name: "@storybook/nextjs",
//     options: {},
//   }
// };
//
// // const config: StorybookConfig = {
// //   stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
// //   addons: [
// //     "@storybook/addon-links",
// //     "@storybook/addon-essentials",
// //     "@storybook/addon-interactions",
// //     "storybook-tailwind-dark-mode",
// //   ],
// //   framework: {
// //     name: "@storybook/nextjs",
// //     options: {},
// //   },
// // };
// //
// // export default config;
