<!--
 * @Author: depp.chen
 * @Date: 2022-03-25 17:16:31
 * @Description: 容器组件
-->
<template>
  <van-row class="wrapper-container" :class="{ 'is-empty': isEmpty }">
    <van-col
      v-for="item in colList"
      :key="item.id"
      :span="item.span"
      class="container-col"
      :class="{ 'module-active': isActive }"
    >
      <ModuleDraggable
        :class="{ 'module-is-empty': !item.moduleList.length }"
        v-model="item.moduleList"
        :data-placeholder="'拖拽组件到此处'"
      ></ModuleDraggable>
    </van-col>
  </van-row>
</template>

<script lang="ts">
import Draggable from "vuedraggable";
import { defineComponent, ref, PropType, computed } from "vue";
import { ILateralContainerColList } from "@src/types/module.d";
import ModuleDraggable from "@src/components/common/ModuleDraggable.vue";
import { getModuleStoreData } from "@editor/hooks/moduleStore";
import { attrFormTypeEnum } from "@editor/enums/attrFormType";

export default defineComponent({
  name: "WrapperContainer",
  components: {
    Draggable,
    ModuleDraggable,
  },
  keyInfo: {
    label: "横向布局",
    icon: "icon-img",
  },
  props: {
    colList: {
      type: Array as PropType<ILateralContainerColList[]>,
      default: () => [
        { id: "1", moduleList: [], span: 12 },
        { id: "2", moduleList: [], span: 12 },
      ],
      label: "12栅格列比例",
      formType: attrFormTypeEnum.ColumnProportion,
    },
    moduleDate: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    // 是否为空
    const isEmpty = computed(() => {
      let target = props.colList.some((e) => {
        return e.moduleList.length;
      });
      return !target;
    });

    // 是否当前激活模块
    const isActive = computed(() => {
      if (props.moduleDate) {
        return pageActiveModule.value.key === props.moduleDate.key;
      } else {
        return false;
      }
    });

    // 模块STORE数据
    const { pageActiveModule } = getModuleStoreData();

    return {
      isEmpty,
      isActive,
    };
  },
});
</script>

<style scoped lang="scss">
.wrapper-container {
  padding: 4px;
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
