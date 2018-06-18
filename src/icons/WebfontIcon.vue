<template>
  <i class="webfont" :class="className" :style="style"></i>
</template>
<script>
export default {
  props: {
    type: String,
    size: Number,
    color: String
  },
  computed: {
    className() {
      return `webfont-${this.type}`
    },
    style() {
      return {
        color: this.color ? this.color : 'inherit',
        fontSize: this.size ? `${this.size}px` : 'inherit'
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import './fonts/webfont.css';
.webfont {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 12%);
}
</style>
