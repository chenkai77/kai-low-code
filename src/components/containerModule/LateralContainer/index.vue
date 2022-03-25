<!--
 * @Author: depp.chen
 * @Date: 2022-03-25 17:16:31
 * @Description: 容器组件
-->
<template>
  <van-row class="lateral-container">
    <van-col v-for="item in colList" :key="item.id">
      <Draggable
        v-model="item.moduleList"
        item-key="name"
        :group="{ name: 'modules' }"
        class="drag-wrapper"
        :class="{ isDrag }"
        ghostClass="ghost"
        @Change="dragChange"
        @start="isDrag = true"
        @end="isDrag = false"
      >
        <template #item="{ element, index }">
          <div
            class="drag-item"
            @click="moduleActive(element)"
            :class="{ active: element.key === pageActiveModule.key }"
          >
            <ModuleRender :module-date="element"></ModuleRender>
          </div>
        </template>
      </Draggable>
    </van-col>
  </van-row>
</template>

<script lang="ts">
import Draggable from "vuedraggable";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "LateralContainer",
  components: {
    Draggable,
  },
  props: {},
  setup() {
    const colList = ref([]);

    return {
      colList,
    };
  },
});
</script>

<style scoped lang="scss">
.lateral-container {
  height: 100px;
}
</style>
