<!--
 * @Author: depp.chen
 * @Date: 2022-03-25 17:16:31
 * @Description: 容器组件
-->
<template>
  <van-row
    class="wrapper-container"
    :class="{ 'is-empty': isEmpty, 'border-active': !isActive && showBorder }"
  >
    <van-col
      v-for="item in colListConversion"
      :key="item.value[0]"
      :span="(item.value[1] - item.value[0] + 1) * 2"
      class="container-col"
      :class="{ 'module-active': isActive || showBorder }"
    >
      <ModuleDraggable
        v-if="item.moduleList"
        :class="{ 'module-is-empty': !item.moduleList.length }"
        v-model="item.moduleList"
        :data-placeholder="'拖拽组件到此处'"
      ></ModuleDraggable>
    </van-col>
  </van-row>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed, inject } from "vue";
import ModuleDraggable from "@editor/components/common/ModuleDraggable.vue";
import {
  wrapperContainerSetup,
  wrapperContainerProps,
} from "@src/components/module/containerModule/WrapperContainer/wrapperContainer";

export default defineComponent({
  name: "WrapperContainer",
  components: {
    ModuleDraggable,
  },
  keyInfo: {
    label: "横向布局",
    icon: "icon-img",
  },
  props: {
    ...wrapperContainerProps,
  },
  setup(props) {
    const wrapperContainerCommonSetup = wrapperContainerSetup(props);

    return {
      ...wrapperContainerCommonSetup,
    };
  },
});
</script>

<style scoped lang="scss">
.wrapper-container {
  padding: 4px;
  &.border-active {
    border: 1px dashed $color-primary;
  }
  &.is-empty {
    height: 100px;
  }
  .container-col {
    &.module-active {
      border-right: 1px dashed $color-primary;
      &:nth-last-child(1) {
        border-right: none;
      }
    }
    .module-is-empty {
      position: relative;
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        content: attr(data-placeholder);
        width: 50px;
        text-align: center;
        transform: translate(-50%, -50%);
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
