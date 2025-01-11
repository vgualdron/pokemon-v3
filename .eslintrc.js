module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "globals": {
    "defineNuxtConfig": "readonly",
    "defineNuxtPlugin": "readonly",
    "useState": "readonly"
  },
  "rules": {
    'semi': ["error", "always"],
    'vue/multi-word-component-names': 'off',
  }
};
