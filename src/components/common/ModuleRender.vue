<!--
 * @Author: depp.chen
 * @Date: 2022-03-22 14:43:56
 * @Description: 模块渲染组件
-->
<template>
  <div class="module-render">
    <component :is="moduleObj[moduleName]" v-bind="moduleProps"></component>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
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
    const moduleProps = computed(() => {
      let propsObj: Record<string, any> = {};
      Object.keys(props.moduleDate.props).forEach((e) => {
        propsObj[e] = props.moduleDate.props[e].formValue;
      });
      return propsObj;
    });

    return {
      moduleObj,
      moduleName,
      moduleProps,
    };
  },
});
</script>

<style scoped lang="scss">
.module-render {
  font-size: 0;
}
</style>
