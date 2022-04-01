<!--
 * @Author: depp.chen
 * @Date: 2022-03-09 14:39:10
 * @Description: 主页
-->
<template>
  <div class="home-wrapper">
    <div v-for="element in moduleList" :key="element.key">
      <component
        :is="moduleObj[element.name]"
        v-bind="{ ...element.propsValue }"
      >
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { IModule } from "@src/types/module.d";
import { allJsonKey } from "@src/enums/cookieKey";
import { moduleObj } from "@preview/utils/moduleImport";

export default defineComponent({
  name: "home",
  components: {},
  setup() {
    const moduleList = ref<IModule[]>([]);

    onMounted(() => {
      let allData = localStorage.getItem(allJsonKey);
      if (allData) {
        let data = JSON.parse(allData);
        moduleList.value = data["/"].modules;
      }
    });

    return {
      moduleObj,
      moduleList,
    };
  },
});
</script>

<style scoped lang="scss"></style>
