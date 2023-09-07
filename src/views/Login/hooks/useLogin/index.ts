import {reactive} from 'vue'
import {router} from '@/router'
import {inputsLogin} from './inputs'
import {login} from '@/api/login'
import {useUserStoreWithOut} from '@/store/modules/user'

interface LoginData {
    username: string
    password: string
}

const useLogin = () => {
    const loginData = reactive<LoginData>({
        username: '',
        password: '',
    })

    const loginSubmit = () => {
        const userStore = useUserStoreWithOut()
        let params = {
            ...loginData,
        }

        login(params).then((res) => {
            userStore.setToken(res.data.token)
            userStore.setInfo(res.data.info)
            router.replace({path: '/image'}).then(() => {
                window.wallpaper.message({title: '提示', msg: '登录成功'})
            })
        })
    }

    return {
        loginData,
        inputsLogin,
        loginSubmit,
    }
}

export {
    useLogin,
}