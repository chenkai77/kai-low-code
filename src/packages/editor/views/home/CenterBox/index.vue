<!--
 * @Author: depp.chen
 * @Date: 2022-03-23 14:59:34
 * @Description: 中间内容区域
-->
<template>
  <div class="center-box" @click="moduleActiveBlur">
    <div class="editor-wrapper">
      <ModuleDraggable
        v-model="pageModuleList[activePageRoute].modules"
      ></ModuleDraggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Draggable from "vuedraggable";
import ModuleDrag from "@editor/views/home/ModuleDrag/index.vue";
import useModuleStore from "@editor/store/module";
import { getModuleStoreData } from "@editor/hooks/moduleStore";
import ModuleDraggable from "@editor/components/common/ModuleDraggable.vue";

export default defineComponent({
  name: "home",
  components: {
    Draggable,
    ModuleDrag,
    ModuleDraggable,
  },
  setup() {
    // moduleStore
    const moduleStore = useModuleStore();

    /**
     * @description: 置空激活模块
     * @author: depp.chen
     */
    function moduleActiveBlur(e: any) {
      let target = document.querySelector(".center-box .editor-wrapper");
      if (e.path.indexOf(target) <= -1) {
        moduleStore.changePageActiveModule({});
      }
    }

    // 模块STORE数据
    const { activePageRoute, pageActiveModule } = getModuleStoreData();

    return {
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
