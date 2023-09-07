import {app, BrowserWindow, ipcMain} from 'electron'
import WinState from 'electron-win-state'
import * as path from 'path'
import {handleInit} from './preload/handle'

const createWindow = async () => {
    const winState = new WinState({
        defaultWidth: 950,
        defaultHeight: 600,
    })

    const win = new BrowserWindow({
        show: false,
        ...winState.winOptions,
        minWidth: 500,
        minHeight: 450,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, './preload/index.js'), // 需要引用js文件
        },
        transparent: true,
        titleBarStyle: 'hidden',
    })

    if (app.isPackaged) {
        await win.loadFile('./dist/index.html')
    } else {
        await win.loadURL('http://localhost:3000')
    }

    winState.manage(win)

    win.once('ready-to-show', () => {
        win.show()
    })

    handleInit(ipcMain, win)
}


app.whenReady().then(async () => {
    await createWindow()
})


