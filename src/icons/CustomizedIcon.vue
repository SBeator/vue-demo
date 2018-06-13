<template>
  <AwesomeIcon :name="type" :scale="scale" :style="colorStyle"></AwesomeIcon>
</template>
<script>
import AwesomeIcon from 'vue-awesome/components/Icon'

const DEFAULT_SIZE = 16

export default {
  props: {
    type: String,
    size: Number,
    color: String
  },
  components: {
    AwesomeIcon
  },
  computed: {
    scale() {
      return this.size ? this.size / DEFAULT_SIZE : 1
    },
    colorStyle() {
      return this.color ? `color: ${this.color}` : 'inherit'
    }
  }
}
</script>
