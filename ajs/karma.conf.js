const webpackDevConfig = require('./webpack.test.config');

module.exports = (config) => {
  config.set({

    frameworks: ['jasmine'],

    files: ["src/index.test.js"],

    preprocessors: {
      "src/index.test.js": ["webpack", "sourcemap"]
    },

    webpack: webpackDevConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    reporters: ['spec'],

    plugins: [
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-spec-reporter'),
      require('karma-sourcemap-loader')
    ]
  })
}