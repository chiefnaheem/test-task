// module.exports = {
//   roots: ['<rootDir>'],
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest',
//   },
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
//   testEnvironment: 'node',
// };
// // module.exports = {
// //   clearMocks: true,
// //   preset: 'ts-jest',
// //   testEnvironment: 'node',
// //   setupFilesAfterEnv: ['<rootDir>/tests/prisma-mock.ts'],
// // };

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'],
  verbose: true,
  forceExit: true,
};