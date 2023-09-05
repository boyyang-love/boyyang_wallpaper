export interface Wallpaper {
    set: (url: string) => Promise<any>
    download: (url: string) => Promise<any>
    customDownload: (url: string) => Promise<any>
}