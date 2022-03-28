/*
 * @Author: depp.chen
 * @Date: 2022-03-28 10:04:19
 * @Description: 组件 v-model hooks
 */
import { ref, watch } from "vue";

export function comVModelHook<P extends object, K extends keyof P>(
  props: P,
  key: K,
  emit: any
) {
  const res = ref<any>(props[key]);

  watch(
    () => props[key],
    (v) => {
      res.value = v;
    }
  );

  watch(
    res,
    (v) => {
      if (v !== props[key]) {
        emit(`update:${key}`, v);
      }
    },
    { deep: false }
  );

  return res;
}
