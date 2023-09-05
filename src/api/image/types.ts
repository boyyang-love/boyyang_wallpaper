export declare namespace ImageApi {

    export interface ImageListReq {
        uids?: string[]
        page: number
        limit: number
        type: number
        public: boolean
        sort: string // Created ThumbsUp
        keywords?: string
    }

    export interface ImageListRes {
        count: number
        exhibitions: Exhibitions[]
        inReview: number
        approved: number
        review_rjection: number
        likes_ids: number[]
        star_ids: number[]
    }

    export interface Exhibitions {
        uid: number
        created: number
        title: string
        subTitle: string
        des: string
        cover: string
        tags: string
        user_id: number
        thumbs_up: number
        status: number
        reject_res: string
        user_info: UserInfo
    }

    export interface UserInfo {
        id: number
        uid: number
        username: string
        gender: number
        avatar_url: string
        age: number
        email: string
        address: string
        tel: number
        qq: number
        wechat: string
        git_hub: string
        background_image: string
        motto: string
    }
}