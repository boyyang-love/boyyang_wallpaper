<script setup lang="ts">
import {icons, type IconsItem} from './icons'

interface Props {
  uid: number
  url: string
  star: number
  isLike: boolean
  isSpin: boolean
}

interface Emits {
  (e: 'iconClick', item: IconsItem & { url: string }): void
}

const props = withDefaults(defineProps<Props>(), {
  isStar: false,
  isSpin: false,
})

const emits = defineEmits<Emits>()

const iconClick = (item: IconsItem) => {
  emits('iconClick', {...item, url: props.url})
}

</script>

<template>
  <div class="image-card-wrapper">
    <img :src="props.url" alt="" class="img">
    <div class="btns-wrapper">
      <n-spin
          :show="props.isSpin"
          :rotate="false">
        <n-space vertical>
          <div class="icon-wrapper" v-for="item in icons">
            <n-icon
                :size="item.size"
                :component="item.icon"
                :color="props.isLike ? 'rgb(192,70,85)' : '#252a34'"
                @click="iconClick(item)"
                class="icon"
                v-if="item.isBadge"
            >
            </n-icon>
            <n-icon
                :size="item.size"
                :component="item.icon"
                @click="iconClick(item)"
                class="icon"
                v-else
            >
            </n-icon>
          </div>
        </n-space>
        <template #icon>
          <div class="inner-text">
          </div>
        </template>
      </n-spin>
    </div>
  </div>
</template>

<style scoped lang="less">
.image-card-wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 5px solid whitesmoke;
  position: relative;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.5);

  .img {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .btns-wrapper {
    position: absolute;
    right: 10px;
    bottom: 10px;
    border-radius: 50px;
    background: linear-gradient(145deg, rgba(191, 191, 191, 0.4), rgba(227, 227, 227, 0.5));
    backdrop-filter: saturate(220%) blur(50px);
    box-shadow: 20px 20px 60px #b4b4b4,
      -20px -20px 60px #f4f4f4;
    padding: 5px;
    border: 1px solid whitesmoke;
    overflow: hidden;

    .icon {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 50px;
      //color: #252a34;
    }

    .inner-text {
      box-sizing: border-box;
      width: 100%;
      height: 100px;
      background: linear-gradient(180deg, #c6ffdd, #fbd786, #f7797d);
      position: absolute;
      top: -30px;
      animation: circle 4s linear infinite;
    }

    @keyframes circle {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(120px);
      }

      100% {
        transform: translateY(0);
      }
    }
  }
}
</style>