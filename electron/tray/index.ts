import {app, Tray, nativeImage, BrowserWindow} from 'electron'
import {join} from 'path'


let isShow = false
const createTray = () => {
    const icon = nativeImage.createFromPath(join(__dirname, './icons/iconTemplate.png'))
    const tray = new Tray(icon)

    let win: null | BrowserWindow = null

    tray.on('click', (_, bounds) => {
        if (!isShow) {
            if (win) {
                win.setPosition(bounds.x - (150 - bounds.width / 2), 0, true)
                win.show()
                isShow = true
            } else {
                createTrayWin(bounds).then(w => {
                    win = w
                    win?.show()
                    isShow = true
                })
            }
        } else {
            win?.hide()
            isShow = false
        }
    })
}

const createTrayWin = async (bounds: Electron.Rectangle) => {
    let width = 350
    let height = 455
    const win = new BrowserWindow({
        show: false,
        width: width,
        height: height,
        x: bounds.x - width / 2,
        y: 0,
        frame: false,
        autoHideMenuBar: true,
        disableAutoHideCursor: true,
        transparent: true,
        resizable: false,
        type: 'panel',
        webPreferences: {
            nodeIntegration: true,
            preload: join(__dirname, './preload/index.js'), // 需要引用js文件
        },
    })

    win.setVisibleOnAllWorkspaces(true)
    win.setAlwaysOnTop(true, 'pop-up-menu')
    win.setSkipTaskbar(false)

    if (app.isPackaged) {
        await win.loadURL(`file://${join(__dirname, '../dist/index.html#/tray')}`)
    } else {
        await win.loadURL('http://localhost:3000/#/tray')
    }

    win.on('blur', () => {
        win.hide()
        isShow = false
    })

    win.on('focus', () => {
        win.show()
        isShow = true
    })

    return win
}

export {
    createTray,
}