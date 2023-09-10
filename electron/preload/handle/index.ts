import {set, download, customDownload, message, exit} from './modules'
import {BrowserWindow} from 'electron'
import type {Wallpaper} from '../preload-env'

const handleInit = (ipcMain: Electron.IpcMain, win: BrowserWindow) => {
    ipcMain.handle('set', (_, url: string) => set(url))
    ipcMain.handle('download', (_, url: string) => download(url))
    ipcMain.handle('customDownload', (_, url: string) => customDownload(url, win))
    ipcMain.handle('message', (_, messageContent: Wallpaper.MessageContent) => message(messageContent))
    ipcMain.handle('exit', () => exit())
}

export {
    handleInit,
}