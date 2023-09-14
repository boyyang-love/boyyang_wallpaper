<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import {useMenus, type MenuItem} from './hooks/menus'
import {useUserStore} from '@/store/modules/user'
import {Search} from '@vicons/ionicons5'
import {env} from '@/utils/env'
import {useImage} from '@/views/Image/hooks/useImage'
import {router} from '@/router'

const {imageData, getList} = useImage()

const {menus} = useMenus()
const active = ref<number>(1)

const userStore = useUserStore()

const iconClick = (e: MenuItem) => {
  if (e.id === 3) {
    window.$dialog.create({
      title: '提示',
      content: '是否退出登录？',
      negativeText: '取消',
      positiveText: '退出',
      onPositiveClick: () => {
        window.localStorage.clear()
        router.push({
          path: '/login',
        })
      },
    })

    return
  }
  active.value = e.id
  imageData.isLike = e.id === 2
  imageData.page = 1
  imageData.limit = 10
}

const userAvatar = computed(() => {
  return `${env.VITE_APP_IMG_URL}/${userStore.info.avatar_url}`
})

watch(() => imageData.isLike, () => {
  getList()
})

</script>

<template>
  <div class="menu-wrapper">
    <div class="inner-wrapper">

      <div class="menu-top">
        <n-space
            align="center"
            justify="center"
            :size="15"
        >
          <div class="search-input-wrapper">
            <n-input
                placeholder="请输入关键字"
                v-model:value="imageData.keywords"
                :bordered="false"
            >
              <template #suffix>
                <n-icon :component="Search" class="search" @click="getList(true)"/>
              </template>
            </n-input>
          </div>
          <div
              v-for="item in menus.filter(m => m.position === 'top')"
              class="icon-wrapper"
          >
            <n-icon
                class="icon"
                :size="item.size"
                :color="item.id === active ? '#ff165d' : '#b7bfd7' "
                :component="item.icon"
                @click="iconClick(item)"
            >
            </n-icon>
          </div>
          <div class="user-avatar">
            <n-avatar
                :size="40"
                :src="userAvatar"
                bordered
            ></n-avatar>
          </div>
        </n-space>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.menu-wrapper {
  box-sizing: border-box;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-app-region: drag;
  background-color: rgba(34, 40, 49, 0.5);
  backdrop-filter: saturate(120%) blur(100px);

  .inner-wrapper {
    box-sizing: border-box;
    width: 100%;
    padding: 5px 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .menu-top {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid whitesmoke;
      padding-bottom: 2px;

      .search-input-wrapper {
        -webkit-app-region: no-drag;

        .search {
          cursor: pointer;
        }
      }

      .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .user-avatar {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .icon {
    cursor: pointer;
    -webkit-app-region: no-drag;
  }
}
</style>