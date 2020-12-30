# cli3-vue2-mobile

###### 脚手架：@vue/cli@3.12.0，用此脚手架搭建出来的SPA（single page application）应用，其余的一些工具比如vue-router，sass，eslint，axios，vuex，vant都是一步一步引入进来的；
- src/api/：把所有跟接口请求相关的都统一在此文件下去集中管理，交互插件用的是axios
- src/assets：系统相关的静态资源
- src/components：系统相关的一些组件，公共组件，全局组件
- src/views：业务组件对应的视图
- src/router：整个系统配置路由的地方，src/router/routesMap.js此文件是用来配置静态路由和动态路由的地方，动态路由用来处理权限相关的
- src/store：处理vuex状态管理器相关的
- src/styles/utilCss.scss：系统中用到的全局样式对应的变量，在此文件夹声明好之后，可以在每个组件中去引用
- src/utils：系统用到的公共资源，以后在此文件夹下去扩充
- vant是一个基于vue2的移动端UI组件库，具体可以参考：[vant官方文档](https://youzan.github.io/vant/#/zh-CN/home)，在本项目中采用的是babel-plugin-import插件进行按需引入的，用到的组件可在src/utils/vantUI.js此文件夹下扩充；
- 适配：适配采用的是一款插件：postcss-px-to-viewport来处理的，把px转化成vw来处理，未使用rem来处理，这里注意一下；如果是750的设计稿，就直接按照设计稿给出的尺寸去写代码，此插件会自动转换此vw去适配；详情查看此插件：[官方API](https://github.com/evrone/postcss-px-to-viewport)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
