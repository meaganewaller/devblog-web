import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
// import "../src/tailwind.css";
import "../src/styles/fonts.css";
import "../src/styles/globals.css";
import "../src/styles/nprogress.css";
/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
// import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],

  globalTypes: {
    darkMode: {
      defaultValue: true, // Enable dark mode by default on all stories
    },
    // Optional (Default: 'dark')
    // className: {
    //   defaultValue: "custom-class", // Set your custom dark mode class name
    // },
  },
};

export default preview;
