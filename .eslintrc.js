module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
  },
  env: {
    jest: true,
  },
}
