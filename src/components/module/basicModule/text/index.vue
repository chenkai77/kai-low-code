<!--
 * @Author: depp.chen
 * @Date: 2022-03-10 15:26:25
 * @Description: 文本组件
-->
<template>
  <div class="text-component" :style="{ fontSize: fontSize + 'px' }">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { attrFormTypeEnum } from "@editor/enums/attrFormType";
export default defineComponent({
  name: "text",
  keyInfo: {
    label: "文本",
    icon: "icon-img",
  },
  props: {
    color: {
      type: String,
      label: "颜色",
      default: "默认颜色",
      formType: attrFormTypeEnum.Input,
    },
    fontSize: {
      type: String,
      label: "文字大小",
      default: "14",
      formType: attrFormTypeEnum.Input,
    },
    text: {
      type: String,
      label: "文字",
      default: "默认文本",
      formType: attrFormTypeEnum.Input,
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
