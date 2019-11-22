const {jsWithTs: tsjPreset} = require('ts-jest/presets');
module.exports = {
  preset: 'ts-jest',
  'roots': [
    '<rootDir>/src/',
    '<rootDir>/test/',
    '<rootDir>/test-resources/',
  ],
  'transform': {
    ...tsjPreset.transform,
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^test/(.*)$': '<rootDir>/test/$1',
    '^test-resources/(.*)$': '<rootDir>/test-resources/$1',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
  ],
  globals: {
    'ts-jest': {diagnostics: false},
  },
};
