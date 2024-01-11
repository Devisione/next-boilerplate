const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    "import/no-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "unicorn/filename-case": "off",

    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["@domains/[a-zA-Z]*/**"],
            message:
              "File not exposed from the module. Consider exporting it from an index",
          },
          {
            group: ["**/domains/**"],
            message:
              "No need to use relative imports, use aliases instead - @domains",
          },
          {
            group: ["**/shared/**"],
            message:
              "No need to use relative imports, use aliases instead - @shared",
          },
          {
            group: ["**/entities/**"],
            message:
              "No need to use relative imports, use aliases instead - @entities",
          },
          {
            group: ["**/features/**"],
            message:
              "No need to use relative imports, use aliases instead - @features",
          },
        ],
      },
    ],
  },
};
