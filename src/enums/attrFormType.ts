/*
 * @Author: depp.chen
 * @Date: 2022-03-23 17:37:26
 * @Description: 属性表单类型
 */
import { ElInput, ElSwitch } from "element-plus";
import NumInput from "@editor/components/attrSet/NumInput.vue";
import ColumnProportion from "@editor/components/attrSet/ColumnProportion.vue";
import ColorPicker from "@editor/components/attrSet/ColorPicker.vue";
import Select from "@editor/components/attrSet/Select.vue";

export enum attrFormTypeEnum {
  Input = "Input",
  Switch = "Switch",
  NumInput = "NumInput",
  ColorPicker = "ColorPicker",
  ColumnProportion = "ColumnProportion",
  Select = "Select",
}

export const attrFormComMap: Record<attrFormTypeEnum, any> = {
  [attrFormTypeEnum.Input]: ElInput,
  [attrFormTypeEnum.Switch]: ElSwitch,
  [attrFormTypeEnum.NumInput]: NumInput,
  [attrFormTypeEnum.ColorPicker]: ColorPicker,
  [attrFormTypeEnum.ColumnProportion]: ColumnProportion,
  [attrFormTypeEnum.Select]: Select,
};
