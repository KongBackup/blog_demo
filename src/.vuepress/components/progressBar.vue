<template>
  <div class="hair-salon-bar-container" :style="{width: width}">
        <div class="bar" :style="{width: progressWidth + '%', background: bgColor + '99'}">
          <div class="color" :style="{background:`repeating-linear-gradient(45deg, ${bgColor}, ${bgColor} 10px, transparent 11px, transparent 19px, ${bgColor} 20px) no-repeat 0 0`}"></div>
          <div class="present-wrap">
            <div class="cir1" :style="{borderColor: bgColor}">
              <div class="cir2" :style="{background: bgColor}">{{progressWidth + '%'}}</div>
            </div>
            <div class="after" :style="{borderTopColor: bgColor}"></div>
          </div>
        </div>
      </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    progressWidth: {
      type: Number,
      default: 0
    },
    width: {
      type: String,
      default: '100%'
    },
    bgColor: {
      type: String,
      default: '#ff3388'
    }
  }
})
</script>
<style lang="scss" scope >
.hair-salon-bar-container{
  background-color: rgb(232, 232, 232);
  border-radius: 20px;
  text-align: left;
  height: 20px;
}
.present-wrap{
  display: inline-block;
  position: absolute;
  top: -70px;
  right: -20px;
  text-align: center;
  .cir1{
    border: 2px solid;
    border-radius: 50%;
    .cir2{
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      color: #fff;
      margin: 2px;
    }
  }
  .after{
    position: relative;
    display: inline-block;
    top: 1px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 10px solid;
    }
}
.bar {
  position: relative;
  display: inline-block;
  border-radius: 20px;
  height: 20px;
  transition: width 2s;
  .color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
}
</style>