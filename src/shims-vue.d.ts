import {MessageApi, DialogApi, NotificationApi} from 'naive-ui'
import type {LoadingApi} from './components/Loading'
import type {Wallpaper} from '../electron/preload/preload-env'

declare global {
    interface Window {
        $message: MessageApi
        $dialog: DialogApi
        $notification: NotificationApi
        $loading: LoadingApi
        wallpaper: Wallpaper
    }
}