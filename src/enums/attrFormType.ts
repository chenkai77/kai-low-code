/*
 * @Author: depp.chen
 * @Date: 2022-03-23 17:37:26
 * @Description: 属性表单类型
 */
import { ElInput } from "element-plus";
export enum attrFormTypeEnum {
  input = "input",
}

export const attrFormComMap: Record<attrFormTypeEnum, any> = {
  [attrFormTypeEnum.input]: ElInput,
};
