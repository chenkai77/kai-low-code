<!--
 * @Author: depp.chen
 * @Date: 2022-03-23 14:59:34
 * @Description: 中间内容区域
-->
<template>
  <div class="center-box">
    <div class="editor-wrapper">
      <Draggable
        v-model="pageModuleList[activePageRoute]"
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
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import Draggable from "vuedraggable";
import ModuleDrag from "@editor/views/home/ModuleDrag/index.vue";
import ModuleRender from "@src/components/common/ModuleRender.vue";
import useModuleStore from "@editor/store/module";
import { IModule } from "@src/types/module.d";

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
    // const pageModuleList = ref([]);

    const moduleStore = useModuleStore();

    const activePageRoute = computed(() => moduleStore.activePageRoute);
    const pageActiveModule = computed(() => moduleStore.pageActiveModule);

    /**
     * @description: 拖动改变时
     * @author: depp.chen
     */
    function dragChange(val: any) {
      // 新增时
      if (val.added) {
        val.added.element.key = Symbol();
      }
    }

    function moduleActive(element: IModule) {
      moduleStore.changePageActiveModule(element);
    }

    return {
      isDrag,
      dragChange,
      moduleActive,
      activePageRoute,
      pageActiveModule,
      pageModuleList: moduleStore.allPageData,
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
      .drag-item {
        &.active {
          border: 1px solid $color-primary;
        }
      }
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
