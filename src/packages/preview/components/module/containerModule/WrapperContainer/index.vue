<!--
 * @Author: depp.chen
 * @Date: 2022-03-31 10:35:35
 * @Description: 
-->
<template>
  <van-row class="wrapper-container">
    <van-col
      v-for="item in colListConversion"
      :key="item.value[0]"
      :span="(item.value[1] - item.value[0] + 1) * 2"
      class="container-col"
    >
      <div v-for="element in item.moduleList" :key="element.key">
        <ModuleRender :module-date="element"></ModuleRender>
      </div>
    </van-col>
  </van-row>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed } from "vue";
import ModuleRender from "@preview/components/module/ModuleRender.vue";
import {
  wrapperContainerSetup,
  wrapperContainerProps,
} from "@src/components/module/containerModule/WrapperContainer/wrapperContainer";

export default defineComponent({
  name: "WrapperContainer",
  components: {
    ModuleRender,
  },
  props: {
    ...wrapperContainerProps,
  },
  setup(props) {
    const wrapperContainerCommonData = wrapperContainerSetup(props);

    return {
      ...wrapperContainerCommonData,
    };
  },
});
</script>

<style scoped lang="scss">
.wrapper-container {
  .container-col {
    min-height: 0px;
  }
}
</style>
