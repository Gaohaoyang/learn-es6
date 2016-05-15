learn ES6, and do some practice.

项目同时使用了 `babel-cli` 和 Webpack + babel

将 es6 转化为 es5 有两种方法。

1. 执行

    ```bash
    npm run build
    ```
    根据`package.json`中的代码

    ```json
    "scripts": {
        "build": "babel src -d lib"
    }
    ```

    输出到`lib`目录下。

2. 执行

    ```bash
    webpack
    ```

    根据`webpack.config.js`中的配置，输出到`dist`目录下。

参考

* [Bable 入门教程 -阮一峰](http://www.ruanyifeng.com/blog/2016/01/babel.html)
