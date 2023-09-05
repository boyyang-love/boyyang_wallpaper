import type {Router} from 'vue-router'
import {useUserStoreWithOut} from '@/store/modules/user'

const createRouterGuards = (router: Router) => {
    // 路由前置守卫
    router.beforeEach(async (to, _, next) => {
        document.title = to.meta.title as string
        const userStore = useUserStoreWithOut()
        if(to.path === '/login'){
            next()
            return
        }
        if(userStore.token){
            if(to.path === '/login'){
                next({path: '/home'})
            }else {
                next()
            }
        }else {
            next({path: '/login'})
            return
        }
        next()
    })
    // 路由错误
    router.onError(() => {
        console.log(
            `%c 错误： %c 路由错误  %c`,
            'background:red ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
            'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
            'background:transparent',
        )
    })
}

export {createRouterGuards}
