/*
 * @Author: depp.chen
 * @Date: 2022-03-28 10:34:21
 * @Description: 拖拽hooks
 */
import useModuleStore from "@editor/store/module";

export function dragHooks() {
  // moduleStore
  const moduleStore = useModuleStore();

  /**
   * @description: 拖动改变时
   * @author: depp.chen
   */
  function dragChange(val: any) {
    // 新增时
    if (val.added) {
      val.added.element.key = Symbol();
      moduleStore.changePageActiveModule(val.added.element);
    }
  }

  return {
    dragChange,
  };
}
