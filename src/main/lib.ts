import { is } from '@electron-toolkit/utils'
import { BrowserWindow } from 'electron'
import { join } from 'path'

export const createWindow = function (x: number, y: number, title: string, url: string) {
  const window = new BrowserWindow({
    width: 600,
    height: 800,
    x: x,
    y: y,
    title: title,
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    window.loadURL(process.env['ELECTRON_RENDERER_URL'] + '#' + url)
  } else {
    window.loadFile(join(__dirname, '../renderer/index.html'))
  }
  window.webContents.openDevTools({
    mode: 'bottom'
  })
  return window
}
