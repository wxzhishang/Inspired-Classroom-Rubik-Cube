# 灵感课堂魔方——AI老师教案助手

## Setup

Install the dependencies:

```bash
npm install
```

## Get Started

Start the dev server:

```bash
npm run dev
```

Build the app for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 状态管理

1. zustand（全局状态管理）
   https://zustand-cn.js.org/getting-started/introduction

2. useImmer+useState+useReducer（组件内状态管理）

## pont-engine接口管理

用pont进行接口代码生成等联调工作

### 使用说明

1. vscode安装pont插件；
2. 拉取远程数据源，按需添加！！！不要全量添加，会有影响其他模块风险；
3. 根据生成api接口代码，结合useRequest+react hooks可满足大部分业务开发；
4. 相关类型不要自己定义，从api生成的DTO获取

## 请求数据

请求数据统一采用ahooks的useRequest API； https://ahooks.js.org/zh-CN/

示例代码如下：

```ts
const {
  data: xxxData,
  run: fetchxxx,
  loading: xxxing,
} = useRequest(API.base.xxx.fetch, {
  //相应配置
  manual: true, //是否手动请求
  onSuccess: () => {}, //请求成功回调函数
  //...
})
```

## 组件库

暂时采用ant design

## 代码规范

- 1、除生成的api代码，其他任何地方不能直接使用any类型，如果必须使用，用StoreValue代替；
- 2、单页面代码尽量不要超过600行；
- 3、尽量保持相同的表单逻辑，按当前最佳实践来；
- 4、注意代码格式化，不能出现未引用的变量；
- 5、npm run commit，执行提交操作，中间会进行eslint校验，校验通过才能提交；
- 6、依赖安装尽量使用npm命令；

## 分支规范

- 紧急发布：从master切分支，分支名参考 feature-xxx，测试验证需要往release-pre分支合并，正式上线需要往master分支合并。
- 正常发布：需要内部沟通对齐分支路线，分支名参考 feat-xxx，fix-xxx，测试验证合并到release-pre，正式上线需要往master分支合并。

## 代码格式化

1. vscode下载插件ESlint、perttier
2. 设置vscode自动保存格式化（参考网上教程）

## src文件夹结构说明

1. ./assets --》 公共静态资源（图片等）
2. ./components --》 公共组件，只存放公共组件，命名要求大驼峰
3. ./hooks --》 公共封装hooks
4. ./pages
   --》 页面，命名要求小驼峰，一个页面一个文件夹，内部包含components(页面内部组件)和index.tsx以及index.moudle.less
5. ./styles --》 除app.css外全局样式
6. ./utils --》 工具函数封装
