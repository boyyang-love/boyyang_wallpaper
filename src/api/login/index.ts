import {http} from '@/utils/http'
import {LoginApi} from './types'

export const login = (req: LoginApi.LoginReq) => {

    return http.request<LoginApi.LoginRes>(
        {
            url: '/login',
            method: 'POST',
            data: req,
        },
    )
}