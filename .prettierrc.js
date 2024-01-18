import prettierConfig from "@meaganewaller/prettier-config";

export default {
  ...prettierConfig,
  excludeFiles: ["**/*.test.ts", "**/*.test.tsx"],
};
