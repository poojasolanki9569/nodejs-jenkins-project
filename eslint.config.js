// eslint.config.js
module.exports = {
  languageOptions: {
    globals: {
      browser: true, // Define global variables for the browser environment
      es2021: true, // Enable ES2021 syntax
    },
  },
  extends: [
    "eslint:recommended", // Use recommended ESLint rules
    "plugin:react/recommended", // Use recommended rules for React
  ],
  parserOptions: {
    ecmaVersion: 12, // Use ECMAScript 2021 syntax
    sourceType: "module", // Enable ECMAScript modules
  },
  rules: {
    "no-console": "warn", // Warn when console statements are used
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Error for unused variables, but ignore variables starting with '_'
    semi: ["error", "always"], // Enforce the use of semicolons
    indent: ["error", 2], // Enforce 2-space indentation
    quotes: ["error", "single"], // Enforce single quotes
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the version of React
    },
  },
};
