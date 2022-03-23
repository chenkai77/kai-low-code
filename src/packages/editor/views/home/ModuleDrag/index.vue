<!--
 * @Author: depp.chen
 * @Date: 2022-03-09 14:46:36
 * @Description: 左边组件拖拽区
-->
<template>
  <div class="module-drag">
    <el-tabs tab-position="left" style="height: 100%" class="tabs-wrapper">
      <el-tab-pane label="页面"></el-tab-pane>
      <el-tab-pane label="基础">
        <Draggable
          v-model="basicPartList"
          item-key="name"
          :sort="false"
          :group="{ name: 'modules', pull: 'clone', put: false }"
          class="basic-part-list"
        >
          <template #item="{ element }">
            <DragItem class="basic-part-item" :label="element.label" :icon="element.icon" />
          </template>
        </Draggable>
      </el-tab-pane>
      <el-tab-pane label="图表">图表</el-tab-pane>
      <el-tab-pane label="业务">业务</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'
import Draggable from 'vuedraggable';
import { basicPartList } from "@src/components/basicModule/index";
import DragItem from './components/DragItem.vue'

export default defineComponent({
  name: 'ModuleDrag',
  components: {
    Draggable,
    DragItem
  },
  setup() {
    return {
      basicPartList,
    }
  }
})
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

  .basic-part-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .basic-part-item {
      width: 48%;
    }
  }
}
</style>