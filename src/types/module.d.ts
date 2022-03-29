/*
 * @Author: depp.chen
 * @Date: 2022-03-24 15:57:34
 * @Description: 模块类型
 */

import { attrFormTypeEnum } from "@editor/enums/attrFormType";

// 模块 props 类型
export interface IProps {
  formType: attrFormTypeEnum;
  propsKey: string;
  label: string;
  [key: string]: any;
}

// 模块类型
export interface IModule {
  props: Record<string, IProps>;
  name: string;
  label: string;
  icon: string;
  key: Symbol;
  propsValue: Record<string, any>;
}

// 容器组件props colList 属性类型
export interface ILateralContainerColList {
  id: string;
  span: number;
  moduleList: IModule[];
}

// 页面模块
export interface IPageData {
  modules: IModule[];
  [key: string]: any;
}
