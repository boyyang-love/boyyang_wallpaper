<script setup lang="ts">
import {PulseSharp, ExitSharp, ReloadCircleSharp, PaperPlaneSharp} from '@vicons/ionicons5'
import {useTray} from './hooks/useTray'

const {count, images, isLoading, setWallpaper, exit, reload, toHome} = useTray()

</script>

<template>
  <n-spin :show="isLoading">
    <div class="tray-wrapper">
      <div class="tray-setting">
        <n-space align="center">
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon :size="18" class="icon" @click="toHome">
                <PaperPlaneSharp></PaperPlaneSharp>
              </n-icon>
            </template>
            首页
          </n-tooltip>
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon :size="18" class="icon" @click="reload">
                <ReloadCircleSharp></ReloadCircleSharp>
              </n-icon>
            </template>
            刷新页面
          </n-tooltip>
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-icon :size="18" class="icon" @click="exit">
                <ExitSharp></ExitSharp>
              </n-icon>
            </template>
            退出应用
          </n-tooltip>
        </n-space>

        <span class="count">共{{ count }}张壁纸</span>
      </div>
      <div class="images">
        <div v-for="item in images">
          <n-spin :show="item.isLoading">
            <n-image
                :src="item.cover"
                :width="335"
                :height="190"
                :lazy="true"
                :preview-disabled="true"
                @click="setWallpaper(item)"
                object-fit="cover"
                class="img"
            >
              <template #placeholder>
                <div class="icon-wrapper">
                  <n-icon :size="45" color="#fc5185">
                    <PulseSharp></PulseSharp>
                  </n-icon>
                </div>
              </template>
            </n-image>
          </n-spin>
        </div>
        <div class="bottom">
          到底了
        </div>
      </div>
    </div>
  </n-spin>

</template>

<style scoped lang="less">
.tray-wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 15px 0 0;
  background-color: rgba(17, 17, 17, 0.4);
  position: relative;

  .tray-setting {
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    position: fixed;
    padding: 0 15px;
    top: 0;
    background-color: #393e46;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .count {
      color: whitesmoke;
    }

    .icon {
      cursor: pointer;
      color: whitesmoke;

      &:hover {
        color: #fc5185;
      }
    }
  }

  .images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    cursor: pointer;
    padding-top: 20px;

    .img {
      box-sizing: border-box;
      object-fit: cover;
      margin: 5px 0;
      border: 2px solid whitesmoke;
      border-radius: 5px;

      .icon-wrapper {
        box-sizing: border-box;
        width: 335px;
        height: 190px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .bottom {
      color: whitesmoke;
      margin: 5px 0;
    }
  }
}
</style>