import { ElectronAPI } from '@electron-toolkit/preload'
import { ipcRendererHandleNamesEnum } from '../renderer/src/modules/core/gateway/dynamicData/ipcRenderer/handles/enum'
import { ipcMainHandlesTypes } from '../main/gateway/dynamicData/ipcMain/types'
import { dynamicData } from '../renderer/src/modules/core/gateway/dynamicData/ipcRenderer/handles/types'
import { ipcMainHandleNamesEnum } from '../main/gateway/dynamicData/ipcMain/handles/enum'
import { event } from '../renderer/src/modules/core/foundation/ipcRenderer/handles/types'

declare global {
    interface Window {
        api: {
            invoke(channel: string, params: any): Promise<any>
            on(channel: string, callback: (event: Electron.IpcRendererEvent) => void)
            send(channel: string, ...args: any[])
        }
    }
}
