module.exports = {
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/prefer-interface": "off"
  }
};
