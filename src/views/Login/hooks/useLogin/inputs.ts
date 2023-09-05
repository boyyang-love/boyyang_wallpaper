import {Login} from './types'
import {Person, LockClosed} from '@vicons/ionicons5'

const inputsLogin: Login.InputItem[] = [
    {
        placeholder: '请输入账号',
        key: 'username',
        icon: Person,
        type: 'text',
        size: 23,
        maxlength: 15,
    },
    {
        placeholder: '请输入密码',
        key: 'password',
        icon: LockClosed,
        type: 'password',
        size: 23,
        maxlength: 20,
    },
]

export {
    inputsLogin,
}