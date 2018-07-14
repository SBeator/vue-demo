<template>
  <h1>{{pageName}}</h1>
</template>
<script>
export default {
  computed: {
    pageName() {
      return this.$route.name
    }
  }
}
</script>
