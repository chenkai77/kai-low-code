<!--
 * @Author: depp.chen
 * @Date: 2022-03-10 15:26:25
 * @Description: 图片组件
-->
<template>
  <div class="image-module" :style="{ 'text-align': textAlign }">
    <img :src="src" class="image" :style="{ width: width + 'px' }" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { attrFormTypeEnum } from "@src/enums/attrFormType";

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
      sort: 1,
    },
    width: {
      type: Number,
      default: 50,
      formType: attrFormTypeEnum.NumInput,
      label: "宽度",
      sort: 2,
    },
    textAlign: {
      type: String,
      default: "center",
      formType: attrFormTypeEnum.Select,
      label: "位置布局",
      sort: 3,
      setComponentProps: {
        options: [
          {
            label: "居左",
            value: "left",
          },
          {
            label: "居中",
            value: "center",
          },
          {
            label: "居右",
            value: "right",
          },
        ],
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.image-module {
  font-size: 0;
  .image {
  }
}
</style>
