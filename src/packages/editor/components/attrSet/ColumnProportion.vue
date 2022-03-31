<!--
 * @Author: depp.chen
 * @Date: 2022-03-29 15:32:39
 * @Description: 列比例
-->
<template>
  <div class="column-proportion">
    <div class="square-list">
      <div
        v-for="(item, i) in squareList"
        class="square-item"
        :key="item.id"
        :class="{
          active: item.active,
        }"
        @click="selectStart(i)"
        @mousemove="selectMove(i)"
      >
        <i v-if="!item.active" class="iconfont icon-tianjia"></i>
      </div>
    </div>
    <div
      v-for="(item, i) in modelValue"
      :key="item.value[0]"
      class="select-item"
      :style="calculateStyle(item.value)"
    >
      {{ item.value[1] - item.value[0] + 1 }}
      <i class="iconfont icon-shanchu" @click="selectDelete(i)"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from "vue";
import { throttle } from "@src/utils/throttleDebounce";
import { ILateralContainerColList } from "@src/types/module.d";

export default defineComponent({
  name: "ColumnProportion",
  props: {
    modelValue: {
      type: Array as PropType<ILateralContainerColList[]>,
      default: [],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // 选择区块
    const squareList = ref([
      { id: "1", active: false },
      { id: "2", active: false },
      { id: "3", active: false },
      { id: "4", active: false },
      { id: "5", active: false },
      { id: "6", active: false },
      { id: "7", active: false },
      { id: "8", active: false },
      { id: "9", active: false },
      { id: "10", active: false },
      { id: "11", active: false },
      { id: "12", active: false },
    ]);
    // 选择的序号列表
    // const selectList = comVModelHook(props, "modelValue", emit);
    // 开始选择的索引
    const startIndex = ref(-1);

    /**
     * @description: 方块点击
     * @author: depp.chen
     */
    function squareClick(item: { active: boolean }) {
      item.active = !item.active;
    }

    /**
     * @description: 鼠标按下，开始选择事件
     * @author: depp.chen
     */
    function selectStart(index: number) {
      if (startIndex.value !== -1) {
        let arr = [startIndex.value, index].sort((a, b) => a - b);
        props.modelValue.push({ moduleList: [], value: arr });
        startIndex.value = -1;
        squareList.value.forEach((e) => {
          e.active = false;
        });
        return;
      }
      startIndex.value = index;
    }

    /**
     * @description: 选择开始后，鼠标移动事件，用于节流函数参数
     * @author: depp.chen
     */
    function throttleSelectFn(index: number) {
      let interval: number[] = [startIndex.value, index].sort((a, b) => a - b);
      squareList.value.forEach((e, i) => {
        if (i >= interval[0] && i <= interval[1]) {
          e.active = true;
        } else {
          e.active = false;
        }
      });
    }

    // 获取节流函数
    const throttleSelectMove = throttle(throttleSelectFn, 60);

    /**
     * @description: 选择开始后，鼠标移动事件
     * @author: depp.chen
     */
    function selectMove(index: number) {
      if (startIndex.value !== -1) {
        throttleSelectMove(index);
      }
    }

    /**
     * @description: 删除选择
     * @author: depp.chen
     */
    function selectDelete(i: number) {
      props.modelValue.splice(i, 1);
    }

    /**
     * @description: 样式计算
     * @author: depp.chen
     */
    function calculateStyle(item: number[]) {
      return {
        left: 30 * item[0] + "px",
        width: 30 * (item[1] - item[0] + 1) + "px",
      };
    }

    return {
      squareList,
      // selectList,
      selectMove,
      selectStart,
      selectDelete,
      squareClick,
      calculateStyle,
    };
  },
});
</script>

<style scoped lang="scss">
.column-proportion {
  width: 357px;
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .square-list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
  }
  .square-item {
    width: 30px;
    height: 30px;
    border: 1px solid #e5e5e5;
    cursor: pointer;
    line-height: 30px;
    text-align: center;
    background: #f8f8f8;
    border-right: none;
    .icon-tianjia {
      font-size: 12px;
      color: #999;
    }
    &:nth-last-child(1) {
      border-right: 1px solid #e5e5e5;
    }
    &.active {
      background: rgba(0, 205, 150, 0.7);
    }
  }
  .select-item {
    position: absolute;
    top: 0;
    height: 30px;
    border: 1px solid $color-primary;
    background: rgba(182, 233, 219);
    color: $color-primary;
    text-align: center;
    line-height: 30px;
    &:hover {
      .icon-shanchu {
        display: block;
        z-index: 2;
      }
    }
    .icon-shanchu {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -100%);
      height: 16px;
      background: #fff;
      cursor: pointer;
      color: $color-danger;
      display: none;
    }
  }
}
</style>
