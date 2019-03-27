'use strict'

module.exports = {
  moduleFileExtensions: [ 'vue', 'js', 'json' ],
  watchman: false,
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~~/(.*)$': '<rootDir>/$1',
    '^@@/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  snapshotSerializers: [ 'jest-serializer-vue' ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/*.vue'
  ],
  testMatch: [
    '<rootDir>/test/**/*.spec.js'
  ],
  testURL: 'http://localhost/'
}
