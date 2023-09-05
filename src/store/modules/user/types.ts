import {LoginApi} from '@/api/login/types'

export declare namespace StoreUser {
    export interface User {
        token: string
        info: LoginApi.LoginResInfo
    }
}