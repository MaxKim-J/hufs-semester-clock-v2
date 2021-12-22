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
  },
};
