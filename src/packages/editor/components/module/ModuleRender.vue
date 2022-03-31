<!--
 * @Author: depp.chen
 * @Date: 2022-03-22 14:43:56
 * @Description: 模块渲染组件
-->
<template>
  <div class="module-render">
    <component
      :is="moduleObj[moduleDate.name]"
      v-bind="{ ...moduleDate.propsValue, ...otherObj }"
    >
      <template #slotData="item">
        <ModuleDraggable
          v-if="item.moduleList"
          :class="{ 'module-is-empty': !item.moduleList.length }"
          v-model="item.moduleList"
          :data-placeholder="'拖拽组件到此处'"
        ></ModuleDraggable>
      </template>
    </component>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch, provide } from "vue";
import { moduleObj } from "@editor/utils/moduleImport";
import { moduleTypeEnum } from "@src/enums/moduleType";
import { getModuleStoreData } from "@editor/hooks/moduleStore";

export default defineComponent({
  name: "ModuleRender",
  props: {
    moduleDate: {
      type: Object,
      default: () => {},
    },
  },
  components: {},
  setup(props) {
    const otherObj = computed(() => {
      if (props.moduleDate.name.indexOf(moduleTypeEnum.container) > -1) {
        return {
          moduleDate: props.moduleDate,
        };
      }
      return {};
    });

    // 模块STORE数据
    const { pageActiveModule } = getModuleStoreData();

    const isActive = computed(() => {
      if (props.moduleDate) {
        return pageActiveModule.value.key === props.moduleDate.key;
      } else {
        return false;
      }
    });

    provide("isActive", isActive);

    return {
      otherObj,
      moduleObj,
    };
  },
});
</script>

<style scoped lang="scss"></style>
