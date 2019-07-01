## 入门

### 简介

* JavaScript 是ES5的实现。
* TypeScript是ES6的实现，是JavaScript的超集。
* Angule2框架就是由TypeScripe实现的
* Angule是由Goggle开发的。TypeScript是微软开发的。而Angule2框架就是由TypeScripe实现的所以TypeScript是由Goggle和MicroSoft共同支持的。是前端新的发展方向，必须掌握。

### 优势

* 支持ES6规范
* 强大的IDE支持 
  * 类型检查 减少犯错 
  * 语法提示 提升开发效率 
  * 重构代码 提升代码质量与开发效率 
* Angular2的开发语言
  * 帮助更好的学习Angular2框架

### 搭建TypeScript开发环境 

* compiler/在线compiler

  * 不是所有的浏览器都支持ES5，所以需要compiler将TypeScript代码转化为JavaScript代码

  * 安装：1. npm install -g typescript

       	2.使用tsc命令即可

  * VScode配置自动编译TS的环境

    1.确保安装了node.js

    2.安装typescript模块 `npm install -g typescript`

    3.在项目中输入 `ctrl+~` 进入项目终端，输入 `tes --init` 创建 tsconfig.json配置文件

    4.在终端输入 `tsc -w` 完成配置，在之后只要将ts文件保存自动生成js文件



## 新特性

### 字符串新特性

* 多行字符串  ``
* 字符串模板 `${}`
* 自动拆分字符串
* ![1560827518990](C:\Users\李卓\AppData\Local\Temp\1560827518990.png)

![1560827545067](C:\Users\李卓\AppData\Local\Temp\1560827545067.png)