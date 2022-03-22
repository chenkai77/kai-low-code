<!--
 * @Author: depp.chen
 * @Date: 2022-03-09 14:39:10
 * @Description: 主页
-->
<template>
  <div class="home-wrapper">
    <ComponentsDrag />
    <div class="center-box">
      <Draggable
        v-model="componentsList"
        tag="transition-group"
        item-key="value"
        :component-data="{
          tag: 'div',
          type: 'transition-group',
          name: 'flip-list'
        }"
        :group="{ name: 'components', pull: 'clone', put: true }"
        class="center-box-drag"
        @Change="dragChange"
        @clone="dragClone"
      >
        <template #item="{ element }">
          <div class="component-item">{{ element.value }}</div>
        </template>
      </Draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Draggable from 'vuedraggable';
import ComponentsDrag from '@/views/home/ComponentsDrag/index.vue'
export default defineComponent({
  name: 'home',
  components: {
    ComponentsDrag,
    Draggable
  },
  setup() {
    const componentsList = ref([{ value: 555 }, { value: 444 }])
    function dragChange(val: any) {
      console.log(val)
    }
    function dragClone(val: any) {
      console.log(val)
    }
    return {
      dragClone,
      dragChange,
      componentsList
    }
  }
})
</script>


<style scoped lang="scss">
.home-wrapper {
  height: 100vh;
  width: 100vw;
  padding: 0 300px 0 300px;
  background: #f5f5f5;
  .center-box {
    position: absolute;
    left: 700px;
    top: 100px;
    width: 375px;
    height: 667px;
    background: #fff;
    box-shadow: 2px 0 10px rgb(0 0 0 / 20%);
    .center-box-drag {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
