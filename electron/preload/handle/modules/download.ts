import {BrowserWindow} from 'electron'
import {sep, join} from 'path'
import {writeFileSync} from 'fs'
import downloads from 'download'
import {dir} from '../../../utils/downloadDir'

const download = (url: string) => {
    return new Promise((resolve, reject) => {
        let pat = dir()
        downloads(encodeURI(url)).then(
            (res) => {
                writeFileSync(join(pat, `${sep}wallpaper${sep}${(url.split(sep).pop())}`), res)
                resolve('图片下载成功')
            },
        ).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

const customDownload = (url: string, win: BrowserWindow) => {
    return new Promise((resolve, reject) => {
        win.webContents.downloadURL(url)
        win.webContents.session.on(
            'will-download',
            (_, item) => {
                item.once(
                    'done',
                    (_, state) => {
                        if (state === 'completed') {
                            resolve('壁纸下载成功')
                        } else if (state === 'cancelled') {
                            reject('用户取消下载')
                        }
                    },
                )
            },
        )
    })
}

export {
    download,
    customDownload,
}