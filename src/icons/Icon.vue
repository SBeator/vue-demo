<template>
  <WebfontIcon v-if="isCustomized" :type="type" :size="size" :color="color"></WebfontIcon>
  <IViewIcon v-else :type="type" :size="size" :color="color"></IViewIcon>
</template>
<script>
import WebfontIcon from './WebfontIcon.vue'
import { Icon as IViewIcon } from 'iview'

export default {
  props: {
    type: String,
    size: Number,
    color: String
  },
  components: {
    WebfontIcon,
    IViewIcon
  },
  computed: {
    isCustomized() {
      return this.type === 'new-draw'
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
