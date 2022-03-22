<!--
 * @Author: depp.chen
 * @Date: 2022-03-09 14:46:36
 * @Description: 左边组件拖拽区
-->
<template>
  <div class="components-drag">
    <Draggable
      v-model="arr"
      item-key="value"
      :sort="false"
      :group="{ name: 'components', pull: 'clone', put: false }"
    >
      <template #item="{ element }">
        <div class="component-item">{{ element.value }}</div>
      </template>
    </Draggable>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'
import Draggable from 'vuedraggable';
export default defineComponent({
  name: 'ComponentsDrag',
  components: {
    Draggable
  },
  setup() {
    const arr = [{ value: '111111111111111111' }, { value: '2222222222222222222' }, { value: '33333333333333333' }, { value: '44444444444444444444' }]
    return {
      arr
    }
  }
})
</script>


<style scoped lang="scss">
.components-drag {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  border-right: 1px solid #eee;
  background: #fff;
  padding: 8px;
  box-sizing: border-box;
  .component-item {
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 8px;
    cursor: move;
  }
}
</style>