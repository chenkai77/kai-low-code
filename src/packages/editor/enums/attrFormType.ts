/*
 * @Author: depp.chen
 * @Date: 2022-03-23 17:37:26
 * @Description: 属性表单类型
 */
import { ElInput, ElInputNumber } from "element-plus";
import NumInput from "@editor/components/attrSet/NumInput.vue";
import ColumnProportion from "@editor/components/attrSet/ColumnProportion.vue";

export enum attrFormTypeEnum {
  Input = "Input",
  NumInput = "NumInput",
  ColumnProportion = "ColumnProportion",
}

export const attrFormComMap: Record<attrFormTypeEnum, any> = {
  [attrFormTypeEnum.Input]: ElInput,
  [attrFormTypeEnum.NumInput]: NumInput,
  [attrFormTypeEnum.ColumnProportion]: ColumnProportion,
};
