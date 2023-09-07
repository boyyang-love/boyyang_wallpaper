import {reactive} from 'vue'
import {imageList, imageLike} from '@/api/image'
import {ImageApi} from '@/api/image/types'
import {env} from '@/utils/env'
import {type IconsItem} from '@/views/Image/components/imageCard/icons.ts'

const imageData = reactive({
    count: 0,
    page: 1,
    limit: 10,
    type: 2,
    public: true,
    sort: 'thumbs_up desc',// Created ThumbsUp
    keywords: '',
    list: [] as (ImageApi.Exhibitions & { isSpin: boolean, isLike: boolean })[],
    starIds: [] as number[],
    isSpin: false,
    isLike: false,
})

const useImage = () => {

    const pageSizes = [
        {
            label: '9 每页',
            value: 9,
        },
        {
            label: '12 每页',
            value: 12,
        },
        {
            label: '24 每页',
            value: 24,
        },
        {
            label: '36 每页',
            value: 36,
        },
    ]

    const sortOptions = [
        {
            label: '发布时间升序',
            value: 'created asc',
        },
        {
            label: '发布时间降序',
            value: 'created desc',
        },
        {
            label: '更新时间升序',
            value: 'updated asc',
        },
        {
            label: '更新时间降序',
            value: 'updated desc',
        },
        {
            label: '点赞升序',
            value: 'thumbs_up asc',
        },
        {
            label: '点赞降序',
            value: 'thumbs_up desc',
        },
    ]

    const getList = (isReset = false) => {
        if (isReset) {
            imageData.page = 1
            imageData.limit = 10
        }
        window.$loading.loadingStart()
        let params = {
            page: imageData.page,
            limit: imageData.limit,
            type: imageData.type,
            public: imageData.public,
            sort: imageData.sort,
            keywords: imageData.keywords,
            is_like: imageData.isLike,
        }

        imageList(params).then((res) => {
            imageData.list = res.data.exhibitions.map((ex) => {
                return {
                    ...ex,
                    cover: `${env.VITE_APP_IMG_URL}/${ex.cover}`,
                    isSpin: false,
                    isLike: res.data.likes_ids && res.data.likes_ids.length ? res.data.likes_ids.includes(ex.uid) : false,
                }
            }) || []
            imageData.count = res.data.count
            window.$loading.loadingEnd()
        }).catch(() => {
            window.$loading.loadingEnd()
        })
    }

    const iconClick = (
        item: IconsItem & { url: string },
        citem: ImageApi.Exhibitions & { isSpin: boolean, isLike: boolean },
    ) => {
        if (item.name === 'wallpaper') {
            citem.isSpin = true
            window.wallpaper.set(item.url).then((msg: string) => {
                window.wallpaper.message({title: '提示', msg})
                citem.isSpin = false
            }).catch((err: string) => {
                window.wallpaper.message({title: '错误', msg: err})
                citem.isSpin = false
            })
        }

        if (item.name === 'download') {
            citem.isSpin = true
            window.wallpaper.customDownload(item.url).then((msg: string) => {
                window.wallpaper.message({title: '提示', msg})
                citem.isSpin = false
            }).catch((err) => {
                window.wallpaper.message({title: '错误', msg: err.toString()})
                citem.isSpin = false
            })
        }

        if (item.name === 'star') {
            citem.isSpin = true
            imageLike({uid: citem.uid, likes_type: !citem.isLike ? 1 : 0}).then(() => {
                citem.isLike = !citem.isLike
                citem.isSpin = false
            }).catch(() => {
                citem.isSpin = false
            })
        }
    }

    const pageChange = (n: number) => {
        imageData.page = n
        getList()
    }

    const pageSizeChange = (n: number) => {
        imageData.page = 1
        imageData.limit = n
        getList()
    }

    return {
        imageData,
        pageSizes,
        sortOptions,
        getList,
        iconClick,
        pageChange,
        pageSizeChange,
    }
}

export {
    useImage,
}