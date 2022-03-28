/*
 * @Author: depp.chen
 * @Date: 2022-03-25 17:47:06
 * @Description: 模块数据
 */
import basicModuleObj from "@src/components/module/basicModule/index";
import containerModuleObj from "@src/components/module/containerModule/index";

export { basicPartList } from "@src/components/module/basicModule/index";
export { containerPartList } from "@src/components/module/containerModule/index";

export const moduleObj = { ...basicModuleObj, ...containerModuleObj };
