# 水滴培训 手机端

## 安装 ESLint
`pnpm i eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin -D`

## vite 支持 eslint
`pnpm i vite-plugin-eslint -D`

## 实现 graphql service 层
`pnpm i @apollo/client graphql -S`

## OSS 图片上传文档
https://help.aliyun.com/document_detail/322691.html

## 搭建基本框架
1. 添加 Route
2. 添加 404 
3. 添加通用方法
4. 修复一些基本问题
5. reset.css https://www.jsdelivr.com/package/npm/reset-css

## 实现下拉刷新功能
1. ScrollTop
2. 鼠标事件：toouchstart、touchmove、 touchend
3. y 的偏移量
4. 最大偏移量：maxY

## 下拉刷新的扩展思考
- 动画组件库：https://www.react-spring.dev/docs/getting-started
- 手势操作组件库：https://use-gesture.netlify.app/docs/
- 体验更好的 Scroll 库：https://better-scroll.github.io/docs/zh-CN/guide/base-scroll.html

## 实现无限滚动
> 核心是判断有没有触底
1. document.documentElement.clientHeight 根节点的高度
2. document.body.scrollHeight body 内容高度
3. document.documentElement.scrollTop 滑动条距离顶部的高度
4. scrollTop + clientHeight = scrollHeight 触底条件
5. offset 偏移量
6. scrollTop + clientHeight >= scrollHeight - offset 触发条件
