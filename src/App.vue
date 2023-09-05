<script setup lang="ts">
import {RouterView} from 'vue-router'
import {AppProvider} from '@/components/Application'
</script>

<template>
  <AppProvider>
    <router-view></router-view>
  </AppProvider>
</template>
