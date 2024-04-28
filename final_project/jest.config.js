/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // If you have aliases in your webpack config or `tsconfig.json`, map them here
    "^@/(.*)$": "<rootDir>/$1"
  },
  transform: {
    // transform files with ts-jest
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    // pass the TypeScript config to ts-jest
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};