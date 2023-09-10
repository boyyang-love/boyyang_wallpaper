import {ImageApi} from '@/api/image/types.ts'
import {onMounted, ref} from 'vue'
import {trayImages} from '@/api/image'
import {env} from '@/utils/env'


const useTray = () => {
    const images = ref<(ImageApi.TaryExhibitions & { isLoading: boolean })[]>([])
    const isLoading = ref<boolean>(false)
    onMounted(() => {
        getImages()
    })

    const getImages = (isReload?: boolean) => {
        if (isReload) {
            isLoading.value = true
        }
        trayImages().then(res => {
            images.value = res.data.exhibitions.map((e) => {
                return {
                    ...e,
                    cover: `${env.VITE_APP_IMG_URL}/${e.cover}`,
                    isLoading: false,
                }
            })
            isLoading.value = false
            if (isReload) {
                window.$message.success('刷新成功')
            }
        }).catch(() => {
            isLoading.value = false
            if (isReload) {
                window.$message.error('刷新失败')
            }
        })
    }
    const setWallpaper = (item: ImageApi.TaryExhibitions & { isLoading: boolean }) => {
        item.isLoading = true
        window.wallpaper.set(item.cover).then((res) => {
            item.isLoading = false
            window.wallpaper.message({title: '提示', msg: res}).then()
        }).catch(() => {
            item.isLoading = false
        })
    }

    const exit = () => {
        window.$dialog.create({
            title: '提示',
            content: '是否退出当前应用',
            positiveText: '是的',
            negativeText: '算了',
            onPositiveClick: () => {
                window.wallpaper.exit().then()
            }
        })
    }

    const reload = () => {
        getImages(true)
    }
    return {
        images,
        isLoading,
        setWallpaper,
        exit,
        reload,
    }
}


export {
    useTray,
}