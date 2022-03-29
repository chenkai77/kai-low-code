<template>
  <div class="attr-set">
    <div v-if="pageActiveModule && pageActiveModule.props">
      <div class="form-wrapper">
        <div class="form-item" v-for="item in formList" :key="item.propsKey">
          <div class="form-label">
            {{ item.label + " ：" }}
          </div>
          <div class="form-editor">
            <component
              :is="attrFormComMap[item.formType]"
              v-model="pageActiveModule.propsValue[item.propsKey]"
            ></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from "vue";
import useModuleStore from "@editor/store/module";
import { attrFormComMap, attrFormTypeEnum } from "@editor/enums/attrFormType";
import { IModule, IProps } from "@src/types/module.d";
import { getModuleStoreData } from "@editor/hooks/moduleStore";

export default defineComponent({
  name: "AttrSetting",
  setup() {
    const moduleStore = useModuleStore();

    const formList = ref<IProps[]>([]);

    watch(
      () => moduleStore.pageActiveModule.key,
      () => {
        if (moduleStore.pageActiveModule.props) {
          let propsData = moduleStore.pageActiveModule.props;
          formList.value = Object.keys(propsData)
            .map((e) => propsData[e])
            .filter((e) => e.label);
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
.attr-set {
  .form-wrapper {
    .form-item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 20px;
      .form-label {
        flex-shrink: 0;
        height: 40px;
        line-height: 40px;
      }
      .form-editor {
      }
    }
  }
}
</style>
