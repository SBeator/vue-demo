<template>
  <AwesomeIcon v-if="isCustomized" :name="type" :scale="scale" :style="colorStyle" ref="icon"></AwesomeIcon>
  <IViewIcon v-else :type="type" :size="size" :color="color"></IViewIcon>
</template>
<script>
import AwesomeIcon from 'vue-awesome/components/Icon'
import { Icon as IViewIcon } from 'iview'

const DEFAULT_SIZE = 16

export default {
  props: {
    type: String,
    size: Number,
    color: String
  },
  components: {
    AwesomeIcon,
    IViewIcon
  },
  data() {
    return {
      fontSize: DEFAULT_SIZE,
      scale: 1
    }
  },
  mounted() {
    if (this.isCustomized) {
      const fontSize =
        parseInt(window.getComputedStyle(this.$refs.icon.$el).fontSize) ||
        DEFAULT_SIZE

      const size = this.size ? this.size : fontSize

      this.scale = size / DEFAULT_SIZE
    }
  },
  computed: {
    isCustomized() {
      return this.type in AwesomeIcon.icons
    },
    colorStyle() {
      return this.color ? `color: ${this.color}` : 'inherit'
    }
  }
}
</script>
