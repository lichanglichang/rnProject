module.exports = {
  root: true,
  extends: ['@fruits-chain/eslint-config-rn'],
  rules: {
    'no-console': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-explicit-any': 1,
    'react/jsx-boolean-value': 'warn',
    'react/jsx-key': [
      'warn',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
      },
    ],
    // 待追加
    'react/no-unstable-nested-components': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ]
  },
  globals: {
    NodeJS: true,
    defs: true,
    // API: true,
    // window: true,
  },
}
