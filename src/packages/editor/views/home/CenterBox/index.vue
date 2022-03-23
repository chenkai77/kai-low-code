<!--
 * @Author: depp.chen
 * @Date: 2022-03-23 14:59:34
 * @Description: 中间内容区域
-->
<template>
  <div class="center-box">
    <div class="editor-wrapper">
      <Draggable
        v-model="pageModuleList"
        item-key="name"
        :group="{ name: 'modules', put: true }"
        class="drag-wrapper"
        :class="{ isDrag }"
        ghostClass="ghost"
        @Change="dragChange"
        @clone="dragClone"
        @start="isDrag = true"
        @end="isDrag = false"
      >
        <template #item="{ element }">
          <div class="drag-item" @click="moduleActive(element)">
            <ModuleRender :module-date="element"></ModuleRender>
          </div>
        </template>
      </Draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Draggable from "vuedraggable";
import ModuleDrag from "@editor/views/home/ModuleDrag/index.vue";
import ModuleRender from "@src/components/common/ModuleRender.vue";
export default defineComponent({
  name: "home",
  components: {
    ModuleDrag,
    Draggable,
    ModuleRender,
  },
  setup() {
    // 是否处于拖拽状态
    const isDrag = ref(false);
    const pageModuleList = ref([]);
    function dragChange(val: any) {
      console.log(val, pageModuleList.value);
    }
    function dragClone(val: any) {
      console.log(val);
    }

    function moduleActive(element: any) {}

    return {
      dragClone,
      dragChange,
      pageModuleList,
      isDrag,
      moduleActive,
    };
  },
});
</script>

<style scoped lang="scss">
.center-box {
  width: 100%;
  min-width: 375px;
  height: 100%;
  position: relative;
  .editor-wrapper {
    position: absolute;
    left: 50%;
    top: 100px;
    width: 375px;
    height: 667px;
    background: #fff;
    box-shadow: 2px 0 10px rgb(0 0 0 / 20%);
    transform: translateX(-50%);
    .drag-wrapper {
      width: 100%;
      height: 100%;
      // &.isDrag .drag-item :deep(.module-render) {
      //   border: 1px solid #fab005;
      // }
    }
  }
}
.ghost {
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    box-sizing: border-box;
    background: $color-primary-shallow;
    border: 2px solid $color-primary;
  }
}
</style>
