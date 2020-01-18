# vue 源码解析
> 早就想研究 vue 的源码了，但是迟迟没有行动。一是不知道从哪里开始看，二是 vue 的技术栈对我来说太陌生了，
> 本地跑不起来。跑不起来对天资不够聪颖的我来说，学习起来实在是太难了。
> 后来把 vue 源码下载到本地，发现切换分支就可以直接查看 vue 最初版本的代码了。
> 接下来就是去恶补 vue 相关技术栈，主要是之前偷懒没做的测试。总的来说学习曲线还算比较曲折，
> 入门了单测和自动化测试后，发现不如索性从零开始重构一下 vue 吧，顺便完善自己的技术栈。

## 背景
- vue 技术栈：

版本| node 包管理器 | 构建工具 | js校验工具 | 持续集成 | 浏览器自动化测试 | 类型 | 兼容性 | 单元测试
---|---|---|---|---|---|---|---|---
0.10 | bower | grunt | jshint | travis | casperJs | | mocha
0.11| bower | grunt | jshint | travis | casperJs | | mocha
0.12| bower | grunt + webpack | eslint | circleci | casperJs | | mocha
1.0| bower | webpack | eslint | circleci | casperJs | typescript | babel | mocha
2.6| npm | webpack | eslint | circleci | casperJs | typescript | babel | mocha
3.0| npm | webpack |

- 本教程采用如下技术栈: 

npm + webpack + eslint + karma + mocha + chai + babel(时间问题，typescript 后续加上)
