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
import { ILateralContainerColList } from "@src/types/module.d";
import { attrFormTypeEnum } from "@src/enums/attrFormType";
import ModuleRender from "@preview/components/module/ModuleRender.vue";
import { wrapperContainerSetup } from "@src/components/module/containerModule/WrapperContainer/setup";

export default defineComponent({
  name: "WrapperContainer",
  components: {
    ModuleRender,
  },
  props: {
    colList: {
      type: Array as PropType<ILateralContainerColList[]>,
      default: () => [
        { moduleList: [], value: [0, 5] },
        { moduleList: [], value: [6, 11] },
      ],
      label: "12栅格列比例",
      formType: attrFormTypeEnum.ColumnProportion,
      sort: 1,
    },
    moduleDate: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const { colListConversion } = wrapperContainerSetup(props);

    return {
      colListConversion,
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
