<template>
  <div class="attr-set">
    <div v-if="pageActiveModule && pageActiveModule.props">
      <el-form>
        <el-form-item
          :label="item.label"
          v-for="item in formList"
          :key="item.propsKey"
        >
          <component
            :is="attrFormComMap[item.formType]"
            v-model="item.formValue"
          ></component>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from "vue";
import useModuleStore from "@editor/store/module";
import { attrFormComMap, attrFormTypeEnum } from "@src/enums/attrFormType";
import { IModule } from "@src/types/module.d";

export default defineComponent({
  name: "AttrSetting",
  setup() {
    const moduleStore = useModuleStore();

    const pageActiveModule = computed(() => moduleStore.pageActiveModule);

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

    return {
      formList,
      attrFormComMap,
      pageActiveModule,
    };
  },
});
</script>

<style scoped lang="scss">
.attr-set {
}
</style>
