export declare namespace LoginApi {
    export interface LoginReq {
        username: string
        password: string
    }

    export interface LoginRes {
        token: string
        info: LoginResInfo
    }

    export interface LoginResInfo {
        id: number;
        uid: number;
        username: string;
        gender: number;
        avatar_url: string;
        age: number;
        email: string;
        address: string;
        tel: number;
        qq: number;
        wechat: string;
        gitHub: string;
        background_image: string;
        motto: string;
    }
}