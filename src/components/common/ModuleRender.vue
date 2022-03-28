<!--
 * @Author: depp.chen
 * @Date: 2022-03-22 14:43:56
 * @Description: 模块渲染组件
-->
<template>
  <div class="module-render">
    <component
      :is="moduleObj[moduleName]"
      v-bind="moduleDate.propsValue"
    ></component>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { moduleObj } from "@src/components/module";

export default defineComponent({
  name: "ModuleRender",
  props: {
    moduleDate: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const moduleName = computed(() => props.moduleDate.name);

    return {
      moduleObj,
      moduleName,
    };
  },
});
</script>

<style scoped lang="scss">
.module-render {
  font-size: 0;
}
</style>
