import {app} from 'electron'

const dir = () => {
    if (app.isPackaged) {
        return app.getPath('userData')
    } else {
        return __dirname
    }
}

export {
    dir,
}