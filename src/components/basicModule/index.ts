/*
 * @Author: depp.chen
 * @Date: 2022-03-22 09:35:35
 * @Description: 导入所有组件
 */
const modules = import.meta.globEager("./*/index.vue");

let moduleObj: Record<string, any> = {};

Object.keys(modules).forEach((key) => {
  const name = "basic_" + modules[key].default.name;
  moduleObj[name] = { ...modules[key].default, name };
});

console.log(moduleObj);
// 基础模块列表
export const basicPartList = Object.keys(moduleObj).map((e) => {
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

//

console.log(moduleObj);
console.log(basicPartList);
