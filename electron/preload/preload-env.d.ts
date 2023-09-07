export namespace Wallpaper {
    export interface MessageContent {
        title: string
        msg: string
    }
    export interface Handler {
        set: (url: string) => Promise<any>
        download: (url: string) => Promise<any>
        customDownload: (url: string) => Promise<any>
        message: (content: MessageContent) => Promise<any>
    }
}
