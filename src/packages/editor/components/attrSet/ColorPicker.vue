<!--
 * @Author: depp.chen
 * @Date: 2022-03-30 17:04:11
 * @Description: 颜色选择
-->
<template>
  <div class="color-picker">
    <el-color-picker
      :model-value="modelValue"
      show-alpha
      @change="(val:number) => $emit('update:modelValue', val)"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "ColorPicker",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.color-picker {
  display: flex;
  justify-content: flex-start;
}
</style>
