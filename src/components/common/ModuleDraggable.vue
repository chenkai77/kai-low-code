<!--
 * @Author: depp.chen
 * @Date: 2022-03-25 18:14:04
 * @Description: 模块拖拽
-->
<template>
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
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
} from "vue";
import Draggable from "vuedraggable";
import ModuleRender from "@src/components/common/ModuleRender.vue";
import useModuleStore from "@editor/store/module";
import { IModule } from "@src/types/module.d";
import { getModuleStoreData } from "@editor/hooks/moduleStore";
export default defineComponent({
  name: "home",
  components: {
    Draggable,
    ModuleRender,
  },
  setup() {
    // 是否处于拖拽状态
    const isDrag = ref(false);
    // moduleStore
    const moduleStore = useModuleStore();

    /**
     * @description: 拖动改变时
     * @author: depp.chen
     */
    function dragChange(val: any) {
      // 新增时
      if (val.added) {
        val.added.element.key = Symbol();
        moduleStore.changePageActiveModule(val.added.element);
      }
    }

    /**
     * @description: 模块点击激活
     * @author: depp.chen
     * @param {  } element : 激活模块
     */
    function moduleActive(element: IModule) {
      moduleStore.changePageActiveModule(element);
    }

    /**
     * @description: 置空激活模块
     * @author: depp.chen
     */
    function moduleActiveBlur(e: Record<string, any>) {
      let target = document.querySelector(".center-box .editor-wrapper");
      let setEl = document.querySelector(".data-setting");
      if (e.path.indexOf(target) <= -1 && e.path.indexOf(setEl) <= -1) {
        moduleStore.changePageActiveModule({});
      }
    }

    function documentClickListener() {
      document.addEventListener("click", moduleActiveBlur);
    }

    onMounted(() => {
      documentClickListener();
    });

    onUnmounted(() => {
      document.removeEventListener("click", moduleActiveBlur);
    });

    // 模块STORE数据
    const { activePageRoute, pageActiveModule } = getModuleStoreData();

    return {
      isDrag,
      dragChange,
      moduleActive,
      activePageRoute,
      pageActiveModule,
      moduleActiveBlur,
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
