<!--
 * @Author: depp.chen
 * @Date: 2022-03-24 10:00:38
 * @Description: 页面TAB栏
-->
<template>
  <div class="page-tab">
    <el-button type="primary" @click="addPage">新增页面</el-button>
    <div class="page-list">
      <div
        v-for="page in pageList"
        :key="page.route"
        :class="{ active: activePageRoute === page.route }"
        class="page-item"
        @click="selectActivePage(page)"
      >
        <i class="iconfont icon-13"></i>
        <div>{{ page.label }}</div>
      </div>
    </div>
    <AddPage v-model:visible="addPageVisible" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import useModuleStore from "@editor/store/module";
import AddPage from "./AddPage.vue";
import { getModuleStoreData } from "@editor/hooks/moduleStore";

export default defineComponent({
  name: "PageTab",
  components: {
    AddPage,
  },
  setup() {
    const moduleStore = useModuleStore();
    const addPageVisible = ref(false);

    function addPage() {
      addPageVisible.value = true;
    }

    function selectActivePage(page: IPage) {
      moduleStore.changeActivePageRoute(page.route);
    }

    // 模块STORE数据
    const { pageList, activePageRoute } = getModuleStoreData();

    return {
      pageList,
      addPage,
      activePageRoute,
      selectActivePage,
      addPageVisible,
    };
  },
});
</script>

<style scoped lang="scss">
.page-tab {
  .page-list {
    margin-top: 20px;
    .page-item {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding-left: 16px;
      .iconfont {
        margin-right: 16px;
      }

      &.active {
        background: $bg-primary-shallow;
      }
    }
  }
}
</style>
