<!--
 * @Author: depp.chen
 * @Date: 2022-03-10 15:26:25
 * @Description: 图片组件
-->
<template>
  <div class="button-component">
    <van-button type="primary" v-bind="buttonConfig">按钮</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";
import { attrFormTypeEnum } from "@src/enums/attrFormType";
import { colorProps } from "@src/utils/commonProps";

export default defineComponent({
  name: "button",
  keyInfo: {
    label: "按钮",
    icon: "icon-img",
  },
  props: {
    size: {
      type: String,
      default: "normal",
      formType: attrFormTypeEnum.Select,
      setComponentProps: {
        options: [
          { label: "大号按钮", value: "large" },
          { label: "普通按钮", value: "normal" },
          { label: "小型按钮", value: "small" },
          { label: "迷你按钮", value: "mini" },
        ],
      },
      label: "尺寸",
      sort: 1,
    },
    type: {
      type: String,
      default: "default",
      formType: attrFormTypeEnum.Select,
      setComponentProps: {
        options: [
          { label: "主要按钮", value: "primary" },
          { label: "成功按钮", value: "success" },
          { label: "默认按钮", value: "default" },
          { label: "警告按钮", value: "warning" },
          { label: "危险按钮", value: "danger" },
        ],
      },
      label: "类型",
      sort: 2,
    },
    plain: {
      type: Boolean,
      default: false,
      formType: attrFormTypeEnum.Switch,
      label: "朴素(文字为按钮颜色，背景为白色)",
      sort: 3,
    },
    hairline: {
      type: Boolean,
      default: false,
      formType: attrFormTypeEnum.Switch,
      label: "细边框(边框宽度为0.5px)",
      sort: 4,
    },
    disabled: {
      type: Boolean,
      default: false,
      formType: attrFormTypeEnum.Switch,
      label: "禁用",
      sort: 5,
    },
    loading: {
      type: Boolean,
      default: false,
      formType: attrFormTypeEnum.Switch,
      label: "loading",
      sort: 6,
    },
    square: {
      type: String,
      default: "square",
      formType: attrFormTypeEnum.Select,
      setComponentProps: {
        options: [
          { label: "方形按钮", value: "square" },
          { label: "圆形按钮", value: "round" },
        ],
      },
      label: "按钮形状",
      sort: 7,
    },
    color: {
      ...colorProps,
      sort: 8,
    },
  },
  setup(props) {
    const buttonConfig = computed(() => {
      let config = {
        size: props.size,
        type: props.type,
        plain: props.plain,
        hairline: props.hairline,
        disabled: props.disabled,
        loading: props.loading,
        color: props.color,
      };
      let square = { [props.square]: true };
      return {
        ...config,
        ...square,
      };
    }) as Record<string, any>;

    function calculateButtonStyle() {}

    watch(props, () => {
      let cssText = calculateButtonStyle();
    });

    return {
      buttonConfig,
    };
  },
});
</script>

<style scoped lang="scss">
.text-wrapper {
}
</style>
