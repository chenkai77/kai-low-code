/*
 * @Author: depp.chen
 * @Date: 2022-03-24 15:57:34
 * @Description: 模块类型
 */

import { attrFormTypeEnum } from "@src/enums/attrFormType";

export interface IModule {
  props: { formType: attrFormTypeEnum; propsKey: string } & Record<string, any>;
  name: string;
  label: string;
  icon: string;
  key: string;
}
