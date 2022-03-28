<!--
 * @Author: depp.chen
 * @Date: 2022-03-25 17:16:31
 * @Description: 容器组件
-->
<template>
  <van-row class="lateral-container">
    <van-col v-for="item in colList" :key="item.id" :span="item.span">
      <ModuleDraggable v-model="item.moduleList">
        <div v-if="!item.moduleList.length">拖拽组件到此处</div>
      </ModuleDraggable>
    </van-col>
  </van-row>
</template>

<script lang="ts">
import Draggable from "vuedraggable";
import { defineComponent, ref, PropType } from "vue";
import { ILateralContainerColList } from "@src/types/module.d";
import ModuleDraggable from "@src/components/common/ModuleDraggable.vue";

export default defineComponent({
  name: "WrapperContainer",
  components: {
    Draggable,
    ModuleDraggable,
  },
  keyInfo: {
    label: "横向布局",
    icon: "icon-img",
  },
  props: {
    colList: {
      type: Array as PropType<ILateralContainerColList[]>,
      default: () => [
        { id: "1", moduleList: [], span: 12 },
        { id: "2", moduleList: [], span: 12 },
      ],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.lateral-container {
  height: 100px;
}
</style>
