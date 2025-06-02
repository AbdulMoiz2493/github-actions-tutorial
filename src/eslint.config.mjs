import js from "@eslint/js";
import globals from "globals";
import jsonc from "eslint-plugin-jsonc";
import jest from "eslint-plugin-jest";

export default [
  // Global ignores to exclude package-lock.json and package.json
  {
    ignores: ["package-lock.json", "package.json", "**/package-lock.json", "**/package.json"]
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { 
      js,
      jest
    },
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
    },
    rules: {
      ...jest.configs.recommended.rules
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" }
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node }
  },
  {
    files: ["**/*.json"],
    plugins: { jsonc },
    rules: {
      "jsonc/no-comments": "error",
      "jsonc/valid-json-number": "error"
    }
  },
];