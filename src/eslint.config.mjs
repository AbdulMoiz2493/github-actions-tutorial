import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import jest from "eslint-plugin-jest";

export default [
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
    language: "json/json",
    rules: {
      // Use rules supported by @eslint/json
      "json/syntax-error": "error" // Ensures JSON files are syntactically valid
    }
  },
];