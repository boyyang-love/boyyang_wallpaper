import App from './App.vue'
import {createApp} from 'vue'
import {router, setupRoutes} from '@/router'
import {setupStore} from '@/store'
import {setupNaive} from '@/plugin/naive'
import {setupDirective} from '@/plugin/directive'

const bootstrap = async () => {
    const app = createApp(App)
    // 初始化 store
    setupStore(app)
    // 初始化路由
    setupRoutes(app)
    // 路由加载完成后，挂载到 #app
    await router.isReady()
    // 加载 naive ui 组件
    setupNaive(app)
    // 加载 指令
    setupDirective(app)
    // 挂载
    app.mount('#app')
}

void bootstrap()
