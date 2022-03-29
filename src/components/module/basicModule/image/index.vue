<!--
 * @Author: depp.chen
 * @Date: 2022-03-10 15:26:25
 * @Description: 图片组件
-->
<template>
  <img :src="src" class="image-module" :style="{ width: width + 'px' }" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { attrFormTypeEnum } from "@editor/enums/attrFormType";

export default defineComponent({
  name: "image",
  keyInfo: {
    label: "图片",
    icon: "icon-img",
  },
  props: {
    // 图片地址
    src: {
      type: String,
      default: "https://chenkai.xyz/xkg/images/banner3.png",
      formType: attrFormTypeEnum.Input,
      label: "图片地址",
    },
    width: {
      type: Number,
      default: 50,
      formType: attrFormTypeEnum.NumInput,
      label: "宽度",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.image-module {
  width: 100px;
  font-size: 0;
}
</style>
