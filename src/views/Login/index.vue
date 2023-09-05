<script setup lang="ts">
import {useLogin} from './hooks/useLogin'

const {inputsLogin, loginData, loginSubmit} = useLogin()

</script>

<template>
  <div class="loagin-wrapper">
    <div class="title">登录</div>
    <div class="content">
      <n-space vertical size="large">
        <div
            class="input-wrapper"
        >
          <n-icon
              :component="inputsLogin[0].icon"
              :size="inputsLogin[0].size"
              class="icon"
          >
          </n-icon>
          <n-input
              :placeholder="inputsLogin[0].placeholder"
              :bordered="false"
              :type="inputsLogin[0].type"
              :show-count="true"
              :clearable="true"
              :maxlength="inputsLogin[0].maxlength"
              v-model:value="loginData.username"
          ></n-input>
        </div>

        <div
            class="input-wrapper"
        >
          <n-icon
              :component="inputsLogin[1].icon"
              :size="inputsLogin[1].size"
              class="icon"
          >
          </n-icon>
          <n-input
              :placeholder="inputsLogin[1].placeholder"
              :bordered="false"
              :type="inputsLogin[1].type"
              :show-count="true"
              :clearable="true"
              :maxlength="inputsLogin[1].maxlength"
              v-model:value="loginData.password"
          ></n-input>
        </div>
      </n-space>
    </div>

    <div class="submit-btn-wrapper">
      <div class="btn" @click="loginSubmit">登录</div>
    </div>
  </div>
</template>

<style scoped lang="less">
@titleH: 45px;
.loagin-wrapper {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #4696c8;
  position: relative;

  .title {
    box-sizing: border-box;
    width: 100%;
    height: @titleH;
    border-bottom: 1px solid rgba(245, 245, 245, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: whitesmoke;
    position: absolute;
    top: 0;
    cursor: pointer;
    -webkit-app-region: drag;
  }

  .content {
    box-sizing: border-box;
    width: 350px;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    transition: all 0.3s linear;

    &:hover {
      box-shadow: 20px 20px 60px #3c80aa,
        -20px -20px 60px #51ade6;

    }

    .icon {
      margin-right: 15px;
    }

    .input-wrapper {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      align-items: center;
      color: whitesmoke;
    }
  }

  .submit-btn-wrapper {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    //margin-top: 35px;

    .btn {
      width: 100px;
      color: whitesmoke;
      font-weight: bolder;
      padding: 5px 15px;
      border-radius: 5px;
      cursor: pointer;
      //box-shadow: 5px 5px 10px rgba(5, 73, 125, 1),
      //  -5px -5px 10px rgb(7, 99, 169, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all .4s linear;

      &:hover {
        box-shadow: 5px 5px 5px #3c80aa,
          -5px -5px 5px #51ade6;
      }
    }
  }

}
</style>