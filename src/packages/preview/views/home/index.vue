<!--
 * @Author: depp.chen
 * @Date: 2022-03-09 14:39:10
 * @Description: 主页
-->
<template>
  <div class="home-wrapper">
    <div v-for="element in moduleList" :key="element.key">
      <ModuleRender :module-date="element"></ModuleRender>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ModuleRender from "@preview/components/module/ModuleRender.vue";
import { IModule } from "@src/types/module.d";
import { allJsonKey } from "@src/enums/cookieKey";

export default defineComponent({
  name: "home",
  components: {
    ModuleRender,
  },
  setup() {
    const moduleList = ref<IModule[]>([]);

    onMounted(() => {
      let allData = localStorage.getItem(allJsonKey);
      if (allData) {
        let data = JSON.parse(allData);
        moduleList.value = data["/"].modules;
      }
      console.log(moduleList.value);
    });

    return {
      moduleList,
    };
  },
});
</script>

<style scoped lang="scss">
.home-wrapper {
  height: 100vh;
  width: 100vw;
}
</style>
