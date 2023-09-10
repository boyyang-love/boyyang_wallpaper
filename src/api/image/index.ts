import {http} from '@/utils/http'
import {ImageApi} from './types'

export const imageList = (params: ImageApi.ImageListReq) => {
    return http.request<ImageApi.ImageListRes>(
        {
            url: '/exhibition/info',
            method: 'GET',
            params,
        },
        {
            isShowMessage: false,
        },
    )
}

export const imageLike = (params: ImageApi.LikeReq) => {
    return http.request(
        {
            url: '/like',
            method: 'POST',
            data: {
                uid: params.uid,
                likes_type: params.likes_type,
                type: 1,
            },
        },
    )
}

export const trayImages = (params?: ImageApi.TrayReq) => {
    return http.request<ImageApi.TrayRes>(
        {
            url: '/tray',
            method: 'get',
            params,
        },
        {
            isShowMessage: false,
            withToken: false,
        },
    )
}