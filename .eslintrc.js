module.exports = {
  "root": true,
  "env": {
    browser: true,
    node: true
  },
  "extends": [
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
  // add your custom rules here
  "rules": {
    'semi': [2, "always"]
  }
}
