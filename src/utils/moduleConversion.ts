/**
 * @description: 获取模块对象
 * @author: depp.chen
 * @param moduleObj : 模块对象
 */
export function moduleObjConversion(
  modules: Record<string, any>,
  prefix: string
) {
  let moduleObj: Record<string, any> = {};
  Object.keys(modules).forEach((key) => {
    const name = prefix + modules[key].default.name;
    moduleObj[name] = { ...modules[key].default, name };
  });
  return moduleObj;
}

/**
 * @description: 获取模块列表
 * @author: depp.chen
 * @param moduleObj : 模块对象
 */
export function moduleListConversion(moduleObj: Record<string, any>) {
  return Object.keys(moduleObj).map((e) => {
    let propsValue: Record<string, any> = {};
    Object.keys(moduleObj[e].props).forEach((key) => {
      // moduleObj[e].props[key].formValue = moduleObj[e].props[key].default;
      propsValue[key] = moduleObj[e].props[key].default;
      moduleObj[e].props[key].propsKey = key;
    });
    return {
      ...moduleObj[e].keyInfo,
      name: moduleObj[e].name,
      props: {
        ...moduleObj[e].props,
      },
      propsValue,
    };
  });
}
