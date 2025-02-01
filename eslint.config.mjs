import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import eslintConfigAirbnbBase from 'eslint-config-airbnb-base'; // Airbnb base config
import eslintPluginImport from 'eslint-plugin-import'; // Airbnb plugin for import rules

/** @type {import('eslint').Linter.Config[]} */
const config = [
  // Global variables for the browser environment
  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },

  // Recommended configs for JS, TypeScript, and React
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Airbnb's base JavaScript style guide (flat config format)
  {
    plugins: {
      import: eslintPluginImport, // Add import plugin
    },
    rules: {
      ...eslintConfigAirbnbBase.rules, // Add Airbnb base rules directly
    },
  },

  // Add Prettier plugin and configuration
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error', // Highlight Prettier issues as ESLint errors
      'no-console': 'warn', // Warn on console.log
      '@typescript-eslint/no-require-imports': 'off', // Allow require if needed
      'no-unused-vars': 'warn',
    },
  },

  // Add Prettier rules override to avoid conflicts with ESLint
  prettier,

  // React-specific settings
  {
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },

  // Node environment for postcss and tailwind config files
  {
    files: ['**/postcss.config.js', '**/tailwind.config.js'],
    languageOptions: {
      globals: {
        module: 'readonly', // Ensure `module` is recognized in these files
      },
    },
  },
];

export default config;
