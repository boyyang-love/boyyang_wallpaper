import {HeartHalf, CloudDownload, PaperPlane} from '@vicons/ionicons5'
import {Component} from 'vue'

export interface IconsItem {
    icon: Component
    size: number
    isBadge: boolean
    name: string
}

export const icons: IconsItem[] = [
    {
        name: 'star',
        icon: HeartHalf,
        size: 22,
        isBadge: true,
    },
    {
        name: 'wallpaper',
        icon: PaperPlane,
        size: 22,
        isBadge: false,
    },
    {
        name: 'download',
        icon: CloudDownload,
        size: 22,
        isBadge: false,
    },
]