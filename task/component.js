// automatically fill in component.json‘s script field
const file = require("./fileUtil")

// nodejs fs模块读取文件有问题, 暂时设置默认值
let component = {
    "name": "vue-ugly",
    "version": "0.0.1",
    "main": "src/main.js",
    "description": "Simple, Fast & Composable MVVM for building interactive interfaces",
    "keywords": [
        "mvvm",
        "framework",
        "data binding"
    ],
    "license": "MIT",
    "scripts": []
}

component.scripts = file.getFilePaths("../src")

console.log("done", component)
console.log("done", component.scripts.length)
// write("../component.json", JSON.stringify(component, null, 2))
