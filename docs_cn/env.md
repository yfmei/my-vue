# 环境搭建
> 磨刀不误砍柴工，先搭好环境
## 安装依赖
```shell script
yarn init -y

# 安装 webpack 开发依赖
yarn add -D webpack webpack-cli eslint

# 代码降级相关依赖
yarn add -D @babel/core @babel/preset-env @babel/register babel-loader

# 单测相关依赖
yarn add -D chai karma karma-chrome-launcher karma-chai karma-mocha karma-webpack mocha

# 端到端测试相关依赖 
yarn add -D nightwatch chromedriver

```
## 配置文件
- eslint
```shell script
# 交互式生成 .eslintrc.js
eslint --init
```

- babel
```shell script
# .babelrc
{
  "presets": [
    "@babel/preset-env"
  ]
}

```
- karma.conf.js
```shell script
# 交互式生成 karma.conf.js 文件
karma init
```
```shell script
// 参考如下设置
testing framework > mocha
use Require.js > no
capture and browsers > chrome
location of your source and test files >
excluded files >
watch all files andr run the tests on change > yes

    # 修改 karma.conf.js 如下配置
    frameworks: ["mocha", "chai"],

    // list of files / patterns to load in the browser
    files: [
      "src/**/*.js", // src 目录下任意层级的 js 文件
      "test/**/*.specs.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/**/*.js": ["webpack"],
      "test/**/*.specs.js": ["webpack"]
    },

    // karma 插件
    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-chrome-launcher",
      "karma-chai"
    ],

    // 支持 es6+ 语法
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [
              {
                loader: "babel-loader"
              }
            ]
          }
        ]
      }
    }
```

- nightwatch.conf.js
```shell script
const chromedriver = require("chromedriver")
module.exports = {
    src_folders: ["test/e2e/specs"], // 测试用例目录
    output_folder: "test/e2e/reports", // 生成测试报告的目录，相对路径，相对于 nightwatch.conf.js
    webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        log_path : "test/e2e/logs", // 指定日志文件目录， 目录需已存在
        port: 9515
    },
    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: "chrome"
            }
        }
    }
}
```

## hello world
- karma
```js
// test/unit/specs/main.specs.js
 export function hello(msg) {
   let str = `hello ${msg}!`
   console.log(str)
   let textNode = document.createTextNode(str)
   document.body.appendChild(textNode)
 }
```

- nightwatch
```js
// test/e2e/specs/main.specs.js
module.exports = {
  "Basic e2e Test": (browser) =>{
    browser
      .url("http://so.com") // 打开 so.com 网页
      .waitForElementVisible("body") // 确认能看到 body 元素
      .setValue("#input", "Nightwatch") // 在搜索框输入 Nightwatch
      .click("#search-button") // 点击搜索
      .pause(1000) // 等待1秒钟
      .assert.containsText("#container", "Nightwatch") // 查询结果包含 Nightwatch
      .end()
  }
}
```

## 常用脚本和依赖版本
```shell script
{
  "script": {
    # 代码格式校验并修复 -c 指定配置文件 --fix 指定修复的文件
    "eslint": "eslint -c .eslintrc.js --fix src/**/*.js test/**/*.js",
    # 单元测试 mocha --require 支持 es6+
    "test": "./node_modules/.bin/mocha --require @babel/register test/specs/*.js",
    # 单元测试 karma
    "unit": "karma start karma.conf.js",
    # 端到端测试 nightwatch
    "e2e": "nightwatch --config nightwatch.conf.js"

  },
  "devDependencies": {
    "@babel/core": "^7.9.0",
    "@babel/preset-env": "^7.9.0",
    "@babel/register": "^7.9.10",
    "babel-loader": "^8.1.0",
    "chai": "^4.2.0",
    "chromedriver": "^87.0.4",
    "clean-webpack-plugin": "^3.0.0",
    "eslint": "^7.16.0",
    "karma": "^4.4.1",
    "karma-chai": "^0.1.0",
    "karma-chrome-launcher": "^3.1.0",
    "karma-mocha": "^1.3.0",
    "karma-webpack": "^4.0.2",
    "mocha": "^7.1.1",
    "nightwatch": "^1.5.1",
    "webpack": "^4.42.1"
  }
}
```
