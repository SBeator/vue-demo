<template>
  <div>
    <h1>{{pageName}}</h1>
    <p v-for="key in Object.keys(queries)" :key="key">
      {{key}}: {{queries[key]}}
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    pageName() {
      return this.$route.name
    },
    queries() {
      return this.$route.query
    }
  }
}
</script>
