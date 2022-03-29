<!--
 * @Author: depp.chen
 * @Date: 2022-03-28 17:21:45
 * @Description: 数字输入框
-->
<template>
  <el-input-number
    :model-value="modelValue"
    @change="(val:number) => $emit('update:modelValue', val)"
    :step="2"
  />
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "NumInput",
  props: {
    modelValue: {
      type: Number,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
