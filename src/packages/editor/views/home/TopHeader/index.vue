<!--
 * @Author: depp.chen
 * @Date: 2022-03-23 15:04:04
 * @Description: 顶部栏
-->
<template>
  <div class="top-header">
    <div class="top-left">
      <!-- <el-button type="primary" @click="showJson">JSON</el-button> -->
    </div>
    <div class="top-right">
      <el-button size="small" @click="preview">预览</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRaw } from "vue";
import useModuleStore from "@editor/store/module";
import { allJsonKey } from "@src/enums/cookieKey";

export default defineComponent({
  name: "ModuleDrag",
  components: {},
  setup() {
    // moduleStore
    const moduleStore = useModuleStore();

    /**
     * @description: 显示JSON
     * @author: depp.chen
     */
    function showJson() {
      console.log(toRaw(moduleStore.allPageData));
    }

    /**
     * @description: 预览
     * @author: depp.chen
     */
    function preview() {
      localStorage.setItem(
        allJsonKey,
        JSON.stringify(toRaw(moduleStore.allPageData))
      );
      window.open(location.origin + "/preview/");
    }

    return {
      preview,
      showJson,
    };
  },
});
</script>

<style scoped lang="scss">
.top-header {
  height: 48px;
  border-bottom: 1px solid #eee;
  background: #fff;
  margin-top: -48px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  justify-content: space-between;
  .top-right {
    padding-right: 16px;
  }
}
</style>
