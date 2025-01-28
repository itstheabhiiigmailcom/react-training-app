import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },

  // Add global variables for the browser environment
  { languageOptions: { globals: globals.browser } },

  // Recommended configs for JS, TypeScript, and React
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Add Prettier plugin and configuration
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error', // Highlight Prettier issues as ESLint errors
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
];
// npx eslint .
