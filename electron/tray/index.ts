import {app, Tray, nativeImage, BrowserWindow} from 'electron'
import {join} from 'path'

const createTray = () => {
    const icon = nativeImage.createFromPath(join(__dirname, './images/iconTemplate.png'))
    const tray = new Tray(icon)

    let isCreate = false
    let win: null | BrowserWindow = null

    tray.on('click', (_, bounds) => {
        if (!isCreate) {
            createTrayWin(bounds).then(w => {
                win = w
                app.whenReady().then(() => {
                    win?.show()
                    isCreate = true
                })

                win.on('blur', () => {
                    win?.hide()
                    isCreate = false
                })
            })
        } else {
            win?.close()
            isCreate = false
        }
    })
}


const createTrayWin = async (bounds: Electron.Rectangle) => {
    let width = 300
    let height = 355
    const win = new BrowserWindow({
        show: false,
        width: width,
        height: height,
        x: bounds.x - (width / 2 - bounds.width / 2),
        y: bounds.height,
        frame: false,
        autoHideMenuBar: true,
        disableAutoHideCursor: true,
        transparent: true,
        // opacity: 0.5,
        resizable: false,
    })

    win.setVisibleOnAllWorkspaces(true)
    win.setAlwaysOnTop(true, 'pop-up-menu')
    win.setSkipTaskbar(false)

    if (app.isPackaged) {
        await win.loadURL(`file://${join(__dirname, '../dist/index.html#/tray')}`)
    } else {
        await win.loadURL('http://localhost:3000/#/tray')
    }

    return win
}

export {
    createTray,
}