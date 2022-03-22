<!--
 * @Author: depp.chen
 * @Date: 2022-03-22 14:43:56
 * @Description: 模块渲染组件
-->
<template>
  <div class="module-render">
    <component :is="moduleObj[moduleName]"></component>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import moduleObj, { moduleList } from "@/components/basicModule/index";

export default defineComponent({
  name: 'ModuleRender',
  props: {
    moduleDate: {
      type: Object,
      default: () => { }
    }
  },
  setup(props) {
    const moduleName = computed(() => props.moduleDate.name)

    return {
      moduleName,
      moduleObj,
    }
  }
})
</script>


<style scoped lang="scss">
.home-wrapper {
}
</style>