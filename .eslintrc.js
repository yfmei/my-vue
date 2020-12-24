module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "one-var": "off", // 禁用多行变量
        camelcase: ["warn", { properties: "never" }], // 驼峰变量命名,警告，而且属性名不会要求是驼峰，变量名要求是
        "comma-dangle": "error", // 禁止在数组、对象、函数参数最后面添加拖尾逗号
        "comma-spacing": "error", // 逗号后非行尾需要加空格
        "comma-style": "error", // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
        "constructor-super": "error", // 派生类中的构造函数必须调用 super()。非派生类的构造函数不能调用 super()。[字面量继承其他类的类就是派生类]
        "eol-last": "error", // 要求在非空文件末尾至少存在一行空行
        eqeqeq: "warn", // 必须使用全等
        "func-call-spacing": "error", // 函数执行需要紧挨着(括号, alert(1) ok 不要alert  (2)
        "guard-for-in": 0, // for in循环要用if语句过滤
        // allow async-await
        "generator-star-spacing": "off",
        "key-spacing": "warn", // 冒号前面不能有空格, 后面必须有空格
        "no-const-assign": "error", // 禁止修改const声明的变量

        "no-dupe-args": "error", // 函数参数不能重复
        "no-duplicate-case": "error", // switch中的case标签不能重复
        "no-eval": "warn", // 禁止使用eval
        "no-lonely-if": "error", // 禁止else语句内只有if语句
        "no-new-func": "warn", // 禁止使用new Function
        "no-new-object": "warn", // 禁止使用new Object()
        "no-redeclare": "error", // 禁止重复声明变量
        "no-spaced-func": "error", // 函数调用时 函数名与()之间不能有空格
        "no-this-before-super": "off", // 在调用super()之前不能使用this或super
        "no-undef": "warn", // 不能有未定义的变量
        // 要求构造函数首字母大写
        "new-cap": [
            2,
            {
                newIsCap: true,
                capIsNew: false
            }
        ],
        "no-multiple-empty-lines": ["warn", { max: 2 }], // 禁止多行空行, 最多两行
        "no-trailing-spaces": ["warn"], // 禁用行尾空格
        "no-unreachable": "error", // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
        // 参数未使用提示
        "no-unused-vars": ["warn", { var: "all", all: "all" }],
        "no-var": "error", // 要求使用 let 或 const 而不是 var
        "padded-blocks": ["warn", "never"], // {} 内第一行与最后一行不允许有空行
        "prefer-rest-params": "warn", // 使用rest 参数代替 arguments
        quotes: ["warn", "double"], // 字符串都采用双引号
        "semi-spacing": "warn", // 分号前不加空格
        "sort-vars": "warn", // 变量定义按照字典序排序
        "space-before-blocks": "warn", // {} 前必须有空格, 例如 function() {}
        // 函数左括号左边不能有空格
        "space-before-function-paren": ["error", { anonymous: "always", named: "never" }],
        "spaced-comment": ["error", "always"], // 注释 // 前后需要增加空格
        // 操作符周围有空格 auto
        "space-infix-ops": ["error", { int32Hint: false }],
        "vue/html-self-closing": "off", // 强制html标签自关闭
        "vue/max-attributes-per-line": "off", // html标签 属性每行最大限制
        indent: "off", // 关闭默认缩进校验, 启用 vue/script-indent 校验
        // 行缩进2个空格
        // "vue/script-indent": ["error", 2, { baseIndent: 1, switchCase: 1 }],
        "vue/require-v-for-key": "off", // 强制 v-for 需要key
        "yield-star-spacing": ["error", "after"] // 强制在 * 和 参数之间有空格 yield* other();
    },
    overrides: [
        {
            files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
            env: {
                mocha: true
            }
        }
    ]
};
