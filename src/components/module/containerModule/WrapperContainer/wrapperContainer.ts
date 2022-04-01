/*
 * @Author: depp.chen
 * @Date: 2022-03-31 10:40:48
 * @Description: 编辑模式下和预览模式下横向容器的公用方法
 */
import { ILateralContainerColList } from "@src/types/module.d";
import { defineComponent, ref, PropType, computed, inject } from "vue";
import { attrFormTypeEnum } from "@src/enums/attrFormType";

export const wrapperContainerMixin = {
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
};

export const wrapperContainerProps = {
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
};

export function wrapperContainerSetup(props: {
  colList: ILateralContainerColList[];
}) {
  // 是否为空
  const isEmpty = computed(() => {
    let target = props.colList.some((e) => {
      return e.moduleList.length;
    });
    return !target;
  });

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

  return {
    isEmpty,
    isActive,
    colListConversion,
  };
}
