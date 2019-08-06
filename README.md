# vuedemo

> demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 硅谷外卖
### 模块
1. 商家
2. 商品
3. 购物车
4. 用户
5. Vue全家桶+ES6+webpack
6. 模块化 组件化 工程化

### 技术
1. Vue
2. vue-router
3. vuex
4. mint-ui 
5. vue-lazyload 滑动库
6. vue-scroller 滑动库
7. better-scroll 滑动库
8. swiper 日期处理
9. momoent 日期处理 
10. date-fns 日期处理
11. mockjs
12. postman
13. axios ajax请求
14. ES6 babel 模块化
15. webpack vue-cli eslint 项目构建工程化
16. stylus CSS预编译器

### 功能
1. 一级路由
2. 二级路由

### API接口
1. 前后台交互API接口
2. API接口 接口文档 对接口 联调 前后台分离 Mock数据

### 能学习到的
1. 熟悉Vue项目的开发流程
2. 学会组件化，模块化，工程化
3. 学会vue-cli
4. 学会JSON后端数据，前后端分离
5. 学会ES6+ESlint开发
6. 其他的开发技巧

### Vue第三方库
1. vue-router开发单页面应用
2. axios 前后端交互
3. vuex管理应用状态组件
4. better-scroll/vue-scroll
5. mint-ui组件库
6. vue-lazyload实现图片懒加载
7. mockjs模拟后台数据接口

### 样式/效果/布局
1. stylus编写模块化的css
2. vue.js过渡编写交互动画
3. 制作并使用图标字体
4. 解决移动端1px边框问题
5. 移动端经典的 css sticky footer布局
6. flex弹性布局

### 项目结构分析
1. build: webpack相关的配置文件夹
2. config: webpack相关的配置文件夹
    1. index.js 指定后台服务的端口号和静态资源文件夹
3. node_modules
4. src: 源码文件夹
    1. main.js 应用入口js
5. static 静态资源文件夹
6. .bebelrc： babel配置文件
7. .editorconfig: 通过编辑器的编码/格式进行一定的配置
8. .eslintignore： eslint检查忽略设置
9. .eslintrc.js: eslint检查配置
9. .gitignore
10. index.html 主页面应用
11. package.json 应用包配置文件
12. README.md 应用描述说明的文件

### 编码测试和打包项目发布
#### 编码测试
1. npm run dev 编译，自动编译打包，查看效果
2. npm run build -> npm install -g server -> serve dist 打包发布
3. 修改 index.js -> autoOpenBrowser
4. 生产环境 npm run build -> dist目录产生资源 -> cnpm i -g serve -> serve dist

### 资源准备
#### 相关概念
1. 标注图 对应用界面各个组成元素进行坐标、大小、颜色进行标签的界面图
2. 切图
3. 图片Base64 样式中引用的小图片,在webpack打包回自动处理转换为样式内部的Base64编码字符串
4. 2x与3x图：不同的手机的屏幕密度不一样，一般都在2以上，为了适配不同的手机，同一个图片存在2x和3x。

#### 图标字体
1. 阿里巴巴矢量库
2. font-class方式引用
3. 使用 link rel="stylesheet" href使用
4. i class="icon-font 类名"

#### 文件夹
1. commons 通用资源文件夹
2. api 与后台交互模块文件夹
3. components 非路由组件文件夹
4. filters 自定义过滤器魔窟
5. mock模拟数据接口文件夹
6. pages 路由组件文件夹
7. router 路由器文件夹
8. store veux相关模块文件夹
9. App.vue应用组件
10. main.js 入口js

#### 依赖包
1. stylus npm install stylus stylus-loader --save-dev
2. 编写样式
```
//声明style中的语法是stylus
<style lang="stylus" rel="stylesheet/stylus">

</style>
```

### 编程
#### 底部不是路由组件

