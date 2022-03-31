/*
 * @Author: depp.chen
 * @Date: 2022-03-31 10:23:55
 * @Description: 模块导入
 */
import basicModuleObj from "@src/components/module/basicModule/index";
import containerModuleObj from "@preview/components/module/containerModule/index";

export const moduleObj = { ...basicModuleObj, ...containerModuleObj };
