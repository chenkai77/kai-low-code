<!--
 * @Author: depp.chen
 * @Date: 2022-03-10 15:26:25
 * @Description: 图片组件
-->
<template>
  <div class="button-component">
    <van-button type="primary">按钮</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'button',
  key: {
    label: '按钮',
    icon: 'icon-img'
  },
  props: {},
  setup() {
    return {
    }
  }
})
</script>


<style scoped lang="scss">
.text-wrapper {
}
</style>
