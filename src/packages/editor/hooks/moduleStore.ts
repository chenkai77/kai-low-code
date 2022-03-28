/*
 * @Author: depp.chen
 * @Date: 2022-03-23 18:11:10
 * @Description: 激活模块
 */
import { computed } from "vue";
import useModuleStore from "@editor/store/module";

export function getModuleStoreData() {
  const moduleStore = useModuleStore();

  // 当前激活页面的激活模块
  const pageActiveModule = computed(() => moduleStore.pageActiveModule);
  // 当前激活的页面路由
  const activePageRoute = computed(() => moduleStore.activePageRoute);
  // 页面集合
  const pageList = computed(() => moduleStore.pageList);

  return {
    pageList,
    activePageRoute,
    pageActiveModule,
  };
}
