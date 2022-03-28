/*
 * @Author: depp.chen
 * @Date: 2022-03-23 17:37:26
 * @Description: 属性表单类型
 */
import { ElInput, ElInputNumber } from "element-plus";
import NumInput from "@editor/components/attrSet/NumInput.vue";

export enum attrFormTypeEnum {
  input = "input",
  inputNumber = "inputNumber",
}

export const attrFormComMap: Record<attrFormTypeEnum, any> = {
  [attrFormTypeEnum.input]: ElInput,
  [attrFormTypeEnum.inputNumber]: NumInput,
};
