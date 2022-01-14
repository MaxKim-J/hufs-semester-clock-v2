process.env = Object.assign(process.env, {
  BASE_URL: 'https://server-api.mock',
  NODE_ENV: 'test',
});

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@shared/(.*)$': '<rootDir>/src/_shared/$1',
    '@style/(.*)$': '<rootDir>/src/_shared/styles/$1',
    '@components/(.*)$': '<rootDir>/src/_shared/components/$1',
    '.(css)$': '<rootDir>/src/_shared/test/mock/fileMock.ts',
  },
};
