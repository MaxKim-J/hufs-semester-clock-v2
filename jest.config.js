process.env = Object.assign(process.env, {
  BASE_URL: 'https://server-api.mock',
  NODE_ENV: 'test',
});

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$':
      'jest-transform-stub',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@shared/(.*)$': '<rootDir>/src/_shared/$1',
    '@style/(.*)$': '<rootDir>/src/_shared/styles/$1',
    '@components/(.*)$': '<rootDir>/src/_shared/components/$1',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$':
      'jest-transform-stub',
  },
  coverageReporters: ['json-summary', 'text', 'lcov'],
};
