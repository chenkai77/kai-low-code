<!--
 * @Author: depp.chen
 * @Date: 2022-03-25 15:50:29
 * @Description: 模块操作
-->
<template>
  <div class="module-operation">
    <el-button type="danger">删除</el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from "vue";
import useModuleStore from "@editor/store/module";
import { attrFormComMap, attrFormTypeEnum } from "@src/enums/attrFormType";
import { IModule } from "@src/types/module.d";
import { getModuleStoreData } from "@editor/hooks/moduleStore";

export default defineComponent({
  name: "ModuleOperation",
  setup() {
    const moduleStore = useModuleStore();

    const formList = ref<IModule["props"][]>([]);

    watch(
      () => moduleStore.pageActiveModule.key,
      () => {
        if (moduleStore.pageActiveModule.props) {
          let propsData = moduleStore.pageActiveModule.props;
          formList.value = Object.keys(propsData).map((e) => propsData[e]);
        } else {
          formList.value = [];
        }
      },
      {
        immediate: true,
      }
    );

    // 模块STORE数据
    const { pageActiveModule } = getModuleStoreData();

    return {
      formList,
      attrFormComMap,
      pageActiveModule,
    };
  },
});
</script>

<style scoped lang="scss">
.module-operation {
}
</style>
