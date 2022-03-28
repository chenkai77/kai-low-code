/*
 * @Author: depp.chen
 * @Date: 2022-03-09 15:03:01
 * @Description: 深拷贝
 */
export function cloneLoop<T extends object = Record<string, any>>(
  x: Record<string, any>
) {
  const root: T = Object.create(null);

  // 栈
  const loopList: {
    parent: Record<string, any>;
    key: undefined | string;
    data: Record<string, any>;
    isArray: boolean;
  }[] = [
    {
      parent: root,
      key: undefined,
      data: x,
      isArray: false,
    },
  ];

  while (loopList.length) {
    // 深度优先
    const node = loopList.pop();
    const parent = node!.parent;
    const key = node!.key;
    const data = node!.data;
    const isArray = node?.isArray;

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== "undefined") {
      res = parent[key] = isArray ? [] : {};
    }

    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === "object") {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
            isArray:
              Object.prototype.toString.call(data[k]) === "[object Array]",
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }

  return root;
}
