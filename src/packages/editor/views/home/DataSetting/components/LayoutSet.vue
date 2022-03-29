<!--
 * @Author: depp.chen
 * @Date: 2022-03-28 11:45:21
 * @Description: 布局设置
-->
<template>
  <div class="layout-set">
    <el-button type="primary" @click="addContainer">添加外层容器</el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from "vue";
import useModuleStore from "@editor/store/module";
import { attrFormComMap, attrFormTypeEnum } from "@editor/enums/attrFormType";
import { IModule } from "@src/types/module.d";
import { getModuleStoreData } from "@editor/hooks/moduleStore";
import { moduleObj } from "@src/components/module";
import { cloneLoop } from "@src/utils/cloneDeep";

export default defineComponent({
  name: "LayoutSet",
  setup() {
    const moduleStore = useModuleStore();

    /**
     * @description: 替换普通模块为容器中的模块
     * @author: depp.chen
     */
    function replaceModuleAddContainer(): IModule {
      let data = cloneLoop<IModule>(moduleObj["container_WrapperContainer"]);
      data.props.colList = {
        ...data.props.colList,
        formValue: [
          { moduleList: [pageActiveModule.value] },
          { moduleList: [] },
        ],
      };
      return data;
    }

    /**
     * @description: 添加容器
     * @author: depp.chen
     */
    function addContainer() {
      let list = moduleStore.allPageData[moduleStore.activePageRoute].modules;
      let targetIndex = list.findIndex(
        (e: IModule) => e.key === pageActiveModule.value.key
      );
      if (targetIndex > -1) {
        list.splice(targetIndex, 1, replaceModuleAddContainer());
      }
    }

    // 模块STORE数据
    const { pageActiveModule } = getModuleStoreData();

    return {
      addContainer,
      attrFormComMap,
      pageActiveModule,
    };
  },
});
</script>

<style scoped lang="scss">
.layout-set {
}
</style>
