import {set, download, customDownload} from './modules'
import {BrowserWindow} from 'electron'

const handleInit = (ipcMain: Electron.IpcMain, win: BrowserWindow) => {
    ipcMain.handle('set', (_, url: string) => set(url))
    ipcMain.handle('download', (_, url: string) => download(url))
    ipcMain.handle('customDownload', (_, url: string) => customDownload(url, win))
}

export {
    handleInit,
}