export default {
  root: true,
  extends: ['custom'],
  // https://typescript-eslint.io/linting/typed-linting/monorepos/
  parserOptions: {
    project: ['./apps/*/tsconfig.json', './packages/*/tsconfig.json'],
  },
}
