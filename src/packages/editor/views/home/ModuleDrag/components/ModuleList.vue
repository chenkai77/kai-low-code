<!--
 * @Author: depp.chen
 * @Date: 2022-03-28 15:17:01
 * @Description: 基础模块
-->
<template>
  <div class="module-list">
    <Draggable
      v-model="dragList"
      item-key="name"
      :sort="false"
      :group="{ name: 'modules', pull: 'clone', put: false }"
      class="part-list"
      :clone="dragClone"
    >
      <template #item="{ element }">
        <DragItem
          class="part-item"
          :label="element.label"
          :icon="element.icon"
        />
      </template>
    </Draggable>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { IModule } from "@src/types/module.d";
import { cloneLoop } from "@src/utils/cloneDeep";
import Draggable from "vuedraggable";
import DragItem from "./DragItem.vue";

export default defineComponent({
  name: "BasicModule",
  components: { Draggable, DragItem },
  props: {
    dragList: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    /**
     * @description: 拖拽克隆
     * @author: depp.chen
     */
    const dragClone = (val: IModule) => {
      console.log("当前拖拽克隆的组件:", val);
      return cloneLoop(val);
    };

    return {
      dragClone,
    };
  },
});
</script>

<style scoped lang="scss">
.module-list {
  .part-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .part-item {
      width: 48%;
    }
  }
}
</style>
