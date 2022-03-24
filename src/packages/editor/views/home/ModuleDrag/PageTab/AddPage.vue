<!--
 * @Author: depp.chen
 * @Date: 2022-03-24 10:26:03
 * @Description: 新增页面弹窗
-->
<template>
  <el-dialog
    :model-value="visible"
    title="新增页面"
    width="400px"
    :before-close="close"
  >
    <el-form :model="form" label-width="50px">
      <el-form-item label="名称">
        <el-input v-model="form.label" />
      </el-form-item>
      <el-form-item label="路由">
        <el-input v-model="form.route" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="addPage">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import useModuleStore from "@editor/store/module";

export default defineComponent({
  name: "AddPage",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  emits: ["update:visible"],
  setup(props, { emit }) {
    const moduleStore = useModuleStore();

    const form = reactive({
      route: "",
      label: "",
    });

    function addPage() {
      let page = {
        route: form.route,
        label: form.label,
      };
      moduleStore.addPage(page);
      close();
    }

    function close() {
      emit("update:visible", false);
    }

    return {
      form,
      close,
      addPage,
    };
  },
});
</script>

<style scoped lang="scss">
.page-tab {
  .page-list {
    .page-item {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      cursor: pointer;
      .iconfont {
        margin-right: 16px;
      }
    }
  }
}
</style>
