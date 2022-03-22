<!--
 * @Author: depp.chen
 * @Date: 2022-03-10 15:26:25
 * @Description: 文本组件
-->
<template>
  <div class="text-component">{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'text',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
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
