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
    ></component>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { moduleObj } from "@src/components/module";
import { moduleTypeEnum } from "@src/enums/moduleType";

export default defineComponent({
  name: "ModuleRender",
  props: {
    moduleDate: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const otherObj = computed(() => {
      if (props.moduleDate.name.indexOf(moduleTypeEnum.container) > -1) {
        return {
          moduleDate: props.moduleDate,
        };
      }
      return {};
    });

    return {
      otherObj,
      moduleObj,
    };
  },
});
</script>

<style scoped lang="scss">
.module-render {
  font-size: 0;
}
</style>
