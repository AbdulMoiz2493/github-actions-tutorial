import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import jest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { 
      js,
      jest // Add jest plugin directly
    },
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
    },
    rules: {
      ...jest.configs.recommended.rules // Spread Jest recommended rules directly
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
    plugins: { json },
    language: "json/json",
    rules: {
      "json/*": ["error"] // Apply JSON plugin rules directly
    }
  },
];