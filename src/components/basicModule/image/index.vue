<!--
 * @Author: depp.chen
 * @Date: 2022-03-10 15:26:25
 * @Description: 图片组件
-->
<template>
  <img :src="src" class="image-module" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "image",
  key: {
    label: "图片",
    icon: "icon-img",
  },
  props: {
    src: {
      type: String,
      default: "https://chenkai.xyz/xkg/images/banner3.png",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.image-module {
  width: 200px;
  font-size: 0;
}
</style>
