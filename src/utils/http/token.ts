import {useUserStoreWithOut} from '@/store/modules/user'

const token = (): string => {
    const userStore = useUserStoreWithOut()

    return userStore.token
}

export {
    token,
}