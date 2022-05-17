module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "@arlequins/typescript"],
  plugins: ["svelte3", "@typescript-eslint"],
  ignorePatterns: ["*.cjs"],
  overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
  settings: {
    "svelte3/typescript": () => require("typescript"),
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    "prettier/prettier": [0],
    "import/no-extraneous-dependencies": [0],
    "filenames/match-regex": [0],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["../*", "!@app/*", "!@typings/*", "!@custom/*"],
            message: "relative path is deprecated, except the alias path $lib.",
          },
        ],
      },
    ],
  },
};
