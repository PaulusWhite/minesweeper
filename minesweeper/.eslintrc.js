module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "no-unused-vars": "warn",
    "no-console": "warn",
  },
};