#### 顶部是组件和组件拆分
1. 使用了插槽替代元素；在子组件中声明插槽的位置和名字，在父组件中给标签定义slot属性并设置名字
2. 提取DIV到子组件，编写子组件样式
3. 父组件导入子组件

#### 轮播
1. 使用Swiper4.x
2. npm install swiper --save
```bash
--save：将保存配置信息到package.json。默认为dependencies节点中。

--dev：将保存配置信息dev Dependencies节点中。

因此：

--save：将保存配置信息到package.json的dependencies节点中。

--save-dev：将保存配置信息到package.json的dev Dependencies节点中。

dependencies：运行时的依赖，发布后，即生产环境下还需要用的模块

dev Dependencies：开发时的依赖。里面的模块是开发时用的，发布时用不到它。
```
3. mounted() {}是方法
4. data() {}是方法

#### 跳转
1. router-link和router-view是对应的
2. 可是在router中设置v-show
3. router中有meta属性值，可以设置一些属性
```angularjs
{
      path: '/search',
      component: Search,
      meta:{
        showFooter: true
      }
    }
```

#### 总结
##### 技术
1. 脚手架
2. stylus
3. vue-router
4. $router 路由器对象，包含一些操作路由的功能函数，来实现编程式导航
5. $route 当前路由对象，一些当前路由信息数据的容器， path meta query params
6. 接口文档
7. slot插槽
8. route-view route-link keep-alive
9. 拆分路由
10. ajax axios promise


### 后台
1. nmp start 启动应用
2. 运行server
3. postman测试API

#### 异步显示

#### 登陆注册

#### 跨域请求
1. 使用 proxyTable
```angularjs
  dev下
  proxyTable: {
    '/api': { // 匹配所有以 '/api' 开头的请求路径
      target: 'http://localhost:4000', // 代理目标的基础路径
      changeOrigin: true, // 支持跨域
      pathRewrite: {// 重写路径 : 去掉路径中开头的 '/api'
        '^/api': ''
      }
    }
  }
```

#### Vuex
1. 必须有的五个 state, mutations, actions, getter, mutation-types
2. 在action中定义 async/await
3. action发送ajax请求，commit给mutation
4. mutation实现给状态赋值
5. 在index中创建vuex对象,实例化store
6. main.js 配置store
7. 组件异步显示
    1. 在mounted中发送请求获取数据到state中 this.$store.dispatch('actionName')
    2. 读state中数据 ...mapState['axxx']
    3. 在模板中使用数据 data, props, computed

#### 注册全局组件
Vue.component(Button.name, Button)

#### MOCK JS
```javascript
import Mock from 'mockjs'
import data from './data.json'

// 只需要运行就可以访问
// 返回goods的接口
Mock.mock('/goods', {code:0, data: data.goods})

// 返回ratings的接口
Mock.mock('/ratings', {code:0, data: data.ratings})

// 返回info的接口
Mock.mock('/info', {code:0, data: data.info})
```

#### 三级表达式会包空指针异常

#### 路由组件缓存 <keep-alive>

#### 路由push应该使用 replace属性

#### 路由懒加载
1. 路由组件导入函数化
```javascript
const MSite = () => import('../pages/MSite/MSite.vue')
```
2. 只有执行此函数时，才会加载组件
3. 函数在请求对应的路由路径时执行

#### 图片懒加载
1. vue-layload
2. import vueLazyLoad from 'vue-lazyload'
3. Vue.use(vueLazyLoad, { // 内部自定义指令 lazy
loading: 'dist/xxx.jpg'
})
4. <img v-lazy="xxx.jpg">

#### 日期格式化过滤器
1. filter/index 过滤器
2. moment
2. 
```javascript
Vue.filter('dateFormat', function(value){
    return moment(value).format('YYYY-MM-DD HH:mm:ss') 
})
```
4. mian.js中引入
5. 使用{{rating.rateTime | dateFormat}}

#### 打包文件的更新优化
1. webpack-bundle-analyzer
2. 启用： cnpm run build --report
3. 生成关于vendor分析包占用大小页面
