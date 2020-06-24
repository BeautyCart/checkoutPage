module.exports = {
  setupFiles: ['<rootDir>/__tests__/setupTests.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.test.jsx'],
};
// displayName: 'Components',
// testEnvironment: 'jsdom',
// testMatch: ['**/test/**/*.test.js'],
// setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
// maxConcurrency: 5,
// moduleNameMapper: {
//   '\\.(png)$': '../../test/mocks/fileMock.js'
// },
// transform: {
//   '^.+\\.js$': 'babel-jest'
// },
// collectCoverage: true,
// collectCoverageFrom: ['src/**/*.js'],
// coveragePathIgnorePatterns: ['src/index.js'],
// coverageThreshold: {
//   'global': {
//     'branches': 100,
//     'functions': 100,
//     'lines': 100,
//     'statements': 100
//   }
// }
