<!--
 * @Author: depp.chen
 * @Date: 2022-03-25 18:14:04
 * @Description: 模块拖拽
-->
<template>
  <Draggable
    v-model="dragList"
    item-key="key"
    :group="{ name: 'modules' }"
    class="drag-wrapper"
    :class="{ isDrag }"
    ghostClass="ghost"
    @Change="dragChange"
    @start="isDrag = true"
    @end="isDrag = false"
    v-bind="{ ...$attrs }"
  >
    <template #item="{ element, index }">
      <div>
        <slot :element="element">
          <div
            class="drag-item"
            @click.stop="moduleActive(element)"
            :class="[
              {
                active: element.key === pageActiveModule.key,
              },
              calculateClassName(element.name),
            ]"
          >
            <ModuleRender :module-date="element"></ModuleRender>
          </div>
        </slot>
      </div>
    </template>
  </Draggable>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Draggable from "vuedraggable";
import ModuleRender from "@editor/components/common/ModuleRender.vue";
import useModuleStore from "@editor/store/module";
import { IModule } from "@src/types/module.d";
import { getModuleStoreData } from "@editor/hooks/moduleStore";
import { comVModelHook } from "@editor/hooks/componentVModel";
import { dragHooks } from "@editor/hooks/dragHooks";
import { moduleTypeEnum } from "@src/enums/moduleType";

export default defineComponent({
  name: "ModuleDraggable",
  components: {
    Draggable,
    ModuleRender,
  },
  props: {
    modelValue: {
      type: Array,
      default: [],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // 是否处于拖拽状态
    const isDrag = ref(false);
    // 拖拽列表
    const dragList = comVModelHook(props, "modelValue", emit);
    // moduleStore
    const moduleStore = useModuleStore();

    /**
     * @description: 模块点击激活
     * @author: depp.chen
     * @param {  } element : 激活模块
     */
    function moduleActive(element: IModule) {
      moduleStore.changePageActiveModule(element);
    }

    /**
     * @description: 计算类名
     * @author: depp.chen
     */
    function calculateClassName(name: string) {
      if (name.indexOf(moduleTypeEnum.container) > -1) {
        return "dashed-line";
      }
    }

    // 模块STORE数据
    const { activePageRoute, pageActiveModule } = getModuleStoreData();
    // 拖拽公用
    const { dragChange } = dragHooks();

    return {
      isDrag,
      dragList,
      dragChange,
      moduleActive,
      activePageRoute,
      pageActiveModule,
      calculateClassName,
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
          &.dashed-line {
            border-style: dashed;
          }
        }
      }
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
