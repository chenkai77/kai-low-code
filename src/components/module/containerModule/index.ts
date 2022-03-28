/*
 * @Author: depp.chen
 * @Date: 2022-03-25 17:54:38
 * @Description: 容器
 */
const modules = import.meta.globEager("./*/index.vue");
import {
  moduleObjConversion,
  moduleListConversion,
} from "@src/utils/moduleConversion";

let moduleObj: Record<string, any> = moduleObjConversion(modules, "container_");

// 容器模块列表
export const containerPartList = moduleListConversion(moduleObj);

// 容器模块映射
export default moduleObj;
