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
import { ILateralContainerColList } from "@src/types/module.d";
import ModuleDraggable from "@editor/components/drag/ModuleDraggable.vue";
import { getModuleStoreData } from "@editor/hooks/moduleStore";
import { attrFormTypeEnum } from "@src/enums/attrFormType";

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
    showBorder: {
      type: Boolean,
      default: true,
      label: "是否显示间隔线",
      formType: attrFormTypeEnum.Switch,
      sort: 2,
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

    // // 是否当前激活模块
    // const isActive = computed(() => {
    //   if (props.moduleDate) {
    //     return pageActiveModule.value.key === props.moduleDate.key;
    //   } else {
    //     return false;
    //   }
    // });

    // 是否编辑模式当前激活模块
    const isActive = inject("isActive", false);

    /**
     * @description: 判断索引值是否在已选数据的区间中
     * @author: depp.chen
     */
    function judgementInterval(i: number) {
      let target = props.colList.find((e) => {
        return i >= e.value[0] && i <= e.value[1];
      });
      return target;
    }

    /**
     * @description: 栅格数组转换计算,计算出空白和有值的数组
     * @author: depp.chen
     */
    const colListConversion = computed(() => {
      let newBlankItem = -1;
      let list: ILateralContainerColList[] = [...props.colList];
      for (let i = 0; i < 12; i++) {
        let target = judgementInterval(i);
        if (!target) {
          if (newBlankItem === -1) {
            newBlankItem = i;
          } else {
            if (judgementInterval(i + 1)) {
              list.push({
                isBlank: true,
                value: [newBlankItem, i],
              } as ILateralContainerColList);
              newBlankItem = -1;
            }
          }
        }
      }
      list = list.sort((a, b) => a.value[0] - b.value[0]);
      return list;
    });

    // 模块STORE数据
    const { pageActiveModule } = getModuleStoreData();

    return {
      isEmpty,
      isActive,
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
