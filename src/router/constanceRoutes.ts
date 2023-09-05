import type {RouteRecordRaw} from 'vue-router'
import {Root} from './Root.ts'

const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Root',
        meta: {
            title: 'wallpaper',
        },
        component: Root,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                meta: {
                    title: '首页',
                },
                component: () => import('@/views/Home/index.vue'),
            },
            {
                path: '/image',
                name: 'Image',
                meta: {
                    title: '壁纸',
                },
                component: () => import('@/views/Image/index.vue'),
            },
            {
                path: '/likes',
                name: 'Likes',
                meta: {
                    title: '收藏',
                },
                component: () => import('@/views/Likes/index.vue'),
            },
            {
                path: '/upload',
                name: 'Upload',
                meta: {
                    title: '上传',
                },
                component: () => import('@/views/Upload/index.vue'),
            },
            {
                path: '/setting',
                name: 'Setting',
                meta: {
                    title: '设置',
                },
                component: () => import('@/views/Setting/index.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import('@/views/Login/index.vue'),
    },
]

export {constantRoutes}
