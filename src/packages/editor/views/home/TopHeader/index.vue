<!--
 * @Author: depp.chen
 * @Date: 2022-03-23 15:04:04
 * @Description: 顶部栏
-->
<template>
  <div class="top-header">
    <el-button type="primary" @click="showJson">JSON</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRaw } from "vue";
import useModuleStore from "@editor/store/module";

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

    return {
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
}
</style>
