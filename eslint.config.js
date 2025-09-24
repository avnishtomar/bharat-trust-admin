import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/.cache/**",
      ".eslintcache",
      "vite.config.js",
      "tailwind.config.js",
      "**/*.gen.ts",
      "**/*.gen.js",
      "**/routeTree.gen.js",
    ],
  },
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        alias: {
          map: [
            ["@", "./src"],
            ["@components", "./src/components"],
            ["@pages", "./src/pages"],
            ["@services", "./src/services"],
            ["@hooks", "./src/hooks"],
            ["@store", "./src/store"],
            ["@validations", "./src/validations"],
            ["@imports", "./src/imports"],
          ],
          extensions: [".js", ".jsx", ".json"],
        },
      },
    },
    rules: {
      // Base ESLint rules
      ...js.configs.recommended.rules,

      // React rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // React Refresh rules
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Import rules
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/no-duplicates": "error",
      "import/no-unresolved": [
        "error",
        {
          ignore: ["./routeTree.gen.js"],
        },
      ],
      "import/no-cycle": "warn",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-named-as-default": "warn",
      "import/no-named-as-default-member": "warn",

      // Other rules
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
