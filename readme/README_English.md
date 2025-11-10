English | [中文](./README.md)

I offer development and maintenance services for projects. If you have any needs, feel free to contact me via WeChat at dazhang32 (please include "GitHub" in your message).

#### Features Introduction

A library designed to facilitate type-safe inter-process communication (IPC) between the Main Process and Renderer Processes in Electron applications. Provides comprehensive type inference and intelligent code completion to deliver an exceptional IDE development experience.
||Included|
|--|--|
|Main process invokes renderer process (and receives responses)|Y|
|Renderer process invokes main process (and receives responses)|Y|

#### Install

```bash
npm i electron-type-bridge
```

#### Demo

[https://github.com/LianSchedule/electron-type-bridge-demo](https://github.com/LianSchedule/electron-type-bridge-demo)

#### Issues

[https://github.com/LianSchedule/electron-type-bridge-demo/issues](https://github.com/LianSchedule/electron-type-bridge-demo/issues)

#### Advantages

-   The IDE (TypeScript server) automatically infers the request and response types when the main process calls the renderer process.
    -   A call to method `d` expects a request of type `{ d1: string; d2?: number }` and resolves to a response of type `string` (or a `Promise<string>`).
    -   A call to method `e` expects a request of type `{ e1: string; e2?: number }` and resolves to a response of type `number` (or a `Promise<number>`).

![img1](https://lianschedule.github.io/electron-type-bridge-demo/img/1.gif)

-   The IDE (TypeScript server) automatically infers the request and response types when the renderer process calls the main process.
    -   A call to method `sum` expects a request of type `{ number1: number; number2: number; flag?: string }` and resolves to a response of type `number` (or a `Promise<number>`).
    -   A call to method `test` expects a request of type `{ test1: number; test2: number; flag?: string }` and resolves to a response of type `boolean` (or a `Promise<boolean>`).

![img2](https://lianschedule.github.io/electron-type-bridge-demo/img/2.gif)

-   Define your types once, and get all these features automatically.

```ts
//Define your types
export type dymamicData = dymamicDataTemplate<{
    //Browser Window Names Enum
    browserWindowIdsEnum: browserWindowIdsEnum;
    //Enum for method names for the renderer process to invoke.
    ipcMainHandleIdsEnum: ipcMainHandleIdsEnum;
    //Enum for method names for the main process to invoke.
    ipcRendererHandleIdsType: {
        [browserWindowIdsEnum.window1]: ipcRendererHandleIdsEnum_window1;
        [browserWindowIdsEnum.window2]: ipcRendererHandleIdsEnum_window2;
        [browserWindowIdsEnum.window3]: ipcRendererHandleIdsEnum_window3;
    };
    //Methods for the renderer process to invoke.
    ipcMainHandleTypes: {
        //Method Name
        [ipcMainHandleIdsEnum.sum]: {
            //Request Type
            reqParams: { number1: number; number2: number; flag?: string };
            //Response Type
            resType: Promise<number> | number;
        };
        //Method Name
        [ipcMainHandleIdsEnum.test]: {
            //Request Type
            reqParams: { test1: number; test2: number; flag?: string };
            //Response Type
            resType: Promise<boolean> | boolean;
        };
    };
    //Methods for the main process to invoke.
    ipcRendererHandlesTypes: {
        //Browser Window Name
        [browserWindowIdsEnum.window1]: {
            //Method Name
            [ipcRendererHandleIdsEnum_window1.d]: {
                reqParams: { d1: string; d2?: number };
                resType: Promise<string> | string;
            };
            //Method Name
            [ipcRendererHandleIdsEnum_window1.e]: {
                reqParams: { e1: string; e2?: number };
                resType: Promise<number> | number;
            };
        };
        //Browser Window Name
        [browserWindowIdsEnum.window2]: {
            //Method Name
            [ipcRendererHandleIdsEnum_window2.f]: {
                reqParams: { f1: string; f2?: number };
                resType: Promise<string> | string;
            };
            //Method Name
            [ipcRendererHandleIdsEnum_window2.g]: {
                reqParams: { g1: string; g2?: number };
                resType: Promise<number> | number;
            };
        };
        //Browser Window Name
        [browserWindowIdsEnum.window3]: {};
    };
}>;
```
