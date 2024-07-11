module.exports = {
  env: {
    es6: true,
  },
  extends: ["expo", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["import", "prettier"],
  rules: {
    camelcase: "off",
    "class-methods-use-this": "off",
    "global-require": "off",
    "no-await-in-loop": "off",
    "no-param-reassign": ["error", { props: false }],
    "no-plusplus": "off",
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-throw-literal": "off",
    "no-use-before-define": "off",

    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/prefer-default-export": "off",

    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
