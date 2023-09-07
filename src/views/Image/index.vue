<script setup lang="ts">
import {watch, onMounted} from 'vue'
import ImageCard from './components/imageCard/index.vue'
import {useImage} from './hooks/useImage'

const {
  imageData,
  pageSizes,
  sortOptions,
  iconClick,
  pageChange,
  pageSizeChange,
  getList,
} = useImage()


onMounted(() => {
  getList()
})

watch(() => imageData.sort, () => {
  getList()
})

</script>

<template>
  <div class="image-wrapper">
    <div
        class="card-wrapper"
        v-for="item in imageData.list"
    >
      <ImageCard
          :uid="item.uid"
          :url="item.cover"
          :star="item.thumbs_up"
          :is-like="item.isLike"
          :is-spin="item.isSpin"
          @icon-click="(e) => iconClick(e, item)"
      ></ImageCard>
    </div>

    <div class="pagination">
      <n-space>
        <n-pagination
            v-model:item-count="imageData.count"
            v-model:page="imageData.page"
            v-model:page-size="imageData.limit"
            v-model:page-sizes="pageSizes"
            @update:page-size="pageSizeChange"
            @update:page="pageChange"
            :page-slot="5"
            show-size-picker
        ></n-pagination>
        <n-select
            size="small"
            v-model:value="imageData.sort"
            :options="sortOptions"
            :consistent-menu-width="false"
        />
      </n-space>
    </div>

  </div>
</template>

<style scoped lang="less">
.image-wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding-bottom: 45px;

  .card-wrapper {
    width: 100%;
  }

  .pagination {
    position: fixed;
    background-color: rgba(34, 40, 49, 1);
    backdrop-filter: saturate(120%) blur(100px);
    padding: 10px 0;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;

  }
}
</style>