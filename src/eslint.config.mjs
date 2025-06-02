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
      // Use specific rules for JSON validation
      "jsonc/no-comments": "error", // Disallow comments in JSON
      "jsonc/valid-json-number": "error" // Ensure valid JSON numbers
    }
  },
];