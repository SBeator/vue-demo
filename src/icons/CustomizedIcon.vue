<template>
  <div>
    <AwesomeIcon :name="type" :scale="scale"></AwesomeIcon>
  </div>
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
    }
  }
}
</script>
