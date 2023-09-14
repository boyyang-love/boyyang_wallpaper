import type {Component} from 'vue'
import { Image, HeartHalf, Exit} from '@vicons/ionicons5'

export interface MenuItem {
    id: number
    name: string
    icon: Component
    color: string
    size: number
    position: string
    path: string,
}

const useMenus = () => {
    const size = 24
    const menus: Array<MenuItem> = [
        {
            id: 1,
            name: '壁纸',
            icon: Image,
            color: '#fff',
            size,
            position: 'top',
            path: '/image',
        },
        {
            id: 2,
            name: '收藏',
            icon: HeartHalf,
            color: '#fff',
            size,
            position: 'top',
            path: '/image',
        },
        {
            id: 3,
            name: 'exit',
            icon: Exit,
            color: '#fff',
            size,
            position: 'top',
            path: '/login',
        },
    ]

    return {
        menus,
    }
}

export {
    useMenus,
}