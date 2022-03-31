<!--
 * @Author: depp.chen
 * @Date: 2022-03-09 14:39:10
 * @Description: 主页
-->
<template>
  <div class="home-wrapper">
    <TopHeader />
    <div class="content">
      <ModuleDrag />
      <DataSetting />
      <CenterBox />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Draggable from "vuedraggable";
import ModuleDrag from "@editor/views/home/ModuleDrag/index.vue";
import DataSetting from "@editor/views/home/DataSetting/index.vue";
import CenterBox from "@editor/views/home/CenterBox/index.vue";
import TopHeader from "@editor/views/home/TopHeader/index.vue";

export default defineComponent({
  name: "home",
  components: {
    ModuleDrag,
    Draggable,
    DataSetting,
    CenterBox,
    TopHeader,
  },
  setup() {},
});
</script>

<style scoped lang="scss">
.home-wrapper {
  height: 100vh;
  padding-top: 48px;
  width: 100vw;
  .content {
    min-width: 1063px;
    padding: 0 388px 0 300px;
    background: #f5f5f5;
    position: relative;
    height: 100%;
    width: 100%;
  }
}
</style>
