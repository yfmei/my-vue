const chromedriver = require("chromedriver");
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
};
