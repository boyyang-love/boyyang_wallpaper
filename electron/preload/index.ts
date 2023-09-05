import electron, {contextBridge} from 'electron'
import type {Wallpaper} from './preload-env'
import process from 'process'

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
})


contextBridge.exposeInMainWorld('wallpaper', <Wallpaper>{
    set: (url: string) => electron.ipcRenderer.invoke('set', url),
    download: (url: string) => electron.ipcRenderer.invoke('download', url),
    customDownload: (url: string) => electron.ipcRenderer.invoke('customDownload', url),
})

