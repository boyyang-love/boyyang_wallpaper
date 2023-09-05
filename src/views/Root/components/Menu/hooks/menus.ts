import type {Component} from 'vue'
import {Home, Image, HeartHalf} from '@vicons/ionicons5'

export interface MenuItem {
    id: number
    name: string
    icon: Component
    color: string
    size: number
    position: string
    path: string
}

const useMenus = () => {
    const size = 24
    const menus: Array<MenuItem> = [
        {
            id: 0,
            name: '首页',
            icon: Home,
            color: '#fff',
            size,
            position: 'top',
            path: '/',
        },
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
            path: '/likes',
        },
    ]

    return {
        menus,
    }
}

export {
    useMenus,
}