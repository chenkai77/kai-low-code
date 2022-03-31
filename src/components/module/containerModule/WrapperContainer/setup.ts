/*
 * @Author: depp.chen
 * @Date: 2022-03-31 10:40:48
 * @Description: 编辑模式下和预览模式下横向容器的公用方法
 */
import { ILateralContainerColList } from "@src/types/module.d";
import { computed } from "vue";

export function wrapperContainerSetup(props: {
  colList: ILateralContainerColList[];
}) {
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
    colListConversion,
  };
}
