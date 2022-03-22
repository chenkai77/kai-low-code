<!--
 * @Author: depp.chen
 * @Date: 2022-03-10 15:26:25
 * @Description: 图片组件
-->
<template>
  <div class="image-component">
    <img :src="src" class="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'image',
  props: {
    src: {
      type: String,
      default: 'https://chenkai.xyz/xkg/images/banner3.png'
    }
  },
  setup() {

    return {
    }
  }
})
</script>


<style scoped lang="scss">
.image-component {
  .image {
    width: 200px;
  }
}
</style>
