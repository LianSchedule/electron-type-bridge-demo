import { dymamicDataTemplate } from '../../../electron-type-bridge/dist/shared/progress/types'
export enum browserWindowIdsEnum {
    window1 = 'window1',
    window2 = 'window2',
    window3 = 'window3'
}
export enum ipcMainHandleIdsEnum {
    sum = 'sum',
    test = 'test'
}
export enum ipcRendererHandleIdsEnum_window1 {
    d = 'd',
    e = 'e'
}
export enum ipcRendererHandleIdsEnum_window2 {
    f = 'f',
    g = 'g'
}
export enum ipcRendererHandleIdsEnum_window3 {}
export type dymamicData = dymamicDataTemplate<{
    ipcMainHandleTypes: {
        [ipcMainHandleIdsEnum.sum]: {
            reqParams: { number1: number; number2: number; flag?: string }
            resType: Promise<number> | number
        }
        [ipcMainHandleIdsEnum.test]: {
            reqParams: { test1: number; test2: number; flag?: string }
            resType: Promise<boolean> | boolean
        }
    }
    ipcRendererHandlesTypes: {
        [browserWindowIdsEnum.window1]: {
            [ipcRendererHandleIdsEnum_window1.d]: {
                reqParams: { d1: string; d2?: number }
                resType: Promise<string> | string
            }
            [ipcRendererHandleIdsEnum_window1.e]: {
                reqParams: { e1: string; e2?: number }
                resType: Promise<number> | number
            }
        }
        [browserWindowIdsEnum.window2]: {
            [ipcRendererHandleIdsEnum_window2.f]: {
                reqParams: { f1: string; f2?: number }
                resType: Promise<string> | string
            }
            [ipcRendererHandleIdsEnum_window2.g]: {
                reqParams: { g1: string; g2?: number }
                resType: Promise<number> | number
            }
        }
        [browserWindowIdsEnum.window3]: {}
    }
    ipcRendererHandleIdsType: {
        [browserWindowIdsEnum.window1]: ipcRendererHandleIdsEnum_window1
        [browserWindowIdsEnum.window2]: ipcRendererHandleIdsEnum_window2
        [browserWindowIdsEnum.window3]: ipcRendererHandleIdsEnum_window3
    }
    browserWindowIdsEnum: browserWindowIdsEnum
    ipcMainHandleIdsEnum: ipcMainHandleIdsEnum
}>
