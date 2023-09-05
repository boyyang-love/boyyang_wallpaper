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
            isShowSuccessMessage: false,
        },
    )
}