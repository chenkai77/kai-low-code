<!--
 * @Author: depp.chen
 * @Date: 2022-03-09 14:39:10
 * @Description: 主页
-->
<template>
  <div class="home-wrapper">
    <ModuleDrag />
    <div class="center-box">
      <Draggable
        v-model="pageModuleList"
        item-key="name"
        :group="{ name: 'modules', put: true }"
        class="center-box-drag"
        ghostClass="ghost"
        @Change="dragChange"
        @clone="dragClone"
      >
        <template #item="{ element }">
          <div>
            <ModuleRender :module-date="element"></ModuleRender>
          </div>
        </template>
      </Draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Draggable from 'vuedraggable';
import ModuleDrag from '@/views/home/ModuleDrag/index.vue'
import ModuleRender from '@/components/common/ModuleRender.vue';

export default defineComponent({
  name: 'home',
  components: {
    ModuleDrag,
    Draggable,
    ModuleRender
  },
  setup() {
    const pageModuleList = ref([])
    function dragChange(val: any) {
      console.log(val, pageModuleList.value)
    }
    function dragClone(val: any) {
      console.log(val)
    }
    return {
      dragClone,
      dragChange,
      pageModuleList
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
  .ghost {
    background: #ffeaa7;
  }
}
</style>
