module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    indent: "tab",
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
