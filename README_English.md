English | [中文](./README.md)

I offer development and maintenance services for projects. If you have any needs, feel free to contact me via WeChat at dazhang32 (please include "GitHub" in your message).

#### Features Introduction

[https://www.npmjs.com/package/electron-type-bridge](https://www.npmjs.com/package/electron-type-bridge)

A library designed to facilitate type-safe inter-process communication (IPC) between the Main Process and Renderer Processes in Electron applications. Provides comprehensive type inference and intelligent code completion to deliver an exceptional IDE development experience.
||Included|
|--|--|
|Main process invokes renderer process (and receives responses)|Y|
|Renderer process invokes main process (and receives responses)|Y|

#### Install

```bash
npm i electron-type-bridge
```

#### Issues

[https://github.com/LianSchedule/electron-type-bridge-demo/issues](https://github.com/LianSchedule/electron-type-bridge-demo/issues)

#### Usage Examples

```bash
npm i
npm run dev
```

#### Development

- Define types in `src\shared\types.ts`
- Initialize the main process manager in `src\main\index.ts`

```ts
//dymamicData is sourced from `src\shared\types.ts`
const instance = new mainProgressClass<dymamicData>({})
//Add methods for the renderer process to invoke.
instance.addHandles({})
//Add windows.
instance.addBrowserWindows({})
instance.init()
```

- Initialize the renderer process manager for Window 1 in `src\renderer\src\views\window1.vue`

```ts
//dymamicData is sourced from `src\shared\types.ts`
//browserWindowIdsEnum.window1 represents the ID of the current window.
const instance = new rendererProgressClass<dymamicData, browserWindowIdsEnum.window1>({})
instance.addHandles({})
instance.init()
```
