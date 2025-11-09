import { app, BrowserWindow } from 'electron'
import { createWindow } from './lib'
import { mainProgressClass } from 'electron-type-bridge/mainProgress'
import {
    browserWindowIdsEnum,
    dymamicData,
    ipcMainHandleIdsEnum,
    ipcRendererHandleIdsEnum_window1,
    ipcRendererHandleIdsEnum_window2
} from '../shared/types'
import { rendererProgressCreationModesEnum } from '../../../electron-type-bridge/dist/mainProgress/enum'
import dayjs from 'dayjs'
//////////////////////////////////////////////////////////////////////////
const main = function () {
    console.log('mainProgressClass', mainProgressClass)
    const instance = new mainProgressClass<dymamicData>({})
    instance.addHandles({
        [ipcMainHandleIdsEnum.sum]: async (req) => {
            console.log(
                dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
                'main sum called. req:',
                req.params,
                'needResult:',
                req.needResult,
                'browserWindowId:',
                req.browserWindowId
            )
            return req.params.number1 + req.params.number2
        }
    })
    instance.addBrowserWindows({
        [browserWindowIdsEnum.window1]: {
            createFunc: () => {
                return createWindow(10, 10, 'window1', '/window1')
            },
            creationMode: rendererProgressCreationModesEnum.immediate
        },
        [browserWindowIdsEnum.window2]: {
            createFunc: () => {
                return createWindow(650, 10, 'window2', '/window2')
            },
            creationMode: rendererProgressCreationModesEnum.immediate
        },
        [browserWindowIdsEnum.window3]: {
            createFunc: () => {
                return createWindow(1290, 10, 'window3', '/window3')
            },
            creationMode: rendererProgressCreationModesEnum.passive
        }
    })
    instance.init()
    setTimeout(async () => {
        const resultOfD = await instance.invokeRendererProgressWithResult(
            browserWindowIdsEnum.window1,
            ipcRendererHandleIdsEnum_window1.d,
            {
                d1: 'd1',
                d2: 11
            }
        )
        console.log(dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'), 'res of call window1 d:', resultOfD)
        instance.invokeRendererProgressWithoutResult(
            browserWindowIdsEnum.window1,
            ipcRendererHandleIdsEnum_window1.d,
            {
                d1: 'd2',
                d2: 22
            }
        )
    }, 1000)
    setTimeout(async () => {
        const resultOfF = await instance.invokeRendererProgressWithResult(
            browserWindowIdsEnum.window2,
            ipcRendererHandleIdsEnum_window2.f,
            {
                f1: 'f1',
                f2: 11
            }
        )
        console.log(dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'), 'res of call window1 f:', resultOfF)
        instance.invokeRendererProgressWithoutResult(
            browserWindowIdsEnum.window2,
            ipcRendererHandleIdsEnum_window2.f,
            {
                f1: 'f2',
                f2: 22
            }
        )
    }, 2000)
}
//////////////////////////////////////////////////////////////////////////
app.whenReady().then(() => {
    main()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) main()
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
