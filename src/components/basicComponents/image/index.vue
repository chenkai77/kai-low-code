<!--
 * @Author: depp.chen
 * @Date: 2022-03-10 15:26:25
 * @Description: 图片组件
-->
<template>
  <div class="image-component">
    <img :src="src" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'text',
  props: {
    src: {
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
