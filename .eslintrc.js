module.exports = {
    env: {
        browser: true,
        node: true, 
        es6: true
      },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    // parserOptions: {
    //     tsconfigRootDir: __dirname,
    //     project: ['./tsconfig.json'],
    //   },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
  };