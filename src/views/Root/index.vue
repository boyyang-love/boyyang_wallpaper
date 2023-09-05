<script setup lang="ts">
import Menu from './components/Menu/index.vue'
</script>

<template>
  <div class="root-wrapper">
    <Menu></Menu>
    <div class="root-router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="less">
.root-wrapper {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(34, 40, 49, 0.5);
  backdrop-filter: saturate(120%) blur(100px);
  display: flex;
  flex-direction: column;

  .root-router-view {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: conic-gradient(#edb1f1 70deg, #3490de 70deg 160deg, #9896f1 160deg 270deg, #8ef6e4 270deg 360deg);
      filter: blur(150px);
      animation: conic-gradient-move 15s linear infinite;
      overflow: hidden;
      z-index: -1;
    }

    @keyframes conic-gradient-move {
      0% {
        transform: rotateZ(0deg);
      }

      100% {
        transform: rotateZ(360deg);
      }
    }
  }
}
</style>