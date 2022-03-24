/*
 * @Author: depp.chen
 * @Date: 2022-03-22 10:44:47
 * @Description: 模块store
 */
import { defineStore } from "pinia";
import { IModule } from "@src/types/module.d";

const useModuleStore = defineStore("module", {
  state: () => ({
    // 页面集合
    pageList: [{ route: "/", label: "首页" }] as IPage[],
    // 激活的页面
    activePageRoute: "/",
    // 所有页面的模块数据
    allPageData: {
      "/": [],
    } as Record<string, any>,
    // 当前激活页面的激活模块
    pageActiveModule: {} as IModule,
  }),

  actions: {
    /**
     * @description: 新增页面
     * @author: depp.chen
     */
    addPage(page: IPage) {
      this.pageList.push(page);
      this.allPageData[page.label] = [];
    },

    /**
     * @description: 修改激活页面
     * @author: depp.chen
     */
    changeActivePageRoute(pageRoute: string) {
      this.activePageRoute = pageRoute;
    },

    /**
     * @description: 获取页面激活模块
     * @author: depp.chen
     */
    getPageActiveModule(index: number) {
      return this.allPageData[this.activePageRoute][index];
    },

    /**
     * @description: 修改当前激活页面的激活模块
     * @author: depp.chen
     */
    changePageActiveModule(module: IModule) {
      this.pageActiveModule = module;
    },
  },
});

export default useModuleStore;
