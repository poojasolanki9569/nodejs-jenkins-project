module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-console": "warn",
    "no-unused-vars": "warn",
    semi: ["error", "always"],
    quotes: ["error", "single"],
  },
};
