import {App} from 'vue'
import {lazyLoad} from './lazyLoad'

const setupDirective = (app: App) => {
    app.directive('lazy', lazyLoad)
}

export {
    setupDirective,
}