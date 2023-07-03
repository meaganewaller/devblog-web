import React, { useEffect } from "react";
import type { Preview } from "@storybook/react";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/nprogress.css";

const preview: Preview = {
  globals: {
    darkMode: false,
  },
  decorators: [
    (Story, ctx) => {
      useEffect(() => {
        if (ctx.globals.darkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [ctx]);

      return (
        <React.StrictMode>
          <div className="text-primary-darkest-600 dark:text-accent-first-lighter-200">
            <Story />
          </div>
        </React.StrictMode>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
  },
};

export default preview;
