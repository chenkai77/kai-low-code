/*
 * @Author: depp.chen
 * @Date: 2022-03-22 10:44:47
 * @Description: 模块store
 */
import { defineStore } from "pinia";
import { IModule } from "@src/types/module.d";
import { ElMessageBox, ElMessage } from "element-plus";
import "element-plus/es/components/message-box/style/css";

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
    changePageActiveModule(module: IModule | {}) {
      this.pageActiveModule = module as IModule;
    },

    /**
     * @description: 删除激活页面指定模块
     * @author: depp.chen
     */
    deleteModule() {
      if (!this.pageActiveModule.key) {
        return;
      }
      ElMessageBox.confirm("确定删除该模块吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let list = this.allPageData[this.activePageRoute];
          let targetIndex = list.findIndex(
            (e: IModule) => e.key === this.pageActiveModule.key
          );
          if (targetIndex > -1) {
            list.splice(targetIndex, 1);
            ElMessage({
              type: "success",
              message: "删除成功",
            });
          }
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "已取消",
          });
        });
    },
  },
});

export default useModuleStore;
