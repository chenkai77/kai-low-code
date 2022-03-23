<!--
 * @Author: depp.chen
 * @Date: 2022-03-09 14:46:40
 * @Description: 右边属性设置区
-->
<template>
  <div class="data-setting">
    <el-tabs
      type="border-card"
      tab-position="top"
      style="height: 100%"
      class="tabs-wrapper"
    >
      <el-tab-pane label="属性">
        <AttrSet />
      </el-tab-pane>
      <el-tab-pane label="事件"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AttrSet from "./components/AttrSet.vue";
export default defineComponent({
  name: "AttrSetting",
  components: {
    AttrSet,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.data-setting {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 388px;
  border-left: 1px solid #eee;
  background: #fff;
  .tabs-wrapper {
    border: none;
    box-shadow: none;
  }
}
</style>
