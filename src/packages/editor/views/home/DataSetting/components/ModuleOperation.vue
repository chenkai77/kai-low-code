<!--
 * @Author: depp.chen
 * @Date: 2022-03-25 15:50:29
 * @Description: 模块操作
-->
<template>
  <div class="module-operation">
    <el-button type="danger" @click="deleteModule">删除</el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from "vue";
import useModuleStore from "@editor/store/module";
import { attrFormComMap, attrFormTypeEnum } from "@editor/enums/attrFormType";
import { IModule } from "@src/types/module.d";
import { getModuleStoreData } from "@editor/hooks/moduleStore";

export default defineComponent({
  name: "ModuleOperation",
  setup() {
    const moduleStore = useModuleStore();

    function deleteModule() {
      moduleStore.deleteModule();
    }

    // 模块STORE数据
    const { pageActiveModule } = getModuleStoreData();

    return {
      deleteModule,
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
