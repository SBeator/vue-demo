<template>
  <div class="map" id="mapContainer"></div>
</template>
<script>
export default {
  mounted() {
    // eslint-disable-next-line
    new AMap.Map('mapContainer')
  }
}
</script>
<style lang="less" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
