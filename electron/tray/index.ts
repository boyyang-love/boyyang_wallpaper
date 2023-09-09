import {app, Tray, nativeImage, BrowserWindow, Menu} from 'electron'
import {join} from 'path'

const createTray = () => {
    const icon = nativeImage.createFromPath(join(__dirname, './images/iconTemplate.png'))
    const tray = new Tray(icon)

    let isCreate = false
    let win: null | BrowserWindow = null

    tray.on('click', (_, bounds) => {
        if (!isCreate) {
            if (win) {
                win.setPosition(bounds.x, 0, true)
                win.show()
                isCreate = true
            } else {
                createTrayWin(bounds).then(w => {
                    win = w
                    app.whenReady().then(() => {
                        win?.show()
                        isCreate = true
                    })
                })
            }
        } else {
            win?.hide()
            isCreate = false
        }
    })

    tray.on('double-click', () => {
        const contextMenu = Menu.buildFromTemplate([
            {
                label: '退出',
                type: 'normal',
                click: () => {
                    app.quit()
                },
            },
        ])
        tray.setContextMenu(contextMenu)
    })
}


const createTrayWin = async (bounds: Electron.Rectangle) => {
    let width = 300
    let height = 355
    const win = new BrowserWindow({
        show: false,
        width: width,
        height: height,
        x: bounds.x,
        y: 0,
        frame: false,
        autoHideMenuBar: true,
        disableAutoHideCursor: true,
        transparent: true,
        resizable: false,
        type: 'panel',
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