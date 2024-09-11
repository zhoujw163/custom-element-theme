# 自定义element ui2 主题

node version: 14.x

安装依赖

```bash
npm i element-theme -g
npm i element-theme-chalk -D

# 执行 et -i 报错 ReferenceError: primordials is not defined 需要安装下面的包 或者 降低node版本到 11.15.0 
npm i cnpm -g
cnpm install element-themex -g
```

生成主题

```bash


# 执行以下命令  会生成  element-variables.scss 文件
et -i 

# 修改element-variables.scss文件变量值，重新生成主题，默认在根目录下生成 theme
et

# 借助 gulp 生成对应命名空间的主题
npm install gulp gulp-clean-css gulp-css-wrap

# 根目录新建 gulpfile.js 文件，代码见 gulpfile.js，执行 gulp 命令即可，会在根目录生成 dist 文件夹，里面就是主题文件
gulp

# customThemeName 变量就是自定义的主题命名空间
```


参考文章：

https://shenxiaobu.github.io/element-ui/el-theme/#%E5%AE%9E%E7%8E%B0%E5%88%87%E6%8D%A2%E4%B8%BB%E9%A2%98%E5%8A%9F%E8%83%BD
