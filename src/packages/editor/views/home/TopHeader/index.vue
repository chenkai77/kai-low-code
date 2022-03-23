<!--
 * @Author: depp.chen
 * @Date: 2022-03-23 15:04:04
 * @Description: 顶部栏
-->
<template>
  <div class="top-header"></div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'

export default defineComponent({
  name: 'ModuleDrag',
  components: {},
  setup() { }
})
</script>


<style scoped lang="scss">
.top-header {
  height: 48px;
  border-bottom: 1px solid #eee;
  background: #fff;
  margin-top: -48px;
}
</style>