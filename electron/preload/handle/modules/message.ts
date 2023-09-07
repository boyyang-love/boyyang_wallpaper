import {Notification} from 'electron'
import type {Wallpaper} from '../../preload-env'

const message = (messageContent: Wallpaper.MessageContent) => {
    new Notification({title: messageContent.title, body: messageContent.msg}).show()
}

export {
    message,
}