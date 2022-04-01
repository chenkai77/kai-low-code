/*
 * @Author: depp.chen
 * @Date: 2022-04-01 18:14:42
 * @Description: 公共props
 */
import { attrFormTypeEnum } from "@src/enums/attrFormType";
export const colorProps = {
  type: String,
  label: "颜色",
  default: undefined,
  formType: attrFormTypeEnum.ColorPicker,
};
