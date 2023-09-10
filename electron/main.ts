import {app, BrowserWindow, ipcMain} from 'electron'
import WinState from 'electron-win-state'
import * as path from 'path'
import {handleInit} from './preload/handle'
import {createTray} from './tray'

const createWindow = async () => {
    const winState = new WinState({
        defaultWidth: 950,
        defaultHeight: 600,
    })

    const win = new BrowserWindow({
        show: false,
        ...winState.winOptions,
        minWidth: 550,
        minHeight: 750,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, './preload/index.js'), // 需要引用js文件
        },
        transparent: true,
        titleBarStyle: 'hidden',
        icon: path.join(__dirname, './icons/app.png'),
    })

    if (process.platform === 'darwin') {
        app.dock.setIcon(path.join(__dirname, './icons/app.png'))
    }

    if (app.isPackaged) {
        await win.loadFile('./dist/index.html')
    } else {
        await win.loadURL('http://localhost:3000')
    }

    winState.manage(win)

    win.once('ready-to-show', () => {
        win.show()
    })


    win.on('close', (event) => {
        win.hide()
        app.dock.hide()
        event.preventDefault()
    })

    handleInit(ipcMain, win)
}


app.whenReady().then(async () => {
    await createWindow()
    createTray()
})



