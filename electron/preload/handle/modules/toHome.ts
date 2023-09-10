import {BrowserWindow, app} from 'electron'

const toHome = (win: BrowserWindow) => {
    app.dock.show().then(() => {
        win.show()
    })
}

export {
    toHome,
}