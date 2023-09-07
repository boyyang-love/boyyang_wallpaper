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
        redirect: '/image',
        children: [
            {
                path: '/image',
                name: 'Image',
                meta: {
                    title: '壁纸',
                },
                component: () => import('@/views/Image/index.vue'),
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
