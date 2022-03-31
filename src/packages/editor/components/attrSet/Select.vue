<!--
 * @Author: depp.chen
 * @Date: 2022-03-30 17:32:13
 * @Description: 下拉选择框
-->
<template>
  <div>
    <el-select
      :model-value="modelValue"
      @change="(val) => $emit('update:modelValue', val)"
      placeholder="下拉选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, PropType } from "vue";

export default defineComponent({
  name: "Select",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array as PropType<{ label: string; value: any }[]>,
      default: () => [],
    },
  },
  emits: ["update:modelValue"],
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
