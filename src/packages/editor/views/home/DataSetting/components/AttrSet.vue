<template>
  <div class="attr-set">
    <el-form :model="form" label-width="100px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AttrSetting",
  setup() {
    const form = {};
    return {
      form,
    };
  },
});
</script>

<style scoped lang="scss">
.attr-set {
}
</style>
