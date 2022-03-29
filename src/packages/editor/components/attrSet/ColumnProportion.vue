<!--
 * @Author: depp.chen
 * @Date: 2022-03-29 15:32:39
 * @Description: 列比例
-->
<template>
  <div
    :draggable="false"
    ref="columnProportionRef"
    class="column-proportion"
    @mousedown="selectStart($event)"
  >
    <div
      v-for="(item, i) in squareList"
      class="square-item"
      :class="{
        active: item.active,
        select: selectIndexList.indexOf(i) > -1,
        'start-active': !squareList[i - 1] || !squareList[i - 1].active,
        'end-active': !squareList[i + 1] || !squareList[i + 1].active,
      }"
      @click="squareClick(item)"
    ></div>
    <div class="select-area" ref="selectAreaRef" :style="selectAreaStyle"></div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watch,
  nextTick,
} from "vue";
import { throttle } from "@src/utils/throttleDebounce";

export default defineComponent({
  name: "ColumnProportion",
  props: {
    modelValue: {
      type: Array,
      default: [],
    },
  },
  emits: ["update:modelValue"],
  setup() {
    // 外层元素
    const columnProportionRef = ref();
    // 选择框元素
    const selectAreaRef = ref();
    // 选择区块
    const squareList = ref([
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
    ]);
    // 选择的序号列表
    const selectIndexList = ref<number[]>([]);

    // 是否开始选择
    const selectIsStart = ref(false);

    // 鼠标按下后确定的初始值
    const initialCoordinates = ref({
      initialPositionX: 0,
      initialPositionY: 0,
      initialPageX: 0,
      initialPageY: 0,
      selectMaxWidth: 0,
      selectMaxHeight: 0,
    });

    // 选择框类型
    const selectAreaStyle = ref({
      top: "auto",
      left: "auto",
      right: "auto",
      bottom: "auto",
      width: "0",
      height: "0",
    });

    /**
     * @description: 鼠标按下，开始选择事件
     * @author: depp.chen
     */
    function selectStart(e: MouseEvent) {
      selectIsStart.value = true;
      initialCoordinates.value.initialPositionX = e.offsetX;
      initialCoordinates.value.initialPositionY = e.offsetY;
      initialCoordinates.value.initialPageX = e.pageX;
      initialCoordinates.value.initialPageY = e.pageY;
      initialCoordinates.value.selectMaxWidth = e.pageY;
      initialCoordinates.value.selectMaxHeight = e.pageY;
    }

    function squareIncludedCalculate() {
      let squareList = document.querySelectorAll(
        ".column-proportion .square-item"
      );
      let top = selectAreaRef.value.offsetTop;
      let left = selectAreaRef.value.offsetLeft;
      let width = selectAreaRef.value.offsetWidth;
      let height = selectAreaRef.value.offsetHeight;
      let arr: number[] = [];
      (squareList as unknown as HTMLDivElement[]).forEach(
        (e: HTMLDivElement, i) => {
          let squareTop = e.offsetTop;
          let squareLeft = e.offsetLeft;
          let squareWidth = e.offsetWidth;
          let squareHeight = e.offsetHeight;
          if (
            squareTop > top &&
            squareLeft > left &&
            squareLeft + squareWidth < left + width &&
            squareTop + squareHeight < top + height
          ) {
            arr.push(i);
          }
        }
      );
      selectIndexList.value = arr;
    }

    /**
     * @description: 选择开始后，鼠标移动事件，用于节流函数参数
     * @author: depp.chen
     */
    function throttleSelectFn(e: any) {
      // 防止突然隐藏
      if (!columnProportionRef.value.offsetWidth) {
        selectCancel();
      }
      let maxWidth = 0;
      let maxHeight = 0;
      if (e.pageX > initialCoordinates.value.initialPageX) {
        selectAreaStyle.value.left =
          initialCoordinates.value.initialPositionX + "px";
        selectAreaStyle.value.right = "auto";
        maxWidth =
          columnProportionRef.value.offsetWidth -
          initialCoordinates.value.initialPositionX;
      } else {
        selectAreaStyle.value.right =
          columnProportionRef.value.offsetWidth -
          initialCoordinates.value.initialPositionX +
          "px";
        selectAreaStyle.value.left = "auto";
        maxWidth = initialCoordinates.value.initialPositionX;
      }
      if (e.pageY > initialCoordinates.value.initialPageY) {
        selectAreaStyle.value.top =
          initialCoordinates.value.initialPositionY + "px";
        selectAreaStyle.value.bottom = "auto";
        maxHeight =
          columnProportionRef.value.offsetHeight -
          initialCoordinates.value.initialPositionY;
      } else {
        selectAreaStyle.value.bottom =
          columnProportionRef.value.offsetHeight -
          initialCoordinates.value.initialPositionY +
          "px";
        selectAreaStyle.value.top = "auto";
        maxHeight = initialCoordinates.value.initialPositionY;
      }
      let width = Math.abs(e.pageX - initialCoordinates.value.initialPageX);
      let height = Math.abs(e.pageY - initialCoordinates.value.initialPageY);
      selectAreaStyle.value.width =
        (width > maxWidth ? maxWidth : width) + "px";
      selectAreaStyle.value.height =
        (height > maxHeight ? maxHeight : height) + "px";
      nextTick(() => {
        squareIncludedCalculate();
      });
    }

    // 获取节流函数
    const throttleSelectMove = throttle(throttleSelectFn, 60);

    /**
     * @description: 选择开始后，鼠标移动事件
     * @author: depp.chen
     */
    function selectMove(e: any) {
      if (selectIsStart.value) {
        throttleSelectMove(e);
      }
    }

    /**
     * @description: 方块点击
     * @author: depp.chen
     */
    function squareClick(item: { active: boolean }) {
      item.active = !item.active;
    }

    onMounted(() => {
      document.addEventListener("mousemove", selectMove);
      document.addEventListener("mouseup", selectCancel);
    });

    onUnmounted(() => {
      document.removeEventListener("mousemove", selectMove);
      document.addEventListener("mouseup", selectCancel);
    });

    /**
     * @description: 选择取消
     * @author: depp.chen
     */
    function selectCancel() {
      if (selectIsStart.value) {
        selectIsStart.value = false;
        selectIndexList.value.forEach((e) => {
          squareList.value[e].active = true;
        });
        selectIndexList.value = [];
        selectAreaStyle.value.top = "auto";
        selectAreaStyle.value.left = "auto";
        selectAreaStyle.value.right = "auto";
        selectAreaStyle.value.bottom = "auto";
        selectAreaStyle.value.width = "0";
        selectAreaStyle.value.height = "0";
      }
    }

    return {
      selectIsStart,
      selectCancel,
      squareList,
      selectStart,
      squareClick,
      selectMove,
      selectAreaRef,
      columnProportionRef,
      selectAreaStyle,
      selectIndexList,
    };
  },
});
</script>

<style scoped lang="scss">
.column-proportion {
  width: 357px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border: 1px solid #999;
  border-radius: 4px;
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    border-color: $color-primary;
  }
  .square-item {
    width: 14px;
    height: 14px;
    border: 1px solid #666;
    margin-right: 6px;
    &.active {
      border-color: $color-primary;
      border-right: none;
      border-left: none;
      width: 20px;
      margin-right: 0;
      &.start-active {
        border-left: 1px solid $color-primary;
      }
      &.end-active {
        border-right: 1px solid $color-primary;
        width: 14px;
        margin-right: 6px;
      }
    }
    &.select {
      background: $bg-primary-shallow;
      border-color: $color-primary;
    }
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
  .select-area {
    position: absolute;
    background: $bg-primary-shallow;
  }
}
</style>
