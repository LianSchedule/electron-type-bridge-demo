中文 | [English](./README_English.md)

本人承接开发、维护项目。如有需求，欢迎联系：微信dazhang32（请备注“GitHub合作”）。

#### 功能介绍

[https://www.npmjs.com/package/electron-type-bridge](https://www.npmjs.com/package/electron-type-bridge)

一个用于在 Electron 的主进程与渲染进程之间，实现类型安全（TypeScript）的进程间通信 (IPC) 的库。通过完整的类型推断和智能提示，为开发者提供卓越的 IDE 开发体验。
||是否具有|
|--|--|
|主进程调用渲染进程（双向）|Y|
|渲染进程调用主进程（双向）|Y|

#### 安装

```bash
npm i electron-type-bridge
```

#### Issues

[https://github.com/LianSchedule/electron-type-bridge-demo/issues](https://github.com/LianSchedule/electron-type-bridge-demo/issues)

#### 用法示例

```bash
npm i
npm run dev
```

#### 开发

- `src\shared\types.ts`中定义类型
- `src\main\index.ts`中初始化主进程管理器

```ts
//dymamicData来自于`src\shared\types.ts`
const instance = new mainProgressClass<dymamicData>({})
//添加供渲染进程调用的方法
instance.addHandles({})
//添加窗口
instance.addBrowserWindows({})
instance.init()
```

- `src\renderer\src\views\window1.vue`中初始化窗口1的渲染进程管理器

```ts
//dymamicData来自于`src\shared\types.ts`
//browserWindowIdsEnum.window1为当前窗口的id
const instance = new rendererProgressClass<dymamicData, browserWindowIdsEnum.window1>({})
instance.addHandles({})
instance.init()
```
