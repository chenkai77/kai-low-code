/*
 * @Author: depp.chen
 * @Date: 2022-03-22 09:35:35
 * @Description: 导入所有组件
 */
const modules = import.meta.globEager("./*/index.vue");
const modulePreview = import.meta.globEager("./*/preview.vue");

let moduleObj: Record<string, any> = {};

Object.keys(modules).forEach((key) => {
  const name = "basic_" + modules[key].default.name;
  moduleObj[name] = { ...modules[key].default, name };
});

Object.keys(modulePreview).forEach((key) => {
  const keyName = "basic_" + modulePreview[key].default.key;
  moduleObj[keyName].preview = modulePreview[key].default;
});

export const moduleList = Object.keys(moduleObj).map((e) => {
  return moduleObj[e];
});

console.log(moduleList);

export default moduleObj;
