/*
 * @Author: depp.chen
 * @Date: 2022-03-25 17:54:38
 * @Description: 容器
 */
const modules = import.meta.globEager("./*/index.vue");

let moduleObj: Record<string, any> = {};

Object.keys(modules).forEach((key) => {
  const name = "container_" + modules[key].default.name;
  moduleObj[name] = { ...modules[key].default, name };
});

// 基础模块列表
export const containerPartList = Object.keys(moduleObj).map((e) => {
  Object.keys(moduleObj[e].props).forEach((key) => {
    moduleObj[e].props[key].formValue = moduleObj[e].props[key].default;
    moduleObj[e].props[key].propsKey = key;
  });
  return {
    ...moduleObj[e].key,
    name: moduleObj[e].name,
    props: {
      ...moduleObj[e].props,
    },
  };
});

// 基础模块映射
export default moduleObj;
