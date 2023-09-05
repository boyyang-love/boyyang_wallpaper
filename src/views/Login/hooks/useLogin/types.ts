import type {Component} from 'vue'

export declare namespace Login {
    export interface InputItem {
        placeholder: string
        key: string
        icon: Component
        type: 'text' | 'password' | 'textarea'
        size: number
        maxlength: number
    }
}