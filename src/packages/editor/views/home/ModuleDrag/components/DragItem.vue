<!--
 * @Author: depp.chen
 * @Date: 2022-03-23 15:29:08
 * @Description: 单个拖拽项
-->
<template>
  <div class="drag-item">
    <i class="iconfont" :class="icon"></i>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'

export default defineComponent({
  name: 'DragItem',
  components: {},
  props: {
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
  setup() {
    return {
    }
  }
})
</script>


<style scoped lang="scss">
.drag-item {
  border: 1px solid #e3e6eb;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 0 8px;
  cursor: move;
  display: flex;
  align-items: center;
  height: 36px;
  &:hover {
    border-color: $color-primary;
  }
  .iconfont {
    margin-right: 8px;
    font-size: 16px;
  }
  .label {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.9);
  }
}
</style>