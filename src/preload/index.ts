import { contextBridge, ipcRenderer } from 'electron'
const api = {
    invoke(channel: string, params: any) {
        return ipcRenderer.invoke(channel, params)
    },
    on(channel: string, callback: (event: Electron.IpcRendererEvent) => void) {
        ipcRenderer.on(channel, callback)
    },
    send(channel: string, ...args: any[]) {
        ipcRenderer.send(channel, ...args)
    }
}
if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('api', api)
    } catch (error) {
        console.error(error)
    }
} else {
    // @ts-ignore
    window.api = api
}
