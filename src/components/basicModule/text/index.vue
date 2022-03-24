<!--
 * @Author: depp.chen
 * @Date: 2022-03-10 15:26:25
 * @Description: 文本组件
-->
<template>
  <div class="text-component">{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { attrFormTypeEnum } from "@src/enums/attrFormType";
export default defineComponent({
  name: "text",
  key: {
    label: "文本",
    icon: "icon-img",
  },
  props: {
    text: {
      type: String,
      label: "文字",
      default: "默认文本",
      formType: attrFormTypeEnum.input,
    },
    color: {
      type: String,
      label: "颜色",
      default: "默认颜色",
      formType: attrFormTypeEnum.input,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.text-wrapper {
}
</style>
