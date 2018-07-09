<template>
  <div class="container">
    <div class="map" id="mapContainer"></div>
    <button @click="showChengdu">成都</button>
  </div>
</template>
<script>
import AMap from 'AMap'

export default {
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.map = new AMap.Map('mapContainer', {
      resizeEnable: true,
      zoom: 12
    })
  },
  methods: {
    async showChengdu() {
      const result = await this.$store.dispatch('map/loadGridArea')
      if (result.success) {
        const rects = this.$store.state.map.gridArea.map(area => {
          return new AMap.Rectangle({
            bounds: new AMap.Bounds(
              [area.leftLng, area.underLat],
              [area.rightLng, area.uponLat]
            )
          })
        })

        var overlayGroup = new AMap.OverlayGroup(rects)

        this.$nextTick(() => {
          this.map.add(overlayGroup)
        })

        const firstArea = this.$store.state.map.gridArea[0]

        this.map.setCenter([firstArea.leftLng, firstArea.underLat])
      }
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
.map {
  width: 100%;
  height: 70%;
}
</style>
