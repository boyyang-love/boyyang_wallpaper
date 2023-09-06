import {setWallpaper} from 'wallpaper'
import {existsSync, mkdirSync, readdirSync} from 'fs'
import {join, sep} from 'path'
import {download} from './download.ts'
import {dir} from '../../../utils/downloadDir'

const set = (url: string) => {
    return new Promise((resolve, reject) => {
        let pat = dir() // 获取当前环境 壁纸存储地址 开发环境：dist-electron/wallpaper 部署环境：包内/wallpaper
        if (!existsSync(join(pat, `${sep}wallpaper`))) {
            mkdirSync(join(pat, `${sep}wallpaper`))
        }
        const files = readdirSync(join(pat, `${sep}wallpaper`)) || []
        const fileName = url.split(sep).pop() as string
        if (files.includes(fileName)) {
            setWallpaper(
                `${join(pat, `${sep}wallpaper`)}${sep}${fileName}`,
                {
                    screen: 'main',
                    scale: 'fill',
                },
            ).then(() => {
                resolve('壁纸修改成功')
            }).catch(err => {
                resolve(err.toString())
            })
        } else {
            download(url).then((res) => {
                if (res) {
                    setWallpaper(
                        `${join(pat, `${sep}wallpaper`)}${sep}${fileName}`,
                        {
                            screen: 'main',
                            scale: 'fill',
                        },
                    ).then(() => {
                        resolve('壁纸修改成功')
                    }).catch(err => {
                        resolve(err.toString())
                    })
                }
            }).catch(() => {
                reject(`壁纸下载失败`)
            })
        }
    })
}

export {
    set,
}