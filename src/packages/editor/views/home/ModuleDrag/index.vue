<!--
 * @Author: depp.chen
 * @Date: 2022-03-09 14:46:36
 * @Description: 左边组件拖拽区
-->
<template>
  <div class="module-drag">
    <el-tabs tab-position="left" style="height: 100%" class="tabs-wrapper">
      <el-tab-pane label="页面">
        <PageTab />
      </el-tab-pane>
      <el-tab-pane label="基础">
        <ModuleList :drag-list="basicPartList" />
      </el-tab-pane>
      <el-tab-pane label="布局">
        <ModuleList :drag-list="containerPartList" />
      </el-tab-pane>
      <el-tab-pane label="图表">图表</el-tab-pane>
      <el-tab-pane label="业务">业务</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTab from "./pageTab/index.vue";
import BasicModule from "./basicModule/index.vue";
import ModuleList from "./components/ModuleList.vue";
import { basicPartList, containerPartList } from "@src/components/module";

export default defineComponent({
  name: "ModuleDrag",
  components: {
    PageTab,
    ModuleList,
    BasicModule,
  },
  setup() {
    return {
      basicPartList,
      containerPartList,
    };
  },
});
</script>

<style scoped lang="scss">
.module-drag {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  border-right: 1px solid #eee;
  background: #fff;
  padding: 8px;
}
</style>
