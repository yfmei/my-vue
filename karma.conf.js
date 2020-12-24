// Karma configuration
// Generated on Thu Dec 24 2020 20:58:10 GMT+0800 (中国标准时间)
const webpackConfig = require("./build/webpack.config")
module.exports = function(config) {
  config.set({
    // 路径前缀, 用于 files 和 exclude
    basePath: '',

    // 注册全局变量
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', "chai"],

    // 提供给浏览器的源文件和测试文件
    files: [
      "src/*.js", // src 目录下任意层级的 js 文件
      "test/**/*.specs.js"
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // 文件提供给浏览器之前进行预处理
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/**/*.js": ["webpack"],
      "test/**/*.specs.js": ["webpack"]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // 日志级别
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // karma 插件
    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-chrome-launcher",
      "karma-chai"
    ],

    // 支持 es6+ 语法
    webpack: webpackConfig
  })
}
