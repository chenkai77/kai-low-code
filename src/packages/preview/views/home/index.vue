<!--
 * @Author: depp.chen
 * @Date: 2022-03-09 14:39:10
 * @Description: 主页
-->
<template>
  <div class="home-wrapper">
    888
    <div v-for="element in configJson" :key="element.name">
      <ModuleRender :module-date="element"></ModuleRender>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ModuleRender from '@src/components/common/ModuleRender.vue';

export default defineComponent({
  name: 'home',
  components: {
    ModuleRender
  },
  setup() {
    const configJson = []
    return {
      configJson,
    }
  }
})
</script>


<style scoped lang="scss">
.home-wrapper {
  height: 100vh;
  width: 100vw;
}
</style>
