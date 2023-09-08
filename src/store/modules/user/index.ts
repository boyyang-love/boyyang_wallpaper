import {defineStore} from 'pinia'
import {store} from '@/store'
import type {StoreUser} from './types'
import {LoginApi} from '@/api/login/types'

const useUserStore = defineStore(
    'app-user',
    {
        state: (): StoreUser.User => ({
            token: '',
            info: {} as LoginApi.LoginResInfo,
        }),

        actions: {
            setToken(token: string) {
                this.token = token
            },

            setInfo(info: LoginApi.LoginResInfo) {
                this.info = info
            },
        },

        persist: {
            key: 'app-user',
            storage: window.localStorage,
            paths: ['token', 'info'],
        },
    },
)

const useUserStoreWithOut = () => {
    return useUserStore(store)
}

export {
    useUserStore,
    useUserStoreWithOut,
}