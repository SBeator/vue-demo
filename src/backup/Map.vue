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
      map: null,
      shouldShowGridAreas: false,
      gridAreasOverlayGroup: null,
      areaRectsMap: []
    }
  },
  mounted() {
    this.map = new AMap.Map('mapContainer', {
      resizeEnable: true,
      zoom: 13
    })

    this.map.on('moveend', this.redrawOverlay)
    this.map.on('zoomend', this.redrawOverlay)
  },
  methods: {
    async showChengdu() {
      const result = await this.$store.dispatch('map/loadGridArea')
      if (result.success) {
        this.shouldShowGridAreas = true
        this.showGridAreas()
      }
    },

    redrawOverlay() {
      if (this.shouldShowGridAreas) {
        this.showGridAreas()
      }
    },

    showGridAreas() {
      if (this.gridAreasOverlayGroup) {
        this.map.remove(this.gridAreasOverlayGroup)
        this.gridAreasOverlayGroup = null
      }

      if (this.map.getZoom() >= 11) {
        const mapBound = this.map.getBounds()

        const areaRectsMap = []

        this.areaRectsMap.forEach(rectMap => {
          if (mapBound.contains(rectMap.rect.getBounds().getCenter())) {
            areaRectsMap.push(rectMap)
          } else {
            this.map.remove(rectMap.rect)
          }
        })

        const newAreaRects = this.$store.state.map.gridArea
          .filter(area => {
            return (
              (!areaRectsMap.length ||
                !areaRectsMap.filter(rectMap => rectMap.code === area.code)
                  .length) &&
              (mapBound.contains([area.leftLng, area.underLat]) ||
                mapBound.contains([area.rightLng, area.underLat]) ||
                mapBound.contains([area.leftLng, area.uponLat]) ||
                mapBound.contains([area.rightLng, area.uponLat]))
            )
          })
          .map(area => {
            return {
              code: area.code,
              rect: new AMap.Rectangle({
                bounds: new AMap.Bounds(
                  [area.leftLng, area.underLat],
                  [area.rightLng, area.uponLat]
                ),
                strokeColor: '#3b3eac', // 线颜色
                strokeOpacity: 0.3, // 线透明度
                strokeWeight: 1, // 线宽
                fillColor: '#3366cc', // 填充色
                fillOpacity: 0.4 // 填充透明度
              })
            }
          })

        this.areaRectsMap = [...areaRectsMap, ...newAreaRects]

        this.areaRectsMap.forEach(rectMap => {
          this.map.add(rectMap.rect)
        })
      } else {
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
