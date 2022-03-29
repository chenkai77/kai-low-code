/*
 * @Author: depp.chen
 * @Date: 2022-03-29 16:39:20
 * @Description: 节流和防抖
 */

// 节流
export function throttle(fn: any, delay: number) {
  let timeId: NodeJS.Timer | null = null;
  return function (...params: any) {
    if (timeId) {
      return;
    } else {
      timeId = setTimeout(() => {
        fn(...params);
        timeId = null;
      }, delay);
    }
  };
}
